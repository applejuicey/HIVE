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
                      For an <router-link :to="{ name: 'tbd_view' }">Online Version:</router-link>
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
                  <span class="font-size-2 font-weight-normal">Transcript for Bachelor Degree</span>
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
                <a :href="TBDEngSrc">Scanning Version (English):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="TBDEngSrc" class="img-fluid rounded max-height-300 cursor-pointer"
                   alt="Transcript for Bachelor Degree Scanning Version English" @click="viewImage(TBDEngSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                <a :href="TBDChnSrc">Scanning Version (Chinese):</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="TBDChnSrc" class="img-fluid rounded max-height-300 cursor-pointer"
                   alt="Transcript for Bachelor Degree Scanning Version Chinese" @click="viewImage(TBDChnSrc)">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tbd_type4',
    data: function () {
      return {
        TBDEngSrc: 'https://i.postimg.cc/CKvM1r3V/htt-transcript-bd-en.jpg',
        TBDChnSrc: 'https://i.postimg.cc/MKk6vQFX/htt-transcript-bd-chn.jpg',
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
  .max-height-300 {
    /*max-height: 300px;*/
    max-width: 100%;
  }
</style>