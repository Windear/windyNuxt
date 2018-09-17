<template>
  <el-dialog title="" :visible.sync="centerDialogVisible" width="480px" :before-close="handleClose" center>
    <!-- 微信模态框 -->
    <div class="wechatCode" v-show="modalStatus=='wechat'">
      <img src="~/assets/img/wechatCode.jpg">
      <span>扫一扫添加微信</span>
      <span slot="footer" class="dialog-footer">
      <el-button @click="postCenterDialogVisibleFalse" v-show="modalStatus!='wechat'">取 消</el-button>
      <el-button type="primary" @click="postCenterDialogVisibleFalse">确 定</el-button>
    </span>
    </div>
    <!-- 微信模态框 -->
  </el-dialog>
</template>

<script type="text/javascript">
  export default {
    //该页面的控制数据
    data() {
      return {
  
      }
    },
    computed: {
      centerDialogVisible() {
        return this.$store.getters.getCenterDialogVisible;
      },
      //弹窗状态
      modalStatus() {
        return this.$store.getters.getModalStatus;
      },
    },
    //父控件传过来的参数
    props: {
  
    },
    //监听函数
    wacth: {
  
    },
    //进入页面执行的函数
    mounted() {
  
    },
    //定义函数
    methods: {
      //存储到Vuex中模态框的状态为false
      postCenterDialogVisibleFalse() {
        this.$store.commit('updateCenterDialogVisible', false);
      },
      //点击关闭按钮
      handleClose(done) {
        this.$store.commit('updateCenterDialogVisible', false)
      },
    },
    //增加控件
    components: {
  
    }
  }
</script>

<style scoped lang="css">
  .wechatCode {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  
  .wechatCode img {
    width: 200px;
    height: 200px;
  }
  
  .wechatCode span {
    margin-top: 20px;
  }
</style>
