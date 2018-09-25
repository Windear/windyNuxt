export default {
    changyan() {
        (function () {
            var appid = 'cyt3crepq';
            var conf = 'prod_a13b2e3f57b739f379a9d121e340340d';
            var width = window.innerWidth || document.documentElement.clientWidth;
            if (width < 960) {
                // var hm = document.createElement("script");
                // hm.src = "https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=" + appid + "&conf=" + conf;
                // var s = document.getElementsByTagName("script")[0];
                // s.parentNode.insertBefore(hm, s);
                // //window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
                var loadJs = function (d, a) { var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement; var b = document.createElement("script"); b.setAttribute("type", "text/javascript"); b.setAttribute("charset", "UTF-8"); b.setAttribute("src", d); if (typeof a === "function") { if (window.attachEvent) { b.onreadystatechange = function () { var e = b.readyState; if (e === "loaded" || e === "complete") { b.onreadystatechange = null; a() } } } else { b.onload = a } } c.appendChild(b) }; loadJs("https://changyan.sohu.com/upload/changyan.js", function () { window.changyan.api.config({ appid: appid, conf: conf }) });
            } else {
                var loadJs = function (d, a) { var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement; var b = document.createElement("script"); b.setAttribute("type", "text/javascript"); b.setAttribute("charset", "UTF-8"); b.setAttribute("src", d); if (typeof a === "function") { if (window.attachEvent) { b.onreadystatechange = function () { var e = b.readyState; if (e === "loaded" || e === "complete") { b.onreadystatechange = null; a() } } } else { b.onload = a } } c.appendChild(b) }; loadJs("https://changyan.sohu.com/upload/changyan.js", function () { window.changyan.api.config({ appid: appid, conf: conf }) });
            }
        })();
    }
}