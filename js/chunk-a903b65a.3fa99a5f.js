(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a903b65a"],{"21bb":function(e,t,a){"use strict";var s=a("bcc9"),o=a.n(s);o.a},"8ee6":function(e,t,a){e.exports=a.p+"img/decore-left.2d9d23e0.png"},bb51:function(e,t,a){"use strict";a.r(t);var s,o,r,i,n,l,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard-analytics"}},[a("div",{staticClass:"vx-row"},[a("HelloUser"),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("TotalEmployees")],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("TotalCustomer")],1)],1),a("div",{staticClass:"vx-row"},[a("vs-col",{staticClass:"pr-0",attrs:{"vs-w":"6"}},[a("TotalStudents")],1),a("vs-col",{staticClass:"pr-0",attrs:{"vs-w":"6"}},[a("TotalCourses")],1)],1),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-2/3 mb-base"},[a("TotalRevenueExpenditure")],1),a("div",{staticClass:"vx-col w-full md:w-1/3 mb-base"},[a("vx-card",{attrs:{title:"Tổng thu chi"}},[a("template",{slot:"no-body"},[a("div",{staticClass:"mt-10"},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"240",options:e.analyticsData.goalOverviewRadialBar.chartOptions,series:e.analyticsData.goalOverviewRadialBar.series}})],1)]),a("div",{staticClass:"flex justify-between text-center",attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[a("div",{staticClass:"w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0"},[a("p",{staticClass:"mt-4"},[e._v("Thu")]),a("p",{staticClass:"mb-4 text-3xl font-semibold"},[e._v("786,617")])]),a("div",{staticClass:"w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0"},[a("p",{staticClass:"mt-4"},[e._v("Công nợ")]),a("p",{staticClass:"mb-4 text-3xl font-semibold"},[e._v("13,561")])])])],2)],1)]),a("div",{staticClass:"vx-row mt-5"},[a("TableEmployees")],1),a("div",{staticClass:"vx-row mt-5"},[a("TableStudents")],1),a("div",{staticClass:"vx-row mt-5"},[a("TableCustomer")],1)])},c=[],p=(a("7f7f"),a("1321")),h=a.n(p),u=a("43ca"),m={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]},b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[s("vx-card",{staticClass:"text-center bg-primary-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[s("img",{staticClass:"decore-left",attrs:{src:a("8ee6"),alt:"Decore Left",width:"200"}}),s("img",{staticClass:"decore-right",attrs:{src:a("ee15"),alt:"Decore Right",width:"175"}}),s("feather-icon",{staticClass:"p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",attrs:{icon:"AwardIcon",svgClasses:"h-8 w-8"}}),s("h1",{staticClass:"mb-6 text-white"},[e._v("Xin chào "+e._s(e.hello_user))]),s("p",{staticClass:"xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"},[e._v("You have done "),s("strong",[e._v("57.6%")]),e._v(" more sales today. Check your new badge in your profile.")])],1)],1)},g=[],y={computed:{hello_user:function(){return JSON.parse(localStorage.getItem("user")).name||"Guest"}}},v=y,f=a("2877"),w=Object(f["a"])(v,b,g,!1,null,null,null),x=w.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:"92.6k",statisticTitle:"Tổng nhân viên",chartData:e.analyticsData.subscribersGained,type:"area"}})],1)},k=[],T={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]},_={data:function(){return{analyticsData:T}},components:{VueApexCharts:h.a,StatisticsCardLine:u["a"]}},F=_,O=Object(f["a"])(F,C,k,!1,null,"d406137c",null),S=O.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Học viên"}},[a("template",{slot:"actions"},[a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("small",{staticClass:"flex cursor-pointer"},[e._v("Chọn biểu đồ "),a("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",{staticClass:"w-32"},[a("vs-dropdown-item",[e._v("Theo tuần")]),a("vs-dropdown-item",[e._v("Theo tháng")]),a("vs-dropdown-item",[e._v("Theo năm")])],1)],1)],1),a("div",{staticClass:"mt-5"},[a("chartjs-component-line-chart",{attrs:{height:250,data:e.month.data,options:e.month.options}})],1)],2)},A=[],D=a("1fca"),L={extends:D["b"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},R=L,B=Object(f["a"])(R,s,o,!1,null,null,null),M=B.exports,I={data:function(){return{month:{data:{labels:["tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9"],datasets:[{data:[86,114,106,106,107,111,133,221,783,2478],label:"Học viên mới",borderColor:"#1d21f0",fill:!1},{data:[282,350,411,502,635,809,947,1402,3700,5267],label:"Học viên đang học",borderColor:"#24c75e",fill:!1},{data:[168,170,178,190,203,276,408,547,675,734],label:"Học viên đã hoàn thành",borderColor:"#EA5455",fill:!1},{data:[40,20,10,16,24,38,74,167,508,784],label:"Đã hủy",borderColor:"#FF9F43",fill:!1}]},options:{title:{display:!0,text:"Tổng học viên : 5000"}}}}},components:{ChartjsComponentLineChart:M}},E=I,j=Object(f["a"])(E,z,A,!1,null,null,null),G=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Học viên","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-bar-chart",{attrs:{height:250,data:e.data,options:e.options}})],1)])},P=[],Y={extends:D["a"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},J=Y,$=Object(f["a"])(J,r,i,!1,null,null,null),H=$.exports,W={data:function(){return{data:{labels:["Đang chờ mở lớp","Đang học","Đã hoàn thành","Bị hủy"],datasets:[{label:"Học viên",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43"],data:[2478,5267,734,784]}]},options:{legend:{display:!1},title:{display:!0,text:"Tổng số học viên là 2050"}}}},components:{ChartjsComponentBarChart:H}},X=W,U=Object(f["a"])(X,N,P,!1,null,null,null),K=U.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Lớp học"}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-pie-chart",{attrs:{height:250,data:e.data,options:e.options}})],1)])},q=[],Q={extends:D["c"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},Z=Q,ee=Object(f["a"])(Z,n,l,!1,null,null,null),te=ee.exports,ae={data:function(){return{data:{labels:["Chờ mở","Đang mở","Đã hoàn thành","Hủy"],datasets:[{label:"Biểu đồ lớp học",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43"],data:[2478,5267,734,784]}]},options:{title:{display:!0,text:"Biểu đồ lớp học"}}}},components:{ChartjsComponentPieChart:te}},se=ae,oe=Object(f["a"])(se,V,q,!1,null,null,null),re=oe.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("statistics-card-line",{attrs:{icon:"UserPlusIcon",statistic:"92.6k",statisticTitle:"Tổng khách hàng",chartData:e.analyticsData.subscribersGained,type:"area"}})],1)},ne=[],le={data:function(){return{analyticsData:T}},components:{VueApexCharts:h.a,StatisticsCardLine:u["a"]}},de=le,ce=Object(f["a"])(de,ie,ne,!1,null,"17dcaeb2",null),pe=ce.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Nhân viên thêm mới"}},[a("vs-table",{staticClass:"my-5",attrs:{stripe:"",data:e.users},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,function(t,o){return a("vs-tr",{key:o},[a("vs-td",{attrs:{data:s[o].avatar}},[a("vs-avatar",{attrs:{size:"55px",src:s[o].avatar,alt:s[o].name}})],1),a("vs-td",{attrs:{data:s[o].email}},[e._v("\n                    "+e._s(s[o].email)+"\n                ")]),a("vs-td",{attrs:{data:s[o].username}},[e._v("\n                    "+e._s(s[o].name)+"\n                ")]),a("vs-td",{attrs:{data:s[o].id}},[e._v("\n                    "+e._s(s[o].birthday)+"\n                ")])],1)})}}])},[a("template",{staticStyle:{"padding-left":"10px"},slot:"thead"},[a("vs-th",[e._v("Avatar")]),a("vs-th",[e._v(" Email")]),a("vs-th",[e._v("Name")]),a("vs-th",[e._v("Ngày tạo")])],1)],2)],1)},ue=[],me={data:function(){return{users:[{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",birthday:"29/5/2019"}]}}},be=me,ge=Object(f["a"])(be,he,ue,!1,null,null,null),ye=ge.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Học viên thêm mới"}},[a("vs-table",{staticClass:"my-5",attrs:{stripe:"",data:e.users},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,function(t,o){return a("vs-tr",{key:o},[a("vs-td",{attrs:{data:s[o].avatar}},[a("vs-avatar",{attrs:{size:"55px",src:s[o].avatar,alt:s[o].name}})],1),a("vs-td",{attrs:{data:s[o].email}},[e._v("\n                    "+e._s(s[o].email)+"\n                ")]),a("vs-td",{attrs:{data:s[o].username}},[e._v("\n                    "+e._s(s[o].name)+"\n                ")]),a("vs-td",{attrs:{data:s[o].id}},[e._v("\n                    "+e._s(s[o].birthday)+"\n                ")])],1)})}}])},[a("template",{staticStyle:{"padding-left":"10px"},slot:"thead"},[a("vs-th",[e._v("Avatar")]),a("vs-th",[e._v(" Email")]),a("vs-th",[e._v("Name")]),a("vs-th",[e._v("Ngày tạo")])],1)],2)],1)},fe=[],we={data:function(){return{users:[{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",birthday:"29/5/2019"}]}}},xe=we,Ce=Object(f["a"])(xe,ve,fe,!1,null,null,null),ke=Ce.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Khách hàng thêm mới"}},[a("vs-table",{staticClass:"my-5",attrs:{stripe:"",data:e.users},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,function(t,o){return a("vs-tr",{key:o},[a("vs-td",{attrs:{data:s[o].avatar}},[a("vs-avatar",{attrs:{size:"55px",src:s[o].avatar,alt:s[o].name}})],1),a("vs-td",{attrs:{data:s[o].email}},[e._v("\n                    "+e._s(s[o].email)+"\n                ")]),a("vs-td",{attrs:{data:s[o].username}},[e._v("\n                    "+e._s(s[o].name)+"\n                ")]),a("vs-td",{attrs:{data:s[o].id}},[e._v("\n                    "+e._s(s[o].birthday)+"\n                ")])],1)})}}])},[a("template",{staticStyle:{"padding-left":"10px"},slot:"thead"},[a("vs-th",[e._v("Avatar")]),a("vs-th",[e._v(" Email")]),a("vs-th",[e._v("Name")]),a("vs-th",[e._v("Ngày tạo")])],1)],2)],1)},_e=[],Fe={data:function(){return{users:[{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",birthday:"29/5/2019"},{avatar:"http://apiedu.itsvnweb.com/images/default.png",name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",birthday:"29/5/2019"}]}}},Oe=Fe,Se=Object(f["a"])(Oe,Te,_e,!1,null,null,null),ze=Se.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vx-card",{attrs:{title:"Thu chi(tháng)"}},[a("template",{slot:"actions"},[a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("small",{staticClass:"flex cursor-pointer"},[e._v("Chọn biểu đồ "),a("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",{staticClass:"w-32"},[a("vs-dropdown-item",{on:{click:e.week}},[e._v("Theo tuần")]),a("vs-dropdown-item",{on:{click:e.month}},[e._v("Theo tháng")]),a("vs-dropdown-item",{on:{click:e.year}},[e._v("Theo năm")])],1)],1)],1),a("div",{staticClass:"p-6 pb-0",attrs:{slot:"no-body"},slot:"no-body"},[e.last_week?a("div",{staticClass:"flex"},[a("div",{staticClass:"mr-6"},[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Thu")]),a("p",{staticClass:"text-3xl text-success"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("86,589")])]),a("div",[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Chi")]),a("p",{staticClass:"text-3xl"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("73,683")])])]):e._e(),e.last_month?a("div",{staticClass:"flex"},[a("div",{staticClass:"mr-6"},[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Thu")]),a("p",{staticClass:"text-3xl text-success"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("10,589")])]),a("div",[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Chi")]),a("p",{staticClass:"text-3xl"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("3,683")])])]):e._e(),e.last_year?a("div",{staticClass:"flex"},[a("div",{staticClass:"mr-6"},[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Thu")]),a("p",{staticClass:"text-3xl text-success"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("186,589")])]),a("div",[a("p",{staticClass:"mb-1 font-semibold"},[e._v("Chi")]),a("p",{staticClass:"text-3xl"},[a("sup",{staticClass:"text-base mr-1"},[e._v("$")]),e._v("93,683")])])]):e._e(),e.last_month?a("div",[a("vue-apex-charts",{attrs:{type:"line",height:"266",options:e.analyticsData.revenueComparisonLine.chartOptions,series:e.analyticsData.revenueComparisonLine.series}})],1):e._e(),e.last_year?a("div",[a("vue-apex-charts",{attrs:{type:"line",height:"266",options:e.revenueComparisonLine.chartOptions,series:e.revenueComparisonLine.series}})],1):e._e(),e.last_week?a("div",[a("vue-apex-charts",{attrs:{type:"line",height:"266",options:e.analyticsData.revenueComparisonLine.chartOptions,series:e.analyticsData.revenueComparisonLine.series}})],1):e._e()])],2)],1)},De=[],Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("small",{staticClass:"flex cursor-pointer"},[e._v("Last week "),a("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",{staticClass:"w-32"},[a("vs-dropdown-item",{attrs:{value:"2"}},[e._v("Last Month")]),a("vs-dropdown-item",{attrs:{value:"3"}},[e._v("Last Year")])],1)],1)},Re=[],Be={},Me=Object(f["a"])(Be,Le,Re,!1,null,null,null),Ie=Me.exports,Ee={data:function(){return{last_week:!0,last_month:!1,last_year:!1,analyticsData:T,revenueComparisonLine:{series:[{name:"Theo năm",data:[55e3,4e4,3e4,20500,15500,48e3,46500,48600]},{name:"Theo năm",data:[16e3,18e3,25500,40600,14500,36500,15e3,17e3]},{name:"Theo năm",data:[1e4,8e3,2500,4600,1500,6500,1e3,7e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc","#F97794"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc","#F97794"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","02","03","04","05","06","07","08"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}}}},components:{VueApexCharts:h.a,StatisticsCardLine:u["a"],ChangeTimeDurationDropdown:Ie},methods:{week:function(){this.last_week=!0,this.last_month=!1,this.last_year=!1},month:function(){this.last_year=!1,this.last_month=!0,this.last_week=!1},year:function(){this.last_week=!1,this.last_month=!1,this.last_year=!0}}},je=Ee,Ge=Object(f["a"])(je,Ae,De,!1,null,"27523b08",null),Ne=Ge.exports,Pe={data:function(){return{analyticsData:m,isImp:!1,navbarSearchAndPinList:this.$store.state.navbarSearchAndPinList,show:!1,items:[1,2,3,4,5,6,7,8,9],nextNum:10,tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"]}},components:{analyticsData:m,VueApexCharts:h.a,StatisticsCardLine:u["a"],HelloUser:x,TotalEmployees:S,TotalStudents:G,TotalPrograms:K,TotalCourses:re,TotalCustomer:pe,TableEmployees:ye,TableStudents:ke,TableCustomer:ze,TotalRevenueExpenditure:Ne},computed:{user_displayName:function(){return JSON.parse(localStorage.getItem("user")).name||"Guest"}}},Ye=Pe,Je=(a("21bb"),Object(f["a"])(Ye,d,c,!1,null,null,null));t["default"]=Je.exports},bcc9:function(e,t,a){},ee15:function(e,t,a){e.exports=a.p+"img/decore-right.da0ab5cd.png"}}]);
//# sourceMappingURL=chunk-a903b65a.3fa99a5f.js.map