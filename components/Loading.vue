<template>
  <section class="loading">
    <div class="loadingRing" ref="loadingRing"><div></div><div></div><div></div><div></div></div>
  </section>
</template>

<script>
export default {
  mounted() {
    const { loadingRing } = this.$refs
    loadingRing.style.left = ((window.innerWidth / 2) - 32) + 'px';
    loadingRing.style.top = ((window.innerHeight / 2) - 32) + 'px';
  }
}
</script>

<style lang="scss" scoped>
section.loading { 
  position: fixed;
  background-color: #efefef; 
  top:0;
  left:0;
  right:0;
  bottom: 0;

  .loadingRing {
    display: inline-block;
    position: relative;
    left: -100px;
    width: 64px;
    height: 64px;
    margin: 0 auto;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #fff;
      border-radius: 50%;
      animation: loadingRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #616161 transparent transparent transparent;
    }
    div:nth-child(1) { animation-delay: -0.45s; }
    div:nth-child(2) { animation-delay: -0.3s; }
    div:nth-child(3) { animation-delay: -0.15s; }
  }
}

@keyframes loadingRing { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

