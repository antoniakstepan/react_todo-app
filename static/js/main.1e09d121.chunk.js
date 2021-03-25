(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),l=n.n(o),r=(n(14),n(15),n(16),n(2)),i=n(5),u=n(1),m=function(e){var t=e.onAddTodo,n=Object(a.useState)(""),o=Object(u.a)(n,2),l=o[0],r=o[1];return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){if(""!==l){var n={id:"".concat(+new Date),title:l,completed:!1};t(n),r("")}}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:l,onChange:function(e){r(e.target.value)}})))},d=n(8),s=n.n(d),f=function(e){var t=e.todo,n=e.onCheckedTodos,o=e.onDelete,l=e.onEditTodo,i=Object(a.useState)(t.title),m=Object(u.a)(i,2),d=m[0],f=m[1],p=Object(a.useState)(!1),E=Object(u.a)(p,2),b=E[0],h=E[1];return c.a.createElement("li",{className:s()({completed:t.completed,editing:b})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){n(Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}))}}),c.a.createElement("label",{onDoubleClick:function(){return h(!0)}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(t.id)}})),c.a.createElement("input",{type:"text",className:"edit",value:d,onChange:function(e){f(e.target.value)},onKeyPress:function(e){if("Enter"===e.key){if(!d)return f(t.title),void h(!1);var n=Object(r.a)(Object(r.a)({},t),{},{title:d});l(n),h(!1)}},onKeyDown:function(e){"Escape"===e.key&&(f(t.title),h(!1))}}))};function p(e){var t=e.todos,n=e.onCheckedTodos,a=e.onDelete,o=e.onEditTodo;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(f,{key:e.id,todo:e,onCheckedTodos:n,onDelete:a,onEditTodo:o})})))}function E(e){var t=e.checkCompeted,n=e.onFilter,a=e.handleClearCompleted;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"todo-count"},"".concat(t," items left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",name:"All",className:"selected",onClick:function(e){return n(e.target.name)}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",name:"active",onClick:function(e){return n(e.target.name)}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{name:"completed",href:"#/completed",onClick:function(e){return n(e.target.name)}},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))}var b=function(e){var t=e.checkCompeted,n=e.onToggleTodos,o=!t,l=Object(a.useState)(!1),r=Object(u.a)(l,2),i=r[0],m=r[1];Object(a.useEffect)((function(){m(o)}),[o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){m(!i),n(!i)},checked:i}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))};var h=function(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(u.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[o,e]),[o,l]}("todos",[]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),s=d[0],f=d[1];Object(a.useEffect)((function(){f(n)}),[n]);var h=n.filter((function(e){return!e.completed})).length;return c.a.createElement("section",{className:"todoapp"},c.a.createElement(m,{onAddTodo:function(e){o([].concat(Object(i.a)(n),[e]))}}),c.a.createElement("section",{className:"main"},n.length>0&&c.a.createElement(b,{checkCompeted:h,onToggleTodos:function(e){o(n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e})})))}}),c.a.createElement(p,{todos:s,onCheckedTodos:function(e){var t=n.map((function(t){return t.id===e.id?e:t}));o(t)},onDelete:function(e){o(n.filter((function(t){return t.id!==e})))},onEditTodo:function(e){o(n.map((function(t){return t.id===e.id?e:t})))}})),n.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement(E,{checkCompeted:h,onFilter:function(e){var t;switch(e){case"active":t=n.filter((function(e){return!e.completed}));break;case"completed":t=n.filter((function(e){return e.completed}));break;default:t=Object(i.a)(n)}f(t)},handleClearCompleted:function(){o(n.filter((function(e){return!e.completed})))}})))};l.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1e09d121.chunk.js.map