(()=>{"use strict";var e,a,c,t,f,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,t,f)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],f=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&f||r>=f)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,f<r&&(r=f));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,t,f]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(f,r),f},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({867:"33fc5bb8",994:"1e15abdd",1202:"bd06669f",1235:"a7456010",1349:"8cda42ee",1430:"e4d00ca6",1579:"613973a2",1713:"4241100f",1767:"9d39d3e7",1903:"acecf23e",1972:"73664a40",2058:"8b20138e",2307:"6927316d",2537:"e6e86451",2634:"c4f5d8e4",2711:"9e4087bc",3050:"f601d5af",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",4134:"393be207",4212:"621db11d",4810:"5a11dd49",4813:"6875c492",4967:"cfe0ccb8",5557:"d9f32620",5681:"4be6687f",5742:"aba21aa0",6061:"1f391b9e",6556:"526be6cf",6684:"6c17f970",6896:"dfed01cf",7084:"6a86af83",7098:"a7bd4aaa",7351:"0c69ec8d",7472:"814f3328",7643:"a6aa9e1f",7805:"12dab071",8209:"01a85c17",8401:"17896441",8529:"5f345cb8",8609:"925b3f96",8737:"7661071f",8909:"04bd3a17",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9579:"8dc7c2c4",9647:"5e95c892",9696:"1300235e",9858:"36994c47",9950:"5cceb6de",9984:"0a5ec04e"}[e]||e)+"."+{867:"695a9bee",994:"d32eceae",1202:"1757bc4a",1235:"6a9db6d2",1349:"5247dfec",1430:"076d2457",1579:"a03be44e",1713:"5d8dee5d",1767:"7ee6ccf9",1903:"3afbb501",1972:"6ed51edd",2058:"8deb144d",2237:"6b200511",2307:"126b3a07",2537:"47bb2434",2634:"edc17f19",2711:"e500c3c1",3050:"be116792",3249:"1ea5babf",3603:"0ea28d22",3637:"fcecf06f",3694:"7f47bfb4",4134:"8e920fb7",4212:"e51e11f4",4528:"7d9953be",4810:"602427cb",4813:"6eceeab2",4967:"e3b2aae9",5557:"c546682e",5681:"cf9dbb82",5742:"c19064a2",6061:"9ca7db69",6556:"b2580da0",6684:"b9b72ce7",6896:"1518a9c4",7084:"0919ec66",7098:"7283d3f1",7351:"0c9fde29",7472:"5d391ef3",7643:"00c26a88",7805:"871044e6",8027:"d5b44d93",8209:"31672a02",8401:"5b01514b",8529:"593564ba",8609:"405c640f",8737:"7de7ef47",8909:"beba3de5",9048:"d31ba6d0",9325:"9bd3f9a5",9328:"ac81d77a",9579:"2b5ed56c",9647:"1176cd49",9696:"78108d94",9858:"6f40ab95",9950:"d623b678",9984:"f608fda0"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="wave-lang:",b.l=(e,a,c,r)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+c){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",f+c),d.src=e),t[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/es/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","33fc5bb8":"867","1e15abdd":"994",bd06669f:"1202",a7456010:"1235","8cda42ee":"1349",e4d00ca6:"1430","613973a2":"1579","4241100f":"1713","9d39d3e7":"1767",acecf23e:"1903","73664a40":"1972","8b20138e":"2058","6927316d":"2307",e6e86451:"2537",c4f5d8e4:"2634","9e4087bc":"2711",f601d5af:"3050",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","393be207":"4134","621db11d":"4212","5a11dd49":"4810","6875c492":"4813",cfe0ccb8:"4967",d9f32620:"5557","4be6687f":"5681",aba21aa0:"5742","1f391b9e":"6061","526be6cf":"6556","6c17f970":"6684",dfed01cf:"6896","6a86af83":"7084",a7bd4aaa:"7098","0c69ec8d":"7351","814f3328":"7472",a6aa9e1f:"7643","12dab071":"7805","01a85c17":"8209","5f345cb8":"8529","925b3f96":"8609","7661071f":"8737","04bd3a17":"8909",a94703ab:"9048",e273c56f:"9328","8dc7c2c4":"9579","5e95c892":"9647","1300235e":"9696","36994c47":"9858","5cceb6de":"9950","0a5ec04e":"9984"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>t=e[a]=[c,f]));c.push(t[2]=f);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",d.name="ChunkLoadError",d.type=f,d.request=r,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,f,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)f=r[n],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},c=self.webpackChunkwave_lang=self.webpackChunkwave_lang||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();