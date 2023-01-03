<template>
  <section class="container">
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <lottie-player
      class="animation"
      src="https://lottie.host/9546e976-942f-47e0-b359-724599be37f9/ZpmZC5swaP.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>

    <div class="details">
      <div class="details__card">
        <div class="details__card">
          <h3 class="details__card__title">
            <img
              class="details__card__title__img"
              src="@/assets/icons/post.svg"
              alt=""
            />Détails sur la carte
          </h3>
          <li class="details__card__list">
            <ul>
              Détail 1
            </ul>
            <ul>
              Détail 2
            </ul>
            <ul>
              Détail 3
            </ul>
          </li>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.animation {
  width: clamp(100px, 100%, 300px);
}

.details {
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.04);
  border-top: rgba(255, 255, 255, 0.06) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
  border-radius: $radius;

  &__card {
    display: flex;
    gap: 8px;
    flex-direction: column;

    &__title {
      display: flex;
      align-items: center;
      gap: 8px;

      &__img {
        width: 30px;
      }
    }
    &__list {
      font-weight: $slim-weight;
    }
  }
}
</style>
