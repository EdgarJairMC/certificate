(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{974:function(e,t,r){"use strict";r.r(t);var n=r(560),o=r(580),c=r(578),l=r(739),m=r(571),d=r(785),v=r(10),x=(r(56),r(600)),f=r(601),h={name:"Subscribe",mixins:[x.validationMixin],validations:{subscribeForm:{email:{required:f.required,email:f.email},company:{required:f.required}}},data:function(){return{subscribeForm:{email:"",company:"Maxan"},dialog:!1,isLoading:!1,message:""}},methods:{clear:function(){this.dialog=!0,this.subscribeForm.email="",this.isLoading=!1},submit:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.subscribeForm.$touch(),e.$v.subscribeForm.$invalid){t.next=15;break}return t.prev=2,e.isLoading=!0,t.next=6,e.$axios.post("https://api.grupointegra.dev/api/Subscribers",e.subscribeForm);case 6:r=t.sent,200===r.status&&(e.message="Gracias por suscribirte."),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.message="Lo sentimos el correo electrónico es inválido o ya se encuentra registrado.";case 14:e.clear();case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()}}},k=r(49),component=Object(k.a)(h,(function(){var e=this,t=e._self._c;return t(m.a,{attrs:{align:"center",justify:"center"}},[t(d.a,{attrs:{label:"Ingresa tú Correo Electrónico",solo:"","hide-details":""},model:{value:e.subscribeForm.email,callback:function(t){e.$set(e.subscribeForm,"email",t)},expression:"subscribeForm.email"}}),e._v(" "),t(n.a,{staticClass:"ml-sm-3 poppins",attrs:{dark:"",height:"48px",color:"#7a9c49",loading:e.isLoading},on:{click:e.submit}},[e._v("\n    Suscríbete\n  ")]),e._v(" "),t(l.a,{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(o.a,{attrs:{color:"#eef4ed"}},[t(c.b,{staticClass:"pa-1 text-subtitle-1 text-center black--text"},[e._v("\n        "+e._s(e.message)+"\n      ")]),e._v(" "),t(c.a,{staticClass:"py-2"},[t(n.a,{staticClass:"mx-auto white--text",attrs:{color:"#7a9c49",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Cerrar\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);