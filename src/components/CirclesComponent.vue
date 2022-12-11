<template>
  <div class="container">
    <div class="circle">
      <div class="circle__img-1 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Création de</h3>
        <h2 class="circle__text__subtitle">Sites web</h2>
      </div>
    </div>
    <div class="circle">
      <div class="circle__img-2 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Boost SEO</h3>
        <h2 class="circle__text__subtitle">Boost SEO</h2>
      </div>
    </div>
    <div class="circle">
      <div class="circle__img-3 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Modélisation 3D</h3>
        <h2 class="circle__text__subtitle">Modélisation</h2>
      </div>
    </div>
    <div class="circle">
      <div class="circle__img-4 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Optimisation</h3>
        <h2 class="circle__text__subtitle">Optimisation</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 64px;
  align-items: center;
  width: 100%;
  padding: 32px $mobile-padding;

  @media (min-width: $tablet-screen) {
    // padding: 64px 128px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $desktop-screen) {
    // padding: 64px 128px;
    grid-template-columns: repeat(4, 1fr);
  }
}
.circle {
  display: flex;
  align-items: center;
  gap: 32px;

  & .img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-size: cover;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -10px;
      left: -10px;
      border-radius: 50%;
      width: 110px;
      height: 110px;
      border: white dashed 2px;
      animation: rotation linear infinite 40s;
      @keyframes rotation {
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
  &__img-1 {
    background-image: url('@/assets/keyboard.jpg');
  }
  &__img-2 {
    background-image: url('@/assets/jellyfish.jpg');
  }
  &__img-3 {
    background-image: url('@/assets/car.jpg');
  }
  &__img-4 {
    background-image: url('@/assets/header.jpg');
  }

  &__text {
    color: $text-color;

    &__title {
      font-weight: $slim-weight;
      font-size: 16px;
    }

    &__subtitle {
      font-size: 22px;
      font-weight: $fat-weight;
      white-space: nowrap;
    }
  }
}
</style>
