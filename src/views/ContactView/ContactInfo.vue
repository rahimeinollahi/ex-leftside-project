<template>
    <div class="continer">
        <nav-home-cp />
        <contact-info-cp />
        <hr class="hr-info mx-2" >
        <div class="row">
                <router-view class="col-sm-4" name="LSide"></router-view>
                <router-view class="col-sm-8" name="MainContact"></router-view>
        </div>

    </div>
</template>

<script>
import ContactInfoCp from '../../components/FolderContactCp/ContactInfoCp.vue'
import NavHomeCp from '../../components/MainHomeCp/NavHomeCp.vue'
    export default {
  components: { ContactInfoCp, NavHomeCp },
        name:'ContactInfo'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
.hr-info{
    background-color: $bg-hr-color;
    height: 1px;
}
</style>