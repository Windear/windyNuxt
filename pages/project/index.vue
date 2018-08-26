<template>
  <div class="homeBody">
    <div class="text-title">
      <h2>作品欣赏</h2>
      <p>Windy作品分类，包含练习</p>
    </div>
    <design-list/>
    <div class="text-title">
      <h2>参与项目</h2>
      <p>从事UI设计工作以来，所参与过的项目</p>
    </div>
    <project-list :years-title="'2018'" />
    <project-list :years-title="'2017'" />
    <project-list :years-title="'2016'" />
  </div>
</template>
<script type="text/javascript">
//引入百度统计
import baidu from 'static/js/baidu.js'

import designList from '~/components/project/designList'; //设计列表
import projectList from '~/components/project/projectList'; //项目列表
export default {

  //该页面的控制数据
  data() {
    return {}
  },
  //自定义头部
  head() {
    return {
      title: "武汉UI设计师Windy作品列表，项目展示，设计展示",
      meta: [
        { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' },
        { hid: 'description',content:'APP开发案例，APP项目参考，UI设计素材，UI设计参考，武汉APP开发，网站开发。windyUI设计案例和项目展示。'}
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
    this.$store.commit('updateNavBarActive', '2');
    //百度统计
    baidu.baidu("我的案例");
    //默认footer需要显示1
    this.$store.commit('updateFooterWidth', 1);
  },
  //定义函数
  methods: {},
  //增加控件
  components: {
    designList,
    projectList,
  }
}

</script>
<style scoped lang="css">
/*标题样式*/

.homeBody {
  width: 100%;
}

.text-title {
  margin: 40px auto;
  text-align: center;
}

.text-title h2,
p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

.text-title h2 {
  font-size: 24px;
  color: #1f2d3d;
  margin-bottom: 10px;
  font-weight: 400;
}

.text-title p {
  color: #8492A6;
  font-weight: 350;
  font-size: 14px;
}



/*标题样式*/


/*当屏幕尺寸小于600px时，应用下面的CSS样式*/

@media screen and (max-width: 760px) {
  .text-title {
    display: none;
  }
}

</style>
