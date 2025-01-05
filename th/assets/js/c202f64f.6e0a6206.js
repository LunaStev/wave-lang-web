"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[76],{4034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"syntax/intro","title":"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23","description":"\u0e41\u0e19\u0e30\u0e19\u0e33","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/syntax/intro.md","sourceDirName":"syntax","slug":"/syntax/intro","permalink":"/th/docs/syntax/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c","permalink":"/th/docs/syntax/"},"next":{"title":"\ub370\uc774\ud130 \ud0c0\uc785","permalink":"/th/docs/syntax/data_type"}}');var r=s(4848),d=s(8453);const l={sidebar_position:1},c="\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",a={},t=[{value:"\u0e41\u0e19\u0e30\u0e19\u0e33",id:"\u0e41\u0e19\u0e30\u0e19\u0e33",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",level:2},{value:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",level:3},{value:"\uc608\uc81c: \uac04\ub2e8\ud55c \ud568\uc218",id:"\uc608\uc81c-\uac04\ub2e8\ud55c-\ud568\uc218",level:3},{value:"\ubcc0\uc218",id:"\ubcc0\uc218",level:2},{value:"\uac00\ubcc0 \ubcc0\uc218",id:"\uac00\ubcc0-\ubcc0\uc218",level:3},{value:"\ubd88\ubcc0 \ubcc0\uc218",id:"\ubd88\ubcc0-\ubcc0\uc218",level:3},{value:"\ubcc0\uc218 \uc120\uc5b8 \uc608\uc81c",id:"\ubcc0\uc218-\uc120\uc5b8-\uc608\uc81c",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e41\u0e19\u0e30\u0e19\u0e33",children:"\u0e41\u0e19\u0e30\u0e19\u0e33"}),"\n",(0,r.jsx)(n.p,{children:"\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e20\u0e32\u0e29\u0e32\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2a\u0e21\u0e14\u0e38\u0e25\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e15\u0e48\u0e33\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e22\u0e01\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e2a\u0e39\u0e07 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e22\u0e37\u0e14\u0e2b\u0e22\u0e38\u0e48\u0e19\u0e41\u0e25\u0e30\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e \u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e40\u0e23\u0e32\u0e08\u0e30\u0e41\u0e19\u0e30\u0e19\u0e33\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 Wave \u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e15\u0e23\u0e23\u0e01\u0e30\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e20\u0e32\u0e22\u0e43\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 \u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e08\u0e32\u0e01 Wave \u0e44\u0e14\u0e49\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e43\u0e19 Wave \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19 ",(0,r.jsx)(n.strong,{children:"\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e42\u0e04\u0e49\u0e14\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e19\u0e33\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48"})," \u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2d\u0e34\u0e2a\u0e23\u0e30 \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e08\u0e30\u0e17\u0e33\u0e01\u0e32\u0e23\u0e2b\u0e48\u0e2d\u0e2b\u0e38\u0e49\u0e21\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e17\u0e33\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19"]}),"\n",(0,r.jsx)(n.p,{children:"\u0e14\u0e49\u0e27\u0e22\u0e27\u0e34\u0e18\u0e35\u0e19\u0e35\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13 \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19 I/O \u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e1a\u0e48\u0e07\u0e42\u0e04\u0e49\u0e14\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22"}),"\n",(0,r.jsxs)(n.p,{children:["\u0e25\u0e32\u0e22\u0e40\u0e0b\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e43\u0e19 Wave \u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22\u0e04\u0e35\u0e22\u0e4c\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e14 ",(0,r.jsx)(n.code,{children:"fun"})," \u0e15\u0e32\u0e21\u0e14\u0e49\u0e27\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 \u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c (\u0e16\u0e49\u0e32\u0e21\u0e35) \u0e41\u0e25\u0e30\u0e23\u0e48\u0e32\u0e07\u0e01\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e27\u0e07\u0e40\u0e25\u0e47\u0e1a ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19",children:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"Wave\uc5d0\uc11c \uae30\ubcf8\uc801\uc778 \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"fun main() {\n    // \uc5ec\uae30\uc5d0 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc138\uc694\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"main"})," \ud568\uc218\ub294 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\uc744 \uc704\ud55c \uc9c4\uc785\uc810\uc73c\ub85c \ud56d\uc0c1 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\ud568\uc218\ub294 \ub9e4\uac1c\ubcc0\uc218\ub97c \uac00\uc9c8 \uc218 \uc788\uc73c\uba70, \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\ud658 \ud0c0\uc785\uc740 \ud568\uc218 \uc774\ub984 \ub4a4\uc5d0 \uba85\uc2dc\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc608\uc81c-\uac04\ub2e8\ud55c-\ud568\uc218",children:"\uc608\uc81c: \uac04\ub2e8\ud55c \ud568\uc218"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"fun add(a :i32, b :i32) -> i32 {\n    return a + b;\n}\n\nfun main() {\n    var result = add(5, 7);     // add \ud568\uc218 \ud638\ucd9c\n    println(result);            // \ucd9c\ub825: 12\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc704 \uc608\uc81c\uc5d0\uc11c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"add"})," \ud568\uc218\ub294 \ub450 \uc815\uc218 ",(0,r.jsx)(n.code,{children:"a"}),"\uc640 ",(0,r.jsx)(n.code,{children:"b"}),"\ub97c \ubc1b\uc544 \ud569\uacc4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"main"})," \ud568\uc218\ub294 ",(0,r.jsx)(n.code,{children:"add"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \uacb0\uacfc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ubcc0\uc218",children:"\ubcc0\uc218"}),"\n",(0,r.jsxs)(n.p,{children:["\ubcc0\uc218\ub294 \ud504\ub85c\uadf8\ub7a8 \ub0b4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uc870\uc791\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\nWave\ub294 \ubcc0\uc218 \uc120\uc5b8\uc5d0\uc11c ",(0,r.jsx)(n.strong,{children:"\uac00\ubcc0 \ubcc0\uc218"}),"\uc640 ",(0,r.jsx)(n.strong,{children:"\ubd88\ubcc0 \ubcc0\uc218"}),"\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud558\uc5ec \ub370\uc774\ud130 \uad00\ub9ac\uc5d0 \ub300\ud55c \uac1c\ubc1c\uc790\uc758 \uc81c\uc5b4\uad8c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\uac00\ubcc0-\ubcc0\uc218",children:"\uac00\ubcc0 \ubcc0\uc218"}),"\n",(0,r.jsxs)(n.p,{children:["Wave\uc5d0\uc11c \ubcc0\uc218\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.jsx)(n.strong,{children:"\uac00\ubcc0(mutable)"})," \uc785\ub2c8\ub2e4. \uc989, \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc911\uc5d0 \uac12\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uac00\ubcc0 \ubcc0\uc218\ub294 var \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc120\uc5b8\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"var x :i32 = 10; // \uac00\ubcc0 \ubcc0\uc218\nx = 20;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc704 \uc608\uc81c\uc5d0\uc11c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x"}),"\ub294 \uac00\ubcc0 \ubcc0\uc218\ub85c, \ucd08\uae30\uac12 ",(0,r.jsx)(n.code,{children:"10"}),"\uc744 \uac00\uc9c0\uba70 \uc774\ud6c4\uc5d0 ",(0,r.jsx)(n.code,{children:"20"}),"\uc73c\ub85c \uac12\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ubd88\ubcc0-\ubcc0\uc218",children:"\ubd88\ubcc0 \ubcc0\uc218"}),"\n",(0,r.jsxs)(n.p,{children:["\ubcc0\uc218\ub97c ",(0,r.jsx)(n.strong,{children:"\ubd88\ubcc0(immutable)"})," \uc73c\ub85c \uc120\uc5b8\ud558\uba74, \ud55c \ubc88 \uac12\uc774 \ud560\ub2f9\ub41c \ud6c4\uc5d0\ub294 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\ubd88\ubcc0 \ubcc0\uc218\ub294 ",(0,r.jsx)(n.code,{children:"var imm"})," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc120\uc5b8\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"var imm y :i32 = 5;     // \ubd88\ubcc0 \ubcc0\uc218\n// y = 10;              // \uc624\ub958: \ubd88\ubcc0 \ubcc0\uc218\ub294 \uac12\uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc5ec\uae30\uc11c:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"y"}),"\ub294 \ubd88\ubcc0 \ubcc0\uc218\ub85c, \uac12\uc744 \ubcc0\uacbd\ud558\ub824\uace0 \ud558\uba74 \ucef4\ud30c\uc77c \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ubcc0\uc218-\uc120\uc5b8-\uc608\uc81c",children:"\ubcc0\uc218 \uc120\uc5b8 \uc608\uc81c"}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc591\ud55c \ud0c0\uc785\uc758 \uac00\ubcc0 \ubc0f \ubd88\ubcc0 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\ub294 \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var x :i32 = 10;                    // \uac00\ubcc0 \uc815\uc218 \ubcc0\uc218\nvar imm y :f64 = 3.14159;           // \ubd88\ubcc0 \ubd80\ub3d9\uc18c\uc218\uc810 \ubcc0\uc218\nvar name :str = "Wave";             // \uac00\ubcc0 \ubb38\uc790\uc5f4 \ubcc0\uc218\nvar imm is_active :bool = true;     // \ubd88\ubcc0 \ub17c\ub9ac \ubcc0\uc218\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x"}),"\ub294 \uac00\ubcc0 \uc815\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"y"}),"\ub294 \ubd88\ubcc0 \ubd80\ub3d9\uc18c\uc218\uc810 \uc22b\uc790\uc785\ub2c8\ub2e4.."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),"\uc740 \uac00\ubcc0 \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"is_active"}),"\ub294 \ubd88\ubcc0 \ub17c\ub9ac\uac12\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wave\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.code,{children:"var"})," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uac00\ubcc0 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uba70, ",(0,r.jsx)(n.code,{children:"var imm"})," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574 \ucd08\uae30 \ud560\ub2f9 \ud6c4 \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub294 \ubd88\ubcc0 \ubcc0\uc218\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uac00\ubcc0 \ubcc0\uc218\uc640 \ubd88\ubcc0 \ubcc0\uc218\ub97c \uad6c\ubd84\ud568\uc73c\ub85c\uc368, Wave\ub294 \ub370\uc774\ud130 \uc77c\uad00\uc131\uacfc \ud504\ub85c\uadf8\ub7a8 \uc0c1\ud0dc\ub97c \ub354\uc6b1 \ud6a8\uacfc\uc801\uc73c\ub85c \uc81c\uc5b4\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.\n\uc774\ub85c\uc368 \ub354\uc6b1 \uacac\uace0\ud558\uace0 \uc608\uce21 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);