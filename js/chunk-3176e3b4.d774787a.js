(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3176e3b4"],{"159b":function(t,e,o){var r=o("da84"),n=o("fdbc"),s=o("785a"),a=o("17c2"),i=o("9112"),c=function(t){if(t&&t.forEach!==a)try{i(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in n)n[u]&&c(r[u]&&r[u].prototype);c(s)},"17c2":function(t,e,o){"use strict";var r=o("b727").forEach,n=o("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},5530:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));o("b64b"),o("a4d3"),o("4de4"),o("e439"),o("159b"),o("dbb4");function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}},a640:function(t,e,o){"use strict";var r=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&r((function(){o.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,o){var r=o("23e7"),n=o("7b0b"),s=o("df75"),a=o("d039"),i=a((function(){s(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return s(n(t))}})},dbb4:function(t,e,o){var r=o("23e7"),n=o("83ab"),s=o("56ef"),a=o("fc6a"),i=o("06cf"),c=o("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,o,r=a(t),n=i.f,u=s(r),l={},p=0;while(u.length>p)o=n(r,e=u[p++]),void 0!==o&&c(l,e,o);return l}})},e439:function(t,e,o){var r=o("23e7"),n=o("d039"),s=o("fc6a"),a=o("06cf").f,i=o("83ab"),c=n((function(){a(1)})),u=!i||c;r({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(s(t),e)}})},fcaf:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container p-4"},[o("h2",[t._v("Posts")]),o("div",{staticClass:"text-end mb-2"},[o("button",{staticClass:"btn btn-outline-secondary ms-1",on:{click:function(e){return t.show_all_post()}}},[o("i",{staticClass:"bi-eye me-1"}),t._v(" Show All Post ")])]),o("form",{on:{submit:function(e){return e.preventDefault(),t.update_post.apply(null,arguments)}}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("Modifier un Post #"+t._s(t.id))]),o("div",{staticClass:"card-body"},[t.errorMessage?o("div",{staticClass:"text-center text-warning"},[t._v(" "+t._s(t.errorMessage)+" "),o("hr"),o("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"button"},on:{click:t.tray_again}},[t._v("Réessayer")])]):t.isLoading?o("loading-compoenent"):o("div",[o("div",{staticClass:"form-group py-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Titre *",required:""},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),o("div",{staticClass:"form-group py-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Author"},domProps:{value:t.post.author},on:{input:function(e){e.target.composing||t.$set(t.post,"author",e.target.value)}}})]),o("div",{staticClass:"form-group py-1"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],staticClass:"form-control",attrs:{placeholder:"Content *",required:"",rows:"10"},domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value)}}})])])],1),t.errorMessage||t.isLoading?t._e():o("div",{staticClass:"card-footer text-center"},[t._m(0)])])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[o("i",{staticClass:"bi-file-earmark-check me-1"}),t._v(" Save ")])}],s=o("5530"),a=o("f9f2"),i={components:{},data:function(){return{id:null,post:{title:"",author:"",content:""},errorMessage:null,isLoading:!1}},created:function(){this.id=this.$route.params.id,this.load_post(this.id)},methods:{show_all_post:function(){this.$router.push({name:"posts-index"})},tray_again:function(){this.isLoading=!1,this.errorMessage=null},load_post:function(t){var e=this;this.isLoading=!0,this.errorMessage=null,a["d"].collection("posts").doc(t).get().then((function(t){e.isLoading=!1,e.errorMessage=null,e.post=t.data()})).catch((function(t){e.isLoading=!1,e.errorMessage=t,console.log("error",t)}))},update_post:function(){var t=this;this.isLoading=!0,this.errorMessage=null;var e=a["a"].serverTimestamp(),o=Object(s["a"])(Object(s["a"])({},this.post),{},{modified_at:e});a["d"].collection("posts").doc(this.id).update(o).then((function(){t.isLoading=!1,t.errorMessage=null,console.log("Post successfully updated!"),t.$router.push({name:"posts-index"})})).catch((function(e){t.isLoading=!1,t.errorMessage=e,console.log("error",e)}))}}},c=i,u=o("2877"),l=Object(u["a"])(c,r,n,!1,null,"1237c8d2",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3176e3b4.d774787a.js.map