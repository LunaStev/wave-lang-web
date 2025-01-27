"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6091],{8036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"ecosystem/ecosystem","title":"Wave \u30a8\u30b3\u30b7\u30b9\u30c6\u30e0","description":"\u6982\u8981","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ecosystem/ecosystem.md","sourceDirName":"ecosystem","slug":"/ecosystem/","permalink":"/ja/docs/ecosystem/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ecosystem/ecosystem.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"IF Statement","permalink":"/ja/docs/syntax/if"},"next":{"title":"Wave OS","permalink":"/ja/docs/ecosystem/intro"}}');var l=s(4848),t=s(8453);const r={sidebar_position:2},a="Wave \u30a8\u30b3\u30b7\u30b9\u30c6\u30e0",c={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210",id:"wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210",level:2},{value:"Wave",id:"wave",level:3},{value:"\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea",id:"\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea",level:3},{value:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3068\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u54f2\u5b66",id:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3068\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u54f2\u5b66",level:3},{value:"\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3",id:"\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3",level:3},{value:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u76ee\u6a19",id:"wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u76ee\u6a19",level:2}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"wave-\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0",children:"Wave \u30a8\u30b3\u30b7\u30b9\u30c6\u30e0"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u5358\u306a\u308b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3092\u8d85\u3048\u305f\u5b58\u5728\u3067\u3059\u3002\nWave\u306f\u591a\u69d8\u306a\u30c4\u30fc\u30eb\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u3001\u305d\u3057\u3066\u958b\u767a\u54f2\u5b66\u304c\u878d\u5408\u3057\u305f\u74b0\u5883\u3092\u63d0\u4f9b\u3057\u3001\n\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u304c\u3069\u306e\u5206\u91ce\u3067\u3082\u5275\u9020\u7684\u306b\u4f5c\u696d\u3067\u304d\u308b\u3088\u3046\u652f\u63f4\u3059\u308b\u5305\u62ec\u7684\u306a\u958b\u767a\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3067\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210",children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210"}),"\n",(0,l.jsx)(n.h3,{id:"wave",children:"Wave"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u4e2d\u5fc3\u306fWave\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u3059\u3002\nC\u3068Rust\u306e\u54f2\u5b66\u3092\u57fa\u76e4\u306b\u3001\u4f4e\u30ec\u30d9\u30eb\u306e\u5236\u5fa1\u3068\u9ad8\u30ec\u30d9\u30eb\u306e\u751f\u7523\u6027\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u76ee\u6307\u3057\u3066\u8a2d\u8a08\u3055\u308c\u307e\u3057\u305f\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b66\u7fd2\u66f2\u7dda\u306e\u512a\u3057\u3055: C\u3068Rust\u306e\u4e2d\u9593\u96e3\u6613\u5ea6\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5f37\u529b\u306a\u6a5f\u80fd: \u30dd\u30a4\u30f3\u30bf\u3001\u914d\u5217\u3001\u30b7\u30ea\u30a2\u30eb\u5316\u306a\u3069\u591a\u69d8\u306a\u30c7\u30fc\u30bf\u578b\u3092\u30b5\u30dd\u30fc\u30c8\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea",children:"\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u304c\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u983c\u3089\u305a\u3068\u3082\u958b\u767a\u3067\u304d\u308b\u3088\u3046\u3001\u8c4a\u5bcc\u306a\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hardwave: \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u5236\u5fa1"}),"\n",(0,l.jsx)(n.li,{children:"http: HTTP\u304a\u3088\u3073WebSocket\u901a\u4fe1"}),"\n",(0,l.jsx)(n.li,{children:"iosys: \u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u30b9\u30c8\u30ea\u30fc\u30e0I/O"}),"\n",(0,l.jsx)(n.li,{children:"sys: \u30b7\u30b9\u30c6\u30e0\u5236\u5fa1"}),"\n",(0,l.jsx)(n.li,{children:"wson: \u9ad8\u6027\u80fd\u30c7\u30fc\u30bf\u30b7\u30ea\u30a2\u30eb\u5316\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"}),"\n",(0,l.jsx)(n.li,{children:"quantum: \u91cf\u5b50\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u5bfe\u5fdc"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3068\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u54f2\u5b66",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3068\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u54f2\u5b66"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u306f\u8a00\u8a9e\u305d\u306e\u3082\u306e\u3060\u3051\u3067\u306a\u304f\u3001\u958b\u767a\u8005\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u958b\u767a\u8005\u4e2d\u5fc3\u8a2d\u8a08: \u591a\u69d8\u306a\u8a00\u8a9e\u3068\u6587\u5316\u3092\u5c0a\u91cd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5c11\u6570\u8a00\u8a9e\u304a\u3088\u3073\u6b7b\u8a9e\u30b5\u30dd\u30fc\u30c8: \u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u8a00\u8a9e\u591a\u69d8\u6027\u3092\u53d7\u5bb9\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u672a\u6765\u5fd7\u5411\u306e\u6280\u8853: \u91cf\u5b50\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u304a\u3088\u3073\u6b21\u4e16\u4ee3\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a19\u6e96\u3092\u30b5\u30dd\u30fc\u30c8\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3",children:"\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u306f\u958b\u767a\u30c4\u30fc\u30eb\u306e\u5b8c\u6210\u5ea6\u3092\u9ad8\u3081\u3001\u751f\u7523\u6027\u3092\u6700\u5927\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Wave\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08WPAK\uff09: \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30d3\u30eb\u30c9\u304a\u3088\u3073\u30c7\u30d7\u30ed\u30a4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Wave\u30c7\u30d0\u30c3\u30ac\u30fc: \u76f4\u611f\u7684\u306a\u30c7\u30d0\u30c3\u30b0\u4f53\u9a13\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u76ee\u6a19",children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u76ee\u6a19"}),"\n",(0,l.jsx)(n.p,{children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u6b21\u306e\u4fa1\u5024\u3092\u4e2d\u5fc3\u306b\u767a\u5c55\u3057\u307e\u3059:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u591a\u69d8\u6027\u3092\u53d7\u5bb9\u3059\u308b\u8a00\u8a9e: \u3059\u3079\u3066\u306e\u958b\u767a\u8005\u304c\u81ea\u5206\u306e\u8a00\u8a9e\u3084\u6587\u5316\u306b\u5408\u308f\u305b\u3066Wave\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u652f\u63f4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u3042\u3089\u3086\u308b\u958b\u767a\u5206\u91ce\u3092\u7d71\u5408: \u30a6\u30a7\u30d6\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3001AI\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306a\u3069\u591a\u69d8\u306a\u5206\u91ce\u3067\u6d3b\u7528\u53ef\u80fd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u672a\u6765\u306b\u5099\u3048\u308b: \u91cf\u5b50\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3084\u30dd\u30b9\u30c8\u91cf\u5b50\u6697\u53f7\u5316\u306a\u3069\u3001\u65b0\u6280\u8853\u306b\u5bfe\u5fdc\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"Wave\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u5358\u306b\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u958b\u767a\u8005\u306b\u512a\u308c\u305f\u4f53\u9a13\u3068\u52b9\u7387\u6027\u3092\u3082\u305f\u3089\u3059\u5305\u62ec\u7684\u3067\u9769\u65b0\u7684\u306a\u74b0\u5883\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002\nWave\u3068\u5171\u306b\u65b0\u3057\u3044\u53ef\u80fd\u6027\u3092\u63a2\u6c42\u3057\u307e\u3057\u3087\u3046\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);