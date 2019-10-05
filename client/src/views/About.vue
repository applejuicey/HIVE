<template>
  <div class="row" id="about">

    <div class="col-xl-2 col-md-3 side-column-lg">
      <bottom-card cardTitle="left">
        <template v-slot:card-body>
          <p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p>
          <p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p>
          <p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p>
          <p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p>
          <p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p><p>left</p>
        </template>
      </bottom-card>
    </div>

    <div class="col-xl-8 col-md-9">
      <bottom-card cardTitle="right">
        <template v-slot:card-body>
          <div>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
            <p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p><p>right</p>
          </div>

        </template>
      </bottom-card>
    </div>

    <div class="col-xl-2 d-xl-block d-none side-column-lg">
      <bottom-card cardTitle="right">
        <template v-slot:card-body>
          right
        </template>
      </bottom-card>
    </div>

  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue'
  export default {
    name: 'about',
    components: {
      BottomCard
    },
    methods: {

    }
  }
</script>