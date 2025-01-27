"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[8350],{4609:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"syntax/data_type","title":"Types de donn\xe9es","description":"Ce document explique les diff\xe9rents types de donn\xe9es fournis par le langage de programmation Wave.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/fr/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Fonctions et Variables","permalink":"/fr/docs/syntax/intro"},"next":{"title":"IF Statement","permalink":"/fr/docs/syntax/if"}}');var r=n(4848),l=n(8453);const i={sidebar_position:2},a="Types de donn\xe9es",d={},c=[{value:"Type entier",id:"type-entier",level:2},{value:"Type \xe0 virgule flottante",id:"type-\xe0-virgule-flottante",level:2},{value:"Type cha\xeene de caract\xe8res",id:"type-cha\xeene-de-caract\xe8res",level:2},{value:"Type bool\xe9en",id:"type-bool\xe9en",level:2},{value:"Type caract\xe8re",id:"type-caract\xe8re",level:2},{value:"Type octet",id:"type-octet",level:2},{value:"Type pointeur",id:"type-pointeur",level:2},{value:"Type tableau",id:"type-tableau",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"types-de-donn\xe9es",children:"Types de donn\xe9es"})}),"\n",(0,r.jsx)(s.p,{children:"Ce document explique les diff\xe9rents types de donn\xe9es fournis par le langage de programmation Wave.\nLe langage Wave permet de stocker et de manipuler des valeurs \xe0 l'aide de divers types de donn\xe9es.\nLes principaux types de donn\xe9es incluent les entiers, les nombres \xe0 virgule flottante et les cha\xeenes de caract\xe8res.\nChaque type de donn\xe9es d\xe9finit les caract\xe9ristiques des donn\xe9es et la mani\xe8re dont elles sont g\xe9r\xe9es en m\xe9moire."}),"\n",(0,r.jsx)(s.h2,{id:"type-entier",children:"Type entier"}),"\n",(0,r.jsxs)(s.p,{children:["Le type entier est utilis\xe9 pour stocker des ",(0,r.jsx)(s.strong,{children:"valeurs enti\xe8res"}),".\nPar d\xe9faut, les entiers sont d\xe9clar\xe9s sous ",(0,r.jsx)(s.code,{children:"i32"})," (entier sign\xe9 sur 32 bits) et ",(0,r.jsx)(s.code,{children:"u32"})," (entier non sign\xe9 sur 32 bits).\nLe langage Wave propose \xe9galement diverses options pour d\xe9finir des tailles d'entiers avec des plages plus fines."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"i4"})," ~ ",(0,r.jsx)(s.code,{children:"i32768"}),": Types d'entiers sign\xe9s, avec des tailles allant de 4 bits \xe0 32768 bits."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"u4"})," ~ ",(0,r.jsx)(s.code,{children:"u32768"}),": Types d'entiers non sign\xe9s, avec des tailles allant de 4 bits \xe0 32768 bits."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-\xe0-virgule-flottante",children:"Type \xe0 virgule flottante"}),"\n",(0,r.jsxs)(s.p,{children:["Le type \xe0 virgule flottante est utilis\xe9 pour stocker des valeurs ",(0,r.jsx)(s.strong,{children:"r\xe9elles"}),".\nPar d\xe9faut, les nombres \xe0 virgule flottante sont d\xe9clar\xe9s sous ",(0,r.jsx)(s.code,{children:"f32"}),".\nDe plus, Wave offre diverses options pour d\xe9finir des tailles d'entiers avec une pr\xe9cision plus fine."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"f32"})," ~ ",(0,r.jsx)(s.code,{children:"f32768"}),": Le type \xe0 virgule flottante peut avoir des tailles allant de 32 bits \xe0 32768 bits, ce qui permet des calculs r\xe9els avec une pr\xe9cision accrue."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-cha\xeene-de-caract\xe8res",children:"Type cha\xeene de caract\xe8res"}),"\n",(0,r.jsxs)(s.p,{children:["Le type cha\xeene de caract\xe8res est utilis\xe9 pour manipuler des donn\xe9es textuelles. Les cha\xeenes sont d\xe9clar\xe9es avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"str"}),".\nLes cha\xeenes sont g\xe9n\xe9ralement d\xe9finies entre guillemets doubles (",(0,r.jsx)(s.code,{children:'"'}),") et peuvent \xeatre assign\xe9es \xe0 des variables."]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,r.jsx)(s.h2,{id:"type-bool\xe9en",children:"Type bool\xe9en"}),"\n",(0,r.jsxs)(s.p,{children:["Le type bool\xe9en repr\xe9sente des valeurs ",(0,r.jsx)(s.strong,{children:"vraies (true)"})," ou ",(0,r.jsx)(s.strong,{children:"fausses (false)"}),".\nIl est principalement utilis\xe9 dans les conditions, et les valeurs sont d\xe9finies comme ",(0,r.jsx)(s.code,{children:"true"})," ou ",(0,r.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"\uc608\uc2dc:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-caract\xe8re",children:"Type caract\xe8re"}),"\n",(0,r.jsxs)(s.p,{children:["Le type caract\xe8re est utilis\xe9 pour stocker un seul caract\xe8re.\nIl est d\xe9clar\xe9 avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"char"})," et ne peut contenir qu'une seule valeur de caract\xe8re."]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-octet",children:"Type octet"}),"\n",(0,r.jsxs)(s.p,{children:["Le type octet est utilis\xe9 pour stocker des donn\xe9es de ",(0,r.jsx)(s.strong,{children:"1 octet"}),".\nIl est principalement utile pour manipuler des donn\xe9es binaires. Il est d\xe9clar\xe9 avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"byte"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-pointeur",children:"Type pointeur"}),"\n",(0,r.jsxs)(s.p,{children:["Le type pointeur est utilis\xe9 pour faire r\xe9f\xe9rence \xe0 une ",(0,r.jsx)(s.strong,{children:"adresse m\xe9moire"}),".\nIl est d\xe9clar\xe9 avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"ptr"})," et est utilis\xe9 pour stocker des adresses m\xe9moire."]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"type-tableau",children:"Type tableau"}),"\n",(0,r.jsxs)(s.p,{children:["Le type tableau est utilis\xe9 pour stocker ",(0,r.jsx)(s.strong,{children:"plusieurs \xe9l\xe9ments du m\xeame type de donn\xe9es"})," de mani\xe8re s\xe9quentielle.\nIl est d\xe9clar\xe9 avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"array"}),", et vous pouvez sp\xe9cifier la taille ou le type des \xe9l\xe9ments du tableau."]}),"\n",(0,r.jsx)(s.p,{children:"Exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,r.jsx)(s.p,{children:"Chaque type de donn\xe9e permet de d\xe9finir des plages et des tailles vari\xe9es, ce qui permet \xe0 l'utilisateur de choisir le type qui correspond le mieux \xe0 ses besoins pour une gestion efficace de la m\xe9moire et des calculs."})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(6540);const r={},l=t.createContext(r);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);