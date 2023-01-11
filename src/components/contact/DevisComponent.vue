<template>
  <section class="devis">
    <h1 v-if="toggleInvoice === false">
      Un site web créatif, combien ça coûte ?
    </h1>

    <a
      class="button-primary"
      @click="toggleInvoice = true"
      v-if="toggleInvoice === false"
      >Votre Devis<SparklesEffect class="sparkles-effect"
    /></a>
    <img
      class="devis__close"
      src="@/assets/icons/close.svg"
      alt="fermer le devis"
      @click="toggleInvoice = false"
      v-if="toggleInvoice === true"
    />
    <invoice-generator v-if="toggleInvoice === true" />
  </section>
</template>

<script>
import InvoiceGenerator from '@/components/contact/InvoiceGenerator.vue'
export default {
  components: {
    InvoiceGenerator,
  },
  data() {
    return {
      toggleInvoice: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.devis {
  display: flex;
  padding: 16px;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  width: clamp(100px, 100%, 700px);
  height: 470px;
  background-color: rgba(255, 255, 255, 0.04);
  border: rgba(255, 255, 255, 0.06) solid 1px;
  border-radius: $radius;
  position: relative;

  & h1 {
    font-size: 20px;
  }
  & h2 {
    font-size: 16px;
    font-weight: $medium-weight;
  }

  .button-primary {
    position: relative;
    .button-primary:hover > .sparkles-effect {
      opacity: 1;
      display: block;
    }

    .sparkles-effect {
      display: none;
      z-index: -10 !important;
    }
  }

  &__close {
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>
