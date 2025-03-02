"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[636],{7981:(n,i,h)=>{h.r(i),h.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"syntax/intro","title":"H\xe0m v\xe0 Bi\u1ebfn","description":"Gi\u1edbi thi\u1ec7u","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/syntax/intro.md","sourceDirName":"syntax","slug":"/syntax/intro","permalink":"/vi/docs/syntax/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Ng\u1eef ph\xe1p","permalink":"/vi/docs/syntax/"},"next":{"title":"Ki\u1ec3u D\u1eef Li\u1ec7u","permalink":"/vi/docs/syntax/data_type"}}');var e=h(4848),c=h(8453);const a={sidebar_position:1},r="H\xe0m v\xe0 Bi\u1ebfn",l={},s=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"H\xe0m",id:"h\xe0m",level:2},{value:"\u0110\u1ecbnh ngh\u0129a h\xe0m",id:"\u0111\u1ecbnh-ngh\u0129a-h\xe0m",level:3},{value:"V\xed d\u1ee5: H\xe0m \u0111\u01a1n gi\u1ea3n",id:"v\xed-d\u1ee5-h\xe0m-\u0111\u01a1n-gi\u1ea3n",level:3},{value:"Bi\u1ebfn",id:"bi\u1ebfn",level:2},{value:"Bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i (Mutable)",id:"bi\u1ebfn-c\xf3-th\u1ec3-thay-\u0111\u1ed5i-mutable",level:3},{value:"Bi\u1ebfn b\u1ea5t bi\u1ebfn (Immutable)",id:"bi\u1ebfn-b\u1ea5t-bi\u1ebfn-immutable",level:3},{value:"V\xed d\u1ee5 v\u1ec1 khai b\xe1o bi\u1ebfn",id:"v\xed-d\u1ee5-v\u1ec1-khai-b\xe1o-bi\u1ebfn",level:3}];function d(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.header,{children:(0,e.jsx)(i.h1,{id:"h\xe0m-v\xe0-bi\u1ebfn",children:"H\xe0m v\xe0 Bi\u1ebfn"})}),"\n",(0,e.jsx)(i.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,e.jsx)(i.p,{children:"Tri\u1ebft l\xfd thi\u1ebft k\u1ebf c\u1ed1t l\xf5i c\u1ee7a ng\xf4n ng\u1eef l\u1eadp tr\xecnh Wave l\xe0 \u0111\u1ea1t \u0111\u01b0\u1ee3c s\u1ef1 c\xe2n b\u1eb1ng gi\u1eefa hi\u1ec7u su\u1ea5t c\u1ea5p th\u1ea5p v\xe0 tr\u1eebu t\u01b0\u1ee3ng h\xf3a c\u1ea5p cao, cung c\u1ea5p m\u1ed9t m\xf4i tr\u01b0\u1eddng ph\xe1t tri\u1ec3n linh ho\u1ea1t v\xe0 hi\u1ec7u qu\u1ea3.\nPh\u1ea7n n\xe0y s\u1ebd gi\u1edbi thi\u1ec7u v\u1ec1 h\xe0m v\xe0 bi\u1ebfn, nh\u1eefng th\xe0nh ph\u1ea7n c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t ch\u01b0\u01a1ng tr\xecnh Wave. C\xe1c th\xe0nh ph\u1ea7n n\xe0y \u0111\xf3ng vai tr\xf2 quan tr\u1ecdng trong vi\u1ec7c x\xe2y d\u1ef1ng logic v\xe0 qu\u1ea3n l\xfd d\u1eef li\u1ec7u trong ch\u01b0\u01a1ng tr\xecnh.\nVi\u1ec7c hi\u1ec3u c\xe1ch \u0111\u1ecbnh ngh\u0129a v\xe0 s\u1eed d\u1ee5ng h\xe0m c\u0169ng nh\u01b0 bi\u1ebfn s\u1ebd gi\xfap b\u1ea1n t\u1eadn d\u1ee5ng t\u1ed1i \u0111a ti\u1ec1m n\u0103ng c\u1ee7a Wave."}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h2,{id:"h\xe0m",children:"H\xe0m"}),"\n",(0,e.jsx)(i.p,{children:"Trong Wave, h\xe0m l\xe0 c\xe1c kh\u1ed1i m\xe3 c\xf3 th\u1ec3 t\xe1i s\u1eed d\u1ee5ng, c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c th\u1ef1c thi m\u1ed9t c\xe1ch \u0111\u1ed9c l\u1eadp.\nH\xe0m gi\xfap \u0111\xf3ng g\xf3i m\u1ed9t t\u1eadp h\u1ee3p c\xe1c thao t\xe1c v\xe0 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c g\u1ecdi l\u1ea1i khi c\u1ea7n thi\u1ebft trong to\xe0n b\u1ed9 ch\u01b0\u01a1ng tr\xecnh.\n\u0110i\u1ec1u n\xe0y gi\xfap th\u1ef1c hi\u1ec7n c\xe1c ph\xe9p t\xednh, qu\u1ea3n l\xfd I/O, ho\u1eb7c chia nh\u1ecf m\xe3 th\xe0nh c\xe1c ph\u1ea7n d\u1ec5 qu\u1ea3n l\xfd h\u01a1n."}),"\n",(0,e.jsxs)(i.p,{children:["C\xfa ph\xe1p \u0111\u1ecbnh ngh\u0129a h\xe0m trong Wave b\u1eaft \u0111\u1ea7u v\u1edbi t\u1eeb kh\xf3a ",(0,e.jsx)(i.code,{children:"fun"}),", theo sau l\xe0 t\xean h\xe0m, tham s\u1ed1 (n\u1ebfu c\xf3) v\xe0 kh\u1ed1i l\u1ec7nh \u0111\u01b0\u1ee3c \u0111\u1eb7t trong d\u1ea5u ",(0,e.jsx)(i.code,{children:"{}"}),"."]}),"\n",(0,e.jsx)(i.h3,{id:"\u0111\u1ecbnh-ngh\u0129a-h\xe0m",children:"\u0110\u1ecbnh ngh\u0129a h\xe0m"}),"\n",(0,e.jsx)(i.p,{children:"M\u1ed9t h\xe0m c\u01a1 b\u1ea3n trong Wave \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a nh\u01b0 sau:"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-wave",children:"fun main() {\n    // Vi\u1ebft m\xe3 c\u1ee7a b\u1ea1n \u1edf \u0111\xe2y\n}\n"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["H\xe0m ",(0,e.jsx)(i.code,{children:"main"})," l\xe0 \u0111i\u1ec3m kh\u1edfi ch\u1ea1y c\u1ee7a ch\u01b0\u01a1ng tr\xecnh v\xe0 lu\xf4n c\u1ea7n thi\u1ebft."]}),"\n",(0,e.jsx)(i.li,{children:"M\u1ed9t h\xe0m c\xf3 th\u1ec3 c\xf3 tham s\u1ed1 v\xe0 tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb. Ki\u1ec3u tr\u1ea3 v\u1ec1 \u0111\u01b0\u1ee3c khai b\xe1o sau t\xean h\xe0m."}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"v\xed-d\u1ee5-h\xe0m-\u0111\u01a1n-gi\u1ea3n",children:"V\xed d\u1ee5: H\xe0m \u0111\u01a1n gi\u1ea3n"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-wave",children:"fun add(a :i32, b :i32) -> i32 {\n    return a + b;\n}\n\nfun main() {\n    var result = add(5, 7);     // G\u1ecdi h\xe0m add\n    println(result);            // K\u1ebft qu\u1ea3: 12\n}\n"})}),"\n",(0,e.jsx)(i.p,{children:"Trong v\xed d\u1ee5 tr\xean:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"add"})," l\xe0 m\u1ed9t h\xe0m nh\u1eadn hai s\u1ed1 nguy\xean ",(0,e.jsx)(i.code,{children:"a"})," v\xe0 ",(0,e.jsx)(i.code,{children:"b"}),", sau \u0111\xf3 tr\u1ea3 v\u1ec1 t\u1ed5ng c\u1ee7a ch\xfang."]}),"\n",(0,e.jsxs)(i.li,{children:["H\xe0m ",(0,e.jsx)(i.code,{children:"main"})," g\u1ecdi ",(0,e.jsx)(i.code,{children:"add"})," v\xe0 in k\u1ebft qu\u1ea3 ra m\xe0n h\xecnh."]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"bi\u1ebfn",children:"Bi\u1ebfn"}),"\n",(0,e.jsx)(i.p,{children:"Bi\u1ebfn \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef v\xe0 thao t\xe1c d\u1eef li\u1ec7u trong ch\u01b0\u01a1ng tr\xecnh.\nWave h\u1ed7 tr\u1ee3 c\u1ea3 bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i (mutable) v\xe0 bi\u1ebfn b\u1ea5t bi\u1ebfn (immutable), gi\xfap l\u1eadp tr\xecnh vi\xean ki\u1ec3m so\xe1t d\u1eef li\u1ec7u hi\u1ec7u qu\u1ea3 h\u01a1n."}),"\n",(0,e.jsx)(i.h3,{id:"bi\u1ebfn-c\xf3-th\u1ec3-thay-\u0111\u1ed5i-mutable",children:"Bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i (Mutable)"}),"\n",(0,e.jsx)(i.p,{children:"Trong Wave, c\xe1c bi\u1ebfn m\u1eb7c \u0111\u1ecbnh l\xe0 c\xf3 th\u1ec3 thay \u0111\u1ed5i (mutable), c\xf3 ngh\u0129a l\xe0 gi\xe1 tr\u1ecb c\u1ee7a ch\xfang c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt trong qu\xe1 tr\xecnh ch\u1ea1y ch\u01b0\u01a1ng tr\xecnh."}),"\n",(0,e.jsxs)(i.p,{children:["Bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i \u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng t\u1eeb kh\xf3a ",(0,e.jsx)(i.code,{children:"var"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-wave",children:"var x :i32 = 10; // Bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i\nx = 20;\n"})}),"\n",(0,e.jsx)(i.p,{children:"Trong v\xed d\u1ee5 tr\xean:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"x"})," l\xe0 m\u1ed9t bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i, ban \u0111\u1ea7u c\xf3 gi\xe1 tr\u1ecb ",(0,e.jsx)(i.code,{children:"10"})," v\xe0 sau \u0111\xf3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt th\xe0nh ",(0,e.jsx)(i.code,{children:"20"}),"."]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"bi\u1ebfn-b\u1ea5t-bi\u1ebfn-immutable",children:"Bi\u1ebfn b\u1ea5t bi\u1ebfn (Immutable)"}),"\n",(0,e.jsx)(i.p,{children:"Bi\u1ebfn b\u1ea5t bi\u1ebfn (immutable) l\xe0 bi\u1ebfn m\xe0 gi\xe1 tr\u1ecb c\u1ee7a n\xf3 kh\xf4ng th\u1ec3 thay \u0111\u1ed5i sau khi \u0111\u01b0\u1ee3c g\xe1n l\u1ea7n \u0111\u1ea7u ti\xean."}),"\n",(0,e.jsx)(i.p,{children:"Bi\u1ebfn b\u1ea5t bi\u1ebfn \u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng t\u1eeb kh\xf3a var imm:"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-wave",children:"var imm y :i32 = 5;     // Bi\u1ebfn b\u1ea5t bi\u1ebfn\n// y = 10;              // L\u1ed7i: Kh\xf4ng th\u1ec3 thay \u0111\u1ed5i gi\xe1 tr\u1ecb c\u1ee7a bi\u1ebfn b\u1ea5t bi\u1ebfn\n"})}),"\n",(0,e.jsx)(i.p,{children:"Trong tr\u01b0\u1eddng h\u1ee3p n\xe0y:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"y"})," l\xe0 m\u1ed9t bi\u1ebfn b\u1ea5t bi\u1ebfn, n\u1ebfu c\u1ed1 g\u1eafng thay \u0111\u1ed5i gi\xe1 tr\u1ecb c\u1ee7a n\xf3, ch\u01b0\u01a1ng tr\xecnh s\u1ebd b\xe1o l\u1ed7i bi\xean d\u1ecbch."]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"v\xed-d\u1ee5-v\u1ec1-khai-b\xe1o-bi\u1ebfn",children:"V\xed d\u1ee5 v\u1ec1 khai b\xe1o bi\u1ebfn"}),"\n",(0,e.jsx)(i.p,{children:"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 v\xed d\u1ee5 khai b\xe1o c\xe1c bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i v\xe0 b\u1ea5t bi\u1ebfn v\u1edbi c\xe1c ki\u1ec3u d\u1eef li\u1ec7u kh\xe1c nhau:"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-wave",children:'var x :i32 = 10;                    // Bi\u1ebfn s\u1ed1 nguy\xean c\xf3 th\u1ec3 thay \u0111\u1ed5i\nvar imm y :f64 = 3.14159;           // Bi\u1ebfn s\u1ed1 th\u1ef1c b\u1ea5t bi\u1ebfn\nvar name :str = "Wave";             // Bi\u1ebfn chu\u1ed7i c\xf3 th\u1ec3 thay \u0111\u1ed5i\nvar imm is_active :bool = true;     // Bi\u1ebfn boolean b\u1ea5t bi\u1ebfn\n'})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"x"})," l\xe0 m\u1ed9t bi\u1ebfn s\u1ed1 nguy\xean c\xf3 th\u1ec3 thay \u0111\u1ed5i."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"y"})," l\xe0 m\u1ed9t bi\u1ebfn s\u1ed1 th\u1ef1c b\u1ea5t bi\u1ebfn."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"name"})," l\xe0 m\u1ed9t bi\u1ebfn chu\u1ed7i c\xf3 th\u1ec3 thay \u0111\u1ed5i."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"is_active"})," l\xe0 m\u1ed9t bi\u1ebfn boolean b\u1ea5t bi\u1ebfn."]}),"\n"]}),"\n",(0,e.jsxs)(i.p,{children:["Trong Wave, t\u1eeb kh\xf3a ",(0,e.jsx)(i.code,{children:"var"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 khai b\xe1o bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i, trong khi ",(0,e.jsx)(i.code,{children:"var imm"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 khai b\xe1o bi\u1ebfn b\u1ea5t bi\u1ebfn (kh\xf4ng th\u1ec3 thay \u0111\u1ed5i sau khi kh\u1edfi t\u1ea1o)."]}),"\n",(0,e.jsx)(i.p,{children:"Vi\u1ec7c ph\xe2n bi\u1ec7t gi\u1eefa bi\u1ebfn c\xf3 th\u1ec3 thay \u0111\u1ed5i v\xe0 b\u1ea5t bi\u1ebfn gi\xfap Wave ki\u1ec3m so\xe1t tr\u1ea1ng th\xe1i c\u1ee7a ch\u01b0\u01a1ng tr\xecnh hi\u1ec7u qu\u1ea3 h\u01a1n, t\u1eeb \u0111\xf3 t\u1ea1o ra m\xe3 ngu\u1ed3n \u1ed5n \u0111\u1ecbnh v\xe0 d\u1ec5 \u0111o\xe1n h\u01a1n."})]})}function o(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},8453:(n,i,h)=>{h.d(i,{R:()=>a,x:()=>r});var t=h(6540);const e={},c=t.createContext(e);function a(n){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:a(n.components),t.createElement(c.Provider,{value:i},n.children)}}}]);