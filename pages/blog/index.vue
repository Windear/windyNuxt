<template>
    <uploading></uploading>
    <!-- <div class="homeBody">
        <scroll-bar></scroll-bar>
        <div class="container">
            <h2 class="title-box">最新工具</h2>
            <div class="tools_format">               
                <a v-for="(cate,key) in cateList" :key="cate.id" :class="{'format_btn_active':cateIndex==key} " class="format_btn" href="javascript:;" @click="getToolsCateList(key)">{{cate}}</a>
            </div>
    
           
            
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" :page-size="24" layout="total,prev, pager, next" :total="toolsList.length" style="margin-left: 5px;white-space: normal;" :current-page.sync="currentPage"></el-pagination>
            </div>
        </div>
    </div> -->
</template>

<script type="text/javascript">
    //引入百度统计
    import baidu from "static/js/baidu.js";
    import uploading from "~/components/uploading.vue"; //建设中
    // import ScrollBar from "~/components/scroll_bar.vue"; //通知栏
    // import notFound from '~/components/not_found.vue' //未找到
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
            this.$store.commit("updateNavBarActive", "3");
            //获取工具分类列表
            //this.getToolsCate();
            //获取工具列表
            //this.getToolsCateList();
            //百度统计
            baidu.baidu("文章博客");
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
                if (cate||cate==0) {
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
        }
    };
</script>

<style scoped lang="css">
</style>