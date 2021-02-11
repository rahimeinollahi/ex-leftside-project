<template>
  <div class="continer">
        <nav-home-cp />
  </div>
  <router-view/>

</template>

<script>
import NavHomeCp from './components/MainHomeCp/NavHomeCp.vue'
export default {
  components:{NavHomeCp}
}
</script>

<style lang="scss">

</style>
