<template>
  <div class="container">
    <div class="banner">
      <div class="banner__text">
        <p class="banner__text__title">Lorem ipsum dolor sit amet</p>
        <p class="banner__text__subtitle">
          Lorem ipsum dolor sit amet conse quitur, lorem ipsum dolor sit amet
          elit. Lorem ipsum dolor sit amet, conse quitur elit lorem ipsum dolor.
        </p>
      </div>

      <img src="@/assets/lacoste.jpg" />

      <iframe src="https://www.blueyard.com/"></iframe>

      <div class="banner__cover">
        <div class="banner__cover__text"></div>
        <a
          class="banner__cover__screen"
          href="https://www.draw-your-polo.lacoste.com/fr/"
          >Voir le projet <br />Lacoste Draw your Polo</a
        ><a class="banner__cover__screen" href="https://www.blueyard.com/"
          >Voir le projet <br />BlueYard</a
        >
      </div>
    </div>

    <iframe src="http://letsplay.ouigo.com/ "></iframe>

    <div class="banner">
      <div class="banner__text">
        <p class="banner__text__title">Lorem ipsum dolor sit amet</p>
        <p class="banner__text__subtitle">
          Lorem ipsum dolor sit amet conse quitur, lorem ipsum dolor sit amet
          elit. Lorem ipsum dolor sit amet, conse quitur elit lorem ipsum dolor.
        </p>
      </div>

      <iframe src="https://exp-gemini.lusion.co/style"></iframe>

      <iframe src="https://www.dffrntera.com/"></iframe>
      <div class="banner__cover">
        <div class="banner__cover__text"></div>
        <a
          class="banner__cover__screen"
          href="https://exp-gemini.lusion.co/style"
          >Voir le projet EXP-Gemini</a
        >
        <a class="banner__cover__screen" href="https://www.dffrntera.com/"
          >Voir le projet <br />
          DFFRNTERA</a
        >
      </div>
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

    &__cover {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      position: absolute;
      gap: 32px;
      padding: $mobile-padding;
      flex-direction: column;
      @media (min-width: $tablet-screen) {
        padding: $desktop-padding;
        flex-direction: row;
      }

      &__text {
        width: clamp(100px, 100%, 380px);
        height: 100%;
      }

      &__screen {
        background-color: $base-color-faded;
        border-radius: $radius;
        width: clamp(100px, 100%, 400px);
        height: 300px;
        z-index: 2;
        color: $text-color;
        display: flex;
        text-decoration: none;
        font-size: 20px;
        align-items: center;
        justify-content: center;
        text-align: center;
        opacity: 0;
        transition: 0.4s ease;
        &:hover {
          opacity: 1;
        }
      }
    }

    & img {
      width: clamp(100px, 100%, 400px);
      height: 300px;
      border-radius: $radius;
      object-fit: cover;
    }

    &__text {
      display: flex;
      flex-direction: column;
      color: $text-color;
      gap: 8px;
      width: clamp(100px, 100%, 380px);

      &__title {
        font-size: 32px;
        font-weight: $fat-weight;
        font-family: 'GoodTimes';
      }

      &__subtitle {
        font-weight: $slim-weight;
        font-size: 20px;
      }
    }
  }
  & iframe {
    height: 600px;
  }
}
</style>
