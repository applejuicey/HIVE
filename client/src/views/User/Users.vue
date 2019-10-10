<template>
  <div class="row" id="users">

    <div class="col-xl-3 side-column-xl">
      <bottom-card :cardTitle="$t('users.users_filter_form')">
        <template v-slot:card-body>
          <form>
            <div class="form-group">
              <label for="username" class="font-weight-light">{{ $t('users.username') }}</label>
              <input v-model="formValues.username" type="text" class="form-control" id="username" :placeholder="$t('users.please_enter_username')">
            </div>
            <div class="form-group">
              <label for="email" class="font-weight-light">{{ $t('users.email') }}</label>
              <input v-model="formValues.email" type="email" class="form-control" id="email" :placeholder="$t('users.please_enter_email')">
            </div>
            <div class="form-group text-center">
              <button class="btn btn-dark" type="button" :disabled="queryLoading" @click="query" v-show="!queryLoading">
                <i class="fas fa-search"></i>
                &nbsp;&nbsp;{{ $t('universal.query') }}&nbsp;&nbsp;
              </button>
              <button class="btn btn-dark" type="button" :disabled="queryLoading" v-show="queryLoading">
                <span class="spinner-border spinner-border-sm"></span>
                &nbsp;&nbsp;{{ $t('universal.querying') }}&nbsp;&nbsp;
              </button>
            </div>
          </form>
        </template>
      </bottom-card>
    </div>

    <div class="col-xl-9">
      <bottom-card :cardTitle="$t('users.users_query_result')">
        <template v-slot:card-body>
          <div>query description & vague query to be done</div>
          <horizontal-table :tableHeaders="tableHeaders" :statusObject="statusObject" :tableData="tableData"
                            @offsetChanged="changeOffset($event)" @limitChanged="changeLimit($event)"
          ></horizontal-table>

        </template>
      </bottom-card>
    </div>

  </div>
</template>

<script>
  import BottomCard from '@/components/BottomCard.vue';
  import HorizontalTable from '@/components/HorizontalTable.vue';
  export default {
    name: 'users',
    components: {
      BottomCard,
      HorizontalTable,
    },
    data: function () {
      return {
        formValues: {
          username: '',
          email: ''
        },
        queryLoading: false,
        queryDescription: '',
        tableHeaders: [
          {
            key: 'userUUID',
            value: this.$i18n.t('users.user_uuid'),
          }, {
            key: 'userAccountName',
            value: this.$i18n.t('users.userAccountName'),
          }, {
            key: 'userPassword',
            value: this.$i18n.t('users.password'),
          },{
            key: 'userEmail',
            value: this.$i18n.t('users.email'),
          }, {
            key: 'authority.authorityIsAdmin',
            value: this.$i18n.t('users.is_admin'),
          }, {
            key: 'authority.authorityCanCreateArticle',
            value: this.$i18n.t('users.can_create_article'),
          }, {
            key: 'authority.authorityCanCreateCV',
            value: this.$i18n.t('users.can_create_cv'),
          },
        ],
        statusObject: {
          status: '',
          title: '',
          message: '',
        },
        tableData: [],
        offset: 0,
        limit: 10,
      };
    },
    watch: {
      offset: {
        handler: function () {
          this.query();
        }
      },
      limit: {
        handler: function () {
          this.query();
        }
      }
    },
    methods: {
      changeOffset: function (offset) {
        this.offset = offset;
      },
      changeLimit: function (limit) {
        this.limit = limit;
      },
      query: function () {
        this.queryLoading = true;
        this.statusObject = {
          status: 'loading',
          title: this.$i18n.t('universal.loading'),
          message: this.$i18n.t('universal.please_wait_while_loading'),
        };
        this.$axios.get('/user/all', {
          params: {
            offset: this.offset,
            limit: this.limit
          }
        }).then((response) => {
          try {
            if (response.data.statusCode === '1') {
              this.tableData = response.data.users.rows;
              this.statusObject = {
                status: 'loaded',
              };
            }
            if (response.data.statusCode === '0') {
              console.error(`${this.$i18n.t('users.get_users_failed')}: `, response.data.error.message);
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
          console.error(`${this.$i18n.t('users.get_users_failed')}: `, error);
          this.statusObject = {
            status: 'error',
            title: this.$i18n.t('universal.error_occurred'),
            message: this.$i18n.t('universal.error_detail') + error,
          };
        }).finally(() => {
          this.queryLoading = false;
        });
      },
    }
  }
</script>