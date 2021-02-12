<template>
    <div class="continer">
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


export default {
  name: 'Home',
  components: {
    LSideHome

  }
}
</script>
<style lang="scss" scoped>


</style>
