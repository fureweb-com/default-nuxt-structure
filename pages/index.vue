<template>
  <section class="container">
    <loading v-show="!isCreated"></loading>
    <section class="body" v-show="isCreated">
      <div>{{title}}</div>
      <nuxt-link to="/login">로그인</nuxt-link>

      <swiper :isCreated="isCreated"></swiper>
    </section>
  </section>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading.vue'
import Swiper from '~/components/Swiper.vue'

export default {
  components: { Loading, Swiper },
  data() {
    return {
      isCreated: false,
      title: 'Hello World!',
    }
  },
  async mounted() {
    this.isCreated = true

    console.log(await this.$axios.$get('/participants'))
  },
}
</script>

<style lang="scss">
.swiper-slide img { width: 100% }
</style>
