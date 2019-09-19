<template>
  <div id="app" class="height-100">
    <top-nav-bar></top-nav-bar>
    <div class="container-fluid">
      <div class="row height-100">
        <div class="col-12 height-100">
          <router-view/>
        </div>
      </div>
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

<style scoped>
  .container-fluid {
    height: 80%;
  }
</style>