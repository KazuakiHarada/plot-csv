<template>
  <div class="chart-control">
    <h2>Chart</h2>

    <div v-show="store.xKey" class="axis-container">
      <p class="axis-label">X Axis</p>
      <Dropdown :options="Object.keys(store.visibility)" :defaultValue="store.xKey" @update="handleSelect" />
    </div>
    <div class="axis-container">
      <p class="axis-label">Y Axis</p>
      <div class="item-container">
        <div v-for="(enabled, key) in store.visibility" :key="key">
          <div v-show="key !== store.xKey" class="item">
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

.chart-control .axis-label {
  font-size: 18px;
  margin: 0.5rem 0;
  text-align: left;
  font-weight: 500;
}

.item-container {
  width: 100%;
  display: grid;
}

.item {
  display: grid;
  align-items: center;
  width: 100%;
  grid-column: 1 / -1;
  grid-template-columns: 8px 20px 1fr 10px;
  grid-auto-rows: 60px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: var(--color-background-button);
  outline: 1px solid var(--color-border-button);
  outline-offset: -1px;
}

.item-label {
  font-size: 1.2rem;
  margin-left: 12px;
  text-align: left;
  width: 100%;
}
</style>
