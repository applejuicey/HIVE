<template>
  <div class="row" id="cv-view">
    <div class="col-12">
      <div class="row custom-height align-items-center" v-if="showType === 'inputbox'">
        <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <bottom-card :cardTitle="$t('cv.title')">
            <template v-slot:card-body>
              <p class="text-center font-weight-light">{{ $t('cv.instruction') }}</p>
              <form>
                <div class="form-group row">
                  <label for="accessCode" class="font-weight-light col-md-4 col-form-label text-md-right text-left">
                    {{ $t('cv.label') }}
                  </label>
                  <div class="col-md-8">
                    <input type="text" value="" class="d-none">
                    <input v-model="accessCode" type="text" class="form-control" id="accessCode" :placeholder="$t('cv.placeholder')" @keyup.enter="submit">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-12 text-center">
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" @click="submit" v-show="!submitLoading">
                      <i class="fas fa-check"></i>
                      &nbsp;&nbsp;{{ $t('cv.submit') }}&nbsp;&nbsp;
                    </button>
                    <button class="btn btn-dark" type="button" :disabled="submitLoading" v-show="submitLoading">
                      <span class="spinner-border spinner-border-sm"></span>
                      &nbsp;&nbsp;{{ $t('cv.loading') }}&nbsp;&nbsp;
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
              <h5 class="modal-title">{{ $t('cv.modal_title') }}</h5>
            </div>
            <div class="modal-body">
              <div>{{ responseMessage }}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('cv.modal_button_text') }}</button>
            </div>
          </div>
        </div>
      </div>
      <c-v-type1 :userData="userData" v-if="showType === 'cvtype1'"></c-v-type1>
    </div>
  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import CVType1 from '@/components/CV/CVType1.vue';
  export default {
    name: 'cv_view',
    components: {
      BottomCard,
      CVType1,
    },
    data: function () {
      return {
        showType: 'inputbox',
        accessCode: '',
        submitLoading: false,
        userData: {},
        responseMessage: '',
      };
    },
    methods: {
      submit: function () {
        this.submitLoading = true;
        this.$axios.get('/cv', {
          params: {
            accessCode: this.accessCode
          }
        }).then((response) => {
          try {
            if (response.data.statusCode === '1') {
              this.userData = response.data.user;
              this.showType = 'cvtype1';
            }
            if (response.data.statusCode === '0') {
              console.error(`${this.$i18n.t('cv.validation_error')}: `, response.data.error.message);
              this.responseMessage = `${response.data.error.message}`;
              $('#errorModal').modal('show');
            }
          } catch (error) {
            throw error;
          }
        }).catch((error) => {
          console.error(`${this.$i18n.t('cv.validation_error')}: `, error);
          this.responseMessage = `${error}`;
          $('#errorModal').modal('show');
        }).finally(() => {
          this.submitLoading = false;
        });
      },
    }
  }
</script>

<style scoped>
  .custom-height {
    height: calc(100vh - 5rem);
  }
</style>