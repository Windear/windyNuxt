
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
                        <h4>Android Design Guidelines</h4>
                        <h1>Android设计尺寸规范</h1>
                    </div>
    
                </div>
            </div>
        </header>
    
        <article id="designGuide">
            <div class="tabBox" id="fixedTtitle">
                <div class="wrap">
                    <a href="/screen/ios">iOS</a>
                    <a href="/screen/android" class="current">Android</a>
                </div>
            </div>
    
            <div class="wrap">
                <div class="contentBox navcur_cont">
                    <h2 id="A">字体 Typography</h2>
                    <div class="cBox01">
                        <div class="fontFamilyInfo01">
                            <p class="p01">中文字体：Source Han Sans / Noto</p>
                            <p class="p02">英文字体：Roboto</p>
                        </div>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <tr>
                                <th>元素</th>
                                <th>字重</th>
                                <th>字号</th>
                                <th>行距</th>
                                <th>字间距</th>
                            </tr>
                            <tr>
                                <td>App bar</td>
                                <td>Medium</td>
                                <td>20sp</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Buttons</td>
                                <td>Medium</td>
                                <td>15sp</td>
                                <td>-</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Headline</td>
                                <td>Regular</td>
                                <td>24sp</td>
                                <td>34dp</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>Medium</td>
                                <td>21sp</td>
                                <td>-</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Subheading</td>
                                <td>Regular</td>
                                <td>17sp</td>
                                <td>30dp</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Body 1</td>
                                <td>Regular</td>
                                <td>15sp</td>
                                <td>23dp</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Body 2</td>
                                <td>Bold</td>
                                <td>15sp</td>
                                <td>26dp</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Caption</td>
                                <td>Regular</td>
                                <td>13sp</td>
                                <td>-</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>
                    <h2 id="B">图标 icons</h2>
                    <div class="cBox01">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <tr>
                                <th>图标用途</th>
                                <th>mdpi (160dpi)</th>
                                <th>hdpi (240dpi)</th>
                                <th>xhdpi (320dpi)</th>
                                <th>xxhdpi (480dpi)</th>
                                <th>xxxhdpi (640dpi)</th>
                            </tr>
                            <tr>
                                <td>应用图标</td>
                                <td>48 x 48 px</td>
                                <td>72 x 72 px</td>
                                <td>96 x 96 px</td>
                                <td>144 x 144 px</td>
                                <td>192 x 192 px</td>
                            </tr>
                            <tr>
                                <td>系统图标</td>
                                <td>24 x 24 px</td>
                                <td>36 x 36 px</td>
                                <td>48 x 48 px</td>
                                <td>72 x 72 px</td>
                                <td>196 x 196 px</td>
                            </tr>
                        </table>
                        <h3 id="B1">应用图标 Product icons</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-a.jpg"></div>
                                    <p>方形</p>
                                    <p>高度：152dp 宽度：152dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-b.jpg"></div>
                                    <p>圆形</p>
                                    <p>直径：176dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-c.jpg"></div>
                                    <p>垂直长方形</p>
                                    <p>高度：176dp 宽度：128dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-d.jpg"></div>
                                    <p>水平长方形</p>
                                    <p>高度：128dp 宽度：176dp</p>
                                </li>
                            </ul>
                        </div>
                        <h3 id="B2">系统图标 System icons</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-a.jpg"></div>
                                    <p>方形</p>
                                    <p>高度：18dp 宽度：18dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-b.jpg"></div>
                                    <p>圆形</p>
                                    <p>直径：20dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-c.jpg"></div>
                                    <p>垂直长方形</p>
                                    <p>高度：20dp 宽度：16dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic01-d.jpg"></div>
                                    <p>水平长方形</p>
                                    <p>高度：16dp 宽度：20dp</p>
                                </li>
                            </ul>
                        </div>
                        <h3 id="B3">快捷图标 Shortcut icon</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic06-a.png"></div>
                                    <p>实际面积</p>
                                    <p>高度：44dp 宽度：44dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic06-b.png"></div>
                                    <p>总面积</p>
                                    <p>高度：48dp 宽度：48dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic06-c.png"></div>
                                    <p>系统图标尺寸</p>
                                    <p>高度：24dp 宽度：24dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic06-d.png"></div>
                                    <p>实际面积位置</p>
                                    <p>剩余高度：24dp <br>剩余宽度：24dp</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="C">单位和度量 Units and measurements</h2>
                    <div class="cBox01">
                        <div class="txt01">
                            <p>dpi =屏幕宽度（或高度）像素 / 屏幕宽度（或高度）英寸</p>
                            <p>dp =(宽度像素 x 160)/ dpi</p>
                        </div>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableList01">
                            <tr>
                                <th>名称</th>
                                <th>分辨率 px</th>
                                <th>dpi</th>
                                <th>像素比</th>
                                <th>示例 dp</th>
                                <th>对应像素</th>
                            </tr>
                            <tr>
                                <td>xxxhdpi</td>
                                <td>2160 x 3840</td>
                                <td>640</td>
                                <td>4.0</td>
                                <td>48dp</td>
                                <td>192px</td>
                            </tr>
                            <tr>
                                <td>xxhdpi</td>
                                <td>1080 x 1920</td>
                                <td>480</td>
                                <td>3.0</td>
                                <td>48dp</td>
                                <td>144px</td>
                            </tr>
                            <tr>
                                <td>xhdpi</td>
                                <td>720 x 1280</td>
                                <td>320</td>
                                <td>2.0</td>
                                <td>48dp</td>
                                <td>96px</td>
                            </tr>
                            <tr>
                                <td>hdpi</td>
                                <td>480 x 800</td>
                                <td>240</td>
                                <td>1.5</td>
                                <td>48dp</td>
                                <td>72px</td>
                            </tr>
                            <tr>
                                <td>mdpi</td>
                                <td>320 x 480</td>
                                <td>160</td>
                                <td>1.0</td>
                                <td>48dp</td>
                                <td>48px</td>
                            </tr>
                        </table>
                    </div>
    
                    <h2 id="D">UI组件布局 Element Layout</h2>
                    <div class="cBox01">
                        <h3 id="D1" style="margin-top:0;">列表 List</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic02-a.jpg"></div>
                                    <p>垂直边框和水平外边距</p>
                                    <p>边框左右外边距各16dp</p>
                                    <p>带有图标或者头像的内容有 72dp 的左边距。</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic02-b.jpg"></div>
                                    <p>垂直边距</p>
                                    <p>
                                        1. 状态栏：24dp<br> 2. 工具栏：56dp<br> 3. 子标题：48dp<br> 4. 列表项：72dp
                                    </p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic02-c.jpg"></div>
                                    <p>垂直边框和水平外边距</p>
                                    <p>边框左右外边距各16dp</p>
                                    <p>带有图标或者头像的内容有 72dp 的左边距。</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic02-d.jpg"></div>
                                    <p>垂直边距</p>
                                    <p>
                                        1. 状态栏：24dp<br> 2. 工具栏：56dp<br> 3. 标题和列表项：48dp<br> 4. 子标题：48dp<br> 5. 内容区域间的距离：8dp
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h3 id="D2">详情视图 Detail view</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic03-a.jpg"></div>
                                    <p>垂直边框和水平外边距</p>
                                    <p>边框左右外边距各16dp</p>
                                    <p>带有图标或者头像的内容有 72dp 的左边距。</p>
                                    <p>右边图标的右边距为32dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic03-b.jpg"></div>
                                    <p>垂直边距</p>
                                    <p>
                                        1. 状态栏：24dp<br> 2. 工具栏：56dp<br> 3. 内容区域间的距离：8dp<br> 4. 列表项：72dp
                                    </p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic03-c.jpg"></div>
                                    <p>垂直边框和水平外边距</p>
                                    <p>边框左右外边距各16dp</p>
                                    <p>带有图标或者头像的内容有 72dp 的左边距。</p>
                                    <p>弹出菜单与右边框的距离为56dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic03-d.jpg"></div>
                                    <p>垂直边距</p>
                                    <p>
                                        1. 列表项：48dp<br> 2. 内容区域间的距离：8dp<br> 3. 导航右边距：56dp
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <h3 id="D3">触控区域尺寸 Touch target size</h3>
                        <div class="picList01 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic04-a.jpg"></div>
                                    <p>头像：40dp</p>
                                    <p>图标：24dp</p>
                                    <p>触控区：48dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic04-b.jpg"></div>
                                    <p>实例</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic04-c.jpg"></div>
                                    <p>触控区域高度：48dp</p>
                                    <p>按钮高度：36dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic04-d.jpg"></div>
                                    <p>实例</p>
                                </li>
                            </ul>
                        </div>
                        <h3 id="D4">应用栏 App bar</h3>
                        <div class="picList01 picList01-2 clearBox">
                            <ul>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic05-a.jpg"></div>
                                    <p>
                                        应用栏高度：56dp<br> 应用栏左右内边距：16dp
                                        <br> 应用栏图标上、下、左内边距：16dp
                                        <br> 应用栏标题左内边距：72dp
                                        <br> 应用栏标题下内边距：20dp
                                    </p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic05-b.jpg"></div>
                                    <p>应用栏高度：128dp</p>
                                </li>
                                <li>
                                    <div class="imgBox"><img src="~/static/img/pic05-c.jpg"></div>
                                    <p>
                                        操作栏高度：56dp<br> 标题栏高度：80dp
                                        <br> 标题栏底部内边距：8dp
                                        <br> 描述区域高度：72dp
                                        <br> 描述区底部内边距：16dp
                                    </p>
                                </li>
                            </ul>
                        </div>
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
                                    <a href="#B">图标</a>
                                    <ul class="nav-bar nav-stacked">
                                        <li class=" ">
                                            <a href="#B1">应用图标</a>
                                        </li>
                                        <li class=" ">
                                            <a href="#B2">系统图标</a>
                                        </li>
                                        <li class=" ">
                                            <a href="#B3">快捷图标</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#C">单位和度量</a>
                                </li>
                                <li>
                                    <a href="#D">UI组件布局</a>
                                    <ul class="nav-bar nav-stacked">
                                        <li>
                                            <a href="#D1">列表</a>
                                        </li>
                                        <li>
                                            <a href="#D2">详情视图</a>
                                        </li>
                                        <li>
                                            <a href="#D3">触控区域尺寸</a>
                                        </li>
                                        <li>
                                            <a href="#D4">应用栏</a>
                                        </li>
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
                title: "Android设计尺寸规范",
                meta: [{
                        hid: 'Android设计尺寸规范',
                        name: 'keywords',
                        content: 'Android设计尺寸规范,安卓设计规范,安卓手机设计规范'
                    },
                    {
                        hid: 'Android设计尺寸规范',
                        name: 'description',
                        content: 'Android设计尺寸规范,安卓设计规范,安卓手机设计规范'
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

