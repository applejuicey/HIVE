<template>
  <div class="row" id="about">
    <div class="col-12">
      <div class="row custom-height align-items-center">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('about.select_topic')">
            <template v-slot:card-body>

              <div class="row mb-2">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card border-light">
                      <img :src="require('../assets/cv.jpg')" class="card-img-top" alt="Curriculum Vitae Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.cv_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.cv_text') }}</p>
                        <button @click="navigate('cv_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
                          {{ $t('about.cv_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card border-light">
                      <img :src="require('../assets/ps.png')" class="card-img-top" alt="Personal Statement Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.ps_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.ps_text') }}</p>
                        <button @click="navigate('ps_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
                          {{ $t('about.ps_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card border-light">
                      <img :src="require('../assets/rp.jpg')" class="card-img-top" alt="Research Proposal Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.rp_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.rp_text') }}</p>
                        <button @click="navigate('rp_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
                          {{ $t('about.rp_button') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card border-light">
                      <img :src="require('../assets/tbd.jpg')" class="card-img-top" alt="Transcript for Bachelor Degree Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.tbd_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.tbd_text') }}</p>
                        <button @click="navigate('tbd_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
                          {{ $t('about.tbd_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card border-light">
                      <img :src="require('../assets/tmd.jpg')" class="card-img-top" alt="Transcript for Master Degree  Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.tmd_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.tmd_text') }}</p>
                        <button @click="navigate('tmd_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
                          {{ $t('about.tmd_button') }}
                        </button>
                      </div>
                    </div>
                    <div class="card border-light">
                      <img :src="require('../assets/elc.jpg')" class="card-img-top" alt="English Language Certificate Image">
                      <div class="card-body text-center">
                        <h5 class="card-title">{{ $t('about.elc_title') }}</h5>
                        <p class="card-text text-left font-weight-light">{{ $t('about.elc_text') }}</p>
                        <button @click="navigate('elc_view')" class="btn btn-dark">
                          <i class="fas fa-hand-pointer"></i>&nbsp;
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
  .card:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.65);
    transition: all .2s ease-in-out;
  }
  .card-deck .card {
    margin-left: 2px;
    margin-right: 2px;
  }
  .card-deck {
    margin-left: 0;
    margin-right: 0;
  }
  .bottom-card:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.65) !important;
    transition: all .2s ease-in-out;
  }
</style>