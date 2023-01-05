<template>
  <div class="container">
    <carousel-desktop class="carousel" />
    <!-- <div class="details">
      <div class="details__card">
        <div class="details__card">
          <h3 class="details__card__title">
            <img
              class="details__card__title__img"
              src="@/assets/icons/account.svg"
              alt=""
            />Détails sur la carte
          </h3>
          <ul class="details__card__list">
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
          </ul>
        </div>
      </div>
      <div class="details__card">
        <div class="details__card">
          <h3 class="details__card__title">
            <img
              class="details__card__title__img"
              src="@/assets/icons/monitor-cellphone-star.svg"
              alt=""
            />Détails sur la carte
          </h3>
          <ul class="details__card__list">
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
          </ul>
        </div>
      </div>
      <div class="details__card">
        <div class="details__card">
          <h3 class="details__card__title">
            <img
              class="details__card__title__img"
              src="@/assets/icons/post.svg"
              alt=""
            />Détails sur la carte
          </h3>
          <ul class="details__card__list">
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import CarouselDesktop from '@/components/CarouselDesktop.vue'
export default {
  components: { CarouselDesktop },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
