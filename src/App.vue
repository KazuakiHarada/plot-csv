<!-- components/Chart.vue -->
<template>
  <div>
    <button @click="loadCSV">CSVを読み込む</button>
    <div v-for="(enabled, key) in visibility" :key="key">
      <label>
        <input type="checkbox" v-model="visibility[key]" /> {{ key }}
      </label>
    </div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
import Chart from 'chart.js/auto';
import { pickAndReadCSV } from './utils/load-file';
import { parseCSV } from './utils/parser';

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;

const labels = ref<string[]>([]);
const series = reactive<Record<string, number[]>>({});
const visibility = reactive<Record<string, boolean>>({});

async function loadCSV() {
  const csv = await pickAndReadCSV();
  if (!csv){
    alert('CSVファイルを選択してください');
    return;
  }
  const parsed = parseCSV(csv);
  labels.value = parsed.labels;

  for (const key in parsed.series) {
    series[key] = parsed.series[key].filter((value): value is number => value !== null);
    visibility[key] = true;
  }

  renderChart();
}

function renderChart() {
  if (!chartCanvas.value) return;
  if (chart) chart.destroy();

  const datasets = Object.keys(series)
    .filter((key) => visibility[key])
    .map((key) => ({
      label: key,
      data: series[key],
      borderWidth: 2,
    }));

  chart = new Chart(chartCanvas.value, {
    type: 'line',
    data: {
      labels: labels.value,
      datasets,
    },
    options: {
      responsive: true,
    },
  });
}

watch(visibility, renderChart, { deep: true });
</script>


<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

</style>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}
button:active {
  border-color: #396cd8;
  background-color: #e8e8e8;
}

input,
button {
  outline: none;
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
  button:active {
    background-color: #0f0f0f69;
  }
}

</style>