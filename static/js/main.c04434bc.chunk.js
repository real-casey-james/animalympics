(this.webpackJsonpanimalympics=this.webpackJsonpanimalympics||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),i=a.n(n),o=a(2),r=(a(10),a(0)),l=0,d=0,j=!1,u=!1;function b(e){var t=e.win,a=e.setWin,s=e.lose,n=e.setLose,i=e.setFinalScore,o=e.reset,b=e.setReset;return Object(c.useEffect)((function(){!0===o&&(l=0,j=!0,i(0),b(!1)),!0===t&&(u=!0,l++,i(l),a(!1)),l>d&&(d=l),!0===s&&(l--,n(!1))})),Object(r.jsxs)("div",{children:[j&&Object(r.jsxs)("span",{className:"score",children:["Highscore: ",Object(r.jsx)("strong",{children:d})," "]}),u&&Object(r.jsxs)("span",{className:"score",children:["Score: ",Object(r.jsx)("strong",{children:l})," "]})]})}function m(e){var t=e.move,a=e.setMove,s=e.handleLose,n=e.paused,i=e.reset,l=e.showTimer,d=Object(c.useState)(7),j=Object(o.a)(d,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){var e;if(!0===i&&b(7),!0===n)return null;!0===t?(clearTimeout(e),a(!1),b(7)):u>0?e=setTimeout((function(){return b(u-1)}),1e3):(clearTimeout(e),b(7),s())}),[u,n]),Object(r.jsx)("div",{children:l&&Object(r.jsxs)("span",{className:"time",children:["Time left: ",Object(r.jsx)("strong",{children:u})]})})}var h=a(3),O=a.p+"static/media/roar.abfd9b14.wav",f=a.p+"static/media/toucan-animals-svgrepo-com.dde4c4f9.svg",v=a.p+"static/media/animal-dog-svgrepo-com.6de7b05a.svg";function g(e){document.body.style.backgroundColor="white";var t=e.setPaused,a=e.handleLose,c=e.setShowTimer,s=Object(h.a)(O),n=Object(o.a)(s,1)[0];return Object(r.jsxs)("div",{className:"start",children:[Object(r.jsx)("img",{alt:"toucan",className:"toucan",src:f}),Object(r.jsx)("img",{alt:"doge",className:"doge",src:v}),Object(r.jsx)("div",{}),Object(r.jsx)("h2",{onClick:function(){n(),t(!1),c(!0),a()},children:"start"}),Object(r.jsx)("h4",{children:"it's like the olympics but for animals"})]})}var p=function(){var e=Object(c.useState)({x:null,y:null}),t=Object(o.a)(e,2),a=t[0],s=t[1],n=function(e){s({x:e.clientX,y:e.clientY})};return Object(c.useEffect)((function(){return window.addEventListener("mousemove",n),function(){return window.removeEventListener("mousemove",n)}}),[]),a};function x(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}var w=a.p+"static/media/172134__paulmorek__nom-d-01.18b33ba0.wav",k=a.p+"static/media/halloween-monster-animal-head-with-big-open-mouth-svgrepo-com.372c5c01.svg",y=a.p+"static/media/cow-animals-svgrepo-com.e6d9f8d7.svg",S=a.p+"static/media/sheep-animals-svgrepo-com.50df9e15.svg",M=a.p+"static/media/swan-animals-svgrepo-com.ea8f0733.svg",N=a.p+"static/media/rabbit-animals-svgrepo-com.34649119.svg",C=a.p+"static/media/mouse-svgrepo-com.49baec91.svg",P=0,W=!0,_=!1;function L(e){document.body.style.backgroundColor="white";var t=e.handleWin,a=e.setPaused,s=[S,y,N,M],n=Object(c.useState)(s[P]),i=Object(o.a)(n,2),l=i[0],d=i[1],j=p(),u=j.x,b=j.y,m=x(),O=Math.floor(.7*m.width*Math.random())||150,f=Math.floor((m.height-130)*Math.random())||150,v=Object(c.useState)(O),g=Object(o.a)(v,2),L=g[0],F=g[1],T=Object(c.useState)(f),E=Object(o.a)(T,2),I=E[0],A=E[1],B=Object(c.useState)(1),X=Object(o.a)(B,2),D=X[0],R=X[1];Object(c.useEffect)((function(){L>.65*m.width&&I>.65*m.height&&(_=!1,function(){H(),t(),++P===s.length&&(P=0);d(s[P]),F(O),A(f),R(1===P||2===P?-1:1)}())}));var z=Object(h.a)(w),H=Object(o.a)(z,1)[0];return Object(r.jsxs)("div",{onMouseMove:function(){!0===_&&(F(u-100),A(b-100),W=!1,a(!1))},className:"animalContainer",children:[Object(r.jsx)("img",{alt:"animal",draggable:"false",onMouseOver:function(){_=!0},style:{left:L,top:I,transform:"scaleX(".concat(D,")")},className:"animal",src:l}),Object(r.jsx)("img",{alt:"monster",className:"monster",src:k}),W&&Object(r.jsx)("img",{alt:"mouse",className:"mouseIcon",src:C})]})}var F=a.p+"static/media/wack.5b43c514.wav",T=a.p+"static/media/ostrich.0a69ad9d.wav",E=a.p+"static/media/mole-svgrepo-com.3b9a7bf2.svg",I=a.p+"static/media/ostrich-animal-svgrepo-com.cf9bde78.svg",A=a.p+"static/media/click-svgrepo-com.5d6ea1db.svg",B=a.p+"static/media/checked-tick-svgrepo-com.2acefe54.svg",X=a.p+"static/media/cancel-svgrepo-com.84cc0f9a.svg",D=!0;function R(e){document.body.style.backgroundColor="#B37C51";var t=Math.floor(80*Math.random())+10,a=Math.floor(80*Math.random())+10,s=Math.floor(80*Math.random())+10,n=Math.floor(80*Math.random())+10,i=Object(c.useState)(15),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(c.useState)(20),b=Object(o.a)(u,2),m=b[0],O=b[1],f=Object(c.useState)(80),v=Object(o.a)(f,2),g=v[0],p=v[1],x=Object(c.useState)(20),w=Object(o.a)(x,2),k=w[0],y=w[1],S=Object(h.a)(F),M=Object(o.a)(S,1)[0];var N=Object(h.a)(T),C=Object(o.a)(N,1)[0];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"moleContainer",children:[Object(r.jsx)("img",{alt:"mole",draggable:"false",src:E,className:"mole",style:{left:"".concat(d,"vw"),top:"".concat(m,"vh")},onClick:function(){D=!1,e.setPaused(!1),M(),e.handleClick(),j(t),O(a),p(s),y(n)}}),Object(r.jsx)("img",{alt:"ostrich",draggable:"false",src:I,className:"ostrich",style:{left:"".concat(g,"vw"),top:"".concat(k,"vh")},onClick:function(){D=!1,C(),e.losePoint(),j(t),O(a),p(s),y(n)}}),D&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{className:"click",alt:"click",src:A}),Object(r.jsxs)("div",{className:"exampleContainer",children:[Object(r.jsxs)("div",{className:"imgContainer",children:[Object(r.jsx)("img",{alt:"tick",className:"tick",src:B}),Object(r.jsx)("img",{alt:"cross",className:"cross",src:X})]}),Object(r.jsxs)("div",{className:"imgContainer",children:[Object(r.jsx)("img",{alt:"mole",className:"exampleMole",src:E}),Object(r.jsx)("img",{alt:"ostrich",className:"exampleMole",src:I})]})]})]})]})})}var z=a.p+"static/media/446115__justinvoke__wet-splat.8476d6d6.wav",H=a.p+"static/media/beetle-svgrepo-com.b7ee05b7.svg";function J(e){document.body.style.backgroundColor="darkolivegreen";var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],i=e.setPaused,l=x(),d=Math.floor((l.width-300)*Math.random())+150||200,j=Math.floor((l.height-100)*Math.random())||200,u=[Object(r.jsx)(J,{setPaused:i,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:d,top:j}},d/j),Object(r.jsx)(J,{setPaused:i,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:d,top:j}},d+j),Object(r.jsx)(J,{setPaused:i,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:d,top:j}},d-j)],b=Object(h.a)(z),m=Object(o.a)(b,1)[0];function O(){e.setPaused(!1),m(),n(u),e.handleWin()}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{setPaused:i,alt:"beetle",draggable:"false",className:"bug",src:H,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:d,top:j}},d*j),s]})}function K(e){document.body.style.backgroundColor="darkolivegreen";var t=e.handleWin,a=e.handleClick,c=e.setPaused;return Object(r.jsx)("div",{className:"duplicateContainer",children:Object(r.jsx)(J,{setPaused:c,handleWin:function(){return t()},handleClick:function(){return a()}})})}var Y=a.p+"static/media/bubbles.d8fe8dd0.wav",U=a.p+"static/media/fish-svgrepo-com.d9ce8d7e.svg",q=a.p+"static/media/fries-svgrepo-com.471be26b.svg",G=a.p+"static/media/pngwing.com.4162a0a9.png",Q=!0;function V(e){document.body.style.backgroundColor="cornflowerblue";var t=e.handleWin,a=e.setPaused,s=Math.floor(80*Math.random())+10,n=Math.floor(80*Math.random())+10,i=Object(c.useState)(70),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(c.useState)(50),b=Object(o.a)(u,2),m=b[0],O=b[1],f=Object(c.useState)(10),v=Object(o.a)(f,2),g=v[0],p=v[1],x=Object(c.useState)(10),w=Object(o.a)(x,2),k=w[0],y=w[1],S=Object(c.useState)(1),M=Object(o.a)(S,2),N=M[0],C=M[1];var P=Object(h.a)(Y),W=Object(o.a)(P,1)[0];return Object(r.jsxs)("div",{onKeyDown:function(e){Q=!1,a(!1),g-d>=-15&&g-d<=15&&k-m>=-15&&k-m<=15&&(j(s),O(n),W(),t()),"ArrowRight"===e.key&&(C(1),p(g+10)),"ArrowLeft"===e.key&&(C(-1),p(g-10)),"ArrowUp"===e.key&&y(k-10),"ArrowDown"===e.key&&y(k+10),g>100&&p(0),g<0&&p(100),k>100&&y(0),k<0&&y(100)},id:"fishy",className:"fishContainer",children:[Object(r.jsx)("input",{className:"hiddenInput",tabIndex:"1",autoFocus:!0}),Object(r.jsx)("img",{alt:"fish",className:"fish",style:{left:"".concat(g,"vw"),top:"".concat(k,"vh"),transform:"scaleX(".concat(N,")")},src:U}),Object(r.jsx)("img",{alt:"chips",className:"chips",style:{left:"".concat(d,"vw"),top:"".concat(m,"vh")},src:q}),Q&&Object(r.jsx)("img",{alt:"keys",className:"keys",src:G})]})}var Z=a.p+"static/media/429591__inspectorj__chewing-breadstick-single-d.6f5706e8.wav",$=a.p+"static/media/snail-svgrepo-com.3e4d7ab8.svg",ee=a.p+"static/media/leaf-svgrepo-com.8bee0ce6.svg",te=!0,ae=1e3;function ce(e){document.body.style.backgroundColor="rgb(159, 136, 86)";var t=p(),a=t.x,s=t.y,n=e.handleWin,i=e.setPaused,l=Math.floor(80*Math.random())+10,d=Math.floor(70*Math.random())+10,j=Object(c.useState)(l),u=Object(o.a)(j,2),b=u[0],m=u[1],O=Object(c.useState)(d),f=Object(o.a)(O,2),v=f[0],g=f[1],x=Object(c.useState)(200),w=Object(o.a)(x,2),k=w[0],y=w[1],S=Object(c.useState)(50),M=Object(o.a)(S,2),N=M[0],P=M[1],W=Object(c.useState)(1),_=Object(o.a)(W,2),L=_[0],F=_[1];var T=Object(h.a)(Z),E=Object(o.a)(T,1)[0];return Object(r.jsxs)("div",{onMouseMove:function(){return i(!1),te=!1,y(a-35),P(s-120),ae<a?F(1):ae>a&&F(-1),void(ae=a)},className:"raceWrapper",children:[Object(r.jsx)("img",{alt:"snail",draggable:"false",style:{left:k,top:N,transform:"scaleX(".concat(L,")")},className:"snail",src:$}),Object(r.jsx)("img",{draggable:"false",onMouseOver:function(){E(),m(l),g(d),n()},style:{left:"".concat(b,"vw"),top:"".concat(v,"vh")},alt:"finish",className:"finish",src:ee}),te&&Object(r.jsx)("img",{alt:"mouse",className:"mouseIcon",src:C})]})}var se=a.p+"static/media/duck-nature-bird-target-svgrepo-com.10c3325c.svg",ne=a.p+"static/media/duckwin.dbb4855f.wav",ie=a.p+"static/media/ducklose.7c32ac4f.wav";var oe=function(e){document.body.style.backgroundColor="#4db8ff";var t=e.losePoint,a=e.handleWin,s=e.setPaused,n=Math.floor(70*Math.random())+10,i=Math.floor(70*Math.random())+10,l=Object(c.useState)(40),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(c.useState)(40),m=Object(o.a)(b,2),O=m[0],f=m[1],v=Object(c.useState)("m"),g=Object(o.a)(v,2),p=g[0],x=g[1],w=Math.floor(25*Math.random()+97),k=Object(h.a)(ne),y=Object(o.a)(k,1)[0],S=Object(h.a)(ie),M=Object(o.a)(S,1)[0];return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{onKeyPress:function(e){return c=e,s(!1),void(c.key===p?(y(),f(n),u(i),x(String.fromCharCode(w)),a()):(M(),t()));var c},className:"hiddenInput",tabIndex:"1",autoFocus:!0}),Object(r.jsxs)("div",{style:{left:"".concat(O,"vw"),top:"".concat(j,"vh")},className:"letterContainer",children:[Object(r.jsx)("img",{className:"duck",src:se,alt:"duck"}),Object(r.jsx)("p",{className:"letter",children:p})]})]})},re=a.p+"static/media/deer-facing-right-svgrepo-com.0d5a4aaf.svg",le=a.p+"static/media/lion-facing-right-svgrepo-com.db03a83c.svg",de=a.p+"static/media/337049__shinephoenixstormcrow__320655-rhodesmas-level-up-01.8db1f46b.mp3";function je(e){document.body.style.backgroundColor="white";var t=e.score,a=e.setPaused,c=e.resetScore,s=e.setShowTimer,n=Object(h.a)(de);return(0,Object(o.a)(n,1)[0])(),a(!0),s(!1),Object(r.jsxs)("div",{className:"end",children:[Object(r.jsx)("img",{alt:"deer",className:"deer",src:re}),Object(r.jsx)("img",{alt:"lion",className:"lion",src:le}),Object(r.jsx)("h3",{children:"Congratulations, you finished!"}),Object(r.jsxs)("h4",{children:["You got ",Object(r.jsx)("strong",{children:t})," points! "]}),Object(r.jsx)("h2",{onClick:c,children:"try again?"})]})}a.p,a.p,a.p,a.p,a.p,a.p;var ue=a.p+"static/media/342749__rhodesmas__notification-01.bb71d5b8.wav",be=0;function me(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(o.a)(n,2),l=i[0],d=i[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),O=u[0],f=u[1],v=Object(c.useState)(!0),p=Object(o.a)(v,2),x=p[0],w=p[1],k=Object(c.useState)(0),y=Object(o.a)(k,2),S=y[0],M=y[1],N=Object(c.useState)(!1),C=Object(o.a)(N,2),P=C[0],W=C[1],_=Object(c.useState)(!1),F=Object(o.a)(_,2),T=F[0],E=F[1],I=Object(h.a)(ue),A=Object(o.a)(I,1)[0],B=[Object(r.jsx)(g,{setPaused:w,setShowTimer:E,handleLose:U}),Object(r.jsx)(L,{setPaused:w,handleWin:function(){return J()}}),Object(r.jsx)(oe,{handleWin:function(){return J()},losePoint:Y,setPaused:w}),Object(r.jsx)(R,{setPaused:w,handleClick:function(){return J()},losePoint:Y}),Object(r.jsx)(K,{setPaused:w,handleWin:function(){return J()},handleClick:function(){return q()}}),Object(r.jsx)(V,{setPaused:w,handleWin:function(){return J()}}),Object(r.jsx)(ce,{setPaused:w,handleClick:function(){return q()},handleWin:function(){return J()}}),Object(r.jsx)(je,{score:S,setPaused:w,resetScore:function(){U(),W(!0)},setShowTimer:E})],X=Object(c.useState)(B[be]),D=Object(o.a)(X,2),z=D[0],H=D[1];function J(){d(!0)}function Y(){f(!0)}function U(){++be===B.length&&(be=0),H(B[be]),be>1&&be<B.length-1&&A(),w(!0)}function q(){U(),s(!0),d(!0)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"topBar",children:[Object(r.jsx)(m,{reset:P,paused:x,setMove:function(){return s()},move:a,handleLose:function(){return U()},showTimer:T}),Object(r.jsx)("span",{className:"title",children:"animalympics"}),Object(r.jsx)(b,{setWin:function(){return d()},win:l,setLose:function(){return f()},lose:O,setFinalScore:M,reset:P,setReset:W})]}),z]})}var he=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),he()}},[[12,1,2]]]);
//# sourceMappingURL=main.c04434bc.chunk.js.map