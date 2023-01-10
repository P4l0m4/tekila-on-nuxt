<template>
  <div class="container">
    <div class="circle">
      <div class="circle__img-1 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Création de Sites web</h3>
        <h2 class="circle__text__subtitle">Mobile-first</h2>
      </div>
    </div>
    <div class="circle">
      <div class="circle__img-2 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Soyez sur la 1e page</h3>
        <h2 class="circle__text__subtitle">Boost SEO technique</h2>
      </div>
    </div>
    <div class="circle">
      <div class="circle__img-3 img"></div>
      <div class="circle__text">
        <h3 class="circle__text__title">Modélisation et Intégration</h3>
        <h2 class="circle__text__subtitle">Vos produits en 3D</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 32px;
  flex-wrap: wrap;
  gap: 64px;

  @media (min-width: $tablet-screen) {
    padding: 0 $mobile-padding;
  }
  @media (min-width: $desktop-screen) {
    justify-content: center;
    padding: 0 $mobile-padding;
    gap: 64px;
  }
}
.circle {
  display: flex;
  align-items: center;
  gap: 32px;

  & .img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    position: relative;
    @media (min-width: $tablet-screen) {
      width: 90px;
      height: 90px;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -10px;
      left: -10px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      border: white dashed 2px;
      animation: rotation linear infinite 40s;
      @keyframes rotation {
        to {
          transform: rotate(360deg);
        }
      }
      @media (min-width: $tablet-screen) {
        width: 110px;
        height: 110px;
        top: -10px;
        left: -10px;
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
