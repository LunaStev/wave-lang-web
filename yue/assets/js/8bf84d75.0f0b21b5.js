"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[3815],{1854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"wson/wson","title":"Wave \u7269\u4ef6\u5e8f\u5217\u5316\u8868\u793a\u6cd5 (WSON)","description":"WSON (Wave Serialized Object Notation) \u662f Wave \u7a0b\u5f0f\u8a9e\u8a00\u7684\u9810\u8a2d\u8cc7\u6599\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u65e8\u5728\u514b\u670d\u50b3\u7d71 JSON \u7684\u9650\u5236\uff0c\u540c\u6642\u63d0\u4f9b\u66f4\u5f37\u5927\u7684\u529f\u80fd\u548c\u6548\u7387\u3002WSON \u5728\u4fdd\u6301\u6613\u65bc\u4eba\u985e\u95b1\u8b80\u548c\u7de8\u5beb\u7684\u7d50\u69cb\u7684\u540c\u6642\uff0c\u6700\u5927\u5316\u6027\u80fd\uff0c\u5f9e\u800c\u4f7f\u8cc7\u6599\u5728\u4e0d\u540c\u74b0\u5883\u4e2d\u80fd\u5920\u66f4\u5feb\u901f\u4e14\u5b89\u5168\u5730\u4ea4\u63db\u3002","source":"@site/i18n/yue/docusaurus-plugin-content-docs/current/wson/wson.md","sourceDirName":"wson","slug":"/wson/","permalink":"/yue/docs/wson/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wson/wson.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Whale \ucef4\ud30c\uc77c\ub7ec \ud234\uccb4\uc778","permalink":"/yue/docs/ecosystem/whale"},"next":{"title":"\u8a9e\u6cd5","permalink":"/yue/docs/wson/intro"}}');var t=s(4848),l=s(8453);const r={sidebar_position:3},a="Wave \u7269\u4ef6\u5e8f\u5217\u5316\u8868\u793a\u6cd5 (WSON)",d={},o=[{value:"\u7279\u5fb5",id:"\u7279\u5fb5",level:2},{value:"1. \u56b4\u683c\u7684\u985e\u578b\u7cfb\u7d71",id:"1-\u56b4\u683c\u7684\u985e\u578b\u7cfb\u7d71",level:3},{value:"2. \u9ad8\u6548\u80fd",id:"2-\u9ad8\u6548\u80fd",level:3},{value:"3. \u8207 Wave \u7684\u517c\u5bb9\u8a2d\u8a08",id:"3-\u8207-wave-\u7684\u517c\u5bb9\u8a2d\u8a08",level:3},{value:"4. \u53ef\u8b80\u6027\u548c\u6613\u65bc\u89e3\u6790",id:"4-\u53ef\u8b80\u6027\u548c\u6613\u65bc\u89e3\u6790",level:3},{value:"5. \u652f\u6301\u591a\u7a2e\u8cc7\u6599\u7d50\u69cb",id:"5-\u652f\u6301\u591a\u7a2e\u8cc7\u6599\u7d50\u69cb",level:3},{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"wave-\u7269\u4ef6\u5e8f\u5217\u5316\u8868\u793a\u6cd5-wson",children:"Wave \u7269\u4ef6\u5e8f\u5217\u5316\u8868\u793a\u6cd5 (WSON)"})}),"\n",(0,t.jsx)(n.p,{children:"WSON (Wave Serialized Object Notation) \u662f Wave \u7a0b\u5f0f\u8a9e\u8a00\u7684\u9810\u8a2d\u8cc7\u6599\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u65e8\u5728\u514b\u670d\u50b3\u7d71 JSON \u7684\u9650\u5236\uff0c\u540c\u6642\u63d0\u4f9b\u66f4\u5f37\u5927\u7684\u529f\u80fd\u548c\u6548\u7387\u3002WSON \u5728\u4fdd\u6301\u6613\u65bc\u4eba\u985e\u95b1\u8b80\u548c\u7de8\u5beb\u7684\u7d50\u69cb\u7684\u540c\u6642\uff0c\u6700\u5927\u5316\u6027\u80fd\uff0c\u5f9e\u800c\u4f7f\u8cc7\u6599\u5728\u4e0d\u540c\u74b0\u5883\u4e2d\u80fd\u5920\u66f4\u5feb\u901f\u4e14\u5b89\u5168\u5730\u4ea4\u63db\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u5fb5",children:"\u7279\u5fb5"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u56b4\u683c\u7684\u985e\u578b\u7cfb\u7d71",children:"1. \u56b4\u683c\u7684\u985e\u578b\u7cfb\u7d71"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u4fdd\u6301\u660e\u78ba\u7684\u8cc7\u6599\u985e\u578b\uff0c\u6d88\u9664\u4e86 JSON \u52d5\u614b\u985e\u578b\u6240\u5e36\u4f86\u7684\u4e0d\u53ef\u9810\u6e2c\u6027\u3002\u9019\u78ba\u4fdd\u4e86\u5728\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u904e\u7a0b\u4e2d\u7684\u985e\u578b\u5b89\u5168\u6027\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"2-\u9ad8\u6548\u80fd",children:"2. \u9ad8\u6548\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u8a2d\u8a08\u4e0a\u5177\u6709\u6700\u5c0f\u7684\u958b\u92b7\uff0c\u63d0\u4f9b\u5feb\u901f\u7684\u8cc7\u6599\u8655\u7406\u901f\u5ea6\u3002\u9019\u5728\u8655\u7406\u5927\u91cf\u8cc7\u6599\u6642\u5c24\u5176\u6709\u6548\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"3-\u8207-wave-\u7684\u517c\u5bb9\u8a2d\u8a08",children:"3. \u8207 Wave \u7684\u517c\u5bb9\u8a2d\u8a08"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u8a2d\u8a08\u70ba\u8207 Wave \u7a0b\u5f0f\u8a9e\u8a00\u7121\u7e2b\u96c6\u6210\uff0c\u4e26\u7531 Wave \u7684\u6a19\u6e96\u5eab\u539f\u751f\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"4-\u53ef\u8b80\u6027\u548c\u6613\u65bc\u89e3\u6790",children:"4. \u53ef\u8b80\u6027\u548c\u6613\u65bc\u89e3\u6790"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u5728\u4fdd\u6301\u8207 JSON \u985e\u4f3c\u7684\u8a9e\u6cd5\u7d50\u69cb\u7684\u540c\u6642\uff0c\u5141\u8a31\u4f7f\u7528\u66f4\u7c21\u6f54\u7684\u8868\u9054\u65b9\u5f0f\uff0c\u4f7f\u4eba\u985e\u66f4\u5bb9\u6613\u95b1\u8b80\u548c\u4fee\u6539\u3002\u4e26\u4e14\uff0c\u5b83\u7d93\u904e\u512a\u5316\uff0c\u80fd\u5920\u9032\u884c\u9ad8\u6548\u7684\u89e3\u6790\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"5-\u652f\u6301\u591a\u7a2e\u8cc7\u6599\u7d50\u69cb",children:"5. \u652f\u6301\u591a\u7a2e\u8cc7\u6599\u7d50\u69cb"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u4e0d\u50c5\u652f\u6301\u7c21\u55ae\u7684\u9375\u503c\u5c0d\uff0c\u9084\u652f\u6301\u8907\u96dc\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u5982\u672c\u5730\u9663\u5217\u3001\u7d50\u69cb\u548c\u5143\u7d44\uff0c\u9019\u4f7f\u5f97\u8cc7\u6599\u8868\u793a\u66f4\u52a0\u9748\u6d3b\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u4f8b",children:"\u7528\u4f8b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wave \u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u8cc7\u6599\u5b58\u5132\u548c\u50b3\u8f38"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7db2\u7d61\u901a\u4fe1\u548c API \u8cc7\u6599\u683c\u5f0f"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6a94\u6848\u5b58\u5132\u548c\u8a2d\u5b9a\u6a94\u683c\u5f0f"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5927\u578b\u8cc7\u6599\u7684\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,t.jsx)(n.p,{children:"WSON \u53cd\u6620\u4e86 Wave \u7a0b\u5f0f\u8a9e\u8a00\u7684\u7406\u5ff5\uff0c\u65e8\u5728\u63d0\u4f9b\u66f4\u9ad8\u6548\u3001\u66f4\u5f37\u5927\u7684\u8cc7\u6599\u5e8f\u5217\u5316\u3002\u5b83\u5f4c\u88dc\u4e86\u50b3\u7d71 JSON \u7684\u7f3a\u9ede\uff0c\u540c\u6642\u4fdd\u6301\u76f4\u89c0\u7684\u8a9e\u6cd5\uff0c\u8b93\u958b\u767c\u8005\u66f4\u5bb9\u6613\u4f7f\u7528\u3002\u672a\u4f86\uff0cWSON \u5c07\u6210\u70ba Wave \u751f\u614b\u7cfb\u7d71\u4e2d\u7684\u6a19\u6e96\u8cc7\u6599\u683c\u5f0f\uff0c\u4e26\u5728\u5404\u7a2e\u74b0\u5883\u4e2d\u63d0\u4f9b\u5f37\u5927\u7684\u6027\u80fd\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);