(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-examrecord-list"],{"61df":function(t,n,e){"use strict";var i={"mescroll-uni":e("f05e").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},t._l(t.list,(function(n,i){return e("v-uni-view",{key:i,staticClass:"cu-list menu-avatar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDetailTap(n)}}},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content",staticStyle:{left:"20rpx"}},[e("v-uni-view",{staticClass:"text-grey"},[t._v("口算练习名称："+t._s(n.papername)+"  ("+t._s(n.username)+")")])],1),e("v-uni-view",{staticClass:"action",staticStyle:{width:"auto"}},[e("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("分数："+t._s(n.myscore)+"分")])],1)],1)],1)})),1)},s=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},"749b":function(t,n,e){"use strict";e.r(n);var i=e("801e"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"801e":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var a=i(e("3b8d")),s={data:function(){return{list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},onShow:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.groupby();case 2:e=t.sent,1==n.num&&(this.list=[]),this.list=this.list.concat(e.data.list),0==e.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onDetailTap:function(t){this.$utils.jump("./detail?paperid=".concat(t.paperid,"&userid=").concat(t.userid))}}};n.default=s},"9bdb":function(t,n,e){"use strict";e.r(n);var i=e("61df"),a=e("749b");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);var r,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"295a03f2",null,!1,i["a"],r);n["default"]=u.exports}}]);