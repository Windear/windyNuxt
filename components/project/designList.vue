<template>
  <div class="list">
    <div class="listHeader">
      <a href="javascript:;" v-for="(title,index) in listTitle" :key="title.index" :class="{'active':listTitleId==index}" @click="clickPage(index)">{{title.text}}</a>
    </div>
    <div class="listBody" v-for="(body,index) in listTitle" :key="body.id" v-if="listTitleId==index">
      <div class="bodyitem" v-if="body.text=='UI设计'">
        <div>
          <div class="listBox" v-for="list in UIlist" :key="list.id" @click="openDetails(list.projectId)">
            <div class="listMask"></div>
            <div class="listImg" :style="'background-image: url('+ ip +'/media/' + list.listImg + ');'"></div>
            <div class="listText">{{list.listText}}</div>
            <div class="listDate">{{list.listDate}}</div>
            <div class="listLine"></div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" :page-size="12" layout="total,prev, pager, next" :total="UIlistData.length" style="margin-left: 5px;white-space: normal;"></el-pagination>
        </div>
      </div>
      <div class="bodyitem" v-if="body.text=='插画/原画'">
        <div>
          <div class="listBox" v-for="list in CGlist" :key="list.id" @click="openDetails(list.projectId)">
            <div class="listMask"></div>
            <div class="listImg" :style="'background-image: url('+ ip +'/media/' + list.listImg + ');'"></div>
            <div class="listText">{{list.listText}}</div>
            <div class="listDate">{{list.listDate}}</div>
            <div class="listLine"></div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" :page-size="12" layout="total,prev, pager, next" :total="CGlistData.length" style="margin-left: 5px;white-space: normal;"></el-pagination>
        </div>
      </div>
      <div class="bodyitem" v-if="body.text=='平面设计'">
        <div>
          <div class="listBox" v-for="list in PMlist" :key="list.id" @click="openDetails(list.projectId)">
            <div class="listMask"></div>
            <div class="listImg" :style="'background-image: url('+ ip +'/media/' + list.listImg + ');'"></div>
            <div class="listText">{{list.listText}}</div>
            <div class="listDate">{{list.listDate}}</div>
            <div class="listLine"></div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" :page-size="12" layout="total,prev, pager, next" :total="PMlistData.length" style="margin-left: 5px;white-space: normal;"></el-pagination>
        </div>
      </div>
      <div class="bodyitem" v-if="body.text=='3D设计'">
        <div>
          <div class="listBox" v-for="(list,index) in DDDlist" :key="index" @click="openDetails(list.projectId)">
            <div class="listMask"></div>
            <div class="listImg" :style="'background-image: url('+ ip +'/media/' + list.listImg + ');'"></div>
            <div class="listText">{{list.listText}}</div>
            <div class="listDate">{{list.listDate}}</div>
            <div class="listLine"></div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" :page-size="12" layout="total,prev, pager, next" :total="DDDlistData.length" style="margin-left: 5px;white-space: normal;"></el-pagination>
        </div>
      </div>
      <div class="bodyitem" v-if="body.text=='动效设计'">
        <div>
          <div class="listBox" v-for="(list,index) in DXlist" :key="index" @click="openDetails(list.projectId)">
            <div class="listMask"></div>
            <div class="listImg" :style="'background-image: url('+ ip +'/media/' + list.listImg + ');'"></div>
            <div class="listText">{{list.listText}}</div>
            <div class="listDate">{{list.listDate}}</div>
            <div class="listLine"></div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" :page-size="12" layout="total,prev, pager, next" :total="DXlistData.length" style="margin-left: 5px;white-space: normal;"></el-pagination>
        </div>
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
      listTitleId: 0,
      //设计分类
      listTitle: [],
      //过滤后的UI设计列表
      UIlistData: [],
      UIlist: [],
      //过滤后的插画设计列表
      CGlistData: [],
      CGlist: [],
      //过滤后的平面设计列表
      PMlistData: [],
      PMlist: [],
      //过滤后的3D设计列表
      DDDlistData: [],
      DDDlist: [],
      //过滤后的动效设计列表
      DXlistData: [],
      DXlist: [],
      //直接返回的设计列表
      listsDatas: [],

    }
  },
  //父控件传过来的参数
  props: {

  },
  //监听函数
  wacth: {

  },
  created() {

  },
  //进入页面执行的函数
  mounted() {
    this.getDesignCate();
    this.getDesignList();
  },
  //定义函数
  methods: {
    //请求设计分类
    getDesignCate() {
      //this.params.touser = this.$store.state.userNameList;
      let params = "";
      this.$store.dispatch('getDesignCate', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          //console.log(res);
          this.listTitle = res;
        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    //请求设计列表
    getDesignList() {
      //this.params.touser = this.$store.state.userNameList;
      let params = "";
      this.$store.dispatch('getDesignList', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          //console.log(res);
          this.listsDatas = res;
          this.toList();
          this.toListData(0, 12);
          //this.newList();
        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    //将列表分到各类list中去
    toList() {
      for (let i = 0; i < this.listsDatas.length; i++) {
        //console.log(this.listsDatas[i].cate);
        if (this.listsDatas[i].cate == "1") {
          this.UIlistData = this.listsDatas[i].list
        }
        if (this.listsDatas[i].cate == "2") {
          this.CGlistData = this.listsDatas[i].list
        }
        if (this.listsDatas[i].cate == "3") {
          this.PMlistData = this.listsDatas[i].list
        }
        if (this.listsDatas[i].cate == "4") {
          this.DDDlistData = this.listsDatas[i].list
        }
        if (this.listsDatas[i].cate == "5") {
          this.DXlistData = this.listsDatas[i].list
        }
      }
    },
    //点击标题
    clickPage(index) {
      this.listTitleId = index;
      this.toListData(0, 12);
    },
    //将列表传8条到listData
    toListData(start, end) {
      this.UIlist = this.UIlistData.slice(start, end);
      this.PMlist = this.PMlistData.slice(start, end);
      this.CGlist = this.CGlistData.slice(start, end);
      this.DDDlist = this.DDDlistData.slice(start, end);
      this.DXlist = this.DXlistData.slice(start, end);
    },
    //点击翻页
    handleCurrentChange(val) {
      //console.log(`当前页: ${nowPage}`);
      this.toListData((val - 1) * 12, val * 12);
      //回到顶部
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    //打开详情页
    openDetails(index) {
      //alert(index);
      //this.$store.commit('updateProjectId', index);
      localStorage.setItem("projectId", index);
      this.$router.push({ path: '/project/' + index, query: { projectId: index } });
      //this.$router.push({ path: '/designDetails/:projectId' });
    },

    newList() {
      var cates = {};
      // 按 list 中 type 的顺序生成新的列表
      // 每个元素都是一个 { type, items }
      this.listsDatas.forEach(function(item) {
        let typeItems = cates[item.cate];
        // typeItems 无值说明映射表里还没加入这个 type
        if (!typeItems) {
          // 产生一个新的 items 列表
          typeItems = [];
          // 将 type 这个 items 列表加入映射表
          cates[item.cate] = typeItems;
          // 因为是个新的 type，所以加入 newList
          this.newList.push({
            cate: item.cate,
            items: typeItems
          });
        }
        // 这里 items 就是按类型找到的元素组
        // 在 items 中加入当前 item
        typeItems.push(item);
      });
      console.log(typeItems)
    },



  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.pagination {
  position: relative;
  bottom: 0;
}

.bodyitem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.listBody {}

.listBox {
  width: 280px;
  margin: 10px;
  float: left;
}

.listBox:hover .listLine {
  background: #4888FC;
  width: 70px;
  transition: all 0.3s ease-out 0s;
}

.listMask {
  width: 280px;
  height: 220px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  position: absolute;
  display: none;
  transition: all 0.3s ease-out 0s;
}

.listBox:hover .listMask {
  display: inline-block;
  transition: all 0.3s ease-out 0s;
}

.listImg {
  width: 280px;
  height: 220px;
  background: #8492A6;
  border-radius: 4px;
  background-size: 100%;
}

.listText {
  font-size: 18px;
  color: #475669;
  margin: 20px 0 10px;
  line-height: 20px;
}

.listDate {
  font-size: 12px;
  color: #8492A6;
  margin-bottom: 5px;
}

.listLine {
  background: #D3DCE6;
  width: 35px;
  height: 2px;
  transition: all 0.3s ease-out 0s;
}

.list {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}

.listHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
}

.listHeader a {
  padding: 8px 30px;
  margin: 0 5px;
  transition: all 0.3s ease-out 0s;
  color: #475669;
  border: 1px solid transparent;
  text-decoration: none;
  line-height: 16px;
  font-size: 14px;
  display: inline-block;
}

.listHeader a.active,
.listHeader a:hover {
  background: #324057;
  color: #fff;
  border: 1px solid #324057;
}



/*当屏幕尺寸小于600px时，应用下面的CSS样式*/

@media screen and (max-width: 760px) {
  .list {
    width: 100%;
  }
  .listHeader {
    display: inline;
    width: 100%;
    height: 44px;
    /*position: fixed;*/
    margin-bottom: 20px;
    background: #EFF2F7;
    overflow-x: scroll;
     overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    line-height: 44px;
  }
  .listHeader a {
    padding: 0 12px;
    height: 30px;
    margin: 0px;
    line-height: 30px;
    border-radius: 4px;
    color: #475669;
    transition: all 0s ease-out 0s;
    display: inline;
  }
  .listHeader a:hover {
    background: #fff;
    color: #324057;
    border: 0px;
  }
  .listBox:hover .listMask {
    display: none;
    transition: all 0.3s ease-out 0s;
  }
  .listHeader a.active {
    background: #EFF2F7;
    color: #20A0FF;
    border: 0px;
  }
  .listBox {
    margin: 0 2% 4%;
    width: 45%;
  }
  .listMask {
    margin: 0 2% 4%;
    width: 45%;
    display: none;
  }
  .listImg {
    margin: 0 2% 4%;
    width: 100%;
    height: 140px;
  }
  .listText {
    margin: 0 2% 4%;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 24px;
  }
  .listDate {
    margin: 0 2% 4%;
  }
  .listLine {
    margin: 0 2% 4%;
  }
}

</style>
