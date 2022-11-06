<template>
  <footer>
    <a href="#">©TEKILA</a>|<a href="#">CGV</a>|
    <a href="#">Mentions légales</a>
  </footer>
</template>
<style lang="scss" scoped>
footer,
a {
  color: $text-color;
  font-weight: 100;
  text-decoration: none;
}
footer {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  padding: 32px $mobile-padding;

  @media (min-width: $tablet-screen) {
    padding: 64px 128px;
  }
}
</style>
