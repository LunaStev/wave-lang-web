"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[2518],{6472:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"wson/wson","title":"Wave \uc9c1\ub82c\ud654 \uac1d\uccb4 \ud45c\uae30\ubc95","description":"WSON(Wave Serialized Object Notation)\uc740 Wave \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 \uae30\ubcf8 \ub370\uc774\ud130 \uc9c1\ub82c\ud654 \ud3ec\ub9f7\uc73c\ub85c, \uae30\uc874 JSON\uc758 \ud55c\uacc4\ub97c \uadf9\ubcf5\ud558\uace0 \ubcf4\ub2e4 \uac15\ub825\ud55c \uae30\ub2a5\uacfc \ud6a8\uc728\uc131\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. WSON\uc740 \uc0ac\ub78c\uc774 \uc77d\uace0 \uc4f0\uae30 \uc26c\uc6b4 \uad6c\uc870\ub97c \uc720\uc9c0\ud558\uba74\uc11c\ub3c4 \uc131\ub2a5\uc744 \uadf9\ub300\ud654\ud558\uc5ec, \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ub354\uc6b1 \uc548\uc804\ud558\uace0 \ube60\ub974\uac8c \uad50\ud658\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.","source":"@site/docs/wson/wson.md","sourceDirName":"wson","slug":"/wson/","permalink":"/fr/docs/wson/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wson/wson.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Wave OS","permalink":"/fr/docs/ecosystem/intro"},"next":{"title":"\ubb38\ubc95","permalink":"/fr/docs/wson/intro"}}');var t=s(4848),i=s(8453);const o={sidebar_position:3},l="Wave \uc9c1\ub82c\ud654 \uac1d\uccb4 \ud45c\uae30\ubc95",a={},d=[{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:2},{value:"1. <strong>\uc5c4\uaca9\ud55c \ud0c0\uc785 \uc2dc\uc2a4\ud15c</strong>",id:"1-\uc5c4\uaca9\ud55c-\ud0c0\uc785-\uc2dc\uc2a4\ud15c",level:3},{value:"2. <strong>\ub192\uc740 \uc131\ub2a5</strong>",id:"2-\ub192\uc740-\uc131\ub2a5",level:3},{value:"3. <strong>Wave \uce5c\ud654\uc801\uc778 \uc124\uacc4</strong>",id:"3-wave-\uce5c\ud654\uc801\uc778-\uc124\uacc4",level:3},{value:"4. <strong>\uac00\ub3c5\uc131\uacfc \uc6a9\uc774\ud55c \ud30c\uc2f1</strong>",id:"4-\uac00\ub3c5\uc131\uacfc-\uc6a9\uc774\ud55c-\ud30c\uc2f1",level:3},{value:"5. <strong>\ub2e4\uc591\ud55c \ub370\uc774\ud130 \uad6c\uc870 \uc9c0\uc6d0</strong>",id:"5-\ub2e4\uc591\ud55c-\ub370\uc774\ud130-\uad6c\uc870-\uc9c0\uc6d0",level:3},{value:"\ud65c\uc6a9 \ubd84\uc57c",id:"\ud65c\uc6a9-\ubd84\uc57c",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"wave-\uc9c1\ub82c\ud654-\uac1d\uccb4-\ud45c\uae30\ubc95",children:"Wave \uc9c1\ub82c\ud654 \uac1d\uccb4 \ud45c\uae30\ubc95"})}),"\n",(0,t.jsx)(n.p,{children:"WSON(Wave Serialized Object Notation)\uc740 Wave \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 \uae30\ubcf8 \ub370\uc774\ud130 \uc9c1\ub82c\ud654 \ud3ec\ub9f7\uc73c\ub85c, \uae30\uc874 JSON\uc758 \ud55c\uacc4\ub97c \uadf9\ubcf5\ud558\uace0 \ubcf4\ub2e4 \uac15\ub825\ud55c \uae30\ub2a5\uacfc \ud6a8\uc728\uc131\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. WSON\uc740 \uc0ac\ub78c\uc774 \uc77d\uace0 \uc4f0\uae30 \uc26c\uc6b4 \uad6c\uc870\ub97c \uc720\uc9c0\ud558\uba74\uc11c\ub3c4 \uc131\ub2a5\uc744 \uadf9\ub300\ud654\ud558\uc5ec, \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ub354\uc6b1 \uc548\uc804\ud558\uace0 \ube60\ub974\uac8c \uad50\ud658\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,t.jsxs)(n.h3,{id:"1-\uc5c4\uaca9\ud55c-\ud0c0\uc785-\uc2dc\uc2a4\ud15c",children:["1. ",(0,t.jsx)(n.strong,{children:"\uc5c4\uaca9\ud55c \ud0c0\uc785 \uc2dc\uc2a4\ud15c"})]}),"\n",(0,t.jsx)(n.p,{children:"WSON\uc740 \uba85\ud655\ud55c \ub370\uc774\ud130 \ud0c0\uc785\uc744 \uc720\uc9c0\ud558\uc5ec, JSON\uc758 \ub3d9\uc801 \ud0c0\uc785\uc73c\ub85c \uc778\ud55c \uc608\uce21 \ubd88\uac00\ub2a5\uc131\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ud560 \ub54c \ud0c0\uc785 \uc548\uc815\uc131\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.h3,{id:"2-\ub192\uc740-\uc131\ub2a5",children:["2. ",(0,t.jsx)(n.strong,{children:"\ub192\uc740 \uc131\ub2a5"})]}),"\n",(0,t.jsx)(n.p,{children:"WSON\uc740 \ucd5c\uc18c\ud55c\uc758 \uc624\ubc84\ud5e4\ub4dc\ub97c \uac00\uc9c0\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \ube60\ub978 \ub370\uc774\ud130 \ucc98\ub9ac \uc18d\ub3c4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uc9c1\ub82c\ud654\ud560 \ub54c \ud2b9\ud788 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.h3,{id:"3-wave-\uce5c\ud654\uc801\uc778-\uc124\uacc4",children:["3. ",(0,t.jsx)(n.strong,{children:"Wave \uce5c\ud654\uc801\uc778 \uc124\uacc4"})]}),"\n",(0,t.jsx)(n.p,{children:"Wave \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc640 \uc644\ubcbd\ud558\uac8c \uc5f0\ub3d9\ub418\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \uc788\uc73c\uba70, Wave\uc758 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\uc6d0\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.h3,{id:"4-\uac00\ub3c5\uc131\uacfc-\uc6a9\uc774\ud55c-\ud30c\uc2f1",children:["4. ",(0,t.jsx)(n.strong,{children:"\uac00\ub3c5\uc131\uacfc \uc6a9\uc774\ud55c \ud30c\uc2f1"})]}),"\n",(0,t.jsx)(n.p,{children:"JSON\uacfc \uc720\uc0ac\ud55c \ubb38\ubc95\uc744 \uc720\uc9c0\ud558\uba74\uc11c\ub3c4 \ub354\uc6b1 \uac04\uacb0\ud55c \ud45c\ud604\uc774 \uac00\ub2a5\ud558\uc5ec, \uc0ac\ub78c\uc774 \uc9c1\uc811 \uc77d\uace0 \uc218\uc815\ud558\uae30 \uc6a9\uc774\ud569\ub2c8\ub2e4. \ub610\ud55c, \ud6a8\uc728\uc801\uc778 \ud30c\uc2f1\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ucd5c\uc801\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.h3,{id:"5-\ub2e4\uc591\ud55c-\ub370\uc774\ud130-\uad6c\uc870-\uc9c0\uc6d0",children:["5. ",(0,t.jsx)(n.strong,{children:"\ub2e4\uc591\ud55c \ub370\uc774\ud130 \uad6c\uc870 \uc9c0\uc6d0"})]}),"\n",(0,t.jsx)(n.p,{children:"WSON\uc740 \ub2e8\uc21c\ud55c \ud0a4-\uac12 \uc30d\ubfd0\ub9cc \uc544\ub2c8\ub77c, \ub124\uc774\ud2f0\ube0c \ubc30\uc5f4, \uad6c\uc870\uccb4, \ud29c\ud50c \ub4f1\uc758 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub354\uc6b1 \uc720\uc5f0\ud55c \ub370\uc774\ud130 \ud45c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud65c\uc6a9-\ubd84\uc57c",children:"\ud65c\uc6a9 \ubd84\uc57c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Wave \uae30\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub370\uc774\ud130 \uc800\uc7a5 \ubc0f \uc804\uc1a1"}),"\n",(0,t.jsx)(n.li,{children:"\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \ubc0f API \ub370\uc774\ud130 \ud3ec\ub9f7"}),"\n",(0,t.jsx)(n.li,{children:"\ud30c\uc77c \uc800\uc7a5 \ubc0f \uc124\uc815 \ud30c\uc77c \ud615\uc2dd"}),"\n",(0,t.jsx)(n.li,{children:"\ub300\ub7c9 \ub370\uc774\ud130\uc758 \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsx)(n.p,{children:"WSON\uc740 Wave \uc5b8\uc5b4\uc758 \ucca0\ud559\uc744 \ubc18\uc601\ud558\uc5ec \ubcf4\ub2e4 \ud6a8\uc728\uc801\uc774\uace0 \uac15\ub825\ud55c \ub370\uc774\ud130 \uc9c1\ub82c\ud654\ub97c \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4. \uae30\uc874 JSON\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uba74\uc11c\ub3c4 \uc9c1\uad00\uc801\uc778 \ubb38\ubc95\uc744 \uc720\uc9c0\ud558\uc5ec, \uac1c\ubc1c\uc790\ub4e4\uc774 \ub354\uc6b1 \uc27d\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c WSON\uc740 Wave \uc0dd\ud0dc\uacc4\uc5d0\uc11c \ud45c\uc900 \ub370\uc774\ud130 \ud3ec\ub9f7\uc73c\ub85c \uc790\ub9ac \uc7a1\uc744 \uac83\uc774\uba70, \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \uac15\ub825\ud55c \uc131\ub2a5\uc744 \uc81c\uacf5\ud560 \uac83\uc785\ub2c8\ub2e4."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);