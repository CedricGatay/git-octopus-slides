!function e(t,n,o){function i(s,l){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!l&&c)return c(s,!0);if(r)return r(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(){return e("insert-css")(".bespoke-blackout-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#101010;opacity:0;visibility:hidden;z-index:1000}.bespoke-blackout .bespoke-blackout-overlay{opacity:1;visibility:visible}"),function(e){var t=66,n=190,o="keydown",i=!1,r=function(){var t=document.createElement("div");t.className="bespoke-blackout-overlay",e.parent.appendChild(t)},s=function(){var t=e.parent.classList;i?(t.remove("bespoke-blackout"),i.forEach(function(e){e()}),i=!1):(t.add("bespoke-blackout"),i=[e.on("next",l),e.on("prev",l)])},l=function(){return!1},c=function(e){return!!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)},a=function(e){var o=e.which;o!==t&&o!==n||c(e)||s()};e.on("blackout",s),e.on("destroy",function(){e.parent.removeChild(e.parent.querySelector(".bespoke-blackout-overlay")),document.removeEventListener(o,a)}),r(),document.addEventListener(o,a)}}},{"insert-css":13}],2:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return c(1)?(l(n,o+1),!1):void(i[e]&&l(e,0))},s=function(){var e=n-1;return c(-1)?(l(n,o-1),!1):void(i[e]&&l(e,i[e].length-1))},l=function(e,t){n=e,o=t,i.forEach(function(n,o){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),o<e||o===e&&i<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),o===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},c=function(e){return void 0!==i[n][o+e]};t.on("next",r),t.on("prev",s),t.on("slide",function(e){l(e.index,0)}),l(0,0)}}},{}],3:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),l=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",l,l+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){var t=70,n=122,o="keydown",i=function(){var e,t;t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen,t.apply(e)},r=function(e){return!!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)},s=function(e){var o=e.which;o!==t&&o!==n||r(e)||(i(),o===n&&e.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(o,s)}),e.on("fullscreen.toggle",i),document.addEventListener(o,s))}}},{}],5:[function(e,t,n){t.exports=function(){return function(e){var t=function(t){var n=-1<t&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)},n=function(){var n=window.location.hash.slice(1),o=parseInt(n,10);n&&(o?t(o-1):e.slides.forEach(function(e,o){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||t(o)}))};setTimeout(function(){n(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}],6:[function(e,t,n){t.exports=function(){return function(e){var t=32,n=33,o=34,i=35,r=36,s=37,l=39,c=72,a=76,u="keydown",d=function(e,t){return e.ctrlKey||e.shiftKey&&(t===r||t===i)||e.altKey||e.metaKey},f=function(u){if(!d(u,u.which))switch(u.which){case t:return(u.shiftKey?e.prev:e.next)();case l:case o:case a:return e.next();case s:case n:case c:return e.prev();case r:return e.slide(0);case i:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(u,f)}),document.addEventListener(u,f)}}},{}],7:[function(e,t,n){t.exports=function(e){return function(t){var n=e||{},o="touchstart",i="touchmove",r="addEventListener",s="removeEventListener",l=t.parent,c=null,a=null,u="page"+("y"===n.axis?"Y":"X"),d="number"==typeof n.threshold?n.threshold:50/window.devicePixelRatio,f=function(e){c=1===e.touches.length?e.touches[0][u]:null},p=function(e){if(null!==c)return void 0===c?e.preventDefault():void(Math.abs(a=e.touches[0][u]-c)>d&&((a>0?t.prev:t.next)(),c=e.preventDefault()))};t.on("destroy",function(){l[s](o,f),l[s](i,p)}),l[r](o,f),l[r](i,p)}}},{}],8:[function(e,t,n){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),o=e("bespoke-nav-touch")(t.touch);return function(e){n(e),o(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],9:[function(e,t,n){t.exports=function(){return function(e){var t=[],n=0,o=function(){t.forEach(function(t){t.postMessage(["CURSOR",e.slide()+1+"."+n].join(" "),"*")})},i=function(t){return e.slides[t].querySelectorAll(".bespoke-bullet").length},r=function(e,t){return i(e)>t},s=function(){for(var t=e.slides[e.slide()].querySelectorAll(".bespoke-bullet"),n=0,o=t.length;n<o;n++)if(t[n].classList.contains("bespoke-bullet-current"))return n;return 0},l=function(i){var l=i.data.split(" "),c=i.source;switch(l[0]){case"REGISTER":t.push(c),c.postMessage(["REGISTERED",encodeURIComponent(document.title||"Untitled"),e.slides.length].join(" "),"*"),o();break;case"FORWARD":e.next(),n=s(),o();break;case"BACK":e.prev(),n=s(),o();break;case"START":e.slide(0,{preview:!0}),n=0,o();break;case"END":e.slide(e.slides.length-1,{preview:!0}),n=0,o();break;case"SET_CURSOR":var a,u,d=l[1]||"1";if(d.indexOf(".")!==-1){var f=d.split(".",2).map(function(e){return~~e});a=f[0],u=f[1]}else a=~~d,u=0;u>0&&!r(a-1,u)&&(a+=1,u=0),a<1?a=1:a>e.slides.length&&(a=e.slides.length),e.slide(a-1,{preview:!0});for(var p=0;p<u;p++)e.next();n=u,o();break;case"GET_NOTES":var v=e.slides[e.slide()].querySelector("[role=note]"),b=v?encodeURIComponent(v.innerHTML):"";c.postMessage(["NOTES",b].join(" "),"*")}};e.on("destroy",function(){removeEventListener("message",l,!1)}),addEventListener("message",l,!1)}}},{}],10:[function(e,t,n){t.exports=function(t){return e("insert-css")(".bespoke-parent.bespoke-overview{pointer-events:auto}.bespoke-overview :not(img){pointer-events:none}.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;pointer-events:auto}.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}.bespoke-overview-counter{counter-reset:overview}.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",{prepend:!0}),function(e){t="object"==typeof t?t:{};var n,o=79,i=13,r=38,s=40,l=/, */,c=/^none(?:, ?none)*$/,a=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,u=/(^\?|&)overview(?=$|&)/,d=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",f=["webkit","Moz"],p="number"==typeof t.columns?parseInt(t.columns):3,v="number"==typeof t.margin?parseFloat(t.margin):15,b=null,m=function(e,t){if(!(t in e.style))for(var n=t.charAt(0).toUpperCase()+t.substr(1),o=0,i=f.length;o<i;o++)if(f[o]+n in e.style)return f[o]+n;return t},h=function(e,t){return parseFloat(e.style[t].slice(6,-1))},k=function(e){if("zoom"in e.style)return parseFloat(e.style.zoom)||void 0},y=function(e){var t=[],n=getComputedStyle(e),o=n[m(e,"transitionProperty")];if(!o||c.test(o))return t;o=o.split(l);var i=n[m(e,"transitionDuration")].split(l),r=n[m(e,"transitionDelay")].split(l);return o.forEach(function(e,n){"0s"===i[n]&&"0s"===r[n]||t.push(e)}),t},w=function(e,t,n,o){t&&(e.style[t]=n),e.offsetHeight,t&&(e.style[t]=o)},E=function(){e.on("activate",E)(),e.parent.scrollLeft=e.parent.scrollTop=0,(t.autostart||u.test(location.search))&&setTimeout(C,100)},g=function(){F(e.slides.indexOf(this))},x=function(t,n){var o=n.index+t;return o>=0&&o<e.slides.length&&e.slide(o,{preview:!0}),!1},L=function(e){e.scrollIntoView!==!1&&T(e.slide,e.index,k(e.slide))},S=function(e){var t=location.search.replace(u,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(t.length>0?t+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+t+location.hash)},T=function(t,n,o){e.parent.scrollTop=n<p?0:e.parent.scrollTop+t.getBoundingClientRect().top*(o||1)},z=function(e,t,o,i){o.removeEventListener(d,n,!1),i&&i!==o&&i.removeEventListener(d,n,!1),n=void 0,t.remove("bespoke-overview-"+e)},K=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return t.style.width="",t;var n=document.createElement("header");n.className="bespoke-title",n.style[m(n,"transformOrigin")]="0 0";var o=document.createElement("h1");return o.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(o),w(e.insertBefore(n,t)),n},C=function(){var o,i,r=e.slides,s=e.parent,l=s.classList,c=r.length-1,a=e.slide(),u=a>0?r[0]:r[c],f=m(u,"transform"),E=s.querySelector(".bespoke-scale-parent"),F=1,R=0,O=b,q="webkitAppearance"in s.style;E?F=h(E,f):(o=k(u))&&(F=o),n&&z("from",l,r[0],r[c]),t.title&&(i=K(s)),O||(e.slide(a,{preview:!0}),l.add("bespoke-overview"),addEventListener("resize",C,!1),b=[e.on("activate",L),e.on("prev",x.bind(null,-1)),e.on("next",x.bind(null,1))],t.counter&&l.add("bespoke-overview-counter"),t.location&&S(!0),l.add("bespoke-overview-to"),R=c>0?y(u).length:y(u).join(" ").indexOf("transform")<0?0:1,s.style.overflowY="scroll",s.style.scrollBehavior="smooth",q&&r.forEach(function(e){w(e,"marginBottom","0%","")}));var A=s.clientWidth/F,N=s.clientHeight/F,W=(E||s).offsetWidth-s.clientWidth,B=E?W/2/F:0,D=u.offsetWidth,H=u.offsetHeight,M=A/(p*D+(p+1)*v),I=F*M,U=D*M,j=H*M,$=(A-U)/2,Y=(N-j)/2,_=v*M,G=0,P=0,V=0;i&&(t.scaleTitle!==!1?(i.style[o?"zoom":f]=o?I:"scale("+I+")",i.style.width=s.clientWidth/I+"px",G=i.offsetHeight*M):(W>0&&(i.style.width=s.clientWidth+"px"),G=i.offsetHeight/F)),r.forEach(function(e){var t=V*U+(V+1)*_-B-$,n=P*j+(P+1)*_+G-Y;e.style[f]="translate("+(t.toString().indexOf("e-")<0?t:0)+"px, "+(n.toString().indexOf("e-")<0?n:0)+"px) scale("+M+")",P*p+V===c&&(e.style.marginBottom=v+"px"),e.addEventListener("click",g,!1),V===p-1?(P+=1,V=0):V+=1}),O?T(r[a],a,o):R>0?u.addEventListener(d,n=function(e){e.target===this&&0===(R-=1)&&(z("to",l,this),q&&s.scrollHeight>s.clientHeight&&w(s,"overflowY","auto","scroll"),T(r[a],a,o))},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-to"),T(r[a],a,o))},F=function(o){e.slide("number"==typeof o?o:e.slide(),{scrollIntoView:!1});var i,r=e.slides,s=e.parent,l=s.classList,c=r.length-1,u=e.slide()>0?r[0]:r[c],f=m(u,"transform"),p=m(u,"transition"),v=s.querySelector(".bespoke-scale-parent"),E="webkitAppearance"in s.style;v?i=h(v,f):(i=k(u))||(i=1),n&&z("to",l,r[0],r[c]);var x=s.scrollTop/i,L=(s.offsetWidth-(v||s).clientWidth)/2/i;s.style.scrollBehavior=s.style.overflowY="",r.forEach(function(e){E&&w(e,"marginBottom","0%",""),e.removeEventListener("click",g,!1)}),(x||L)&&r.forEach(function(e){var t=e.style[f].match(a);e.style[f]="translate("+(parseFloat(t[1])-L)+"px, "+(parseFloat(t[2])-x)+"px) scale("+t[3]+")",w(e,p,"none","")}),s.scrollTop=0,l.remove("bespoke-overview"),removeEventListener("resize",C,!1),(b||[]).forEach(function(e){e()}),b=null,t.counter&&l.remove("bespoke-overview-counter"),t.location&&S(!1),l.add("bespoke-overview-from");var T=c>0?y(u).length:y(u).join(" ").indexOf("transform")<0?0:1;r.forEach(function(e){e.style[f]=""}),T>0?u.addEventListener(d,n=function(e){e.target===this&&0===(T-=1)&&z("from",l,this)},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-from"))},R=function(){b?F():C()},O=function(t){if(t.which===o)t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||R();else if(b)switch(t.which){case i:t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||F();break;case r:return x(-p,{index:e.slide()});case s:return x(p,{index:e.slide()})}};e.on("activate",E),e.on("destroy",function(){removeEventListener("resize",C,!1),document.removeEventListener("keydown",O,!1)}),e.on("overview",R),document.addEventListener("keydown",O,!1)}}},{"insert-css":13}],11:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,o=t.slides[0],i=o.offsetHeight,r=o.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,l=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},c=s?t.slides:t.slides.map(l),a=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,o){return o+e in n.style?o+e:t},e.toLowerCase())}("Transform"),u=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[a]="scale("+e+")"},d=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;c.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}],12:[function(e,t,n){var o=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),o=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(d("deactivate",f(i,t)),i=o[e],d("activate",f(i,t)))},l=function(e,t){return arguments.length?void(d("slide",f(o[e],t))&&s(e,t)):o.indexOf(i)},c=function(e,t){var n=o.indexOf(i)+e;d(e>0?"next":"prev",f(i,t))&&s(n,t)},a=function(e,t){return(r[e]||(r[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},d=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},p={on:a,off:u,fire:d,slide:l,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(p)}),s(0),p};t.exports={from:o}},{}],13:[function(e,t,n){var o={};t.exports=function(e,t){if(!o[e]){o[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}],14:[function(e,t,n){var o="webkitAppearance"in document.documentElement.style,i=o?"zoom":"transform",r=e("bespoke"),s=e("bespoke-bullets"),l=e("bespoke-classes"),c=e("bespoke-fullscreen"),a=e("bespoke-hash"),u=e("bespoke-nav"),d=e("bespoke-overview"),f=e("bespoke-scale"),p=e("bespoke-onstage"),v=e("bespoke-blackout");r.from({parent:"article.deck",slides:"section"},[l(),u(),c(),i?f(i):function(e){},d({columns:4}),s(".build, .build-items > *:not(.build-items)"),a(),p(),v()])},{bespoke:12,"bespoke-blackout":1,"bespoke-bullets":2,"bespoke-classes":3,"bespoke-fullscreen":4,"bespoke-hash":5,"bespoke-nav":8,"bespoke-onstage":9,"bespoke-overview":10,"bespoke-scale":11}]},{},[14]);