(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuexizhongxin/detail"],{"2f2c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,s){try{var u=e[i](s),c=u.value}catch(o){return void n(o)}u.done?t(c):Promise.resolve(c).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function u(e){i(s,a,r,u,c,"next",e)}function c(e){i(s,a,r,u,c,"throw",e)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var e=this.count;return null!=e&&""!=e&&(e=e>60&&e<3600?parseInt(e/60)+"分钟"+parseInt(60*(parseFloat(e/60)-parseInt(e/60)))+"秒":e>=3600&&e<86400?parseInt(e/3600)+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":e>=86400?parseInt(e/3600/24)+"天"+parseInt(24*(parseFloat(e/3600/24)-parseInt(e/3600/24)))+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":parseInt(e)+"秒"),e}},onLoad:function(e){var t=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.id=e.id,e.userid&&(t.userid=e.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(t){var n=this;return s(a.default.mark((function t(){var r,i,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.init(),r=e.getStorageSync("nowTable"),t.next=4,n.$api.session(r);case 4:i=t.sent,n.user=i.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getStoreup(),n.getThumbsup(),s=e.getStorageSync("discussxuexizhongxinCleanType"),s&&(e.removeStorageSync("discussxuexizhongxinCleanType"),n.mescroll.num=1,n.upCallback(n.mescroll));case 11:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{onPayTap:function(){e.setStorageSync("paytable","xuexizhongxin"),e.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var e=this;return s(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:1,limit:1,refid:e.id,tablename:"xuexizhongxin",userid:e.user.id,type:1},t.next=3,e.$api.list("storeup",n);case 3:r=t.sent,e.storeupFlag=r.data.list.length;case 5:case"end":return t.stop()}}),t)})))()},shoucang:function(){var t=this;return s(a.default.mark((function n(){var r,i,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,refid:r.detail.id,tablename:"xuexizhongxin",userid:r.user.id,type:1},n.next=4,r.$api.list("storeup",i);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return c=u.data.list[0].id,e.showModal({title:"提示",content:"是否取消",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.del("storeup",JSON.stringify([c]));case 3:r.$utils.msg("取消成功"),r.getStoreup();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否收藏",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.zhishimingcheng,picture:r.swiperList[0],refid:r.detail.id,tablename:"xuexizhongxin",type:1});case 3:r.$utils.msg("收藏成功"),r.getStoreup();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(t,n,a,r,i){if(e.setStorageSync("crossTable","xuexizhongxin"),e.setStorageSync("crossObj",this.detail),e.setStorageSync("statusColumnName",a),e.setStorageSync("statusColumnValue",i),e.setStorageSync("tips",r),""!=a&&!a.startsWith("[")){var s=e.getStorageSync("crossObj");for(var u in s)if(u==a&&s[u]==i)return void this.$utils.msg(r)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var e=this;return s(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.info("xuexizhongxin",e.id);case 2:n=t.sent,e.detail=n.data,e.detail.zhishijianjie=e.detail.zhishijianjie.replace(/img src/gi,'img style="width:100%;" src'),e.swiperList=e.detail.zhishitupian?e.detail.zhishitupian.split(","):[];case 6:case"end":return t.stop()}}),t)})))()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return s(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("discussxuexizhongxin",{page:e.num,limit:10,refid:t.id});case 2:r=n.sent,1==e.num&&(t.commentList=[]),t.commentList=t.commentList.concat(r.data.list),0==r.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var n=this;t=n.$base.url+t,e.downloadFile({url:t,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var e=this;return s(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$utils.jump("../discussxuexizhongxin/add-or-update?refid=".concat(e.id));case 1:case"end":return t.stop()}}),t)})))()},getThumbsup:function(){var e=this;return s(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:1,limit:1,refid:e.id,tablename:"xuexizhongxin",userid:e.user.id,type:"%2%"},t.next=3,e.$api.list("storeup",n);case 3:r=t.sent,r.data.list.length>0&&("21"==r.data.list[0].type?e.thumbsupFlag=1:e.crazilyFlag=1);case 5:case"end":return t.stop()}}),t)})))()},zan:function(){var t=this;return s(a.default.mark((function n(){var r,i,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,refid:r.detail.id,tablename:"xuexizhongxin",userid:r.user.id,type:"%2%"},n.next=4,r.$api.list("storeup",i);case 4:if(u=n.sent,!(u.data.list.length>0)){n.next=9;break}return c=u.data.list[0].id,e.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.del("storeup",JSON.stringify([c]));case 3:return r.detail.thumbsupnum=parseInt(r.detail.thumbsupnum)-1,e.next=6,r.$api.update("xuexizhongxin",r.detail);case 6:r.$utils.msg("取消成功"),r.thumbsupFlag=0;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否点赞",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.zhishimingcheng,picture:r.swiperList[0],refid:r.detail.id,tablename:"xuexizhongxin",type:"21"});case 3:return r.detail.thumbsupnum=parseInt(r.detail.thumbsupnum)+1,e.next=6,r.$api.update("xuexizhongxin",r.detail);case 6:r.$utils.msg("点赞成功"),r.thumbsupFlag=1;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},cai:function(){var t=this;return s(a.default.mark((function n(){var r,i,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,refid:r.detail.id,tablename:"xuexizhongxin",userid:r.user.id,type:"%2%"},n.next=4,r.$api.list("storeup",i);case 4:if(u=n.sent,!(u.data.list.length>0)){n.next=9;break}return c=u.data.list[0].id,e.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.del("storeup",JSON.stringify([c]));case 3:return r.detail.crazilynum=parseInt(r.detail.crazilynum)-1,e.next=6,r.$api.update("xuexizhongxin",r.detail);case 6:r.$utils.msg("取消成功"),r.crazilyFlag=0;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否点踩",success:function(){var e=s(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.zhishimingcheng,picture:r.swiperList[0],refid:r.detail.id,tablename:"xuexizhongxin",type:"22"});case 3:return r.detail.crazilynum=parseInt(r.detail.crazilynum)+1,e.next=6,r.$api.update("xuexizhongxin",r.detail);case 6:r.$utils.msg("点踩成功"),r.crazilyFlag=1;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var e=this;return s(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.detail.sfsh){t.next=3;break}return e.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(e.detail.shhf){t.next=6;break}return e.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==e.detail.sfsh&&(e.detail.sfsh="是"),"不通过"==e.detail.sfsh&&(e.detail.sfsh="否"),t.next=10,e.$api.update("xuexizhongxin",e.detail);case 10:e.$utils.msg("审核成功"),e.$refs.popup.close();case 12:case"end":return t.stop()}}),t)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(e){console.log(this.detail),this.sfshIndex=e.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};t.default=u}).call(this,n("543d")["default"])},"8b50":function(e,t,n){"use strict";n.r(t);var a=n("963e"),r=n("b4ef");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("983a");var s,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports},"963e":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"d4c6"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"2954"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"983a":function(e,t,n){"use strict";var a=n("a867"),r=n.n(a);r.a},a867:function(e,t,n){},b4ef:function(e,t,n){"use strict";n.r(t);var a=n("2f2c"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},c408:function(e,t,n){"use strict";(function(e){n("5158");a(n("66fd"));var t=a(n("8b50"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["c408","common/runtime","common/vendor"]]]);