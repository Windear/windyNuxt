<template>
  <div class="homeBody">
    <scroll-bar></scroll-bar>
    <div class="container">
      <h2 class="title-box">素材</h2>
      <div class="design_format">
        <span>格式:</span>
        <a
          v-for="(format,key) in formatList"
          :key="format.id"
          class="format_btn"
          :class="{'format_btn_active':formatIndex==key}"
          href="javascript:;"
          @click="postCateResourcesFormatList(key,format,true)"
        >{{format}}</a>
      </div>
      <ul class="img-list">
        <li v-for="item in resourcesList" :key="item.id">
          <div class="thumbnail">
            <a :href="'/resources/data/'+item.id" target="_blank">
              <img
                v-lazy="item.picture"
                :key="item.picture"
                alt="有爱设计素材,sketch素材"
                style="display: inline;"
              />
            </a>
            <div class="info"></div>
          </div>
          <p>
            <a :href="'/resources/data/'+item.id" target="_blank">{{item.title}}</a>
          </p>
        </li>
      </ul>
      <not-found v-if="resourcesList==''"></not-found>
      <div class="pagination" v-if="total">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="24"
          :current-page.sync="currentPage"
          layout="total,prev, pager, next"
          :total="total"
          style="margin-left: 5px;white-space: normal;"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
