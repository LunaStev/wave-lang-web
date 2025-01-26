"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[289],{7257:(a,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>e,toc:()=>h});const e=JSON.parse('{"id":"syntax/data_type","title":"Aina za Data","description":"Hati hii inaelezea aina mbalimbali za data zinazotolewa na lugha ya programu ya Wave.","source":"@site/i18n/sw/docusaurus-plugin-content-docs/current/syntax/data_type.md","sourceDirName":"syntax","slug":"/syntax/data_type","permalink":"/sw/docs/syntax/data_type","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/data_type.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Fungsi na Varyabili","permalink":"/sw/docs/syntax/intro"},"next":{"title":"Ekosistimu ya Wave","permalink":"/sw/docs/ecosystem/"}}');var u=n(4848),r=n(8453);const s={sidebar_position:2},t="Aina za Data",l={},h=[{value:"Aina ya Nambari Kamili",id:"aina-ya-nambari-kamili",level:2},{value:"Aina ya Nambari za Mzunguko",id:"aina-ya-nambari-za-mzunguko",level:2},{value:"Aina ya Maandishi",id:"aina-ya-maandishi",level:2},{value:"Aina ya Boolean",id:"aina-ya-boolean",level:2},{value:"Aina ya Herufi",id:"aina-ya-herufi",level:2},{value:"Aina ya Bayti",id:"aina-ya-bayti",level:2},{value:"Aina ya Pointer",id:"aina-ya-pointer",level:2},{value:"Aina ya Orodha",id:"aina-ya-orodha",level:2}];function d(a){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...a.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.header,{children:(0,u.jsx)(i.h1,{id:"aina-za-data",children:"Aina za Data"})}),"\n",(0,u.jsx)(i.p,{children:"Hati hii inaelezea aina mbalimbali za data zinazotolewa na lugha ya programu ya Wave.\nLugha ya programu ya Wave hutumia aina mbalimbali za data kuhifadhi na kufanya mahesabu.\nAina kuu za data ni nambari kamili, nambari za mzunguko, maandishi, n.k. Kila aina ya data inaelezea sifa za data husika na jinsi ya kushughulikia kumbukumbu."}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-nambari-kamili",children:"Aina ya Nambari Kamili"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya nambari kamili hutumiwa kuhifadhi thamani za nambari kamili.\nKwa kawaida, nambari kamili zinatangazwa kama ",(0,u.jsx)(i.code,{children:"i32"})," (nambari kamili zenye ishara za biti 32) na ",(0,u.jsx)(i.code,{children:"u32"})," (nambari kamili zisizo na ishara za biti 32).\nLugha ya Wave inatoa chaguzi mbalimbali za ukubwa za kudhibiti upeo wa nambari kamili kwa usahihi."]}),"\n",(0,u.jsxs)(i.ul,{children:["\n",(0,u.jsxs)(i.li,{children:[(0,u.jsx)(i.code,{children:"i4"})," ~ ",(0,u.jsx)(i.code,{children:"i32768"}),": Aina ya nambari kamili yenye ishara, na ukubwa unaweza kuwa kati ya biti 4 na biti 32768."]}),"\n",(0,u.jsxs)(i.li,{children:[(0,u.jsx)(i.code,{children:"u4"})," ~ ",(0,u.jsx)(i.code,{children:"u32768"}),": Aina ya nambari kamili zisizo na ishara, na ukubwa unaweza kuwa kati ya biti 4 na biti 32768."]}),"\n"]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var a :i32 = 100;\nvar b :u32 = 200;\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-nambari-za-mzunguko",children:"Aina ya Nambari za Mzunguko"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya nambari za mzunguko hutumiwa kuhifadhi thamani za nambari za kweli.\nKwa kawaida, nambari za mzunguko zinatangazwa kama ",(0,u.jsx)(i.code,{children:"f32"}),".\nPia, inatoa chaguzi mbalimbali za ukubwa ili kufafanua ukubwa wa nambari za mzunguko."]}),"\n",(0,u.jsxs)(i.ul,{children:["\n",(0,u.jsxs)(i.li,{children:[(0,u.jsx)(i.code,{children:"f32"})," ~ ",(0,u.jsx)(i.code,{children:"f32768"}),": Aina ya nambari za mzunguko inatoa chaguzi za ukubwa kuanzia biti 32 hadi 32768, ambayo inaruhusu mahesabu sahihi ya nambari za mzunguko."]}),"\n"]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var pi :f32 = 3.14;\nvar e :f64 = 2.71828;\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-maandishi",children:"Aina ya Maandishi"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya maandishi hutumiwa kushughulikia data ya maandishi. Neno muhimu ",(0,u.jsx)(i.code,{children:"str"})," hutumika kutangaza maandishi.\nMaandishi kwa kawaida huhifadhiwa kwa kutumia alama za nukuu kubwa (",(0,u.jsx)(i.code,{children:'"'}),") na, inaweza kutumika kuhifadhi thamani za maandishi."]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:'var text :str = "Hello Wave";\n'})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-boolean",children:"Aina ya Boolean"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya boolean hutumika kuonyesha ",(0,u.jsx)(i.strong,{children:"thamani za kweli (True)"})," au ",(0,u.jsx)(i.strong,{children:"thamani za uongo (False)"}),".\nHii hutumika hasa katika masharti ya uamuzi, na thamani yake inaweza kuwa ",(0,u.jsx)(i.code,{children:"true"})," au ",(0,u.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var isActive :bool = true;\nvar isAvailable :bool = true;\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-herufi",children:"Aina ya Herufi"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya herufi hutumika kuhifadhi ",(0,u.jsx)(i.strong,{children:"herufi moja"}),".\n",(0,u.jsx)(i.code,{children:"char"})," hutumika kutangaza herufi, na inaweza kuhifadhi thamani moja tu ya herufi."]}),"\n",(0,u.jsx)(i.p,{children:"\uc608\uc2dc:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var letter :char = 'A';\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-bayti",children:"Aina ya Bayti"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya bayti hutumika kuhifadhi ",(0,u.jsx)(i.strong,{children:"data ya ukubwa wa byte 1"}),".\nKwa kawaida hutumika katika kushughulikia data ya binary. ",(0,u.jsx)(i.code,{children:"byte"})," hutumika kutangaza bayti."]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var byteData :byte = 0xFF;\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-pointer",children:"Aina ya Pointer"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya pointer hutumika kurejelea ",(0,u.jsx)(i.strong,{children:"anwani za kumbukumbu"}),".\n",(0,u.jsx)(i.code,{children:"ptr"})," hutumika kutangaza pointer na hutumika kuhifadhi anwani za kumbukumbu."]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var ptr :ptr = &someVariable;\n"})}),"\n",(0,u.jsx)(i.h2,{id:"aina-ya-orodha",children:"Aina ya Orodha"}),"\n",(0,u.jsxs)(i.p,{children:["Aina ya orodha hutumika kuhifadhi ",(0,u.jsx)(i.strong,{children:"seti ya data ya aina moja"})," kwa mpangilio.\n",(0,u.jsx)(i.code,{children:"array"})," hutumika kutangaza orodha na, unaweza kubaini ukubwa na aina ya orodha."]}),"\n",(0,u.jsx)(i.p,{children:"Mfano:"}),"\n",(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:"language-wave",children:"var numbers: array<i32> = [1, 2, 3, 4, 5];\n"})}),"\n",(0,u.jsx)(i.p,{children:"Kila aina ya data ina chaguzi za ukubwa na upeo mbalimbali, hivyo basi mtumiaji anaweza kuchagua aina inayofaa ili kufanikisha usimamizi bora wa kumbukumbu na mahesabu."})]})}function o(a={}){const{wrapper:i}={...(0,r.R)(),...a.components};return i?(0,u.jsx)(i,{...a,children:(0,u.jsx)(d,{...a})}):d(a)}},8453:(a,i,n)=>{n.d(i,{R:()=>s,x:()=>t});var e=n(6540);const u={},r=e.createContext(u);function s(a){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof a?a(i):{...i,...a}}),[i,a])}function t(a){let i;return i=a.disableParentContext?"function"==typeof a.components?a.components(u):a.components||u:s(a.components),e.createElement(r.Provider,{value:i},a.children)}}}]);