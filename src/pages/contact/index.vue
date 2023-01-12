<template>
  <section>
    <div class="form-and-invoice">
      <FormComponent />
      <devis-component />
    </div>
    <div class="infos">
      <div class="infos__titles">
        <h2>Contacter Tekila Web Factory</h2>
        <h3>Pour la création de votre site internet sur-mesure</h3>
        <h4>
          Pour toute demande d'information et la signature rapide d'un devis
        </h4>
      </div>
      <ul>
        <li>
          <img
            src="@/assets/icons/phone.svg"
            alt="numéro de téléphone Tekila Web Factory"
          />0695155301
        </li>
        <li>
          <img
            src="@/assets/icons/post.svg"
            alt="prendre un rendez-vous avec l'agence"
          />Obtenez un rendez-vous rapidement
        </li>
        <li>
          <img
            src="@/assets/icons/phone.svg"
            alt="numéro de téléphone Tekila Web Factory"
          />Discutez de vos besoins avec un membre de l'équipe
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import FormComponent from '@/components/contact/FormComponent.vue'
import DevisComponent from '@/components/contact/DevisComponent.vue'

export default {
  components: {
    FormComponent,
    DevisComponent,
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

  .form-and-invoice {
    justify-content: center;
    display: flex;
    gap: 32px;
    flex-direction: column;

    @media (min-width: $desktop-screen) {
      flex-direction: row;
    }
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.04);
    border: rgba(255, 255, 255, 0.06) solid 1px;
    border-radius: $radius;

    &__titles {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & h2 {
        font-size: 20px;
      }
      & h3,
      & h4 {
        font-size: 16px;
        font-weight: $medium-weight;
      }
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      list-style: none;
      font-weight: $slim-weight;

      & li {
        display: flex;
        gap: 8px;
        align-items: center;

        & img {
          width: 20px;
        }
      }
    }
  }
}
</style>
