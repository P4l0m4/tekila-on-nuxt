<template>
  <div class="toaster">
    Lien copié 😄<img class="toaster__icon" src="@/assets/icons/close.svg" />
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     status: 'opened',
  //   }
  // },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.toaster {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.04);
  border: rgba(255, 255, 255, 0.06) solid 1px;
  border-radius: $radius;
  color: $text-color;
  &:hover {
    cursor: pointer;
  }

  &__icon {
    width: 30px;
  }
}
</style>
