<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      {{ selected }}
      <span v-if = "isOpen" class="arrow">▼</span>
      <span v-else class="arrow">side</span>
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
  width: 200px;
  font-family: sans-serif;
}

.dropdown-toggle {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
}

.arrow {
  float: right;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 4px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.dropdown-item {
  padding: 8px 12px;
  font-size: 14px;
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
