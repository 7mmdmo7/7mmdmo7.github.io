(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34db8442"],{"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),r=s("785a"),n=s("17c2"),o=s("9112"),c=function(t){if(t&&t.forEach!==n)try{o(t,"forEach",n)}catch(e){t.forEach=n}};for(var l in a)a[l]&&c(i[l]&&i[l].prototype);c(r)},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),r=a("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"30d0":function(t,e,s){},"44f7":function(t,e,s){"use strict";s("30d0")},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));s("b64b"),s("a4d3"),s("4de4"),s("e439"),s("159b"),s("dbb4");function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"7db0":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").find,r=s("44d2"),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("23cb"),r=s("5926"),n=s("07fa"),o=s("7b0b"),c=s("65f0"),l=s("8418"),d=s("1dde"),u=d("splice"),p=Math.max,h=Math.min,_=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var s,i,d,u,g,m,b=o(this),v=n(b),q=a(t,v),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=v-q):(s=C-2,i=h(p(r(e),0),v-q)),v+s-i>_)throw TypeError(f);for(d=c(b,i),u=0;u<i;u++)g=q+u,g in b&&l(d,u,b[g]);if(d.length=i,s<i){for(u=q;u<v-i;u++)g=u+i,m=u+s,g in b?b[m]=b[g]:delete b[m];for(u=v;u>v-i+s;u--)delete b[u-1]}else if(s>i)for(u=v-i;u>q;u--)g=u+i-1,m=u+s-1,g in b?b[m]=b[g]:delete b[m];for(u=0;u<s;u++)b[u+q]=arguments[u+2];return b.length=v-i+s,d}})},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},a7d7:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container p-4"},[s("h2",[t._v("Paquets")]),s("div",{staticClass:"text-end mb-2"}),s("div",{},[t.errorMessage?s("div",{staticClass:"card card-body p-2 text-center text-warning"},[t._v(" "+t._s(t.errorMessage)+" "),s("hr"),s("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"button"},on:{click:t.tray_again}},[t._v("Réessayer")])]):s("div",t._l(t.requests,(function(e){return s("div",{key:e.id},[s("itemComponent",{attrs:{request:e},on:{requestupdated:t.requestupdated}})],1)})),0),t.isLoading?s("loading-compoenent"):t._e()],1),t.errorMessage||t.isLoading?t._e():s("div",{staticClass:"my-4 py-1 text-center"},[0===t.lastQuerySize?s("p",{staticClass:"alert alert-warning"},[t._v("No more items to load !")]):t._e(),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.smart_load_requests}},[t._v(" Voir plus "),s("i",{staticClass:"bi-chevron-double-right ms-1"})])])])},a=[],r=s("5530"),n=(s("7db0"),s("a434"),s("159b"),s("f9f2")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"package mb-4"},[t.errorMessage?s("div",{staticClass:"card card-body text-center text-warning p-4"},[t._v(" "+t._s(t.errorMessage)+" "),s("hr",{staticClass:"m-1"}),s("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"button"},on:{click:t.tray_again}},[t._v("Réessayer")])]):t.isLoading?s("div",{staticClass:"card card-body text-center text-warning p-4"},[s("loading-compoenent")],1):s("div",{staticClass:"card"},[s("div",{staticClass:"card-header p-1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-md-12"},[s("h3",{staticClass:"h3 d-inline package-title"},[t._v(t._s(t.request.description||"/"))]),s("h6",{staticClass:"h6 ms-2 d-inline package-code"},[t._v(t._s(t.request.packageCode||"/"))])]),s("div",{staticClass:"col-lg-6 col-md-12 package-buttons"},[s("button",{staticClass:"btn btn-warning btn-sm me-2",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Selectionner un Transporteur",disabled:t.step>1},on:{click:t.do_driver_selection_01}},[s("i",{staticClass:"bi-person-fill"})]),s("button",{staticClass:"btn btn-warning btn-sm me-2",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mettre comme Ramassé",disabled:2!=t.step},on:{click:t.do_pick_up}},[s("i",{staticClass:"bi-cart-plus-fill"})]),s("button",{staticClass:"btn btn-warning btn-sm me-2",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mettre en Route",disabled:t.step<2||t.step>4},on:{click:t.do_on_road}},[s("i",{staticClass:"bi-truck"})]),s("button",{staticClass:"btn btn-warning btn-sm me-2",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mettre comme Livré",disabled:t.step<2||t.step>4},on:{click:t.droping}},[s("i",{staticClass:"bi-cart-dash"})]),s("div",{staticClass:"dropdown d-inline ms-1"},[t._m(0),s("ul",{staticClass:"dropdown-menu p-0",attrs:{"aria-labelledby":"actionsMenu"}},[s("li",[s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"packages-show",params:{id:this.request.id}}}},[s("i",{staticClass:"bi-eye ms-1"}),t._v(" Voir les détails ")])],1),s("li",[s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"packages-edit",params:{id:this.request.id}}}},[s("i",{staticClass:"bi-pen ms-1"}),t._v(" Modifier ")])],1),s("li",[s("a",{staticClass:"dropdown-item action",on:{click:t.delete_request}},[s("i",{staticClass:"bi-trash ms-1"}),t._v(" Supprimer ")])]),t._m(1),s("li",[s("a",{staticClass:"dropdown-item action",on:{click:t.do_driver_selection_01}},[s("i",{staticClass:"bi-person-fill ms-1"}),t._v(" Selectionner un Transporteur ")])]),s("li",[s("a",{staticClass:"dropdown-item action",on:{click:t.do_pick_up}},[s("i",{staticClass:"bi-cart-plus-fill ms-1"}),t._v(" Mettre comme Ramassé ")])]),s("li",[s("a",{staticClass:"dropdown-item action",on:{click:t.do_on_road}},[s("i",{staticClass:"bi-truck ms-1"}),t._v(" Mettre en Route ")])]),s("li",[s("a",{staticClass:"dropdown-item action",on:{click:t.droping}},[s("i",{staticClass:"bi-cart-dash ms-1"}),t._v(" Mettre comme Livré ")])]),t._m(2),s("li",[s("a",{staticClass:"dropdown-item action bg-warning",on:{click:t.cancel_last_operation}},[s("i",{staticClass:"bi-reply-fill ms-1"}),t._v(" Annuler la dernière action ")])]),s("li",[s("a",{staticClass:"dropdown-item action bg-danger",on:{click:t.reset_operations}},[s("i",{staticClass:"bi-arrow-repeat ms-1"}),t._v(" Mettre a Zero ")])])])])])])]),s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"row g-0"},[s("div",{staticClass:"col-lg-6 col-md-12"},[s("p",{staticClass:"p-inline"},[s("b",[t._v(t._s(t.request.wilayaFrom||"/"))]),s("i",{staticClass:"bi-chevron-double-right me-1"}),t._v(" "+t._s(t.request.baladiaFrom||"/")+" "),s("i",{staticClass:"bi-chevron-right me-1"}),t._v(" "+t._s(t.request.baladiaTo||"/")+" ")]),s("p",{staticClass:"p-inline"},[t._v("Date : "+t._s(t._f("moment")(t.request.created_at)))])]),s("div",{staticClass:"col-lg-2 col-md-4"},[s("p",{staticClass:"p-inline"},[t._v("Poids (kg): "+t._s(t.request.weight||"/"))]),s("p",{staticClass:"p-inline"},[t._v("Taille (cm): "+t._s((t.request.width||"/")+"*"+(t.request.length||"/")+"*"+(t.request.height||"/")))])]),s("div",{staticClass:"col-lg-2 col-md-4"},[s("p",{staticClass:"p-inline"},[t._v("Distributeur")]),s("p",{staticClass:"p-inline"},[s("a",{staticClass:"phone-number",attrs:{href:"tel:"+(t.request.userPhone||"0")}},[t._v(t._s(t.request.userPhone||"/"))])])]),s("div",{staticClass:"col-lg-2 col-md-4"},[s("p",{staticClass:"p-inline"},[t._v("Transporteur")]),s("p",{staticClass:"p-inline"},[s("a",{staticClass:"phone-number",attrs:{href:"tel:"+(t.request.driverPhone||"0")}},[t._v(t._s(t.request.driverPhone||"/"))])])])])]),s("div",{class:"card-footer p-1 state state-"+(t.request.state||"empty")},[t._v(" Destinataire : "+t._s(t.request.arriveName||"/")+" | "),s("a",{staticClass:"phone-number",attrs:{href:"tel:"+(t.request.arriveNumber||"0")}},[t._v(t._s(t.request.arriveNumber||"/"))]),t._v(" | "+t._s(t._f("state_filter")(t.request.state||"/"))+" ")])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{role:"button",id:"actionsMenu","data-bs-toggle":"dropdown","aria-expanded":"false"}},[s("i",{staticClass:"bi-gear me-1"}),t._v(" Actions ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("hr",{staticClass:"m-0"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("hr",{staticClass:"m-0"})])}],l=(s("d81d"),s("b0c0"),{methods:{update_do_operation:function(t){var e=this;this.isLoading=!0,this.errorMessage=null,n["d"].collection("requests").doc(this.id).set(t,{merge:!0}).then((function(){e.isLoading=!1,e.errorMessage=null,console.log("Successfully!"),e.load_request(e.id)})).catch((function(t){e.isLoading=!1,e.errorMessage=null,console.log("error",t)}))},reset_operations:function(){var t=n["a"].serverTimestamp(),e={driverPhone:"",state:"online",modified_at:t};this.update_do_operation(e)},cancel_last_operation:function(){var t=n["a"].serverTimestamp(),e={modified_at:t};"online"==this.request.state&&(e.state="online"),"assigned"==this.request.state&&(e.driverPhone="",e.state="online"),"picked"==this.request.state&&(e.state="assigned"),"road"==this.request.state&&(e.state="picked"),"delivred"==this.request.state&&(e.state="road"),this.update_do_operation(e)},do_driver_selection_01:function(){var t=this;this.$swal({title:"Selectionner un Transporteur",input:"select",inputOptions:this.$store.state.drivers.drivers.map((function(t){return t.name})),inputPlaceholder:"Transporteur",showCancelButton:!0}).then((function(e){t.do_driver_selection_02(t.$store.state.drivers.drivers[e.value])}))},do_driver_selection_02:function(t){console.log("do_driver_selection_02(driver)",t);var e=n["a"].serverTimestamp(),s={driverPhone:t.phone,state:"assigned",modified_at:e};this.update_do_operation(s)},do_pick_up:function(){var t=this;this.$swal({title:"Veuillez saisir le code de ramassage!",input:"text",inputPlaceholder:"Code de ramassage",showCancelButton:!0}).then((function(e){if(e.isConfirmed)if(e.value==t.request.pickupCode){var s=n["a"].serverTimestamp(),i={state:"picked",modified_at:s};t.update_do_operation(i)}else t.$swal({icon:"error",title:"Oops...",text:"Le code est erroné, veuillez réessayer !"})}))},do_on_road:function(){var t=n["a"].serverTimestamp(),e={state:"road",modified_at:t};this.update_do_operation(e)},droping:function(){var t=this;this.$swal({title:"Veuillez saisir le code secret!",input:"text",inputPlaceholder:"Code secret",showCancelButton:!0}).then((function(e){if(e.isConfirmed)if(e.value==t.request.pickupCode){var s=n["a"].serverTimestamp(),i={state:"delivred",deliveryTime:s,modified_at:s};t.update_do_operation(i)}else t.$swal({icon:"error",title:"Oops...",text:"Le code est erroné, veuillez réessayer !"})}))},closing:function(){var t=n["a"].serverTimestamp(),e={state:"hors-line",modified_at:t};this.update_do_operation(e)}}}),d={components:{},mixins:[l],data:function(){return{id:null,isLoading:!1,errorMessage:null}},props:{request:{type:Object,required:!0}},computed:{step:function(){return"online"==this.request.state?1:"assigned"==this.request.state?2:"picked"==this.request.state?3:"road"==this.request.state?4:"delivred"==this.request.state?5:0}},created:function(){this.request&&(this.id=this.request.id)},methods:{tray_again:function(){this.isLoading=!1,this.errorMessage=null,this.load_request(this.id)},show_request:function(){this.$router.push({name:"packages-show",params:{id:this.request.id}})},edit_request:function(){this.$router.push({name:"packages-edit",params:{id:this.request.id}})},delete_request:function(){var t=this;window.confirm("Do you really want to delete?")&&(this.isLoading=!0,this.errorMessage=null,n["d"].collection("requests").doc(this.request.id).delete().then((function(){t.isLoading=!1,t.errorMessage=null,console.log("User successfully deleted!"),t.$emit("requestdeleted",t.request.id)})).catch((function(e){t.isLoading=!1,t.errorMessage=null,console.log("error",e)})))},load_request:function(t){var e=this;this.isLoading=!0,this.errorMessage=null,n["d"].collection("requests").doc(t).get().then((function(t){e.isLoading=!1,e.errorMessage=null,e.$emit("requestupdated",Object(r["a"])({id:t.id},t.data()))})).catch((function(t){e.isLoading=!1,e.errorMessage=t,console.log("error",t)}))}}},u=d,p=(s("44f7"),s("2877")),h=Object(p["a"])(u,o,c,!1,null,"d9e00ae2",null),_=h.exports,f={components:{itemComponent:_},data:function(){return{requests:[],first_created_at:null,last_created_at:null,limit:20,lastQuerySize:!1,errorMessage:null,isLoading:!1}},computed:{total:function(){return this.requests.length}},watch:{$route:function(){this.requests=[],this.first_created_at=null,this.last_created_at=null,this.limit=20,this.lastQuerySize=!1,this.errorMessage=null,this.isLoading=!1,this.smart_load_requests()}},created:function(){this.smart_load_requests()},methods:{tray_again:function(){this.isLoading=!1,this.errorMessage=null},requestupdated:function(t){console.log("requestupdated",t);var e=this.requests.find((function(e){return e.id===t.id}));console.log("found",e),this.$set(this.requests,this.requests.indexOf(e),t)},delete_request_by_id:function(t){var e=this.requests.find((function(e){return e.id===t}));e&&this.requests.splice(this.requests.indexOf(e),1)},add_request:function(t){this.delete_request_by_id(t.id),this.requests.push(t),this.smart_load_update_created_at(t)},smart_load_update_created_at:function(t){var e=t.created_at;e&&((!this.last_created_at||this.last_created_at.toDate()>e.toDate())&&(this.last_created_at=e),(!this.first_created_at||this.first_created_at.toDate()<e.toDate())&&(this.first_created_at=e))},getQuery:function(){var t=n["d"].collection("requests");return t=t.orderBy("created_at","desc"),t},smart_load_requests:function(){var t=this;this.isLoading=!0,this.errorMessage=null;var e=this.getQuery();this.last_created_at&&(e=e.where("created_at","<",this.last_created_at)),e.limit(this.limit).get().then((function(e){t.isLoading=!1,t.errorMessage=null,console.log("Packages successfully loaded!"),e.docs.forEach((function(e){t.add_request(Object(r["a"])({id:e.id},e.data()))})),t.smart_load_new_requests(),t.lastQuerySize=e.docs.length})).catch((function(e){t.isLoading=!1,t.errorMessage=null,console.log("error",e)}))},smart_load_new_requests:function(){var t=this;this.isLoading=!0,this.errorMessage=null;var e=this.getQuery();this.first_created_at&&(e=e.where("created_at",">",this.first_created_at)),e.limit(this.limit).get().then((function(e){t.isLoading=!1,t.errorMessage=null,console.log("Packages successfully loaded!"),e.docs.forEach((function(e){t.add_request(Object(r["a"])({id:e.id},e.data()))}))})).catch((function(e){t.isLoading=!1,t.errorMessage=null,console.log("error",e)}))},create_request:function(){this.$router.push({name:"requests-create"})},show_request:function(t){this.$router.push({name:"requests-show",params:{id:t.id}})},update_request:function(t){this.$router.push({name:"requests-edit",params:{id:t.id}})},delete_request:function(t){var e=this;window.confirm("Do you really want to delete?")&&(this.isLoading=!0,this.errorMessage=null,n["d"].collection("requests").doc(t.id).delete().then((function(){e.isLoading=!1,e.errorMessage=null,console.log("Package successfully deleted!"),e.requests.splice(e.requests.indexOf(t),1)})).catch((function(t){e.isLoading=!1,e.errorMessage=null,console.log("error",t)})))}}},g=f,m=Object(p["a"])(g,i,a,!1,null,"4d4f1215",null);e["default"]=m.exports},b64b:function(t,e,s){var i=s("23e7"),a=s("7b0b"),r=s("df75"),n=s("d039"),o=n((function(){r(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return r(a(t))}})},dbb4:function(t,e,s){var i=s("23e7"),a=s("83ab"),r=s("56ef"),n=s("fc6a"),o=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=n(t),a=o.f,l=r(i),d={},u=0;while(l.length>u)s=a(i,e=l[u++]),void 0!==s&&c(d,e,s);return d}})},e439:function(t,e,s){var i=s("23e7"),a=s("d039"),r=s("fc6a"),n=s("06cf").f,o=s("83ab"),c=a((function(){n(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return n(r(t),e)}})}}]);
//# sourceMappingURL=chunk-34db8442.4fc4b29e.js.map