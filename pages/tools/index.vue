<template>
    <uploading/>
</template>

<script type="text/javascript">
    //引入百度统计
    import baidu from 'static/js/baidu.js'
    import uploading from '~/components/uploading.vue' //建设中
    export default {
    
        //该页面的控制数据
        data() {
            return {
                //ip地址
                ip: this.$store.state.ip,
    
            }
        },
        //自定义头部
        head() {
            return {
                title: "UI设计素材下载",
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
        //父控件传过来的参数
        props: {
    
        },
        //监听函数
        wacth: {
    
        },
        //进入页面执行的函数
        mounted() {
            //菜单选择
            this.$store.commit('updateNavBarActive', '2');
            //百度统计
            baidu.baidu("MAC工具");
            //默认footer需要显示1
            this.$store.commit('updateFooterWidth', 1);
        },
        //定义函数
        methods: {
    
        },
        //增加控件
        components: {
            uploading,
        }
    }
</script>