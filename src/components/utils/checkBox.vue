<template>
  <div
    :style="checkboxStyle"
    @click="toggle"
  >
    <svg
      v-if="checked"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  color: {
    type: String,
    default: '#3B82F6' // デフォルトで青
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = computed(() => props.modelValue)

const checkboxStyle = computed(() => ({
  backgroundColor: checked.value ? props.color : 'transparent',
  borderColor: props.color
}))

function toggle() {
  emit('update:modelValue', !checked.value)
}
</script>

<style scoped>
div {
  border: 2px solid;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
