<template>
  <div class="container">
    <div class="banner">
      <div class="banner__text">
        <h3 class="banner__text__title">Lorem ipsum dolor sit amet</h3>
        <h4 class="banner__text__subtitle">
          Lorem ipsum dolor sit amet conse quitur, lorem ipsum dolor sit amet
          elit. Lorem ipsum dolor sit amet, conse quitur elit lorem ipsum dolor.
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
    </div>

    <iframe src="http://letsplay.ouigo.com/ "></iframe>

    <div class="banner">
      <div class="banner__text">
        <h3 class="banner__text__title">Lorem ipsum dolor sit amet</h3>
        <h4 class="banner__text__subtitle">
          Lorem ipsum dolor sit amet conse quitur, lorem ipsum dolor sit amet
          elit. Lorem ipsum dolor sit amet, conse quitur elit lorem ipsum dolor.
        </h4>
        <h5>Conse quitur elit lorem ipsum dolor.</h5>
      </div>

      <a class="banner__card" href="https://exp-gemini.lusion.co/style"
        ><span class="banner__card__txt">Voir le projet Masar Destination</span
        ><img class="banner__card__img" src="@/assets/gemini.png"
      /></a>

      <a class="banner__card" href="https://www.masardestination.com/en"
        ><span class="banner__card__txt"
          >Voir le projet <br />
          DFFRNTERA</span
        ><img class="banner__card__img" src="@/assets/masar.png"
      /></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: $medium-gap;

  .banner {
    background-color: $primary-color-faded;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 32px;
    padding: $mobile-padding;
    flex-direction: column;
    @media (min-width: $tablet-screen) {
      padding: $desktop-padding;
      flex-direction: row;
    }

    &__card {
      position: relative;
      background-color: $base-color-faded;
      border-radius: $radius;
      width: clamp(100px, 100%, 480px);
      height: 300px;
      z-index: 2;
      color: $text-color;
      display: flex;
      text-decoration: none;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      text-align: center;

      &__img {
        width: 100%;
        height: 300px;
        border-radius: $radius;
        object-fit: cover;
        object-position: left;
      }
      &__txt {
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
      width: clamp(100px, 100%, 380px);

      &__title {
        font-size: 24px;
        font-weight: $fat-weight;
        font-family: 'GoodTimes';
        width: clamp(100px, 100%, 300px);
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
  & iframe {
    height: 600px;
  }
}
</style>
