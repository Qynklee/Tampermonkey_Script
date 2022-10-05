
// ==UserScript==
// @name         Speedtest.net AutoReload to bypass LTE Limit Speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Speedtest.net AutoReload to bypass LTE Limit Speed
// @author       @Qynklee
// @match        https://www.speedtest.net/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=speedtest.net
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

function cache_clear() {
    window.location.reload(true);
    // window.location.reload(); use this if you do not remove cache
}

function loopcheck(){
    var j = GM_getValue("isAuto", 0);
    if(j == 1)
    {
        cache_clear();
    }
}

(function () {
    let INTERVAL = 30000;
    let btn = document.createElement("button");
    btn.innerHTML = "Change AutoReload";
    var tid;
    btn.addEventListener("click", function () {
        //alert("Button is clicked");
        var i = GM_getValue("isAuto", 0);
        if (i == 1) {
            GM_setValue('isAuto', 0);
            clearInterval(tid);
            btn.innerHTML = "TurnOn AutoReload";
        }
        else
        {
            GM_setValue('isAuto',1);
            tid = setInterval(loopcheck, INTERVAL);
            btn.innerHTML = "TurnOff AutoReload";
        }
    });
    document.body.appendChild(btn);
    //
    var j = GM_getValue("isAuto", 0);
    if(j == 1)
    {
        btn.innerHTML = "TurnOff AutoReload";
        tid = setInterval(loopcheck, INTERVAL);
    }
})();

