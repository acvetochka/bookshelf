!function(){function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=o.parcelRequire0688;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequire0688=i),i.register("iE7OH",(function(t,o){var a,n;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,o){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.1a7883a0.js","ee16w":"sprite.c1e418d9.svg"}'));var r,s=[{name:"Nazar Mural",position:"Team Lead, Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/nazar-mural.jpg",url:"https://github.com/NazarMural"},{name:"Oleksii Maiok",position:"Scrum, Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/oleksii-maiok.jpg",url:"https://github.com/Maniyavel"},{name:"Alona Kuznietsova",position:"Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/alona-kuznietsova.jpg",url:"https://github.com/acvetochka"},{name:"Kate Chernysheva",position:"Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/kate-chernysheva.jpg",url:"https://github.com/kateChernysheva1"},{name:"Tetiana Palii",position:" Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/masha-kozlova.jpg",url:"https://github.com/TetiPalii"},{name:"Viktoriia Khmelevska",position:"Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/viktoriia-khmelevska.png",url:"https://github.com/ViktoriiaKhmelevska"},{name:"Nataliia Korotych",position:"Scrum, Developer",description:"",img:"https://raw.githubusercontent.com/acvetochka/bookshelf/main/src/images/team/nataliia-korotych.jpg",url:"https://github.com/Nataliia-84"}];r=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ee16w");var c,l=document.querySelector(".modal-team__list"),m=document.querySelector(".footer-link"),u=document.querySelector(".modal-team__close-btn"),h=document.querySelector("[data-modal-team]");function d(e){e.preventDefault(),document.body.classList.toggle("modal-team-open"),h.classList.toggle("backdrop-team--hidden")}c=s.map((function(e){var o=e.name,a=e.img,n=e.position,i=e.url;return' <li class="modal-team__item">\n  <div class="modal-team__img-container">\n  <div class="modal-team__img-wrap">\n      <img class="modal-team__img" src="'.concat(a,'" alt="').concat(o,'" width="150" height="150">\n      </div>\n              <a class="modal-team__link-github" target="_blanc" href="').concat(i,'">\n              <svg class="modal-team__icon-github" width="24" height="24">\n              <use href="').concat(t(r),'#icon-github"></use>\n          </svg></a>\n      </svg>\n  </div>\n  <h3 class="modal-team__title">').concat(o,'</h3>\n  <span class="modal-team__description">').concat(n,"</span>\n</li>")})).join(""),l.insertAdjacentHTML("beforeend",c),m.addEventListener("click",d),u.addEventListener("click",d),document.body.addEventListener("keyup",(function(e){27===e.keyCode&&(h.classList.remove("backdrop-team--hidden"),document.body.classList.remove("modal-team-open"))}),!1)}();
//# sourceMappingURL=index.1a7883a0.js.map