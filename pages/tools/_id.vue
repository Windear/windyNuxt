<template>
    <div class="homeBody">
        <div class="container">
            <div class="left">
                <div class="content">
                    <div class="title-box">
                        <img v-lazy="ip +'/media/'+toolsData.toolsIcon" :alt="toolsData.toolsTitle">
                        <h3>{{toolsData.toolsTitle}}</h3>
                    </div>
                    <div class="introduction">{{toolsData.toolsIntroduction}}</div>
                    <div class="details" v-html="toolsData.toolsContent"></div>
                </div>
    
            </div>
            <div class="right">
                <!-- 下载框 -->
                <div class="download-box">
                    <a href="javascript:;" class="download-btn download-box-btn">下载应用</a>
                    <a href="javascript:;" class="pay-btn download-box-btn">打赏站长</a>
                </div>
                <!-- 下载框 -->
                <!-- 信息框 -->
                <div class="essential">
                    <p class="box-title">基本信息</p>
                    <div class="box-content">
                        <span class="span-left">最新版本</span><span class="span-right">{{toolsData.toolsNewVersion}}</span>
                    </div>
                    <div class="box-content">
                        <span class="span-left">类别</span><span class="span-right">{{cate}}</span>
                    </div>
                    <div class="box-content">
                        <span class="span-left">更新时间</span><span class="span-right">2018-09-17</span>
                    </div>
                </div>
                <!-- 信息框 -->
                <!-- 关键字框 -->
                <div class="tag">
                    <p class="box-title">标签</p>
                    <a v-for="tag in tags" :key="tag.id" href="javascript:;" class="tag-list">{{tag}}</a>
                </div>
                <!-- 关键字框 -->
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    // import changyan from "@/assets/js/changyan.js"
    //引入百度统计
    import baidu from 'static/js/baidu.js'
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
                toolsData: "",
                //该工具的tag
                tags: [],
                //工具类型
                cate: '',
                //title页面标题
                title: "windy设计详情",
    
                //网盘下载地址
                cloudDown: [],
                //是否显示弹出框
                dialogVisible: false,
                //复制剪切板按钮文字
                clipboardVal: 'no',
            }
        },
        //自定义头部
        head() {
            return {
                title: this.title,
                meta: [{
                        hid: '有爱设计',
                        name: 'keywords',
                        content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发'
                    },
                    {
                        hid: '有爱设计',
                        name: 'description',
                        // content: this.projectData.projectSynopsis
                    },
                    {
                        hid: '有爱设计',
                        name: 'description',
                        content: '欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。'
                    }
    
                ]
            }
        },
        created() {
            // //this.showData();
            // this.$nextTick(() => {
            //   this.changyan();
            // });
        },
        //父控件传过来的参数
        props: {
    
        },
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
            this.$store.commit('updateNavBarActive', '');
            document.documentElement.scrollTop = 0;
            //this.changyan();
            this.getToolsDetails();
            //   this.getResourcesCloud();
            //访问量
            //   this.getResourcesLooked();
            //默认footer不需要显示0
            this.$store.commit('updateFooterWidth', 0);
        },
        //定义函数
        methods: {
            // refish() {
            //   location.reload();
            // },
            changyan() {
                window.changyan.api.config({
                    appid: 'cyt3crepq',
                    conf: 'prod_a13b2e3f57b739f379a9d121e340340d'
                });
            },
            //请求工具详情
            getToolsDetails() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split('/').pop());
                    this.projectId = aaa;
                };
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getToolsDetails', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err" && response.status === 200) {
                        //console.log(res);
                        this.toolsData = res;
                        //传入页面标题
                        this.title = res.toolsTitle;
                        //将标签tag转为数组传入data
                        this.tags = res.toolsTag.split(",");
                        //将工具类型传入data
                        this.cate = res.toolsCate[1];
                    } else {
                        alert("网络错误")
                    }
                }).catch((err) => {
                    console.error(err);
                    this.$router.push({
                        path: '/404'
                    });
                });
            },
            //请求素材网盘地址
            getResourcesCloud() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split('/').pop());
                    this.projectId = aaa;
                };
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getResourcesCloud', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err") {
                        //console.log(res);
                        this.cloudDown = res;
                    } else {
                        this.cloudDown = 0;
                    }
                }).catch((err) => {
                    console.error(err);
                    //this.$router.push({ path: '/404' });
                });
            },
            //素材访问量
            getResourcesLooked() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split('/').pop());
                    this.projectId = aaa;
                };
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getResourcesLooked', params).then((response) => {
                    let res = response.data;
                    //以后有需要添加显示浏览量
                }).catch((err) => {
                    console.error(err);
                    //this.$router.push({ path: '/404' });
                });
            },
            //素材下载量
            getResourcesDownloads() {
                //如果projectId没有传过来，或者没有
                if (this.projectId === undefined) {
                    //获取该页面URL最后一个数字，并赋值给这个页面的id
                    let aaa = String(window.location.href.split('/').pop());
                    this.projectId = aaa;
                };
                //获取projectId
                let params = this.projectId;
                //let params = localStorage.getItem("projectId");
                this.$store.dispatch('getResourcesDownloads', params).then((response) => {
                    let res = response.data;
                    //以后有需要添加显示浏览量
                }).catch((err) => {
                    console.error(err);
                    //this.$router.push({ path: '/404' });
                });
            },
            //弹出框函数
            handleClose(done) {
                this.$confirm('确认关闭？')
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
                this.clipboardVal = 'err';
            },
        },
        //增加控件
        components: {
    
        }
    }
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
        margin-left: 20px;
        width: 760px;
        font-weight: 400;
    }
    
    .introduction {
        background: #EFF2F7;
        padding: 20px;
        color: #5E6D82;
        font-size: 14px;
        line-height: 24px;
        margin-top: 20px;
    }
    
    .details {
        max-width: 720px;
    }
    
    
    /* 左边框 */
    
    
    /* 右边框 */
    
    .right {
        /*  */
        width: 280px;
        float: right;
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
        color: #fff!important;
        font-size: 16px;
        font-weight: 400;
        border-radius: 4px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 44px;
    }
    
    .download-btn {
        background: #0089FF;
    }
    
    .pay-btn {
        background: #FF7676;
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
        color: #1F2D3D;
        margin-bottom: 10px;
    }
    
    .box-content {
        margin: 10px 0;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    
    .span-left {
        color: #8492A6;
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
        background: #F6F9FA;
        color: #95A5A6!important;
        padding: 0 12px;
        margin: 5px 10px 5px 0;
        font-size: 14px;
        line-height: 32px;
        border-radius: 4px;
    }
    
    
    /* 标签框 */
    
    
    /* 右边框 */
</style>