<template>
  <div class="footer">
    <hr>
    <div class="container">
      <div class="copyright">
        Element-Theme-Ink <i class="fas fa-cloud"></i> {{ copyright }}
      </div>
      <div class="link">
        <el-tooltip v-for="(link, key) in links" :key="key" class="item" effect="light" :content="link.label" placement="top">
          <a class="link-item" :style="{color: link.color, borderColor: link.color}" :href="link.href" target="_blank">
            <i :class="link.icon"></i>
          </a>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'YunYouJun',
      links: {
        github: {
          color: 'black',
          icon: 'fab fa-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/YunYouJun/element-theme-ink'
        },
        weibo: {
          color: '#DB2828',
          icon: 'fab fa-weibo',
          label: '微博：机智的云游君',
          href: 'http://weibo.com/jizhideyunyoujun'
        },
        email: {
          color: '#409EFF',
          icon: 'fas fa-envelope',
          label: '邮箱：me@yunyoujun.cn',
          href: 'mailto:me@yunyoujun.cn'
        },
        blog: {
          color: '#6435C9',
          icon: 'fas fa-globe',
          label: '博客：yunyoujun.cn',
          href: 'http://www.yunyoujun.cn'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
hr {
  opacity: 0.3;
}

h4 {
  font-weight: normal;
}

.footer {
  text-align: center;
}

.copyright {
  font-size: .9rem;
  padding-bottom: 10px;
}

.link-item {
  display: inline-block;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 2rem;
  transition: .3s;
  align-content: center;
  line-height: 2rem;
  border-radius: 2rem;
  margin: 5px;

  width: 2rem;

  &:hover {
    transform: scale(1.2);
    color: #fff !important;
    border-color: black !important;
    background-color: #000;
    text-shadow: 0px 0px 1px #000;
  }
}
</style>
