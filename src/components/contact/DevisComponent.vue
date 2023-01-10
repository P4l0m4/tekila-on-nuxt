<template>
  <section class="devis">
    <h1>Un site web créatif, combien ça coûte ?</h1>

    <a class="button-primary"
      >Votre Devis<SparklesEffect class="sparkles-effect"
    /></a>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.devis {
  display: flex;
  padding: 16px;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  width: clamp(100px, 100%, 700px);
  height: 400px;
  background-color: rgba(255, 255, 255, 0.04);
  border-top: rgba(255, 255, 255, 0.06) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
  border-radius: $radius;

  & h1 {
    font-size: 20px;
  }
  & h2 {
    font-size: 16px;
    font-weight: $medium-weight;
  }

  .button-primary {
    .button-primary:hover > .sparkles-effect {
      opacity: 1;
      display: block;
    }

    .sparkles-effect {
      display: none;
      z-index: -10 !important;
    }
  }
}
</style>
