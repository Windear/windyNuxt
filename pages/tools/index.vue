<template>
    <!-- <uploading></uploading> -->
    <div class="homeBody">
        <scroll-bar></scroll-bar>
        <div class="container">
            <h2 class="title-box">最新工具</h2>
            <div class="tools_format">
                <!-- <span>工具分类:</span> -->
                <a v-for="(cate,key) in cateList" :key="cate.id" :class="{'format_btn_active':cateIndex==key} " class="format_btn" href="javascript:;" @click="getToolsCateList(key)">{{cate}}</a>
            </div>
    
            <ul class="tools-list">
                <li v-for="item in newList" :key="item.toolsId">
                    <div class="box-body">
                        <a :href="'/tools/'+item.toolsId" target="_blank">
                            <img v-lazy="ip +'/media/'+item.toolsIcon" :alt="item.toolsTitle">
                            <div class="content-text">
                                <p>{{item.toolsTitle}}</p>
                                <span>{{item.toolsIntroduction}}</span>
                                <div class="content-tag">
                                    <div class="cate">{{item.toolsCate[1]}}</div>
                                    <div class="sys-tag">                                      
                                        <i v-for="icon in item.toolsSys" :key="icon.id" class="tag-img" :class="icon==1?'mac':'microsoft'"></i>
                                        <!-- <i class="tag-img mac" ></i> -->
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
    
                </li>
            </ul>
            
            <not-found v-if="notfound"></not-found>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" :page-size="24" layout="total,prev, pager, next" :total="toolsList.length" style="margin-left: 5px;white-space: normal;" :current-page.sync="currentPage"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    //引入百度统计
    import baidu from "static/js/baidu.js";
    import uploading from "~/components/uploading.vue"; //建设中
    import ScrollBar from "~/components/scroll_bar.vue"; //通知栏
    import notFound from '~/components/not_found.vue' //未找到
    export default {
        //该页面的控制数据
        data() {
            return {
                //ip地址
                ip: this.$store.state.ip,
                //是否显示notfound
                notfound: false,
                //工具类型列表
                cateList: ['全部'],
                //当前页面的工具列表
                toolsList: [],
                //分页后的新工具列表
                newList: [],
                //工具类型选中的类型筛选
                cateIndex: 0,
                //分页当前页数
                currentPage: 1
            };
        },
        //自定义头部
        head() {
            return {
                title: "MAC软件下载",
                meta: [{
                        hid: "有爱设计",
                        name: "keywords",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,MAC软件下载，小白设计师学MAC"
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载。"
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: "欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。"
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
            this.$store.commit("updateNavBarActive", "3");
            //获取工具分类列表
            this.getToolsCate();
            //获取工具列表
            this.getToolsCateList();
            //百度统计
            baidu.baidu("MAC工具");
            //默认footer需要显示1
            this.$store.commit("updateFooterWidth", 1);
        },
        //定义函数
        methods: {
            //获取工具分类列表
            getToolsCate() {
                let params = '';
                this.$store.dispatch("getToolsCate", params).then(response => {
                        let res = response.data;
                        if (res.state != "err") {
                            for (var i = 0; i < res.length; i++) {
                                this.cateList.push(res[i].val);
                            }
                        } else {
                            // alert("网络错误")
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
    
            //获取工具列表
            getToolsCateList(cate) {
                //获取projectId
                let params = 0;
                // console.log(cate)
                if (cate || cate == 0) {
                    params = cate;
                    this.cateIndex = cate;
                }
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getToolsCateList', params).then((response) => {
                    this.newList = [];
                    let res = response.data;
                    if (res.state != "err") {
                        this.notfound = false;
                        this.toolsList = res;
                        this.toListData(0, 24);
                    } else {
                        // alert("网络错误")
                        this.notfound = true;
                    }
                }).catch((err) => {
                    console.error(err);
                });
            },
    
            //点击翻页
            handleCurrentChange(val) {
                //console.log(`当前页: ${nowPage}`);
                this.toListData((val - 1) * 24, val * 24);
                //回到顶部
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            },
            //将列表传8条到listData
            toListData(start, end) {
                this.newList = this.toolsList.slice(start, end);
            }
        },
        //增加控件
        components: {
            uploading,
            ScrollBar,
            notFound,
        }
    };
</script>

<style scoped lang="css">
    .homeBody {
        background: #f3f4f5;
    }
    
    .container {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    
    .title-box {
        margin: 20px 10px 0;
        font-size: 24px;
        color: #1f2d3d;
    }
    
    
    /*格式分类*/
    
    .tools_format {
        margin: 24px 10px;
        display: flex;
        align-items: center;
        color: #333;
    }
    
    .tools_format span {
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
    
    .tools_format a:link {
        text-decoration: none;
        color: #5E6D82;
    }
    
    .format_btn_active {
        background: #458cff;
        color: #fff!important;
        transition: all 0.3s ease-out 0s;
    }
    
    .format_btn:hover {
        background: #d3dce6;
        color: #fff;
        transition: all 0.3s ease-out 0s;
    }
    
    
    /*格式分类*/
    
    
    /* 工具列表 */
    
    .tools-list {
        margin-top: 20px;
        overflow: hidden;
    }
    
    .tools-list li {
        float: left;
        height: 305px;
    }
    
    .tools-list a {
        display: flex;
        align-items: center;
        flex-flow: column;
    }
    
    .box-body {
        width: 180px;
        background: #fff;
        border-radius: 4px;
        margin: 10px;
        /* margin: 10px; */
        transition: all 0.3s ease-out 0s;
    }
    
    
    /* hover事件 */
    
    
    .tools-list li:hover .box-body {
        background: #1e262e;
        margin-top: 5px;
        transition: all 0.3s ease-out 0s;
    }
    
    .tools-list li:hover .content-text p {
        color: #fff;
        transition: all 0.3s ease-out 0s;
    }
    
    .tools-list li:hover .content-text span {
        color: #fff;
        transition: all 0.3s ease-out 0s;
    }
    
    .tools-list li:hover img {
        transform: rotate(6deg);
        transition: all 0.3s ease-out 0s;
    }
    
    .tools-list li:hover .cate {
        background: #458cff;
        transition: all 0.3s ease-out 0s;
    }
    
    
    /* hover事件 */
    
    .tools-list li img {
        width: 100px;
        height: 100px;
        margin-top: 20px;
        transition: all 0.3s ease-out 0s;
    }
    
    .content-text {
        margin-bottom: 20px;
    }
    
    .content-text p,
    .content-text span {
        width: 160px;
        display: -webkit-box;
        overflow: hidden;
        line-height: 22px;
        height: 44px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .content-text p {
        color: #1f2d3d;
        font-size: 16px;
        margin-top: 20px;
    }
    
    .content-text span {
        color: #5e6d82;
        font-size: 14px;
        margin-top: 10px;
    }
    
    .cate {
        height: 20px;
        background: #c0ccda;
        padding: 0 8px;
        display: inline-block;
        /* margin-top: 10px; */
        border-radius: 2px;
        color: #fff;
        font-size: 12px;
        line-height: 20px;
        transition: all 0.3s ease-out 0s;
    }
    
    .content-tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    
    .sys-tag {
        height: 16px;
    }
    
    .tag-img {
        width: 16px;
        height: 16px;
        min-width: 16px;
        display: inline-block;
        /* background: #458cff; */
        margin-left: 5px;
    }

    .mac{
        background-image: url(~/static/img/mac_icon.svg)
    }
    
    .microsoft{
        background-image: url(~/static/img/wr_icon.svg)
    }
    
    /* 工具列表 */
    
    @media screen and (max-width: 760px) {
        .tools-list li:hover .box-body {
            background: #1e262e;
            margin-top: 0;
            transition: all 0.3s ease-out 0s;
        }
        /* hover事件 */
        .container {
            width: 100%;
        }
        .tools_format {
            -webkit-overflow-scrolling: touch;
            -webkit-overflow-x: scroll;
            overflow-x: scroll;
            overflow-y: hidden;
        }
        .format_btn {
            width: 220px;
            white-space: nowrap;
        }
        .title-box {
            margin-left: 2%;
        }
        .tools-list li {
            margin: 0 2% 4%;
            width: 46%;
        }
        .box-body {
            width: 100%;
            margin: 0;
        }
        .tools-list p a {
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>
