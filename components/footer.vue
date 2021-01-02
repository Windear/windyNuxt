<template>
    <div class="footer-main">
        <div class="footer-content">
            <div class="Collection-net">
                <p class="footer-title">实用网站导航</p>
                <ul>   
                    <li v-for="item in CollectionNetListP1" :key="item.id">
                        <img :src="ip+ '/media/'+item.icon" :title="item.net_name">
                        <a :href="item.link_url" :title="item.net_name" target="_blank">{{item.net_name}}</a>
    
                    </li>
                </ul>
                <ul>
                    <li v-for="item in CollectionNetListP2" :key="item.id">
                        <img :src="ip+ '/media/'+item.icon" :title="item.net_name">
                        <a :href="item.link_url" :title="item.net_name" target="_blank">{{item.net_name}}</a>
                    </li>
    
                </ul>
            </div>
            <div class="friends-net">
                <p class="footer-title">友情链接</p>
                <ul>
                    <li v-for="item in friendsNetList" :key="item.id">                      
                        <a :href="item.link_url" :title="item.net_name" target="_blank">{{item.net_name}}</a>
                    </li>
                </ul>
            </div>
            <div class="baidu-box">
                <p class="footer-title">百度熊掌号</p>
                <div class="xiongzhang">
                    <img src="~/static/img/xiongzhang_logo.png" alt="熊掌号LOGO">
                    <p class="footer-text">有爱设计Windy</p>
                    <a href="http://author.baidu.com/home/1611473353644080" target="_blank">
                        <div class="xiongzhang-btn">查看熊掌号</div>
                    </a>
                </div>
                <p class="footer-title" style="margin-top:20px;margin-bottom:10px;">加入QQ群：</p>
                <span class="footer-text">551480854</span>
            </div>
            <div class="wechat-box">
    
                <p class="footer-title">微信公众号</p>
                <div class="wechat-code">
                    <img src="~/static/img/wechat_code.png" width="100%" alt="微信二维码">
                </div>
    
                <p class="footer-title" style="margin-top:20px;">联系Windy:</p>
                <div class="nav-right-box">
                    <a href="javascript:;" @click="postWeChatCenterDialogVisibleTrue">
                        <div class="wechat chat"></div>
                    </a>
                    <a href="javascript:;" @click="qqIM">
                        <div class="qq chat"></div>
                    </a>
                    <a href="javascript:;" @click="sendEmail">
                        <div class="email chat"></div>
                    </a>
                </div>
    
            </div>
        </div>
        <div class="footer-copyright">
            <p>Copyright © 2018 ~ 2023 <a style="color:#57739A;" href="http://home.5windy.com:3000/">有爱设计</a> <a style="color:#fff;" href="http://www.beian.miit.gov.cn/" target="_blank">鄂ICP备15003372号</a> By Windy.</p>
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
                CollectionNetListP1: '',
                CollectionNetListP2: '',
                friendsNetList: ''
            }
        },
        //父控件传过来的参数
        props: {
    
        },
        //监听函数
        computed: {
    
        },
        //进入页面执行的函数
        mounted() {
            this.getColletionList(1);
            this.getColletionList(2);
            this.getFriendsNetList(1);
        },
        //定义函数
        methods: {
            //获取常用网站列表
            getColletionList(page) {
                let params = "?p=" + page;
                this.$store.dispatch('getCollectionNet', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err" && page == 1) {
                        this.CollectionNetListP1 = res.results;
                    };
                    if (res.state != "err" && page == 2) {
                        this.CollectionNetListP2 = res.results;
                    };
                }).catch((err) => {
                    console.error(err);
                });
            },
            //收取友情链接列表
            getFriendsNetList(page) {
                let params = "?p=" + page;
                this.$store.dispatch('getFriendsNet', params).then((response) => {
                    let res = response.data;
                    if (res.state != "err" && page == 1) {
                        this.friendsNetList = res.results;
                    } else {
                        // alert("网络错误")
                        this.friendsNetList = '';
                    }
                }).catch((err) => {
                    console.error(err);
                });
            },
    
            //打开微信二维码
            postWeChatCenterDialogVisibleTrue() {
                this.$store.commit('updateCenterDialogVisible', true)
                this.$store.commit('updatemodalStatus', "wechat")
            },
            //QQ聊天
            qqIM() {
                window.open('http://wpa.qq.com/msgrd?v=3&uin=197299278&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
            },
            //发送邮件
            sendEmail() {
                window.open('mailto:197299278@qq.com', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
            },
        },
        //增加控件
        components: {
    
        }
    }
</script>

<style scoped lang="css">
    .footer-main {
        background: #EFF2F7;
    }
    
    .footer-content {
        display: flex;
        width: 1200px;
        margin: auto;
        justify-content: space-between;
        padding: 40px 10px 20px;
    }
    
    .Collection-net {
        width: 480px;
    }
    
    .Collection-net ul {
        display: block;
        float: left;
        width: 220px;
        margin-right: 20px;
    }
    
    .Collection-net li {
        font-size: 14px;
        color: #1F2D3D;
        margin-top: 12px;
        display: flex;
    }
    
    .Collection-net a {
        display: inline-block;
        text-overflow: ellipsis;
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .Collection-net li img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    
    .friends-net {
        width: 260px;
    }
    
    .friends-net li {
        font-size: 14px;
        color: #1F2D3D;
        margin-top: 12px;
    }
    
    .baidu-box {
        width: 160px;
    }
    
    .wechat-box {
        width: 160px;
    }
    
    .wechat-code {
        width: 160px;
        height: 160px;
        border: #D3DCE6 solid 1px;
        border-radius: 4px;
        margin: 10px auto 0;
    }
    
    .wechat-box img {
        border-radius: 4px;
        width: 100%;
    }
    
    .footer-title {
        font-size: 16px;
        color: #5E6D82;
    }
    
    .footer-text {
        font-size: 14px;
        color: #1F2D3D;
    }
    
    .xiongzhang {
        width: 160px;
        height: 160px;
        border: #D3DCE6 solid 1px;
        border-radius: 4px;
        margin: 10px auto;
        text-align: center;
    }
    
    .xiongzhang img {
        width: 60px;
        height: 60px;
        margin-top: 20px;
    }
    
    .xiongzhang-btn {
        width: 100px;
        height: 26px;
        text-align: center;
        background: #0089FF;
        color: #fff;
        font-size: 12px;
        margin: 10px auto;
        line-height: 26px;
        border-radius: 4px;
    }
    
    .xiongzhang-btn:hover {
        background: #007ce7;
    }
    
    .nav-right-box {
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-top: 10px;
    }
    
    .chat {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        border-radius: 20px;
        border: 1px solid #fff;
        transition: all 0.3s ease-out 0s;
        box-sizing: border-box;
    }
    
    .chat:hover {
        transition: all 0.3s ease-out 0s;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }
    
    .wechat {
        background-image: url('~assets/img/wechat.png');
        background-size: 100%;
        margin-left: 0;
    }
    
    .qq {
        background-image: url('~assets/img/qq.png');
        background-size: 100%;
    }
    
    .email {
        background-image: url('~assets/img/email.png');
        background-size: 100%;
    }
    
    .footer-copyright {
        text-align: center;
        height: 40px;
        font-size: 12px;
        color: #99A9BF;
        background: #1F2D3D;
        line-height: 40px;
    }
    
    
    /*当屏幕小于760*/
    
    @media screen and (max-width: 760px) {
        .footer-content {
            width: 100%;
            padding: 40px 20px 20px;
        }
        .Collection-net {
            display: none;
        }
        .friends-net {
            display: none;
        }
    }
</style>