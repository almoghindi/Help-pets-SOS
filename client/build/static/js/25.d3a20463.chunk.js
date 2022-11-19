(self.webpackChunkclient=self.webpackChunkclient||[]).push([[25],{1025:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(2791),o=n(885),a="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,s=function(e){return null!==u||(u=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null}();r&&e?console.warn(i):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),u},l=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.44.1",startTime:t})}(r,n),r},p=Promise.resolve().then((function(){return s(null)})),f=!1;p.catch((function(e){f||console.warn(e)}));var d=n(5764),m=n(1665),y=n(4165),h=n(5861),v=n(184);function g(){var e=(0,d.useStripe)(),t=(0,d.useElements)(),n=(0,r.useState)(null),a=(0,o.Z)(n,2),c=a[0],i=a[1],u=(0,r.useState)(!1),s=(0,o.Z)(u,2),l=s[0],p=s[1];(0,r.useEffect)((function(){if(e){var t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");t&&e.retrievePaymentIntent(t).then((function(e){switch(e.paymentIntent.status){case"succeeded":i("Payment succeeded!");break;case"processing":i("Your payment is processing.");break;case"requires_payment_method":i("Your payment was not successful, please try again.");break;default:i("Something went wrong.")}}))}}),[e]);var f=function(){var n=(0,h.Z)((0,y.Z)().mark((function n(r){var o,a;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),e&&t){n.next=3;break}return n.abrupt("return");case 3:return p(!0),n.next=6,e.confirmPayment({elements:t,confirmParams:{return_url:"/"}});case 6:o=n.sent,"card_error"===(a=o.error).type||"validation_error"===a.type?i(a.message):i("An unexpected error occurred."),p(!1);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsx)("div",{className:"checkout",children:(0,v.jsxs)("form",{id:"payment-form",onSubmit:f,className:"check-form",children:[(0,v.jsx)(d.PaymentElement,{id:"payment-element"}),(0,v.jsx)("button",{disabled:l||!e||!t,id:"submit",className:"pay-button",children:(0,v.jsx)("span",{id:"button-text",children:l?(0,v.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),c&&(0,v.jsx)("div",{id:"payment-message",children:c})]})})}var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];f=!0;var r=Date.now();return p.then((function(e){return l(e,t,r)}))}("pk_test_51L5tiVE5IbHbHPzCQFfkgNVzcV17LjjLF8cPNzZqpFKvVRteBB0MHFjJVlIznOpIuBxzKmeExeLoscxnVkbb2UfK00p24h7YHn");function E(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],c=(0,r.useContext)(m.V).userId;(0,r.useEffect)((function(){fetch("".concat("https://help-pets-sos-backend.herokuapp.com/api","/shop/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:c})}).then((function(e){return e.json()})).then((function(e){return a(e.clientSecret)}))}),[c]);var i={clientSecret:n,appearance:{theme:"stripe"}};return(0,v.jsx)(v.Fragment,{children:n&&(0,v.jsx)(d.Elements,{options:i,stripe:b,children:(0,v.jsx)(g,{})})})}var w=function(){return(0,v.jsx)(E,{})}},5764:function(e,t,n){!function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function a(){}a.resetWarningCache=o;var c=function(){function e(e,t,n,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n},i=n((function(e){e.exports=c()}));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return d(e)||m(e,t)||y(e,t)||v()}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}function y(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},b=function(e){return null!==e&&"object"===l(e)},E=function(e){return b(e)&&"function"===typeof e.then},w=function(e){return b(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},S="[object Object]",C=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(n)===S))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var i={},u=0;u<a.length;u+=1)i[a[u]]=!0;for(var s=0;s<c.length;s+=1)i[c[s]]=!0;var l=Object.keys(i);if(l.length!==a.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},j=function(e,t,n){return b(e)?Object.keys(e).reduce((function(r,o){var a=!b(t)||!C(e[o],t[o]);return n.includes(o)?(a&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):a?s(s({},r||{}),{},p({},o,e[o])):r}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",x=function(e){if(null===e||w(e))return e;throw new Error(k)},O=function(e){if(E(e))return{tag:"async",stripePromise:Promise.resolve(e).then(x)};var t=x(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=t.createContext(null);_.displayName="CartElementContext";var B=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},I=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return O(n)}),[n]),c=f(t.useState(null),2),i=c[0],u=c[1],s=f(t.useState(null),2),l=s[0],p=s[1],d=f(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),m=d[0],y=d[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,m,r]);var h=g(n);t.useEffect((function(){null!==h&&h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[h,n]);var v=g(r);return t.useEffect((function(){if(m.elements){var e=j(r,v,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[r,v,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.15.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.15.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(P.Provider,{value:m},t.createElement(_.Provider,{value:{cart:i,setCart:u,cartState:l,setCartState:p}},o))};I.propTypes={stripe:i.any,options:i.object};var N=function(e){var n=t.useContext(P);return A(n,e)},L=function(e){var n=t.useContext(_);return B(n,e)},R=function(){return N("calls useElements()").elements},T=function(){return N("calls useStripe()").stripe},M=function(){return L("calls useCartElement()").cart},F=function(){return L("calls useCartElementState()").cartState},q=function(e){return(0,e.children)(N("mounts <ElementsConsumer>"))};q.propTypes={children:i.func.isRequired};var D=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},U=function(){},V=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(e,n){var r="".concat(V(e),"Element"),o=n?function(e){N("mounts <".concat(r,">")),L("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,a=n.className,c=n.options,i=void 0===c?{}:c,u=n.onBlur,s=void 0===u?U:u,l=n.onFocus,p=void 0===l?U:l,f=n.onReady,d=void 0===f?U:f,m=n.onChange,y=void 0===m?U:m,h=n.onEscape,v=void 0===h?U:h,b=n.onClick,E=void 0===b?U:b,w=n.onLoadError,S=void 0===w?U:w,C=n.onLoaderStart,k=void 0===C?U:C,x=n.onNetworksChange,O=void 0===x?U:x,P=n.onCheckout,A=void 0===P?U:P,_=n.onLineItemClick,B=void 0===_?U:_,I=n.onConfirm,R=void 0===I?U:I,T=n.onCancel,M=void 0===T?U:T,F=n.onShippingAddressChange,q=void 0===F?U:F,V=n.onShippingRateChange,W=void 0===V?U:V,Y=N("mounts <".concat(r,">")).elements,Z=t.useRef(null),z=t.useRef(null),H=L("mounts <".concat(r,">")),K=H.setCart,J=H.setCartState,$=D(d),Q=D(s),G=D(p),X=D(E),ee=D(y),te=D(v),ne=D(S),re=D(k),oe=D(O),ae=D(A),ce=D(B),ie=D(R),ue=D(M),se=D(q),le=D(W);t.useLayoutEffect((function(){if(null==Z.current&&Y&&null!=z.current){var t=Y.create(e,i);"cart"===e&&K&&K(t),Z.current=t,t.mount(z.current),t.on("ready",(function(n){"cart"===e?(J&&J(n),$(n)):$("payButton"===e?n:t)})),t.on("change",(function(t){"cart"===e&&J&&J(t),ee(t)})),t.on("blur",Q),t.on("focus",G),t.on("escape",te),t.on("loaderror",ne),t.on("loaderstart",re),t.on("networkschange",oe),t.on("click",X),t.on("checkout",(function(t){"cart"===e&&J&&J(t),ae(t)})),t.on("lineitemclick",ce),t.on("confirm",ie),t.on("cancel",ue),t.on("shippingaddresschange",se),t.on("shippingratechange",le)}}));var pe=g(i);return t.useEffect((function(){if(Z.current){var e=j(i,pe,["paymentRequest"]);e&&Z.current.update(e)}}),[i,pe]),t.useLayoutEffect((function(){return function(){Z.current&&(Z.current.destroy(),Z.current=null)}}),[]),t.createElement("div",{id:o,className:a,ref:z})};return o.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onEscape:i.func,onClick:i.func,onLoadError:i.func,onLoaderStart:i.func,onNetworksChange:i.func,onCheckout:i.func,onLineItemClick:i.func,onConfirm:i.func,onCancel:i.func,onShippingAddressChange:i.func,onShippingRateChange:i.func,options:i.object},o.displayName=r,o.__elementType=e,o},Y="undefined"===typeof window,Z=W("auBankAccount",Y),z=W("card",Y),H=W("cardNumber",Y),K=W("cardExpiry",Y),J=W("cardCvc",Y),$=W("fpxBank",Y),Q=W("iban",Y),G=W("idealBank",Y),X=W("p24Bank",Y),ee=W("epsBank",Y),te=W("payment",Y),ne=W("payButton",Y),re=W("paymentRequestButton",Y),oe=W("linkAuthentication",Y),ae=W("address",Y),ce=W("shippingAddress",Y),ie=W("cart",Y),ue=W("paymentMethodMessaging",Y),se=W("affirmMessage",Y),le=W("afterpayClearpayMessage",Y);e.AddressElement=ae,e.AffirmMessageElement=se,e.AfterpayClearpayMessageElement=le,e.AuBankAccountElement=Z,e.CardCvcElement=J,e.CardElement=z,e.CardExpiryElement=K,e.CardNumberElement=H,e.CartElement=ie,e.Elements=I,e.ElementsConsumer=q,e.EpsBankElement=ee,e.FpxBankElement=$,e.IbanElement=Q,e.IdealBankElement=G,e.LinkAuthenticationElement=oe,e.P24BankElement=X,e.PayButtonElement=ne,e.PaymentElement=te,e.PaymentMethodMessagingElement=ue,e.PaymentRequestButtonElement=re,e.ShippingAddressElement=ce,e.useCartElement=M,e.useCartElementState=F,e.useElements=R,e.useStripe=T,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2791))}}]);
//# sourceMappingURL=25.d3a20463.chunk.js.map