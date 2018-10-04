<template>
  <div v-swiper:mySwiper="swiperOption" v-if="isCreated" ref="swiperBox">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  props: ['isCreated'],
  data() {
    return {
      banners: [
        'https://via.placeholder.com/1000x1000',
        'https://via.placeholder.com/500x500',
        'https://via.placeholder.com/550x550',
        'https://via.placeholder.com/880x880',
        'https://via.placeholder.com/450x450'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      }
    }
  },
  mounted() { },
  watch: {
    isCreated() {
      this.$nextTick(_=>{
        const swiperBox = this.$refs.swiperBox

        const swiperBoxStyles = window.getComputedStyle(swiperBox)
        swiperBox.style.maxHeight = swiperBoxStyles.width
      })
    }
  }
}
</script>

<style>
.swiper-slide img { width: 100% }
</style>