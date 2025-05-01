<template>
  <div id="app">
    <LoadCSVBtn />
    <ChartContorls />
    <ChartCanvas />
  </div>
</template>

<script>
import ChartCanvas from './components/ChartCanvas.vue';
import LoadCSVBtn from './components/LoadCSVBtn.vue';
import ChartContorls from './components/ChartContorls.vue';
export default {
  name: "App",
  components: {
    ChartCanvas,
    LoadCSVBtn,
    ChartContorls
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>