<template>
    <div class="main-body">
        <div class="search-text"> 
            <span v-if="searchVal==''">共搜索到 <span style="color:#ff7676">{{resourcesListNum+toolsListNum+blogsListNum}}</span> 条结果</span>
            <span v-if="searchVal!=''">共找到 <span style="color:#ff7676">{{resourcesListNum+toolsListNum+blogsListNum}}</span> 条关于 <span style="color:#ff7676">{{searchVal}}</span> 的结果</span>
        </div>
        
        <!-- 搜索分类栏 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 素材搜索 -->
            <el-tab-pane label="素材搜索" name="first">
                <ul class="img-list">
                    <li v-for="item in resourcesList" :key="item.id">
                        <div class="thumbnail">
                            <a :href="'/resources/data/'+item.id" target="_blank">
                                <img v-lazy="ip +'/media/' + item.picture" :key="item.picture" alt="item.title" style="display: inline;">
                            </a>
                        </div>
                        <p><a :href="'/resources/data/'+item.id" target="_blank">{{item.title}}</a></p>
                    </li>
                </ul>
                <not-found v-if="resourcesListNum==0"></not-found>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChangeResrouces" :page-size="24" layout="total,prev, pager, next" :total="resourcesListNum" style="margin-left: 5px;white-space: normal;"></el-pagination>
                </div>
            </el-tab-pane>
    
            <!-- 素材搜索 -->
            <!-- 工具搜索 -->
            <el-tab-pane label="工具搜索" name="second">
    
                <ul class="tools-list">
                    <li v-for="item in toolsList" :key="item.id">
                        <div class="box-body">
                            <a :href="'/tools/'+item.id" target="_blank">
                                <img v-lazy="ip +'/media/' + item.icon" :alt="item.title">
                                <div class="content-text">
                                    <p>{{item.title}}</p>
                                    <span>{{item.introduction}}</span>
                                    <div class="content-tag">
                                        <div class="cate" v-if="item.cate==1">应用软件</div>
                                        <div class="cate" v-if="item.cate==2">Sketch插件</div>
                                        <div class="cate" v-if="item.cate==3">网络工具</div>
                                        <div class="cate" v-if="item.cate==4">开发工具</div>
                                        <div class="cate" v-if="item.cate==5">设计工具</div>
                                        <div class="cate" v-if="item.cate==6">行业软件</div>
                                        <div class="cate" v-if="item.cate==7">安全防护</div>
                                        <div class="cate" v-if="item.cate==8">系统工具</div>
                                        <div class="cate" v-if="item.cate==9">免费精品</div>
                                        <div class="cate" v-if="item.cate==10">其他</div>
                                        <div class="sys-tag">
                                            <i v-for="icon in item.tools_sys" :key="icon.id" class="tag-img" :class="icon.drive_type==1?'mac':'microsoft'"></i>
                                            <!-- <i class="tag-img mac" ></i> -->
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <not-found v-if="toolsListNum==0"></not-found>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChangeTools" :page-size="24" layout="total,prev, pager, next" :total="toolsListNum" style="margin-left: 5px;white-space: normal;"></el-pagination>
                </div>
            </el-tab-pane>
            <!-- 工具搜索 -->
            <!-- 文章搜索 -->
            <el-tab-pane label="文章搜索" name="third">
                <a class="list" :href="'/blog/'+item.id" v-for="item in blogsList" :key="item.id" target="_blank">
                    <div class="blogList">
                        <img v-lazy="ip +'/media/' + item.picture" :alt="item.title">
                        <div class="blog-text">
                            <h3>{{item.title}}</h3>
                            <p>{{item.introduction}}</p>
                            <div class="text-other">
                                <div class="blog-cate" v-if="item.is_original==1">原创</div>
                                <div class="blog-cate" v-if="item.is_original==2">转载</div>
                                <span class="blog-author">{{item.author}}</span>·
                                <span class="blog-create-time">{{formatDate(item.create_time)}}</span>
                            </div>
                        </div>
                    </div>
                </a>
                <not-found v-if="blogsListNum==0"></not-found>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChangeBlogs" :page-size="24" layout="total,prev, pager, next" :total="blogsListNum" style="margin-left: 5px;white-space: normal;"></el-pagination>
                </div>
            </el-tab-pane>
            <!-- 文章搜索 -->
        </el-tabs>
        <!-- 搜索分类栏 -->
    </div>
</template>

