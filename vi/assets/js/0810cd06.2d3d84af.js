"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[3511],{8453:(n,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var h=i(6540);const e={},c=h.createContext(e);function a(n){const t=h.useContext(c);return h.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:a(n.components),h.createElement(c.Provider,{value:t},n.children)}},9640:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>h,toc:()=>o});const h=JSON.parse('{"id":"syntax/syntax","title":"Ng\u1eef ph\xe1p","description":"T\xe0i li\u1ec7u n\xe0y gi\u1ea3i th\xedch v\u1ec1 ng\u1eef ph\xe1p c\u1ee7a ng\xf4n ng\u1eef l\u1eadp tr\xecnh Wave. V\xec Wave v\u1eabn \u0111ang trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n, m\u1ed9t s\u1ed1 c\xfa ph\xe1p v\xe0 t\xednh n\u0103ng c\xf3 th\u1ec3 ch\u01b0a ho\xe0n thi\u1ec7n ho\u1eb7c c\xf3 th\u1ec3 thay \u0111\u1ed5i trong t\u01b0\u01a1ng lai.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/syntax/syntax.md","sourceDirName":"syntax","slug":"/syntax/","permalink":"/vi/docs/syntax/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/syntax.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\uccab \ubc88\uc9f8 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\ud558\uae30","permalink":"/vi/docs/intro/run"},"next":{"title":"H\xe0m v\xe0 Bi\u1ebfn","permalink":"/vi/docs/syntax/intro"}}');var e=i(4848),c=i(8453);const a={sidebar_position:1},r="Ng\u1eef ph\xe1p",s={},o=[];function p(n){const t={h1:"h1",header:"header",p:"p",...(0,c.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.header,{children:(0,e.jsx)(t.h1,{id:"ng\u1eef-ph\xe1p",children:"Ng\u1eef ph\xe1p"})}),"\n",(0,e.jsx)(t.p,{children:"T\xe0i li\u1ec7u n\xe0y gi\u1ea3i th\xedch v\u1ec1 ng\u1eef ph\xe1p c\u1ee7a ng\xf4n ng\u1eef l\u1eadp tr\xecnh Wave. V\xec Wave v\u1eabn \u0111ang trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n, m\u1ed9t s\u1ed1 c\xfa ph\xe1p v\xe0 t\xednh n\u0103ng c\xf3 th\u1ec3 ch\u01b0a ho\xe0n thi\u1ec7n ho\u1eb7c c\xf3 th\u1ec3 thay \u0111\u1ed5i trong t\u01b0\u01a1ng lai.\nTuy nhi\xean, t\xe0i li\u1ec7u n\xe0y s\u1ebd gi\xfap b\u1ea1n hi\u1ec3u tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i v\xe0 c\xe1c kh\xe1i ni\u1ec7m ch\xednh c\u1ee7a ng\xf4n ng\u1eef, \u0111\u1ed3ng th\u1eddi cung c\u1ea5p c\xe1i nh\xecn s\xe2u s\u1eafc v\u1ec1 h\u01b0\u1edbng ph\xe1t tri\u1ec3n trong t\u01b0\u01a1ng lai."}),"\n",(0,e.jsx)(t.p,{children:"Wave l\xe0 m\u1ed9t ng\xf4n ng\u1eef k\u1ebft h\u1ee3p gi\u1eefa ki\u1ec3m so\xe1t c\u1ea5p th\u1ea5p v\xe0 tr\u1eebu t\u01b0\u1ee3ng h\xf3a c\u1ea5p cao, ph\xf9 h\u1ee3p v\u1edbi nhi\u1ec1u l\u0129nh v\u1ef1c nh\u01b0 l\u1eadp tr\xecnh h\u1ec7 th\u1ed1ng, ph\xe1t tri\u1ec3n web, tr\xed tu\u1ec7 nh\xe2n t\u1ea1o v\xe0 blockchain.\nKh\xf4ng ch\u1ec9 cung c\u1ea5p hi\u1ec7u su\u1ea5t cao v\xe0 t\xednh linh ho\u1ea1t, Wave c\xf2n h\u1ed7 tr\u1ee3 l\u1eadp tr\xecnh vi\xean l\xe0m vi\u1ec7c hi\u1ec7u qu\u1ea3 th\xf4ng qua th\u01b0 vi\u1ec7n ti\xeau chu\u1ea9n m\u1ea1nh m\u1ebd v\xe0 h\u1ec7 th\u1ed1ng build t\xedch h\u1ee3p."}),"\n",(0,e.jsx)(t.p,{children:"Ng\u1eef ph\xe1p c\u1ee7a Wave c\xf3 nhi\u1ec1u \u0111i\u1ec3m t\u01b0\u01a1ng \u0111\u1ed3ng v\u1edbi c\xe1c ng\xf4n ng\u1eef nh\u01b0 C v\xe0 Rust, gi\xfap l\u1eadp tr\xecnh vi\xean d\u1ec5 d\xe0ng l\xe0m quen v\xe0 n\xe2ng cao n\u0103ng su\u1ea5t nhanh ch\xf3ng.\nT\xe0i li\u1ec7u n\xe0y s\u1ebd gi\u1edbi thi\u1ec7u c\xe1c c\xfa ph\xe1p v\xe0 t\xednh n\u0103ng c\u01a1 b\u1ea3n c\u1ee7a Wave c\xf9ng v\u1edbi c\xe1c v\xed d\u1ee5 th\u1ef1c t\u1ebf."})]})}function u(n={}){const{wrapper:t}={...(0,c.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(p,{...n})}):p(n)}}}]);