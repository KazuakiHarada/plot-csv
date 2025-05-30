<template>
  <button
    v-show="key !== xKey"
    class="item"
    :class="{ active: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
    type="button"
  >
    <div></div>
    <div class="circle" 
      :style="{ backgroundColor: indigater_style.backgroundColor, border: indigater_style.border }">
    </div>
    <p class="item-label" :style="itemFontSize">{{ key }}</p>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  modelValue: boolean;
  color: string;
  keyName: string;
  xKey: string;
}>();
const emit = defineEmits(['update:modelValue']);

const key = props.keyName;
const indigater_style = computed(() => {
  return {
    backgroundColor: props.modelValue ? props.color + '70' : 'transparent',
    border: props.modelValue ? `2px solid ${props.color}` : '1px solid var(--color-text-disabled)',
  };
});

const itemFontSize = computed(() => {
  const length = key.length;
  if (length > 30) {
    return { fontSize: '0.8rem' };
  } else if (length > 10) {
    return { fontSize: '1rem' };
  } else {
    return { fontSize: '1.2rem' };
  }
});
</script>

<style scoped>
.item {
  display: grid;
  align-items: center;
  width: 100%;
  grid-column: 1 / -1;
  grid-template-columns: 8px 20px 1fr 10px;
  grid-auto-rows: 60px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-sizing: border-box;
  color: var(--color-text-disabled);
  background-color: var(--color-background-button-disabled);
  outline: 1px solid var(--color-border-button);
  outline-offset: -1px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}
.item.active {
  color: var(--color-text);
  background-color: var(--color-background-button);
}
.item:hover {
  color: var(--color-text);
  background-color: var(--color-background-button-hover);
}
.circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.item-label {
  margin-left: 12px;
  text-align: left;
  overflow-wrap: anywhere;
  width: 100%;
}
</style>
