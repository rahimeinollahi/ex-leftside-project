<template>
    <div class="continer">
        <!-- <p>test again</p> -->
        <div id="home-habbit" class="row" v-for="item in habbitAtomItems" :key="item.id">
            <h2 class="w-100">{{item.header}}</h2>
            
            <ul class="w-100 m-2 px-5 "  v-if="item.partText">
                    <li class="col-sm-3 text-link" v-for="sub in item.partText" :key="sub"><a :href="sub.href">{{sub.text}}</a></li>
            </ul>
                
             <div class="w-100" v-for="sub2 in item.partText" :key="sub2.text" >
                 <hr class="mx-2">
                 <h4 :id="sub2.id">{{sub2.text}}  <i class="fas fa-heart"> <a href="#home-habbit"> back</a></i></h4>
                 <p class="px-3">{{sub2.content}}</p>
            </div>   
            
        </div>   
        <div class="w-100 text-center text-link "><a href="#home-habbit ">home</a></div>    
       
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'HabbitAtomCp',
        computed:mapState(['habbitAtomItems']),
        
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
@font-face {
    font-family: 'habbit-font';
    src: url('../../assets/fonts/Hanalei-Regular.ttf');
}
*{
    font-family: 'habbit-font';
}
// $tbl-footer-shadow-color-orange:orange;
// $tbl-footer-shadow-color-yellow:yellow;
// $tbl-head-shadow-color-red:red;
// $tbl-head-shadow-color-blue:blue;
p{
    text-align: justify;
    text-indent: 50px;
    line-height: 40px;
}
h2{
    text-shadow: 5px 2px 10px $tbl-footer-shadow-color-orange,
    2px 3px 15px  $tbl-footer-shadow-color-yellow;
}
h4{
     text-shadow: 5px 2px 10px $tbl-head-shadow-color-red,
    2px 3px 15px $tbl-footer-shadow-color-orange;
}
ul
{
    li{
        list-style-type: circle;
    }
}
</style>