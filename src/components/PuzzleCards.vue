<template>
  <section class="puzzle-cards">
    <div class="puzzle-cards__card parallax">
      <img
        class="puzzle-cards__card__img"
        src="@/assets/neon-min.jpg"
        alt="neon image tekila"
      />
      <div class="puzzle-cards__card__text">
        <h4 class="puzzle-cards__card__text__title">BOOSTEZ VOS CONVERSIONS</h4>
        <h5 class="puzzle-cards__card__text__subtitle">
          Engagez facilement vos visiteurs tout en mettant en valeur votre offre
        </h5>
        <div class="puzzle-cards__card__text__button">
          <a>En savoir plus</a>
        </div>
      </div>
    </div>

    <div class="puzzle-cards__card parallax">
      <img
        class="puzzle-cards__card__img"
        src="@/assets/night.jpg"
        alt="neon image tekila"
      />
      <div class="puzzle-cards__card__text">
        <h4 class="puzzle-cards__card__text__title">FAITES VOUS REMARQUER</h4>
        <h5 class="puzzle-cards__card__text__subtitle">
          Amplifiez votre impact à travers des expériences immersives
        </h5>
        <div class="puzzle-cards__card__text__button">
          <a>En savoir plus</a>
        </div>
      </div>
    </div>

    <div class="puzzle-cards__card parallax">
      <img
        class="puzzle-cards__card__img"
        src="@/assets/person-vr.jpg"
        alt="neon image tekila"
      />
      <div class="puzzle-cards__card__text">
        <h4 class="puzzle-cards__card__text__title">
          DEVELOPPEZ VOTRE PRESENCE
        </h4>
        <h5 class="puzzle-cards__card__text__subtitle">
          Créez et optimisez votre site web, boostez votre référencement naturel
        </h5>
        <div class="puzzle-cards__card__text__button">
          <a>En savoir plus</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    // const car = document.querySelectorAll('.parallax')
    // car.forEach((element) => {
    //   window.addEventListener('scroll', function (e) {
    //     element.style.transform = 'translateY( -' + window.scrollY / 2 + 'px)'
    //   })
    // })
  },
}
</script>
<style lang="scss" scoped>
.puzzle-cards {
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-direction: column;
  @media (min-width: $tablet-screen) {
    flex-direction: row;
    padding: 128px;
  }

  &__card {
    width: 700px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.04);
    border-top: rgba(255, 255, 255, 0.06) solid 1px;
    border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
    border-radius: $radius;
    justify-content: flex-end;
    gap: 24px;
    padding: 16px;
    @media (min-width: $tablet-screen) {
      padding: 24px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &__title {
        font-size: 20px;
        // font-family: 'GoodTimes';
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
      width: 100%;
      height: 200px;
      border-radius: $small-radius;
      object-fit: cover;
    }
  }
}
</style>
