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
      <div class="parties__partie partie1" v-if="step === 1">
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

        <a class="button-primary" @click="step = step + 1">Suivant</a>
      </div>

      <!-- partie 2 -->
      <div
        class="parties__partie partie2"
        v-if="step === 2 && project === 'creation'"
      >
        <label for="website-to-create" class="parties__partie__title"
          >De quel type de site web avez-vous besoin ?</label
        >
        <select id="website-to-create">
          <option @click="newWebsite = 'vitrine'">Un site vitrine</option>
          <option @click="newWebsite = 'e-commerce'">Un site e-commerce</option>
        </select>
        <a class="button-primary" @click="step = step + 1">Suivant</a>
      </div>
      <div
        class="parties__partie partie2"
        v-if="step === 2 && project === 'amelioration'"
      >
        <h3 class="parties__partie__title">
          Quels problèmes rencontrez-vous avec votre site internet actuel ?
        </h3>
        <label for="design" class="parties__partie__checkbox-label"
          ><input id="design" type="checkbox" />Le design de vous convient
          plus</label
        >
        <label for="lenteur" class="parties__partie__checkbox-label"
          ><input id="lenteur" type="checkbox" />Votre site internet est trop
          lent</label
        >
        <label for="seo" class="parties__partie__checkbox-label"
          ><input id="seo" type="checkbox" />Vous avez du mal à être bien
          référencé sur Google</label
        >
        <label for="audit" class="parties__partie__checkbox-label"
          ><input id="audit" type="checkbox" />Vous n'êtes pas sûr</label
        >
        <a class="button-primary" @click="step = step + 1">Suivant</a>
      </div>

      <!-- partie 3 -->

      <div class="parties__partie partie3" v-if="step === 3">
        <label for="" class="parties__partie__label">Label 3</label>
        <a class="button-primary" @click="step = step + 1">Suivant</a>
      </div>

      <div class="parties__partie partie4" v-if="step === 4">
        <label for="" class="parties__partie__label">Label 4</label>
        <div class="result" v-if="result != 0">
          Total estimé entre {{ lowResult }} et {{ highResult }}€ TTC
        </div>
        <p>
          Obtenez un rendez-vous rapidement et discutez de vos besoins avec un
          membre de l'équipe
        </p>
        <div class="call-button">
          <img
            src="@/assets/icons/phone.svg"
            alt="numéro de téléphone Tekila Web Factory"
          />0695155301
        </div>
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
    gap: 32px;
    &__step {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
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

      & select {
        padding: 8px;
        border: $text-color solid 2px;
        border-radius: $small-radius;
        background-color: white;
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
    }
    .button-primary {
      width: clamp(100px, 100%, 375px);
      position: absolute;
      right: 16px;
      bottom: 16px;
      margin: auto;
    }
    .call-button {
      display: flex;
      align-items: center;
      gap: 8px;

      & img {
        width: 30px;
      }
    }
  }
}
</style>
