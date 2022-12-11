<template>
  <article class="blog">
    <div class="blog__banner">
      <img
        v-if="post.image"
        :src="post.image"
        class="blog__banner__img"
        alt="Tekila web factory article banner"
      />
      <div class="blog__banner__heading">
        <h2>{{ post.title }}</h2>
        <h3>{{ date(post.date) }}</h3>
      </div>
    </div>
    <nuxt-content class="blog__content" :document="post" />
  </article>
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
  width: clamp(100px, 100%, 1000px);
  margin: 0 auto;
  display: flex;
  gap: $medium-gap;
  flex-direction: column;

  &__banner {
    width: 100%;
    position: relative;
    &__img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;

      @media (min-width: $tablet-screen) {
        max-height: 400px;
      }
    }
    &__heading {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      position: absolute;
      inset: 0;
      margin: auto;
      padding: $mobile-padding;
      @media (min-width: $tablet-screen) {
        padding: $desktop-padding;
      }

      & h2 {
        font-size: 32px;
        height: 100%;
        display: flex;
        align-items: center;
        font-family: 'GoodTimes';
        text-align: center;
        padding: 16px;
      }
      & h3 {
        font-size: 12px;
        font-weight: $slim-weight;
        width: 100%;
        text-align: right;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $small-gap;

    img:nth-of-type(1) {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      @media (min-width: $tablet-screen) {
        max-height: 400px;
      }
    }
  }

  h1:nth-of-type(1) {
    display: none;
  }
  & .blog__content.h2 {
    font-weight: $medium-weight;
    font-size: 24px;
  }
  & p {
    font-weight: $slim-weight;
  }
}
</style>
