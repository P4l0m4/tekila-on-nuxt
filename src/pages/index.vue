<template>
  <main>
    <!-- Google tag (gtag.js) -->
    <!-- <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-YX2EH8N5NR"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-YX2EH8N5NR')
    </script> -->
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
      // jsonld: {
      //   '@context': 'https://schema.org/',
      //   '@type': 'WebSite',
      //   name: 'Tekila Web Factory',
      //   url: 'https://tekilawebfactory.com/',
      //   potentialAction: {
      //     '@type': 'SearchAction',
      //     target: '{search_term_string}',
      //     'query-input': 'required name=search_term_string',
      //   },
      // },
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      name: 'Tekila Web Factory',
      url: 'https://tekilawebfactory.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target: '{search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
