<template>
  <div>
    <section id="loginWrapper">
      <!-- 전체 어디서든 로그인 버튼을 누르면 현재 컴포넌트가 호출된다. (팝업형은 컴포넌트로 작성) -->
      <h1>로그인 페이지</h1>
      <div>로그인 상태 {{isLoggedIn}}</div>
      <div class="button" @click="kakaoLogin" v-if="!isLoggedIn">카카오톡 로그인</div>
      
      <!-- 로그인 시에 노출될 사용자 정보 -->
      <section class="kakaoInfo" v-if="isLoggedIn">
        <p>닉네임: {{nickname}}</p>
        <p>프로필이미지<br>
          <img :src="profile_image" alt="">
        </p>
        <p>썸네일이미지<br>
          <img :src="thumbnail_image" alt="">
        </p>
      </section>
      <div class="button" @click="kakaoLogout" v-if="isLoggedIn">카카오톡 로그아웃</div>
      <!-- 그외 소셜 로그인 -->
      <!-- <div class="button">이메일 로그인</div> -->
      <p class="emptyBlock"></p>
      <nuxt-link to="/" class="button">홈으로 이동</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: '//developers.kakao.com/sdk/js/kakao.min.js', type: 'text/javascript', body: true }
      ]
    }
  },
  data() {
    return {
      isLoggedIn: false, // store에서 관리되어야함
      KAKAO_JS: '4bb817da99bbf29968364504e11a354f'
    }
  },
  methods: {
    kakaoLogin() {
      Kakao.init(this.KAKAO_JS)
      Kakao.API.vue = this
      Kakao.Auth.login({
        throughTalk: false,
        success(_){
          Kakao.API.request({
            url: '/v1/user/me',
            success(res) {
              const {id: user_id, kaccount_email: email, properties:{nickname, profile_image, thumbnail_image}} = res
              Kakao.API.vue.isLoggedIn = true
              Kakao.API.vue.nickname = nickname
              Kakao.API.vue.profile_image = profile_image
              Kakao.API.vue.thumbnail_image = thumbnail_image
              // console.log(user_id, email, nickname, profile_image, thumbnail_image);

              // const alertMessage = `UID: ${user_id}\nEMAIL: ${email || '입력되지않음'}\n닉네임: ${nickname}\n프로필이미지경로: ${profile_image}\n썸네일이미지경로: ${thumbnail_image}`
            },
            fail(error) { console.error(JSON.stringify(error)) }
          });
        },
        fail(err) {
          console.log('fail: ', err)
          alert(JSON.stringify(err))
        }
      })
    },
    kakaoLogout() {
      Kakao.Auth.logout(this.onLogout)
    },
    onLogout() {
      window.location.href = '/'
    }
  },
}
</script>

<style lang="scss" scoped>
#loginWrapper {
  padding: 5%;
  img { width: 100% }
  .button { display: block; text-decoration: none; height: 5vh; line-height: 5vh; text-align: center; width: 100%; border: 1px solid black; }
  .emptyBlock { display: block; height: 50px; }
}
</style>
