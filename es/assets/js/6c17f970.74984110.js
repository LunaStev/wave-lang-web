"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6684],{1591:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"intro/installation","title":"Instalaci\xf3n","description":"M\xe9todo de instalaci\xf3n en Linux","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/installation.md","sourceDirName":"intro","slug":"/intro/installation","permalink":"/es/docs/intro/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introducci\xf3n","permalink":"/es/docs/intro/"},"next":{"title":"Sintaxis","permalink":"/es/docs/syntax/"}}');var t=a(4848),s=a(8453);const l={sidebar_position:1},r="Instalaci\xf3n",c={},o=[{value:"M\xe9todo de instalaci\xf3n en Linux",id:"m\xe9todo-de-instalaci\xf3n-en-linux",level:2},{value:"Descarga y extracci\xf3n",id:"descarga-y-extracci\xf3n",level:3},{value:"Configuraci\xf3n de LLVM (versi\xf3n Pre Beta)",id:"configuraci\xf3n-de-llvm-versi\xf3n-pre-beta",level:4},{value:"Verificar la instalaci\xf3n",id:"verificar-la-instalaci\xf3n",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"instalaci\xf3n",children:"Instalaci\xf3n"})}),"\n",(0,t.jsx)(n.h2,{id:"m\xe9todo-de-instalaci\xf3n-en-linux",children:"M\xe9todo de instalaci\xf3n en Linux"}),"\n",(0,t.jsx)(n.h3,{id:"descarga-y-extracci\xf3n",children:"Descarga y extracci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Descarga la \xfaltima versi\xf3n de Wave desde la p\xe1gina oficial de lanzamientos de GitHub."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz\nsudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin\n"})}),"\n",(0,t.jsx)(n.h4,{id:"configuraci\xf3n-de-llvm-versi\xf3n-pre-beta",children:"Configuraci\xf3n de LLVM (versi\xf3n Pre Beta)"}),"\n",(0,t.jsx)(n.p,{children:"La versi\xf3n Pre Beta de Wave utiliza temporalmente LLVM, por lo que instala LLVM con el siguiente comando:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang\nsudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so\nexport LLVM_SYS_140_PREFIX=/usr/lib/llvm-14\nsource ~/.bashrc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verificar-la-instalaci\xf3n",children:"Verificar la instalaci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Para verificar si la instalaci\xf3n se complet\xf3 correctamente, ingresa el siguiente comando en la terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wave --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"Si se muestra la informaci\xf3n de la versi\xf3n, la instalaci\xf3n ha sido exitosa."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var i=a(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);