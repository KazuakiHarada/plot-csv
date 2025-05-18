<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useCsvStore } from '../store/useCSVStore';
import Chart from 'chart.js/auto';

const store = useCsvStore();
const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;


function renderChart() {
  if (!chartCanvas.value) return;
  if (chart) chart.destroy();

  const xKey = store.xKey;
  if (xKey === null) return;

  const datasets = Object.keys(store.series)
    .filter((key) => store.visibility[key] && key !== xKey)
    .map((key) => ({
      label: key,
      data: store.series[key].map((y, i) => ({
        x: store.series[store.xKey][i],
        y,
      })),
      borderColor: store.colors[key],
      backgroundColor: store.colors[key] + '33', // 20% opacity
    }));

  chart = new Chart(chartCanvas.value, {
    type: store.xKey == 'time' ? 'line' : 'scatter',
    data: {
      datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          type: 'linear',
          title: {
            display: true,
            text: store.xKey,
            font: {
              size: 17,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: Object.keys(store.series)
              .filter((key) => store.visibility[key] && key !== store.xKey)
              .join(',  '),
            font: {
              size: 17,
            },
          },
        },
      },
      layout: {
        padding: 12,
      },
      maintainAspectRatio	: false,
    },
  });
}

onMounted(renderChart);
watch(() => store, renderChart, { deep: true });
</script>

<style scoped>
.chart-container {
  position: relative;
  height: calc(100vh - 40px);
  width: 95%;
  margin: 20px;
}
</style>
