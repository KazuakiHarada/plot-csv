<template>
  <button @click="loadCSV">CSVを読み込む</button>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
import { pickAndReadCSV } from '../utils/load-file';
import { parseCSV } from '../utils/parser';

const store = useCsvStore();

async function loadCSV() {
  const csv = await pickAndReadCSV();
  if (!csv) {
    alert('CSVファイルを選択してください');
    return;
  }
  const parsed = parseCSV(csv);
  store.setData('csv', parsed.series);
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: var(--color-background-second);
  transition: background-color 0.3s;
}
button:active {
  background-color: #004085;
}

</style>