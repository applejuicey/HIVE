import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Home from './views/Home.vue';
import Search from './views/Search.vue';
import About from './views/About.vue';
import CVView from './views/CV/CVView.vue';
import Users from './views/User/Users.vue';
import UserView from './views/User/UserView.vue';
import UserCreate from './views/User/UserCreate.vue';
import UserUpdate from './views/User/UserUpdate.vue';
import UserDelete from './views/User/UserDelete.vue';
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
      path: '/cv/view',
      name: 'cv_view',
      component: CVView,
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
      path: '/user/view/:userUUID',
      name: 'user_view',
      component: UserView,
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/user/create/:userUUID',
      name: 'user_create',
      component: UserCreate,
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/user/update/:userUUID',
      name: 'user_update',
      component: UserUpdate,
      meta: {
        needLogin: true,
      },
    },
    {
      path: '/user/delete/:userUUID',
      name: 'user_delete',
      component: UserDelete,
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