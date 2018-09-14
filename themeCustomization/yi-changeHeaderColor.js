// ==UserScript==
// @name     yi-changeHeaderColor
// @description Change of Connections Cloud's color.
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){  
 console.log("yi-changeHeaderColor: Event is fired. document.URL=" + document.URL);
 if (new RegExp("https://apps.ap.collabserv.com").test(document.URL) || new RegExp("https://apps.na.collabserv.com").test(document.URL)) {

  //var style_text = "background-color: #000;"
  var style_text = "color: #696969 !important; background-color: #d3d3d3;"

  var elt_nav_bar_include = document.getElementById('nav_bar_include');
　console.log("yi-changeHeaderColor: elt_nav_bar_include=" + elt_nav_bar_include);

  if (elt_nav_bar_include != null) {
    elt_nav_bar_include.setAttribute("style", style_text);
    
    var mo = new MutationObserver(function(records){
      
      var elt_children = elt_nav_bar_include.children;
      for (var i = 0; i < elt_children.length; i++) {
        console.log("yi-changeHeaderColor: elt_children[" + i + "]=" + elt_children[i].tagName);
        elt_children[i].setAttribute("style", style_text);

        if (i==0 && (elt_children[i].tagName == 'A' || elt_children[i].tagName == 'IMG')) {
             mo.disconnect();
        }
      }
    });
    mo.observe(elt_nav_bar_include, {childList: true, subtree: true});
  }
  else {
    console.log("yi-changeHeaderColor: document.URL=" + document.URL);
    if (new RegExp("/mycontacts").test(document.URL)) {
      console.log("yi-changeHeaderColor: /mycontants is true.");
      var elt_lotusBanner = document.getElementById('lotusBanner');
      if (elt_lotusBanner != null) {
        var mo = new MutationObserver(function(records){
          elt_nav_bar_include = document.getElementById('nav_bar_include');
          console.log("yi-changeHeaderColor: MutationObserver event is fired. [if(document.URL=/myconnect)] elt_nav_bar_include=(" + elt_nav_bar_include + ")");
          elt_nav_bar_include.setAttribute("style", style_text);
          
          var elt_children = elt_nav_bar_include.children;
          for (var i = 0; i < elt_children.length; i++) {
            console.log("yi-changeHeaderColor: elt_children[" + i + "]=" + elt_children[i].tagName);
            elt_children[i].setAttribute("style", style_text);
            
            if (i==0 && (elt_children[i].tagName == 'A' || elt_children[i].tagName == 'IMG')) {
              mo.disconnect();
            }
          }
        });
        mo.observe(elt_lotusBanner, {childList: true, subtree: true});
      }
    }
    else {
      console.log("yi-changeHeaderColor: /mycontants is false.");
      var elt_ocsBanner = document.getElementById('ocsBanner');
      if (elt_ocsBanner != null) {
        var mo = new MutationObserver(function(records){
          elt_nav_bar_include = document.getElementById('nav_bar_include');
          console.log("yi-changeHeaderColor: MutationObserver event is fired. [else] elt_nav_bar_include=(" + elt_nav_bar_include + ")");
          elt_nav_bar_include.setAttribute("style", style_text);
          
          var elt_children = elt_nav_bar_include.children;
          console.log("yi-changeHeaderColor: elt_nav_bar_include.children.length=" + elt_nav_bar_include.children.length);
          for (var i = 0; i < elt_children.length; i++) {
            console.log("yi-changeHeaderColor: elt_children[" + i + "]=" + elt_children[i].tagName);
            elt_children[i].setAttribute("style", style_text);
            
            if (i==0 && (elt_children[i].tagName == 'A' || elt_children[i].tagName == 'IMG')) {
              mo.disconnect();
            }
          }
        });
        mo.observe(elt_ocsBanner, {childList: true, subtree: true});    
      }
    }
  }

 }
});
