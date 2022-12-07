<template>
  <div class="blog">
    <img v-if="post.image" :src="post.image" class="blog__banner" />
    <div class="blog__heading">
      <h2>{{ post.title }}</h2>
      <small> {{ date(post.date) }}</small>
    </div>
    <nuxt-content class="blog__content" :document="post" />
  </div>
</template>

<script>
import dayjs from 'dayjs'
require('dayjs/locale/fr')
dayjs.locale('fr')

export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('articles', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
    }
  },
  methods: {
    date(date) {
      return dayjs(date).format('DD MMMM YYYY')
    },
  },
}
</script>

<style lang="scss">
.blog {
  max-width: 800px;
  margin: 0 auto;

  &__banner {
    max-width: 100%;
  }

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__content {
    img:nth-of-type(1) {
      float: right;
      max-width: 100%;
    }
  }
}
</style>
