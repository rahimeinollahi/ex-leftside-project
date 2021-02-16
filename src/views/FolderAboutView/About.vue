<template>
    <div class="continer">
        <nav-home-cp />
        <about-cp />
    </div>
</template>

<script>
import AboutCp from '../../components/FolderAboutCp/AboutCp.vue'
import NavHomeCp from '../../components/MainHomeCp/NavHomeCp.vue'
    export default {
  components: { AboutCp, NavHomeCp },
        name:'About'
    }
</script>

<style lang="scss" scoped>

</style>