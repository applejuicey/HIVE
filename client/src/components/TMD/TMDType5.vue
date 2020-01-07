<template>
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div class="transparent-card">

        <!--标题+项目-->
        <div class="row mb-3">
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                <table class="table table-borderless table-sm text-left">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For an <router-link :to="{ name: 'tmd_view' }">Online Version:</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Access Code: NWFQC
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8">
                <table class="table table-borderless table-sm text-right">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For '<a href="https://www.findaphd.com/phds/project/artificial-intelligence-and-machine-learning-to-improve-the-effectiveness-and-efficiency-of-health-care/?p107782/">AI&ML to Improve Health Care</a>',
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      The University of Manchester
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <span class="font-size-2 font-weight-normal">Transcript for Master Degree</span>
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
                <a :href="TMDEngSrc">Scanning Version (English):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="TMDEngSrc" class="img-fluid rounded eng-size cursor-pointer"
                   alt="Transcript for Master Degree Scanning Version English" @click="viewImage(TMDEngSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="TMDChnSrc">Scanning Version (Chinese):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="TMDChnSrc" class="img-fluid rounded chn-size cursor-pointer"
                   alt="Transcript for Master Degree Scanning Version Chinese" @click="viewImage(TMDChnSrc)">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tmd_type5',
    data: function () {
      return {
        TMDEngSrc: 'https://i.postimg.cc/SKF4rxJg/fy-transcript-md-en.png',
        TMDChnSrc: 'https://i.postimg.cc/FHJm3Lsf/fy-transcript-md-chn.png',
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
    width: 100%;
  }
  .chn-size {
    width: 50%;
  }
</style>