(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04cfda0b"],{"002a":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),c={id:"answer"},o={key:0,class:"container mt-5"},r={class:"row justify-content-center"},l={class:"col-md-4 text-center"},s={key:0,class:"container mt-4 answer"},d={class:"row mx-2"},b={class:"card shadow"},i={class:"card-body"},m={class:"mb-3"},u=Object(n["createElementVNode"])("br",null,null,-1),O=Object(n["createElementVNode"])("div",{class:"mb-3"},null,-1),j={class:"table-responsive"},p={class:"table table-bordered align-middle"},h=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",{class:"text-center"},[Object(n["createElementVNode"])("th",{class:"border-end",width:"1%"},"No"),Object(n["createElementVNode"])("th",{width:"30%"},"Part Name"),Object(n["createElementVNode"])("th",null,"Question / Answer")])],-1),v={key:0},N=Object(n["createElementVNode"])("tr",{class:"text-center"},[Object(n["createElementVNode"])("td",{colspan:"3",class:"py-4"}," This module has no questions ")],-1),E=[N],V={class:"text-center bg-secondary text-white"},f={colspan:"3"},g={class:"border"},k={class:"border"},w={class:"border"},y={class:"table-responsive"},B={class:"table border mb-0"},_=Object(n["createElementVNode"])("tr",{class:"bg-light"},[Object(n["createElementVNode"])("th",{class:"border py-2"},"Question"),Object(n["createElementVNode"])("th",{class:"border",width:"40%"},"Answer")],-1),C=["innerHTML"],x={class:"border"},D={key:0},S={key:1},T={key:2},$=["href"],L={key:0,class:"mt-4"};function A(e,t,a,N,A,F){var M=Object(n["resolveComponent"])("v-navbar"),I=Object(n["resolveComponent"])("vue-feather"),z=Object(n["resolveComponent"])("v-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(M),A.show?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(I,{type:"loader",animation:"spin",size:"50"})])])])),Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[A.show?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("h5",m,[Object(n["createVNode"])(I,{type:"arrow-left",class:"me-3 pointer",onClick:F.backToDashboard},null,8,["onClick"]),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(A.module_data.module_name),1)]),Object(n["createElementVNode"])("button",{class:"btn-warning float-end btn-sm rounded-pill",onClick:t[0]||(t[0]=function(){return F.download&&F.download.apply(F,arguments)})}," Download "),u,O,Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("table",p,[h,0==A.outline_length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",v,E)):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(A.module_data.outlines,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",{key:t},[Object(n["createElementVNode"])("tr",V,[Object(n["createElementVNode"])("td",f,[Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(t.name),1)])]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.parts,(function(t,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{class:"text-center",key:a},[Object(n["createElementVNode"])("td",g,Object(n["toDisplayString"])(a+1),1),Object(n["createElementVNode"])("td",k,Object(n["toDisplayString"])(t.title),1),Object(n["createElementVNode"])("td",w,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("table",B,[_,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.elements,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{class:"border-1",key:t},[Object(n["createElementVNode"])("td",{class:"border text-start",innerHTML:t.question},null,8,C),Object(n["createElementVNode"])("td",x,["blank"==t.category_element?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",D,Object(n["toDisplayString"])(t.answersdetails[0].answer),1)):Object(n["createCommentVNode"])("",!0),"multiple"==t.category_element?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",S,Object(n["toDisplayString"])(t.answersdetails[0].answer_from_multiple),1)):Object(n["createCommentVNode"])("",!0),"file"==t.category_element?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",T,[Object(n["createElementVNode"])("a",{href:e.$base_url+t.answersdetails[0].file_path,class:"btn btn-primary btn-sm rounded-pill",download:""}," Your Worksheet ",8,$)])):Object(n["createCommentVNode"])("",!0)])])})),128))])])])])})),128))])})),128))])])])])])])):Object(n["createCommentVNode"])("",!0)]})),_:1}),Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[A.show?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",L,[Object(n["createVNode"])(z)])):Object(n["createCommentVNode"])("",!0)]})),_:1})])}var F=a("2f6c"),M=a("7f21"),I=a("4edd"),z={name:"answer",components:{"v-navbar":F["a"],"v-footer":M["a"],VueFeather:I["a"]},data:function(){return{user:[],show:!1,module_data:[],outline_length:""}},methods:{backToDashboard:function(){this.$router.push({path:"/user/dashboard"})},getModuleData:function(e){var t=this;this.$axios.get(this.$api_url+"act/view/answer/"+e,{headers:{Authorization:"Bearer "+this.user.token}}).then((function(e){t.module_data=e.data,t.outline_length=t.module_data.outlines.length})).catch((function(e){console.log(e)}))},download:function(){window.open("https://api-cm.all-inedu.com/api/v1/module/"+this.$route.params.slug+"/answer/user/"+this.user.id+"/download/","_blank")}},created:function(){var e=this;document.title="Module Answer",this.user=this.$auth.check(),this.$route.params.slug&&this.getModuleData(this.$route.params.slug),setTimeout((function(){e.show=!0}),500)}},H=(a("4f72"),a("6b0d")),R=a.n(H);const q=R()(z,[["render",A]]);t["default"]=q},"2f6c":function(e,t,a){"use strict";var n=a("7a23"),c=a("3d02"),o=a.n(c),r={id:"navbar"},l={class:"navbar navbar-expand-lg navbar-allin shadow navbar-light"},s={class:"container"},d=Object(n["createElementVNode"])("img",{src:o.a,class:"navbar-brand",alt:"Career Exploration Module"},null,-1),b=Object(n["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m=Object(n["createElementVNode"])("div",{class:"navbar-nav me-auto mb-2 mb-lg-0"},null,-1),u={class:"d-flex"},O={class:"navbar-nav me-auto mb-2 mb-lg-0"},j={class:"nav-item"},p=Object(n["createTextVNode"])("Home"),h={class:"nav-item"},v={class:"nav-link",href:"/file/CAREER_EXPLORATION_GUIDELINES.pdf",download:"",target:"_blank"},N=Object(n["createTextVNode"])(" Guidebook"),E={class:"nav-item dropdown"},V={class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},f={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function g(e,t,a,c,o,g){var k=Object(n["resolveComponent"])("router-link"),w=Object(n["resolveComponent"])("vue-feather");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("nav",l,[Object(n["createElementVNode"])("div",s,[d,b,Object(n["createElementVNode"])("div",i,[m,Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("ul",O,[Object(n["createElementVNode"])("li",j,[Object(n["createVNode"])(k,{class:"nav-link",to:"/"},{default:Object(n["withCtx"])((function(){return[p]})),_:1})]),Object(n["createElementVNode"])("li",h,[Object(n["createElementVNode"])("a",v,[Object(n["createVNode"])(w,{type:"download",size:"20",class:"float-right"}),N])]),Object(n["createElementVNode"])("li",E,[Object(n["createElementVNode"])("a",V,[Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(o.user.first_name),1)]),Object(n["createElementVNode"])("ul",f,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{class:"dropdown-item",onClick:t[0]||(t[0]=function(){return g.logout&&g.logout.apply(g,arguments)})},"Logout")])])])])])])])])])}var k=a("4edd"),w={name:"Navbar",components:{VueFeather:k["a"]},data:function(){return{user:[]}},methods:{logout:function(){localStorage.removeItem("user"),this.$router.push({path:"/"})}},created:function(){this.user=this.$auth.user_data()}},y=(a("deae"),a("6b0d")),B=a.n(y);const _=B()(w,[["render",g]]);t["a"]=_},4758:function(e,t,a){},"4f72":function(e,t,a){"use strict";a("4758")},5255:function(e,t,a){},b0c0:function(e,t,a){var n=a("83ab"),c=a("5e77").EXISTS,o=a("e330"),r=a("9bf2").f,l=Function.prototype,s=o(l.toString),d=/^\s*function ([^ (]*)/,b=o(d.exec),i="name";n&&!c&&r(l,i,{configurable:!0,get:function(){try{return b(d,s(this))[1]}catch(e){return""}}})},deae:function(e,t,a){"use strict";a("5255")}}]);
//# sourceMappingURL=chunk-04cfda0b.cefbceab.js.map