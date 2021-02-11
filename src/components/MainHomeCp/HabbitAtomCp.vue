<template>
    <div>
        <p>test ok</p>            
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'HabbitAtomCp',
        computed:mapState(['habbitBooks']),
        
    }
</script>

<style lang="scss" scoped>

</style>