"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6334],{8453:(e,i,a)=>{a.d(i,{R:()=>s,x:()=>o});var n=a(6540);const r={},u=n.createContext(r);function s(e){const i=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(u.Provider,{value:i},e.children)}},8731:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>t,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"syntax/if","title":"ITEGEKO IF","description":"Intangiriro","source":"@site/i18n/rw/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/rw/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Imiterere y\'Ibintu","permalink":"/rw/docs/syntax/data_type"},"next":{"title":"Wave \uc0dd\ud0dc\uacc4","permalink":"/rw/docs/ecosystem/"}}');var r=a(4848),u=a(8453);const s={sidebar_position:3},o="ITEGEKO IF",t={},c=[{value:"Intangiriro",id:"intangiriro",level:2},{value:"Imiterere Isanzwe",id:"imiterere-isanzwe",level:2},{value:"Urugero",id:"urugero",level:2},{value:"ITEGEKO IF_ELSE",id:"itegeko-if_else",level:2},{value:"Urugero:",id:"urugero-1",level:3},{value:"ITEGEKO IF ISUMBUYE",id:"itegeko-if-isumbuye",level:2},{value:"Isuzuma",id:"isuzuma",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,u.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"itegeko-if",children:"ITEGEKO IF"})}),"\n",(0,r.jsx)(i.h2,{id:"intangiriro",children:"Intangiriro"}),"\n",(0,r.jsx)(i.p,{children:"Muri iki gice, turaza kwerekana imiterere y'itegeko rya IF, rimwe mu mategeko ya Wave.\nITEGEKO IF ni itegeko rikoreshwa mu gufata imyanzuro mu gusuzuma niba ibyo ugerageza kuba ari ukuri, hanyuma ugashyira mu bikorwa code imwe mu gihe ibyo ugerageza ari ukuri.\nIbi bituma ushobora kugenzura uko porogaramu ikora, ndetse ukandika kode yoroshye kandi ifite logic."}),"\n",(0,r.jsx)(i.h2,{id:"imiterere-isanzwe",children:"Imiterere Isanzwe"}),"\n",(0,r.jsx)(i.p,{children:"ITEGEKO IF isuzuma kimwe mu bipimo, hanyuma igihe icyo gipimo kiba ari ukuri (True), itegeka ryashyirwa mu bikorwa.\nImiterere isanzwe y'itegeko IF muri Wave ni uku:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-wave",children:"if (igipimo) {\n    // Code izashyirwa mu bikorwa igihe igipimo ari ukuri\n}\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Igipimo kirimo kugereranya ibimenyetso (",(0,r.jsx)(i.code,{children:"=="}),", ",(0,r.jsx)(i.code,{children:"!="}),", ",(0,r.jsx)(i.code,{children:"<"}),", ",(0,r.jsx)(i.code,{children:">"}),", ",(0,r.jsx)(i.code,{children:"<="}),", ",(0,r.jsx)(i.code,{children:">="}),") cyangwa ibimenyetso by\u2019imyifatire (",(0,r.jsx)(i.code,{children:"&&"}),", ",(0,r.jsx)(i.code,{children:"||"}),", ",(0,r.jsx)(i.code,{children:"!"}),") kugira ngo gikorwe. Iyo igipimo kiri kubiri (False), kode ntabwo izashyirwa mu bikorwa."]}),"\n",(0,r.jsx)(i.h2,{id:"urugero",children:"Urugero"}),"\n",(0,r.jsx)(i.p,{children:"Dore urugero rworoshye rw'itegeko IF:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-wave",children:'var ubushyuhe :i32 = 30;\n\nif (ubushyuhe > 25) {\n    println("Igihe kirashyushye.");\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:'Muri iki kode, igihe ubushyuhe buzarenga 25, ubutumwa "Igihe kirashyushye." buzagaragara.'}),"\n",(0,r.jsx)(i.h2,{id:"itegeko-if_else",children:"ITEGEKO IF_ELSE"}),"\n",(0,r.jsx)(i.p,{children:"Niba igipimo kitari ukuri, ushobora gukoresha IF-ELSE kugira ngo ushyireho code izashyirwa mu bikorwa mu gihe igipimo kitarimo ukuri.\nImiterere yayo ni:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-wave",children:"if (\uc870\uac74) {\n    // \uc870\uac74\uc774 \ucc38\uc77c \uacbd\uc6b0 \uc2e4\ud589\ub420 \ucf54\ub4dc\n} else {\n    // \uc870\uac74\uc774 \uac70\uc9d3\uc77c \uacbd\uc6b0 \uc2e4\ud589\ub420 \ucf54\ub4dc\n}\n"})}),"\n",(0,r.jsx)(i.h3,{id:"urugero-1",children:"Urugero:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-wave",children:'var amanota :i32 = 70;\n\nif (amanota >= 60) {\n    println("Watsinze!");\n} else {\n    println("Ntutsinze.");\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:'Iyo amanota azamuka ku 60 cyangwa arenga, ubutumwa "Watsinze!" buzagaragara, mu gihe bitari byo "Ntutsinze." buzaba bwanditse.'}),"\n",(0,r.jsx)(i.h2,{id:"itegeko-if-isumbuye",children:"ITEGEKO IF ISUMBUYE"}),"\n",(0,r.jsx)(i.p,{children:"ITEGEKO IF rishobora no gushyirwa mu rindi tegeko IF, ibintu byitwa Nested IF. Bikoreshwa mu kugenzura ibipimo bigoye."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-wave",children:'var amanota :i32 = 85;\n\nif (amanota >= 60) {\n    if (amanota >= 90) {\n        println("Watsinze neza!");\n    } else {\n        println("Watsinze.");\n    } \n} else {\n    println("Ntutsinze.");\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:'Muri uru rugero, bitewe n\'amanota, ubutumwa "Watsinze neza!", "Watsinze.", cyangwa "Ntutsinze." buzagaragara.'}),"\n",(0,r.jsx)(i.h2,{id:"isuzuma",children:"Isuzuma"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"ITEGEKO IF rikoreshwa mu gusuzuma ibipimo hanyuma rikuzuza code igihe icyo gipimo ari ukuri."}),"\n",(0,r.jsx)(i.li,{children:"Ushobora kongeramo ELSE kugira ngo ushyireho code izashyirwa mu bikorwa igihe igipimo kitari ukuri."}),"\n",(0,r.jsx)(i.li,{children:"Nested IF ikoreshwa mu gusuzuma ibipimo biremereye."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Koresha ITEGEKO IF kugira ngo ugire porogaramu ifite logic kandi irambuye!"})]})}function l(e={}){const{wrapper:i}={...(0,u.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);