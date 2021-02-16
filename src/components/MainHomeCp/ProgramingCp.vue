<template>
    <div class="continer">
            <h3>Machine learning....</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo modi omnis blanditiis quam maxime. Velit vel enim placeat ratione recusandae iste qui aliquid quibusdam incidunt. Itaque molestiae beatae non?</p>
        <div class="pad-top" v-for="value in tableFooterContent" :key="value.id" :id="value.id">
                <hr>
                <h2  id="tbl-foot">{{value.headerName}}</h2>
                <p id="tbl-footer">{{value.contentText}}</p>
            </div>

        <div class="row sticky a-programing">
            <a id="nav-bottom"
             class=" btn btn-link d-flex justify-content-between" 
             v-for="item in tableFooterSection "
              :key="item.id"
               :href="item.href">{{item.FooterName}}</a>
        </div>

    </div>
</template>

<script>
// import $ from 'jquery';
// $().ready(function(){
//     $('.a-programing').click(function(){
//         // $('p').animate({letterSpacing: "+=50px"})
//         $('p').addClass('my-style');

//         setTimeout(function(){
//                 // $('p').animate({letterSpacing: "-=50px"})
//                 $('p').removeClass('my-style');
//             },450)
//     })
// })

import {mapState} from 'vuex'
    export default {
        name:'ProgramingCp',
        computed:mapState(['tableFooterSection','tableFooterContent'])
    }
</script>

<style lang="scss" scoped>
// .my-style{
//     // transform: 
//     // -ms-transform: 
//     line-height: 200px;
//     // letter-spacing: 40px;
// }
@import '../../assets/sass/base/_variable.scss';
$tbl-footer-shadow-color-orange:orange;
$tbl-footer-shadow-color-yellow:yellow;
#tbl-foot{
    text-shadow: 2px 3px 10px $tbl-footer-shadow-color-orange,
    3px 4px 10px  $tbl-footer-shadow-color-yellow;
}
#nav-bottom{
    // background-color: red;
    border: 1px solid rgb(92, 90, 90);
    background-color: #ffffff;
    // text-align: center;
    align-items: center;
    
}
#tbl-footer{
    text-indent: 50px;
    line-height: 50px;
   padding-right: 10px;
   text-transform: lowercase;
//    text-align: center;
    text-align: justify;
}
@font-face {
    font-family:'pagefont' ;
    src: url('../../assets/fonts/AlexandriaFLF.ttf');
}
*{font-family: 'pagefont'}
@import '../../assets/sass/base/_variable.scss';

@media screen and(min-width:600px) {
            .sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        bottom: 0;
        }
        .pad-top
            {
                padding-top: 50px;
                // padding-bottom: 50px;

            }

}
</style>