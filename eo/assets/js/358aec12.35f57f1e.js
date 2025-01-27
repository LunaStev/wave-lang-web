"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[7699],{2777:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"syntax/data_type","title":"Datumaj Tipoj","description":"\u0108i tiu dokumento priskribas la diversajn datumajn tipojn en la programlingvo Wave.","source":"@site/i18n/eo/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/eo/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Funkcioj kaj Variabloj","permalink":"/eo/docs/syntax/intro"},"next":{"title":"IF Statement","permalink":"/eo/docs/syntax/if"}}');var r=n(4848),i=n(8453);const t={sidebar_position:2},s="Datumaj Tipoj",l={},d=[{value:"Entjera Tipo",id:"entjera-tipo",level:2},{value:"Poentnombra Tipo",id:"poentnombra-tipo",level:2},{value:"\u015cnura Tipo",id:"\u015dnura-tipo",level:2},{value:"Boola Tipo",id:"boola-tipo",level:2},{value:"Karaktera Tipo",id:"karaktera-tipo",level:2},{value:"Bajta Tipo",id:"bajta-tipo",level:2},{value:"Pointera Tipo",id:"pointera-tipo",level:2},{value:"Aran\u011da Tipo",id:"aran\u011da-tipo",level:2}];function j(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"datumaj-tipoj",children:"Datumaj Tipoj"})}),"\n",(0,r.jsxs)(a.p,{children:["\u0108i tiu dokumento priskribas la diversajn datumajn tipojn en la programlingvo ",(0,r.jsx)(a.strong,{children:"Wave"}),".\nWave uzas diversajn datumajn tipojn por stoki valorojn kaj plenumi operaciojn.\nLa \u0109efaj datumaj tipoj inkluzivas entjerojn, poentnombrajn valorojn, \u015dnurojn kaj aliajn. \u0108iu datumtipo difinas la karakteriza\u0135ojn de la datumoj kaj la manierojn de memoro-traktado."]}),"\n",(0,r.jsx)(a.h2,{id:"entjera-tipo",children:"Entjera Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Entjera tipo estas uzata por stoki ",(0,r.jsx)(a.strong,{children:"entjerajn valorojn"}),".\n\u011cenerale, entjeroj estas deklaritaj kiel ",(0,r.jsx)(a.code,{children:"i32"})," (subskriba 32-bit-entro) a\u016d ",(0,r.jsx)(a.code,{children:"u32"})," (ne-subskriba 32-bit-entro).\nWave subtenas diversajn longojn de entjeroj, kiuj permesas precizigan skalon de valoro."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"i4"})," ~ ",(0,r.jsx)(a.code,{children:"i32768"}),": Subskribaj entjeroj kun grandeco de 4 bitoj \u011dis 32768 bitoj."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"u4"})," ~ ",(0,r.jsx)(a.code,{children:"u32768"}),": Ne-subskribaj entjeroj kun grandeco de 4 bitoj \u011dis 32768 bitoj."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"poentnombra-tipo",children:"Poentnombra Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Poentnombra tipo estas uzata por stoki ",(0,r.jsx)(a.strong,{children:"realajn valorojn"}),".\n\u011cenerale, poentnombroj estas deklaritaj kiel ",(0,r.jsx)(a.code,{children:"f32"}),".\nWave anka\u016d permesas precizigi la grandecon de poentnombro por ebligi pli altan precizecon."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"f32"})," ~ ",(0,r.jsx)(a.code,{children:"f32768"}),": Poentnombraj tipoj de 32 bitoj \u011dis 32768 bitoj. \u0108i tio ebligas realajn kalkulojn kun pli alta precizeco."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"\u015dnura-tipo",children:"\u015cnura Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["\u015cnura tipo estas uzata por manipuli tekstajn datumojn.\n\u015cnuroj estas deklaritaj per la \u015dlosilvorto ",(0,r.jsx)(a.code,{children:"str"})," kaj kutime estas enkapsulitaj en duobla cita\u0135o (",(0,r.jsx)(a.code,{children:'"'}),")."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,r.jsx)(a.h2,{id:"boola-tipo",children:"Boola Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Boola tipo reprezentas ",(0,r.jsx)(a.strong,{children:"verajn (true)"})," a\u016d ",(0,r.jsx)(a.strong,{children:"malverajn (false)"})," valorojn.\n\u011ci estas ofte uzata en kondi\u0109aj deklaroj, kaj \u011diaj valoroj estas ",(0,r.jsx)(a.code,{children:"true"})," a\u016d ",(0,r.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"karaktera-tipo",children:"Karaktera Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Karaktera tipo estas uzata por stoki ",(0,r.jsx)(a.strong,{children:"unuopa\u0135ajn literojn"}),".\n\u011ci estas deklarita per la \u015dlosilvorto ",(0,r.jsx)(a.code,{children:"char"}),", kaj povas stoki nur unu literon."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,r.jsx)(a.h2,{id:"bajta-tipo",children:"Bajta Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Bajta tipo estas uzata por stoki ",(0,r.jsx)(a.strong,{children:"1-bajtajn"})," valorojn.\n\u011ci estas utila por labori kun binaraj datumoj. La \u015dlosilvorto ",(0,r.jsx)(a.code,{children:"byte"})," estas uzata por deklari bajton."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"pointera-tipo",children:"Pointera Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Pointera tipo estas uzata por referenci ",(0,r.jsx)(a.strong,{children:"memoran adreson"}),".\nLa \u015dlosilvorto ",(0,r.jsx)(a.code,{children:"ptr"})," estas uzata por deklari pointerojn, kiuj stokenas memoradresojn."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"aran\u011da-tipo",children:"Aran\u011da Tipo"}),"\n",(0,r.jsxs)(a.p,{children:["Aran\u011da tipo estas uzata por stoki ",(0,r.jsx)(a.strong,{children:"serion de samaj tipoj de datumoj"})," en sinsekvo.\nLa \u015dlosilvorto ",(0,r.jsx)(a.code,{children:"array"})," estas uzata, kaj oni povas precizigi la grandeco de la aran\u011do a\u016d \u011dian tipon."]}),"\n",(0,r.jsx)(a.p,{children:"Ekzemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,r.jsx)(a.p,{children:"\u0108iu datumtipo en Wave povas havi malsamajn intervalojn kaj grandecojn, kiuj permesas al uzantoj elekti la plej ta\u016dgan tipon por efika memoro-administrado kaj kalkulado."})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>s});var o=n(6540);const r={},i=o.createContext(r);function t(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);