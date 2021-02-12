<template>
    <div id="nav-home" class="continer nav-fix">
        <div  class="row text-center ">

            <div class="col-sm-6 ">
                <div class="row">
                    <router-link class="col-sm btn btn-light m-1 card "
                        v-for="item in navHomeItems"
                        :key="item.id" 
                        :to="{path:item.router}"
                        >{{item.textLink}}
                    </router-link>
                </div>
            </div>

            <div class="col-sm-6">
                    <input @keyup.enter="showMesage()"  type="text" name="txt-search" id="txt-search" 
                    class="form-control m-1 " placeholder="Search Item" v-model="message"
                    >
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'NavHomeCp',
        computed:mapState(['navHomeItems']),
        methods:{
            showMesage(){
                alert('Hi my friend not work this searh for testing append here....')
                this.message=''
            }
        },
        data(){
            return{message:''}
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
.nav-fix{
 
}
#txt-search{
    border: 1px solid $br-color;
}
#txt-search:hover{
    box-shadow:  1px 2px 5px $br-color,
    2px 1px 3px $hover-text-color ;
}
#nav-home{
    padding: 0  15px;
}
 
</style>