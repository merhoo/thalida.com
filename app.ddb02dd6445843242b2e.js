webpackJsonp([1],[function(t,e,o){o(11),o(4),o(1),o(175),o(153),o(148),o(3),o(116),o(130),o(124),o(136);var n=angular.element(document.querySelectorAll(".app")).scope();"undefined"!=typeof n&&null!==n||angular.bootstrap(document,["app"])},,function(t,e){t.exports={requireAll:function(t){return t.keys().map(t)}}},function(t,e,o){var n=o(2).requireAll;n(o(118))},,function(t,e,o){"use strict";o(152),o(187),angular.module("app").config(o(138)).controller("MainController",o(137))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";var n={TIME_GROUPS:o(180),FUN_FACTS:o(178),VISIT_GROUPS:o(181),PROJECTS:o(179),ABOUT:o(177)};for(var i in n)if(n.hasOwnProperty(i)){var r=n[i];angular.module("app").constant(i,r)}},function(t,e,o){"use strict";o(113);angular.module("app",[o(6),o(7),o(8),o(9),o(10),o(143),"ngStorage"]).config(o(117)).config(["tooltipsConfProvider",function(t){t.configure({smart:!1,size:"small",speed:"medium",side:"bottom"})}]).run(function(){jQuery.Color.fn.contrastColor=function(){var t=this._rgba[0],e=this._rgba[1],o=this._rgba[2];return(299*t+587*e+144*o)/1e3>=230?"black":"white"},jQuery.Color.fn.secondaryColors=function(){var t={},e={current:this.hsla()},o={left:e.current[0]-35,right:e.current[0]+35};return e.left=angular.copy(e.current),e.right=angular.copy(e.current),o.left=o.left<0?359+o.left:o.left,e.left[0]=o.left,t.left=jQuery.Color().hsla(e.left),o.right=o.right>359?o.right-359:o.right,e.right[0]=o.right,t.right=jQuery.Color().hsla(e.right),t},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()}),o(115),o(5)},function(t,e){"use strict";var o=["$stateProvider","$urlRouterProvider","$locationProvider"],n=function(t,e,o){e.otherwise("/"),o.html5Mode(!1),e.rule(function(t,e){var o=e.path(),n="/"===o[o.length-1];if(!n)return o+="/"})};n.$inject=o,t.exports=n},function(t,e,o){function n(t){return o(i(t))}function i(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./dribbble-blue.svg":154,"./dribbble-white.svg":155,"./emoji-laughing_with_tears.svg":156,"./geometric-pattern-2.png":157,"./geometric-pattern-background.svg":158,"./geometric-pattern-foreground.svg":159,"./geometric-pattern-shapes.svg":160,"./geometric-pattern-small.png":161,"./geometric-pattern.png":162,"./geometric-pattern.svg":163,"./github-blue.svg":164,"./github-white.svg":165,"./index":3,"./index.js":3,"./logo-48.png":166,"./logo-512.png":167,"./logo-circle-512.png":168,"./twitter-white.svg":169,"./woctechchat-me-coding.jpg":170,"./woctechchat-me-standing-2.png":171,"./woctechchat-me-standing-2.svg":172,"./woctechchat-me-standing-pattern.png":173,"./woctechchat-me-standing.jpg":174};n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=118},function(t,e,o){function n(t){return o(i(t))}function i(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./cover/index.js":121,"./highlight/index.js":123,"./interactive/index.js":125};n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=119},function(t,e){"use strict";t.exports={templateUrl:"components/cover/cover.html",bindings:{time:"<"},controller:["$scope","$element","FUN_FACTS","utils","visits",function(t,e,o,n,i){var r=this,a=e.find(".t_cover");r.isFirstUpdate=!0,r.updateWhen=40,r.numUpdates=0,r.greeting={},r.funFact={},r.sanitize=function(t){return n.sanitize(t)},r.getDiffRandValue=function(t,e){var o=angular.copy(t),i=angular.copy(e),r={};return i&&"undefined"!==i.index&&o.splice(i.index,1),r.text=n.getRandom(o),r.index=o.indexOf(r.text),r},r.setSalutation=function(){var t=i.getGroup().sayings||[r.time.data.salutation];return r.salutation=n.getRandom(t),r.salutation},r.setGreeting=function(){return r.greeting=r.getDiffRandValue(r.time.data.sayings,r.greeting),r.greeting},r.setFunFact=function(){return r.funFact=r.getDiffRandValue(o,r.funFact),r.funFact},r.setBackground=function(){var t="135deg",e=r.time.color.secondaryColors().left.toHexString(),o=r.time.hexColor,n="("+t+","+e+","+o+")";a.css({"background-color":o,"background-image":"-webkit-linear-gradient"+n,"background-image":"-moz-linear-gradient"+n,"background-image":"-o-linear-gradient"+n,"background-image":"linear-gradient"+n})},r.setFontColor=function(){r.fontColor=r.time.color.contrastColor()},r.updateCover=function(){(r.isFirstUpdate||r.updateWhen===r.numUpdates)&&(r.setGreeting(),r.setFunFact(),r.numUpdates=0),r.setBackground(),r.setFontColor(),r.isFirstUpdate=!1,r.numUpdates+=1},r.$onInit=function(){r.setSalutation(),r.updateCover()},r.$onChanges=r.updateCover}]}},function(t,e,o){"use strict";o(149),o(184),angular.module("app").component("tCover",o(120))},function(t,e){"use strict";t.exports={templateUrl:"components/highlight/highlight.html",bindings:{text:"@",tooltip:"@?"},controller:["$scope","$element","utils",function(t,e,o){var n=this;n.sanitize=function(t){return o.sanitize(t)},n.$onInit=function(){},n.$onChanges=function(){}}]}},function(t,e,o){"use strict";o(150),o(185),angular.module("app").component("tHighlight",o(122))},function(t,e,o){var n=o(2).requireAll;n(o(119))},function(t,e,o){"use strict";o(151),o(186),angular.module("app").component("tInteractive",o(126))},function(t,e){"use strict";t.exports={templateUrl:"components/interactive/interactive.html",controller:["$scope","$element","$timeout","utils",function(t,e,o,n){var i=this,r=null,a=e.find(".t_interactive"),s=a.find(".t_interactive-background"),l=a.find(".t_interactive-foreground"),c=a.find(".t_interactive-shapes");i.$onInit=function(){i.layers=[{$el:s,shiftBy:12},{$el:l,shiftBy:8},{$el:c,shiftBy:4}]},i.onMouseover=function(t){var e=a.offset(),o={height:a.outerHeight(!0),width:a.outerWidth(!0)},n={x:t.pageX-e.left,y:t.pageY-e.top},r={x:o.width/2,y:o.height/2};i.layers.forEach(function(t){i.setBackgroundPosition(t.$el,{x:n.x-r.x,y:n.y-r.y},t.shiftBy)})},i.onMouseenter=function(){(r||null!==r)&&(o.cancel(r),r=null),a.removeClass("leaving")},i.onMouseleave=function(){(r||null!==r)&&(o.cancel(r),r=null),r=o(function(){a.addClass("leaving"),i.layers.forEach(function(t){i.setBackgroundPosition(t.$el,{x:0,y:0},1)})},500)},i.setBackgroundPosition=function(t,e,o){var n=e.x/o+"px",i=e.y/o+"px";t.css({"background-position":n+" "+i})}}]}},function(t,e,o){function n(t){return o(i(t))}function i(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./fancyTime/index.js":129,"./utils/index.js":131,"./visits/index.js":133};n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=127},function(t,e){"use strict";var o=["$interval","TIME_GROUPS"],n=function(t,e){var o=function(){this.groups=e,this.totalGroups=this.groups.length,this.interval=null,this.waitTime=1e3,this.tickCallbacks=[]};return o.prototype.getRange=function(t){for(var e=t||moment(),o=parseInt(e.format("H"),10),n=parseInt(e.format("m"),10),i=o<12?0:3,r=o<12?4:this.totalGroups,a=[],s=i;s<r;s+=1){var l=this.groups[s],c=s+1<this.totalGroups?this.groups[s+1]:this.groups[0];if(o>=l.beginAt&&(o<c.beginAt||0===c.beginAt)){a[0]=l,a[1]=c;break}}return{time:{now:e,hour:o,minute:n},groups:a}},o.prototype.get=function(){var t,e,o=this.getRange(),n={start:jQuery.Color(o.groups[0].color),end:jQuery.Color(o.groups[1].color)},i={},r={},a=0===o.groups[1].beginAt?24:o.groups[1].beginAt,s=Math.abs(a-o.groups[0].beginAt),l=Math.abs(o.time.hour-o.groups[0].beginAt);return i.hour=+(1/s).toFixed(3),i.minute=+(i.hour/60).toFixed(3),r.hour=+(i.hour*l).toFixed(3),r.minute=+(i.minute*o.time.minute).toFixed(3),r.total=+(r.hour+r.minute).toFixed(3),t=n.start.transition(n.end,r.total),e=l<s-1?o.groups[0]:o.groups[1],{range:o.groups,data:e,color:t,hexColor:t.toHexString()}},o.prototype.run=function(e,o){"undefined"!=typeof this.interval&&null!==this.interval&&(t.cancel(this.interval),this.interval=null),this.tickCallbacks.push(e),this.onTick(),this.interval=t(this.onTick.bind(this),o||this.waitTime)},o.prototype.stop=function(e){this.tickCallbacks=[],"undefined"!=typeof this.interval&&null!==this.interval&&(t.cancel(this.interval),this.interval=null)},o.prototype.onTick=function(){var t=this.get();this.tickCallbacks.forEach(function(e){"function"==typeof e&&e(t)})},new o};n.$inject=o,t.exports=n},function(t,e,o){"use strict";angular.module("app").service("fancyTime",o(128)),t.exports="fancyTime"},function(t,e,o){var n=o(2).requireAll;n(o(127))},function(t,e,o){"use strict";angular.module("app").service("utils",o(132)),t.exports="utils"},function(t,e){"use strict";var o=["$sce"],n=function(t){var e={};return e.getRandom=function(t){return t[Math.floor(Math.random()*t.length)]},e.sanitize=function(e){return t.trustAsHtml(e)},e};n.$inject=o,t.exports=n},function(t,e,o){"use strict";angular.module("app").service("visits",o(134)),t.exports="visits"},function(t,e){"use strict";var o=["$localStorage","VISIT_GROUPS"],n=function(t,e){var o=function(){this.groups=e,this.totalGroups=this.groups.length,this.storage=t.$default({visits:1,lastVisit:moment().format("x")})};return o.prototype.increment=function(){var t=moment(),e=moment(this.storage.lastVisit,"x"),o=1===this.storage.visits;return(o&&t.diff(e,"seconds")>5||!o&&t.diff(e,"minutes")>2)&&(this.storage.visits+=1,this.storage.lastVisit=moment().format("x")),this.storage.visits},o.prototype.getGroup=function(){for(var t,e=0;e<this.totalGroups;e+=1){var o=this.groups[e];if(this.storage.visits<=o.minVisits||e==this.totalGroups-1){t=o;break}}return t},o.prototype.getTotal=function(){return this.storage.visits},o.prototype.getLastVisitTime=function(){return this.storage.lastVisit},new o};n.$inject=o,t.exports=n},function(t,e,o){function n(t){return o(i(t))}function i(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./main/index.js":5};n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id=135},function(t,e,o){var n=o(2).requireAll;n(o(135))},function(t,e){"use strict";var o=["$scope","$sce","utils","fancyTime","visits","PROJECTS","ABOUT"],n=function(t,e,o,n,i,r,a){var s=this;s.render=!1,s.init=function(){i.increment(),s.year=moment().format("Y"),s.about=a,s.projectsList=r,s.currFancyTime=null,n.run(function(t){s.currFancyTime=angular.copy(t)}),s.render=!0},s.sanitize=o.sanitize,s.scrollTop=function(){$("body").scrollTop(0),$(".main-view-content").scrollTop(0)},s.init()};n.$inject=o,t.exports=n},function(t,e){"use strict";var o=function(t){t.state("main",{url:"/",templateUrl:"views/main/main.html",controller:"MainController",controllerAs:"main"})};o.$inject=["$stateProvider"],t.exports=o},,,,function(t,e){!function(t,e){"use strict";var o="tooltips",n=function(){var t,o=[],n=0,i=function(t){t-n>=15?(o.forEach(function(t){t()}),n=t):e.console.log("Skipped!")},r=function(){e.clearTimeout(t),t=e.setTimeout(function(){e.requestAnimationFrame(i)},500)},a=function(t){t&&o.push(t)};return{add:function(t){o.length||e.addEventListener("resize",r),a(t)},remove:function(){o.length||(e.clearTimeout(t),e.removeEventListener("resize",r))}}}(),i=function(t){var e={};return t.removeAttr(o),void 0!==t.attr("tooltip-template")&&(e["tooltip-template"]=t.attr("tooltip-template"),t.removeAttr("tooltip-template")),void 0!==t.attr("tooltip-template-url")&&(e["tooltip-template-url"]=t.attr("tooltip-template-url"),t.removeAttr("tooltip-template-url")),void 0!==t.attr("tooltip-template-url-cache")&&(e["tooltip-template-url-cache"]=t.attr("tooltip-template-url-cache"),t.removeAttr("tooltip-template-url-cache")),void 0!==t.attr("tooltip-controller")&&(e["tooltip-controller"]=t.attr("tooltip-controller"),t.removeAttr("tooltip-controller")),void 0!==t.attr("tooltip-side")&&(e["tooltip-side"]=t.attr("tooltip-side"),t.removeAttr("tooltip-side")),void 0!==t.attr("tooltip-show-trigger")&&(e["tooltip-show-trigger"]=t.attr("tooltip-show-trigger"),t.removeAttr("tooltip-show-trigger")),void 0!==t.attr("tooltip-hide-trigger")&&(e["tooltip-hide-trigger"]=t.attr("tooltip-hide-trigger"),t.removeAttr("tooltip-hide-trigger")),void 0!==t.attr("tooltip-smart")&&(e["tooltip-smart"]=t.attr("tooltip-smart"),t.removeAttr("tooltip-smart")),void 0!==t.attr("tooltip-class")&&(e["tooltip-class"]=t.attr("tooltip-class"),t.removeAttr("tooltip-class")),void 0!==t.attr("tooltip-close-button")&&(e["tooltip-close-button"]=t.attr("tooltip-close-button"),t.removeAttr("tooltip-close-button")),void 0!==t.attr("tooltip-size")&&(e["tooltip-size"]=t.attr("tooltip-size"),t.removeAttr("tooltip-size")),void 0!==t.attr("tooltip-speed")&&(e["tooltip-speed"]=t.attr("tooltip-speed"),t.removeAttr("tooltip-speed")),e},r=function(t){return e.getComputedStyle?e.getComputedStyle(t,""):t.currentStyle?t.currentStyle:void 0},a=function(o){for(var n,i,r=e.document.querySelectorAll("._exradicated-tooltip"),a=0,s=r.length;a<s;a+=1)if(n=r.item(a),n&&(i=t.element(n),i.data("_tooltip-parent")&&i.data("_tooltip-parent")===o))return i},s=function(t){var e=a(t);e&&e.remove()},l=function(t){if(t){var o=t[0].getBoundingClientRect();return(o.top<0||o.top>e.document.body.offsetHeight||o.left<0||o.left>e.document.body.offsetWidth||o.bottom<0||o.bottom>e.document.body.offsetHeight||o.right<0||o.right>e.document.body.offsetWidth)&&(t.css({top:"",left:"",bottom:"",right:""}),!0)}throw new Error("You must provide a position")},c=function(){var t={side:"top",showTrigger:"mouseover",hideTrigger:"mouseleave","class":"",smart:!1,closeButton:!1,size:"",speed:"steady",tooltipTemplateUrlCache:!1};return{configure:function(e){var o,n=Object.keys(t),i=0;if(e)for(;i<n.length;i+=1)o=n[i],o&&e[o]&&(t[o]=e[o])},$get:function(){return t}}},u=["$log","$http","$compile","$timeout","$controller","$injector","tooltipsConf","$templateCache",function(o,c,u,p,d,h,g,f){var m=function(o,h,m,v,b){if(m.tooltipTemplate&&m.tooltipTemplateUrl)throw new Error("You can not define tooltip-template and tooltip-template-url together");if(!m.tooltipTemplateUrl&&!m.tooltipTemplate&&m.tooltipController)throw new Error("You can not have a controller without a template or templateUrl defined");var y,w="_"+g.side,C=g.showTrigger,x=g.hideTrigger,_=g.size,k="_"+g.speed;m.tooltipSide=m.tooltipSide||g.side,m.tooltipShowTrigger=m.tooltipShowTrigger||g.showTrigger,m.tooltipHideTrigger=m.tooltipHideTrigger||g.hideTrigger,m.tooltipClass=m.tooltipClass||g["class"],m.tooltipSmart="true"===m.tooltipSmart||g.smart,m.tooltipCloseButton=m.tooltipCloseButton||g.closeButton.toString(),m.tooltipSize=m.tooltipSize||g.size,m.tooltipSpeed=m.tooltipSpeed||g.speed,m.tooltipAppendToBody="true"===m.tooltipAppendToBody,b(o,function(o,g){var v=i(o),b=t.element(e.document.createElement("tooltip")),T=t.element(e.document.createElement("tip-cont")),$=t.element(e.document.createElement("tip")),j=t.element(e.document.createElement("tip-tip")),A=t.element(e.document.createElement("span")),S=t.element(e.document.createElement("tip-arrow")),F=function(){return T.html()},I=function(t){void 0!==t&&T[0].getClientRects().length>1?b.addClass("_multiline"):b.removeClass("_multiline")},H=function(o){if($.addClass("_hidden"),m.tooltipSmart)switch(m.tooltipSide){case"top":l($)&&(b.removeClass("_top"),b.addClass("_left"),l($)&&(b.removeClass("_left"),b.addClass("_bottom"),l($)&&(b.removeClass("_bottom"),b.addClass("_right"),l($)&&(b.removeClass("_right"),b.addClass("_top")))));break;case"left":l($)&&(b.removeClass("_left"),b.addClass("_bottom"),l($)&&(b.removeClass("_bottom"),b.addClass("_right"),l($)&&(b.removeClass("_right"),b.addClass("_top"),l($)&&(b.removeClass("_top"),b.addClass("_left")))));break;case"bottom":l($)&&(b.removeClass("_bottom"),b.addClass("_left"),l($)&&(b.removeClass("_left"),b.addClass("_top"),l($)&&(b.removeClass("_top"),b.addClass("_right"),l($)&&(b.removeClass("_right"),b.addClass("_bottom")))));break;case"right":l($)&&(b.removeClass("_right"),b.addClass("_top"),l($)&&(b.removeClass("_top"),b.addClass("_left"),l($)&&(b.removeClass("_left"),b.addClass("_bottom"),l($)&&(b.removeClass("_bottom"),b.addClass("_right")))));break;default:throw new Error("Position not supported")}if(m.tooltipAppendToBody){var n,i,a,c,u,p=r(j[0]),d=r(S[0]),h=r($[0]),g=$[0].getBoundingClientRect(),f=t.copy($),v=0,y=p.length,w=0,C=d.length,x=0,_=h.length,k={},T={},A={};for($.removeClass("_hidden"),f.removeClass("_hidden"),f.data("_tooltip-parent",b),s(b);v<y;v+=1)n=p[v],n&&p.getPropertyValue(n)&&(k[n]=p.getPropertyValue(n));for(;w<C;w+=1)n=d[w],n&&d.getPropertyValue(n)&&(A[n]=d.getPropertyValue(n));for(;x<_;x+=1)n=h[x],n&&"position"!==n&&"display"!==n&&"opacity"!==n&&"z-index"!==n&&"bottom"!==n&&"height"!==n&&"left"!==n&&"right"!==n&&"top"!==n&&"width"!==n&&h.getPropertyValue(n)&&(T[n]=h.getPropertyValue(n));i=e.parseInt(h.getPropertyValue("padding-top"),10),a=e.parseInt(h.getPropertyValue("padding-bottom"),10),c=e.parseInt(h.getPropertyValue("padding-left"),10),u=e.parseInt(h.getPropertyValue("padding-right"),10),T.top=g.top+e.pageYOffset+"px",T.left=g.left+e.pageXOffset+"px",T.height=g.height-(i+a)+"px",T.width=g.width-(c+u)+"px",f.css(T),f.children().css(k),f.children().next().css(A),o&&"true"!==m.tooltipHidden&&(f.addClass("_exradicated-tooltip"),t.element(e.document.body).append(f))}else $.removeClass("_hidden"),o&&"true"!==m.tooltipHidden&&b.addClass("active")},B=function(){m.tooltipAppendToBody?s(b):b.removeClass("active")},E=function at(t){var e,o=t.parent();t[0]&&(t[0].scrollHeight>t[0].clientHeight||t[0].scrollWidth>t[0].clientWidth)&&t.on("scroll",function(){var t=this;e&&p.cancel(e),e=p(function(){var e=a(b),o=b[0].getBoundingClientRect(),n=t.getBoundingClientRect();o.top<n.top||o.bottom>n.bottom||o.left<n.left||o.right>n.right?s(b):e&&H(!0)})}),o&&o.length&&at(o)},P=function(t){t?(b.removeClass("_force-hidden"),j.empty(),j.append(A),j.append(t),p(function(){H()})):(j.empty(),b.addClass("_force-hidden"))},z=function(t){t&&!m.tooltipTemplateUrlCache?c.get(t).then(function(t){t&&t.data&&(b.removeClass("_force-hidden"),j.empty(),j.append(A),j.append(u(t.data)(g)),p(function(){H()}))}):(j.empty(),b.addClass("_force-hidden"))},O=function(t){if(t&&m.tooltipTemplateUrl){var e=f.get(m.tooltipTemplateUrl);"undefined"!=typeof e&&(b.removeClass("_force-hidden"),j.empty(),j.append(A),j.append(u(e)(g)),p(function(){H()}))}else j.empty(),b.addClass("_force-hidden")},q=function(t){t&&(w&&b.removeAttr("_"+w),b.addClass("_"+t),w=t)},M=function(t){t&&(C&&b.off(C),b.on(t,H),C=t)},R=function(t){t&&(x&&b.off(x),b.on(t,B),x=t)},W=function(t){t&&(y&&$.removeClass(y),$.addClass(t),y=t)},U=function(){"boolean"!=typeof m.tooltipSmart&&(m.tooltipSmart="true"===m.tooltipSmart)},G=function(t){var e="true"===t;e?(A.on("click",B),A.css("display","block")):(A.off("click"),A.css("display","none"))},V=function(e){if(e){var o,n=d(e,{$scope:g}),i=g.$new(!1,g),r=e.indexOf("as");r>=0?(o=e.substr(r+3),i[o]=n):t.extend(i,n),j.replaceWith(u(j)(i)),ot()}},D=function(t){t&&(_&&j.removeClass("_"+_),j.addClass("_"+t),_=t)},N=function(t){t&&(k&&b.removeClass("_"+k),b.addClass("_"+t),k=t)},L=m.$observe("tooltipTemplate",P),Q=m.$observe("tooltipTemplateUrl",z),Y=m.$observe("tooltipTemplateUrlCache",O),J=m.$observe("tooltipSide",q),K=m.$observe("tooltipShowTrigger",M),X=m.$observe("tooltipHideTrigger",R),Z=m.$observe("tooltipClass",W),tt=m.$observe("tooltipSmart",U),et=m.$observe("tooltipCloseButton",G),ot=m.$observe("tooltipController",V),nt=m.$observe("tooltipSize",D),it=m.$observe("tooltipSpeed",N),rt=g.$watch(F,I);A.attr({id:"close-button"}),A.html("&times;"),$.addClass("_hidden"),j.append(A),j.append(m.tooltipTemplate),$.append(j),$.append(S),T.append(o),b.attr(v),b.addClass("tooltips"),b.append(T),b.append($),h.after(b),m.tooltipAppendToBody&&(n.add(function(){E(b)}),E(b)),n.add(function(){I(),H()}),p(function(){H(),$.removeClass("_hidden"),b.addClass("_ready")}),g.$on("$destroy",function(){L(),Q(),Y(),J(),K(),X(),Z(),tt(),et(),nt(),it(),rt(),n.remove(),o.off(m.tooltipShowTrigger+" "+m.tooltipHideTrigger)})})};return{restrict:"A",transclude:"element",priority:1,terminal:!0,link:m}}];t.module("720kb.tooltips",[]).provider(o+"Conf",c).directive(o,u)}(angular,window)},function(t,e,o){var n;(function(t){!function(t,e){"use strict";o(142),e.exports="720kb.tooltips"}(n,t)}).call(e,o(114)(t))},,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,o){t.exports=o.p+"assets/images/dribbble-blue.svg"},function(t,e,o){t.exports=o.p+"assets/images/dribbble-white.svg"},function(t,e,o){t.exports=o.p+"assets/images/emoji-laughing_with_tears.svg"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern-2.png"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern-background.svg"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern-foreground.svg"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern-shapes.svg"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern-small.png"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern.png"},function(t,e,o){t.exports=o.p+"assets/images/geometric-pattern.svg"},function(t,e,o){t.exports=o.p+"assets/images/github-blue.svg"},function(t,e,o){t.exports=o.p+"assets/images/github-white.svg"},function(t,e,o){t.exports=o.p+"assets/images/logo-48.png"},function(t,e,o){t.exports=o.p+"assets/images/logo-512.png"},function(t,e,o){t.exports=o.p+"assets/images/logo-circle-512.png"},function(t,e,o){t.exports=o.p+"assets/images/twitter-white.svg"},function(t,e,o){t.exports=o.p+"assets/images/woctechchat-me-coding.jpg"},function(t,e,o){t.exports=o.p+"assets/images/woctechchat-me-standing-2.png"},function(t,e,o){t.exports=o.p+"assets/images/woctechchat-me-standing-2.svg"},function(t,e,o){t.exports=o.p+"assets/images/woctechchat-me-standing-pattern.png"},function(t,e,o){t.exports=o.p+"assets/images/woctechchat-me-standing.jpg"},function(t,e){/*!
	 * jQuery Color Animations v@VERSION
	 * https://github.com/jquery/jquery-color
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: @DATE
	 */
!function(t,e){function o(t,e,o){var n=p[e.type]||{};return null==t?o||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function n(e){var o=c(),n=o._rgba=[];return e=e.toLowerCase(),g(l,function(t,i){var r,a=i.re.exec(e),s=a&&i.parse(a),l=i.space||"rgba";if(s)return r=o[l](s),o[u[l].cache]=r[u[l].cache],n=o._rgba=r._rgba,!1}),n.length?("0,0,0,0"===n.join()&&t.extend(n,r.transparent),o):r[e]}function i(t,e,o){return o=(o+1)%1,6*o<1?t+(e-t)*o*6:2*o<1?e:3*o<2?t+(e-t)*(2/3-o)*6:t}var r,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",s=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],c=t.Color=function(e,o,n,i){return new t.Color.fn.parse(e,o,n,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},p={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=c.support={},h=t("<p>")[0],g=t.each;h.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=h.style.backgroundColor.indexOf("rgba")>-1,g(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),c.fn=t.extend(c.prototype,{parse:function(i,a,s,l){if(i===e)return this._rgba=[null,null,null,null],this;(i.jquery||i.nodeType)&&(i=t(i).css(a),a=e);var p=this,d=t.type(i),h=this._rgba=[];return a!==e&&(i=[i,a,s,l],d="array"),"string"===d?this.parse(n(i)||r._default):"array"===d?(g(u.rgba.props,function(t,e){h[e.idx]=o(i[e.idx],e)}),this):"object"===d?(i instanceof c?g(u,function(t,e){i[e.cache]&&(p[e.cache]=i[e.cache].slice())}):g(u,function(e,n){var r=n.cache;g(n.props,function(t,e){if(!p[r]&&n.to){if("alpha"===t||null==i[t])return;p[r]=n.to(p._rgba)}p[r][e.idx]=o(i[t],e,!0)}),p[r]&&t.inArray(null,p[r].slice(0,3))<0&&(p[r][3]=1,n.from&&(p._rgba=n.from(p[r])))}),this):void 0},is:function(t){var e=c(t),o=!0,n=this;return g(u,function(t,i){var r,a=e[i.cache];return a&&(r=n[i.cache]||i.to&&i.to(n._rgba)||[],g(i.props,function(t,e){if(null!=a[e.idx])return o=a[e.idx]===r[e.idx]})),o}),o},_space:function(){var t=[],e=this;return g(u,function(o,n){e[n.cache]&&t.push(o)}),t.pop()},transition:function(t,e){var n=c(t),i=n._space(),r=u[i],a=0===this.alpha()?c("transparent"):this,s=a[r.cache]||r.to(a._rgba),l=s.slice();return n=n[r.cache],g(r.props,function(t,i){var r=i.idx,a=s[r],c=n[r],u=p[i.type]||{};null!==c&&(null===a?l[r]=c:(u.mod&&(c-a>u.mod/2?a+=u.mod:a-c>u.mod/2&&(a-=u.mod)),l[r]=o((c-a)*e+a,i)))}),this[i](l)},blend:function(e){if(1===this._rgba[3])return this;var o=this._rgba.slice(),n=o.pop(),i=c(e)._rgba;return c(t.map(o,function(t,e){return(1-n)*i[e]+n*t}))},toRgbaString:function(){var e="rgba(",o=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===o[3]&&(o.pop(),e="rgb("),e+o.join()+")"},toHslaString:function(){var e="hsla(",o=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===o[3]&&(o.pop(),e="hsl("),e+o.join()+")"},toHexString:function(e){var o=this._rgba.slice(),n=o.pop();return e&&o.push(~~(255*n)),"#"+t.map(o,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,o,n=t[0]/255,i=t[1]/255,r=t[2]/255,a=t[3],s=Math.max(n,i,r),l=Math.min(n,i,r),c=s-l,u=s+l,p=.5*u;return e=l===s?0:n===s?60*(i-r)/c+360:i===s?60*(r-n)/c+120:60*(n-i)/c+240,o=0===c?0:p<=.5?c/u:c/(2-u),[Math.round(e)%360,o,p,null==a?1:a]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,o=t[1],n=t[2],r=t[3],a=n<=.5?n*(1+o):n+o-n*o,s=2*n-a;return[Math.round(255*i(s,a,e+1/3)),Math.round(255*i(s,a,e)),Math.round(255*i(s,a,e-1/3)),r]},g(u,function(n,i){var r=i.props,a=i.cache,l=i.to,u=i.from;c.fn[n]=function(n){if(l&&!this[a]&&(this[a]=l(this._rgba)),n===e)return this[a].slice();var i,s=t.type(n),p="array"===s||"object"===s?n:arguments,d=this[a].slice();return g(r,function(t,e){var n=p["object"===s?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=o(n,e)}),u?(i=c(u(d)),i[a]=d,i):c(d)},g(r,function(e,o){c.fn[e]||(c.fn[e]=function(i){var r,a=t.type(i),l="alpha"===e?this._hsla?"hsla":"rgba":n,c=this[l](),u=c[o.idx];return"undefined"===a?u:("function"===a&&(i=i.call(this,u),a=t.type(i)),null==i&&o.empty?this:("string"===a&&(r=s.exec(i),r&&(i=u+parseFloat(r[2])*("+"===r[1]?1:-1))),c[o.idx]=i,this[l](c)))})})}),c.hook=function(e){var o=e.split(" ");g(o,function(e,o){t.cssHooks[o]={set:function(e,i){var r,a,s="";if("transparent"!==i&&("string"!==t.type(i)||(r=n(i)))){if(i=c(r||i),!d.rgba&&1!==i._rgba[3]){for(a="backgroundColor"===o?e.parentNode:e;(""===s||"transparent"===s)&&a&&a.style;)try{s=t.css(a,"backgroundColor"),a=a.parentNode}catch(l){}i=i.blend(s&&"transparent"!==s?s:"_default")}i=i.toRgbaString()}try{e.style[o]=i}catch(l){}}},t.fx.step[o]=function(e){e.colorInit||(e.start=c(e.elem,o),e.end=c(e.end),e.colorInit=!0),t.cssHooks[o].set(e.elem,e.start.transition(e.end,e.pos))}})},c.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return g(["Top","Right","Bottom","Left"],function(o,n){e["border"+n+"Color"]=t}),e}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery)},,function(t,e){t.exports={work:[{company:"Kinnek",title:"Frontend Engineer",start:"Nov 2015"},{company:"OkCupid/DateHookup",title:"Mobile Developer",start:"Jan 2014"},{company:"Webs",title:"Frontend Intern",start:"Jan 2013"}],extras:[{title:"WOCinTech Chat Photoshoots",link:"https://www.flickr.com/photos/wocintechchat/albums",description:"I particated in two of the WOCInTechChat Photoshoots. The photos are stock photos, that can be used under a creative commons license with attribution."},{title:"The Journey Towards Staying",link:"https://medium.com/@thalidanoel/the-journey-towards-staying-af25c4d78da5#.abu2ga2eq",description:"One of the most consequential issues affecting young people is also the most ignored."}]}},function(t,e){t.exports=["Harry Potter Fangirl","Robotics Enthusiast","Dancing Queen","Activist","Adorer of Puppies","Dual Citizen"]},function(t,e){t.exports=[{title:"ShapeConnector",description:"A puzzle game where the goal is to get from one shape to another in a specified amount of moves.",link:"http://shapeconnector.com",github:"https://github.com/thalida/ShapeConnector",dribbble:"https://dribbble.com/thalida/projects/307956-ShapeConnector"},{title:"CiphersCodes",description:"ciphers.codes is a ciphers translator which will encode + decode a given piece of text.",link:"http://ciphers.codes",github:"https://github.com/thalida/ShapeConnector",dribbble:"https://dribbble.com/thalida/projects/307949-EncodeDecode"},{title:"FancyCard",description:"Various demos of my personal website (thalida.com) developed in various frameworks and methods. A new demo will be added as the front-end development landscape changes, and will showcase the new techniques that have become part of the modern standard.",link:"https://github.com/thalida/FancyCard",github:"https://github.com/thalida/FancyCard",dribbble:"https://dribbble.com/shots/2303709-Personal-Website"},{title:"WordBird",description:"A chrome plugin which will replace any words you choose with another one.",link:"https://github.com/thalida/WordBird",github:"https://github.com/thalida/WordBird"},{title:"WelcomeBot",description:"A slack bot which will greet new members to a channel with a basic introduction and a way to find out more information.",link:"https://github.com/thalida/WelcomeBot",github:"https://github.com/thalida/WelcomeBot"}]},function(t,e){t.exports=[{name:"nightowl",beginAt:0,color:"#323C64",salutation:"Greetings",sayings:["Woah a Nightowl!","Working late?","Can&rsquo;t sleep?","Whatcha watching lately?","Burning the night oil?"]},{name:"earlybird",beginAt:4,color:"#8B98CE",salutation:"Good Morning",sayings:["OMG, it's the elusive EarlyBird!","Oh hey, Early Riser!","Good Dreams?","Have a great day!","Getting a headstart on the day?"]},{name:"morning",beginAt:8,color:"#56D8FF",salutation:"Good Morning",sayings:["How are you doing?","Good Dreams?","Have a wonderful day!","Have a wicked day!","How&rsquo;d ya sleep?"]},{name:"afternoon",beginAt:12,color:"#FFD874",salutation:"Good Afternoon",sayings:["NOM NOM Time","How&rsquo;s the day going?","It&rsquo;s Food o&rsquo;Clock!","Lunch time?","What&rsquo;s up!?"]},{name:"midafternoon",beginAt:15,color:"#FFB774",salutation:"Good Afternoon",sayings:["How are you doing?","Have a wonderful day!","Hulu &amp; Hang?","Have a wicked day!","How&rsquo;s the day going?"]},{name:"evening",beginAt:18,color:"#FF8774",salutation:"Good Evening",sayings:["How&rsquo;s your day been?","Dinner plans?","Netfix &amp; Pizza?","Winding down for the night?","Excited for tomorrow?","How&rsquo;s it going?"]},{name:"night",beginAt:21,color:"#284BD7",salutation:"Good Night",sayings:["Sweet Dreams","Plans Tonight?","Netfix &amp; Chinese?","Have a great night!","Hope it&rsquo;s a good one!"]}]},function(t,e){t.exports=[{name:"first",minVisits:1,sayings:null},{name:"second",minVisits:2,sayings:["Welcome back","Damn Daniel back at it again","Back again?","Came back for seconds?","Hey again"]},{name:"many",minVisits:3,sayings:["Ah, a serial visitor&hellip;","How sweet, you&rsquo;re back!","Nice to have you back","Welcome back","Oh, how wonderful, you're back"]}]},,,function(t,e){var o="components/cover/cover.html",n='<div class=t_cover ng-class=[$ctrl.fontColor]> <div class=t_cover-content> <h2 class=t_cover-salutation ng-bind-html=$ctrl.sanitize($ctrl.salutation)> </h2> <h1 class=t_cover-greeting ng-bind-html=$ctrl.sanitize($ctrl.greeting.text)> {{$ctrl.greeting.text}} </h1> <h2 class=t_cover-intro> I\'m Thalida.<br/> Frontend Engineer. <span ng-bind-html=$ctrl.sanitize($ctrl.funFact.text)></span>. </h2> <p class=t_cover-note> note: in no order of importance <span class="emoji emoji-laughing-with-tears"></span> </p> </div> <div class=t_cover-social> <a href=http://github.com/thalida target=_blank> <span class="icon icon-github-white"></span> </a> <a href=https://dribbble.com/thalida target=_blank> <span class="icon icon-dribbble-white"></span> </a> <a href=https://twitter.com/thalidanoel target=_blank> <span class="icon icon-twitter-white"></span> </a> </div> </div>';window.angular.module("ng").run(["$templateCache",function(t){t.put(o,n)}]),t.exports=o},function(t,e){var o="components/highlight/highlight.html",n="<span class=t_highlight ng-bind-html=$ctrl.text tooltips tooltip-class=t_highlight-tooltip tooltip-side=bottom tooltip-template={{$ctrl.tooltip}}> </span>";window.angular.module("ng").run(["$templateCache",function(t){t.put(o,n)}]),t.exports=o},function(t,e){var o="components/interactive/interactive.html",n='<div class=t_interactive ng-mousemove="$ctrl.onMouseover( $event )" ng-mouseenter=$ctrl.onMouseenter() ng-mouseleave=$ctrl.onMouseleave()> <div class="t_interactive-layers t_interactive-background"></div> <div class="t_interactive-layers t_interactive-foreground"></div> <div class="t_interactive-layers t_interactive-shapes"></div> </div>';window.angular.module("ng").run(["$templateCache",function(t){t.put(o,n)}]),t.exports=o},function(t,e){var o="views/main/main.html",n='<div class=main-view ng-if=main.render> <t:cover time=main.currFancyTime></t:cover> <div class="panel main-view-content"> <t:interactive></t:interactive> <div class=main-view-section> <h2>Introduction</h2> <div class=main-view-section-data> <p> I’m a Frontend Engineer based in New York. I collect identities like candy, I’m a <t:highlight tooltip="An umbrella term for gender and sexual minorities, that are not heterosexual or not cisgender." text=queer> </t:highlight> Trinidadian <t:highlight tooltip="A person whose self-identity conforms with the gender that corresponds to their biological sex." text=cisgender> </t:highlight> woman of color. I’ve been active in the engineering world for 6 odd years. I work with a great group of engineers at Kinnek (<a href=https://kinnek.com/careers target=_blank>we’re hiring!</a>) during the day, and in the wee hours of the night I hack away at one of my many side projects. </p> <p> I was lucky enough to have a supportive mother, who got me thalida.com for my 16<sup>th</sup> birthday. It was one of the best gifts I’ve ever received, and is the reason I\'ve become the developer I am today. </p> <p> I’m generally full of questions, and <t:highlight tooltip="One of the greatest drinks ever invented. Period." text="bubble tea."> </t:highlight> </p> </div> </div> <div class="main-view-section graphic coding"></div> <p class="small no-buffer">#WOCinTech Chat stock photo | Look, ma my hands!</p> <div class="main-view-section projects"> <h2>Projects</h2> <div class=main-view-section-data> <div class=project ng-repeat="project in main.projectsList"> <div class=clearfix> <a class=float-left ng-href={{project.link}}> <h3 ng-bind-html=main.sanitize(project.title)></h3> </a> <div class=float-right> <a class=project-icon ng-if=project.github ng-href={{project.github}} target=_blank> <span class="icon icon-github-blue"></span> </a> <a class=project-icon ng-if=project.dribbble ng-href={{project.dribbble}} target=_blank> <span class="icon icon-dribbble-blue"></span> </a> </div> </div> <p class=no-buffer ng-bind-html=main.sanitize(project.description)> </p> </div> </div> </div> <div class="main-view-section graphic standing"></div> <p class="small no-buffer">#WOCinTech Chat stock photo | Me, posing for the gods.</p> <div class=main-view-section> <h2>In the Wild</h2> <div class=main-view-section-data> <div ng-repeat="extra in main.about.extras"> <a ng-href={{extra.link}} target=_blank> <h3 ng-bind-html=main.sanitize(extra.title)></h3> </a> <p class=no-buffer>{{extra.description}}</p> </div> </div> </div> <div class="main-view-section work"> <h2>Work</h2> <div class=main-view-section-data> <div ng-repeat="job in main.about.work"> <h3>{{ job.company }} <span class=float-right>{{ job.start }}</span></h3> <p class=no-buffer>{{job.title}}</p> </div> </div> </div> <div class=main-view-footer> <h4 class="main-view-footer-copy float-left">Made/{{main.year}}</h4> <h4 class=main-view-footer-logo>&lt;3 <a href=https://twitter.com/thalidanoel target=_blank>@thalidanoel</a></h4> <h4 class="main-view-footer-top clickable float-right"> <a ng-click=main.scrollTop()>top</a> </h4> </div> </div> </div>';window.angular.module("ng").run(["$templateCache",function(t){t.put(o,n)}]),t.exports=o}]);