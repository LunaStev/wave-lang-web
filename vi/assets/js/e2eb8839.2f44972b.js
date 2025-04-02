"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6463],{168:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"syntax/if","title":"C\xe2u L\u1ec7nh IF","description":"Gi\u1edbi Thi\u1ec7u","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/vi/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Ki\u1ec3u D\u1eef Li\u1ec7u","permalink":"/vi/docs/syntax/data_type"},"next":{"title":"While \ubb38","permalink":"/vi/docs/syntax/while"}}');var c=e(4848),h=e(8453);const r={sidebar_position:3},s="C\xe2u L\u1ec7nh IF",l={},u=[{value:"Gi\u1edbi Thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\u1ea5u Tr\xfac C\u01a1 B\u1ea3n",id:"c\u1ea5u-tr\xfac-c\u01a1-b\u1ea3n",level:2},{value:"V\xed D\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"C\xe2u L\u1ec7nh IF_ELSE",id:"c\xe2u-l\u1ec7nh-if_else",level:2},{value:"V\xed d\u1ee5:",id:"v\xed-d\u1ee5-1",level:3},{value:"C\xe2u L\u1ec7nh IF L\u1ed3ng Nhau",id:"c\xe2u-l\u1ec7nh-if-l\u1ed3ng-nhau",level:2},{value:"T\u1ed5ng K\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function a(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,h.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"c\xe2u-l\u1ec7nh-if",children:"C\xe2u L\u1ec7nh IF"})}),"\n",(0,c.jsx)(i.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi Thi\u1ec7u"}),"\n",(0,c.jsx)(i.p,{children:"Trong ph\u1ea7n n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u v\u1ec1 c\xe2u l\u1ec7nh \u0111i\u1ec1u ki\u1ec7n IF trong ng\xf4n ng\u1eef l\u1eadp tr\xecnh Wave.\nC\xe2u l\u1ec7nh IF \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ki\u1ec3m tra \u0111i\u1ec1u ki\u1ec7n v\xe0 th\u1ef1c thi m\u1ed9t \u0111o\u1ea1n m\xe3 n\u1ebfu \u0111i\u1ec1u ki\u1ec7n \u0111\xf3 \u0111\xfang (True).\n\u0110i\u1ec1u n\xe0y gi\xfap ki\u1ec3m so\xe1t lu\u1ed3ng ch\u01b0\u01a1ng tr\xecnh m\u1ed9t c\xe1ch linh ho\u1ea1t v\xe0 logic."}),"\n",(0,c.jsx)(i.h2,{id:"c\u1ea5u-tr\xfac-c\u01a1-b\u1ea3n",children:"C\u1ea5u Tr\xfac C\u01a1 B\u1ea3n"}),"\n",(0,c.jsx)(i.p,{children:"C\xe2u l\u1ec7nh IF s\u1ebd ki\u1ec3m tra m\u1ed9t \u0111i\u1ec1u ki\u1ec7n v\xe0 n\u1ebfu \u0111i\u1ec1u ki\u1ec7n \u0111\xfang, n\xf3 s\u1ebd th\u1ef1c thi \u0111o\u1ea1n m\xe3 b\xean trong.\nC\u1ea5u tr\xfac c\u01a1 b\u1ea3n c\u1ee7a IF trong Wave nh\u01b0 sau:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-wave",children:"if (\u0111i\u1ec1u_ki\u1ec7n) {\n    // \u0110o\u1ea1n m\xe3 s\u1ebd ch\u1ea1y n\u1ebfu \u0111i\u1ec1u ki\u1ec7n \u0111\xfang\n}\n"})}),"\n",(0,c.jsxs)(i.p,{children:["\u0110i\u1ec1u ki\u1ec7n c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\u1ea1o b\u1eb1ng c\xe1c to\xe1n t\u1eed so s\xe1nh (",(0,c.jsx)(i.code,{children:"=="}),", ",(0,c.jsx)(i.code,{children:"!="}),", ",(0,c.jsx)(i.code,{children:"<"}),", ",(0,c.jsx)(i.code,{children:">"}),", ",(0,c.jsx)(i.code,{children:"<="}),", ",(0,c.jsx)(i.code,{children:">="}),")\nho\u1eb7c to\xe1n t\u1eed logic (",(0,c.jsx)(i.code,{children:"&&"}),", ",(0,c.jsx)(i.code,{children:"||"}),", ",(0,c.jsx)(i.code,{children:"!"}),").\nN\u1ebfu \u0111i\u1ec1u ki\u1ec7n sai (False), \u0111o\u1ea1n m\xe3 b\xean trong s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c th\u1ef1c thi."]}),"\n",(0,c.jsx)(i.h2,{id:"v\xed-d\u1ee5",children:"V\xed D\u1ee5"}),"\n",(0,c.jsx)(i.p,{children:"V\xed d\u1ee5 \u0111\u01a1n gi\u1ea3n v\u1ec1 c\xe2u l\u1ec7nh IF:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-wave",children:'var temperature :i32 = 30;\n\nif (temperature > 25) {\n    println("Th\u1eddi ti\u1ebft n\xf3ng.");\n}\n'})}),"\n",(0,c.jsx)(i.p,{children:'N\u1ebfu temperature l\u1edbn h\u01a1n 25, ch\u01b0\u01a1ng tr\xecnh s\u1ebd in ra "Th\u1eddi ti\u1ebft n\xf3ng."'}),"\n",(0,c.jsx)(i.h2,{id:"c\xe2u-l\u1ec7nh-if_else",children:"C\xe2u L\u1ec7nh IF_ELSE"}),"\n",(0,c.jsx)(i.p,{children:"N\u1ebfu \u0111i\u1ec1u ki\u1ec7n kh\xf4ng \u0111\xfang, ch\xfang ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ELSE \u0111\u1ec3 th\u1ef1c thi m\u1ed9t \u0111o\u1ea1n m\xe3 kh\xe1c.\nC\u1ea5u tr\xfac c\u1ee7a IF-ELSE:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-wave",children:"if (\u0111i\u1ec1u_ki\u1ec7n) {\n    // Ch\u1ea1y n\u1ebfu \u0111i\u1ec1u ki\u1ec7n \u0111\xfang\n} else {\n    // Ch\u1ea1y n\u1ebfu \u0111i\u1ec1u ki\u1ec7n sai\n}\n"})}),"\n",(0,c.jsx)(i.h3,{id:"v\xed-d\u1ee5-1",children:"V\xed d\u1ee5:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("\u0110\u1eadu!");\n} else {\n    println("R\u1edbt.");\n}\n'})}),"\n",(0,c.jsx)(i.p,{children:'N\u1ebfu score l\u1edbn h\u01a1n ho\u1eb7c b\u1eb1ng 60, ch\u01b0\u01a1ng tr\xecnh in ra "\u0110\u1eadu!",\nng\u01b0\u1ee3c l\u1ea1i, n\xf3 s\u1ebd in ra "R\u1edbt."'}),"\n",(0,c.jsx)(i.h2,{id:"c\xe2u-l\u1ec7nh-if-l\u1ed3ng-nhau",children:"C\xe2u L\u1ec7nh IF L\u1ed3ng Nhau"}),"\n",(0,c.jsx)(i.p,{children:"B\u1ea1n c\xf3 th\u1ec3 l\u1ed3ng m\u1ed9t c\xe2u l\u1ec7nh IF b\xean trong m\u1ed9t c\xe2u l\u1ec7nh IF kh\xe1c \u0111\u1ec3 ki\u1ec3m tra nhi\u1ec1u \u0111i\u1ec1u ki\u1ec7n ph\u1ee9c t\u1ea1p."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("Xu\u1ea5t s\u1eafc!");\n    } else {\n        println("\u0110\u1eadu.");\n    } \n} else {\n    println("R\u1edbt.");\n}\n'})}),"\n",(0,c.jsx)(i.p,{children:"Trong v\xed d\u1ee5 tr\xean, t\xf9y thu\u1ed9c v\xe0o \u0111i\u1ec3m s\u1ed1, th\xf4ng b\xe1o \u201cT\u1ed1t!\u201d, \u201c\u0110\u1ea1t\u201d ho\u1eb7c \u201cKh\xf4ng \u0111\u1ea1t\u201d s\u1ebd \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb."}),"\n",(0,c.jsx)(i.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng K\u1ebft"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"IF ki\u1ec3m tra \u0111i\u1ec1u ki\u1ec7n v\xe0 ch\u1ec9 ch\u1ea1y \u0111o\u1ea1n m\xe3 n\u1ebfu \u0111i\u1ec1u ki\u1ec7n \u0111\xfang."}),"\n",(0,c.jsx)(i.li,{children:"ELSE gi\xfap x\u1eed l\xfd tr\u01b0\u1eddng h\u1ee3p khi \u0111i\u1ec1u ki\u1ec7n kh\xf4ng \u0111\xfang."}),"\n",(0,c.jsx)(i.li,{children:"IF l\u1ed3ng nhau cho ph\xe9p ki\u1ec3m tra nhi\u1ec1u \u0111i\u1ec1u ki\u1ec7n ph\u1ee9c t\u1ea1p."}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:"S\u1eed d\u1ee5ng IF gi\xfap ch\u01b0\u01a1ng tr\xecnh tr\u1edf n\xean linh ho\u1ea1t v\xe0 th\xf4ng minh h\u01a1n!"})]})}function d(n={}){const{wrapper:i}={...(0,h.R)(),...n.components};return i?(0,c.jsx)(i,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>s});var t=e(6540);const c={},h=t.createContext(c);function r(n){const i=t.useContext(h);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(h.Provider,{value:i},n.children)}}}]);