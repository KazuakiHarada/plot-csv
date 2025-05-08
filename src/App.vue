<template>
  <div id="app">
    <ChartView />
  </div>
</template>

<script>
import ChartView from './ChartView.vue';
export default {
  name: "App",
  components: {
    ChartView,
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>