<template>
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div class="transparent-card">

        <!--标题-->
        <div class="row no-gutters align-items-center mb-2">
          <div class="col-12 cv-title">
            <div class="row">
              <div class="col-12">
                <span class="primary-box">{{ person.ename }}&nbsp;</span>
                <span class="secondary-box">{{ person.cname }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-11 offset-sm-1 col-md-9 offset-md-3 col-xl-8 offset-xl-4 secondary-box text-left">
                <i class="fas fa-mars" v-if="person.gender === 'M'"></i>
                <i class="fas fa-venus" v-if="person.gender === 'F'"></i>&nbsp;
                {{ person.birthday }}
              </div>
              <div class="col-12 col-sm-11 offset-sm-1 col-md-9 offset-md-3 col-xl-8 offset-xl-4 secondary-box text-left">
                <i class="fas fa-map-marker-alt"></i>&nbsp;
                {{ person.location }}
              </div>
              <div class="col-12 col-sm-11 offset-sm-1 col-md-9 offset-md-3 col-xl-8 offset-xl-4 secondary-box text-left">
                <i class="fas fa-user-graduate"></i>&nbsp;
                {{ person.position }}
              </div>
            </div>
          </div>
<!--          <div class="col-2 text-center">-->
<!--            <img :src="require('../../assets/timg.jpg')" class="img-fluid rounded" alt="My Photo">-->
<!--          </div>-->
        </div>

        <!--个人陈述+联系方式-->
        <div class="row mb-2">
          <div class="col-md-7">
            <div class="section-title">
              <span>{{ $t('cvtype2.description_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="phrase in person.description.split('*').slice(1)">
                <div>
                  <i class="fas fa-genderless"></i>
                  {{ phrase.trim() }}
                </div>
              </template>
            </div>
          </div>
          <div class="col-md-5">
            <div class="section-title">
              <span>{{ $t('cvtype2.contact_title') }}</span>
            </div>
            <div class="section-content">
              <table class="table table-borderless table-sm">
                <tr>
                  <td>
                    <i class="fas fa-envelope"></i>&nbsp;{{ $t('cvtype2.email') }}
                  </td>
                  <td>
                    {{ person.email }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-phone-alt"></i>&nbsp;{{ $t('cvtype2.phone') }}
                  </td>
                  <td>
                    {{ person.phone }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fab fa-github"></i>&nbsp;{{ $t('cvtype2.github') }}
                  </td>
                  <td>
                    {{ person.github }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-globe"></i>&nbsp;{{ $t('cvtype2.website') }}
                  </td>
                  <td>
                    {{ person.website }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!--教育经历-->
        <div class="row mb-2">
          <div class="col-12">
            <div class="section-title">
              <span>{{ $t('cvtype2.education_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.educational">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="experience-title">
                          <i class="fas fa-graduation-cap"></i>&nbsp;{{ item.experienceName }}
                        </div>
                        <div>
                          <template v-for="keyword in item.experienceKeywords.split(',')">
                            <span class="badge badge-light">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                      <div class="col-md-6 experience-accessory">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="d-flex justify-content-md-end">
                              <span class="order-md-2"><i class="fas fa-university"></i></span>
                              <span class="order-md-1">&nbsp;</span>
                              <span class="order-md-0">{{ item.experienceOrganizationName }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="d-flex justify-content-md-end">
                              <span class="order-md-2"><i class="fas fa-book"></i></span>
                              <span class="order-md-1">&nbsp;</span>
                              <span class="order-md-0 font-weight-normal">{{ item.experiencePosition }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="d-flex justify-content-md-end">
                              <span class="order-md-2"><i class="far fa-calendar-alt"></i></span>
                              <span class="order-md-1">&nbsp;</span>
                              <span class="order-md-0">{{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-map-marked-alt"></i>
                              {{ $t('cvtype2.education_address') }}
                            </td>
                            <td>
                              {{ item.experienceLocation }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-comment-dots"></i>
                              {{ $t('cvtype2.education_description') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.experienceDescription.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!--项目-->
        <div class="row mb-2">
          <div class="col-12">
            <div class="section-title">
              <span>{{ $t('cvtype2.project_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.project">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="experience-title">
                          <i class="fas fa-caret-right"></i>&nbsp;{{ item.experienceName }}
                        </div>
                        <div>
                          <template v-for="keyword in item.experienceKeywords.split(',')">
                            <span class="badge badge-light">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="experience-accessory">
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td class="d-flex justify-content-md-end">
                                <span class="order-md-2"><i class="fas fa-university"></i></span>
                                <span class="order-md-1">&nbsp;</span>
                                <span class="order-md-0">{{ item.experienceOrganizationName }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="d-flex justify-content-md-end">
                                <span class="order-md-2"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="order-md-1">&nbsp;</span>
                                <span class="order-md-0">{{ item.experiencePosition }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="d-flex justify-content-md-end">
                                <span class="order-md-2"><i class="far fa-calendar-alt"></i></span>
                                <span class="order-md-1">&nbsp;</span>
                                <span class="order-md-0">{{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-link"></i>
                              {{ $t('cvtype2.project_access') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.experienceLocation.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-comment-dots"></i>
                              {{ $t('cvtype2.project_description') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.experienceDescription.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!--实习+社会实践-->
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype2.internship_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.internship">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12">
                        <div class="experience-title">
                          <i class="fas fa-caret-right"></i>&nbsp;{{ item.experienceName }}
                        </div>
                        <div>
                          <template v-for="keyword in item.experienceKeywords.split(',')">
                            <span class="badge badge-light">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="experience-accessory">
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                <span><i class="fas fa-university"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experienceOrganizationName }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span><i class="fas fa-user-tie"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experiencePosition }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span><i class="far fa-calendar-alt"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}</span>
                              </td>
                            </tr>
                          </table>

                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-map-marked-alt"></i>
                              {{ $t('cvtype2.internship_address') }}
                            </td>
                            <td>
                              {{ item.experienceLocation }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-comment-dots"></i>
                              {{ $t('cvtype2.internship_description') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.experienceDescription.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-title">
              <span>{{ $t('cvtype2.volunteer_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.social">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12">
                        <div class="experience-title">
                          <i class="fas fa-caret-right"></i>&nbsp;{{ item.experienceName }}
                        </div>
                        <div>
                          <template v-for="keyword in item.experienceKeywords.split(',')">
                            <span class="badge badge-light">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="experience-accessory">
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                <span><i class="fas fa-university"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experienceOrganizationName }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span><i class="fas fa-user-tie"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experiencePosition }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span><i class="far fa-calendar-alt"></i></span>
                                <span>&nbsp;</span>
                                <span>{{ item.experienceStartYearMonth }}--{{ item.experienceEndYearMonth }}</span>
                              </td>
                            </tr>
                          </table>

                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-map-marked-alt"></i>
                              {{ $t('cvtype2.volunteer_address') }}
                            </td>
                            <td>
                              {{ item.experienceLocation }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-comment-dots"></i>
                              {{ $t('cvtype2.volunteer_description') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.experienceDescription.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                        </table>
                      </div>
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
              <span>{{ $t('cvtype2.publication_title') }}</span>
            </div>
            <div class="section-content">
              <template v-for="item in person.publication">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12">
                        <div class="experience-title">
                          <i class="fas fa-caret-right"></i>&nbsp;{{ item.publicationName }}
                        </div>
                        <div>
                          <template v-for="keyword in item.publicationKeywords.split(',')">
                            <span class="badge badge-light">{{ keyword }}</span>&nbsp;
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-borderless table-sm">
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-calendar-alt"></i>
                              {{ $t('cvtype2.publication_year') }}
                            </td>
                            <td>
                              {{ item.publicationYear }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-link"></i>
                              {{ $t('cvtype2.publication_link') }}
                            </td>
                            <td>
                              {{ item.publicationLink }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-book-open"></i>
                              {{ $t('cvtype2.publication_journal') }}
                            </td>
                            <td>
                              {{ item.publicationJournalName }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="fas fa-user-edit"></i>
                              {{ $t('cvtype2.publication_authors') }}
                            </td>
                            <td>
                              {{ item.publicationAuthorNames }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-ellipsis">
                              <i class="far fa-comment-dots"></i>
                              {{ $t('cvtype2.publication_description') }}
                            </td>
                            <td>
                              <template v-for="phrase in item.publicationDescription.split('*').slice(1)">
                                <div>-{{ phrase.trim() }}</div>
                              </template>
                            </td>
                          </tr>
                        </table>
                      </div>
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
</template>

<script>
  export default {
    name: 'cv_type2',
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
  }
</script>

<style scoped>
  .cv-title {
    text-align: center;
  }
  .primary-box {
    font-size: 2.5rem;
    font-weight: 500;
  }
  .secondary-box {
    color: #323232;
    font-size: 1.2rem;
    font-weight: 200;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis
  }
  .section-title {
    border-bottom: 0.05rem dashed #323232;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .section-content {
    font-size: 1.2rem;
    font-weight: 200;
  }
  .experience-title {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .experience-accessory {
    font-size: 1rem;
    font-weight: 200;
  }
  .text-ellipsis {
    width: 100px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis
  }
  .table {
    margin-bottom: 0;
  }
</style>