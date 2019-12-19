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
                      For an <router-link :to="{ name: 'bgc_view' }">Online Version:</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Access Code: 8FPQD
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8">
                <table class="table table-borderless table-sm text-right">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For '<a href="https://www.kcl.ac.uk/study/postgraduate/research-courses/biostatistics-mdres-mphil-phd">Biostatistics & Health Informatics Research PhD</a>',
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      KING'S College LONDON
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

        <div class="row mb-2">
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

        <div class="row mb-2">
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

        <div class="row mb-2">
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
    name: 'bgc_type3',
    data: function () {
      return {
        BDgCEngSrc: 'https://i.postimg.cc/BvcCrHPy/htt-degree-bd-en.jpg',
        BDgCChnSrc: 'https://i.postimg.cc/j2xwD3c6/degree-chn.jpg',
        BDpCEngSrc: 'https://i.postimg.cc/5t1BSyKm/htt-diploma-bd-en.jpg',
        BDpCChnSrc: 'https://i.postimg.cc/N0SJ1Vzc/htt-diploma-bd-chn.jpg',
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
</style>