<template>
  <div id="ViewChart">
    <Splitpanes class ="default-theme" vertical style="height: 84vh;">
      <Pane size="85">
        <div class="canvas"><ChartCanvas /></div>
      </Pane>
      <Pane size="15">
        <div class="controls"> <ChartContorls /></div>
      </Pane>
    </Splitpanes>
  </div>
</template>

<script>
import ChartCanvas from './components/ChartCanvas.vue';
import ChartContorls from './components/ChartContorls.vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
export default {
  name: "ViewChart",
  components: {
    ChartCanvas,
    ChartContorls,
    Splitpanes,
    Pane
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
  width: 100%;
  height: 100%;
}
.controls {
  width: 100%;
  height: 100%;
}
.splitpanes {
  background: #f0f0f0;
}
</style>