<script>
    //引入百度统计
    import baidu from 'static/js/baidu.js'
    import notFound from '~/components/not_found.vue' //未找到
    export default {
        //自定义头部
        head() {
            return {
                title: "有爱搜索",
                meta: [{
                        hid: '有爱设计',
                        name: 'keywords',
                        content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发'
                    },
                    {
                        hid: '有爱设计',
                        name: 'description',
                        content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载。'
                    },
                    {
                        hid: '有爱设计',
                        name: 'description',
                        content: '欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。'
                    },
                ]
            }
        },
        data() {
            return {
                //ip地址
                ip: this.$store.state.ip,
                //选中窗口
                activeName: 'first',
                // 素材列表
                resourcesList: '',
                // 素材返回总数
                resourcesListNum: 0,
                //工具列表
                toolsList: '',
                // 工具返回总数
                toolsListNum: 0,
                //工具列表
                blogsList: '',
                // 工具返回总数
                blogsListNum: 0,
                //搜索字段
                //searchVal: '',
            };
        },
        //监听搜索值的变化
        computed: {
            searchVal() {
                return this.$store.getters.getSearchVal;
            },
        },
        watch: {
            searchVal(NewVal, oldVal) {　　　　　　　　　　
                console.log(NewVal, oldVal);
                this.searchResources(NewVal);　
                this.searchTools(NewVal);
                this.searchBlogs(NewVal);　　　　　　　　
            },
            　　　　　　　　　　　　　
        },
        //进入页面执行的函数
        mounted() {
            //菜单选择
            this.$store.commit('updateNavBarActive', '');
            //百度统计
            baidu.baidu("搜索");
            //默认footer需要显示1
            this.$store.commit('updateFooterWidth', 1);
            //搜索素材
            this.searchResources(this.searchVal);
            //搜索工具
            this.searchTools(this.searchVal);
            //搜索文章
            this.searchBlogs(this.searchVal);
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //搜索素材
            searchResources(params) {
                this.$store.dispatch('searchResources', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err") {
                        this.resourcesList = res.results;
                        this.resourcesListNum = res.count;
                    } else {
                        // alert("网络错误")
                        this.resourcesList = '';
                    }
                }).catch((err) => {
                    console.error(err);
                });
            },
            //搜索素材翻页
            handleCurrentChangeResrouces(val) {
                //回到顶部
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                this.searchResources(this.searchVal + '&p=' + val);
            },
            //搜索工具
            searchTools(params) {
                this.$store.dispatch('searchTools', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err") {
                        this.toolsList = res.results;
                        this.toolsListNum = res.count;
                    } else {
                        // alert("网络错误")
                        this.resourcesList = '';
                    }
                }).catch((err) => {
                    console.error(err);
                });
            },
            //搜索工具翻页
            handleCurrentChangeTools(val) {
                //回到顶部
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                this.searchTools(this.searchVal + '&p=' + val);
            },
            //搜索文章
            searchBlogs(params) {
                this.$store.dispatch('searchBlogs', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err") {
                        this.blogsList = res.results;
                        this.blogsListNum = res.count;
                    } else {
                        // alert("网络错误")
                        this.resourcesList = '';
                    }
                }).catch((err) => {
                    console.error(err);
                });
            },
            //搜索工具翻页
            handleCurrentChangeBlogs(val) {
                //回到顶部
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                this.searchBlogs(this.searchVal + '&p=' + val);
            },
            //格式化时间
            formatDate(time) {
                var date = new Date(time);
    
                var year = date.getFullYear(),
                    month = date.getMonth() + 1, //月份是从0开始的
                    day = date.getDate(),
                    hour = date.getHours(),
                    min = date.getMinutes(),
                    sec = date.getSeconds();
                var newTime = year + '-' +
                    month + '-' +
                    day + ' ' +
                    hour + ':' +
                    min + ':' +
                    sec;
                return newTime;
            },
    
        },
        //增加控件
        components: {
            notFound,
        }
    };
</script>

<style lang="css">
    .main-body {
        width: 1200px;
        margin: 0 auto;
    }
    
    .search-text{
        height: 60px;
        position: relative;
        line-height: 60px;
        float: right;
    }
    
    
    /* 搜索分类栏 */
    
    .el-tabs__item {
        font-size: 16px;
        color: #95a5a6;
        font-weight: 400;
        height: 60px;
        line-height: 60px;
    }
    
    .el-tabs__nav-wrap::after {
        height: 0px;
        background: #D3DCE6;
    }
    
    
    /* 搜索分类栏 */
    
    
    /*素材模块*/
    
    .img-list {
        width: 1200px;
        margin-top: 20px;
        overflow: hidden;
        display: block;
        margin: 0 auto 40px;
    }
    
    .img-list li {
        float: left;
        margin: 10px;
    }
    
    .img-list img:hover {
        transition: all 0.3s ease-out 0s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    
    .img-list li a {
        display: block;
        line-height: 0;
    }
    
    .img-list p a {
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
    
    .img-list li:nth-child(4n) {
        margin-right: 0;
    }
    
    .img-list .thumbnail .info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        min-height: 50px;
        border-radius: 0 0 4px 4px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
        opacity: 0;
        transition: opacity 0.2s;
    }
    
    .pagination {
        padding: 10px 0;
    }
    
    
    /*素材模块*/
    
    
    /* 工具模块 */
    
    .tools-box {
        background: #F3F4F5;
    }
    
    .tools-list {
        margin-top: 20px;
        width: 1200px;
        overflow: hidden;
        display: block;
        margin: 0 auto 40px;
    }
    
    .tools-list li {
        float: left;
        height: 305px;
    }
    
    .tools-list a {
        display: flex;
        align-items: center;
        flex-flow: column;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
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
    
    .mac {
        background-image: url(~/static/img/mac_icon.svg)
    }
    
    .microsoft {
        background-image: url(~/static/img/wr_icon.svg)
    }
    
    
    /* 工具模块 */
    
    
    /* 文章模块 */
    
    .list {
        /* margin-top: 20px; */
        width: 1200px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    
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
    
    
    /* 文章模块 */
    
    @media screen and (max-width: 760px) {
        .search-text{
             display: none;
        }
        /* 公共模块 */
        .main-body {
            width: 100%;
            padding: 0 2%;
            margin-top: 60px;
        }
        /* 公共模块 */
        /*素材模块*/
        .img-list {
            width: 100%;
        }
        .title-box {
            margin-left: 2%;
        }
        .img-list li {
            margin: 0 2% 4%;
            width: 46%;
        }
        .img-list p a {
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
        /*素材模块*/
        /* 工具模块 */
        .tools-list {
            width: 100%;
        }
        .tools-list li:hover .box-body {
            background: #1e262e;
            margin-top: 0;
            transition: all 0.3s ease-out 0s;
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
        /* 工具模块 */
        /* 文章模块 */
        .list {
            width: 100%;
        }
        .tools-list li:hover .box-body {
            background: #1e262e;
            margin-top: 0;
            transition: all 0.3s ease-out 0s;
        }
        /* hover事件 */
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
        /* 文章模块 */
    }
</style>