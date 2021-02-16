<template>
    <div id="homepage-ai" class="continer">
        <hr class="bg-danger mx-3">
         <div  class="row">
             <div class="col-sm-3 list-group-item text-center bg-left-ai" >
                 <a class="btn-block list-group-item-action text-primary" 
                        data-trigger="hover"
                        v-for="item in getDataPopover" :key="item.id"
                        :title="item.title"
                        data-toggle="popover"
                        :href="'#'+item.href"
                        :data-content="item.dataContent">
                        {{item.text}}
                 </a>
             </div>

             <div class="col-sm-9" >
                 <div class="text-ctn px-3" v-for="value in getDataPopover" :key="value.id">
                     <hr class="bg-warning mx-2">
                     <h3 :id="value.href">{{value.title}}</h3>
                     <p class="p-ai">{{value.content}}</p>
                 </div>
            </div>
            <a id="btn-home-ai" href="#homepage-ai" class="fixed-bottom text-center text-danger">home</a>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
    export default {
        name:'AiECp',
        computed:{
            getDataPopover(){
                return this.$store.state.b.popoverBook;
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/base/_variable.scss';
#btn-home-ai{
    // align-items: center;
    // text-align: center;
    // justify-content: center;
}
.text-ctn{
    text-align: justify;
    line-height: 50px;
}
.p-ai{
    background-color: $bg-p-color;
}
h3{
    text-shadow: 5px 5px 15px $tbl-footer-shadow-color-orange,
    2px 3px 12px $tbl-footer-shadow-color-yellow;
}
#btn-home-ai:hover{
    color: red;
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
    cursor: pointer;
    }
    .bg-left-ai{
        background-color:$bg-left-ai;
    }
</style>
