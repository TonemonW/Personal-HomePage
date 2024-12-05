/**
 * 锚点数组，每一个小页面的标题及其路径信息
 */
const titleAndPath = [
	{
		name: "Home",
		path: "#prod",
	},
	{
		name: "About",
		path: "#pre",
	},
	{
		name: "Project",
		path: "#project",
	},
	{
		name: "Experience",
		path: "#practice",
	},
	{
		name: "Contact",
		path: "#contract",
	},
];

export default titleAndPath;

/**
 * 去掉首屏信息的锚点数组
 */
export const partTitleAndPath = titleAndPath.filter((_, index) => index !== 0);
