<script setup lang="ts">
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import titleAndPath from "@/config/TitleAndPath";
import useVisible from "@/hooks/useVisible";
import { ref } from "vue";

const projectList = ref<HTMLElement | null>(null);
const items = ref<HTMLElement[]>([]);

const projects = ref<projectItems[]>([
  // 项目的列表
  {
    name: "XTreasures",
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
        alt: "PostgreSQL",
        value: "/img/pgSQL.png",
      },
      {
        type: "img",
        alt: "git",
        value: "/img/git.svg",
      },
      {
        type: "img",
        alt: "AWS",
        value: "/img/AWS.png",
      },
    ],
    details: {
      description: `<h3>Project Overview</h3>
<p>An e-commerce platform built with Next.js, with both the frontend and backend hosted on AWS Elastic Beanstalk.</p>
<ul>
  <li>Developed a dynamic web application using TypeScript, React (Next.js), RESTful API</li>
  <li>Implemented ISR & CSR strategies in Next.js, optimizing SEO visibility and improving performance by reducing FCP and LCP times.</li>
  <li>Designed and implemented web UI using React components, integrating ShadCN and Tailwind CSS transitions for smooth UI interactions.</li>
  <li>Analyzed customer requirements and translated to technical docs, implemented using Node.js, refactored legacy code.</li>
</ul>`,
      carouselImages: [
        "/img/PlushShopping/1.jpg",
        "/img/PlushShopping/2.jpg",
        "/img/PlushShopping/3.png",
        "/img/PlushShopping/4.jpg",
        "/img/PlushShopping/5.jpg",
        "/img/PlushShopping/6.png",
        "/img/PlushShopping/7.png",
      ],
      links: [
        {
          text: "View Project",
          url: "https://www.xtreasures.shop/"
        }
      ]
    }
  },
  {
    name: "Novel Pavilion",
    tags: [
      {
        type: "url",
      },
      {
        type: "img",
        alt: "React Native",
        value: "/img/react.png", 
      },
      {
        type: "img",
        alt: "Expo",
        value: "/img/expo.png",
      },
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
      {
        type: "img",
        alt: "AWS",
        value: "/img/AWS.png",
      },
    ],
    details: {
      description: `<h3>Project Overview</h3>
<p>A mobile reading platform built with React Native & Expo, featuring a backend powered by Node.js and Express</p>

<ul> 
<li>Technologies: JavaScript, React Native, Node.js, MySQL, Sequelize, RESTful API, AWS EC2, AWS S3</li> 
<li>Developed mobile apps with React Native & Expo, ensuring consistent performance on iOS and Android.</li> 
<li>Deployed the backend on AWS EC2, using Nginx and PM2 for process management and scalability.</li> 
<li>Implemented RESTful APIs using Node.js & Express.js for smooth front-end and back-end data interaction.</li>
<li>Integrated Amazon S3 for storing book covers and other media files, reducing database load and improving asset retrieval speed.</li>
<li>Troubleshot production incidents on EC2 instances and released patches to maintain system stability.</li> </ul>`,
      carouselImages: [
        "/img/smartCampus1.png",
        "/img/smartCampus2.png"
      ],
      links: []
    }
  },
  {
    name: "House of Carnivore",
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
      {
        type: "img",
        alt: "Wordpress",
        value: "/img/Wordpress.png",
      },
    ],
    details: {
      description: `<h3>Project Overview</h3>
<p>Web system for the company, and company portal using WordPress CMS</p>
<ul>
  <li>Developed WordPress plugins to enhance company website functionality.</li>
  <li>Collaborated closely with designers and implemented design system (React components), also using CSS transitions for UI interactions.</li>
  <li>Improved SEO & accessibility through structured content & semantic HTML5</li>`,
      carouselImages: [
        "/img/hoc/1.jpg",
        "/img/hoc/2.jpg"
      ],
      links: [
        {
          text: "House of Carnivore",
          url: "https://houseofcarnivore.com/"
        },
        {
          text: "HOC logistics",
          url: "https://hoclogistics.com.au/"
        }
      ]
    }
  },
  {
    name: "Personal Homepage [This Page]",
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
<p>A personal portfolio website showcasing projects & work experience, incorporating 3D models & SVG illustrations for an engaging user experience.</p>

<ul>
  <li>Built an optimized frontend with Vue & Vite, achieving faster build times & better performance.</li>
  <li>Integrated interactive 3D elements, enhancing UX without compromising load speed.</li>
  <li>Reduced asset load times through lazy loading & modern image optimization techniques.</li>
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
    name: "Global News System",
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
<p>A responsive news management platform with user authentication, permission control, & real-time news editing.</p>
<ul>
  <li>Implemented state management using Redux, ensuring efficient data handling.</li>
  <li>Optimized API communication with Axios, enhancing RESTful data fetching.</li>
  <li>Designed a dynamic routing system with React-Router, improving content navigation.</li>
  <li>Built a fully responsive UI, ensuring seamless experience across all devices.</li>
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
