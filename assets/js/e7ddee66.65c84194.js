"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[37],{7584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"intro/installation","title":"Installation","description":"Linux Installation Method","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/intro/installation.md","sourceDirName":"intro","slug":"/intro/installation","permalink":"/docs/intro/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/intro/"},"next":{"title":"Philosophy and Goals of Wave","permalink":"/docs/intro/philogoals"}}');var l=t(4848),i=t(8453);const o={sidebar_position:1},s="Installation",r={},d=[{value:"Linux Installation Method",id:"linux-installation-method",level:2},{value:"Download and Extract",id:"download-and-extract",level:3},{value:"LLVM Setup (Pre Beta Version)",id:"llvm-setup-pre-beta-version",level:4},{value:"Verify Installation",id:"verify-installation",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,l.jsx)(n.h2,{id:"linux-installation-method",children:"Linux Installation Method"}),"\n",(0,l.jsx)(n.h3,{id:"download-and-extract",children:"Download and Extract"}),"\n",(0,l.jsx)(n.p,{children:"Download the latest version of Wave from the official GitHub release page."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz\nsudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin\n"})}),"\n",(0,l.jsx)(n.h4,{id:"llvm-setup-pre-beta-version",children:"LLVM Setup (Pre Beta Version)"}),"\n",(0,l.jsx)(n.p,{children:"The Pre Beta version of Wave temporarily uses LLVM, so install LLVM with the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang\nsudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so\nexport LLVM_SYS_140_PREFIX=/usr/lib/llvm-14\nsource ~/.bashrc\n"})}),"\n",(0,l.jsx)(n.h3,{id:"verify-installation",children:"Verify Installation"}),"\n",(0,l.jsx)(n.p,{children:"To check if the installation is complete, enter the following command in the terminal:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"wave --version\n"})}),"\n",(0,l.jsx)(n.p,{children:"If version information is displayed, the installation has been successfully completed."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const l={},i=a.createContext(l);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);