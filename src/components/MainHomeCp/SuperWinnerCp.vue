<template>
    <div class="continer">
       <span class="text-danger">this page rather well designed prevous page (clean code )write by v-for except img tag</span>
         <div class="row  mt-1 mr-1" v-for="item in superWinner" :key="item.id">
                <div class="media border mt-1 p-3 mr-1 col-sm img-parent-hover">
                    <router-link to="/imageview">
                    <img src="../../assets/photo/1.jpg" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
                    </router-link>
                    <div class="media-body">
                            <h4>{{item.headerBook}} <small><i> {{item.bookIcon}}</i></small></h4>
                            <p>{{item.bookContent}}</p>      
                    </div>
                </div>
         </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'SuperWinner',
        computed:mapState(['superWinner'])
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
//clean code
// $br-parent-color:rgb(255, 10, 104);
// $br-img-color:rgb(236, 236, 200);

.row-pad{
    padding: 2px;
    // box-shadow: 2px 3px 15px $br-parent-color;
}
.img-parent-hover:hover{
    opacity: 0.6;
    border: 1px solid $br-parent-color;
      box-shadow: 2px 3px 15px $br-parent-color;
    
}
img{
    border: 1px solid black;
}
img:hover{
    opacity: 0.5;
    border: 1px solid $br-img-color;
}
</style>