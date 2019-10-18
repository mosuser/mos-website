// source --> http://en.mosdao.io/wp-content/themes/dt-the7/js/above-the-fold.min.js?ver=7.7.7 
!function(a,b,c){function d(a,b){return typeof a===b}function e(){var a,b,c,e,f,g,h;for(var i in u)if(u.hasOwnProperty(i)){if(a=[],b=u[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?w[h[0]]=e:(!w[h[0]]||w[h[0]]instanceof Boolean||(w[h[0]]=new Boolean(w[h[0]])),w[h[0]][h[1]]=e),t.push((e?"":"no-")+h.join("-"))}}function f(a){var b=y.className,c=w._config.classPrefix||"";if(z&&(b=b.baseVal),w._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}w._config.enableClasses&&(b+=" "+c+a.join(" "+c),z?y.className.baseVal=b:y.className=b)}function g(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function h(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function i(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):z?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function j(){var a=b.body;return a||(a=i(z?"svg":"body"),a.fake=!0),a}function k(a,c,d,e){var f,g,h,k,l="modernizr",m=i("div"),n=j();if(parseInt(d,10))for(;d--;)h=i("div"),h.id=e?e[d]:l+(d+1),m.appendChild(h);return f=i("style"),f.type="text/css",f.id="s"+l,(n.fake?n:m).appendChild(f),n.appendChild(m),f.styleSheet?f.styleSheet.cssText=a:f.appendChild(b.createTextNode(a)),m.id=l,n.fake&&(n.style.background="",n.style.overflow="hidden",k=y.style.overflow,y.style.overflow="hidden",y.appendChild(n)),g=c(m,a),n.fake?(n.parentNode.removeChild(n),y.style.overflow=k,y.offsetHeight):m.parentNode.removeChild(m),!!g}function l(a,b){return!!~(""+a).indexOf(b)}function m(a,b){return function(){return a.apply(b,arguments)}}function n(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?m(e,c||b):e);return!1}function o(b,c,d){var e;if("getComputedStyle"in a){e=getComputedStyle.call(a,b,c);var f=a.console;if(null!==e)d&&(e=e.getPropertyValue(d));else if(f){var g=f.error?"error":"log";f[g].call(f,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else e=!c&&b.currentStyle&&b.currentStyle[d];return e}function p(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(h(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+h(b[e])+":"+d+")");return f=f.join(" or "),k("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==o(a,null,"position")})}return c}function q(a,b,e,f){function h(){k&&(delete K.style,delete K.modElem)}if(f=!d(f,"undefined")&&f,!d(e,"undefined")){var j=p(a,e);if(!d(j,"undefined"))return j}for(var k,m,n,o,q,r=["modernizr","tspan","samp"];!K.style&&r.length;)k=!0,K.modElem=i(r.shift()),K.style=K.modElem.style;for(n=a.length,m=0;n>m;m++)if(o=a[m],q=K.style[o],l(o,"-")&&(o=g(o)),K.style[o]!==c){if(f||d(e,"undefined"))return h(),"pfx"!=b||o;try{K.style[o]=e}catch(a){}if(K.style[o]!=q)return h(),"pfx"!=b||o}return h(),!1}function r(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+G.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?q(h,b,e,f):(h=(a+" "+I.join(g+" ")+g).split(" "),n(h,b,c))}function s(a,b,d){return r(a,c,c,b,d)}var t=[],u=[],v={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){u.push({name:a,fn:b,options:c})},addAsyncTest:function(a){u.push({name:null,fn:a})}},w=function(){};w.prototype=v,w=new w;var x=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];v._prefixes=x;var y=b.documentElement,z="svg"===y.nodeName.toLowerCase(),A=function(){function a(a,b){var e;return!!a&&(b&&"string"!=typeof b||(b=i(b||"div")),a="on"+a,e=a in b,!e&&d&&(b.setAttribute||(b=i("div")),b.setAttribute(a,""),e="function"==typeof b[a],b[a]!==c&&(b[a]=c),b.removeAttribute(a)),e)}var d=!("onblur"in b.documentElement);return a}();v.hasEvent=A;var B="CSS"in a&&"supports"in a.CSS,C="supportsCSS"in a;w.addTest("supports",B||C);var D=function(){var b=a.matchMedia||a.msMatchMedia;return b?function(a){var c=b(a);return c&&c.matches||!1}:function(b){var c=!1;return k("@media "+b+" { #modernizr { position: absolute; } }",function(b){c="absolute"==(a.getComputedStyle?a.getComputedStyle(b,null):b.currentStyle).position}),c}}();v.mq=D;var E=v.testStyles=k;w.addTest("touchevents",function(){var c;if("ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch)c=!0;else{var d=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(d,function(a){c=9===a.offsetTop})}return c});var F="Moz O ms Webkit",G=v._config.usePrefixes?F.split(" "):[];v._cssomPrefixes=G;var H=function(b){var d,e=x.length,f=a.CSSRule;if("undefined"==typeof f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),d=b.replace(/-/g,"_").toUpperCase()+"_RULE",d in f)return"@"+b;for(var g=0;e>g;g++){var h=x[g],i=h.toUpperCase()+"_"+d;if(i in f)return"@-"+h.toLowerCase()+"-"+b}return!1};v.atRule=H;var I=v._config.usePrefixes?F.toLowerCase().split(" "):[];v._domPrefixes=I;var J={elem:i("modernizr")};w._q.push(function(){delete J.elem});var K={style:J.elem.style};w._q.unshift(function(){delete K.style}),v.testProp=function(a,b,d){return q([a],c,b,d)},v.testAllProps=r;var L=v.prefixed=function(a,b,c){return 0===a.indexOf("@")?H(a):(-1!=a.indexOf("-")&&(a=g(a)),b?r(a,b,c):r(a,"pfx"))};v.prefixedCSS=function(a){var b=L(a);return b&&h(b)},w.addTest("forcetouch",function(){return!!A(L("mouseforcewillbegin",a,!1),a)&&(MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)}),v.testAllProps=s,w.addTest("cssanimations",s("animationName","a",!0)),w.addTest("cssgridlegacy",s("grid-columns","10px",!0)),w.addTest("cssgrid",s("grid-template-rows","none",!0)),w.addTest("cssfilters",function(){if(w.supports)return s("filter","blur(2px)");var a=i("a");return a.style.cssText=x.join("filter:blur(2px); "),!!a.style.length&&(b.documentMode===c||b.documentMode>9)}),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&s("transform","scale(1)",!0)}),w.addTest("csstransforms3d",function(){var a=!!s("perspective","1px",!0),b=w._config.usePrefixes;if(a&&(!b||"webkitPerspective"in y.style)){var c,d="#modernizr{width:0;height:0}";w.supports?c="@supports (perspective: 1px)":(c="@media (transform-3d)",b&&(c+=",(-webkit-transform-3d)")),c+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",E(d+c,function(b){a=7===b.offsetWidth&&18===b.offsetHeight})}return a}),w.addTest("csstransitions",s("transition","all",!0)),e(),f(t),delete v.addTest,delete v.addAsyncTest;for(var M=0;M<w._q.length;M++)w._q[M]();a.Modernizr=w}(window,document);var dtGlobals={};dtGlobals.isMobile=/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent),dtGlobals.isAndroid=/(Android)/.test(navigator.userAgent),dtGlobals.isiOS=/(iPhone|iPod|iPad)/.test(navigator.userAgent),dtGlobals.isiPhone=/(iPhone|iPod)/.test(navigator.userAgent),dtGlobals.isiPad=/(iPad)/.test(navigator.userAgent),dtGlobals.isBuggy=navigator.userAgent.match(/AppleWebKit/)&&"undefined"==typeof window.ontouchstart&&!navigator.userAgent.match(/Chrome/),dtGlobals.winScrollTop=0,window.onscroll=function(){dtGlobals.winScrollTop=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},dtGlobals.isWindowsPhone=navigator.userAgent.match(/IEMobile/i),dtGlobals.customColor="red",dtGlobals.isMobile?document.documentElement.className+=" mobile-true":document.documentElement.className+=" mobile-false",dtGlobals.logoURL=!1,dtGlobals.logoH=!1,dtGlobals.logoW=!1,jQuery(document).ready(function(a){var b=(a(document),a(window)),c=a("html"),d=a("body");dtGlobals.isiOS?c.addClass("is-iOS"):c.addClass("not-iOS"),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1&&d.addClass("is-safari"),dtGlobals.isWindowsPhone&&d.addClass("ie-mobile").addClass("windows-phone"),dtGlobals.isMobile||d.addClass("no-mobile"),dtGlobals.isiPhone&&d.addClass("is-iphone"),dtGlobals.isPhone=!1,dtGlobals.isTablet=!1,dtGlobals.isDesktop=!1;var e=window.getComputedStyle(document.body,":after").getPropertyValue("content");e.indexOf("phone")!=-1&&dtGlobals.isMobile?dtGlobals.isPhone=!0:e.indexOf("tablet")!=-1&&dtGlobals.isMobile?dtGlobals.isTablet=!0:dtGlobals.isDesktop=!0;var f;!dtGlobals.isMobile||dtGlobals.isWindowsPhone||dtGlobals.isAndroid?a(window).on("resize",function(){clearTimeout(f),f=setTimeout(function(){a(window).trigger("debouncedresize")},200)}):a(window).bind("orientationchange",function(b){clearTimeout(f),f=setTimeout(function(){a(window).trigger("debouncedresize")},200)}),b.on("debouncedresize",function(b){a(".mini-widgets, .mobile-mini-widgets").find(" > *").removeClass("first last"),a(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:first").addClass("first"),a(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:last").addClass("last")}).trigger("debouncedresize")});
// source --> http://en.mosdao.io/wp-content/plugins/Ultimate_VC_Addons/assets/min-js/ultimate-params.min.js?ver=3.18.0 
jQuery(document).ready(function(p){var u="",m="",v="",h="",b="";jQuery(".ult-responsive").each(function(e,a){var t=jQuery(this),i=t.attr("data-responsive-json-new"),r=t.data("ultimate-target"),s="",d="",n="",l="",c="",o="";void 0===i&&null==i||p.each(p.parseJSON(i),function(e,a){var i=e;if(void 0!==a&&null!=a){var t=a.split(";");jQuery.each(t,function(e,a){if(void 0!==a||null!=a){var t=a.split(":");switch(t[0]){case"large_screen":s+=i+":"+t[1]+";";break;case"desktop":d+=i+":"+t[1]+";";break;case"tablet":n+=i+":"+t[1]+";";break;case"tablet_portrait":l+=i+":"+t[1]+";";break;case"mobile_landscape":c+=i+":"+t[1]+";";break;case"mobile":o+=i+":"+t[1]+";"}}})}}),""!=o&&(b+=r+"{"+o+"}"),""!=c&&(h+=r+"{"+c+"}"),""!=l&&(v+=r+"{"+l+"}"),""!=n&&(m+=r+"{"+n+"}"),""!=d&&(u+=r+"{"+d+"}"),""!=s&&r+"{"+s+"}"});var e="<style>/** Ultimate: Media Responsive **/ ";e+=u,e+="@media (max-width: 1199px) { "+m+"}",e+="@media (max-width: 991px)  { "+v+"}",e+="@media (max-width: 767px)  { "+h+"}",e+="@media (max-width: 479px)  { "+b+"}",e+="/** Ultimate: Media Responsive - **/</style>",jQuery("head").append(e)});
// source --> http://en.mosdao.io/wp-content/plugins/Ultimate_VC_Addons/assets/min-js/custom.min.js?ver=3.18.0 
!function(f){"use strict";function s(t,i,e){if("img"===e){var r=(s=parseInt(i.outerHeight()))/2;t.css("padding-top",r+"px"),t.parent().css("margin-top",r+20+"px"),i.css("top",-s+"px")}else{var s;r=(s=parseInt(i.outerHeight()))/2;t.css("padding-top",r+"px"),t.parent().css("margin-top",r+20+"px"),i.css("top",-s+"px")}}function n(t){0<t.find(".timeline-icon-block").length&&f(".timeline-block").each(function(t,i){var e=f(this).find(".timeline-header-block"),r=f(this).find(".timeline-icon-block");r.css({position:"absolute"});var s=r.outerHeight(),a=r.outerWidth(),o=-a/2;parseInt(e.find(".timeline-header").css("padding-left").replace(/[^\d.]/g,""));f(this).hasClass("timeline-post-left")?(r.css({left:o,right:"auto"}),jQuery("body").hasClass("rtl")&&r.css({left:"auto",right:o})):f(this).hasClass("timeline-post-right")&&(r.css({left:"auto",right:o}),jQuery("body").hasClass("rtl")&&r.css({left:o,right:"auto"}));var n=e.height()/2-s/2;r.css({top:n});var u=r.offset().left,l=f(window).width();(u<0||l<u+a)&&(r.css({position:"relative",top:"auto",left:"auto",right:"auto","text-align":"center"}),r.children().children().css({margin:"10px auto"}),e.css({padding:"0"}))})}function e(){jQuery(".ult-animation").each(function(){if(jQuery(this).attr("data-animate")){var t=jQuery(this).children("*"),a=jQuery(this).attr("data-animate"),i=jQuery(this).attr("data-animation-duration")+"s",e=jQuery(this).attr("data-animation-iteration"),r=jQuery(this).attr("data-animation-delay"),o=(jQuery(this).attr("data-opacity_start_effect"),"opacity:1;-webkit-animation-delay:"+r+"s;-webkit-animation-duration:"+i+";-webkit-animation-iteration-count:"+e+"; -moz-animation-delay:"+r+"s;-moz-animation-duration:"+i+";-moz-animation-iteration-count:"+e+"; animation-delay:"+r+"s;animation-duration:"+i+";animation-iteration-count:"+e+";"),s="opacity:1;-webkit-transition-delay: "+r+"s; -moz-transition-delay: "+r+"s; transition-delay: "+r+"s;";if(u(jQuery(this))){var n=jQuery(this).attr("style");void 0===n&&(n="test"),"opacity:0;"==(n=n.replace(/ /g,""))&&0!==n.indexOf(s)&&jQuery(this).attr("style",s),jQuery.each(t,function(t,i){var e=jQuery(i),r=e.attr("style");void 0===r&&(r="test");var s="";s=0==r.indexOf(o)?r:o+r,e.attr("style",s),u(e)&&e.addClass("animated").addClass(a)})}}})}function u(t){var i=jQuery(window).scrollTop(),e=jQuery(window).height();if(jQuery(t).hasClass("ult-animate-viewport"))var r=jQuery(t).data("opacity_start_effect");if(void 0===r||""==r)var s=2;else s=100-r;jQuery(t).outerHeight();return jQuery(t).offset().top-i<=e-e*(s/100)}function a(){jQuery(".ult-new-ib").each(function(t,i){var e=jQuery(this);if(e.hasClass("ult-ib-resp")){var r=jQuery(document).width(),s=e.data("min-width");r<=e.data("max-width")&&s<=r?e.find(".ult-new-ib-content").hide():e.find(".ult-new-ib-content").show()}})}f.fn.vc_translate_row=function(){var c=f(window).scrollTop(),d=f(window).height();f(this).each(function(t,i){var e=f(i).attr("data-row-effect-mobile-disable");if(e=void 0===e?"false":e.toString(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))r="true";else var r="false";if("true"==r&&"true"==e)var s="true";else s="false";if("false"==s){var a=f(i).outerHeight(),o=f(i).offset().top-c,n=o+a,u=f(i).attr("data-parallax-content-sense")/100,l=0;if(n<=d-0*d&&o<=0){if(d<a)l=(d-n)*u;else l=-o*u;l<0&&(l=0)}else l=0;f(i).find(".vc-row-translate-wrapper").children().each(function(t,i){jQuery(i).is(".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator,.ult-easy-separator-wrapper")||f(i).css({transform:"translate3d(0,"+l+"px,0)","-webkit-transform":"translate3d(0,"+l+"px,0)","-ms-transform":"translate3d(0,"+l+"px,0)"})})}})},f.fn.vc_fade_row=function(){var d=f(window).scrollTop(),h=f(window).height();f(this).each(function(t,i){var e=f(i).attr("data-row-effect-mobile-disable");if(e=void 0===e?"false":e.toString(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))r="true";else var r="false";if("true"==r&&"true"==e)var s="true";else s="false";if("false"==s){var a=f(i).data("fadeout-percentage");a=100-a;var o=f(i).outerHeight(),n=f(i).offset().top-d+o,u=1,l=h-h*(a/100),c=(l-n)/l*1;0<c&&(u=1-c),n<=l?(u<0?u=0:1<u&&(u=1),f(i).children().each(function(t,i){f(i).is(".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator")||f(i).css({opacity:u})})):f(i).children().each(function(t,i){f(i).css({opacity:u})})}})},jQuery(document).ready(function(){var u;u="",f(".ult-spacer").each(function(t,i){var e=f(i).data("id"),r=(f("body").width(),f(i).data("height-mobile")),s=f(i).data("height-mobile-landscape"),a=f(i).data("height-tab"),o=f(i).data("height-tab-portrait"),n=f(i).data("height");""!=n&&(u+=" .spacer-"+e+" { height:"+n+"px } "),""==a&&"0"!=a&&0!=a||(u+=" @media (max-width: 1199px) { .spacer-"+e+" { height:"+a+"px } } "),void 0===o||""==o&&"0"!=o&&0!=o||(u+=" @media (max-width: 991px) { .spacer-"+e+" { height:"+o+"px } } "),void 0===s||""==s&&"0"!=s&&0!=s||(u+=" @media (max-width: 767px) { .spacer-"+e+" { height:"+s+"px } } "),""==r&&"0"!=r&&0!=r||(u+=" @media (max-width: 479px) { .spacer-"+e+" { height:"+r+"px } } ")}),""!=u&&(u="<style>"+u+"</style>",f("head").append(u))}),jQuery(window).scroll(function(){var t=jQuery(".ult-no-mobile").length;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&1<=t?jQuery(".ult-animation").css("opacity",1):e(),f(".vc-row-fade").vc_fade_row(),f(".vc-row-translate").vc_translate_row()}),jQuery(window).load(function(){jQuery(".ult-banner-block-custom-height").each(function(t,i){var e=jQuery(this).find("img"),r=jQuery(this).width(),s=jQuery(this).height();e.width();s<r&&e.css({width:"100%",height:"auto"})}),jQuery(".ult-new-ib").each(function(t,i){("ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints)&&jQuery(this).find(".ult-new-ib-link").click(function(t){t.preventDefault();var i=jQuery(this).attr("href"),e=jQuery(this).data("touch-delay");null==e&&(e=200),setTimeout(function(){window.location=i},e)})});var t=0,i=0,e=function(){jQuery(".ifb-jq-height").each(function(){jQuery(this).find(".ifb-back").css("height","auto"),jQuery(this).find(".ifb-front").css("height","auto");var t=parseInt(jQuery(this).find(".ifb-front > div").outerHeight(!0)),i=parseInt(jQuery(this).find(".ifb-back > div").outerHeight(!0)),e=i<t?t:i;jQuery(this).find(".ifb-front").css("height",e+"px"),jQuery(this).find(".ifb-back").css("height",e+"px"),jQuery(this).hasClass("vertical_door_flip")?jQuery(this).find(".ifb-flip-box").css("height",e+"px"):jQuery(this).hasClass("horizontal_door_flip")?jQuery(this).find(".ifb-flip-box").css("height",e+"px"):jQuery(this).hasClass("style_9")&&jQuery(this).find(".ifb-flip-box").css("height",e+"px")}),jQuery(".ifb-auto-height").each(function(){if(jQuery(this).hasClass("horizontal_door_flip")||jQuery(this).hasClass("vertical_door_flip")){var t=parseInt(jQuery(this).find(".ifb-front > div").outerHeight()),i=parseInt(jQuery(this).find(".ifb-back > div").outerHeight()),e=i<t?t:i;jQuery(this).find(".ifb-flip-box").css("height",e+"px")}})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){e()},500):e(),jQuery(document).on("ultAdvancedTabClicked",function(t,i){e()}),jQuery(window).resize(function(){t++,setTimeout(function(){t==++i&&e()},500)});var r=0;jQuery(window).resize(function(){a(),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){n(jQuery(this))}),f(".jstime .timeline-wrapper").each(function(){n(jQuery(this))}),"none"==jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display")?0===r&&(f(".jstime .timeline-wrapper").masonry("destroy"),r=1):1==r&&(jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block"}),setTimeout(function(){jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block",width:"401px"}),jQuery(this).find(".timeline-block").each(function(){jQuery(this).css("left","initial"),"0px"==jQuery(this).css("left")?jQuery(this).addClass("timeline-post-left"):jQuery(this).addClass("timeline-post-right")}),r=0},300))}),f(".smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("timeline-cutom-width");t&&jQuery(this).css("width",2*t+40+"px");var i=parseInt(jQuery(this).width()),e=parseInt(jQuery(this).find(".timeline-block").width()),r=i-2*e-40;r=r/i*100,f(".jstime .timeline-wrapper").each(function(){jQuery(this).masonry({itemSelector:".timeline-block"})}),setTimeout(function(){f(".jstime .timeline-wrapper").each(function(){jQuery(this).find(".timeline-block").each(function(){"0px"==jQuery(this).css("left")?jQuery(this).addClass("timeline-post-left"):jQuery(this).addClass("timeline-post-right"),n(jQuery(this))}),jQuery(".timeline-block").each(function(){var t=parseInt(jQuery(this).css("top"))-parseInt(jQuery(this).next().css("top"));t<14&&0<t||0==t?jQuery(this).next().addClass("time-clash-right"):-14<t&&jQuery(this).next().addClass("time-clash-left")})}),jQuery(".timeline-post-right").each(function(){var t=jQuery(this).find(".timeline-icon-block").clone();jQuery(this).find(".timeline-icon-block").remove(),jQuery(this).find(".timeline-header-block").after(t)}),jQuery(".smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",t),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",t),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",t),jQuery(this).find(".feat-item").css("background-color",t),0<jQuery(this).find(".feat-item").find(".feat-top").length?jQuery(this).find(".feat-item l").css("border-top-color",t):jQuery(this).find(".feat-item l").css("border-bottom-color",t),jQuery(".jstime.timeline_preloader").remove(),jQuery(this).find("div").hasClass("timeline-wrapper")?jQuery(this).css("opacity","1"):jQuery(this).remove()})},1e3),jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text")||jQuery(this).find(".timeline-line").prepend("<span></span>");var s=jQuery(this).data("time_sep_color"),a=jQuery(this).data("time_sep_bg_color"),o=jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");jQuery(this).find(".timeline-dot").css("background-color",a),jQuery(this).find(".timeline-line span").css("background-color",a),jQuery(this).find(".timeline-line span").css("background-color",a),jQuery(this).find(".timeline-separator-text").css("color",s),jQuery(this).find(".timeline-separator-text .sep-text").css("background-color",a),jQuery(this).find(".ult-timeline-arrow s").css("border-color","rgba(255, 255, 255, 0) "+o),jQuery(this).find(".feat-item .ult-timeline-arrow s").css("border-color",o+" rgba(255, 255, 255, 0)"),jQuery(this).find(".timeline-block").css("border-color",o),jQuery(this).find(".feat-item").css("border-color",o)})}),jQuery(document).ready(function(t){var i=jQuery(".ult-no-mobile").length;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&1<=i?jQuery(".ult-animation").css("opacity",1):e(),a(),jQuery(".ubtn").hover(function(){var t=jQuery(this);t.find(".ubtn-text").css("color",t.data("hover")),t.find(".ubtn-hover").css("background",t.data("hover-bg")).addClass("ubtn-hover-active");var i=""!=t.data("hover-bg")&&t.data("hover-bg");setTimeout(function(){!1!==i&&t.hasClass(".ubtn-fade-bg")&&t.css("background",t.data("hover-bg"))},150);var e=t.attr("style");if(""!=t.data("shadow-hover")){t.css("box-shadow");e+="box-shadow:"+t.data("shadow-hover")}if(t.attr("style",e),""!=t.data("border-hover")&&t.css("border-color",t.data("border-hover")),"none"!=t.data("shadow-click")){var r=t.data("shd-shadow")-3;""!=t.is(".shd-left")?t.css({right:r}):""!=t.is(".shd-right")?t.css({left:r}):""!=t.is(".shd-top")?t.css({bottom:r}):""!=t.is(".shd-bottom")&&t.css({top:r})}},function(){var t=jQuery(this);t.find(".ubtn-text").removeAttr("style"),t.find(".ubtn-hover").removeClass("ubtn-hover-active"),t.css("background",t.data("bg"));var i=t.data("border-color"),e=t.attr("style");""!=t.data("shadow-hover")&&(e+="box-shadow:"+t.data("shadow")),t.attr("style",e),""!=t.data("border-hover")&&t.css("border-color",i),"none"!=t.data("shadow-click")&&(t.removeClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:"auto"}):""!=t.is(".shd-right")?t.css({left:"auto"}):""!=t.is(".shd-top")?t.css({bottom:"auto"}):""!=t.is(".shd-bottom")&&t.css({top:"auto"}))}),jQuery(".ubtn").on("focus blur mousedown mouseup",function(t){var i=jQuery(this);"none"!=i.data("shadow-click")&&setTimeout(function(){i.is(":focus")?(i.addClass("no-ubtn-shadow"),""!=i.is(".shd-left")?i.css({right:i.data("shd-shadow")+"px"}):""!=i.is(".shd-right")?i.css({left:i.data("shd-shadow")+"px"}):""!=i.is(".shd-top")?i.css({bottom:i.data("shd-shadow")+"px"}):""!=i.is(".shd-bottom")&&i.css({top:i.data("shd-shadow")+"px"})):(i.removeClass("no-ubtn-shadow"),""!=i.is(".shd-left")?i.css({right:"auto"}):""!=i.is(".shd-right")?i.css({left:"auto"}):""!=i.is(".shd-top")?i.css({bottom:"auto"}):""!=i.is(".shd-bottom")&&i.css({top:"auto"}))},0)}),jQuery(".ubtn").focusout(function(){var t=jQuery(this);t.removeClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:"auto"}):""!=t.is(".shd-right")?t.css({left:"auto"}):""!=t.is(".shd-top")?t.css({bottom:"auto"}):""!=t.is(".shd-bottom")&&t.css({top:"auto"})}),jQuery(".smile-icon-timeline-wrap.jstime").css("opacity","0"),jQuery(".jstime.timeline_preloader").css("opacity","1"),jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function(){jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"),jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right")}),jQuery(".csstime .timeline-post-right").each(function(){jQuery(this).css("float","right"),jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this))}),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",t),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",t),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",t),jQuery(this).find(".feat-item").css("background-color",t),0<jQuery(this).find(".feat-item").find(".feat-top").length?jQuery(this).find(".feat-item l").css("border-top-color",t):jQuery(this).find(".feat-item l").css("border-bottom-color",t),n(jQuery(this))}),jQuery(".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector").each(function(){if(jQuery(this).attr("data-animation")){var i=jQuery(this).attr("data-animation"),e="delay-"+jQuery(this).attr("data-animation-delay");if(void 0===i||""===i)return!1;t(this).bsf_appear(function(){var t=jQuery(this);t.addClass("animated").addClass(i),t.addClass("animated").addClass(e)})}}),jQuery(".stats-block").each(function(){t(this).bsf_appear(function(){var t=parseFloat(jQuery(this).find(".stats-number").data("counter-value")),i=jQuery(this).find(".stats-number").data("counter-value")+" ",e=parseInt(jQuery(this).find(".stats-number").data("speed")),r=jQuery(this).find(".stats-number").data("id"),s=jQuery(this).find(".stats-number").data("separator"),a=jQuery(this).find(".stats-number").data("decimal"),o=i.split(".");o=o[1]?o[1].length-1:0;var n=!0;"none"==a&&(a=""),n="none"!=s;var u=new countUp(r,0,t,o,e,{useEasing:!0,useGrouping:n,separator:s,decimal:a});setTimeout(function(){u.start()},500)})}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?jQuery(".ifb-flip-box").on("click",function(t){var i=jQuery(this);i.hasClass("ifb-hover")?i.removeClass("ifb-hover"):i.addClass("ifb-hover")}):jQuery(document).on("mouseenter mouseleave hover",".ifb-flip-box",function(t){var i=jQuery(this);i.hasClass("ifb-hover")?i.removeClass("ifb-hover"):i.addClass("ifb-hover")}),jQuery(".ifb-flip-box").each(function(t,i){jQuery(this).parent().hasClass("style_9")&&(jQuery(this).hover(function(){jQuery(this).addClass("ifb-door-hover")},function(){jQuery(this).removeClass("ifb-door-hover")}),jQuery(this).on("click",function(){jQuery(this).toggleClass("ifb-door-right-open"),jQuery(this).removeClass("ifb-door-hover")}))}),jQuery(document).on("click",".ifb-flip-box",function(t){t.stopPropagation(),jQuery(document).trigger("ultFlipBoxClicked",jQuery(this))}),jQuery(".vertical_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_vertical_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".horizontal_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_horizontal_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-front").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-back").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),/^((?!chrome).)*safari/i.test(navigator.userAgent)&&(jQuery(".vertical_door_flip").each(function(t,i){var e=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-e/2+"px"),jQuery(this).find(".ifb-multiple-front").css("width","50.2%")}),jQuery(".horizontal_door_flip").each(function(t,i){var e=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-e/2+"px"),jQuery(this).find(".ifb-multiple-front").css("height","50.2%")}),jQuery(".reverse_vertical_door_flip").each(function(t,i){var e=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-e/2+"px")}),jQuery(".reverse_horizontal_door_flip").each(function(t,i){var e=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-e/2+"px"),jQuery(this).find(".ifb-back").css("position","inherit")})),jQuery(".square_box-icon").each(function(t,i){var e=jQuery(this);if(0<jQuery(this).find(".aio-icon-img").length){var r=jQuery(this).find(".aio-icon-img");s(e,r,"img"),r.find(".img-icon").load(function(){s(e,r,"icon")})}else{r=jQuery(this).find(".aio-icon");s(e,r,"icon"),jQuery(window).load(function(){s(e,r,"icon")})}})})}(jQuery),jQuery(document).ready(function(){function t(){jQuery(".ult-new-ib").each(function(t,i){var e=jQuery(this).data("min-height")||"";jQuery(this).find(".ult-new-ib-img").data("min-height"),jQuery(this).find(".ult-new-ib-img").data("max-width");if(""!=e){jQuery(this).addClass("ult-ib2-min-height"),jQuery(this).css("height",e),jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size");jQuery(this).find(".ult-new-ib-img").width();var r=jQuery(this).find(".ult-new-ib-img").height();(jQuery(this).width()<=e||r<e)&&jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")}jQuery(this).hover(function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("hover-opacity"))},function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("opacity"))})})}t(),jQuery(window).load(function(){t()}),jQuery(window).resize(function(){t()})}),jQuery(document).ready(function(){function e(){jQuery(".ultimate-map-wrapper").each(function(t,i){var e=jQuery(i).attr("id");if(void 0===e||""===e)return!1;var r=jQuery(i).find(".ultimate_google_map").attr("id"),s=jQuery("#"+r).attr("data-map_override");jQuery("#"+r).css({"margin-left":0}),jQuery("#"+r).css({right:0});var a=jQuery("#"+e).parent();if("full"==s&&(a=jQuery("body"),"false"),"ex-full"==s&&(a=jQuery("html"),"false"),!isNaN(s))for(t=0;t<s&&"HTML"!=a.prop("tagName");t++)a=a.parent();if(0==s||"0"==s)var o=a.width();else o=a.outerWidth();var n=a.offset().left-jQuery("#"+r).offset().left;if(jQuery("#"+r).css({width:o}),0==s&&"0"==s||jQuery("#"+r).css({"margin-left":n}),"full"==s&&jQuery("body").hasClass("rtl")){var u=jQuery("#"+r),l=jQuery(window).width()-(u.offset().left+u.outerWidth());jQuery("#"+r).css({right:-l})}})}e(),jQuery(window).load(function(){e()}),jQuery(window).resize(function(){e()}),jQuery(".ui-tabs").bind("tabsactivate",function(t,i){0<jQuery(this).find(".ultimate-map-wrapper").length&&e()}),jQuery(".ui-accordion").bind("accordionactivate",function(t,i){0<jQuery(this).find(".ultimate-map-wrapper").length&&e()}),jQuery(document).on("onUVCModalPopupOpen",function(){e()}),jQuery(document).on("UVCMapResize",function(){e()})});
// source --> http://en.mosdao.io/wp-content/plugins/Ultimate_VC_Addons/assets/min-js/jquery-appear.min.js?ver=3.18.0 
!function(f){f.fn.bsf_appear=function(r,e){var h=f.extend({data:void 0,one:!0,accX:0,accY:0},e);return this.each(function(){var l=f(this);if(l.bsf_appeared=!1,r){var b=f(window),a=function(){if(l.is(":visible")){var e=b.scrollLeft(),a=b.scrollTop(),r=l.offset(),f=r.left,p=r.top,s=h.accX,n=h.accY,t=l.height(),c=b.height(),i=l.width(),o=b.width();a<=p+t+n&&p<=a+c+n&&e<=f+i+s&&f<=e+o+s?l.bsf_appeared||l.trigger("bsf_appear",h.data):l.bsf_appeared=!1}else l.bsf_appeared=!1},e=function(){if(l.bsf_appeared=!0,h.one){b.unbind("scroll",a);var e=f.inArray(a,f.fn.bsf_appear.checks);0<=e&&f.fn.bsf_appear.checks.splice(e,1)}r.apply(this,arguments)};h.one?l.one("bsf_appear",h.data,e):l.bind("bsf_appear",h.data,e),b.scroll(a),f.fn.bsf_appear.checks.push(a),a()}else l.trigger("bsf_appear",h.data)})},f.extend(f.fn.bsf_appear,{checks:[],timeout:null,checkAll:function(){var e=f.fn.bsf_appear.checks.length;if(0<e)for(;e--;)f.fn.bsf_appear.checks[e]()},run:function(){f.fn.bsf_appear.timeout&&clearTimeout(f.fn.bsf_appear.timeout),f.fn.bsf_appear.timeout=setTimeout(f.fn.bsf_appear.checkAll,20)}}),f.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=f.fn[a];r&&(f.fn[a]=function(){var e=r.apply(this,arguments);return f.fn.bsf_appear.run(),e})})}(jQuery);
// source --> http://en.mosdao.io/wp-content/plugins/Ultimate_VC_Addons/assets/min-js/headings.min.js?ver=3.18.0 
!function(i){function t(){var j=0;$jh(".uvc-heading").each(function(){var i,t,e,h=$jh(this).outerWidth(),a=$jh(this).attr("data-hline_width"),n=$jh(this).attr("data-hicon_type"),r=$jh(this).attr("data-halign"),c=$jh(this).attr("data-hspacer");if(left_rtl="left",right_rtl="right",jQuery("body").hasClass("rtl")&&(left_rtl="right",right_rtl="left"),"line_with_icon"==c){var o=$jh(this).attr("id");j=void 0===(j=$jh(this).attr("data-hfixer"))||""===j?0:parseInt(j);var s=h/2;$jh(this).find(".dynamic_ultimate_heading_css").remove();var d=(e="auto"==a||h<a?h:a)/2;i="selector"==n?(t=$jh(this).find(".aio-icon").outerWidth(),$jh(this).find(".aio-icon").outerHeight()):(t=$jh(this).find(".aio-icon-img").outerWidth(),$jh(this).find(".aio-icon-img").outerHeight());var l=s-t/2+t+j,f=d;if(i+=3,$jh(this).find(".uvc-heading-spacer").height(i),"center"==r){$jh(this).find(".aio-icon-img").css({margin:"0 auto"});var g="#"+o+" .uvc-heading-spacer.line_with_icon:before{"+right_rtl+":"+l+"px;}#"+o+" .uvc-heading-spacer.line_with_icon:after{"+left_rtl+":"+l+"px;}"}else if("left"==r){$jh(this).find(".aio-icon-img").css({float:r});g="";g=""!=e?"#"+o+" .uvc-heading-spacer.line_with_icon:before{left:"+(t+j)+"px;right:auto;}#"+o+" .uvc-heading-spacer.line_with_icon:after{left:"+(f+t+j)+"px;right:auto;}":"#"+o+" .uvc-heading-spacer.line_with_icon:before{right:"+(l-t-2*j)+"px;}#"+o+" .uvc-heading-spacer.line_with_icon:after{left:"+(l-j)+"px;}"}else if("right"==r){$jh(this).find(".aio-icon-img").css({float:r});g="";g=""!=e?"#"+o+" .uvc-heading-spacer.line_with_icon:before{right:"+(t+j)+"px;left:auto;}#"+o+" .uvc-heading-spacer.line_with_icon:after{right:"+(f+t+j)+"px;left:auto;}":"#"+o+" .uvc-heading-spacer.line_with_icon:before{right:"+(l-j)+"px;}#"+o+" .uvc-heading-spacer.line_with_icon:after{left:"+(l-t-2*j)+"px;}"}var u=$jh(this).attr("data-hborder_style"),_=$jh(this).attr("data-hborder_color"),p=$jh(this).attr("data-hborder_height");"auto"==a&&"center"==r&&(f=Math.floor(f-t+j));var v='<div class="dynamic_ultimate_heading_css"><style>#'+o+" .uvc-heading-spacer.line_with_icon:before, #"+o+" .uvc-heading-spacer.line_with_icon:after{width:"+f+"px;border-style:"+u+";border-color:"+_+";border-bottom-width:"+p+"px;}"+g+"</style></div>";$jh(this).prepend(v)}else"line_only"==c&&("right"==r||"left"==r?$jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({float:r}):$jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({margin:"0 auto"}))})}$jh=i.noConflict(),$jh(document).ready(function(i){t(),$jh(window).resize(function(i){t()})}),i(window).load(function(i){t(),jQuery(".ult_exp_section").select(function(){0<jQuery(this).parent().find(".uvc-heading").length&&t()})})}(jQuery);