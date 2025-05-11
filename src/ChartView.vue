<template>
  <div id="ViewChart">
    <div class="main-area">
      <div class="header">
        <h1>Easy CSV Scatter</h1>
        <LoadCSVBtn /> 
      </div>
      <ChartCanvas />
    </div>
    <div class="controls"> <ChartContorls /></div>
  </div>
</template>

<script>
import ChartCanvas from './components/ChartCanvas.vue';
import ChartContorls from './components/ChartContorls.vue';
import LoadCSVBtn from './components/LoadCSVBtn.vue';
export default {
  name: "ViewChart",
  components: {
    ChartCanvas,
    ChartContorls,
    LoadCSVBtn,
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
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0%;
  padding: 20px;
}
.header h1 {
  font-size: 28px;
  font-weight: 500;
  margin: 8px;
}

.controls {
  position: fixed;
  right: 0%;
  width: 260px;
  height: 100%;
}
</style>