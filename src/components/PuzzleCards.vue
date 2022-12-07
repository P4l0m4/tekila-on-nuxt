<template>
  <section>
    <div class="puzzle-cards puzzle-cards--left">
      <div class="puzzle-cards__card">
        <div
          class="puzzle-cards__card__wrapper puzzle-cards__card__wrapper--left"
        >
          <img
            class="puzzle-cards__card__wrapper__static-img puzzle-cards__card__wrapper__static-img--left"
            src="@/assets/car.jpg"
            alt="image tekila web factory"
          />
          <div
            class="puzzle-cards__card__wrapper__static-img__gradient puzzle-cards__card__wrapper__static-img__gradient--left"
          ></div>
          <div class="puzzle-cards__card__wrapper__text">
            <h4 class="puzzle-cards__card__wrapper__text__title">
              BOOSTEZ VOS CONVERSIONS
            </h4>
            <h5 class="puzzle-cards__card__wrapper__text__subtitle">
              Engagez facilement vos visiteurs tout en mettant en valeur votre
              offre
            </h5>
            <div class="puzzle-cards__card__wrapper__text__button">
              <a>En savoir plus</a>
            </div>
          </div>
          <img
            class="puzzle-cards__card__wrapper__img"
            src="@/assets/neon-min.jpg"
            alt="neon image tekila"
          />
        </div>
      </div>
    </div>
    <div class="puzzle-cards">
      <div class="puzzle-cards__card">
        <div class="puzzle-cards__card__wrapper">
          <img
            class="puzzle-cards__card__wrapper__static-img"
            src="@/assets/header.jpg"
            alt="image tekila web factory"
          />
          <div class="puzzle-cards__card__wrapper__static-img__gradient"></div>
          <div class="puzzle-cards__card__wrapper__text">
            <h4 class="puzzle-cards__card__wrapper__text__title">
              FAITES VOUS REMARQUER
            </h4>
            <h5 class="puzzle-cards__card__wrapper__text__subtitle">
              Amplifiez votre impact sur vos utilisateurs à travers des
              expériences immersives
            </h5>
            <div class="puzzle-cards__card__wrapper__text__button">
              <a>En savoir plus</a>
            </div>
          </div>
          <img
            class="puzzle-cards__card__wrapper__img"
            src="@/assets/night.jpg"
            alt="neon image tekila"
          />
        </div>
      </div>
    </div>
    <div class="puzzle-cards puzzle-cards--left">
      <div class="puzzle-cards__card">
        <div
          class="puzzle-cards__card__wrapper puzzle-cards__card__wrapper--left"
        >
          <img
            class="puzzle-cards__card__wrapper__static-img puzzle-cards__card__wrapper__static-img--left"
            src="@/assets/keyboard.jpg"
            alt="image tekila web factory"
          />
          <div
            class="puzzle-cards__card__wrapper__static-img__gradient puzzle-cards__card__wrapper__static-img__gradient--left"
          ></div>
          <div class="puzzle-cards__card__wrapper__text">
            <h4 class="puzzle-cards__card__wrapper__text__title">
              DEVELOPPEZ VOTRE <br />PRESENCE NUMERIQUE
            </h4>
            <h5 class="puzzle-cards__card__wrapper__text__subtitle">
              Créez et optimisez votre site web, boostez votre référencement
              naturel
            </h5>
            <div class="puzzle-cards__card__wrapper__text__button">
              <a>En savoir plus</a>
            </div>
          </div>
          <img
            class="puzzle-cards__card__wrapper__img"
            src="@/assets/person-vr.jpg"
            alt="neon image tekila"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  gap: 128px;
  padding: 128px 256px;
  flex-direction: column;

  .puzzle-cards {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    &:nth-of-type(2) {
      justify-content: flex-end;
      align-items: flex-end;
    }

    &__card {
      width: 700px;
      position: relative;
      z-index: 2;
      &__wrapper {
        display: flex;
        padding: 16px 16px 16px 24px;
        width: 100%;
        background-color: $primary-color;
        border-radius: $radius;
        justify-content: flex-end;
        gap: 32px;
        align-items: center;

        &--left {
          flex-direction: row-reverse;
          padding: 16px 24px 16px 16px;
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: 24px;

          &__title {
            font-size: 24px;
            font-family: 'GoodTimes';
          }
          &__subtitle {
            font-weight: $slim-weight;
            font-size: 16px;
          }
          &__button {
            display: flex;
            width: 100%;
            justify-content: flex-end;

            & a {
              border: white solid 2px;
              padding: 8px 32px;
              border-radius: $small-radius;
              cursor: pointer;

              &::before {
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
                background-color: $base-color;

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
              &::after {
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
                background-color: $base-color;

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
              &:hover::before {
                animation: triangle 2s ease;
              }
              &:hover::after {
                animation: triangle2 2s ease;
              }
            }
          }
        }
        &__img {
          width: 160px;
          height: 200px;
          border-radius: $small-radius;
          object-fit: cover;
        }
        &__static-img {
          z-index: -1;
          position: absolute;
          right: -140px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 300px;
          height: 380px;
          border-radius: $radius;
          box-shadow: $shadow;
          opacity: 0.9;
          object-fit: cover;

          &--left {
            right: initial;
            left: -140px;
          }

          &__gradient {
            position: absolute;
            right: -140px;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 300px;
            height: 380px;
            z-index: -1;
            background: linear-gradient(
              180deg,
              rgba(49, 35, 153, 0) 0%,
              $base-color 100%
            );
            border-radius: $radius;
            opacity: 0.4;

            &--left {
              right: initial;
              left: -140px;
            }
          }
        }
      }
    }
  }
}
</style>
