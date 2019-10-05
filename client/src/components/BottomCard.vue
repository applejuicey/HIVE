<template>
  <div class="bottom-card shadow text-left">
    <h2 class="text-center mb-4">{{ cardTitle }}</h2>
    <slot name="card-body"></slot>
  </div>
</template>

<script>
  export default {
    name: 'bottom_card',
    props: {
      cardTitle: {
        type: String,
        required: true,
      },
    },
  }
</script>