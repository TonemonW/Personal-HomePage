<template>
  <div class="index-btn">
    <Typical
        :steps="sequence"
        :loop="Infinity"
        wrapper="p"
        class="typical-text"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Typical from "vue-typical";

const sequence = ref([
  500,
  "A Web <Developer /> ",
  1000,
  "Aim to be a full-stack developer",
  1000,
]);
</script>

<style scoped>
.index-btn {
  margin-top: 1vh;
  margin-bottom: 1vh;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  width: 100%;
}
.typical-text {
  font-size: max(1.5rem + 1vw); /* 基于视口宽度和基础大小 */
  line-height: 1.2; /* 控制行高 */
  min-height: max(2rem + 1vw); /* 防止高度变化影响布局 */
  overflow: hidden; /* 防止内容溢出 */
  text-align: center; /* 可选：居中对齐 */
  max-width: 100%; /* 限制最大宽度 */
  white-space: nowrap; /* 防止换行 */
  font-style: italic;
}
@media screen and (max-width: 768px) {
  .typical-text {
    font-size: max(0.5rem + 2vw); /* 基于视口宽度和基础大小 */
    min-height: max(1rem + 1vw); /* 防止高度变化影响布局 */
  }
}

</style>

