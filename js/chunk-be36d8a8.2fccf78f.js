(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be36d8a8"],{"0005":function(t,s,e){"use strict";var a=e("6e43"),i=e.n(a);i.a},"6e43":function(t,s,e){},a7c3:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"profile-page"}},[t._v(t._s(t.DOCSO(299e4))+"\r\n\r\n    "),e("div",{staticClass:"cover-container rounded-t-lg img-profile-cus"},[e("img",{staticClass:"user-profile-img",attrs:{src:t.user.avatar,alt:"user-profile-cover"}})]),e("h2",{staticClass:"text-center m-5 d-flex"},[t._v(t._s(t.user.name))]),e("vx-card",{staticClass:"custom-card",attrs:{"code-toggler":""}},[e("div",{staticClass:"mt-5 custom-tab"},[e("vs-tabs",[e("vs-tab",{attrs:{label:"Thông tin nhân viên"}},[e("div",{staticClass:"tab-text"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col md:w-1/2 w-full mb-base"},[e("div",{staticClass:"vx-col mb-6"},[e("h2",[t._v("Thông tin nhân viên")])]),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Mã nhân viên",disabled:""},model:{value:t.user.code,callback:function(s){t.$set(t.user,"code",s)},expression:"user.code"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Tên nhân viên"},model:{value:t.user.name,callback:function(s){t.$set(t.user,"name",s)},expression:"user.name"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Địa chỉ"},model:{value:t.user.address,callback:function(s){t.$set(t.user,"address",s)},expression:"user.address"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Số điện thoại"},model:{value:t.user.phone,callback:function(s){t.$set(t.user,"phone",s)},expression:"user.phone"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Facebook"},model:{value:t.user.facebook,callback:function(s){t.$set(t.user,"facebook",s)},expression:"user.facebook"}})],1),e("div",{staticClass:"mt-5"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Ngày sinh")]),e("datepicker",{staticClass:"w-full picker-custom",attrs:{language:t.languages[t.language],format:"d MMMM yyyy",value:t.user.birthday},model:{value:t.formatDate,callback:function(s){t.formatDate=s},expression:"formatDate"}})],1),e("div",[e("div",{staticClass:"vs-component vs-con-input-label vs-input mt-5 w-full vs-input-primary"},[e("label",{staticClass:"vs-input--label",attrs:{for:""}},[t._v("Ảnh đại diện")]),e("div",{staticClass:"vs-con-input"},[e("input",{ref:"file",staticClass:"vs-inputx vs-input--input normal hasValue",attrs:{type:"file",accept:"image/*"},on:{change:t.changeAvatar}})])])])]),e("div",{staticClass:"vx-col md:w-1/2 w-full mb-base"},[e("div",{staticClass:"vx-col mb-6"},[e("h2",[t._v("Thông tin đăng nhập")])]),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Email"},model:{value:t.user.email,callback:function(s){t.$set(t.user,"email",s)},expression:"user.email"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Mật khẩu",type:"password"},model:{value:t.user.password,callback:function(s){t.$set(t.user,"password",s)},expression:"user.password"}})],1),e("div",[e("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Nhập lại khẩu",type:"password"},model:{value:t.user.password_confirmation,callback:function(s){t.$set(t.user,"password_confirmation",s)},expression:"user.password_confirmation"}})],1),e("div",{staticClass:"vx-col mb-6 mt-5"},[e("h2",[t._v("Thông tin học vấn")])]),e("vs-select",{staticClass:"mt-5 w-full",attrs:{label:"Trình độ học vấn"},model:{value:t.user.level,callback:function(s){t.$set(t.user,"level",s)},expression:"user.level"}},t._l(t.levels,function(t,s){return e("vs-select-item",{key:s,attrs:{value:t.value,text:t.text}})}),1),e("vs-select",{staticClass:"mt-5 w-full",attrs:{label:"Chức vụ"},model:{value:t.user.position,callback:function(s){t.$set(t.user,"position",s)},expression:"user.position"}},t._l(t.positions,function(t,s){return e("vs-select-item",{key:s,attrs:{value:t.value,text:t.text}})}),1),e("vs-select",{staticClass:"mt-5 w-full",attrs:{label:"Nghiệp vụ"},model:{value:t.user.major,callback:function(s){t.$set(t.user,"major",s)},expression:"user.major"}},t._l(t.majors,function(t,s){return e("vs-select-item",{key:s,attrs:{value:t.value,text:t.text}})}),1),e("div",[e("div",{staticClass:"note mt-5"},[e("label",{staticClass:"vs-input--label"},[t._v("Ghi chú")])]),e("vs-textarea",{staticClass:"w-full",staticStyle:{border:"solid 1px #dddddd"},attrs:{name:"note",type:"text",rows:5},model:{value:t.user.note,callback:function(s){t.$set(t.user,"note",s)},expression:"user.note"}})],1)],1)]),e("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-between"}},[e("vs-col",{attrs:{"vs-offset":"10","vs-w":"2"}},[e("button",{ref:"addButton",staticClass:"vs-component vs-button vs-button-primary vs-button-filled",attrs:{id:"update-loading"},on:{click:function(s){return t.updateUser(t.user)}}},[t._v("Cập nhật")])])],1)],1)]),e("vs-tab",{attrs:{label:"Lịch sử"}},[e("div",{staticClass:"tab-text"},[t._v("\r\n                        ...\r\n                    ")])]),e("vs-tab",{attrs:{label:"Lớp đang tham gia"}},[e("div",{staticClass:"tab-text"},[e("div",{},[t._v("\r\n                            ...\r\n                        ")])])])],1)],1)])],1)},i=[],l=(e("ac6a"),e("456d"),e("fa33")),n=e("ee9b"),r=(e("fda2"),{components:{Datepicker:l["a"]},data:function(){return{language:"vi",languages:n,isNavOpen:!0,wasSidebarOpen:null,levels:this.$store.state.model.employees.levels,positions:this.$store.state.model.employees.positions,majors:this.$store.state.model.employees.majors,user:{birthday:"",facebook:"",address:"",phone:"",name:"",email:"",password:"",password_confirmation:null,code:"",avatar:"",note:"",level:0,position:0,major:0}}},created:function(){this.userInfo()},computed:{formatDate:{get:function(){return this.user.birthday},set:function(t){this.user.birthday=this.formatDateUTC(t)}}},filters:{trim:function(t){return t.trim()}},methods:{changeAvatar:function(){this.user.avatar=this.$refs.file.files[0]},userInfo:function(){var t=this,s=this;this.$http.get("users/"+this.$route.params.employee).then(function(t){s.user=t.data.data}).catch(function(){t.$router.push("/pages/error-404"),t.$vs.notify({title:"Error!",text:"Có lỗi xảy ra",iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})})},formData:function(){var t=this,s=new FormData;return Object.keys(this.user).map(function(e){"metadata"!=e&&s.append(e,t.user[e])}),"string"===typeof this.user.avatar&&s.append("avatar",""),s.append("_method","PUT"),s},updateUser:function(t){var s=this;this.$vs.loading({background:"primary",color:"#fff",container:"#update-loading",scale:.45}),this.$http.post("users/"+t.id,this.formData(),{headers:{"Content-Type":"multipart/form-data"}}).then(function(){s.$vs.notify({title:"Đã sửa thành công",text:"OK",iconPack:"feather",icon:"fa fa-lg fa-check-circle",color:"success"})}).catch(function(t){if(500===t.response.status&&t.response.data.error.hasOwnProperty("validation")){var e=t.response.data.error.validation[Object.keys(t.response.data.error.validation)[0]][0];s.$vs.notify({title:"Validation error!",text:e,iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}else s.$vs.notify({title:"Error!",text:"Sửa thất bại",iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}).finally(function(){s.$vs.loading.close("#update-loading > .con-vs-loading")})},mounted:function(){this.wasSidebarOpen=this.$store.state.reduceButton,this.$store.commit("TOGGLE_REDUCE_BUTTON",!1)},beforeDestroy:function(){this.wasSidebarOpen||this.$store.commit("TOGGLE_REDUCE_BUTTON",!1)}}}),o=r,c=(e("0005"),e("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-be36d8a8.2fccf78f.js.map