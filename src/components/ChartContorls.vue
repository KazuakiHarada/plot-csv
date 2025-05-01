<template>
  <div v-for="(enabled, key) in store.visibility" :key="key">
    <label>
      <input type="checkbox" v-model="store.visibility[key]" /> {{ key }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
const store = useCsvStore();
</script>
