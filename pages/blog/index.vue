<template>
    <!-- <uploading></uploading> -->
    <div class="homeBody">
        <scroll-bar></scroll-bar>
        <div class="container">
            <h2 class="title-box">最新文章</h2>
            <div class="tools_format">
                <a v-for="(cate,key) in cateList" :key="cate.id" :class="{'format_btn_active':cateIndex==key} " class="format_btn" href="javascript:;" @click="getBlogCateList(key)">{{cate}}</a>
            </div>
    
            <a class="list" :href="'/blog/'+item.articleId" v-for="item in newList" :key="item.articleId" >
                <div class="blogList">
                    <img v-lazy="ip +'/media/'+item.articlePicture" alt="">
                    <div class="blog-text">
                        <h3>{{item.articleTitle}}</h3>
                        <p>{{item.articleIntroduction}}</p>
                        <div class="text-other">
                            <div class="blog-cate">{{item.articleOriginal[1]}}</div>·
                            <span class="blog-author">{{item.articleAuthor}}</span>·
                            <span class="blog-create-time">{{item.createTime}}</span>
                        </div>
                    </div>
                </div>
            </a>
            <not-found v-if="notfound"></not-found>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" :page-size="10" layout="total,prev, pager, next" :total="blogList.length" style="margin-left: 5px;white-space: normal;" :current-page.sync="currentPage"></el-pagination>
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
                //博客类型列表
                cateList: ['全部'],
                //当前页面的博客列表
                blogList: [],
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
                title: "有爱设计文章博客",
                meta: [{
                        hid: "有爱设计",
                        name: "keywords",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,MAC软件下载，小白设计师学MAC,UI教程,前端教程"
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载,windy的有爱教程。"
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
            this.$store.commit("updateNavBarActive", "4");
            //获取文章分类列表
            this.getBlogCate();
            //获取文章列表
            this.getBlogCateList();
            //百度统计
            baidu.baidu("文章博客");
            //默认footer需要显示1
            this.$store.commit("updateFooterWidth", 1);
        },
        //定义函数
        methods: {
            //获取博客分类列表
            getBlogCate() {
                let params = '';
                this.$store.dispatch("getBlogCate", params).then(response => {
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
    
            //获取博客列表
            getBlogCateList(cate) {
                //获取projectId
                let params = 0;
                // console.log(cate)
                if (cate || cate == 0) {
                    params = cate;
                    this.cateIndex = cate;
                }
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getBlogCateList', params).then((response) => {
                    this.newList = [];
                    let res = response.data;
                    if (res.state != "err") {
                        this.notfound = false;
                        this.blogList = res;
                        this.toListData(0, 10);
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
                this.toListData((val - 1) * 10, val * 10);
                //回到顶部
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            },
            //将列表传8条到listData
            toListData(start, end) {
                this.newList = this.blogList.slice(start, end);
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
        background: #fff;
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
    
    .format_btn:hover {
        background: #d3dce6;
        color: #fff;
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
    
    
    /*格式分类*/
    
    
    /* 文章列表 */
    
    .blogList {
        display: flex;
        padding: 20px 10px;
        border-bottom: 1px solid #F5F7FA;
        transition: all 0.3s ease-out 0s;
    }
    
    .blogList img {
        transition: all 0.3s ease-out 0s;
        width: 160px;
        min-width: 160px;
        height: 120px;
        border-radius: 4px;
        margin-right: 20px;
    }
    
    .blog-text h3 {
        transition: all 0.3s ease-out 0s;
        font-size: 20px;
        color: #1F2D3D;
        letter-spacing: 0;
        font-weight: 400;
    }
    
    .blog-text p {
        transition: all 0.3s ease-out 0s;
        /* font-family: PingFangSC-Regular; */
        font-size: 15px;
        color: #5E6D82;
        letter-spacing: 0;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .blog-text {
        transition: all 0.3s ease-out 0s;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    
    .text-other {
        transition: all 0.3s ease-out 0s;
        color: #99A9BF;
        font-size: 14px;
        letter-spacing: 0;
        display: flex;
        align-items: center;
    }
    
    .blog-cate {
        transition: all 0.3s ease-out 0s;
        display: inline-block;
        height: 20px;
        padding: 0 10px;
        font-size: 10px!important;
        border-radius: 10px;
        margin-right: 10px;
        line-height: 20px;
        transition: all 0.3s ease-out 0s;
        background: linear-gradient(105deg, #43BFFF 0%, #20A0FF 100%);
        color: #fff;
    }
    
    
    /* hover事件 */
    
    .list:hover .blogList img {
        transition: all 0.3s ease-out 0s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        /* border: #20A0FF solid 1px; */
    }
    
    .list:hover .blogList h3 {
        transition: all 0.3s ease-out 0s;
        color: #20A0FF;
    }
    
    .list:hover .blogList p {
        transition: all 0.3s ease-out 0s;
        color: #1f2d3d;
    }
    
    .list:hover .blog-cate {
        transition: all 0.3s ease-out 0s;
        box-shadow: 0 4px 6px rgba(32, 160, 255, 0.5);
    }
    
    .pagination{
        margin: 20px 0;
    }
    
    /* 文章列表 */
    
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
        /* 博客列表 */
        .blogList img {
            width: 30%;
            min-width: 30%;
            height: 18%;
        }
        .blogList h3 {
            font-size: 18px;
        }
        .blogList p {
            display: none;
        }
        /* 博客列表 */
    }
</style>