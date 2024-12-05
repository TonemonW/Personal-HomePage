<script setup lang="ts">
import { ref } from "vue";
import NextArrow from "@/components/NextArrow/NextArrow.vue";
import LittleCloud from "./component/LittleCloud.vue";
import Bubbles from "./component/Bubbles.vue";
import TypeIntro from './component/TypeIntro.vue';
import SayHi from "./component/SayHi.vue";
// 控制显示的布尔值
const showBubbles = ref(true);

// 切换组件显示的函数
const toggleAnimation = () => {
  showBubbles.value = !showBubbles.value;
};
</script>

<template>
  <div class="main-container">
    <div class="basic-container text-container">
      <SayHi />
      <p class="main-text">
        I'm <span class="my-name">Tong</span>
      </p>
      <TypeIntro />
      <div class="social-links">
        <a href="https://github.com/TonemonW" target="_blank" rel="noopener noreferrer" class="social-icon">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/tong-wu-0276b720b" target="_blank" rel="noopener noreferrer"
          class="social-icon">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
          <i class="fab fa-x-twitter fa-2x"></i>
        </a>
        <a href="#contract" class="social-icon">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </div>
      <a class="index-start-btn" href="#pre">Let's Start</a>
    </div>
    <div class="basic-container cloud-container" @click="toggleAnimation">
      <!-- 使用 v-if 切换 LittleCloud 和 Bubbles 组件 -->
      <LittleCloud v-if="!showBubbles" />
      <Bubbles v-else />
    </div>
    <NextArrow to="#pre" />
  </div>
</template>

<style scoped>
@keyframes opp {
  0% {
    opacity: 0;
    transform: translateY(-3vh);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-container {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.basic-container {
  position: relative;
  width: 40vw;
  height: 80vh;
  background-color: transparent;
  border-radius: 10%;
}

.text-container {
  margin-left: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: 300;
  color: var(--font-main-color);
  background-color: transparent;
  animation: opp 0.6s linear forwards;
  user-select: none;
  z-index: 2;
}

.cloud-container {
  cursor: pointer;
  overflow: hidden;
  display: flex;
}

.main-text {
  font-size: max(5vw, 4rem);
}

.my-name {
  font-weight: bold;
  background: linear-gradient(to right, var(--hover-color), #b0b0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.index-start-btn {
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 50%;
  height: 8%;
  font-size: max(1vw, 1.3rem);
  color: var(--font-main-color);
  border: 1px solid var(--font-main-color);
  border-radius: 20px;
  background-color: transparent;
  transition: all 0.3s;
}

.index-start-btn:hover {
  box-shadow: 0 0 30px var(--color-box-shadow);
  color: var(--hover-color);
  border: 2px solid var(--hover-color);
}

@media screen and (max-width: 768px) {
  .index-start-btn {
    display: none;
  }

  .text-container {
    width: 60vw;
    height: 40vh;
    margin-left: 0;
    /* 高度变为一半 */
  }

  .cloud-container {
    width: 80vw;
    height: 65vh;
    transform: translate(5vw, -16vh)
  }

  .main-text {
    font-size: max(3vw, 2rem);
  }
}

.social-links {
  margin: 1vh;
  display: flex;
  gap: 20px;
  /* 链接之间的间距 */
}

.social-icon {
  color: #4A5568;
  /* 默认灰色 */
  transition: color 0.3s ease;
  /* 添加平滑过渡 */
}

.social-icon:hover {
  box-shadow: 0 0 30px var(--color-box-shadow);
  color: var(--hover-color);
}
</style>
