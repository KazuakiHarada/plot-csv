<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <span v-if = "isOpen" class="arrow">▼</span>
      <span v-else class="arrow">▶</span>
      <label>{{ selected }}</label>
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

<script setup>
import { ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
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
if (props.defaultValue) {
  selected.value = props.defaultValue
  console.log(selected.value)
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const select = (option) => {
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
  margin-left: 10px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
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
