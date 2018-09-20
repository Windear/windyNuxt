<template>
    <div class="homeBody">
        <div class="container">
            <div class="left">
                <!-- 图片框 -->
                <div class="image-box-left">
                    <img v-lazy="articlePicture" :alt="articleTitle">
                </div>
                <!-- 图片框 -->
                <div class="content">
                    <div class="title-box">
    
                        <h3>{{articleTitle}}</h3>
                    </div>
                    <div class="introduction">{{blogData.articleIntroduction}}</div>
                    <div class="details" v-html="blogData.articleContent"></div>
                </div>
                <!-- <div class="problem">
                            <div class="problem-title">
                                <span class="problem-line"></span>
                                <h3>常见问题</h3>
                            </div>
            
                        </div> -->
            </div>
            <div class="right">
                <!-- 图片框 -->
                <div class="image-box">
                    <img v-lazy="articlePicture" :alt="articleTitle">
                </div>
                <!-- 图片框 -->
                <!-- 下载框 -->
                <div class="download-box">
                    <!-- <a href="javascript:;" class="download-btn download-box-btn" @click="dialogVisible = true">下载应用</a> -->
                    <a href="javascript:;" class="pay-btn download-box-btn" @click="payMe = true">打赏站长</a>
                </div>
                <!-- 下载框 -->
                <!-- 信息框 -->
                <div class="essential">
                    <p class="box-title">基本信息</p>
                    <div class="box-content">
                        <span class="span-left">作者</span><span class="span-right">{{blogData.articleAuthor}}</span>
                    </div>
                    <div class="box-content">
                        <span class="span-left">类别</span><span class="span-right">{{articleCate}}</span>
                    </div>
                    <div class="box-content">
                        <span class="span-left">发布时间</span><span class="span-right">{{blogData.createTime}}</span>
                    </div>
                    <div class="box-content">
                        <span class="span-left">是否原创</span><span class="span-right">{{articleOriginal}}</span>
                    </div>
                </div>
                <!-- 信息框 -->
                <!-- 关键字框 -->
                <div class="tag">
                    <p class="box-title">标签</p>
                    <a v-for="tag in articleTag" :key="tag.id" href="javascript:;" class="tag-list">{{tag}}</a>
    
                </div>
                <!-- 关键字框 -->
            </div>
        </div>
    
        <!-- 打赏弹窗 -->
        <el-dialog title="打赏站长" custom-class="pay-dialog" :visible.sync="payMe" width="75%" center>
            <div style="text-align: center;">
                <img style="max-width:400px;width:100%;" src="~/assets/img/payMoney.png" alt="">
                <br>
                <br>
                <br>
                <span>打赏将减轻 5windy.com 服务器与加速流量负担，更好的提供优秀资源</span>
            </div>
        </el-dialog>
        <!-- 打赏弹窗 -->
    </div>
</template>

