<template>
  <div class="listBox" v-if="projectLists.length != 0">
    <div class="textBox">
      <div class="yearsTitle">{{yearsTitle}}年</div>
      <div class="more" v-if="projectListsData.length > 4"><a href="javascript:;">更多 ></a></div>
    </div>
    <div class="projectList">
      <div class="projectBox" v-for="(project,index) in projectLists" @click="openDetails(project.projectId)">
        <div class="listMask"></div>
        <div class="projectImg" :style="'background-image: url('+ ip +'/media/'+ project.projectImg+')'"></div>
        <div class="projectTitle">{{project.projectTitle}}</div>
        <div class="projectText">{{project.projectText}}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  //该页面的控制数据
  data() {
    return {
      //ip地址
      ip: this.$store.state.ip,
      projectLists: [],
      projectListsData: [],

    }
  },
  //父控件传过来的参数
  props: {
    yearsTitle: {
      type: String,
      default: '',
    }
  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {
    this.postProjectList();
  },
  //定义函数
  methods: {
    //打开项目页面
    openProject() {
      console.log(this.projectList);
    },
    //请求项目列表
    postProjectList() {
      let params = { year: this.yearsTitle };
      this.$store.dispatch('postProjectList', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          //console.log(res);
          this.projectListsData = res;
          this.projectLists = this.projectListsData.slice(0, 4);
        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    //打开详情页
    openDetails(index) {
      localStorage.setItem("projectId", index);
      this.$router.push({ path: 'project/' + index });
    },
  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.listBox {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
}

.projectList {
  width: 1200px;
  overflow: hidden;
  zoom: 1;
}

.textBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.yearsTitle {
  color: #1f2d3d;
  font-size: 20px;
  margin-left: 10px;
}

.more {
  font-size: 14px;
  color: #8492A6;
}

.more a:link {
  color: #8492A6;
}

.more a:hover {
  color: #458CFF;
}

.projectBox {
  margin: 0 10px;
  float: left;
}

.projectBox:hover .listMask {
  display: inline-block;
  transition: all 0.3s ease-out 0s;
}

.listMask {
  width: 280px;
  height: 160px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0;
  border-radius: 4px;
  position: absolute;
  display: none;
  transition: all 0.3s ease-out 0s;
}

.projectImg {
  width: 280px;
  height: 160px;
  background-size: 100%;
  margin: 20px 0;
  border-radius: 4px;
}

.projectTitle {
  color: #475669;
  font-size: 18px;
  font-weight: 400px;
  margin-bottom: 8px;
  width: 280px;
}

.projectText {
  color: #8492A6;
  font-size: 14px;
  width: 280px;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}






/*当屏幕尺寸小于600px时，应用下面的CSS样式*/

@media screen and (max-width: 760px) {
  .listBox {
    width: 100%;
  }
  .projectList {
    width: 100%;
  }

  .projectBox {
    margin: 2% 2% 2% 2%;
    width: 45%;
  }

  .listMask {
    display: none;
    margin: 0 2% 2%;
    width: 45%;
  }

  .projectImg {
    margin: 0 2% 2%;
    width: 100%;
    height: 140px;
  }
  .projectTitle {
    width: 100%;
    margin: 0 2% 2%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 24px;
    font-size: 16px;
  }
  .projectText {
    width: 100%;
    height: 40px;
    margin: 0 2% 2%;
  }
}

</style>
