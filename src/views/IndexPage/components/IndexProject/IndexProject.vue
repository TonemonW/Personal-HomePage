<script setup lang="ts">
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import titleAndPath from "@/config/TitleAndPath";
import useVisible from "@/hooks/useVisible";
import { ref } from "vue";

const projectList = ref<HTMLElement | null>(null);
const items = ref<HTMLElement[]>([]);

const projects = ref([
  // 项目的列表
  {
    name: "Novel Web App (Mobile) – Coding ",
    tags: [
      {
        type: "img",
        alt: "RN",
        value: "/img/react.png",
      },
      {
        type: "img",
        alt: "Expo",
        value: "/img/expo.png",
      },
    ],
    details: {
      description: " ",
      carouselImages: [
        "/img/smartCampus1.png",
        "/img/smartCampus2.png"
      ],
      links: []
    }
  },
  {
    name: "Novel Web (Backend)– Coding",
    tags: [
      {
        type: "img",
        alt: "Node.js",
        value: "/img/nodejs.png",
      },
      {
        type: "img",
        alt: "Express",
        value: "/img/express.png",
      },
      {
        type: "img",
        alt: "MySQL",
        value: "/img/mysql.png",
      },
      {
        type: "img",
        alt: "Docker",
        value: "/img/docker.png",
      },
      {
        type: "img",
        alt: "JavaScript",
        value: "/img/JS.png",
      },
    ],
    details: {
      description: "",
      carouselImages: [
        "/img/smartCampus1.png",
        "/img/smartCampus2.png"
      ],
      links: []
    }
  },
  {
    name: "Plush Shopping system (Full Stack)",
    tags: [
      {
        type: "url",
      },
      {
        type: "img",
        alt: "Next.js",
        value: "/img/nextjs.webp",
      },
      {
        type: "img",
        alt: "TS",
        value: "/img/ts.svg",
      },
      {
        type: "img",
        alt: "Tailwind",
        value: "/img/tailwind.png",
      },
      {
        type: "img",
        alt: "Framer Motion",
        value: "/img/fm.png",
      },
      {
        type: "img",
        alt: "PostgreSQL",
        value: "/img/pgSQL.png",
      },
      {
        type: "img",
        alt: "Neon",
        value: "/img/neon.png",
      },
      {
        type: "img",
        alt: "git",
        value: "/img/git.svg",
      },
      {
        type: "img",
        alt: "Vercel",
        value: "/img/Vercel.png",
      },
    ],
    details: {
      description: `<h3>Project Overview</h3>
<p>This project combines modern technologies and a serverless architecture for scalability and efficiency.</p>

<ul>
  <li><strong>Tailwind CSS and Shadcn</strong>: Tailwind CSS ensured responsive design, while Shadcn streamlined component usage. Utility class optimization prevented style bloat.</li>
  <li><strong>Neon + pgSQL with Drizzle ORM</strong>: Neon provided a serverless PostgreSQL database with low latency, while Drizzle ORM simplified schema management and migrations. Connection pooling issues and data transition challenges were resolved using Neon’s built-in pooling and custom migration scripts tested in staging.</li>
  <li><strong>OAuth</strong>: Seamless user authentication with multiple providers, leveraging NextAuth.js for consistent integration and robust error handling.</li>
  <li><strong>Stripe</strong>: Reliable payment processing with sandbox testing and retry mechanisms for webhooks.</li>
</ul>`,
      carouselImages: [
        "/img/PlushShopping/1.png",
        "/img/PlushShopping/2.png",
        "/img/PlushShopping/3.png",
        "/img/PlushShopping/4.png",
        "/img/PlushShopping/5.png",
        "/img/PlushShopping/6.png",
        "/img/PlushShopping/7.png",
        "/img/PlushShopping/8.png",
      ],
      links: [
        {
          text: "View Project",
          url: "https://shopping-system-alpha.vercel.app/"
        }
      ]
    }
  },
  {
    name: "Personal Homepage (Frontend)[This Page]",
    tags: [
      {
        type: "url",
      },
      {
        type: "img",
        alt: "Vue",
        value: "/img/vue.png",
      },
      {
        type: "img",
        alt: "Vite",
        value: "/img/vite.svg",
      },
      {
        type: "img",
        alt: "TS",
        value: "/img/ts.svg",
      },
      {
        type: "img",
        alt: "git",
        value: "/img/git.svg",
      },
      {
        type: "img",
        alt: "Vercel",
        value: "/img/Vercel.png",
      },
    ],
    details: {
      description: `<h3>Project Overview</h3>
<p>This homepage is built using Vue, Vite, TypeScript, and Three.js, with most components custom encapsulated by me. </p>

<ul>
  <li><strong>Component Encapsulation</strong>: Custom components enhance code reusability and simplify the overall architecture.</li>
  <li><strong>3D Rendering</strong>: The second-layer encapsulation of Three.js optimizes the loading and display of 3D models.</li>
  <li><strong>SVG Animations</strong>: SVG animations are used to enhance interactivity and visual appeal.</li>
</ul>

`,
      carouselImages: [
        "/img/HomePage/homeDay.png",
        "/img/HomePage/homeNight.png",
        "/img/HomePage/about.png",
        "/img/HomePage/project.png",
        "/img/HomePage/about.png",
      ],
      links: [{
        text: "View Home Page",
        url: "#prod"
      }]
    }
  },
  {
    name: "Global News System (Frontend)",
    tags: [
      {
        type: "url",
      },
      {
        type: "img",
        alt: "React",
        value: "/img/react.png",
      },
      {
        type: "img",
        alt: "JavaScript",
        value: "/img/JS.png",
      },
      {
        type: "img",
        alt: "git",
        value: "/img/git.svg",
      },
      {
        type: "img",
        alt: "Vercel",
        value: "/img/Vercel.png",
      },
    ],
    details: {
      description: `
      <h3>Project Overview</h3>
<p>This global news system, built with React and JSON Server, tackled key challenges with tailored solutions:</p>
<ul>
  <li><strong>State Management</strong>: Used Redux for seamless state handling across pages, including async actions.</li>
  <li><strong>Data Visualization</strong>: ECharts displayed key metrics with lazy loading to enhance performance.</li>
  <li><strong>Mock Backend</strong>: JSON Server simulated APIs, with Axios for stable requests and error handling.</li>
  <li><strong>Access Control</strong>: Role-based permissions secured access to sensitive data.</li>
  <li><strong>UI Design</strong>: Ant Design provided a clean, responsive layout for a better user experience.</li>
</ul>

`,
      carouselImages: [
        "/img/newsSystem/Charts.png",
        "/img/newsSystem/Home.png",
        "/img/newsSystem/Login.png"
      ],
      links: [
        {
          text: "View Project",
          url: "https://react-news-system.vercel.app/#/login"
        }
      ]
    }
  },
  {
    name: "freeCodeCamp certification",
    tags: [
      {
        type: "url",
      },
      {
        type: "img",
        alt: "HTML",
        value: "/img/H5.png",
      },
      {
        type: "img",
        alt: "CSS",
        value: "/img/css3.png",
      },
      {
        type: "img",
        alt: "JavaScript",
        value: "/img/JS.png",
      },
    ],
    details: {
      description: ``,
      carouselImages: [
        "/img/certification/RWB.png",
        "/img/certification/JADS.png"
      ],
      links: [
        {
          text: "Responsive Web Design Certification",
          url: "https://www.freecodecamp.org/certification/Tongw/responsive-web-design"
        },
        {
          text: "JavaScript Algorithms and Data Structures Certification",
          url: "https://www.freecodecamp.org/certification/Tongw/javascript-algorithms-and-data-structures-v8"
        }
      ]
    }
  }
]);

