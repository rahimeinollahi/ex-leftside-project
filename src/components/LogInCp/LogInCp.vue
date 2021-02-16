<template>
    <div id="login-page" class="continer mt-3 card  ">

        <div id="login-image" class=" m-3 d-flex justify-content-center">
            <img src="../../assets/photo/1.jpg" class="mb-5 text-center rounded-circle" alt="image photo">
            </div><br><br>
            <div class="d-flex justify-content-center mt-3 mb-3">
                         <form  class="was-validated" id="form-id">
                            <div class="form-group">
                                <input type="text" class="form-control" id="uname" placeholder=" username is: 'rahim'" name="uname" required v-model="txtusername">
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>

                                <input type="password" class="form-control" id="uname" placeholder=" password is: '1'" name="uname" required v-model="txtpass">
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                             <!-- <button @click="checklogIn" type="submit" class="btn btn-primary btn-block">Submit ok</button> -->
                             <button @click="checklogIn" class="btn btn-primary btn-block">check</button>
                         </form>
                    </div>
        
    </div>
</template>

<script>
import $ from 'jquery';
$(document).ready(function(){
    $("#form_id").submit(function(){
        return false;
    });
});

    export default {
        name:'LogInCp',
        data(){
            return{
                txtusername:'',
                txtpass:''
            }
        },
        methods:{
            checklogIn(){
                if(this.txtusername==='rahim' && this.txtpass==='1'){
                    this.$router.push({ name: 'Home'})
                }
                else{
                    alert('UserName or Pass is invalid userName is:"rahim" pass is:"1"');
                    this.txtusername="";
                    this.txtpass="";
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
// $br-parent-color:rgb(255, 10, 104);
// $br-img-color:rgb(138, 148, 137);
img{
    border: 1px solid $br-parent-color;
    padding: 1px;
}
img:hover{
    border: 1px solid  $br-img-color;
}
#login-page{
    position: relative;
}
#card-login{
    align-items: center;
    // justify-content: center;
    // border: 1px solid red;
}
#login-page{
     width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
    img{
        position: absolute;
        width: 60px;
        height: 60px;
        // text-align: center;
        // justify-content: center;
        // align-items: center;
        // transform: translate(-50%,-50%);
    }
</style>