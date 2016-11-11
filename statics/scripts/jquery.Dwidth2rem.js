/**
 * Created by LONG on 2016/8/26.
 */

function checkMobile() {
    var pda_user_agent_list = new Array("2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer",
        "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990",
        "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia",
        "Opera Mini", "Opera Mobi",
        "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet",
        "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link",
        "Windows CE", "WinWAP", "Androi", "iPhone", "iPod", "iPad", "Windows Phone", "HTC");
    var pda_app_name_list = new Array("Microsoft Pocket Internet Explorer");
    var user_agent = navigator.userAgent.toString();
    for (var i = 0; i < pda_user_agent_list.length; i++) {
        if (user_agent.indexOf(pda_user_agent_list[i]) >= 0) {
            return true;
        }
    }
    var appName = navigator.appName.toString();
    for (var i = 0; i < pda_app_name_list.length; i++) {
        if (user_agent.indexOf(pda_app_name_list[i]) >= 0) {
            return true;
        }
    }
    return false;
}
//device width to rem core
var Dwidth2rem = function () {
    var _this = this;
    _this.sizeTimes = 37.5;
    _this.init = function (sizeTimes) {
        if (sizeTimes)_this.sizeTimes = sizeTimes;
        _this.calc();
        return _this;
    };
    _this.calc = function () {
        if (document.documentElement.clientWidth > 750) {
            var width = 750;
            $("body").css("width", (width + "px")).css("margin", "0 auto");
        } else {
            var width = document.documentElement.clientWidth;
        }
        if (checkMobile()) {
            $("html").css("font-size", ((width / _this.sizeTimes) + "px"));
        } else {
            $("html").css("font-size", (((width - 20) / _this.sizeTimes) + "px"));
        }
    };
    window.onresize = function () { //当屏幕尺寸变化或者手机横屏切换，重新计算rem
        _this.calc();
    }
};

