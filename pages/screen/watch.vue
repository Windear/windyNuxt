

<template>
    <div>
        <header id="header">
        <div class="wrap">
            <div class="nav-bar">
                    <div class="nav-container">
                        <a href="/screen/phone" class="current">屏幕尺寸大全</a>
                        <a href="/screen/ios" >设计尺寸规范</a>
                    </div>
                </div>
            <div class="titleBar">
                <div class="nav-container">
                    <h4>Screen Size</h4>
                    <h1>屏幕尺寸大全</h1>
                    <div class="terminalType">
                        <a href="/screen/phone" class="mobile">
                            <i class="material-icons phone">smartphone</i>
                            <p>手机</p>
                        </a>
                        <a href="/screen/pad" class="pad">
                            <i class="material-icons tablet">tablet</i>
                            <p>平板</p>
                        </a>
                        <a href="/screen/watch" class="watch current">
                            <i class="material-icons watch">watch</i>
                            <p>手表</p>
                        </a>
                        <a href="/screen/computer" class="laptop">
                            <i class="material-icons computer">computer</i>
                            <p>电脑</p>
                        </a>
                        <a href="/screen/display" class="display">
                            <i class="material-icons display">desktop_windows</i>
                            <p>显示器</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <article id="screenSizeMain">
        <div class="wrap">
            <table border="0" cellspacing="0" cellpadding="0" id="deviceTable">
                <thead class="" id="fixedTtitle">
                    <tr class="titleBox">
                        <th class="td01" valign="middle">
                            <div class="equipName equipName-watch">
                                <i class="material-icons watch">watch</i>
                                <em></em><span>设备名称</span>
                            </div>
                        </th>
                        <th class="td02" valign="middle">操作系统</th>
                        <th class="td03" valign="middle">尺寸
                            <font class="gray01">in</font>
                        </th>
                        <th class="td04" valign="middle">PPI</th>
                        <th class="td05" valign="middle">纵横比</th>
                        <th class="td06" valign="middle">宽 <font class="gray01">x</font> 高
                            <font class="gray01">dp</font>
                        </th>
                        <th class="td07" valign="middle">宽 <font class="gray01">x</font> 高
                            <font class="gray01">px</font>
                        </th>
                        <th class="td08" valign="middle">密度
                            <font class="gray01">dpi</font>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td01" valign="middle">Apple Watch 38mm</td>
                        <td class="td02" valign="middle">watch OS</td>
                        <td class="td03" valign="middle">1.5</td>
                        <td class="td04" valign="middle">326</td>
                        <td class="td05" valign="middle">5 : 4</td>
                        <td class="td06" valign="middle">136 x 170</td>
                        <td class="td07" valign="middle">272 x 340</td>
                        <td class="td08" valign="middle">2.0
                            <font class="gray01">xhdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Apple Watch 42mm</td>
                        <td class="td02" valign="middle">watch OS</td>
                        <td class="td03" valign="middle">1.7</td>
                        <td class="td04" valign="middle">326</td>
                        <td class="td05" valign="middle">5 : 4</td>
                        <td class="td06" valign="middle">156 x 195</td>
                        <td class="td07" valign="middle">312 x 390</td>
                        <td class="td08" valign="middle">2.0
                            <font class="gray01">xhdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Moto 360</td>
                        <td class="td02" valign="middle">Android</td>
                        <td class="td03" valign="middle">1.6</td>
                        <td class="td04" valign="middle">205</td>
                        <td class="td05" valign="middle">32 : 29</td>
                        <td class="td06" valign="middle">241 x 218</td>
                        <td class="td07" valign="middle">320 x 290</td>
                        <td class="td08" valign="middle">1.3
                            <font class="gray01">tvdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Moto 360 v2 42mm</td>
                        <td class="td02" valign="middle">Android</td>
                        <td class="td03" valign="middle">1.4</td>
                        <td class="td04" valign="middle">263</td>
                        <td class="td05" valign="middle">65 : 64</td>
                        <td class="td06" valign="middle">241 x 244</td>
                        <td class="td07" valign="middle">320 x 325</td>
                        <td class="td08" valign="middle">1.3
                            <font class="gray01">tvdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Moto 360 v2 46mm</td>
                        <td class="td02" valign="middle">Android</td>
                        <td class="td03" valign="middle">1.6</td>
                        <td class="td04" valign="middle">263</td>
                        <td class="td05" valign="middle">33 : 32</td>
                        <td class="td06" valign="middle">241 x 248</td>
                        <td class="td07" valign="middle">320 x 330</td>
                        <td class="td08" valign="middle">1.3
                            <font class="gray01">tvdpi</font>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </article>

    
    </div>
</template>


<script>
    //mouse
    import mouse from 'static/js/mouse.js'
    //引入百度统计
    import baidu from 'static/js/baidu.js'
    
    export default {
    
        //该页面的控制数据
        data() {
            return {}
        },
        //自定义头部
        head() {
            return {
                title: "智能手表设计尺寸规范",
                meta: [{
                        hid: '智能手表设计尺寸规范',
                        name: 'keywords',
                        content: '智能手表设计尺寸规范'
                    },
                    {
                        hid: '智能手表设计尺寸规范',
                        name: 'description',
                        content: '智能手表设计尺寸规范'
                    },
                ],
    
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
            mouse.mouse();
            baidu.baidu();
        },
        //定义函数
        methods: {},
        //增加控件
        components: {
    
        }
    }
</script>

<style scoped lang="css">
    @import '~/static/css/screen.css';
</style>

