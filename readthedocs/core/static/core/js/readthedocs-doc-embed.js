!function o(a,s,l){function c(t,e){if(!s[t]){if(!a[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=s[t]={exports:{}};a[t][0].call(r.exports,function(e){return c(a[t][1][e]||e)},r,r.exports,o,a,s,l)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,i){var n="undefined"!=typeof window?window.jQuery:e("jquery");t.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(t){var i=this;"undefined"==typeof withStickNav&&(t=!0),i.isRunning||(i.isRunning=!0,n(function(e){i.init(e),i.reset(),i.win.on("hashchange",i.reset),t&&i.win.on("scroll",function(){i.linkScroll||i.winScroll||(i.winScroll=!0,requestAnimationFrame(function(){i.onScroll()}))}),i.win.on("resize",function(){i.winResize||(i.winResize=!0,requestAnimationFrame(function(){i.onResize()}))}),i.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(i){i(document);var n=this;this.navBar=i("div.wy-side-scroll:first"),this.win=i(window),i(document).on("click","[data-toggle='wy-nav-top']",function(){i("[data-toggle='wy-nav-shift']").toggleClass("shift"),i("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var e=i(this);i("[data-toggle='wy-nav-shift']").removeClass("shift"),i("[data-toggle='rst-versions']").toggleClass("shift"),n.toggleCurrent(e),n.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){i("[data-toggle='rst-versions']").toggleClass("shift-up")}),i("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),i("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),i("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),i(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var t=i(this);expand=i('<span class="toctree-expand"></span>'),expand.on("click",function(e){return n.toggleCurrent(t),e.stopPropagation(),!1}),t.prepend(expand)})},reset:function(){var e=encodeURI(window.location.hash)||"#";try{var t=$(".wy-menu-vertical"),i=t.find('[href="'+e+'"]');if(0===i.length){var n=$('.document [id="'+e.substring(1)+'"]').closest("div.section");0===(i=t.find('[href="#'+n.attr("id")+'"]')).length&&(i=t.find('[href="#"]'))}0<i.length&&($(".wy-menu-vertical .current").removeClass("current"),i.addClass("current"),i.closest("li.toctree-l1").addClass("current"),i.closest("li.toctree-l1").parent().addClass("current"),i.closest("li.toctree-l1").addClass("current"),i.closest("li.toctree-l2").addClass("current"),i.closest("li.toctree-l3").addClass("current"),i.closest("li.toctree-l4").addClass("current"))}catch(e){console.log("Error expanding nav for anchor",e)}},onScroll:function(){this.winScroll=!1;var e=this.win.scrollTop(),t=e+this.winHeight,i=this.navBar.scrollTop()+(e-this.winPosition);e<0||t>this.docHeight||(this.navBar.scrollTop(i),this.winPosition=e)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(e){var t=e.closest("li");t.siblings("li.current").removeClass("current"),t.siblings().find("li.current").removeClass("current"),t.find("> ul li.current").removeClass("current"),t.toggleClass("current")}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:t.exports.ThemeNav,StickyNav:t.exports.ThemeNav}),function(){for(var o=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var i=(new Date).getTime(),n=Math.max(0,16-(i-o)),r=window.setTimeout(function(){e(i+n)},n);return o=i+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},{jquery:"jquery"}],2:[function(e,t,i){var n=e("cssfilter").FilterCSS,r=e("cssfilter").getDefaultWhiteList,d=e("./util");function o(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var a=new n;function s(e){return e.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,u=/"/g,h=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,f=/&colon;?/gim,g=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,v=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function w(e){return e.replace(u,"&quot;")}function y(e){return e.replace(h,'"')}function _(e){return e.replace(p,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})}function x(e){return e.replace(f,":").replace(g," ")}function k(e){for(var t="",i=0,n=e.length;i<n;i++)t+=e.charCodeAt(i)<32?" ":e.charAt(i);return d.trim(t)}function T(e){return e=k(e=x(e=_(e=y(e))))}function E(e){return e=s(e=w(e))}var S=/<!--[\s\S]*?-->/g;i.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},i.getDefaultWhiteList=o,i.onTag=function(e,t,i){},i.onIgnoreTag=function(e,t,i){},i.onTagAttr=function(e,t,i){},i.onIgnoreTagAttr=function(e,t,i){},i.safeAttrValue=function(e,t,i,n){if(i=T(i),"href"===t||"src"===t){if("#"===(i=d.trim(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===t){if(m.lastIndex=0,m.test(i))return""}else if("style"===t){if(v.lastIndex=0,v.test(i))return"";if(b.lastIndex=0,b.test(i)&&(m.lastIndex=0,m.test(i)))return"";!1!==n&&(i=(n=n||a).process(i))}return i=E(i)},i.escapeHtml=s,i.escapeQuote=w,i.unescapeQuote=y,i.escapeHtmlEntities=_,i.escapeDangerHtml5Entities=x,i.clearNonPrintableCharacter=k,i.friendlyAttrValue=T,i.escapeAttrValue=E,i.onIgnoreTagStripAll=function(){return""},i.StripTagBody=function(o,a){"function"!=typeof a&&(a=function(){});var s=!Array.isArray(o),l=[],c=!1;return{onIgnoreTag:function(e,t,i){if(function(e){return s||-1!==d.indexOf(o,e)}(e)){if(i.isClosing){var n="[/removed]",r=i.position+n.length;return l.push([!1!==c?c:i.position,r]),c=!1,n}return c=c||i.position,"[removed]"}return a(e,t,i)},remove:function(t){var i="",n=0;return d.forEach(l,function(e){i+=t.slice(n,e[0]),n=e[1]}),i+=t.slice(n)}}},i.stripCommentTag=function(e){return e.replace(S,"")},i.stripBlankChar=function(e){var t=e.split("");return(t=t.filter(function(e){var t=e.charCodeAt(0);return 127!==t&&(!(t<=31)||(10===t||13===t))})).join("")},i.cssFilter=a,i.getDefaultCSSWhiteList=r},{"./util":5,cssfilter:9}],3:[function(e,t,i){var n=e("./default"),r=e("./parser"),o=e("./xss");for(var a in(i=t.exports=function(e,t){return new o(t).process(e)}).FilterXSS=o,n)i[a]=n[a];for(var a in r)i[a]=r[a];"undefined"!=typeof window&&(window.filterXSS=t.exports)},{"./default":2,"./parser":4,"./xss":6}],4:[function(e,t,i){var d=e("./util");function h(e){var t=d.spaceIndex(e);if(-1===t)var i=e.slice(1,-1);else i=e.slice(1,t+1);return"/"===(i=d.trim(i).toLowerCase()).slice(0,1)&&(i=i.slice(1)),"/"===i.slice(-1)&&(i=i.slice(0,-1)),i}var u=/[^a-zA-Z0-9_:\.\-]/gim;function p(e,t){for(;t<e.length;t++){var i=e[t];if(" "!==i)return"="===i?t:-1}}function f(e,t){for(;0<t;t--){var i=e[t];if(" "!==i)return"="===i?t:-1}}function g(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}i.parseTag=function(e,t,i){var n="",r=0,o=!1,a=!1,s=0,l=e.length,c="",d="";for(s=0;s<l;s++){var u=e.charAt(s);if(!1===o){if("<"===u){o=s;continue}}else if(!1===a){if("<"===u){n+=i(e.slice(r,s)),r=o=s;continue}if(">"===u){n+=i(e.slice(r,o)),d=h(c=e.slice(o,s+1)),n+=t(o,n.length,d,c,"</"===c.slice(0,2)),r=s+1,o=!1;continue}if(('"'===u||"'"===u)&&"="===e.charAt(s-1)){a=u;continue}}else if(u===a){a=!1;continue}}return r<e.length&&(n+=i(e.substr(r))),n},i.parseAttr=function(e,n){var t=0,r=[],i=!1,o=e.length;function a(e,t){if(!((e=(e=d.trim(e)).replace(u,"").toLowerCase()).length<1)){var i=n(e,t||"");i&&r.push(i)}}for(var s=0;s<o;s++){var l,c=e.charAt(s);if(!1!==i||"="!==c)if(!1===i||s!==t||'"'!==c&&"'"!==c||"="!==e.charAt(s-1))if(/\s|\n|\t/.test(c)){if(e=e.replace(/\s|\n|\t/g," "),!1===i){if(-1===(l=p(e,s))){a(d.trim(e.slice(t,s))),i=!1,t=s+1;continue}s=l-1;continue}if(-1!==(l=f(e,s-1)))continue;a(i,g(d.trim(e.slice(t,s)))),i=!1,t=s+1}else;else{if(-1===(l=e.indexOf(c,s+1)))break;a(i,d.trim(e.slice(t+1,l))),i=!1,t=(s=l)+1}else i=e.slice(t,s),t=s+1}return t<e.length&&(!1===i?a(e.slice(t)):a(i,g(d.trim(e.slice(t))))),d.trim(r.join(" "))}},{"./util":5}],5:[function(e,t,i){t.exports={indexOf:function(e,t){var i,n;if(Array.prototype.indexOf)return e.indexOf(t);for(i=0,n=e.length;i<n;i++)if(e[i]===t)return i;return-1},forEach:function(e,t,i){var n,r;if(Array.prototype.forEach)return e.forEach(t,i);for(n=0,r=e.length;n<r;n++)t.call(i,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e);return t?t.index:-1}}},{}],6:[function(e,t,i){var n=e("cssfilter").FilterCSS,r=e("./default"),o=e("./parser"),a=o.parseTag,b=o.parseAttr,w=e("./util");function y(e){return null==e}function s(e){(e=function(e){var t={};for(var i in e)t[i]=e[i];return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=r.onIgnoreTagStripAll),e.whiteList=e.whiteList||r.whiteList,e.onTag=e.onTag||r.onTag,e.onTagAttr=e.onTagAttr||r.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||r.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||r.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||r.safeAttrValue,e.escapeHtml=e.escapeHtml||r.escapeHtml,!1===(this.options=e).css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new n(e.css))}s.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,d=t.whiteList,u=t.onTag,h=t.onIgnoreTag,p=t.onTagAttr,f=t.onIgnoreTagAttr,g=t.safeAttrValue,m=t.escapeHtml,v=this.cssFilter;t.stripBlankChar&&(e=r.stripBlankChar(e)),t.allowCommentTag||(e=r.stripCommentTag(e));var i=!1;if(t.stripIgnoreTagBody){i=r.StripTagBody(t.stripIgnoreTagBody,h);h=i.onIgnoreTag}var n=a(e,function(e,t,r,i,n){var o,a={sourcePosition:e,position:t,isClosing:n,isWhite:r in d};if(!y(o=u(r,i,a)))return o;if(a.isWhite){if(a.isClosing)return"</"+r+">";var s=function(e){var t=w.spaceIndex(e);if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var i="/"===(e=w.trim(e.slice(t+1,-1)))[e.length-1];return i&&(e=w.trim(e.slice(0,-1))),{html:e,closing:i}}(i),l=d[r],c=b(s.html,function(e,t){var i,n=-1!==w.indexOf(l,e);return y(i=p(r,e,t,n))?n?(t=g(r,e,t,v))?e+'="'+t+'"':e:y(i=f(r,e,t,n))?void 0:i:i});i="<"+r;return c&&(i+=" "+c),s.closing&&(i+=" /"),i+=">"}return y(o=h(r,i,a))?m(i):o},m);return i&&(n=i.remove(n)),n},t.exports=s},{"./default":2,"./parser":4,"./util":5,cssfilter:9}],7:[function(e,t,i){var n=e("./default"),r=e("./parser");e("./util");function h(e){return null==e}function o(e){(e=e||{}).whiteList=e.whiteList||n.whiteList,e.onAttr=e.onAttr||n.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||n.onIgnoreAttr,this.options=e}o.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,c=t.whiteList,d=t.onAttr,u=t.onIgnoreAttr;return r(e,function(e,t,i,n,r){var o=c[i],a=!1;!0===o?a=o:"function"==typeof o?a=o(n):o instanceof RegExp&&(a=o.test(n)),!0!==a&&(a=!1);var s,l={position:t,sourcePosition:e,source:r,isWhite:a};return a?h(s=d(i,n,l))?i+":"+n:s:h(s=u(i,n,l))?void 0:s})},t.exports=o},{"./default":8,"./parser":10,"./util":11}],8:[function(e,t,i){function n(){var e={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return e}i.whiteList=n(),i.getDefaultWhiteList=n,i.onAttr=function(e,t,i){},i.onIgnoreAttr=function(e,t,i){}},{}],9:[function(e,t,i){var n=e("./default"),r=e("./css");for(var o in(i=t.exports=function(e,t){return new r(t).process(e)}).FilterCSS=r,n)i[o]=n[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},{"./css":7,"./default":8}],10:[function(e,t,i){var u=e("./util");t.exports=function(o,a){";"!==(o=u.trimRight(o))[o.length-1]&&(o+=";");var e=o.length,s=!1,l=0,c=0,d="";function t(){if(!s){var e=u.trim(o.slice(l,c)),t=e.indexOf(":");if(-1!==t){var i=u.trim(e.slice(0,t)),n=u.trim(e.slice(t+1));if(i){var r=a(l,d.length,i,n,e);r&&(d+=r+"; ")}}}l=c+1}for(;c<e;c++){var i=o[c];if("/"===i&&"*"===o[c+1]){var n=o.indexOf("*/",c+2);if(-1===n)break;l=(c=n+1)+1,s=!1}else"("===i?s=!0:")"===i?s=!1:";"===i?s||t():"\n"===i&&t()}return u.trim(d)}},{"./util":11}],11:[function(e,t,i){t.exports={indexOf:function(e,t){var i,n;if(Array.prototype.indexOf)return e.indexOf(t);for(i=0,n=e.length;i<n;i++)if(e[i]===t)return i;return-1},forEach:function(e,t,i){var n,r;if(Array.prototype.forEach)return e.forEach(t,i);for(n=0,r=e.length;n<r;n++)t.call(i,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},{}],12:[function(e,t,i){(i={THEME_RTD:"sphinx_rtd_theme",THEME_ALABASTER:"alabaster",THEME_MKDOCS_RTD:"readthedocs",THEME_CELERY:"sphinx_celery",THEME_BABEL:"babel",THEME_CLICK:"click",THEME_FLASK_SQLALCHEMY:"flask-sqlalchemy",THEME_FLASK:"flask",THEME_JINJA:"jinja",THEME_PLATTER:"platter",THEME_POCOO:"pocoo",THEME_WERKZEUG:"werkzeug",DEFAULT_PROMO_PRIORITY:5,MINIMUM_PROMO_PRIORITY:10,MAXIMUM_PROMO_PRIORITY:1,LOW_PROMO_PRIORITY:10}).ALABASTER_LIKE_THEMES=[i.THEME_ALABASTER,i.THEME_CELERY,i.THEME_BABEL,i.THEME_CLICK,i.THEME_FLASK_SQLALCHEMY,i.THEME_FLASK,i.THEME_JINJA,i.THEME_PLATTER,i.THEME_POCOO,i.THEME_WERKZEUG],i.PROMO_TYPES={LEFTNAV:"doc",FOOTER:"site-footer",FIXED_FOOTER:"fixed-footer"},t.exports=i},{}],13:[function(e,t,i){var n=e("./rtd-data"),r=e("./version-compare");function o(){$.ajaxSetup({beforeSend:function(e,t){!function(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}(t.type)&&e.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})}t.exports={init:function(){var e=n.get(),t={project:e.project,version:e.version,page:e.page,theme:e.get_theme_name(),format:"jsonp"};"docroot"in e&&(t.docroot=e.docroot),"source_suffix"in e&&(t.source_suffix=e.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(t.subproject=!0),$.ajax({url:e.proxied_api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:t,cache:!0,jsonpCallback:"callback",success:function(e){e.show_version_warning&&r.init(e.version_compare),function(e){var t=n.get();t.is_sphinx_builder()&&t.is_rtd_like_theme()?$("div.rst-other-versions").html(e.html):$("body").append(e.html),e.version_active?e.version_supported:$(".rst-current-version").addClass("rst-out-of-date")}(e),o()},error:function(){console.error("Error loading Read the Docs footer")}}),$.ajax({url:e.proxied_api_host+"/api/v2/analytics/",data:{project:e.project,version:e.version,absolute_uri:window.location.href},cache:!1,error:function(){console.error("Error registering page view")}})}}},{"./rtd-data":14,"./version-compare":18}],14:[function(e,t,i){var n=e("./constants"),r={is_rtd_like_theme:function(){return 1===$("div.rst-other-versions").length||(this.theme===n.THEME_RTD||this.theme===n.THEME_MKDOCS_RTD)},is_alabaster_like_theme:function(){return-1<n.ALABASTER_LIKE_THEMES.indexOf(this.get_theme_name())},is_sphinx_builder:function(){return!("builder"in this)||"mkdocs"!==this.builder},is_mkdocs_builder:function(){return"builder"in this&&"mkdocs"===this.builder},get_theme_name:function(){return this.theme},show_promo:function(){return"https://readthedocs.org"===this.api_host||"http://community.dev.readthedocs.io"===this.api_host||"http://127.0.0.1:8000"===this.api_host}};t.exports={get:function(){var e=Object.create(r);return $.extend(e,{api_host:"https://readthedocs.org",ad_free:!1},window.READTHEDOCS_DATA),"proxied_api_host"in e||(e.proxied_api_host="/_"),e}}},{"./constants":12}],15:[function(e,t,i){var n=e("./rtd-data"),C=e("./../../../../../../bower_components/xss/lib/index"),j=3,R=100;function I(t,i,n){try{t.append($u.template(i,n))}catch(e){t.append($u.template(i)(n))}}function r(i){function w(){void 0!==window.doSearchFallback?window.doSearchFallback():console.log("Unable to fallback to original MkDocs search.")}function n(){var e=document.getElementById("mkdocs-search-query").value,n=$.Deferred(),t=document.createElement("a");t.href=i.proxied_api_host+"/api/v2/search/",t.search="?q="+encodeURIComponent(e)+"&project="+y+"&version="+r+"&language="+o,n.then(function(e){var t=e.results||[];if(t.length){var i=$("#mkdocs-search-results");i.empty();for(var n=0;n<t.length;n+=1){var r=t[n],o=r.blocks,a=r.path;r.path.startsWith("/projects/")&&!window.location.href.startsWith(r.domain)&&(a=r.domain+a);var s=$("<article>");if(s.append($("<h3>").append($("<a>",{href:a,text:r.title}))),r.project!==y){var l="(from project "+r.project_alias+")";s.append($("<span>",{text:l}))}for(var c=0;c<o.length;c+=1){var d=o[c];if("section"===d.type){var u=a+"#"+d.id,h=d.title,p=d.content;p.length>R&&(p=p.substr(0,R)+" ...");var f=[p];if(d.highlights.title.length&&(h=d.highlights.title[0]),d.highlights.content.length){var g=d.highlights.content;f=[];for(var m=0;m<g.length&&m<j;m+=1)f.push("... "+g[m]+" ...")}h=C(h).replace(/<span>/g,"<mark>").replace(/<\/span>/g,"</mark>"),s.append($("<h4>").append($("<a>",{href:u}).html(h)));for(var v=0;v<f.length;v+=1){var b=C(f[v]);b=b.replace(/<span>/g,"<mark>").replace(/<\/span>/g,"</mark>"),s.append($("<p>").html(b))}i.append(s)}}}}else console.log("Read the Docs search returned 0 result. Falling back to MkDocs search."),w()}).fail(function(e){console.log("Read the Docs search failed. Falling back to MkDocs search."),w()}),$.ajax({url:t.href,crossDomain:!0,xhrFields:{withCredentials:!0},complete:function(e,t){return"success"!==t||void 0===e.responseJSON||0===e.responseJSON.count?n.reject():n.resolve(e.responseJSON)}}).fail(function(e,t,i){return n.reject()})}function e(){var e=document.getElementById("mkdocs-search-query");e&&e.addEventListener("keyup",n);var t=window.getSearchTermFromLocation();t&&(e.value=t,n())}var y=i.project,r=i.version,o=i.language||"en";$(document).ready(function(){window.doSearchFallback=window.doSearch,window.doSearch=n,(window.initSearch=e)()})}t.exports={init:function(){var e=n.get();e.is_sphinx_builder()?function(t){var A=t.project,i=t.version,r=t.language||"en";if("undefined"!=typeof Search&&A&&i)if(t.features&&t.features.docsearch_disabled)console.log("Server side search is disabled.");else{var e=Search.query;Search.query_fallback=e,Search.query=function(S){var n=$.Deferred(),e=document.createElement("a");e.href=t.proxied_api_host+"/api/v2/search/",e.search="?q="+$.urlencode(S)+"&project="+A+"&version="+i+"&language="+r,n.then(function(e){var t=e.results||[];if(t.length){for(var i=0;i<t.length;i+=1){var n=t[i],r=n.blocks,o=$('<li style="display: none;"></li>'),a=n.title;n.highlights.title.length&&(a=C(n.highlights.title[0]));var s=n.path+"?highlight="+$.urlencode(S);n.path.startsWith("/projects/")&&!window.location.href.startsWith(n.domain)&&(s=n.domain+s);var l=$("<a>",{href:s});if(l.html(a),l.find("span").addClass("highlighted"),o.append(l),n.project!==A){var c=" (from project "+n.project_alias+")",d=$("<span>",{text:c});o.append(d)}for(var u=0;u<r.length;u+=1){var h=r[u],p=$('<div class="context">');if("section"===h.type){var f=h,g=f.title,m=s+"#"+f.id,v=[f.content.substr(0,R)+" ..."];if(f.highlights.title.length&&(g=C(f.highlights.title[0])),f.highlights.content.length){var b=f.highlights.content;v=[];for(var w=0;w<b.length&&w<j;w+=1)v.push("... "+C(b[w])+" ...")}I(p,'<div><a href="<%= section_subtitle_link %>"><%= section_subtitle %></a></div><% for (var i = 0; i < section_content.length; ++i) { %><div><%= section_content[i] %></div><% } %>',{section_subtitle_link:m,section_subtitle:g,section_content:v})}if("domain"===h.type){var y=h,x=y.role,k=s+"#"+y.id,T=y.name,E="";""!==y.content&&(E=y.content.substr(0,R)+" ..."),y.highlights.content.length&&(E="... "+C(y.highlights.content[0])+" ..."),y.highlights.name.length&&(T=C(y.highlights.name[0])),I(p,'<div><a href="<%= domain_subtitle_link %>"><%= domain_subtitle %></a></div><div><%= domain_content %></div>',{domain_subtitle_link:k,domain_subtitle:"["+x+"]: "+T,domain_content:E})}p.find("span").addClass("highlighted"),o.append(p),u<r.length-1&&o.append($("<div class='rtd_search_hits_spacing'></div>"))}Search.output.append(o),o.slideDown(5)}Search.status.text(_("Search finished, found %s page(s) matching the search query.").replace("%s",t.length))}else console.log("Read the Docs search failed. Falling back to Sphinx search."),Search.query_fallback(S)}).fail(function(e){console.debug("Read the Docs search failed. Falling back to Sphinx search."),Search.query_fallback(S)}).always(function(){$("#search-progress").empty(),Search.stopPulse(),Search.title.text(_("Search Results")),Search.status.fadeIn(500)}),$.ajax({url:e.href,crossDomain:!0,xhrFields:{withCredentials:!0},complete:function(e,t){return"success"!==t||void 0===e.responseJSON||0===e.responseJSON.count?n.reject():n.resolve(e.responseJSON)}}).fail(function(e,t,i){return n.reject()})}}$(document).ready(function(){"undefined"!=typeof Search&&Search.init()})}(e):e.features&&!e.features.docsearch_disabled?r(e):console.log("Server side search is disabled.")}}},{"./../../../../../../bower_components/xss/lib/index":3,"./rtd-data":14}],16:[function(r,e,t){var o=r("./rtd-data");e.exports={init:function(){var e=o.get();if($(document).on("click","[data-toggle='rst-current-version']",function(){var e=$("[data-toggle='rst-versions']").hasClass("shift-up")?"was_open":"was_closed";"undefined"!=typeof gtag?gtag("event","Click",{event_category:"Flyout",event_label:e,send_to:"rtfd"}):"undefined"!=typeof ga?ga("rtfd.send","event","Flyout","Click",e):"undefined"!=typeof _gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Flyout","Click",e])}),void 0===window.SphinxRtdTheme){var t=r("./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js").ThemeNav;if($(document).ready(function(){setTimeout(function(){t.navBar||t.enable()},1e3)}),e.is_rtd_like_theme())if(!$("div.wy-side-scroll:first").length){console.log("Applying theme sidebar fix...");var i=$("nav.wy-nav-side:first"),n=$("<div />").addClass("wy-side-scroll");i.children().detach().appendTo(n),n.prependTo(i),t.navBar=n}}}}},{"./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js":1,"./rtd-data":14}],17:[function(e,t,i){e("./constants");var r,n=e("./rtd-data"),o="[data-ea-publisher]",a="#ethical-ad-placement";function s(){var e=!1;return $("<div />").attr("id","rtd-detection").attr("class","ethical-rtd").html("&nbsp;").appendTo("body"),0===$("#rtd-detection").height()&&(e=!0),$("#rtd-detection").remove(),e}function l(){console.log("---------------------------------------------------------------------------------------"),console.log("Read the Docs hosts documentation for tens of thousands of open source projects."),console.log("We fund our development (we are open source) and operations through advertising."),console.log("We promise to:"),console.log(" - never let advertisers run 3rd party JavaScript"),console.log(" - never sell user data to advertisers or other 3rd parties"),console.log(" - only show advertisements of interest to developers"),console.log("Read more about our approach to advertising here: https://docs.readthedocs.io/en/latest/advertising/ethical-advertising.html"),console.log("%cPlease allow our Ethical Ads or go ad-free:","font-size: 2em"),console.log("https://docs.readthedocs.io/en/latest/advertising/ad-blocking.html"),console.log("--------------------------------------------------------------------------------------")}function c(e){var t=null;e&&(t=e.attr("class","keep-us-sustainable"),$("<p />").text("Support Read the Docs!").appendTo(t),$("<p />").html('Please help keep us sustainable by <a href="https://docs.readthedocs.io/en/latest/advertising/ad-blocking.html#allowing-ethical-ads">allowing our Ethical Ads in your ad blocker</a> or <a href="https://readthedocs.org/sustainability/">go ad-free</a> by subscribing.').appendTo(t),$("<p />").text("Thank you! ❤️").appendTo(t))}t.exports={init:function(){var t;(r=n.get()).show_promo()&&(t=function(){var e,t,i,n=null;return 0<$(o).length?($(o).attr("data-ea-publisher","readthedocs"),$(o).attr("data-ea-manual","true"),"image"!==$(o).attr("data-ea-type")&&"text"!==$(o).attr("data-ea-type")&&$(o).attr("data-ea-type","readthedocs-sidebar"),$(o)):(0<$(a).length?(n=a,e=r.is_rtd_like_theme()?"ethical-rtd ethical-dark-theme":"ethical-alabaster"):r.is_mkdocs_builder()&&r.is_rtd_like_theme()?(n="nav.wy-nav-side",e="ethical-rtd ethical-dark-theme"):r.is_rtd_like_theme()?(n="nav.wy-nav-side > div.wy-side-scroll",e="ethical-rtd ethical-dark-theme"):r.is_alabaster_like_theme()&&(n="div.sphinxsidebar > div.sphinxsidebarwrapper",e="ethical-alabaster"),n?((!(i=(t=$("<div />").appendTo(n)).offset())||i.top-$(window).scrollTop()+200>$(window).height())&&(r.is_rtd_like_theme()?(n=$("<div />").insertAfter("footer hr"),e="ethical-rtd"):r.is_alabaster_like_theme()&&(n="div.bodywrapper .body",e="ethical-alabaster")),t.remove(),$("<div />").attr("id","rtd-sidebar").attr("data-ea-publisher","readthedocs").attr("data-ea-type","readthedocs-sidebar").attr("data-ea-manual","true").addClass(e).appendTo(n)):null)}(),function(){var e=document.createElement("script");e.src="https://media.ethicalads.io/media/client/beta/ethicalads.min.js",e.type="text/javascript",e.async=!0,e.id="ethicaladsjs",document.getElementsByTagName("head")[0].appendChild(e)}(),$.ajax({url:r.api_host+"/api/v2/sustainability/data/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:{format:"jsonp",project:r.project},success:function(e){t&&!e.ad_free&&(e.keywords&&t.attr("data-ea-keywords",e.keywords.join("|")),e.campaign_types&&t.attr("data-ea-campaign-types",e.campaign_types.join("|")),e.publisher&&t.attr("data-ea-publisher",e.publisher),"undefined"!=typeof ethicalads?ethicalads.load():!r.ad_free&&s()?(l(),c(t)):$("#ethicaladsjs").on("load",function(){"undefined"!=typeof ethicalads&&ethicalads.load()}))},error:function(){console.error("Error loading Read the Docs user and project information"),!r.ad_free&&s()&&(l(),c(t))}}))}}},{"./constants":12,"./rtd-data":14}],18:[function(e,t,i){var s=e("./rtd-data");t.exports={init:function(e){var t=s.get();if(!e.is_highest){var i=window.location.pathname.replace(t.version,e.slug),n=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not reading the most recent version of this documentation. <a href="#"></a> is the latest version available.</p></div>');n.find("a").attr("href",i).text(e.slug);for(var r=["[role=main]","main","div.body","div.document"],o=0;o<r.length;o++){var a=$(r[o]);if(a.length)break}a.prepend(n)}}}},{"./rtd-data":14}],19:[function(e,t,i){var n,r=e("./doc-embed/sponsorship"),o=e("./doc-embed/footer.js"),a=(e("./doc-embed/rtd-data"),e("./doc-embed/sphinx")),s=e("./doc-embed/search");n=function(){o.init(),a.init(),s.init(),r.init()},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(n,1):document.addEventListener("DOMContentLoaded",n)},{"./doc-embed/footer.js":13,"./doc-embed/rtd-data":14,"./doc-embed/search":15,"./doc-embed/sphinx":16,"./doc-embed/sponsorship":17}]},{},[19]);