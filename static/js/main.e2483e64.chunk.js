(this.webpackJsonpzounoku=this.webpackJsonpzounoku||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(18),a=n.n(r),j=n(4),o=n(8),u=n(2),l=(n(26),n(20));n(27);function d(e){var t=e.episodeCount,n=e.episodeLength,i=e.image,r=e.title,a=e.genre,o=e.rating,u=e.subtype,l=e.startDate,d=e.status,b=e.studio,h=e.synopsis,O=e.type,p=e.userCount,x=function(e,t){var n=Object(s.useState)([]),c=Object(j.a)(n,2),i=c[0],r=c[1],a=Object(s.useState)(""),o=Object(j.a)(a,2),u=o[0],l=o[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){r(e.data)})),fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.data.length-1;return e.data[t].relationships.company.links.related})).catch((function(e){l("")})).then((function(e){return fetch(e)})).then((function(e){return e.json()})).then((function(e){return l(e.data.attributes.name)}))}),[]),[i,r,u,l]}(a,b),f=Object(j.a)(x,4),g=f[0],m=(f[1],f[2]);f[3];return Object(c.jsxs)("div",{className:"parent",children:[Object(c.jsxs)("div",{className:"top",children:[Object(c.jsx)("div",{children:Object(c.jsx)("a",{id:"title",href:"",children:r})}),Object(c.jsx)("div",{className:"genres",children:Object(c.jsx)("ul",{children:g.map((function(e){return a=e.attributes.name,Object(c.jsx)("li",{children:Object(c.jsx)("a",{id:"genre",children:a})})}))})}),Object(c.jsxs)("div",{className:"horizontal",children:[m.length>0&&Object(c.jsxs)("p",{id:"studio",children:[m," |"]}),typeof t&&"number"==typeof n&&Object(c.jsxs)("p",{id:"episode",children:[t," eps x ",n," min |"]}),Object(c.jsx)("p",{id:"type",style:{color:"rgb(93, 87, 87)"},children:O})]})]}),Object(c.jsxs)("div",{className:"mid",children:[Object(c.jsx)("img",{src:i}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"status",children:Object(c.jsx)("p",{children:d})}),Object(c.jsx)("p",{id:"synopsis",children:h})]})]}),Object(c.jsxs)("div",{className:"below",children:[Object(c.jsxs)("p",{id:"subtype",children:[u," - ",l]}),Object(c.jsxs)("p",{id:"rating",children:["\u2b50 ",o]}),Object(c.jsxs)("p",{id:"userCount",children:["\u2659 ",p]})]})]})}var b="https://kitsu.io/api/edge",h="?&page[limit]=12&page[offset]=";n(28),n(29);function O(e){var t=e.handlePagination,n=e.currentPage,s="button ";return s+=1==n?"unclickable-page":"page",Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)(o.b,{className:s,onClick:function(){return t(0)},children:Object(c.jsx)("p",{children:"Prev"})}),Object(c.jsx)(o.b,{className:"button unclickable-page index-page",onClick:function(){return t(0)},children:Object(c.jsx)("p",{children:n})}),Object(c.jsx)(o.b,{className:"button page",onClick:function(){return t(1)},children:Object(c.jsx)("p",{children:"Next"})})]})}function p(e){var t=e.type,n=Object(s.useRef)(""),i=Object(s.useState)(""),r=Object(j.a)(i,2),a=r[0],o=r[1],u=Object(s.useState)(""),p=Object(j.a)(u,2),x=p[0],f=p[1],g=Object(s.useState)(1),m=Object(j.a)(g,2),v=m[0],y=m[1],N=Object(s.useState)(["prev"].concat(Object(l.a)(Array.from({length:10},(function(e,t){return t+1}))),["next"])),k=Object(j.a)(N,2),C=(k[0],k[1],function(e,t,n){var c=Object(s.useState)([]),i=Object(j.a)(c,2),r=i[0],a=i[1];return Object(s.useEffect)((function(){fetch(b+e+h+n).then((function(e){return e.json()})).then((function(e){a(e.data)}))}),[]),Object(s.useEffect)((function(){fetch(""==t?b+e+h:b+e+"?filter[text]="+t).then((function(e){return e.json()})).then((function(e){a(e.data)}))}),[t]),Object(s.useEffect)((function(){fetch(b+e+h+10*n).then((function(e){return e.json()})).then((function(e){a(e.data)}))}),[n]),[r,a]}(t,a,v)),S=Object(j.a)(C,2),w=S[0];S[1];return Object(c.jsxs)("div",{className:"content-page",children:[Object(c.jsxs)("div",{className:"content-filter",children:[Object(c.jsxs)("div",{className:"option-search",children:[Object(c.jsx)("label",{htmlFor:"sort-by",children:"Sort by:"}),Object(c.jsxs)("select",{id:"sort-by",value:x,onChange:function(e){f(e.target.value)},children:[Object(c.jsx)("option",{value:"",children:"Average User Rating"}),Object(c.jsx)("option",{value:"/trending/anime",children:"Trending Anime"})]})]}),Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search...",ref:n}),Object(c.jsx)("button",{onClick:function(){var e=n.current.value;e!=a&&o(e)},children:"Search"})]})]}),Object(c.jsx)("div",{className:"content-container",children:w.map((function(e){var t,n=e.id,s=e.relationships.genres.links.related,i=e.relationships.productions.links.related,r=e.type,a=e.attributes,j=a.episodeCount,o=a.episodeLength,u=a.titles.en_jp,l=a.averageRating,b=(t=a.startDate,new Date(t).toString().split(" ").slice(1,4).join(" ")),h=a.status,O=a.subtype,p=a.synopsis,x=a.userCount,f=a.posterImage.small;return Object(c.jsx)(d,{episodeCount:j,episodeLength:o,image:f,title:u,genre:s,rating:l,subtype:O,startDate:b,status:h,studio:i,synopsis:p,type:r,userCount:x},n)}))}),Object(c.jsx)(O,{handlePagination:function(e){0==e?y(v-1):1==e&&y(v+1)},currentPage:v})]})}function x(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{type:"/anime"})})}function f(){return Object(c.jsx)("div",{children:Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{type:"/manga"})})})}n(35);var g=[{to:"/anime",show:"Anime"},{to:"/manga",show:"Manga"}];function m(e){var t=e.setcontentType,n=Object(s.useState)(0),i=Object(j.a)(n,2),r=i[0],a=i[1];return Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("h4",{onClick:function(){return a(-1)},children:"ZOUNOKU"})})}),Object(c.jsx)("div",{className:"pages",children:Object(c.jsx)("ul",{children:g.map((function(e,n){var s=n==r?"underlined":"";return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.to,children:Object(c.jsx)("div",{className:"links "+s,onClick:function(){return function(e){a(e),t(g[e].to)}(n)},children:e.show})})},n)}))})})]})}var v=function(){var e=Object(s.useState)("/anime"),t=Object(j.a)(e,2),n=(t[0],t[1]);return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(m,{setcontentType:n}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0}),Object(c.jsx)(u.a,{path:"/anime",children:Object(c.jsx)(x,{})}),Object(c.jsx)(u.a,{path:"/manga",children:Object(c.jsx)(f,{})})]})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e2483e64.chunk.js.map