<template>
  <div class="row" id="tbd-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('tbd.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('tbd.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('tbd.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('tbd.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('tbd.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('tbd.loading') }}&nbsp;&nbsp;
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
              <h5 class="modal-title">{{ $t('tbd.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('tbd.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <t-b-d-type3 v-if="showType === 'tbdtype3'"></t-b-d-type3>
      <t-b-d-type4 v-if="showType === 'tbdtype4'"></t-b-d-type4>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import TBDType3 from '@/components/TBD/TBDType3.vue';
  import TBDType4 from '@/components/TBD/TBDType4.vue';
  export default {
    name: 'tbd_view',
    components: {
      BottomCard,
      TBDType3,
      TBDType4,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        responseMessage: '',
        accessCodeArray: {
          // fy
          'V3WN9': 'tbdtype2',  // UCL-AI
          '43TC5': 'tbdtype3',  // ICL-AI
          // 'NWFQC': 'cvtype5',  // phd workshop
          // 'KRV3Q'
          // htt
          '8FPQD': 'tbdtype4',  // KCL
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
    height: calc(100vh - 5rem);
  }
</style>