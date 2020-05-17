(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(4),u=n(1),s=(n(15),n(6)),m=n.n(s),i=n(5),d=n(9),f=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}))]);case 2:return t=e.sent,n=Object(u.a)(t,2),a=n[0],r=n[1],c=a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:Object(i.a)({},r.find((function(t){return t.id===e.userId})))})})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){var t=e.user;return r.a.createElement("td",{className:"users"},t.name)},E=function(e){var t=e.todo,n=t.title,a=t.completed,c=t.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"title"},n),r.a.createElement("td",{className:"status"},a?"yes":"no"),r.a.createElement(p,{user:c}))},h=function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("tr",{key:e.id,className:"todo"},r.a.createElement(E,{todo:e}))})))},b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(u.a)(o,2),m=s[0],i=s[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),E=p[0],b=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of TODOs"),m?r.a.createElement("table",{className:"App"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("a",{href:"#/Todos",onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)}));c(e)}},"Todos")),r.a.createElement("th",null,r.a.createElement("a",{href:"#/Completed",onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return+e.completed-+t.completed}));c(e)}},"Is completed")),r.a.createElement("th",null,r.a.createElement("a",{href:"#/Users",onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}));c(e)}},"Users")))),r.a.createElement("tbody",null,r.a.createElement(h,{todos:n}))):r.a.createElement("button",{type:"button",onClick:function(){b(!0),setTimeout((function(){i(!m),f().then((function(e){c(e),b(!0)}))}),1e3)}},E?"Loading...":"Load"))};o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b9c17ca8.chunk.js.map