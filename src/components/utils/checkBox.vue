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
  backgroundColor: checked.value ? props.color + '70' : 'transparent',
  borderColor: props.color,
  borderWidth: checked.value ? '3px' : '2px'
}))

function toggle() {
  emit('update:modelValue', !checked.value)
}
</script>

<style scoped>
div {
  border: 2px solid;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
