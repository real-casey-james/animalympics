(this.webpackJsonpanimalympics=this.webpackJsonpanimalympics||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),o=a(2),i=(a(10),a(0)),u=0,l=0,d=!1,j=!1;function b(e){var t=e.win,a=e.setWin,s=e.lose,n=e.setLose,r=e.setFinalScore,o=e.reset,b=e.setReset;return Object(c.useEffect)((function(){!0===o&&(u=0,d=!0,r(0),b(!1)),!0===t&&(j=!0,u++,r(u),a(!1)),u>l&&(l=u),!0===s&&(u--,n(!1))})),Object(i.jsxs)("div",{children:[d&&Object(i.jsxs)("span",{className:"score",children:["Highscore: ",Object(i.jsx)("strong",{children:l})," "]}),j&&Object(i.jsxs)("span",{className:"score",children:["Score: ",Object(i.jsx)("strong",{children:u})," "]})]})}function m(e){var t=e.move,a=e.setMove,s=e.handleLose,n=e.paused,r=e.reset,u=e.showTimer,l=Object(c.useState)(7),d=Object(o.a)(l,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){var e;if(!0===r&&b(7),!0===n)return null;!0===t?(clearTimeout(e),a(!1),b(7)):j>0?e=setTimeout((function(){return b(j-1)}),1e3):(clearTimeout(e),b(7),s())}),[j,n]),Object(i.jsx)("div",{children:u&&Object(i.jsxs)("span",{className:"time",children:["Time left: ",Object(i.jsx)("strong",{children:j})]})})}var f=a(3),O=a.p+"static/media/roar.abfd9b14.wav",v=a.p+"static/media/toucan-animals-svgrepo-com.dde4c4f9.svg",h=a.p+"static/media/animal-dog-svgrepo-com.6de7b05a.svg";function g(e){document.body.style.backgroundColor="white";var t=e.setPaused,a=e.handleLose,c=e.setShowTimer,s=Object(f.a)(O),n=Object(o.a)(s,1)[0];return Object(i.jsxs)("div",{className:"start",children:[Object(i.jsx)("img",{alt:"toucan",className:"toucan",src:v}),Object(i.jsx)("img",{alt:"doge",className:"doge",src:h}),Object(i.jsx)("div",{}),Object(i.jsx)("h2",{onClick:function(){n(),t(!1),c(!0),a()},children:"start"}),Object(i.jsx)("h4",{children:"it's like the olympics but for animals"})]})}var p=function(){var e=Object(c.useState)({x:null,y:null}),t=Object(o.a)(e,2),a=t[0],s=t[1],n=function(e){s({x:e.clientX,y:e.clientY})};return Object(c.useEffect)((function(){return window.addEventListener("mousemove",n),function(){return window.removeEventListener("mousemove",n)}}),[]),a};function x(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}var w=a.p+"static/media/172134__paulmorek__nom-d-01.18b33ba0.wav",y=a.p+"static/media/halloween-monster-animal-head-with-big-open-mouth-svgrepo-com.372c5c01.svg",N=a.p+"static/media/cow-animals-svgrepo-com.e6d9f8d7.svg",C=a.p+"static/media/sheep-animals-svgrepo-com.50df9e15.svg",k=a.p+"static/media/swan-animals-svgrepo-com.ea8f0733.svg",S=a.p+"static/media/rabbit-animals-svgrepo-com.34649119.svg",P=a.p+"static/media/mouse-svgrepo-com.49baec91.svg",M=0,W=!0,_=!1,F=!0;function I(e){var t=e.handleWin,a=e.setPaused,s=(e.paused,Object(c.useState)("rgb(255, 255, 255)")),n=Object(o.a)(s,2),r=n[0],u=n[1];document.body.style.backgroundColor=r;var l=255,d=255;Object(c.useEffect)((function(){if(!1===F){var e=setInterval((function(){d--,u("rgb(".concat(l-=2,", ").concat(d,", 255)"))}),200);return function(){return clearInterval(e)}}}),[F]);var j=[C,N,S,k],b=Object(c.useState)(j[M]),m=Object(o.a)(b,2),O=m[0],v=m[1],h=p(),g=h.x,I=h.y,E=x(),L=Math.floor(.7*E.width*Math.random())||150,T=Math.floor((E.height-130)*Math.random())||150,Y=Object(c.useState)(L),D=Object(o.a)(Y,2),z=D[0],A=D[1],B=Object(c.useState)(T),X=Object(o.a)(B,2),q=X[0],R=X[1],U=Object(c.useState)(1),H=Object(o.a)(U,2),J=H[0],K=H[1];Object(c.useEffect)((function(){z>.65*E.width&&q>.65*E.height&&(_=!1,function(){Q(),t(),++M===j.length&&(M=0);v(j[M]),A(L),R(T),K(1===M||2===M?-1:1)}())}));var G=Object(f.a)(w),Q=Object(o.a)(G,1)[0];return Object(i.jsxs)("div",{onMouseMove:function(){!0===_&&(A(g-100),R(I-100),W=!1,F=!1,a(!1))},className:"animalContainer",children:[Object(i.jsx)("img",{alt:"animal",draggable:"false",onMouseOver:function(){_=!0},style:{left:z,top:q,transform:"scaleX(".concat(J,")")},className:"animal",src:O}),Object(i.jsx)("img",{alt:"monster",className:"monster",src:y}),W&&Object(i.jsx)("img",{alt:"mouse",className:"mouseIcon",src:P})]})}var E=a.p+"static/media/wack.5b43c514.wav",L=a.p+"static/media/ostrich.0a69ad9d.wav",T=a.p+"static/media/mole-svgrepo-com.3b9a7bf2.svg",Y=a.p+"static/media/ostrich-animal-svgrepo-com.cf9bde78.svg",D=a.p+"static/media/click-svgrepo-com.5d6ea1db.svg",z=a.p+"static/media/checked-tick-svgrepo-com.2acefe54.svg",A=a.p+"static/media/cancel-svgrepo-com.84cc0f9a.svg",B=a.p+"static/media/bat-svgrepo-com.70586465.svg",X=!0;function q(e){document.body.style.backgroundColor="#B37C51";var t=p(),a=t.x,s=t.y,n=Math.floor(80*Math.random())+10,r=Math.floor(80*Math.random())+10,u=Math.floor(80*Math.random())+10,l=Math.floor(80*Math.random())+10,d=Object(c.useState)(15),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(c.useState)(20),v=Object(o.a)(O,2),h=v[0],g=v[1],x=Object(c.useState)(80),w=Object(o.a)(x,2),y=w[0],N=w[1],C=Object(c.useState)(20),k=Object(o.a)(C,2),S=k[0],P=k[1],M=Object(c.useState)(a),W=Object(o.a)(M,2),_=W[0],F=W[1],I=Object(c.useState)(s),q=Object(o.a)(I,2),R=q[0],U=q[1],H=Object(c.useState)(0),J=Object(o.a)(H,2),K=J[0],G=J[1];var Q=Object(f.a)(E),V=Object(o.a)(Q,1)[0];var Z=Object(f.a)(L),$=Object(o.a)(Z,1)[0];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"moleContainer",onMouseMove:function(){return F(a-240),void U(s-50)},onMouseDown:function(){return G(10),void(X=!1)},onMouseUp:function(){G(0)},children:[Object(i.jsx)("img",{alt:"mole",draggable:"false",src:T,className:"mole",style:{left:"".concat(b,"vw"),top:"".concat(h,"vh")},onClick:function(){X=!1,e.setPaused(!1),V(),e.handleClick(),m(n),g(r),N(u),P(l)}}),Object(i.jsx)("img",{alt:"ostrich",draggable:"false",src:Y,className:"ostrich",style:{left:"".concat(y,"vw"),top:"".concat(S,"vh")},onClick:function(){X=!1,e.setPaused(!1),$(),e.losePoint(),m(n),g(r),N(u),P(l)}}),Object(i.jsx)("img",{className:"bat",src:B,alt:"",style:{left:_,top:R,transform:"skewY(".concat(K,"deg)")}}),X&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{className:"click",alt:"click",src:D}),Object(i.jsxs)("div",{className:"exampleContainer",children:[Object(i.jsxs)("div",{className:"imgContainer",children:[Object(i.jsx)("img",{alt:"tick",className:"tick",src:z}),Object(i.jsx)("img",{alt:"cross",className:"cross",src:A})]}),Object(i.jsxs)("div",{className:"imgContainer",children:[Object(i.jsx)("img",{alt:"mole",className:"exampleMole",src:T}),Object(i.jsx)("img",{alt:"ostrich",className:"exampleMole",src:Y})]})]})]})]})})}var R=a.p+"static/media/446115__justinvoke__wet-splat.8476d6d6.wav",U=a.p+"static/media/beetle-svgrepo-com.b7ee05b7.svg";function H(e){document.body.style.backgroundColor="darkolivegreen";var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],r=e.setPaused,u=x(),l=Math.floor((u.width-300)*Math.random())+150||200,d=Math.floor((u.height-100)*Math.random())||200,j=[Object(i.jsx)(H,{setPaused:r,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:l,top:d}},l/d),Object(i.jsx)(H,{setPaused:r,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:l,top:d}},l+d),Object(i.jsx)(H,{setPaused:r,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:l,top:d}},l-d)],b=Object(f.a)(R),m=Object(o.a)(b,1)[0];function O(){e.setPaused(!1),m(),n(j),e.handleWin()}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{setPaused:r,alt:"beetle",draggable:"false",className:"bug",src:U,handleWin:function(){return e.handleWin()},onClick:function(){return O()},style:{left:l,top:d}},l*d),s]})}function J(e){document.body.style.backgroundColor="darkolivegreen";var t=e.handleWin,a=e.handleClick,c=e.setPaused;return Object(i.jsx)("div",{className:"duplicateContainer",children:Object(i.jsx)(H,{setPaused:c,handleWin:function(){return t()},handleClick:function(){return a()}})})}var K=a.p+"static/media/bubbles.d8fe8dd0.wav",G=a.p+"static/media/fish-svgrepo-com.d9ce8d7e.svg",Q=a.p+"static/media/fries-svgrepo-com.471be26b.svg",V=a.p+"static/media/pngwing.com.4162a0a9.png",Z=a.p+"static/media/seaweed-svgrepo-com.55c60aef.svg",$=!0;function ee(e){document.body.style.backgroundColor="rgb(0, 115, 230)";var t=e.handleWin,a=e.setPaused,s=Math.floor(80*Math.random())+10,n=Math.floor(80*Math.random())+10,r=Object(c.useState)(70),u=Object(o.a)(r,2),l=u[0],d=u[1],j=Object(c.useState)(50),b=Object(o.a)(j,2),m=b[0],O=b[1],v=Object(c.useState)(10),h=Object(o.a)(v,2),g=h[0],p=h[1],x=Object(c.useState)(10),w=Object(o.a)(x,2),y=w[0],N=w[1],C=Object(c.useState)(1),k=Object(o.a)(C,2),S=k[0],P=k[1];var M=Object(f.a)(K),W=Object(o.a)(M,1)[0];return Object(c.useEffect)((function(){g-l>=-10&&g-l<=10&&y-m>=-10&&y-m<=10&&(d(s),O(n),W(),t())}),[g,y]),Object(i.jsxs)("div",{onKeyDown:function(e){$=!1,a(!1),"ArrowRight"===e.key&&(P(1),p(g+10)),"ArrowLeft"===e.key&&(P(-1),p(g-10)),"ArrowUp"===e.key&&N(y-10),"ArrowDown"===e.key&&N(y+10),g>100&&p(0),g<0&&p(100),y>100&&N(0),y<0&&N(100)},id:"fishy",className:"fishContainer",children:[Object(i.jsx)("input",{className:"hiddenInput",tabIndex:"1",autoFocus:!0}),Object(i.jsx)("img",{alt:"fish",className:"fish",style:{left:"".concat(g,"vw"),top:"".concat(y,"vh"),transform:"scaleX(".concat(S,")")},src:G}),Object(i.jsx)("img",{alt:"chips",className:"chips",style:{left:"".concat(l,"vw"),top:"".concat(m,"vh")},src:Q}),$&&Object(i.jsx)("img",{alt:"keys",className:"keys",src:V}),Object(i.jsx)("img",{className:"seaweed",src:Z,alt:""}),Object(i.jsx)("img",{className:"seaweed2",src:Z,alt:""})]})}var te=a.p+"static/media/429591__inspectorj__chewing-breadstick-single-d.6f5706e8.wav",ae=a.p+"static/media/snail-svgrepo-com.3e4d7ab8.svg",ce=a.p+"static/media/leaf-svgrepo-com.8bee0ce6.svg",se=!0,ne=1e3;function re(e){var t=e.handleWin,a=e.setPaused;document.body.style.backgroundColor="rgb(159, 136, 86)";var s=p(),n=s.x,r=s.y,u=Math.floor(80*Math.random())+10,l=Math.floor(70*Math.random())+10,d=Object(c.useState)(u),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(c.useState)(l),v=Object(o.a)(O,2),h=v[0],g=v[1],x=Object(c.useState)(200),w=Object(o.a)(x,2),y=w[0],N=w[1],C=Object(c.useState)(50),k=Object(o.a)(C,2),S=k[0],M=k[1],W=Object(c.useState)(1),_=Object(o.a)(W,2),F=_[0],I=_[1];var E=Object(f.a)(te),L=Object(o.a)(E,1)[0];return Object(i.jsxs)("div",{onMouseMove:function(){return N(n-35),M(r-120),ne<n?I(1):ne>n&&I(-1),void(ne=n)},className:"raceWrapper",children:[Object(i.jsx)("img",{alt:"snail",draggable:"false",style:{left:y,top:S,transform:"scaleX(".concat(F,")")},className:"snail",src:ae}),Object(i.jsx)("img",{draggable:"false",onMouseOver:function(){a(!1),se=!1,L(),m(u),g(l),t()},style:{left:"".concat(b,"vw"),top:"".concat(h,"vh")},alt:"finish",className:"finish",src:ce}),se&&Object(i.jsx)("img",{alt:"mouse",className:"mouseIcon",src:P})]})}var oe=a.p+"static/media/duck-nature-bird-target-svgrepo-com.10c3325c.svg",ie=a.p+"static/media/duckwin.dbb4855f.wav",ue=a.p+"static/media/ducklose.7c32ac4f.wav";var le=function(e){document.body.style.backgroundColor="#4db8ff";var t=e.losePoint,a=e.handleWin,s=e.setPaused,n=Math.floor(70*Math.random())+10,r=Math.floor(70*Math.random())+10,u=Object(c.useState)(40),l=Object(o.a)(u,2),d=l[0],j=l[1],b=Object(c.useState)(40),m=Object(o.a)(b,2),O=m[0],v=m[1],h=Object(c.useState)("m"),g=Object(o.a)(h,2),p=g[0],x=g[1],w=Math.floor(25*Math.random()+97),y=Object(f.a)(ie),N=Object(o.a)(y,1)[0],C=Object(f.a)(ue),k=Object(o.a)(C,1)[0];return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{onKeyPress:function(e){return c=e,s(!1),void(c.key===p?(N(),v(n),j(r),x(String.fromCharCode(w)),a()):(k(),t()));var c},className:"hiddenInput",tabIndex:"1",autoFocus:!0}),Object(i.jsxs)("div",{style:{left:"".concat(O,"vw"),top:"".concat(d,"vh")},className:"letterContainer",children:[Object(i.jsx)("img",{className:"duck",src:oe,alt:"duck"}),Object(i.jsx)("p",{className:"letter",children:p})]})]})},de=a.p+"static/media/baby-animal-shaped-plate-svgrepo-com.f50ee51e.svg",je=a.p+"static/media/burger-svgrepo-com.46d6d7e1.svg",be=a.p+"static/media/burrito-svgrepo-com.a247d544.svg",me=a.p+"static/media/donut-svgrepo-com.502a36ba.svg",fe=a.p+"static/media/pizza-svgrepo-com.39ffc60d.svg",Oe=a.p+"static/media/campfire-svgrepo-com.76ee865a.svg",ve=a.p+"static/media/445974__breviceps__cartoon-slurp.fb6b807e.wav",he=a.p+"static/media/burn.f28d9878.wav",ge=0;var pe=function(e){document.body.style.backgroundColor="#ffb3b3";var t=p().x,a=Object(c.useState)(t),s=Object(o.a)(a,2),n=s[0],r=s[1],u=e.handleWin,l=e.losePoint,d=[je,be,me,fe,Oe],j=x(),b=Math.floor(80*Math.random())+10,m=Object(c.useState)(d[0]),O=Object(o.a)(m,2),v=O[0],h=O[1],g=Object(c.useState)(25),w=Object(o.a)(g,2),y=w[0],N=w[1],C=Object(f.a)(ve),k=Object(o.a)(C,1)[0],S=Object(f.a)(he),P=Object(o.a)(S,1)[0];return Object(c.useEffect)((function(){y*j.width/100-t>-200&&y*j.width/100-t<200&&(0!==ge?(k(),u(!0)):0===ge&&(P(),l(!0))),setTimeout((function(){++ge===d.length&&(ge=0),h(d[ge]),N(b)}),1e3)}),[v]),Object(i.jsxs)("div",{className:"foodWrapper",onMouseMove:function(){r(t-100)},children:[Object(i.jsx)("img",{className:"plate",src:de,alt:"plate",style:{left:n}}),Object(i.jsx)("img",{src:v,alt:"food",className:"food",style:{left:"".concat(y,"vw")}})]})};var xe=function(e){document.body.style.backgroundColor="#ffb3b3";var t=p().x,a=Object(c.useState)(t),s=Object(o.a)(a,2),n=s[0],r=s[1];return Object(i.jsxs)("div",{className:"foodWrapper",onMouseMove:function(){r(t-100)},onClick:function(){return e.advanceComponent()},children:[Object(i.jsx)("img",{className:"plate",src:de,alt:"plate",style:{left:n}}),Object(i.jsxs)("div",{className:"imgContainer",children:[Object(i.jsx)("img",{alt:"tick",className:"tick",src:z}),Object(i.jsx)("img",{alt:"cross",className:"cross",src:A})]}),Object(i.jsxs)("div",{className:"exampleFoodfallContainer",children:[Object(i.jsxs)("div",{className:"exFoodContainer",children:[Object(i.jsx)("img",{className:"exampleFood",src:je,alt:""}),Object(i.jsx)("img",{className:"exampleFood",src:fe,alt:""}),Object(i.jsx)("img",{className:"exampleFood",src:be,alt:""}),Object(i.jsx)("img",{className:"exampleFood",src:me,alt:""})]}),Object(i.jsx)("img",{className:"exampleFood",src:Oe,alt:""})]})]})},we=a.p+"static/media/squeek.6837caa7.wav",ye=a.p+"static/media/99636__tomlija__small-crowd-yelling-yeah.8e049e25.wav",Ne=a.p+"static/media/turtle-svgrepo-com.28d281f8.svg",Ce=!0;var ke=function(e){document.body.style.backgroundColor="#88cc00";var t=e.setPaused,a=e.handleWin,s=Object(c.useState)(5),n=Object(o.a)(s,2),r=n[0],u=n[1],l=Object(f.a)(we),d=Object(o.a)(l,1)[0],j=Object(f.a)(ye),b=Object(o.a)(j,1)[0];return Object(i.jsxs)("div",{onClick:function(){return Ce=!1,d(),t(!1),u(r+5),void(r>85&&(b(),a(!0),u(0)))},className:"clickWrapper",children:[Object(i.jsx)("img",{className:"turtle",src:Ne,alt:"",style:{left:"".concat(r,"vw")}}),Object(i.jsx)("div",{className:"finishLine"}),Ce&&Object(i.jsx)("img",{className:"clickLots",alt:"click",src:D})]})},Se=a.p+"static/media/swat.0cde323f.wav",Pe=a.p+"static/media/fly-insect-svgrepo-com.f5f6be01.svg",Me=a.p+"static/media/splatter-svgrepo-com.eab25a88.svg";function We(e){var t=e.handleWin,a=e.top,s=e.left,n=e.setPaused,r=e.increaseCounter,u=p(),l=u.x,d=u.y,j=Object(c.useState)(Pe),b=Object(o.a)(j,2),m=b[0],O=b[1],v=Object(c.useState)("fly"),h=Object(o.a)(v,2),g=h[0],x=h[1],w=Object(c.useState)(s),y=Object(o.a)(w,2),N=y[0],C=y[1],k=Object(c.useState)(a),S=Object(o.a)(k,2),P=S[0],M=S[1],W=Object(f.a)(Se),_=Object(o.a)(W,1)[0];return Object(i.jsx)("div",{children:Object(i.jsx)("img",{draggable:"false",style:{left:N,top:P},className:g,src:m,alt:"fly",onClick:function(){return n(!1),r(),_(),C(l-50),M(d-50),O(Me),x("splatClass"),void t()}})})}var _e=a.p+"static/media/349204__natty23__light-squash.247fa403.wav",Fe=a.p+"static/media/butterfly-svgrepo-com.0c23428e.svg",Ie=a.p+"static/media/nmOO979-blood-vector.12120e72.svg";var Ee=function(e){var t=e.losePoint,a=e.top,s=e.left,n=e.setPaused,r=p(),u=r.x,l=r.y,d=Object(c.useState)(Fe),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(c.useState)("fly"),v=Object(o.a)(O,2),h=v[0],g=v[1],x=Object(c.useState)(s),w=Object(o.a)(x,2),y=w[0],N=w[1],C=Object(c.useState)(a),k=Object(o.a)(C,2),S=k[0],P=k[1],M=Object(f.a)(_e),W=Object(o.a)(M,1)[0];return Object(i.jsx)("div",{children:Object(i.jsx)("img",{draggable:"false",style:{left:y,top:S},className:h,src:b,alt:"butterfly",onClick:function(){return n(!1),W(),N(u-100),P(l-100),m(Ie),g("butterflySplatClass"),void t()}})})},Le=a.p+"static/media/fly-swatter-svgrepo-com.0005a721.svg",Te=!0,Ye=0;var De=function(e){document.body.style.backgroundColor="#df80ff";var t=e.setPaused,a=e.handleWin,s=e.losePoint,n=p(),r=n.x,u=n.y,l=Object(c.useState)(200),d=Object(o.a)(l,2),j=d[0],b=d[1],m=Object(c.useState)(50),f=Object(o.a)(m,2),O=f[0],v=f[1],h=Object(c.useState)(0),g=Object(o.a)(h,2),x=g[0],w=g[1];function y(){Ye++,Te=!1}return Object(i.jsxs)("div",{draggable:"false",className:"swatContainer",onMouseMove:function(){return b(r-150),void v(u-50)},onMouseDown:function(){w(20)},onMouseUp:function(){w(0)},children:[Object(i.jsx)("img",{draggable:"false",className:"swat",src:Le,style:{left:j,top:O,transform:"skewY(".concat(x,"deg)")},alt:"swat"}),Ye>=0&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"20vh",left:"15vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=0&&Object(i.jsx)(Ee,{losePoint:function(){return s()},top:"80vh",left:"75vw",setPaused:function(){return t()}}),Ye>=1&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"70vh",left:"55vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=2&&Object(i.jsx)(Ee,{losePoint:function(){return s()},top:"20vh",left:"45vw",setPaused:function(){return t()}}),Ye>=2&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"80vh",left:"15vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=3&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"40vh",left:"35vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=4&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"15vh",left:"75vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=5&&Object(i.jsx)(Ee,{losePoint:function(){return s()},top:"50vh",left:"10vw",setPaused:function(){return t()}}),Ye>=5&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"80vh",left:"15vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=6&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"40vh",left:"75vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=7&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"70vh",left:"35vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=8&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"10vh",left:"5vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=9&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"40vh",left:"60vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=10&&Object(i.jsx)(Ee,{losePoint:function(){return s()},top:"80vh",left:"25vw",setPaused:function(){return t()}}),Ye>=10&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"70vh",left:"5vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=11&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"10vh",left:"80vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=12&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"10vh",left:"60vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=13&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"20vh",left:"30vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=14&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"40vh",left:"20vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=15&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"50vh",left:"50vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Ye>=16&&Object(i.jsx)(We,{handleWin:function(){return a()},top:"60vh",left:"20vw",setPaused:function(){return t()},increaseCounter:function(){return y()}}),Te&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{className:"click",alt:"click",src:D}),Object(i.jsxs)("div",{className:"exampleContainer",children:[Object(i.jsxs)("div",{className:"imgContainer",children:[Object(i.jsx)("img",{alt:"tick",className:"tick",src:z}),Object(i.jsx)("img",{alt:"cross",className:"cross",src:A})]}),Object(i.jsxs)("div",{className:"imgContainer",children:[Object(i.jsx)("img",{alt:"mole",className:"exampleMole",src:Pe}),Object(i.jsx)("img",{alt:"ostrich",className:"exampleMole",src:Fe})]})]})]})]})},ze=a.p+"static/media/deer-facing-right-svgrepo-com.0d5a4aaf.svg",Ae=a.p+"static/media/lion-facing-right-svgrepo-com.db03a83c.svg",Be=a.p+"static/media/337049__shinephoenixstormcrow__320655-rhodesmas-level-up-01.8db1f46b.mp3";function Xe(e){document.body.style.backgroundColor="white";var t=e.score,a=e.setPaused,c=e.resetScore,s=e.setShowTimer,n=Object(f.a)(Be);return(0,Object(o.a)(n,1)[0])(),a(!0),s(!1),Object(i.jsxs)("div",{className:"end",children:[Object(i.jsx)("img",{alt:"deer",className:"deer",src:ze}),Object(i.jsx)("img",{alt:"lion",className:"lion",src:Ae}),Object(i.jsx)("h3",{children:"Congratulations, you finished!"}),Object(i.jsxs)("h4",{children:["You got ",Object(i.jsx)("strong",{children:t})," points! "]}),Object(i.jsx)("h2",{onClick:c,children:"try again?"})]})}var qe=a.p+"static/media/frame-1v.c877ae36.svg",Re=a.p+"static/media/frame-2v.ce8c5aff.svg",Ue=a.p+"static/media/frame-3v.4b639fe8.svg",He=a.p+"static/media/frame-4v.caf4eb4a.svg",Je=a.p+"static/media/frame-5v.9add1490.svg",Ke=a.p+"static/media/frame-6v.891e7f5f.svg",Ge=a.p+"static/media/frame-7v.a171e5f6.svg",Qe=a.p+"static/media/frame-8v.22c6e525.svg",Ve=a.p+"static/media/squawk.0b187683.wav",Ze=0;var $e=function(e){var t=e.randomYindex,a=e.handleWin,s=[qe,Re,Ue,He,Je,Ke,Ge,Qe],n=Object(c.useState)(s[Ze]),r=Object(o.a)(n,2),u=r[0],l=r[1],d=Object(c.useState)(t),j=Object(o.a)(d,2),b=j[0],m=j[1];Object(c.useEffect)((function(){var e=setInterval((function(){++Ze===s.length-1&&(Ze=0),l(s[Ze])}),100);return function(){return clearInterval(e)}}),[]);var O=Object(f.a)(Ve),v=Object(o.a)(O,1)[0];return Object(i.jsx)("div",{children:Object(i.jsx)("img",{draggable:"false",onClick:function(){return function(){v(),a();var e=b,t=setInterval((function(){m(e+=1),e>100&&clearInterval(t)}),10);return function(){return clearInterval(t)}}()},className:"bird",style:{top:"".concat(b,"vh")},src:u,alt:"bird"})})},et=a.p+"static/media/crosshairs-solid-svgrepo-com.1c466f93.svg",tt=a.p+"static/media/cloud-svgrepo-com-2.0c778214.svg",at=a.p+"static/media/cloud-svgrepo-com.a632893a.svg",ct=a.p+"static/media/clouds-cloud-svgrepo-com.8b06b886.svg",st=a.p+"static/media/bang.eaf2fbaa.wav",nt=!0;var rt=function(e){var t=e.setPaused,a=e.handleWin,s=Object(c.useState)("rgb(179, 217, 255)"),n=Object(o.a)(s,2),r=n[0],u=n[1];document.body.style.backgroundColor=r;var l=179,d=217,j=255;Object(c.useEffect)((function(){if(!1===nt){var e=setInterval((function(){l-=5.11,d-=3.43,j-=.71,u("rgb(".concat(Math.floor(l),", ").concat(Math.floor(d),", ").concat(Math.floor(j),")"))}),200);return function(){return clearInterval(e)}}}),[nt]);var b=p(),m=b.x,O=b.y,v=Object(c.useState)(m),h=Object(o.a)(v,2),g=h[0],x=h[1],w=Object(c.useState)(O),y=Object(o.a)(w,2),N=y[0],C=y[1],k=[Object(i.jsx)($e,{handleWin:function(){return a()},randomYindex:40})],S=Object(c.useState)(k),P=Object(o.a)(S,2),M=P[0],W=P[1];Object(c.useEffect)((function(){if(!1===nt){var e=setInterval((function(){var e=Math.floor(80*Math.random());k.push(Object(i.jsx)($e,{handleWin:function(){return a()},randomYindex:e})),W([].concat(k))}),500);return function(){return clearInterval(e)}}}),[nt]);var _=Object(f.a)(st),F=Object(o.a)(_,1)[0];return Object(i.jsxs)("div",{className:"birdWrapper",onMouseMove:function(){return x(m-55),void C(O-55)},onClick:function(){return F(),t(!1),void(nt=!1)},children:[M,Object(i.jsx)("img",{className:"crosshairs",src:et,alt:"",style:{left:g,top:N}}),Object(i.jsx)("img",{className:"cloud1",src:tt,alt:""}),Object(i.jsx)("img",{className:"cloud2",src:at,alt:""}),Object(i.jsx)("img",{className:"cloud3",src:ct,alt:""})]})},ot=a.p+"static/media/342749__rhodesmas__notification-01.bb71d5b8.wav",it=0;function ut(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(o.a)(n,2),u=r[0],l=r[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),O=j[0],v=j[1],h=Object(c.useState)(!0),p=Object(o.a)(h,2),x=p[0],w=p[1],y=Object(c.useState)(0),N=Object(o.a)(y,2),C=N[0],k=N[1],S=Object(c.useState)(!1),P=Object(o.a)(S,2),M=P[0],W=P[1],_=Object(c.useState)(!1),F=Object(o.a)(_,2),E=F[0],L=F[1],T=Object(f.a)(ot),Y=Object(o.a)(T,1)[0],D=[Object(i.jsx)(g,{setPaused:w,setShowTimer:L,handleLose:H}),Object(i.jsx)(I,{paused:x,setPaused:w,handleWin:function(){return R()}}),Object(i.jsx)(rt,{setPaused:w,handleWin:function(){return R()}}),Object(i.jsx)(ee,{setPaused:w,handleWin:function(){return R()}}),Object(i.jsx)(q,{setPaused:w,handleClick:function(){return R()},losePoint:U}),Object(i.jsx)(xe,{advanceComponent:function(){it++,X(D[it]),w(!1)}}),Object(i.jsx)(pe,{handleWin:function(){return R()},losePoint:U,setPaused:w}),Object(i.jsx)(De,{setPaused:w,handleWin:function(){return R()},losePoint:U}),Object(i.jsx)(le,{handleWin:function(){return R()},losePoint:U,setPaused:w}),Object(i.jsx)(ke,{setPaused:w,handleWin:function(){return R()}}),Object(i.jsx)(J,{setPaused:w,handleWin:function(){return R()},handleClick:function(){return K()}}),Object(i.jsx)(re,{setPaused:w,handleClick:function(){return K()},handleWin:function(){return R()}}),Object(i.jsx)(Xe,{score:C,setPaused:w,resetScore:function(){H(),W(!0)},setShowTimer:L})],z=Object(c.useState)(D[it]),A=Object(o.a)(z,2),B=A[0],X=A[1];function R(){l(!0)}function U(){v(!0)}function H(){++it===D.length&&(it=0),X(D[it]),it>1&&it<D.length-1&&Y(),w(!0)}function K(){H(),s(!0),l(!0)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"topBar",children:[Object(i.jsx)(m,{reset:M,paused:x,setMove:function(){return s()},move:a,handleLose:function(){return H()},showTimer:E}),Object(i.jsx)("span",{className:"title",children:"animalympics"}),Object(i.jsx)(b,{setWin:function(){return l()},win:u,setLose:function(){return v()},lose:O,setFinalScore:k,reset:M,setReset:W})]}),B]})}var lt=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(ut,{})}),document.getElementById("root")),lt()}},[[12,1,2]]]);
//# sourceMappingURL=main.f594f470.chunk.js.map