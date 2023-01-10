<template>
  <header id="accueil" class="header">
    <!-- <ThreeHeader class="threejs-object" /> -->
    <router-link class="logo" to="/"
      ><img
        class="logo"
        src="@/assets/icons/tekila-logo.svg"
        alt="Tekila 3d logo"
      />
    </router-link>
    <div class="header__bloc">
      <div class="header__bloc__title">
        <div class="header__bloc__title__wrapper">
          <div class="header__bloc__title__word">
            <span class="header__bloc__title__word__letter">F</span
            ><span class="header__bloc__title__word__letter">A</span
            ><span class="header__bloc__title__word__letter">I</span
            ><span class="header__bloc__title__word__letter">T</span
            ><span class="header__bloc__title__word__letter">E</span
            ><span class="header__bloc__title__word__letter">S</span>
          </div>

          <div class="header__bloc__title__word">
            <span class="header__bloc__title__word__letter">L</span
            ><span class="header__bloc__title__word__letter">A</span>
          </div>
        </div>
        <div class="header__bloc__title__word">
          <span class="header__bloc__title__word__letter">D</span
          ><span class="header__bloc__title__word__letter">I</span
          ><span class="header__bloc__title__word__letter">F</span
          ><span class="header__bloc__title__word__letter">F</span
          ><span class="header__bloc__title__word__letter">é</span
          ><span class="header__bloc__title__word__letter">R</span
          ><span class="header__bloc__title__word__letter">E</span
          ><span class="header__bloc__title__word__letter">N</span
          ><span class="header__bloc__title__word__letter">C</span
          ><span class="header__bloc__title__word__letter">E</span>
        </div>
      </div>
      <h1>
        Vous êtes unique, votre site web aussi <br />Créons ensemble votre site
        web 3.0 sur-mesure
      </h1>
      <div class="header__bloc__buttons">
        <a class="button-primary button" href="#">
          Voir une démo
          <SparklesEffect class="sparkles-effect" />
        </a>
        <a class="button-secondary button" href="#"> Devis gratuit</a>
      </div>
    </div>
  </header>
</template>
<script>
// import ThreeHeader from "@/components/ThreeHeader.vue";

import SparklesEffect from '@/components/SparklesEffect.vue'

export default {
  components: {
    // ThreeHeader,
    SparklesEffect,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $text-color;
  padding: 32px;
  gap: 32px;
  @media (min-width: $tablet-screen) {
    padding: 32px 128px 0;
  }
  .logo {
    width: 100%;
    @media (min-width: $tablet-screen) {
      display: none;
    }
  }
  & h1 {
    font-size: 16px;
    font-weight: $slim-weight;

    @media (min-width: $tablet-screen) {
      font-size: 20px;
    }
  }
  .threejs-object {
    width: 500px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
  &__bloc {
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 48px;

    &__title {
      font-weight: $slim-weight;
      font-family: 'GoodTimes';
      text-shadow: $text-color 0px 0px 8px;
      font-size: 40px;
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media (min-width: $tablet-screen) {
        font-size: 110px;
      }

      &__wrapper {
        display: flex;
        gap: 32px;
      }
      &__word {
        display: flex;
        &__letter {
          line-height: 16px;

          @media (min-width: $tablet-screen) {
            line-height: 106px;
          }
          animation: jump 2s ease-in infinite;
          @for $i from 1 through 10 {
            &:nth-child(#{$i}) {
              animation-delay: 60ms * $i;
            }
          }

          @keyframes jump {
            10% {
              transform: translateY(10px);
            }
          }
        }
      }
    }

    &__buttons {
      display: flex;
      gap: 16px;
      position: relative;
      flex-direction: column;

      @media (min-width: $tablet-screen) {
        flex-direction: row;
        gap: 32px;
      }

      .button-primary:hover > .sparkles-effect {
        opacity: 1;
        display: block;
      }

      .sparkles-effect {
        display: none;
        z-index: -10 !important;
      }
      .button-secondary::before {
        content: '';
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        border: $text-color 2px solid;
        box-shadow: 0px 0px 4px $text-color;
        display: block;
        position: absolute;
        top: -10px;
        left: 10px;
        opacity: 0;
        // background-color: $base-color;

        @keyframes triangle {
          1% {
            opacity: 1;
          }
          to {
            transform: translate(260px);
            opacity: 0;
          }
        }
      }
      .button-secondary::after {
        content: '';
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        border: $text-color 2px solid;
        box-shadow: 0px 0px 4px $text-color;
        display: block;
        position: absolute;
        right: 0;
        bottom: -10px;
        opacity: 0;
        // background-color: $base-color;

        @keyframes triangle2 {
          1% {
            opacity: 1;
          }
          to {
            transform: translate(-260px);
            opacity: 0;
          }
        }
      }
      .button-secondary:hover::before {
        animation: triangle 2s ease;
      }
      .button-secondary:hover::after {
        animation: triangle2 2s ease;
      }
    }
  }
}
</style>
