<template>
  <section>
    <div class="steps">
      <div class="steps__step">
        <img src="@/assets/icons/close.svg" alt="étape 1" />Etape 1
      </div>
      <div class="steps__step">
        <img src="@/assets/icons/close.svg" alt="étape 2" />Etape 2
      </div>
      <div class="steps__step">
        <img src="@/assets/icons/close.svg" alt="étape 3" />Etape 3
      </div>
      <div class="steps__step">
        <img src="@/assets/icons/close.svg" alt="étape 4" />Etape 4
      </div>
    </div>
    <div class="parties">
      <div class="parties__partie partie1">
        <label for="project-types" class="parties__partie__label"
          >Quel est votre projet ?</label
        >
        <select id="project-types">
          <option>Création de votre site web</option>
          <option>Amélioration de votre site web</option>
          <option>Modélisation et intégration 3D</option>
        </select>
      </div>
      <div class="parties__partie partie2">
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
      </div>

      <a class="button-primary">Suivant</a>

      <!--
      <div class="parties__partie partie3">
        <label for="" class="parties__partie__label">Label 3</label>
      </div>
      <div class="parties__partie partie4">
        <label for="" class="parties__partie__label">Label 4</label>
      </div> -->
      <div class="result"></div>
    </div>
  </section>
</template>

<script>
export default {}
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
  }
}
</style>
