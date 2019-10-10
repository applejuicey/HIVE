<template>
  <div class="row">
    <div class="col-12">
      <!--表格-->
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered text-nowrap text-center font-weight-light">
              <tbody>
              <tr>
                <td>
                  {{ $t('universal.actions') }}
                </td>
                <td v-for="header in tableHeaders">
                  {{ header.value }}
                </td>
              </tr>
              <tr v-if="statusObject.status === 'loading'">
                <td :colspan="tableHeaders.length + 1">
                  <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                      <div class="alert alert-primary text-center mb-0">
                        <h4 class="alert-heading">{{ statusObject.title }}</h4>
                        <p>
                          <span class="spinner-border spinner-border-sm text-primary"></span>&nbsp;{{ statusObject.message }}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-else-if="statusObject.status === 'error'">
                <td :colspan="tableHeaders.length + 1">
                  <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                      <div class="alert alert-danger text-center mb-0">
                        <h4 class="alert-heading">{{ statusObject.title }}</h4>
                        <p>
                          {{ statusObject.message }}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-else-if="statusObject.status === 'loaded'" v-for="item in tableData">
                <td>
                  <span class="cursor-pointer text-primary" @click="changeRoute(tableHeaders[0]['key'], item[tableHeaders[0]['key']], 'view', item)">
                    <i class="fas fa-search"></i>&nbsp;
                  </span>
                  <span class="cursor-pointer text-success" @click="changeRoute(tableHeaders[0]['key'], item[tableHeaders[0]['key']], 'update', item)">
                    <i class="fas fa-edit"></i>&nbsp;
                  </span>
                  <span class="cursor-pointer text-danger" @click="changeRoute(tableHeaders[0]['key'], item[tableHeaders[0]['key']], 'delete', item)">
                    <i class="fas fa-trash"></i>&nbsp;
                  </span>
                </td>
                <td v-for="header in tableHeaders">
                  {{
                  header.key.split('.')[1]? item[header.key.split('.')[0]][header.key.split('.')[1]] :
                  item[header.key.split('.')[0]]
                  }}
                </td>
              </tr>
              <tr v-else>
                <td :colspan="tableHeaders.length + 1">
                  <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                      <div class="alert alert-info text-center mb-0">
                        <h4 class="alert-heading">{{ $t('universal.waiting') }}</h4>
                        <p>
                          {{ $t('universal.waiting_to_be_initialized') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--当前页码-->
      <div class="row">
        <div class="col-12 font-weight-light">
          <span>
            {{ $t('universal.current_page_number') }}
            {{ currentPageNumber }}
          </span>
        </div>
      </div>
      <!--每页记录数-->
      <div class="row">
        <div class="col-12 font-weight-light">
          <span>
            {{ $t('universal.number_of_records_per_page') }}
            {{ recordNumberPerPageCurrent }}
          </span>
        </div>
      </div>
      <!--分页器-->
      <div class="row">
        <div class="col-12 font-weight-light">
          <form class="form-row my-2">
            <div class="col-auto">
              <label class="sr-only" for="pageNumberInput">{{ $t('universal.jump_to_page') }}</label>
              <input type="text" class="d-none">
              <input type="text" class="form-control" id="pageNumberInput"
                     v-model="jumpToPageNumber" :placeholder="$t('universal.jump_to_page')"
                     onkeypress='return(/^[1-9]\d*$/.test(String.fromCharCode(event.keyCode)))'
                     @keyup.enter="jumpToPage">
            </div>
            <div class="col-auto">
              <label class="sr-only" for="recordNumberPerPage">{{ $t('universal.number_of_records_per_page') }}</label>
              <select v-model="recordNumberPerPageCurrent" class="form-control" id="recordNumberPerPage">
                <option v-for="number in recordNumberPerPageArray" :value="number">{{ number }}</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'horizontal_table',
    props: {
      tableHeaders: {
        type: Array,
        required: true,
      },
      statusObject: {
        type: Object,
        required: true,
      },
      tableData: {
        type: Array,
        required: true,
      },
    },
    data: function () {
      return {
        recordNumberPerPageArray: [10, 20, 50],
        recordNumberPerPageCurrent: 10,
        jumpToPageNumber: null,
        currentPageNumber: 1,
      };
    },
    computed: {
      offset: function () {
        return (this.currentPageNumber - 1) * this.recordNumberPerPageCurrent;
      },
      limit: function () {
        return this.recordNumberPerPageCurrent;
      },
    },
    watch: {
      offset: {
        handler: function () {
          this.$emit('offsetChanged', this.offset);
        }
      },
      limit: {
        handler: function () {
          this.$emit('limitChanged', this.limit);
        }
      }
    },
    methods: {
      changeRoute: function (UUIDString, UUIDValue, identifier, rowInstance) {
        this.$store.dispatch('commitSetUserInstance', {
          userInstance: rowInstance
        });
        let paramsObject = {};
        paramsObject[UUIDString] = UUIDValue;
        this.$router.push({
          name: `user_${identifier}`,
          params: paramsObject,
        });
      },
      jumpToPage: function () {
        this.currentPageNumber = this.jumpToPageNumber;
        this.jumpToPageNumber = null;
      },
    },
  }
</script>