"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[76],{4034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"syntax/intro","title":"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23","description":"\u0e41\u0e19\u0e30\u0e19\u0e33","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/syntax/intro.md","sourceDirName":"syntax","slug":"/syntax/intro","permalink":"/th/docs/syntax/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c","permalink":"/th/docs/syntax/"},"next":{"title":"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 (Data Types)","permalink":"/th/docs/syntax/data_type"}}');var r=s(4848),d=s(8453);const l={sidebar_position:1},c="\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",a={},t=[{value:"\u0e41\u0e19\u0e30\u0e19\u0e33",id:"\u0e41\u0e19\u0e30\u0e19\u0e33",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",level:2},{value:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",level:3},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e07\u0e48\u0e32\u0e22\u0e46",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07-\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e07\u0e48\u0e32\u0e22\u0e46",level:3},{value:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",level:2},{value:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",level:3},{value:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",level:3},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e41\u0e19\u0e30\u0e19\u0e33",children:"\u0e41\u0e19\u0e30\u0e19\u0e33"}),"\n",(0,r.jsx)(n.p,{children:"\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2a\u0e21\u0e14\u0e38\u0e25\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e15\u0e48\u0e33\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e22\u0e01\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e2a\u0e39\u0e07 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e22\u0e37\u0e14\u0e2b\u0e22\u0e38\u0e48\u0e19\u0e41\u0e25\u0e30\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e \u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e40\u0e23\u0e32\u0e08\u0e30\u0e41\u0e19\u0e30\u0e19\u0e33\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e15\u0e23\u0e23\u0e01\u0e30\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e20\u0e32\u0e22\u0e43\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 \u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e08\u0e32\u0e01 Wave \u0e44\u0e14\u0e49\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e43\u0e19 Wave \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.strong,{children:"\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e42\u0e04\u0e49\u0e14\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e19\u0e33\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48"})," \u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2d\u0e34\u0e2a\u0e23\u0e30 \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e08\u0e30\u0e17\u0e33\u0e01\u0e32\u0e23\u0e2b\u0e48\u0e2d\u0e2b\u0e38\u0e49\u0e21\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e17\u0e33\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19"]}),"\n",(0,r.jsx)(n.p,{children:"\u0e14\u0e49\u0e27\u0e22\u0e27\u0e34\u0e18\u0e35\u0e19\u0e35\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13 \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19 I/O \u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e1a\u0e48\u0e07\u0e42\u0e04\u0e49\u0e14\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e25\u0e32\u0e22\u0e40\u0e0b\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e43\u0e19 Wave \u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22\u0e04\u0e35\u0e22\u0e4c\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e14 ",(0,r.jsx)(n.code,{children:"fun"})," \u0e15\u0e32\u0e21\u0e14\u0e49\u0e27\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 \u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c (\u0e16\u0e49\u0e32\u0e21\u0e35) \u0e41\u0e25\u0e30\u0e23\u0e48\u0e32\u0e07\u0e01\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e27\u0e07\u0e40\u0e25\u0e47\u0e1a ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",children:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"\u0e43\u0e19 Wave \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"fun main() {\n    // \u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 ",(0,r.jsx)(n.code,{children:"main"})," \u0e40\u0e1b\u0e47\u0e19\u0e08\u0e38\u0e14\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e41\u0e25\u0e30\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e40\u0e2a\u0e21\u0e2d"]}),"\n",(0,r.jsx)(n.li,{children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e48\u0e07\u0e04\u0e48\u0e32\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e14\u0e49 \u0e42\u0e14\u0e22\u0e0a\u0e19\u0e34\u0e14\u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e01\u0e25\u0e31\u0e1a\u0e08\u0e30\u0e23\u0e30\u0e1a\u0e38\u0e2b\u0e25\u0e31\u0e07\u0e0a\u0e37\u0e48\u0e2d\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07-\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e07\u0e48\u0e32\u0e22\u0e46",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e07\u0e48\u0e32\u0e22\u0e46"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"fun add(a :i32, b :i32) -> i32 {\n    return a + b;\n}\n\nfun main() {\n    var result = add(5, 7);     // \u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 add\n    println(result);            // \u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25: 12\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0e43\u0e19\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 ",(0,r.jsx)(n.code,{children:"add"})," \u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21 ",(0,r.jsx)(n.code,{children:"a"})," \u0e41\u0e25\u0e30 ",(0,r.jsx)(n.code,{children:"b"})," \u0e41\u0e25\u0e30\u0e2a\u0e48\u0e07\u0e04\u0e48\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e01\u0e25\u0e31\u0e1a"]}),"\n",(0,r.jsxs)(n.li,{children:["\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 ",(0,r.jsx)(n.code,{children:"main"})," \u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49 ",(0,r.jsx)(n.code,{children:"add"})," \u0e41\u0e25\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a\u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e20\u0e32\u0e22\u0e43\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e17\u0e31\u0e49\u0e07 ",(0,r.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"})," \u0e41\u0e25\u0e30 ",(0,r.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"})," \u0e0b\u0e36\u0e48\u0e07\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e14\u0e35\u0e22\u0e34\u0e48\u0e07\u0e02\u0e36\u0e49\u0e19"]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e43\u0e19 Wave \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49 (mutable)"})," \u0e42\u0e14\u0e22\u0e04\u0e48\u0e32\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e44\u0e14\u0e49"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e14\u0e49\u0e27\u0e22\u0e04\u0e33\u0e27\u0e48\u0e32 ",(0,r.jsx)(n.code,{children:"var"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"var x :i32 = 10; // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\nx = 20;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0e43\u0e19\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49 \u0e42\u0e14\u0e22\u0e21\u0e35\u0e04\u0e48\u0e32\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.code,{children:"10"})," \u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.code,{children:"20"})," \u0e44\u0e14\u0e49"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49",children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e2b\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49 (immutable)"})," \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e41\u0e25\u0e49\u0e27"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e14\u0e49\u0e27\u0e22\u0e04\u0e33\u0e27\u0e48\u0e32 ",(0,r.jsx)(n.code,{children:"var imm"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"var imm y :i32 = 5;     // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\n// y = 10;              // \u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14: \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0e43\u0e19\u0e17\u0e35\u0e48\u0e19\u0e35\u0e49:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"y"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e16\u0e49\u0e32\u0e1e\u0e22\u0e32\u0e22\u0e32\u0e21\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23"}),"\n",(0,r.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e21\u0e35\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var x :i32 = 10;                    // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\nvar imm y :f64 = 3.14159;           // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\nvar name :str = "Wave";             // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e2a\u0e15\u0e23\u0e34\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\nvar imm is_active :bool = true;     // \u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e04\u0e48\u0e32\u0e15\u0e23\u0e23\u0e01\u0e30\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"y"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e2a\u0e15\u0e23\u0e34\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"is_active"})," \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e04\u0e48\u0e32\u0e15\u0e23\u0e23\u0e01\u0e30\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0e43\u0e19 Wave \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e27\u0e48\u0e32 ",(0,r.jsx)(n.code,{children:"var"})," \u0e08\u0e30\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e30\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e27\u0e48\u0e32 ",(0,r.jsx)(n.code,{children:"var imm"})," \u0e43\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e41\u0e25\u0e49\u0e27"]}),"\n",(0,r.jsx)(n.p,{children:"\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e48\u0e32\u0e44\u0e14\u0e49\u0e17\u0e33\u0e43\u0e2b\u0e49 Wave \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e2a\u0e16\u0e32\u0e19\u0e30\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e44\u0e14\u0e49\u0e14\u0e35\u0e22\u0e34\u0e48\u0e07\u0e02\u0e36\u0e49\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14\u0e17\u0e35\u0e48\u0e21\u0e31\u0e48\u0e19\u0e04\u0e07\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e19\u0e32\u0e22\u0e44\u0e14\u0e49\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19"})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);