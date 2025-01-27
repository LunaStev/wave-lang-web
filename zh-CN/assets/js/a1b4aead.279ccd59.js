"use strict";(self.webpackChunkwave_lang=self.webpackChunkwave_lang||[]).push([[4222],{4351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"syntax/if","title":"IF Statement","description":"Introduction","source":"@site/docs/syntax/if.md","sourceDirName":"syntax","slug":"/syntax/if","permalink":"/zh-CN/docs/syntax/if","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/if.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636e\u7c7b\u578b","permalink":"/zh-CN/docs/syntax/data_type"},"next":{"title":"Wave \u751f\u6001\u7cfb\u7edf","permalink":"/zh-CN/docs/ecosystem/"}}');var i=t(4848),a=t(8453);const o={sidebar_position:3},c="IF Statement",r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Structure",id:"basic-structure",level:2},{value:"Example",id:"example",level:2},{value:"IF_ELSE Statement",id:"if_else-statement",level:2},{value:"Example:",id:"example-1",level:3},{value:"Nested IF Statements",id:"nested-if-statements",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"if-statement",children:"IF Statement"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This section introduces the syntax of the IF statement, one of the control statements in Wave.\nAn IF statement is a control structure in programming that evaluates a condition and executes specific code when the condition is true.\nThis allows you to control the flow of the program based on conditions, making it possible to write flexible and logical code."}),"\n",(0,i.jsx)(n.h2,{id:"basic-structure",children:"Basic Structure"}),"\n",(0,i.jsx)(n.p,{children:"The IF statement evaluates a specific condition and only executes the designated block of code if the condition is true.\nThe basic structure of the IF statement in Wave is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:"if (condition) {\n    // Code to execute if the condition is true\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The condition is written using comparison operators (",(0,i.jsx)(n.code,{children:"=="}),", ",(0,i.jsx)(n.code,{children:"!="}),", ",(0,i.jsx)(n.code,{children:"<"}),", ",(0,i.jsx)(n.code,{children:">"}),", ",(0,i.jsx)(n.code,{children:"<="}),", ",(0,i.jsx)(n.code,{children:">="}),") or logical operators (",(0,i.jsx)(n.code,{children:"&&"}),", ",(0,i.jsx)(n.code,{children:"||"}),", ",(0,i.jsx)(n.code,{children:"!"}),") and so on.\nIf the condition is false, the code block is not executed."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s a simple example of an IF statement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var temperature :i32 = 30;\n\nif (temperature > 25) {\n    println("The weather is hot.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'In the above code, if the temperature value is greater than 25, the message "The weather is hot." is printed.'}),"\n",(0,i.jsx)(n.h2,{id:"if_else-statement",children:"IF_ELSE Statement"}),"\n",(0,i.jsx)(n.p,{children:"If the condition is false and you want to execute an alternative set of code, you use the IF-ELSE statement.\nThe structure is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:"if (condition) {\n    // Code to execute if the condition is true\n} else {\n    // Code to execute if the condition is false\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 70;\n\nif (score >= 60) {\n    println("You passed!");\n} else {\n    println("You failed.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'If the score is 60 or above, "You passed!" is printed, otherwise, "You failed." is printed.'}),"\n",(0,i.jsx)(n.h2,{id:"nested-if-statements",children:"Nested IF Statements"}),"\n",(0,i.jsx)(n.p,{children:"An IF statement can be used inside another IF statement. This is called a nested IF statement, and it is useful when handling complex conditions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-wave",children:'var score :i32 = 85;\n\nif (score >= 60) {\n    if (score >= 90) {\n        println("Excellent performance!");\n    } else {\n        println("You passed.");\n    } \n} else {\n    println("You failed.");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'In the example above, based on the score, the message "Excellent performance!", "You passed.", or "You failed." is printed.'}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An IF statement is a control structure that evaluates a condition and executes a specific code block."}),"\n",(0,i.jsx)(n.li,{children:"The ELSE statement can be added to specify the code to execute if the condition is false."}),"\n",(0,i.jsx)(n.li,{children:"Nested IF statements are used when dealing with complex conditions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By using IF statements, you can structure the flow of your program in a more logical and dynamic way!"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);