"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[827],{827:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var i,r,a,l,c,o=t(439),s=t(168),u=t(867),f=u.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  row-gap: 50px;\n  column-gap: 29px;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 1183px;\n"]))),d=u.ZP.section(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 129px 0px 128px;\n  width: 1183px;\n  margin-top: 50px;\n"]))),x=u.ZP.button(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 85px;\n  height: 24px;\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  border: none;\n  background: none;\n  padding: 0;\n  text-decoration-line: underline;\n  cursor: pointer;\n  transition: color 0.2s ease-in-out;\n\n    &:hover,\n    &:focus {\n    color: #0B44CD;\n"]))),p=u.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 100px;\n"]))),h=u.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 42px;\n"]))),g=t(791),m=t(153),j=t(576),y=t(94),v=t(184),C=function(n){var e=n.favoritesCars,t=n.toggleCars;return(0,v.jsx)(v.Fragment,{children:e.map((function(n){var e,i=n.address.split(", "),r=i[1],a=i[2];n.functionalities[0].length<=25?e=n.functionalities[0]:n.functionalities[1].length<=25?e=n.functionalities[1]:n.functionalities[2].length<=25?e=n.functionalities[2]:n.functionalities[0].length<=25?e=n.functionalities[0]:n.functionalities[1].length<=25?e=n.functionalities[1]:n.functionalities[2].length<=25&&(e=n.functionalities[2]);var l="".concat(r," | ").concat(a," | ").concat(n.rentalCompany," | Premium ").concat(n.type," | ").concat(n.model," | ").concat(n.id," | ").concat(e);return(0,v.jsxs)(j.Li,{children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)(j.xu,{children:[(0,v.jsx)(j.Ei,{src:n.img,alt:"car"}),(0,v.jsx)(j.hU,{onClick:function(){return t(n)},children:(0,v.jsx)(j.fI,{children:(0,v.jsx)("use",{href:y.Z+"#icon-heart"})})})]}),(0,v.jsxs)(j.Eq,{children:[(0,v.jsxs)(j.xv,{children:[n.make,n.model&&(0,v.jsxs)(j._w,{children:[" ",n.model]}),", ",n.year]}),(0,v.jsx)(j.xv,{children:(0,v.jsx)("span",{children:n.rentalPrice})})]}),(0,v.jsx)(j.ys,{children:l})]}),(0,v.jsx)(m.Z,{catalogCar:n})]},n.id)}))})},w=t(129);function Z(n){var e=n.favoritesCars,t=n.toggleCars,i=n.filterFavoriteCars,r=n.carsArray,a=n.inputPrice,l=(0,g.useState)(8),c=(0,o.Z)(l,2),s=c[0],u=c[1];console.log(e.length);var m=e.slice(0,s);return(0,v.jsxs)(h,{children:[0===e.length?"Your favorite cars will be displayed here.":(0,v.jsx)(w.o,{filterCatalogCars:i,carsArray:r,inputPrice:a}),(0,v.jsxs)(d,{children:[(0,v.jsx)(f,{children:(0,v.jsx)(C,{favoritesCars:m,toggleCars:t,catalogCars:null})}),(0,v.jsx)(p,{children:e.length>=8&&(0,v.jsx)(x,{type:"button",onClick:function(){u((function(n){return n+8}))},children:"Load more"})})]})]})}}}]);
//# sourceMappingURL=827.36f6dbf9.chunk.js.map