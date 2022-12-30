<template>
  <div class="navbar">
    <nav class="nav-desktop">
      <router-link to="/"
        ><img
          class="nav-desktop__logo"
          src="@/assets/icons/tekila-logo.svg"
          alt="Tekila 3d logo"
        />
      </router-link>
      <div class="nav-desktop__links">
        <router-link
          to="/"
          class="nav-desktop__links__link"
          :class="{ 'nav-desktop__links__link--active': link === 'accueil' }"
          @click="link = 'accueil'"
          >Accueil</router-link
        >

        <router-link
          class="nav-desktop__links__link"
          to="/prestations"
          :class="{
            'nav-desktop__links__link--active': link === 'prestations',
          }"
          @click="link = 'prestations'"
          >Prestations</router-link
        >
        <router-link
          class="nav-desktop__links__link"
          to="/contact"
          :class="{ 'nav-desktop__links__link--active': link === 'contact' }"
          @click="link = 'contact'"
          >Contact</router-link
        >
        <router-link
          class="nav-desktop__links__link"
          to="/blog"
          :class="{ 'nav-desktop__links__link--active': link === 'blog' }"
          @click="link = 'blog'"
          >Blog</router-link
        >
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavbarDesktop',
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
  position: sticky;
  top: 0;
  z-index: 4;
  width: 100%;
}

.nav-desktop {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 128px;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: $tablet-screen) {
    display: flex;
    gap: 16px;
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
      font-size: 20px;
      border-bottom: 2px solid transparent;
      color: $text-color;
      &--active {
        color: rgb(188, 188, 188);
      }
    }
  }
}
</style>
