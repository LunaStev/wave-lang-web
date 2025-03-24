"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[1202],{2253:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"wson/intro","title":"Sintaxis","description":"1. Estructura b\xe1sica","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/wson/intro.md","sourceDirName":"wson","slug":"/wson/intro","permalink":"/es/docs/wson/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wson/intro.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Notaci\xf3n de Objetos Serializados de Wave (WSON)","permalink":"/es/docs/wson/"}}');var r=s(4848),l=s(8453);const a={sidebar_position:2},i="Sintaxis",c={},d=[{value:"1. Estructura b\xe1sica",id:"1-estructura-b\xe1sica",level:2},{value:"2. Comentarios",id:"2-comentarios",level:2},{value:"3. Objeto",id:"3-objeto",level:2},{value:"4. Arreglo",id:"4-arreglo",level:2},{value:"5. Pares clave-valor",id:"5-pares-clave-valor",level:2},{value:"6. Tipos de datos",id:"6-tipos-de-datos",level:2},{value:"7. Explicaci\xf3n del ejemplo",id:"7-explicaci\xf3n-del-ejemplo",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sintaxis",children:"Sintaxis"})}),"\n",(0,r.jsx)(n.h2,{id:"1-estructura-b\xe1sica",children:"1. Estructura b\xe1sica"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["El contenido del archivo comienza y termina con un objeto encerrado entre llaves ",(0,r.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Un objeto consta de pares clave-valor, donde la clave es el nombre del atributo y el valor es el valor del atributo."}),"\n",(0,r.jsxs)(n.li,{children:["La clave y el valor se separan por dos puntos (",(0,r.jsx)(n.code,{children:":"}),") o un signo igual (",(0,r.jsx)(n.code,{children:"="}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-comentarios",children:"2. Comentarios"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Los comentarios comienzan con ",(0,r.jsx)(n.code,{children:"//"})," o ",(0,r.jsx)(n.code,{children:"#"})," y se escriben en una sola l\xednea."]}),"\n",(0,r.jsx)(n.li,{children:"Los comentarios aplican hasta el final de la l\xednea."}),"\n",(0,r.jsxs)(n.li,{children:["No se admiten comentarios multil\xednea. Si necesitas comentar varias l\xedneas, debes agregar ",(0,r.jsx)(n.code,{children:"//"})," o ",(0,r.jsx)(n.code,{children:"#"})," al inicio de cada l\xednea."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-objeto",children:"3. Objeto"}),"\n",(0,r.jsxs)(n.p,{children:["Un objeto est\xe1 encerrado entre llaves ",(0,r.jsx)(n.code,{children:"{}"})," y contiene pares clave-valor.\nSe puede usar tanto ",(0,r.jsx)(n.code,{children:":"})," como ",(0,r.jsx)(n.code,{children:"="})," entre la clave y el valor. Ambos s\xedmbolos son intercambiables.\nCada atributo est\xe1 separado por una coma (",(0,r.jsx)(n.code,{children:","}),").\nSe pueden anidar otros objetos dentro de un objeto."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    status: "success",\n    code = 200,\n    user = { id: 123, name: "John Doe" }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4-arreglo",children:"4. Arreglo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Un arreglo est\xe1 encerrado entre corchetes ",(0,r.jsx)(n.code,{children:"[]"}),", y los elementos est\xe1n separados por comas (",(0,r.jsx)(n.code,{children:","}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Los elementos de un arreglo pueden ser objetos, cadenas, n\xfameros u otros tipos de datos."}),"\n",(0,r.jsx)(n.li,{children:"En WSON, los arreglos pueden estar contenidos dentro de objetos, y los arreglos pueden contener otros arreglos u objetos."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'tasks: [\n    { task_id: 1, title: "Complete project report" },\n    { task_id: 2, title: "Review team feedback" }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"5-pares-clave-valor",children:"5. Pares clave-valor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Los nombres de los atributos son cadenas y se colocan directamente despu\xe9s de ",(0,r.jsx)(n.code,{children:":"})," o ",(0,r.jsx)(n.code,{children:"="}),", sin espacios."]}),"\n",(0,r.jsx)(n.li,{children:"El valor puede ser de tipos como cadenas, n\xfameros, booleanos, objetos o arreglos."}),"\n",(0,r.jsxs)(n.li,{children:["Las cadenas se encierran entre comillas dobles (",(0,r.jsx)(n.code,{children:'"'}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Los n\xfameros se escriben sin comillas y pueden ser enteros o de punto flotante."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'name: "John Doe"\nage = 25\n'})}),"\n",(0,r.jsx)(n.h2,{id:"6-tipos-de-datos",children:"6. Tipos de datos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cadena (String): Texto encerrado entre comillas dobles (",(0,r.jsx)(n.code,{children:'"'}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"hello world"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"N\xfamero (Number): Un valor entero o de punto flotante."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"42\n3.14\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Booleano (Boolean): El valor es ",(0,r.jsx)(n.code,{children:"true"})," o ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"is_active = true\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Objeto (Object): Un conjunto de pares clave-valor encerrados entre ",(0,r.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Arreglo (Array): Una lista de elementos encerrados entre ",(0,r.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"7-explicaci\xf3n-del-ejemplo",children:"7. Explicaci\xf3n del ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ws",children:'{\n    // Informaci\xf3n sobre el c\xf3digo de estado y el mensaje\n    status: "success",\n    code: 200,\n    message: "Data retrieved successfully",\n\n    user = {\n        id = 123,\n        name: "John Doe",\n        email: "john@example.com",\n        age: 25  # Edad del usuario\n    },\n\n    tasks: [\n        {\n            task_id: 1,\n            title: "Complete project report",\n            status: "in-progress",\n            due_date: "2024-10-15"\n        },\n        {\n            task_id: 2,\n            title: "Review team feedback",\n            status: "pending",\n            due_date: "2024-10-20"\n        }\n    ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var o=s(6540);const r={},l=o.createContext(r);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);