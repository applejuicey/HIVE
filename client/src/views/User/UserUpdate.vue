<template>
  <div class="row" id="user-update">

    <div class="col-xl-3 side-column-xl">
      <bottom-card :cardTitle="$t('users.user_data_field')">
        <template v-slot:card-body>
          <div class="nav flex-column nav-pills">
            <a class="nav-link active" data-toggle="pill" href="#pane1">{{ $t('users.instructions') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane2" @click="loadDataSingular(
            '/user/', { userUUID: $store.state.userInstance.userUUID }
            )">{{ $t('users.user') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane3">{{ $t('users.authority') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane4">{{ $t('users.general_information') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane5">{{ $t('users.experience') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane6">{{ $t('users.publication') }}</a>
            <a class="nav-link" data-toggle="pill" href="#pane7">{{ $t('users.customization') }}</a>
          </div>
        </template>
      </bottom-card>
    </div>

    <div class="col-xl-9">
      <bottom-card :cardTitle="$t('users.field_details')">
        <template v-slot:card-body>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="pane1">
              <div class="row">
                <div class="col-xl-6 offset-xl-3">
                  <div class="alert alert-info text-center mb-0">
                    <h4 class="alert-heading">{{ $t('users.select_a_field') }}</h4>
                    <p>
                      {{ $t('users.please_select_a_field') }}
                      {{ $store.state.userInstance }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pane2">
              <status-card :statusObject="statusObject">
                <template v-slot:content>
                  <user-info-update-form :userInfo="loadedDataObject"></user-info-update-form>
                </template>
              </status-card>
            </div>
            <div class="tab-pane fade" id="pane3">.3..</div>
            <div class="tab-pane fade" id="pane4">.4..</div>
            <div class="tab-pane fade" id="pane5">.4..</div>
            <div class="tab-pane fade" id="pane6">.4..</div>
            <div class="tab-pane fade" id="pane7">.4..</div>
          </div>
        </template>
      </bottom-card>
    </div>

  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import StatusCard from '@/components/StatusCard.vue';
  import UserInfoUpdateForm from '@/components/User/UserInfoUpdateForm.vue';
  export default {
    name: 'update_user',
    components: {
      BottomCard,
      StatusCard,
      UserInfoUpdateForm,
    },
    data: function () {
      return {
        statusObject: {
          status: '',
          title: '',
          message: '',
        },
        loadedDataObject: {},
      };
    },
    beforeDestroy: function () {
      this.$store.dispatch('commitSetUserInstance', {
        userInstance: {
          authority: {},
          generalInformation: {},
          experiences: [],
          publications: [],
          customizations: [],
        },
      });
    },
    methods: {
      loadDataSingular: function (url, params) {
        this.statusObject = {
          status: 'loading',
          title: this.$i18n.t('universal.loading'),
          message: this.$i18n.t('universal.please_wait_while_loading'),
        };
        this.$axios.get(url, {
          params: params
        }).then((response) => {
          try {
            if (response.data.statusCode === '1') {
              this.loadedDataObject = response.data.user;
              this.statusObject = {
                status: 'loaded',
              };
            }
            if (response.data.statusCode === '0') {
              console.error(`${this.$i18n.t('users.get_user_failed')}: `, response.data.error.message);
              this.statusObject = {
                status: 'error',
                title: this.$i18n.t('universal.error_occurred'),
                message: this.$i18n.t('universal.error_detail') + response.data.error.message,
              };
            }
          } catch (error) {
            throw error;
          }
        }).catch((error) => {
          console.error(`${this.$i18n.t('users.get_user_failed')}: `, error);
          this.statusObject = {
            status: 'error',
            title: this.$i18n.t('universal.error_occurred'),
            message: this.$i18n.t('universal.error_detail') + error,
          };
        });
      },
    },
  }
</script>

<style scoped>
  a {
    color: #343a40;
  }
</style>