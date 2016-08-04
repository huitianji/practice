//http://caibaojian.com/browser-ios-or-android.html


//【通过判断浏览器的userAgent，用正则来判断手机是否是ios和Android客户端】

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
alert('是否是Android：' + isAndroid);
alert('是否是iOS：' + isiOS);


/*
 原文链接：http://caibaojian.com/browser-ios-or-android.html
 下面一个比较全面的浏览器检查函数，提供更多的检查内容，你可以检查是否是移动端（Mobile）、ipad、iphone、微信、QQ等。

 第一种：来自http://blog.baiwand.com/?post=176
 */

//判断访问终端
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }()
    ,
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

//【使用方法：】

//判断是否IE内核
if (browser.versions.trident) {
    alert("is IE");
}
//判断是否webKit内核
if (browser.versions.webKit) {
    alert("is webKit");
}
//判断是否移动端
if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
    alert("移动端");
}

//【检测浏览器语言】

currentLang = navigator.language; //判断除IE外其他浏览器使用语言
if (!currentLang) {//判断IE浏览器使用语言
    currentLang = navigator.browserLanguage;
}
alert(currentLang);

//【 第二种：来自http://www.fufuok.com/JS-iphone-android.html】


    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
        window.location.href = "iPhone.html";
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        window.location.href = "Android.html";
    } else {
        window.location.href = "pc.html";
    }


