type projectItems = {
  name: string;
  tags: (
    | { type: "img"; alt: string; value: string } // Image tags
    | { type: "url" }            // URL tags
  )[];
  details: {
    description: string;
    carouselImages: string[];
    links: { text: string; url: string }[];
  };
};


const drawerVisible = ref(false); // State for controlling the drawer visibility
const selectedProject = ref<projectItems | null>(null); // State to store the currently selected project

const direction = ref("rtl"); // Drawer direction

import { computed } from "vue";

const drawerSize = computed(() => {
  return window.innerWidth < 768 ? '85%' : '60%'; // 小于768px宽度时为80%，否则为50%
});

useVisible(projectList, {
  onIntersect: () => {
    projectList.value?.classList.add("ani-show-up");
    items.value.forEach((item, index) => {
      item.style.animationDelay = `0.${index}s`;
      item.classList.add("setp-in-ani");
    });
  },
});

function openDrawer(item: projectItems) {
  selectedProject.value = item;
  drawerVisible.value = true;
}

function hasURL(item: projectItems) {
  return item.tags.some((i) => i.type === "url");
}

function openFullImage(imageUrl: string) {
  window.open(imageUrl, "_blank"); // 在新窗口中打开大图
}
</script>

<template>
  <div class="index-project-container">
    <PartTitle :title="titleAndPath[2].name" class="title-project" />
    <div class="index-project-list" ref="projectList">
      <div class="index-project-item-container">
        <div class="index-project-item" v-for="(item, index) in projects" :key="index" ref="items"
          @click="hasURL(item) && openDrawer(item)" :style="hasURL(item) ? { cursor: 'pointer' } : {}">
          <p class="project-name" :class="hasURL(item) ? 'project-name-click' : ''">
            {{ item.name }}
          </p>
          <div class="project-tags">
            <template v-for="tag in item.tags">
              <img v-if="tag.type === 'img'" :src="tag.value" :alt="tag.alt" class="project-tag-img" />
              <span v-if="tag.type === 'url'" class="project-tag-url">Detail</span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Drawer for project details -->
    <el-drawer v-model="drawerVisible" :with-header="false" :size="drawerSize" :direction="direction"
      style="background-color: var(--overall-background-color);opacity:0.95; color: var(--font-main-color);">
      <template v-if="selectedProject">
        <!-- 显示轮播图 -->
        <el-carousel :interval="5000" arrow="always" height="47vh">
          <el-carousel-item v-for="(image, index) in selectedProject.details.carouselImages" :key="index"
            class="el-carousel__item">
            <img :src="image" alt="Project Image" class="carousel-img" @click="openFullImage(image)" />
          </el-carousel-item>
        </el-carousel>

        <!-- 显示项目描述 -->
        <div class="project-description" v-html="selectedProject.details.description"></div>

        <!-- 显示相关链接 -->
        <div v-if="selectedProject.details.links?.length">
          <a v-for="(link, index) in selectedProject.details.links" :key="index" :href="link.url || '#'" target="_blank"
            class="project-link">
            {{ link.text }}
          </a>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<style scoped>
