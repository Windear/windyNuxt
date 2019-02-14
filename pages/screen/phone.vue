

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
                            <a href="/screen/phone" class="mobile current">
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
                            <a href="/screen/display" class="display">
                                <i class="material-icons display">desktop_windows</i>
                                <p>显示器</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
        <div id="screenSizeMain" class="screenSizeMain-sequence">
            <!--     <div class="deviceTableTop" id="deviceTableTop">
            <table border="0" cellspacing="0" cellpadding="0" id="deviceTableTop2">
                <thead id="fixedTtitleTop">
                    <tr class="titleBox">
                        <th class="td01" valign="middle">
                            <div class="equipName equipName-mobile">
                                <em></em><span>设备名称</span><i class="sequence"></i>
                            </div>
                        </th>
                        <th class="td02" valign="middle">操作系统</th>
                        <th class="td03" valign="middle">尺寸 <font class="gray01">in</font></th>
                        <th class="td04" valign="middle">PPI</th>
                        <th class="td05" valign="middle">宽高比</th>
                        <th class="td06" valign="middle">独立像素 <font class="gray01">dp</font></th>
                        <th class="td07" valign="middle">分辨率 <font class="gray01">px</font></th>
                        <th class="td08" valign="middle">像素密度</th>
                    </tr>
                </thead>
            </table>
        </div> -->
            <div class="wrap">
                <table border="0" cellspacing="0" cellpadding="0" id="deviceTable">
                    <thead id="fixedTtitle">
                        <tr class="titleBox">
                            <th class="td01" valign="middle">
                                <div class="equipName equipName-mobile">
                                    <i class="material-icons phone">smartphone</i>
                                    <span>设备名称</span>
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
                            <td class="td01" valign="middle">iPhone XS</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">5.8</td>
                            <td class="td04" valign="middle">458</td>
                            <td class="td05" valign="middle">19 : 9</td>
                            <td class="td06" valign="middle">375 x 812</td>
                            <td class="td07" valign="middle">1125 x 2436</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                         <tr>
                            <td class="td01" valign="middle">iPhone XS Max</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">6.5</td>
                            <td class="td04" valign="middle">458</td>
                            <td class="td05" valign="middle">19 : 9</td>
                            <td class="td06" valign="middle">414 x 896</td>
                            <td class="td07" valign="middle">1242 x 2688</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPhone XR</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">6.1</td>
                            <td class="td04" valign="middle">326</td>
                            <td class="td05" valign="middle">19 : 9</td>
                            <td class="td06" valign="middle">414 x 896</td>
                            <td class="td07" valign="middle">828 x 1792</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPhone X</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">5.8</td>
                            <td class="td04" valign="middle">458</td>
                            <td class="td05" valign="middle">19 : 9</td>
                            <td class="td06" valign="middle">375 x 812</td>
                            <td class="td07" valign="middle">1125 x 2436</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPhone 8+ (8+, 7+, 6S+, 6+)</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">401</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">414 x 736</td>
                            <td class="td07" valign="middle">1242 x 2208</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPhone 8 (8, 7, 6S, 6)</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">4.7</td>
                            <td class="td04" valign="middle">326</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">375 x 667</td>
                            <td class="td07" valign="middle">750 x 1334</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">iPhone SE（SE, 5S, 5C）</td>
                            <td class="td02" valign="middle">iOS</td>
                            <td class="td03" valign="middle">4.0</td>
                            <td class="td04" valign="middle">326</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">320 x 568</td>
                            <td class="td07" valign="middle">640 x 1136</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Android One</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">4.5</td>
                            <td class="td04" valign="middle">218</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">320 x 569</td>
                            <td class="td07" valign="middle">480 x 854</td>
                            <td class="td08" valign="middle">1.5
                                <font class="gray01">hdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Google Pixel</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.0</td>
                            <td class="td04" valign="middle">441</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">411 x 731</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">2.6
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Google Pixel XL</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">534</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">411 x 731</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.5
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Moto X</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">4.7</td>
                            <td class="td04" valign="middle">312</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">720 x 1280</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Moto X 二代</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.2</td>
                            <td class="td04" valign="middle">424</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Nexus 5</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.0</td>
                            <td class="td04" valign="middle">445</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Nexus 5X</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.2</td>
                            <td class="td04" valign="middle">565</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">411 x 731</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">2.6
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Nexus 6</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.0</td>
                            <td class="td04" valign="middle">493</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">411 x 731</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.5
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Nexus 6P</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">518</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">411 x 731</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.5
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy S8</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.8</td>
                            <td class="td04" valign="middle">570</td>
                            <td class="td05" valign="middle">18.5 : 9</td>
                            <td class="td06" valign="middle">360 x 740</td>
                            <td class="td07" valign="middle">1440 x 2960</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy S8+</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.2</td>
                            <td class="td04" valign="middle">529</td>
                            <td class="td05" valign="middle">18.5 : 9</td>
                            <td class="td06" valign="middle">360 x 740</td>
                            <td class="td07" valign="middle">1440 x 2960</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy Note 4</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">515</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">480 x 853</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy Note 5</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">518</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">480 x 853</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy S5</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.1</td>
                            <td class="td04" valign="middle">432</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy S7 (S7, S6, S6 Edge)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.1</td>
                            <td class="td04" valign="middle">576</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Samsung Galaxy S7 Edge</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">534</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Smartisan T2</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">4.95</td>
                            <td class="td04" valign="middle">445</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Smartisan M1</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.15</td>
                            <td class="td04" valign="middle">428</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Smartisan M1L</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">515</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">480 x 853</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">坚果 Pro</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">403</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">OnePlus 5</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">401</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">OnePlus 3T</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">401</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Oppo R9s (R9s, R11)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">401</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Oppo R9s Plus (R9s Plus, R11 Plus)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.0</td>
                            <td class="td04" valign="middle">368</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Oppo A57</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.2</td>
                            <td class="td04" valign="middle">282</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">720 x 1280</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Oppo A59s</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">267</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">720 x 1280</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Oppo A37</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.0</td>
                            <td class="td04" valign="middle">293</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">720 x 1280</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米MIX2</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.99</td>
                            <td class="td04" valign="middle">403</td>
                            <td class="td05" valign="middle">18 : 9</td>
                            <td class="td06" valign="middle">360 x 720</td>
                            <td class="td07" valign="middle">1080 x 2160</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米MIX</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.4</td>
                            <td class="td04" valign="middle">362</td>
                            <td class="td05" valign="middle">17 : 9</td>
                            <td class="td06" valign="middle">360 x 680</td>
                            <td class="td07" valign="middle">1080 x 2040</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米Note 3</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">403</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米Note 2</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">386</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米6</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.15</td>
                            <td class="td04" valign="middle">428</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米5s</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.15</td>
                            <td class="td04" valign="middle">428</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米5s Plus</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.7</td>
                            <td class="td04" valign="middle">386</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">小米Max</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.44</td>
                            <td class="td04" valign="middle">342</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">红米Note 4 (4, Note 4X)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">403</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">红米 4 (4, 4X)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.0</td>
                            <td class="td04" valign="middle">296</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">720 x 1280</td>
                            <td class="td08" valign="middle">2.0
                                <font class="gray01">xhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Vivo X9 (X9, X9s)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">401</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">Vivo X9 Plus (X9 Plus, X9s Plus)</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.88</td>
                            <td class="td04" valign="middle">375</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">HUAWEI P10</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.1</td>
                            <td class="td04" valign="middle">432</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1080 x 1920</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">HUAWEI P10 Plus</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.5</td>
                            <td class="td04" valign="middle">540</td>
                            <td class="td05" valign="middle">16 : 9</td>
                            <td class="td06" valign="middle">360 x 640</td>
                            <td class="td07" valign="middle">1440 x 2560</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>
                        <tr>
                            <td class="td01" valign="middle">HUAWEI P20</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">5.8</td>
                            <td class="td04" valign="middle">529</td>
                            <td class="td05" valign="middle">18 : 9</td>
                            <td class="td06" valign="middle">360 x 748</td>
                            <td class="td07" valign="middle">1080 x 2244</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>    
                        <tr>
                            <td class="td01" valign="middle">HUAWEI P20 Pro</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.1</td>
                            <td class="td04" valign="middle">408</td>
                            <td class="td05" valign="middle">18 : 9</td>
                            <td class="td06" valign="middle">360 x 748</td>
                            <td class="td07" valign="middle">1080 x 2240</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>    
                        <tr>
                            <td class="td01" valign="middle">HUAWEI Mate20</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.53</td>
                            <td class="td04" valign="middle">381</td>
                            <td class="td05" valign="middle">18 : 9</td>
                            <td class="td06" valign="middle">360 x 748</td>
                            <td class="td07" valign="middle">1080 x 2244</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>    
                        <tr>
                            <td class="td01" valign="middle">HUAWEI Mate20 Pro</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">6.39</td>
                            <td class="td04" valign="middle">538</td>
                            <td class="td05" valign="middle">19 : 9</td>
                            <td class="td06" valign="middle">360 x 780</td>
                            <td class="td07" valign="middle">1440 x 3120</td>
                            <td class="td08" valign="middle">4.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>    
                        <tr>
                            <td class="td01" valign="middle">HUAWEI Mate20 X</td>
                            <td class="td02" valign="middle">Android</td>
                            <td class="td03" valign="middle">7.2</td>
                            <td class="td04" valign="middle">345</td>
                            <td class="td05" valign="middle">18 : 9</td>
                            <td class="td06" valign="middle">360 x 748</td>
                            <td class="td07" valign="middle">1080 x 2244</td>
                            <td class="td08" valign="middle">3.0
                                <font class="gray01">xxxhdpi</font>
                            </td>
                        </tr>   
                    </tbody>
                </table>
            </div>
        </div>
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
                title: "手机设计尺寸规范",
                meta: [{
                        hid: '手机设计尺寸规范',
                        name: 'keywords',
                        content: '手机设计尺寸规范'
                    },
                    {
                        hid: '手机设计尺寸规范',
                        name: 'description',
                        content: '手机设计尺寸规范'
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

