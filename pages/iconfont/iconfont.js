(function(window){var svgSprite='<svg><symbol id="icon-sggg" viewBox="0 0 1024 1024"><path d="M999.424 142.976l-533.056 755.616c0.288 9.248-3.04 18.496-10.688 24.896-13.184 11.008-32.832 9.184-43.84-4l-385.184-337.92c-11.008-13.184-9.184-32.832 4-43.84s32.864-9.216 43.84 4l350.176 307.2 523.328-741.856c9.984-14.176 29.6-17.6 43.808-7.712s17.6 29.44 7.616 43.584z"  ></path></symbol><symbol id="icon-xiangxiajiantoushixin" viewBox="0 0 1024 1024"><path d="M512 735.808383 959.616766 288.191617 64.383234 288.191617Z"  ></path></symbol><symbol id="icon-ARROW" viewBox="0 0 1024 1024"><path d="M318.73024 836.32128a20.41856 20.41856 0 0 0 28.95872 0l307.2-307.2a20.45952 20.45952 0 0 0 0-28.95872l-307.2-307.2a20.45952 20.45952 0 1 0-28.95872 28.95872l292.72064 292.72064-292.72064 292.72064a20.45952 20.45952 0 0 0 0 28.95872z" fill="#231F20" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)