<template>
  <nav class="navbar navbar-expand-md sticky-top background-color-main">
    <div class="navbar-brand cursor-default">
      <i class="fas fa-th"></i>&nbsp;
      <span>{{ $t('navbar.hive') }}</span>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('home')">
            <i class="fas fa-home"></i>&nbsp;{{ $t('navbar.home') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('articles')">
            <i class="fas fa-file-alt"></i>&nbsp;{{ $t('navbar.articles') }}
          </span>
        </li>
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('about')">
            <i class="fas fa-question-circle"></i>&nbsp;{{ $t('navbar.about') }}
          </span>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" data-toggle="dropdown">
            <i class="fas fa-language"></i>&nbsp;{{ $t('navbar.language') }}
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
        <li class="nav-item cursor-pointer">
          <span class="nav-link" @click="navigate('login')">
            <i class="fas fa-sign-in-alt"></i>&nbsp;{{ $t('navbar.login') }}
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
    methods: {
      navigate: function (routeName) {
        this.$router.push({ name: routeName });
      },
      changeLanguage: function (language) {
        this.$i18n.locale = language;
      },
    },
  }
</script>
