<script setup>
</script>

<template>
  <RouterView v-slot="{ Component }" >
    <transition name="fade">
        <component :is="Component" />
    </transition>
  </RouterView>
  <title>KidsDreaming</title>
</template>

<style scoped>

</style>
