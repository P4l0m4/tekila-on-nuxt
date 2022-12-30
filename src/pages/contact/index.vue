<template>
  <section>
    <FormComponent />
  </section>
</template>
<script>
import FormComponent from '@/components/FormComponent.vue'

export default {
  components: {
    FormComponent,
  },
}
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  @media (min-width: $tablet-screen) {
    padding: 0 128px;
  }
}
</style>
