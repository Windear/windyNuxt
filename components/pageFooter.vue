<template>
  <div class="footer">
    <div class="footerLayout">
    <div class="link">
      <div class="linkTitle">框架教程网站</div>
      <div class="linkText">
        <a href="http://element-cn.eleme.io/#/zh-CN" target="view_window">element-ui 饿了么UI框架</a>
        <a href="https://cn.vuejs.org/" target="view_window">vue-vue.js中国官网</a>
        <a href="http://www.imooc.com/" target="view_window">imooc-慕课网学习网站</a>
      </div>
    </div>
    <div class="link">
      <div class="linkTitle">设计素材网站</div>
      <div class="linkText">
        <a href="http://www.iconfont.cn/" target="view_window">Iconfont-阿里巴巴矢量图标</a>
        <a href="http://www.huaban.cn/" target="view_window">花瓣-设计师灵感来源</a>
        <a href="http://www.niudana.com/" target="view_window">牛大拿-设计师导航网站</a>
        <a href="http://www.chongbuluo.com/" target="view_window">虫部落-让搜索更简单</a>
        <a href="http://www.ui.cn/" target="view_window">UI中国</a>
        <a href="http://xclient.info/" target="view_window">MAC精品应用免费下载</a>
        <a href="http://www.zcool.com.cn/" target="view_window">站酷</a>
      </div>
    </div>
    <div class="link">
      <div class="linkTitle">友情链接</div>
      <div class="linkText">
        <a href="http://5windy.com/" target="view_window">有爱设计</a>
      </div>
    </div>
    <div class="line"></div>
    <div class="copyright">
      <div>Copyright © 2018 ~ 2023 有爱设计 鄂ICP备15003372号 By Windy.</div>
      <a href="/admin" style="color:#475669;">后台管理</a>
    </div>
  </div>
  </div>
</template>
<script type="text/javascript">
export default {
  //该页面的控制数据
  data() {
    return {

    }
  },
  //父控件传过来的参数
  props: {

  },
  //监听函数
  computed: {
    //底部宽度变化
    footerWidth() {
      return this.$store.getters.getFooterWidth;
    }
  },
  //进入页面执行的函数
  mounted() {

  },
  //定义函数
  methods: {},
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.footer {
  width: 100%;
  background: #131A1F;
  padding: 40px 20px 20px 20px;
}

.link {
  margin: 20px 0;
}

.footerLayout{
  width: 1180px;
  margin: auto;
}

.linkTitle {
  font-size: 18px;
  color: #C0CCDA;
}

.linkText a {
  font-size: 14px;
  margin: 20px 20px 0 0;
  display: inline-block;
  color: #fff;
}

.linkText a:link {
  /*color: #8492A6;*/
}

.linkText a:hover {
  color: #458CFF;
}

.line {
  height: 1px;
  width: 1180px;
  background: #324057;
}

.copyright {
  margin-top: 20px;
  color: #475669;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.cooyright a {}


@media screen and (max-width: 1200px) {
  .footer {
    width: 1200px;
  }
  .line {
    display: none;
  }
  .copyright {
    position: static;

  }
}
@media screen and (max-width: 760px) {
  .footer {
    width: 100%;
  }
  .footerLayout{
    width: 100%;
  }
  .linkBox {
    width: 100%;
    padding: 20px 20px;
  }
  .line {
    display: none;
  }
  .copyright {
    position: static;
    width: 100%;
  }
}
</style>
