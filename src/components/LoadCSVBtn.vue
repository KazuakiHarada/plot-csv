<template>
  <button @click="store.loadCSV">CSVを読み込む</button>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
const store = useCsvStore();
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