//引入百度统计
import baidu from "static/js/baidu.js";
import notFound from "~/components/not_found.vue"; //未找到
import ScrollBar from "~/components/scroll_bar.vue"; //通知栏
export default {
  //该页面的控制数据
  data() {
    return {
      //ip地址
      ip: this.$store.state.ip,
      //传过来的值
      resourcesCate: this.$route.query.resourcesCate,
      //素材列表
      resourcesList: [],
      //新分页素材列表
      newList: [],
      //是否显示notfound
      notfound: false,
      //格式列表
      formatList: ["全部"],
      //选中的格式
      format: "全部",
      //选中的格式筛选
      formatIndex: 0,
      //分页当前页数
      currentPage: 1,
      total: ""
    };
  },
  //自定义头部
  head() {
    return {
      title: "UI设计素材下载",
      meta: [
        {
          hid: "有爱设计",
          name: "keywords",
          content:
            "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发"
        },
        {
          hid: "有爱设计",
          name: "description",
          content:
            "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载。"
        },
        {
          hid: "有爱设计",
          name: "description",
          content:
            "欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。"
        }
      ]
    };
  },
  //父控件传过来的参数
  props: {},
  //监听函数
  wacth: {},
  //进入页面执行的函数
  mounted() {
    //菜单选择
    this.$store.commit("updateNavBarActive", "2");
    //百度统计
    baidu.baidu("我的素材");
    //默认footer需要显示1
    this.$store.commit("updateFooterWidth", 1);
    //获取素材列表
    this.getCateResourcesList();
    //获取格式分类
    this.getResourcesFormat();
  },
  //定义函数
  methods: {
    //请求分类列表
    getCateResourcesList() {
      //如果projectId没有传过来，或者没有
      if (this.resourcesCate === undefined) {
        //获取该页面URL最后一个数字，并赋值给这个页面的id
        let aaa = String(window.location.href.split("/").pop());
        this.resourcesCate = aaa;
      }
      //获取projectId
      let params = {
        search: this.resourcesCate,
        p: this.currentPage
      };

      //let params = localStorage.getItem("projectId");
      this.$store
        .dispatch("getCateResourcesList", params)
        .then(response => {
          let res = response.data;
          if (res.state != "err") {
            this.resourcesList = res.results;
            this.total = res.count;
            // this.toListData(0, 20);
          } else {
            // alert("网络错误")
            this.notfound = true;
          }
        })
        .catch(err => {
          console.error(err);
          this.$router.push({
            // path: '/404'
          });
        });
    },

    //通过格式分类获取素材列表
    postCateResourcesFormatList(key, format, currentPage) {
      //如果projectId没有传过来，或者没有
      if (this.resourcesCate === undefined) {
        //获取该页面URL最后一个数字，并赋值给这个页面的id
        let aaa = String(window.location.href.split("/").pop());
        this.resourcesCate = aaa;
      }
      if (currentPage) {
        this.currentPage = 1;
      }

      this.formatIndex = key;
      this.format = format;
      console.log(format);
      if (format == "全部") {
        this.getCateResourcesList();
      } else {
        let params = {
          file_type: format.toLowerCase(),
          cate: this.resourcesCate,
          p: this.currentPage
        };

        this.$store
          .dispatch("postCateResourcesFormatList", params)
          .then(response => {
            let res = response.data;
            if (res.state != "err") {
              this.resourcesList = res.results;
              this.total = res.count;
              // this.toListData(0, 20);
              this.notfound = false;
            } else {
              // alert("网络错误")
              this.newList = [];
              this.notfound = true;
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },

    //请求格式分类
    getResourcesFormat() {
      let params = "";
      this.$store
        .dispatch("getResourcesFormat", params)
        .then(response => {
          let res = response.data;
          // 将获得的数组加入到formatList里面去
          for (var i = 0; i < res.length; i++) {
            this.formatList.push(res[i].toUpperCase());
            console.log(this.formatList);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },

    //点击翻页
    handleCurrentChange(val) {
      //console.log(`当前页: ${nowPage}`);
      // this.toListData((val - 1) * 20, val * 20);
      if (this.format == "全部") {
        this.getCateResourcesList(val);
      } else {
        this.postCateResourcesFormatList(this.formatIndex, this.format, false);
      }

      //回到顶部
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    //将列表传8条到listData
    toListData(start, end) {
      this.newList = this.resourcesList.slice(start, end);
    }
  },
  //增加控件
  components: {
    ScrollBar,
    notFound
  }
};
</script>

<style scoped lang="css">
.container,
.tool-container {
  width: 1180px;
  overflow: hidden;
  margin: 0 auto;
}

.title-box {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
}

.img-list {
  margin-top: 20px;
  overflow: hidden;
}

.img-list li {
  float: left;
  margin: 0 20px 20px 0;
}

.img-list img:hover {
  transition: all 0.3s ease-out 0s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.img-list li a,
.plugin-list li a,
.video-list li a,
.tool-list li a {
  display: block;
  line-height: 0;
}

.img-list p a,
.plugin-list p a,
.video-list p a,
.tool-list p a {
  margin-top: 15px;
  font-size: 16px;
  line-height: 16px;
  width: 280px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.img-list img {
  width: 280px;
  height: 210px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease-out 0s;
}

.img-list li:nth-child(4n),
.plugin-list li:nth-child(4n),
.video-list li:nth-child(4n),
.tool-list li:nth-child(5n) {
  margin-right: 0;
}

.img-list .thumbnail .info,
.plugin-list .thumbnail .info,
.tool-list .thumbnail .info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  opacity: 0;
  transition: opacity 0.2s;
}

.pagination {
  padding: 10px 0;
}

/*格式分类*/

.design_format {
  margin: 24px 0;
  display: flex;
  align-items: center;
  color: #333;
}

.design_format span {
  font-weight: 400;
  margin-right: 10px;
  font-size: 18px;
}

.format_btn {
  display: inline-block;
  height: 28px;
  padding: 0 10px;
  border-radius: 4px;
  margin-right: 10px;
  line-height: 28px;
  transition: all 0.3s ease-out 0s;
}

.format_btn_active {
  background: #458cff;
  color: #fff !important;
  transition: all 0.3s ease-out 0s;
}

.format_btn:hover {
  background: #d3dce6;
  color: #fff;
  transition: all 0.3s ease-out 0s;
}

.design_format a:link {
  text-decoration: none;
  color: #5e6d82;
}

/*格式分类*/

@media screen and (max-width: 760px) {
  .container {
    width: 100%;
  }
  .title-box {
    margin-left: 2%;
  }
  .img-list li {
    margin: 0 2% 4%;
    width: 46%;
  }
  .img-list p a,
  .plugin-list p a,
  .video-list p a {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .img-list img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
