<template>
  <div class="container">
    <navbar-desktop />
    <navbar-mobile />

    <main class="">
      <Nuxt />
    </main>

    <footer-component />
    <json-l-d />
    <div class="background"></div>
  </div>
</template>

<script>
import NavbarDesktop from '../components/NavbarDesktop.vue'
import FooterComponent from '../components/FooterComponent.vue'
import JsonLD from '../components/JsonLD.vue'

export default {
  name: 'DefaultLayout',
  components: { NavbarDesktop, FooterComponent, JsonLD },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 64px 0;
  align-items: center;

  @media (min-width: $tablet-screen) {
    padding: 64px 0 0 0;
    gap: $medium-gap;
  }
  // .logo {
  //   width: 100%;
  //   padding: 0 16px;
  //   @media (min-width: $tablet-screen) {
  //     display: none;
  //   }
  // }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/header-blurred.jpg');
    filter: blur(24px);
    background-size: 140%;
    z-index: -1;
  }

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: $small-gap;
  }
}
</style>
