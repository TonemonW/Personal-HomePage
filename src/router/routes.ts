const routes = [
	{
		path: "/",
		redirect: "/index",
	},
	{
		name: "index",
		path: "/index",
		component: () => import("@/views/IndexPage/IndexPage.vue"),
		meta: { title: "Tong's Pages" },
		children: [],
	},
	{
		name: "404",
		path: "/404",
		meta: { title: "Not Found" },
		component: () => import("@/views/NotFound/NotFound.vue"),
	},
	//写在最底部，实现找不到路径跳转到404页面
	{
		path: "/:pathMatch(.*)",
		redirect: "/404",
	},
];

export default routes;
