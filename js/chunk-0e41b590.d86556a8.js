(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e41b590"],{"1d83":function(t,e,a){},"4eb3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list-container",attrs:{id:"data-list-list-view"}},[a("add-new-data-sidebar",{attrs:{isSidebarActive:t.addNewDataSidebar,callback:t.getData},on:{closeSidebar:function(e){t.addNewDataSidebar=!1}}}),a("edit-teacher-course",{attrs:{isSidebarEditActive:t.editTeacherCourse,teacherGetInfo:t.teacherGetInfo,getData:t.getData},on:{closeSidebar:function(e){t.editTeacherCourse=!1}}}),a("vs-table-custom",{ref:"table",attrs:{sst:!0,multiple:"",data:t.users,search:"",id:"table",maxItems:"10"},on:{search:t.handleSearch,sort:t.handleSort},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,function(e,s){return a("vs-tr",{key:s,staticClass:"col",attrs:{data:e}},[t.views.name.viewable?a("vs-td",[a("p",{staticClass:"product-name font-medium"},[t._v(t._s(e.user.name))])]):t._e(),t.views.updated_at.viewable?a("vs-td",[a("p",{staticClass:"product-category"},[t._v(t._s(e.updated_at))])]):t._e(),t.views.created_at.viewable?a("vs-td",[a("p",{staticClass:"product-category"},[t._v(t._s(e.created_at))])]):t._e(),t.views.action.viewable?a("vs-td",{staticClass:"d-flex-span"},[a("router-link",{staticClass:"vs-component vs-button vs-button-primary vs-button-filled includeIcon includeIconOnly small",attrs:{tag:"button",to:"/employees/"+e.user.id}},[a("i",{staticClass:"feather icon-eye"})]),a("vs-button",{staticClass:"vs-component vs-button vs-button-primary vs-button-filled includeIcon includeIconOnly small",attrs:{color:"primary",size:"small"},on:{click:function(a){return t.editTeacher(e)}}},[a("i",{staticClass:"feather icon-edit"})]),a("vs-button",{attrs:{color:"danger",size:"small",icon:"delete_forever"},on:{click:function(a){return t.deleteTeacher(e)}}})],1):t._e()],1)})}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[a("vs-dropdown",{staticClass:"cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32"},[a("span",{staticClass:"mr-2"},[t._v("Actions")]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",[a("span",[t._v("Delete")])]),a("vs-dropdown-item",[a("span",[t._v("Archive")])]),a("vs-dropdown-item",[a("span",[t._v("Print")])]),a("vs-dropdown-item",[a("span",[t._v("Another Action")])])],1)],1),a("vs-dropdown",{staticClass:"cursor-pointer mr-4 mb-4"},[a("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32"},[a("span",{staticClass:"mr-2"},[t._v("Views")]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("div",{staticClass:"col p-2"},t._l(t.views,function(e,s){return a("div",{key:s,staticClass:"p-1"},[a("vs-checkbox",{attrs:{value:e.viewable},on:{change:function(e){return t.updateViews(s,e)}}},[t._v(t._s(e.text))])],1)}),0)])],1),a("div",{staticClass:"p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:function(e){t.addNewDataSidebar=!0}}},[a("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2 text-base text-primary"},[t._v("Thêm giáo viên vào lớp")])],1)],1)]),a("template",{slot:"thead"},t._l(t.views,function(e,s){return e.viewable?a("vs-th",{key:s,attrs:{"sort-key":e.sortKey}},[t._v(t._s(e.text))]):t._e()}),1)],2),a("div",{staticClass:"con-vs-pagination vs-pagination-primary"},[a("nav",{staticClass:"vs-pagination--nav"},[a("paginate",{ref:"paginate",attrs:{"page-count":t.pagination.totalPages,"page-range":3,"margin-pages":2,"active-class":"is-current","container-class":"vs-pagination--ul","page-class":"item-pagination vs-pagination--li","prev-text":t.prev,"next-text":t.next,"click-handler":t.getData,value:t.pagination.currentPage}})],1)])],1)},i=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v("Thêm Giáo viên")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[a("div",{staticClass:"p-6"},[a("form",[a("div",[a("div",[a("div",{staticClass:"vs-component vs-con-input-label vs-input mt-5 w-full vs-input-primary"},[a("label",{staticClass:"vs-input--label"},[t._v("Giáo viên")]),a("vue-simple-suggest",{ref:"suggestComponentTeacher",attrs:{mode:"select",placeholder:"Search information...","value-attribute":"id","display-attribute":"name",list:t.getTeachers,debounce:200,"filter-by-query":!1},on:{select:t.onSuggestSelectTeacher},scopedSlots:t._u([{key:"misc-item-above",fn:function(e){var s=e.suggestions,i=e.query;return[a("div",{staticClass:"misc-item"},[a("span",[t._v("You're searching for '"+t._s(i)+"'.")])]),s.length>0?[a("div",{staticClass:"misc-item"},[a("span",[t._v(t._s(s.length)+" suggestions are shown...")])]),a("hr")]:t.loading?t._e():a("div",{staticClass:"misc-item"},[a("span",[t._v("No results")])])]}},{key:"suggestion-item",fn:function(e){var s=e.suggestion;e.query;return a("div",{},[a("div",{staticClass:"text"},[a("span",[t._v(t._s(s.code)+" - "+t._s(t._f("truncate")(s.name,30)))])])])}},{key:"misc-item-below",fn:function(e){e.suggestions;return t.loading?a("div",{staticClass:"misc-item"},[a("span",[t._v("Loading...")])]):t._e()}}],null,!0),model:{value:t.selectedTeacher,callback:function(e){t.selectedTeacher=e},expression:"selectedTeacher"}},[a("div",{staticClass:"g"},[a("input",{attrs:{type:"text",placeholder:"Search information..."}})])])],1)]),a("vs-select",{staticClass:"mt-5 w-full",attrs:{label:"Vai trò "},model:{value:t.teacher.role,callback:function(e){t.$set(t.teacher,"role",e)},expression:"teacher.role"}},t._l(t.role,function(t){return a("vs-select-item",{key:t.value,attrs:{value:t.value,text:t.text}})}),1),a("div",[a("div",{staticClass:"note mt-5"},[a("label",{staticClass:"vs-input--label"},[t._v("Note")])]),a("vs-textarea",{staticClass:"w-full",staticStyle:{border:"solid 1px #dddddd"},attrs:{name:"note",type:"text",rows:5},model:{value:t.teacher.note,callback:function(e){t.$set(t.teacher,"note",e)},expression:"teacher.note"}})],1)],1)])])]),a("div",{staticClass:"flex flex-wrap items-center justify-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{ref:"addButton",staticClass:"mr-6 vs-con-loading__container",attrs:{disabled:t.errors.any(),id:"button-with-loading"},on:{click:t.addTeacher}},[t._v("Thêm")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("Trở lại")])],1)],1)},o=[],c=a("9d63"),l=a.n(c),d={props:{isSidebarActive:{type:Boolean,required:!0},callback:{type:Function,required:!0}},data:function(){return{loading:!1,selectedTeacher:null,teacher:{user_id:null,role:1,note:""},teachers:[],role:this.$store.state.model.teachers.role,disabled:!0,settings:{maxScrollbarLength:60,wheelSpeed:.6}}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||(this.$emit("closeSidebar"),this.initValues())}}},components:{VuePerfectScrollbar:l.a},methods:{onSuggestSelectTeacher:function(t){t&&(this.teacher.user_id=t.id)},getTeachers:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=this;return new Promise(function(s,i){t.$http.get("courses/".concat(t.$route.params.course,"/users"),{params:{search:e}}).then(function(t){s(t.data.data)}).catch(function(t){a.loading=!1,i(t)})})},initValues:function(){this.teacher={user_id:null,role:1,note:""},this.selectedTeacher=null},addTeacher:function(){var t=this;this.$vs.loading({background:"primary",color:"#fff",container:"#button-with-loading",scale:.45}),this.$http.post("courses/"+this.$route.params.course+"/teachers",{user_id:this.teacher.user_id,role:this.teacher.role,note:this.teacher.note}).then(function(){t.$vs.notify({title:"Đã thêm mới thành công",text:"OK",iconPack:"feather",icon:"fa fa-lg fa-check-circle",color:"success"}),t.callback(),t.initValues(),t.isSidebarActiveLocal=!1}).catch(function(e){if(500===e.response.status&&e.response.data.error.hasOwnProperty("validation")){var a=e.response.data.error.validation[Object.keys(e.response.data.error.validation)[0]][0];t.$vs.notify({title:"Validation error!",text:a,iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}else t.$vs.notify({title:"Error!",text:"Thêm mới thất bại",iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}).finally(function(){t.$vs.loading.close("#button-with-loading > .con-vs-loading")})}},mounted:function(){this.getTeachers()}},u=d,h=(a("6874"),a("2877")),v=Object(h["a"])(u,n,o,!1,null,"f0b443ec",null),f=v.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v("Chỉnh sửa thông tin giảng viên")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[a("div",{staticClass:"p-6"},[a("form",[a("div",[a("h4",{staticClass:"text-center uppercase"},[t._v("Thông tin giảng viên")]),a("div",[a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Giáo viên",value:t.teacherGetInfo.user.name,disabled:""}})],1),a("vs-select",{staticClass:"mt-5 w-full",attrs:{label:"Vai trò"},model:{value:t.teacherGetInfo.role,callback:function(e){t.$set(t.teacherGetInfo,"role",e)},expression:"teacherGetInfo.role"}},t._l(t.role,function(t){return a("vs-select-item",{key:t.value,attrs:{value:t.value,text:t.text}})}),1),a("div",[a("div",{staticClass:"note mt-5"},[a("label",{staticClass:"vs-input--label"},[t._v("Note")])]),a("vs-textarea",{staticClass:"w-full",staticStyle:{border:"solid 1px #dddddd"},attrs:{name:"note",type:"text",rows:5},model:{value:t.teacherGetInfo.note,callback:function(e){t.$set(t.teacherGetInfo,"note",e)},expression:"teacherGetInfo.note"}})],1)],1)])])]),a("div",{staticClass:"flex flex-wrap items-center justify-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{staticClass:"mr-6 vs-con-loading__container",attrs:{disabled:t.errors.any(),id:"button-with-loading"},on:{click:function(e){return t.updateTeacher(t.teacherGetInfo)}}},[t._v("Chỉnh sửa")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("Hủy")])],1)],1)},g=[],m={props:{isSidebarEditActive:{type:Boolean,required:!0},getData:{type:Function,required:!0},teacherGetInfo:{required:!1}},methods:{getTeachers:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=this;return new Promise(function(s,i){t.$http.get("courses/".concat(t.$route.params.course,"/users"),{params:{search:e}}).then(function(t){s(t.data.data)}).catch(function(t){a.loading=!1,i(t)})})},updateTeacher:function(t){var e=this;this.$vs.loading({background:"primary",color:"#fff",container:"#button-with-loading",scale:.45}),this.$http.put("courses/"+this.$route.params.course+"/teachers/"+t.id,{user_id:t.user_id,role:t.role,note:t.note},{}).then(function(){e.isSidebarActiveLocal=!1,e.getData(),e.$vs.notify({title:"Đã sửa thành công",text:"OK",iconPack:"feather",icon:"fa fa-lg fa-check-circle",color:"success"})}).catch(function(t){if(t.response.data.error.hasOwnProperty("validation")){var a=t.response.data.error.validation[Object.keys(t.response.data.error.validation)[0]][0];e.$vs.notify({title:"Validation error!",text:a,iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}else e.$vs.notify({title:"Error!",text:"Sửa thất bại",iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})}).finally(function(){e.$vs.loading.close("#button-with-loading > .con-vs-loading")})}},mounted:function(){this.getTeachers()},data:function(){return{disabled:!0,settings:{maxScrollbarLength:60,wheelSpeed:.6},role:this.$store.state.model.teachers.role}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarEditActive},set:function(t){t||this.$emit("closeSidebar")}}},components:{VuePerfectScrollbar:l.a}},b=m,y=(a("b08c"),Object(h["a"])(b,p,g,!1,null,"2780bb83",null)),w=y.exports,x=a("2f62");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var k={components:{EditTeacherCourse:w,AddNewDataSidebar:f},data:function(){return{timer:null,selected:[],isMounted:!1,addNewDataSidebar:!1,editTeacherCourse:!1,teacherGetInfo:{user:{name:""}},prev:'<button class="vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev"><i class="vs-icon notranslate icon-scale material-icons null">chevron_left</i></button>',next:'<button class="vs-pagination--buttons btn-prev-pagination vs-pagination--button-next"><i class="vs-icon notranslate icon-scale material-icons null">chevron_right</i></button>'}},computed:C({},Object(x["b"])("teachers",["users","pagination","searchTerm","order","views","needReload"])),created:function(){this.getData()},methods:{editTeacher:function(t){this.editTeacherCourse=!0;var e=this;this.$http.get("courses/"+this.$route.params.course+"/teachers/"+t.id).then(function(t){t.data.data.id&&(e.teacherGetInfo=t.data.data)})},deleteTeacher:function(t){this.$vs.dialog({type:"confirm",color:"danger",title:"Xóa Giảng viên",text:"Bạn có chắc muốn xóa "+t.user.name,accept:this.teacherAlert,parameters:[t.id]})},teacherAlert:function(t){var e=this;this.$http.delete("courses/"+this.$route.params.course+"/teachers/"+t).then(function(){e.$vs.notify({color:"success",title:"Xóa nhân viên",text:"Bạn đã xóa thành công",icon:"verified_user"}),e.getData()}).catch(function(){e.$vs.notify({title:"Error!",text:"Bạn không xóa thành công",iconPack:"feather",icon:"fa fa-lg fa-exclamation-triangle",color:"danger"})})},updateViews:function(t,e){this.$store.dispatch("teachers/updateViews",{index:t,viewable:e.target.checked})},formatData:function(t){return t},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.$vs.loading({color:"#7367F0",text:"Loading..."}),this.$http.get("courses/"+this.$route.params.course+"/teachers",{params:{page:t,search:this.searchTerm,orderBy:this.order.orderBy,sortedBy:this.order.orderType}}).then(function(t){e.$store.dispatch("teachers/updateTable",{users:e.formatData(t.data.data),pagination:t.data.pagination})}).catch(function(t){e.$vs.notify({title:"Error",text:t,color:"danger",iconPack:"feather",icon:"icon-alert-circle"})}).finally(function(){e.$vs.loading.close()})},handleSearch:function(t){if(!this.needReload)return this.$store.dispatch("teachers/updateNeedReload",!0),!1;var e=this;this.$store.dispatch("teachers/updateSearch",{searchTerm:t}),clearTimeout(this.timer),this.timer=setTimeout(function(){e.getData()},500)},handleSort:function(t,e){this.$store.dispatch("teachers/updateOrder",{order:{orderBy:t,orderType:e?"desc":"asc"}}),this.getData(this.pagination.currentPage)}},mounted:function(){this.$refs.table.searchx=this.searchTerm,this.isMounted=!0,0===this.users.length&&this.getData()},destroyed:function(){this.$store.dispatch("teachers/updateNeedReload",!1)}},S=k,$=(a("ef8d"),Object(h["a"])(S,s,i,!1,null,null,null));e["default"]=$.exports},"532d":function(t,e,a){},6874:function(t,e,a){"use strict";var s=a("8ed5"),i=a.n(s);i.a},"8ed5":function(t,e,a){},b08c:function(t,e,a){"use strict";var s=a("1d83"),i=a.n(s);i.a},ef8d:function(t,e,a){"use strict";var s=a("532d"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-0e41b590.d86556a8.js.map