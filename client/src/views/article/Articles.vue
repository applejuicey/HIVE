<template>
  <div class="row align-items-center height-100" id="articles">
    <div class="col-12">
      <construction-notice></construction-notice>
    </div>
  </div>
</template>

<script>
  import ConstructionNotice from '@/components/ConstructionNotice.vue'
  export default {
    name: 'articles',
    components: {
      ConstructionNotice
    },
    methods: {

    }
  }
</script>