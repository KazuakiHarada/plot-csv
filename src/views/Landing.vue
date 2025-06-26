<template>
  <div class="landing-overlay">
    <div class="landing-content">
      <h1>{{ $t('message.landing_title') }}</h1>
      <p>{{ $t('message.landing_desc') }}</p>
      <button @click="store.loadCSV()">{{ $t('message.landing_load') }}</button>
      <input
        ref="fileInput"
        type="file"
        accept=".csv"
        style="display: none"
        @change="onFileSelected"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCsvStore } from '../store/useCSVStore';
import { useI18n } from 'vue-i18n';
const store = useCsvStore();
useI18n();
</script>

<style scoped>
.landing-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-background-hover-transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.landing-content {
  background: var(--color-background);
  color: var(--color-text);
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  text-align: center;
}
.landing-content h1 {
  margin-bottom: 1rem;
}
.landing-content button {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  background: #1976d2;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.landing-content button:hover {
  background: #1565c0;
}
</style>