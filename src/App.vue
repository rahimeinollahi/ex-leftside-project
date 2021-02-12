<template>
  <div class="continer">
        <nav-home-cp />
  </div>
       <router-view v-slot="{Component,route}">
          <transition :name="route.meta.transition">
              <component :is="Component" />
          </transition>
      </router-view>

</template>

<script>
import NavHomeCp from './components/MainHomeCp/NavHomeCp.vue'
export default {
  components:{NavHomeCp}
}
</script>

<style lang="scss">
//ts computer
.ts-home-enter-active,
.ts-home-leave-active{
  transition: all 1s;
}
.ts-home-enter-from,
.ts-home-leave-to{
  opacity: 0;
  -ms-transform:skewX(50deg);
  transform:skewX(50deg);
}

//ts about
.ts-about-enter-active,
.ts-about-leave-active{
  transition: all 0.5s ease-in 0.5s;
}
.ts-about-enter-from,
.ts-about-leave-to{
  opacity: 0;
  -ms-transform:rotate(35deg);
  transform:rotate(35deg);
}
//ts contactinfo
.ts-contactinfo-enter-active,
.ts-contactinfo-leave-active{
  transition: all 0.4s ease-in 0.4s;
}
.ts-contactinfo-enter-from,
.ts-contactinfo-leave-to{
  opacity: 0;
  -ms-transform:translate(50px);
  transform:translate(50px);
  opacity: 0;
}
</style>
