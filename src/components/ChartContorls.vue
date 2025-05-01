<template>
  <div class="chart-controls">
    <div v-for="(enabled, key) in store.visibility" :key="key">
      <div class="items">
        <checkBox v-model="store.visibility[key]" :color= "store.colors[key]"  />
        <label>{{ key }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
import checkBox from './utils/checkBox.vue';
const store = useCsvStore();
</script>

<style scoped>
.chart-controls {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.chart-controls label {
  font-size: 1.2rem;
  margin-left: 8px;
}
.chart-controls .items {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
