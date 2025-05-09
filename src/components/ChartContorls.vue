<template>
  <div class="chart-control">
    <h2>Chart</h2>

    <div v-if="store.xKey">
      <label>X Axis</label>
      <Dropdown :options="Object.keys(store.visibility)" default-value="store.xKey" @update="handleSelect" />
    </div>
    <div class="item-container">
      <div v-for="(enabled, key) in store.visibility" :key="key">
        <div class="item">
          <checkBox v-model="store.visibility[key]" :color="store.colors[key]" />
          <p class="item-label">{{ key }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
import checkBox from './utils/checkBox.vue';
import Dropdown from './utils/Dropdown.vue';
const store = useCsvStore();

const handleSelect = (option: string) => {
  console.log('Selected option:', option);
  store.xKey = option;
};
</script>

<style scoped>
.chart-control {
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.chart-control h2 {
  font-size: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: left;
  color: #333;
}

.chart-control label {
  font-size: 1rem;
  padding: 0.5rem 0;
  text-align: left;
  color: #333;
  font-weight: 500;
}

.item-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
}

.item {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  grid-template-columns: 30px 1fr;
  grid-auto-rows: 60px;
  padding: 0.5rem;
  border-radius: 8px;
}

.item-label {
  font-size: 1.2rem;
  margin-left: 10px;
  text-align: left;
}
</style>
