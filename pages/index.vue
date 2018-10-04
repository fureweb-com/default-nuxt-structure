<template>
  <section class="container">
    <loading v-show="!isCreated"></loading>
    <section class="body" v-show="isCreated">
      <div>{{title}}</div>
    </section>
  </section>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading.vue'

export default {
  components: { Loading },
  data() {
    return {
      isCreated: false,
      title: 'Hello World!'
    }
  },
  async beforeCreate() {
    let participants = (await axios.get('http://fureweb.gonetis.com:5000/api/participants')).data
    this.isCreated = true
  },
  mounted() {},
}
</script>

<style>

</style>

