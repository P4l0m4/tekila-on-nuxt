<template>
  <main>
    <HeaderComponent />
    <CirclesComponent />
    <PuzzleCards />
    <DemoComponent />
    <AboutUs />
    <ContactView />
  </main>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CirclesComponent from "@/components/CirclesComponent.vue";
import PuzzleCards from "@/views/PuzzleCards.vue";
import DemoComponent from "@/components/DemoComponent.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactView from "@/views/ContactView.vue";

export default {
  components: {
    HeaderComponent,
    CirclesComponent,
    PuzzleCards,
    DemoComponent,
    AboutUs,
    ContactView,
  },
};
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: $medium-gap;
}
</style>
