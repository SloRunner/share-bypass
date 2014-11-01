// ==UserScript==
// @name        Share Bypass Auto Updater
// @namespace   https://github.com/SloRunner/share-bypass/
// @description Bypasses those anyoing "Share on facebook to unlock video" vids and redirects you directly to youtube video
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

$(document).ready(function(){
var script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/SloRunner/share-bypass/master/bypass.js";
document.getElementsByTagName("head")[0].appendChild(script);
});
