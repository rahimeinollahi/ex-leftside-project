<template>
    <div id="div-body" class="continer">

            <hr>
        <div class="row sticky">
            <a
                    class="col-sm btn btn-secondary mx-2  card text-danger "
                    id="btn-header"
                    :href="item.href"
                    v-for="item in tableHeaderSection" 
                    :key="item.id">{{item.HeaderName}}
            </a>
        </div>

            <div class="pad-top" v-for="value in tableContent" :key="value.id" :id="value.id">
                <hr>
                <h2  id="tbl-head">{{value.headerName}}</h2>
                <p id="tbl-content">{{value.contentText}}</p>
            </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'HardwareCp',
        computed:mapState(['tableHeaderSection','tableContent'])
    }
</script>

<style lang="scss" scoped>
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
        top: 0;
        }
        .pad-top
            {
                padding-top: 50px;
                // padding-bottom: 50px;

            }

}


#tbl-content{
    text-indent: 50px;
    line-height: 50px;
   padding-right: 10px;
   text-transform: capitalize;
//    text-align: center;
    text-align: justify;
}
#tbl-head{
    text-shadow: 5px 5px 15px $tbl-head-shadow-color-red,
    3px 4px 20px $tbl-head-shadow-color-blue;
    
}

#div-body{
    position: relative;
}
#btn-header{
    // text-align: center;
    align-items: center;
    // margin-right: 10px;
}
</style>