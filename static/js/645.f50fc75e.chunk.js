"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{1645:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var r=n(2791),a=n(9434),o=n(3920),c=n(6812),i=function(t){return t.contactsFilter.contacts.items},u=function(t){return t.contactsFilter.contacts.isLoading},s=function(t){return t.contactsFilter.contacts.error},l=function(t){return t.contactsFilter.filter},f=n(9439),d="form_addBtn__e5usp",m="form_item__MBKL1",h=n(184);function v(t){var e=t.contacts,n=t.onAddContact,a=(0,r.useState)(""),o=(0,f.Z)(a,2),c=o[0],i=o[1],u=(0,r.useState)(""),s=(0,f.Z)(u,2),l=s[0],m=s[1],v=function(t){"name"===t.target.name?i(t.target.value):"number"===t.target.name&&m(t.target.value)};return(0,h.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),""!==c.trim()&&""!==l.trim())&&(e.some((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):(n(c,l),i(""),m("")),t.currentTarget.reset())},children:[(0,h.jsx)("p",{children:"Name"}),(0,h.jsx)("input",{type:"text",name:"name",value:c,onChange:v,placeholder:"Name",required:!0}),(0,h.jsx)("p",{children:"Phone"}),(0,h.jsx)("input",{type:"tel",name:"number",value:l,onChange:v,placeholder:"Phone Number",required:!0}),(0,h.jsx)("button",{type:"submit",className:d,children:"Add Contact"})]})}function x(t){var e=t.filter,n=t.onFilterChange;return(0,h.jsx)("input",{type:"text",value:e,onChange:function(t){n(t.target.value)},placeholder:"Search contacts by name"})}function p(t){var e=t.contacts,n=t.onDeleteContact;return(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:e.map((function(t){return(0,h.jsxs)("li",{className:m,children:[t.name,": ",t.number,(0,h.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})}var j=function(){var t=(0,a.I0)(),e=(0,a.v9)(i),n=(0,a.v9)(u),f=(0,a.v9)(s),d=(0,a.v9)(l);(0,r.useEffect)((function(){t((0,c.yF)())}),[t]);var m=function(){var t=d.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(v,{onAddContact:function(e,n){var r={name:e,number:n};t((0,c.Gf)(r))},contacts:e}),(0,h.jsx)("h2",{children:"Contacts"}),n&&(0,h.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),f&&(0,h.jsx)("h1",{children:f}),(0,h.jsx)(x,{filter:d,onFilterChange:function(e){t((0,c.Tv)(e))}}),(0,h.jsx)(p,{contacts:m,onDeleteContact:function(e){t((0,c._f)(e))}})]})}}}]);
//# sourceMappingURL=645.f50fc75e.chunk.js.map