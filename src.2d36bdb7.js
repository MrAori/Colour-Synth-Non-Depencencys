parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function e(e){return n(e)||r(e)||i(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function n(e){if(Array.isArray(e))return c(e)}function a(e,t){return u(e)||l(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(s){u=!0,a=s}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}function u(e){if(Array.isArray(e))return e}require("./styles.css");var s=React,m=s.useState,f=s.useEffect,d=0,y=255,g=0,v=function(){var t=document.querySelector("#demo").src,r=a(m([]),2),n=r[0],o=r[1],i=function(t,r,n){var a=h(t),i=document.querySelector("#cs"),c=document.querySelector("img");p(i,c,function(){var t=i.getContext("2d"),c=b((t=(t=t.getImageData(a.x,a.y,1,1)).data)[0],t[1],t[2]);n&&o(function(t){return[].concat(e(t),[c])}),n&&(d=t[0],y=t[1],g=t[2]),r&&(r.style.background=c)})};f(function(){var e=document.querySelector("#image-input"),t=document.querySelector("img"),r=document.querySelector(".preview");S(e,t),t.addEventListener("click",function(e){i(e,!1,!0)},!1),t.addEventListener("mousemove",function(e){i(e,r,!1)},!1)},[]);var c=0;return React.createElement("div",{className:"main"},React.createElement("div",{className:"container"},n?n.map(function(e){var t={backgroundColor:e};return React.createElement("div",{key:++c,style:t,className:"color"},React.createElement("span",null,e))}):""),React.createElement("div",{className:"container"},React.createElement("div",{className:"preview"}),React.createElement("img",{src:t,id:"image-display",alt:""}),React.createElement("input",{type:"file",id:"image-input"}),React.createElement("label",{for:"image-input",id:"fake"},"Select Image"),React.createElement("label",{id:"synth-play"},"Play Synth")),React.createElement("canvas",{id:"cs"}))};function h(e){var t=0,r=0;return e.offsetX?(t=e.offsetX,r=e.offsetY):e.layerX&&(t=e.layerX,r=e.layerY),{x:t,y:r}}function p(e,t,r){return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0,t.width,t.height),r()}function b(e,t,r){return e=e.toString(16),t=t.toString(16),r=r.toString(16),e.length,t.length,r.length,"#"+e+t+r}function S(e,t){var r=e,n=window.localStorage;if(!n.getItem("image-base64"))var a=setTimeout(function(){n.setItem("image-base64",t.getAttribute("src")),clearTimeout(a)},100);var o=function(){var e=setTimeout(function(){t.src=n.getItem("image-base64"),clearTimeout(e)},200)};o(),r.addEventListener("change",function(){if(this.files.length){var e=new FileReader;e.onload=function(e){n.setItem("image-base64",e.target.result),o()},e.readAsDataURL(this.files[0])}},!1)}ReactDOM.render(React.createElement(v,null),window.root);var E=(new Tone.MonoSynth).toDestination();function w(e){var t=0;d>=200&&d<=255&&(t=6),d>=155&&d<=200&&(t=5),d>=115&&d<=155&&(t=4),d>=90&&d<=115&&(t=3),d>=50&&d<=90&&(t=2),d>=0&&d<=50&&(t=1),y>=215&&y<=255&&E.set({oscillator:{type:"sawtooth"}}),y>=160&&y<=215&&E.set({oscillator:{type:"pulse"}}),y>=130&&y<=160&&E.set({oscillator:{type:"triangle"}}),y>=100&&y<=130&&E.set({oscillator:{type:"amsquare"}}),y>=0&&y<=100&&E.set({oscillator:{type:"sine"}});var r="C";g>=210&&g<=255&&(r="A"),g>=180&&g<=210&&(r="B"),g>=150&&g<=180&&(r="G"),g>=125&&g<=150&&(r="F"),g>=95&&g<=125&&(r="E"),g>=60&&g<=95&&(r="D"),g>=0&&g<=60&&(r="C"),Tone.context.resume(),console.log("Red: "+d+" Green: "+g+" Blue: "+y),E.triggerAttackRelease(r+t,"1.5")}E.volume.value=-12,document.getElementById("synth-play").addEventListener("click",w);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-scw217/src.2d36bdb7.js.map