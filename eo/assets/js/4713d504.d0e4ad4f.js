"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[1465],{8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(6540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}},8843:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"intro/installation","title":"Instalado","description":"Linux Instalmetodo","source":"@site/i18n/eo/docusaurus-plugin-content-docs/current/intro/installation.md","sourceDirName":"intro","slug":"/intro/installation","permalink":"/eo/docs/intro/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Enkonduko","permalink":"/eo/docs/intro/"},"next":{"title":"Filozofio kaj Celoj de Wave","permalink":"/eo/docs/intro/philogoals"}}');var o=a(4848),i=a(8453);const l={sidebar_position:1},s="Instalado",r={},d=[{value:"Linux Instalmetodo",id:"linux-instalmetodo",level:2},{value:"El\u015duti kaj Malpakigi",id:"el\u015duti-kaj-malpakigi",level:3},{value:"LLVM Agordo (Pre Beta Versio)",id:"llvm-agordo-pre-beta-versio",level:4},{value:"Konfirmi Instaladon",id:"konfirmi-instaladon",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"instalado",children:"Instalado"})}),"\n",(0,o.jsx)(n.h2,{id:"linux-instalmetodo",children:"Linux Instalmetodo"}),"\n",(0,o.jsx)(n.h3,{id:"el\u015duti-kaj-malpakigi",children:"El\u015duti kaj Malpakigi"}),"\n",(0,o.jsx)(n.p,{children:"El\u015dutu la plej novan version de Wave de la oficiala GitHub el\u015duta pa\u011do."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz\nsudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin\n"})}),"\n",(0,o.jsx)(n.h4,{id:"llvm-agordo-pre-beta-versio",children:"LLVM Agordo (Pre Beta Versio)"}),"\n",(0,o.jsx)(n.p,{children:"La Pre Beta versio de Wave provizore uzas LLVM, do instalu LLVM per la sekva komando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang\nsudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so\nexport LLVM_SYS_140_PREFIX=/usr/lib/llvm-14\nsource ~/.bashrc\n"})}),"\n",(0,o.jsx)(n.h3,{id:"konfirmi-instaladon",children:"Konfirmi Instaladon"}),"\n",(0,o.jsx)(n.p,{children:"Por kontroli \u0109u la instalado estas kompleta, enmetu la jenan komandon en la terminalon:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wave --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"Se versio-informo estas montrata, la instalado estas sukcese kompletigita."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);