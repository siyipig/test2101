import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const User = () => import("../views/User.vue");
const UserNews = () => import("../views/UserNews.vue");
const UserMsg = () => import("../views/UserMsg.vue");
const Product = () => import("../views/Product.vue");
const Profile = () => import("../views/Profile.vue");
const ProfileTest = () => import("../views/ProfileTest.vue");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: "关于"
    }
  },
  {
    path: '/product/:productId',   //这个语法后续要注意
    name: 'product',
    component: Product,
    meta: {
      title: "产品"
    }
  },
  {
    path: '/profile',   //这个语法后续要注意
    name: 'profile',
    component: Profile,
    children: [
      {
        path: 'test',
        name: 'profileTest',
        component:ProfileTest,
        meta: {
          title: "档案测试"
        }
      }
    ],
    meta: {
      title: "档案"
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children:[
      {
        path: '',
        redirect: '/user/news'
      },
      {
        path: 'news',
        name: 'userNews',
        component: UserNews,
        meta: {
          title: "用户新闻"
        }
      },
      {
        path: 'msg',
        name: 'userMsg',
        component: UserMsg,
        meta: {
          title: "用户信息"
        }
      }
    ],
    meta: {
      title: "用户"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title;
  document.title = to.meta.title;
  console.log(to);
  next();
})
export default router