<script type="text/javascript">
    // import changyan from "@/assets/js/changyan.js"
    //引入百度统计
    import baidu from "static/js/baidu.js";
    export default {
        //该页面的控制数据
        data() {
            return {
                //ip地址
                ip: this.$store.state.ip,
                //首页列表中传来的projectId参数
                projectId: this.$route.query.projectId,
                //projectId: localStorage.getItem("projectId"),
    
                //是否显示打赏二维码
                showPayBox: false,
                //项目使用的数据`
                blogData: "",
                //该工具的tag
                articleTag: [],
                //该文章的首图
                articlePicture: "",
                //文章类型
                articleCate: "",
                //title页面标题
                articleTitle: "文章详情",
                //是否原创
                articleOriginal: "",
                //是否显示弹出框
                dialogVisible: false,
                //是否显示打赏弹窗
                payMe: false,
    
            };
        },
        //自定义头部
        head() {
            return {
                title: this.articleTitle,
                meta: [{
                        hid: "有爱设计",
                        name: "keywords",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发"
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: this.blogData.articleIntroduction
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: "欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。"
                    }
                ]
            };
        },
        created() {
            // //this.showData();
            // this.$nextTick(() => {
            //   this.changyan();
            // });
        },
        //父控件传过来的参数
        props: {},
        //监听函数
        computed: {
            bodyWidth() {
                return this.$store.getters.getBodyWidth;
            }
        },
        //进入页面执行的函数
        mounted() {
            //百度统计
            baidu.baidu("工具详情");
            //传入navBar的选择状态
            this.$store.commit("updateNavBarActive", "3");
            document.documentElement.scrollTop = 0;
            //this.changyan();
            this.getBlogDetails();
            //this.getToolsDownload();
            //访问量
            this.getBlogLooked();
            //默认footer不需要显示0
            this.$store.commit("updateFooterWidth", 0);
        },
        //定义函数
        methods: {
            // refish() {
            //   location.reload();
            // },
            changyan() {
                window.changyan.api.config({
                    appid: "cyt3crepq",
                    conf: "prod_a13b2e3f57b739f379a9d121e340340d"
                });
            },
            //请求工具详情
            getBlogDetails() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split("/").pop());
                    this.projectId = aaa;
                }
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store
                    .dispatch("getBlogDetails", params)
                    .then(response => {
                        let res = response.data;
                        if (res.state != "err" && response.status === 200) {
                            //console.log(res);
                            this.blogData = res;
                            //传入页面标题
                            this.articleTitle = res.articleTitle;
                            //将标签tag转为数组传入data
                            this.articleTag = res.articleTag.split(",");
                            //将博客类型传入data
                            this.articleCate = res.articleCate[1];
                            //将博客文章的图片传入data
                            this.articlePicture = this.ip + "/media/" + res.articlePicture;
                            //是否原创
                            this.articleOriginal = res.articleOriginal[1];
                        } else {
                            alert("网络错误");
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        // this.$router.push({
                        //     path: "/404"
                        // });
                    });
            },
    
            //素材访问量
            getBlogLooked() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split("/").pop());
                    this.projectId = aaa;
                }
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store
                    .dispatch("getBlogLooked", params)
                    .then(response => {
                        let res = response.data;
                        //以后有需要添加显示浏览量
                    })
                    .catch(err => {
                        console.error(err);
                        //this.$router.push({ path: '/404' });
                    });
            },
    
            //弹出框函数
            handleClose(done) {
                this.$confirm("确认关闭？")
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            //剪切板复制成功
            onCopy(key) {
                this.clipboardVal = key;
            },
            // 复制失败
            onError(e) {
                this.clipboardVal = "err";
            }
        },
        //增加控件
        components: {}
    };
</script>

