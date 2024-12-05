<template>
  <div class="main-text">
    <p>{{ greeting }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs'; // 导入 dayjs

// 定义 sayHi 函数
const sayHi = () => {
  const hour = dayjs().hour();

  if (hour < 12) {
    return "Good Morning~";
  } else if (hour < 18) {
    return "Good Afternoon~";
  } else if (hour < 21) {
    return "Good Evening~";
  } else {
    return "Good Night~";
  }
};

// 创建一个计算属性来获取问候语
const greeting = computed(() => {
  return sayHi();
});
</script>

<style scoped>
.main-text p {
  font-size: max(4vw, 3rem);
  background: linear-gradient(to right,  #606060,#b0b0b0);
  -webkit-background-clip: text;
  color: transparent;
}
@media screen and (max-width: 768px) {
  .main-text p  {
    font-size: max(3vw, 2rem);
  }
}
</style>
