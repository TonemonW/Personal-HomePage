<script setup lang="ts">
import { onMounted } from "vue";
import setCss from "@/tools/setCss";
onMounted(() => {
	// 根据读取到的内容变样式
	setCss(localStorage.getItem("dayOrNight") === "day");
});
</script>

<template>
	<div class="not-found-container">
		<p class="not-found-reason">Page Not Found</p>
		<p class="not-found-1">Oops! The page you're looking for doesn't exist. </p>
		<p class="not-found-1">It might have been removed, renamed, or is temporarily unavailable.</p>
		<div class="not-found-3">
			<button @click="$router.go(-1)">Go back to Home</button>
		</div>
	</div>
</template>

<style scoped>
.not-found-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: center;
	width: 100%;
	height: 100vh;
	background-color: var(--overall-background-color);
	color: var(--font-main-color);
	font-weight: 400;
}

.not-found-container p,
.not-found-container div {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80vw;
	height: 10vh;
}

.not-found-reason {
	font-size: max(2vw, 1.1rem);
}

.not-found-1 {
	font-size: max(1.5vw, 1rem);
}

.not-found-2 {
	font-size: max(2vw, 0.8rem);
	margin-left: 20vw;
}

.not-found-3 button {
	width: 4vw;
	background-color: transparent;
	cursor: pointer;
	font-size: max(1.2vw, 0.8rem);
	border: none;
	border-bottom: 1px dashed var(--font-main-color);
	transition: all 0.2s;
	color: var(--font-main-color);
}

.not-found-3 button:hover {
	color: var(--hover-color);
	border-bottom: 1px dashed var(--hover-color);
}

@media screen and (max-width: 800px) {
	.not-found-container p,
	.not-found-container div {
		font-weight: 600;
	}
}
</style>
