<template>
  <div id="app">
    <Landing v-show="store.csvName == ''" />
    <ChartView />
  </div>
</template>

<script setup lang="ts">
import ChartView from './views/ChartView.vue';
import Landing from './views/Landing.vue';
import { useCsvStore } from './store/useCSVStore';
const store = useCsvStore();
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>