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
