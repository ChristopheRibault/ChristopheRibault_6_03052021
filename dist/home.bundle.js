(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}};((t,e,n)=>{var r={};n.r(r),n.d(r,{PhotoCard:()=>M,PhotoModal:()=>U,PhotographerCard:()=>E,Tag:()=>h});const o=JSON.parse('{"G":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sport","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}]}');function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"capitalize",value:function(t){return"string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}},{key:"formatPrice",value:function(t){return"".concat(t,"€/jour")}}],null&&i(e.prototype,null),n&&i(e,n),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,d(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}function s(t,e,n){return(s=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,t);var e,n,r=(e=o,n=f(),function(){var t,r=d(e);if(n){var o=d(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),e=r.call(this);var n=document.createElement("button");return n.value=t,n.classList.add("category-tag"),n.textContent="#".concat(a.capitalize(t)),e.append(n),e}return o}(l(HTMLLIElement));function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){var e="function"==typeof Map?new Map:void 0;return(v=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return g(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,t)})(t)}function g(t,e,n){return(g=w()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&O(o,n.prototype),o}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}y(h,"name","nav-tag"),y(h,"extends","li");var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(o,t);var e,n,r=(e=o,n=w(),function(){var t,r=_(e);if(n){var o=_(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return m(this,t)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),e=r.call(this);var n=new W;e.classList.add("photographer-card");var i=n.createElement("a"),a=n.createElement("img");a.src="assets/pictures/avatars/".concat(t.portrait),a.alt="",a.classList.add("avatar-img","photographer-card__img");var c=n.createElement("h2");c.textContent=t.name,c.classList.add("photographer-card__name","photographer-name"),i.append(a,c),i.setAttribute("href","./photographer.html?id=".concat(t.id)),i.classList.add("photographer-card__link");var u=n.createElement("div"),l=n.createElement("p");l.textContent="".concat(t.city,", ").concat(t.country),l.classList.add("photographer-card__place","photographer-place");var s=n.createElement("p");s.textContent=t.tagline,s.classList.add("photographer-card__tagline","photographer-tagline");var f=n.createElement("p");f.textContent="".concat(t.price,"€/jour"),f.classList.add("photographer-card__price","photographer-price"),u.append(l,s,f),u.classList.add("photographer-card__info");var p=n.createList("ul","Tag",t.tags);return p.classList.add("photographer-card__tags"),e.append(i,u,p),e}return o}(v(HTMLLIElement));function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){var e="function"==typeof Map?new Map:void 0;return(L=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return x(t,arguments,C(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),R(r,t)})(t)}function x(t,e,n){return(x=T()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&R(o,n.prototype),o}).apply(null,arguments)}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}k(E,"name","photographer-card"),k(E,"extends","li");var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(a,t);var e,n,r,o,i=(e=a,n=T(),function(){var t,r=C(e);if(n){var o=C(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return P(this,t)});function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this))._data=t;var n=new W;return e.liked=JSON.parse(localStorage.getItem("likedPhotos")).includes(e.data.id),e.likesCount=e.data.likes+e.liked,e.id="card-".concat(e.data.id),e.classList.add("photo-card"),e.thumb=n.createElement(e.data.image?"img":"video"),e.thumb.src="./assets/pictures/".concat(e.data.photographerId,"/").concat(e.data.image||e.data.video),e.thumb.alt=e.data.alt_text,e.thumb.classList.add("photo-card__img"),e.thumb.setAttribute("tabIndex",0),e.photoTitle=n.createElement("h2"),e.photoTitle.textContent=e.data.title,e.photoTitle.classList.add("photo-card__title"),e.likes=n.createElement("div"),e.likes.innerHTML="".concat(e.likesCount," <img src='assets/heart.svg' alt='like icon'/>"),e.likes.setAttribute("role","button"),e.likes.setAttribute("aria-pressed",e.liked),e.likes.setAttribute("aria-label","".concat(e.likesCount," likes")),e.liked&&(e.likes.style["font-weight"]=900),e.likes.classList.add("photo-card__likes"),e.likes.addEventListener("click",(function(){return e.likeAction()})),e.likes.addEventListener("keydown",(function(t){"Enter"===t.code&&e.likeAction()})),e.likes.setAttribute("tabindex",0),e.append(e.thumb,e.photoTitle,e.likes),e}return r=a,(o=[{key:"data",get:function(){return this._data},set:function(t){throw new Error("Can't set data")}},{key:"likeAction",value:function(){this.liked?this.like(!1):this.like(!0)}},{key:"like",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.likesCount+=t?1:-1,this.likes.innerHTML="".concat(this.likesCount," <img src='assets/heart.svg' alt='like icon'/>"),this.likes.style["font-weight"]=t?900:400,this.likes.setAttribute("aria-pressed",t),this.liked=t;var e=JSON.parse(localStorage.getItem("likedPhotos"));t?e.push(this.data.id):e.splice(e.indexOf(this.data.id),1),localStorage.setItem("likedPhotos",JSON.stringify(e)),document.dispatchEvent(new CustomEvent("newLike",{detail:t}))}}])&&j(r.prototype,o),a}(L(HTMLLIElement));function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){var e="function"==typeof Map?new Map:void 0;return(N=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return F(t,arguments,q(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),J(r,t)})(t)}function F(t,e,n){return(F=H()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&J(o,n.prototype),o}).apply(null,arguments)}function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}A(M,"name","photo-card"),A(M,"extends","li");var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(o,t);var e,n,r=(e=o,n=H(),function(){var t,r=q(e);if(n){var o=q(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return B(this,t)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this)).id="modal-".concat(t.id),e.type=t.image?"img":"video",e.classList.add("photo-modal__photo"),e.setAttribute("tabindex",-1),e.setAttribute("role","group"),e.setAttribute("aria-roledescription","slide");var n=new W,i=n.createElement("div");i.classList.add("photo-modal__container");var a=n.createElement(e.type);if("img"===e.type)a.src="assets/pictures/".concat(t.photographerId,"/").concat(t.image),a.alt=t.alt_text;else{var c=n.createElement("source");c.src="assets/pictures/".concat(t.photographerId,"/").concat(t.video),c.type="video/mp4",a.setAttribute("controls",!0),a.append(c)}a.classList.add("photo-modal__img");var u=n.createElement("h2");return u.textContent=t.title,u.classList.add("photo-modal__title"),i.append(a,u),e.append(i),e}return o}(N(HTMLLIElement));function K(t){return function(t){if(Array.isArray(t))return z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}G(U,"name","photo-modal"),G(U,"extends","li");var W=function(){function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(t){customElements.define(t.name,t,{extends:t.extends})},(e="init")in this?Object.defineProperty(this,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):this.init=n}var e,n;return e=t,(n=[{key:"createElement",value:function(t,e){var n=r[t];return n?(void 0===customElements.get(n.name)&&this.init(n),new n(e)):document.createElement(t)}},{key:"createList",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=this.createElement(t),i=r.map((function(t){return n.createElement(e,t)}));return o.append.apply(o,K(i)),o}}])&&D(e.prototype,n),t}();const V=JSON.parse('["portrait","art","fashion","architecture","travel","sport","animals","events"]');function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var X=new W,Y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,t),this.photographers=e,this.init()}var e,n;return e=t,(n=[{key:"filterPhotographs",value:function(t){document.location.search="type=".concat(t)}},{key:"fillContent",value:function(){return document.getElementById("nav-container").append(X.createList("ul","Tag",V)),document.getElementById("photographers-container").append(X.createList("ul","PhotographerCard",this.photographers)),this}},{key:"skipNav",value:function(){document.querySelector("main").querySelectorAll("a")[0].focus()}},{key:"init",value:function(){var t=this;return this.fillContent(),document.querySelectorAll(".category-tag").forEach((function(e){e.addEventListener("click",(function(){return t.filterPhotographs(e.value)}))})),document.querySelector(".skip-nav-btn").addEventListener("keydown",(function(e){"Enter"===e.code&&t.skipNav()})),this}}])&&Q(e.prototype,n),t}(),Z=new URLSearchParams(document.location.search).get("type");new Y(o.G.filter((function(t){return!Z||t.tags.includes(Z)})))})(0,0,t)})();