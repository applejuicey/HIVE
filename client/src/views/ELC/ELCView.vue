<template>
  <div class="row" id="elc-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('elc.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('elc.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('elc.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('elc.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('elc.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('elc.loading') }}&nbsp;&nbsp;
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
              <h5 class="modal-title">{{ $t('elc.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('elc.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <e-l-c-type3 v-if="showType === 'elctype3'"></e-l-c-type3>
      <e-l-c-type4 v-if="showType === 'elctype4'"></e-l-c-type4>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import ELCType3 from '@/components/ELC/ELCType3.vue';
  import ELCType4 from '@/components/ELC/ELCType4.vue';
  export default {
    name: 'elc_view',
    components: {
      BottomCard,
      ELCType3,
      ELCType4,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        responseMessage: '',
        accessCodeArray: {
          // fy
          'V3WN9': 'elctype2',  // UCL-AI
          '43TC5': 'elctype3',  // ICL-AI
          // 'NWFQC': 'cvtype5',  // phd workshop
          // 'KRV3Q'
          // htt
          '8FPQD': 'elctype4',  // KCL
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