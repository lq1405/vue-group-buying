(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-01c3f42b":"fac8a020","chunk-5140a1c8":"ddb41181","chunk-6a7eb664":"7d5138cc","chunk-76e88d1c":"869116e6"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-01c3f42b":1,"chunk-5140a1c8":1,"chunk-6a7eb664":1,"chunk-76e88d1c":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-01c3f42b":"6125a6c6","chunk-5140a1c8":"fd1d4404","chunk-6a7eb664":"1962e870","chunk-76e88d1c":"b87576b3"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static/home/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0382":function(t,e,n){"use strict";n("c090")},"2f70":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("ul",{staticClass:"type-list"},t._l(t.type,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/list/"+e.id,tag:"a"}},[n("img",{attrs:{src:"/home/img/icons/"+e.img,alt:""}}),n("p",[t._v(t._s(e.text))])])],1)})),0),n("p",{staticClass:"lovely"},[t._v("猜你喜欢")]),n("LovelyFood",{attrs:{list:t.list,msg:t.msg}})],1)},s=[],i=n("bf70"),c={name:"Home",components:{LovelyFood:i["a"]},data:function(){return{type:[{id:1,text:"美食",img:"01.png"},{id:2,text:"电影",img:"02.png"},{id:3,text:"酒店",img:"03.png"},{id:4,text:"休闲",img:"04.png"},{id:5,text:"外卖",img:"05.png"},{id:6,text:"KTV",img:"06.png"},{id:7,text:"丽人",img:"07.png"},{id:8,text:"小吃",img:"08.png"},{id:9,text:"周边游",img:"09.png"},{id:10,text:"火车票",img:"10.png"}],list:[],msg:{name:"name",content:"content",discount:"discount",sold:"sold",normalPrice:"normalPrice"}}},created:function(){var t=this;this.$http.get("/data/lovely").then((function(e){t.list=e.data.goods})).catch((function(t){console.log(t)}))},beforeCreate:function(){document.querySelector("body").setAttribute("style","background-color:#F0EFED")},beforeDestroy:function(){document.body.removeAttribute("style")}},u=c,l=(n("66a7"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"441e4369",null),f=d.exports;r["a"].use(o["a"]);var p=[{path:"/list/:id",component:function(){return n.e("chunk-5140a1c8").then(n.bind(null,"1a33"))}},{path:"/detail/:id",component:function(){return n.e("chunk-01c3f42b").then(n.bind(null,"c84b"))}},{path:"/buy",component:function(){return n.e("chunk-6a7eb664").then(n.bind(null,"54ec"))}},{path:"*",component:f}],h=new o["a"]({routes:p}),m=h,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Headers",{attrs:{title:"1111"}},[n("div",{attrs:{slot:"right"},slot:"right"},[t._v("关闭")])]),n("hr"),n("router-view")],1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header"},[n("div",{staticClass:"header-left",on:{click:t.goBack}},[n("i",{staticClass:"fa fa-angle-left fa-2x",attrs:{"aria-hidden":"true"}})]),n("div",{staticClass:"search"},[n("h1",{staticClass:"search-h1"},[t._v(t._s(t.title))])]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right"},[n("p",[t._v("关闭")])])}];n.e("chunk-76e88d1c").then(n.t.bind(null,"b478",7));var _={props:["title"],methods:{goBack:function(){history.back()}}},k=_,C=(n("ac4a"),Object(l["a"])(k,b,y,!1,null,"41b799be",null)),x=C.exports,w={components:{Headers:x},data:function(){return{}},created:function(){console.log(this.page)}},P=w,j=(n("0382"),Object(l["a"])(P,g,v,!1,null,"7aaee143",null)),E=j.exports,O=(n("ac1f"),n("841c"),n("c740"),n("a434"),n("2f62"));r["a"].use(O["a"]);var S=new O["a"].Store({state:{search:"",products:[],totalPrice:0,discount:0},mutations:{searchFoodData:function(t,e){t.search=e},addGoods:function(t,e){console.log(e),this.state.totalPrice+=e.price,this.state.discount+=e.originalPrice-e.price,this.state.products.push(e)},removeGoods:function(t,e){console.log(e);var n=this.state.products.findIndex((function(t){return t.id===e.id}));n>=0&&(this.state.totalPrice-=e.price,this.state.discount-=e.originalPrice-e.price,this.state.products.splice(n,1))}}}),T=n("1052"),A=n.n(T);r["a"].prototype.$http=A.a,r["a"].config.productionTip=!1,new r["a"]({router:m,store:S,render:function(t){return t(E)}}).$mount("#app")},"66a7":function(t,e,n){"use strict";n("ab2a")},"6ed2":function(t,e,n){"use strict";n("e774")},ab2a:function(t,e,n){},ac4a:function(t,e,n){"use strict";n("2f70")},bf70:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lovely-food"},[n("ul",{staticClass:"food-list"},t._l(t.list,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/detail/"+e.id,tag:"a"}},[n("div",{staticClass:"food-list-img"},[n("img",{attrs:{src:"/home/img/lovelyFile/00.jpg",alt:""}})]),n("div",{staticClass:"food-list-describe"},[t.msg.name?n("p",{staticClass:"food-name"},[t._v(t._s(e[t.msg.name]))]):t._e(),t.msg.content?n("p",{staticClass:"food-content"},[t._v(t._s(e[t.msg.content]))]):t._e(),t.msg.discount?n("span",{staticClass:"food-discount"},[t._v(t._s(e[t.msg.discount])+"元")]):t._e(),t.msg.normalPrice?n("span",[t._v("门市价:"+t._s(e[t.msg.normalPrice]))]):t._e(),t.msg.sold?n("span",{staticClass:"sold-food"},[t._v("已售"+t._s(e[t.msg.sold]))]):t._e(),t.msg.distance?n("span",{staticClass:"sold-food"},[t._v("距离"+t._s(e[t.msg.distance]))]):t._e()])])],1)})),0)])},o=[],a={props:["list","msg","noShow"]},s=a,i=(n("6ed2"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"7409a5e8",null);e["a"]=c.exports},c090:function(t,e,n){},e774:function(t,e,n){}});
//# sourceMappingURL=app.906296b3.js.map