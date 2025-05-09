<template>
  <div class="chart-control">
    <h2>Chart</h2>

    <div v-show="store.xKey" class="axis-container">
      <label>X Axis</label>
      <Dropdown :options="Object.keys(store.visibility)" @update="handleSelect" />
    </div>
    <div class="axis-container">
      <label>Y Axis</label>
      <div class="item-container">
        <div v-for="(enabled, key) in store.visibility" :key="key">
          <div class="item">
            <div></div>
            <checkBox v-model="store.visibility[key]" :color="store.colors[key]" />
            <p class="item-label">{{ key }}</p>
          </div>
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
  padding: 30px 35px;
  width: 100%;
  height: 100%;
  border-left: 1px solid var(--color-border);
  background-color: var(--color-background);
}
.chart-control h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  text-align: left;
}

.chart-control .axis-container {
  width: 100%;
  margin-top: 1.5rem;
}

.chart-control label {
  font-size: 18px;
  margin: 0.8rem 0;
  text-align: left;
  font-weight: 500;
}

.item-container {
  gap: 1rem;
  width: 100%;
  display: grid;
  gap: 1rem;
}

.item {
  display: grid;
  align-items: center;
  width: 100%;
  grid-column: 1 / -1;
  grid-template-columns: 8px 20px 1fr 10px;
  grid-auto-rows: 60px;
  padding: 0.5rem;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: var(--color-background-second);
}

.item-label {
  font-size: 1.2rem;
  margin-left: 12px;
  text-align: left;
  width: 100%;
}
</style>
