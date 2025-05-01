<template>
  <canvas ref="chartCanvas"></canvas>
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
    },
  });
}

onMounted(renderChart);
watch(() => store.visibility, renderChart, { deep: true });
</script>
