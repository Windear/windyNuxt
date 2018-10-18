

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
                            <a href="/screen/pad" class="pad current">
                                <i class="material-icons tablet">tablet</i>
                                <p>平板</p>
                            </a>
                            <a href="/screen/watch" class="watch">
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
                                <div class="equipName equipName-pad">
                                    <i class="material-icons tablet">tablet</i>
                                    <span>设备名称</span><i class="sequence"></i>
                                </div>
                            </th>
                            <th class="td02" valign="middle">操作系统</th>
                            <th class="td03" valign="middle">尺寸
                                <font class="gray01">in</font>
                            </th>
                            <th class="td04" valign="middle">PPI</th>
                            <th class="td05" valign="middle">纵横比</th>
                            <th class="td06" valign="middle">宽
                                <font class="gray01">x</font> 高
                                <font class="gray01">dp</font>
                            </th>
                            <th class="td07" valign="middle">宽
                                <font class="gray01">x</font> 高
                                <font class="gray01">px</font>
                            </th>
                            <th class="td08" valign="middle">密度
                                <font class="gray01">dpi</font>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="td01" valign="middle">iPad mini 4 (mini 4, mini 2)</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">7.9</td>
                            <td class="td04" valign="middle">326</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">768 x 1024</td>
                            <td class="td07" valign="middle">1536 x 2048</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPad Air 2 (Air 2, Air)</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">9.7</td>
                            <td class="td04" valign="middle">264</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">768 x 1024</td>
                            <td class="td07" valign="middle">1536 x 2048</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPad Pro 9.7</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">9.7</td>
                            <td class="td04" valign="middle">264</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">768 x 1024</td>
                            <td class="td07" valign="middle">1536 x 2048</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPad Pro 10.5</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">10.5</td>
                            <td class="td04" valign="middle">264</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">834 x 1112</td>
                            <td class="td07" valign="middle">1668 x 2224</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPad Pro 12.9</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">12.9</td>
                            <td class="td04" valign="middle">264</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">1024 x 1336</td>
                            <td class="td07" valign="middle">2048 x 2732</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Google Pixel C</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">10.2</td>
                            <td class="td04" valign="middle">308</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">900 x 1280</td>
                            <td class="td07" valign="middle">1800 x 2560</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Nexus 9</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">8.9</td>
                            <td class="td04" valign="middle">288</td>
                            <td class="td05" valign="middle">4 : 3</td>
                            <td class="td06" valign="middle">768 x 1024</td>
                            <td class="td07" valign="middle">1536 x 2048</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Surface 3</td>
                            <td class="td02" valign="middle">Windows</td>
                            <td class="td03" valign="middle">10.8</td>
                            <td class="td04" valign="middle">214</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">720 x 1080</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">1.5
                                <font class="gray01">hdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米平板 2</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">7.9</td>
                            <td class="td04" valign="middle">326</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">768 x 1024</td>
                            <td class="td07" valign="middle">1536 x 2048</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
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
                title: "pad平板电脑设计尺寸规范",
                meta: [{
                        hid: 'pad平板电脑设计尺寸规范',
                        name: 'keywords',
                        content: 'pad平板电脑设计尺寸规范'
                    },
                    {
                        hid: 'pad平板电脑设计尺寸规范',
                        name: 'description',
                        content: 'pad平板电脑设计尺寸规范'
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

