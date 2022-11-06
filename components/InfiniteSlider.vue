<template>
  <infinite-slide-bar
    duration="40s"
    :barStyle="{ background: '#5f23a5', padding: '8px 0' }"
  >
    <!-- <span style="color: #fff">Helo World, I love Vue Infinite Slide Bar</span> -->
    <div class="infinite-slide-bar">
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/vuejs (1).svg" alt="icone vuejs" /> -->
        <p>Vue.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/react.svg" alt="icone reactjs" /> -->
        <p>Nuxt.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/symfony.svg" alt="icone symfony" /> -->
        <p>Node.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/wordpress.svg" alt="icone wordpress" /> -->
        <p>Medusa</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/android.svg" alt="icone android" /> -->
        <p>Webflow</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/apple-ios.svg" alt="icone ios" /> -->
        <p>MongoDB</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/threejs-logo.svg" alt="icone threejs" /> -->
        <p>Three.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <!-- <img src="@/assets/icons/mysql-icon.svg" alt="icone mysql" /> -->
        <p>Express.js</p>
      </div>
    </div>
  </infinite-slide-bar>
</template>
<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";

export default {
  name: "InfiniteSlider",
  components: {
    InfiniteSlideBar,
  },
};
</script>
<style lang="scss" scoped>
.infinite-slide-bar {
  display: flex;
  gap: 16px;
  &__element {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
    flex-direction: row;
    height: 30px;
    font-weight: $medium-weight;
    & img {
      width: 20px;
    }
  }
}
</style>
