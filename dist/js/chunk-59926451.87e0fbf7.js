(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59926451"],{"010f":function(e,t,a){},"0133":function(e,t,a){e.exports=a.p+"img/user.b0dca153.png"},"127a":function(e,t,a){},1921:function(e,t,a){"use strict";var c=a("7a23");const s={class:"row"},o={class:"col text-start"},r={class:"col text-end"},n={class:"dropdown"},d={class:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown"},l={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",style:{"z-index":"1200"}},i={class:"dropdown-item",href:"#"};function b(e,t,a,b,m,u){const p=Object(c["resolveComponent"])("vue-feather");return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",null,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("button",{class:"btn btn-admin btn-primary",onClick:t[0]||(t[0]=(...e)=>a.display&&a.display(...e))},[Object(c["createVNode"])(p,{type:"menu",stroke:"white",class:"me-2"}),t[2]||(t[2]=Object(c["createTextVNode"])(" Menu "))])]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("button",d,[Object(c["createVNode"])(p,{type:"user",stroke:"blue",class:"me-2"})]),Object(c["createElementVNode"])("ul",l,[Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",i,[Object(c["createVNode"])(p,{type:"user-check",stroke:"blue",class:"me-2"}),t[3]||(t[3]=Object(c["createTextVNode"])(" Profile "))])]),Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",{class:"dropdown-item",onClick:t[1]||(t[1]=(...e)=>u.logout&&u.logout(...e))},[Object(c["createVNode"])(p,{type:"rotate-cw",stroke:"blue",class:"me-2"}),t[4]||(t[4]=Object(c["createTextVNode"])(" Logout"))])])])])])])])}a("14d9");var m=a("4edd"),u=(a("9ddf"),{name:"AdminHeader",props:{msg:String,display:Function},components:{VueFeather:m["a"]},data(){return{}},methods:{logout(){this.$router.push({path:"/"}),this.$alert.toast("success","You have successfully logged out"),localStorage.removeItem("user")}},created(){document.title="Admin Dashboard"}}),p=(a("3e97"),a("6b0d")),h=a.n(p);const O=h()(u,[["render",b],["__scopeId","data-v-16d016bc"]]);t["a"]=O},"349a":function(e,t,a){},"3e97":function(e,t,a){"use strict";a("127a")},"54dd":function(e,t,a){"use strict";a("010f")},"6f4f":function(e,t,a){e.exports=a.p+"img/module.31ad7de8.png"},7815:function(e,t,a){"use strict";a("e186")},9497:function(e,t,a){"use strict";a("349a")},"9ddf":function(e,t,a){},a761:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s={id:"dashboard"},o={class:"container-fluid ps-0"},r={class:"row g-0"};function n(e,t,a,n,d,l){const i=Object(c["resolveComponent"])("AdminSidebar"),b=Object(c["resolveComponent"])("AdminHeader"),m=Object(c["resolveComponent"])("v-dashboard");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(c["Transition"],{name:"slide"},{default:Object(c["withCtx"])(()=>[d.sidebarStatus?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:Object(c["normalizeClass"])([d.sidebar,"sidebar-admin sticky-top"])},[Object(c["createVNode"])(i,{display:l.sidebarToggle,menu:"dashboard"},null,8,["display"])],2)):Object(c["createCommentVNode"])("",!0)]),_:1}),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(d.header)},[Object(c["createVNode"])(b,{display:l.sidebarToggle},null,8,["display"]),Object(c["createVNode"])(m)],2)])])])}var d=a("1921"),l=a("ff54"),i=a("0133"),b=a.n(i),m=a("6f4f"),u=a.n(m);const p={id:"dashboard"},h={class:"container px-3 mt-3"},O={class:"row mt-md-5 mt-2"},j={class:"col-md-6"},N={class:"card card-dashboard px-3 py-3 mb-3"},V={class:"row"},g={class:"col-md-12"},E={class:"row g-0 align-items-center"},v={class:"col-md-10 px-3 py-2"},f={class:"float-end"},k={class:"badge bg-info rounded-pill",style:{"margin-top":"-5px"}},y={class:"my-0"},C={class:"row g-0 align-items-center"},x={class:"col-md-10 px-3 py-2"},w={class:"float-end"},S={class:"badge bg-warning text-dark rounded-circle"},T={class:"badge bg-success rounded-circle"},B={class:"badge bg-danger rounded-circle"},_={class:"col-md-6"};function D(e,t,a,s,o,r){const n=Object(c["resolveComponent"])("vue-feather"),d=Object(c["resolveComponent"])("LineChart");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("div",V,[Object(c["createElementVNode"])("div",g,[t[4]||(t[4]=Object(c["createElementVNode"])("h3",null,"Welcome to Admin Dashboard",-1)),Object(c["createElementVNode"])("button",{class:"btn btn-admin btn-secondary mx-0",onClick:t[0]||(t[0]=e=>r.link("/admin/module/create"))},[Object(c["createVNode"])(n,{type:"plus"}),t[3]||(t[3]=Object(c["createTextVNode"])(" Create Module Now "))])])])]),Object(c["createElementVNode"])("div",{class:"card mb-3 card-dashboard",onClick:t[1]||(t[1]=e=>r.link("/admin/user"))},[Object(c["createElementVNode"])("div",E,[t[6]||(t[6]=Object(c["createElementVNode"])("div",{class:"col-md-2 p-2 rounded-2"},[Object(c["createElementVNode"])("img",{src:b.a,alt:"User List",class:"img-dashboard mx-auto d-block"})],-1)),Object(c["createElementVNode"])("div",v,[t[5]||(t[5]=Object(c["createElementVNode"])("h4",{class:"float-start my-0"},[Object(c["createElementVNode"])("strong",null,"User Registered")],-1)),Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("h4",y,[Object(c["createElementVNode"])("strong",null,Object(c["toDisplayString"])(o.user_register),1)])])])])])]),Object(c["createElementVNode"])("div",{class:"card mb-3 card-dashboard",onClick:t[2]||(t[2]=e=>r.link("/admin/module"))},[Object(c["createElementVNode"])("div",C,[t[12]||(t[12]=Object(c["createElementVNode"])("div",{class:"col-md-2 px-3 py-2"},[Object(c["createElementVNode"])("img",{src:u.a,alt:"User List",class:"img-dashboard mx-auto d-block"})],-1)),Object(c["createElementVNode"])("div",x,[t[9]||(t[9]=Object(c["createElementVNode"])("h4",{class:"my-0"},[Object(c["createElementVNode"])("strong",null," Module List ")],-1)),t[10]||(t[10]=Object(c["createElementVNode"])("hr",{class:"my-0 mb-2"},null,-1)),t[11]||(t[11]=Object(c["createElementVNode"])("div",{class:"float-start"},[Object(c["createElementVNode"])("span",null,"Draft"),Object(c["createTextVNode"])(),Object(c["createElementVNode"])("br"),Object(c["createElementVNode"])("span",null,"Publised"),Object(c["createTextVNode"])(),Object(c["createElementVNode"])("br"),Object(c["createElementVNode"])("span",null,"Inactive")],-1)),Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("span",S,Object(c["toDisplayString"])(o.module.draft),1),t[7]||(t[7]=Object(c["createElementVNode"])("br",null,null,-1)),Object(c["createElementVNode"])("span",T,Object(c["toDisplayString"])(o.module.publish),1),t[8]||(t[8]=Object(c["createElementVNode"])("br",null,null,-1)),Object(c["createElementVNode"])("span",B,Object(c["toDisplayString"])(o.module.inactive),1)])])])])]),Object(c["createElementVNode"])("div",_,[Object(c["createVNode"])(d,{chartData:o.userChart,options:o.options},null,8,["chartData","options"])])])])])}a("14d9");var L=a("4edd"),A=a("9c87"),$=a("dd61");$["Chart"].register($["LineController"],$["CategoryScale"],$["LinearScale"],$["PointElement"],$["LineElement"],$["Title"],$["Tooltip"],$["Legend"]);var U={name:"dashboard",components:{VueFeather:L["a"],LineChart:A["LineChart"]},data(){return{user:[],user_register:"",module:[],userChart:{labels:[],datasets:[{label:"User Joined / Week",data:[],fill:!1,borderColor:"#041f4e",backgroundColor:"#3464a8",tension:.1},{label:"User Logged-in / Week",data:[],fill:!1,borderColor:"#e18327",backgroundColor:"#fcc583",tension:.1}]},options:{responsive:!0,plugins:{title:{display:!0,text:"USER JOINED & LOGGED-IN"}},scales:{y:{beginAtZero:!0,max:15,ticks:{stepSize:5}}}}}},methods:{link(e){this.$router.push({path:e})},getUserRegistered(){this.$axios.get(this.$api_url+"count/user",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{this.user_register=e.data}).catch(e=>{console.log(e.response)})},getModule(){this.$axios.get(this.$api_url+"count/module",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{this.module=e.data}).catch(e=>{console.log(e.response)})},getUserChart(){this.$axios.get(this.$api_url+"count/user/weekly",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{var t=Object.values(e.data.login),a=Math.max(...t);this.userChart.datasets[0].data=e.data.register,this.userChart.datasets[1].data=e.data.login,this.options.scales.y.max=a+5,this.userChart.labels=e.data.date}).catch(e=>{console.log(e.response)})}},created(){this.user=this.$auth.check(),this.user&&(this.getUserRegistered(),this.getModule(),this.getUserChart())}},z=(a("7815"),a("6b0d")),M=a.n(z);const I=M()(U,[["render",D],["__scopeId","data-v-26b25568"]]);var F=I,J={name:"Dashboard",components:{AdminHeader:d["a"],AdminSidebar:l["a"],"v-dashboard":F},data(){return{sidebar:"sidebar-left",sidebarStatus:!0,header:"content",user:[]}},methods:{sidebarToggle(){1==this.sidebarStatus?(this.sidebarStatus=!1,this.header="full-content",this.sidebar="d-none"):(this.sidebarStatus=!0,this.sidebar="sidebar-left sidebar-mobile",this.header="content")}},created(){this.user=this.$auth.check()}};a("9497");const R=M()(J,[["render",n],["__scopeId","data-v-d693ebec"]]);t["default"]=R},e186:function(e,t,a){},ff54:function(e,t,a){"use strict";var c=a("7a23");const s={id:"sidebar",class:"sidebar"},o={class:"sidebar-ul"},r={class:"btn-sidebar"},n={class:"text-center"},d={class:"btn btn-light pb-2 pt-1"};function l(e,t,a,l,i,b){const m=Object(c["resolveComponent"])("vue-feather");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[t[9]||(t[9]=Object(c["createElementVNode"])("h3",{class:"text-center mb-4 my-2"},"Dashboard",-1)),Object(c["createElementVNode"])("ul",o,[Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","dashboard"==a.menu?"active":""]),onClick:t[0]||(t[0]=e=>b.linkTo("/admin/dashboard"))},[Object(c["createVNode"])(m,{type:"home",class:"me-2 float-end"}),t[3]||(t[3]=Object(c["createElementVNode"])("span",null," Dashboard ",-1))],2),t[6]||(t[6]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","module"==a.menu?"active":""]),onClick:t[1]||(t[1]=e=>b.linkTo("/admin/module"))},[Object(c["createVNode"])(m,{type:"book",class:"me-2 float-end"}),t[4]||(t[4]=Object(c["createElementVNode"])("span",null," Modules ",-1))],2),t[7]||(t[7]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","user"==a.menu?"active":""]),onClick:t[2]||(t[2]=e=>b.linkTo("/admin/user"))},[Object(c["createVNode"])(m,{type:"list",class:"me-2 float-end"}),t[5]||(t[5]=Object(c["createElementVNode"])("span",null," User List ",-1))],2),t[8]||(t[8]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1))]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("button",d,[Object(c["createVNode"])(m,{type:"arrow-left",class:"mb-1 float-end pointer",onClick:a.display},null,8,["onClick"])])])])])}a("14d9");var i=a("4edd"),b={name:"AdminSidebar",props:{menu:String,submenu:String,display:Function},components:{VueFeather:i["a"]},methods:{linkTo(e){this.$router.push({path:e})}}},m=(a("54dd"),a("6b0d")),u=a.n(m);const p=u()(b,[["render",l],["__scopeId","data-v-787dad49"]]);t["a"]=p}}]);
//# sourceMappingURL=chunk-59926451.87e0fbf7.js.map