<template>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Tekila Web Factory",
      "url": "https://tekilawebfactory.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  </script>
</template>
<script>
export default {
  data() {
    return {}
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
}
</script>
