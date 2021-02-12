<template>
    <div class="continer text-center mt-1  h-100 about-profile">
        <img class="img-fluid rounded-circle mx-auto mt-3" src="../../assets/photo/rahim.jpg" alt=" image rahim einollahi" width="100">
        <h3 class="mt-3 text-danger">Junior Developer</h3>
            <h5 class="mt-3 text-dark">rahim einollahi</h5>
        <h5 class="mt-3 text-info">Tel:<small>09147861734</small></h5>
        <pre id="pre-about">

        </pre>
    </div>
</template>

<script>
    export default {
        name:'Profile'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
    .about-profile{
        background-color: $side-color-dark;
    }

    // @media screen and(min-width:576px) {
    //     #pre-about{
    //         // height: 500px;
    //     }
    // }
</style>