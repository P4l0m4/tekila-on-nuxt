<template>
  <div class="container">
    <div class="banner">
      <div class="banner__text">
        <h3 class="banner__text__title">
          Ils l’ont fait, <br />pourquoi pas vous ?
        </h3>
        <h4 class="banner__text__subtitle">
          Un site web créatif sans mettre de côté l’expérience utilisateur, la
          performance et la flexibilité, c’est possible.
        </h4>
        <h5>Conse quitur elit lorem ipsum dolor.</h5>
      </div>

      <a class="banner__card" href="https://www.draw-your-polo.lacoste.com/fr/"
        ><span class="banner__card__txt"
          >Voir le projet <br />Lacoste Draw your Polo</span
        ><img class="banner__card__img" src="@/assets/lacoste.jpg" alt="" />
      </a>
      <a class="banner__card" href="https://www.blueyard.com/"
        ><span class="banner__card__txt">Voir le projet <br />BlueYard</span
        ><img class="banner__card__img" src="@/assets/blueyard.png" alt=""
      /></a>
      <a class="banner__card" href="https://exp-gemini.lusion.co/style"
        ><span class="banner__card__txt">Voir le projet Gemini</span
        ><img class="banner__card__img" src="@/assets/gemini.png"
      /></a>

      <a class="banner__card" href="https://www.masardestination.com/en"
        ><span class="banner__card__txt"
          >Voir le projet <br />
          Masar destination</span
        ><img class="banner__card__img" src="@/assets/masar.png"
      /></a>
      <div class="banner__text">
        <h3 class="banner__text__title">
          Ils l’ont fait, <br />pourquoi pas vous ?
        </h3>
        <h4 class="banner__text__subtitle">
          Un site web créatif sans mettre de côté l’expérience utilisateur, la
          performance et la flexibilité, c’est possible.
        </h4>
        <h5>Conse quitur elit lorem ipsum dolor.</h5>
      </div>
      <a class="banner__card" href="https://www.draw-your-polo.lacoste.com/fr/"
        ><span class="banner__card__txt"
          >Voir le projet <br />Lacoste Draw your Polo</span
        ><img class="banner__card__img" src="@/assets/lacoste.jpg" alt="" />
      </a>
      <a class="banner__card" href="https://www.blueyard.com/"
        ><span class="banner__card__txt">Voir le projet <br />BlueYard</span
        ><img class="banner__card__img" src="@/assets/blueyard.png" alt=""
      /></a>
      <a class="banner__card" href="https://exp-gemini.lusion.co/style"
        ><span class="banner__card__txt">Voir le projet Gemini</span
        ><img class="banner__card__img" src="@/assets/gemini.png"
      /></a>

      <a class="banner__card" href="https://www.masardestination.com/en"
        ><span class="banner__card__txt"
          >Voir le projet <br />
          Masar destination</span
        ><img class="banner__card__img" src="@/assets/masar.png"
      /></a>
      <div class="banner__text">
        <h3 class="banner__text__title">
          Ils l’ont fait, <br />pourquoi pas vous ?
        </h3>
        <h4 class="banner__text__subtitle">
          Un site web créatif sans mettre de côté l’expérience utilisateur, la
          performance et la flexibilité, c’est possible.
        </h4>
        <h5>Conse quitur elit lorem ipsum dolor.</h5>
      </div>
      <a class="banner__card" href="https://www.draw-your-polo.lacoste.com/fr/"
        ><span class="banner__card__txt"
          >Voir le projet <br />Lacoste Draw your Polo</span
        ><img
          class="banner__card__img"
          src="@/assets/lacoste.jpg"
          alt="Lacoste Draw your Polo"
        />
      </a>
      <a class="banner__card" href="https://www.blueyard.com/"
        ><span class="banner__card__txt">Voir le projet <br />BlueYard</span
        ><img
          class="banner__card__img"
          src="@/assets/blueyard.png"
          alt="BlueYard"
      /></a>
      <a class="banner__card" href="https://exp-gemini.lusion.co/style"
        ><span class="banner__card__txt">Voir le projet Gemini</span
        ><img class="banner__card__img" src="@/assets/gemini.png" alt="Gemini"
      /></a>

      <a class="banner__card" href="https://www.masardestination.com/en"
        ><span class="banner__card__txt"
          >Voir le projet <br />
          Masar destination</span
        ><img
          class="banner__card__img"
          src="@/assets/masar.png"
          alt="Masar destination"
      /></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  // background-color: $primary-color-faded;
  background-color: rgba(255, 255, 255, 0.04);
  border-top: rgba(255, 255, 255, 0.06) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
  .banner {
    position: relative;
    width: 400%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 32px;
    padding: $mobile-padding;

    animation: slide 20s linear infinite;
    @keyframes slide {
      from {
      }
      to {
        transform: translateX(-1960px);
      }
    }
    &:hover {
      animation-play-state: paused;
    }

    @media (min-width: $tablet-screen) {
      padding: $desktop-padding;
    }

    &__card {
      position: relative;
      background-color: $base-color-faded;
      border-radius: $radius;
      width: 360px;
      height: 220px;
      z-index: 2;
      color: $text-color;
      display: flex;
      text-decoration: none;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      text-align: center;

      &__img {
        width: 360px;
        height: 220px;
        border-radius: $radius;
        object-fit: cover;
        object-position: left;
      }
      &__txt {
        border-radius: $radius;
        position: absolute;
        margin: auto;
        inset: 0;
        opacity: 0;
        transition: 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $base-color-faded;

        &:hover {
          opacity: 1;
        }
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      color: $text-color;
      gap: 24px;
      width: 360px;
      height: 220px;

      &__title {
        font-size: 20px;
        font-weight: $fat-weight;
        // font-family: 'GoodTimes';
        // width: clamp(200px, 100%, 300px);
        width: 360px;
        text-transform: uppercase;
      }

      &__subtitle {
        font-weight: $slim-weight;
        font-size: 16px;
        text-align: justify;
      }
      & h5 {
        text-align: right;
        font-weight: $slim-weight;
        font-size: 12px;
      }
    }
  }
}
</style>
