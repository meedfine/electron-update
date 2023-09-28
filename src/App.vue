<template>
  <div class="p-4 text-center">Electron Update Demo</div>
  <div class="p-8">
    <curVersion />
    <appUpdate />
  </div>
</template>

<script setup lang="ts">
import curVersion from './components/curVersion.vue'
import appUpdate from './components/appUpdate.vue'
</script>
