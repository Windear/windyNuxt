<template>
  <div>
    <nav-bar/>
    <div style="height:80px"></div>
    <nuxt/>
    <page-footer v-if="footerWidth !=0"></page-footer>
    <!-- 微信模态框 -->
    <wechat/>
    <!-- 微信模态框 -->
  </div>
</template>
<script type="text/javascript">
import navBar from '~/components/navBar'; //顶部栏
import pageFooter from '~/components/pageFooter'; //底部栏
import wechat from '~/components/WeChatModal'; //微信弹窗
import Lodash from 'lodash';

export default {
  name: 'App',
  data() {
    return {
      bodyWidth: '',
    }
  },
  created() {

  },
  computed: {
    //底部宽度变化
    footerWidth() {
      return this.$store.getters.getFooterWidth;
    }
  },
  wacth: {

  },
  mounted() {
    //监听页面宽度
    this.bodyWidth = document.body.clientWidth;
    this.$store.commit('updateBodyWidth', this.bodyWidth);
    const that = this;
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    window.onresize = _.debounce(() => {
      //console.log("onresize:" + that.bodyWidth)
      that.bodyWidth = document.body.clientWidth;
      that.$store.commit('updateBodyWidth', that.bodyWidth);
    }, 100);

  },
  components: {
    navBar,
    pageFooter,
    wechat,
  }
}

</script>
<style>
html {
  /* font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

ul li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #1F2D3D;
}

a,
h1,
h2,
h3,
p,
kbd,
code,
dt,
dd,
li,
div,
button {
/*  font-family: 'Hiragino Sans GB', 'Helvetica Neue', 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;*/
}

body,
ul,
h1,
h2,
h3,
p,
pre,
figure {
  margin: 0;
  padding: 0;
}

</style>
