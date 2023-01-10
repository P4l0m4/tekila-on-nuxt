<template>
  <form ref="form" class="form" @submit.prevent="submit">
    <!-- <h3 class="form__title">Laissez-nous un message</h3> -->
    <!-- CHAMP NOM -->
    <!-- <div class="form__group" :class="{ 'form__group--error': $v.name.$error }">
      <label class="form__group__label">Nom</label>
      <input
        v-model.trim="name"
        class="form__group__input"
        placeholder="Michel"
        name="name"
      />

      <div v-if="$v.name.$error && !$v.name.required" class="form__error">
        Ce champ est requis
      </div>

      <div v-if="$v.name.$error && !$v.name.maxLength" class="form__error">
        Maximum de caractères :
        {{ $v.name.$params.maxLength.max }}.
      </div>

      <div v-if="$v.name.$error && !$v.name.alpha" class="form__error">
        Ce champ ne peut contenir que des lettres
      </div>
    </div> -->
    <!-- CHAMP PRENOM -->
    <!-- <div
      class="form__group"
      :class="{ 'form__group--error': $v.firstName.$error }"
    >
      <label class="form__group__label">Prénom</label>
      <input
        v-model.trim="firstName"
        class="form__group__input"
        placeholder="Dupont"
        name="firstName"
      />

      <div
        v-if="$v.firstName.$error && !$v.firstName.required"
        class="form__error"
      >
        Ce champ est requis
      </div>

      <div
        v-if="$v.firstName.$error && !$v.firstName.maxLength"
        class="form__error"
      >
        Maximum de caractères :
        {{ $v.firstName.$params.maxLength.max }}
      </div>

      <div
        v-if="$v.firstName.$error && !$v.firstName.alpha"
        class="form__error"
      >
        Ce champ ne peut contenir que des lettres
      </div>
    </div> -->

    <!-- CHAMP EMAIL -->
    <div class="form__group" :class="{ 'form__group--error': $v.email.$error }">
      <label class="form__group__label">Email</label>
      <input
        v-model.trim="email"
        class="form__group__input"
        placeholder="michel.dupont@gmail.com"
        name="email"
      />

      <div v-if="$v.email.$error && !$v.email.required" class="form__error">
        Ce champ est requis
      </div>

      <div v-else-if="$v.email.$error && !$v.email.email" class="form__error">
        Veuillez renseigner un email valide
      </div>
    </div>

    <!-- CHAMP MESSAGE -->
    <div
      class="form__group"
      :class="{ 'form__group--error': $v.message.$error }"
    >
      <label class="form__group__label">Message</label>
      <textarea
        v-model.trim="message"
        class="form__group__textarea"
        placeholder="Bonjour..."
        name="message"
      />

      <div v-if="$v.message.$error && !$v.message.required" class="form__error">
        Ce champ est requis
      </div>
      <div
        v-if="$v.message.$error && !$v.message.minLength"
        class="form__error"
      >
        Minimum de caractères :
        {{ $v.message.$params.minLength.min }}
      </div>
      <div
        v-if="$v.message.$error && !$v.message.maxLength"
        class="form__error"
      >
        Minimum de caractères :
        {{ $v.message.$params.maxLength.max }}
      </div>
    </div>

    <!-- CHAMP RGPD -->
    <div class="form__group" :class="{ 'form__group--error': $v.rgpd.$error }">
      <div class="form__group__checkbox-container">
        <input
          id="rgpd"
          v-model.trim="rgpd"
          type="checkbox"
          class="form__group__input"
        />
        <label for="rgpd" class="form__group__checkbox-container__text">
          Vous acceptez que les informations saisies dans ce formulaire soient
          transmises par mail à Tekila Web Factory.
        </label>
      </div>
      <div v-if="$v.rgpd.$error && !$v.email.sameAs" class="form__error">
        Ce champ est requis
      </div>
    </div>

    <input
      id="HP"
      v-model="HP"
      class="HP"
      type="checkbox"
      name="not_a_robot"
      @change="checkIfHP"
    />
    <label for="HP" class="HP"> Je ne suis pas un robot </label>

    <button
      class="form__button"
      type="submit"
      :disabled="isSubmitting"
      :callback="submit"
    >
      Envoyer
    </button>

    <p v-if="sent" class="form__error">Message envoyé !</p>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  // alpha,
} from 'vuelidate/lib/validators'
import emailjs from '@emailjs/browser'

export default {
  name: 'FormComponent',
  data() {
    return {
      // name: '',
      // firstName: '',
      email: '',
      message: '',
      rgpd: false,
      age: 0,
      isSubmitting: false,
      sent: false,
      HP: false,
    }
  },
  validations: {
    // name: {
    //   required,
    //   maxLength: maxLength(40),
    //   alpha,
    // },
    // firstName: {
    //   required,
    //   maxLength: maxLength(40),
    //   alpha,
    // },
    email: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(50),
      maxLength: maxLength(2000),
    },
    rgpd: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    async submit() {
      // console.log('submit!')
      this.$v.$touch()

      if (!this.$v.$invalid) {
        if (this.HP === false) {
          await emailjs.sendForm(
            'service_f0ns79q',
            'template_w7w5617',
            this.$refs.form,
            'ZAG2PeOHvH8fTwjpW'
          )
        }

        this.sent = true
        this.isSubmitting = false
        // this.name = ''
        // this.firstName = ''
        this.email = ''
        this.message = ''
        this.rgpd = false
        this.$v.$reset()
      }
    },
    checkIfHP() {
      // console.log('honey ' + this.HP)
    },
  },
}
</script>
<style lang="scss" scoped>
.form {
  width: clamp(240px, 100%, 384px);
  background-color: $primary-color;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: $radius;
  @media (min-width: $tablet-screen) {
    padding: 24px;
    gap: 24px;
  }

  &__title {
    font-weight: $medium-weight;
    color: $secondary-color;
    font-size: 24px;
    text-align: center;
  }

  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__input,
    &__textarea {
      border: 2px solid $secondary-color;
      border-radius: $small-radius;
      height: 44px;
      width: 100%;
      caret-color: $secondary-color;
      padding: 12px;
      color: $secondary-color;
      font-weight: $slim-weight;

      &::placeholder {
        color: $secondary-color;
        font-weight: $slim-weight;
        opacity: 0.4;
      }
      &[type='checkbox'] {
        width: 50px;
        height: 20px;
        cursor: pointer;
        accent-color: $secondary-color;
      }
    }
    &__textarea {
      resize: none;
      height: 140px;
    }

    &__label {
      font-weight: $medium-weight;
      color: $secondary-color;
      position: absolute;
      background-color: $primary-color;
      padding: 0 6px;
      top: -12px;
      left: 8px;
    }
    &__checkbox-container {
      color: $text-color;
      display: flex;
      gap: 8px;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;

      &__text {
        font-weight: $slim-weight;
        font-size: 12px;
      }
    }
  }
  &__button {
    width: 100%;
    padding: 8px;
    background: $secondary-color;
    border-radius: $small-radius;
    color: $text-color;
    font-weight: $medium-weight;
    position: relative;
    cursor: pointer;

    // &:hover {
    //   background: linear-gradient(
    //     90deg,
    //     rgba(236, 159, 5, 1) 40%,
    //     rgba(236, 86, 5, 1) 100%
    //   );
    // }
  }

  &__error {
    font-weight: $slim-weight;
    font-size: 12px;
  }
}
.HP {
  display: none;
}
</style>
