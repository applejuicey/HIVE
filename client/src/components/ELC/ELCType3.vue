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
                      For an <router-link :to="{ name: 'elc_view' }">Online Version:</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Access Code: 43TC5
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8">
                <table class="table table-borderless table-sm text-right">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For '<a href="https://ai4health.io/overview/">AI and Machine Learning</a>',
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Imperial College London
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <span class="font-size-2 font-weight-normal">English Language Certificate</span>
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
                <a :href="ELCSrc">Scanning Version:</a>
              </span>
            </div>
            <div class="text-center mb-1">
              <img :src="ELCSrc" class="img-fluid rounded max-height-300 cursor-pointer"
                   alt="English Language Certificate" @click="viewImage(ELCSrc)">
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-12">
            <div class="text-left mb-1">
              <span class="font-size-1_2 font-weight-normal">
                HTML Version:
              </span>
            </div>
            <div class="text-center mb-1">
              <div class="table-responsive">
                <table class="table table-bordered mb-1">
                  <tr>
                    <td>
                      Type
                    </td>
                    <td>
                      Test Taken Date
                    </td>
                    <td>
                      Test Report Form Number
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Academic
                    </td>
                    <td>
                      2019-10-26
                    </td>
                    <td>
                      19CN128604FANY004A
                    </td>
                  </tr>
                </table>
              </div>
              <div class="table-responsive">
                <table class="table table-bordered mb-1">
                  <tr>
                    <td>
                      Overall Band Score
                    </td>
                    <td>
                      Listening
                    </td>
                    <td>
                      Reading
                    </td>
                    <td>
                      Writing
                    </td>
                    <td>
                      Speaking
                    </td>
                  </tr>
                  <tr>
                    <td>
                      7.5
                    </td>
                    <td>
                      8.5
                    </td>
                    <td>
                      8.0
                    </td>
                    <td>
                      6.5
                    </td>
                    <td>
                      6.0
                    </td>
                  </tr>
                </table>
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
    name: 'elc_type3',
    data: function () {
      return {
        ELCSrc: 'https://i.postimg.cc/yNmHrCRs/IELTS-REPORT.jpg',
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
  }
</style>