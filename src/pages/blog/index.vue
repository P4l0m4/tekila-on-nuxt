<template>
  <main>
    <!-- <h1>Tekila Web Factory BLOG</h1> -->
    <section>
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="article-card"
      >
        <img
          v-if="article.image"
          :src="article.image"
          alt=""
          class="article-card__img"
        />
        <h1 class="article-card__title">
          {{ article.title }}
        </h1>

        <h2 class="article-card__description">
          {{ article.description }}
        </h2>
        <h3 class="article-card__date">{{ date(article.createdAt) }}</h3>
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
      flex-wrap: wrap;
    }
  }
  h1 {
    font-family: 'GoodTimes';
  }

  .article-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: clamp(100px, 100%, 450px);
    height: fit-content;
    border-radius: $radius;
    background-color: $primary-color-faded;
    gap: 24px;
    padding: $mobile-padding;

    &__img {
      max-height: 200px;
      object-fit: cover;
      border-radius: $radius;
    }
    &__title,
    &__description,
    &__date {
      text-decoration: none;
      color: $text-color;
    }
    &__title {
      font-size: 20px;
    }
    &__date {
      font-size: 12px;
      font-weight: $slim-weight;
      text-align: right;
    }
    &__description {
      font-weight: $slim-weight;
      font-size: 16px;
    }
  }
}
</style>
