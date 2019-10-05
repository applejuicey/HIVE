<template>
  <div class="row">
    <div class="col-xl-6 offset-xl-3">
      <div class="alert alert-primary text-center mb-0" v-if="statusObject.status === 'loading'">
        <h4 class="alert-heading">{{ statusObject.title }}</h4>
        <p>
          <span class="spinner-border spinner-border-sm text-primary"></span>&nbsp;{{ statusObject.message }}
        </p>
      </div>
      <div class="alert alert-danger text-center mb-0" v-else-if="statusObject.status === 'error'">
        <h4 class="alert-heading">{{ statusObject.title }}</h4>
        <p>
          {{ statusObject.message }}
        </p>
      </div>
      <div v-else-if="statusObject.status === 'loaded'">
        <slot name="content"></slot>
      </div>
      <div class="alert alert-info text-center mb-0" v-else>
        <h4 class="alert-heading">{{ $t('universal.waiting') }}</h4>
        <p>
          {{ $t('universal.waiting_to_be_initialized') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'status_card',
    props: {
      statusObject: {
        type: Object,
        required: true,
      },
    },
  }
</script>