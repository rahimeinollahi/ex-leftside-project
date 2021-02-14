<template>
    <div class="continer">
       <nav-book />
       <router-view />
    </div>
</template>

<script>
import NavBook from '../../../components/MainHomeCp/FolderSuperWinner/NavBook.vue'
    export default {
        name:'ImageView',
        components:{NavBook}
    }
</script>

<style lang="scss" scoped>

</style>