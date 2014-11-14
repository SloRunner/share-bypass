/*
The MIT License (MIT)
Copyright (c) 2014 Aleš Kalan
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

    function getStyle(x, styleProp) {
             if (x.currentStyle) var y = x.currentStyle[styleProp];
             else if (window.getComputedStyle) var y =
    document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
             return y;
         }
     
            // Get all elements on the page
         var elements = document.getElementsByClassName('image');
     
            // store the results
         var results = [],
             i = 0,
             bgIm;
     
            // iterate over the elements
         for (;elements[i];i++) {
                  // get the background-image style property
             bgIm = getStyle(elements[i], 'background-image');
     
                  // if one was found, push it into the array
             if (bgIm && bgIm !== 'none') {
                 results.push(bgIm);
             }
         }

    var loc = window.location;
    myurl = loc.hostname;
    window.onload = function(){
    if (myurl === "www.youtube.com"){
        return;
    }
    if (myurl === 'www.vdeozone.com') {
        if (!document.getElementById('video-lock').href == null) {
            window.location = document.getElementById('video-lock').href;
        }else{
        var url = document.getElementById('player').src;
     if(typeof url === 'undefined'){
          window.reload();
      }
        var b = url.substr(url.indexOf('://')+3);
        var stripUrl = b.replace('www.youtube.com/embed/', '');
        stripUrl = stripUrl.substring(0, stripUrl.indexOf('?'));
        window.location.href = "https://www.youtube.com/watch?v="+stripUrl;
        return;
        };
    };
    if (typeof results[1] === 'undefined') {
     
    return;
     
    }else{
    var domains = ['www.slovenskenovice.si', '24ur.com'];
    for (var i = 0; i < domains.length; i++) {
    if (myurl === domains[i]) {
    return;
    }else{
    if(results[1].indexOf('youtube.com') > 0){
    var stripUrl = results[1].replace('url("http://img.youtube.com/vi/', '');
         stripUrl = stripUrl.replace('0.jpg")', '');
            // view the console to see the result
           stripUrl = stripUrl.replace('/"','');
        window.location.href = "https://www.youtube.com/watch?v="+stripUrl;
    return;
        }
    };
    };
    };
    };
