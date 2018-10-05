<template>
  <section class="container">
    <loading v-show="!isCreated"></loading>
    <section class="body" v-show="isCreated">
      <!--navigator 위치 / 로그인 상태인 경우, 아닌 경우 노출이 다름 / 컴포넌트로 분리 필요 -->
      <section v-show="!isLoggedIn" class="whenLoggedOut">
        <nuxt-link to="/login">로그인</nuxt-link>
      </section>
      <section v-show="isLoggedIn" class="whenLoggedIn">
        <img class="profileImage" :src="thumbnailImage" alt="프로필이미지"> {{nickname}}님! 안녕하세요. <nuxt-link to="/logout">로그아웃</nuxt-link>
      </section>

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
      isCreated: false
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    nickname() {
      return this.$store.state.nickname
    },
    thumbnailImage() {
      return this.$store.state.thumbnailImage
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
.profileImage { width: 40px; border-radius: 50% }
</style>
