<template>
  <section>
    <div class="steps">
      <div class="steps__step">
        <img
          src="@/assets/icons/close.svg"
          alt="étape 1"
          @click="step = 1"
        />Etape 1
      </div>
      <div class="steps__step">
        <img
          src="@/assets/icons/close.svg"
          alt="étape 2"
          @click="step = 2"
        />Etape 2
      </div>
      <div class="steps__step">
        <img
          src="@/assets/icons/close.svg"
          alt="étape 3"
          @click="step = 3"
        />Etape 3
      </div>
      <div class="steps__step">
        <img
          src="@/assets/icons/close.svg"
          alt="étape 4"
          @click="step = 4"
        />Etape 4
      </div>
    </div>
    <div class="parties">
      <div class="parties__partie" v-if="step === 1">
        <label for="project-types" class="parties__partie__title"
          >Quel est votre projet ?</label
        >
        <select id="project-types">
          <option @click="project = 'creation'">
            Création de votre site web
          </option>
          <option @click="project = 'amelioration'">
            Amélioration de votre site web
          </option>
          <option @click="project = 'modelisation'">
            Modélisation et intégration 3D
          </option>
        </select>

        <a class="button-primary-small" @click="step = step + 1">Suivant</a>
      </div>

      <!-- partie 2 -->

      <!-- CREATION DE SITE WEB -->
      <div class="parties__partie" v-if="step === 2 && project === 'creation'">
        <label for="website-to-create" class="parties__partie__title"
          >Pour quel type de site internet ?</label
        >
        <select id="website-to-create">
          <option @click="newWebsite = 'vitrine'">Un site vitrine</option>
          <option @click="newWebsite = 'e-commerce'">Un site e-commerce</option>
        </select>
        <input type="number" placeholder="Nombre de pages" />
        <a class="button-primary-small" @click="step = step + 1">Suivant</a>
      </div>

      <!-- AMELIORATION DE SITE WEB -->
      <div
        class="parties__partie"
        v-if="step === 2 && project === 'amelioration'"
      >
        <h3 class="parties__partie__title">
          Quels problèmes rencontre votre site internet ?
        </h3>
        <label for="design" class="parties__partie__checkbox-label"
          ><input id="design" type="checkbox" />Son design</label
        >
        <label for="lenteur" class="parties__partie__checkbox-label"
          ><input id="lenteur" type="checkbox" />Sa lenteur</label
        >
        <label for="seo" class="parties__partie__checkbox-label"
          ><input id="seo" type="checkbox" />Son référencement Google</label
        >
        <label for="audit" class="parties__partie__checkbox-label"
          ><input id="audit" type="checkbox" />Vous n'êtes pas sûr</label
        >
        <input type="url" placeholder="URL de votre site web" />
        <a class="button-primary-small" @click="step = step + 1">Suivant</a>
      </div>

      <!-- partie 3 -->

      <div class="parties__partie" v-if="step === 3">
        <label for="" class="parties__partie__label">Label 3</label>
        <a class="button-primary-small" @click="step = step + 1">Suivant</a>
      </div>

      <div class="parties__partie" v-if="step === 4">
        <label for="recevoir-devis" class="parties__partie__label"
          >Votre adresse mail</label
        >

        <input
          id="recevoir-devis"
          type="email"
          placeholder="michel.sardou@gmail.com"
        /><a class="button-primary-small">Recevoir</a>

        <p class="parties__partie__txt">Vous recevrez votre devis sous 24H</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lowResult: 0,
      highResult: 0,
      step: 1,
      project: 'creation',
      newWebsite: 'vitrine',
    }
  },
  computed: {
    check() {
      alert(this.project)
      return this.project
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .steps {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    &__step {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      padding: 8px;
      cursor: pointer;

      & img {
        width: 30px;
      }
    }
  }

  .parties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    height: 100%;
    &__partie {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &__txt {
        font-weight: $slim-weight;
        display: flex;
        flex-direction: column;

        @media (min-width: $tablet-screen) {
          flex-direction: row;
        }
      }

      & select {
        width: clamp(240px, 100%, 300px);
        padding: 8px;
        border: $text-color solid 2px;
        border-radius: $small-radius;
        background-color: white;
        cursor: pointer;
      }

      &__checkbox-label {
        display: flex;
        align-items: center;
      }

      & input[type='checkbox'] {
        width: 50px;
        height: 20px;
        cursor: pointer;
        accent-color: $base-color;
      }

      input {
        border: 2px solid $text-color;
        border-radius: $small-radius;
        height: 44px;
        caret-color: $text-color;
        padding: 12px;
        color: $text-color;
        font-weight: $slim-weight;
        width: clamp(240px, 100%, 340px);

        &::placeholder {
          color: $text-color;
          font-weight: $slim-weight;
          opacity: 0.4;
        }
      }
    }
  }
  h3 {
    font-weight: $medium-weight;
    font-size: 16px;
  }
}
</style>
