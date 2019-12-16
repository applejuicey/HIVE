import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

// import Home from './views/Home.vue';
// import Search from './views/Search.vue';
// import About from './views/About.vue';
// import CVView from './views/CV/CVView.vue';
// import PSView from './views/PS/PSView.vue';
// import RPView from './views/RP/RPView.vue';
// import TBDView from './views/TBD/TBDView.vue';
// import TMDView from './views/TMD/TMDView.vue';
// import ELCView from './views/ELC/ELCView.vue';
// import Users from './views/User/Users.vue';
// import UserView from './views/User/UserView.vue';
// import UserCreate from './views/User/UserCreate.vue';
// import UserUpdate from './views/User/UserUpdate.vue';
// import UserDelete from './views/User/UserDelete.vue';
// import Login from './views/Login.vue';
// import Articles from './views/Article/Articles.vue';

const Home = () => import('./views/Home.vue');
const Search = () => import('./views/Search.vue');
const About = () => import('./views/About.vue');
const CVView = () => import('./views/CV/CVView.vue');
const PSView = () => import('./views/PS/PSView.vue');
const RPView = () => import('./views/RP/RPView.vue');
const TBDView = () => import('./views/TBD/TBDView.vue');
const TMDView = () => import('./views/TMD/TMDView.vue');
const ELCView = () => import('./views/ELC/ELCView.vue');
const Users = () => import('./views/User/Users.vue');
const UserView = () => import('./views/User/UserView.vue');
const UserCreate = () => import('./views/User/UserCreate.vue');
const UserUpdate = () => import('./views/User/UserUpdate.vue');
const UserDelete = () => import('./views/User/UserDelete.vue');
const Login = () => import('./views/Login.vue');
const Articles = () => import('./views/Article/Articles.vue');


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
      path: '/ps/view',
      name: 'ps_view',
      component: PSView,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/rp/view',
      name: 'rp_view',
      component: RPView,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/tbd/view',
      name: 'tbd_view',
      component: TBDView,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/tmd/view',
      name: 'tmd_view',
      component: TMDView,
      meta: {
        needLogin: false,
      },
    },
    {
      path: '/elc/view',
      name: 'elc_view',
      component: ELCView,
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