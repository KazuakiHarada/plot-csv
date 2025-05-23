<template>
  <div class="chart-control">
    <div class="csv-name-container">
      <h2>{{ store.csvName }}</h2>
      <button class="change-btn" @click="store.loadCSV">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M 4 14 L 4 2 L 12 2  L 20 10 L 20 22 L 4 22" fill="none" stroke-width="2" />
          <path d="M 0 17 L 10 17 L 7 14 " fill="none" stroke-width="2" />
        </svg>
      </button>
      <span class="change-tooltip">ファイルの変更</span>
    </div>
    <div class="axis-container">
      <p class="axis-label">X Axis</p>
      <Dropdown :options="Object.keys(store.visibility)" :defaultValue="store.xKey" @update="handleSelect" />
    </div>
    <div class="axis-container">
      <p class="axis-label">Y Axis</p>
      <div class="item-container">
        <div v-for="(_, key) in store.visibility" :key="key">
          <div v-show="key !== store.xKey" class="item">
            <div></div>
            <checkBox v-model="store.visibility[key]" :color="store.colors[key]" />
            <p class="item-label" :style="CalcitemFontSize(key)">{{ key }}</p>
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

const CalcitemFontSize = (key: string) => {
  const length = key.length;
  if (length > 30) {
    return { fontSize: '0.8rem' };
  } else if (length > 10) {
    return { fontSize: '1rem' };
  } else {
    return { fontSize: '1.2rem' };
  }
};

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

.chart-control .csv-name-container {
  position: relative;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-control h2 {
  font-size: 1.5rem;
  height: 100%;
  text-align: left;
  overflow-wrap: anywhere;
}

.chart-control .change-btn {
  height: 32px;
  width: 32px;
  justify-content: center;
  padding: 3px;
  background-color: inherit;
  color: var(--color-text-light);
  border-radius: 8px;
  cursor: pointer;
}

.chart-control .change-btn:hover {
  color: var(--color-primary-hover);
}

.change-tooltip {
  display: none;
  position: absolute;
  left: auto;
  right: 0;
  top: 100%;
  margin-top: -12px;
  background: var(--color-background-button);
  color: var(--color-text-light);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.95rem;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 10;
}
.change-btn:hover + .change-tooltip {
  display: block;
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
  max-height: calc(100vh - 340px);
  overflow: auto;
  width: 100%;
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
  margin-left: 12px;
  text-align: left;
  overflow-wrap: anywhere;
  width: 100%;
}
</style>
