<template>
    <div class="continer">
        <div class="row">
            <ul class="nav nav-pills col-sm" v-for="item in getNavSW" :key="item.id">
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle " data-toggle="dropdown">{{item.headerLink}}</a>
                    <div class="dropdown-menu" v-if="item.parts">
                        <router-link class="dropdown-item text-center" v-for="sub in item.parts" :key="sub.id" :to="{path:sub.router}">{{sub.name}}</router-link>
                    </div>
            </li>
        </ul>
        <ul class="nav nav-pills  justify-content-end col-sm">
            <li class="nav-item">
                <router-link class="nav-link mr-3 btn btn-link" to="/superwinner">BACK</router-link>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
// import {mapState} from 'vuex'
    export default {
        name:'NavBook',
        computed:{
            getNavSW(){
                return this.$store.state.b.navSW;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>