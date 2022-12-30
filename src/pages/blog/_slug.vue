<template>
  <article class="blog">
    <toaster-component v-if="isOpened" @click.native="isOpened = !isOpened" />
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
      <div class="blog__banner__links">
        <button class="changing-icon" @click="share('copy')"></button>
        <a href="#" class="invisible-link" @click="share('copy')"
          ><img
            class="blog__banner__links__icon"
            src="@/assets/icons/linkedin.svg"
            alt="share icon Tekila web factory"
          />
        </a>
        <a href="#" target="blank" class="invisible-link" @click="share('copy')"
          ><img
            class="blog__banner__links__icon"
            src="@/assets/icons/facebook.svg"
            alt="share icon Tekila web factory"
        /></a>
      </div>
    </div>
    <nuxt-content class="blog__content" :document="post" />
  </article>
</template>

<script>
import dayjs from 'dayjs'
import ToasterComponent from '@/components/ToasterComponent.vue'
require('dayjs/locale/fr')
dayjs.locale('fr')

export default {
  components: { ToasterComponent },

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
  data() {
    return {
      isOpened: false,
    }
  },
  head() {
    const meta = [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.post.description,
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: window.location.href,
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: this.post.title,
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: this.post.description,
      },
      {
        hid: 'og-type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'twitter-url',
        property: 'twitter:url',
        content: window.location.href,
      },
      {
        hid: 'twitter-title',
        property: 'twitter:title',
        content: this.post.title,
      },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: this.post.description,
      },
      {
        hid: 'twitter-card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter-domain',
        property: 'twitter:domain',
        content: window.location.host,
      },
    ]

    if (this.post.image) {
      meta.push({
        hid: 'og-image',
        property: 'og:image',
        content: `${window.location.origin}${this.post.image}`,
      })
      meta.push({
        hid: 'twitter-image',
        property: 'twitter:image',
        content: `${window.location.origin}${this.post.image}`,
      })
    }

    return {
      title: this.post.title,
      meta,
    }
  },
  methods: {
    date(date) {
      return dayjs(date).format('DD MMMM YYYY')
    },
    share(type) {
      const link = window.location.href
      navigator.clipboard.writeText(link)

      if (type === 'copy') {
        this.isOpened = true
      }
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
    border-radius: $radius;
    &__links {
      display: flex;
      padding: 16px;
      z-index: 2;
      position: absolute;
      top: 0;
      right: 0;
      flex-direction: column;
      gap: 16px;
      border-radius: 0 $radius 0 $radius;

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

      &:hover {
        background-color: rgba(255, 255, 255, 0.04);
        border-top: rgba(255, 255, 255, 0.06) solid 1px;
        border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
      }
      &:hover > .invisible-link {
        display: flex;
        gap: 4px;
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
    &__img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: $radius;

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
      border-radius: $radius;
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
