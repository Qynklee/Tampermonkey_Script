

// ==UserScript==
// @name         Youtube Hide Next Button
// @namespace    https://qynklee.blogspot.com
// @version      0.1
// @description  try to take over the world!
// @author       Qynklee
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    //document.getElementsByClassName("ytp-next-button ytp-button")[0].remove();

    var nextBtn = document.getElementsByClassName("ytp-next-button ytp-button");
    for(var i =0; i< nextBtn.length; i++)
    {
        nextBtn[i].remove();
    }

})();


