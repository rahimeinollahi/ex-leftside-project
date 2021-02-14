<template>
    <div class="continer ">
        <!-- <h2  class="text-info m-3 ">for testing project not work .</h2>
        <p class="ml-3 text-danger text center"> Do not pay attention to details html or css ....</p>
        <hr class="bg-danger mx-3">
            <div class="row">
                <ol class="col-sm text-center">
                         <li class="list-group-item list-group-item-action" v-for="item in contactInfo" :key="item.id">{{item.title}}</li>
                </ol>
            </div> -->
            <ul class="pagination  text-center fixed-bottom ">
                 <li class="page-item"><a class="page-link" href="#">Previous</a></li>

                <li class="page-item" v-for="sub in paginItem" :key="sub.id">
                    <router-link class="page-link text-info" :to="{path:sub.router}">{{sub.id}}</router-link>
                </li>

                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            </ul>        
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'ContactInfo',
        computed:mapState(['contactInfo','paginItem'])
    }
</script>

<style lang="scss" scoped>
ul{
    align-items: center;
    justify-content: center;
    text-align: center;
   
}
</style>