(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[5],{36:function(e,a,t){"use strict";var s=t(38),c=t(13),r=t(12),n=t(15),l=t(16),i=t(0),d=t.n(i),o=t(25),b=t(3),j=function(){var e=localStorage.getItem("role"),a=localStorage.getItem("email"),t=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:a})}),Object(b.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(b.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(b.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(b.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(b.jsxs)(o.b,{className:"dropdown-item",to:"/my-profile",children:[Object(b.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(b.jsx)("div",{className:"dropdown-divider"}),Object(b.jsxs)(o.b,{className:"dropdown-item",onClick:t,children:[Object(b.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},m=(t(41),t(42)),u=t.n(m),h=t(2),O=function(){var e=localStorage.getItem("role"),a=Object(h.m)();return"Admin"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/user-list",children:[Object(b.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/create-user",children:[Object(b.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/transaction",children:[Object(b.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/system-balance",children:[Object(b.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/deposit",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/send-money",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/user-limit",children:[Object(b.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void a("/login")},x=t(43);a.a=function(e){return function(a){Object(n.a)(i,a);var t=Object(l.a)(i);function i(e){var a;return Object(c.a)(this,i),(a=t.call(this,e)).handleParentData=function(e){console.log(e)},a.state={pageLoaded:!1,saveLeadClickEvent:""},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"container-fluid content-container",children:Object(b.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsx)("button",{onClick:function(a){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.renderHtml()})}}]),i}(d.a.Component)}},48:function(e,a,t){},51:function(e,a,t){"use strict";var s=t(38),c=t(13),r=t(12),n=t(15),l=t(16),i=t(0),d=t.n(i),o=t(36),b=(t(48),t(3));a.a=function(e){var a=function(a){Object(n.a)(i,a);var t=Object(l.a)(i);function i(e){var a;return Object(c.a)(this,i),(a=t.call(this,e)).state={},a}return Object(r.a)(i,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"profile",children:Object(b.jsx)("div",{className:"profile-content",children:Object(b.jsx)(e,Object(s.a)({},this.props))})})})}}]),i}(d.a.Component);return Object(o.a)(a)}},89:function(e,a,t){"use strict";t.r(a);var s=t(4),c=t(7),r=t(5),n=t(0),l=t(51),i=t(91),d=t(39),o=t.n(d),b=t(3);a.default=Object(l.a)((function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],l=a[1],d=Object(n.useState)(""),j=Object(r.a)(d,2),m=j[0],u=j[1],h=Object(n.useState)(""),O=Object(r.a)(h,2),x=O[0],p=O[1],f=Object(n.useState)(""),N=Object(r.a)(f,2),v=N[0],g=N[1],w=Object(n.useState)(""),y=Object(r.a)(w,2),S=y[0],k=y[1],C=Object(n.useState)(""),D=Object(r.a)(C,2),P=D[0],A=D[1],I=Object(n.useState)(""),L=Object(r.a)(I,2),E=L[0],M=L[1];Object(n.useEffect)((function(){function e(){return(e=Object(c.a)(Object(s.a)().mark((function e(){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=JSON.parse(localStorage.getItem("user")))&&(u(a.name),p(a.email),g(a.password),k(a.phone_number),A(a.nid),M(a.role),l(a.id));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]);var q=function(){var e=Object(c.a)(Object(s.a)().mark((function e(a){var c,r,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c={name:m,email:x,password:v,phone_number:S,nid:P,role:E},r={headers:{Authorization:"".concat(localStorage.getItem("token")),"X-Auth-Secret-Key":"ROADTOSDET"}},e.prev=3,e.next=6,i.a.put("/user/update/".concat(t),c,r);case 6:n=e.sent,console.log(n.data),localStorage.setItem("user",JSON.stringify(n.data.user)),o.a.fire("Successfuly update the user!","success"),e.next=18;break;case 12:if(e.prev=12,e.t0=e.catch(3),401!==e.t0.response.status){e.next=17;break}return window.location.href="/login",e.abrupt("return");case 17:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"my-3 p-3 bg-body rounded shadow-sm",children:[Object(b.jsx)("h6",{className:"border-bottom pb-2 mb-0 mb-3",children:"My Profile"}),Object(b.jsxs)("form",{onSubmit:q,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Name"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",value:m,onChange:function(e){return u(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Email address"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",value:x,onChange:function(e){return p(e.target.value)},required:!0})})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Password"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:v,onChange:function(e){return g(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Phone Number"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone Number",name:"phoneNumber",value:S,onChange:function(e){return k(e.target.value)},required:!0})})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"NID"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"NID",name:"nid",value:P,onChange:function(e){return A(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Role"}),Object(b.jsx)("input",{type:"text",className:"form-control",value:E,readOnly:!0})]})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-default",children:"Update"})]})]})})}))}}]);
//# sourceMappingURL=5.697c0d07.chunk.js.map