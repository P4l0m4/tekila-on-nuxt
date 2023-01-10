<template>
  <section>
    <div class="form">
      <FormComponent />
      <div class="form__devis"></div>
    </div>
    <div class="infos">
      <h1>Contacter Tekila Web Factory</h1>
      <h2>Pour la création et la refonte de votre site internet</h2>
      <h3>
        Pour toute demande d'information et la signature rapide d'un devis
      </h3>
      <ul>
        <li>0695155301</li>
        <li>Obtenez un rendez-vous rapidement</li>
        <li>Argument 3</li>
      </ul>
    </div>
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
  padding: 0 16px;
  gap: 64px;

  @media (min-width: $tablet-screen) {
    padding: 0 128px;
  }

  .form {
    justify-content: center;
    display: flex;
    gap: 32px;
    &__devis {
      display: flex;
      width: 600px;
      height: 400px;
      background-color: black;
    }
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & .ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      & .li {
        list-style: none;
        display: flex;
        gap: 8px;
      }
    }
  }
}
</style>
