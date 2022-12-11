<template>
  <main>
    <header-component />
    <!-- <circles-component /> -->
    <puzzle-cards />
    <demo-component />
    <!-- <carousel-desktop /> -->
  </main>
</template>
<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
// import CirclesComponent from '~/components/CirclesComponent.vue'
import PuzzleCards from '~/components/PuzzleCards.vue'
import DemoComponent from '~/components/DemoComponent.vue'
// import CarouselDesktop from '~/components/CarouselDesktop'

export default {
  components: {
    HeaderComponent,
    // CirclesComponent,
    PuzzleCards,
    DemoComponent,
    // CarouselDesktop,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
