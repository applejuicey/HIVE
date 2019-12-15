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
                      Access Code: 43TC5
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-8 order-1 col-md-4 order-md-2">
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
              <div class="col-12 order-2 col-md-4 order-md-1">
                <div class="text-center">
                  <span class="font-size-2 font-weight-bold">Yang Fan&nbsp;</span>
                  <span class="font-weight-light">(范扬)</span>
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
                  <i class="fas fa-envelope"></i>&nbsp;<a href="mailto: yangfan_94@hotmail.com">yangfan_94@hotmail.com</a>; <a href="mailto: yangfan_94@seu.edu.cn">yangfan_94@seu.edu.cn</a>
                  &nbsp;|&nbsp;
                  <i class="fas fa-phone-alt"></i>&nbsp;+86 13218018515
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fab fa-github"></i>&nbsp;<a href="https://github.com/applejuicey">github.com/applejuicey</a>
                  &nbsp;|&nbsp;
                  <i class="fas fa-globe"></i>&nbsp;<a href="http://uma77.com/hive">uma77.com/hive</a>
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
                  <i class="fas fa-graduation-cap"></i>&nbsp;Master Candidate, Applying for the 'AI and Machine Learning' PhD
                </td>
              </tr>
            </table>
          </div>
        </div>

        <!--个人陈述-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Profile</span>
            </div>
            <div class="font-size-1_2 font-weight-light">
              <table class="table table-borderless table-sm">
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;An inter-disciplinary student with school research training on epidemiology&health-statistics and learned-by-self skills on computer programming;
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;Contributed to several vaccine clinical trials and experience in clinical trial data management as well as statistical analysis;
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;Have experiences in clinical trial statistical methodologies and applications consultancy (both frequency and Bayesian);
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;A quick learner and a passionate doer: developed&deployed an EDC system, a clinical trial management system and an online querying database supporting for clinical trials;
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;Compatible with teamwork and collaboration, good at listening to others and willing to communicate and share;
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;Proficient with programming languages (e.g. JavaScript, Python, Java), statistical analysis language (R), structured querying languages (e.g. MySQL, PostgreSQL);
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fas fa-genderless"></i>&nbsp;Particularly interested in learning AI/data science and implementing those techniques into health-related fields.
                  </td>
                </tr>
              </table>
            </div>
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
                          <span class="font-weight-light">2017.09--2020.6</span>
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
                          <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">No. 87 Dingjiaqiao, Nanjing, China</a>
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
                                -The three-year master training programme is composed of both a taught lessons module in the first year and a research module in the following two years.
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
                                -My graduate research project aims to solve the problems (adaptive randomization protocol evaluation and trial simulation) arose in the design and practice of Bayesian adaptive randomization for clinical trials, with the development of a related responsive web application (interacting with R).
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -AVG: 89.45
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
                          <span class="font-weight-light">2012.09--2017.06</span>
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
                          <a href="https://goo.gl/maps/SBjTuahH3pt4PeVW8">No. 87 Dingjiaqiao, Nanjing, China</a>
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
                                -The five-year bachelor taught-lessons programme features a general education module in the first year, a basic medicine education module in the second year, a clinical medicine education module in the third year and a public health education module in the final two years. Details can be found in the
                                <router-link :to="{ name: 'tbd_view' }">transcript of academic records</router-link>.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Participated in the Student Research Training Programme (on-spot sampling and laboratory analysis of air pollutants) as a team leader of 5.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -AVG: 83.58
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

        <!--项目-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Projects</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;Development of a Clinical Trial Management System
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">CTMS</span>&nbsp;
                          <span class="keyword">JavaScript (Vue.js)</span>&nbsp;
                          <span class="keyword">Python (Flask)</span>&nbsp;
                          <span class="keyword">Nginx</span>&nbsp;
                          <span class="keyword">Frontend</span>&nbsp;
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
                          <span class="font-weight-light">2019.01--2019.10</span>
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
                          <i class="fas fa-link"></i>
                          Access:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -[Source] CONFIDENTIAL
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -[Demo] <a href="http://47.100.168.127:8866/ctms">47.100.168.127:8866/ctms</a>
                              </td>
                            </tr>
                          </table>
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
                                -Summarized demands and formulated the core functions for the management workflow of clinical trials;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Designed the application architecture and drafted an API document for interaction between client and server (JavaScript for frontend, Python for backend, PostgreSQL for persistent storage);
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Developed the client using Vue.js and Bootstrap4.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Development of a Saponins Mass Spectrometry Database (SMSD)
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">OnlineDB</span>&nbsp;
                          <span class="keyword">JavaScript (Vue.js)</span>&nbsp;
                          <span class="keyword">Prisma</span>&nbsp;
                          <span class="keyword">GraphQL</span>&nbsp;
                          <span class="keyword">Docker</span>&nbsp;
                          <span class="keyword">Full-stack</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://zyxyen.cpu.edu.cn/">China Pharmaceutical University</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-university"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/LBRg1pXkXup9bc9G6">Nanjing, Jiangsu, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2018.09--2019.09</span>
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
                          <i class="fas fa-link"></i>
                          Access:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -[Source] <a href="https://github.com/applejuicey/SMSDatabase;">github.com/applejuicey/SMSDatabase</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -[Demo] <a href="http://47.92.73.208:8082">47.92.73.208:8082</a>
                              </td>
                            </tr>
                          </table>
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
                                -Collaborated with School of Traditional Chinese Pharmacy, China Pharmaceutical University;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Accomplished full-stack development for a saponins mass spectrometry information database and deployed to a cloud server;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Core techniques including Vue.js, Vuetify, Prisma, GraphQL, MySQL, PM2 and Nginx.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Development of a personal website (HIVE)
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Personal Website</span>&nbsp;
                          <span class="keyword">JavaScript (Vue.js+Express+Sequelize)</span>&nbsp;
                          <span class="keyword">RESTful API</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://uma77.com/hive">Personal</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-blog"></i></span>
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
                          <span class="font-weight-light">2017.12--2018.09</span>
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
                          <i class="fas fa-link"></i>
                          Access:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -[Source] <a href="https://github.com/applejuicey/HIVE">github.com/applejuicey/HIVE</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -[Demo] <a href="http://uma77.com/hive">uma77.com/hive</a>
                              </td>
                            </tr>
                          </table>
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
                                -HIVE is a personal website deployed to share my experiences during learning (e.g. health statistics, web app development, machine learning) and is hoped to be further developed into a website where one can own an account and share his/her knowledge;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Designed a CV generating and presenting module for HIVE;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Core techniques including Vue.js, Bootstrap4, Node.js, Axios, Mysql and Nginx.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Development of a Electronic Data Capture System (InterClin)
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">EDC</span>&nbsp;
                          <span class="keyword">JAVA (Spring+JSP+Hibernate)</span>&nbsp;
                          <span class="keyword">Redevelopment</span>&nbsp;
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
                          <span class="font-weight-light">2016.09--2018.01</span>
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
                          <i class="fas fa-link"></i>
                          Access:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -[Source] CONFIDENTIAL
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -[Demo] <a href="http://115.159.125.68:8080/InterClin">115.159.125.68:8080/InterClin</a>
                              </td>
                            </tr>
                          </table>
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
                                -InterClin is an electronic data capture system for clinical trials (based on OpenClinica);
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Directed the demands summarization work and the source code refactor plan;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Core techniques including Spring, JSP, Hibernate, Bootstrap3, Tomcat and PostgreSQL.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Clinical Trial Subjects Randomization and Masking for an EV71 Vaccine
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Randomization&Masking</span>&nbsp;
                          <span class="keyword">R</span>&nbsp;
                          <span class="keyword">Field Work</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://www.wibp.com.cn/Chs/Default.aspx">Wuhan Institute of Biological Products CO.,LTD</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-building"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/pQcbx54eoRHCZr739">Wuhan, Hubei, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2019.04--2019.04</span>
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
                                -Contributed to the subjects masking and allocation work for the trial;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Implemented stratified block randomization using R;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Coordinated vaccine labelling work in the pharmaceutical factory.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Clinical Trial Statistical Analysis (Plan & Report) for a Rabies Vaccine
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">SAP</span>&nbsp;
                          <span class="keyword">SAR</span>&nbsp;
                          <span class="keyword">Automatic Document Generation</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://en.biominhai.com/">Minhai Biotechnology CO.,LTD</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-building"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/bjrg6RA6NvUdGnuX8">Beijing, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2019.03--2019.03</span>
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
                                -Generated formatted statistical analysis plan using JavaScript and HTML automatically;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Carried out data analysis with R;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Collated and compiled statistical analysis report.
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
                          <i class="fas fa-caret-right"></i>&nbsp;Clinical Trial Data Management for a PV Vaccine
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Data Management</span>&nbsp;
                          <span class="keyword">Blind Review</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="http://en.biominhai.com/">Minhai Biotechnology CO.,LTD</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-building"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://goo.gl/maps/bjrg6RA6NvUdGnuX8">Beijing, China</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2018.06--2018.09</span>
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
                                -Participated in the data management work (e.g. project initiation, eCRF generation, data monitoring&inspection) for the trial;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Executed blind review on clinical data after the trial;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Organized data entry personnel training.
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
        <div class="row nextPageWhenPrint">
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
                          <i class="fas fa-caret-right"></i>&nbsp;Departments Rotating Internship at Nanjing Center for Disease Control and Prevention
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Departments Rotating</span>&nbsp;
                          <span class="keyword">Field Work</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                           <span class="font-weight-light">
                            <a href="http://www.njcdc.cn">Nanjing Center for Disease Control and Prevention</a>
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
                          <a href="https://goo.gl/maps/cH4AEC5pLktQqc8t6">Nanjing, Jiangsu, China</a>
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
                                -Major rotating departments including the Department of Non-infectious Chronic Disease Control, the Department of Environmental&Occupational Health and the Department of STD Prevention and Control;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Participated in field work of workplace particulate matter monitoring in an electric power plant.
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
                          <span class="keyword">Surgical Assistant</span>&nbsp;
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
                                -Took the role of surgical assistant in an external abdominal hernia surgery.
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

        <!--社会实践-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">Volunteer Experience</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-md-8">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;NOC Assistant for the Second Summer Youth Olympic Games
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">NOC Assistants Leader for SVK Delegation</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://www.olympic.org/nanjing-2014">International Olympic Committee</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-running"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">NOC Assistant</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2014.08--2014.08</span>
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
                          <a href="https://goo.gl/maps/ZFD4KQFUfovrJEvC9">Nanjing, Jiangsu, China</a>
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
                                -Group leader of six NOC assistants;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Coordinated and supported the daily secretarial work for the whole Slovakian delegation (e.g. translation work, athlete routines).
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
                          <i class="fas fa-caret-right"></i>&nbsp;Volunteer for the Chefs de Mission Seminar and Young Ambassadors Seminar for Nanjing 2014
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Volunteer for SVK NOC</span>&nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-md-4">
                    <table class="table table-borderless table-sm text-right">
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">
                            <a href="https://www.olympic.org/nanjing-2014">Nanjing Youth Olympic Games Organising Committee</a>
                          </span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-running"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-normal">Volunteer</span>
                          <span>&nbsp;</span>
                          <span><i class="fas fa-user-tie"></i></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-1">
                          <span class="font-weight-light">2014.03--2014.03</span>
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
                          <a href="https://goo.gl/maps/ZFD4KQFUfovrJEvC9">Nanjing, Jiangsu, China</a>
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
                                -Supported the daily secretarial work for two Slovakian delegation leaders
                                (<a href="https://www.olympic.sk/en/organizacna-struktura/office">J. Gonci</a> and <a href="https://www.olympic.sk/en/organizacna-struktura/office">B. Demeter</a>).
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
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;A Preliminary Investigation on the Methods of Predictive Evaluation through Simulation on Bayesian Response-adaptive Randomization
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
                          <i class="fas fa-comments"></i>
                          Conference:
                        </td>
                        <td>
                          Report on <a href="http://cbc2019.cnbiostat.org/schedule.php">China Health Statistics Annual Conference 2019</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-book-open"></i>
                          Journal:
                        </td>
                        <td>
                          <a href="http://zgwstj.paperonce.org/">Chinese Journal of Health Statistics</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          <span class="font-weight-normal">Yang Fan</span>, Tai-Shun Li, Jia-Ying Yang, Shi-Yuan Wang
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
                                -Preliminarily investigated the methods of predictive evaluation through simulation of Bayesian response-adaptive randomization;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Combined a set of parameters into scenarios and implemented trial simulations by R;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Constructed evaluation indexes to assess the effects of scenario parameters.
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
                          <i class="fas fa-caret-right"></i>&nbsp;The Ratio of Gastric Tube Length to Thorax Length: A Vital Factor Affecting Leak after Esophageal Cervical Anastomosis
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">In Revision</span>&nbsp;
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
                          Xiao-Kun Li, Tian-Tian Hua, Yang Xu, <span class="font-weight-normal">Yang Fan</span>, Wen-Jie Wu, Yong Qiang, Yi Shen
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
                                -Responsible for the statistical analysis section and result explanation;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Implemented the dichotomization and plotted the figures by R.
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
                          <i class="fas fa-caret-right"></i>&nbsp;A Mass Spectrometry Database for Identification of Saponins in Plants
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Co-first Author</span>&nbsp;
                          <span class="keyword">To be submitted</span>&nbsp;
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
                          <a href="https://www.nature.com/ncomms/">Nature Communications</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="fas fa-user-edit"></i>
                          Authors:
                        </td>
                        <td>
                          Yuan-Ming Fan, Xue-Si Dong, <span class="font-weight-normal">Yang Fan</span>, Chen-Cheng Mao, Xiao-Jian Yin, Feng-Qing Wang, Jing Lia, Wei Zhou
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
                                -Developed and deployed the online querying system;
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -Applied for a Chinese patent.
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

        <!--英语能力-->
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <span class="font-size-2 font-weight-normal">English Language Certificate</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless table-sm">
                      <tr>
                        <td class="font-size-1_6 font-weight-normal">
                          <i class="fas fa-caret-right"></i>&nbsp;IELTS (Academic)
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-0_8 font-weight-light">
                          <span class="keyword">Test Report Form Number: 19CN128604FANY004A</span>&nbsp;
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
                          Date:
                        </td>
                        <td>
                          2019.10.26
                        </td>
                      </tr>
                      <tr>
                        <td class="text-ellipsis">
                          <i class="far fa-comment-dots"></i>
                          Test Results:
                        </td>
                        <td>
                          <table class="table table-borderless table-sm">
                            <tr>
                              <td>
                                -Listening: 8.5; Reading: 8.0; Speaking: 6.0; Writing: 6.5
                              </td>
                            </tr>
                            <tr>
                              <td>
                                -IELTS Overall Band Score: 7.5
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

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cv_type3',
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