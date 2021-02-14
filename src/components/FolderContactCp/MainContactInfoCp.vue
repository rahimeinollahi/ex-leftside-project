<template>
    <div>
       <div id="cadd-1" class="row  " v-for="item in getPersonContent" :key="item.id">
           <h2  class="pl-3 text-info">{{item.headerName}}</h2>
           <div class="" v-for="sub in item.parts" :key="sub">
               <hr class="bg-danger mx-2">
               <h3 class="pl-5">{{sub.customerName}}</h3>
                   <p :id="sub.href">{{sub.bio}}</p>
           </div>
           <hr>
       </div>
    </div>
</template>

<script>

    export default {
        name:"MainContactInfoCp",
        computed:{
            getPersonContent(){
                 return this.$store.state.a.personList;
            }
        }
    }
</script>

<style lang="scss" scoped>

@font-face {
    font-family: 'page-contact';
    src: url('../../assets/fonts/AlexandriaFLF.ttf');
}
    @import '../../assets/sass/base/_variable.scss';
p{
    text-indent: 35px;
    text-align: justify;
    padding: 0 10px;
    line-height: 45px;
    background-color: #fefeef;
    text-shadow: 5px 5px 15px   $tbl-head-shadow-color-red,
    3px 3px 12px $tbl-head-shadow-color-blue;

}
h3{
      text-shadow: 5px 5px 15px  $tbl-footer-shadow-color-orange,
    3px 3px 12px $tbl-footer-shadow-color-yellow;
}
*{font-family: 'page-contact';}
.posfix-img{
width: 400px;
  height: 400px;
  background-repeat: no-repeat, repeat;
//   background-image: url("img_tree.gif"), url("paper.gif");
  background-blend-mode: lighten;
}
</style>