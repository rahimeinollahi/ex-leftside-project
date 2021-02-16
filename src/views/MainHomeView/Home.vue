<template>
    <div class="continer">
       <nav-home-cp />
           <div class="row ">
               <div class="col-sm-4"><l-side-home /></div>

               <div class="col-sm-8">
                 <router-view v-slot="{ Component, route }">
                    <transition :name="route.meta.transition">
                        <component :is="Component" />
                  </transition>
                  </router-view>
               </div>
        </div>
    </div>
</template>

<script>
import LSideHome from '../../components/MainHomeCp/LSideHome.vue'
import NavHomeCp from '../../components/MainHomeCp/NavHomeCp.vue'


export default {
  name: 'Home',
  components: {
    LSideHome,
    // NavHomeC,
    NavHomeCp

  }
}
</script>
<style lang="scss" scoped>
</style>
