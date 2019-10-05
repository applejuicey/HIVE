<template>
  <div class="row align-items-center height-percentage-100" id="home">
    <div class="col-12">
      <div class="row">
        <div class="col-6 offset-3">
          <p style="width: 500px; word-wrap:break-word">
            {{ this.$store.state.token }}
          </p>
        </div>
      </div>
      <p>
        已登录用户：
        个人资料、个人文章、文章推送
        未登录用户：
        按时间顺序（最新）展示文章

        {{ this.$store.state.userInfo }}
      </p>

      <construction-notice></construction-notice>
    </div>
  </div>
</template>

<script>
  import ConstructionNotice from '@/components/ConstructionNotice.vue'
  export default {
    name: 'home',
    components: {
      ConstructionNotice
    },
    methods: {

    }
  }
</script>