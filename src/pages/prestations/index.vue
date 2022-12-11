<template>
  <section>
    <div class="catalog">
      <div class="catalog__menu">
        <a class="catalog__menu__link" href="#" @click="categorie = 'SEO'">
          <h2>SEO</h2>
          <h3>SEO</h3>
        </a>

        <a
          class="catalog__menu__link"
          href="#"
          @click="categorie = 'webmarketing'"
        >
          <h2>Webmarketing</h2>
          <h3>Webmarketing</h3>
        </a>
        <a class="catalog__menu__link" href="#" @click="categorie = 'website'">
          <h2>Création de sites web</h2>
          <h3>Création de sites web</h3>
        </a>
        <a class="catalog__menu__link" href="#">
          <h2>Lorem ipsum dolor sit</h2>
          <h3>Lorem ipsum dolor sit</h3>
        </a>
        <a class="catalog__menu__link" href="#">
          <h2>Lorem ipsum dolor sit</h2>
          <h3>Lorem ipsum dolor sit</h3>
        </a>
      </div>
      <div class="catalog__details">
        <div class="catalog__details__content">
          <computer-animation v-if="categorie === 'website'" />
          <seo-animation v-if="categorie === 'SEO'" />
        </div>
      </div>
    </div>
    <video src="@/assets/astronaut.mp4" autoplay loop muted controls></video>
    <InfiniteSlider />
  </section>
</template>
<script>
import InfiniteSlider from '@/components/InfiniteSlider.vue'
import ComputerAnimation from '@/components/prestations/ComputerAnimation.vue'
import SeoAnimation from '@/components/prestations/SeoAnimation.vue'

export default {
  components: {
    InfiniteSlider,
    ComputerAnimation,
    SeoAnimation,
  },
  data() {
    return { categorie: 'website' }
  },
}
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: $medium-gap;

  .catalog {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 128px;
    &__menu {
      width: 375px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: $small-gap;
      padding: 24px;
      flex-direction: column;

      &__link {
        text-decoration: none;
        color: $text-color;
        width: 100%;

        & h2 {
          font-weight: $medium-weight;
          font-size: 20px;
        }
        & h3 {
          font-weight: $slim-weight;
          font-size: 16px;
        }
      }
    }
    &__details {
      width: 100%;
      height: 100%;
      &__content {
        height: 100%;
        & img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
    }
  }
  video {
    border-radius: 20px;
    width: clamp(100px, 100%, 200px);
  }
}
</style>
