"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[9877],{463:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"syntax/data_type","title":"Data Types","description":"This document explains the various data types provided by the Wave programming language.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Functions and Variables","permalink":"/docs/syntax/intro"},"next":{"title":"IF Statement","permalink":"/docs/syntax/if"}}');var s=a(4848),r=a(8453);const i={sidebar_position:2},d="Data Types",l={},o=[{value:"Integer",id:"integer",level:2},{value:"Floating-Point Type",id:"floating-point-type",level:2},{value:"String Type",id:"string-type",level:2},{value:"Boolean Type",id:"boolean-type",level:2},{value:"Character Type",id:"character-type",level:2},{value:"Byte Type",id:"byte-type",level:2},{value:"Pointer Type",id:"pointer-type",level:2},{value:"Array Type",id:"array-type",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"data-types",children:"Data Types"})}),"\n",(0,s.jsx)(n.p,{children:"This document explains the various data types provided by the Wave programming language.\nThe Wave programming language uses various data types to store values and perform operations.\nThe main data types include integers, floating-point numbers, strings, and more. Each data type defines the characteristics of the data and how it is handled in memory."}),"\n",(0,s.jsx)(n.h2,{id:"integer",children:"Integer"}),"\n",(0,s.jsxs)(n.p,{children:["The integer type is used to store ",(0,s.jsx)(n.strong,{children:"integer values"}),".\nBy default, integers are declared as ",(0,s.jsx)(n.code,{children:"i32"})," (signed 32-bit integer) and ",(0,s.jsx)(n.code,{children:"u32"})," (unsigned 32-bit integer).\nThe Wave programming language provides various size options that allow you to finely adjust the range of integers."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i8"})," ~ ",(0,s.jsx)(n.code,{children:"i1024"}),": Signed integer type, with sizes ranging from 8 bits to 1024 bits."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"u8"})," ~ ",(0,s.jsx)(n.code,{children:"u1024"}),": Unsigned integer type, with sizes ranging from 8 bits to 1024 bits."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"floating-point-type",children:"Floating-Point Type"}),"\n",(0,s.jsxs)(n.p,{children:["The floating-point type is used to store real (decimal) values.\nBy default, floating-point numbers are declared as ",(0,s.jsx)(n.code,{children:"f32"}),".\nAdditionally, the language offers various size options to finely define the range of floating-point numbers."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f32"})," ~ ",(0,s.jsx)(n.code,{children:"f1024"}),": The floating-point type can range from 32 bits to 1024 bits, allowing for higher precision in real number calculations."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"string-type",children:"String Type"}),"\n",(0,s.jsxs)(n.p,{children:["The string type is used to handle text data. Strings are declared using the ",(0,s.jsx)(n.code,{children:"str"})," keyword.\nStrings are typically defined by enclosing the text in double quotes (",(0,s.jsx)(n.code,{children:'"'}),"), and you can assign string values to variables."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"boolean-type",children:"Boolean Type"}),"\n",(0,s.jsxs)(n.p,{children:["The boolean type is used to represent ",(0,s.jsx)(n.strong,{children:"true"})," or ",(0,s.jsx)(n.strong,{children:"false"})," values.\nIt is commonly used in conditional statements, where the value is set to either ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"character-type",children:"Character Type"}),"\n",(0,s.jsxs)(n.p,{children:["The character type is used to store a single character.\nIt is declared using the ",(0,s.jsx)(n.code,{children:"char"})," keyword, and can hold only one character value."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"byte-type",children:"Byte Type"}),"\n",(0,s.jsxs)(n.p,{children:["The byte type is used to store ",(0,s.jsx)(n.strong,{children:"1-byte"})," sized data.\nIt is especially useful when dealing with binary data. The ",(0,s.jsx)(n.code,{children:"byte"})," keyword is used for declaration."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pointer-type",children:"Pointer Type"}),"\n",(0,s.jsxs)(n.p,{children:["The pointer type is used to reference a ",(0,s.jsx)(n.strong,{children:"memory address"}),".\nThe ",(0,s.jsx)(n.code,{children:"ptr"})," keyword is used to declare a pointer, and it is used to store memory addresses."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"array-type",children:"Array Type"}),"\n",(0,s.jsxs)(n.p,{children:["The array type is used to store ",(0,s.jsx)(n.strong,{children:"multiple values of the same data type"})," in a sequential manner.\nThe ",(0,s.jsx)(n.code,{children:"array"})," keyword is used, and you can specify the size or type of the array."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,s.jsx)(n.p,{children:"Since each data type can be set with various ranges and sizes, you can choose the appropriate type to ensure efficient memory management and calculations based on your needs."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>d});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);