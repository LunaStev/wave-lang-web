"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[73],{6898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"syntax/if","title":"IF \u0915\u0925\u0928","description":"\u092a\u0930\u093f\u091a\u092f","source":"@site/i18n/hi/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/hi/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"mathSidebar","previous":{"title":"\u0921\u0947\u091f\u093e \u092a\u094d\u0930\u0915\u093e\u0930","permalink":"/hi/docs/syntax/data_type"},"next":{"title":"Wave \u092a\u093e\u0930\u093f\u0938\u094d\u0925\u093f\u0924\u093f\u0915\u0940 \u0924\u0902\u0924\u094d\u0930","permalink":"/hi/docs/ecosystem/"}}');var r=s(4848),l=s(8453);const c={sidebar_position:3},d="IF \u0915\u0925\u0928",t={},a=[{value:"\u092a\u0930\u093f\u091a\u092f",id:"\u092a\u0930\u093f\u091a\u092f",level:2},{value:"\u092e\u0942\u0932 \u0938\u0902\u0930\u091a\u0928\u093e",id:"\u092e\u0942\u0932-\u0938\u0902\u0930\u091a\u0928\u093e",level:2},{value:"\u0909\u0926\u093e\u0939\u0930\u0923",id:"\u0909\u0926\u093e\u0939\u0930\u0923",level:2},{value:"IF_ELSE \u0915\u0925\u0928",id:"if_else-\u0915\u0925\u0928",level:2},{value:"\u0909\u0926\u093e\u0939\u0930\u0923:",id:"\u0909\u0926\u093e\u0939\u0930\u0923-1",level:3},{value:"\u0928\u0947\u0938\u094d\u091f\u0947\u0921 IF \u0915\u0925\u0928",id:"\u0928\u0947\u0938\u094d\u091f\u0947\u0921-if-\u0915\u0925\u0928",level:2},{value:"\u0938\u093e\u0930\u093e\u0902\u0936",id:"\u0938\u093e\u0930\u093e\u0902\u0936",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"if-\u0915\u0925\u0928",children:"IF \u0915\u0925\u0928"})}),"\n",(0,r.jsx)(n.h2,{id:"\u092a\u0930\u093f\u091a\u092f",children:"\u092a\u0930\u093f\u091a\u092f"}),"\n",(0,r.jsx)(n.p,{children:"\u0907\u0938 \u0916\u0902\u0921 \u092e\u0947\u0902, \u0939\u092e Wave \u0915\u0947 \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0915\u0925\u0928\u094b\u0902 \u092e\u0947\u0902 \u0938\u0947 \u090f\u0915 IF \u0915\u0925\u0928 \u0915\u0940 \u0938\u0902\u0930\u091a\u0928\u093e \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u091c\u093e\u0928\u0947\u0902\u0917\u0947\u0964\nIF \u0915\u0925\u0928 \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e\u093f\u0902\u0917 \u092e\u0947\u0902 \u090f\u0915 \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0915\u0925\u0928 \u0939\u0948, \u091c\u094b \u0936\u0930\u094d\u0924\u094b\u0902 \u0915\u093e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u0936\u0930\u094d\u0924 \u0938\u0939\u0940 (True) \u0939\u094b\u0928\u0947 \u092a\u0930 \u090f\u0915 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u0915\u094b\u0921 \u0915\u094b \u091a\u0932\u093e\u0924\u093e \u0939\u0948\u0964\n\u0907\u0938\u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0939\u092e \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e \u0915\u0947 \u092a\u094d\u0930\u0935\u093e\u0939 \u0915\u094b \u0936\u0930\u094d\u0924\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0914\u0930 \u0932\u091a\u0940\u0932\u093e \u0914\u0930 \u0924\u093e\u0930\u094d\u0915\u093f\u0915 \u0915\u094b\u0921 \u0932\u093f\u0916 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"}),"\n",(0,r.jsx)(n.h2,{id:"\u092e\u0942\u0932-\u0938\u0902\u0930\u091a\u0928\u093e",children:"\u092e\u0942\u0932 \u0938\u0902\u0930\u091a\u0928\u093e"}),"\n",(0,r.jsx)(n.p,{children:"IF \u0915\u0925\u0928 \u090f\u0915 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u0936\u0930\u094d\u0924 \u0915\u093e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928 \u0915\u0930\u0924\u093e \u0939\u0948, \u0914\u0930 \u091c\u092c \u0936\u0930\u094d\u0924 \u0938\u0939\u0940 (True) \u0939\u094b\u0924\u0940 \u0939\u0948, \u0924\u094b \u0915\u0947\u0935\u0932 \u0924\u092c \u0928\u093f\u0930\u094d\u0926\u093f\u0937\u094d\u091f \u0915\u094b\u0921 \u092c\u094d\u0932\u0949\u0915 \u0915\u094b \u091a\u0932\u093e\u0924\u093e \u0939\u0948\u0964\nWave \u092e\u0947\u0902 IF \u0915\u0925\u0928 \u0915\u0940 \u092e\u0942\u0932 \u0938\u0902\u0930\u091a\u0928\u093e \u0907\u0938 \u092a\u094d\u0930\u0915\u093e\u0930 \u0939\u0948:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (\u0936\u0930\u094d\u0924) {\n    // \u0936\u0930\u094d\u0924 \u0938\u0939\u0940 \u0939\u094b\u0928\u0947 \u092a\u0930 \u091a\u0932\u0928\u0947 \u0935\u093e\u0932\u093e \u0915\u094b\u0921\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0936\u0930\u094d\u0924 \u0915\u094b \u0924\u0941\u0932\u0928\u093e\u0924\u094d\u092e\u0915 \u0911\u092a\u0930\u0947\u091f\u0930(",(0,r.jsx)(n.code,{children:"=="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="}),") \u092f\u093e \u0924\u093e\u0930\u094d\u0915\u093f\u0915 \u0911\u092a\u0930\u0947\u091f\u0930 (",(0,r.jsx)(n.code,{children:"&&"}),", ",(0,r.jsx)(n.code,{children:"||"}),", ",(0,r.jsx)(n.code,{children:"!"}),") \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0915\u0947 \u0932\u093f\u0916\u093e \u091c\u093e\u0924\u093e \u0939\u0948\u0964\n\u092f\u0926\u093f \u0936\u0930\u094d\u0924 \u0917\u0932\u0924 (False) \u0939\u094b, \u0924\u094b \u0915\u094b\u0921 \u092c\u094d\u0932\u0949\u0915 \u0928\u093f\u0937\u094d\u092a\u093e\u0926\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b\u0917\u093e\u0964"]}),"\n",(0,r.jsx)(n.h2,{id:"\u0909\u0926\u093e\u0939\u0930\u0923",children:"\u0909\u0926\u093e\u0939\u0930\u0923"}),"\n",(0,r.jsx)(n.p,{children:"\u092f\u0939\u093e\u0902 \u090f\u0915 \u0938\u0930\u0932 IF \u0915\u0925\u0928 \u0915\u093e \u0909\u0926\u093e\u0939\u0930\u0923 \u0939\u0948:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var temperature :i32 = 30;\n\nif (temperature > 25) {\n    println("\u092e\u094c\u0938\u092e \u0917\u0930\u092e \u0939\u0948\u0964");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u0909\u092a\u0930\u094b\u0915\u094d\u0924 \u0915\u094b\u0921 \u092e\u0947\u0902, \u092f\u0926\u093f temperature \u092e\u093e\u0928 25 \u0938\u0947 \u0905\u0927\u093f\u0915 \u0939\u0948, \u0924\u094b "\u092e\u094c\u0938\u092e \u0917\u0930\u092e \u0939\u0948\u0964" \u0938\u0902\u0926\u0947\u0936 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0917\u093e\u0964'}),"\n",(0,r.jsx)(n.h2,{id:"if_else-\u0915\u0925\u0928",children:"IF_ELSE \u0915\u0925\u0928"}),"\n",(0,r.jsx)(n.p,{children:"\u092f\u0926\u093f \u0936\u0930\u094d\u0924 \u0938\u0939\u0940 \u0928\u0939\u0940\u0902 \u0939\u0948, \u0924\u094b \u0906\u092e\u0924\u094c\u0930 \u092a\u0930 \u0905\u0928\u094d\u092f \u0915\u094b\u0921 \u091a\u0932\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f IF-ELSE \u0915\u0925\u0928 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u093f\u092f\u093e \u091c\u093e\u0924\u093e \u0939\u0948\u0964\n\u0907\u0938\u0915\u0940 \u0938\u0902\u0930\u091a\u0928\u093e \u0907\u0938 \u092a\u094d\u0930\u0915\u093e\u0930 \u0939\u0948:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (\u0936\u0930\u094d\u0924) {\n    // \u0936\u0930\u094d\u0924 \u0938\u0939\u0940 \u0939\u094b\u0928\u0947 \u092a\u0930 \u091a\u0932\u0928\u0947 \u0935\u093e\u0932\u093e \u0915\u094b\u0921\n} else {\n    // \u0936\u0930\u094d\u0924 \u0917\u0932\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 \u091a\u0932\u0928\u0947 \u0935\u093e\u0932\u093e \u0915\u094b\u0921\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u0909\u0926\u093e\u0939\u0930\u0923-1",children:"\u0909\u0926\u093e\u0939\u0930\u0923:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("\u0906\u092a \u092a\u093e\u0938 \u0939\u094b \u0917\u090f!");\n} else {\n    println("\u0906\u092a \u092b\u0947\u0932 \u0939\u094b \u0917\u090f\u0964");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u092f\u0926\u093f score 60 \u092f\u093e \u0909\u0938\u0938\u0947 \u0905\u0927\u093f\u0915 \u0939\u0948, \u0924\u094b "\u0906\u092a \u092a\u093e\u0938 \u0939\u094b \u0917\u090f!" \u0938\u0902\u0926\u0947\u0936 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0917\u093e, \u0905\u0928\u094d\u092f\u0925\u093e "\u0906\u092a \u092b\u0947\u0932 \u0939\u094b \u0917\u090f\u0964" \u0938\u0902\u0926\u0947\u0936 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0917\u093e\u0964'}),"\n",(0,r.jsx)(n.h2,{id:"\u0928\u0947\u0938\u094d\u091f\u0947\u0921-if-\u0915\u0925\u0928",children:"\u0928\u0947\u0938\u094d\u091f\u0947\u0921 IF \u0915\u0925\u0928"}),"\n",(0,r.jsx)(n.p,{children:"IF \u0915\u0925\u0928 \u0905\u0928\u094d\u092f IF \u0915\u0925\u0928\u094b\u0902 \u0915\u0947 \u0905\u0902\u0926\u0930 \u092d\u0940 \u0909\u092a\u092f\u094b\u0917 \u0915\u093f\u090f \u091c\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 \u0907\u0938\u0947 \u0928\u0947\u0938\u094d\u091f\u0947\u0921 IF \u0915\u0925\u0928 \u0915\u0939\u093e \u091c\u093e\u0924\u093e \u0939\u0948, \u0914\u0930 \u092f\u0939 \u091c\u091f\u093f\u0932 \u0936\u0930\u094d\u0924\u094b\u0902 \u0915\u094b \u0938\u0902\u092d\u093e\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u092f\u094b\u0917\u0940 \u0939\u094b\u0924\u093e \u0939\u0948\u0964"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("\u0906\u092a\u0915\u093e \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928 \u0909\u0924\u094d\u0915\u0943\u0937\u094d\u091f \u0939\u0948!");\n    } else {\n        println("\u0906\u092a \u092a\u093e\u0938 \u0939\u094b \u0917\u090f\u0964");\n    } \n} else {\n    println("\u0906\u092a \u092b\u0947\u0932 \u0939\u094b \u0917\u090f\u0964");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'\u0909\u092a\u0930\u094b\u0915\u094d\u0924 \u0909\u0926\u093e\u0939\u0930\u0923 \u092e\u0947\u0902, \u0938\u094d\u0915\u094b\u0930 \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 "\u0906\u092a\u0915\u093e \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928 \u0909\u0924\u094d\u0915\u0943\u0937\u094d\u091f \u0939\u0948!", "\u0906\u092a \u092a\u093e\u0938 \u0939\u094b \u0917\u090f\u0964", \u092f\u093e "\u0906\u092a \u092b\u0947\u0932 \u0939\u094b \u0917\u090f\u0964" \u0938\u0902\u0926\u0947\u0936 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0917\u093e\u0964'}),"\n",(0,r.jsx)(n.h2,{id:"\u0938\u093e\u0930\u093e\u0902\u0936",children:"\u0938\u093e\u0930\u093e\u0902\u0936"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IF \u0915\u0925\u0928 \u0936\u0930\u094d\u0924 \u0915\u093e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928 \u0915\u0930\u0915\u0947 \u090f\u0915 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u0915\u094b\u0921 \u092c\u094d\u0932\u0949\u0915 \u091a\u0932\u093e\u0928\u0947 \u0935\u093e\u0932\u093e \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0915\u0925\u0928 \u0939\u0948\u0964"}),"\n",(0,r.jsx)(n.li,{children:"ELSE \u0915\u0925\u0928 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0915\u0947 \u0936\u0930\u094d\u0924 \u0917\u0932\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 \u091a\u0932\u0928\u0947 \u0935\u093e\u0932\u093e \u0915\u094b\u0921 \u092d\u0940 \u0928\u093f\u0930\u094d\u0926\u093f\u0937\u094d\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948\u0964"}),"\n",(0,r.jsx)(n.li,{children:"\u0928\u0947\u0938\u094d\u091f\u0947\u0921 IF \u0915\u0925\u0928 \u091c\u091f\u093f\u0932 \u0936\u0930\u094d\u0924\u094b\u0902 \u0915\u094b \u0938\u0902\u092d\u093e\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u092f\u094b\u0917 \u0915\u093f\u090f \u091c\u093e\u0924\u0947 \u0939\u0948\u0902\u0964"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"IF \u0915\u0925\u0928 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0915\u0947 \u0939\u092e \u0905\u092a\u0928\u0947 \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e \u0915\u0947 \u092a\u094d\u0930\u0935\u093e\u0939 \u0915\u094b \u0905\u0927\u093f\u0915 \u0924\u093e\u0930\u094d\u0915\u093f\u0915 \u0914\u0930 \u0917\u0924\u093f\u0936\u0940\u0932 \u0924\u0930\u0940\u0915\u0947 \u0938\u0947 \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902!"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);