<template>
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <div class="transparent-card">

        <!--姓名+项目-->
        <div class="row mb-2">
          <div class="col-12">
            <div class="row">
              <div class="col-4 order-0 col-md-4 order-md-0">
                <table class="table table-borderless table-sm text-left">
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      For an <router-link :to="{ name: 'cv_view' }">Online Version:</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-size-0_8 font-weight-light">
                      Access Code: 8FPQD
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8 order-1 col-md-4 order-md-2">
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
              <div class="col-12 order-2 col-md-4 order-md-1">
                <div class="text-center">
                  <span class="font-size-2 font-weight-bold">Tiantian Hua&nbsp;</span>
                  <span class="font-weight-light">(花田甜)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--联系方式-->
        <div class="row">
          <div class="col-10 offset-1 font-size-1_2 font-weight-light text-center">
            <table class="table table-borderless table-sm">
              <tr>
                <td>
                  <i class="fas fa-envelope"></i>&nbsp;<a href="mailto: tt_hua@seu.edu.cn">tt_hua@seu.edu.cn</a>; <a href="mailto: tt_hua@126.com">tt_hua@126.com</a>
                  &nbsp;|&nbsp;
                  <i class="fas fa-phone-alt"></i>&nbsp;+86 15651803725
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-globe-asia"></i>&nbsp;Chinese
                  &nbsp;|&nbsp;
                  <i class="fas fa-map-marker-alt"></i>&nbsp;<a href="https://goo.gl/maps/V4itPbAiiq2asWgY6">No.87 Dingjiaqiao, Nanjing, China</a>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-graduation-cap"></i>&nbsp;Master Candidate Applying for a Biostatistics and Health Informatics Research PhD
                </td>
              </tr>
            </table>
          </div>
        </div>

        <!--教育经历-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Education</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-graduation-cap"></i>&nbsp;Postgraduate
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Master Candidate (Master of Medicine)</span>&nbsp;
                          <span class="keyword">
                            <a href="https://en.wikipedia.org/wiki/Project_985">Project 985&211</a>
                          </span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://gw.seu.edu.cn/eng/">School of Public Health, Southeast University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Epidemiology and Health Statistics</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-book"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2017.08--2020.6</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">No. 87 Dingjiaqiao, Gulou District, Nanjing, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -The three-year master training programme is composed of both a taught-lessons module in the first year and a research module in the following two years.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -The core
                                <router-link :to="{ name: 'tmd_view' }">courses</router-link>
                                in the first year include Matrix Computation, Data Processing Techniques, Medical Statistics, Multivariate Statistics in Medicine, Advanced Biostatistics, Modern Epidemiology, Molecular Epidemiology and Infectious Diseases Epidemiology.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -The research project aims to use logistic regression, backpropagation neural network and support vector machine to optimize the prognosis prediction of major depressive disorder according to the demographic and clinical information collected in Zhongda Hospital, Nanjing.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -AVG: 90.03, GPA: 3.74/4.00
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-graduation-cap"></i>&nbsp;Undergraduate
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Bachelor of Medicine</span>&nbsp;
                          <span class="keyword">
                            <a href="https://en.wikipedia.org/wiki/Project_985">Project 985&211</a>
                          </span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://gw.seu.edu.cn/eng/">School of Public Health, Southeast University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Preventive Medicine</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-book"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2012.08--2017.06</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">No. 87 Dingjiaqiao, Gulou District, Nanjing, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -The five-year taught-lessons programme consists of a general education module in the first year, a basic medicine education module in the second year, a clinical medicine education module in the third year and a public health education module in the final two years.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Detailed information about the lessons can be found in the <router-link :to="{ name: 'tbd_view' }">transcript of academic records</router-link>.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -AVG: 82.93, GPA: 3.32/4.00
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--获奖-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Awards and Honours</span>
            </div>
            <div class="row">
              <div class="col-sm-8">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Award for Merit Student Cadres of Southeast University (Top2%)
                </span>
              </div>
              <div class="col-sm-4 text-right">
                <span class="font-size-1_2 font-weight-light">
                  2019
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Award for Merit Students of Southeast University (Top5%)
                </span>
              </div>
              <div class="col-sm-4 text-right">
                <span class="font-size-1_2 font-weight-light">
                  2015, 2016, 2018
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Meihua Scholarship of Southeast University Education Foundation (Top3%)
                </span>
              </div>
              <div class="col-sm-4 text-right">
                <span class="font-size-1_2 font-weight-light">
                  2015
                </span>
              </div>
            </div>
          </div>
        </div>

        <!--项目-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Research Experience</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Participated in the Development of <a href="http://222.190.114.42:9090/">an Online Hospital Information Management System</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Data Visualization</span>&nbsp;
                          <span class="keyword">Statistical Charts&Tables</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="www.njglyy.com">Nanjing Drum Tower Hospital</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-hospital"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/szrbEQZf1uf2cSNo9">Nanjing, Jiangsu, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2019.03-2019.10</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Collaborated with <a href="http://www.ambuf.net/">AmBuf CO. Ltd.</a> and Nanjing Drum Tower Hospital;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Selected appropriate statistical charts and tables to visualize data from different dimensions catering for different needs;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Provided consultancy on the design of online statistical analysis functions for examination scores (e.g. test for normal distribution, t-test, ANOVA, non-parameter test, multivariate test) and questionnaires (e.g. test for reliability and validity).
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Participated in a Clinical Trial of Danhong Injection for Unstable Angina
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Imputation</span>&nbsp;
                          <span class="keyword">SAR</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://www.dzmyy.com.cn/News/Main?siteId=510">Dongzhimen Hospital</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-hospital"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/61LR8rGFhhUQYsJ1A">Beijing, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2018.09-2019.04</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Collaborated with Dongzhimen Hospital Beijing University of Chinese Medicine;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Carried out multiple imputation for missing data using SAS;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Accomplished the statistical analysis report, including efficacy evaluation and safety evaluation.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row nextPageWhenPrint">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Keynote Speech in Group Sequential Design Seminar
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">HistCite</span>&nbsp;
                          <span class="keyword">VOSviewer</span>&nbsp;
                          <span class="keyword">Biliometrics</span>&nbsp;
                          <span class="keyword">Presentation</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://gw.seu.edu.cn/eng/">Southeast University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">Nanjing, Jiangsu, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2018.09-2018.10</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Employed HistCite and VOSviewer in visualizing the results of literature search;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Identified the key literature in group sequential design using bibliometric methods;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Summarized core knowledge on group sequential design in a mindmap;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Gave a keynote speech on Group Sequential Design in a seminar to the whole faculty of Epidemiology and Health Statistics.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Responsible for a Clinical Trial of Qizhi Tongluo Capsules for Ischemic Stroke Recovery Period
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Protocol Seminar</span>&nbsp;
                          <span class="keyword">DM</span>&nbsp;
                          <span class="keyword">SAP</span>&nbsp;
                          <span class="keyword">SAR</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://www.tcmid.cn">China Academy of Chinese Medical Sciences</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/oZjvr2D2VjHcdbkWA">Beijing, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2017.04-2018.10</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Collaborated with Institute of Basic Research In Clinical Medicine, China Academy Of Chinese Medical Sciences;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Participated in research protocol discussion and sample size estimation;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Responsible for data management, including database design, double data entry, data cleaning (e.g. blind review, multiple imputation for missing data using SAS, analysis dataset determination using the intention-to-treat principle);
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Generated the statistical analysis plan and accomplished the statistical analysis report, including trial completeness summary, baseline comparison, efficacy evaluation, safety evaluation, etc.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Course Work on Using Stata for Meta-analysis
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Stata</span>&nbsp;
                          <span class="keyword">Meta-analysis</span>&nbsp;
                          <span class="keyword">Model Selection</span>&nbsp;
                          <span class="keyword">Subgroup Analysis</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-6">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://gw.seu.edu.cn/eng/">Southeast University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">Nanjing, Jiangsu, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2017.04-2017.05</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Summarized core knowledge on the topic, including model selection (fixed and random effects), subgroup analysis, meta-regression, etc.;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Gave a presentation on using Stata for doing meta-analysis in a seminar to the whole faculty of Epidemiology and Health Statistics.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--实习-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Internship</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Departments Rotating Internship at Public Health Research Institute of Jiangsu Province
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Departments Rotating</span>&nbsp;
                          <span class="keyword">Public Health Practice</span>&nbsp;
                          <span class="keyword">Team Leader of 4</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                           <span class="font-weight-light">
                            <a href="http://www.jshealth.com/">Public Health Research Institute of Jiangsu Province</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Rotating Intern</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2017.03--2017.06</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/QLiakdBirGWbjkZo7">Nanjing, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Major rotating departments including the Department of Toxicology&Risk Assessment, the Department of Critical Projects, etc.;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Participated in follow-up surveys of liver cancer patients;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Responsible for data collection and statistical description&analysis when rotating in the Department of Critical Projects.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Departments Rotating Internship at Jintan People's Hospital
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Departments Rotating</span>&nbsp;
                          <span class="keyword">Clinical Practice</span>&nbsp;
                          <span class="keyword">Surgical Assistant</span>&nbsp;
                          <span class="keyword">Team Leader of 6</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://www.jtrmyy.com/">Jintan People's Hospital</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-hospital"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Rotating Intern</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2015.09--2016.01</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/NVdRXSh2S4MvRcZ86">Changzhou, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Major rotating departments including the Department of General Surgery, the Department of Respiratory Diseases, the Department of Gastroenterology and the Department of Medical Records Managing;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Took the role of surgical assistant in an axillary accessory breast surgery;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Assisted in dealing with medical disputes when rotating in the Department of Medical Administration;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Instructed clinicians on using SPSS for simple statistical tests of quantitative variables.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Teaching Assistant for Undergraduates on Medical Statistics
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Undergraduate Teaching</span>&nbsp;
                          <span class="keyword">Course: Medical Statistics</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://www.olympic.org/nanjing-2014">Southeast University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Teaching Assistant</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2019.04-2019.06</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">Nanjing, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Responsible for teaching entire lessons, grading tests, running classroom-related errands;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Courses included specific statistical tests like ANOVA, Chi-square test, non-parametric tests, linear correlation, linear regression, survival analysis, etc.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Teaching Assistant for Health Vocational College Students on Medical Statistics
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Vocational College Students Teaching</span>&nbsp;
                          <span class="keyword">Course: Medical Statistics</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://www.jssmu.edu.cn">Jiangsu Health Vocational College</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Teaching Assistant</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2018.08-2019.10</span>
                          <span>&nbsp;</span>
                          <span><i class="far fa-calendar-alt"></i></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-map-marked-alt"></i>
                          Address:
                        </td>
                        <td>
                          <a href="https://goo.gl/maps/QQ2pDixWM185xdTU6">Nanjing, Jiangsu, China</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Presided over my own course of Medical Statistics, with guidance from the assigned professor;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Courses included introduction of medical statistics, statistical description (data types, tables and charts, descriptive statistics), statistical inference (probability distributions, parameter estimation, hypothesis testing, confidence intervals), some specific statistical tests (t-test, ANOVA, Chi-square test), etc.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--出版物-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Publication</span>
            </div>
            <div class="row nextPageWhenPrint">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;The Ratio of Gastric Tube Length to Thorax Length: A Vital Factor Affecting Leak after Esophageal Cervical Anastomosis
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">In revision</span>&nbsp;
                          <span class="keyword">Co-first Author</span>&nbsp;
                          <span class="keyword">EMID: 6b7d304d4fbd81ae</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-calendar-alt"></i>
                          Year:
                        </td>
                        <td>
                          2020
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-book-open"></i>
                          Journal:
                        </td>
                        <td>
                          <a href="https://www.jtcvs.org/">The Journal of Thoracic and Cardiovascular Surgery</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          Xiao-Kun Li, <span class="font-weight-normal">Tian-Tian Hua</span>, Yang Xu, Yang Fan, Wen-Jie Wu, Yong Qiang, Yi Shen
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Collaborated with a clinician;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Implemented dichotomization on a continuous variable and plotted relevant figures using R due to clinical needs.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;SAS Implementation of Item Response Theory
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Accepted&Waiting to be Published</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-calendar-alt"></i>
                          Year:
                        </td>
                        <td>
                          2020
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-book-open"></i>
                          Journal:
                        </td>
                        <td>
                          <a href="http://zgwstj.paperonce.org/">Chinese Journal of Health Statistics (RCCSE National Core Journal)</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          <span class="font-weight-normal">Tian-Tian Hua</span>, Fang-Jing Xu, Bing-Wei Chen
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                - Introduced the principles and applications of Item Response Theory;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Explained <code>PROC IRT</code> in SAS 9.2;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Illustrated an example of Graded Response Model and elaborated the results.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Effect of Different Therapeutic Strategies on the Clinical Outcome of Asymptomatic Intralobar Pulmonary Sequestration
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Published</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-calendar-alt"></i>
                          Year:
                        </td>
                        <td>
                          2019
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-link"></i>
                          Link:
                        </td>
                        <td>
                          <a href="https://doi.org/10.1093/icvts/ivz152">https://doi.org/10.1093/icvts/ivz152</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-book-open"></i>
                          Journal:
                        </td>
                        <td>
                          <a href="https://academic.oup.com/icvts">Interactive CardioVascular and Thoracic Surgery</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          Xiao-Kun Li, Jing Luo, Wen-Jie Wu, Zhuang-Zhuang Cong, Yang Xu, <span class="font-weight-normal">Tian-Tian Hua</span>, Chen-Ye Shao, Sai-Guang Ji, Yi-Fei Diao, Kai-Chao Liu
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Implemented multivariate analysis and provided plots using R.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Application of Latent Class Model in TCM Syndrome Classification of Hypertension
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Conference</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm font-size-1_2 font-weight-light">
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-calendar-alt"></i>
                          Year:
                        </td>
                        <td>
                          2019
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-comments"></i>
                          Conference:
                        </td>
                        <td>
                          <a href="http://cbc2019.cnbiostat.org/schedule.php">China Health Statistics Annual Conference 2019</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          <span class="font-weight-normal">Tian-Tian Hua</span>, Qing-Qing Yue, Bi-Yun Xu, Chun-Ti Shen, Hua-Qiang Zhang, Bing-Wei Chen
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Description:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Applied latent class model to classify the individual syndromes of hypertension patients.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--技能-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Relevant Skills</span>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Statistical programming ability in SPSS, SAS, Stata and R;
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Experienced in bibliometric softwares (HistCite, VOSviewer, CiteSpace);
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="font-size-1_2 font-weight-light">
                  <i class="fas fa-genderless"></i>&nbsp;Learned-by-self experience in Python and HTML.
                </span>
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
    name: 'cv_type4',
    data: function () {
      return {

      };
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
  .font-size-1_6 {
    font-size: 1.6rem;
  }
  .font-size-1_2 {
    font-size: 1.2rem;
  }
  .font-size-1 {
    font-size: 1rem;
  }
  .font-size-0_8 {
    font-size: 0.8rem;
  }
  .section-title {
    border-bottom: 0.05rem dashed #323232;
    margin-bottom: 0.5rem;
  }
  .keyword {
    padding: .25em .4em;
    border: 0.05rem dashed #323232;
    border-radius: .25rem;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
  }
  .text-ellipsis {
    width: 125px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis
  }
  .nextPageWhenPrint {
    page-break-after: always;
  }
</style>