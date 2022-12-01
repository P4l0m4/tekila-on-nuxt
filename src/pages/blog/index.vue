<template>
  <main>
    <h1>BLOG</h1>
    <router-link to="/2022-11-15-test-article" class="article-card"
      ><img src="@/assets/jellyfish.jpg" alt="" class="article-card__img" />
      <h2 class="article-card__title">Article de test</h2>
      <h3 class="article-card__description">
        Catchy description of the article, catchy description
      </h3></router-link
    >
  </main>
</template>
<script></script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  padding: 0 128px;
  gap: 64px;
  h1 {
    font-family: 'GoodTimes';
  }

  .article-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border-radius: $radius;
    background-color: $primary-color-faded;
    gap: 16px;
    padding: $mobile-padding;

    &__img {
      height: 50%;
      object-fit: cover;
      border-radius: $radius;
    }
    &__title,
    &__description {
      text-decoration: none;
      color: $text-color;
    }

    &__description {
      font-weight: $slim-weight;
    }
  }
}
</style>
