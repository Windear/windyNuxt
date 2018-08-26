<template>
  <div class="homeBody">
    <scroll-bar></scroll-bar>
    <resourece/>
  </div>
</template>
<script type="text/javascript">
//引入百度统计
import baidu from 'static/js/baidu.js'
import ScrollBar from '~/components/scroll_bar.vue' //通知栏
import resourece from '~/components/resource/resourceList.vue' //素材列表
export default {

  //该页面的控制数据
  data() {
    return {}
  },
  //自定义头部
  head() {
    return {
      title: "UI设计素材下载",
      meta: [
                { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' },
                { hid: 'description',content:'sketch素材。sketch资源。sketch下载。'}
      ]
    }
  },
  //父控件传过来的参数
  props: {

  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {
    //菜单选择
    this.$store.commit('updateNavBarActive', '3');
    //百度统计
    baidu.baidu("我的案例");
    //默认footer需要显示1
    this.$store.commit('updateFooterWidth', 1);
  },
  //定义函数
  methods: {},
  //增加控件
  components: {
    ScrollBar,
    resourece
  }
}

</script>
<style scoped lang="css">
/*当屏幕尺寸小于600px时，应用下面的CSS样式*/

@media screen and (max-width: 760px) {}

</style>
