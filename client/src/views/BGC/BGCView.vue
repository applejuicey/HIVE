<template>
  <div class="row" id="bgc-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('bgc.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('bgc.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('bgc.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('bgc.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('bgc.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('bgc.loading') }}&nbsp;&nbsp;
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
              <h5 class="modal-title">{{ $t('bgc.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('bgc.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <b-g-c-type2 v-if="showType === 'bgctype2'"></b-g-c-type2>
      <b-g-c-type3 v-if="showType === 'bgctype3'"></b-g-c-type3>
      <b-g-c-type4 v-if="showType === 'bgctype4'"></b-g-c-type4>
      <b-g-c-type5 v-if="showType === 'bgctype5'"></b-g-c-type5>
      <b-g-c-type6 v-if="showType === 'bgctype6'"></b-g-c-type6>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import BGCType2 from '@/components/BGC/BGCType2.vue';
  import BGCType3 from '@/components/BGC/BGCType3.vue';
  import BGCType4 from '@/components/BGC/BGCType4.vue';
  import BGCType5 from '@/components/BGC/BGCType5.vue';
  import BGCType6 from '@/components/BGC/BGCType6.vue';
  export default {
    name: 'bgc_view',
    components: {
      BottomCard,
      BGCType2,
      BGCType3,
      BGCType4,
      BGCType5,
      BGCType6,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        responseMessage: '',
        accessCodeArray: {
          // fy
          'V3WN9': 'bgctype2',  // UCL-AI
          '43TC5': 'bgctype3',  // ICL-AI
          'NWFQC': 'bgctype5',  // UOM-AI
          // 'KRV3Q'
          // htt
          '8FPQD': 'bgctype4',  // KCL-BH
          'JK6QM': 'bgctype6',  // UCL-CTM
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