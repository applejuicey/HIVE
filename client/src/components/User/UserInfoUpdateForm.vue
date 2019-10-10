<template>
  <div class="row">
    <div class="col-xl-6 offset-xl-3">
      {{userInfo}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user_info_update_form',
    props: {
      userInfo: {
        type: Object,
        required: true
      }
    },
  }
</script>