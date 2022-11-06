<template>
  <section>
    <div class="puzzle-card">
      <div class="puzzle-card__wrapper">
        <img
          class="puzzle-card__wrapper__static-img"
          src="@/assets/header.jpg"
          alt="image tekila web factory"
        />
        <div class="puzzle-card__wrapper__static-img__gradient"></div>
        <div class="puzzle-card__wrapper__text">
          <p class="puzzle-card__wrapper__text__title">TITLE OF CARD</p>
          <p class="puzzle-card__wrapper__text__subtitle">
            Lorem ipsum dolor sit amet, distinctio reiciendis, illo unde quos
            perferendis?
          </p>
          <div class="puzzle-card__wrapper__text__button">
            <a>En savoir plus</a>
          </div>
        </div>
        <img
          class="puzzle-card__wrapper__img"
          src="@/assets/neon-min.jpg"
          alt="neon image tekila"
        />
      </div>
    </div>
    <!-- <div class="puzzle-card-2">
      <div class="puzzle-card-2__wrapper">
        <img
          class="puzzle-card-2__wrapper__static-img"
          src="@/assets/header.jpg"
          alt="image tekila web factory"
        />
        <div class="puzzle-card-2__wrapper__static-img__gradient"></div>
        <div class="puzzle-card-2__wrapper__text">
          <p class="puzzle-card-2__wrapper__text__title">TITLE OF CARD</p>
          <p class="puzzle-card-2__wrapper__text__subtitle">
            Lorem ipsum dolor sit amet, distinctio reiciendis, illo unde quos
            perferendis?
          </p>
          <div class="puzzle-card-2__wrapper__text__button">
            <a>En savoir plus</a>
          </div>
        </div>
        <img
          class="puzzle-card-2__wrapper__img"
          src="@/assets/neon-min.jpg"
          alt="neon image tekila"
        />
      </div>
    </div> -->
    <div class="puzzle-card">
      <div class="puzzle-card__wrapper">
        <img
          class="puzzle-card__wrapper__static-img"
          src="@/assets/header.jpg"
          alt="image tekila web factory"
        />
        <div class="puzzle-card__wrapper__static-img__gradient"></div>
        <div class="puzzle-card__wrapper__text">
          <p class="puzzle-card__wrapper__text__title">TITLE OF CARD</p>
          <p class="puzzle-card__wrapper__text__subtitle">
            Lorem ipsum dolor sit amet, distinctio reiciendis, illo unde quos
            perferendis?
          </p>
          <div class="puzzle-card__wrapper__text__button">
            <a>En savoir plus</a>
          </div>
        </div>
        <img
          class="puzzle-card__wrapper__img"
          src="@/assets/neon-min.jpg"
          alt="neon image tekila"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  gap: 256px;
  padding: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .puzzle-card {
    width: 500px;
    position: relative;
    z-index: 2;
    &__wrapper {
      display: flex;
      padding: 16px;
      width: 100%;
      background-color: $primary-color;
      border-radius: $radius;
      justify-content: flex-end;
      gap: 24px;
      align-items: center;

      &__text {
        display: flex;
        flex-direction: column;
        gap: 24px;
        &__title {
          font-size: 24px;
          font-family: "GoodTimes";
        }
        &__subtitle {
          font-weight: $slim-weight;
        }
        &__button {
          display: flex;
          width: 100%;
          justify-content: flex-end;

          & a {
            border: white solid 2px;
            padding: 8px 32px;
            border-radius: $radius;
            cursor: pointer;

            &::before {
              content: "";
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
              content: "";
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
        border-radius: $small-radius;
      }
      &__static-img {
        z-index: -1;
        position: absolute;
        right: -140px;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 300px;
        border-radius: $radius;
        box-shadow: $shadow;
        opacity: 0.6;

        &__gradient {
          position: absolute;
          right: -140px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 300px;
          height: 450px;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(49, 35, 153, 0) 0%,
            $base-color 100%
          );
          border-radius: $radius;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
