<template>
  <div class="navbar">
    <nav class="nav-mobile">
      <!-- <router-link to="/"
        ><img
          class="nav-mobile__logo"
          src="@/assets/icons/tekila-logo.svg"
          alt="Tekila 3d logo"
        />
      </router-link> -->
      <div class="nav-mobile__links">
        <router-link
          to="/"
          class="nav-mobile__links__link"
          :class="{ 'nav-mobile__links__link--active': link === 'accueil' }"
          @click="link = 'accueil'"
          ><img
            class="nav-mobile__links__link__icon"
            src="@/assets/icons/home.svg"
            alt="icone maison"
          />Accueil</router-link
        >

        <router-link
          class="nav-mobile__links__link"
          to="/prestations"
          :class="{
            'nav-mobile__links__link--active': link === 'prestations',
          }"
          @click="link = 'prestations'"
          ><img
            class="nav-mobile__links__link__icon"
            src="@/assets/icons/monitor-cellphone-star.svg"
            alt="icone prestations"
          />Prestations</router-link
        >
        <router-link
          class="nav-mobile__links__link"
          to="/contact"
          :class="{ 'nav-mobile__links__link--active': link === 'contact' }"
          @click="link = 'contact'"
          ><img
            class="nav-mobile__links__link__icon"
            src="@/assets/icons/account.svg"
            alt="icone contact"
          />Contact</router-link
        >
        <router-link
          class="nav-mobile__links__link"
          to="/blog"
          :class="{ 'nav-mobile__links__link--active': link === 'blog' }"
          @click="link = 'blog'"
          ><img
            class="nav-mobile__links__link__icon"
            src="@/assets/icons/post.svg"
            alt="icone blog"
          />Blog</router-link
        >
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavbarMobile',
  components: {},
  props: {
    // toggleNavbar: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  data() {
    return {
      link: 'accueil',
    }
  },

  methods: {
    // toggle() {
    //   this.$emit("toggle", !this.toggleNavbar);
    // },
  },
}
</script>
<style scoped lang="scss">
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 4;
  // background-color: $base-color;
}

.nav-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  gap: 16px;

  @media (min-width: $tablet-screen) {
    display: none;
    gap: 16px;
    padding: 0 128px;
  }
  @media (min-width: $desktop-screen) {
    gap: 24px;
  }
  &__logo {
    height: 24px;
  }
  &__links {
    display: flex;
    gap: 24px;

    &__link {
      font-weight: $slim-weight;
      text-decoration: none;
      font-size: 16px;
      border-bottom: 2px solid transparent;
      color: $text-color;
      flex-direction: column;
      display: flex;
      align-items: center;

      &--active {
        color: rgb(188, 188, 188);
      }
      &__icon {
        width: 30px;
      }
    }
  }
}
</style>
