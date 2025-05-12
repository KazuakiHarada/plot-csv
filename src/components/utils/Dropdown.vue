<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <span v-if = "isOpen" class="arrow">▼</span>
      <span v-else class="arrow">▶</span>
      <label :style="CalcitemFontSize(selected)">{{ selected }}</label>
    </button>

    <transition name="fade-slide">
      <ul v-show="isOpen" class="dropdown-menu">
        <li
          v-for="option in options"
          :key="option"
          class="dropdown-item"
          @click="select(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'

const props = defineProps({
  options: {
    type: Array as () => string[],
    required: true,
  },
  defaultValue: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['update'])

const isOpen = ref(false)
const selected = ref(props.defaultValue)
watch(() => props.defaultValue, (newValue) => {
  selected.value = newValue
})

const CalcitemFontSize = (key: string) => {
  const length = key.length;
  if (length > 30) {
    return { fontSize: '0.8rem' };
  } else if (length > 10) {
    return { fontSize: '1rem' };
  } else {
    return { fontSize: '1.2rem' };
  }
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const select = (option: string) => {
  selected.value = option
  emit('update', option)
  isOpen.value = false
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  min-width: 160px;
  width: 100%;
  font-family: sans-serif;
}

.dropdown-toggle {
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 30px 1fr 15px;
  grid-auto-rows: 60px;
  padding: 0.5rem;
  border-radius: 12px;
  color: var(--color-text);
  background-color: var(--color-background-button);
  outline: 1px solid var(--color-border-button);
  outline-offset: -1px;
}

.dropdown-toggle:hover {
  background-color: var(--color-background-button-hover); 
}

.arrow {
  float: right;
  font-size: 1rem;
  text-align: center;
  color: var(--color-text-light);
}
.dropdown-toggle label {
  text-align: left;
  font-size: 1.2rem;
  margin-left: 8px;
  overflow-wrap: anywhere;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  margin-top: 4px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  list-style: none;
  padding: 4px 0;
  z-index: 100;
}

.dropdown-item {
  padding: 12px;
  color: #333;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

/* Transition animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
