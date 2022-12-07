<template>
  <main>
    <h1>BLOG</h1>
    <section>
      <router-link
        v-for="article in articles"
        :to="`/blog/${article.slug}`"
        class="article-card"
        :key="article.slug"
      >
        <img
          v-if="article.image"
          :src="article.image"
          alt=""
          class="article-card__img"
        />
        <h2 class="article-card__title">
          {{ article.title }} {{ date(article.createdAt) }}
        </h2>
        <h3 class="article-card__description">
          {{ article.description }}
        </h3>
      </router-link>
    </section>
  </main>
</template>
<script>
import dayjs from 'dayjs'
require('dayjs/locale/fr')
dayjs.locale('fr')

export default {
  async asyncData({ $content, params, error }) {
    let articles = []
    try {
      articles = await $content('articles').fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      articles,
    }
  },
  head() {
    return {
      title: '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: '',
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

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  padding: $mobile-padding;
  gap: $medium-gap;
  @media (min-width: $tablet-screen) {
    flex-direction: row;
    gap: $big-gap;
    padding: 0 128px;
  }
  section {
    display: flex;
    flex-direction: column;

    @media (min-width: $tablet-screen) {
      flex-direction: row;
      gap: $medium-gap;
    }
  }
  h1 {
    font-family: 'GoodTimes';
  }

  .article-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border-radius: $radius;
    background-color: $primary-color-faded;
    gap: 16px;
    padding: $mobile-padding;

    &__img {
      height: 50%;
      object-fit: cover;
      border-radius: $radius;
    }
    &__title,
    &__description {
      text-decoration: none;
      color: $text-color;
    }

    &__description {
      font-weight: $slim-weight;
    }
  }
}
</style>
