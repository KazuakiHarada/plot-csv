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

function renderLineChart() {
  if (!chartCanvas.value) return;
  if (chart) chart.destroy();

  const labels = Array.from({ length: store.series[Object.keys(store.series)[0]].length }, (_, i) => i + 1);

  const datasets = Object.keys(store.series)
    .filter((key) => store.visibility[key])
    .map((key) => ({
      label: key,
      data: store.series[key],
      borderColor: store.colors[key],
      backgroundColor: store.colors[key] + '33', // 20% opacity
      borderWidth: 2,
    }));

  chart = new Chart(chartCanvas.value, {
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: true,
      layout:{
        padding: 0,
      }
    },
  });
}

function renderScatterChart() {
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
    type: 'scatter',
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

function renderChart() {
  if (store.xKey === null) {
    renderLineChart();
  } else {
    renderScatterChart();
  }
}

onMounted(renderChart);
watch(() => store, renderChart, { deep: true });
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 80vh;
  width: 95%;
  margin: 20px;
}
</style>
