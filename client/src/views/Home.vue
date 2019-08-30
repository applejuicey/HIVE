<template>
  <div class="row align-items-center" id="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class=" col-md-6 offset-md-3 col-sm-12">
      <div class="list-card h2">
        <i class="fas fa-spinner"></i>&nbsp;
        <span>My blog is under construction now......</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  #home {
    height: 98vh;
    background:url(https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80);
    background-size:cover;
  }
  .list-card {
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #eee;
    border-left-width: .25rem;
    border-radius: .25rem;
    background-color: rgba(255,255,255,.85);
    background-clip: padding-box;
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    opacity: 0.75;
  }
</style>