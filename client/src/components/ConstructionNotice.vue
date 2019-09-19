<template>
  <div class="construction-notice">
    <div class="row">
      <div class="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-12">
        <div class="transparent-card h2 text-center">
          <i class="fas fa-wrench"></i>&nbsp;
          <span>{{ $t('universal.under_construction') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'construction-notice',
}
</script>