<style lang="css">
    .homeBody {
        background: #f3f4f5;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .container {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
    }
    
    
    /* 左边框 */
    
    .left {
        width: 900px;
        float: left;
    }
    
    .image-box-left {
        display: none;
    }
    
    .image-box-left img {
        width: 100%;
    }
    
    .content {
        background: #fff;
        padding: 20px;
        border-radius: 4px;
    }
    
    .title-box {
        display: flex;
        align-items: center;
    }
    
    .title-box img {
        width: 80px;
        height: 80px;
    }
    
    .title-box h3 {
        font-size: 24px;
        /* margin-left: 20px; */
        width: 760px;
        font-weight: 400;
    }
    
    .introduction {
        background: #eff2f7;
        padding: 20px;
        color: #5e6d82;
        font-size: 14px;
        line-height: 24px;
        margin-top: 20px;
    }
    
    .details {
        max-width: 720px;
        margin-top: 40px;
        padding: 0 10px;
    }
    
    .details p {
        width: 840px;
        /* font-size: 14px !important; */
        /* margin: 10px 0; */
    }
    
    .details img {
        max-width: 720px;
    }
    
    .details a:hover,
    .details a:visited,
    .details a:link,
    .details a:active {
        color: #0089ff !important;
    }
    
    .problem {
        background: #fff;
        padding: 20px;
        border-radius: 4px;
        /* height: 100px; */
        margin-top: 20px;
    }
    
    .problem-title {
        display: flex;
        align-items: center;
    }
    
    .problem-line {
        width: 4px;
        height: 20px;
        border-radius: 2px;
        background: #0089ff;
        display: inline-block;
        margin-right: 10px;
    }
    
    .problem-content ol {
        color: #475669;
        padding-inline-start: 20px;
        font-size: 14px;
        margin-top: 20px;
    }
    
    .problem-content li {
        margin-bottom: 10px;
    }
    
    .problem-content code {
        color: #ff7676;
    }
    
    .problem-content a {
        color: #007ce7;
    }
    
    .tag-img {
        width: 16px;
        height: 16px;
        min-width: 16px;
        display: inline-block;
        /* background: #458cff; */
        margin-left: 5px;
    }
    
    .mac {
        background-image: url(~/static/img/mac_icon2.svg)
    }
    
    .microsoft {
        background-image: url(~/static/img/wr_icon.svg)
    }
    
    
    /* 左边框 */
    
    
    /* 右边框 */
    
    .right {
        /*  */
        width: 280px;
        float: right;
    }
    
    .image-box {
        background: #fff;
        width: 280px;
        padding: 20px 20px 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    
    .image-box img {
        width: 100%;
        border-radius: 4px;
    }
    
    .download-box {
        background: #fff;
        width: 280px;
        padding: 20px 20px 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    
    .download-box-btn {
        display: inline-block;
        width: 240px;
        height: 44px;
        color: #fff !important;
        font-size: 16px;
        font-weight: 400;
        border-radius: 4px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 44px;
    }
    
    .download-btn {
        background: #0089ff;
        transition: all 0.3s ease-out 0s;
    }
    
    .download-btn:hover {
        background: #007ce7;
        transition: all 0.3s ease-out 0s;
    }
    
    .pay-btn {
        background: #ff7676;
        transition: all 0.3s ease-out 0s;
    }
    
    .pay-btn:hover {
        background: #f84f4f;
        transition: all 0.3s ease-out 0s;
    }
    
    .essential {
        background: #fff;
        width: 280px;
        padding: 20px 20px 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    
    .box-title {
        font-size: 18px;
        color: #1f2d3d;
        margin-bottom: 10px;
    }
    
    .box-content {
        margin: 10px 0;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    
    .span-left {
        color: #8492a6;
    }
    
    .span-right {
        color: #475669;
    }
    
    
    /* 标签框 */
    
    .tag {
        background: #fff;
        width: 280px;
        padding: 20px 20px 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    
    .tag-list {
        display: inline-block;
        height: 32px;
        background: #f6f9fa;
        color: #95a5a6 !important;
        padding: 0 12px;
        margin: 5px 10px 5px 0;
        font-size: 14px;
        line-height: 32px;
        border-radius: 4px;
    }
    
    .pay-dialog {
        max-width: 500px;
    }
    
    
    /* 标签框 */
    
    
    /* 右边框 */
    
    @media screen and (max-width: 760px) {
        .container {
            width: 100%;
        }
        .content {
            border-radius: 0;
        }
        .image-box-left {
            background: #fff;
            width: 100%;
            padding: 20px 20px 10px;
            display: inline-block;
        }
        .left {
            width: 100%;
            border-radius: 0;
        }
        .right {
            width: 100%;
        }
        .image-box {
            width: 100%;
            display: none;
        }
        .download-box {
            width: 100%;
        }
        .download-box-btn {
            width: 100%;
        }
        .title-box img {
            min-width: 80px;
            width: 80px;
            height: 80px;
        }
        .tag {
            background: #fff;
            width: 100%;
            border-radius: 0;
        }
        .essential {
            background: #fff;
            width: 100%;
            border-radius: 0;
        }
        .details {
            width: 100%;
        }
        .details p {
            width: 100%;
        }
        .details img {
            max-width: 100%;
        }
    }
</style>