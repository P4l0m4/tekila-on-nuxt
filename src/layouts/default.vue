<template>
  <div class="container">
    <navbar-desktop />

    <main class="">
      <Nuxt />
    </main>

    <footer-component />
    <json-l-d />
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
  background-image: url('@/assets/header.jpg');
  background-size: 140%;
  background-position: left bottom;
  position: relative;
  gap: $medium-gap;
  padding: 64px 0 0 0;

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: $small-gap;
  }
}
</style>
