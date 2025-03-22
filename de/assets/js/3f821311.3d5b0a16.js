"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[8372],{8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}},8753:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"wson/intro","title":"Syntax","description":"1. Grundstruktur","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/wson/intro.md","sourceDirName":"wson","slug":"/wson/intro","permalink":"/de/docs/wson/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wson/intro.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Wave Serialisierungsobjekt-Notation","permalink":"/de/docs/wson/"}}');var i=r(4848),t=r(8453);const d={sidebar_position:2},l="Syntax",c={},a=[{value:"1. Grundstruktur",id:"1-grundstruktur",level:2},{value:"2. Kommentare",id:"2-kommentare",level:2},{value:"3. Objekt",id:"3-objekt",level:2},{value:"4. Array",id:"4-array",level:2},{value:"5. Schl\xfcssel-Wert-Paar",id:"5-schl\xfcssel-wert-paar",level:2},{value:"6. Datentypen",id:"6-datentypen",level:2},{value:"7. Beispiel-Erkl\xe4rung",id:"7-beispiel-erkl\xe4rung",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"syntax",children:"Syntax"})}),"\n",(0,i.jsx)(n.h2,{id:"1-grundstruktur",children:"1. Grundstruktur"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Der Inhalt der Datei beginnt und endet mit einem Objekt, das in ",(0,i.jsx)(n.code,{children:"{}"})," geschweifte Klammern eingeschlossen ist."]}),"\n",(0,i.jsx)(n.li,{children:"Ein Objekt besteht aus Schl\xfcssel-Wert-Paaren, wobei der Schl\xfcssel der Attributname und der Wert der Attributwert ist."}),"\n",(0,i.jsxs)(n.li,{children:["Der Attributname und der Wert werden durch einen Doppelpunkt (",(0,i.jsx)(n.code,{children:":"}),") oder ein Gleichheitszeichen (",(0,i.jsx)(n.code,{children:"="}),") getrennt."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-kommentare",children:"2. Kommentare"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kommentare beginnen mit ",(0,i.jsx)(n.code,{children:"//"})," oder ",(0,i.jsx)(n.code,{children:"#"})," und werden in einer einzelnen Zeile geschrieben."]}),"\n",(0,i.jsx)(n.li,{children:"Kommentare gelten f\xfcr den Rest der Zeile."}),"\n",(0,i.jsxs)(n.li,{children:["Mehrzeilige Kommentare werden nicht unterst\xfctzt. Wenn Kommentare \xfcber mehrere Zeilen geschrieben werden m\xfcssen, muss zu Beginn jeder Zeile ",(0,i.jsx)(n.code,{children:"//"})," oder ",(0,i.jsx)(n.code,{children:"#"})," hinzugef\xfcgt werden."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-objekt",children:"3. Objekt"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ein Objekt ist in ",(0,i.jsx)(n.code,{children:"{}"})," geschweifte Klammern eingeschlossen und enth\xe4lt Schl\xfcssel-Wert-Paare."]}),"\n",(0,i.jsxs)(n.li,{children:["Zwischen Schl\xfcssel und Wert kann entweder ",(0,i.jsx)(n.code,{children:":"})," oder ",(0,i.jsx)(n.code,{children:"="})," verwendet werden. Beide Symbole sind austauschbar."]}),"\n",(0,i.jsxs)(n.li,{children:["Jede Eigenschaft wird durch ein Komma (",(0,i.jsx)(n.code,{children:","}),") getrennt."]}),"\n",(0,i.jsx)(n.li,{children:"Es k\xf6nnen andere Objekte innerhalb eines Objekts verschachtelt werden."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    status: "success",\n    code = 200,\n    user = { id: 123, name: "John Doe" }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4-array",children:"4. Array"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ein Array ist in ",(0,i.jsx)(n.code,{children:"[]"})," eckige Klammern eingeschlossen, und die Elemente sind durch Kommas (",(0,i.jsx)(n.code,{children:","}),") getrennt."]}),"\n",(0,i.jsx)(n.li,{children:"Array-Elemente k\xf6nnen Objekte, Strings, Zahlen oder andere Datentypen sein."}),"\n",(0,i.jsx)(n.li,{children:"In WSON k\xf6nnen Arrays innerhalb von Objekten enthalten sein, und Arrays k\xf6nnen auch andere Arrays oder Objekte enthalten."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'tasks: [\n    { task_id: 1, title: "Complete project report" },\n    { task_id: 2, title: "Review team feedback" }\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"5-schl\xfcssel-wert-paar",children:"5. Schl\xfcssel-Wert-Paar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Attributnamen sind Strings und werden direkt nach ",(0,i.jsx)(n.code,{children:":"})," oder ",(0,i.jsx)(n.code,{children:"="}),", ohne Leerzeichen, platziert."]}),"\n",(0,i.jsx)(n.li,{children:"Der Wert kann verschiedene Datentypen wie Strings, Zahlen, Booleans, Objekte oder Arrays haben."}),"\n",(0,i.jsxs)(n.li,{children:["Strings werden in doppelte Anf\xfchrungszeichen (",(0,i.jsx)(n.code,{children:'"'}),") gesetzt."]}),"\n",(0,i.jsx)(n.li,{children:"Zahlen werden ohne Anf\xfchrungszeichen geschrieben und k\xf6nnen Ganzzahlen oder Flie\xdfkommazahlen sein."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'name: "John Doe"\nage = 25\n'})}),"\n",(0,i.jsx)(n.h2,{id:"6-datentypen",children:"6. Datentypen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'String: Text, der in doppelte Anf\xfchrungszeichen (") eingeschlossen ist.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"hello world"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Zahl: Ein ganzzahliger oder Flie\xdfkommawert."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"42\n3.14\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Boolean: Der Wert ist entweder ",(0,i.jsx)(n.code,{children:"true"})," oder ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"is_active = true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Objekt: Ein Satz von Schl\xfcssel-Wert-Paaren, die in ",(0,i.jsx)(n.code,{children:"{}"})," eingeschlossen sind."]}),"\n",(0,i.jsxs)(n.li,{children:["Array: Eine Liste von Elementen, die in ",(0,i.jsx)(n.code,{children:"[]"})," eingeschlossen ist."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"7-beispiel-erkl\xe4rung",children:"7. Beispiel-Erkl\xe4rung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ws",children:'{\n    // Statuscode und Nachrichteninformation\n    status: "success",\n    code: 200,\n    message: "Data retrieved successfully",\n\n    user = {\n        id = 123,\n        name: "John Doe",\n        email: "john@example.com",\n        age: 25  # Benutzeralter\n    },\n\n    tasks: [\n        {\n            task_id: 1,\n            title: "Complete project report",\n            status: "in-progress",\n            due_date: "2024-10-15"\n        },\n        {\n            task_id: 2,\n            title: "Review team feedback",\n            status: "pending",\n            due_date: "2024-10-20"\n        }\n    ]\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);