<template>
  <div class="row align-items-center height-percentage-100" id="home">
    <div class="col-12">
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