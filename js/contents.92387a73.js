(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contents"],{"0bd8":function(t,e,n){},"20ed":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("book-grid",[n("template",{slot:"drawer"},[n("drawer-contents-page")],1),n("template",{slot:"content"},[n("content-contents-page")],1)],2)},s=[],a=n("9ab4"),l=n("2b0e"),c=n("5038"),i=n("0d8b"),r=n("8316"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-container__content-contents-page content-contents-page book-adaptive-drawer",attrs:{drawer:t.drawerState}},[n("div",{staticClass:"content-contents-page-grid-item__subbar"},[n("div",{staticClass:"md-layout md-alignment-center-space-between"},[n("md-subheader",[t._v("Оглавление")]),n("md-button",{staticClass:"md-icon-button md-mini md-raised",on:{click:function(e){return t.bookContentsToggleAll()}}},[n("svg-icon",{staticClass:"collapse-icon",attrs:{name:"baseline-keyboard_arrow_down-24px",collapsed:t.isBookContentsCollapseAll}}),n("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("Открыть\\закрыть все")])],1)],1)]),n("div",{staticClass:"content-contents-page-grid-item__content"},[n("tree",{attrs:{nodes:t.bookContents},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.data,s=e.count,a=e.index,l=e.level,c=e.isCollapsed,i=e.isNode;return[n("book-contents-chapter-info",{key:a,attrs:{index:s,title:o.name,url:o.path,isCollapsed:c,isNode:i},on:{collapse:function(e){return t.toggle(l,a)}}})]}}])})],1)])},u=[],p=n("2f62"),f={name:"CustomDialog",props:{},data:function(){return{}},computed:a["a"]({},Object(p["c"])("book-contents",["bookContents","isBookContentsToggleAll"]),Object(p["c"])(["isAppDrawerToggle"]),{isBookContentsCollapseAll:function(){return!0===this.isBookContentsToggleAll?"collapsed":"uncollapsed"},drawerState:function(){return this.isAppDrawerToggle?"open":"close"}}),updated:function(){},methods:a["a"]({},Object(p["b"])("book-contents",["bookContentsToggleAll","bookContentsToggleByLevelAndIndex"]),{toggle:function(t,e){this.bookContentsToggleByLevelAndIndex({level:t,index:e})},getIndex:function(t,e){return 0===t?""+(e+1):t+1+"."+(e+1)}})},_=f,b=_,m=(n("60b3"),n("2877")),v=Object(m["a"])(b,d,u,!1,null,null,null),g=v.exports,C=n("e2a8"),k=n("dfa1"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-contents-chapter-info md-layout md-alignment-center-left"},[n("span",{staticClass:"book-contents-tree__preview__index"},[t._v(t._s(t.index))]),n("router-link",{staticClass:"book-contents-tree__title",attrs:{to:t.url,append:""}},[t._v(t._s(t.title))]),n("div",{staticClass:"book-contents-tree__control md-layout md-alignment-center-left",attrs:{collapsed:t.collapse}},[n("md-button",{staticClass:"book-contents-tree__prewiev__control__icon-button md-icon-button md-dense",on:{click:function(e){return t.toBuffer(t.url)}}},[n("svg-icon",{staticClass:"custom-icon",attrs:{name:"baseline-link-24px"}})],1),n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.isNode,expression:"isNode"}],staticClass:"book-contents-tree__prewiev__control__icon-button md-icon-button md-dense",on:{click:function(e){return t.toggleCollapseContents()}}},[n("svg-icon",{staticClass:"custom-icon collapse-icon",attrs:{name:"baseline-keyboard_arrow_down-24px",collapsed:t.collapse}})],1)],1)],1)},h=[],x=n("27bf"),O=n("7f32"),B=n("de06"),j=Object(O["b"])(B["a"].book.content+"/"),A={name:"book-contents-chapter-info",props:["index","title","url","isNode","isCollapsed"],data:function(){return{collapse:x["a"].Collapsed}},computed:{},methods:a["a"]({},Object(p["b"])(["showAppSnackbar","copyToBuffer"]),{toggleCollapseContents:function(){this.$emit("collapse")},toBuffer:function(t){j(t),this.showAppSnackbar(B["a"].messages.COPY_LINK_TO_BUFFER)}}),watch:{isCollapsed:function(){this.collapse=this.isCollapsed?x["a"].Collapsed:x["a"].Uncollapsed}}},y=A,T=y,N=(n("4278"),Object(m["a"])(T,w,h,!1,null,"1f0c2cc9",null)),D=N.exports,E=n("63c7"),L=n("d433"),$={name:"contents",components:a["a"]({},i["a"],c["a"],{drawerContentsPage:l["default"].component("drawer-contents-page",r["a"]),contentContentsPage:l["default"].component("content-contents-page",g),tree:l["default"].component("tree",C["a"]),customCollapse:l["default"].component("custom-collapse",k["a"]),bookContentsChapterInfo:l["default"].component("book-contents-chapter-info",D),bookGrid:l["default"].component("book-grid",E["a"]),navAppDrawer:l["default"].component("nav-app-drawer",L["a"])}),data:function(){return{menuVisible:!0}},computed:a["a"]({},Object(p["c"])("book-contents",["isBookContentsLoad"]),Object(p["c"])(["isAppDrawerToggle"])),beforeRouteLeave:function(t,e,n){this.showGlobalProgressBar(),n()},created:function(){this.isBookContentsLoad?this.hideGlobalProgressBar():this.bookContentsLoad()},mounted:function(){},methods:a["a"]({},Object(p["b"])("book-contents",["bookContentsLoad"]),Object(p["b"])(["showMainDrawer","hideMainDrawer","toggleMainDrawer","showGlobalProgressBar","hideGlobalProgressBar"])),watch:{isBookContentsLoad:function(){this.hideGlobalProgressBar()}}},P=$,S=P,G=(n("c8cc"),Object(m["a"])(S,o,s,!1,null,"56ea6790",null));e["default"]=G.exports},"27bf":function(t,e,n){"use strict";var o;n.d(e,"a",function(){return o}),function(t){t["Collapsed"]="collapsed",t["Uncollapsed"]="uncollapsed"}(o||(o={}))},4278:function(t,e,n){"use strict";var o=n("9ac7"),s=n.n(o);s.a},5430:function(t,e,n){"use strict";var o=n("caa7"),s=n.n(o);s.a},"57a1":function(t,e,n){},"60b3":function(t,e,n){"use strict";var o=n("94ab"),s=n.n(o);s.a},"63c7":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-grid-grid-item__content"},[n("custom-drawer",{attrs:{toggle:t.isAppDrawerToggle}},[n("template",{slot:"drawer"},[t._t("drawer")],2),n("template",{slot:"content"},[t._t("content")],2)],2)],1)},s=[],a=n("9ab4"),l=n("2f62"),c={name:"book-grid",components:{},data:function(){return{menuVisible:!0}},computed:a["a"]({},Object(l["c"])(["isAppDrawerToggle"]))},i=c,r=(n("8317"),n("2877")),d=Object(r["a"])(i,o,s,!1,null,"2d369f32",null);e["a"]=d.exports},"656b":function(t,e,n){"use strict";var o=n("0bd8"),s=n.n(o);s.a},"6df8":function(t,e,n){},8316:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer-contents-page drawer"},[n("ul",{staticClass:"list list__vertical"},[n("li",{staticClass:"drawer-grid-item__app-nav list__item"},[n("nav-app-drawer")],1)])])},s=[],a={name:"CustomDialog",props:{toggle:Boolean},computed:{isToggle:function(){return!0===this.toggle?"open":"close"}}},l=a,c=(n("bef4"),n("2877")),i=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=i.exports},8317:function(t,e,n){"use strict";var o=n("57a1"),s=n.n(o);s.a},"94ab":function(t,e,n){},"97e5":function(t,e,n){},"9ac7":function(t,e,n){},bef4:function(t,e,n){"use strict";var o=n("97e5"),s=n.n(o);s.a},c8cc:function(t,e,n){"use strict";var o=n("6df8"),s=n.n(o);s.a},caa7:function(t,e,n){},d433:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"list__item"},[n("div",{staticClass:"list__item__subheader"},[t._v("Навигация")]),n("div",{staticClass:"list"},[n("div",{staticClass:"list__item"},[n("router-link",{staticClass:"list__item__link",attrs:{to:"/","exact-active-class":"nav__active"}},[t._v("Главная")])],1),n("div",{staticClass:"list__item"},[n("router-link",{staticClass:"list__item__link",attrs:{to:"/book/contents","exact-active-class":"nav__active"}},[t._v("Оглавление")])],1),n("div",{staticClass:"list__item"},[n("router-link",{staticClass:"list__item__link",attrs:{to:"/whats-is-new","exact-active-class":"nav__active"}},[t._v("Что нового?")])],1)])])])},s=[],a={},l=a,c=(n("5430"),n("2877")),i=Object(c["a"])(l,o,s,!1,null,"d43e65c4",null);e["a"]=i.exports},dbf5:function(t,e,n){},dfa1:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-collapse"},[n("div",{staticClass:"custom-collapse__preview"},[t._t("preview")],2),n("div",{staticClass:"custom-collapse__collapsed"},[t._t("collapsed")],2)])},s=[],a={name:"custom-collapse"},l=a,c=(n("656b"),n("2877")),i=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=i.exports},e2a8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.classes},t._l(t.nodes,function(e){return n("li",{key:e.key,staticClass:"tree-leaf"},[t._t("default",null,{data:e.data,count:t.count+(e.index+1),index:e.index,level:e.level,isCollapsed:e.isCollapsed,isNode:e.isNode}),e.isNode&&!e.isCollapsed?n("tree",{attrs:{nodes:e.children,count:t.count+(e.index+1)+".",level:t.level+1},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data,o=e.count,s=e.index,a=e.level,l=e.isNode,c=e.isCollapsed;return[t._t("default",null,{data:n,count:o,index:s,level:a,isCollapsed:c,isNode:l})]}}],null,!0)}):t._e()],2)}),0)},s=[],a={props:{nodes:Array,level:{type:Number,default:0},count:{type:String,default:""}},data:function(){return{}},computed:{classes:function(){var t;return t={},t["tree-node"]=!0,t["tree-node-depth--"+this.level]=!0,t}},methods:{}},l=a,c=(n("f39c"),n("2877")),i=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=i.exports},f39c:function(t,e,n){"use strict";var o=n("dbf5"),s=n.n(o);s.a}}]);
//# sourceMappingURL=contents.92387a73.js.map