"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6799],{4156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"syntax/data_type","title":"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 (Data Types)","description":"\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e19\u0e35\u0e49\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/th/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23","permalink":"/th/docs/syntax/intro"},"next":{"title":"IF \u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07","permalink":"/th/docs/syntax/if"}}');var t=r(4848),i=r(8453);const a={sidebar_position:2},l="\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 (Data Types)",c={},d=[{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21 (Integer Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21-integer-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e41\u0e1a\u0e1a\u0e25\u0e2d\u0e22\u0e15\u0e31\u0e27 (Floating-point Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e41\u0e1a\u0e1a\u0e25\u0e2d\u0e22\u0e15\u0e31\u0e27-floating-point-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (String Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21-string-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1a\u0e39\u0e25\u0e35\u0e19 (Boolean Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1a\u0e39\u0e25\u0e35\u0e19-boolean-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23 (Character Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23-character-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1a\u0e15\u0e4c (Byte Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1a\u0e15\u0e4c-byte-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49 (Pointer Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49-pointer-type",level:2},{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c (Array Type)",id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c-array-type",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25-data-types",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 (Data Types)"})}),"\n",(0,t.jsxs)(n.p,{children:["\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e19\u0e35\u0e49\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave\n\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e04\u0e48\u0e32\u0e14\u0e49\u0e27\u0e22\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\n\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22 ",(0,t.jsx)(n.strong,{children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21 (Integer)"}),", ",(0,t.jsx)(n.strong,{children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e41\u0e1a\u0e1a\u0e25\u0e2d\u0e22\u0e15\u0e31\u0e27 (Floating-point)"}),", \u0e41\u0e25\u0e30 ",(0,t.jsx)(n.strong,{children:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (String)"}),"\n\u0e42\u0e14\u0e22\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e38\u0e13\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e41\u0e25\u0e30\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e15\u0e31\u0e27"]}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21-integer-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21 (Integer Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21"}),"\n\u0e42\u0e14\u0e22\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e08\u0e30\u0e16\u0e39\u0e01\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e14\u0e49\u0e27\u0e22 ",(0,t.jsx)(n.code,{children:"i32"})," (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e41\u0e1a\u0e1a signed \u0e02\u0e19\u0e32\u0e14 32 \u0e1a\u0e34\u0e15) \u0e41\u0e25\u0e30 ",(0,t.jsx)(n.code,{children:"u32"})," (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e41\u0e1a\u0e1a unsigned \u0e02\u0e19\u0e32\u0e14 32 \u0e1a\u0e34\u0e15)\n\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e0a\u0e48\u0e27\u0e07\u0e02\u0e2d\u0e07\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"i8"})," \u0e16\u0e36\u0e07 ",(0,t.jsx)(n.code,{children:"i1024"}),": \u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e41\u0e1a\u0e1a signed (\u0e21\u0e35\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22) \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 8 \u0e1a\u0e34\u0e15\u0e16\u0e36\u0e07 1024 \u0e1a\u0e34\u0e15"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"u8"})," \u0e16\u0e36\u0e07 ",(0,t.jsx)(n.code,{children:"u1024"}),": \u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e15\u0e47\u0e21\u0e41\u0e1a\u0e1a unsigned (\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22) \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 8 \u0e1a\u0e34\u0e15\u0e16\u0e36\u0e07 1024 \u0e1a\u0e34\u0e15"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e41\u0e1a\u0e1a\u0e25\u0e2d\u0e22\u0e15\u0e31\u0e27-floating-point-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e41\u0e1a\u0e1a\u0e25\u0e2d\u0e22\u0e15\u0e31\u0e27 (Floating-point Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a \u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\n\u0e42\u0e14\u0e22\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e04\u0e48\u0e32\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e08\u0e30\u0e16\u0e39\u0e01\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e14\u0e49\u0e27\u0e22 ",(0,t.jsx)(n.code,{children:"f32"})," (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e02\u0e19\u0e32\u0e14 32 \u0e1a\u0e34\u0e15)\n\u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e19\u0e35\u0e49\u0e22\u0e31\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e02\u0e19\u0e32\u0e14\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 32 \u0e1a\u0e34\u0e15\u0e16\u0e36\u0e07 1024 \u0e1a\u0e34\u0e15"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"f32"})," \u0e16\u0e36\u0e07 ",(0,t.jsx)(n.code,{children:"f1024"}),": \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 32 \u0e1a\u0e34\u0e15\u0e16\u0e36\u0e07 1024 \u0e1a\u0e34\u0e15 \u0e0a\u0e48\u0e27\u0e22\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e04\u0e27\u0e32\u0e21\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21-string-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (String Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.code,{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"}),"\n\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 str \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 \u0e41\u0e25\u0e30\u0e25\u0e49\u0e2d\u0e21\u0e23\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e14\u0e49\u0e27\u0e22\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e33\u0e1e\u0e39\u0e14\u0e04\u0e39\u0e48 (",(0,t.jsx)(n.code,{children:'"'}),")"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1a\u0e39\u0e25\u0e35\u0e19-boolean-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1a\u0e39\u0e25\u0e35\u0e19 (Boolean Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1a\u0e39\u0e25\u0e35\u0e19\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e04\u0e48\u0e32\u0e08\u0e23\u0e34\u0e07 (True)"})," \u0e2b\u0e23\u0e37\u0e2d ",(0,t.jsx)(n.strong,{children:"\u0e04\u0e48\u0e32\u0e40\u0e17\u0e47\u0e08 (False)"}),"\n\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e23\u0e35\u0e22\u0e1a\u0e40\u0e17\u0e35\u0e22\u0e1a\n\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e04\u0e37\u0e2d ",(0,t.jsx)(n.code,{children:"true"})," \u0e2b\u0e23\u0e37\u0e2d ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23-character-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23 (Character Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e2d\u0e31\u0e01\u0e02\u0e23\u0e30\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27"}),"\n\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 ",(0,t.jsx)(n.code,{children:"char"})," \u0e41\u0e25\u0e30\u0e25\u0e49\u0e2d\u0e21\u0e23\u0e2d\u0e1a\u0e04\u0e48\u0e32\u0e14\u0e49\u0e27\u0e22\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e04\u0e33\u0e1e\u0e39\u0e14\u0e40\u0e14\u0e35\u0e48\u0e22\u0e27 (",(0,t.jsx)(n.code,{children:"'"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1a\u0e15\u0e4c-byte-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1a\u0e15\u0e4c (Byte Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e44\u0e1a\u0e15\u0e4c\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e19\u0e32\u0e14 1 \u0e44\u0e1a\u0e15\u0e4c"}),"\n\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1a\u0e1a\u0e44\u0e1a\u0e19\u0e32\u0e23\u0e35 \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 ",(0,t.jsx)(n.code,{children:"byte"})]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49-pointer-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49 (Pointer Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33"}),"\n\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 ",(0,t.jsx)(n.code,{children:"ptr"})," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c-array-type",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c (Array Type)"}),"\n",(0,t.jsxs)(n.p,{children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a ",(0,t.jsx)(n.strong,{children:"\u0e0a\u0e38\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19"}),"\n\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 ",(0,t.jsx)(n.code,{children:"array"})," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e41\u0e25\u0e30\u0e02\u0e19\u0e32\u0e14\u0e02\u0e2d\u0e07\u0e2d\u0e32\u0e40\u0e23\u0e22\u0e4c"]}),"\n",(0,t.jsx)(n.p,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e15\u0e32\u0e21\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\n\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);