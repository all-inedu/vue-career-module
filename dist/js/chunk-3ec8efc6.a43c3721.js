(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ec8efc6"],{"288b":function(e,t,a){},"866c":function(e,t,a){"use strict";a("288b")},"92b8":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const o={id:"editProfile"},c={class:"container"},s={key:0,class:"row"},l={class:"col-md-3 mb-3"},d={class:"card shadow"},n={class:"card-body"},i=["src"],m={class:"col-md-9"},p={class:"card shadow"},b={class:"card-body"},u={class:"float-end",style:{"margin-top":"-30px"}},h={class:"dropstart"},j={class:"dropdown-menu","aria-labelledby":"setting"},O={class:"row"},V={class:"col-md-6 mb-3"},N={class:"col-md-6 mb-3"},f={class:"row"},w={class:"col-md-6 mb-3"},E={class:"col-md-6 mb-3"},v={key:0,class:"text-danger"},y={class:"row"},_={class:"col-md-12"},g={key:0,class:"text-danger"},x={class:"row"},k={class:"col-md-12"},C={class:"float-start"},B={key:0,class:"row justify-content-center"},T={class:"col-md-5"},D={class:"card shadow"},$={key:0,class:"card-body"},P={key:0,class:"text-danger"},M={key:1,class:"card-body"},S={class:"text-center"},U={class:"row justify-content-center"},I={class:"col-2"},z={class:"col-2"},Y={class:"col-2"},q={class:"col-2"},A={class:"text-center mt-3 mb-3"},F={key:0},R={key:1},J={key:0,class:"row justify-content-center"},L={class:"col-md-5"},W={class:"card shadow"},G={class:"card-body"},H={key:0,class:"text-danger"},K={class:"mb-2"},Q={key:0,class:"text-danger"},X={class:"mb-3"};function Z(e,t,a,Z,ee,te){const ae=Object(r["resolveComponent"])("vue-feather"),re=Object(r["resolveComponent"])("vue-custom-tooltip"),oe=Object(r["resolveComponent"])("datepicker"),ce=Object(r["resolveComponent"])("vue-tel-input"),se=Object(r["resolveComponent"])("editor");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])(()=>["edit"==ee.page?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("img",{src:ee.preview,alt:"User Name",class:"user-picture"},null,8,i),Object(r["createElementVNode"])("input",{type:"file",class:"form-control",ref:"picture",onChange:t[0]||(t[0]=(...e)=>te.previewImage&&te.previewImage(...e))},null,544)])])]),Object(r["createElementVNode"])("div",m,[Object(r["createElementVNode"])("div",p,[Object(r["createElementVNode"])("div",b,[t[32]||(t[32]=Object(r["createElementVNode"])("h5",{class:"my-0"},"Edit Profile",-1)),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(re,{label:"Setting"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",h,[Object(r["createVNode"])(ae,{type:"more-horizontal",id:"setting","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),Object(r["createElementVNode"])("ul",j,[Object(r["createElementVNode"])("li",{onClick:t[1]||(t[1]=e=>te.changeTo("email"))},t[23]||(t[23]=[Object(r["createElementVNode"])("a",{class:"dropdown-item",href:"#"},"Change Email",-1)])),Object(r["createElementVNode"])("li",{onClick:t[2]||(t[2]=e=>te.changeTo("password"))},t[24]||(t[24]=[Object(r["createElementVNode"])("a",{class:"dropdown-item",href:"#"},"Change Password",-1)]))])])]),_:1})]),t[33]||(t[33]=Object(r["createElementVNode"])("hr",{class:"mt-0"},null,-1)),Object(r["createElementVNode"])("form",{onSubmit:t[8]||(t[8]=Object(r["withModifiers"])((...e)=>te.updateProfile&&te.updateProfile(...e),["prevent"]))},[Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("div",V,[t[25]||(t[25]=Object(r["createElementVNode"])("small",{class:"text-muted"}," First Name ",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>ee.user_data.first_name=e)},null,512),[[r["vModelText"],ee.user_data.first_name]])]),Object(r["createElementVNode"])("div",N,[t[26]||(t[26]=Object(r["createElementVNode"])("small",{class:"text-muted"}," Last Name ",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>ee.user_data.last_name=e)},null,512),[[r["vModelText"],ee.user_data.last_name]])])]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",w,[t[27]||(t[27]=Object(r["createElementVNode"])("small",{class:"text-muted"}," Birthday ",-1)),Object(r["createVNode"])(oe,{modelValue:ee.user_data.birthday,"onUpdate:modelValue":t[5]||(t[5]=e=>ee.user_data.birthday=e),inputFormat:"dd MMMM yyyy",class:"bday",readonly:"false",style:{"--vdp-bg-color":"#fff","--vdp-hover-bg-color":"#363caa","--vdp-selected-bg-color":"#e59c3d","--vdp-divider-color":"#363caa"}},null,8,["modelValue"])]),Object(r["createElementVNode"])("div",E,[t[28]||(t[28]=Object(r["createElementVNode"])("small",{class:"text-muted"}," Phone Number ",-1)),Object(r["createVNode"])(ce,{value:ee.user_data.phone_number,onInput:te.onInput},null,8,["value","onInput"]),ee.error_form.phone_number?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",v,Object(r["toDisplayString"])(ee.error_form.phone_number[0]),1)):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("div",_,[t[29]||(t[29]=Object(r["createElementVNode"])("small",{class:"text-muted"}," Address ",-1)),Object(r["createVNode"])(se,{modelValue:ee.user_data.address,"onUpdate:modelValue":t[6]||(t[6]=e=>ee.user_data.address=e),"api-key":"h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m",init:{height:300,menubar:!0,inline:!1}},null,8,["modelValue"]),ee.error_form.address?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",g,Object(r["toDisplayString"])(ee.error_form.address[0]),1)):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",x,[Object(r["createElementVNode"])("div",k,[t[30]||(t[30]=Object(r["createElementVNode"])("hr",null,null,-1)),Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("button",{class:"btn btn-warning rounded-pill",type:"button",onClick:t[7]||(t[7]=(...e)=>te.cancelEdit&&te.cancelEdit(...e))}," Back to Dashboard ")]),t[31]||(t[31]=Object(r["createElementVNode"])("div",{class:"float-end"},[Object(r["createElementVNode"])("button",{class:"btn btn-primary rounded-pill",type:"submit"}," Save Changes ")],-1))])])],32)])])])])):Object(r["createCommentVNode"])("",!0)]),_:1}),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])(()=>["email"==ee.page?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",B,[Object(r["createElementVNode"])("div",T,[Object(r["createElementVNode"])("div",D,[ee.verification?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",$,[Object(r["createElementVNode"])("form",{onSubmit:t[10]||(t[10]=Object(r["withModifiers"])((...e)=>te.updateEmail&&te.updateEmail(...e),["prevent"]))},[t[34]||(t[34]=Object(r["createElementVNode"])("h5",{class:"text-center mb-4"},"Change Your Email",-1)),t[35]||(t[35]=Object(r["createElementVNode"])("small",{class:"text-muted"},"New Email",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"email","onUpdate:modelValue":t[9]||(t[9]=e=>ee.email.email=e),class:"form-control"},null,512),[[r["vModelText"],ee.email.email]]),ee.email.error.email?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",P,Object(r["toDisplayString"])(ee.email.error.email[0]),1)):Object(r["createCommentVNode"])("",!0),t[36]||(t[36]=Object(r["createElementVNode"])("hr",null,null,-1)),t[37]||(t[37]=Object(r["createElementVNode"])("div",{class:"text-center"},[Object(r["createElementVNode"])("button",{class:"btn btn-primary rounded-pill",type:"submit"}," Save Changes ")],-1))],32)])),ee.verification?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",M,[t[44]||(t[44]=Object(r["createElementVNode"])("h5",{class:"text-center mb-4"},"Verify Your Email",-1)),Object(r["createElementVNode"])("p",S,[Object(r["createTextVNode"])(" We emailed you the four digit code to "+Object(r["toDisplayString"])(ee.email.email)+". ",1),t[38]||(t[38]=Object(r["createElementVNode"])("br",null,null,-1)),t[39]||(t[39]=Object(r["createTextVNode"])(" Enter the code below to confirm your email address. "))]),Object(r["createElementVNode"])("div",U,[Object(r["createElementVNode"])("div",I,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control text-center",required:"",maxlength:"1","onUpdate:modelValue":t[11]||(t[11]=e=>ee.code[0]=e)},null,512),[[r["vModelText"],ee.code[0]]])]),Object(r["createElementVNode"])("div",z,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control text-center",required:"",maxlength:"1","onUpdate:modelValue":t[12]||(t[12]=e=>ee.code[1]=e)},null,512),[[r["vModelText"],ee.code[1]]])]),Object(r["createElementVNode"])("div",Y,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control text-center",required:"",maxlength:"1","onUpdate:modelValue":t[13]||(t[13]=e=>ee.code[2]=e)},null,512),[[r["vModelText"],ee.code[2]]])]),Object(r["createElementVNode"])("div",q,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control text-center",required:"",maxlength:"1","onUpdate:modelValue":t[14]||(t[14]=e=>ee.code[3]=e)},null,512),[[r["vModelText"],ee.code[3]]])]),Object(r["createElementVNode"])("div",A,[Object(r["createElementVNode"])("button",{class:"btn btn-primary rounded-pill",onClick:t[15]||(t[15]=(...e)=>te.verifyCode&&te.verifyCode(...e))}," Submit "),t[43]||(t[43]=Object(r["createElementVNode"])("hr",null,null,-1)),0==ee.resend?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",F,[Object(r["createTextVNode"])(" Please wait "+Object(r["toDisplayString"])(ee.timerCount)+" seconds ",1),t[40]||(t[40]=Object(r["createElementVNode"])("br",null,null,-1)),t[41]||(t[41]=Object(r["createTextVNode"])(" to resend the verification code "))])):Object(r["createCommentVNode"])("",!0),1==ee.resend?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",R,[t[42]||(t[42]=Object(r["createTextVNode"])(" Resend the verification code ")),Object(r["createElementVNode"])("a",{class:"pointer",onClick:t[16]||(t[16]=(...e)=>te.updateEmail&&te.updateEmail(...e))},"here")])):Object(r["createCommentVNode"])("",!0)])])])):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",{class:"mt-3 text-center",onClick:t[17]||(t[17]=e=>te.changeTo("edit"))},[Object(r["createVNode"])(ae,{type:"arrow-left"}),t[45]||(t[45]=Object(r["createTextVNode"])(" Back to Profile "))])])])):Object(r["createCommentVNode"])("",!0)]),_:1}),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])(()=>["password"==ee.page?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",J,[Object(r["createElementVNode"])("div",L,[Object(r["createElementVNode"])("div",W,[Object(r["createElementVNode"])("div",G,[Object(r["createElementVNode"])("form",{onSubmit:t[21]||(t[21]=Object(r["withModifiers"])((...e)=>te.updatePassword&&te.updatePassword(...e),["prevent"]))},[t[48]||(t[48]=Object(r["createElementVNode"])("h5",{class:"text-center mb-4"},"Change Your Password",-1)),t[49]||(t[49]=Object(r["createElementVNode"])("small",{class:"text-muted"},"Old Password",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",class:"form-control","onUpdate:modelValue":t[18]||(t[18]=e=>ee.password.old_password=e)},null,512),[[r["vModelText"],ee.password.old_password]]),ee.password.error.old_password?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",H,Object(r["toDisplayString"])(ee.password.error.old_password[0]),1)):Object(r["createCommentVNode"])("",!0),t[50]||(t[50]=Object(r["createElementVNode"])("hr",null,null,-1)),Object(r["createElementVNode"])("div",K,[t[46]||(t[46]=Object(r["createElementVNode"])("small",{class:"text-muted"},"New Password",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",class:"form-control","onUpdate:modelValue":t[19]||(t[19]=e=>ee.password.new_password=e)},null,512),[[r["vModelText"],ee.password.new_password]]),ee.password.error.password?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",Q,Object(r["toDisplayString"])(ee.password.error.password[0]),1)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",X,[t[47]||(t[47]=Object(r["createElementVNode"])("small",{class:"text-muted"},"Confirmation Password",-1)),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",class:"form-control","onUpdate:modelValue":t[20]||(t[20]=e=>ee.password.confirm_password=e)},null,512),[[r["vModelText"],ee.password.confirm_password]])]),t[51]||(t[51]=Object(r["createElementVNode"])("hr",null,null,-1)),t[52]||(t[52]=Object(r["createElementVNode"])("div",{class:"text-center"},[Object(r["createElementVNode"])("button",{class:"btn btn-primary rounded-pill"}," Save Changes ")],-1))],32)])]),Object(r["createElementVNode"])("div",{class:"mt-3 text-center",onClick:t[22]||(t[22]=e=>te.changeTo("edit"))},[Object(r["createVNode"])(ae,{type:"arrow-left"}),t[53]||(t[53]=Object(r["createTextVNode"])(" Back to Profile "))])])])):Object(r["createCommentVNode"])("",!0)]),_:1})])])}var ee=a("24e7"),te=a("4edd"),ae=a("c1df"),re=a.n(ae),oe={name:"edit profile",components:{datepicker:ee["a"],VueFeather:te["a"]},data(){return{user:[],user_data:[],page:"edit",verification:!1,resend:!1,timerCount:60,birthday:"",preview:"",password:{old_password:"",new_password:"",confirm_password:"",error:[]},email:{email:"",error:[]},code:[],error_form:[]}},methods:{previewImage(){var e=new FileReader;e.onload=e=>{this.preview=e.target.result},this.user_data.profile_picture=this.$refs["picture"].files[0],e.readAsDataURL(this.user_data.profile_picture)},cancelEdit(){this.$emit("edit-form",!1)},changeTo(e){this.page=e},countDownTimer(){this.timerCount>0?setTimeout(()=>{this.timerCount-=1,this.countDownTimer()},1e3):this.resend=!0},onInput(e,t){""!=e?null!==t&&void 0!==t&&t.formatted&&(this.user_data.phone_number=t.formatted):this.user_data.phone_number=""},getProfile(){this.$axios.get(this.$api_url+"profile",{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{this.user_data=e.data.data.user[0],this.user_data.birthday=new Date(this.user_data.birthday),this.checkImage()}).catch(e=>{console.log(e)})},checkImage(){this.user_data.profile_picture?this.preview=this.$base_url+this.user_data.profile_picture:this.preview="https://dummyimage.com/600x400/000/fff"},updateProfile(){this.$alert.loading();const e=new FormData;e.append("first_name",this.user_data.first_name),e.append("last_name",this.user_data.last_name),e.append("birthday",re()(this.user_data.birthday).format("YYYY-MM-DD")),e.append("phone_number",this.user_data.phone_number),e.append("address",this.user_data.address),e.append("profile_picture",this.user_data.profile_picture),this.$axios.post(this.$api_url+"profile",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{e.data.success?(this.user_data=e.data.data.user,this.user_data.birthday=new Date(this.user_data.birthday),this.$emit("check-data",this.user_data),this.checkImage(),this.$alert.toast("success","Your profile has been updated")):this.$alert.toast("error",e.data.error)}).catch(e=>{this.$alert.close(),this.error_form=e.response.data.error})},updateEmail(){this.$alert.loading();const e=new FormData;e.append("email",this.email.email),this.$axios.post(this.$api_url+"request/email-change",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{this.verification=!0,this.$alert.toast("success",e.data.message),this.timerCount=60,this.resend=!1,this.countDownTimer()}).catch(e=>{console.log(e.response),this.email.error=e.response.data.error})},verifyCode(){const e=this.code[0]+""+this.code[1]+this.code[2]+this.code[3];this.$axios.get(this.$api_url+"change/mail/"+e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{e.data.success?(this.page="edit",this.verification=!1,this.code=[],this.email.email="",this.$alert.toast("success",e.data.message)):(this.$alert.toast("error",e.data.error),this.code=[])}).catch(e=>{console.log(e.response),this.email.error=e.response.data.error})},updatePassword(){const e=new FormData;e.append("old_password",this.password.old_password),e.append("password",this.password.new_password),e.append("password_confirmation",this.password.confirm_password),this.$axios.post(this.$api_url+"change/password",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.user.token}}).then(e=>{this.page="edit",this.$alert.toast("success",e.data.message)}).catch(e=>{"object"==typeof e.response.data.error?this.password.error=e.response.data.error:this.$alert.toast("error",e.response.data.error)})}},created(){document.title="Edit Profile",this.user=this.$auth.user_data(),this.getProfile(),this.checkImage(),this.countDownTimer()}},ce=(a("866c"),a("6b0d")),se=a.n(ce);const le=se()(oe,[["render",Z]]);t["default"]=le}}]);
//# sourceMappingURL=chunk-3ec8efc6.a43c3721.js.map