(this["webpackJsonpg-drive-image-tag-tool"]=this["webpackJsonpg-drive-image-tag-tool"]||[]).push([[0],{44:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),r=c.n(a),j=c(15),i=c.n(j),s=(c(44),c(31)),o=c(32),l=c(37),d=c(36),b=c(18),O=c(6),x=c(58),h=c(60),u=c(22),m="/g-drive-image-tag-tool",p=function(e){return Object(n.jsxs)(x.a,{bg:"primary",variant:"dark",children:[Object(n.jsx)(u.LinkContainer,{to:m+"/",children:Object(n.jsx)(x.a.Brand,{children:"g-drive-image-tag-tool"})}),Object(n.jsxs)(h.a,{className:"mr-auto",children:[Object(n.jsx)(u.LinkContainer,{to:m+"/",children:Object(n.jsx)(h.a.Link,{children:"\u30a2\u30d7\u30ea"})}),Object(n.jsx)(u.LinkContainer,{to:m+"/howtouse",children:Object(n.jsx)(h.a.Link,{children:"HowToUse"})})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{})})]})},v=c(16),g=c(54),C=c(55),f=c(59),y=c(56),k=c(57),N=function(e){var t=Object(a.useState)(""),c=Object(v.a)(t,2),r=c[0],j=c[1],i=Object(a.useState)(!1),s=Object(v.a)(i,2),o=s[0],l=s[1],d=Object(a.useState)(""),b=Object(v.a)(d,2),O=b[0],x=b[1],h=Object(a.useState)(""),u=Object(v.a)(h,2),m=u[0],p=u[1],N=Object(a.useState)(""),L=Object(v.a)(N,2),w=L[0],S=L[1];function P(e){var t=document.createElement("textarea");t.value=e,t.selectionStart=0,t.selectionEnd=t.value.length;var c=t.style;c.position="fixed",c.left="-100%",document.body.appendChild(t),t.focus();var n=document.execCommand("copy");return t.blur(),document.body.removeChild(t),n}return Object(n.jsx)("div",{children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(C.a,{className:"text-center",children:Object(n.jsx)("h3",{className:"text-center",children:"img\u30bf\u30b0\u5909\u63db\u30c4\u30fc\u30eb"})}),Object(n.jsx)(C.a,{children:Object(n.jsx)(f.a.Control,{type:"text",placeholder:"\u5171\u6709URL",onChange:function(e){j(e.target.value)}})}),Object(n.jsx)(C.a,{children:Object(n.jsx)(y.a,{onClick:function(){var e=r;e=(e=e.replace("https://drive.google.com/file/d/","")).replace("/view?usp=sharing",""),p("![\u30c6\u30ad\u30b9\u30c8]("+(e="http://drive.google.com/uc?export=view&id="+e)+")"),S('<img src="'+e+'" />'),x(e),l(!0)},className:"text-center mt-1",children:"\u751f\u6210"})}),o?Object(n.jsxs)("div",{className:"mt-3",children:[Object(n.jsxs)(C.a,{children:["\u753b\u50cf\u3078\u306e\u76f4\u63a5\u30ea\u30f3\u30af",Object(n.jsx)("br",{}),Object(n.jsxs)(k.a,{className:"mb-3",children:[Object(n.jsx)(k.a.Prepend,{children:Object(n.jsx)(y.a,{variant:"outline-secondary",onClick:function(){P(O)},children:"Copy"})}),Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Normal text",value:O,readOnly:!0})]})]}),Object(n.jsxs)(C.a,{children:["MarkDown\u30bf\u30b0",Object(n.jsx)("br",{}),Object(n.jsxs)(k.a,{className:"mb-3",children:[Object(n.jsx)(k.a.Prepend,{children:Object(n.jsx)(y.a,{variant:"outline-secondary",onClick:function(){P(m)},children:"Copy"})}),Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Normal text",value:m,readOnly:!0})]})]}),Object(n.jsxs)(C.a,{children:["HTML img\u30bf\u30b0",Object(n.jsx)("br",{}),Object(n.jsxs)(k.a,{className:"mb-3",children:[Object(n.jsx)(k.a.Prepend,{children:Object(n.jsx)(y.a,{variant:"outline-secondary",onClick:function(){P(w)},children:"Copy"})}),Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Normal text",value:w,readOnly:!0})]})]}),Object(n.jsxs)(C.a,{children:["\u753b\u50cf\u30d7\u30ec\u30d3\u30e5\u30fc\uff08\u751f\u6210\u304c\u6b63\u3057\u304f\u884c\u308f\u308c\u3066\u3044\u308b\u3068\u4e0b\u306b\u753b\u50cf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff09",Object(n.jsx)("img",{src:O})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}):Object(n.jsxs)("div",{className:"mt-3",children:["GoogleDrive\u3067\u4f5c\u3063\u305f\u753b\u50cf\u306e\u5171\u6709URL\u3092",Object(n.jsx)("br",{}),"\u8cbc\u3063\u3066\u751f\u6210\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})})},L=function(e){return Object(n.jsx)("div",{})},w="/g-drive-image-tag-tool",S=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b.BrowserRouter,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsx)(O.d,{exact:!0,path:w+"/",component:N}),Object(n.jsx)(O.d,{exact:!0,path:w+"/howtouse",component:L})]})})})}}]),c}(a.Component),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),a(e),r(e),j(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.79802e59.chunk.js.map