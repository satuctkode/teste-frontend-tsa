(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('[{"id":1,"month":"Janeiro"},{"id":2,"month":"Fevereiro"},{"id":3,"month":"Mar\xe7o"},{"id":4,"month":"Abril"},{"id":5,"month":"Maio"},{"id":6,"month":"Junho"},{"id":7,"month":"Julho"},{"id":8,"month":"Agosto"},{"id":9,"month":"Setembro"},{"id":10,"month":"Outubro"},{"id":11,"month":"Novembro"},{"id":12,"month":"Dezembro"}]')},function(e){e.exports=JSON.parse('[{"id":1,"year":"2020"},{"id":2,"year":"2021"},{"id":3,"year":"2022"},{"id":4,"year":"2023"},{"id":5,"year":"2024"},{"id":6,"year":"2025"},{"id":7,"year":"2026"},{"id":8,"year":"2027"},{"id":9,"year":"2028"},{"id":10,"year":"2029"},{"id":11,"year":"2030"}]')},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),i=a.n(n),s=a(3),c=a.n(s),o=(a(9),function(e){var t=e.mainMenuName,a=e.text,r=e.iconClass,n=e.currentMainMenuItem,s=e.changeMainMenuItem,c="navbar__main-menu-item".concat(t===n?" navbar__main-menu-item_active":"");return i.a.createElement("li",{className:c,onClick:function(){return s(t)}},i.a.createElement("i",{className:"".concat(r," navbar__main-menu-icon")}),a)}),l=function(e){var t=e.currentMainMenuItem,a=e.changeMainMenuItem;return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"navbar__main-menu"},i.a.createElement(o,{mainMenuName:"customer-list",text:"Lista",iconClass:"fas fa-list",currentMainMenuItem:t,changeMainMenuItem:a}),i.a.createElement(o,{mainMenuName:"register",text:"Cadastro",iconClass:"fas fa-user-plus",currentMainMenuItem:t,changeMainMenuItem:a})))},m=function(e){var t=e.idAttribute,a=e.labelText,r=e.inputError,n=e.changeInput,s=e.maxLength,c=e.errorMessage,o=e.type,l=void 0===o?"text":o,m=e.placeholder,u=void 0===m?"":m,d=e.classNameItem,g=void 0===d?"register__form-item":d;return i.a.createElement("div",{className:g},i.a.createElement("label",{htmlFor:t,className:"register__label"},a),i.a.createElement("input",{type:l,className:"register__input".concat(r?" register__input_error":""),onChange:n,maxLength:s,id:t,placeholder:u}),r&&i.a.createElement("p",{className:"register__error-message"},c))},u=function(e){var t=e.idAttribute,a=e.labelText,s=e.dataList,c=e.currentOption,o=e.setCurrentOption,l=e.selectError,m=e.setSelectError,u=e.errorMessage,d=Object(n.useState)(!1),g=Object(r.a)(d,2),_=g[0],b=g[1];return Object(n.useEffect)((function(){if(_){function e(e){var t=e.target.classList.value.split(" ")[0];"register__select-custom-option"!==t&&"register__select-custom-option-item"!==t&&b(!1)}return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[_]),i.a.createElement("div",{className:"register__form-item register__form-item_mid_width"},i.a.createElement("label",{htmlFor:t,className:"register__label",onClick:function(){b(!0)}},a),i.a.createElement("div",{className:"register__select-custom"},i.a.createElement("select",{className:"register__select",value:c.nome,onChange:function(e){var t=e.target.value,a=s.filter((function(e){return e.nome===t}))[0];o({id:a.id,nome:a.nome}),a.id>0?m(!1):m(!0)},id:t},s.map((function(e){return i.a.createElement("option",{className:"register__select-option",value:e.nome,key:e.id},e.nome)}))),i.a.createElement("div",{className:"register__select-custom-item".concat(l?" register__select-custom-item_error":""),onClick:function(){b(!_)}},c.nome,i.a.createElement("i",{className:"fas fa-caret-down register__select-custom-icon"})),_?i.a.createElement("ul",{className:"register__select-custom-option"},s.map((function(e){var t="register__select-custom-option-item";return e.nome===c.nome?t+=" register__select-custom-option-item_active":t+="",i.a.createElement("li",{className:t,key:e.id,onClick:function(){return t=e.id,a=e.nome,o({id:t,nome:a}),b(!1),void m(!(t>0));var t,a}},e.nome)}))):"",l&&i.a.createElement("p",{className:"register__error-message"},u)))},d=function(e){var t=e.labelText,a=e.firstDataList,s=e.firstCurrentOption,c=e.setFirstCurrentOption,o=e.firstSelectError,l=e.setFirstSelectError,m=e.firstErrorMessage,u=e.secondDataList,d=e.secondCurrentOption,g=e.setSecondCurrentOption,_=e.secondSelectError,b=e.setSecondSelectError,f=e.secondErrorMessage,p=Object(n.useState)(!1),E=Object(r.a)(p,2),h=E[0],v=E[1],N=Object(n.useState)(!1),O=Object(r.a)(N,2),j=O[0],S=O[1];return Object(n.useEffect)((function(){if(h){function e(e){var t=e.target.classList.value.split(" ")[0];"register__select-custom-option"!==t&&"register__select-custom-option-item"!==t&&v(!1)}return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[h]),Object(n.useEffect)((function(){if(j){function e(e){var t=e.target.classList.value.split(" ")[0];"register__select-custom-option"!==t&&"register__select-custom-option-item"!==t&&S(!1)}return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[j]),i.a.createElement("div",{className:"register__form-item register__form-item_mid_width"},i.a.createElement("label",{className:"register__label"},t),i.a.createElement("div",{className:"register__select-custom-duo-group"},i.a.createElement("div",{className:"register__select-custom register__select-custom_mid_width"},i.a.createElement("select",{className:"register__select",value:s.month,onChange:function(e){var t=e.target.value,r=a.filter((function(e){return e.month===t}))[0];c({id:r.id,month:r.month}),r.id>0?l(!1):l(!0)}},a.map((function(e){return i.a.createElement("option",{className:"register__select-option",value:e.month,key:e.id},e.month)}))),i.a.createElement("div",{className:"register__select-custom-item".concat(o?" register__select-custom-item_error":""),onClick:function(){v(!h)}},s.month,i.a.createElement("i",{className:"fas fa-caret-down register__select-custom-icon"})),h?i.a.createElement("ul",{className:"register__select-custom-option"},a.map((function(e){var t="register__select-custom-option-item";return e.month===s.month?t+=" register__select-custom-option-item_active":t+="",i.a.createElement("li",{className:t,key:e.id,onClick:function(){return t=e.id,a=e.month,c({id:t,month:a}),v(!1),void l(!(t>0));var t,a}},e.month)}))):""),i.a.createElement("div",{className:"register__select-custom register__select-custom_mid_width"},i.a.createElement("select",{className:"register__select",value:d.year,onChange:function(e){var t=e.target.value,a=u.filter((function(e){return e.year===t}))[0];g({id:a.id,year:a.year}),a.id>0?b(!1):b(!0)}},u.map((function(e){return i.a.createElement("option",{className:"register__select-option",value:e.year,key:e.id},e.year)}))),i.a.createElement("div",{className:"register__select-custom-item".concat(_?" register__select-custom-item_error":""),onClick:function(){S(!j)}},d.year,i.a.createElement("i",{className:"fas fa-caret-down register__select-custom-icon"})),j?i.a.createElement("ul",{className:"register__select-custom-option"},u.map((function(e){var t="register__select-custom-option-item";return e.year===d.year?t+=" register__select-custom-option-item_active":t+="",i.a.createElement("li",{className:t,key:e.id,onClick:function(){return t=e.id,a=e.year,g({id:t,year:a}),S(!1),void b(!(t>0));var t,a}},e.year)}))):"")),i.a.createElement("div",{className:"register__list-error-message"},o&&i.a.createElement("p",{className:"register__error-message"},m),_&&i.a.createElement("p",{className:"register__error-message"},f)))},g=(a(10),function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),s=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),g=l[0],_=l[1],b=Object(n.useState)(""),f=Object(r.a)(b,2),p=f[0],E=f[1],h=Object(n.useState)(!1),v=Object(r.a)(h,2),N=v[0],O=v[1],j=Object(n.useState)(""),S=Object(r.a)(j,2),y=S[0],C=S[1],M=Object(n.useState)(!1),A=Object(r.a)(M,2),x=A[0],L=A[1],I=Object(n.useState)(""),k=Object(r.a)(I,2),w=k[0],T=k[1],$=Object(n.useState)(!1),z=Object(r.a)($,2),F=z[0],Z=z[1],D=Object(n.useState)([]),P=Object(r.a)(D,2),J=P[0],R=P[1],B={id:0,nome:"Selecione o Estado"},X=Object(n.useState)(B),G=Object(r.a)(X,2),U=G[0],q=G[1],H=Object(n.useState)(!1),K=Object(r.a)(H,2),Q=K[0],V=K[1],W=Object(n.useState)(""),Y=Object(r.a)(W,2),ee=Y[0],te=Y[1],ae=Object(n.useState)(!1),re=Object(r.a)(ae,2),ne=re[0],ie=re[1],se=Object(n.useState)([]),ce=Object(r.a)(se,2),oe=ce[0],le=ce[1],me={id:0,nome:"Selecione a Cidade"},ue=Object(n.useState)(me),de=Object(r.a)(ue,2),ge=de[0],_e=de[1],be=Object(n.useState)(!1),fe=Object(r.a)(be,2),pe=fe[0],Ee=fe[1],he=Object(n.useState)("card"),ve=Object(r.a)(he,2),Ne=ve[0],Oe=ve[1],je=Object(n.useState)(""),Se=Object(r.a)(je,2),ye=Se[0],Ce=Se[1],Me=Object(n.useState)(!1),Ae=Object(r.a)(Me,2),xe=Ae[0],Le=Ae[1],Ie=Object(n.useState)([]),ke=Object(r.a)(Ie,2),we=ke[0],Te=ke[1],$e={id:0,month:"M\xeas"},ze=Object(n.useState)($e),Fe=Object(r.a)(ze,2),Ze=Fe[0],De=Fe[1],Pe=Object(n.useState)(!1),Je=Object(r.a)(Pe,2),Re=Je[0],Be=Je[1],Xe=Object(n.useState)([]),Ge=Object(r.a)(Xe,2),Ue=Ge[0],qe=Ge[1],He={id:0,year:"Ano"},Ke=Object(n.useState)(He),Qe=Object(r.a)(Ke,2),Ve=Qe[0],We=Qe[1],Ye=Object(n.useState)(!1),et=Object(r.a)(Ye,2),tt=et[0],at=et[1],rt=Object(n.useState)(""),nt=Object(r.a)(rt,2),it=nt[0],st=nt[1],ct=Object(n.useState)(!1),ot=Object(r.a)(ct,2),lt=ot[0],mt=ot[1],ut=Object(n.useState)(""),dt=Object(r.a)(ut,2),gt=dt[0],_t=dt[1],bt=Object(n.useState)(!1),ft=Object(r.a)(bt,2),pt=ft[0],Et=ft[1];function ht(e){var t=e.target.value;"boleto"===t&&(Le(!1),Be(!1),at(!1),mt(!1),Et(!1)),Oe(t)}return Object(n.useEffect)((function(){fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){e.json().then((function(e){var t=e.slice();t.unshift(B),R(t)}))})).catch((function(e){return console.error("API n\xe3o foi encontrada! State Error!",e)})),0!==U.id?fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(U.id,"/municipios")).then((function(e){e.json().then((function(e){var t=e.slice();t.unshift(me),le(t)}))})).catch((function(e){return console.error("API n\xe3o foi encontrada! City Error!",e)})):(_e(me),le([]));var e=a(11).slice();e.unshift($e),Te(e);var t=a(12).slice();t.unshift(He),qe(t)}),[U]),i.a.createElement("section",{className:"register"},i.a.createElement("div",{className:"register__title-body"},i.a.createElement("h1",{className:"register__title"},"Cadastro")),i.a.createElement("form",{method:"POST",className:"register__form"},i.a.createElement("div",{className:"register__form-first-group"},i.a.createElement(m,{idAttribute:"register-input-name",labelText:"Nome",inputError:g,changeInput:function(e){var t=e.target.value;t.length>0?_(!1):_(!0),c(t)},maxLength:"80",errorMessage:"Preencha o campo"}),i.a.createElement(m,{idAttribute:"register-input-email",labelText:"Email",inputError:N,changeInput:function(e){var t=e.target.value;/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)?O(!1):O(!0),E(t)},maxLength:"100",errorMessage:"Digite um email v\xe1lido",type:"email"}),i.a.createElement(m,{idAttribute:"register-input-cpf",labelText:"CPF",inputError:x,changeInput:function(e){var t=e.target.value;11===(t=t.replace(/[^0-9]/g,"")).length&&(t=t.replace(/^([\d]{3})?([\d]{3})?([\d]{3})?([\d]{2})/,"$1.$2.$3-$4")),14===t.length?L(!1):L(!0),C(t),e.target.value=t},maxLength:"14",errorMessage:"Digite um CPF v\xe1lido",placeholder:"111.111.111-01"}),i.a.createElement("div",{className:"register__form-item-group"},i.a.createElement(m,{idAttribute:"register-input-address",labelText:"Endere\xe7o",inputError:F,changeInput:function(e){var t=e.target.value;t.length>0?Z(!1):Z(!0),T(t)},maxLength:"70",errorMessage:"Preencha o campo",placeholder:"Rua, N\xfamero e Bairro",classNameItem:"register__form-item register__form-item_mid_width"}),i.a.createElement(u,{idAttribute:"register-select-state",labelText:"Estado",dataList:J,currentOption:U,setCurrentOption:q,selectError:Q,setSelectError:V,errorMessage:"Escolha um estado"})),i.a.createElement("div",{className:"register__form-item-group"},i.a.createElement(m,{idAttribute:"register-input-cep",labelText:"CEP",inputError:ne,changeInput:function(e){var t=e.target.value;8===(t=t.replace(/[^0-9]/g,"")).length&&(t=t.replace(/^([\d]{2})?([\d]{3})?([\d]{3})/,"$1.$2-$3")),10===t.length?ie(!1):ie(!0),te(t),e.target.value=t},maxLength:"10",errorMessage:"Digite um CEP v\xe1lido",placeholder:"22.222-000",classNameItem:"register__form-item register__form-item_mid_width"}),i.a.createElement(u,{idAttribute:"register-select-city",labelText:"Cidade",dataList:oe,currentOption:ge,setCurrentOption:_e,selectError:pe,setSelectError:Ee,errorMessage:"Escolha uma cidade"}))),i.a.createElement("div",{className:"register__form-last-group"},i.a.createElement("div",{className:"register__payment-form-title-body"},i.a.createElement("h1",{className:"register__payment-form-title"},"Forma de Pagamento")),i.a.createElement("div",{className:"register__radio-btn-group"},i.a.createElement("div",{className:"register__radio-btn-item"},i.a.createElement("input",{type:"radio",className:"register__radio-btn-input",id:"register__radio-btn-card",name:"payment-form",value:"card",onChange:ht,checked:"card"===Ne&&!0}),i.a.createElement("label",{htmlFor:"register__radio-btn-card",className:"register__radio-btn-label"},"Cart\xe3o de Cr\xe9dito")),i.a.createElement("div",{className:"register__radio-btn-item"},i.a.createElement("input",{type:"radio",className:"register__radio-btn-input",id:"register__radio-btn-boleto",name:"payment-form",value:"boleto",onChange:ht,checked:"boleto"===Ne&&!0}),i.a.createElement("label",{htmlFor:"register__radio-btn-boleto",className:"register__radio-btn-label"},"Boleto Banc\xe1rio"))),"card"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"register__form-item-group"},i.a.createElement(m,{idAttribute:"register-input-card-name",labelText:"Nome no Cart\xe3o",inputError:xe,changeInput:function(e){var t=e.target.value;t.length>0?Le(!1):Le(!0),Ce(t)},maxLength:"80",errorMessage:"Preencha o campo",placeholder:"Nome impresso no cart\xe3o",classNameItem:"register__form-item register__form-item_mid_width"}),i.a.createElement(d,{labelText:"Data de Expira\xe7\xe3o",firstDataList:we,firstCurrentOption:Ze,setFirstCurrentOption:De,firstSelectError:Re,setFirstSelectError:Be,firstErrorMessage:"Escolha um m\xeas",secondDataList:Ue,secondCurrentOption:Ve,setSecondCurrentOption:We,secondSelectError:tt,setSecondSelectError:at,secondErrorMessage:"Escolha um ano"})),i.a.createElement("div",{className:"register__form-item-group"},i.a.createElement(m,{idAttribute:"register-input-card-number",labelText:"Numero do Cart\xe3o",inputError:lt,changeInput:function(e){var t=e.target.value;16===(t=t.replace(/[^0-9]/g,"")).length&&(t=t.replace(/^([\d]{4})?([\d]{4})?([\d]{4})?([\d]{4})/,"$1 $2 $3 $4")),19===t.length?mt(!1):mt(!0),st(t),e.target.value=t},maxLength:"19",errorMessage:"Digite o n\xfamero v\xe1lido",placeholder:"5555 5555 5555 5555",classNameItem:"register__form-item register__form-item_mid_width"}),i.a.createElement(m,{idAttribute:"register-input-safe-code",labelText:"C\xf3digo de Seguran\xe7a",inputError:pt,changeInput:function(e){var t=e.target.value;3===(t=t.replace(/[^0-9]/g,"")).length?Et(!1):Et(!0),_t(t),e.target.value=t},maxLength:"3",errorMessage:"Digite um c\xf3digo v\xe1lido",placeholder:"XXX",classNameItem:"register__form-item register__form-item_mid_width"})))),i.a.createElement("div",{className:"register__form-footer"},i.a.createElement("p",{className:"register__form-footer-warning"},"Seu cart\xe3o ser\xe1 debitado em R$ 49,00"),i.a.createElement("button",{type:"submit",className:"register__form-footer-submit",onClick:function(e){e.preventDefault(),0===s.length&&_(!0),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(p)||O(!0),y.length<14&&L(!0),0===w.length&&Z(!0),0===U.id&&V(!0),ee.length<10&&ie(!0),0===ge.id&&Ee(!0),"card"===Ne&&(0===ye.length&&Le(!0),0===Ze.id&&Be(!0),0===Ve.id&&at(!0),0===it.length&&mt(!0),gt.length<3&&Et(!0)),console.log(s),console.log(p),console.log(y),console.log(w),console.log(ee),console.log(U.nome),console.log(ge.nome),console.log(Ne),console.log(ye),console.log(Ze.month),console.log(Ve.year),console.log(it),console.log(gt)}},"REALIZAR MATR\xcdCULA"),i.a.createElement("p",{className:"register__form-footer-info"},"Informa\xe7\xf5es seguras e criptografadas"))))}),_=(a(13),function(){return i.a.createElement("section",{className:"customer-list"},i.a.createElement("div",{className:"customer-list__title-body"},i.a.createElement("h1",{className:"customer-list__title"},"Lista")),i.a.createElement("div",{className:"customer-list__main-body"},i.a.createElement("div",{className:"customer-list__main-title-body"},i.a.createElement("h1",{className:"customer-list__main-title"},"Lista de clientes")),i.a.createElement("div",{className:"customer-list__main-search-bar"},i.a.createElement("label",{htmlFor:"customer-list-search-bar",className:"customer-list__main-search-bar-label"},"Nome do Cliente"),i.a.createElement("input",{type:"text",className:"customer-list__search-bar-input",id:"customer-list-search-bar"}))))}),b=(a(14),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",{className:"footer__text"},"Gleydson Jos\xe9 da Silva - 2020"))}),f=(a(15),function(){var e=Object(n.useState)("register"),t=Object(r.a)(e,2),a=t[0],s=t[1],c="";switch(a){case"register":c=i.a.createElement(g,null);break;case"customer-list":c=i.a.createElement(_,null);break;default:c=""}return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{currentMainMenuItem:a,changeMainMenuItem:function(e){s(e)}}),c,i.a.createElement(b,null))});c.a.render(i.a.createElement(f,null),document.getElementById("main"))}],[[4,1,2]]]);
//# sourceMappingURL=main.27d10e70.chunk.js.map