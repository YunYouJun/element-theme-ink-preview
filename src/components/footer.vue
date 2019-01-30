<template>
  <div class="footer">
    <hr />
    <vue-about-me :copyright="copyright" />
  </div>
</template>

<script>
import VueAboutMe from 'vue-about-me'
export default {
  components: {
    VueAboutMe
  },
  data() {
    return {
      copyright: {
        name: 'Element-Theme-Ink',
        repoName: 'Element-Theme-Ink',
        author: 'YunYouJun',
        logo: 'fas fa-cloud',
        link: 'https://ink.yunyoujun.cn'
      }
    }
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
