(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56666d1b"],{"010f":function(e,t,c){},"04d1":function(e,t,c){var a=c("342f"),n=a.match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},"0540":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-95f3a02e"),e=e(),Object(a["popScopeId"])(),e},o={id:"student_detail"},r={class:"container-fluid ps-0"},l={class:"row g-0"},s={class:"container p-md-3 p-2"},d={key:0,class:"row"},i={class:"col-md-12 mb-3"},u={class:"card shadow"},m={class:"card-body"},b={class:"row align-items-center"},O={class:"col-md-3 py-3 text-center"},j={class:"dot"},p={class:"dot-text text-uppercase"},f={class:"col-md-9"},v=n((function(){return Object(a["createElementVNode"])("div",{class:"mb-3 text-md-start text-center"},[Object(a["createElementVNode"])("h4",null,"Student Profile"),Object(a["createElementVNode"])("hr",{class:"my-0"})],-1)})),h={class:"row"},N={class:"col-md-6"},V={class:"mb-2"},g=n((function(){return Object(a["createElementVNode"])("small",{class:"d-block text-muted"}," Full Name ",-1)})),E={class:"mb-2"},y=n((function(){return Object(a["createElementVNode"])("small",{class:"d-block text-muted"}," Email ",-1)})),k={class:"mb-2"},w=n((function(){return Object(a["createElementVNode"])("small",{class:"d-block text-muted"}," Phone Number ",-1)})),x={class:"col-md-6"},S={class:"mb-2"},_=n((function(){return Object(a["createElementVNode"])("small",{class:"d-block text-muted"}," Birthday ",-1)})),C={class:"mb-2"},B=n((function(){return Object(a["createElementVNode"])("small",{class:"d-block text-muted"}," Address ",-1)})),D={class:"col-md-12"},A={class:"card shadow"},T={class:"card-body"},z=n((function(){return Object(a["createElementVNode"])("h4",null,"Activity",-1)})),I=n((function(){return Object(a["createElementVNode"])("hr",{class:"my-0 mb-3"},null,-1)})),$={class:"row"},F={class:"col-md-6"},L={class:"card"},M={class:"card-body"},H=n((function(){return Object(a["createElementVNode"])("h6",{class:"text-center"},"Ongoing",-1)})),U=n((function(){return Object(a["createElementVNode"])("hr",{class:"mt-0"},null,-1)})),J={key:0},P={class:"row g-0"},K={class:"col-md-4 bg-ongoing p-3"},G={class:"module-name"},W={class:"border-top border-white module-category"},Y={class:"module-taken"},Z={class:"col-md-8 p-3"},q={class:"module-progress"},Q={class:"progress",style:{height:"8px"}},R={class:"row module-outline"},X={class:"col-6 mb-3 text-start"},ee={class:"col-6 text-end"},te={class:"module-part"},ce={key:1,class:"text-center mt-3 text-muted"},ae={class:"col-md-6"},ne={class:"card"},oe={class:"card-body"},re=n((function(){return Object(a["createElementVNode"])("h6",{class:"text-center"},"Completed",-1)})),le=n((function(){return Object(a["createElementVNode"])("hr",{class:"mt-0"},null,-1)})),se={key:0},de={class:"row g-0"},ie={class:"col-md-4 bg-completed p-3"},ue={class:"module-name"},me={class:"border-top border-white module-category"},be={class:"module-taken"},Oe={class:"col-md-8 p-3"},je={class:"module-progress"},pe={class:"progress",style:{height:"8px"}},fe={class:"row module-outline"},ve={class:"col-8 mb-3 text-start"},he={class:"col-4 text-end"},Ne={class:"module-part"},Ve={class:"float-md-end text-center mb-2"},ge=["onClick"],Ee=Object(a["createTextVNode"])(" View Answer "),ye={key:1,class:"text-center mt-3 text-muted"},ke={key:0,class:"row"},we={class:"col-md-12"},xe={class:"text-center my-5"};function Se(e,t,c,n,Se,_e){var Ce=Object(a["resolveComponent"])("AdminSidebar"),Be=Object(a["resolveComponent"])("AdminHeader"),De=Object(a["resolveComponent"])("vue-feather");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(a["Transition"],{name:"slide"},{default:Object(a["withCtx"])((function(){return[Se.sidebarStatus?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:Object(a["normalizeClass"])([Se.sidebar,"sidebar-admin"])},[Object(a["createVNode"])(Ce,{display:_e.sidebarToggle,menu:"user",submenu:"user"},null,8,["display"])],2)):Object(a["createCommentVNode"])("",!0)]})),_:1}),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(Se.header)},[Object(a["createVNode"])(Be,{display:_e.sidebarToggle},null,8,["display"]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return[Se.showing?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",p,Object(a["toDisplayString"])(_e.textLeft(Se.user_data.first_name)),1)])]),Object(a["createElementVNode"])("div",f,[v,Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",V,[g,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(_e.formatCapitalize(Se.user_data.first_name))+" "+Object(a["toDisplayString"])(_e.formatCapitalize(Se.user_data.last_name)),1)]),Object(a["createElementVNode"])("div",E,[y,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(Se.user_data.email),1)]),Object(a["createElementVNode"])("div",k,[w,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(Se.user_data.phone_number),1)])]),Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",S,[_,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(_e.formatDate(Se.user_data.birthday)),1)]),Object(a["createElementVNode"])("div",C,[B,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(Se.user_data.address),1)])])])])])])])]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("div",T,[z,I,Object(a["createElementVNode"])("div",$,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("div",L,[Object(a["createElementVNode"])("div",M,[H,U,Se.activity.ongoing?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",J,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Se.activity.ongoing,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"card card-module mb-3",key:e},[Object(a["createElementVNode"])("div",P,[Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("div",G,Object(a["toDisplayString"])(e.module_name),1),Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("small",null,Object(a["toDisplayString"])(e.category_name),1)]),Object(a["createElementVNode"])("div",Y,Object(a["toDisplayString"])(_e.formatDate(e.taken_module)),1)]),Object(a["createElementVNode"])("div",Z,[Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("div",Q,[Object(a["createElementVNode"])("div",{class:"progress-bar",role:"progressbar",style:Object(a["normalizeStyle"])("width:"+e.percentage+"%"),"aria-valuemax":"100"},null,4)])]),Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",X,Object(a["toDisplayString"])(e.section_name),1),Object(a["createElementVNode"])("div",ee,Object(a["toDisplayString"])(Math.round(e.percentage))+" % ",1)]),Object(a["createElementVNode"])("div",te,Object(a["toDisplayString"])(e.current_part_name),1)])])])})),128))])):Object(a["createCommentVNode"])("",!0),0==Se.activity.ongoing_count?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ce," No module read yet ")):Object(a["createCommentVNode"])("",!0)])])]),Object(a["createElementVNode"])("div",ae,[Object(a["createElementVNode"])("div",ne,[Object(a["createElementVNode"])("div",oe,[re,le,Se.activity.completed?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",se,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Se.activity.completed,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"card card-module mb-3",key:e},[Object(a["createElementVNode"])("div",de,[Object(a["createElementVNode"])("div",ie,[Object(a["createElementVNode"])("div",ue,Object(a["toDisplayString"])(e.module_name),1),Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("small",null,Object(a["toDisplayString"])(e.category_name),1)]),Object(a["createElementVNode"])("div",be,Object(a["toDisplayString"])(_e.formatDate(e.taken_date)),1)]),Object(a["createElementVNode"])("div",Oe,[Object(a["createElementVNode"])("div",je,[Object(a["createElementVNode"])("div",pe,[Object(a["createElementVNode"])("div",{class:"progress-bar bg-success",role:"progressbar",style:Object(a["normalizeStyle"])("width:"+e.percentage+"%"),"aria-valuemax":"100"},null,4)])]),Object(a["createElementVNode"])("div",fe,[Object(a["createElementVNode"])("div",ve,Object(a["toDisplayString"])(e.section_name),1),Object(a["createElementVNode"])("div",he,Object(a["toDisplayString"])(Math.round(e.percentage))+" % ",1)]),Object(a["createElementVNode"])("div",Ne,Object(a["toDisplayString"])(e.current_part_name),1),Object(a["createElementVNode"])("div",Ve,[Object(a["createElementVNode"])("button",{class:"btn btn-sm btn-warning rounded-pill mx-0",onClick:function(t){return _e.viewAnswer(e.slug,Se.userId)}},[Object(a["createVNode"])(De,{type:"clipboard",class:"me-2",size:"20"}),Ee],8,ge)])])])])})),128))])):Object(a["createCommentVNode"])("",!0),0==Se.activity.completed_count?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ye," No module has been read yet ")):Object(a["createCommentVNode"])("",!0)])])])])])])])])):Object(a["createCommentVNode"])("",!0)]})),_:1}),Se.showing?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ke,[Object(a["createElementVNode"])("div",we,[Object(a["createElementVNode"])("div",xe,[Object(a["createVNode"])(De,{type:"loader",size:"50",animation:"spin"})])])]))])],2)])])])}c("d3b7"),c("25f0"),c("fb6a"),c("4e82");var _e=c("1921"),Ce=c("ff54"),Be=c("4edd"),De=c("c1df"),Ae=c.n(De),Te={name:"Student Detail",components:{AdminHeader:_e["a"],AdminSidebar:Ce["a"],VueFeather:Be["a"]},data:function(){return{sidebar:"sidebar-left",sidebarStatus:!0,header:"content",user:[],token:"",userId:"",showing:!1,sort:{asc:!0,desc:!1},activity:{ongoing_count:"",ongoing:[],completed_count:"",completed:[]},user_data:[]}},methods:{sidebarToggle:function(){1==this.sidebarStatus?(this.sidebarStatus=!1,this.header="full-content",this.sidebar="d-none"):(this.sidebarStatus=!0,this.sidebar="sidebar-left sidebar-mobile",this.header="content")},reload:function(){this.showing=!0},getUserDetail:function(e){var t=this;this.$axios.get(this.$api_url+"user/"+e,{headers:{Authorization:"Bearer "+this.user.token}}).then((function(e){e.data.success?(t.reload(),t.user_data=e.data.data[0]):(t.$alert.toast("warning","Sorry, user is not found."),t.$router.push({path:"/admin/user"}))})).catch((function(e){alert(e),console.log(e)}))},getActivity:function(e){var t=this;this.$axios.get(this.$api_url+"user/progress/"+e,{headers:{Authorization:"Bearer "+this.user.token}}).then((function(e){t.activity.ongoing_count=e.data.onprogress.length,t.activity.ongoing=e.data.onprogress,t.activity.completed_count=e.data.completed.length,t.activity.completed=e.data.completed,console.log(t.activity)})).catch((function(e){console.log(e)}))},formatDate:function(e){return Ae()(e).format("LL")},formatCapitalize:function(e){if(e)return e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)},textLeft:function(e){return e.substring(0,1)},sortAZ:function(e){"asc"==e?(this.sort.asc=!0,this.sort.desc=!1):"desc"==e&&(this.sort.asc=!1,this.sort.desc=!0)},viewAnswer:function(e,t){this.$router.push({path:"/admin/user/"+t+"/answer/"+e})}},created:function(){this.user=this.$auth.check(),this.user&&(this.userId=this.$route.params.id,this.getUserDetail(this.userId),this.getActivity(this.userId))}},ze=(c("b2f1"),c("6b0d")),Ie=c.n(ze);const $e=Ie()(Te,[["render",Se],["__scopeId","data-v-95f3a02e"]]);t["default"]=$e},1921:function(e,t,c){"use strict";var a=c("7a23"),n={class:"row"},o={class:"col text-start"},r=Object(a["createTextVNode"])(" Menu "),l={class:"col text-end"},s={class:"dropdown"},d={class:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown"},i={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",style:{"z-index":"1200"}},u={class:"dropdown-item",href:"#"},m=Object(a["createTextVNode"])(" Profile "),b=Object(a["createTextVNode"])(" Logout");function O(e,t,c,O,j,p){var f=Object(a["resolveComponent"])("vue-feather");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",null,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("button",{class:"btn btn-admin btn-primary",onClick:t[0]||(t[0]=function(){return c.display&&c.display.apply(c,arguments)})},[Object(a["createVNode"])(f,{type:"menu",stroke:"white",class:"me-2"}),r])]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("button",d,[Object(a["createVNode"])(f,{type:"user",stroke:"blue",class:"me-2"})]),Object(a["createElementVNode"])("ul",i,[Object(a["createElementVNode"])("li",null,[Object(a["createElementVNode"])("a",u,[Object(a["createVNode"])(f,{type:"user-check",stroke:"blue",class:"me-2"}),m])]),Object(a["createElementVNode"])("li",null,[Object(a["createElementVNode"])("a",{class:"dropdown-item",onClick:t[1]||(t[1]=function(){return p.logout&&p.logout.apply(p,arguments)})},[Object(a["createVNode"])(f,{type:"rotate-cw",stroke:"blue",class:"me-2"}),b])])])])])])])}var j=c("4edd"),p=(c("9ddf"),{name:"AdminHeader",props:{msg:String,display:Function},components:{VueFeather:j["a"]},data:function(){return{}},methods:{logout:function(){this.$router.push({path:"/"}),this.$alert.toast("success","You have successfully logged out"),localStorage.removeItem("user")}}}),f=(c("c3ea"),c("6b0d")),v=c.n(f);const h=v()(p,[["render",O],["__scopeId","data-v-6e38f351"]]);t["a"]=h},"4e82":function(e,t,c){"use strict";var a=c("23e7"),n=c("e330"),o=c("59ed"),r=c("7b0b"),l=c("07fa"),s=c("577e"),d=c("d039"),i=c("addb"),u=c("a640"),m=c("04d1"),b=c("d998"),O=c("2d00"),j=c("512c"),p=[],f=n(p.sort),v=n(p.push),h=d((function(){p.sort(void 0)})),N=d((function(){p.sort(null)})),V=u("sort"),g=!d((function(){if(O)return O<70;if(!(m&&m>3)){if(b)return!0;if(j)return j<603;var e,t,c,a,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:c=3;break;case 68:case 71:c=4;break;default:c=2}for(a=0;a<47;a++)p.push({k:t+a,v:c})}for(p.sort((function(e,t){return t.v-e.v})),a=0;a<p.length;a++)t=p[a].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),E=h||!N||!V||!g,y=function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:s(t)>s(c)?1:-1}};a({target:"Array",proto:!0,forced:E},{sort:function(e){void 0!==e&&o(e);var t=r(this);if(g)return void 0===e?f(t):f(t,e);var c,a,n=[],s=l(t);for(a=0;a<s;a++)a in t&&v(n,t[a]);i(n,y(e)),c=n.length,a=0;while(a<c)t[a]=n[a++];while(a<s)delete t[a++];return t}})},"512c":function(e,t,c){var a=c("342f"),n=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},"54dd":function(e,t,c){"use strict";c("010f")},"972a":function(e,t,c){},"9ddf":function(e,t,c){},a1e0:function(e,t,c){},a640:function(e,t,c){"use strict";var a=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&a((function(){c.call(null,t||function(){throw 1},1)}))}},addb:function(e,t,c){var a=c("f36a"),n=Math.floor,o=function(e,t){var c=e.length,s=n(c/2);return c<8?r(e,t):l(e,o(a(e,0,s),t),o(a(e,s),t),t)},r=function(e,t){var c,a,n=e.length,o=1;while(o<n){a=o,c=e[o];while(a&&t(e[a-1],c)>0)e[a]=e[--a];a!==o++&&(e[a]=c)}return e},l=function(e,t,c,a){var n=t.length,o=c.length,r=0,l=0;while(r<n||l<o)e[r+l]=r<n&&l<o?a(t[r],c[l])<=0?t[r++]:c[l++]:r<n?t[r++]:c[l++];return e};e.exports=o},b2f1:function(e,t,c){"use strict";c("972a")},c3ea:function(e,t,c){"use strict";c("a1e0")},d998:function(e,t,c){var a=c("342f");e.exports=/MSIE|Trident/.test(a)},ff54:function(e,t,c){"use strict";var a=c("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-787dad49"),e=e(),Object(a["popScopeId"])(),e},o={id:"sidebar",class:"sidebar"},r=n((function(){return Object(a["createElementVNode"])("h3",{class:"text-center mb-4 my-2"},"Dashboard",-1)})),l={class:"sidebar-ul"},s=n((function(){return Object(a["createElementVNode"])("span",null," Dashboard ",-1)})),d=n((function(){return Object(a["createElementVNode"])("hr",{class:"m-0"},null,-1)})),i=n((function(){return Object(a["createElementVNode"])("span",null," Modules ",-1)})),u=n((function(){return Object(a["createElementVNode"])("hr",{class:"m-0"},null,-1)})),m=n((function(){return Object(a["createElementVNode"])("span",null," User List ",-1)})),b=n((function(){return Object(a["createElementVNode"])("hr",{class:"m-0"},null,-1)})),O={class:"btn-sidebar"},j={class:"text-center"},p={class:"btn btn-light pb-2 pt-1"};function f(e,t,c,n,f,v){var h=Object(a["resolveComponent"])("vue-feather");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[r,Object(a["createElementVNode"])("ul",l,[Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["sidebar-li","dashboard"==c.menu?"active":""]),onClick:t[0]||(t[0]=function(e){return v.linkTo("/admin/dashboard")})},[Object(a["createVNode"])(h,{type:"home",class:"me-2 float-end"}),s],2),d,Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["sidebar-li","module"==c.menu?"active":""]),onClick:t[1]||(t[1]=function(e){return v.linkTo("/admin/module")})},[Object(a["createVNode"])(h,{type:"book",class:"me-2 float-end"}),i],2),u,Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["sidebar-li","user"==c.menu?"active":""]),onClick:t[2]||(t[2]=function(e){return v.linkTo("/admin/user")})},[Object(a["createVNode"])(h,{type:"list",class:"me-2 float-end"}),m],2),b]),Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("button",p,[Object(a["createVNode"])(h,{type:"arrow-left",class:"mb-1 float-end pointer",onClick:c.display},null,8,["onClick"])])])])])}var v=c("4edd"),h={name:"AdminSidebar",props:{menu:String,submenu:String,display:Function},components:{VueFeather:v["a"]},methods:{linkTo:function(e){this.$router.push({path:e})}}},N=(c("54dd"),c("6b0d")),V=c.n(N);const g=V()(h,[["render",f],["__scopeId","data-v-787dad49"]]);t["a"]=g}}]);
//# sourceMappingURL=chunk-56666d1b.342faa03.js.map