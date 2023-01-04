<template>
  <section>
    <div class="catalog">
      <div class="catalog__menu">
        <a
          class="catalog__menu__link"
          :class="{ 'catalog__menu__link--active': categorie === 'website' }"
          href="#"
          @click="categorie = 'website'"
        >
          <h2>Création de sites web</h2>
          <h3>Création de sites web fluides et optimisés</h3>
        </a>
        <a
          class="catalog__menu__link"
          :class="{ 'catalog__menu__link--active': categorie === 'SEO' }"
          href="#"
          @click="categorie = 'SEO'"
        >
          <h2>Boost SEO</h2>
          <h3>Amélioration du référencement naturel de votre site web</h3>
        </a>
        <a
          class="catalog__menu__link"
          :class="{
            'catalog__menu__link--active': categorie === 'performance',
          }"
          href="#"
          @click="categorie = 'performance'"
        >
          <h2>Performance Boost</h2>
          <h3>Amélioration des performances de votre site web</h3>
        </a>

        <a
          class="catalog__menu__link"
          :class="{
            'catalog__menu__link--active': categorie === 'modelisation 3D',
          }"
          href="#"
          @click="categorie = 'modelisation 3D'"
        >
          <h2>Modélisation 3D</h2>
          <h3>Modélisation et intégration 3D sur-mesure</h3>
        </a>
        <a
          class="catalog__menu__link"
          :class="{
            'catalog__menu__link--active': categorie === 'design',
          }"
          href="#"
          @click="categorie = 'design'"
        >
          <h2>Design Web</h2>
          <h3>Maquettage et identité graphique</h3>
        </a>
        <a
          class="catalog__menu__link"
          :class="{
            'catalog__menu__link--active': categorie === 'webmarketing',
          }"
          href="#"
          @click="categorie = 'webmarketing'"
        >
          <h2>Webmarketing</h2>
          <h3>Conseil en web-marketing dédié aux professionnels</h3>
        </a>
      </div>
      <div class="catalog__details">
        <div class="catalog__details__content">
          <computer-animation v-if="categorie === 'website'" />
          <seo-animation v-if="categorie === 'SEO'" />
          <web-design v-if="categorie === 'design'" />
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
import WebDesign from '@/components/prestations/WebDesign.vue'

export default {
  components: {
    InfiniteSlider,
    ComputerAnimation,
    SeoAnimation,
    WebDesign,
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
  gap: $small-gap;

  .catalog {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 128px;
    justify-content: center;
    align-items: center;
    &__menu {
      width: 375px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &__link {
        text-decoration: none;
        color: $text-color;
        width: 100%;
        padding: 16px;
        background-color: rgba(0, 0, 0, 0.2);
        &:hover {
          background-color: rgba(107, 107, 107, 0.2);
        }
        &--active {
          background-color: rgba(107, 107, 107, 0.2);
        }

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
