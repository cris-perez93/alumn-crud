(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{28:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(21),o=t.n(c),s=(t(28),t(3)),i=t(6),l=t(10),u=t(4),m=t(9),j=Object(n.createContext)(),b=t(1),d=function(e){var a=e.usuario,t=e.guardarUsuario,r=Object(n.useContext)(j).mostrarUsuario,c=a.nombre;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()&&r(a)},method:"post",className:"form",children:[Object(b.jsx)("h1",{className:"title-login",children:"Login"}),Object(b.jsxs)("div",{className:"form__field",children:[Object(b.jsx)("label",{children:"User"}),Object(b.jsx)("input",{type:"text",name:"nombre",value:c,onChange:function(e){t(Object(s.a)(Object(s.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))}})]}),Object(b.jsx)("div",{className:"form__field",children:Object(b.jsx)(l.b,{to:"alumn-crud/crud",children:Object(b.jsx)("button",{className:"btn-login",type:"submit",value:"Login",children:"Login"})})})]})})},O=function(){var e=Object(n.useContext)(j),a=e.temaseleccionado,t=e.errorformulario,r=e.alumno,c=e.agregarTema,o=e.errorFormulario,l=e.obtenerTema,u=e.actualizarTema;Object(n.useEffect)((function(){x(null!==a?a:{nombre:"",nota:""})}),[a]);var d=Object(n.useState)({nombre:"",nota:""}),O=Object(i.a)(d,2),f=O[0],x=O[1],p=f.nombre,h=f.nota;if(!r)return null;var v=Object(i.a)(r,1)[0],g=function(e){x(Object(s.a)(Object(s.a)({},f),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"container-banner",children:Object(b.jsxs)("div",{className:"container-agregar-examen",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==p&&""!==h?(null===a?(f.alumnoId=v.id,f.estado=!1,c(f)):u(f),l(v.id),x({nombre:"",nota:""})):o()},className:"form-banner",children:[Object(b.jsxs)("div",{className:"container-input",children:[Object(b.jsx)("label",{children:"Agrega examen"}),Object(b.jsx)("input",{type:"text",className:"input-temas",placeholder:"Tema a examinar...",name:"nombre",value:p,onChange:g})]}),Object(b.jsxs)("div",{className:"container-input",children:[Object(b.jsx)("label",{children:"Agrega una califaci\xf3n"}),Object(b.jsx)("input",{type:"text",className:"input-temas",placeholder:"Nota examen",name:"nota",value:h,onChange:g})]}),Object(b.jsx)("input",{type:"submit",className:"btn-temas",value:a?"Editar Examen":"Agregar Examen"})]}),t?Object(b.jsx)("p",{className:"error-formulario",children:"Rellena los campos"}):null]})})},f=function(){var e=Object(n.useContext)(j),a=e.formulario,t=e.mostrarerror,r=e.mostrarFormulario,c=e.alumnosLista,o=e.obtenerAlumnos,l=e.agregarAlumnos,u=e.mostrarError,d=e.alumnoClick,O=e.obtenerTema,f=Object(n.useState)({nombre:""}),x=Object(i.a)(f,2),p=x[0],h=x[1],v=p.nombre;Object(n.useEffect)((function(){o()}),[]);return Object(b.jsxs)("div",{className:"container-lista",children:[Object(b.jsx)("h1",{className:"title-alumnos",children:"Lista de alumnos"}),Object(b.jsx)("button",{type:"button",className:"btn-agregar-alumno",onClick:function(){r()},children:"Nuevo Alumno"}),a?Object(b.jsxs)("form",{className:"form-agregar-alumno",onSubmit:function(e){e.preventDefault(),""!==v?(l(p),h({nombre:""})):u()},children:[Object(b.jsx)("input",{className:"input-text",placeholder:"Nombre Alumno",type:"text",name:"nombre",value:v,onChange:function(e){h(Object(s.a)(Object(s.a)({},p),{},Object(m.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)("input",{type:"submit",className:"btn-enviar-alumno",value:"Agregar a la lista"})]}):null,t?Object(b.jsx)("p",{className:"error_formulario",children:"A\xf1ade un alumno"}):null,Object(b.jsx)("h2",{children:"Alumnos"}),Object(b.jsx)("ul",{className:"listado-alumnos",children:0===c.length?Object(b.jsx)("p",{children:"Agrega un nuevo alumno"}):c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){return a=e.id,d(a),void O(a);var a},type:"button",className:"nombre-alumnos",children:e.nombre})},e.id)}))})]})},x=t(14),p=t(19),h=function(e){var a=e.tema,t=Object(n.useContext)(j),r=t.alumno,c=t.eliminarTema,o=t.obtenerTema,s=t.modificarEstado,l=t.setTemaActual,u=Object(i.a)(r,1)[0],m=function(e){e.estado?e.estado=!1:e.estado=!0,s(e)};return Object(b.jsxs)("li",{className:"card-tema",children:[Object(b.jsx)("p",{className:"container-tema",children:a.nombre}),Object(b.jsxs)("p",{className:"container-nota",children:["Nota:",a.nota]}),Object(b.jsx)("div",{className:"estado",children:a.estado?Object(b.jsx)("button",{className:"btn-aprovado",type:"button",onClick:function(){return m(a)},children:Object(b.jsx)(x.b,{})}):Object(b.jsx)("button",{className:"btn-suspendido",type:"button",onClick:function(){return m(a)},children:Object(b.jsx)(x.a,{})})}),Object(b.jsxs)("div",{className:"acciones",children:[Object(b.jsx)("button",{onClick:function(){return function(e){l(e)}(a)},type:"button",className:"btn-acciones-editar",children:Object(b.jsx)(p.b,{})}),Object(b.jsx)("button",{onClick:function(){return e=a.id,c(e),void o(u.id);var e},type:"button",className:"btn-acciones-eliminar",children:Object(b.jsx)(p.a,{})})]})]})},v=t.p+"static/media/avatar.6ce16000.png",g=function(){var e=Object(n.useContext)(j),a=e.alumno,t=e.temasalumno,r=e.eliminarAlumno;if(!a)return Object(b.jsx)("h2",{children:"Alumno"});var c=Object(i.a)(a,1)[0];return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("div",{className:"container-alumno",children:Object(b.jsxs)("div",{className:"card-profile",children:[Object(b.jsx)("img",{alt:"profile",className:"img-profile",src:v}),Object(b.jsxs)("p",{children:["Alumno: ",c.nombre]})]})}),Object(b.jsxs)("ul",{className:"listado-temas",children:[0===t.length?Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"No hay informaci\xf3n"})}):t.map((function(e){return Object(b.jsx)(h,{tema:e},e.id)})),Object(b.jsx)("p",{onClick:function(){r(c.id)},className:"borrar-alumno",children:"Borrar Alumno \xd7"})]})]})},N=function(e){var a=e.usuario.nombre;return Object(b.jsx)("div",{className:"container-hola-usuario",children:Object(b.jsxs)("div",{className:"container-bienvenido",children:[Object(b.jsxs)("h4",{children:["Bienvenid@ ",Object(b.jsx)("span",{children:a})]}),Object(b.jsx)(l.b,{to:"/alumn-crud",children:Object(b.jsx)("p",{children:"Cerrar sesi\xf3n"})})]})})},y=function(e){var a=e.usuario,t=e.guardarUsuario;return Object(b.jsxs)("div",{className:"container-crud",children:[Object(b.jsx)(f,{}),Object(b.jsxs)("div",{className:"container-content",children:[Object(b.jsx)(N,{usuario:a,guardarUsuario:t}),Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"tareas",children:Object(b.jsx)(g,{})})]})]})},A=t(42),T=t(20),C="MOSTRAR_FORMULARIO",E="OBTENER_ALUMNOS",L="AGREGAR_ALUMNOS",R="MOSTRAR_ERROR",M="ALUMNO_CLICK",_="ELIMINAR_ALUMNO",U="OBTENER_TEMA",S="AGREGAR_TEMA",I="ERROR_FORMULARIO",k="ELIMINAR_TEMA",F="ESTADO_TEMA",B="TEMA ACTUAL",D="TEMA_ACTUALIZADO",G=function(e,a){switch(a.type){case C:return Object(s.a)(Object(s.a)({},e),{},{formulario:!0});case E:return Object(s.a)(Object(s.a)({},e),{},{alumnosLista:a.payload});case L:return Object(s.a)(Object(s.a)({},e),{},{alumnosLista:[].concat(Object(T.a)(e.alumnosLista),[a.payload]),formulario:!1,mostrarerror:!1});case R:return Object(s.a)(Object(s.a)({},e),{},{mostrarerror:!0});case M:return Object(s.a)(Object(s.a)({},e),{},{alumno:e.alumnosLista.filter((function(e){return e.id===a.payload}))});case _:return Object(s.a)(Object(s.a)({},e),{},{alumnosLista:e.alumnosLista.filter((function(e){return e.id!==a.payload})),alumno:null});case U:return Object(s.a)(Object(s.a)({},e),{},{temasalumno:e.temas.filter((function(e){return e.alumnoId===a.payload}))});case S:return Object(s.a)(Object(s.a)({},e),{},{temas:[].concat(Object(T.a)(e.temas),[a.payload]),errorformulario:!1});case I:return Object(s.a)(Object(s.a)({},e),{},{errorformulario:!0});case k:return Object(s.a)(Object(s.a)({},e),{},{temas:e.temas.filter((function(e){return e.id!==a.payload}))});case D:case F:return Object(s.a)(Object(s.a)({},e),{},{temas:e.temas.map((function(e){return e.id===a.payload.id?a.payload:e})),temaseleccionado:null});case B:return Object(s.a)(Object(s.a)({},e),{},{temaseleccionado:a.payload});default:return e}},w=function(e){var a=[],t=Object(n.useReducer)(G,{alumnosLista:[],formulario:!1,mostrarerror:!1,alumno:null,temas:[],temasalumno:null,errorformulario:!1,temaseleccionado:null}),r=Object(i.a)(t,2),c=r[0],o=r[1];return Object(b.jsx)(j.Provider,{value:{alumnosLista:c.alumnosLista,formulario:c.formulario,mostrarerror:c.mostrarerror,alumno:c.alumno,temas:c.temas,temasalumno:c.temasalumno,errorformulario:c.errorformulario,temaseleccionado:c.temaseleccionado,mostrarFormulario:function(){o({type:C})},obtenerAlumnos:function(){o({type:E,payload:a})},agregarAlumnos:function(e){e.id=Object(A.a)(),o({type:L,payload:e})},mostrarError:function(){o({type:R})},alumnoClick:function(e){o({type:M,payload:e})},eliminarAlumno:function(e){o({type:_,payload:e})},obtenerTema:function(e){o({type:U,payload:e})},agregarTema:function(e){e.id=Object(A.a)(),o({type:S,payload:e})},errorFormulario:function(){o({type:I})},eliminarTema:function(e){o({type:k,payload:e})},modificarEstado:function(e){o({type:F,payload:e})},setTemaActual:function(e){o({type:B,payload:e})},actualizarTema:function(e){o({type:D,payload:e})}},children:e.children})};var P=function(){var e=Object(n.useState)({nombre:""}),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(b.jsx)(w,{children:Object(b.jsx)(l.a,{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/alumn-crud",render:function(e){return Object(b.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{usuario:t,guardarUsuario:r}))}}),Object(b.jsx)(u.a,{exact:!0,path:"/alumn-crud/crud",render:function(e){return Object(b.jsx)(y,Object(s.a)(Object(s.a)({},e),{},{usuario:t,guardarUsuario:r}))}})]})})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),z()}},[[40,1,2]]]);
//# sourceMappingURL=main.1fe5e3ce.chunk.js.map