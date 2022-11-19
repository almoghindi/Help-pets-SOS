"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[424],{5310:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(885),a=t(1413),i=t(2791),s=t(8610),l=t(184),c=function(e,n){switch(n.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.val,isValid:(0,s.Gu)(n.val,n.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var n=(0,i.useReducer)(c,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),t=(0,r.Z)(n,2),a=t[0],s=t[1],o=e.id,u=e.onInput,d=a.value,f=a.isValid;(0,i.useEffect)((function(){u(o,d,f)}),[o,d,f,u]);var h=function(n){s({type:"CHANGE",val:n.target.value,validators:e.validators})},p=function(){s({type:"TOUCH"})},m="input"===e.element?(0,l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:h,onBlur:p,value:a.value}):(0,l.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:h,onBlur:p,value:a.value});return(0,l.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),m,!a.isValid&&a.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},9320:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(1087),a=t(184),i=function(e){return e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(r.rU,{to:e.to,exact:e.exact,className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"," ").concat(e.className||"btn-primary"),type:e.type,onClick:e.onClick,disabled:e.disabled,value:e.value,children:e.children})}},6272:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791),t(6577);var r=t(6949),a=t(184);function i(e){return(0,a.jsx)("div",{className:"auth_class",children:(0,a.jsx)("div",{className:"container login-container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-6 welcome_auth",children:(0,a.jsxs)("div",{className:"auth_welcome",children:["Let's be a part from the biggest pets community"," ",(0,a.jsx)("span",{children:(0,a.jsx)("a",{href:"/",children:'"Help pets S.O.S."'})})]})}),(0,a.jsx)("div",{className:"col-md-6 login-form",children:(0,a.jsxs)("div",{className:"login_form_in",children:[(0,a.jsx)("div",{className:"auth_branding",children:(0,a.jsx)("a",{className:"auth_branding_in",href:"/",children:(0,a.jsx)("img",{src:r,alt:"Help pets SOS"})})}),(0,a.jsx)("h1",{className:"auth_title text-left",children:"Password Reset"}),e.children]})})]})})})}},9816:function(e,n,t){t.d(n,{c:function(){return c}});var r=t(885),a=t(4942),i=t(1413),s=t(2791),l=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===n.inputId?t&&n.isValid:t&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},c=function(e,n){var t=(0,s.useReducer)(l,{inputs:e,isValid:n}),a=(0,r.Z)(t,2),i=a[0],c=a[1];return[i,(0,s.useCallback)((function(e,n,t){c({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,s.useCallback)((function(e,n){c({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},7424:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(2791),a=t(4165),i=t(5861),s=t(885),l=(t(6577),t(8287)),c=t(9816),o=t(1087),u=t(8610),d=t(9320),f=t(5310),h=t(6272),p=t(184);function m(e){return(0,p.jsx)(h.Z,{children:(0,p.jsxs)("form",{onSubmit:e.submit,children:[(0,p.jsx)("div",{className:"alert alert-success bg-soft-primary border-0",role:"alert",children:"Enter your email address and we'll send you an email with link to reset your password, Check your spam category for Reset password link."}),(0,p.jsx)("div",{className:"form-group",children:(0,p.jsx)(f.Z,{id:"email",type:"email",className:"form-control mt-1",placeholder:"Email Address",onInput:e.inputHandler,element:"input",validators:[(0,u.hg)()],errorText:"Please enter a valid Email",label:"Enter Email"})}),(0,p.jsx)("p",{style:{color:e.color},children:e.message}),(0,p.jsx)("div",{className:"form-group",children:(0,p.jsx)(d.Z,{type:"submit",disabled:!e.isValid,className:"btn btnPrimary",children:"Reset Password"})}),(0,p.jsxs)("div",{className:"form-group other_auth_links",children:[(0,p.jsx)(o.rU,{to:"/auth",children:(0,p.jsx)("span",{className:"",children:"Login"})}),(0,p.jsx)(o.rU,{to:"/auth",children:(0,p.jsx)("span",{className:"",children:"Register"})})]})]})})}var v=function(){var e=(0,l.x)().sendRequest,n=(0,r.useState)(""),t=(0,s.Z)(n,2),o=t[0],u=t[1],d=(0,r.useState)("green"),f=(0,s.Z)(d,2),h=f[0],v=f[1],x=(0,c.c)({email:{value:"",isValid:!1}},!1),b=(0,s.Z)(x,2),y=b[0],g=b[1],j=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,e("".concat("https://help-pets-sos-backend.herokuapp.com/api","/users/forgetPassword"),"POST",JSON.stringify({email:y.inputs.email.value}),{"Content-Type":"application/json"});case 4:(r=n.sent).error&&(u(r.error),v("red")),r.message&&(u(r.message),v("green")),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m,{submit:j,inputHandler:g,isValid:y.isValid,message:o,color:h})})};function x(){return(0,p.jsx)(v,{})}},8610:function(e,n,t){t.d(n,{Gu:function(){return o},hg:function(){return c}});var r=t(7762),a="REQUIRE",i="MINLENGTH",s="MAXLENGTH",l="EMAIL",c=function(){return{type:a}},o=function(e,n){var t,c=!0,o=(0,r.Z)(n);try{for(o.s();!(t=o.n()).done;){var u=t.value;u.type===a&&(c=c&&e.trim().length>0),u.type===i&&(c=c&&e.trim().length>=u.val),u.type===s&&(c=c&&e.trim().length<=u.val),"MIN"===u.type&&(c=c&&+e>=u.val),"MAX"===u.type&&(c=c&&+e<=u.val),u.type===l&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return c}},6577:function(){},7762:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(181);function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw s}}}}}}]);
//# sourceMappingURL=424.5cab695d.chunk.js.map