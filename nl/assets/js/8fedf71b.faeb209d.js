"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[6354],{8250:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"syntax/if","title":"IF-verklaring","description":"Inleiding","source":"@site/i18n/nl/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/nl/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Gegevenstypen","permalink":"/nl/docs/syntax/data_type"},"next":{"title":"While \ubb38","permalink":"/nl/docs/syntax/while"}}');var i=r(4848),o=r(8453);const s={sidebar_position:3},d="IF-verklaring",t={},l=[{value:"Inleiding",id:"inleiding",level:2},{value:"Basisstructuur",id:"basisstructuur",level:2},{value:"Voorbeeld",id:"voorbeeld",level:2},{value:"IF_ELSE-verklaring",id:"if_else-verklaring",level:2},{value:"Voorbeeld:",id:"voorbeeld-1",level:3},{value:"Geneste IF-verklaring",id:"geneste-if-verklaring",level:2},{value:"Samenvatting",id:"samenvatting",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"if-verklaring",children:"IF-verklaring"})}),"\n",(0,i.jsx)(n.h2,{id:"inleiding",children:"Inleiding"}),"\n",(0,i.jsx)(n.p,{children:"In dit gedeelte introduceren we de syntaxis van de IF-verklaring, een van de controle-instructies van Wave. De IF-verklaring wordt gebruikt in programmeren om voorwaarden te evalueren en een bepaald stuk code uit te voeren wanneer de voorwaarde waar (True) is. Dit stelt ons in staat om de stroom van het programma te beheersen en flexibele en logische code te schrijven."}),"\n",(0,i.jsx)(n.h2,{id:"basisstructuur",children:"Basisstructuur"}),"\n",(0,i.jsx)(n.p,{children:"De IF-verklaring evalueert een bepaalde voorwaarde en voert de opgegeven codeblock alleen uit wanneer de voorwaarde waar is. De basisstructuur van een IF-verklaring in Wave is als volgt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:"if (voorwaarde) {\n    // Code die wordt uitgevoerd als de voorwaarde waar is\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["De voorwaarde kan worden opgesteld met vergelijkingsoperatoren (",(0,i.jsx)(n.code,{children:"=="}),", ",(0,i.jsx)(n.code,{children:"!="}),", ",(0,i.jsx)(n.code,{children:"<"}),", ",(0,i.jsx)(n.code,{children:">"}),", ",(0,i.jsx)(n.code,{children:"<="}),", ",(0,i.jsx)(n.code,{children:">="}),") of logische operatoren (",(0,i.jsx)(n.code,{children:"&&"}),", ",(0,i.jsx)(n.code,{children:"||"}),", ",(0,i.jsx)(n.code,{children:"!"}),"). Als de voorwaarde onwaar (False) is, wordt het codeblock niet uitgevoerd."]}),"\n",(0,i.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(n.p,{children:"Hier is een eenvoudig voorbeeld van een IF-verklaring:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var temperatuur :i32 = 30;\n\nif (temperatuur > 25) {\n    println("Het weer is heet.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'In de bovenstaande code wordt de boodschap "Het weer is heet." weergegeven als de waarde van temperatuur groter is dan 25.'}),"\n",(0,i.jsx)(n.h2,{id:"if_else-verklaring",children:"IF_ELSE-verklaring"}),"\n",(0,i.jsx)(n.p,{children:"Als de voorwaarde niet waar is, wordt meestal de IF-ELSE-verklaring gebruikt om alternatieve code uit te voeren. De structuur is als volgt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:"if (voorwaarde) {\n    // Code die wordt uitgevoerd als de voorwaarde waar is\n} else {\n    // Code die wordt uitgevoerd als de voorwaarde onwaar is\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"voorbeeld-1",children:"Voorbeeld:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("Geslaagd!");\n} else {\n    println("Gezakt.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'Als de score 60 of meer is, wordt "Geslaagd!" weergegeven; anders wordt "Gezakt." weergegeven.'}),"\n",(0,i.jsx)(n.h2,{id:"geneste-if-verklaring",children:"Geneste IF-verklaring"}),"\n",(0,i.jsx)(n.p,{children:"De IF-verklaring kan binnen andere IF-verklaringen worden gebruikt. Dit wordt een geneste IF-verklaring genoemd en is handig voor het verwerken van complexe voorwaarden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("Uitstekende prestatie!");\n    } else {\n        println("Geslaagd.");\n    } \n} else {\n    println("Gezakt.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'In het bovenstaande voorbeeld worden de berichten "Uitstekende prestatie!", "Geslaagd." of "Gezakt." weergegeven, afhankelijk van de score.'}),"\n",(0,i.jsx)(n.h2,{id:"samenvatting",children:"Samenvatting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"De IF-verklaring evalueert een voorwaarde en voert een specifiek codeblok uit."}),"\n",(0,i.jsx)(n.li,{children:"Door de ELSE-verklaring toe te voegen, kun je ook de code specificeren die uitgevoerd moet worden als de voorwaarde onwaar is."}),"\n",(0,i.jsx)(n.li,{children:"Geneste IF-verklaringen worden gebruikt voor complexe voorwaarden."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Door de IF-verklaring te gebruiken, kun je de stroom van je programma logischer en dynamischer maken!"})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var a=r(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);