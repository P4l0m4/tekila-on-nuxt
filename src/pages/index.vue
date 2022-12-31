<template>
  <main>
    <header-component />
    <puzzle-cards />
    <demo-component />
  </main>
</template>
<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
import PuzzleCards from '~/components/PuzzleCards.vue'
import DemoComponent from '~/components/DemoComponent.vue'

export default {
  components: {
    HeaderComponent,
    PuzzleCards,
    DemoComponent,
  },
  data() {
    return {
      jsonld: {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Tekila Web Factory',
        url: 'https://tekilawebfactory.com/',
        potentialAction: {
          '@type': 'SearchAction',
          target: '{search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    }
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld), // <- set jsonld object in data or wherever you want
        },
      ],
      __dangerouslyDisableSanitizers: ['script'], // <- this is important
    }
  },
}
</script>
<style lang="scss" scoped></style>