.index-project-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: transparent;
}

.index-project-list {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 80vw;
  height: 60vh;
  border: 1px solid var(--color-box-shadow);
  border-radius: 20px;
  transition: all 0.4s;
}

.index-project-item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: 70%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
}

.index-project-item {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid var(--solid-color);
  color: var(--font-main-color);
  transition: all 0.2s;
}

.index-project-item:hover {
  color: var(--hover-color);
}

.project-name {
  padding-left: 0.5vw;
  width: 50%;
  font-size: max(1.1vw, 1rem);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
}

.project-name-click {
  font-weight: 600;
}

.project-tags {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.project-tag-img {
  width: 24px;
  height: 24px;
  margin-left: 1vw;
}

@keyframes show-up {
  0% {
    opacity: 0;
    box-shadow: none;
  }

  100% {
    opacity: 1;
    box-shadow: 0 0 3vh var(--color-box-shadow);
  }
}

.ani-show-up {
  animation: show-up 1.3s ease-out 1 forwards;
}

.project-tag-url {
  width: 64px;
  padding: 2px;
  font-size: 16px;
  border: 1px solid var(--hover-color);
  color: var(--hover-color);
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.project-tag-url:hover {
  background-color: var(--hover-color);
  color: var(--overall-background-color);
}

/* 进入的动画 */
@keyframes item-in {
  0% {
    opacity: 0;
    transform: translate(4vw, -4vh);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes ftc {

  0%,
  100% {
    color: var(--hover-color);
  }

  50% {
    color: var(--font-main-color);
  }
}

.setp-in-ani {
  animation: item-in 1s ease-out 1 forwards;
}

@media screen and (max-width: 768px) {

  /* 768更改展示形态 */
  .title-project::before {
    content: "";
    position: absolute;
    left: -2vh;
    width: 8%;
    height: 100%;
    background-color: var(--scroll-block-color);
  }

  .project-tag-img {
    width: 16px;
    height: 16px;
  }

  /* .project-tag-icon{
      font-size: 16px;
    } */

  .project-tag-url {
    width: 48px;
    font-size: 14px;
  }

  .index-project-list {
    width: 90vw;
  }
}

@media screen and (max-width: 530px) {
  .project-tags {
    display: none;
  }

  .project-name {
    width: 100%;
  }

  .project-name-click {
    animation: ftc 5s ease-in-out infinite;
  }
}

.carousel-img {
  display: block;
  /* 确保图片为块级元素 */
  margin: auto;
  /* 自动水平居中 */
  max-width: 100%;
  /* 不超过容器的宽度 */
  max-height: 100%;
  /* 不超过容器的高度 */
  object-fit: contain;
  /* 保持宽高比 */
}

.el-carousel__item {
  display: flex;
  /* 使用 flex 布局 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 100%;
  /* 占满父容器的高度 */
}

.project-description {
  margin-top: 1em;
  margin-left: 1em;
  font-size: 1em;
}

.project-link {
  display: block;
  margin-top: 1em;
  text-decoration: none;
  color: var(--font-main-color);
  font-style: italic;
  font-weight: bold;
}

.project-link:hover {
  color: var(--hover-color);
}
</style>
