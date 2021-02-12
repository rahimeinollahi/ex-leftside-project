<template>
    <div class="continer">
        <div class="row">
            <div class="col-sm-4"><profile-cp /></div>
            <div class="col-sm-8"><bio-me-cp /></div>
        </div>
    </div>
</template>

<script>
import BioMeCp from './BioMeCp.vue'
import ProfileCp from './ProfileCp.vue'
    export default {
        name:'AboutCp',
        components:{
            ProfileCp,
            BioMeCp
        }

 }
</script>

<style lang="scss" scoped>

</style>