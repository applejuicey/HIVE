<template>
  <div class="row" id="about">
    <div class="col-12">
      <div class="row custom-height align-items-center">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('about.select_topic')">
            <template v-slot:card-body>

              <div class="row mb-2">
                <div class="col-12">
                  <div class="card-group">
                    <div class="card">
                      <img :src="require('../assets/cv.jpg')" class="card-img-top" alt="Curriculum Vitae Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.cv_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.cv_text') }}</p>
                        <button @click="navigate('cv_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.cv_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <img :src="require('../assets/ps.png')" class="card-img-top" alt="Personal Statement Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.ps_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.ps_text') }}</p>
                        <button @click="navigate('ps_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.ps_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <img :src="require('../assets/rp.jpg')" class="card-img-top" alt="Research Proposal Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.rp_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.rp_text') }}</p>
                        <button @click="navigate('rp_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.rp_button') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-12">
                  <div class="card-group">
                    <div class="card">
                      <img :src="require('../assets/tbd.jpg')" class="card-img-top" alt="Transcript for Bachelor Degree Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.tbd_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.tbd_text') }}</p>
                        <button @click="navigate('tbd_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.tbd_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <img :src="require('../assets/tmd.jpg')" class="card-img-top" alt="Transcript for Master Degree  Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.tmd_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.tmd_text') }}</p>
                        <button @click="navigate('tmd_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.tmd_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <img :src="require('../assets/elc.jpg')" class="card-img-top" alt="English Language Certificate Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.elc_title') }}</h5>
                        <p class="card-text text-left">{{ $t('about.elc_text') }}</p>
                        <button @click="navigate('elc_view')" class="btn btn-dark">
                          <i class="fas fa-hand-point-right"></i>&nbsp;
                          {{ $t('about.elc_button') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </template>
          </bottom-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  export default {
    name: 'about',
    components: {
      BottomCard,
    },
    methods: {
      navigate: function (routeName) {
        this.$router.push({ name: routeName });
      },
    }
  }
</script>

<style scoped>
  .custom-height {
    height: calc(100vh - 5rem)
  }
</style>