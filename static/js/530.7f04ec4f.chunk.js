"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{1530:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(2791),r=t(9434),s=t(4270),u=t(8427),i="Task_wrapper__zvx3s",c="Task_text__IwwM2",l="Task_button__dYLbw",o=t(184),d=function(e){var n=e.id,t=e.name,a=e.number,s=(0,r.I0)();return(0,o.jsxs)("div",{className:i,children:[(0,o.jsxs)("p",{className:c,children:[t,": ",a," "]}),(0,o.jsx)("button",{type:"button",className:l,onClick:function(){return s((0,u._5)(n))},children:"Delete"})]})},m="TaskList_list__Q1M-x",h=t(4159),x=function(){var e=(0,h.g)(),n=e.filterContacts,t=e.contacts,a=null===n||void 0===n?void 0:n.toLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return(0,o.jsx)("ul",{className:m,children:r.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,o.jsx)("li",{children:(0,o.jsx)(d,{id:n,name:t,number:a})},n)}))})},p=t(9439),v=t(6382),f=t(2553),j=t(1728),b=function(){var e=(0,r.I0)(),n=(0,a.useState)(""),t=(0,p.Z)(n,2),s=t[0],u=t[1];return(0,o.jsx)("label",{children:(0,o.jsx)("input",{type:"text",value:s,onChange:function(n){u(n.target.value),e((0,j.W)(n.target.value))},placeholder:"name or number"})})};function _(){var e=(0,a.useState)(""),n=(0,p.Z)(e,2),t=n[0],s=n[1],i=(0,a.useState)(""),c=(0,p.Z)(i,2),l=c[0],d=c[1],m=(0,r.I0)(),h=(0,r.v9)(f.jF),x=function(e){var n=e.target.name,t=e.target.value;"name"===n&&s(t),"number"===n&&d(t)},j=function(e,n){var t={id:(0,v.x0)(),name:e,number:n};_(t)},_=function(e){h.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("\u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name,"\u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")):(m((0,u.gI)(e)),g())},g=function(){s(""),d("")};return(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.name.value,t=e.target.number.value;j(n,t)},children:[(0,o.jsx)(o.Fragment,{children:" Name "}),(0,o.jsx)("input",{name:"name",type:"text",value:t,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,o.jsx)("p",{children:" Number "}),(0,o.jsx)("input",{name:"number",type:"tel",value:l,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})})]}),(0,o.jsx)("p",{children:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,o.jsx)(b,{})]})}function g(){var e=(0,r.I0)(),n=(0,r.v9)(f.NH);return(0,a.useEffect)((function(){e((0,u.Jv)())}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.q,{children:(0,o.jsx)("title",{children:"Your tasks"})}),(0,o.jsx)(_,{}),(0,o.jsx)("div",{children:n&&"Request in progress..."}),(0,o.jsx)(x,{})]})}}}]);
//# sourceMappingURL=530.7f04ec4f.chunk.js.map