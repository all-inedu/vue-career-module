(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c08e80f2"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),a=n("da84"),c=n("c65b"),o=n("e330"),s=n("1626"),l=n("861d"),d=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),i=a.Error,u=o(/./.test);r({target:"RegExp",proto:!0,forced:!d},{test:function(e){var t=this.exec;if(!s(t))return u(this,e);var n=c(t,this,e);if(null!==n&&!l(n))throw new i("RegExp exec method returned something other than an Object or null");return!!n}})},"010f":function(e,t,n){},"0133":function(e,t,n){e.exports=n.p+"img/user.b0dca153.png"},"07ac":function(e,t,n){var r=n("23e7"),a=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return a(e)}})},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"127a":function(e,t,n){},1921:function(e,t,n){"use strict";var r=n("7a23"),a={class:"row"},c={class:"col text-start"},o=Object(r["createTextVNode"])(" Menu "),s={class:"col text-end"},l={class:"dropdown"},d={class:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown"},i={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",style:{"z-index":"1200"}},u={class:"dropdown-item",href:"#"},b=Object(r["createTextVNode"])(" Profile "),m=Object(r["createTextVNode"])(" Logout");function f(e,t,n,f,p,h){var O=Object(r["resolveComponent"])("vue-feather");return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",null,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("button",{class:"btn btn-admin btn-primary",onClick:t[0]||(t[0]=function(){return n.display&&n.display.apply(n,arguments)})},[Object(r["createVNode"])(O,{type:"menu",stroke:"white",class:"me-2"}),o])]),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("button",d,[Object(r["createVNode"])(O,{type:"user",stroke:"blue",class:"me-2"})]),Object(r["createElementVNode"])("ul",i,[Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",u,[Object(r["createVNode"])(O,{type:"user-check",stroke:"blue",class:"me-2"}),b])]),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("a",{class:"dropdown-item",onClick:t[1]||(t[1]=function(){return h.logout&&h.logout.apply(h,arguments)})},[Object(r["createVNode"])(O,{type:"rotate-cw",stroke:"blue",class:"me-2"}),m])])])])])])])}var p=n("4edd"),h=(n("9ddf"),{name:"AdminHeader",props:{msg:String,display:Function},components:{VueFeather:p["a"]},data:function(){return{}},methods:{logout:function(){this.$router.push({path:"/"}),this.$alert.toast("success","You have successfully logged out"),localStorage.removeItem("user")}},created:function(){document.title="Admin Dashboard"}}),O=(n("3e97"),n("6b0d")),g=n.n(O);const j=g()(h,[["render",f],["__scopeId","data-v-16d016bc"]]);t["a"]=j},"349a":function(e,t,n){},"3e97":function(e,t,n){"use strict";n("127a")},"4df4":function(e,t,n){"use strict";var r=n("da84"),a=n("0366"),c=n("c65b"),o=n("7b0b"),s=n("9bdd"),l=n("e95a"),d=n("68ee"),i=n("07fa"),u=n("8418"),b=n("9a1f"),m=n("35a1"),f=r.Array;e.exports=function(e){var t=o(e),n=d(this),r=arguments.length,p=r>1?arguments[1]:void 0,h=void 0!==p;h&&(p=a(p,r>2?arguments[2]:void 0));var O,g,j,v,E,N,V=m(t),x=0;if(!V||this==f&&l(V))for(O=i(t),g=n?new this(O):f(O);O>x;x++)N=h?p(t[x],x):t[x],u(g,x,N);else for(v=b(t,V),E=v.next,g=n?new this:[];!(j=c(E,v)).done;x++)N=h?s(v,p,[j.value,x],!0):j.value,u(g,x,N);return g.length=x,g}},"54dd":function(e,t,n){"use strict";n("010f")},"6f4f":function(e,t,n){e.exports=n.p+"img/module.31ad7de8.png"},"6f53":function(e,t,n){var r=n("83ab"),a=n("e330"),c=n("df75"),o=n("fc6a"),s=n("d1e7").f,l=a(s),d=a([].push),i=function(e){return function(t){var n,a=o(t),s=c(a),i=s.length,u=0,b=[];while(i>u)n=s[u++],r&&!l(a,n)||d(b,e?[n,a[n]]:a[n]);return b}};e.exports={entries:i(!0),values:i(!1)}},7815:function(e,t,n){"use strict";n("e186")},"857a":function(e,t,n){var r=n("e330"),a=n("1d80"),c=n("577e"),o=/"/g,s=r("".replace);e.exports=function(e,t,n,r){var l=c(a(e)),d="<"+t;return""!==n&&(d+=" "+n+'="'+s(c(r),o,"&quot;")+'"'),d+">"+l+"</"+t+">"}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),c=n("577e"),o=n("ad6d"),s=n("9f7f"),l=n("5692"),d=n("7c73"),i=n("69f3").get,u=n("fce3"),b=n("107c"),m=l("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,p=f,h=a("".charAt),O=a("".indexOf),g=a("".replace),j=a("".slice),v=function(){var e=/a/,t=/b*/g;return r(f,e,"a"),r(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),E=s.UNSUPPORTED_Y||s.BROKEN_CARET,N=void 0!==/()??/.exec("")[1],V=v||N||E||u||b;V&&(p=function(e){var t,n,a,s,l,u,b,V=this,x=i(V),y=c(e),k=x.raw;if(k)return k.lastIndex=V.lastIndex,t=r(p,k,y),V.lastIndex=k.lastIndex,t;var C=x.groups,w=E&&V.sticky,S=r(o,V),I=V.source,A=0,T=y;if(w&&(S=g(S,"y",""),-1===O(S,"g")&&(S+="g"),T=j(y,V.lastIndex),V.lastIndex>0&&(!V.multiline||V.multiline&&"\n"!==h(y,V.lastIndex-1))&&(I="(?: "+I+")",T=" "+T,A++),n=new RegExp("^(?:"+I+")",S)),N&&(n=new RegExp("^"+I+"$(?!\\s)",S)),v&&(a=V.lastIndex),s=r(f,w?n:V,T),w?s?(s.input=j(s.input,A),s[0]=j(s[0],A),s.index=V.lastIndex,V.lastIndex+=s[0].length):V.lastIndex=0:v&&s&&(V.lastIndex=V.global?s.index+s[0].length:a),N&&s&&s.length>1&&r(m,s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&C)for(s.groups=u=d(null),l=0;l<C.length;l++)b=C[l],u[b[0]]=s[b[1]];return s}),e.exports=p},9497:function(e,t,n){"use strict";n("349a")},9911:function(e,t,n){"use strict";var r=n("23e7"),a=n("857a"),c=n("af03");r({target:"String",proto:!0,forced:c("link")},{link:function(e){return a(this,"a","href",e)}})},"9bdd":function(e,t,n){var r=n("825a"),a=n("2a62");e.exports=function(e,t,n,c){try{return c?t(r(n)[0],n[1]):t(n)}catch(o){a(e,"throw",o)}}},"9ddf":function(e,t,n){},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),c=n("1c7e"),o=!c((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:a})},a761:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={id:"dashboard"},c={class:"container-fluid ps-0"},o={class:"row g-0"};function s(e,t,n,s,l,d){var i=Object(r["resolveComponent"])("AdminSidebar"),u=Object(r["resolveComponent"])("AdminHeader"),b=Object(r["resolveComponent"])("v-dashboard");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(r["Transition"],{name:"slide"},{default:Object(r["withCtx"])((function(){return[l.sidebarStatus?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:0,class:Object(r["normalizeClass"])([l.sidebar,"sidebar-admin sticky-top"])},[Object(r["createVNode"])(i,{display:d.sidebarToggle,menu:"dashboard"},null,8,["display"])],2)):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(l.header)},[Object(r["createVNode"])(u,{display:d.sidebarToggle},null,8,["display"]),Object(r["createVNode"])(b)],2)])])])}var l=n("1921"),d=n("ff54"),i=(n("9911"),n("0133")),u=n.n(i),b=n("6f4f"),m=n.n(b),f=function(e){return Object(r["pushScopeId"])("data-v-26b25568"),e=e(),Object(r["popScopeId"])(),e},p={id:"dashboard"},h={class:"container px-3 mt-3"},O={class:"row mt-md-5 mt-2"},g={class:"col-md-6"},j={class:"card card-dashboard px-3 py-3 mb-3"},v={class:"row"},E={class:"col-md-12"},N=f((function(){return Object(r["createElementVNode"])("h3",null,"Welcome to Admin Dashboard",-1)})),V=Object(r["createTextVNode"])(" Create Module Now "),x={class:"row g-0 align-items-center"},y=f((function(){return Object(r["createElementVNode"])("div",{class:"col-md-2 p-2 rounded-2"},[Object(r["createElementVNode"])("img",{src:u.a,alt:"User List",class:"img-dashboard mx-auto d-block"})],-1)})),k={class:"col-md-10 px-3 py-2"},C=f((function(){return Object(r["createElementVNode"])("h4",{class:"float-start my-0"},[Object(r["createElementVNode"])("strong",null,"User Registered")],-1)})),w={class:"float-end"},S={class:"badge bg-info rounded-pill",style:{"margin-top":"-5px"}},I={class:"my-0"},A={class:"row g-0 align-items-center"},T=f((function(){return Object(r["createElementVNode"])("div",{class:"col-md-2 px-3 py-2"},[Object(r["createElementVNode"])("img",{src:m.a,alt:"User List",class:"img-dashboard mx-auto d-block"})],-1)})),R={class:"col-md-10 px-3 py-2"},_=f((function(){return Object(r["createElementVNode"])("h4",{class:"my-0"},[Object(r["createElementVNode"])("strong",null," Module List ")],-1)})),B=f((function(){return Object(r["createElementVNode"])("hr",{class:"my-0 mb-2"},null,-1)})),D=f((function(){return Object(r["createElementVNode"])("div",{class:"float-start"},[Object(r["createElementVNode"])("span",null,"Draft"),Object(r["createTextVNode"])(),Object(r["createElementVNode"])("br"),Object(r["createElementVNode"])("span",null,"Publised"),Object(r["createTextVNode"])(),Object(r["createElementVNode"])("br"),Object(r["createElementVNode"])("span",null,"Inactive")],-1)})),U={class:"float-end"},L={class:"badge bg-warning text-dark rounded-circle"},$=f((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),M={class:"badge bg-success rounded-circle"},z=f((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),P={class:"badge bg-danger rounded-circle"},F={class:"col-md-6"};function J(e,t,n,a,c,o){var s=Object(r["resolveComponent"])("vue-feather"),l=Object(r["resolveComponent"])("LineChart");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",p,[Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("div",g,[Object(r["createElementVNode"])("div",j,[Object(r["createElementVNode"])("div",v,[Object(r["createElementVNode"])("div",E,[N,Object(r["createElementVNode"])("button",{class:"btn btn-admin btn-secondary mx-0",onClick:t[0]||(t[0]=function(e){return o.link("/admin/module/create")})},[Object(r["createVNode"])(s,{type:"plus"}),V])])])]),Object(r["createElementVNode"])("div",{class:"card mb-3 card-dashboard",onClick:t[1]||(t[1]=function(e){return o.link("/admin/user")})},[Object(r["createElementVNode"])("div",x,[y,Object(r["createElementVNode"])("div",k,[C,Object(r["createElementVNode"])("div",w,[Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("h4",I,[Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(c.user_register),1)])])])])])]),Object(r["createElementVNode"])("div",{class:"card mb-3 card-dashboard",onClick:t[2]||(t[2]=function(e){return o.link("/admin/module")})},[Object(r["createElementVNode"])("div",A,[T,Object(r["createElementVNode"])("div",R,[_,B,D,Object(r["createElementVNode"])("div",U,[Object(r["createElementVNode"])("span",L,Object(r["toDisplayString"])(c.module.draft),1),$,Object(r["createElementVNode"])("span",M,Object(r["toDisplayString"])(c.module.publish),1),z,Object(r["createElementVNode"])("span",P,Object(r["toDisplayString"])(c.module.inactive),1)])])])])]),Object(r["createElementVNode"])("div",F,[Object(r["createVNode"])(l,{chartData:c.userChart,options:c.options},null,8,["chartData","options"])])])])])}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e){if(Array.isArray(e))return H(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function Y(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function G(e,t){if(e){if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function K(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(e){return W(e)||Y(e)||G(e)||K()}n("07ac");var X=n("4edd"),Z=n("b48c"),Q=n("9b4a");Q["Chart"].register(Q["LineController"],Q["CategoryScale"],Q["LinearScale"],Q["PointElement"],Q["LineElement"],Q["Title"],Q["Tooltip"],Q["Legend"]);var ee={name:"dashboard",components:{VueFeather:X["a"],LineChart:Z["LineChart"]},data:function(){return{user:[],user_register:"",module:[],userChart:{labels:[],datasets:[{label:"User Joined / Week",data:[],fill:!1,borderColor:"#041f4e",backgroundColor:"#3464a8",tension:.1},{label:"User Logged-in / Week",data:[],fill:!1,borderColor:"#e18327",backgroundColor:"#fcc583",tension:.1}]},options:{responsive:!0,plugins:{title:{display:!0,text:"USER JOINED & LOGGED-IN"}},scales:{y:{beginAtZero:!0,max:15,ticks:{stepSize:5}}}}}},methods:{link:function(e){this.$router.push({path:e})},getUserRegistered:function(){var e=this;this.$axios.get(this.$api_url+"count/user",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then((function(t){e.user_register=t.data})).catch((function(e){console.log(e.response)}))},getModule:function(){var e=this;this.$axios.get(this.$api_url+"count/module",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then((function(t){e.module=t.data})).catch((function(e){console.log(e.response)}))},getUserChart:function(){var e=this;this.$axios.get(this.$api_url+"count/user/weekly",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then((function(t){var n=Object.values(t.data.login),r=Math.max.apply(Math,q(n));e.userChart.datasets[0].data=t.data.register,e.userChart.datasets[1].data=t.data.login,e.options.scales.y.max=r+5,e.userChart.labels=t.data.date})).catch((function(e){console.log(e.response)}))}},created:function(){this.user=this.$auth.check(),this.user&&(this.getUserRegistered(),this.getModule(),this.getUserChart())}},te=(n("7815"),n("6b0d")),ne=n.n(te);const re=ne()(ee,[["render",J],["__scopeId","data-v-26b25568"]]);var ae=re,ce={name:"Dashboard",components:{AdminHeader:l["a"],AdminSidebar:d["a"],"v-dashboard":ae},data:function(){return{sidebar:"sidebar-left",sidebarStatus:!0,header:"content",user:[]}},methods:{sidebarToggle:function(){1==this.sidebarStatus?(this.sidebarStatus=!1,this.header="full-content",this.sidebar="d-none"):(this.sidebarStatus=!0,this.sidebar="sidebar-left sidebar-mobile",this.header="content")}},created:function(){this.user=this.$auth.check()}};n("9497");const oe=ne()(ce,[["render",s],["__scopeId","data-v-d693ebec"]]);t["default"]=oe},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,c=n("e330"),o=n("9bf2").f,s=Function.prototype,l=c(s.toString),d=/^\s*function ([^ (]*)/,i=c(d.exec),u="name";r&&!a&&o(s,u,{configurable:!0,get:function(){try{return i(d,l(this))[1]}catch(e){return""}}})},e186:function(e,t,n){},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},ff54:function(e,t,n){"use strict";var r=n("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-787dad49"),e=e(),Object(r["popScopeId"])(),e},c={id:"sidebar",class:"sidebar"},o=a((function(){return Object(r["createElementVNode"])("h3",{class:"text-center mb-4 my-2"},"Dashboard",-1)})),s={class:"sidebar-ul"},l=a((function(){return Object(r["createElementVNode"])("span",null," Dashboard ",-1)})),d=a((function(){return Object(r["createElementVNode"])("hr",{class:"m-0"},null,-1)})),i=a((function(){return Object(r["createElementVNode"])("span",null," Modules ",-1)})),u=a((function(){return Object(r["createElementVNode"])("hr",{class:"m-0"},null,-1)})),b=a((function(){return Object(r["createElementVNode"])("span",null," User List ",-1)})),m=a((function(){return Object(r["createElementVNode"])("hr",{class:"m-0"},null,-1)})),f={class:"btn-sidebar"},p={class:"text-center"},h={class:"btn btn-light pb-2 pt-1"};function O(e,t,n,a,O,g){var j=Object(r["resolveComponent"])("vue-feather");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[o,Object(r["createElementVNode"])("ul",s,[Object(r["createElementVNode"])("li",{class:Object(r["normalizeClass"])(["sidebar-li","dashboard"==n.menu?"active":""]),onClick:t[0]||(t[0]=function(e){return g.linkTo("/admin/dashboard")})},[Object(r["createVNode"])(j,{type:"home",class:"me-2 float-end"}),l],2),d,Object(r["createElementVNode"])("li",{class:Object(r["normalizeClass"])(["sidebar-li","module"==n.menu?"active":""]),onClick:t[1]||(t[1]=function(e){return g.linkTo("/admin/module")})},[Object(r["createVNode"])(j,{type:"book",class:"me-2 float-end"}),i],2),u,Object(r["createElementVNode"])("li",{class:Object(r["normalizeClass"])(["sidebar-li","user"==n.menu?"active":""]),onClick:t[2]||(t[2]=function(e){return g.linkTo("/admin/user")})},[Object(r["createVNode"])(j,{type:"list",class:"me-2 float-end"}),b],2),m]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",p,[Object(r["createElementVNode"])("button",h,[Object(r["createVNode"])(j,{type:"arrow-left",class:"mb-1 float-end pointer",onClick:n.display},null,8,["onClick"])])])])])}var g=n("4edd"),j={name:"AdminSidebar",props:{menu:String,submenu:String,display:Function},components:{VueFeather:g["a"]},methods:{linkTo:function(e){this.$router.push({path:e})}}},v=(n("54dd"),n("6b0d")),E=n.n(v);const N=E()(j,[["render",O],["__scopeId","data-v-787dad49"]]);t["a"]=N}}]);
//# sourceMappingURL=chunk-c08e80f2.713905c3.js.map