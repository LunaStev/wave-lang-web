"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[7084],{6873:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"syntax/intro","title":"Funciones y Variables","description":"Introducci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/syntax/intro.md","sourceDirName":"syntax","slug":"/syntax/intro","permalink":"/es/docs/syntax/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Sintaxis","permalink":"/es/docs/syntax/"},"next":{"title":"Tipos de Datos","permalink":"/es/docs/syntax/data_type"}}');var s=a(4848),r=a(8453);const l={sidebar_position:1},o="Funciones y Variables",c={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Funciones",id:"funciones",level:2},{value:"Definir una funci\xf3n",id:"definir-una-funci\xf3n",level:3},{value:"Ejemplo: Funci\xf3n simple",id:"ejemplo-funci\xf3n-simple",level:3},{value:"Variables",id:"variables",level:2},{value:"Variables mutables",id:"variables-mutables",level:3},{value:"Variables inmutables",id:"variables-inmutables",level:3},{value:"Ejemplo de declaraci\xf3n de variables",id:"ejemplo-de-declaraci\xf3n-de-variables",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"funciones-y-variables",children:"Funciones y Variables"})}),"\n",(0,s.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"La filosof\xeda central del dise\xf1o del lenguaje de programaci\xf3n Wave es lograr un equilibrio entre el rendimiento de bajo nivel y la abstracci\xf3n de alto nivel, proporcionando un entorno eficiente y flexible para el desarrollo de software.\nEsta secci\xf3n introduce los elementos b\xe1sicos de los programas Wave: funciones y variables.\nEstos componentes son esenciales para estructurar la l\xf3gica y gestionar los datos dentro de un programa.\nAl comprender c\xf3mo definir y manejar funciones y variables, se puede aprovechar al m\xe1ximo el potencial de Wave."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"funciones",children:"Funciones"}),"\n",(0,s.jsxs)(n.p,{children:["En Wave, las funciones act\xfaan como ",(0,s.jsx)(n.strong,{children:"bloques de c\xf3digo reutilizables"})," que se pueden ejecutar de forma independiente.\nLas funciones encapsulan comportamientos espec\xedficos y permiten que se llamen cuando sea necesario a lo largo del programa.\nEsto permite realizar c\xe1lculos, gestionar operaciones de entrada/salida (I/O) o dividir el c\xf3digo en unidades m\xe1s manejables."]}),"\n",(0,s.jsxs)(n.p,{children:["La firma de una funci\xf3n en Wave comienza con la palabra clave ",(0,s.jsx)(n.code,{children:"fun"}),", seguida del nombre de la funci\xf3n, los par\xe1metros (si los hay), y el cuerpo de la funci\xf3n encerrado entre llaves ",(0,s.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"definir-una-funci\xf3n",children:"Definir una funci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Una funci\xf3n b\xe1sica en Wave se define de la siguiente manera:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"fun main() {\n    // Escribe tu c\xf3digo aqu\xed\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:"main"})," es siempre necesaria como punto de entrada para ejecutar el programa."]}),"\n",(0,s.jsx)(n.li,{children:"Las funciones pueden tener par\xe1metros y devolver valores. El tipo de retorno se especifica despu\xe9s del nombre de la funci\xf3n."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-funci\xf3n-simple",children:"Ejemplo: Funci\xf3n simple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"fun add(a :i32, b :i32) -> i32 {\n    return a + b;\n}\n\nfun main() {\n    var result = add(5, 7);     // Llamada a la funci\xf3n add\n    println(result);            // Imprime: 12\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"En el ejemplo anterior:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:"add"})," recibe dos enteros ",(0,s.jsx)(n.code,{children:"a"})," y ",(0,s.jsx)(n.code,{children:"b"}),", y devuelve su suma."]}),"\n",(0,s.jsxs)(n.li,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:"main"})," llama a ",(0,s.jsx)(n.code,{children:"add"})," y luego imprime el resultado."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Las variables se utilizan para almacenar y manipular datos dentro de un programa.\nWave soporta tanto ",(0,s.jsx)(n.strong,{children:"variables mutables"})," como ",(0,s.jsx)(n.strong,{children:"inmutables"}),", proporcionando al desarrollador control sobre la gesti\xf3n de datos."]}),"\n",(0,s.jsx)(n.h3,{id:"variables-mutables",children:"Variables mutables"}),"\n",(0,s.jsxs)(n.p,{children:["En Wave, las variables son ",(0,s.jsx)(n.strong,{children:"mutables"})," por defecto, lo que significa que sus valores pueden cambiar durante la ejecuci\xf3n del programa."]}),"\n",(0,s.jsxs)(n.p,{children:["Las variables mutables se declaran utilizando la palabra clave ",(0,s.jsx)(n.code,{children:"var"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var x :i32 = 10; // Variable mutable\nx = 20;\n"})}),"\n",(0,s.jsx)(n.p,{children:"En este ejemplo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," es una variable mutable que inicialmente tiene el valor ",(0,s.jsx)(n.code,{children:"10"}),", pero puede cambiar a ",(0,s.jsx)(n.code,{children:"20"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"variables-inmutables",children:"Variables inmutables"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se declara una variable como ",(0,s.jsx)(n.strong,{children:"inmutable"}),", su valor no puede cambiar una vez que se le ha asignado."]}),"\n",(0,s.jsxs)(n.p,{children:["Las variables inmutables se declaran usando ",(0,s.jsx)(n.strong,{children:"var imm"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var imm y :i32 = 5;     // Variable inmutable\n// y = 10;              // Error: No se puede modificar una variable inmutable\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Aqu\xed:\n",(0,s.jsx)(n.code,{children:"y"})," es una variable inmutable, por lo que cualquier intento de cambiar su valor resultar\xe1 en un error de compilaci\xf3n."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-de-declaraci\xf3n-de-variables",children:"Ejemplo de declaraci\xf3n de variables"}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n se muestra un ejemplo de c\xf3mo declarar variables mutables e inmutables de diferentes tipos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:'var x :i32 = 10;                    // Variable mutable de tipo entero\nvar imm y :f64 = 3.14159;           // Variable inmutable de tipo flotante\nvar name :str = "Wave";             // Variable mutable de tipo cadena\nvar imm is_active :bool = true;     // Variable inmutable de tipo booleano\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," es una variable mutable de tipo entero."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y"})," es una variable inmutable de tipo flotante."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," es una variable mutable de tipo cadena."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_active"})," es una variable inmutable de tipo booleano."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En Wave, las variables mutables se declaran con la palabra clave ",(0,s.jsx)(n.code,{children:"var"}),", mientras que las variables inmutables se declaran con ",(0,s.jsx)(n.code,{children:"var imm"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Al distinguir entre variables mutables e inmutables, Wave permite un control m\xe1s efectivo sobre la consistencia de los datos y el estado del programa, lo que ayuda a escribir c\xf3digo m\xe1s robusto y predecible."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var i=a(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);