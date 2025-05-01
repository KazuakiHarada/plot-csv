<template>
  <div id="app">
    <div class ="header">
      <h1>CSV Chart Viewer</h1>
      <LoadCSVBtn />
    </div>
    <ChartView />
  </div>
</template>

<script>
import ChartView from './ChartView.vue';
import LoadCSVBtn from './components/LoadCSVBtn.vue';
export default {
  name: "App",
  components: {
    ChartView,
    LoadCSVBtn
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  text-align: center;
  margin-top: 0px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0%;
  padding: 10px;
}
.header h1 {
  font-size: 1.2rem;
  margin-left: 10px;
}
</style>