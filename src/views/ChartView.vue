<template>
  <div id="ViewChart">
    <div class="main-area">
      <ChartCanvas />
    </div>
    <div class="controls"> <ChartContorls /></div>
  </div>
</template>

<script>
import ChartCanvas from './../components/ChartCanvas.vue';
import ChartContorls from './../components/ChartContorls.vue';
export default {
  name: "ViewChart",
  components: {
    ChartCanvas,
    ChartContorls,
  }
};
</script>

<style scoped>

#ViewChart {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 260px;
  height: 100%;
}

.main-area {
  width: 100%;
  height: 100vh;
}

.controls {
  position: fixed;
  right: 0%;
  width: 260px;
  height: 100%;
}
</style>