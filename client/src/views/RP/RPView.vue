<template>
  <div class="row" id="rp-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('rp.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('rp.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('rp.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('rp.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('rp.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('rp.loading') }}&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
              </form>
            </template>
          </bottom-card>
        </div>
      </div>
      <div class="modal" id="errorModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-center d-block">
              <h5 class="modal-title">{{ $t('rp.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('rp.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <r-p-type4 v-if="showType === 'pstype4'"></r-p-type4>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import RPType4 from '@/components/RP/RPType4.vue';
  export default {
    name: 'rp_view',
    components: {
      BottomCard,
      RPType4,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        responseMessage: '',
        accessCodeArray: {
          // fy
          'V3WN9': 'rptype2',  // UCL-AI
          '43TC5': 'rptype3',  // ICL-AI
          // 'NWFQC': 'cvtype5',  // phd workshop
          // 'KRV3Q'
          // htt
          '8FPQD': 'rptype4',  // KCL
        },
        // accessCodeArray4HTT: ['8FPQD', 'JK6QM', 'HVC8X', 'QFKTQ'],
      };
    },
    methods: {
      submit: function () {
        this.submitLoading = true;
        if (this.accessCodeArray[this.accessCode]) {
          this.showType = this.accessCodeArray[this.accessCode];
        } else {
          this.responseMessage = `Invalid Access Code!`;
          $('#errorModal').modal('show');
        }
        this.submitLoading = false;
      },
    }
  }
</script>

<style scoped>
  .custom-height {
    height: 80vh;
  }
</style>