<script setup lang="ts"></script>

<template>
  <!-- <transition name="fade">
    <router-view/>
  </transition> -->

  <RouterView v-slot="{ Component }" >
    <transition name="fade">
        <component :is="Component" />
    </transition>
  </RouterView>
  <button><router-link to="/">去文件一</router-link></button>
  <button><router-link to="/file2">去文件二</router-link></button>
  <button><router-link to="/static">去静态文件</router-link></button>
</template>

<style scoped>

</style>
