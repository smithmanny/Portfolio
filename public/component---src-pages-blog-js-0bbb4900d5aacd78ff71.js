(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return o});var i=n(0),a=n.n(i),u=n(157),r=n(164),c=n(160),o="1155556693";e.default=function(t){var e=t.data;return a.a.createElement(u.a,null,a.a.createElement(c.b,null,"Blog"),a.a.createElement(r.a,{posts:e.allMarkdownRemark.edges}))}},149:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return I}),n.d(e,"StaticQueryContext",function(){return y}),n.d(e,"StaticQuery",function(){return L});var i=n(0),a=n.n(i),u=n(4),r=n.n(u),c=n(147),o=n.n(c);n.d(e,"Link",function(){return o.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var M=n(151),g=n.n(M);n.d(e,"PageRenderer",function(){return g.a});var l=n(34);n.d(e,"parsePath",function(){return l.a});var y=a.a.createContext({}),L=function(t){return a.a.createElement(y.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(t,e,n){"use strict";n.d(e,"a",function(){return u});n(76),n(50),n(163),n(49);var i=n(146),a={desktop:992,tablet:768,mobile:580},u=Object.keys(a).reduce(function(t,e){return t[e]=function(){return Object(i.b)(["@media (max-width:","em){","}"],a[e]/16,i.b.apply(void 0,arguments))},t},{})},151:function(t,e,n){var i;t.exports=(i=n(154))&&i.default||i},152:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJnaXRodWIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1naXRodWIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMy4zLTUuNi0xLjMtNS42LTMuNiAwLTIgMi4zLTMuNiA1LjItMy42IDMtLjMgNS42IDEuMyA1LjYgMy42em0tMzEuMS00LjVjLS43IDIgMS4zIDQuMyA0LjMgNC45IDIuNiAxIDUuNiAwIDYuMi0ycy0xLjMtNC4zLTQuMy01LjJjLTIuNi0uNy01LjUuMy02LjIgMi4zem00NC4yLTEuN2MtMi45LjctNC45IDIuNi00LjYgNC45LjMgMiAyLjkgMy4zIDUuOSAyLjYgMi45LS43IDQuOS0yLjYgNC42LTQuNi0uMy0xLjktMy0zLjItNS45LTIuOXpNMjQ0LjggOEMxMDYuMSA4IDAgMTEzLjMgMCAyNTJjMCAxMTAuOSA2OS44IDIwNS44IDE2OS41IDIzOS4yIDEyLjggMi4zIDE3LjMtNS42IDE3LjMtMTIuMSAwLTYuMi0uMy00MC40LS4zLTYxLjQgMCAwLTcwIDE1LTg0LjctMjkuOCAwIDAtMTEuNC0yOS4xLTI3LjgtMzYuNiAwIDAtMjIuOS0xNS43IDEuNi0xNS40IDAgMCAyNC45IDIgMzguNiAyNS44IDIxLjkgMzguNiA1OC42IDI3LjUgNzIuOSAyMC45IDIuMy0xNiA4LjgtMjcuMSAxNi0zMy43LTU1LjktNi4yLTExMi4zLTE0LjMtMTEyLjMtMTEwLjUgMC0yNy41IDcuNi00MS4zIDIzLjYtNTguOS0yLjYtNi41LTExLjEtMzMuMyAyLjYtNjcuOSAyMC45LTYuNSA2OSAyNyA2OSAyNyAyMC01LjYgNDEuNS04LjUgNjIuOC04LjVzNDIuOCAyLjkgNjIuOCA4LjVjMCAwIDQ4LjEtMzMuNiA2OS0yNyAxMy43IDM0LjcgNS4yIDYxLjQgMi42IDY3LjkgMTYgMTcuNyAyNS44IDMxLjUgMjUuOCA1OC45IDAgOTYuNS01OC45IDEwNC4yLTExNC44IDExMC41IDkuMiA3LjkgMTcgMjIuOSAxNyA0Ni40IDAgMzMuNy0uMyA3NS40LS4zIDgzLjYgMCA2LjUgNC42IDE0LjQgMTcuMyAxMi4xQzQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIDQ5NiAxMTMuMyAzODMuNSA4IDI0NC44IDh6TTk3LjIgMzUyLjljLTEuMyAxLTEgMy4zLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMy4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNi43IDQuMy0uNy43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMuNy00LjMtMS4zLTYuMi0yLjItMi4zLTUuMi0yLjYtNi41LTF6bS0xMS40LTE0LjdjLTEuNiAxLTEuNiAzLjYgMCA1LjkgMS42IDIuMyA0LjMgMy4zIDUuNiAyLjMgMS42LTEuMyAxLjYtMy45IDAtNi4yLTEuNC0yLjMtNC0zLjMtNS42LTJ6Ij48L3BhdGg+PC9zdmc+"},153:function(t){t.exports={data:{site:{siteMetadata:{title:"Shakhor Smith",menuLinks:[{name:"Blog",link:"/blog"},{name:"About Me",link:"/about"},{name:"Contact",link:"/contact"}]}}}}},154:function(t,e,n){"use strict";n.r(e);n(25);var i=n(0),a=n.n(i),u=n(4),r=n.n(u),c=n(51),o=n(2),M=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};M.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=M},155:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtb29uIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbW9vbiBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI4My4yMTEgNTEyYzc4Ljk2MiAwIDE1MS4wNzktMzUuOTI1IDE5OC44NTctOTQuNzkyIDcuMDY4LTguNzA4LS42MzktMjEuNDMtMTEuNTYyLTE5LjM1LTEyNC4yMDMgMjMuNjU0LTIzOC4yNjItNzEuNTc2LTIzOC4yNjItMTk2Ljk1NCAwLTcyLjIyMiAzOC42NjItMTM4LjYzNSAxMDEuNDk4LTE3NC4zOTQgOS42ODYtNS41MTIgNy4yNS0yMC4xOTctMy43NTYtMjIuMjNBMjU4LjE1NiAyNTguMTU2IDAgMCAwIDI4My4yMTEgMGMtMTQxLjMwOSAwLTI1NiAxMTQuNTExLTI1NiAyNTYgMCAxNDEuMzA5IDExNC41MTEgMjU2IDI1NiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},156:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ0d2l0dGVyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdHdpdHRlciBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ1OS4zNyAxNTEuNzE2Yy4zMjUgNC41NDguMzI1IDkuMDk3LjMyNSAxMy42NDUgMCAxMzguNzItMTA1LjU4MyAyOTguNTU4LTI5OC41NTggMjk4LjU1OC01OS40NTIgMC0xMTQuNjgtMTcuMjE5LTE2MS4xMzctNDcuMTA2IDguNDQ3Ljk3NCAxNi41NjggMS4yOTkgMjUuMzQgMS4yOTkgNDkuMDU1IDAgOTQuMjEzLTE2LjU2OCAxMzAuMjc0LTQ0LjgzMi00Ni4xMzItLjk3NS04NC43OTItMzEuMTg4LTk4LjExMi03Mi43NzIgNi40OTguOTc0IDEyLjk5NSAxLjYyNCAxOS44MTggMS42MjQgOS40MjEgMCAxOC44NDMtMS4zIDI3LjYxNC0zLjU3My00OC4wODEtOS43NDctODQuMTQzLTUxLjk4LTg0LjE0My0xMDIuOTg1di0xLjI5OWMxMy45NjkgNy43OTcgMzAuMjE0IDEyLjY3IDQ3LjQzMSAxMy4zMTktMjguMjY0LTE4Ljg0My00Ni43ODEtNTEuMDA1LTQ2Ljc4MS04Ny4zOTEgMC0xOS40OTIgNS4xOTctMzcuMzYgMTQuMjk0LTUyLjk1NCA1MS42NTUgNjMuNjc1IDEyOS4zIDEwNS4yNTggMjE2LjM2NSAxMDkuODA3LTEuNjI0LTcuNzk3LTIuNTk5LTE1LjkxOC0yLjU5OS0yNC4wNCAwLTU3LjgyOCA0Ni43ODItMTA0LjkzNCAxMDQuOTM0LTEwNC45MzQgMzAuMjEzIDAgNTcuNTAyIDEyLjY3IDc2LjY3IDMzLjEzNyAyMy43MTUtNC41NDggNDYuNDU2LTEzLjMyIDY2LjU5OS0yNS4zNC03Ljc5OCAyNC4zNjYtMjQuMzY2IDQ0LjgzMy00Ni4xMzIgNTcuODI3IDIxLjExNy0yLjI3MyA0MS41ODQtOC4xMjIgNjAuNDI2LTE2LjI0My0xNC4yOTIgMjAuNzkxLTMyLjE2MSAzOS4zMDgtNTIuNjI4IDU0LjI1M3oiPjwvcGF0aD48L3N2Zz4="},157:function(t,e,n){"use strict";var i=n(148),a=n.n(i),u=n(153),r=n(0),c=n.n(r),o=n(4),M=n.n(o),g=n(159),l=n.n(g),y=n(149),L=n(146),I=(n(161),n(162),n(48),n(150)),N=(n(25),n(158)),j=n.n(N),m=L.c.a.withConfig({displayName:"ExtLink__Link",componentId:"sc-1rgift3-0"})(["text-shadow:none;background-image:none;"]),d=function(t){var e=t.children,n=j()(t,["children"]);return c.a.createElement(m,Object.assign({},n,{target:"_blank"}),e)},s=n(155),T=n.n(s),S=n(152),E=n.n(S),D=n(156),x=n.n(D);function p(){var t=a()(["\n    grid-column: 2 / 3;\n  "]);return p=function(){return t},t}var A=L.c.div.withConfig({displayName:"SocialLinks__SocialWrapper",componentId:"sc-16h3jfe-0"})(["display:flex;justify-content:flex-end;grid-column:3 / 4;grid-row:1;",""],I.a.mobile(p())),f=L.c.img.withConfig({displayName:"SocialLinks__SocialImg",componentId:"sc-16h3jfe-1"})(["width:100%;"]),h=L.c.li.withConfig({displayName:"SocialLinks__SocialLink",componentId:"sc-16h3jfe-2"})(["list-style-type:none;margin:0 15px;width:25px;height:25px;:last-child{margin-right:0;}"]),z=function(t){var e=t.toggleTheme;return c.a.createElement(A,null,c.a.createElement(h,null,c.a.createElement(d,null,c.a.createElement(f,{src:T.a,alt:"Toggle Background",onClick:e}))),c.a.createElement(h,null,c.a.createElement(d,{href:"https://github.com/smithmanny"},c.a.createElement(f,{src:E.a,alt:"Github"}))),c.a.createElement(h,null,c.a.createElement(d,{href:"https://twitter.com/smithmanny"},c.a.createElement(f,{src:x.a,alt:"Twitter"}))))};function C(){var t=a()(["\n    grid-column: 1 / span 3;\n    grid-row: 2;\n  "]);return C=function(){return t},t}function O(){var t=a()(["\n    grid-column: 1 / span 3;\n    grid-row: 2;\n  "]);return O=function(){return t},t}function k(){var t=a()(["grid-template-columns: 50% 50%;"]);return k=function(){return t},t}var w=L.c.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1yg5ab7-0"})(["display:grid;grid-template-columns:repeat(3,auto);align-items:center;",""],I.a.mobile(k())),b=L.c.li.withConfig({displayName:"Header__HeaderItem",componentId:"sc-1yg5ab7-1"})(["list-style-type:none;margin:0 15px;"]),Y=L.c.ul.withConfig({displayName:"Header__HeaderLink",componentId:"sc-1yg5ab7-2"})(["display:flex;align-content:center;justify-content:center;margin:1rem 0;grid-column:2 / 3;grid-row:1;"," ",""],I.a.tablet(O()),I.a.mobile(C())),v=function(t){var e=t.menuLinks,n=t.siteTitle,i=t.toggleTheme;return c.a.createElement(w,null,c.a.createElement("h2",{style:{margin:0,fontSize:22}},c.a.createElement(y.Link,{to:"/"},n)),c.a.createElement(z,{toggleTheme:i}),c.a.createElement(Y,null,e.map(function(t){return c.a.createElement(b,{key:t.name},c.a.createElement(y.Link,{to:t.link},t.name))})))};n(52);function U(){var t=a()(["\n  body {\n    background-color: ",";\n  }\n\n  h2, h3, h4, h5 {\n    color: ",";\n  } \n\n  dd, li, p {\n    color: ",";\n  }\n\n  a {\n    color: ","; \n    text-shadow: none;\n    background-image: none;\n\n    :hover {\n      text-decoration: underline;\n      color: ",";\n    }\n  }\n"]);return U=function(){return t},t}var Q=function(t){var e=t.children;return c.a.createElement(y.StaticQuery,{query:"2571625782",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Shakhor Smith | Software Engineer"},{name:"keywords",content:"shakhor, shakhor smith"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(P,null,c.a.createElement(Z,null),c.a.createElement(v,{menuLinks:t.site.siteMetadata.menuLinks,siteTitle:t.site.siteMetadata.title}),e))},data:u})},Z=Object(L.a)(U(),function(t){return t.theme.background},function(t){return t.theme.title},function(t){return t.theme.contentColor},function(t){return t.theme.secondary},function(t){return t.theme.secondary}),P=L.c.div.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"]);Q.propTypes={children:M.a.node.isRequired};e.a=Q},160:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return u});var i=n(146),a=i.c.h1.withConfig({displayName:"Text__PageTitle",componentId:"sc-1pqqk8j-0"})(["text-align:center;color:",";"],function(t){return t.theme.title}),u=i.c.p.withConfig({displayName:"Text__PageSubTitle",componentId:"sc-1pqqk8j-1"})(["text-align:center;"])},164:function(t,e,n){"use strict";var i=n(148),a=n.n(i),u=(n(48),n(0)),r=n.n(u),c=n(149),o=n(146),M=n(150),g=n(152),l=n.n(g);function y(){var t=a()(["flex: 85%;"]);return y=function(){return t},t}function L(){var t=a()(["display: none;"]);return L=function(){return t},t}var I=o.c.div.withConfig({displayName:"Posts__Container",componentId:"f6lc2j-0"})(["display:flex;flex-direction:column;"]),N=o.c.img.withConfig({displayName:"Posts__Icon",componentId:"f6lc2j-1"})(["height:100%;width:100%;margin:0;"]),j=o.c.h5.withConfig({displayName:"Posts__PostDate",componentId:"f6lc2j-2"})(["color:gray;flex:35%;text-align:right;margin:0;",""],M.a.mobile(L())),m=o.c.div.withConfig({displayName:"Posts__PostIcon",componentId:"f6lc2j-3"})(["flex:15%;max-width:35px;max-height:35px;margin-right:15px;"]),d=Object(o.c)(c.Link).withConfig({displayName:"Posts__PostTitle",componentId:"f6lc2j-4"})(["color:",";flex:50%;margin:0;text-shadow:none;background-image:none;",""],function(t){return t.theme.contentColor},M.a.mobile(y())),s=o.c.div.withConfig({displayName:"Posts__PostWrapper",componentId:"f6lc2j-5"})(["display:flex;align-items:center;padding:10px 0;margin-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.2);"]);e.a=function(t){var e=t.posts;return r.a.createElement(I,null,e.map(function(t){var e=t.node.frontmatter,n=e.date,i=e.title,a=e.slug;return r.a.createElement(s,{key:i},r.a.createElement(m,null,r.a.createElement(N,{src:l.a})),r.a.createElement(d,{to:"/"+a},i),r.a.createElement(j,null,n))}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0bbb4900d5aacd78ff71.js.map