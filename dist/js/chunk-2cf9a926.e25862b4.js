(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf9a926"],{"010f":function(e,t,a){},"127a":function(e,t,a){},1921:function(e,t,a){"use strict";var c=a("7a23");const o={class:"row"},l={class:"col text-start"},n={class:"col text-end"},s={class:"dropdown"},r={class:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown"},d={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",style:{"z-index":"1200"}},i={class:"dropdown-item",href:"#"};function b(e,t,a,b,m,u){const j=Object(c["resolveComponent"])("vue-feather");return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",null,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("button",{class:"btn btn-admin btn-primary",onClick:t[0]||(t[0]=(...e)=>a.display&&a.display(...e))},[Object(c["createVNode"])(j,{type:"menu",stroke:"white",class:"me-2"}),t[2]||(t[2]=Object(c["createTextVNode"])(" Menu "))])]),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("button",r,[Object(c["createVNode"])(j,{type:"user",stroke:"blue",class:"me-2"})]),Object(c["createElementVNode"])("ul",d,[Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",i,[Object(c["createVNode"])(j,{type:"user-check",stroke:"blue",class:"me-2"}),t[3]||(t[3]=Object(c["createTextVNode"])(" Profile "))])]),Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",{class:"dropdown-item",onClick:t[1]||(t[1]=(...e)=>u.logout&&u.logout(...e))},[Object(c["createVNode"])(j,{type:"rotate-cw",stroke:"blue",class:"me-2"}),t[4]||(t[4]=Object(c["createTextVNode"])(" Logout"))])])])])])])])}a("14d9");var m=a("4edd"),u=(a("9ddf"),{name:"AdminHeader",props:{msg:String,display:Function},components:{VueFeather:m["a"]},data(){return{}},methods:{logout(){this.$router.push({path:"/"}),this.$alert.toast("success","You have successfully logged out"),localStorage.removeItem("user")}},created(){document.title="Admin Dashboard"}}),j=(a("3e97"),a("6b0d")),O=a.n(j);const p=O()(u,[["render",b],["__scopeId","data-v-16d016bc"]]);t["a"]=p},"2dd8":function(e,t,a){},"3e97":function(e,t,a){"use strict";a("127a")},"54dd":function(e,t,a){"use strict";a("010f")},7937:function(e,t,a){"use strict";a("2dd8")},"9ddf":function(e,t,a){},ed00:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={id:"answer"},l={class:"container-fluid ps-0"},n={class:"row g-0"},s={key:0,class:"container p-md-3 p-2"},r={class:"row mx-2"},d={class:"card shadow"},i={class:"card-body"},b={class:"row border-bottom mb-3"},m={class:"col-md-6"},u={class:"mb-2"},j={class:"col-md-6 text-md-end"},O={class:"mb-2"},p={class:"table-responsive"},h={class:"table table-bordered align-middle"},N={key:0},V={class:"text-center bg-secondary text-white"},E={colspan:"3"},k={class:"border"},g={class:"border"},w={class:"border"},v={class:"table-responsive"},y={class:"table border mb-0"},f=["innerHTML"],B={class:"border"},_={key:0},x={key:1},C={key:2},T=["href"],$={key:0,class:"container mt-5"},S={class:"row justify-content-center"},D={class:"col-md-4 text-center"};function A(e,t,a,A,z,L){const M=Object(c["resolveComponent"])("AdminSidebar"),F=Object(c["resolveComponent"])("AdminHeader"),H=Object(c["resolveComponent"])("vue-feather");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",n,[Object(c["createVNode"])(c["Transition"],{name:"slide"},{default:Object(c["withCtx"])(()=>[z.sidebarStatus?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:Object(c["normalizeClass"])([z.sidebar,"sidebar-admin"])},[Object(c["createVNode"])(M,{display:L.sidebarToggle,menu:"user",submenu:"user"},null,8,["display"])],2)):Object(c["createCommentVNode"])("",!0)]),_:1}),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(z.header)},[Object(c["createVNode"])(F,{display:L.sidebarToggle},null,8,["display"]),Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:Object(c["withCtx"])(()=>[z.show?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("span",{class:"btn btn-sm btn-warning rounded-pill mb-4 mx-0 px-3",onClick:t[0]||(t[0]=t=>L.backToList(e.$route.params.id))},[Object(c["createVNode"])(H,{type:"arrow-left",class:"me-2 pointer text-dark",size:"20"}),t[2]||(t[2]=Object(c["createTextVNode"])(" Back to List "))]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",u,[t[3]||(t[3]=Object(c["createElementVNode"])("small",{class:"text-muted d-block"}," Full Name ",-1)),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(z.user_data.first_name+" "+z.user_data.last_name),1)])]),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",O,[t[4]||(t[4]=Object(c["createElementVNode"])("small",{class:"text-muted d-block"}," Module Name ",-1)),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(z.module_data.module_name),1)])])]),Object(c["createElementVNode"])("button",{class:"btn-warning float-end btn-sm rounded-pill",onClick:t[1]||(t[1]=(...e)=>L.download&&L.download(...e))}," Download "),t[8]||(t[8]=Object(c["createElementVNode"])("br",null,null,-1)),t[9]||(t[9]=Object(c["createElementVNode"])("br",null,null,-1)),Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("table",h,[t[7]||(t[7]=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",{class:"text-center"},[Object(c["createElementVNode"])("th",{class:"border-end",width:"1%"},"No"),Object(c["createElementVNode"])("th",{width:"30%"},"Part Name"),Object(c["createElementVNode"])("th",null,"Question / Answer")])],-1)),0==z.outline_length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",N,t[5]||(t[5]=[Object(c["createElementVNode"])("tr",{class:"text-center"},[Object(c["createElementVNode"])("td",{colspan:"3",class:"py-4"}," This module has no questions ")],-1)]))):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(z.module_data.outlines,a=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",{key:a},[Object(c["createElementVNode"])("tr",V,[Object(c["createElementVNode"])("td",E,[Object(c["createElementVNode"])("strong",null,Object(c["toDisplayString"])(a.name),1)])]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.parts,(a,o)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{class:"text-center",key:o},[Object(c["createElementVNode"])("td",k,Object(c["toDisplayString"])(o+1),1),Object(c["createElementVNode"])("td",g,Object(c["toDisplayString"])(a.title),1),Object(c["createElementVNode"])("td",w,[Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("table",y,[t[6]||(t[6]=Object(c["createElementVNode"])("tr",{class:"bg-light"},[Object(c["createElementVNode"])("th",{class:"border py-2"},"Question"),Object(c["createElementVNode"])("th",{class:"border",width:"40%"},"Answer")],-1)),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.elements,t=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{class:"border-1",key:t},[Object(c["createElementVNode"])("td",{class:"border text-start",innerHTML:t.question},null,8,f),Object(c["createElementVNode"])("td",B,["blank"==t.category_element?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",_,Object(c["toDisplayString"])(t.answersdetails[0].answer),1)):Object(c["createCommentVNode"])("",!0),"multiple"==t.category_element?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,Object(c["toDisplayString"])(t.answersdetails[0].answer_from_multiple),1)):Object(c["createCommentVNode"])("",!0),"file"==t.category_element?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,[Object(c["createElementVNode"])("a",{href:e.$base_url+t.answersdetails[0].file_path,class:"btn btn-primary btn-sm rounded-pill",download:""}," Worksheet ",8,T)])):Object(c["createCommentVNode"])("",!0)])]))),128))])])])]))),128))]))),128))])])])])])])):Object(c["createCommentVNode"])("",!0)]),_:1})],2)])]),z.show?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",$,[Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",D,[Object(c["createVNode"])(H,{type:"loader",animation:"spin",size:"50"})])])]))])}a("14d9");var z=a("1921"),L=a("ff54"),M=a("4edd"),F={name:"answer",components:{AdminHeader:z["a"],AdminSidebar:L["a"],VueFeather:M["a"]},data(){return{sidebar:"sidebar-left",sidebarStatus:!0,header:"content",show:!1,user:[],user_data:[],module_data:[],outline_length:""}},methods:{sidebarToggle(){1==this.sidebarStatus?(this.sidebarStatus=!1,this.header="full-content",this.sidebar="d-none"):(this.sidebarStatus=!0,this.sidebar="sidebar-left sidebar-mobile",this.header="content")},backToList(e){this.$router.push({path:"/admin/user/"+e})},getUserData(e){this.$axios.get(this.$api_url+"user/"+e,{headers:{Authorization:"Bearer "+this.user.token}}).then(e=>{e.data.success?this.user_data=e.data.data[0]:(this.$alert.toast("warning","Sorry, user is not found."),this.$router.push({path:"/admin/user"}))}).catch(e=>{console.log(e)})},getModuleData(e,t){this.$axios.get(this.$api_url+"module/"+e+"/answer/user/"+t,{headers:{Authorization:"Bearer "+this.user.token}}).then(e=>{this.module_data=e.data,this.outline_length=this.module_data.outlines.length}).catch(e=>{console.log(e),this.$router.push({path:"/admin/user"}),this.$alert.toast("error","The module is not found")})},download(){window.open("https://api-cm.all-inedu.com/api/v1/module/"+this.$route.params.slug+"/answer/user/"+this.user_data.id+"/download/","_blank")}},created(){document.title="Module Answer",this.user=this.$auth.check(),this.$route.params.slug&&this.$route.params.id&&(this.getModuleData(this.$route.params.slug,this.$route.params.id),this.getUserData(this.$route.params.id)),setTimeout(()=>{this.show=!0},500)}},H=(a("7937"),a("6b0d")),I=a.n(H);const U=I()(F,[["render",A]]);t["default"]=U},ff54:function(e,t,a){"use strict";var c=a("7a23");const o={id:"sidebar",class:"sidebar"},l={class:"sidebar-ul"},n={class:"btn-sidebar"},s={class:"text-center"},r={class:"btn btn-light pb-2 pt-1"};function d(e,t,a,d,i,b){const m=Object(c["resolveComponent"])("vue-feather");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[t[9]||(t[9]=Object(c["createElementVNode"])("h3",{class:"text-center mb-4 my-2"},"Dashboard",-1)),Object(c["createElementVNode"])("ul",l,[Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","dashboard"==a.menu?"active":""]),onClick:t[0]||(t[0]=e=>b.linkTo("/admin/dashboard"))},[Object(c["createVNode"])(m,{type:"home",class:"me-2 float-end"}),t[3]||(t[3]=Object(c["createElementVNode"])("span",null," Dashboard ",-1))],2),t[6]||(t[6]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","module"==a.menu?"active":""]),onClick:t[1]||(t[1]=e=>b.linkTo("/admin/module"))},[Object(c["createVNode"])(m,{type:"book",class:"me-2 float-end"}),t[4]||(t[4]=Object(c["createElementVNode"])("span",null," Modules ",-1))],2),t[7]||(t[7]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["sidebar-li","user"==a.menu?"active":""]),onClick:t[2]||(t[2]=e=>b.linkTo("/admin/user"))},[Object(c["createVNode"])(m,{type:"list",class:"me-2 float-end"}),t[5]||(t[5]=Object(c["createElementVNode"])("span",null," User List ",-1))],2),t[8]||(t[8]=Object(c["createElementVNode"])("hr",{class:"m-0"},null,-1))]),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("button",r,[Object(c["createVNode"])(m,{type:"arrow-left",class:"mb-1 float-end pointer",onClick:a.display},null,8,["onClick"])])])])])}a("14d9");var i=a("4edd"),b={name:"AdminSidebar",props:{menu:String,submenu:String,display:Function},components:{VueFeather:i["a"]},methods:{linkTo(e){this.$router.push({path:e})}}},m=(a("54dd"),a("6b0d")),u=a.n(m);const j=u()(b,[["render",d],["__scopeId","data-v-787dad49"]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-2cf9a926.e25862b4.js.map