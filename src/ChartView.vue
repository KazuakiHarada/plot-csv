<template>
  <div id="ViewChart">
    <div class="canvas"><ChartCanvas /></div>
    <div class="controls"> <ChartContorls /></div>
  </div>
</template>

<script>
import ChartCanvas from './components/ChartCanvas.vue';
import ChartContorls from './components/ChartContorls.vue';
export default {
  name: "ViewChart",
  components: {
    ChartCanvas,
    ChartContorls
  }
};
</script>

<style scoped>

#ViewChart {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.canvas {
  width: 88%;
  height: 100%;
}
.controls {
  width: 12%;
  height: 100%;
}
</style>