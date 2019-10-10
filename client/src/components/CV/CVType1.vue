<template>
  <!--start-->
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div class="transparent-card">

        <!--标题-->
        <div class="row mb-2">
          <div class="col-12 cv-title">
            <div>
              <span class="primary-box">{{ person.cname }}&nbsp;{{ person.ename }}</span>
              <span class="secondary-box">
                <i class="fas fa-mars" v-if="person.gender === 'M'"></i>
                <i class="fas fa-venus" v-if="person.gender === 'F'"></i>
              </span>
              <span class="secondary-box">{{ person.birthday }}</span>
            </div>
            <div>
              <span class="secondary-box">
                <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{{ person.location }}
              </span>
              <span class="secondary-box">{{ person.position }}</span>
            </div>
          </div>
        </div>

        <!--个人陈述+联系方式-->
        <div class="row mb-2">
          <div class="col-md-8">
            <div class="section-title">
              <span>{{ $t('cvtype1.description_title') }}</span>
            </div>
            <div class="section-content">
              <span>{{ person.description }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section-title">
              <span>{{ $t('cvtype1.contact_title') }}</span>
            </div>
            <div class="section-content">
              <div>
                <i class="fas fa-envelope"></i>
                <span>&nbsp;&nbsp;{{ $t('cvtype1.email') }}&nbsp;{{ person.email }}</span>
              </div>
              <div>
                <i class="fas fa-phone-alt"></i>
                <span>&nbsp;&nbsp;{{ $t('cvtype1.phone') }}&nbsp;{{ person.phone }}</span>
              </div>
              <div>
                <i class="fab fa-github"></i>
                <span>&nbsp;&nbsp;{{ $t('cvtype1.github') }}&nbsp;{{ person.github }}</span>
              </div>
              <div>
                <i class="fas fa-globe"></i>
                <span>&nbsp;&nbsp;{{ $t('cvtype1.website') }}&nbsp;{{ person.website }}</span>
              </div>
            </div>
          </div>
        </div>

        <!--照片+个人技能-->
        <div class="row mb-2 align-items-center">
          <div class="col-md-2 text-center">
            <img :src="person.photo" class="img-fluid rounded" alt="My Photo">
          </div>
          <div class="col-md-10">
            <div class="section-title">
              <span>{{ $t('cvtype1.skill_title') }}</span>
            </div>
            <div class="section-content row align-items-center">
              <div class="col-md-6">
                <span>{{ JSON.parse(person.customization[0].customizationJSONData).skillDescription }}</span>
              </div>
              <div class="col-md-6">
                <canvas id="myChart">
                  <p>{{ $t('cvtype1.canvas_fallback_desc') }}</p>
                </canvas>
              </div>
            </div>
          </div>
        </div>

        <!--教育经历-->
        <div class="row mb-2">
          <div class="col-12">
            <div class="section-title">
              <span>{{ $t('cvtype1.education_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.educational">
                <div class="row mb-2">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-6">
                        <div class="experience-title">{{ item.experienceName }}</div>
                        <div>
                          <template v-for="keyword in item.experienceKeywords.split(',')">
                            <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                      <div class="col-6 experience-accessory">
                        <div class="text-right">{{ item.experienceOrganizationName }}</div>
                        <div class="text-right">{{ item.experiencePosition }}</div>
                        <div class="text-right">{{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}</div>
                      </div>
                    </div>
                    <div>
                      地址：{{ item.experienceLocation }}
                    </div>
                    <div>
                      描述：{{ item.experienceDescription }}
                    </div>
                    <div class="row">
                      <div class="col-md-4 offset-md-8 col-sm-6 offset-sm-6">
                        <div class="dotted-line">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!--项目+社会实践-->
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype1.project_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.project">
                <div class="row mb-4">
                  <div class="col-12">
                    <div>
                      <div class="experience-title">{{ item.experienceName }}</div>
                      <div class="experience-accessory">
                        <span>
                          {{ item.experienceOrganizationName }}&nbsp;
                          {{ item.experiencePosition }}&nbsp;
                          {{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}
                        </span>
                      </div>
                      <div class="mb-2">
                        <template v-for="keyword in item.experienceKeywords.split(',')">
                          <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                        </template>
                      </div>
                    </div>
                    <div>
                      地址：{{ item.experienceLocation }}
                    </div>
                    <div>
                      描述：{{ item.experienceDescription }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype1.social_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.social">
                <div class="row mb-4">
                  <div class="col-12">
                    <div>
                      <div class="experience-title">{{ item.experienceName }}</div>
                      <div class="experience-accessory">
                        <span>
                          {{ item.experienceOrganizationName }}&nbsp;
                          {{ item.experiencePosition }}&nbsp;
                          {{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}
                        </span>
                      </div>
                      <div class="mb-2">
                        <template v-for="keyword in item.experienceKeywords.split(',')">
                          <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                        </template>
                      </div>
                    </div>
                    <div>
                      地址：{{ item.experienceLocation }}
                    </div>
                    <div>
                      描述：{{ item.experienceDescription }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!--实习经历+获奖-->
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype1.internship_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.internship">
                <div class="row mb-4">
                  <div class="col-12">
                    <div>
                      <div class="experience-title">{{ item.experienceName }}</div>
                      <div class="experience-accessory">
                        <span>
                          {{ item.experienceOrganizationName }}&nbsp;
                          {{ item.experiencePosition }}&nbsp;
                          {{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}
                        </span>
                      </div>
                      <div class="mb-2">
                        <template v-for="keyword in item.experienceKeywords.split(',')">
                          <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                        </template>
                      </div>
                    </div>
                    <div>
                      地址：{{ item.experienceLocation }}
                    </div>
                    <div>
                      描述：{{ item.experienceDescription }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype1.award_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.award">
                <div class="row mb-4">
                  <div class="col-12">
                    <div>
                      <div class="experience-title">{{ item.experienceName }}</div>
                      <div class="experience-accessory">
                        <span>
                          {{ item.experienceOrganizationName }}&nbsp;
                          {{ item.experiencePosition }}&nbsp;
                          {{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}
                        </span>
                      </div>
                      <div class="mb-2">
                        <template v-for="keyword in item.experienceKeywords.split(',')">
                          <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                        </template>
                      </div>
                    </div>
                    <div>
                      地址：{{ item.experienceLocation }}
                    </div>
                    <div>
                      描述：{{ item.experienceDescription }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!--出版物-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span>{{ $t('cvtype1.publication_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.publication">
                <div class="row mb-4">
                  <div class="col-12">
                    <div>
                      {{ item.publicationName }}
                    </div>
                    <div>
                      <template v-for="keyword in item.publicationKeywords.split(',')">
                        <span class="badge badge-secondary">{{ keyword }}</span>&nbsp;
                      </template>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!--end-->
</template>

<script>
  export default {
    name: 'cv_type1',
    props: {
      userData: {
        type: Object,
        required: true,
      },
    },
    data: function () {
      return {
        person: {},
      };
    },
    created: function () {
      this.person = {
        cname: this.userData.generalInformation.generalInformationChineseName,
        ename: this.userData.generalInformation.generalInformationEnglishName,
        location: this.userData.generalInformation.generalInformationCurrentLocation,
        position: this.userData.generalInformation.generalInformationCurrentPosition,
        gender: this.userData.generalInformation.generalInformationGender,
        birthday: this.userData.generalInformation.generalInformationBirthday,
        description: this.userData.generalInformation.generalInformationDescription,
        email: this.userData.generalInformation.generalInformationEmailAddress,
        phone: this.userData.generalInformation.generalInformationPhoneNumber,
        github: this.userData.generalInformation.generalInformationGithubURL,
        website: this.userData.generalInformation.generalInformationPersonalWebsiteURL,
        photo: this.userData.generalInformation.generalInformationPhotoPath,
        educational: this.userData.experiences.filter((experience) => {
          return experience.experienceType === 'educational';
        }),
        social: this.userData.experiences.filter((experience) => {
          return experience.experienceType === 'social';
        }),
        internship: this.userData.experiences.filter((experience) => {
          return experience.experienceType === 'internship';
        }),
        project: this.userData.experiences.filter((experience) => {
          return experience.experienceType === 'project';
        }),
        award: this.userData.experiences.filter((experience) => {
          return experience.experienceType === 'award';
        }),
        publication: this.userData.publications,
        customization: this.userData.customizations,
      };
    },
    mounted() {
      this.$nextTick(() =>{
        try {
          const JSONData = JSON.parse( this.userData.customizations[0].customizationJSONData);
          const ctx = document.getElementById('myChart').getContext('2d');
          const myRadarChart = new this.$Chart(ctx, {
            type: 'radar',
            data: JSONData.radarPlot.data,
            options: JSONData.radarPlot.options,
          });
        } catch (error) {
          console.error('aa',error);
        }
      });
    },
  }
</script>

<style scoped>
  .cv-title {
    margin-bottom: 1rem;
    text-align: center;
  }
  .primary-box {
    font-size: 2.5rem;
    font-weight: 300;
    margin-right: 1rem;
  }
  .secondary-box {
    color: #323232;
    font-size: 1.2rem;
    font-weight: 200;
    margin-right: 0.7rem;
  }
  .section-title {
    border-bottom: 0.05rem dashed #323232;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 300;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .section-content {
    font-size: 1.2rem;
    font-weight: 200;
  }
  .dotted-line {
    border-bottom: 0.05rem dotted #ada8a8;
  }
  .experience-title {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .experience-accessory {
    font-size: 1rem;
    font-weight: 200;
  }
</style>