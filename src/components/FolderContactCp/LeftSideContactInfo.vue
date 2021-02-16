<template>
    <div id="bg-leftside" class="continer fixx-left" style="overflow-y: auto">
        <div class="row dropdown ml-1" v-for="item in getPerson" :key="item.id">
            <h3 @click="item.showLink=!item.showLink" class="text-center btn btn-dark btn-block  dropdown-toggle">{{item.headerName}}</h3> 
            <div class="btn-block text-center scroll-leftc" v-if="item.parts">
                <ts-left-side-contact-cp >
                    <li id="lside-maincontact" class="btn-block text-center" v-if="item.showLink"  >
                            <a class="btn-block text-center  btn-link a-effect a-left-contact a-lside-contact"
                                :href="'#'+ sub.href"
                                v-for="sub in item.parts" 
                                :key="sub"
                                >* {{sub.customerName}} *
                            </a>
                    </li> 
                </ts-left-side-contact-cp >
            </div>
            
        </div>
    </div>
</template>

<script>
    import TsLeftSideContactCp from './TsLeftSideContactCp.vue';
    import $ from 'jquery';

$().ready(function(){
    $('.a-lside-contact').click(function(){
        // $('p').animate({letterSpacing: "+=50px"})
        $('#lside-maincontact').addClass('my-style');

        setTimeout(function(){
                // $('p').animate({letterSpacing: "-=50px"})
                $('#lside-maincontact').removeClass('my-style');
            },450)
    })
})
    export default {
        name:'LeftSideContactInfo',
        components:{      
                TsLeftSideContactCp  },
         computed:{
                getPerson(){
                    return this.$store.state.a.personList;
                },
            },
    }
</script>

<style lang="scss" scoped>
.my-style{
    transform: scale(2);
    -ms-transform: scale(2);
    letter-spacing: 40px;
}
@import '../../assets/sass/base/_variable.scss';

@font-face {
    font-family: 'left-side-font';
    src: url('../../assets/fonts/Hanalei-Regular.ttf');
}
*{
    font-family: 'left-side-font';
}
@media screen and(min-width:576px) {
    .fixx-left{
    position: fixed;
        width: 30%;
          top: 50px;
}
}
#bg-leftside{
    background-color:$bg-leftside-color;
    height: 100%;
}
.scroll-leftc{
    scroll-behavior: smooth;
}
</style>