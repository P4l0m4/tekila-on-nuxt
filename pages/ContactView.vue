<template>
  <section>
    <FormComponent />
  </section>
</template>
<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 128px;
}
</style>
