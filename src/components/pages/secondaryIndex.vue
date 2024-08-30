<!-- 二级首页 -->
<script setup lang="ts">
</script>

<template>
    <RouterView v-slot="{ Component }" >
        <transition name="fade">
            <component :is="Component" />
        </transition>
      </RouterView>
</template>

<style scoped>
@import '/src/static/page.css';
</style>