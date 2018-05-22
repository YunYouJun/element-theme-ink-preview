<template>
  <div class="footer">
    <hr>
    <vue-about-me :copyright="copyright" :links="links"></vue-about-me>
  </div>
</template>

<script>
import VueAboutMe from 'vue-about-me'
export default {
  data () {
    return {
      copyright: {
        projectName: 'Element-Theme-Ink',
        author: 'YunYouJun',
        logo: 'fas fa-cloud'
      },
      links: [
        {
          name: 'github',
          color: 'black',
          icon: 'fab fa-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/YunYouJun/vue-about-me'
        },
        {
          name: 'weibo',
          color: '#DB2828',
          icon: 'fab fa-weibo',
          label: '微博：机智的云游君',
          href: 'http://weibo.com/jizhideyunyoujun'
        },
        {
          name: 'email',
          color: '#409EFF',
          icon: 'fas fa-envelope',
          label: '邮箱：me@yunyoujun.cn',
          href: 'mailto:me@yunyoujun.cn'
        },
        {
          name: 'blog',
          color: '#6435C9',
          icon: 'fas fa-globe',
          label: '博客：yunyoujun.cn',
          href: 'http://www.yunyoujun.cn'
        }
      ]
    }
  },
  components: {
    VueAboutMe
  }
}
</script>

<style lang="scss" scoped>
hr {
  opacity: 0.3;
}

.footer {
  text-align: center;
  padding: 10px;
}
</style>
