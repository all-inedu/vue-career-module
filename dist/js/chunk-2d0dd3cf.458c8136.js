(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd3cf"],{8111:function(e,t,o){"use strict";o.r(t);var r=o("7a23"),s={id:"reset"},a={class:"container mt-5"},n={class:"row justify-content-center"},c={class:"col-md-5 mt-5"},i={class:"card"},l=Object(r["createElementVNode"])("div",{class:"card-header text-center"},[Object(r["createElementVNode"])("h4",null,"Reset Password")],-1),d={class:"card-body"},p=Object(r["createTextVNode"])(" Please enter your new password "),m={class:"mb-2 mt-3"},b=Object(r["createElementVNode"])("label",{class:"login-label"}," E-mail",-1),u={class:"mb-2"},w=Object(r["createElementVNode"])("label",{class:"login-label"},"New Password",-1),j=["type"],O={key:0,class:"login-error"},f={class:"mb-2"},h=Object(r["createElementVNode"])("label",{class:"login-label"},"New Password Confirmation",-1),y=["type"],v={key:0,class:"login-error"},V=Object(r["createElementVNode"])("div",{class:"text-center my-3 mt-4"},[Object(r["createElementVNode"])("button",{class:"btn btn-allin",type:"submit"},"Reset")],-1);function k(e,t,o,k,N,E){var _=Object(r["resolveComponent"])("unicon");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(r["withModifiers"])((function(){return E.resetProcess&&E.resetProcess.apply(E,arguments)}),["prevent"]))},[Object(r["createElementVNode"])("div",i,[l,Object(r["createElementVNode"])("div",d,[p,Object(r["createElementVNode"])("div",m,[b,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return N.reset.email=e}),class:"form-control",readonly:""},null,512),[[r["vModelText"],N.reset.email]])]),Object(r["createElementVNode"])("div",u,[w,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:N.passwordType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return N.reset.password=e}),class:"form-control",placeholder:"Password"},null,8,j),[[r["vModelDynamic"],N.reset.password]]),Object(r["createElementVNode"])("div",{class:"login-icon pointer",onClick:t[2]||(t[2]=function(e){return E.visiblePassword("password")})},["password"==N.passwordType?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,name:"eye-slash",fill:"royalblue"})):Object(r["createCommentVNode"])("",!0),"text"==N.passwordType?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:1,name:"eye",fill:"royalblue"})):Object(r["createCommentVNode"])("",!0)]),N.error_reset.password?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",O,Object(r["toDisplayString"])(N.error_reset.password[0]),1)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",f,[h,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:N.password_confirmationType,"onUpdate:modelValue":t[3]||(t[3]=function(e){return N.reset.password_confirmation=e}),class:"form-control",placeholder:"Password Confirmation"},null,8,y),[[r["vModelDynamic"],N.reset.password_confirmation]]),Object(r["createElementVNode"])("div",{class:"login-icon pointer",onClick:t[4]||(t[4]=function(e){return E.visiblePassword("password_confirmation")})},["password"==N.password_confirmationType?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,name:"eye-slash",fill:"royalblue"})):Object(r["createCommentVNode"])("",!0),"text"==N.password_confirmationType?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:1,name:"eye",fill:"royalblue"})):Object(r["createCommentVNode"])("",!0)]),N.error_reset.password_confirmation?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",v,Object(r["toDisplayString"])(N.error_reset.password_confirmation[0]),1)):Object(r["createCommentVNode"])("",!0)]),V])])],32)])])])])}var N=o("3d20"),E=o.n(N),_={name:"Reset",data:function(){return{api_url:"https://api-cm.all-inedu.com/api/v1/",token:this.$route.params.token,passwordType:"password",password_confirmationType:"password",reset:{email:"",password:"",password_confirmation:""},error_reset:[]}},methods:{loading:function(){E.a.fire({title:"Please wait a minute"}),E.a.showLoading()},toast:function(e,t){var o=E.a.mixin({toast:!0,width:"32rem",position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",E.a.stopTimer),e.addEventListener("mouseleave",E.a.resumeTimer)}});o.fire({icon:e,title:t})},visiblePassword:function(e){"password"==e?"text"==this.passwordType?this.passwordType="password":this.passwordType="text":"text"==this.password_confirmationType?this.password_confirmationType="password":this.password_confirmationType="text"},resetProcess:function(){var e=this;this.loading(),this.$axios.post(this.$api_url+"password/reset/"+this.token,this.reset).then((function(){e.toast("success","Your password has been changed"),e.$router.push({path:"/"})})).catch((function(t){E.a.close(),e.error_reset=t.response.data.error}))}},created:function(){var e=this;this.$axios.get(this.$api_url+"reset/"+this.token).then((function(t){e.reset.email=t.data.data.email})).catch((function(){e.toast("warning","Token is invalid"),e.$router.push({path:"/"})}))}},T=o("6b0d"),g=o.n(T);const B=g()(_,[["render",k]]);t["default"]=B}}]);
//# sourceMappingURL=chunk-2d0dd3cf.458c8136.js.map