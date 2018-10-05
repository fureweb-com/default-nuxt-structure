<template>
  <div>
    <section id="loginWrapper">
      <!-- 전체 어디서든 로그인 버튼을 누르면 현재 컴포넌트가 호출된다. (팝업형은 컴포넌트로 작성) -->
      <h1>로그인 페이지</h1>
      
      <div class="button" @click="kakaoLogin">카카오톡 로그인</div>
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
      KAKAO_JS: '4bb817da99bbf29968364504e11a354f'
    }
  },
  methods: {
    kakaoLogin() {
      Kakao.init(this.KAKAO_JS)
      Kakao.Auth.login({
        throughTalk: false,
        success(_){
          Kakao.API.request({
            url: '/v1/user/me',
            success(res) {
              const {id: user_id, kaccount_email: email, properties:{nickname, profile_image, thumbnail_image}} = res
              console.log(user_id, email, nickname, profile_image, thumbnail_image);

              // 카카오톡 고유번호
              alert(user_id)
            },
            fail(error) { console.error(JSON.stringify(error)) }
          });
        },
        fail(err) {
          console.log('fail: ', err)
          alert(JSON.stringify(err))
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
#loginWrapper {
  padding: 5%;

  .button { display: block; text-decoration: none; height: 5vh; line-height: 5vh; text-align: center; width: 100%; border: 1px solid black; }
  .emptyBlock { display: block; height: 50px; }
}
</style>
