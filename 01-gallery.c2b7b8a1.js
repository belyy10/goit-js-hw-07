!function(){var n={};n=function n(o,t,e){function i(a,c){if(!t[a]){if(!o[a]){var s=void 0;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var l=t[a]={exports:{}};o[a][0].call(l.exports,(function(n){return i(o[a][1][n]||n)}),l,l.exports,n,o,t,e)}return t[a].exports}for(var r=void 0,a=0;a<e.length;a++)i(e[a]);return i}({1:[function(n,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var e=function(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=n.trim(),!0===o?t.children:t.firstChild},i=function(n,o){var t=n.children;return 1===t.length&&t[0].tagName===o},r=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};t.visible=r,t.create=function(n,o){var t=function(n,o){var t=e('\n\t\t<div class="basicLightbox '.concat(o.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=t.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return r.appendChild(n)}));var a=i(r,"IMG"),c=i(r,"VIDEO"),s=i(r,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===c&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(n=function(n){var o="string"==typeof n,t=n instanceof HTMLElement==1;if(!1===o&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===o?Array.from(e(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(o)),a=function(n){return!1!==o.onClose(c)&&function(n,o){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(n)||n.parentElement.removeChild(n),o()}),410),!0}(t,(function(){if("function"==typeof n)return n(c)}))};!0===o.closable&&t.addEventListener("click",(function(n){n.target===t&&a()}));var c={element:function(){return t},visible:function(){return r(t)},show:function(n){return!1!==o.onShow(c)&&function(n,o){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),o()}))}),10),!0}(t,(function(){if("function"==typeof n)return n(c)}))},close:a};return c}},{}]},{},[1])(1);var o=document.querySelector(".gallery"),t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((function(n){var o=n.preview,t=n.original,e=n.description;return'\n        <div class="gallery__item"> \n        <a class="gallery__link" href="'.concat(t,'">\n            <img class=gallery__image src="').concat(o,'" data-source="').concat(t,'" alt="').concat(e,'">\n            </a>\n        </div>\n        ')})).join("");o.insertAdjacentHTML("beforeend",t),o.addEventListener("click",(function(o){if(o.preventDefault(),!o.target.classList.contains("gallery__image"))return;var t=o.target.dataset.source;console.log(t);var e=n.create("\n    <img src='".concat(t,"'>\n    "));e.show(),window.addEventListener("keydown",(function n(o){"Escape"===o.code&&(e.close(),window.removeEventListener("keydown",n))}));var i=n.visible();console.log(i)}))}();
//# sourceMappingURL=01-gallery.c2b7b8a1.js.map