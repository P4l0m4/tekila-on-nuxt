<template>
  <div class="container">
    <img
      class="img"
      :src="require(`@/assets/${currentImage}`)"
      alt="
    "
    />
    <carousel-3d
      :autoplay="true"
      :autoplayHoverPause="true"
      :perspective="0"
      :width="180"
      :height="120"
      :space="192"
      @after-slide-change="onSlideChange"
    >
      <slide v-for="n in 8" :index="n - 1" :key="n">
        <div class="slide" :class="[`slide--${n}`]">
          <!-- <a class="slide__clickable" href="#">
            <img
              class="slide__clickable__icon"
              src="@/assets/icons/fullscreen.svg"
            />
          </a> -->
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      // opened: 'all',
      currentIndex: 0,
      images: [
        'grenade.jpg',
        'biscuits.jpg',
        'headphones.jpg',
        'nike2.jpg',
        'egypt.jpg',
        'sea.jpg',
        'nike.jpg',
        'iron.jpg',
      ],
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },
  methods: {
    onSlideChange(index) {
      this.currentIndex = index
    },
    // scroll(anchor, name) {
    //   document.querySelector(anchor).scrollIntoView({
    //     behavior: 'smooth',
    //   })
    //   this.opened = name
    //   this.$emit('toggle', this.opened)
    // },
  },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .img {
    width: clamp(200px, 100%, 700px);
    height: 440px;
    object-fit: cover;
    border-radius: $radius;
  }
}
.carousel-3d-slide {
  border-radius: $small-radius;
  background-size: cover;
  border: #1e1e1e solid 2px;

  &.carousel-3d-slide.current {
    padding: 8px;
    // .slide__clickable {
    //   backdrop-filter: blur(4px);
    //   background-color: rgba(255, 255, 255, 0.04);
    //   border-top: rgba(255, 255, 255, 0.06) solid 1px;
    //   border-bottom: rgba(255, 255, 255, 0.06) solid 1px;
    //   border-radius: $small-radius;
    //   &__icon {
    //     opacity: 1;
    //   }
    // }
  }

  &:nth-child(1) {
    background-image: url('@/assets/grenade.jpg');
    background-position: center;
  }
  &:nth-child(2) {
    background-image: url('@/assets/biscuits.jpg');
    background-position: center;
  }
  &:nth-child(3) {
    background-image: url('@/assets/headphones.jpg');
    background-position: center;
  }
  &:nth-child(4) {
    background-image: url('@/assets/nike2.jpg');
    background-position: center;
  }
  &:nth-child(5) {
    background-image: url('@/assets/egypt.jpg');
    background-position: center;
  }
  &:nth-child(6) {
    background-image: url('@/assets/sea.jpg');
    background-position: center;
  }
  &:nth-child(7) {
    background-image: url('@/assets/nike.jpg');
    background-position: center;
  }
  &:nth-child(8) {
    background-image: url('@/assets/iron.jpg');
    background-position: center;
  }
  .slide {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    // &__clickable {
    //   display: flex;
    //   height: fit-content;
    //   z-index: 3;
    // }
  }
}
</style>
