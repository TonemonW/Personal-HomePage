<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import createMeteorAndStarsEffect from "@/tools/createStarCanvas";

const color = ref();
if (localStorage.getItem("dayOrNight")) {
  if (localStorage.getItem("dayOrNight") === "day") {
    color.value = "rgb(220,220,220)";
  } else {
    color.value = "rgb(255,255,255)";
  }
} else {
  color.value = "rgb(220,220,220)";
}
const canvasExec = ref();

onMounted(() => {
  // 生成繁星效果，并增强星星数量和闪烁效果
  canvasExec.value = createMeteorAndStarsEffect(
      "canvas",
      color.value,
      color.value,
      4,
      100
  )();
});

onUnmounted(() => {
  // 取消动画
  cancelAnimationFrame(canvasExec.value);
});
</script>
<template>
  <div class="starry-sky-container">
    <canvas id="canvas"></canvas>
  </div>
</template>
<style scoped>
.starry-sky-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overall-background-color);
  overflow: hidden;
  z-index: -1;
}

.starry-sky-container canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
