(this["webpackJsonpvotaciones-codigo"]=this["webpackJsonpvotaciones-codigo"]||[]).push([[0],{100:function(e,n,t){},224:function(e,n,t){},225:function(e,n,t){},226:function(e,n,t){},227:function(e,n,t){},228:function(e,n,t){"use strict";t.r(n);var i,a=t(0),r=t(86),c=t.n(r),o=t(52),s=t(3),l=t(1),d=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"CodiGo 2021 - Todos los Derechos Reservados"})})},u=Object(s.f)((function(e){e.history;return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header__wrapper",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsxs)("p",{className:"header__codigo",children:[Object(l.jsx)("span",{children:"Codi"}),Object(l.jsx)("span",{children:"Go"})]})}),Object(l.jsx)("nav",{className:"header__social",children:Object(l.jsxs)("ul",{className:"header__links",children:[Object(l.jsx)("li",{className:"header__link",children:Object(l.jsx)("a",{href:"!#",onClick:function(e){e.preventDefault(),window.open("https://www.youtube.com/channel/UCUsYml8NrURxUVx_iQLWsYQ","_blank")},children:Object(l.jsx)("i",{className:"fab fa-youtube"})})}),Object(l.jsx)("li",{className:"header__link",children:Object(l.jsx)("a",{href:"!#",onClick:function(e){e.preventDefault(),window.open("","_blank")},children:Object(l.jsx)("i",{className:"fab fa-github"})})})]})})]})})})),j=t(6),m=t(5),p=t.n(m),b=function(){return Object(l.jsxs)("div",{className:"cargando",children:[Object(l.jsx)("i",{className:"fas fa-spinner fa-spin  fa-3x "}),Object(l.jsx)("p",{children:"Estamos cargando los datos y validando las credenciales"})]})},v=t(2),h=t.n(v),f=t(7),x="https://votaciones-webinarcodigo.herokuapp.com",O=function(){var e=Object(f.a)(h.a.mark((function e(n){var t,i,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.enpoint,t=n.body,e.next=3,fetch("".concat(x,"/registro"),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 3:return i=e.sent,e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(h.a.mark((function e(n){var t,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/votante?id=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(h.a.mark((function e(n,t){var i,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/voto"),{method:"POST",body:JSON.stringify({hash:n,partido:t}),headers:{"Content-type":"application/json"}});case 2:return i=e.sent,e.next=5,i.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(h.a.mark((function e(n){var t,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/resultados"));case 2:return t=e.sent,e.next=5,t.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=(t(100),function(e){var n=e.candidato,t=e.setElegido,i=e.elegido;return Object(l.jsxs)("div",{className:i===n.id?"card active":"card",onClick:function(){t(n.id)},children:[Object(l.jsx)("figure",{className:"card__avatar",children:Object(l.jsx)("img",{src:n.partido_img_candidato,alt:""})}),Object(l.jsxs)("div",{className:"card__info",children:[Object(l.jsx)("p",{className:"card__name",children:"Nombre del candidato"}),Object(l.jsx)("p",{className:"card__partido",children:n.partido_nombre})]}),Object(l.jsx)("figure",{className:"card__logo",children:Object(l.jsx)("img",{src:n.partido_img_partido,alt:""})})]})}),C=function(e){var n=e.candidatos,t=void 0===n?[]:n,i=e.setElegido,a=e.elegido;return Object(l.jsx)("section",{className:"lista",children:t.map((function(e){return Object(l.jsx)(N,{candidato:e,setElegido:i,elegido:a},e.id)}))})},S=t(28),k=t.n(S),q=function(e){var n=e.history,t=e.match,r=Object(a.useState)(!0),c=Object(j.a)(r,2),o=c[0],s=c[1],d=Object(a.useState)([]),u=Object(j.a)(d,2),m=u[0],v=u[1],h=Object(a.useState)(),f=Object(j.a)(h,2),x=f[0],O=f[1],_=Object(a.useState)(null),N=Object(j.a)(_,2),S=N[0],q=N[1],w=t.params.id;console.log(w);return Object(a.useEffect)((function(){var e;return w?g(w).then((function(t){if(t.success){var a=k()(t.content.expiracion);s(!1),v(t.content.partidos),e=setInterval((function(){var e=k()();O(k.a.duration(a.diff(e)).asSeconds().toFixed(0))}),1e3)}else p.a.fire({title:"Ups!",icon:"error",text:"Un error ha ocurrido, es posible que tu sesi\xf3n haya caducado, intenta registrarte nuevamente",backdrop:"rgba(40,6,21,0.8)",timer:5e3,allowOutsideClick:!1,timerProgressBar:!0,didOpen:function(){p.a.showLoading(),i=setInterval((function(){var e=p.a.getContent();if(e){var n=e.querySelector("b");n&&(n.textContent=p.a.getTimerLeft())}}),100)},willClose:function(){clearInterval(i)}}).then((function(e){n.replace("/")}))})):(s(!1),p.a.fire({icon:"error",title:"Ups! tenemos un error con el link al que ingresaste. <br/>Ser\xe1s redireccionado a la p\xe1gina principal",backdrop:"rgba(40,6,21,0.8)",timer:5e3,allowOutsideClick:!1,timerProgressBar:!0,didOpen:function(){p.a.showLoading(),i=setInterval((function(){var e=p.a.getContent();if(e){var n=e.querySelector("b");n&&(n.textContent=p.a.getTimerLeft())}}),100)},willClose:function(){clearInterval(i)}}).then((function(e){n.replace("/")}))),function(){clearInterval(e)}}),[w]),Object(l.jsxs)(l.Fragment,{children:[o&&Object(l.jsx)(b,{}),Object(l.jsxs)("main",{className:"cedula",children:[Object(l.jsxs)("section",{className:"cedula__title",children:[Object(l.jsx)("h1",{children:"LISTA DE CANDIDATOS"}),Object(l.jsxs)("p",{children:["Le quedan ",x," segundos"]})]}),Object(l.jsx)("section",{className:"cedula__indicaciones",children:Object(l.jsx)("p",{children:"Seleccione el candidato de su preferencia y luego presione \u201cvotar\u201d"})}),Object(l.jsx)(C,{candidatos:m,setElegido:q,elegido:S})]}),Object(l.jsx)("form",{className:"cedula__form",onSubmit:function(e){e.preventDefault(),p.a.fire({title:"\xbfSeguro de emitir su voto?",text:"Los cambios ser\xe1n irreversible y s\xf3lo puede votar una vez",icon:"warning",showCancelButton:!0}).then((function(e){e.isConfirmed&&(s(!0),y(w,S).then((function(e){e.success&&p.a.fire({titleText:"Gracias ciudadano!, tu voto ha sido registrado con \xe9xito",title:"Bien hecho!",icon:"success",timer:5e3,allowOutsideClick:!1,timerProgressBar:!0,didOpen:function(){p.a.showLoading(),i=setInterval((function(){var e=p.a.getContent();if(e){var n=e.querySelector("b");n&&(n.textContent=p.a.getTimerLeft())}}),100)},willClose:function(){clearInterval(i)}}).then((function(){s(!1),n.replace("/")}))})))}))},children:Object(l.jsx)("button",{type:"submit",disabled:!S,children:"Votar"})})]})},w=(t(101),t(88)),L=(t(224),function(){var e=Object(a.useState)([]),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(!0),c=Object(j.a)(r,2),o=c[0],s=c[1],d=Object(a.useState)([]),u=Object(j.a)(d,2),m=u[0],p=u[1];return Object(a.useEffect)((function(){_().then((function(e){console.log(e);var n=e.content.map((function(e){return e.partido_nombre})),t=[{label:"Cantidad de votos por partido",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:e.content.map((function(e){return e.votos}))}];i({labels:n,datasets:t}),s(!1),p(m.content)}))}),[]),Object(l.jsx)("main",{className:"estadisticas",children:o?Object(l.jsx)(b,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"estadisticas__title",children:Object(l.jsx)("h1",{children:"RESULTADOS EN TIEMPO REAL"})}),Object(l.jsx)("section",{className:"estadisticas__indicaciones",children:Object(l.jsx)("p",{children:"Cada vez que un nuevo voto sea registrado, usted ver\xe1 dichos cambios en tiempo real."})}),Object(l.jsx)("section",{className:"estadisticas__chart",children:Object(l.jsx)(w.Bar,{data:t,options:{maintainAspectRatio:!1}})})]})})}),E=(t(225),t(89)),I=function(e,n,t){"Backspace"===n&&""===document.querySelector('input[name="'.concat(e,'"]')).value.trim()&&document.querySelector('input[name="'.concat(t,'"]')).focus()},D=function(e,n,t){document.querySelector('input[name="'.concat(e,'"]')).value.trim().length>0&&document.querySelector('input[name="'.concat(n,'"]')).focus()},U=function(e){var n,t,i,a,r,c,o,s;return"required"===(null===e||void 0===e||null===(n=e.dni1)||void 0===n?void 0:n.type)||"required"===(null===e||void 0===e||null===(t=e.dni2)||void 0===t?void 0:t.type)||"required"===(null===e||void 0===e||null===(i=e.dni3)||void 0===i?void 0:i.type)||"required"===(null===e||void 0===e||null===(a=e.dni4)||void 0===a?void 0:a.type)||"required"===(null===e||void 0===e||null===(r=e.dni5)||void 0===r?void 0:r.type)||"required"===(null===e||void 0===e||null===(c=e.dni6)||void 0===c?void 0:c.type)||"required"===(null===e||void 0===e||null===(o=e.dni7)||void 0===o?void 0:o.type)||"required"===(null===e||void 0===e||null===(s=e.dni8)||void 0===s?void 0:s.type)?Object(l.jsx)("small",{className:"error",children:"*** Todos los campos del DNI son ffrequeridos"}):null},T=function(e){var n,t,i,a,r,c,o,s;return"maxLength"===(null===e||void 0===e||null===(n=e.dni1)||void 0===n?void 0:n.type)||"maxLength"===(null===e||void 0===e||null===(t=e.dni2)||void 0===t?void 0:t.type)||"maxLength"===(null===e||void 0===e||null===(i=e.dni3)||void 0===i?void 0:i.type)||"maxLength"===(null===e||void 0===e||null===(a=e.dni4)||void 0===a?void 0:a.type)||"maxLength"===(null===e||void 0===e||null===(r=e.dni5)||void 0===r?void 0:r.type)||"maxLength"===(null===e||void 0===e||null===(c=e.dni6)||void 0===c?void 0:c.type)||"maxLength"===(null===e||void 0===e||null===(o=e.dni7)||void 0===o?void 0:o.type)||"maxLength"===(null===e||void 0===e||null===(s=e.dni8)||void 0===s?void 0:s.type)?Object(l.jsx)("small",{className:"error",children:"*** Cada n\xfamero debe ser c\xf3mo m\xe1ximo de extensi\xf3n de 1 caracter"}):null},B=function(e){var n,t,i,a,r,c,o,s;return"pattern"===(null===e||void 0===e||null===(n=e.dni1)||void 0===n?void 0:n.type)||"pattern"===(null===e||void 0===e||null===(t=e.dni2)||void 0===t?void 0:t.type)||"pattern"===(null===e||void 0===e||null===(i=e.dni3)||void 0===i?void 0:i.type)||"pattern"===(null===e||void 0===e||null===(a=e.dni4)||void 0===a?void 0:a.type)||"pattern"===(null===e||void 0===e||null===(r=e.dni5)||void 0===r?void 0:r.type)||"pattern"===(null===e||void 0===e||null===(c=e.dni6)||void 0===c?void 0:c.type)||"pattern"===(null===e||void 0===e||null===(o=e.dni7)||void 0===o?void 0:o.type)||"pattern"===(null===e||void 0===e||null===(s=e.dni8)||void 0===s?void 0:s.type)?Object(l.jsx)("small",{className:"error",children:"*** S\xf3lo se aceptan n\xfameros en los campos del DNI"}):null},K=function(e){var n,t,i,r,c=e.history,o=Object(E.a)(),s=o.register,d=o.handleSubmit,u=o.errors,m=Object(a.useState)(!1),v=Object(j.a)(m,2),h=v[0],f=v[1];console.log(u);return Object(l.jsxs)("main",{className:"formulario",children:[h&&Object(l.jsx)(b,{}),Object(l.jsxs)("form",{className:"form",onSubmit:d((function(e){console.log(e);var n=e.dni1,t=e.dni2,i=e.dni3,a=e.dni4,r=e.dni5,o=e.dni6,s=e.dni7,l=e.dni8,d=e.dniv,u=e.email;p.a.fire({title:"\xbfSeguro de ingresar al voto electr\xf3nico?",text:"Se enviar\xe1 un correo electr\xf3nico al email que ha indicado con un enlace para proceder al voto",icon:"warning",showCancelButton:!0}).then((function(e){e.isConfirmed&&(f(!0),O({body:{votante_dni:n.trim()+t.trim()+i.trim()+a.trim()+r.trim()+o.trim()+s.trim()+l.trim(),votante_email:u,votante_verificacion:d}}).then((function(e){e.success?p.a.fire({title:"Registrado!",icon:"success",confirmButtonText:"De acuerdo",text:"En horabuena ".concat(e.votante_nombre," ").concat(e.votante_apellido,"!, se ha mandado un link a su correo electr\xf3nico para votar.")}).then((function(){c.replace("/")})):p.a.fire({title:"Ups!",icon:"error",confirmButtonText:"De acuerdo",text:e.message}).then((function(){c.replace("/")}))})))}))})),children:[Object(l.jsx)("label",{htmlFor:"",children:"Ingrese su n\xfamero de DNI:"}),Object(l.jsxs)("div",{className:"errores",children:[U(u),T(u),B(u)]}),Object(l.jsxs)("div",{className:"form__group",children:[Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni1",onChange:function(e){D("dni1","dni2")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni2",onChange:function(e){D("dni2","dni3")},onKeyUp:function(e){I("dni2",e.key,"dni1")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni3",onChange:function(e){D("dni3","dni4")},onKeyUp:function(e){I("dni3",e.key,"dni2")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni4",onChange:function(e){D("dni4","dni5")},onKeyUp:function(e){I("dni4",e.key,"dni3")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni5",onChange:function(e){D("dni5","dni6")},onKeyUp:function(e){I("dni5",e.key,"dni4")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni6",onChange:function(e){D("dni6","dni7")},onKeyUp:function(e){I("dni6",e.key,"dni5")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni7",onChange:function(e){D("dni7","dni8")},onKeyUp:function(e){I("dni7",e.key,"dni6")}}),Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dni8",onChange:function(e){D("dni8","dniv")},onKeyUp:function(e){I("dni8",e.key,"dni7")}})]}),Object(l.jsx)("label",{htmlFor:"",children:"N\xfamero de verificaci\xf3n de DNI:"}),Object(l.jsxs)("div",{className:"errores",children:["pattern"===(null===u||void 0===u||null===(n=u.dniv)||void 0===n?void 0:n.type)&&Object(l.jsx)("small",{className:"error",children:"*** El n\xfamero de verificaci\xf3n del DNI, debe ser un caracter n\xfamerico"}),"required"===(null===u||void 0===u||null===(t=u.dniv)||void 0===t?void 0:t.type)&&Object(l.jsx)("small",{className:"error",children:"*** El campo de verificaic\xf3n del DNI es obligatorio"})]}),Object(l.jsx)("div",{className:"form__group",children:Object(l.jsx)("input",{type:"text",ref:s({required:!0,maxLength:1,pattern:/^[0-9]/i}),name:"dniv",onChange:function(){D("dniv","email")},onKeyUp:function(e){I("")}})}),Object(l.jsx)("label",{htmlFor:"",children:"E-mail:"}),Object(l.jsxs)("div",{className:"errores",children:["pattern"===(null===u||void 0===u||null===(i=u.email)||void 0===i?void 0:i.type)&&Object(l.jsx)("small",{className:"error",children:"*** El formato del email no es correcto, debe tener un @ y un ."}),"required"===(null===u||void 0===u||null===(r=u.email)||void 0===r?void 0:r.type)&&Object(l.jsx)("small",{className:"error",children:"*** El campo del email es obligatorio"})]}),Object(l.jsx)("input",{type:"email",ref:s({required:!0,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i}),name:"email"}),Object(l.jsx)("div",{className:"form__button",children:Object(l.jsx)("button",{type:"submit",children:"Votar"})})]})]})},F=function(e){var n=e.history;return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"main__menu",children:[Object(l.jsxs)("div",{className:"main__circle",onClick:function(){n.push("/estadisticas")},children:[Object(l.jsx)("p",{className:"main__icono",children:Object(l.jsx)("i",{className:"fas fa-chart-bar"})}),Object(l.jsx)("p",{className:"main__title",children:"Estad\xedsticas"})]}),Object(l.jsxs)("div",{className:"main__circle",children:[Object(l.jsx)("p",{className:"main__icono",children:Object(l.jsx)("i",{className:"fas fa-list    "})}),Object(l.jsx)("p",{className:"main__title",children:"Lista de Cantidatos"})]}),Object(l.jsxs)("div",{className:"main__circle",children:[Object(l.jsx)("p",{className:"main__icono",children:Object(l.jsx)("i",{className:"fas fa-home"})}),Object(l.jsx)("p",{className:"main__title",children:"Otra Opci\xf3n"})]})]}),Object(l.jsx)("form",{className:"main__form",onSubmit:function(e){e.preventDefault(),n.push("/formulario")},children:Object(l.jsx)("button",{type:"submit",children:"Quiero votar"})})]})},A=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/formulario",component:K}),Object(l.jsx)(s.a,{path:"/estadisticas",component:L}),Object(l.jsx)(s.a,{path:"/cedula/:id",component:q}),Object(l.jsx)(s.a,{path:"/",component:F})]}),Object(l.jsx)(d,{})]})},P=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(A,{})})};t(226),t(227);c.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.d0db9c17.chunk.js.map