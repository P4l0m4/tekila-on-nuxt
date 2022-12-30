<template>
  <main>
    <div v-if="error.statusCode === 404" class="container">
      <div class="cube">
        <div class="cube__face front">4</div>
        <div class="cube__face back">0</div>
        <div class="cube__face left">4</div>
        <div class="cube__face right">4</div>
        <div class="cube__face top">0</div>
        <div class="cube__face bottom">4</div>
      </div>
    </div>

    <h1 v-else class="title">Oups... Une erreur est survenue</h1>
    <div class="box">
      <div class="box__ghost">
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>

        <div class="box__ghost-container">
          <div class="box__ghost-eyes">
            <div class="box__eye-left"></div>
            <div class="box__eye-right"></div>
          </div>
          <div class="box__ghost-bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="box__ghost-shadow"></div>
      </div>

      <div class="box__description">
        <div class="box__description-container">
          <div class="box__description-title">Oups...</div>
          <div class="box__description-text">Une erreur est survenue</div>
        </div>
      </div>
    </div>
    <NuxtLink to="/" class="button-primary"
      >Page d'accueil<SparklesEffect class="sparkles-effect"
    /></NuxtLink>
  </main>
</template>

<script>
import SparklesEffect from '@/components/SparklesEffect.vue'
export default {
  components: {
    SparklesEffect,
  },
  layout: 'blog', // you can set a custom layout for the error page
  props: ['error'],

  mounted() {
    function mousePosition(event) {
      const yValue = 50 - (event.clientY + window.innerHeight / 1.4) * 0.05
      const eyes = document.querySelector('.box__ghost-eyes')
      eyes.style.transform = 'translateX(' + -yValue + 'px)'
    }

    window.addEventListener('mousemove', mousePosition)
  },
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
.title,
.button-primary {
  width: clamp(100px, 100%, 320px) !important;
}

.button-primary {
  position: relative;
}
.button-primary:hover > .sparkles-effect {
  opacity: 1;
  display: block;
  inset: 0;
  margin: auto;
  position: absolute;
}
.sparkles-effect {
  display: none;
  z-index: -10 !important;
}
.box {
  width: 350px;
  display: flex;
  padding: 30px 50px;

  position: relative;
  justify-content: center;
  gap: 24px;
  flex-direction: column;

  .box__ghost {
    .symbol {
      &:nth-child(1) {
        opacity: 0.2;
        animation: shine 4s ease-in-out 3s infinite;

        &:before,
        &:after {
          content: '';
          width: 12px;
          height: 4px;
          background: white;
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          left: 0;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(2) {
        position: absolute;
        left: -5px;
        top: 30px;
        height: 18px;
        width: 18px;
        border: 4px solid;
        border-radius: 50%;
        border-color: $text-color;
        opacity: 0.2;
        animation: shine 4s ease-in-out 1.3s infinite;
      }
      &:nth-child(3) {
        opacity: 0.2;
        animation: shine 3s ease-in-out 0.5s infinite;

        &:before,
        &:after {
          content: '';
          width: 12px;
          height: 4px;
          background: $text-color;
          position: absolute;
          border-radius: 5px;
          top: 5px;
          left: 40px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
      &:nth-child(4) {
        opacity: 0.2;
        animation: shine 6s ease-in-out 1.6s infinite;

        &:before,
        &:after {
          content: '';
          width: 15px;
          height: 4px;
          background: $text-color;
          position: absolute;
          border-radius: 5px;
          top: 10px;
          right: 30px;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(5) {
        position: absolute;
        right: 5px;
        top: 40px;
        height: 12px;
        width: 12px;
        border: 3px solid;
        border-radius: 50%;
        border-color: $text-color;
        opacity: 0.2;
        animation: shine 1.7s ease-in-out 7s infinite;
      }
      &:nth-child(6) {
        opacity: 0.2;
        animation: shine 2s ease-in-out 6s infinite;

        &:before,
        &:after {
          content: '';
          width: 15px;
          height: 4px;
          background: $text-color;
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          right: -5px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
    }

    .box__ghost-container {
      background: $text-color;
      width: 100px;
      height: 100px;
      border-radius: 100px 100px 0 0;
      position: relative;
      margin: 0 auto;
      animation: upndown 3s ease-in-out infinite;
      display: flex;
      justify-content: center;
      align-items: center;

      .box__ghost-eyes {
        height: 12px;
        width: 70px;

        .box__eye-left {
          width: 12px;
          height: 12px;
          background: $primary-color;
          border-radius: 50%;
          margin: 0 10px;
          position: absolute;
          left: 0;
        }
        .box__eye-right {
          width: 12px;
          height: 12px;
          background: $primary-color;
          border-radius: 50%;
          margin: 0 10px;
          position: absolute;
          right: 0;
        }
      }

      .box__ghost-bottom {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;

        div {
          flex-grow: 1;
          position: relative;
          top: -10px;
          height: 20px;
          border-radius: 100%;
          background-color: $text-color;

          &:nth-child(2n) {
            top: -12px;
            margin: 0 -0px;
            border-top: 15px solid $primary-color;
            background: transparent;
          }
        }
      }
    }

    .box__ghost-shadow {
      height: 20px;
      box-shadow: 0 50px 15px 5px #0d011370;
      border-radius: 50%;
      margin: 0 auto;
      animation: smallnbig 3s ease-in-out infinite;
    }
  }

  .box__description {
    .box__description-container {
      color: $text-color;
      text-align: center;
      width: 200px;
      font-size: 16px;
      margin: 0 auto;

      .box__description-title {
        font-size: 24px;
        letter-spacing: 0.5px;
      }

      .box__description-text {
        color: $text-color;
        line-height: 20px;
        margin-top: 20px;
      }
    }
  }
}

//keyframes
@keyframes upndown {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(5px);
  }
}
@keyframes smallnbig {
  0% {
    width: 90px;
  }
  50% {
    width: 100px;
  }
  100% {
    width: 90px;
  }
}
@keyframes shine {
  0% {
    opacity: 0.2;
  }
  25% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}

//CUBE
.container {
  width: 200px;
  height: 200px;
  perspective: 1000px;
  top: 180px;
  margin: auto;
  position: absolute;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;

  &__face {
    position: absolute;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
    font-size: 24px;
  }
}

.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.right {
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}

.front {
  transform: rotateX(0deg) translateZ(100px);
}
.back {
  transform: rotateX(-180deg) translateZ(100px);
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
