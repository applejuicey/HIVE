import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';
import Articles from './views/article/Articles.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/hive/',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        needAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        needAuth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        needAuth: false,
      },
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      meta: {
        needAuth: false,
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  //根据meta.needAuth判断是否需要登录
  if (to.matched.some(route => route.meta.needAuth)) {
    //点击的是需要登录的页面
    if (localStorage.getItem('userInfo') !== null) {
      // 已经登录过
      next();
    } else {
      // 没有登陆过
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        path: '/login',
      });
    }
  } else {
    //点击的是不需要登录的页面,则进行正常的路由跳转
    next();
  }
});

export default router;