(this["webpackJsonptechnical-task"]=this["webpackJsonptechnical-task"]||[]).push([[0],{218:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),i=n.n(s),o=(n(93),n(1)),r=n(6),j=n(33),u=n.n(j),d=n(46),b=n(79),l=n(16),h=n(85),p=n(36),m=n(35),O=n.n(m),x=n(2),f=p.a().shape({name:p.b().required(),text:p.b().required()});function g(e){var t,n;Object(b.a)(e);var a=Object(l.d)({resolver:Object(h.a)(f)}),c=a.register,s=a.handleSubmit,i=a.formState.errors,o=a.reset;return Object(x.jsx)("div",{className:O.a.container,children:Object(x.jsxs)("form",{onSubmit:s((function(e){u.a.post("https://jordan.ashton.fashion/api/goods/30/comments",{name:e.name,text:e.text}).then((function(e){console.log(e.status)})),o()})),children:[Object(x.jsxs)("div",{className:O.a.name,children:[Object(x.jsx)("h3",{children:"Write your name"}),Object(x.jsx)("input",Object(d.a)({},c("name",{required:!0}))),Object(x.jsx)("p",{children:null===(t=i.name)||void 0===t?void 0:t.message})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Write your text"}),Object(x.jsx)("input",Object(d.a)({},c("text",{required:!0}))),Object(x.jsx)("p",{children:null===(n=i.text)||void 0===n?void 0:n.message})]}),Object(x.jsx)("div",{className:O.a.submit,children:Object(x.jsx)("input",{type:"submit",value:"Submit"})})]})})}var v=n(83),_=n.n(v);function C(e){var t=e.state,n=void 0===t?[]:t;return Object(x.jsxs)("div",{className:_.a.container,children:[Object(x.jsx)("h3",{children:"Comments"}),n&&n.length>0?n.map((function(e){return Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Name: ",e.name]}),Object(x.jsxs)("li",{children:["Text: ",e.text]})]},e.id)})):"Data has not been loaded yet"]})}var S=n(234),F=function(e){var t=e.onPageChange,n=e.pagesCount,a=e.page;return Object(x.jsx)("div",{style:{margin:"40px"},children:Object(x.jsx)(S.a,{count:n,page:a,color:"secondary",variant:"outlined",shape:"rounded",siblingCount:2,onChange:function(e,n){t(n)}})})},y=n(48),N=n.n(y);var k=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(1),i=Object(r.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(1),l=Object(r.a)(b,2),h=l[0],p=l[1];return Object(a.useEffect)((function(){u.a.get("https://jordan.ashton.fashion/api/goods/30/comments?page=".concat(j)).then((function(e){c(Object(o.a)(e.data.data)),p(e.data.last_page)}))}),[j,n]),Object(x.jsxs)("div",{className:N.a.app,children:[Object(x.jsx)(g,{}),Object(x.jsx)(C,{state:n}),Object(x.jsxs)("div",{className:N.a.footer,children:[j>=h?null:Object(x.jsx)("button",{onClick:function(){d(j+1)},children:"More Pages"}),Object(x.jsx)(F,{pagesCount:h,onPageChange:function(e){d(e)},page:j})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),P()},35:function(e,t,n){e.exports={container:"inputForm_container__6O09V",name:"inputForm_name__3cjr7",submit:"inputForm_submit__2YaF6"}},48:function(e,t,n){e.exports={app:"App_app__222bo",footer:"App_footer__2X6Yf"}},83:function(e,t,n){e.exports={container:"mapping_container__MfIlT"}},93:function(e,t,n){}},[[218,1,2]]]);
//# sourceMappingURL=main.c23e9bf1.chunk.js.map