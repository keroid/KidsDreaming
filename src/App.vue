<!-- 根组件 -->
<script setup>
</script>

<template>
  <RouterView v-slot="{ Component }" >
    <transition name="fade">
        <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>

</style>
