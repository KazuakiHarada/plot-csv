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
      labels: store.labels,
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

onMounted(renderChart);
watch(() => store.visibility, renderChart, { deep: true });
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: 20px;
  border-radius: 8px;
}
</style>
