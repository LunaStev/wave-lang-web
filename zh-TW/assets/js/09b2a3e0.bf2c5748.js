"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[2717],{4325:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"syntax/if","title":"IF \u8a9e\u53e5","description":"\u4ecb\u7d39","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/zh-TW/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u8cc7\u6599\u578b\u5225","permalink":"/zh-TW/docs/syntax/data_type"},"next":{"title":"While \ubb38","permalink":"/zh-TW/docs/syntax/while"}}');var r=s(4848),l=s(8453);const c={sidebar_position:3},d="IF \u8a9e\u53e5",t={},a=[{value:"\u4ecb\u7d39",id:"\u4ecb\u7d39",level:2},{value:"\u57fa\u672c\u7d50\u69cb",id:"\u57fa\u672c\u7d50\u69cb",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"IF_ELSE \u8a9e\u53e5",id:"if_else-\u8a9e\u53e5",level:2},{value:"\u7bc4\u4f8b\uff1a",id:"\u7bc4\u4f8b-1",level:3},{value:"\u5d4c\u5957 IF \u8a9e\u53e5",id:"\u5d4c\u5957-if-\u8a9e\u53e5",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"if-\u8a9e\u53e5",children:"IF \u8a9e\u53e5"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ecb\u7d39",children:"\u4ecb\u7d39"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9019\u4e00\u90e8\u5206\uff0c\u6211\u5011\u5c07\u4ecb\u7d39 Wave \u4e2d\u7684\u63a7\u5236\u8a9e\u53e5\u4e4b\u4e00\u2014\u2014IF \u8a9e\u53e5\u7684\u8a9e\u6cd5\u3002\nIF \u8a9e\u53e5\u7528\u65bc\u8a55\u4f30\u689d\u4ef6\uff0c\u4e26\u5728\u689d\u4ef6\u70ba\u771f\uff08True\uff09\u6642\u57f7\u884c\u7279\u5b9a\u7684\u4ee3\u78bc\u3002\n\u901a\u904e\u9019\u500b\u8a9e\u53e5\uff0c\u6211\u5011\u53ef\u4ee5\u6839\u64da\u689d\u4ef6\u63a7\u5236\u7a0b\u5e8f\u7684\u6d41\u7a0b\uff0c\u7de8\u5beb\u66f4\u9748\u6d3b\u548c\u908f\u8f2f\u7684\u4ee3\u78bc\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u7d50\u69cb",children:"\u57fa\u672c\u7d50\u69cb"}),"\n",(0,r.jsx)(n.p,{children:"IF \u8a9e\u53e5\u6703\u5728\u8a55\u4f30\u689d\u4ef6\u5f8c\uff0c\u50c5\u7576\u689d\u4ef6\u70ba\u771f\uff08True\uff09\u6642\u57f7\u884c\u6307\u5b9a\u7684\u4ee3\u78bc\u584a\u3002\nWave \u4e2d IF \u8a9e\u53e5\u7684\u57fa\u672c\u7d50\u69cb\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (\u689d\u4ef6) {\n    // \u689d\u4ef6\u70ba\u771f\u6642\u57f7\u884c\u7684\u4ee3\u78bc\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u689d\u4ef6\u53ef\u4ee5\u4f7f\u7528\u6bd4\u8f03\u904b\u7b97\u7b26\uff08",(0,r.jsx)(n.code,{children:"=="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="}),"\uff09\u6216\u908f\u8f2f\u904b\u7b97\u7b26\uff08",(0,r.jsx)(n.code,{children:"&&"}),", ",(0,r.jsx)(n.code,{children:"||"}),", ",(0,r.jsx)(n.code,{children:"!"}),"\uff09\u4f86\u7de8\u5beb\u3002\n\u5982\u679c\u689d\u4ef6\u70ba\u5047\uff08False\uff09\uff0c\u5247\u4ee3\u78bc\u584a\u4e0d\u6703\u57f7\u884c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7bc4\u4f8b",children:"\u7bc4\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u500b\u7c21\u55ae\u7684 IF \u8a9e\u53e5\u7bc4\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var temperature :i32 = 30;\n\nif (temperature > 25) {\n    println("\u5929\u6c23\u5f88\u71b1\u3002");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u5728\u9019\u6bb5\u4ee3\u78bc\u4e2d\uff0c\u5982\u679c temperature \u7684\u503c\u5927\u65bc 25\uff0c\u5247\u6703\u8f38\u51fa "\u5929\u6c23\u5f88\u71b1\u3002" \u9019\u689d\u8a0a\u606f\u3002'}),"\n",(0,r.jsx)(n.h2,{id:"if_else-\u8a9e\u53e5",children:"IF_ELSE \u8a9e\u53e5"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u689d\u4ef6\u4e0d\u6210\u7acb\uff0c\u4e26\u4e14\u9700\u8981\u57f7\u884c\u5176\u4ed6\u4ee3\u78bc\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528 IF-ELSE \u8a9e\u53e5\u3002\n\u5b83\u7684\u7d50\u69cb\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (\u689d\u4ef6) {\n    // \u689d\u4ef6\u70ba\u771f\u6642\u57f7\u884c\u7684\u4ee3\u78bc\n} else {\n    // \u689d\u4ef6\u70ba\u5047\u6642\u57f7\u884c\u7684\u4ee3\u78bc\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7bc4\u4f8b-1",children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("\u4f60\u901a\u904e\u4e86!");\n} else {\n    println("\u4f60\u6c92\u6709\u901a\u904e\u3002");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u7576 score \u5927\u65bc\u6216\u7b49\u65bc 60 \u6642\uff0c\u6703\u986f\u793a "\u4f60\u901a\u904e\u4e86!"\uff0c\u5426\u5247\u6703\u986f\u793a "\u4f60\u6c92\u6709\u901a\u904e\u3002"'}),"\n",(0,r.jsx)(n.h2,{id:"\u5d4c\u5957-if-\u8a9e\u53e5",children:"\u5d4c\u5957 IF \u8a9e\u53e5"}),"\n",(0,r.jsx)(n.p,{children:"IF \u8a9e\u53e5\u53ef\u4ee5\u5728\u5176\u4ed6 IF \u8a9e\u53e5\u4e2d\u4f7f\u7528\uff0c\u9019\u88ab\u7a31\u70ba\u5d4c\u5957 IF \u8a9e\u53e5\uff0c\u5c0d\u65bc\u8655\u7406\u8907\u96dc\u7684\u689d\u4ef6\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("\u512a\u7570\u7684\u6210\u7e3e\uff01");\n    } else {\n        println("\u4f60\u901a\u904e\u4e86\u3002");\n    } \n} else {\n    println("\u4f60\u6c92\u6709\u901a\u904e\u3002");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6839\u64da score \u7684\u503c\uff0c\u6703\u986f\u793a "\u512a\u7570\u7684\u6210\u7e3e\uff01"\u3001"\u4f60\u901a\u904e\u4e86\u3002" \u6216 "\u4f60\u6c92\u6709\u901a\u904e\u3002" \u7684\u8a0a\u606f\u3002'}),"\n",(0,r.jsx)(n.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IF \u8a9e\u53e5\u7528\u65bc\u8a55\u4f30\u689d\u4ef6\uff0c\u4e26\u57f7\u884c\u7279\u5b9a\u7684\u4ee3\u78bc\u584a\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u4f7f\u7528 ELSE \u8a9e\u53e5\u4f86\u6307\u5b9a\u7576\u689d\u4ef6\u70ba\u5047\u6642\u57f7\u884c\u7684\u4ee3\u78bc\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5d4c\u5957\u7684 IF \u8a9e\u53e5\u7528\u65bc\u8655\u7406\u8907\u96dc\u7684\u689d\u4ef6\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 IF \u8a9e\u53e5\u53ef\u4ee5\u8b93\u6211\u5011\u66f4\u52a0\u908f\u8f2f\u548c\u9748\u6d3b\u5730\u8a2d\u8a08\u7a0b\u5f0f\u7684\u6d41\u7a0b\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);