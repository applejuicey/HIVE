<template>
  <div id="app">
    <top-nav-bar></top-nav-bar>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TopNavBar from '@/components/TopNavBar.vue';
  export default {
    name: 'app',
    components: {
      TopNavBar
    },
  }
</script>