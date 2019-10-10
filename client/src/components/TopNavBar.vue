<template>
  <nav class="navbar navbar-expand-md sticky-top">
    <div class="navbar-brand cursor-default">
      <span>{{ $t('universal.hive') }}</span>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('home')">
            <i class="fas fa-home"></i>&nbsp;{{ $t('universal.home') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('search')">
            <i class="fas fa-search"></i>&nbsp;{{ $t('universal.search') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('about')">
            <i class="fas fa-question-circle"></i>&nbsp;{{ $t('navbar.about') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('cv_view')">
            <i class="fas fa-file-alt"></i>&nbsp;{{ $t('navbar.cv') }}
          </span>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" data-toggle="dropdown">
            <i class="fas fa-language"></i>&nbsp;{{ $t('universal.language') }}
          </a>
          <div class="dropdown-menu">
            <button class="dropdown-item" @click="changeLanguage('en')">
              English
            </button>
            <button class="dropdown-item" @click="changeLanguage('zh')">
              中文
            </button>
          </div>
        </li>
        <li class="nav-item cursor-pointer" v-if="isAdmin">
          <span class="nav-link" @click="navigate('users')">
            <i class="fas fa-users"></i>&nbsp;{{ $t('universal.user') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer" v-if="!hasLoggedIn">
          <span class="nav-link" @click="navigate('login')">
            <i class="fas fa-sign-in-alt"></i>&nbsp;{{ $t('universal.login') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer" v-else>
          <span class="nav-link" @click="logout">
            <i class="fas fa-sign-in-alt"></i>&nbsp;{{ $t('universal.logout') }}
          </span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'top_nav_bar',
    data: () => {
      return {

      };
    },
    computed: {
      hasLoggedIn: function () {
        return this.$store.state.token !== '';
      },
      isAdmin: function () {
        return this.$store.state.userInfo.authority.authorityIsAdmin || false;
      },
    },
    methods: {
      navigate: function (routeName) {
        this.$router.push({ name: routeName });
      },
      changeLanguage: function (language) {
        this.$i18n.locale = language;
      },
      logout: function () {
        this.$store.dispatch('commitSetTokenMutation', {
          token: ''
        });
        this.$store.dispatch('commitSetUserInfoMutation', {
          userInfo: {
            id: '',
            username: '',
            authority: {},
          }
        });
        this.$router.push({ name: 'login' });
      },
    },
  }
</script>
