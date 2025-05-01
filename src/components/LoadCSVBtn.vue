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
  store.setData(parsed.labels, parsed.series);
}
</script>
