<template>
  <main>
    <!-- <h1>Tekila Web Factory BLOG</h1> -->
    <section>
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="article-card"
        ><div class="article-card__header">
          <img
            v-if="article.image"
            :src="article.image"
            alt="vignette article Tekila"
            class="article-card__header__img"
          />
          <div class="article-card__header__links">
            <a
              href="#"
              class="article-card__header__links__icon invisible-link"
              @click="share"
              ><img
                src="@/assets/icons/linkedin.svg"
                alt="share icon Tekila web factory"
              />
              <p class="copy-confirmation">Copié 🤍</p></a
            >
            <a
              href="#"
              class="article-card__header__links__icon invisible-link"
              @click="share"
              ><img
                src="@/assets/icons/facebook.svg"
                alt="share icon Tekila web factory"
            /></a>
            <a
              href="#"
              class="article-card__header__links__icon invisible-link"
              @click="share"
              ><img
                src="@/assets/icons/at.svg"
                alt="share icon Tekila web factory"
            /></a>
            <button class="changing-icon" @click="share">
              <!-- <img
                src="@/assets/icons/share-variant.svg"
                alt="share icon Tekila web factory"
              /> -->
            </button>
          </div>
        </div>
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
    share() {
      const link = window.location.href
      navigator.clipboard.writeText(link)
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

  .article-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: clamp(100px, 100%, 450px);
    height: fit-content;
    border-radius: $radius;
    background-color: rgba(255, 255, 255, 0.04);
    border: rgba(255, 255, 255, 0.06) solid 1px;
    gap: 24px;
    padding: $mobile-padding;

    &__header {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;

      &__img {
        height: 100%;
        object-fit: cover;
        border-radius: $radius;
        width: 100%;
        position: absolute;
      }
      &__links {
        display: flex;
        padding: 16px;
        z-index: 2;
        position: absolute;
        bottom: 0;
        right: 0;
        flex-direction: column;
        gap: 16px;
        border-radius: 0 $radius $radius 0;

        &__icon {
          width: 30px;
          height: 30px;
          opacity: 0.6;
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 1;
          }
        }
        .invisible-link {
          display: none;
        }
        .invisible-link:active > .copy-confirmation {
          border: red solid 5px;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.04);
          border-top: rgba(255, 255, 255, 0.06) solid 1px;
          border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
        }
        &:hover > .invisible-link {
          display: initial;
          animation: visible 0.4s linear;

          @keyframes visible {
            from {
              opacity: 0;
            }
            to {
              opacity: 0.6;
            }
          }
        }
        &:hover > .changing-icon {
          background-image: url('@/assets/icons/link-variant.svg');
        }

        .changing-icon {
          opacity: 1;
          width: 30px;
          height: 30px;
          background-image: url('@/assets/icons/share-variant.svg');
          transition: background-image 0.4s ease;
        }
      }
    }
    &__title {
      font-size: 20px;
      font-weight: $fat-weight;
    }
    &__title,
    &__description,
    &__date {
      text-decoration: none;
      color: $text-color;
    }

    &__date {
      font-size: 12px;
      font-weight: $slim-weight;
      text-align: right;
      opacity: 0.6;
    }
    &__description {
      font-weight: $slim-weight;
      font-size: 16px;
    }
  }
}
</style>
