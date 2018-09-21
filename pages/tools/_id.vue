<template>
    <div class="homeBody">
        <div class="container">
            <div class="left">
                <div class="content">
                    <div class="title-box">
                        <img v-lazy="icon" :alt="toolsData.toolsTitle">
                        <h3>{{toolsData.toolsTitle}}</h3>
                    </div>
                    <div class="introduction">{{toolsData.toolsIntroduction}}</div>
                    <div class="details" v-html="toolsData.toolsContent"></div>
                </div>
                <div class="problem">
                    <div class="problem-title">
                        <span class="problem-line"></span>
                        <h3>常见问题</h3>
                    </div>
                    <div class="problem-content">
                        <ol>
                            <li>如遇：<code>「xxx.app已损坏，打不开。你应该将它移到废纸篓」</code>，并非你安装的软件已损坏，而是Mac系统的安全设置问题。详见：<a href="http://xclient.info/a/74559ea2-7870-b992-ed53-52a9d988e382.html" target="_blank">MAC应用无法打开或文件损坏的处理方法</a></li>
                            <li>激活工具在新系统10.12中打不开。参照 <a href="https://5windy.com/tools/16" target="_blank">让Special-K系列Patch工具运行在macOS sierra 10.12上</a> 与 <a href="https://5windy.com/tools/17" target="_blank">让CORE Keygen系列注册机成功运行在macOS sierra 10.12上的方法</a></li>
                            <li>关于激活方法，大部分文章都对不同版本做了不同的激活说明。不过，最终还是以dmg包中的实际情况为准，如果里面只有单独的 .app或者.pkg文件，说明不需要做任何激活操作。</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="right">
                <!-- 下载框 -->
                <div class="download-box">
                    <a href="javascript:;" class="download-btn download-box-btn" @click="dialogVisible = true">下载应用</a>
                    <a href="javascript:;" class="pay-btn download-box-btn" @click="payMe = true">打赏站长</a>
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
        <!-- 下载弹出框 -->
        <el-dialog title="网盘下载" :visible.sync="dialogVisible" width="80%" custom-class="cloud_dialog">
    
            <el-table :data="downloadData" style="width:100%" v-if="downloadData!=0">
                <el-table-column label="系统" min-width="80">
                    <template slot-scope="scope">
                                <i class="tag-img" :class="downloadData[scope.$index].drive_type==1?'mac':'microsoft'"></i>
</template>
                </el-table-column>
                <el-table-column prop="version" label="版本号" min-width="130">
                </el-table-column>
                <el-table-column prop="language" label="语言" min-width="80">
                </el-table-column>
                <el-table-column prop="update_time" label="更新时间" min-width="160">
                </el-table-column>
                <el-table-column prop="file_size" label="文件大小" min-width="80">
                </el-table-column>
                <el-table-column prop="drive_pw" label="下载密码" min-width="80">
                </el-table-column>
                <el-table-column label="操作" min-width="190">
<template slot-scope="scope">
    <a href="javascript:;" style="margin-right:10px;" v-clipboard="downloadData[scope.$index].drive_pw" @success="onCopy(scope.$index)" @error="onError(scope.$index)">
        <el-button size="mini" v-if="downloadData[scope.$index].drive_pw">
            <span v-if="clipboardVal!=scope.$index&&clipboardVal!='err'">复制密码</span>
            <span class="clipboardVal-success" v-if="clipboardVal==scope.$index">复制成功</span>
            <span class="clipboardVal-err" v-if="clipboardVal=='err'">复制失败</span>
        </el-button>
    </a>
    <a :href="downloadData[scope.$index].drive_url" target="_blank" @click="getToolsDownloads(scope.$index, downloadData)">
        <el-button type="primary" size="mini">前往下载</el-button>
    </a>
</template>
                </el-table-column>
            </el-table>
    
            <span v-if="downloadData==0">此资源没有网盘链接哟~不好意思呀。</span>
        </el-dialog>
        <!-- 下载弹出框 -->
        <!-- 打赏弹窗 -->
        <el-dialog title="打赏站长" custom-class="pay-dialog" :visible.sync="payMe" width="75%" center>  
            <div style="text-align: center;" >
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
                toolsData: "",
                //该工具的tag
                tags: [],
                //该工具的icon
                icon: "",
                //工具类型
                cate: "",
                //title页面标题
                title: "MAC工具详情",
    
                //网盘下载地址
                downloadData: [],
                //是否显示弹出框
                dialogVisible: false,
                //是否显示打赏弹窗
                payMe: false,
                //复制剪切板按钮文字
                clipboardVal: "no"
            };
        },
        //自定义头部
        head() {
            return {
                title: this.title,
                meta: [{
                        hid: "有爱设计",
                        name: "keywords",
                        content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发"
                    },
                    {
                        hid: "有爱设计",
                        name: "description",
                        content: this.toolsData.toolsIntroduction
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
            this.getToolsDetails();
            this.getToolsDownload();
            //访问量
            this.getToolsLooked();
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
            getToolsDetails() {
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
                    .dispatch("getToolsDetails", params)
                    .then(response => {
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
                            //将工具的icon传入data
                            this.icon = this.ip + "/media/" + res.toolsIcon;
                        } else {
                            alert("网络错误");
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        this.$router.push({
                            path: "/404"
                        });
                    });
            },
            //请求素材网盘地址
            getToolsDownload() {
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
                    .dispatch("getToolsDownload", params)
                    .then(response => {
                        let res = response.data;
                        if (res.state != "err") {
                            //console.log(res);
                            this.downloadData = res;
                        } else {
                            this.downloadData = 0;
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        //this.$router.push({ path: '/404' });
                    });
            },
            //素材访问量
            getToolsLooked() {
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
                    .dispatch("getToolsLooked", params)
                    .then(response => {
                        let res = response.data;
                        //以后有需要添加显示浏览量
                    })
                    .catch(err => {
                        console.error(err);
                        //this.$router.push({ path: '/404' });
                    });
            },
            //素材下载量
            getToolsDownloads(index, rows) {
                //console.log(rows);
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
                    .dispatch("getToolsDownloads", params)
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
        background: #eff2f7;
        padding: 20px;
        color: #5e6d82;
        font-size: 14px;
        line-height: 24px;
        margin-top: 20px;
    }
    
    .details {
  
        margin-top: 40px;

    }
    
    .details p {
        width: 840px;
        font-size: 14px !important;
        margin: 10px 0;
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
    
    
    /*网盘弹窗*/
    
    .cloud_dialog {
        min-width: 320px;
    }
    
    .cloud_down {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .cloud_down p {
        line-height: 20px;
        color: #00c58c;
    }
    
    .baiduyun {
        display: flex;
        align-items: center;
    }
    
    .baiduyun span {
        margin-left: 10px;
        line-height: 20px;
        display: inline-block;
    }
    
    .clipboard-btn:link {
        color: #458cff;
        text-decoration: underline;
        margin-left: 20px;
    }
    
    .clipboardVal-success {
        color: #00c58c;
    }
    
    .clipboardVal-err {
        color: #f84f4f;
    }
    
    
    /*网盘弹窗*/
    
    @media screen and (max-width: 760px) {
        .container {
            width: 100%;
        }
        .left {
            width: 100%;
            border-radius: 0;
        }
        .right {
            width: 100%;
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