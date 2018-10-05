<template>
  
</template>

<script>
export default {
  async mounted() {
    this.$store.commit('logout')
    // 스토어로부터 로그인 상태 확인 후 로그인 상태인 경우
    // 토큰 폐기처리 등 작업 처리
    // 모든 비동기 처리가 완료된 경우 메인으로 이동
    location.href = '/'
  }
}
</script>
