(function(){"use strict";var t={33:function(t,e,a){var s=a(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav"),e("router-view")],1)},i=[],o=a(1),n={},l=(0,o.Z)(n,r,i,!1,null,null,null),c=l.exports,u=a(345),d=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("div",{staticClass:"home"},[e("div",{staticClass:"cards"},[e("div",{staticClass:"card card-aqi",on:{click:t.goToAQI}},[e("h2",[t._v("Air Quality Index")])]),e("div",{staticClass:"card card-heat-wave",on:{click:t.goToHeatWave}},[e("h2",[t._v("Heat Wave")])])])])],1)},v=[],h=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"nav"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"/faq"}},[t._v("FAQs")]),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("img",{staticClass:"logo1",attrs:{src:a(458)}}),e("b",[t._v("THE PREDICTIVE PRODIGIES")])])},p=[],f={name:"Header"},m=f,b=(0,o.Z)(m,h,p,!1,null,"55d4456b",null),_=b.exports,g={name:"Home",components:{Header:_},methods:{goToAQI(){this.$router.push("/aqi")},goToHeatWave(){this.$router.push("/heat-wave")}}},C=g,y=(0,o.Z)(C,d,v,!1,null,null,null),w=y.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("img",{attrs:{alt:"Vue logo",src:a(949)}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},q=[],k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},A=[function(){var t=this,e=t._self._c;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],D={name:"HelloWorld",props:{msg:String}},j=D,H=(0,o.Z)(j,k,A,!1,null,"1dd7557b",null),I=H.exports,P={name:"HomeView",components:{HelloWorld:I}},W=P,Q=(0,o.Z)(W,x,q,!1,null,null,null),O=(Q.exports,function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"home-btn"},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"}),t._v("Home")])],1),e("div",{staticClass:"heatwave-container"},[e("h1",{staticClass:"heatwave-heading"},[t._v("Heat Wave Prediction")]),e("form",{staticClass:"heatwave-form",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"city"}},[t._v("Select City:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],staticClass:"form-control",attrs:{id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?a:a[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(t.cities,(function(a){return e("option",{key:a},[t._v(t._s(a))])}))],2)]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"date"}},[t._v("Select Date:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"form-control",attrs:{type:"text",id:"date",placeholder:"Select a date"},domProps:{value:t.selectedDate},on:{input:function(e){e.target.composing||(t.selectedDate=e.target.value)}}})])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.submitForm()}}},[t._v("Submit")]),t.showResult?e("div",[e("h2",{staticClass:"result-heading"},[t._v("Heat Wave Prediction Result:")]),e("p",{staticClass:"result-text"},[t._v(t._s(t.value_)+":"+t._s(t.result))])]):t._e()])])}),Z=[],M=a(667),S={name:"HeatWave",components:{Header:_},data(){return{cities:["Adilabad","Nizamabad","Warangal","Karimnagar","Khammam"],selectedCity:"",selectedDate:"",value_:"",showResult:!1,result:""}},mounted(){const t=new M.Z("#date",{enableTime:!1,dateFormat:"Y-m-d"});t.set("minDate","2023-01-01"),t.set("maxDate","2023-12-31")},methods:{submitForm(){if(this.selectedCity&&this.selectedDate){const t=`http://127.0.0.1:5000/api/heat_waves/${this.selectedCity}/${this.selectedDate}`;fetch(t).then((t=>t.json())).then((t=>{this.value_=t,this.result=t>=40?"Heat-Wave":"No Heat-Wave",this.showResult=!0})).catch((t=>{console.error("Error fetching heat wave prediction:",t)}))}}}},T=S,F=(0,o.Z)(T,O,Z,!1,null,"186d1262",null),N=F.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aqii"},[e("div",{staticClass:"home-btn"},[e("router-link",{staticClass:"home-link",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"}),t._v("Home")])],1),e("div",{staticClass:"aqi-page"},[e("br"),e("br"),e("br"),e("h1",{staticClass:"animate__animated animate__fadeInDown"},[t._v("Air Quality Index")]),e("div",{staticClass:"dropdowns"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?a:a[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select a city")]),t._l(t.cities,(function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a))])}))],2),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMonth,expression:"selectedMonth"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMonth=e.target.multiple?a:a[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select a month")]),t._l(t.months,(function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a))])}))],2)]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.fetchAQIData()}}},[t._v("Submit")]),t.aqiData?e("div",{staticClass:"aqi-data"},[e("h2",{staticClass:"animate__animated animate__fadeInLeft"},[t._v("Air Quality Index: "+t._s(t.aqiData))]),e("h3",{staticClass:"animate__animated animate__fadeInRight"},[t._v(t._s(t.aqiMessage))])]):t._e(),e("br"),t._m(0)])])},R=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart-wrapper"},[e("div",[e("canvas",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"aqi-chart"}})])])}],$=a(809),z={name:"AQI",data(){return{cities:["Adilabad","Nizamabad","Warangal","Karimnagar","Khammam"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],selectedCity:"",selectedMonth:"",aqiData:null}},components:{Header:_},computed:{aqiMessage(){return this.aqiData>=0&&this.aqiData<=50?"Good":this.aqiData>=51&&this.aqiData<=100?"Satisfactory":this.aqiData>=101&&this.aqiData<=200?"Moderately Polluted":this.aqiData>=201&&this.aqiData<=300?"Poor":this.aqiData>=301&&this.aqiData<=400?"Very Poor":this.aqiData>=401&&this.aqiData<=500?"Severe":""}},methods:{async fetchAQIData(){const t=await fetch(`http://127.0.0.1:5000/api/aqi/${this.selectedCity}/${this.selectedMonth}`),e=await t.json();this.aqiData=e.aqi},async createChart(){const t=await fetch("http://localhost:5000/api/aqis"),e=await t.json(),a=Object.keys(e),s=Object.values(e).map((t=>Math.round(t)));new $.ZP("aqi-chart",{type:"bar",data:{labels:a,datasets:[{label:"AQI Current Month",data:s,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}},mounted(){this.createChart()}},V=z,K=(0,o.Z)(V,E,R,!1,null,null,null),L=K.exports,J=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"about"}},[e("Header"),t._m(0)],1)},U=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("h1",[t._v("About Us")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Who We Are")]),e("p",[t._v("We are a team of environmental enthusiasts who are passionate about creating awareness on environmental issues and providing predictive solutions using data science.")]),e("p",[t._v("Our team consists of four members well versed in data science, design, and technology who have come together to create a platform that provides predictive solutions for environmental issues.")])]),e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Our Mission")]),e("p",[t._v("Our mission is to use data science and technology to create a sustainable future by predicting environmental issues and providing solutions to prevent them from occurring.")]),e("p",[t._v("We believe that by creating awareness and providing predictive solutions, we can create a better future for ourselves and for the generations to come.")])])]),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Contact Us")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Dummy Address")]),e("li",[e("i",{staticClass:"fas fa-envelope"}),t._v(" dummy@predictiveprodigies.com")]),e("li",[e("i",{staticClass:"fas fa-phone"}),t._v(" 555-555-5555")])])]),e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Follow Us")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook fa-2x"})])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter fa-2x"})])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram fa-2x"})])])])])])])}],G={name:"About",components:{Header:_}},Y=G,B=(0,o.Z)(Y,J,U,!1,null,"0ee3c01e",null),X=B.exports,tt=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("div",{staticClass:"container"},[e("h2",[t._v("Frequently Asked Questions")]),e("div",{staticClass:"accordion",attrs:{id:"faq-accordion"}},[e("centre",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card-header",attrs:{id:"question1"}},[e("h5",{staticClass:"mb-0"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#answer1","aria-expanded":"true","aria-controls":"answer1"}},[t._v(" What is Air Quality Index (AQI)? ")])])]),e("div",{staticClass:"collapse show",attrs:{id:"answer1","aria-labelledby":"question1","data-parent":"#faq-accordion"}},[e("div",{staticClass:"card-body"},[t._v(" AQI is an index for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. ")])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card-header",attrs:{id:"question2"}},[e("h5",{staticClass:"mb-0"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#answer2","aria-expanded":"false","aria-controls":"answer2"}},[t._v(" How is AQI calculated? ")])])]),e("div",{staticClass:"collapse show",attrs:{id:"answer2","aria-labelledby":"question2","data-parent":"#faq-accordion"}},[e("div",{staticClass:"card-body"},[t._v(" AQI is calculated based on five major air pollutants regulated by the Clean Air Act: ground-level ozone, particulate matter (PM2.5 and PM10), carbon monoxide, sulfur dioxide, and nitrogen dioxide. The highest value of these pollutants is used to determine the AQI for a particular location. ")])])]),e("div",{staticClass:"w-100"}),e("div",{staticClass:"col"},[e("div",{staticClass:"card-header",attrs:{id:"question3"}},[e("h5",{staticClass:"mb-0"},[e("button",{staticClass:"btn btn-link collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#answer3","aria-expanded":"false","aria-controls":"answer3"}},[t._v(" What are the health effects of air pollution? ")])])]),e("div",{staticClass:"collapse show",attrs:{id:"answer3","aria-labelledby":"question3","data-parent":"#faq-accordion"}},[e("div",{staticClass:"card-body"},[t._v(" Air pollution can have various health effects, depending on the level and duration of exposure. Short-term exposure to high levels of air pollution can cause irritation of the eyes, nose and throat, coughing, wheezing, shortness of breath and chest pain. Long-term exposure can lead to chronic respiratory and cardiovascular diseases, cancer and premature death. ")])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card-header",attrs:{id:"question4"}},[e("h5",{staticClass:"mb-0"},[e("button",{staticClass:"btn btn-link collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#answer4","aria-expanded":"false","aria-controls":"answer4"}},[t._v(" What is a heat wave? ")])])]),e("div",{staticClass:"collapse show",attrs:{id:"answer4","aria-labelledby":"question4","data-parent":"#faq-accordion"}},[e("div",{staticClass:"card-body"},[t._v(" A heat wave is a prolonged period of excessively hot weather, which may be accompanied by high humidity. Heat waves can occur in both dry and humid climates, and they can cause a variety of health problems, such as dehydration, heat exhaustion, and heatstroke. Heat waves can also cause damage to crops and infrastructure, and they can increase the risk of wildfires. ")])])])])])],1)])],1)},et=[],at={name:"FAQs",components:{Header:_}},st=at,rt=(0,o.Z)(st,tt,et,!1,null,"f33508f2",null),it=rt.exports;s.ZP.use(u.ZP);const ot=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:X},{path:"/heat-wave",component:N},{path:"/aqi",component:L},{path:"/faq",component:it}],nt=new u.ZP({routes:ot});var lt=nt;s.ZP.config.productionTip=!1,new s.ZP({router:lt,render:function(t){return t(c)}}).$mount("#app")},949:function(t,e,a){t.exports=a.p+"img/logo.f9bd8ebc.png"},458:function(t,e,a){t.exports=a.p+"img/logo1.4e6cc491.png"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],i=t[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,r,i]}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,o=s[0],n=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var u=l(a)}for(e&&e(s);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkfronted"]=self["webpackChunkfronted"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(33)}));s=a.O(s)})();
//# sourceMappingURL=app.d7ce4799.js.map