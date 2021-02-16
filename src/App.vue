<template>
  <div id="mainhomepage2" class="">
        <!-- <nav-home-cp /> -->
  </div>
       <router-view v-slot="{Component,route}">
          <transition :name="route.meta.transition">
              <component :is="Component" />
          </transition>
      </router-view>

</template>

<script>
// import NavHomeCp from './components/MainHomeCp/NavHomeCp.vue'
export default {
  // components:{NavHomeCp}
}
</script>

<style lang="scss">

</style>
