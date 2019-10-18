// source --> http://en.mosdao.io/wp-content/themes/dt-the7/js/above-the-fold.min.js?ver=7.7.7 
!function(a,b,c){function d(a,b){return typeof a===b}function e(){var a,b,c,e,f,g,h;for(var i in u)if(u.hasOwnProperty(i)){if(a=[],b=u[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?w[h[0]]=e:(!w[h[0]]||w[h[0]]instanceof Boolean||(w[h[0]]=new Boolean(w[h[0]])),w[h[0]][h[1]]=e),t.push((e?"":"no-")+h.join("-"))}}function f(a){var b=y.className,c=w._config.classPrefix||"";if(z&&(b=b.baseVal),w._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}w._config.enableClasses&&(b+=" "+c+a.join(" "+c),z?y.className.baseVal=b:y.className=b)}function g(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function h(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function i(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):z?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function j(){var a=b.body;return a||(a=i(z?"svg":"body"),a.fake=!0),a}function k(a,c,d,e){var f,g,h,k,l="modernizr",m=i("div"),n=j();if(parseInt(d,10))for(;d--;)h=i("div"),h.id=e?e[d]:l+(d+1),m.appendChild(h);return f=i("style"),f.type="text/css",f.id="s"+l,(n.fake?n:m).appendChild(f),n.appendChild(m),f.styleSheet?f.styleSheet.cssText=a:f.appendChild(b.createTextNode(a)),m.id=l,n.fake&&(n.style.background="",n.style.overflow="hidden",k=y.style.overflow,y.style.overflow="hidden",y.appendChild(n)),g=c(m,a),n.fake?(n.parentNode.removeChild(n),y.style.overflow=k,y.offsetHeight):m.parentNode.removeChild(m),!!g}function l(a,b){return!!~(""+a).indexOf(b)}function m(a,b){return function(){return a.apply(b,arguments)}}function n(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?m(e,c||b):e);return!1}function o(b,c,d){var e;if("getComputedStyle"in a){e=getComputedStyle.call(a,b,c);var f=a.console;if(null!==e)d&&(e=e.getPropertyValue(d));else if(f){var g=f.error?"error":"log";f[g].call(f,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else e=!c&&b.currentStyle&&b.currentStyle[d];return e}function p(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(h(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+h(b[e])+":"+d+")");return f=f.join(" or "),k("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==o(a,null,"position")})}return c}function q(a,b,e,f){function h(){k&&(delete K.style,delete K.modElem)}if(f=!d(f,"undefined")&&f,!d(e,"undefined")){var j=p(a,e);if(!d(j,"undefined"))return j}for(var k,m,n,o,q,r=["modernizr","tspan","samp"];!K.style&&r.length;)k=!0,K.modElem=i(r.shift()),K.style=K.modElem.style;for(n=a.length,m=0;n>m;m++)if(o=a[m],q=K.style[o],l(o,"-")&&(o=g(o)),K.style[o]!==c){if(f||d(e,"undefined"))return h(),"pfx"!=b||o;try{K.style[o]=e}catch(a){}if(K.style[o]!=q)return h(),"pfx"!=b||o}return h(),!1}function r(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+G.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?q(h,b,e,f):(h=(a+" "+I.join(g+" ")+g).split(" "),n(h,b,c))}function s(a,b,d){return r(a,c,c,b,d)}var t=[],u=[],v={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){u.push({name:a,fn:b,options:c})},addAsyncTest:function(a){u.push({name:null,fn:a})}},w=function(){};w.prototype=v,w=new w;var x=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];v._prefixes=x;var y=b.documentElement,z="svg"===y.nodeName.toLowerCase(),A=function(){function a(a,b){var e;return!!a&&(b&&"string"!=typeof b||(b=i(b||"div")),a="on"+a,e=a in b,!e&&d&&(b.setAttribute||(b=i("div")),b.setAttribute(a,""),e="function"==typeof b[a],b[a]!==c&&(b[a]=c),b.removeAttribute(a)),e)}var d=!("onblur"in b.documentElement);return a}();v.hasEvent=A;var B="CSS"in a&&"supports"in a.CSS,C="supportsCSS"in a;w.addTest("supports",B||C);var D=function(){var b=a.matchMedia||a.msMatchMedia;return b?function(a){var c=b(a);return c&&c.matches||!1}:function(b){var c=!1;return k("@media "+b+" { #modernizr { position: absolute; } }",function(b){c="absolute"==(a.getComputedStyle?a.getComputedStyle(b,null):b.currentStyle).position}),c}}();v.mq=D;var E=v.testStyles=k;w.addTest("touchevents",function(){var c;if("ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch)c=!0;else{var d=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(d,function(a){c=9===a.offsetTop})}return c});var F="Moz O ms Webkit",G=v._config.usePrefixes?F.split(" "):[];v._cssomPrefixes=G;var H=function(b){var d,e=x.length,f=a.CSSRule;if("undefined"==typeof f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),d=b.replace(/-/g,"_").toUpperCase()+"_RULE",d in f)return"@"+b;for(var g=0;e>g;g++){var h=x[g],i=h.toUpperCase()+"_"+d;if(i in f)return"@-"+h.toLowerCase()+"-"+b}return!1};v.atRule=H;var I=v._config.usePrefixes?F.toLowerCase().split(" "):[];v._domPrefixes=I;var J={elem:i("modernizr")};w._q.push(function(){delete J.elem});var K={style:J.elem.style};w._q.unshift(function(){delete K.style}),v.testProp=function(a,b,d){return q([a],c,b,d)},v.testAllProps=r;var L=v.prefixed=function(a,b,c){return 0===a.indexOf("@")?H(a):(-1!=a.indexOf("-")&&(a=g(a)),b?r(a,b,c):r(a,"pfx"))};v.prefixedCSS=function(a){var b=L(a);return b&&h(b)},w.addTest("forcetouch",function(){return!!A(L("mouseforcewillbegin",a,!1),a)&&(MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)}),v.testAllProps=s,w.addTest("cssanimations",s("animationName","a",!0)),w.addTest("cssgridlegacy",s("grid-columns","10px",!0)),w.addTest("cssgrid",s("grid-template-rows","none",!0)),w.addTest("cssfilters",function(){if(w.supports)return s("filter","blur(2px)");var a=i("a");return a.style.cssText=x.join("filter:blur(2px); "),!!a.style.length&&(b.documentMode===c||b.documentMode>9)}),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&s("transform","scale(1)",!0)}),w.addTest("csstransforms3d",function(){var a=!!s("perspective","1px",!0),b=w._config.usePrefixes;if(a&&(!b||"webkitPerspective"in y.style)){var c,d="#modernizr{width:0;height:0}";w.supports?c="@supports (perspective: 1px)":(c="@media (transform-3d)",b&&(c+=",(-webkit-transform-3d)")),c+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",E(d+c,function(b){a=7===b.offsetWidth&&18===b.offsetHeight})}return a}),w.addTest("csstransitions",s("transition","all",!0)),e(),f(t),delete v.addTest,delete v.addAsyncTest;for(var M=0;M<w._q.length;M++)w._q[M]();a.Modernizr=w}(window,document);var dtGlobals={};dtGlobals.isMobile=/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent),dtGlobals.isAndroid=/(Android)/.test(navigator.userAgent),dtGlobals.isiOS=/(iPhone|iPod|iPad)/.test(navigator.userAgent),dtGlobals.isiPhone=/(iPhone|iPod)/.test(navigator.userAgent),dtGlobals.isiPad=/(iPad)/.test(navigator.userAgent),dtGlobals.isBuggy=navigator.userAgent.match(/AppleWebKit/)&&"undefined"==typeof window.ontouchstart&&!navigator.userAgent.match(/Chrome/),dtGlobals.winScrollTop=0,window.onscroll=function(){dtGlobals.winScrollTop=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},dtGlobals.isWindowsPhone=navigator.userAgent.match(/IEMobile/i),dtGlobals.customColor="red",dtGlobals.isMobile?document.documentElement.className+=" mobile-true":document.documentElement.className+=" mobile-false",dtGlobals.logoURL=!1,dtGlobals.logoH=!1,dtGlobals.logoW=!1,jQuery(document).ready(function(a){var b=(a(document),a(window)),c=a("html"),d=a("body");dtGlobals.isiOS?c.addClass("is-iOS"):c.addClass("not-iOS"),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1&&d.addClass("is-safari"),dtGlobals.isWindowsPhone&&d.addClass("ie-mobile").addClass("windows-phone"),dtGlobals.isMobile||d.addClass("no-mobile"),dtGlobals.isiPhone&&d.addClass("is-iphone"),dtGlobals.isPhone=!1,dtGlobals.isTablet=!1,dtGlobals.isDesktop=!1;var e=window.getComputedStyle(document.body,":after").getPropertyValue("content");e.indexOf("phone")!=-1&&dtGlobals.isMobile?dtGlobals.isPhone=!0:e.indexOf("tablet")!=-1&&dtGlobals.isMobile?dtGlobals.isTablet=!0:dtGlobals.isDesktop=!0;var f;!dtGlobals.isMobile||dtGlobals.isWindowsPhone||dtGlobals.isAndroid?a(window).on("resize",function(){clearTimeout(f),f=setTimeout(function(){a(window).trigger("debouncedresize")},200)}):a(window).bind("orientationchange",function(b){clearTimeout(f),f=setTimeout(function(){a(window).trigger("debouncedresize")},200)}),b.on("debouncedresize",function(b){a(".mini-widgets, .mobile-mini-widgets").find(" > *").removeClass("first last"),a(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:first").addClass("first"),a(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:last").addClass("last")}).trigger("debouncedresize")});