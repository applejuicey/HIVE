<template>
  <div class="construction-notice">
    <div class="row">
      <div class="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-12">
        <div class="transparent-card">
          <div class="h2 text-center">
            <i class="fas fa-exclamation-triangle"></i>&nbsp;
            <span>{{ $t('universal.under_construction') }}</span>
          </div>
          <div class="text-muted">
            <span>{{ $t('universal.under_verification') }}</span>
          </div>
          <div class="text-muted">
            <span>{{ $t('universal.policy_links') }}</span>
          </div>
          <div class="text-muted">
            <ul>
              <li>
                <a href="http://www.miitbeian.gov.cn/state/outPortal/queryMutualityDownloadInfo.action?spm=a2c4g.11186623.2.11.5c163c00nFtbvF&id=11">
                  《非经营性互联网信息服务备案管理办法》(信息产业部令第33号)
                </a>
              </li>
              <li>
                <a href="http://www.cac.gov.cn/2019-06/11/c_1124609262.htm?spm=a2c4g.11174386.n2.3.74fb61dbamWTbL">
                  中央网信办等四部委联合开展互联网网站安全专项整治 将处罚并曝光违法违规网站
                </a>
              </li>
              <li>
                <a href="http://www.beian.miit.gov.cn/state/outPortal/moreCodex.action?spm=a2c4g.11186623.2.7.4270289cq3rpwg&fileDownLoadInfo.fileType=0">
                  {{ $t('universal.more_links') }}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'construction-notice',
}
</script>

<style scoped>
  ul {
    margin-bottom: 0;
  }
</style>
