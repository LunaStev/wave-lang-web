(()=>{"use strict";var e,a,t,c,r,f={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=f,d.c=b,e=[],d.O=(a,t,c,r)=>{if(!t){var f=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],r=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&r||f>=r)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,r<f&&(f=r));if(b){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,c,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var f={};a=a||[null,t({}),t([]),t(t)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,d.d(r,f),r},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({189:"19576705",280:"d8c7e301",733:"e86cc05b",867:"33fc5bb8",904:"ed447bb1",1053:"7495862e",1235:"a7456010",1238:"5bbaf0eb",1903:"acecf23e",1972:"73664a40",2518:"06c166cf",2624:"037a5b27",2634:"c4f5d8e4",2711:"9e4087bc",2714:"b2bd63ae",2907:"6367da78",3249:"ccc49370",3307:"3e7802dc",3637:"f4f34a3a",3694:"8717b14a",4134:"393be207",4212:"621db11d",4760:"78476e8f",4813:"6875c492",5005:"b23f9b66",5305:"2703433b",5557:"d9f32620",5650:"cdb5ae6c",5700:"47f4844f",5742:"aba21aa0",6061:"1f391b9e",7098:"a7bd4aaa",7472:"814f3328",7489:"717ac24e",7643:"a6aa9e1f",8015:"f82308cf",8191:"301afdd9",8209:"01a85c17",8401:"17896441",8494:"aa7e92d2",8609:"925b3f96",8737:"7661071f",8818:"fe7e4cbc",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9478:"076a3000",9647:"5e95c892",9858:"36994c47",9986:"805c6e55"}[e]||e)+"."+{189:"d189a3b9",280:"eeb28750",733:"f9e7f3d3",867:"695a9bee",904:"0b615ddd",1053:"4c690125",1235:"6a9db6d2",1238:"34a43b49",1903:"e77cc112",1972:"9c542ef5",2237:"6b200511",2518:"eee1e40c",2624:"e02befa7",2634:"edc17f19",2711:"e500c3c1",2714:"80416e93",2907:"f1b5f4cb",3249:"1ea5babf",3307:"33c4d042",3603:"0ea28d22",3637:"c1f9bd20",3694:"512b6b67",4134:"239130d8",4212:"e51e11f4",4528:"7d9953be",4760:"20809b25",4813:"6eceeab2",5005:"a8c571ed",5305:"8113d53e",5557:"7c98733b",5650:"22a496c1",5700:"c218dd1c",5742:"c19064a2",6061:"9ca7db69",7098:"7283d3f1",7472:"71e8b5da",7489:"0ddcdb19",7643:"00c26a88",8015:"7ca6fcbf",8027:"d5b44d93",8191:"650fc139",8209:"31672a02",8401:"5b01514b",8494:"b1fa725c",8609:"854193ca",8737:"a0d3c444",8818:"12414893",9048:"d31ba6d0",9325:"50a1041e",9328:"d5f0eb72",9478:"27d94ce2",9647:"1176cd49",9858:"6f40ab95",9986:"766c4d7f"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="wave-lang:",d.l=(e,a,t,f)=>{if(c[e])c[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+t){b=l;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",r+t),b.src=e),c[e]=[a];var u=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/ru/",d.gca=function(e){return e={17896441:"8401",19576705:"189",59362658:"9325",d8c7e301:"280",e86cc05b:"733","33fc5bb8":"867",ed447bb1:"904","7495862e":"1053",a7456010:"1235","5bbaf0eb":"1238",acecf23e:"1903","73664a40":"1972","06c166cf":"2518","037a5b27":"2624",c4f5d8e4:"2634","9e4087bc":"2711",b2bd63ae:"2714","6367da78":"2907",ccc49370:"3249","3e7802dc":"3307",f4f34a3a:"3637","8717b14a":"3694","393be207":"4134","621db11d":"4212","78476e8f":"4760","6875c492":"4813",b23f9b66:"5005","2703433b":"5305",d9f32620:"5557",cdb5ae6c:"5650","47f4844f":"5700",aba21aa0:"5742","1f391b9e":"6061",a7bd4aaa:"7098","814f3328":"7472","717ac24e":"7489",a6aa9e1f:"7643",f82308cf:"8015","301afdd9":"8191","01a85c17":"8209",aa7e92d2:"8494","925b3f96":"8609","7661071f":"8737",fe7e4cbc:"8818",a94703ab:"9048",e273c56f:"9328","076a3000":"9478","5e95c892":"9647","36994c47":"9858","805c6e55":"9986"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var c=d.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>c=e[a]=[t,r]));t.push(c[2]=r);var f=d.p+d.u(a),b=new Error;d.l(f,(t=>{if(d.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",b.name="ChunkLoadError",b.type=r,b.request=f,c[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var c,r,f=t[0],b=t[1],o=t[2],n=0;if(f.some((a=>0!==e[a]))){for(c in b)d.o(b,c)&&(d.m[c]=b[c]);if(o)var i=o(d)}for(a&&a(t);n<f.length;n++)r=f[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},t=self.webpackChunkwave_lang=self.webpackChunkwave_lang||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();