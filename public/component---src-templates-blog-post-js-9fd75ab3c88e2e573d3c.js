(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return y});var i=n(147),M=n.n(i),a=n(0),u=n.n(a),r=n(160),c=n.n(r),I=n(145),L=n(158),g=n(161);function N(){var t=M()(["\n  code {\n    display: block;\n  }\n\n  img {\n    display: block;\n    margin: 10px auto;\n  }\n"]);return N=function(){return t},t}e.default=function(t){var e=t.data.markdownRemark;return u.a.createElement(L.a,null,u.a.createElement(c.a,{title:"Shakhor | "+e.frontmatter.title,meta:[{name:"description",content:"Shakhor Smith | Software Engineer"},{name:"keywords",content:"shakhor, shakhor smith"}]}),u.a.createElement(j,null),u.a.createElement(g.b,null,e.frontmatter.title),u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))};var y="3498585245",j=Object(I.a)(N())},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return j}),n.d(e,"StaticQueryContext",function(){return N}),n.d(e,"StaticQuery",function(){return y});var i=n(0),M=n.n(i),a=n(4),u=n.n(a),r=n(146),c=n.n(r);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return r.withPrefix}),n.d(e,"navigate",function(){return r.navigate}),n.d(e,"push",function(){return r.push}),n.d(e,"replace",function(){return r.replace}),n.d(e,"navigateTo",function(){return r.navigateTo});var I=n(150),L=n.n(I);n.d(e,"PageRenderer",function(){return L.a});var g=n(34);n.d(e,"parsePath",function(){return g.a});var N=M.a.createContext({}),y=function(t){return M.a.createElement(N.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):M.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},149:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(75),n(50),n(164),n(49);var i=n(145),M={desktop:992,tablet:768,mobile:580},a=Object.keys(M).reduce(function(t,e){return t[e]=function(){return Object(i.b)(["@media (max-width:","em){","}"],M[e]/16,i.b.apply(void 0,arguments))},t},{})},150:function(t,e,n){var i;t.exports=(i=n(153))&&i.default||i},151:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJnaXRodWIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1naXRodWIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMy4zLTUuNi0xLjMtNS42LTMuNiAwLTIgMi4zLTMuNiA1LjItMy42IDMtLjMgNS42IDEuMyA1LjYgMy42em0tMzEuMS00LjVjLS43IDIgMS4zIDQuMyA0LjMgNC45IDIuNiAxIDUuNiAwIDYuMi0ycy0xLjMtNC4zLTQuMy01LjJjLTIuNi0uNy01LjUuMy02LjIgMi4zem00NC4yLTEuN2MtMi45LjctNC45IDIuNi00LjYgNC45LjMgMiAyLjkgMy4zIDUuOSAyLjYgMi45LS43IDQuOS0yLjYgNC42LTQuNi0uMy0xLjktMy0zLjItNS45LTIuOXpNMjQ0LjggOEMxMDYuMSA4IDAgMTEzLjMgMCAyNTJjMCAxMTAuOSA2OS44IDIwNS44IDE2OS41IDIzOS4yIDEyLjggMi4zIDE3LjMtNS42IDE3LjMtMTIuMSAwLTYuMi0uMy00MC40LS4zLTYxLjQgMCAwLTcwIDE1LTg0LjctMjkuOCAwIDAtMTEuNC0yOS4xLTI3LjgtMzYuNiAwIDAtMjIuOS0xNS43IDEuNi0xNS40IDAgMCAyNC45IDIgMzguNiAyNS44IDIxLjkgMzguNiA1OC42IDI3LjUgNzIuOSAyMC45IDIuMy0xNiA4LjgtMjcuMSAxNi0zMy43LTU1LjktNi4yLTExMi4zLTE0LjMtMTEyLjMtMTEwLjUgMC0yNy41IDcuNi00MS4zIDIzLjYtNTguOS0yLjYtNi41LTExLjEtMzMuMyAyLjYtNjcuOSAyMC45LTYuNSA2OSAyNyA2OSAyNyAyMC01LjYgNDEuNS04LjUgNjIuOC04LjVzNDIuOCAyLjkgNjIuOCA4LjVjMCAwIDQ4LjEtMzMuNiA2OS0yNyAxMy43IDM0LjcgNS4yIDYxLjQgMi42IDY3LjkgMTYgMTcuNyAyNS44IDMxLjUgMjUuOCA1OC45IDAgOTYuNS01OC45IDEwNC4yLTExNC44IDExMC41IDkuMiA3LjkgMTcgMjIuOSAxNyA0Ni40IDAgMzMuNy0uMyA3NS40LS4zIDgzLjYgMCA2LjUgNC42IDE0LjQgMTcuMyAxMi4xQzQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIDQ5NiAxMTMuMyAzODMuNSA4IDI0NC44IDh6TTk3LjIgMzUyLjljLTEuMyAxLTEgMy4zLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMy4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNi43IDQuMy0uNy43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMuNy00LjMtMS4zLTYuMi0yLjItMi4zLTUuMi0yLjYtNi41LTF6bS0xMS40LTE0LjdjLTEuNiAxLTEuNiAzLjYgMCA1LjkgMS42IDIuMyA0LjMgMy4zIDUuNiAyLjMgMS42LTEuMyAxLjYtMy45IDAtNi4yLTEuNC0yLjMtNC0zLjMtNS42LTJ6Ij48L3BhdGg+PC9zdmc+"},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Shakhor Smith",menuLinks:[{name:"Blog",link:"/blog"},{name:"About Me",link:"/about"},{name:"Contact",link:"/contact"}]}}}}},153:function(t,e,n){"use strict";n.r(e);n(33);var i=n(0),M=n.n(i),a=n(4),u=n.n(a),r=n(51),c=n(2),I=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return M.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json))};I.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=I},154:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtb29uIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbW9vbiBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI4My4yMTEgNTEyYzc4Ljk2MiAwIDE1MS4wNzktMzUuOTI1IDE5OC44NTctOTQuNzkyIDcuMDY4LTguNzA4LS42MzktMjEuNDMtMTEuNTYyLTE5LjM1LTEyNC4yMDMgMjMuNjU0LTIzOC4yNjItNzEuNTc2LTIzOC4yNjItMTk2Ljk1NCAwLTcyLjIyMiAzOC42NjItMTM4LjYzNSAxMDEuNDk4LTE3NC4zOTQgOS42ODYtNS41MTIgNy4yNS0yMC4xOTctMy43NTYtMjIuMjNBMjU4LjE1NiAyNTguMTU2IDAgMCAwIDI4My4yMTEgMGMtMTQxLjMwOSAwLTI1NiAxMTQuNTExLTI1NiAyNTYgMCAxNDEuMzA5IDExNC41MTEgMjU2IDI1NiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},155:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ0d2l0dGVyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdHdpdHRlciBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ1OS4zNyAxNTEuNzE2Yy4zMjUgNC41NDguMzI1IDkuMDk3LjMyNSAxMy42NDUgMCAxMzguNzItMTA1LjU4MyAyOTguNTU4LTI5OC41NTggMjk4LjU1OC01OS40NTIgMC0xMTQuNjgtMTcuMjE5LTE2MS4xMzctNDcuMTA2IDguNDQ3Ljk3NCAxNi41NjggMS4yOTkgMjUuMzQgMS4yOTkgNDkuMDU1IDAgOTQuMjEzLTE2LjU2OCAxMzAuMjc0LTQ0LjgzMi00Ni4xMzItLjk3NS04NC43OTItMzEuMTg4LTk4LjExMi03Mi43NzIgNi40OTguOTc0IDEyLjk5NSAxLjYyNCAxOS44MTggMS42MjQgOS40MjEgMCAxOC44NDMtMS4zIDI3LjYxNC0zLjU3My00OC4wODEtOS43NDctODQuMTQzLTUxLjk4LTg0LjE0My0xMDIuOTg1di0xLjI5OWMxMy45NjkgNy43OTcgMzAuMjE0IDEyLjY3IDQ3LjQzMSAxMy4zMTktMjguMjY0LTE4Ljg0My00Ni43ODEtNTEuMDA1LTQ2Ljc4MS04Ny4zOTEgMC0xOS40OTIgNS4xOTctMzcuMzYgMTQuMjk0LTUyLjk1NCA1MS42NTUgNjMuNjc1IDEyOS4zIDEwNS4yNTggMjE2LjM2NSAxMDkuODA3LTEuNjI0LTcuNzk3LTIuNTk5LTE1LjkxOC0yLjU5OS0yNC4wNCAwLTU3LjgyOCA0Ni43ODItMTA0LjkzNCAxMDQuOTM0LTEwNC45MzQgMzAuMjEzIDAgNTcuNTAyIDEyLjY3IDc2LjY3IDMzLjEzNyAyMy43MTUtNC41NDggNDYuNDU2LTEzLjMyIDY2LjU5OS0yNS4zNC03Ljc5OCAyNC4zNjYtMjQuMzY2IDQ0LjgzMy00Ni4xMzIgNTcuODI3IDIxLjExNy0yLjI3MyA0MS41ODQtOC4xMjIgNjAuNDI2LTE2LjI0My0xNC4yOTIgMjAuNzkxLTMyLjE2MSAzOS4zMDgtNTIuNjI4IDU0LjI1M3oiPjwvcGF0aD48L3N2Zz4="},156:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJsaW5rZWRpbi1pbiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWxpbmtlZGluLWluIGZhLXctMTQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTAwLjMgNDQ4SDcuNFYxNDguOWg5Mi45VjQ0OHpNNTMuOCAxMDguMUMyNC4xIDEwOC4xIDAgODMuNSAwIDUzLjhTMjQuMSAwIDUzLjggMHM1My44IDI0LjEgNTMuOCA1My44LTI0LjEgNTQuMy01My44IDU0LjN6TTQ0OCA0NDhoLTkyLjdWMzAyLjRjMC0zNC43LS43LTc5LjItNDguMy03OS4yLTQ4LjMgMC01NS43IDM3LjctNTUuNyA3Ni43VjQ0OGgtOTIuOFYxNDguOWg4OS4xdjQwLjhoMS4zYzEyLjQtMjMuNSA0Mi43LTQ4LjMgODcuOS00OC4zIDk0IDAgMTExLjMgNjEuOSAxMTEuMyAxNDIuM1Y0NDhoLS4xeiI+PC9wYXRoPjwvc3ZnPg=="},157:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ5b3V0dWJlIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEteW91dHViZSBmYS13LTE4IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU3NiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTU0OS42NTUgMTI0LjA4M2MtNi4yODEtMjMuNjUtMjQuNzg3LTQyLjI3Ni00OC4yODQtNDguNTk3QzQ1OC43ODEgNjQgMjg4IDY0IDI4OCA2NFMxMTcuMjIgNjQgNzQuNjI5IDc1LjQ4NmMtMjMuNDk3IDYuMzIyLTQyLjAwMyAyNC45NDctNDguMjg0IDQ4LjU5Ny0xMS40MTIgNDIuODY3LTExLjQxMiAxMzIuMzA1LTExLjQxMiAxMzIuMzA1czAgODkuNDM4IDExLjQxMiAxMzIuMzA1YzYuMjgxIDIzLjY1IDI0Ljc4NyA0MS41IDQ4LjI4NCA0Ny44MjFDMTE3LjIyIDQ0OCAyODggNDQ4IDI4OCA0NDhzMTcwLjc4IDAgMjEzLjM3MS0xMS40ODZjMjMuNDk3LTYuMzIxIDQyLjAwMy0yNC4xNzEgNDguMjg0LTQ3LjgyMSAxMS40MTItNDIuODY3IDExLjQxMi0xMzIuMzA1IDExLjQxMi0xMzIuMzA1czAtODkuNDM4LTExLjQxMi0xMzIuMzA1em0tMzE3LjUxIDIxMy41MDhWMTc1LjE4NWwxNDIuNzM5IDgxLjIwNS0xNDIuNzM5IDgxLjIwMXoiPjwvcGF0aD48L3N2Zz4="},158:function(t,e,n){"use strict";var i=n(147),M=n.n(i),a=n(152),u=n(0),r=n.n(u),c=n(4),I=n.n(c),L=n(160),g=n.n(L),N=n(148),y=n(145),j={dark:{primary:"#0091A0",secondary:"#FF8500",background:"#616163",contentColor:"#FFFFFC",title:"#FFF"},main:{primary:"#FF8500",secondary:"#0091A0",background:"#FFFFFC",contentColor:"#616163",title:"#000"}},o=(n(162),n(163),n(48),n(149)),l=(n(33),n(159)),m=n.n(l),T=y.c.a.withConfig({displayName:"ExtLink__Link",componentId:"sc-1rgift3-0"})(["text-shadow:none;background-image:none;"]),D=function(t){var e=t.children,n=m()(t,["children"]);return r.a.createElement(T,Object.assign({},n,{target:"_blank"}),e)},d=(n(154),n(151)),S=n.n(d),A=n(155),x=n.n(A),s=n(156),E=n.n(s),z=n(157),h=n.n(z);function O(){var t=M()(["\n    grid-column: 2 / 3;\n  "]);return O=function(){return t},t}var p=y.c.div.withConfig({displayName:"SocialLinks__SocialWrapper",componentId:"sc-16h3jfe-0"})(["display:flex;justify-content:flex-end;grid-column:3 / 4;grid-row:1;",""],o.a.mobile(O())),C=y.c.img.withConfig({displayName:"SocialLinks__SocialImg",componentId:"sc-16h3jfe-1"})(["width:100%;"]),w=y.c.li.withConfig({displayName:"SocialLinks__SocialLink",componentId:"sc-16h3jfe-2"})(["list-style-type:none;margin:0 15px;width:25px;height:25px;:last-child{margin-right:0;}"]),k=function(t){t.toggleTheme;return r.a.createElement(p,null,r.a.createElement(w,null,r.a.createElement(D,{href:"https://github.com/smithmanny"},r.a.createElement(C,{src:S.a,alt:"Github"}))),r.a.createElement(w,null,r.a.createElement(D,{href:"https://twitter.com/smithmanny"},r.a.createElement(C,{src:x.a,alt:"Twitter"}))),r.a.createElement(w,null,r.a.createElement(D,null,r.a.createElement(C,{src:h.a,alt:"Youtube channel"}))),r.a.createElement(w,null,r.a.createElement(D,{href:"https://twitter.com/smithmanny"},r.a.createElement(C,{src:E.a,alt:"Linkedin"}))))};function b(){var t=M()(["\n    grid-column: 1 / span 3;\n    grid-row: 2;\n  "]);return b=function(){return t},t}function f(){var t=M()(["\n    grid-column: 1 / span 3;\n    grid-row: 2;\n  "]);return f=function(){return t},t}function Y(){var t=M()(["grid-template-columns: 50% 50%;"]);return Y=function(){return t},t}var Q=y.c.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1yg5ab7-0"})(["display:grid;grid-template-columns:repeat(3,auto);align-items:center;",""],o.a.mobile(Y())),Z=y.c.li.withConfig({displayName:"Header__HeaderItem",componentId:"sc-1yg5ab7-1"})(["list-style-type:none;margin:0 15px;"]),v=y.c.ul.withConfig({displayName:"Header__HeaderLink",componentId:"sc-1yg5ab7-2"})(["display:flex;align-content:center;justify-content:center;margin:1rem 0;grid-column:2 / 3;grid-row:1;"," ",""],o.a.tablet(f()),o.a.mobile(b())),U=function(t){var e=t.menuLinks,n=t.siteTitle,i=t.toggleTheme;return r.a.createElement(Q,null,r.a.createElement("h2",{style:{margin:0,fontSize:22}},r.a.createElement(N.Link,{to:"/"},n)),r.a.createElement(k,{toggleTheme:i}),r.a.createElement(v,null,e.map(function(t){return r.a.createElement(Z,{key:t.name},r.a.createElement(N.Link,{to:t.link},t.name))})))};function G(){var t=M()(["\n  body {\n    background-color: ",";\n  }\n\n  h2, h3, h4, h5 {\n    color: ",";\n  } \n\n  dd, li, p {\n    color: ",";\n  }\n\n  a {\n    color: ","; \n    text-shadow: none;\n    background-image: none;\n\n    :hover {\n      text-decoration: underline;\n      color: ",";\n    }\n  }\n"]);return G=function(){return t},t}var F=function(t){var e=t.children;return r.a.createElement(N.StaticQuery,{query:"2571625782",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Shakhor Smith | Software Engineer"},{name:"keywords",content:"shakhor, shakhor smith"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(ThemeProvider,{theme:j.main},r.a.createElement(W,null,r.a.createElement(P,null),r.a.createElement(U,{menuLinks:t.site.siteMetadata.menuLinks,siteTitle:t.site.siteMetadata.title}),e)))},data:a})},P=Object(y.a)(G(),function(t){return t.theme.background},function(t){return t.theme.title},function(t){return t.theme.contentColor},function(t){return t.theme.secondary},function(t){return t.theme.secondary}),W=y.c.div.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"]);F.propTypes={children:I.a.node.isRequired};e.a=F},161:function(t,e,n){"use strict";n.d(e,"b",function(){return M}),n.d(e,"a",function(){return a});var i=n(145),M=i.c.h1.withConfig({displayName:"Text__PageTitle",componentId:"sc-1pqqk8j-0"})(["text-align:center;color:",";"],function(t){return t.theme.title}),a=i.c.p.withConfig({displayName:"Text__PageSubTitle",componentId:"sc-1pqqk8j-1"})(["text-align:center;"])}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9fd75ab3c88e2e573d3c.js.map