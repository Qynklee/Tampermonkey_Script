// ==UserScript==
// @name         Vlance.vn remove Login Blured
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @Qynklee
// @match        https://www.vlance.vn/*
// @icon         https://www.vlance.vn/img/Logo-vlance.svg
// @grant        none
// ==/UserScript==

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function patchBluredClassToClear()
{
    var firstLink = document.getElementsByClassName('blured')[0];
    firstLink.setAttribute('class', 'clear');
}

(function() {
    removeElementsByClass("login_view_job");
    patchBluredClassToClear();
})();


