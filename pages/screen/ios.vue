
<template>
    <div>
        <header id="header">
            <div class="wrap">
                <div class="nav-bar">
                    <div class="nav-container">
                        <a href="/screen/phone">屏幕尺寸大全</a>
                        <a href="/screen/ios" class="current">设计尺寸规范</a>
                    </div>
                </div>
                <div class="titleBar">
                    <div class="nav-container">
                        <h4>iOS Design Guidelines</h4>
                        <h1>iOS设计尺寸规范</h1>
                    </div>
                </div>
            </div>
        </header>
    
        <article id="designGuide">
            <div class="tabBox" id="fixedTtitle">
                <div class="wrap">
                    <a href="/screen/ios" class="current">iOS</a>
                    <a href="/screen/android">Android</a>
                </div>
            </div>
    
            <div class="wrap">
    
                <div class="contentBox navcur_cont">
                    <h2 id="A">字体(默认) Typography</h2>
                    <div class="cBox01">
                        <div class="fontFamilyInfo01">
                            <p class="p03">中文字体：PingFang SC</p>
                            <p class="p04">英文字体：SF UI Text 、SF UI Display</p>
                            <p class="p05">其中SF UI Text适用与小于19pt的文字，SF UI Display适用于大于20pt的文字</p>
                        </div>
    
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <thead>
                                <tr>
                                    <th>元素</th>
                                    <th>字重</th>
                                    <th>字号(pt)</th>
                                    <th>行距</th>
                                    <th>字间距</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Title 1</td>
                                    <td>Light</td>
                                    <td>28pt</td>
                                    <td>34pt</td>
                                    <td>13pt</td>
                                </tr>
                                <tr>
                                    <td>Title 2</td>
                                    <td>Regular</td>
                                    <td>22pt</td>
                                    <td>28pt</td>
                                    <td>16pt</td>
                                </tr>
                                <tr>
                                    <td>Title 3</td>
                                    <td>Regular</td>
                                    <td>20pt</td>
                                    <td>24pt</td>
                                    <td>19pt</td>
                                </tr>
                                <tr>
                                    <td>Headline</td>
                                    <td>Semi-Bold</td>
                                    <td>17pt</td>
                                    <td>22pt</td>
                                    <td>-24pt</td>
                                </tr>
                                <tr>
                                    <td>Body</td>
                                    <td>Regular</td>
                                    <td>17pt</td>
                                    <td>22pt</td>
                                    <td>-24pt</td>
                                </tr>
                                <tr>
                                    <td>Callout</td>
                                    <td>Regular</td>
                                    <td>16pt</td>
                                    <td>21pt</td>
                                    <td>-20pt</td>
                                </tr>
                                <tr>
                                    <td>Subhead</td>
                                    <td>Regular</td>
                                    <td>15pt</td>
                                    <td>20pt</td>
                                    <td>-16pt</td>
                                </tr>
                                <tr>
                                    <td>Footnote</td>
                                    <td>Regular</td>
                                    <td>13pt</td>
                                    <td>18pt</td>
                                    <td>-6pt</td>
                                </tr>
                                <tr>
                                    <td>Caption 1</td>
                                    <td>Regular</td>
                                    <td>12pt</td>
                                    <td>16pt</td>
                                    <td>0pt</td>
                                </tr>
                                <tr>
                                    <td>Caption 2</td>
                                    <td>Regular</td>
                                    <td>11pt</td>
                                    <td>13pt</td>
                                    <td>6pt</td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <thead>
                                <tr>
                                    <th>元素</th>
                                    <th>字号（pt）</th>
                                    <th>字重</th>
                                    <th>字距（pt）</th>
                                    <th>类型</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nav Bar Title</td>
                                    <td>17</td>
                                    <td>Medium</td>
                                    <td>0.5</td>
                                    <td>Display</td>
                                </tr>
                                <tr>
                                    <td>Nav Bar Button</td>
                                    <td>17</td>
                                    <td>Regular</td>
                                    <td>0.5</td>
                                    <td>Display</td>
                                </tr>
                                <tr>
                                    <td>Search Bar</td>
                                    <td>13.5</td>
                                    <td>Regular</td>
                                    <td>0</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Tab Bar Button</td>
                                    <td>10</td>
                                    <td>Regular</td>
                                    <td>0.1</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Table Header</td>
                                    <td>12.5</td>
                                    <td>Regular</td>
                                    <td>0.25</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Table Row</td>
                                    <td>16.5</td>
                                    <td>Regular</td>
                                    <td>0</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Table Row Subline</td>
                                    <td>12</td>
                                    <td>Regular</td>
                                    <td>0</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Table Footer</td>
                                    <td>12.5</td>
                                    <td>Regular</td>
                                    <td>0.2</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Action Sheets</td>
                                    <td>20</td>
                                    <td>Regular / Medium</td>
                                    <td>0.5</td>
                                    <td>Display</td>
                                </tr>
                            </tbody>
                        </table>
    
                    </div>
    
                    <h2 id="B">点和像素 Points and Pixels</h2>
    
                    <div class="cBox01">
                        <div><img src="~/static/img/iosPic01.jpg"></div>
                    </div>
                    <h2 id="C">图标 Icon</h2>
    
                    <div class="cBox01">
                        <h3 style="margin-top: 0;" id="C1">应用图标 App Icon</h3>
                        <div style="margin-bottom: 40px;"><img src="~/static/img/iosPic02.jpg"></div>
    
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <thead>
                                <tr>
                                    <th>设备名称</th>
                                    <th>应用图标</th>
                                    <th>App Store图标</th>
                                    <th>Spotlight图标</th>
                                    <th>设置图标</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>iPhone X, 8+, 7+, 6s+, 6s</td>
                                    <td>180 x 180 px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>120 x 120 px</td>
                                    <td>87 x 87 px</td>
                                </tr>
                                <tr>
                                    <td>iPhone X, 8, 7, 6s, 6, SE，5s, 5c, 5, <br>4s, 4</td>
                                    <td>120 x 120 px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>80 x 80 px</td>
                                    <td>58 x 58 px</td>
                                </tr>
                                <tr>
                                    <td>iPhone 1, 3G, 3GS</td>
                                    <td>57 x 57 px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>29 x 29 px</td>
                                    <td>29 x 29 px</td>
                                </tr>
                                <tr>
                                    <td>iPad Pro 12.9, 10.5</td>
                                    <td>167 x 167 px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>80 x 80 px</td>
                                    <td>58 x 58 px</td>
                                </tr>
                                <tr>
                                    <td>iPad Air 1 & 2, Mini 2 & 4, <br> 3 & 4</td>
                                    <td>152 x 152 px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>80 x 80 px</td>
                                    <td>58 x 58 px</td>
                                </tr>
                                <tr>
                                    <td>iPad 1, 2, Mini 1</td>
                                    <td>76 x 76 px px</td>
                                    <td>1024 x 1024 px</td>
                                    <td>40 x 40 px</td>
                                    <td>29 x 29 px</td>
                                </tr>
                            </tbody>
                        </table>
    
                        <h3 id="C2">自定义图标 Custom Icons</h3>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01 tableSort">
                            <thead>
                                <tr>
                                    <th>设备名称</th>
                                    <th>导航栏和工具栏图标尺寸</th>
                                    <th>标签栏图标尺寸</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>iPhone 8+, 7+, 6+, 6s+</td>
                                    <td>66 x 66 px</td>
                                    <td>75 x 75 px　　最大144 x 96 px</td>
                                </tr>
                                <tr>
                                    <td>iPhone 8, 7, 6s, 6, SE</td>
                                    <td>44 x 44 px</td>
                                    <td>50 x 50 px　　最大96 x 64 px</td>
                                </tr>
                                <tr>
                                    <td>iPad Pro, iPad, iPad mini</td>
                                    <td>44 x 44 px</td>
                                    <td>50 x 50 px　　最大96 x 64 px</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h2 id="D">分辨率和显示规格 Resolutions and Display</h2>
                    <div class="cBox01">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01 tableSort">
                            <thead>
                                <tr>
                                    <th>设备名称</th>
                                    <th>屏幕尺寸</th>
                                    <th>PPI</th>
                                    <th>Asset</th>
                                    <th>竖屏点（point）</th>
                                    <th>竖屏分辨率（px）</th>
                                </tr>
                            </thead>
    
                            <tbody>
                                <tr>
                                    <td>iPhone X</td>
                                    <td>5.8 in</td>
                                    <td>458</td>
                                    <td>@3x</td>
                                    <td>375 x 812</td>
                                    <td>1125 x 2436</td>
                                </tr>
                                <tr>
                                    <td>iPhone 8+, 7+, 6s+, 6+</td>
                                    <td>5.5 in</td>
                                    <td>401</td>
                                    <td>@3x</td>
                                    <td>414 x 736</td>
                                    <td>1242 x 2208</td>
                                </tr>
                                <tr>
                                    <td>iPhone 8, 7, 6s, 6</td>
                                    <td>4.7 in</td>
                                    <td>326</td>
                                    <td>@2x</td>
                                    <td>375 x 667</td>
                                    <td>750 x 1334</td>
                                </tr>
                                <tr>
                                    <td>iPhone SE, 5, 5S, 5C</td>
                                    <td>4.0 in</td>
                                    <td>326</td>
                                    <td>@2x</td>
                                    <td>320 x 568</td>
                                    <td>640 x 1136</td>
                                </tr>
                                <tr>
                                    <td>iPhone 4, 4S</td>
                                    <td>3.5 in</td>
                                    <td>326</td>
                                    <td>@2x</td>
                                    <td>320 x 480</td>
                                    <td>640 x 960</td>
                                </tr>
                                <tr>
                                    <td>iPhone 1, 3G, 3GS</td>
                                    <td>3.5 in</td>
                                    <td>163</td>
                                    <td>@1x</td>
                                    <td>320 x 480</td>
                                    <td>320 x 480</td>
                                </tr>
                                <tr>
                                    <td>iPad Pro 12.9</td>
                                    <td>12.9 in</td>
                                    <td>264</td>
                                    <td>@2x</td>
                                    <td>1024 x 1366</td>
                                    <td>2048 x 2732</td>
                                </tr>
                                <tr>
                                    <td>iPad Pro 10.5</td>
                                    <td>10.5 in</td>
                                    <td>264</td>
                                    <td>@2x</td>
                                    <td>834 x 1112</td>
                                    <td>1668 x 2224</td>
                                </tr>
                                <tr>
                                    <td>iPad Pro, iPad Air 2, Retina iPad</td>
                                    <td>9.7 in</td>
                                    <td>264</td>
                                    <td>@2x</td>
                                    <td>768 x 1024</td>
                                    <td>1536 x 2048</td>
                                </tr>
                                <tr>
                                    <td>iPad Mini 4, iPad Mini 2</td>
                                    <td>7.9 in</td>
                                    <td>326</td>
                                    <td>@2x</td>
                                    <td>768 x 1024</td>
                                    <td>1536 x 2048</td>
                                </tr>
                                <tr>
                                    <td>iPad 1, 2</td>
                                    <td>9.7 in</td>
                                    <td>132</td>
                                    <td>@1x</td>
                                    <td>768 x 1024</td>
                                    <td>768 x 1024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h2 id="E">配色</h2>
                    <div class="cBox01">
                        <div><img src="~/static/img/iosPic15.jpg"></div>
                    </div>
                    <h2 id="F">UI组件布局 UI Element Layout</h2>
                    <div class="cBox01">
                        <h3 style="margin-top: 0;" id="F1">状态栏 Status Bar</h3>
                        <div><img src="~/static/img/iosPic03.jpg"></div>
                        <h3 id="F2">导航栏 Navigation Bar</h3>
                        <div><img src="~/static/img/iosPic04.jpg"></div>
                        <h3 id="F3">搜索栏 Search Bar</h3>
                        <div><img src="~/static/img/iosPic05.jpg"></div>
                        <h3 id="F4">标签栏 Tab Bar</h3>
                        <div><img src="~/static/img/iosPic06.jpg"></div>
                        <h3 id="F5">表格视图 Table View</h3>
                        <div><img src="~/static/img/iosPic07.jpg"></div>
                        <h3 id="F6">Modals</h3>
                        <div><img src="~/static/img/iosPic08.jpg"></div>
                        <h3 id="F7">行为区 Actions</h3>
                        <div><img src="~/static/img/iosPic09.jpg"></div>
                        <h3 id="F8">提示框 Alerts</h3>
                        <div><img src="~/static/img/iosPic10.jpg"></div>
                        <h3 id="F9">Segment Controls</h3>
                        <div><img src="~/static/img/iosPic11.jpg"></div>
                        <h3 id="F10">滑动条 Sliders</h3>
                        <div><img src="~/static/img/iosPic12.jpg"></div>
                        <h3 id="F11">切换按钮 Switch</h3>
                        <div><img src="~/static/img/iosPic13.jpg"></div>
                        <h3 id="F12">计步器 Stepper</h3>
                        <div><img src="~/static/img/iosPic14.jpg"></div>
                    </div>
                </div>
    
                <aside class="bs-docs-sidebar" id="bs-docs-sidebar">
                    <nav>
                        <div class="side-nav">
                            <ul id="sidebar" class="nav-bar nav-stacked">
                                <li class="active">
                                    <a href="#A">字体</a>
                                </li>
                                <li>
                                    <a href="#B">点和像素</a>
                                </li>
                                <li>
                                    <a href="#C">图标</a>
                                    <ul class="nav-bar nav-stacked">
                                        <li><a href="#C1">应用图标</a></li>
                                        <li><a href="#C2">自定义图标</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#D">分辨率和显示规格</a>
                                </li>
                                <li>
                                    <a href="#E">配色</a>
                                </li>
                                <li>
                                    <a href="#F">UI元素</a>
                                    <ul class="nav-bar nav-stacked">
                                        <li><a href="#F1">状态栏</a></li>
                                        <li><a href="#F2">导航栏</a></li>
                                        <li><a href="#F3">搜索栏</a></li>
                                        <li><a href="#F4">标签栏</a></li>
                                        <li><a href="#F5">表格视图</a></li>
                                        <li><a href="#F6">Modals</a></li>
                                        <li><a href="#F7">Actions</a></li>
                                        <li><a href="#F8">提示框</a></li>
                                        <li><a href="#F9">Segment Controls</a></li>
                                        <li><a href="#F10">滑动条</a></li>
                                        <li><a href="#F11">切换按钮</a></li>
                                        <li><a href="#F12">计步器</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>
    
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
                title: "iOS设计尺寸规范",
                meta: [{
                        hid: 'iOS设计尺寸规范',
                        name: 'keywords',
                        content: 'iOS设计尺寸规范,苹果设计规范,苹果手机设计规范'
                    },
                    {
                        hid: 'iOS设计尺寸规范',
                        name: 'description',
                        content: 'iOS设计尺寸规范,苹果设计规范,苹果手机设计规范'
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

