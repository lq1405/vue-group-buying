(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f800e242"],{1681:function(t,e,r){"use strict";r("c725")},"1a33":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"food-list-page"},[r("Search",{attrs:{placeholder:"请输入搜索内容",search:t.showSearchValue}}),r("ul",{staticClass:"sort-choose"},t._l(t.sortGoods,(function(e){return r("li",{key:e.id,on:{click:function(r){return t.sortList(e.id)}}},[t._v(" "+t._s(e.text)+" "),r("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])})),0),r("LovelyFood",{attrs:{list:t.list,noShow:t.others}}),t.others.length?r("div",{staticClass:"tip-no-show",on:{click:t.showAllGoods}},[t._v(" 显示其他"+t._s(t.others.length)+" 件未显示商品 "),r("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})]):t._e()],1)},o=[],n=(r("ac1f"),r("841c"),r("fb6a"),r("4de4"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",name:"",id:"",placeholder:t.placeholder},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchValue(e)},input:function(e){e.target.composing||(t.msg=e.target.value)}}})])}),i=[],a={data:function(){return{msg:""}},name:"Search",props:["placeholder","search"],methods:{searchValue:function(){this.search(this.msg),this.msg=""}},created:function(){document.getElementsByTagName("body")[0].style.backgroundColor="#eeeeee"}},c=a,l=(r("1681"),r("2877")),u=Object(l["a"])(c,n,i,!1,null,"069b6176",null),h=u.exports,d=r("bf70"),f={name:"List",components:{Search:h,LovelyFood:d["a"]},data:function(){return{list:[],sortGoods:[{text:"价格排序",id:"avgPrice"},{text:"销量排序",id:"lng"},{text:"好评排序",id:"avgScore"},{text:"距离排序",id:"distance"}],others:[],arr:[]}},computed:{search:function(){return this.$store.state.search}},watch:{search:function(t){console.log(t)}},methods:{showSearchValue:function(t){var e=this;this.$store.commit("searchFoodData",t),this.list=this.arr.filter((function(t){return t.name.indexOf(e.search)>=0})).slice(0,3),this.others=this.arr.filter((function(t){return t.name.indexOf(e.search)>=0})).slice(3)},showAllGoods:function(){this.list=this.arr,this.others=[]},sortList:function(t){this.list.sort((function(e,r){return r[t]-e[t]}))}},created:function(){var t=this,e=this.$route.params,r=+e.id;this.$http.post("/home/getFoodList",{types:r}).then((function(e){var r=e.data;console.log(r),0===r.errno?(t.arr=r.data,t.list=t.arr.slice(0,3),t.others=t.arr.slice(3)):alert(r.msg)}))}},p=f,m=(r("27c4"),Object(l["a"])(p,s,o,!1,null,"23dce8fc",null));e["default"]=m.exports},2330:function(t,e,r){},"27c4":function(t,e,r){"use strict";r("2330")},"4de4":function(t,e,r){"use strict";var s=r("23e7"),o=r("b727").filter,n=r("1dde"),i=n("filter");s({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},b0c0:function(t,e,r){var s=r("83ab"),o=r("9bf2").f,n=Function.prototype,i=n.toString,a=/^\s*function ([^ (]*)/,c="name";s&&!(c in n)&&o(n,c,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},c725:function(t,e,r){},fb6a:function(t,e,r){"use strict";var s=r("23e7"),o=r("861d"),n=r("e8b5"),i=r("23cb"),a=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),h=r("1dde"),d=h("slice"),f=u("species"),p=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,s,u,h=c(this),d=a(h.length),v=i(t,d),g=i(void 0===e?d:e,d);if(n(h)&&(r=h.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(h,v,g);for(s=new(void 0===r?Array:r)(m(g-v,0)),u=0;v<g;v++,u++)v in h&&l(s,u,h[v]);return s.length=u,s}})}}]);
//# sourceMappingURL=chunk-f800e242.71ee0a68.js.map