(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[16],{36:function(e,a,t){"use strict";var s=t(38),c=t(13),n=t(12),r=t(15),i=t(16),l=t(0),d=t.n(l),b=t(25),j=t(3),o=function(){var e=localStorage.getItem("role"),a=localStorage.getItem("email"),t=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:a})}),Object(j.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(j.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(j.jsxs)(b.b,{className:"dropdown-item",to:"/my-profile",children:[Object(j.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(j.jsx)("div",{className:"dropdown-divider"}),Object(j.jsxs)(b.b,{className:"dropdown-item",onClick:t,children:[Object(j.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},m=(t(41),t(42)),h=t.n(m),u=t(2),O=function(){var e=localStorage.getItem("role"),a=Object(u.m)();return"Admin"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(b.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/user-list",children:[Object(j.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/create-user",children:[Object(j.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/transaction",children:[Object(j.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/system-balance",children:[Object(j.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(b.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/deposit",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(b.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/send-money",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/user-limit",children:[Object(j.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(b.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(b.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void a("/login")},x=t(43);a.a=function(e){return function(a){Object(r.a)(l,a);var t=Object(i.a)(l);function l(e){var a;return Object(c.a)(this,l),(a=t.call(this,e)).handleParentData=function(e){console.log(e)},a.state={pageLoaded:!1,saveLeadClickEvent:""},a}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(j.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(j.jsx)(o,{}),Object(j.jsx)("div",{className:"container-fluid content-container",children:Object(j.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(j.jsx)("div",{className:"loading-page",children:Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)("button",{onClick:function(a){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.renderHtml()})}}]),l}(d.a.Component)}},91:function(e,a,t){"use strict";t.r(a);var s=t(4),c=t(7),n=t(5),r=t(0),i=t(36),l=t(94),d=t(39),b=t.n(d),j=t(3);a.default=Object(i.a)((function(){var e=Object(r.useState)(null),a=Object(n.a)(e,2),t=a[0],i=a[1],d=t?t.toLocaleString("en-US"):"";return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(Object(s.a)().mark((function e(){var a,t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},t={headers:a},e.prev=2,e.next=5,l.a.get("/transaction/balance/SYSTEM",t);case 5:c=e.sent,console.log(c.data.balance),i(c.data.balance),e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(2),401!==e.t0.response.status){e.next=15;break}return window.location.href="/login",e.abrupt("return");case 15:b.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 16:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("h3",{children:["This is Our System Balance: ",d," TK"]})})})})}))}}]);
//# sourceMappingURL=16.50337e90.chunk.js.map