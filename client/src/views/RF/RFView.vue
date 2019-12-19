<template>
  <div class="row" id="rf-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('rf.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('rf.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('rf.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('rf.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('rf.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('rf.loading') }}&nbsp;&nbsp;
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
              <h5 class="modal-title">{{ $t('rf.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('rf.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <r-f-type3 v-if="showType === 'rftype3'"></r-f-type3>
      <r-f-type4 v-if="showType === 'rftype4'"></r-f-type4>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import RFType3 from '@/components/RF/RFType3.vue';
  import RFType4 from '@/components/RF/RFType4.vue';
  export default {
    name: 'rf_view',
    components: {
      BottomCard,
      RFType3,
      RFType4,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        responseMessage: '',
        accessCodeArray: {
          // fy
          'V3WN9': 'rftype2',  // UCL-AI
          '43TC5': 'rftype3',  // ICL-AI
          // 'NWFQC': 'cvtype5',  // phd workshop
          // 'KRV3Q'
          // htt
          '8FPQD': 'rftype4',  // KCL
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