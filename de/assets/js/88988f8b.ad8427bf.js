"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[2976],{5267:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"syntax/if","title":"IF-Anweisung","description":"Einf\xfchrung","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/de/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Datentypen","permalink":"/de/docs/syntax/data_type"},"next":{"title":"While \ubb38","permalink":"/de/docs/syntax/while"}}');var r=i(4848),d=i(8453);const t={sidebar_position:3},a="IF-Anweisung",l={},u=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Grundstruktur",id:"grundstruktur",level:2},{value:"Beispiel",id:"beispiel",level:2},{value:"IF_ELSE-Anweisung",id:"if_else-anweisung",level:2},{value:"Beispiel:",id:"beispiel-1",level:3},{value:"Verschachtelte IF-Anweisungen",id:"verschachtelte-if-anweisungen",level:2},{value:"Zusammenfassung",id:"zusammenfassung",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"if-anweisung",children:"IF-Anweisung"})}),"\n",(0,r.jsx)(n.h2,{id:"einf\xfchrung",children:"Einf\xfchrung"}),"\n",(0,r.jsx)(n.p,{children:"In diesem Abschnitt wird die Syntax der IF-Anweisung, einer der Kontrollstrukturen in Wave, vorgestellt. Die IF-Anweisung wird in der Programmierung verwendet, um eine Bedingung zu bewerten und bei wahrem Ergebnis einen bestimmten Code auszuf\xfchren. Dadurch l\xe4sst sich der Ablauf eines Programms steuern und es k\xf6nnen flexible und logische Codes geschrieben werden."}),"\n",(0,r.jsx)(n.h2,{id:"grundstruktur",children:"Grundstruktur"}),"\n",(0,r.jsx)(n.p,{children:"Die IF-Anweisung bewertet eine bestimmte Bedingung und f\xfchrt nur den angegebenen Codeblock aus, wenn die Bedingung wahr (True) ist.\nDie Grundstruktur der IF-Anweisung in Wave sieht folgenderma\xdfen aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (Bedingung) {\n    // Code, der ausgef\xfchrt wird, wenn die Bedingung wahr ist\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Die Bedingung wird unter Verwendung von Vergleichsoperatoren (",(0,r.jsx)(n.code,{children:"=="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="}),") oder logischen Operatoren (",(0,r.jsx)(n.code,{children:"&&"}),", ",(0,r.jsx)(n.code,{children:"||"}),", ",(0,r.jsx)(n.code,{children:"!"}),") formuliert.\nIst die Bedingung falsch (False), wird der Codeblock nicht ausgef\xfchrt."]}),"\n",(0,r.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein einfaches Beispiel f\xfcr eine IF-Anweisung:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var temperature :i32 = 30;\n\nif (temperature > 25) {\n    println("Es ist hei\xdf.");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:['n diesem Code wird die Nachricht "Es ist hei\xdf." ausgegeben, wenn der Wert von ',(0,r.jsx)(n.code,{children:"temperature"})," gr\xf6\xdfer als 25 ist."]}),"\n",(0,r.jsx)(n.h2,{id:"if_else-anweisung",children:"IF_ELSE-Anweisung"}),"\n",(0,r.jsx)(n.p,{children:"Wenn eine alternative Aktion ausgef\xfchrt werden soll, falls die Bedingung nicht wahr ist, wird die IF-ELSE-Anweisung verwendet. Die Struktur sieht folgenderma\xdfen aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:"if (Bedingung) {\n    // Code, der ausgef\xfchrt wird, wenn die Bedingung wahr ist\n} else {\n    // Code, der ausgef\xfchrt wird, wenn die Bedingung falsch ist\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-1",children:"Beispiel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("Bestanden!");\n} else {\n    println("Nicht bestanden.");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Wenn der Wert von ",(0,r.jsx)(n.code,{children:"score"}),' 60 oder mehr betr\xe4gt, wird "Bestanden!" ausgegeben. Andernfalls wird "Nicht bestanden." ausgegeben.']}),"\n",(0,r.jsx)(n.h2,{id:"verschachtelte-if-anweisungen",children:"Verschachtelte IF-Anweisungen"}),"\n",(0,r.jsx)(n.p,{children:"Eine IF-Anweisung kann auch innerhalb einer anderen IF-Anweisung verwendet werden. Dies wird als verschachtelte IF-Anweisung bezeichnet und ist n\xfctzlich, um komplexe Bedingungen zu behandeln."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("Ausgezeichnete Leistung!");\n    } else {\n        println("Bestanden.");\n    } \n} else {\n    println("Nicht bestanden.");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'In diesem Beispiel wird je nach Punktzahl die Nachricht "Ausgezeichnete Leistung!", "Bestanden." oder "Nicht bestanden." ausgegeben.'}),"\n",(0,r.jsx)(n.h2,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Die IF-Anweisung bewertet eine Bedingung und f\xfchrt einen bestimmten Codeblock aus."}),"\n",(0,r.jsx)(n.li,{children:"Mit der ELSE-Anweisung kann auch der Code f\xfcr den Fall ausgef\xfchrt werden, dass die Bedingung falsch ist."}),"\n",(0,r.jsx)(n.li,{children:"Verschachtelte IF-Anweisungen werden verwendet, um komplexe Bedingungen zu behandeln."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Mit der IF-Anweisung k\xf6nnen Sie den Ablauf eines Programms logisch und dynamisch gestalten!"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(6540);const r={},d=s.createContext(r);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);