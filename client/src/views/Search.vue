<template>
  <div class="row align-items-center height-percentage-100" id="search">
    <div class="col-12">
      文章检索：
      按标题、作者、时间、标签、全文关键字？、猜测（已登录用户）？
      用户检索：
      用户名、标签
      <construction-notice></construction-notice>
    </div>
  </div>
</template>

<script>
  import ConstructionNotice from '@/components/ConstructionNotice.vue'
  export default {
    name: 'search',
    components: {
      ConstructionNotice
    },
    methods: {

    }
  }
</script>