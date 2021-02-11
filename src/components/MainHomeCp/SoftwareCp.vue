<template>
    <div id="tbl-m" class="continer ">
        <div class="table-responsive-sm">          
            <table class="table table-bordered table-striped table-hover ">
                    <thead class="thead-dark">
                    <tr id="theader-sticky">
                        <th class="text-center">ID</th>            
                        <th class="text-center">TITLE</th>            
                        <th class="text-center">ISTHERE</th>            
                        <th class="text-center">PRICE</th>            
                    </tr>
                    </thead>
                    <tbody class="">
                    <tr class="" v-for="item in softwareTable" :key="item.id">
                        <td class="text-center">{{item.id}}</td>
                        <td class="text-center">{{item.title}}</td>
                        <td class="text-center">{{item.isThere}}</td>
                        <td class="text-center">{{item.price}}</td>
                    
                    </tr>
                    </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'Software',
        computed:mapState(['softwareTable','softwareTHeader'])
    }
</script>

<style lang="scss" scoped>
@media screen and(min-width:600px) {
    #theader-sticky > th{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
}
}

#tbl-m{
    margin: 0 2px;
}
</style>