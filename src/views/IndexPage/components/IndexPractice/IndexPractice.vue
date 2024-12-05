<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import PracticeList from "@/components/PracticeList/PracticeList.vue";
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import LeftOrRightArrow from "@/components/LeftOrRightArrow/LeftOrRightArrow.vue";
import titleAndPath from "@/config/TitleAndPath";
import { debounce } from "lodash";

const practices = ref<{
	imgPath: string;
	imgAlt: string;
	companyName: string;
	jobName: string;
	time: string;
	show: boolean;
}[]>([
	{
		imgPath: "/img/knk.jpg",
		imgAlt: "KNK Dessert Logo",
		companyName: "KNK Dessert",
		jobName: "Food Production Manager",
		time: "2019-3 ~ 2021-10",
		show: true,
	},
	{
		imgPath: "/img/hoc.jpg",
		imgAlt: "House Of Carnivore Logo",
		companyName: "House Of Carnivore",
		jobName: "Food Technologist/Production Supervisor",
		time: "2022-2 ~ 2024-12",
		show: true,
	},
]);

const index = ref<number>(0);

function changeShow(lor: boolean) {
	practices.value[index.value].show = false;
	if (lor) {
		// 左
		if (index.value - 1 < 0) {
			index.value = practices.value.length - 1;
		} else {
			--index.value;
		}
	} else {
		// 右
		if (index.value + 1 >= practices.value.length) {
			index.value = 0;
		} else {
			++index.value;
		}
	}
	practices.value[index.value].show = true;
}

function initShow() {
	if (window.innerWidth <= 850) {
		practices.value.forEach((item, index) => {
			if (index !== 0) {
				item.show = false;
			}
		});
	} else {
		practices.value.forEach((item) => {
			item.show = true;
		});
	}
}

const initShowDe = debounce(initShow, 300);

onMounted(() => {
	initShow();
	window.addEventListener("resize", initShowDe);
});

onUnmounted(() => {
	initShowDe.cancel(); // 取消防抖任务
	window.removeEventListener("resize", initShowDe);
});
</script>

<template>
	<div class="index-practice-container">
		<PartTitle :title="titleAndPath[3].name" class="media-title" />

		<!-- 左侧箭头 -->
		<LeftOrRightArrow left-or-right="left" class="arrow-btn" @click="changeShow(true)" style="margin-left: 10px" />

		<PracticeList :practices="practices" />

		<!-- 右侧箭头 -->
		<LeftOrRightArrow left-or-right="right" class="arrow-btn" @click="changeShow(false)"
			style="margin-right: 10px" />
	</div>
</template>

<style scoped>
.media-title {
	user-select: none;
}

.arrow-btn {
	cursor: pointer;
	transition: all 0.3s;
	display: none;
	/* 默认隐藏箭头 */
}

/* 小屏幕显示箭头按钮 */
@media screen and (max-width: 850px) {
	.arrow-btn {
		display: block;
		/* 显示箭头 */
	}

	.media-title::before {
		content: "";
		position: absolute;
		left: -2vh;
		width: 8%;
		height: 100%;
		background-color: var(--scroll-block-color);
	}
}

.index-practice-container {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90vh;
	background-color: transparent;
}
</style>
