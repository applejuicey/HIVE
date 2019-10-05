<template>
  <div class="row">
    <div class="col-12">
      {{tableColumns}}
      <br>
      <table id="horizontal-table"></table>
      <button @click="get">aaa</button>
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
    },
    data: function () {
      return {

      };
    },
    computed: {
      tableColumns: function () {
        let columns = [];
        let column = {};
        for (let item of this.tableHeaders) {
          column = {
            title: item.value,
            field: item.key,
            titleTooltip: this.$i18n.t('universal.click_to_sort'),
            align: 'center',
            valign: 'middle',
            sortable: true,
            searchable: true,
          };
          columns.push(column);
        }
        return columns;
      },
    },
    mounted: function () {
      const self = this;
      this.$nextTick(function () {
        $(function () {
          $('#horizontal-table').bootstrapTable({
            sidePagination: 'server',
            url: 'http://localhost:5888/api/user/all',
            method: 'get',
            contentType: "application/x-www-form-urlencoded",
            ajaxOptions: {
              headers: {
                "Authorization": self.$store.state.token
              }
            },
            queryParams: function (params) {
              return {
                offset: params.offset,
                limit: params.limit,
                includeAttributes: 'userUUID, userAccountName, userPassword, userEmail, authorityIsAdmin, authorityCanCreateArticle'
              };
            },
            responseHandler: function (res) {
              return {
                "total": res.users.count,
                "rows": res.users.rows,
              };
            },
            buttonsPrefix: '',
            buttonsClass: 'btn btn-dark',
            cache: false,
            classes: 'table table-hover table-bordered table-striped',
            columns: self.tableColumns,
            iconsPrefix: 'fas',
            icons: {
              columns: 'fa-check-square',
              refresh: 'fa-redo',
            },
            locale: 'zh-CN',
            onLoadSuccess: function () {
              console.log('success')
            },
            onLoadError: function () {
              console.log('error')
            },
            pageList: [10, 20, 50, 100],
            pageNumber: 1,
            pageSize: 10,
            pagination: true,
            paginationLoop: false,
            paginationPreText: '<i class="fas fa-angle-double-left"></i>',
            paginationNextText: '<i class="fas fa-angle-double-right"></i>',
            search: true,
            showColumns: true,
            showRefresh: true,
            silentSort: false,
            sortClass: 'table-active',
            undefinedText: 'NA',
          });
        })
      });
    },
    methods: {
      get: function () {
        console.log($('#horizontal-table').bootstrapTable('getOptions'));
      },
      setCurrentPageNumber: function (currentPageNumber) {
        this.currentPageNumber = currentPageNumber;
        this.offset = currentPageNumber * this.limit;
        this.$emit('paginationChanged', this.offset, this.limit);
      },
      addNewPage: function () {
        this.pageNumbers.push(this.pageNumbers[this.pageNumbers.length - 1] + 1);
      },
      setRecordsNumberPerPage: function (recordsNumberPerPage) {
        this.limit = recordsNumberPerPage;
        this.offset = this.currentPageNumber * this.limit;
        this.$emit('paginationChanged', this.offset, this.limit);
      },
    },
  }
</script>