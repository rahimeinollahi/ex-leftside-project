<template>
    <div class="continer">
        <span class="mt-5">validation form  input</span><br><br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aut. Laborum ad nihil, harum quod, magnam nisi molestiae corrupti sint ex maiores mollitia voluptates? Consequuntur doloremque itaque rerum cumque exercitationem?</p>
        <form action="/action_page.php" class="was-validated">
                <div v-for="item in formValidation" :key="item.id" :class="item.formClass">
                    <label class="text-info" :for="item.lable">{{item.lableText}}</label>
                    <input :type="item.type" :class="item.inputClass" :id="item.inputID" :placeholder="item.inputPlaceHolder" required>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>  
                <button class="btn btn-primary" to="/home">Submit</button>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:"BackEndCp",
        computed:mapState(['formValidation'])
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
// $tbl-footer-shadow-color-orange:orange;
// $tbl-footer-shadow-color-yellow:yellow;
    span{
        text-shadow: 4px 4px 10px $tbl-footer-shadow-color-orange,
        4px 1px 12px   $tbl-footer-shadow-color-yellow;
        border-bottom: 2px dotted $tbl-head-shadow-color-red;
        text-indent: 20px;
    }
</style>