"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{148:function(e,n,t){t.d(n,{Df:function(){return a},yA:function(){return o},z1:function(){return c}});var r="319d5522e2117aa6383989c80b35f4f5",o="https://image.tmdb.org/t/p/w500";function a(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&page=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,"&api_key=").concat(r),{method:"GET",headers:{accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=".concat(e,"&page=").concat(n,"&api_key=").concat(r),{method:"GET",headers:{accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}},459:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(925),o="Button_Button__Smq3v",a=t(184),c=["onClick","children"],i=function(e){var n=e.onClick;e.children,(0,r.Z)(e,c);return(0,a.jsx)("button",{className:o,type:"button",onClick:n,children:"Load more"})}},367:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(683),o=t(925),a=t(439),c=t(791),i=t(689),l=t(87),u=t(164),s={overlay:"Modal_overlay__r63M6",modal:"Modal_modal__DJDMv",Overlay:"Modal_Overlay__yoxbg",Modal:"Modal_Modal__I1UYJ"},f=t(184),d=document.querySelector("#modal-root");function v(e){var n=e.src,t=e.alt,r=e.onClose;(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);return(0,u.createPortal)((0,f.jsx)("div",{className:s.Overlay,onClick:function(e){e.currentTarget===e.target&&r()},children:(0,f.jsx)("div",{className:s.Modal,children:(0,f.jsx)("img",{src:n,alt:t})})}),d)}var h="MovieGalleryItem_MovieGalleryItem__QqOFS",m="MovieGalleryItem_MovieGalleryItemImage__mTBD0",_=t(148);function p(e){var n=e.id,t=e.poster_path,r=e.vote_average,o=e.title,u=e.name,s=(0,c.useState)(!1),d=(0,a.Z)(s,2),p=d[0],y=d[1],g=(0,i.TH)(),j=function(){y((function(e){return!e}))};return(0,f.jsx)("li",{className:h,children:(0,f.jsxs)(l.rU,{to:"/movies/".concat(n),state:{from:g},children:[(0,f.jsx)("img",{className:m,src:t?"".concat(_.yA).concat(t):"There will be a poster",alt:o||u,onClick:j}),(0,f.jsx)("h2",{children:o||u}),(0,f.jsx)("p",{children:0===r?"":r}),p&&(0,f.jsx)(v,{src:"".concat(_.yA).concat(t),onClose:j})]})})}var y="MoviesGallery_MoviesGallery__tqAIU",g=["id"],j=function(e){var n=e.movies;return(0,f.jsx)("ul",{className:y,children:n.map((function(e){var n=e.id,t=(0,o.Z)(e,g);return(0,f.jsx)(p,(0,r.Z)({},t),n)}))})}},266:function(e,n,t){t.r(n);var r=t(433),o=t(439),a=t(791),c=t(148),i=t(459),l=t(367),u=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=n[0],s=n[1],f=(0,a.useState)(1),d=(0,o.Z)(f,2),v=d[0],h=d[1],m=(0,a.useState)(!1),_=(0,o.Z)(m,2),p=_[0],y=_[1];(0,a.useEffect)((function(){(0,c.Df)(v).then((function(e){var n=e.results;return s((function(e){return console.log("data",e),console.log("data",n),[].concat((0,r.Z)(e),(0,r.Z)(n))}))})).catch((function(e){return console.log(e)})).finally(y(!0))}),[v]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{movies:t}),p&&(0,u.jsx)(i.Z,{"aria-label":"Load more",onClick:function(){h((function(e){return e+1}))}})]})}},925:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=266.3472b5fb.chunk.js.map