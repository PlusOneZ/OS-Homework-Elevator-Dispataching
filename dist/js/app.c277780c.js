(function(t){function e(e){for(var s,i,l=e[0],u=e[1],a=e[2],h=0,d=[];h<l.length;h++)i=l[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,a||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,l=1;l<o.length;l++){var u=o[l];0!==r[u]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/OS-Homework-Elevator-Dispatching/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var c=u;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Elevator")],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"min-h-screen"},[o("p",{staticClass:"sm:text-6xl font-sans py-4 text-2xl"},[t._v(" In Elevator Panels ")]),o("div",{staticClass:"grid sm:grid-cols-5 grid-cols-2"},t._l(this.elevNum,(function(e){return o("ElevatorPanel",{key:"elev-"+e,ref:"elevatorList",refInFor:!0,attrs:{"floor-num":t.floorNum,"elev-name":"Elevator "+e},on:{dealtDownRequest:t.floorDownRequestDealt,dealtUpRequest:t.floorUpRequestDealt,upRequest:t.floorUpRequest,downRequest:t.floorDownRequest}})})),1),o("p",{staticClass:"sm:text-6xl font-sans py-4 text-2xl"},[t._v(" Floor Panels ")]),o("div",{staticClass:"sm:grid-cols-6 grid grid-cols-2"},t._l(this.floorNum,(function(e){return o("FloorPanel",{key:"floor-"+e,ref:"floorPanels",refInFor:!0,attrs:{"current-floor":e,"can-up":t.floorNum!==e,"can-down":1!==e},on:{upRequest:t.floorUpRequest,downRequest:t.floorDownRequest}})})),1)])},l=[],u=(o("def6"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-3"},[o("div",[o("p",{staticClass:"text-xl"},[t._v(" "+t._s(t.elevName)+" ")])]),o("div",{staticClass:"flex"},[o("div",{staticClass:"relative max-w-xl mx-auto text-center"},[o("div",{staticClass:"relative shadow-lg sm:rounded-2xl bg-pink-50 rounded-xl sm:p-5 p-2"},[o("div",{staticClass:"inline-flex pr-6 sm:p-3 rounded-3xl p-2",class:t.disabled?"bg-gray-400":"bg-green-800"},[o("div",{staticClass:"sm:-mx-20 -mx-20 inline-block"},[o("span",[o("svg",{staticClass:"h-7 sm:h-7",attrs:{viewBox:"0 0 1317 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"}},[o("path",{attrs:{d:"M0 1024 1316.571429 1024 658.285714 0 0 1024Z",fill:t.goingUp?"#fcd217":"#cdcdcd"}})])]),o("p",{staticClass:"h-2"}),o("span",[o("svg",{staticClass:"h-7 sm:h-7",attrs:{viewBox:"0 0 1317 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"}},[o("path",{attrs:{d:"M0 0 1316.571429 0 658.285714 1024 0 0Z",fill:t.goingDown?"#fcd217":"#cdcdcd"}})])])]),o("div",{staticClass:"inline-block"},[o("p",{staticClass:"sm:h-7 font-mono sm:text-6xl text-white h-5 text-5xl"},[t._v(" "+t._s(t.displayFloor())+" ")])])]),o("div",{staticClass:"grid gap-1 sm:gap-1 grid-cols-4 pt-8"},t._l(t.floorNum,(function(e){return o("div",{key:e,staticClass:"w-10"},[o("button",{staticClass:"rounded border-2 border-solid border-blue-300 h-7 w-8",class:{"bg-blue-400":t.lighten[t.floorNum-e+1]},on:{click:function(o){return t.floorSelected(t.floorNum-e+1)}}},[t._v(" "+t._s(t.floorNum-e+1)+" ")])])})),0),o("div",{staticClass:"grid gap-4 grid-cols-4 pt-5"},[o("div",{staticClass:"w-10"},[o("p",{staticClass:"text-2xl font-sans font-bold",class:{"text-red-400":!t.doorOpen,"text-green-400":t.doorOpen}},[t._v(" "+t._s(t.doorOpen?"OPEN":"CLOSE")+" ")])]),o("div",{staticClass:"w-10"}),o("div",{staticClass:"w-10"},[o("button",{staticClass:"hover:shadow-lg",attrs:{id:"emergency"},on:{click:function(e){return t.emergencyCall(t.elevName)}}},[o("svg",{staticClass:"h-7 rounded border-2 border-solid border-red-300 hover:bg-red-800 w-8 ",class:t.disabled?"bg-red-800":"bg-red-400",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"}},[o("path",{attrs:{d:"M790.87 666.95V456.08c0-144.36-102.62-264.33-236.2-285.65v-85.1h-85.33v85.12c-133.5 21.39-236.03 141.32-236.03 285.61 0 11.4-0.04 33.6-0.04 33.68v176.08c0 30.49-6.92 102.78-70.98 115.6L128 788.3v79.92h147.85l152.19 0.31c7.17 39.88 42.02 70.14 83.96 70.14 41.82 0 76.59-30.09 83.9-69.8l152.17 0.31H896v-79.92l-34.29-6.86c-63.94-12.81-70.85-84.95-70.84-115.45zM290.93 782.91c17.91-32.15 27.68-71.99 27.68-117.22V489.82s0.04-22.3 0.04-33.75c0-112.31 86.78-203.68 193.45-203.68s193.45 91.37 193.45 203.68V668.41c0.2 44.46 9.9 83.67 27.54 115.4l-442.16-0.9z",fill:t.disabled?"#2f90b9":"#f4ea2a"}}),o("path",{attrs:{d:"M289.31 242.65l-54.35-65.78C134.44 259.91 76.8 382.25 76.8 512.5h85.33c0-104.72 46.36-203.08 127.18-269.85zM861.87 512.5h85.33c0-130.35-57.72-252.75-158.35-335.8l-54.32 65.81C815.45 309.3 861.87 407.7 861.87 512.5z",fill:t.disabled?"#2f90b9":"#f4ea2a"}})])])]),o("div",{staticClass:"w-10"},[o("button",{staticClass:"hover:shadow-lg",attrs:{id:"call"},on:{click:function(e){return t.makeCall(t.elevName)}}},[o("svg",{staticClass:"h-7 rounded border-2 border-solid border-cyan-400 bg-pink-300 hover:bg-pink-500 w-8 ",attrs:{viewBox:"0 0 1025 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"}},[o("path",{attrs:{d:"M507.918859 650.527512c-49.503789-40.346806-106.623387-94.611243-156.090335-155.822216-34.713235-42.89496-65.404683-87.94306-33.707276-119.633303L95.656089 153.242337C63.221866 193.655661-8.620745 386.103763 299.338585 701.174388c324.458887 332.036833 533.74323 261.005742 569.766359 223.573453L652.205814 708.149578C621.886867 738.400983 582.842793 711.503113 507.918859 650.527512zM947.385483 798.906865l0-0.201601c0 0-169.23738-168.702166-169.343809-168.769707-13.381394-13.347623-34.814547-13.078481-48.127376 0.067541l-61.340939 61.375733 217.469138 217.203066c0 0 61.409504-61.176179 61.342986-61.245767l0.165784-0.132013C961.605005 833.148333 960.162074 811.75202 947.385483 798.906865zM396.298428 297.126091l0-0.168854c14.051691-14.083415 12.74589-35.45005 0-48.196964l0-0.234348c0 0-174.132089-173.597897-174.200654-173.597897-13.452005-13.484753-34.884135-13.148069-48.163193 0l-61.342986 61.441228 222.299375 221.961668C334.888924 358.335017 396.298428 297.225356 396.298428 297.126091z",fill:"#1296db"}})])])])])])])])])}),a=[],c=(o("a9e3"),o("a434"),{name:"ElevatorPanel",props:{floorNum:Number,elevName:String},mounted:function(){this.timer=setInterval(this.run,1e3)},data:function(){return{queue:[],lighten:[],timer:null,doorOpen:!0,upRequest:[],downRequest:[],currentFloor:1,goingUp:!1,goingDown:!1,disabled:!1}},computed:{maxInQueue:function(){if(!(this.queue.length<=0)){for(var t=-1,e=0;e<this.queue.length;e++)this.queue[e]>t&&(t=this.queue[e]);return t}},minInQueue:function(){if(!(this.queue.length<=0)){for(var t=this.floorNum+1,e=0;e<this.queue.length;e++)this.queue[e]<t&&(t=this.queue[e]);return t}},idle:function(){return!(this.goingUp||this.goingDown)}},created:function(){for(var t=1;t<=this.floorNum;t++)this.lighten[t]=!1,this.upRequest[t]=!1,this.downRequest[t]=!1;this.doorOpen=!1},methods:{goUp:function(){this.goingUp&&this.currentFloor<this.floorNum&&this.currentFloor++},goDown:function(){this.goingDown&&this.currentFloor>1&&this.currentFloor--},floorSelected:function(t){this.disabled||this.lighten[t]||(this.queue.push(t),this.$set(this.lighten,t,!0))},removeTask:function(t){var e=this.queue.indexOf(t);-1!==e&&this.queue.splice(e,1)},stopBy:function(t){var e=this;console.log("Stopping by:",t),this.timer&&clearInterval(this.timer),this.doorOpen=!0,setTimeout((function(){e.doorOpen=!1,setTimeout((function(){e.timer=setInterval(e.run,1e3)}),2e3)}),3e3)},changeDirection:function(){this.queue.length<=0?(this.goingDown=!1,this.goingUp=!1):this.currentFloor<this.minInQueue?(this.goingDown=!1,this.goingUp=!0):this.currentFloor>this.maxInQueue&&(this.goingDown=!0,this.goingUp=!1)},goOn:function(){this.changeDirection(),this.goingUp&&this.currentFloor<this.floorNum?this.goUp():this.goingDown&&this.currentFloor>1&&this.goDown()},run:function(){var t=!1,e=this.currentFloor;this.idle?(this.upRequest[e]?(this.$set(this.upRequest,e,!1),this.goingUp=!0,this.removeTask(e),this.$emit("dealtUpRequest",this.currentFloor),this.stopBy(e)):this.downRequest[e]?(this.$set(this.downRequest,e,!1),this.goingDown=!0,this.removeTask(e),this.$emit("dealtDownRequest",this.currentFloor),this.stopBy(e)):this.lighten[e]&&(this.$set(this.lighten,e,!1),this.removeTask(e),this.stopBy(e)),this.goOn()):(this.lighten[e]&&(this.$set(this.lighten,e,!1),this.removeTask(e),t=!0),this.goingUp?(this.upRequest[e]&&(this.$set(this.upRequest,e,!1),this.removeTask(e),this.$emit("dealtUpRequest",this.currentFloor),t=!0),e===this.maxInQueue&&this.downRequest[e]&&(this.$set(this.downRequest,e,!1),this.removeTask(e),this.$emit("dealtDownRequest",this.currentFloor),t=!0)):this.goingDown&&(this.downRequest[e]&&(this.$set(this.downRequest,e,!1),this.removeTask(e),this.$emit("dealtDownRequest",this.currentFloor),t=!0),e===this.minInQueue&&this.upRequest[e]&&(this.$set(this.upRequest,e,!1),this.removeTask(e),this.$emit("dealtUpRequest",this.currentFloor),t=!0)),t?this.stopBy(e):this.goOn())},requestUp:function(t){this.upRequest[t]||(this.upRequest[t]=!0,this.queue.push(t))},requestDown:function(t){this.downRequest[t]||(this.downRequest[t]=!0,this.queue.push(t))},makeCall:function(t){alert(t+" calls to the console!")},emergencyCall:function(t){if(this.disabled)alert(t+" emergency dealt, elevator now can work!"),this.disabled=!1;else{this.disabled=!0,alert(t+" emergency calls the console\nElevator is now stopping!");for(var e=1;e<=this.floorNum;e++)this.$set(this.lighten,e,!1),this.upRequest[e]&&(this.$emit("upRequest",e),this.upRequest[e]=!1),this.downRequest[e]&&(this.$emit("downRequest",e),this.downRequest[e]=!1);this.queue=[]}},displayFloor:function(){return 1===(""+this.currentFloor).length?"0"+this.currentFloor:""+this.currentFloor}}}),h=c,d=o("2877"),f=Object(d["a"])(h,u,a,!1,null,"049a135c",null),p=f.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-1 flex flex-col justify-center sm:py-2"},[o("div",{staticClass:"relative py-3 sm:mx-auto mx-auto"},[o("div",{staticClass:"relative inline-flex shadow-lg sm:rounded-3xl rounded-xl bg-gradient-to-bl from-blue-300 to-blue-500 p-2"},[o("div",[t.canUp?o("div",{staticClass:"p-1 sm:p-2"},[o("button",{key:t.currentFloor+"button-up",staticClass:"border-solid border-4 rounded-lg border-gray-500 bg-white",on:{click:function(e){return t.clickButton("up")}}},[o("svg",{staticClass:"h-8 sm:h-10 sm:w-14 p-1",attrs:{viewBox:"0 0 1317 1024",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"}},[o("path",{attrs:{d:"M0 1024 1316.571429 1024 658.285714 0 0 1024Z",fill:t.upLighten?"#fcd217":"#cdcdcd"}})])])]):t._e(),t.canDown?o("div",{staticClass:"p-1 sm:p-2"},[o("button",{key:t.currentFloor+"button-down",staticClass:"border-solid border-4 rounded-lg border-gray-500 bg-white",on:{click:function(e){return t.clickButton("down")}}},[o("svg",{staticClass:"h-8 sm:h-10 sm:w-14 p-1",attrs:{viewBox:"0 0 1317 1024",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"}},[o("path",{attrs:{d:"M0 0 1316.571429 0 658.285714 1024 0 0Z",fill:t.downLighten?"#fcd217":"#cdcdcd"}})])])]):t._e()]),o("div",{staticClass:"text-5xl sm:py-10 sm:px-2 font-mono font-extrabold px-4 py-6"},[t._v(" "+t._s(t.displayFloor())+" ")])])])])},v=[],m={name:"FloorPanel",props:{currentFloor:Number,canUp:Boolean,canDown:Boolean},data:function(){return{upLighten:!1,downLighten:!1}},methods:{clickButton:function(t){"up"===t?(this.upLighten=!0,this.$emit("upRequest",this.currentFloor)):(this.downLighten=!0,this.$emit("downRequest",this.currentFloor))},upRequestHandled:function(){this.upLighten=!1},downRequestHandled:function(){this.downLighten=!1},displayFloor:function(){return 1===(""+this.currentFloor).length?"0"+this.currentFloor:""+this.currentFloor}}},w=m,b=Object(d["a"])(w,g,v,!1,null,"c3f7ab8c",null),q=b.exports,x=1,R=2,F={name:"Elevator",components:{ElevatorPanel:p,FloorPanel:q},props:{},data:function(){return{elevNum:5,floorNum:20,choice:[]}},created:function(){for(var t=0;t<this.elevNum;t++)this.choice[t]=t},methods:{floorUpRequest:function(t){var e=this.findElevatorToDeal(t,x);console.log("Requesting to ",e," elevator"),void 0!==e&&this.$refs.elevatorList[e].requestUp(t)},floorDownRequest:function(t){var e=this.findElevatorToDeal(t,R);console.log("Requesting to ",e," elevator"),void 0!==e&&this.$refs.elevatorList[e].requestDown(t)},floorUpRequestDealt:function(t){this.$refs.floorPanels[t-1].upRequestHandled()},floorDownRequestDealt:function(t){this.$refs.floorPanels[t-1].downRequestHandled()},findElevatorToDeal:function(t,e){this.choice.sort((function(){return.5-Math.random()}));for(var o=-1,s=this.floorNum+1,r=this.floorNum+1,n=void 0,i=0;i<this.elevNum;i++){var l=this.choice[i],u=this.$refs.elevatorList[l];if(!u.disabled){if(n=l,(u.idle||e===x&&u.goingUp||e===R&&u.goingDown)&&u.currentFloor===t)return l;if(e===x){if(u.goingUp&&u.currentFloor<=t){if(u.currentFloor===t)return l;u.maxInQueue>t?t-u.currentFloor<r&&(r=t-u.currentFloor,o=l):r===this.floorNum+1&&t-u.currentFloor<s&&(s=u.currentFloor,o=l)}}else if(u.goingDown&&u.currentFloor>=t){if(u.currentFloor===t)return l;u.minInQueue<t?u.currentFloor-t<r&&(r=u.currentFloor-t,o=l):r===this.floorNum+1&&u.currentFloor-t<s&&(s=u.currentFloor,o=l)}o<0&&u.idle&&s>Math.abs(t-u.currentFloor)&&(s=Math.abs(t-u.currentFloor),o=l)}}if(void 0!==n){if(o<0){console.log("NO ELEVATOR SELECTED!");var a=this.floorNum+1,c=-1;o=n;for(var h=0;h<this.elevNum;h++){var d=this.choice[h],f=this.$refs.elevatorList[d];f.disabled||(e===x?void 0!==f.minInQueue?f.minInQueue<a&&(a=f.minInQueue,o=d):f.currentFloor<a&&(a=f.currentFloor,o=d):void 0!==f.maxInQueue?f.maxInQueue>c&&(c=f.maxInQueue,o=d):f.currentFloor>c&&(c=f.currentFloor,o=d))}}return o}e===x?this.$refs.floorPanels[t-1].upRequestHandled():this.$refs.floorPanels[t-1].downRequestHandled()}}},C=F,y=Object(d["a"])(C,i,l,!1,null,"9960dd14",null),D=y.exports,k={name:"App",components:{Elevator:D}},$=k,N=(o("034f"),Object(d["a"])($,r,n,!1,null,null,null)),O=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,o){},def6:function(t,e,o){}});
//# sourceMappingURL=app.c277780c.js.map