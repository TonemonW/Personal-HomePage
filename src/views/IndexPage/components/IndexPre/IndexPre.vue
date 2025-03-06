<script setup lang="ts">
import { ref, onMounted } from "vue";
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import titleAndPath from "@/config/TitleAndPath";
import useVisible from "@/hooks/useVisible";
import use3DCard from "@/hooks/use3Dcard";

const leftContainer = ref<HTMLElement | null>(null);
const rightContainer = ref<HTMLElement | null>(null);
// 调用useVisible钩子，实现添加进入可视区域后的动画
useVisible(leftContainer, {
	onIntersect: () => {
		leftContainer.value?.classList.add("box-left-ani");
		rightContainer.value?.classList.add("box-right-ani");
	},
});

onMounted(() => {
	use3DCard(leftContainer);
	use3DCard(rightContainer);
});

const pres1 = ref([
	{
		name: "HTML5",
		src: "/img/H5.png",
		alt: "HTML5",
	},
	{
		name: "CSS3",
		src: "/img/css3.png",
		alt: "CSS3",
	},
	{
		name: "JavaScript",
		src: "/img/JS.png",
		alt: "JS",
	},
	{
		name: "TypeScript",
		src: "/img/ts.svg",
		alt: "TS",
	},
	{
		name: "Vue",
		src: "/img/vue.png",
		alt: "Vue",
	},
	{
		name: "React",
		src: "/img/react.png",
		alt: "React",
	},
  {
    name: "Next.js",
    src: "/img/nextjs.webp",
    alt: "Next.js",
  },
  {
    name: "Tailwind",
    src: "/img/tailwind.png",
    alt: "Tailwind",
  },
  {
    name: "React Native",
    src: "/img/react.png",
    alt: "React Native",
  },
  {
    name: "Expo",
    src: "/img/expo.png",
    alt: "EXpo",
  },
  {
    name: "Wordpress",
    src: "/img/Wordpress.png",
    alt: "Wordpress",
  },
]);

const pres2 = ref([

	{
		name: "Node.js",
		src: "/img/nodejs.png",
		alt: "Node.js",
	},
	{
		name: "Express",
		src: "/img/express.png",
		alt: "Express",
	},
	{
		name: "MySQL",
		src: "/img/mysql.png",
		alt: "MySQL",
	},
  {
		name: "PostgreSQL",
		src: "/img/pgSQL.png",
		alt: "pgSQL",
	},
  {
		name: "Vite",
		src: "/img/vite.svg",
		alt: "Vite",
	},
  {
    name: "Git",
    src: "/img/git.svg",
    alt: "Git",
  },
  {
    name: "Vercel",
    src: "/img/Vercel.png",
    alt: "Vercel",
  },
  {
    name: "Docker",
    src: "/img/docker.png",
    alt: "Docker",
  },
  {
    name: "AWS",
    src: "/img/AWS.png",
    alt: "AWS",
  },
]);
</script>

<template>
	<div class="index-prev-container">
		<PartTitle :title="titleAndPath[1].name" class="media-title" />
		<div class="basic-left-container" ref="leftContainer">
			<p class="can-title">Frontend</p>
			<div class="img-container" v-for="(item, index) in pres1" :key="index">
				<img :src="item.src" :alt="item.alt" /><span>{{ item.name }}</span>
			</div>
		</div>
		<div class="basic-right-container" ref="rightContainer">
			<p class="can-title">Backend and General</p>
			<div class="img-container" v-for="(item, index) in pres2" :key="index">
				<img :src="item.src" :alt="item.alt" /><span>{{ item.name }}</span>
			</div>
		</div>
		<!-- <NextArrow to="#projects" style="bottom: 4vh;"/> -->
	</div>
</template>

<style scoped>
.index-prev-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90vh;
  background-color: transparent;
  overflow: hidden;
}

/* 动画效果 */
@keyframes show-up-left {
  0% {
    opacity: 0;
    box-shadow: none;
    transform: translateX(-20vw);
  }
  50% {
    opacity: 1;
    box-shadow: none;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 3vh var(--color-box-shadow);
  }
}

@keyframes show-up-right {
  0% {
    opacity: 0;
    box-shadow: none;
    transform: translateX(20vw);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
    box-shadow: none;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 3vh var(--color-box-shadow);
  }
}

.basic-left-container {
  opacity: 30;
  width: 55vw;
  height: 60vh;
  border-radius: 10%;
  transition: all 0.4s;
  border: 1px solid var(--color-box-shadow);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2); /* 增加阴影 */
}

.basic-right-container {
  opacity: 30;
  width: 35vw;
  height: 60vh;
  border-radius: 10%;
  transition: all 0.4s;
  border: 1px solid var(--color-box-shadow);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2); /* 增加阴影 */
}

.img-container {
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  transition: transform 0.3s ease;
  color: var(--font-main-color);
  opacity: 0;
  animation: op 0.6s 0.8s linear 1 forwards;

}

/* 左侧每行4个图片 */
.basic-left-container .img-container {
  width: 22%; /* 调整为22%，使每行显示4个 */
}

/* 右侧每行2个图片 */
.basic-right-container .img-container {
  width: 30%; /* 调整为45%，使每行显示2个 */
}

.can-title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10%;
	font-weight: 600;
	color: var(--font-main-color);
	font-size: max(1.6vw, 1.3rem);
  line-height: min(1.8vw, 1.5rem);
	user-select: none;
}

@keyframes op {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.img-container img {
	width: 64px;
	height: 64px;
}

.img-container span {
	width: 100%;
	text-align: center;
	font-weight: 600;
	user-select: none;
	font-size: max(1vw, 0.9rem);
}

.img-container:hover {
	color: var(--hover-color);
	transform: scale(1.2);
}

.box-left-ani {
	animation: show-up-left 1.3s ease-out 1 forwards;
}

.box-right-ani {
	animation: show-up-right 1.3s ease-out 1 forwards;
}

.media-title {
	user-select: none;
}

/* 依然是需要做媒体查询的哦，卡片效果改成横着的 */
@media screen and (max-width: 768px) {
	/* 768更改展示形态 */
	.index-prev-container {
		flex-wrap: wrap;
		align-content: space-around;
	}
  .can-title {
    font-size: max(1vw, 0.9rem);
    line-height: min(1.2vw, 1.1rem);
  }
	.media-title {
		width: max(1.2rem, 2.2vw);
		left: 4vw;
	}

	.media-title::before {
		content: "";
		position: absolute;
		top: -2vh;
		width: 100%;
		height: 8%;
		background-color: var(--scroll-block-color);
	}

	.img-container {
		width: 40%;
		height: 20%;
	}

	.img-container img {
		width: 32px;
		height: 32px;
	}

	.img-container span {
		font-weight: 400;
	}
}
@media screen and (max-width: 550px){
  .basic-left-container {
    width: 80vw;
    height: 40vh;
  }
  .basic-right-container {
    width: 80vw;
    height: 40vh;
  }
  .basic-left-container .img-container {
    width: 22%; /* 调整为22%，使每行显示4个 */
  }

  /* 右侧每行2个图片 */
  .basic-right-container .img-container {
    width: 30%;
  }
}
</style>
