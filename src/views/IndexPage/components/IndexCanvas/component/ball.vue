<template>
  <div class="frame">
    <div class="center">
      <div class="ball"></div>
      <div class="absorb_1"></div>
      <div class="absorb_2"></div>
      <div class="absorb_3"></div>
      <div class="absorb_4"></div>
      <div class="absorb_5"></div>
      <div class="absorb_6"></div>
      <div class="absorb_7"></div>
      <div class="absorb_8"></div>
      <div class="sparkle_1"></div>
      <div class="sparkle_2"></div>
      <div class="sparkle_3"></div>
      <div class="sparkle_4"></div>
      <div class="sparkle_5"></div>
      <div class="sparkle_6"></div>
      <div class="sparkle_7"></div>
      <div class="sparkle_8"></div>
      <div class="sparkle_9"></div>
      <div class="sparkle_10"></div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 中 <script setup> 用于简化单文件组件的书写
</script>

<style scoped>
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  filter: contrast(25);
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ball {
  width: 90px;
  height: 90px;
  position: relative;
  background: var(--back-main-color);
  border-radius: 50%;
  filter: blur(15px);
}
.absorb_1 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(153deg);
}
.absorb_1:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 37px 37px;
  animation: rotate 2.7s ease-in-out 0.2s infinite;
  filter: blur(5px);
}

.absorb_2 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(257deg);
}
.absorb_2:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 34px 34px;
  animation: rotate 2.9s ease-in-out 0.4s infinite;
  filter: blur(5px);
}

.absorb_3 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(221deg);
}
.absorb_3:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 31px 31px;
  animation: rotate 3.1s ease-in-out 0.6s infinite;
  filter: blur(5px);
}

.absorb_4 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(209deg);
}
.absorb_4:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 28px 28px;
  animation: rotate 3.3s ease-in-out 0.8s infinite;
  filter: blur(5px);
}

.absorb_5 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(106deg);
}
.absorb_5:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 25px 25px;
  animation: rotate 3.5s ease-in-out 1s infinite;
  filter: blur(5px);
}

.absorb_6 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(147deg);
}
.absorb_6:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 22px 22px;
  animation: rotate 3.7s ease-in-out 1.2s infinite;
  filter: blur(5px);
}

.absorb_7 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(111deg);
}
.absorb_7:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 19px 19px;
  animation: rotate 3.9s ease-in-out 1.4s infinite;
  filter: blur(5px);
}

.absorb_8 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(174deg);
}
.absorb_8:after {
  position: absolute;
  display: block;
  content: "";
  width: 50px;
  height: 50px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 16px 16px;
  animation: rotate 4.1s ease-in-out 1.6s infinite;
  filter: blur(5px);
}

.sparkle_1 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 8px;
  height: 8px;
  transform: rotate(104deg);
}
.sparkle_1:after {
  position: absolute;
  display: block;
  content: "";
  width: 8px;
  height: 8px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 58px 58px;
  animation: rotate 3.7s ease-in-out 0.2s infinite;
  filter: blur(3px);
}

.sparkle_2 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 9px;
  height: 9px;
  transform: rotate(195deg);
}
.sparkle_2:after {
  position: absolute;
  display: block;
  content: "";
  width: 9px;
  height: 9px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 56px 56px;
  animation: rotate 3.9s ease-in-out 0.4s infinite;
  filter: blur(3px);
}

.sparkle_3 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 10px;
  height: 10px;
  transform: rotate(198deg);
}
.sparkle_3:after {
  position: absolute;
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 54px 54px;
  animation: rotate 4.1s ease-in-out 0.6s infinite;
  filter: blur(3px);
}

.sparkle_4 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 11px;
  height: 11px;
  transform: rotate(59deg);
}
.sparkle_4:after {
  position: absolute;
  display: block;
  content: "";
  width: 11px;
  height: 11px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 52px 52px;
  animation: rotate 4.3s ease-in-out 0.8s infinite;
  filter: blur(3px);
}

.sparkle_5 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 12px;
  height: 12px;
  transform: rotate(166deg);
}
.sparkle_5:after {
  position: absolute;
  display: block;
  content: "";
  width: 12px;
  height: 12px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 50px 50px;
  animation: rotate 4.5s ease-in-out 1s infinite;
  filter: blur(3px);
}

.sparkle_6 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 13px;
  height: 13px;
  transform: rotate(182deg);
}
.sparkle_6:after {
  position: absolute;
  display: block;
  content: "";
  width: 13px;
  height: 13px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 48px 48px;
  animation: rotate 4.7s ease-in-out 1.2s infinite;
  filter: blur(3px);
}

.sparkle_7 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 14px;
  height: 14px;
  transform: rotate(248deg);
}
.sparkle_7:after {
  position: absolute;
  display: block;
  content: "";
  width: 14px;
  height: 14px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 46px 46px;
  animation: rotate 4.9s ease-in-out 1.4s infinite;
  filter: blur(3px);
}

.sparkle_8 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 15px;
  height: 15px;
  transform: rotate(267deg);
}
.sparkle_8:after {
  position: absolute;
  display: block;
  content: "";
  width: 15px;
  height: 15px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 44px 44px;
  animation: rotate 5.1s ease-in-out 1.6s infinite;
  filter: blur(3px);
}

.sparkle_9 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 16px;
  height: 16px;
  transform: rotate(220deg);
}
.sparkle_9:after {
  position: absolute;
  display: block;
  content: "";
  width: 16px;
  height: 16px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 42px 42px;
  animation: rotate 5.3s ease-in-out 1.8s infinite;
  filter: blur(3px);
}

.sparkle_10 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 17px;
  height: 17px;
  transform: rotate(64deg);
}
.sparkle_10:after {
  position: absolute;
  display: block;
  content: "";
  width: 17px;
  height: 17px;
  background: var(--back-main-color);
  border-radius: 50%;
  transform-origin: 40px 40px;
  animation: rotate 5.5s ease-in-out 2s infinite;
  filter: blur(3px);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 为每个吸收和闪烁效果单独设置 */
.absorb_1:after { animation: rotate 2.7s ease-in-out 0.2s infinite; }
.absorb_2:after { animation: rotate 2.9s ease-in-out 0.4s infinite; }
/* 继续添加每个样式，确保每个 .absorb 和 .sparkle 类都包含 rotate 动画 */
</style>
