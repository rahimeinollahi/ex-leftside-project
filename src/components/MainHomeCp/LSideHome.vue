<template>
    <div id="bg-leftside" class="continer h-100">
        <div class="row m-2" v-for="item in LSideHome" :key="item.id">
                <h3 @click="item.showHeaders=!item.showHeaders" class="col-sm-12 text-center btn btn-light dropdown-toggle">{{item.header}}</h3>
                    <div  class="w-100 dorpdown" v-if="item.showHeaders">
                     <div class="w-100 dropdown0menu" v-if="item.parts">
                         <router-link class="col-sm-12 dropdown-item btn btn-light text-center mt-1" v-for="sub in item.parts" :key="sub.id" :to="sub.router">{{sub.headerItem}}</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'LSideHome',
        computed:mapState(['LSideHome'])
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
#bg-leftside{
    background-color:$bg-leftside-color;
}
</style>