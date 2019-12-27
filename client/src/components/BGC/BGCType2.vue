<template>
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div class="transparent-card">

        <!--标题+项目-->
        <div class="row mb-3 print-page1-top">
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                <table class="table table-borderless table-sm text-left">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For an <router-link :to="{ name: 'bgc_view' }">Online Version:</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Access Code: V3WN9
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8">
                <table class="table table-borderless table-sm text-right">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For '<a href="https://www.ucl.ac.uk/prospective-students/graduate/research-degrees/artifical-intelligence-enabled-healthcare-mres-mphil-phd/">AI Enabled Healthcare</a>',
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      University College London
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <span class="font-size-2 font-weight-normal">Bachelor Graduation Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--正文-->
        <div class="row mb-2">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="BDgCEngSrc">Bachelor Degree Certificate Scanning Version (English):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="BDgCEngSrc" class="img-fluid rounded eng-size cursor-pointer"
                   alt="Bachelor Degree Certificate Scanning Version English" @click="viewImage(BDgCEngSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2 print-page1-bottom">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="BDgCChnSrc">Bachelor Degree Certificate Scanning Version (Chinese):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="BDgCChnSrc" class="img-fluid rounded chn-size cursor-pointer"
                   alt="Bachelor Degree Certificate Scanning Version Chinese" @click="viewImage(BDgCChnSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2 print-page2-top">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="BDpCEngSrc">Bachelor Diploma Certificate Scanning Version (English):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="BDpCEngSrc" class="img-fluid rounded eng-size cursor-pointer"
                   alt="Bachelor Diploma Certificate Scanning Version English" @click="viewImage(BDpCEngSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2 print-page2-bottom">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="BDpCChnSrc">Bachelor Diploma Certificate Scanning Version (Chinese):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="BDpCChnSrc" class="img-fluid rounded chn-size cursor-pointer"
                   alt="Bachelor Diploma Certificate Scanning Version Chinese" @click="viewImage(BDpCChnSrc)">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bgc_type2',
    data: function () {
      return {
        BDgCEngSrc: 'https://i.postimg.cc/7PCK6CFC/fy-degree-bd-en.png',
        BDgCChnSrc: 'https://i.postimg.cc/DwHXxgfF/fy-degree-bd-chn.jpg',
        BDpCEngSrc: 'https://i.postimg.cc/RFWLN8Dr/fy-diploma-bd-en.png',
        BDpCChnSrc: 'https://i.postimg.cc/pLdq3RNv/fy-diploma-bd-chn.jpg',
      };
    },
    methods: {
      viewImage: function (src) {
        window.open(src);
      },
    },
  }
</script>

<style scoped>
  .table-sm td {
    padding: 0;
  }
  .table {
    margin-bottom: 0;
  }
  .font-size-2 {
    font-size: 2rem;
  }
  .font-size-1_2 {
    font-size: 1.2rem;
  }
  .font-size-0_8 {
    font-size: 0.8rem;
  }
  /*.eng-size {*/
  /*  max-height: 300px;*/
  /*}*/
  /*.chn-size {*/
  /*  max-height: 300px;*/
  /*}*/
  .eng-size {
    width: 50%;
  }
  .chn-size {
    width: 50%;
  }
  @media print {
    .print-page1-top {
      margin-top: 0;
    }
    .print-page1-bottom {
      margin-bottom: 25px;
      page-break-after: always;
    }
    .print-page2-top {
      margin-top: 100px;
    }
    .print-page2-bottom {
      margin-bottom: 0;
    }
  }
</style>