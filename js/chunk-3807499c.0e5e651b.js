(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3807499c"],{2532:function(t,e,i){"use strict";var s=i("23e7"),n=i("e330"),a=i("5a34"),r=i("1d80"),l=i("577e"),o=i("ab13"),d=n("".indexOf);s({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~d(l(r(this)),l(a(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,i){var s=i("861d"),n=i("c6b6"),a=i("b622"),r=a("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"5a34":function(t,e,i){var s=i("da84"),n=i("44e7"),a=s.TypeError;t.exports=function(t){if(n(t))throw a("The method doesn't accept regular expressions");return t}},"60ea":function(t,e,i){"use strict";i("bf93")},6189:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper px-0"},[i("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],a=(i("7db0"),i("d3b7"),i("b64b"),i("caad"),i("2532"),i("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,i=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,s=document.getElementById(i);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),a=this.$refs.hContainer,r=s.offsetWidth*this.ids.length,l=n?s.offsetLeft-a.offsetLeft:s.offsetLeft,o=a.offsetWidth/s.offsetWidth;o>1&&r-l<a.offsetWidth&&(l=r-a.offsetWidth),this.scrollVal=1===this.ids.length?0:-l}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),r=a,l=(i("60ea"),i("2877")),o=Object(l["a"])(r,s,n,!1,null,"697fa289",null);e["a"]=o.exports},"7db0":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").find,a=i("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),s({target:"Array",proto:!0,forced:l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},8464:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"linea-tiempo-c"},[i("div",{staticClass:"row flex-nowrap mx-0 linea-tiempo-c__header mb-4"},[i("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[i("div",{staticClass:"linea-tiempo-c__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[i("i",{staticClass:"fas fa-angle-left"})])]),i("div",{staticClass:"col-8 col-sm px-0"},[i("div",{staticClass:"row mx-0 flex-nowrap linea-tiempo-c__header__items"},[t.elements.length?i("ScrollHorizontal",{attrs:{selectedId:"ltc-header-"+(t.selected-1)}},t._l(t.elements,(function(e,s){return i("div",{key:"ltc-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 linea-tiempo-c__header__item",class:t.itemClasses(e.id),attrs:{id:"ltc-header-"+e.id},on:{click:function(i){t.selected=e.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&s>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===s?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e(),i("span",{staticClass:"linea-tiempo-c__header__item__year",class:{"text-small":t.textSmall}},[t._v(t._s(e.titulo))]),i("div",{staticClass:"linea-tiempo-c__header__item__line-container"},[i("div",{staticClass:"linea-tiempo-c__header__item__dot"})])])})),0):t._e()],1)]),i("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[i("div",{staticClass:"linea-tiempo-c__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId}}},[i("i",{staticClass:"fas fa-angle-right"})])])]),i("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?i("ScrollHorizontal",{attrs:{selectedId:"ltc-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return i("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"ltc-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"ltc-content-"+t.id}})})),0):t._e(),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],a=i("ab14"),r=i("6189"),l={name:"LineaTiempoC",components:{ScrollHorizontal:r["a"]},mixins:[a["a"]],props:{textSmall:{type:Boolean}},data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"linea-tiempo-c__header__item--active":t===this.selected},{"linea-tiempo-c__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},o=l,d=i("2877"),c=Object(d["a"])(o,s,n,!1,null,null,null);e["default"]=c.exports},ab13:function(t,e,i){var s=i("b622"),n=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,"/./"[t](e)}catch(s){}}return!1}},ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b64b:function(t,e,i){var s=i("23e7"),n=i("7b0b"),a=i("df75"),r=i("d039"),l=r((function(){a(1)}));s({target:"Object",stat:!0,forced:l},{keys:function(t){return a(n(t))}})},bf93:function(t,e,i){},caad:function(t,e,i){"use strict";var s=i("23e7"),n=i("4d64").includes,a=i("44d2");s({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d81d:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").map,a=i("1dde"),r=a("map");s({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-3807499c.0e5e651b.js.map