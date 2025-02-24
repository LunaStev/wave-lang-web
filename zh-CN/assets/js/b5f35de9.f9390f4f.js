"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[7500],{898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"syntax/data_type","title":"\u6570\u636e\u7c7b\u578b","description":"\u672c\u6587\u4ecb\u7ecd\u4e86Wave\u7f16\u7a0b\u8bed\u8a00\u63d0\u4f9b\u7684\u5404\u79cd\u6570\u636e\u7c7b\u578b\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/zh-CN/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u51fd\u6570\u4e0e\u53d8\u91cf","permalink":"/zh-CN/docs/syntax/intro"},"next":{"title":"IF \u8bed\u53e5","permalink":"/zh-CN/docs/syntax/if"}}');var l=s(4848),c=s(8453);const d={sidebar_position:2},i="\u6570\u636e\u7c7b\u578b",a={},t=[{value:"\u6574\u6570\u7c7b\u578b",id:"\u6574\u6570\u7c7b\u578b",level:2},{value:"\u6d6e\u70b9\u6570\u7c7b\u578b",id:"\u6d6e\u70b9\u6570\u7c7b\u578b",level:2},{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:2},{value:"\u5e03\u5c14\u7c7b\u578b",id:"\u5e03\u5c14\u7c7b\u578b",level:2},{value:"\u5b57\u7b26\u7c7b\u578b",id:"\u5b57\u7b26\u7c7b\u578b",level:2},{value:"\u5b57\u8282\u7c7b\u578b",id:"\u5b57\u8282\u7c7b\u578b",level:2},{value:"\u6307\u9488\u7c7b\u578b",id:"\u6307\u9488\u7c7b\u578b",level:2},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"})}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86Wave\u7f16\u7a0b\u8bed\u8a00\u63d0\u4f9b\u7684\u5404\u79cd\u6570\u636e\u7c7b\u578b\u3002\nWave\u7f16\u7a0b\u8bed\u8a00\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u6765\u5b58\u50a8\u548c\u8fd0\u7b97\u503c\u3002\n\u4e3b\u8981\u6570\u636e\u7c7b\u578b\u5305\u62ec\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5b57\u7b26\u4e32\u7b49\u3002\u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\u4e86\u6570\u636e\u7684\u7279\u6027\u548c\u5185\u5b58\u5904\u7406\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u6574\u6570\u7c7b\u578b",children:"\u6574\u6570\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u6574\u6570\u7c7b\u578b\u7528\u4e8e\u5b58\u50a8",(0,l.jsx)(n.strong,{children:"\u6574\u6570\u503c"}),"\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6574\u6570\u6709",(0,l.jsx)(n.code,{children:"i32"}),"\uff08\u6709\u7b26\u53f732\u4f4d\u6574\u6570\uff09\u548c",(0,l.jsx)(n.code,{children:"u32"}),"\uff08\u65e0\u7b26\u53f732\u4f4d\u6574\u6570\uff09\u4e24\u79cd\u7c7b\u578b\u3002\nWave\u7f16\u7a0b\u8bed\u8a00\u63d0\u4f9b\u4e86\u4e0d\u540c\u5927\u5c0f\u7684\u9009\u9879\uff0c\u53ef\u4ee5\u7ec6\u81f4\u5730\u8bbe\u7f6e\u6574\u6570\u7684\u8303\u56f4\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"i8"})," ~ ",(0,l.jsx)(n.code,{children:"i1024"}),"\uff1a\u6709\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u5927\u5c0f\u53ef\u4ee5\u4ece8\u4f4d\u52301024\u4f4d\u4e0d\u7b49\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"u8"})," ~ ",(0,l.jsx)(n.code,{children:"u1024"}),"\uff1a\u65e0\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u5927\u5c0f\u53ef\u4ee5\u4ece8\u4f4d\u52301024\u4f4d\u4e0d\u7b49\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6d6e\u70b9\u6570\u7c7b\u578b",children:"\u6d6e\u70b9\u6570\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u6d6e\u70b9\u6570\u7c7b\u578b\u7528\u4e8e\u5b58\u50a8\u5b9e\u6570\u503c\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d6e\u70b9\u6570\u662f\u901a\u8fc7",(0,l.jsx)(n.code,{children:"f32"}),"\u58f0\u660e\u7684\u3002\n\u6b64\u5916\uff0c\u6d6e\u70b9\u6570\u7684\u5927\u5c0f\u53ef\u4ee5\u7cbe\u786e\u5730\u5b9a\u4e49\uff0c\u63d0\u4f9b\u4e86\u4e0d\u540c\u5927\u5c0f\u7684\u9009\u9879\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"f32"})," ~ ",(0,l.jsx)(n.code,{children:"f1024"}),"\uff1a\u6d6e\u70b9\u6570\u7c7b\u578b\u7684\u5927\u5c0f\u53ef\u4ee5\u4ece32\u4f4d\u52301024\u4f4d\u4e0d\u7b49\uff0c\u53ef\u4ee5\u8fdb\u884c\u66f4\u9ad8\u7cbe\u5ea6\u7684\u5b9e\u6570\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b57\u7b26\u4e32\u7c7b\u578b",children:"\u5b57\u7b26\u4e32\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5b57\u7b26\u4e32\u7c7b\u578b\u7528\u4e8e\u5904\u7406\u6587\u672c\u6570\u636e\u3002\u901a\u8fc7",(0,l.jsx)(n.code,{children:"str"}),"\u5173\u952e\u5b57\u58f0\u660e\u5b57\u7b26\u4e32\u3002\n\u5b57\u7b26\u4e32\u901a\u5e38\u7528\u53cc\u5f15\u53f7(",(0,l.jsx)(n.code,{children:'"'}),")\u62ec\u8d77\u6765\u5b9a\u4e49\uff0c\u5e76\u53ef\u4ee5\u5c06\u5b57\u7b26\u4e32\u503c\u5206\u914d\u7ed9\u53d8\u91cf\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5e03\u5c14\u7c7b\u578b",children:"\u5e03\u5c14\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5e03\u5c14\u7c7b\u578b\u7528\u4e8e\u8868\u793a\u771f(True)\u6216\u5047(False)\u503c\u3002\n\u5b83\u901a\u5e38\u5728\u6761\u4ef6\u8bed\u53e5\u4e2d\u4f7f\u7528\uff0c\u503c\u4e3a",(0,l.jsx)(n.code,{children:"true"}),"\u6216",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b57\u7b26\u7c7b\u578b",children:"\u5b57\u7b26\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5b57\u7b26\u7c7b\u578b\u7528\u4e8e\u5b58\u50a8\u5355\u4e2a\u5b57\u7b26\u3002\n\u901a\u8fc7",(0,l.jsx)(n.code,{children:"char"}),"\u5173\u952e\u5b57\u58f0\u660e\uff0c\u5e76\u4e14\u53ea\u80fd\u5b58\u50a8\u4e00\u4e2a\u5b57\u7b26\u503c\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b57\u8282\u7c7b\u578b",children:"\u5b57\u8282\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5b57\u8282\u7c7b\u578b\u7528\u4e8e\u5b58\u50a8",(0,l.jsx)(n.strong,{children:"1\u5b57\u8282"}),"\u5927\u5c0f\u7684\u6570\u636e\u3002\n\u5b83\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u901a\u8fc7",(0,l.jsx)(n.code,{children:"byte"}),"\u5173\u952e\u5b57\u58f0\u660e\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6307\u9488\u7c7b\u578b",children:"\u6307\u9488\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u6307\u9488\u7c7b\u578b\u7528\u4e8e\u5f15\u7528",(0,l.jsx)(n.strong,{children:"\u5185\u5b58\u5730\u5740"}),"\u3002\n\u901a\u8fc7",(0,l.jsx)(n.code,{children:"ptr"}),"\u5173\u952e\u5b57\u58f0\u660e\u6307\u9488\uff0c\u7528\u4e8e\u5b58\u50a8\u5185\u5b58\u5730\u5740\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u7ec4\u7c7b\u578b",children:"\u6570\u7ec4\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u6570\u7ec4\u7c7b\u578b\u7528\u4e8e\u5b58\u50a8",(0,l.jsx)(n.strong,{children:"\u591a\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20"}),"\u3002\n\u901a\u8fc7",(0,l.jsx)(n.code,{children:"array"}),"\u5173\u952e\u5b57\u58f0\u660e\uff0c\u53ef\u4ee5\u6307\u5b9a\u6570\u7ec4\u7684\u5927\u5c0f\u548c\u7c7b\u578b\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u8303\u56f4\u548c\u5927\u5c0f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u7c7b\u578b\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u6548\u7684\u5185\u5b58\u7ba1\u7406\u548c\u8ba1\u7b97\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(6540);const l={},c=r.createContext(l);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);