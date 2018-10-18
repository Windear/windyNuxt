

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
                        <a href="/screen/watch" class="watch">
                            <i class="material-icons watch">watch</i>
                            <p>手表</p>
                        </a>
                        <a href="/screen/computer" class="laptop">
                            <i class="material-icons computer">computer</i>
                            <p>电脑</p>
                        </a>
                        <a href="/screen/display" class="display current">
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
                            <div class="equipName equipName-laptop">
                                <i class="material-icons display">desktop_windows</i>
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
                        <td class="td01" valign="middle">Apple Thunderbolt Display</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">27</td>
                        <td class="td04" valign="middle">109</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">2560 x 1440</td>
                        <td class="td07" valign="middle">2560 x 1440</td>
                        <td class="td08" valign="middle">1.0
                            <font class="gray01">mdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Dell UltraSharp HD 5K</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">27</td>
                        <td class="td04" valign="middle">218</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">2560 x 1440</td>
                        <td class="td07" valign="middle">5120 x 2880</td>
                        <td class="td08" valign="middle">2.0
                            <font class="gray01">xhdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Dell UltraSharp U2515H</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">25</td>
                        <td class="td04" valign="middle">123</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">1280 x 720</td>
                        <td class="td07" valign="middle">2560 x 1440</td>
                        <td class="td08" valign="middle">2.0
                            <font class="gray01">xhdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Dell UltraSharp U2417H</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">23.8</td>
                        <td class="td04" valign="middle">92</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">1920 x 1080</td>
                        <td class="td07" valign="middle">1920 x 1080</td>
                        <td class="td08" valign="middle">1.0
                            <font class="gray01">mdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Dell UltraSharp U2717D</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">27</td>
                        <td class="td04" valign="middle">114</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">2560 x 1440</td>
                        <td class="td07" valign="middle">2560 x 1440</td>
                        <td class="td08" valign="middle">1.0
                            <font class="gray01">mdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">Dell UltraSharp U3415W</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">34</td>
                        <td class="td04" valign="middle">110</td>
                        <td class="td05" valign="middle">21 : 9</td>
                        <td class="td06" valign="middle">3440 x 1440</td>
                        <td class="td07" valign="middle">3440 x 1440</td>
                        <td class="td08" valign="middle">1.0
                            <font class="gray01">mdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">LG 34UC98-W</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">34</td>
                        <td class="td04" valign="middle">110</td>
                        <td class="td05" valign="middle">21 : 9</td>
                        <td class="td06" valign="middle">3440 x 1440</td>
                        <td class="td07" valign="middle">3440 x 1440</td>
                        <td class="td08" valign="middle">1.0
                            <font class="gray01">mdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">LG UltraFine 4K</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">21.5</td>
                        <td class="td04" valign="middle">218</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">1920 x 1080</td>
                        <td class="td07" valign="middle">4096 x 2304</td>
                        <td class="td08" valign="middle">2.0
                            <font class="gray01">xhdpi</font>
                        </td>
                    </tr>
                    <tr>
                        <td class="td01" valign="middle">LG UltraFine 5K</td>
                        <td class="td02" valign="middle">-</td>
                        <td class="td03" valign="middle">27</td>
                        <td class="td04" valign="middle">218</td>
                        <td class="td05" valign="middle">16 : 9</td>
                        <td class="td06" valign="middle">2560 x 1440</td>
                        <td class="td07" valign="middle">5120 x 2880</td>
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
                title: "显示器设计尺寸规范",
                meta: [{
                        hid: '显示器设计尺寸规范',
                        name: 'keywords',
                        content: '显示器设计尺寸规范'
                    },
                    {
                        hid: '显示器设计尺寸规范',
                        name: 'description',
                        content: '显示器设计尺寸规范'
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

