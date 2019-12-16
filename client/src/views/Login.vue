<template>
  <div class="row align-items-center" id="login">
    <div class="col-12">
      <div class="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-12">
        <div class="transparent-card text-left">
          <h2 class="text-center mb-4">{{ $t('universal.login') }}</h2>
          <form>
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right text-left">
                {{ $t('users.email') }}
              </label>
              <div class="col-md-8">
                <input type="email" class="form-control border-color-main" id="email" :placeholder="$t('users.please_enter_email')" v-model="formValues.userEmail" @keyup.enter="login">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right text-left">
                {{ $t('users.password') }}
              </label>
              <div class="col-md-8">
                <input type="password" class="form-control border-color-main" id="password" :placeholder="$t('users.please_enter_password')" v-model="formValues.userPassword" @keyup.enter="login">
              </div>
            </div>
            <div class="col-12 text-center">
              <button class="btn btn-dark" type="button" :disabled="loginLoading" @click="login" v-show="!loginLoading">
                <i class="fas fa-sign-in-alt"></i>
                &nbsp;&nbsp;{{ $t('universal.login') }}&nbsp;&nbsp;
              </button>
              <button class="btn btn-dark" type="button" :disabled="loginLoading" v-show="loginLoading">
                <span class="spinner-border spinner-border-sm"></span>
                &nbsp;&nbsp;{{ $t('universal.logging') }}&nbsp;&nbsp;
              </button>
            </div>
          </form>
        </div>
        <div class="modal" id="errorModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header text-center d-block">
                <h5 class="modal-title">{{ $t('universal.login_failed') }}</h5>
              </div>
              <div class="modal-body">
                <div>{{ responseMessage }}</div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">{{ $t('universal.confirm') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {

    },
    data: function () {
      return {
        formValues: {
          userEmail: '',
          userPassword: '',
        },
        loginLoading: false,
        responseMessage: '',
      };
    },
    created: function () {
      if (this.$store.state.token !== '') {
        // already logged in
        this.$router.push({
          name: 'home',
        });
      }
    },
    methods: {
      login: function () {
        this.loginLoading = true;
        this.$axios.post('/authentication/login', this.formValues).then((response) => {
          try {
            if (response.data.statusCode === '1') {
              this.$store.dispatch('commitSetTokenMutation', {
                token: response.data.token
              });
              this.$store.dispatch('commitSetUserInfoMutation', {
                userInfo: response.data.userInfo
              });
              this.$router.push({
                name: 'home',
              });
            }
            if (response.data.statusCode === '0') {
              console.error(`${this.$i18n.t('universal.login_failed')}: `, response.data.error.message);
              this.responseMessage = `${response.data.error.message}`;
              $('#errorModal').modal('show');
            }
          } catch (error) {
            throw error;
          }
        }).catch((error) => {
          console.error(`${this.$i18n.t('universal.login_failed')}: `, error);
          this.responseMessage = `${error}`;
          $('#errorModal').modal('show');
        }).finally(() => {
          this.loginLoading = false;
        });
      },
    }
  }
</script>

<style scoped>
  #login {
    height: 80vh
  }
</style>