import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Home from './views/Home.vue';
import Search from './views/Search.vue';
import About from './views/About.vue';
import Users from './views/User/Users.vue';
import Login from './views/Login.vue';

import Articles from './views/Article/Articles.vue';

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
        needLogin: false,
      },
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        needLogin: false,
      },
    },

    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      meta: {
        needLogin: false,
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.needLogin)) {
    //点击的是需要登录的页面
    if (store.state.token !== '') {
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