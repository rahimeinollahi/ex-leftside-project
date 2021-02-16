<template>
    <div>
        <transition
        name="fade"
        mode="out-in">
            <slot />
        </transition>
    </div>
</template>

<script>
    export default {
        name:'TsHrefcp'
    }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
    transform: translateY(40px)
}
</style>