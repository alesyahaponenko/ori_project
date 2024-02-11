(()=>{var xT=Object.create;var Dc=Object.defineProperty;var ST=Object.getOwnPropertyDescriptor;var MT=Object.getOwnPropertyNames;var bT=Object.getPrototypeOf,wT=Object.prototype.hasOwnProperty;var TT=(r,e,t)=>e in r?Dc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ee=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ET=(r,e)=>{for(var t in e)Dc(r,t,{get:e[t],enumerable:!0})},AT=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of MT(e))!wT.call(r,i)&&i!==t&&Dc(r,i,{get:()=>e[i],enumerable:!(n=ST(e,i))||n.enumerable});return r};var da=(r,e,t)=>(t=r!=null?xT(bT(r)):{},AT(e||!r||!r.__esModule?Dc(t,"default",{value:r,enumerable:!0}):t,r));var Nh=(r,e,t)=>(TT(r,typeof e!="symbol"?e+"":e,t),t);var en=ee((Fk,A0)=>{"use strict";A0.exports=function(r){try{return!!r()}catch{return!0}}});var wl=ee((Bk,R0)=>{"use strict";var TA=en();R0.exports=!TA(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var zt=ee((kk,I0)=>{"use strict";var C0=wl(),P0=Function.prototype,ed=P0.call,EA=C0&&P0.bind.bind(ed,ed);I0.exports=C0?EA:function(r){return function(){return ed.apply(r,arguments)}}});var Ps=ee((zk,O0)=>{"use strict";var L0=zt(),AA=L0({}.toString),RA=L0("".slice);O0.exports=function(r){return RA(AA(r),8,-1)}});var Tl=ee((Hk,D0)=>{"use strict";var CA=zt(),PA=en(),IA=Ps(),td=Object,LA=CA("".split);D0.exports=PA(function(){return!td("z").propertyIsEnumerable(0)})?function(r){return IA(r)==="String"?LA(r,""):td(r)}:td});var Is=ee((Vk,N0)=>{"use strict";N0.exports=function(r){return r==null}});var El=ee((Gk,U0)=>{"use strict";var OA=Is(),DA=TypeError;U0.exports=function(r){if(OA(r))throw new DA("Can't call method on "+r);return r}});var Ls=ee((Wk,F0)=>{"use strict";var NA=Tl(),UA=El();F0.exports=function(r){return NA(UA(r))}});var Hn=ee((B0,k0)=>{"use strict";var Al=function(r){return r&&r.Math===Math&&r};k0.exports=Al(typeof globalThis=="object"&&globalThis)||Al(typeof window=="object"&&window)||Al(typeof self=="object"&&self)||Al(typeof global=="object"&&global)||function(){return this}()||B0||Function("return this")()});var Ha=ee((qk,z0)=>{"use strict";z0.exports=!1});var Rl=ee((Xk,V0)=>{"use strict";var H0=Hn(),FA=Object.defineProperty;V0.exports=function(r,e){try{FA(H0,r,{value:e,configurable:!0,writable:!0})}catch{H0[r]=e}return e}});var Cl=ee((Yk,W0)=>{"use strict";var BA=Hn(),kA=Rl(),G0="__core-js_shared__",zA=BA[G0]||kA(G0,{});W0.exports=zA});var nd=ee((jk,X0)=>{"use strict";var HA=Ha(),q0=Cl();(X0.exports=function(r,e){return q0[r]||(q0[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.33.0",mode:HA?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vo=ee((Zk,Y0)=>{"use strict";var VA=El(),GA=Object;Y0.exports=function(r){return GA(VA(r))}});var mi=ee((Kk,j0)=>{"use strict";var WA=zt(),qA=vo(),XA=WA({}.hasOwnProperty);j0.exports=Object.hasOwn||function(e,t){return XA(qA(e),t)}});var Pl=ee((Jk,Z0)=>{"use strict";var YA=zt(),jA=0,ZA=Math.random(),KA=YA(1 .toString);Z0.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+KA(++jA+ZA,36)}});var J0=ee(($k,K0)=>{"use strict";K0.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""});var rv=ee((Qk,iv)=>{"use strict";var nv=Hn(),id=J0(),$0=nv.process,Q0=nv.Deno,ev=$0&&$0.versions||Q0&&Q0.version,tv=ev&&ev.v8,Ci,Il;tv&&(Ci=tv.split("."),Il=Ci[0]>0&&Ci[0]<4?1:+(Ci[0]+Ci[1]));!Il&&id&&(Ci=id.match(/Edge\/(\d+)/),(!Ci||Ci[1]>=74)&&(Ci=id.match(/Chrome\/(\d+)/),Ci&&(Il=+Ci[1])));iv.exports=Il});var rd=ee((ez,ov)=>{"use strict";var sv=rv(),JA=en(),$A=Hn(),QA=$A.String;ov.exports=!!Object.getOwnPropertySymbols&&!JA(function(){var r=Symbol("symbol detection");return!QA(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&sv&&sv<41})});var sd=ee((tz,av)=>{"use strict";var e1=rd();av.exports=e1&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Jn=ee((nz,lv)=>{"use strict";var t1=Hn(),n1=nd(),cv=mi(),i1=Pl(),r1=rd(),s1=sd(),yo=t1.Symbol,od=n1("wks"),o1=s1?yo.for||yo:yo&&yo.withoutSetter||i1;lv.exports=function(r){return cv(od,r)||(od[r]=r1&&cv(yo,r)?yo[r]:o1("Symbol."+r)),od[r]}});var cd=ee((iz,uv)=>{"use strict";var ad=typeof document=="object"&&document.all,a1=typeof ad=="undefined"&&ad!==void 0;uv.exports={all:ad,IS_HTMLDDA:a1}});var Xt=ee((rz,fv)=>{"use strict";var hv=cd(),c1=hv.all;fv.exports=hv.IS_HTMLDDA?function(r){return typeof r=="function"||r===c1}:function(r){return typeof r=="function"}});var Vn=ee((sz,mv)=>{"use strict";var dv=Xt(),pv=cd(),l1=pv.all;mv.exports=pv.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:dv(r)||r===l1}:function(r){return typeof r=="object"?r!==null:dv(r)}});var Pi=ee((oz,gv)=>{"use strict";var u1=Vn(),h1=String,f1=TypeError;gv.exports=function(r){if(u1(r))return r;throw new f1(h1(r)+" is not an object")}});var $n=ee((az,_v)=>{"use strict";var d1=en();_v.exports=!d1(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var ld=ee((cz,vv)=>{"use strict";var p1=$n(),m1=en();vv.exports=p1&&m1(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var hd=ee((lz,xv)=>{"use strict";var g1=Hn(),yv=Vn(),ud=g1.document,_1=yv(ud)&&yv(ud.createElement);xv.exports=function(r){return _1?ud.createElement(r):{}}});var fd=ee((uz,Sv)=>{"use strict";var v1=$n(),y1=en(),x1=hd();Sv.exports=!v1&&!y1(function(){return Object.defineProperty(x1("div"),"a",{get:function(){return 7}}).a!==7})});var Xi=ee((hz,Mv)=>{"use strict";var S1=wl(),Ll=Function.prototype.call;Mv.exports=S1?Ll.bind(Ll):function(){return Ll.apply(Ll,arguments)}});var xo=ee((fz,bv)=>{"use strict";var dd=Hn(),M1=Xt(),b1=function(r){return M1(r)?r:void 0};bv.exports=function(r,e){return arguments.length<2?b1(dd[r]):dd[r]&&dd[r][e]}});var Ol=ee((dz,wv)=>{"use strict";var w1=zt();wv.exports=w1({}.isPrototypeOf)});var pd=ee((pz,Tv)=>{"use strict";var T1=xo(),E1=Xt(),A1=Ol(),R1=sd(),C1=Object;Tv.exports=R1?function(r){return typeof r=="symbol"}:function(r){var e=T1("Symbol");return E1(e)&&A1(e.prototype,C1(r))}});var Dl=ee((mz,Ev)=>{"use strict";var P1=String;Ev.exports=function(r){try{return P1(r)}catch{return"Object"}}});var Va=ee((gz,Av)=>{"use strict";var I1=Xt(),L1=Dl(),O1=TypeError;Av.exports=function(r){if(I1(r))return r;throw new O1(L1(r)+" is not a function")}});var Nl=ee((_z,Rv)=>{"use strict";var D1=Va(),N1=Is();Rv.exports=function(r,e){var t=r[e];return N1(t)?void 0:D1(t)}});var Pv=ee((vz,Cv)=>{"use strict";var md=Xi(),gd=Xt(),_d=Vn(),U1=TypeError;Cv.exports=function(r,e){var t,n;if(e==="string"&&gd(t=r.toString)&&!_d(n=md(t,r))||gd(t=r.valueOf)&&!_d(n=md(t,r))||e!=="string"&&gd(t=r.toString)&&!_d(n=md(t,r)))return n;throw new U1("Can't convert object to primitive value")}});var Dv=ee((yz,Ov)=>{"use strict";var F1=Xi(),Iv=Vn(),Lv=pd(),B1=Nl(),k1=Pv(),z1=Jn(),H1=TypeError,V1=z1("toPrimitive");Ov.exports=function(r,e){if(!Iv(r)||Lv(r))return r;var t=B1(r,V1),n;if(t){if(e===void 0&&(e="default"),n=F1(t,r,e),!Iv(n)||Lv(n))return n;throw new H1("Can't convert object to primitive value")}return e===void 0&&(e="number"),k1(r,e)}});var Ul=ee((xz,Nv)=>{"use strict";var G1=Dv(),W1=pd();Nv.exports=function(r){var e=G1(r,"string");return W1(e)?e:e+""}});var Ii=ee(Fv=>{"use strict";var q1=$n(),X1=fd(),Y1=ld(),Fl=Pi(),Uv=Ul(),j1=TypeError,vd=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,yd="enumerable",xd="configurable",Sd="writable";Fv.f=q1?Y1?function(e,t,n){if(Fl(e),t=Uv(t),Fl(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Sd in n&&!n[Sd]){var i=Z1(e,t);i&&i[Sd]&&(e[t]=n.value,n={configurable:xd in n?n[xd]:i[xd],enumerable:yd in n?n[yd]:i[yd],writable:!1})}return vd(e,t,n)}:vd:function(e,t,n){if(Fl(e),t=Uv(t),Fl(n),X1)try{return vd(e,t,n)}catch{}if("get"in n||"set"in n)throw new j1("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var kv=ee((Mz,Bv)=>{"use strict";var K1=Math.ceil,J1=Math.floor;Bv.exports=Math.trunc||function(e){var t=+e;return(t>0?J1:K1)(t)}});var Bl=ee((bz,zv)=>{"use strict";var $1=kv();zv.exports=function(r){var e=+r;return e!==e||e===0?0:$1(e)}});var Md=ee((wz,Hv)=>{"use strict";var Q1=Bl(),eR=Math.max,tR=Math.min;Hv.exports=function(r,e){var t=Q1(r);return t<0?eR(t+e,0):tR(t,e)}});var Gv=ee((Tz,Vv)=>{"use strict";var nR=Bl(),iR=Math.min;Vv.exports=function(r){return r>0?iR(nR(r),9007199254740991):0}});var So=ee((Ez,Wv)=>{"use strict";var rR=Gv();Wv.exports=function(r){return rR(r.length)}});var Yv=ee((Az,Xv)=>{"use strict";var sR=Ls(),oR=Md(),aR=So(),qv=function(r){return function(e,t,n){var i=sR(e),s=aR(i),o=oR(n,s),a;if(r&&t!==t){for(;s>o;)if(a=i[o++],a!==a)return!0}else for(;s>o;o++)if((r||o in i)&&i[o]===t)return r||o||0;return!r&&-1}};Xv.exports={includes:qv(!0),indexOf:qv(!1)}});var Ga=ee((Rz,jv)=>{"use strict";jv.exports={}});var wd=ee((Cz,Kv)=>{"use strict";var cR=zt(),bd=mi(),lR=Ls(),uR=Yv().indexOf,hR=Ga(),Zv=cR([].push);Kv.exports=function(r,e){var t=lR(r),n=0,i=[],s;for(s in t)!bd(hR,s)&&bd(t,s)&&Zv(i,s);for(;e.length>n;)bd(t,s=e[n++])&&(~uR(i,s)||Zv(i,s));return i}});var kl=ee((Pz,Jv)=>{"use strict";Jv.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Td=ee((Iz,$v)=>{"use strict";var fR=wd(),dR=kl();$v.exports=Object.keys||function(e){return fR(e,dR)}});var ey=ee(Qv=>{"use strict";var pR=$n(),mR=ld(),gR=Ii(),_R=Pi(),vR=Ls(),yR=Td();Qv.f=pR&&!mR?Object.defineProperties:function(e,t){_R(e);for(var n=vR(t),i=yR(t),s=i.length,o=0,a;s>o;)gR.f(e,a=i[o++],n[a]);return e}});var ny=ee((Oz,ty)=>{"use strict";var xR=xo();ty.exports=xR("document","documentElement")});var zl=ee((Dz,ry)=>{"use strict";var SR=nd(),MR=Pl(),iy=SR("keys");ry.exports=function(r){return iy[r]||(iy[r]=MR(r))}});var Wa=ee((Nz,hy)=>{"use strict";var bR=Pi(),wR=ey(),sy=kl(),TR=Ga(),ER=ny(),AR=hd(),RR=zl(),oy=">",ay="<",Ad="prototype",Rd="script",ly=RR("IE_PROTO"),Ed=function(){},uy=function(r){return ay+Rd+oy+r+ay+"/"+Rd+oy},cy=function(r){r.write(uy("")),r.close();var e=r.parentWindow.Object;return r=null,e},CR=function(){var r=AR("iframe"),e="java"+Rd+":",t;return r.style.display="none",ER.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(uy("document.F=Object")),t.close(),t.F},Hl,Vl=function(){try{Hl=new ActiveXObject("htmlfile")}catch{}Vl=typeof document!="undefined"?document.domain&&Hl?cy(Hl):CR():cy(Hl);for(var r=sy.length;r--;)delete Vl[Ad][sy[r]];return Vl()};TR[ly]=!0;hy.exports=Object.create||function(e,t){var n;return e!==null?(Ed[Ad]=bR(e),n=new Ed,Ed[Ad]=null,n[ly]=e):n=Vl(),t===void 0?n:wR.f(n,t)}});var dy=ee((Uz,fy)=>{"use strict";var PR=Jn(),IR=Wa(),LR=Ii().f,Cd=PR("unscopables"),Pd=Array.prototype;Pd[Cd]===void 0&&LR(Pd,Cd,{configurable:!0,value:IR(null)});fy.exports=function(r){Pd[Cd][r]=!0}});var Mo=ee((Fz,py)=>{"use strict";py.exports={}});var Id=ee((Bz,gy)=>{"use strict";var OR=Hn(),DR=Xt(),my=OR.WeakMap;gy.exports=DR(my)&&/native code/.test(String(my))});var qa=ee((kz,_y)=>{"use strict";_y.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var Gl=ee((zz,vy)=>{"use strict";var NR=$n(),UR=Ii(),FR=qa();vy.exports=NR?function(r,e,t){return UR.f(r,e,FR(1,t))}:function(r,e,t){return r[e]=t,r}});var Ds=ee((Hz,Sy)=>{"use strict";var BR=Id(),xy=Hn(),kR=Vn(),zR=Gl(),Ld=mi(),Od=Cl(),HR=zl(),VR=Ga(),yy="Object already initialized",Dd=xy.TypeError,GR=xy.WeakMap,Wl,Xa,ql,WR=function(r){return ql(r)?Xa(r):Wl(r,{})},qR=function(r){return function(e){var t;if(!kR(e)||(t=Xa(e)).type!==r)throw new Dd("Incompatible receiver, "+r+" required");return t}};BR||Od.state?(Li=Od.state||(Od.state=new GR),Li.get=Li.get,Li.has=Li.has,Li.set=Li.set,Wl=function(r,e){if(Li.has(r))throw new Dd(yy);return e.facade=r,Li.set(r,e),e},Xa=function(r){return Li.get(r)||{}},ql=function(r){return Li.has(r)}):(Os=HR("state"),VR[Os]=!0,Wl=function(r,e){if(Ld(r,Os))throw new Dd(yy);return e.facade=r,zR(r,Os,e),e},Xa=function(r){return Ld(r,Os)?r[Os]:{}},ql=function(r){return Ld(r,Os)});var Li,Os;Sy.exports={set:Wl,get:Xa,has:ql,enforce:WR,getterFor:qR}});var Nd=ee(wy=>{"use strict";var My={}.propertyIsEnumerable,by=Object.getOwnPropertyDescriptor,XR=by&&!My.call({1:2},1);wy.f=XR?function(e){var t=by(this,e);return!!t&&t.enumerable}:My});var Ud=ee(Ey=>{"use strict";var YR=$n(),jR=Xi(),ZR=Nd(),KR=qa(),JR=Ls(),$R=Ul(),QR=mi(),eC=fd(),Ty=Object.getOwnPropertyDescriptor;Ey.f=YR?Ty:function(e,t){if(e=JR(e),t=$R(t),eC)try{return Ty(e,t)}catch{}if(QR(e,t))return KR(!jR(ZR.f,e,t),e[t])}});var kd=ee((Wz,Ry)=>{"use strict";var Fd=$n(),tC=mi(),Ay=Function.prototype,nC=Fd&&Object.getOwnPropertyDescriptor,Bd=tC(Ay,"name"),iC=Bd&&function(){}.name==="something",rC=Bd&&(!Fd||Fd&&nC(Ay,"name").configurable);Ry.exports={EXISTS:Bd,PROPER:iC,CONFIGURABLE:rC}});var Hd=ee((qz,Cy)=>{"use strict";var sC=zt(),oC=Xt(),zd=Cl(),aC=sC(Function.toString);oC(zd.inspectSource)||(zd.inspectSource=function(r){return aC(r)});Cy.exports=zd.inspectSource});var Wd=ee((Xz,Ly)=>{"use strict";var Gd=zt(),cC=en(),lC=Xt(),Xl=mi(),Vd=$n(),uC=kd().CONFIGURABLE,hC=Hd(),Iy=Ds(),fC=Iy.enforce,dC=Iy.get,Py=String,Yl=Object.defineProperty,pC=Gd("".slice),mC=Gd("".replace),gC=Gd([].join),_C=Vd&&!cC(function(){return Yl(function(){},"length",{value:8}).length!==8}),vC=String(String).split("String"),yC=Ly.exports=function(r,e,t){pC(Py(e),0,7)==="Symbol("&&(e="["+mC(Py(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Xl(r,"name")||uC&&r.name!==e)&&(Vd?Yl(r,"name",{value:e,configurable:!0}):r.name=e),_C&&t&&Xl(t,"arity")&&r.length!==t.arity&&Yl(r,"length",{value:t.arity});try{t&&Xl(t,"constructor")&&t.constructor?Vd&&Yl(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=fC(r);return Xl(n,"source")||(n.source=gC(vC,typeof e=="string"?e:"")),r};Function.prototype.toString=yC(function(){return lC(this)&&dC(this).source||hC(this)},"toString")});var Ns=ee((Yz,Oy)=>{"use strict";var xC=Xt(),SC=Ii(),MC=Wd(),bC=Rl();Oy.exports=function(r,e,t,n){n||(n={});var i=n.enumerable,s=n.name!==void 0?n.name:e;if(xC(t)&&MC(t,s,n),n.global)i?r[e]=t:bC(e,t);else{try{n.unsafe?r[e]&&(i=!0):delete r[e]}catch{}i?r[e]=t:SC.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r}});var jl=ee(Dy=>{"use strict";var wC=wd(),TC=kl(),EC=TC.concat("length","prototype");Dy.f=Object.getOwnPropertyNames||function(e){return wC(e,EC)}});var qd=ee(Ny=>{"use strict";Ny.f=Object.getOwnPropertySymbols});var Fy=ee((Kz,Uy)=>{"use strict";var AC=xo(),RC=zt(),CC=jl(),PC=qd(),IC=Pi(),LC=RC([].concat);Uy.exports=AC("Reflect","ownKeys")||function(e){var t=CC.f(IC(e)),n=PC.f;return n?LC(t,n(e)):t}});var zy=ee((Jz,ky)=>{"use strict";var By=mi(),OC=Fy(),DC=Ud(),NC=Ii();ky.exports=function(r,e,t){for(var n=OC(e),i=NC.f,s=DC.f,o=0;o<n.length;o++){var a=n[o];!By(r,a)&&!(t&&By(t,a))&&i(r,a,s(e,a))}}});var Xd=ee(($z,Hy)=>{"use strict";var UC=en(),FC=Xt(),BC=/#|\.prototype\./,Ya=function(r,e){var t=zC[kC(r)];return t===VC?!0:t===HC?!1:FC(e)?UC(e):!!e},kC=Ya.normalize=function(r){return String(r).replace(BC,".").toLowerCase()},zC=Ya.data={},HC=Ya.NATIVE="N",VC=Ya.POLYFILL="P";Hy.exports=Ya});var bo=ee((Qz,Vy)=>{"use strict";var Yd=Hn(),GC=Ud().f,WC=Gl(),qC=Ns(),XC=Rl(),YC=zy(),jC=Xd();Vy.exports=function(r,e){var t=r.target,n=r.global,i=r.stat,s,o,a,c,l,u;if(n?o=Yd:i?o=Yd[t]||XC(t,{}):o=(Yd[t]||{}).prototype,o)for(a in e){if(l=e[a],r.dontCallGetSet?(u=GC(o,a),c=u&&u.value):c=o[a],s=jC(n?a:t+(i?".":"#")+a,r.forced),!s&&c!==void 0){if(typeof l==typeof c)continue;YC(l,c)}(r.sham||c&&c.sham)&&WC(l,"sham",!0),qC(o,a,l,r)}}});var Wy=ee((eH,Gy)=>{"use strict";var ZC=en();Gy.exports=!ZC(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype})});var Zd=ee((tH,Xy)=>{"use strict";var KC=mi(),JC=Xt(),$C=vo(),QC=zl(),eP=Wy(),qy=QC("IE_PROTO"),jd=Object,tP=jd.prototype;Xy.exports=eP?jd.getPrototypeOf:function(r){var e=$C(r);if(KC(e,qy))return e[qy];var t=e.constructor;return JC(t)&&e instanceof t?t.prototype:e instanceof jd?tP:null}});var Qd=ee((nH,Zy)=>{"use strict";var nP=en(),iP=Xt(),rP=Vn(),sP=Wa(),Yy=Zd(),oP=Ns(),aP=Jn(),cP=Ha(),$d=aP("iterator"),jy=!1,ur,Kd,Jd;[].keys&&(Jd=[].keys(),"next"in Jd?(Kd=Yy(Yy(Jd)),Kd!==Object.prototype&&(ur=Kd)):jy=!0);var lP=!rP(ur)||nP(function(){var r={};return ur[$d].call(r)!==r});lP?ur={}:cP&&(ur=sP(ur));iP(ur[$d])||oP(ur,$d,function(){return this});Zy.exports={IteratorPrototype:ur,BUGGY_SAFARI_ITERATORS:jy}});var Zl=ee((iH,Jy)=>{"use strict";var uP=Ii().f,hP=mi(),fP=Jn(),Ky=fP("toStringTag");Jy.exports=function(r,e,t){r&&!t&&(r=r.prototype),r&&!hP(r,Ky)&&uP(r,Ky,{configurable:!0,value:e})}});var Qy=ee((rH,$y)=>{"use strict";var dP=Qd().IteratorPrototype,pP=Wa(),mP=qa(),gP=Zl(),_P=Mo(),vP=function(){return this};$y.exports=function(r,e,t,n){var i=e+" Iterator";return r.prototype=pP(dP,{next:mP(+!n,t)}),gP(r,i,!1,!0),_P[i]=vP,r}});var tx=ee((sH,ex)=>{"use strict";var yP=zt(),xP=Va();ex.exports=function(r,e,t){try{return yP(xP(Object.getOwnPropertyDescriptor(r,e)[t]))}catch{}}});var ix=ee((oH,nx)=>{"use strict";var SP=Xt(),MP=String,bP=TypeError;nx.exports=function(r){if(typeof r=="object"||SP(r))return r;throw new bP("Can't set "+MP(r)+" as a prototype")}});var ep=ee((aH,rx)=>{"use strict";var wP=tx(),TP=Pi(),EP=ix();rx.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=wP(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch{}return function(i,s){return TP(i),EP(s),r?t(i,s):i.__proto__=s,i}}():void 0)});var $l=ee((cH,px)=>{"use strict";var AP=bo(),RP=Xi(),Kl=Ha(),fx=kd(),CP=Xt(),PP=Qy(),sx=Zd(),ox=ep(),IP=Zl(),LP=Gl(),tp=Ns(),OP=Jn(),ax=Mo(),dx=Qd(),DP=fx.PROPER,NP=fx.CONFIGURABLE,cx=dx.IteratorPrototype,Jl=dx.BUGGY_SAFARI_ITERATORS,ja=OP("iterator"),lx="keys",Za="values",ux="entries",hx=function(){return this};px.exports=function(r,e,t,n,i,s,o){PP(t,e,n);var a=function(p){if(p===i&&f)return f;if(!Jl&&p&&p in u)return u[p];switch(p){case lx:return function(){return new t(this,p)};case Za:return function(){return new t(this,p)};case ux:return function(){return new t(this,p)}}return function(){return new t(this)}},c=e+" Iterator",l=!1,u=r.prototype,h=u[ja]||u["@@iterator"]||i&&u[i],f=!Jl&&h||a(i),d=e==="Array"&&u.entries||h,g,_,m;if(d&&(g=sx(d.call(new r)),g!==Object.prototype&&g.next&&(!Kl&&sx(g)!==cx&&(ox?ox(g,cx):CP(g[ja])||tp(g,ja,hx)),IP(g,c,!0,!0),Kl&&(ax[c]=hx))),DP&&i===Za&&h&&h.name!==Za&&(!Kl&&NP?LP(u,"name",Za):(l=!0,f=function(){return RP(h,this)})),i)if(_={values:a(Za),keys:s?f:a(lx),entries:a(ux)},o)for(m in _)(Jl||l||!(m in u))&&tp(u,m,_[m]);else AP({target:e,proto:!0,forced:Jl||l},_);return(!Kl||o)&&u[ja]!==f&&tp(u,ja,f,{name:i}),ax[e]=f,_}});var Ql=ee((lH,mx)=>{"use strict";mx.exports=function(r,e){return{value:r,done:e}}});var tu=ee((uH,xx)=>{"use strict";var UP=Ls(),np=dy(),gx=Mo(),vx=Ds(),FP=Ii().f,BP=$l(),eu=Ql(),kP=Ha(),zP=$n(),yx="Array Iterator",HP=vx.set,VP=vx.getterFor(yx);xx.exports=BP(Array,"Array",function(r,e){HP(this,{type:yx,target:UP(r),index:0,kind:e})},function(){var r=VP(this),e=r.target,t=r.kind,n=r.index++;if(!e||n>=e.length)return r.target=void 0,eu(void 0,!0);switch(t){case"keys":return eu(n,!1);case"values":return eu(e[n],!1)}return eu([n,e[n]],!1)},"values");var _x=gx.Arguments=gx.Array;np("keys");np("values");np("entries");if(!kP&&zP&&_x.name!=="values")try{FP(_x,"name",{value:"values"})}catch{}});var ip=ee((hH,Sx)=>{"use strict";var GP=Ul(),WP=Ii(),qP=qa();Sx.exports=function(r,e,t){var n=GP(e);n in r?WP.f(r,n,qP(0,t)):r[n]=t}});var wx=ee((fH,bx)=>{"use strict";var Mx=Md(),XP=So(),YP=ip(),jP=Array,ZP=Math.max;bx.exports=function(r,e,t){for(var n=XP(r),i=Mx(e,n),s=Mx(t===void 0?n:t,n),o=jP(ZP(s-i,0)),a=0;i<s;i++,a++)YP(o,a,r[i]);return o.length=a,o}});var Rx=ee((dH,Ax)=>{"use strict";var KP=Ps(),JP=Ls(),Tx=jl().f,$P=wx(),Ex=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],QP=function(r){try{return Tx(r)}catch{return $P(Ex)}};Ax.exports.f=function(e){return Ex&&KP(e)==="Window"?QP(e):Tx(JP(e))}});var Px=ee((pH,Cx)=>{"use strict";var eI=en();Cx.exports=eI(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}})});var Ox=ee((mH,Lx)=>{"use strict";var tI=en(),nI=Vn(),iI=Ps(),Ix=Px(),nu=Object.isExtensible,rI=tI(function(){nu(1)});Lx.exports=rI||Ix?function(e){return!nI(e)||Ix&&iI(e)==="ArrayBuffer"?!1:nu?nu(e):!0}:nu});var rp=ee((gH,Dx)=>{"use strict";var sI=en();Dx.exports=!sI(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ka=ee((_H,Fx)=>{"use strict";var oI=bo(),aI=zt(),cI=Ga(),lI=Vn(),sp=mi(),uI=Ii().f,Nx=jl(),hI=Rx(),op=Ox(),fI=Pl(),dI=rp(),Ux=!1,hr=fI("meta"),pI=0,ap=function(r){uI(r,hr,{value:{objectID:"O"+pI++,weakData:{}}})},mI=function(r,e){if(!lI(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!sp(r,hr)){if(!op(r))return"F";if(!e)return"E";ap(r)}return r[hr].objectID},gI=function(r,e){if(!sp(r,hr)){if(!op(r))return!0;if(!e)return!1;ap(r)}return r[hr].weakData},_I=function(r){return dI&&Ux&&op(r)&&!sp(r,hr)&&ap(r),r},vI=function(){yI.enable=function(){},Ux=!0;var r=Nx.f,e=aI([].splice),t={};t[hr]=1,r(t).length&&(Nx.f=function(n){for(var i=r(n),s=0,o=i.length;s<o;s++)if(i[s]===hr){e(i,s,1);break}return i},oI({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:hI.f}))},yI=Fx.exports={enable:vI,fastKey:mI,getWeakData:gI,onFreeze:_I};cI[hr]=!0});var kx=ee((vH,Bx)=>{"use strict";var xI=Ps(),SI=zt();Bx.exports=function(r){if(xI(r)==="Function")return SI(r)}});var Ja=ee((yH,Hx)=>{"use strict";var zx=kx(),MI=Va(),bI=wl(),wI=zx(zx.bind);Hx.exports=function(r,e){return MI(r),e===void 0?r:bI?wI(r,e):function(){return r.apply(e,arguments)}}});var cp=ee((xH,Vx)=>{"use strict";var TI=Jn(),EI=Mo(),AI=TI("iterator"),RI=Array.prototype;Vx.exports=function(r){return r!==void 0&&(EI.Array===r||RI[AI]===r)}});var iu=ee((SH,Wx)=>{"use strict";var CI=Jn(),PI=CI("toStringTag"),Gx={};Gx[PI]="z";Wx.exports=String(Gx)==="[object z]"});var $a=ee((MH,qx)=>{"use strict";var II=iu(),LI=Xt(),ru=Ps(),OI=Jn(),DI=OI("toStringTag"),NI=Object,UI=ru(function(){return arguments}())==="Arguments",FI=function(r,e){try{return r[e]}catch{}};qx.exports=II?ru:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=FI(e=NI(r),DI))=="string"?t:UI?ru(e):(n=ru(e))==="Object"&&LI(e.callee)?"Arguments":n}});var su=ee((bH,Yx)=>{"use strict";var BI=$a(),Xx=Nl(),kI=Is(),zI=Mo(),HI=Jn(),VI=HI("iterator");Yx.exports=function(r){if(!kI(r))return Xx(r,VI)||Xx(r,"@@iterator")||zI[BI(r)]}});var lp=ee((wH,jx)=>{"use strict";var GI=Xi(),WI=Va(),qI=Pi(),XI=Dl(),YI=su(),jI=TypeError;jx.exports=function(r,e){var t=arguments.length<2?YI(r):e;if(WI(t))return qI(GI(t,r));throw new jI(XI(r)+" is not iterable")}});var up=ee((TH,Kx)=>{"use strict";var ZI=Xi(),Zx=Pi(),KI=Nl();Kx.exports=function(r,e,t){var n,i;Zx(r);try{if(n=KI(r,"return"),!n){if(e==="throw")throw t;return t}n=ZI(n,r)}catch(s){i=!0,n=s}if(e==="throw")throw t;if(i)throw n;return Zx(n),t}});var au=ee((EH,eS)=>{"use strict";var JI=Ja(),$I=Xi(),QI=Pi(),eL=Dl(),tL=cp(),nL=So(),Jx=Ol(),iL=lp(),rL=su(),$x=up(),sL=TypeError,ou=function(r,e){this.stopped=r,this.result=e},Qx=ou.prototype;eS.exports=function(r,e,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),c=JI(e,n),l,u,h,f,d,g,_,m=function(y){return l&&$x(l,"normal",y),new ou(!0,y)},p=function(y){return i?(QI(y),a?c(y[0],y[1],m):c(y[0],y[1])):a?c(y,m):c(y)};if(s)l=r.iterator;else if(o)l=r;else{if(u=rL(r),!u)throw new sL(eL(r)+" is not iterable");if(tL(u)){for(h=0,f=nL(r);f>h;h++)if(d=p(r[h]),d&&Jx(Qx,d))return d;return new ou(!1)}l=iL(r,u)}for(g=s?r.next:l.next;!(_=$I(g,l)).done;){try{d=p(_.value)}catch(y){$x(l,"throw",y)}if(typeof d=="object"&&d&&Jx(Qx,d))return d}return new ou(!1)}});var cu=ee((AH,tS)=>{"use strict";var oL=Ol(),aL=TypeError;tS.exports=function(r,e){if(oL(e,r))return r;throw new aL("Incorrect invocation")}});var fp=ee((RH,sS)=>{"use strict";var cL=Jn(),iS=cL("iterator"),rS=!1;try{nS=0,hp={next:function(){return{done:!!nS++}},return:function(){rS=!0}},hp[iS]=function(){return this},Array.from(hp,function(){throw 2})}catch{}var nS,hp;sS.exports=function(r,e){try{if(!e&&!rS)return!1}catch{return!1}var t=!1;try{var n={};n[iS]=function(){return{next:function(){return{done:t=!0}}}},r(n)}catch{}return t}});var cS=ee((CH,aS)=>{"use strict";var lL=Xt(),uL=Vn(),oS=ep();aS.exports=function(r,e,t){var n,i;return oS&&lL(n=e.constructor)&&n!==t&&uL(i=n.prototype)&&i!==t.prototype&&oS(r,i),r}});var lu=ee((PH,uS)=>{"use strict";var hL=bo(),fL=Hn(),dL=zt(),lS=Xd(),pL=Ns(),mL=Ka(),gL=au(),_L=cu(),vL=Xt(),yL=Is(),dp=Vn(),pp=en(),xL=fp(),SL=Zl(),ML=cS();uS.exports=function(r,e,t){var n=r.indexOf("Map")!==-1,i=r.indexOf("Weak")!==-1,s=n?"set":"add",o=fL[r],a=o&&o.prototype,c=o,l={},u=function(p){var y=dL(a[p]);pL(a,p,p==="add"?function(S){return y(this,S===0?0:S),this}:p==="delete"?function(v){return i&&!dp(v)?!1:y(this,v===0?0:v)}:p==="get"?function(S){return i&&!dp(S)?void 0:y(this,S===0?0:S)}:p==="has"?function(S){return i&&!dp(S)?!1:y(this,S===0?0:S)}:function(S,M){return y(this,S===0?0:S,M),this})},h=lS(r,!vL(o)||!(i||a.forEach&&!pp(function(){new o().entries().next()})));if(h)c=t.getConstructor(e,r,n,s),mL.enable();else if(lS(r,!0)){var f=new c,d=f[s](i?{}:-0,1)!==f,g=pp(function(){f.has(1)}),_=xL(function(p){new o(p)}),m=!i&&pp(function(){for(var p=new o,y=5;y--;)p[s](y,y);return!p.has(-0)});_||(c=e(function(p,y){_L(p,a);var v=ML(new o,p,c);return yL(y)||gL(y,v[s],{that:v,AS_ENTRIES:n}),v}),c.prototype=a,a.constructor=c),(g||m)&&(u("delete"),u("has"),n&&u("get")),(m||d)&&u(s),i&&a.clear&&delete a.clear}return l[r]=c,hL({global:!0,constructor:!0,forced:c!==o},l),SL(c,r),i||t.setStrong(c,r,n),c}});var mp=ee((IH,fS)=>{"use strict";var hS=Wd(),bL=Ii();fS.exports=function(r,e,t){return t.get&&hS(t.get,e,{getter:!0}),t.set&&hS(t.set,e,{setter:!0}),bL.f(r,e,t)}});var uu=ee((LH,dS)=>{"use strict";var wL=Ns();dS.exports=function(r,e,t){for(var n in e)wL(r,n,e[n],t);return r}});var gS=ee((OH,mS)=>{"use strict";var TL=xo(),EL=mp(),AL=Jn(),RL=$n(),pS=AL("species");mS.exports=function(r){var e=TL(r);RL&&e&&!e[pS]&&EL(e,pS,{configurable:!0,get:function(){return this}})}});var _p=ee((DH,SS)=>{"use strict";var CL=Wa(),PL=mp(),_S=uu(),IL=Ja(),LL=cu(),OL=Is(),DL=au(),NL=$l(),hu=Ql(),UL=gS(),Qa=$n(),vS=Ka().fastKey,xS=Ds(),yS=xS.set,gp=xS.getterFor;SS.exports={getConstructor:function(r,e,t,n){var i=r(function(l,u){LL(l,s),yS(l,{type:e,index:CL(null),first:void 0,last:void 0,size:0}),Qa||(l.size=0),OL(u)||DL(u,l[n],{that:l,AS_ENTRIES:t})}),s=i.prototype,o=gp(e),a=function(l,u,h){var f=o(l),d=c(l,u),g,_;return d?d.value=h:(f.last=d={index:_=vS(u,!0),key:u,value:h,previous:g=f.last,next:void 0,removed:!1},f.first||(f.first=d),g&&(g.next=d),Qa?f.size++:l.size++,_!=="F"&&(f.index[_]=d)),l},c=function(l,u){var h=o(l),f=vS(u),d;if(f!=="F")return h.index[f];for(d=h.first;d;d=d.next)if(d.key===u)return d};return _S(s,{clear:function(){for(var u=this,h=o(u),f=h.index,d=h.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=void 0),delete f[d.index],d=d.next;h.first=h.last=void 0,Qa?h.size=0:u.size=0},delete:function(l){var u=this,h=o(u),f=c(u,l);if(f){var d=f.next,g=f.previous;delete h.index[f.index],f.removed=!0,g&&(g.next=d),d&&(d.previous=g),h.first===f&&(h.first=d),h.last===f&&(h.last=g),Qa?h.size--:u.size--}return!!f},forEach:function(u){for(var h=o(this),f=IL(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:h.first;)for(f(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!c(this,u)}}),_S(s,t?{get:function(u){var h=c(this,u);return h&&h.value},set:function(u,h){return a(this,u===0?0:u,h)}}:{add:function(u){return a(this,u=u===0?0:u,u)}}),Qa&&PL(s,"size",{configurable:!0,get:function(){return o(this).size}}),i},setStrong:function(r,e,t){var n=e+" Iterator",i=gp(e),s=gp(n);NL(r,e,function(o,a){yS(this,{type:n,target:o,state:i(o),kind:a,last:void 0})},function(){for(var o=s(this),a=o.kind,c=o.last;c&&c.removed;)c=c.previous;return!o.target||!(o.last=c=c?c.next:o.state.first)?(o.target=void 0,hu(void 0,!0)):hu(a==="keys"?c.key:a==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),UL(e)}}});var MS=ee(()=>{"use strict";var FL=lu(),BL=_p();FL("Map",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},BL)});var bS=ee(()=>{"use strict";MS()});var TS=ee((kH,wS)=>{"use strict";var kL=iu(),zL=$a();wS.exports=kL?{}.toString:function(){return"[object "+zL(this)+"]"}});var fu=ee(()=>{"use strict";var HL=iu(),VL=Ns(),GL=TS();HL||VL(Object.prototype,"toString",GL,{unsafe:!0})});var vp=ee((VH,ES)=>{"use strict";var WL=$a(),qL=String;ES.exports=function(r){if(WL(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return qL(r)}});var PS=ee((GH,CS)=>{"use strict";var yp=zt(),XL=Bl(),YL=vp(),jL=El(),ZL=yp("".charAt),AS=yp("".charCodeAt),KL=yp("".slice),RS=function(r){return function(e,t){var n=YL(jL(e)),i=XL(t),s=n.length,o,a;return i<0||i>=s?r?"":void 0:(o=AS(n,i),o<55296||o>56319||i+1===s||(a=AS(n,i+1))<56320||a>57343?r?ZL(n,i):o:r?KL(n,i,i+2):(o-55296<<10)+(a-56320)+65536)}};CS.exports={codeAt:RS(!1),charAt:RS(!0)}});var du=ee(()=>{"use strict";var JL=PS().charAt,$L=vp(),LS=Ds(),QL=$l(),IS=Ql(),OS="String Iterator",e2=LS.set,t2=LS.getterFor(OS);QL(String,"String",function(r){e2(this,{type:OS,string:$L(r),index:0})},function(){var e=t2(this),t=e.string,n=e.index,i;return n>=t.length?IS(void 0,!0):(i=JL(t,n),e.index+=i.length,IS(i,!1))})});var wo=ee((XH,DS)=>{"use strict";var n2=Hn();DS.exports=n2});var US=ee((YH,NS)=>{"use strict";tu();bS();fu();du();var i2=wo();NS.exports=i2.Map});var FS=ee(()=>{"use strict";var r2=lu(),s2=_p();r2("Set",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},s2)});var BS=ee(()=>{"use strict";FS()});var zS=ee(($H,kS)=>{"use strict";tu();fu();BS();du();var o2=wo();kS.exports=o2.Set});var VS=ee((QH,HS)=>{"use strict";var a2=Ps();HS.exports=Array.isArray||function(e){return a2(e)==="Array"}});var Sp=ee((eV,YS)=>{"use strict";var c2=zt(),l2=en(),GS=Xt(),u2=$a(),h2=xo(),f2=Hd(),WS=function(){},d2=[],qS=h2("Reflect","construct"),xp=/^\s*(?:class|function)\b/,p2=c2(xp.exec),m2=!xp.test(WS),ec=function(e){if(!GS(e))return!1;try{return qS(WS,d2,e),!0}catch{return!1}},XS=function(e){if(!GS(e))return!1;switch(u2(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m2||!!p2(xp,f2(e))}catch{return!0}};XS.sham=!0;YS.exports=!qS||l2(function(){var r;return ec(ec.call)||!ec(Object)||!ec(function(){r=!0})||r})?XS:ec});var JS=ee((tV,KS)=>{"use strict";var jS=VS(),g2=Sp(),_2=Vn(),v2=Jn(),y2=v2("species"),ZS=Array;KS.exports=function(r){var e;return jS(r)&&(e=r.constructor,g2(e)&&(e===ZS||jS(e.prototype))?e=void 0:_2(e)&&(e=e[y2],e===null&&(e=void 0))),e===void 0?ZS:e}});var QS=ee((nV,$S)=>{"use strict";var x2=JS();$S.exports=function(r,e){return new(x2(r))(e===0?0:e)}});var nM=ee((iV,tM)=>{"use strict";var S2=Ja(),M2=zt(),b2=Tl(),w2=vo(),T2=So(),E2=QS(),eM=M2([].push),Hr=function(r){var e=r===1,t=r===2,n=r===3,i=r===4,s=r===6,o=r===7,a=r===5||s;return function(c,l,u,h){for(var f=w2(c),d=b2(f),g=S2(l,u),_=T2(d),m=0,p=h||E2,y=e?p(c,_):t||o?p(c,0):void 0,v,S;_>m;m++)if((a||m in d)&&(v=d[m],S=g(v,m,f),r))if(e)y[m]=S;else if(S)switch(r){case 3:return!0;case 5:return v;case 6:return m;case 2:eM(y,v)}else switch(r){case 4:return!1;case 7:eM(y,v)}return s?-1:n||i?i:y}};tM.exports={forEach:Hr(0),map:Hr(1),filter:Hr(2),some:Hr(3),every:Hr(4),find:Hr(5),findIndex:Hr(6),filterReject:Hr(7)}});var lM=ee((rV,cM)=>{"use strict";var A2=zt(),iM=uu(),pu=Ka().getWeakData,R2=cu(),C2=Pi(),P2=Is(),Mp=Vn(),I2=au(),sM=nM(),rM=mi(),oM=Ds(),L2=oM.set,O2=oM.getterFor,D2=sM.find,N2=sM.findIndex,U2=A2([].splice),F2=0,mu=function(r){return r.frozen||(r.frozen=new aM)},aM=function(){this.entries=[]},bp=function(r,e){return D2(r.entries,function(t){return t[0]===e})};aM.prototype={get:function(r){var e=bp(this,r);if(e)return e[1]},has:function(r){return!!bp(this,r)},set:function(r,e){var t=bp(this,r);t?t[1]=e:this.entries.push([r,e])},delete:function(r){var e=N2(this.entries,function(t){return t[0]===r});return~e&&U2(this.entries,e,1),!!~e}};cM.exports={getConstructor:function(r,e,t,n){var i=r(function(c,l){R2(c,s),L2(c,{type:e,id:F2++,frozen:void 0}),P2(l)||I2(l,c[n],{that:c,AS_ENTRIES:t})}),s=i.prototype,o=O2(e),a=function(c,l,u){var h=o(c),f=pu(C2(l),!0);return f===!0?mu(h).set(l,u):f[h.id]=u,c};return iM(s,{delete:function(c){var l=o(this);if(!Mp(c))return!1;var u=pu(c);return u===!0?mu(l).delete(c):u&&rM(u,l.id)&&delete u[l.id]},has:function(l){var u=o(this);if(!Mp(l))return!1;var h=pu(l);return h===!0?mu(u).has(l):h&&rM(h,u.id)}}),iM(s,t?{get:function(l){var u=o(this);if(Mp(l)){var h=pu(l);return h===!0?mu(u).get(l):h?h[u.id]:void 0}},set:function(l,u){return a(this,l,u)}}:{add:function(l){return a(this,l,!0)}}),i}}});var yM=ee(()=>{"use strict";var B2=rp(),uM=Hn(),yu=zt(),hM=uu(),k2=Ka(),z2=lu(),pM=lM(),gu=Vn(),_u=Ds().enforce,H2=en(),V2=Id(),ic=Object,G2=Array.isArray,vu=ic.isExtensible,mM=ic.isFrozen,W2=ic.isSealed,gM=ic.freeze,q2=ic.seal,fM={},dM={},X2=!uM.ActiveXObject&&"ActiveXObject"in uM,tc,_M=function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},vM=z2("WeakMap",_M,pM),To=vM.prototype,xu=yu(To.set),Y2=function(){return B2&&H2(function(){var r=gM([]);return xu(new vM,r,1),!mM(r)})};V2&&(X2?(tc=pM.getConstructor(_M,"WeakMap",!0),k2.enable(),wp=yu(To.delete),nc=yu(To.has),Tp=yu(To.get),hM(To,{delete:function(r){if(gu(r)&&!vu(r)){var e=_u(this);return e.frozen||(e.frozen=new tc),wp(this,r)||e.frozen.delete(r)}return wp(this,r)},has:function(e){if(gu(e)&&!vu(e)){var t=_u(this);return t.frozen||(t.frozen=new tc),nc(this,e)||t.frozen.has(e)}return nc(this,e)},get:function(e){if(gu(e)&&!vu(e)){var t=_u(this);return t.frozen||(t.frozen=new tc),nc(this,e)?Tp(this,e):t.frozen.get(e)}return Tp(this,e)},set:function(e,t){if(gu(e)&&!vu(e)){var n=_u(this);n.frozen||(n.frozen=new tc),nc(this,e)?xu(this,e,t):n.frozen.set(e,t)}else xu(this,e,t);return this}})):Y2()&&hM(To,{set:function(e,t){var n;return G2(e)&&(mM(e)?n=fM:W2(e)&&(n=dM)),xu(this,e,t),n===fM&&gM(e),n===dM&&q2(e),this}}));var wp,nc,Tp});var xM=ee(()=>{"use strict";yM()});var MM=ee((lV,SM)=>{"use strict";tu();fu();xM();var j2=wo();SM.exports=j2.WeakMap});var wM=ee((uV,bM)=>{"use strict";var Z2=Pi(),K2=up();bM.exports=function(r,e,t,n){try{return n?e(Z2(t)[0],t[1]):e(t)}catch(i){K2(r,"throw",i)}}});var RM=ee((hV,AM)=>{"use strict";var J2=Ja(),$2=Xi(),Q2=vo(),eO=wM(),tO=cp(),nO=Sp(),iO=So(),TM=ip(),rO=lp(),sO=su(),EM=Array;AM.exports=function(e){var t=Q2(e),n=nO(this),i=arguments.length,s=i>1?arguments[1]:void 0,o=s!==void 0;o&&(s=J2(s,i>2?arguments[2]:void 0));var a=sO(t),c=0,l,u,h,f,d,g;if(a&&!(this===EM&&tO(a)))for(f=rO(t,a),d=f.next,u=n?new this:[];!(h=$2(d,f)).done;c++)g=o?eO(f,s,[h.value,c],!0):h.value,TM(u,c,g);else for(l=iO(t),u=n?new this(l):EM(l);l>c;c++)g=o?s(t[c],c):t[c],TM(u,c,g);return u.length=c,u}});var CM=ee(()=>{"use strict";var oO=bo(),aO=RM(),cO=fp(),lO=!cO(function(r){Array.from(r)});oO({target:"Array",stat:!0,forced:lO},{from:aO})});var IM=ee((pV,PM)=>{"use strict";du();CM();var uO=wo();PM.exports=uO.Array.from});var NM=ee((mV,DM)=>{"use strict";var LM=$n(),hO=zt(),fO=Xi(),dO=en(),Ep=Td(),pO=qd(),mO=Nd(),gO=vo(),_O=Tl(),Eo=Object.assign,OM=Object.defineProperty,vO=hO([].concat);DM.exports=!Eo||dO(function(){if(LM&&Eo({b:1},Eo(OM({},"a",{enumerable:!0,get:function(){OM(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var r={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return r[t]=7,n.split("").forEach(function(i){e[i]=i}),Eo({},r)[t]!==7||Ep(Eo({},e)).join("")!==n})?function(e,t){for(var n=gO(e),i=arguments.length,s=1,o=pO.f,a=mO.f;i>s;)for(var c=_O(arguments[s++]),l=o?vO(Ep(c),o(c)):Ep(c),u=l.length,h=0,f;u>h;)f=l[h++],(!LM||fO(a,c,f))&&(n[f]=c[f]);return n}:Eo});var FM=ee(()=>{"use strict";var yO=bo(),UM=NM();yO({target:"Object",stat:!0,arity:2,forced:Object.assign!==UM},{assign:UM})});var kM=ee((vV,BM)=>{"use strict";FM();var xO=wo();BM.exports=xO.Object.assign});function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ug(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$s={duration:.5,overwrite:!1,delay:0},ef,hn,It,ci=1e8,vt=1/ci,Gh=Math.PI*2,RT=Gh/4,CT=0,Fg=Math.sqrt,PT=Math.cos,IT=Math.sin,qt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},qc=function(e){return typeof e=="undefined"},Hi=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},tf=function(){return typeof window!="undefined"},Nc=function(e){return Lt(e)||qt(e)},Bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Wh=/(?:-?\.?\d|\.)+/gi,nf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rf=/[+-]=-?[.\d]+/,kg=/[^,'"\[\]\s]+/gi,LT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,ai,qh,sf,Xn={},kc={},zg,Hg=function(e){return(kc=ds(e,Xn))&&dn},Xc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zc=function(e,t){return!t&&console.warn(e)},Vg=function(e,t){return e&&(Xn[e]=t)&&kc&&(kc[e]=t)||Xn},ya=function(){return 0},OT={suppressEvents:!0,isStart:!0,kill:!1},Uc={suppressEvents:!0,kill:!1},DT={suppressEvents:!0},of={},Ir=[],Xh={},Gg,Un={},Fh={},Cg=30,Fc=[],af="",cf=function(e){var t=e[0],n,i;if(Hi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fc.length;i--&&!Fc[i].targetTest(t););n=Fc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new hf(e[i],n)))||e.splice(i,1);return e},Lr=function(e){return e._gsap||cf(li(e))[0]._gsap},lf=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():qc(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},rn=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},NT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Hc=function(){var e=Ir.length,t=Ir.slice(0),n,i;for(Xh={},Ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wg=function(e,t,n,i){Ir.length&&!hn&&Hc(),e.render(t,n,i||hn&&t<0&&(e._initted||e._startAt)),Ir.length&&!hn&&Hc()},qg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kg).length<2?t:qt(e)?e.trim():e},Xg=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},UT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ds=function(e,t){for(var n in t)e[n]=t[n];return e},Pg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Vc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ga=function(e){var t=e.parent||Rt,n=e.keyframes?UT(fn(e.keyframes)):hi;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},FT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Yc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},BT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yh=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kT=function r(e){return!e||e._ts&&r(e.parent)},Ig=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},jc=function(e){return e._end=rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),jc(e),n._dirty||us(n,e)),e},jg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gc(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},zi=function(e,t,n,i){return t.parent&&Or(t),t._start=rn((tr(n)?n:n||e!==Rt?oi(e,n,t):e._time)+t._delay),t._end=rn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yg(e,t,"_first","_last",e._sort?"_start":0),jh(t)||(e._recent=t),i||jg(e,t),e._ts<0&&Zc(e,e._tTime),e},Zg=function(e,t){return(Xn.ScrollTrigger||Xc("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Kg=function(e,t,n,i,s){if(pf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gg!==Fn.frame)return Ir.push(e),e._lazy=[s,i],1},zT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&zT(e)&&!(!e._initted&&jh(e))||(e._ts<0||e._dp._ts<0)&&!jh(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Ma(0,e._tDur,t),u=Qs(c,a),e._yoyo&&u&1&&(o=1-o),u!==Qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Kg(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Yh(e,t,n,!0),e._onUpdate&&!n&&ui(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!n&&!hn&&(ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},eo=function(e,t,n,i){var s=e._repeat,o=rn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:rn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Zc(e,e._tTime=e._tDur*a),e.parent&&jc(e),n||us(e.parent,e),e},Lg=function(e){return e instanceof un?us(e):eo(e,e._dur)},GT={_start:0,endTime:ya,totalDuration:ya},oi=function r(e,t,n){var i=e.labels,s=e._recent||GT,o=e.duration()>=ci?s.endTime(!1):e._dur,a,c,l;return qt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},_a=function(e,t,n){var i=tr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Bn(c.vars.inherit)&&c.parent;o.immediateRender=Bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},Dr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!qt(e)||!(t=LT.exec(e))?"":t[1]},WT=function(e,t,n){return Dr(n,function(i){return Ma(e,t,i)})},Zh=[].slice,Jg=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==ai},qT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return qt(i)&&!t||Jg(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return It&&!t&&It.selector?It.selector(e):qt(e)&&!n&&(qh||!to())?Zh.call((t||sf).querySelectorAll(e),0):fn(e)?qT(e,n):Jg(e)?Zh.call(e,0):e?[e]:[]},Kh=function(e){return e=li(e)[0]||zc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?zc("Invalid scope")||sf.createElement("div"):e)}},$g=function(e){return e.sort(function(){return .5-Math.random()})},Qg=function(e){if(Lt(e))return e;var t=Hi(e)?e:{each:e},n=hs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return qt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,y,v,S,M,A,w,I,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ci])[1],!x){for(w=-ci;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=o[_]=[],p=c?Math.min(x,_)*u-.5:i%x,y=x===ci?0:c?_*h/x-.5:i/x|0,w=0,I=ci,A=0;A<_;A++)v=A%x-p,S=y-(A/x|0),m[A]=M=l?Math.abs(l==="y"?S:v):Fg(v*v+S*S),M>w&&(w=M),M<I&&(I=M);i==="random"&&$g(m),m.max=w-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=sn(t.amount||t.each)||0,n=n&&_<0?c_(n):n}return _=(m[f]-m.min)/m.max||0,rn(m.b+(n?n(_):_)*m.v)+m.u}},Jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=rn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(tr(n)?0:sn(n))}},e_=function(e,t){var n=fn(e),i,s;return!n&&Hi(e)&&(i=n=e.radius||ci,e.values?(e=li(e.values),(s=!tr(e[0]))&&(i*=i)):e=Jh(e.increment)),Dr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=ci,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:o,s||u===o||tr(o)?u:u+sn(o)}:Jh(e))},t_=function(e,t,n,i){return Dr(fn(e)?!t:n===!0?!!(n=0):!i,function(){return fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},XT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},YT=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},jT=function(e,t,n){return i_(e,t,0,1,n)},n_=function(e,t,n){return Dr(n,function(i){return e[~~t(i)]})},ZT=function r(e,t,n){var i=t-e;return fn(e)?n_(e,r(0,e.length),t):Dr(n,function(s){return(i+(s-e)%i)%i+e})},KT=function r(e,t,n){var i=t-e,s=i*2;return fn(e)?n_(e,r(0,e.length-1),t):Dr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},no=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?kg:Wh),n+=e.substr(t,i-t)+t_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},i_=function(e,t,n,i,s){var o=t-e,a=i-n;return Dr(s,function(c){return n+((c-e)/o*a||0)})},JT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=qt(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ds(fn(e)?[]:{},e));if(!u){for(c in t)ff.call(a,e,c,"get",t[c]);s=function(g){return _f(g,a)||(o?e.p:e)}}}return Dr(n,s)},Og=function(e,t,n){var i=e.labels,s=ci,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},ui=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ir.length&&Hc(),a&&(It=a),u=c?s.apply(l,c):s.call(l),It=o,u},pa=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ui(e,"onInterrupt"),e},Js,r_=[],s_=function(e){if(tf()&&e){e=!e.name&&e.default||e;var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ya,render:_f,add:ff,kill:dE,modifier:fE,rawVars:0},o={targetTest:0,get:0,getSetter:Kc,aliases:{},register:0};if(to(),e!==i){if(Un[t])return;hi(i,hi(Vc(e,s),o)),ds(i.prototype,ds(s,Vc(e,o))),Un[i.prop=t]=i,e.targetTest&&(Fc.push(i),of[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vg(t,i),e.register&&e.register(dn,i,wn)}else e&&r_.push(e)},_t=255,ma={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Bh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},o_=function(e,t,n){var i=e?tr(e)?[e>>16,e>>8&_t,e&_t]:0:ma.black,s,o,a,c,l,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Wh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Bh(c+1/3,s,o),i[1]=Bh(c,s,o),i[2]=Bh(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(nf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wh)||ma.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},a_=function(e){var t=[],n=[],i=-1;return e.split(er).forEach(function(s){var o=s.match(ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Dg=function(e,t,n){var i="",s=(e+i).match(er),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=o_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=a_(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(er,"1").split(ps),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(er),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),$T=/hsl[a]?\(/,uf=function(e){var t=e.join(" "),n;if(er.lastIndex=0,er.test(t))return n=$T.test(t),e[1]=Dg(e[1],n),e[0]=Dg(e[0],n,a_(e[1])),!0},xa,Fn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,g=function _(m){var p=r()-i,y=m===!0,v,S,M,A;if(p>e&&(n+=p-t),i+=p,M=i-n,v=M-o,(v>0||y)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=s?4:s-v),S=1),y||(c=l(_)),S)for(d=0;d<a.length;d++)a[d](M,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){zg&&(!qh&&tf()&&(ai=qh=window,sf=ai.document||{},Xn.gsap=dn,(ai.gsapVersions||(ai.gsapVersions=[])).push(dn.version),Hg(kc||ai.GreenSockGlobals||!ai.gsap&&ai||{}),u=ai.requestAnimationFrame,r_.forEach(s_)),c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},xa=1,g(2))},sleep:function(){(u?ai.cancelAnimationFrame:clearTimeout)(c),xa=0,l=ya},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var v=p?function(S,M,A,w){m(S,M,A,w),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),to(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),to=function(){return!xa&&Fn.wake()},ot={},QT=/^[\d.\-M][\d.\-,\s]/,eE=/["']/g,tE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(eE,"").trim():+l,i=c.substr(a+1).trim();return t},nE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},iE=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tE(t[1])]:nE(e).split(",").map(qg)):ot._CE&&QT.test(e)?ot._CE("",e):n},c_=function(e){return function(t){return 1-e(1-t)}},l_=function r(e,t){for(var n=e._first,i;n;)n instanceof un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},hs=function(e,t){return e&&(Lt(e)?e:ot[e]||iE(e))||t},gs=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){ot[a]=Xn[a]=s,ot[o=a.toLowerCase()]=n;for(var c in s)ot[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ot[a+"."+c]=s[c]}),s},u_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*IT((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:u_(a);return s=Gh/s,c.config=function(l,u){return r(e,l,u)},c},zh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:u_(n);return i.config=function(s){return r(e,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;gs("Elastic",kh("in"),kh("out"),kh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});gs("Circ",function(r){return-(Fg(1-r*r)-1)});gs("Sine",function(r){return r===1?1:-PT(r*RT)+1});gs("Back",zh("in"),zh("out"),zh());ot.SteppedEase=ot.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*Ma(0,o,a)|0)+s)*n}}};$s.ease=ot["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return af+=r+","+r+"Params,"});var hf=function(e,t){this.id=CT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lf,this.set=t?t.getSetter:Kc},Sa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,eo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),xa||Fn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zc(this,n),!s._dp||s.parent||jg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ig(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ig(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Qs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this._tDur,i),!0),jc(this),BT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DT);var i=hn;return hn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),Bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Lt(n)?n:Xg,a=function(){var l=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){pa(this)},r}();hi(Sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var un=function(r){Ug(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),Rt&&zi(n.parent||Rt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zg(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _a(0,arguments,this),this},t.from=function(i,s,o){return _a(1,arguments,this),this},t.fromTo=function(i,s,o,a){return _a(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,oi(this,o),1),this},t.call=function(i,s,o){return zi(this,Ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Ut(i,o,oi(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,ga(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,ga(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:rn(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,_,m,p,y,v,S,M,A,w;if(this!==Rt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,v=this._ts,p=!v,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=rn(u%m),u===c?(_=this._repeat,f=l):(_=~~(u/m),_&&_===u/m&&(f=l,_--),f>l&&(f=l)),M=Qs(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),A&&_&1&&(f=l-f,w=1),_!==M&&!this._lock){var I=A&&M&1,x=I===(A&&_&1);if(_<M&&(I=!I),a=I?0:u%l?l:u,this._lock=1,this.render(a||(w?0:rn(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=I?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;l_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=VT(this,rn(a),rn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(ui(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-vt);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||hn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=b?-vt:vt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-vt)._zTime=f>=a?1:-1,this._ts))return this._start=S,jc(this),this.render(i,s,o);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Or(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(ui(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(tr(s)||(s=oi(this,s,i)),!(i instanceof Sa)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(qt(i))return this.addLabel(i,s);if(Lt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ut?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(Yc(this,i),i===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ut.delayedCall(0,s||ya,o);return a.data="isPause",this._hasPause=1,zi(this,a,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Pr!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=li(i),c=this._first,l=tr(s),u;c;)c instanceof Ut?NT(c._targets,a)&&(l?(!Pr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=oi(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,g=Ut.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&eo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,hi({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Og(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Og(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=ci,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;eo(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Wg(Rt,Gc(i,Rt)),Gg=Fn.frame),Fn.frame>=Cg){Cg+=kn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&kn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(Sa);hi(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var rE=function(e,t,n,i,s,o,a){var c=new wn(this._pt,e,t,0,1,gf,null,s),l=0,u=0,h,f,d,g,_,m,p,y;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=no(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Uh)||[];h=Uh.exec(i);)g=h[0],_=i.substring(l,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ms(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=Uh.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(rf.test(i)||p)&&(c.e=0),this._pt=c,c},ff=function(e,t,n,i,s,o,a,c,l,u){Lt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Lt(h)?l?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Lt(h)?l?lE:d_:mf,g;if(qt(i)&&(~i.indexOf("random(")&&(i=no(i)),i.charAt(1)==="="&&(g=ms(f,i)+(sn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||$h)return!isNaN(f*i)&&i!==""?(g=new wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?hE:p_,0,d),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Xc(t,i),rE.call(this,e,t,f,i,d,c||kn.stringFilter,l))},sE=function(e,t,n,i,s){if(Lt(e)&&(e=va(e,s,t,n,i)),!Hi(e)||e.style&&e.nodeType||fn(e)||Bg(e))return qt(e)?va(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=va(e[a],s,t,n,i);return o},df=function(e,t,n,i,s,o){var a,c,l,u;if(Un[e]&&(a=new Un[e]).init(s,a.rawVars?t[e]:sE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Js))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Pr,$h,pf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,y=e._targets,v=e.parent,S=v&&v.data==="nested"?v.vars.targets:y,M=e._overwrite==="auto"&&!ef,A=e.timeline,w,I,x,b,X,q,z,B,F,U,L,k,j;if(A&&(!g||!s)&&(s="none"),e._ease=hs(s,$s.ease),e._yEase=d?c_(hs(d===!0?s:d,$s.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(B=y[0]?Lr(y[0]).harness:0,k=B&&i[B.prop],w=Vc(i,of),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!_?p.render(-1,!0):p.revert(f&&m?Uc:OT),p._lazy=0),o){if(Or(e._startAt=Ut.set(y,hi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&Bn(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!_)&&e._startAt.revert(Uc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(a=!1),x=hi({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Bn(c),immediateRender:a,stagger:0,parent:v},w),k&&(x[B.prop]=k),Or(e._startAt=Ut.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Uc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Bn(c)||c&&!m,I=0;I<y.length;I++){if(X=y[I],z=X._gsap||cf(y)[I]._gsap,e._ptLookup[I]=U={},Xh[z.id]&&Ir.length&&Hc(),L=S===y?I:S.indexOf(X),B&&(F=new B).init(X,k||w,e,L,S)!==!1&&(e._pt=b=new wn(e._pt,X,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(R){U[R]=b}),F.priority&&(q=1)),!B||k)for(x in w)Un[x]&&(F=df(x,w,e,L,X,S))?F.priority&&(q=1):U[x]=b=ff.call(e,X,x,"get",w[x],L,S,0,i.stringFilter);e._op&&e._op[I]&&e.kill(X,e._op[I]),M&&e._pt&&(Pr=e,Rt.killTweensOf(X,U,e.globalTime(t)),j=!e.parent,Pr=0),e._pt&&c&&(Xh[z.id]=1)}q&&vf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!j,g&&t<=0&&A.render(ci,!0,!0)},oE=function(e,t,n,i,s,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return $h=1,e.vars[t]="+=0",pf(e,a),$h=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!s?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=Ot(n)+sn(u.e)),u.b&&(u.b=l.s+sn(u.b))},aE=function(e,t){var n=e[0]?Lr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=ds({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},cE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(fn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},va=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):qt(e)&&~e.indexOf("random(")?no(e):e},h_=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",f_={};bn(h_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return f_[r]=1});var Ut=function(r){Ug(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ga(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,y=i.parent||Rt,v=(fn(n)||Bg(n)?tr(n[0]):"length"in i)?[n]:li(n),S,M,A,w,I,x,b,X;if(a._targets=v.length?cf(v):zc("GSAP target "+n+" not found. https://greensock.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Nc(l)||Nc(u)){if(i=a.vars,S=a.timeline=new un({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Qi(a),S._start=0,f||Nc(l)||Nc(u)){if(w=v.length,b=f&&Qg(f),Hi(f))for(I in f)~h_.indexOf(I)&&(X||(X={}),X[I]=f[I]);for(M=0;M<w;M++)A=Vc(i,f_),A.stagger=0,p&&(A.yoyoEase=p),X&&ds(A,X),x=v[M],A.duration=+va(l,Qi(a),M,x,v),A.delay=(+va(u,Qi(a),M,x,v)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(x,A,b?b(M,x,v):0),S._ease=ot.none;S.duration()?l=u=0:a.timeline=0}else if(g){ga(hi(S.vars.defaults,{ease:"none"})),S._ease=hs(g.ease||i.ease||"none");var q=0,z,B,F;if(fn(g))g.forEach(function(U){return S.to(v,U,">")}),S.duration();else{A={};for(I in g)I==="ease"||I==="easeEach"||cE(I,g[I],A,g.easeEach);for(I in A)for(z=A[I].sort(function(U,L){return U.t-L.t}),q=0,M=0;M<z.length;M++)B=z[M],F={ease:B.e,duration:(B.t-(M?z[M-1].t:0))/100*l},F[I]=B.v,S.to(v,F,q),q+=F.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return d===!0&&!ef&&(Pr=Qi(a),Rt.killTweensOf(v),Pr=0),zi(y,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===rn(y._time)&&Bn(h)&&kT(Qi(a))&&y.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&Zg(Qi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-vt&&!u?c:i<vt?0:i,f,d,g,_,m,p,y,v,S;if(!l)HT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=rn(h%_),h===c?(g=this._repeat,f=l):(g=~~(h/_),g&&g===h/_&&(f=l,g--),f>l&&(f=l)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=l-f),m=Qs(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&l_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(rn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Kg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/l),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!g&&(ui(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!f&&p?-vt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Yh(this,i,s,o),ui(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Yh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Or(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ui(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){xa||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||pf(this,c),l=this._ease(c/this._dur),oE(this,i,s,o,a,l,c)?this.resetTo(i,s,o,a):(Zc(this,0),this.parent||Yg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Pr&&Pr.vars.overwrite!==!0)._first||pa(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?li(i):a,l=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&FT(a,c))return s==="all"&&(this._pt=0),pa(this);for(h=this._op=this._op||[],s!=="all"&&(qt(s)&&(_={},bn(s,function(y){return _[y]=1}),s=_),s=aE(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Yc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _a(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return _a(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(Sa);hi(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new un,t=Zh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var mf=function(e,t,n){return e[t]=n},d_=function(e,t,n){return e[t](n)},lE=function(e,t,n,i){return e[t](i.fp,n)},uE=function(e,t,n){return e.setAttribute(t,n)},Kc=function(e,t){return Lt(e[t])?d_:qc(e[t])&&e.setAttribute?uE:mf},p_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_f=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},dE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Yc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},pE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||p_,this.d=c||this,this.set=l||mf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=pE,this.m=n,this.mt=s,this.tween=i},r}();bn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return of[r]=1});Xn.TweenMax=Xn.TweenLite=Ut;Xn.TimelineLite=Xn.TimelineMax=un;Rt=new un({sortChildren:!1,defaults:$s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=uf;var fs=[],Bc={},mE=[],Ng=0,gE=0,Hh=function(e){return(Bc[e]||mE).map(function(t){return t()})},Qh=function(){var e=Date.now(),t=[];e-Ng>2&&(Hh("matchMediaInit"),fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Hh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ng=e,Hh("matchMedia"))},m_=function(){function r(t,n){this.selector=n&&Kh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var l=It,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Kh(s)),It=o,h=i.apply(o,arguments),Lt(h)&&o._r.push(h),It=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Lt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Ut)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var a=fs.length;a--;)fs[a].id===this.id&&fs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),_E=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Hi(n)||(n={matches:n});var o=new m_(0,s||this.scope),a=o.conditions={},c,l,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=ai.matchMedia(n[l]),c&&(fs.indexOf(o)<0&&fs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Qh):c.addEventListener("change",Qh)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Wc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return s_(i)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=li(e)[0]);var s=Lr(e||{}).get,o=n?Xg:qg;return n==="native"&&(n=""),e&&(t?o((Un[t]&&Un[t].get||s)(e,t,n,i)):function(a,c,l){return o((Un[a]&&Un[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(u){return dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Un[t],a=Lr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Js._pt=0,h.init(e,n?u+n:u,Js,0,[e]),h.render(1,h),Js._pt&&_f(1,Js)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=dn.to(e,ds((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,$s.ease)),Pg($s,e||{})},config:function(e){return Pg(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Xn[a]&&zc(t+" effect requires "+a+" plugin.")}),Fh[t]=function(a,c,l){return n(li(a),hi(c||{},s),l)},o&&(un.prototype[t]=function(a,c,l){return this.add(Fh[t](a,Hi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ot[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):ot},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new un(e),i,s;for(n.smoothChildTiming=Bn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(Rt,n,0),n},context:function(e,t){return e?new m_(e,t):It},matchMedia:function(e){return new _E(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qh()},addEventListener:function(e,t){var n=Bc[e]||(Bc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ZT,wrapYoyo:KT,distribute:Qg,random:t_,snap:e_,normalize:jT,getUnit:sn,clamp:WT,splitColor:o_,toArray:li,selector:Kh,mapRange:i_,pipe:XT,unitize:YT,interpolate:JT,shuffle:$g},install:Hg,effects:Fh,ticker:Fn,updateRoot:un.updateRoot,plugins:Un,globalTimeline:Rt,core:{PropTween:wn,globals:Vg,Tween:Ut,Timeline:un,Animation:Sa,getCache:Lr,_removeLinkedListItem:Yc,reverting:function(){return hn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return ef=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wc[r]=Ut[r]});Fn.add(un.updateRoot);Js=Wc.to({},{duration:0});var vE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=vE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Vh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(qt(s)&&(c={},bn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}yE(a,s)}}}},dn=Wc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vh("roundProps",Jh),Vh("modifiers"),Vh("snap",e_))||Wc;Ut.version=un.version=dn.version="3.12.2";zg=1;tf()&&to();var xE=ot.Power0,SE=ot.Power1,ME=ot.Power2,bE=ot.Power3,wE=ot.Power4,TE=ot.Linear,EE=ot.Quad,AE=ot.Cubic,RE=ot.Quart,CE=ot.Quint,PE=ot.Strong,IE=ot.Elastic,LE=ot.Back,OE=ot.SteppedEase,DE=ot.Bounce,NE=ot.Sine,UE=ot.Expo,FE=ot.Circ;var g_,Nr,ro,Tf,xs,BE,__,Ef,kE=function(){return typeof window!="undefined"},ir={},ys=180/Math.PI,so=Math.PI/180,io=Math.atan2,v_=1e8,Af=/([A-Z])/g,zE=/(left|right|width|margin|padding|x)/i,HE=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},T_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},E_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qE=function(e,t,n){return e.style[t]=n},XE=function(e,t,n){return e.style.setProperty(t,n)},YE=function(e,t,n){return e._gsap[t]=n},jE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ZE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},KE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",Ti=Ct+"Origin",JE=function r(e,t){var n=this,i=this.target,s=i.style;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=nr(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:nr(i,e);else return Vi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ti,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},A_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$E=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ef(),(!s||!s.isStart)&&!n[Ct]&&(A_(n),i.uncache=1)}},R_=function(e,t){var n={target:e,props:[],revert:$E,save:JE};return e._gsap||dn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},C_,Mf=function(e,t){var n=Nr.createElementNS?Nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nr.createElement(e);return n.style?n:Nr.createElement(e)},Gi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Af,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,oo(t)||t,1)||""},y_="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,n){var i=t||xs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(y_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?y_[o]:"")+e},bf=function(){kE()&&window.document&&(g_=window,Nr=g_.document,ro=Nr.documentElement,xs=Mf("div")||{style:{}},BE=Mf("div"),Ct=oo(Ct),Ti=Ct+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",C_=!!oo("perspective"),Ef=dn.core.reverting,Tf=1)},yf=function r(e){var t=Mf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ro.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ro.removeChild(t),this.style.cssText=s,o},x_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},P_=function(e){var t;try{t=e.getBBox()}catch{t=yf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===yf||(t=yf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+x_(e,["x","cx","x1"])||0,y:+x_(e,["y","cy","y1"])||0,width:0,height:0}:t},I_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&P_(e))},wa=function(e,t){if(t){var n=e.style;t in ir&&t!==Ti&&(t=Ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Af,"-$1").toLowerCase())):n.removeAttribute(t)}},Ur=function(e,t,n,i,s,o){var a=new wn(e._pt,t,n,0,1,o?E_:T_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},S_={deg:1,rad:1,turn:1},QE={grid:1,flex:1},Fr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=xs.style,c=zE.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===o||!s||S_[i]||S_[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&I_(e),(d||o==="%")&&(ir[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[c?"width":"height"]:e[u],Ot(d?s/g*h:s/100*g)):(a[c?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Nr||!_.appendChild)&&(_=Nr.body),m=_._gsap,m&&d&&m.width&&c&&m.time===Fn.time&&!m.uncache?Ot(s/m.width*h):((d||o==="%")&&!QE[Gi(_,"display")]&&(a.position=Gi(e,"position")),_===e&&(a.position="static"),_.appendChild(xs),g=xs[u],_.removeChild(xs),a.position="absolute",c&&d&&(m=Lr(_),m.time=Fn.time,m.width=_[u]),Ot(f?g*s/h:g&&s?h/g*s:0))))},nr=function(e,t,n,i){var s;return Tf||bf(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Ea(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$c(Gi(e,Ti))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jc[t]&&Jc[t](e,t,n)||Gi(e,t)||lf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(e,t,s,n)+n:s},eA=function(e,t,n,i){if(!n||n==="none"){var s=oo(t,e,1),o=s&&Gi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gi(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,gf),c=0,l=0,u,h,f,d,g,_,m,p,y,v,S,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Gi(e,t)||i,e.style[t]=n),u=[n,i],uf(u),n=u[0],i=u[1],f=n.match(ps)||[],M=i.match(ps)||[],M.length){for(;h=ps.exec(i);)m=h[0],y=i.substring(c,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=ms(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),c=ps.lastIndex-v.length,v||(v=v||kn.units[t]||S,c===i.length&&(i+=v,a.e+=v)),S!==v&&(d=Fr(e,t,_,v)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?E_:T_;return rf.test(i)&&(a.e=0),this._pt=a,a},M_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=M_[n]||n,t[1]=M_[i]||i,t.join(" ")},nA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],ir[a]&&(c=1,a=a==="transformOrigin"?Ti:Ct),wa(n,a);c&&(wa(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),Ea(n,1),o.uncache=1,A_(i)))}},Jc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,n,0,0,nA);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ta=[1,0,0,1,0,0],L_={},O_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},b_=function(e){var t=Gi(e,Ct);return O_(t)?Ta:t.substr(7).match(nf).map(Ot)},Rf=function(e,t){var n=e._gsap||Lr(e),i=e.style,s=b_(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ta:s):(s===Ta&&!e.offsetParent&&e!==ro&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,ro.appendChild(e)),s=b_(e),c?i.display=c:wa(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):ro.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wf=function(e,t,n,i,s,o){var a=e._gsap,c=s||Rf(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],y=c[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,A,w,I,x;n?c!==Ta&&(w=d*m-g*_)&&(I=S*(m/w)+M*(-_/w)+(_*y-m*p)/w,x=S*(-g/w)+M*(d/w)-(d*y-g*p)/w,S=I,M=x):(A=P_(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),M=A.y+(~(v[1]||v[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&a.smooth?(p=S-l,y=M-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ti]="0px 0px",o&&(Ur(o,a,"xOrigin",l,S),Ur(o,a,"yOrigin",u,M),Ur(o,a,"xOffset",h,a.xOffset),Ur(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Ea=function(e,t){var n=e._gsap||new hf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Gi(e,Ti)||"0",u,h,f,d,g,_,m,p,y,v,S,M,A,w,I,x,b,X,q,z,B,F,U,L,k,j,R,N,K,O,oe,le;return u=h=f=_=m=p=y=v=S=0,d=g=1,n.svg=!!(e.getCTM&&I_(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ct]!=="none"?c[Ct]:"")),i.scale=i.rotate=i.translate="none"),w=Rf(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),l=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",L=""):L=!t&&e.getAttribute("data-svg-origin"),wf(e,L||l,!!L||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,A=n.yOrigin||0,w!==Ta&&(X=w[0],q=w[1],z=w[2],B=w[3],u=F=w[4],h=U=w[5],w.length===6?(d=Math.sqrt(X*X+q*q),g=Math.sqrt(B*B+z*z),_=X||q?io(q,X)*ys:0,y=z||B?io(z,B)*ys+_:0,y&&(g*=Math.abs(Math.cos(y*so))),n.svg&&(u-=M-(M*X+A*z),h-=A-(M*q+A*B))):(le=w[6],O=w[7],R=w[8],N=w[9],K=w[10],oe=w[11],u=w[12],h=w[13],f=w[14],I=io(le,K),m=I*ys,I&&(x=Math.cos(-I),b=Math.sin(-I),L=F*x+R*b,k=U*x+N*b,j=le*x+K*b,R=F*-b+R*x,N=U*-b+N*x,K=le*-b+K*x,oe=O*-b+oe*x,F=L,U=k,le=j),I=io(-z,K),p=I*ys,I&&(x=Math.cos(-I),b=Math.sin(-I),L=X*x-R*b,k=q*x-N*b,j=z*x-K*b,oe=B*b+oe*x,X=L,q=k,z=j),I=io(q,X),_=I*ys,I&&(x=Math.cos(I),b=Math.sin(I),L=X*x+q*b,k=F*x+U*b,q=q*x-X*b,U=U*x-F*b,X=L,F=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ot(Math.sqrt(X*X+q*q+z*z)),g=Ot(Math.sqrt(U*U+le*le)),I=io(F,U),y=Math.abs(I)>2e-4?I*ys:0,S=oe?1/(oe<0?-oe:oe):0),n.svg&&(L=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!O_(Gi(e,Ct)),L&&e.setAttribute("transform",L))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ot(d),n.scaleY=Ot(g),n.rotation=Ot(_)+a,n.rotationX=Ot(m)+a,n.rotationY=Ot(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ti]=$c(l)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?rA:C_?D_:iA,n.uncache=0,n},$c=function(e){return(e=e.split(" "))[0]+" "+e[1]},xf=function(e,t,n){var i=sn(t);return Ot(parseFloat(t)+parseFloat(Fr(e,"x",n+"px",i)))+i},iA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,D_(e,t)},_s="0deg",ba="0px",vs=") ",D_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==_s||u!==_s)){var A=parseFloat(u)*so,w=Math.sin(A),I=Math.cos(A),x;A=parseFloat(h)*so,x=Math.cos(A),o=xf(y,o,w*x*-v),a=xf(y,a,-Math.sin(A)*-v),c=xf(y,c,I*x*-v+v)}m!==ba&&(S+="perspective("+m+vs),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||o!==ba||a!==ba||c!==ba)&&(S+=c!==ba||M?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+vs),l!==_s&&(S+="rotate("+l+vs),u!==_s&&(S+="rotateY("+u+vs),h!==_s&&(S+="rotateX("+h+vs),(f!==_s||d!==_s)&&(S+="skew("+f+", "+d+vs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+vs),y.style[Ct]=S||"translate(0, 0)"},rA=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),M,A,w,I,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=so,l*=so,M=Math.cos(c)*h,A=Math.sin(c)*h,w=Math.sin(c-l)*-f,I=Math.cos(c-l)*f,l&&(u*=so,x=Math.tan(l-u),x=Math.sqrt(1+x*x),w*=x,I*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,A*=x)),M=Ot(M),A=Ot(A),w=Ot(w),I=Ot(I)):(M=h,I=f,A=w=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Fr(d,"x",o,"px"),S=Fr(d,"y",a,"px")),(g||_||m||p)&&(v=Ot(v+g-(g*M+_*w)+m),S=Ot(S+_-(g*A+_*I)+p)),(i||s)&&(x=d.getBBox(),v=Ot(v+i/100*x.width),S=Ot(S+s/100*x.height)),x="matrix("+M+","+A+","+w+","+I+","+v+","+S+")",d.setAttribute("transform",x),y&&(d.style[Ct]=x)},sA=function(e,t,n,i,s){var o=360,a=qt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ys:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*v_)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*v_)%o-~~(l/o)*o)),e._pt=f=new wn(e._pt,t,n,i,l,VE),f.e=u,f.u="deg",e._props.push(n),f},w_=function(e,t){for(var n in t)e[n]=t[n];return e},oA=function(e,t,n){var i=w_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=Ea(n,1),wa(n,Ct),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ct],o[Ct]=t,a=Ea(n,1),o[Ct]=l);for(c in ir)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=sn(l),g=sn(u),h=d!==g?Fr(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new wn(e._pt,a,c,h,f-h,Sf),e._pt.u=g||0,e._props.push(c));w_(a,i)};bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Jc[e>1?"border"+r:r]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return nr(a,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(c,d,h)}});var Cf={name:"css",register:bf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,g,_,m,p,y,v,S,M,A,w,I;Tf||bf(),this.styles=this.styles||R_(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&df(_,t,n,i,e,s)))){if(d=typeof u,g=Jc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=no(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",er.lastIndex=0,er.test(l)||(m=sn(l),p=sn(u)),p?m!==p&&(l=Fr(e,_,l,p)+p):m&&(u+=m),this.add(a,"setProperty",l,u,i,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],qt(l)&&~l.indexOf("random(")&&(l=no(l)),sn(l+"")||(l+=kn.units[_]||sn(nr(e,_))||""),(l+"").charAt(1)==="="&&(l=nr(e,_))):l=nr(e,_),f=parseFloat(l),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Vi&&(_==="autoAlpha"&&(f===1&&nr(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ir,v){if(this.styles.save(_),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ea(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new wn(this._pt,a,Ct,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new wn(this._pt,M,"scaleY",M.scaleY,(y?ms(M.scaleY,y+h):h)-M.scaleY||0,Sf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Ti,0,a[Ti]),u=tA(u),M.svg?wf(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ur(this,M,"zOrigin",M.zOrigin,p),Ur(this,a,_,$c(l),$c(u)));continue}else if(_==="svgOrigin"){wf(e,u,1,A,0,this);continue}else if(_ in L_){sA(this,M,_,f,y?ms(f,y+u):u);continue}else if(_==="smoothOrigin"){Ur(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){oA(this,u,e);continue}}else _ in a||(_=oo(_)||_);if(v||(h||h===0)&&(f||f===0)&&!HE.test(u)&&_ in a)m=(l+"").substr((f+"").length),h||(h=0),p=sn(u)||(_ in kn.units?kn.units[_]:m),m!==p&&(f=Fr(e,_,l,p)),this._pt=new wn(this._pt,v?M:a,_,f,(y?ms(f,y+h):h)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?WE:Sf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=GE);else if(_ in a)eA.call(this,e,_,l,y?y+u:u);else if(_ in e)this.add(e,_,l||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Xc(_,u);continue}v||(_ in a?I.push(_,0,a[_]):I.push(_,1,l||e[_])),o.push(_)}}w&&vf(this)},render:function(e,t){if(t.tween._time||!Ef())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:nr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in ir&&t!==Ti&&(e._gsap.x||nr(e,"x"))?n&&__===n?t==="scale"?jE:YE:(__=n||{})&&(t==="scale"?ZE:KE):e.style&&!qc(e.style[t])?qE:~t.indexOf("-")?XE:Kc(e,t)},core:{_removeProperty:wa,_getMatrix:Rf}};dn.utils.checkPrefix=oo;dn.core.getStyleSaver=R_;(function(r,e,t,n){var i=bn(r+","+e+","+t,function(s){ir[s]=1});bn(e,function(s){kn.units[s]="deg",L_[s]=1}),Vi[i[13]]=r+","+e,bn(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});dn.registerPlugin(Cf);var mt=dn.registerPlugin(Cf)||dn,Ik=mt.core.Tween;function N_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function aA(r,e,t){return e&&N_(r.prototype,e),t&&N_(r,t),r}var on,Pf,cA,Yn,Br,kr,co,F_,Ss,Ra,B_,rr,Ei,k_,z_=function(){return on||typeof window!="undefined"&&(on=window.gsap)&&on.registerPlugin&&on},H_=1,ao=[],et=[],Ai=[],Ca=Date.now,If=function(e,t){return t},lA=function(){var e=Ra.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Ai),et=n,Ai=i,If=function(o,a){return t[o](a)}},or=function(e,t){return~Ai.indexOf(e)&&Ai[Ai.indexOf(e)+1][t]},Pa=function(e){return!!~B_.indexOf(e)},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qc="scrollLeft",el="scrollTop",Lf=function(){return rr&&rr.isPressed||et.cache++},tl=function(e,t){var n=function i(s){if(s||s===0){H_&&(Yn.history.scrollRestoration="manual");var o=rr&&rr.isPressed;s=i.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),i.cacheID=et.cache,o&&If("ss",s)}else(t||et.cache!==i.cacheID||If("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:Qc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tl(function(r){return arguments.length?Yn.scrollTo(r,Bt.sc()):Yn.pageXOffset||Br[Qc]||kr[Qc]||co[Qc]||0})},Bt={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:tl(function(r){return arguments.length?Yn.scrollTo(pn.sc(),r):Yn.pageYOffset||Br[el]||kr[el]||co[el]||0})},An=function(e,t){return(t&&t._ctx&&t._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sr=function(e,t){var n=t.s,i=t.sc;Pa(e)&&(e=Br.scrollingElement||kr);var s=et.indexOf(e),o=i===Bt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||En(e,"scroll",Lf);var a=et[s+o],c=a||(et[s+o]=tl(or(e,n),!0)||(Pa(e)?i:tl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),c},nl=function(e,t,n){var i=e,s=e,o=Ca(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=Ca();_||m-o>c?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Ca();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Aa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},U_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},V_=function(){Ra=on.core.globals().ScrollTrigger,Ra&&Ra.core&&lA()},G_=function(e){return on=e||z_(),on&&typeof document!="undefined"&&document.body&&(Yn=window,Br=document,kr=Br.documentElement,co=Br.body,B_=[Yn,Br,kr,co],cA=on.utils.clamp,k_=on.core.context||function(){},Ss="onpointerenter"in co?"pointer":"mouse",F_=bt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=bt.eventTypes=("ontouchstart"in kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return H_=0},500),V_(),Pf=1),Pf};pn.op=Bt;et.cache=0;var bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Pf||G_(on)||console.warn("Please gsap.registerPlugin(Observer)"),Ra||V_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,M=n.onRight,A=n.onLeft,w=n.onUp,I=n.onDown,x=n.onChangeX,b=n.onChangeY,X=n.onChange,q=n.onToggleX,z=n.onToggleY,B=n.onHover,F=n.onHoverEnd,U=n.onMove,L=n.ignoreCheck,k=n.isNormalizer,j=n.onGestureStart,R=n.onGestureEnd,N=n.onWheel,K=n.onEnable,O=n.onDisable,oe=n.onClick,le=n.scrollSpeed,xe=n.capture,Se=n.allowClicks,Me=n.lockAxis,Be=n.onLockAxis;this.target=a=An(a)||kr,this.vars=n,d&&(d=on.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,le=le||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Yn.getComputedStyle(co).lineHeight)||22);var At,Ie,G,De,de,Pe,Ce,Y=this,Ne=0,Fe=0,rt=sr(a,pn),Je=sr(a,Bt),Tt=rt(),C=Je(),T=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",W=Pa(a),te=a.ownerDocument||Br,ne=[0,0,0],ie=[0,0,0],we=0,se=function(){return we=Ca()},$=function(fe,Ve){return(Y.event=fe)&&d&&~d.indexOf(fe.target)||Ve&&T&&fe.pointerType!=="touch"||L&&L(fe,Ve)},ve=function(){Y._vx.reset(),Y._vy.reset(),Ie.pause(),h&&h(Y)},Ee=function(){var fe=Y.deltaX=U_(ne),Ve=Y.deltaY=U_(ie),$e=Math.abs(fe)>=i,me=Math.abs(Ve)>=i;X&&($e||me)&&X(Y,fe,Ve,ne,ie),$e&&(M&&Y.deltaX>0&&M(Y),A&&Y.deltaX<0&&A(Y),x&&x(Y),q&&Y.deltaX<0!=Ne<0&&q(Y),Ne=Y.deltaX,ne[0]=ne[1]=ne[2]=0),me&&(I&&Y.deltaY>0&&I(Y),w&&Y.deltaY<0&&w(Y),b&&b(Y),z&&Y.deltaY<0!=Fe<0&&z(Y),Fe=Y.deltaY,ie[0]=ie[1]=ie[2]=0),(De||G)&&(U&&U(Y),G&&(y(Y),G=!1),De=!1),Pe&&!(Pe=!1)&&Be&&Be(Y),de&&(N(Y),de=!1),At=0},Re=function(fe,Ve,$e){ne[$e]+=fe,ie[$e]+=Ve,Y._vx.update(fe),Y._vy.update(Ve),l?At||(At=requestAnimationFrame(Ee)):Ee()},_e=function(fe,Ve){Me&&!Ce&&(Y.axis=Ce=Math.abs(fe)>Math.abs(Ve)?"x":"y",Pe=!0),Ce!=="y"&&(ne[2]+=fe,Y._vx.update(fe,!0)),Ce!=="x"&&(ie[2]+=Ve,Y._vy.update(Ve,!0)),l?At||(At=requestAnimationFrame(Ee)):Ee()},pe=function(fe){if(!$(fe,1)){fe=Aa(fe,u);var Ve=fe.clientX,$e=fe.clientY,me=Ve-Y.x,nt=$e-Y.y,Ue=Y.isDragging;Y.x=Ve,Y.y=$e,(Ue||Math.abs(Y.startX-Ve)>=s||Math.abs(Y.startY-$e)>=s)&&(y&&(G=!0),Ue||(Y.isDragging=!0),_e(me,nt),Ue||m&&m(Y))}},ke=Y.onPress=function(Oe){$(Oe,1)||Oe&&Oe.button||(Y.axis=Ce=null,Ie.pause(),Y.isPressed=!0,Oe=Aa(Oe),Ne=Fe=0,Y.startX=Y.x=Oe.clientX,Y.startY=Y.y=Oe.clientY,Y._vx.reset(),Y._vy.reset(),En(k?a:te,Ei[1],pe,u,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},st=Y.onRelease=function(Oe){if(!$(Oe,1)){Tn(k?a:te,Ei[1],pe,!0);var fe=!isNaN(Y.y-Y.startY),Ve=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),$e=Aa(Oe);!Ve&&fe&&(Y._vx.reset(),Y._vy.reset(),u&&Se&&on.delayedCall(.08,function(){if(Ca()-we>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(te.createEvent){var me=te.createEvent("MouseEvents");me.initMouseEvent("click",!0,!0,Yn,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(me)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&!k&&Ie.restart(!0),p&&Ve&&p(Y),S&&S(Y,Ve)}},P=function(fe){return fe.touches&&fe.touches.length>1&&(Y.isGesturing=!0)&&j(fe,Y.isDragging)},ce=function(){return(Y.isGesturing=!1)||R(Y)},J=function(fe){if(!$(fe)){var Ve=rt(),$e=Je();Re((Ve-Tt)*le,($e-C)*le,1),Tt=Ve,C=$e,h&&Ie.restart(!0)}},re=function(fe){if(!$(fe)){fe=Aa(fe,u),N&&(de=!0);var Ve=(fe.deltaMode===1?c:fe.deltaMode===2?Yn.innerHeight:1)*g;Re(fe.deltaX*Ve,fe.deltaY*Ve,0),h&&!k&&Ie.restart(!0)}},ae=function(fe){if(!$(fe)){var Ve=fe.clientX,$e=fe.clientY,me=Ve-Y.x,nt=$e-Y.y;Y.x=Ve,Y.y=$e,De=!0,(me||nt)&&_e(me,nt)}},je=function(fe){Y.event=fe,B(Y)},ft=function(fe){Y.event=fe,F(Y)},dt=function(fe){return $(fe)||Aa(fe,u)&&oe(Y)};Ie=Y._dc=on.delayedCall(f||.25,ve).pause(),Y.deltaX=Y.deltaY=0,Y._vx=nl(0,50,!0),Y._vy=nl(0,50,!0),Y.scrollX=rt,Y.scrollY=Je,Y.isDragging=Y.isGesturing=Y.isPressed=!1,k_(this),Y.enable=function(Oe){return Y.isEnabled||(En(W?te:a,"scroll",Lf),o.indexOf("scroll")>=0&&En(W?te:a,"scroll",J,u,xe),o.indexOf("wheel")>=0&&En(a,"wheel",re,u,xe),(o.indexOf("touch")>=0&&F_||o.indexOf("pointer")>=0)&&(En(a,Ei[0],ke,u,xe),En(te,Ei[2],st),En(te,Ei[3],st),Se&&En(a,"click",se,!1,!0),oe&&En(a,"click",dt),j&&En(te,"gesturestart",P),R&&En(te,"gestureend",ce),B&&En(a,Ss+"enter",je),F&&En(a,Ss+"leave",ft),U&&En(a,Ss+"move",ae)),Y.isEnabled=!0,Oe&&Oe.type&&ke(Oe),K&&K(Y)),Y},Y.disable=function(){Y.isEnabled&&(ao.filter(function(Oe){return Oe!==Y&&Pa(Oe.target)}).length||Tn(W?te:a,"scroll",Lf),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Tn(k?a:te,Ei[1],pe,!0)),Tn(W?te:a,"scroll",J,xe),Tn(a,"wheel",re,xe),Tn(a,Ei[0],ke,xe),Tn(te,Ei[2],st),Tn(te,Ei[3],st),Tn(a,"click",se,!0),Tn(a,"click",dt),Tn(te,"gesturestart",P),Tn(te,"gestureend",ce),Tn(a,Ss+"enter",je),Tn(a,Ss+"leave",ft),Tn(a,Ss+"move",ae),Y.isEnabled=Y.isPressed=Y.isDragging=!1,O&&O(Y))},Y.kill=Y.revert=function(){Y.disable();var Oe=ao.indexOf(Y);Oe>=0&&ao.splice(Oe,1),rr===Y&&(rr=0)},ao.push(Y),k&&Pa(a)&&(rr=Y),Y.enable(_)},aA(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();bt.version="3.12.2";bt.create=function(r){return new bt(r)};bt.register=G_;bt.getAll=function(){return ao.slice()};bt.getById=function(r){return ao.filter(function(e){return e.vars.id===r})[0]};z_()&&on.registerPlugin(bt);var ye,ho,at,Pt,Ri,wt,o0,xl,Sl,po,dl,il,mn,bl,zf,Rn,W_,q_,fo,a0,Of,c0,jn,l0,u0,h0,zr,Hf,Xf,mo,Yf,Df,rl=1,Pn=Date.now,Nf=Pn(),pi=0,La=0,X_=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Y_=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},uA=function r(){return La&&requestAnimationFrame(r)},j_=function(){return bl=1},Z_=function(){return bl=0},Wi=function(e){return e},Oa=function(e){return Math.round(e*1e5)/1e5||0},f0=function(){return typeof window!="undefined"},d0=function(){return ye||f0()&&(ye=window.gsap)&&ye.registerPlugin&&ye},As=function(e){return!!~o0.indexOf(e)},p0=function(e){return(e==="Height"?Yf:at["inner"+e])||Ri["client"+e]||wt["client"+e]},m0=function(e){return or(e,"getBoundingClientRect")||(As(e)?function(){return yl.width=at.innerWidth,yl.height=Yf,yl}:function(){return ar(e)})},hA=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=or(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?p0(s):e["client"+s])||0}},fA=function(e,t){return!t||~Ai.indexOf(e)?m0(e):function(){return yl}},cr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=or(e,n))?o()-m0(e)()[s]:As(e)?(Ri[n]||wt[n])-p0(i):e[n]-e["offset"+i])},sl=function(e,t){for(var n=0;n<fo.length;n+=3)(!t||~t.indexOf(fo[n+1]))&&e(fo[n],fo[n+1],fo[n+2])},Kn=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},pl=function(e){return typeof e=="number"},Ms=function(e){return typeof e=="object"},Ia=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Uf=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},lo=Math.abs,g0="left",_0="top",jf="right",Zf="bottom",ws="width",Ts="height",Na="Right",Ua="Left",Fa="Top",Ba="Bottom",kt="padding",fi="margin",_o="Width",Kf="Height",an="px",di=function(e){return at.getComputedStyle(e)},dA=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},K_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ar=function(e,t){var n=t&&di(e)[zf]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Vf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},v0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pA=function(e){return function(t){return ye.utils.snap(v0(e),t)}},Jf=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},mA=function(e){return function(t,n){return Jf(v0(e))(t,n.direction)}},ol=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},$t=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},al=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},J_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cl={toggleActions:"play",anticipatePin:0},Ml={top:0,left:0,center:.5,bottom:1,right:1},ml=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ml?Ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ll=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Pt.createElement("div"),_=As(n)||or(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?wt:n,y=e.indexOf("start")!==-1,v=y?l:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(S+=(i===Bt?jf:Zf)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],gl(g,0,i,y),g},gl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+_o]=1,s["border"+a+_o]=0,s[n.p]=t+"px",ye.set(e,s)},tt=[],Gf={},za,$_=function(){return Pn()-pi>34&&(za||(za=requestAnimationFrame(lr)))},uo=function(){(!jn||!jn.isPressed||jn.startX>wt.clientWidth)&&(et.cache++,jn?za||(za=requestAnimationFrame(lr)):lr(),pi||Cs("scrollStart"),pi=Pn())},Ff=function(){h0=at.innerWidth,u0=at.innerHeight},Da=function(){et.cache++,!mn&&!c0&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!l0||h0!==at.innerWidth||Math.abs(at.innerHeight-u0)>at.innerHeight*.25)&&xl.restart(!0)},Rs={},gA=[],y0=function r(){return $t(He,"scrollEnd",r)||bs(!0)},Cs=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||gA},Zn=[],x0=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},$f=function(e,t){var n;for(Rn=0;Rn<tt.length;Rn++)n=tt[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&x0(t),t||Cs("revert")},S0=function(e,t){et.cache++,(t||!Cn)&&et.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(at.history.scrollRestoration=Xf=e)},Cn,Es=0,Q_,_A=function(){if(Q_!==Es){var e=Q_=Es;requestAnimationFrame(function(){return e===Es&&bs(!0)})}},M0=function(){wt.appendChild(mo),Yf=mo.offsetHeight||at.innerHeight,wt.removeChild(mo)},bs=function(e,t){if(pi&&!e){Qt(He,"scrollEnd",y0);return}M0(),Cn=He.isRefreshing=!0,et.forEach(function(i){return In(i)&&++i.cacheID&&(i.rec=i())});var n=Cs("refreshInit");a0&&He.sort(),t||$f(),et.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),tt.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),tt.forEach(function(i){var s=cr(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>s)&&i.setPositions(i.start,Math.max(i.start+1,s),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),S0(Xf,1),xl.pause(),Es++,Cn=2,lr(2),tt.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=He.isRefreshing=!1,Cs("refresh")},Wf=0,_l=1,ka,lr=function(e){if(!Cn||e===2){He.isUpdating=!0,ka&&ka.update(0);var t=tt.length,n=Pn(),i=n-Nf>=50,s=t&&tt[0].scroll();if(_l=Wf>s?-1:1,Cn||(Wf=s),i&&(pi&&!bl&&n-pi>200&&(pi=0,Cs("scrollEnd")),dl=Nf,Nf=n),_l<0){for(Rn=t;Rn-- >0;)tt[Rn]&&tt[Rn].update(0,i);_l=1}else for(Rn=0;Rn<t;Rn++)tt[Rn]&&tt[Rn].update(0,i);He.isUpdating=!1}za=0},qf=[g0,_0,Zf,jf,fi+Ba,fi+Na,fi+Fa,fi+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vl=qf.concat([ws,Ts,"boxSizing","max"+_o,"max"+Kf,"position",fi,kt,kt+Fa,kt+Na,kt+Ba,kt+Ua]),vA=function(e,t,n){go(n);var i=e._gsap;if(i.spacerIsNative)go(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Bf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=qf.length,o=t.style,a=e.style,c;s--;)c=qf[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Zf]=a[jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ws]=Vf(e,pn)+an,o[Ts]=Vf(e,Bt)+an,o[kt]=a[fi]=a[_0]=a[g0]="0",go(i),a[ws]=a["max"+_o]=n[ws],a[Ts]=a["max"+Kf]=n[Ts],a[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yA=/([A-Z])/g,go=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yA,"-$1").toLowerCase())}},ul=function(e){for(var t=vl.length,n=e.style,i=[],s=0;s<t;s++)i.push(vl[s],n[vl[s]]);return i.t=e,i},xA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},yl={left:0,top:0},e0=function(e,t,n,i,s,o,a,c,l,u,h,f,d,g){In(e)&&(e=e(c)),Kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ml("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),pl(e))d&&(e=ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&gl(a,n,i,!0);else{In(t)&&(t=t(c));var v=(e||"0").split(" "),S,M,A,w;y=An(t,c)||wt,S=ar(y)||{},(!S||!S.left&&!S.top)&&di(y).display==="none"&&(w=y.style.display,y.style.display="block",S=ar(y),w?y.style.display=w:y.style.removeProperty("display")),M=ml(v[0],S[i.d]),A=ml(v[1]||"0",n),e=S[i.p]-l[i.p]-u+M+s-A,a&&gl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,x=o._isStart;m="scroll"+i.d2,gl(o,I,i,x&&I>20||!x&&(h?Math.max(wt[m],Ri[m]):o.parentNode[m])<=I+1),h&&(l=ar(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+an))}return d&&y&&(m=ar(y),d.seek(f),p=ar(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},SA=/(webkit|moz|length|cssText|inset)/i,t0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=di(e);for(o in a)!+o&&!SA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},b0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},hl=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},n0=function(e,t){var n=sr(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,g={};l=l||n();var _=b0(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[i]=a,c.modifiers=g,g[i]=function(){return _(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){et.cache++,lr()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ye.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),He.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},He=function(){function r(t,n){ho||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!La){this.update=this.refresh=this.kill=Wi;return}n=K_(Kn(n)||pl(n)||n.nodeType?{trigger:n}:n,cl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,M=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Bt,X=!h&&h!==0,q=An(n.scroller||at),z=ye.core.getCache(q),B=As(q),F=("pinType"in n?n.pinType:or(q,"pinType")||B&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],L=X&&n.toggleActions.split(" "),k="markers"in n?n.markers:cl.markers,j=B?0:parseFloat(di(q)["border"+b.p2+_o])||0,R=this,N=n.onRefreshInit&&function(){return n.onRefreshInit(R)},K=hA(q,B,b),O=fA(q,B),oe=0,le=0,xe=0,Se=sr(q,b),Me,Be,At,Ie,G,De,de,Pe,Ce,Y,Ne,Fe,rt,Je,Tt,C,T,W,te,ne,ie,we,se,$,ve,Ee,Re,_e,pe,ke,st,P,ce,J,re,ae,je,ft,dt;if(R._startClamp=R._endClamp=!1,R._dir=b,m*=45,R.scroller=q,R.scroll=w?w.time.bind(w):Se,Ie=Se(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(a0=1,n.refreshPriority===-9999&&(ka=R)),z.tweenScroll=z.tweenScroll||{top:n0(q,Bt),left:n0(q,pn)},R.tweenTo=Me=z.tweenScroll[b.p],R.scrubDuration=function(me){ce=pl(me)&&me,ce?P?P.duration(me):P=ye.to(i,{ease:"expo",totalProgress:"+=0",duration:ce,paused:!0,onComplete:function(){return p&&p(R)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),ke=0,c||(c=i.vars.id)),S&&((!Ms(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&ye.set(B?[wt,Ri]:q,{scrollBehavior:"auto"}),et.forEach(function(me){return In(me)&&me.target===(B?Pt.scrollingElement||Ri:q)&&(me.smooth=!1)}),At=In(S.snapTo)?S.snapTo:S.snapTo==="labels"?pA(i):S.snapTo==="labelsDirectional"?mA(i):S.directional!==!1?function(me,nt){return Jf(S.snapTo)(me,Pn()-le<500?0:nt.direction)}:ye.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=Ms(J)?po(J.min,J.max):po(J,J),re=ye.delayedCall(S.delay||ce/2||.1,function(){var me=Se(),nt=Pn()-le<500,Ue=Me.tween;if((nt||Math.abs(R.getVelocity())<10)&&!Ue&&!bl&&oe!==me){var Ge=(me-De)/Je,Nt=i&&!X?i.totalProgress():Ge,Qe=nt?0:(Nt-st)/(Pn()-dl)*1e3||0,Et=ye.utils.clamp(-Ge,1-Ge,lo(Qe/2)*Qe/.185),nn=Ge+(S.inertia===!1?0:Et),Wt=po(0,1,At(nn,R)),St=Math.round(De+Wt*Je),E=S,H=E.onStart,Z=E.onInterrupt,V=E.onComplete;if(me<=de&&me>=De&&St!==me){if(Ue&&!Ue._initted&&Ue.data<=lo(St-me))return;S.inertia===!1&&(Et=Wt-Ge),Me(St,{duration:J(lo(Math.max(lo(nn-Nt),lo(Wt-Nt))*.185/Qe/.05||0)),ease:S.ease||"power3",data:lo(St-me),onInterrupt:function(){return re.restart(!0)&&Z&&Z(R)},onComplete:function(){R.update(),oe=Se(),ke=st=i&&!X?i.totalProgress():R.progress,y&&y(R),V&&V(R)}},me,Et*Je,St-me-Et*Je),H&&H(R,Me.tween)}}else R.isActive&&oe!==me&&re.restart(!0)}).pause()),c&&(Gf[c]=R),f=R.trigger=An(f||d!==!0&&d),dt=f&&f._gsap&&f._gsap.stRevert,dt&&(dt=dt(R)),d=d===!0?f:An(d),Kn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===fi||(g=!g&&d.parentNode&&d.parentNode.style&&di(d.parentNode).display==="flex"?!1:kt),R.pin=d,Be=ye.core.getCache(d),Be.spacer?Tt=Be.pinState:(A&&(A=An(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Be.spacerIsNative=!!A,A&&(Be.spacerState=ul(A))),Be.spacer=W=A||Pt.createElement("div"),W.classList.add("pin-spacer"),c&&W.classList.add("pin-spacer-"+c),Be.pinState=Tt=ul(d)),n.force3D!==!1&&ye.set(d,{force3D:!0}),R.spacer=W=Be.spacer,pe=di(d),$=pe[g+b.os2],ne=ye.getProperty(d),ie=ye.quickSetter(d,b.a,an),Bf(d,W,pe),T=ul(d)),k){Fe=Ms(k)?K_(k,J_):J_,Y=ll("scroller-start",c,q,b,Fe,0),Ne=ll("scroller-end",c,q,b,Fe,0,Y),te=Y["offset"+b.op.d2];var Oe=An(or(q,"content")||q);Pe=this.markerStart=ll("start",c,Oe,b,Fe,te,0,w),Ce=this.markerEnd=ll("end",c,Oe,b,Fe,te,0,w),w&&(ft=ye.quickSetter([Pe,Ce],b.a,an)),!F&&!(Ai.length&&or(q,"fixedMarkers")===!0)&&(dA(B?wt:q),ye.set([Y,Ne],{force3D:!0}),Ee=ye.quickSetter(Y,b.a,an),_e=ye.quickSetter(Ne,b.a,an))}if(w){var fe=w.vars.onUpdate,Ve=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),fe&&fe.apply(w,Ve||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(me,nt){if(!nt)return R.kill(!0);var Ue=me!==!1||!R.enabled,Ge=mn;Ue!==R.isReverted&&(Ue&&(ae=Math.max(Se(),R.scroll.rec||0),xe=R.progress,je=i&&i.progress()),Pe&&[Pe,Ce,Y,Ne].forEach(function(Nt){return Nt.style.display=Ue?"none":"block"}),Ue&&(mn=R,R.update(Ue)),d&&(!M||!R.isActive)&&(Ue?vA(d,W,Tt):Bf(d,W,di(d),ve)),Ue||R.update(Ue),mn=Ge,R.isReverted=Ue)},R.refresh=function(me,nt,Ue,Ge){if(!((mn||!R.enabled)&&!nt)){if(d&&me&&pi){Qt(r,"scrollEnd",y0);return}!Cn&&N&&N(R),mn=R,Me.tween&&!Ue&&(Me.tween.kill(),Me.tween=0),P&&P.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Nt=K(),Qe=O(),Et=w?w.duration():cr(q,b),nn=Je<=.01,Wt=0,St=Ge||0,E=Ms(Ue)?Ue.end:n.end,H=n.endTrigger||f,Z=Ms(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),V=R.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,R),Q=f&&Math.max(0,tt.indexOf(R))||0,ue=Q,ge,Te,Le,We,be,Ae,lt,Mt,xn,Sn,ht,qe,Cr;for(k&&Ms(Ue)&&(qe=ye.getProperty(Y,b.p),Cr=ye.getProperty(Ne,b.p));ue--;)Ae=tt[ue],Ae.end||Ae.refresh(0,1)||(mn=R),lt=Ae.pin,lt&&(lt===f||lt===d||lt===V)&&!Ae.isReverted&&(Sn||(Sn=[]),Sn.unshift(Ae),Ae.revert(!0,!0)),Ae!==tt[ue]&&(Q--,ue--);for(In(Z)&&(Z=Z(R)),Z=X_(Z,"start",R),De=e0(Z,f,Nt,b,Se(),Pe,Y,R,Qe,j,F,Et,w,R._startClamp&&"_startClamp")||(d?-.001:0),In(E)&&(E=E(R)),Kn(E)&&!E.indexOf("+=")&&(~E.indexOf(" ")?E=(Kn(Z)?Z.split(" ")[0]:"")+E:(Wt=ml(E.substr(2),Nt),E=Kn(Z)?Z:(w?ye.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,De):De)+Wt,H=f)),E=X_(E,"end",R),de=Math.max(De,e0(E||(H?"100% 0":Et),H,Nt,b,Se()+Wt,Ce,Ne,R,Qe,j,F,Et,w,R._endClamp&&"_endClamp"))||-.001,Wt=0,ue=Q;ue--;)Ae=tt[ue],lt=Ae.pin,lt&&Ae.start-Ae._pinPush<=De&&!w&&Ae.end>0&&(ge=Ae.end-(R._startClamp?Math.max(0,Ae.start):Ae.start),(lt===f&&Ae.start-Ae._pinPush<De||lt===V)&&isNaN(Z)&&(Wt+=ge*(1-Ae.progress)),lt===d&&(St+=ge));if(De+=Wt,de+=Wt,R._startClamp&&(R._startClamp+=Wt),R._endClamp&&!Cn&&(R._endClamp=de||-.001,de=Math.min(de,cr(q,b))),Je=de-De||(De-=.01)&&.001,nn&&(xe=ye.utils.clamp(0,1,ye.utils.normalize(De,de,ae))),R._pinPush=St,Pe&&Wt&&(ge={},ge[b.a]="+="+Wt,V&&(ge[b.p]="-="+Se()),ye.set([Pe,Ce],ge)),d)ge=di(d),We=b===Bt,Le=Se(),we=parseFloat(ne(b.a))+St,!Et&&de>1&&(ht=(B?Pt.scrollingElement||Ri:q).style,ht={style:ht,value:ht["overflow"+b.a.toUpperCase()]},B&&di(wt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+b.a.toUpperCase()]="scroll")),Bf(d,W,ge),T=ul(d),Te=ar(d,!0),Mt=F&&sr(q,We?pn:Bt)(),g&&(ve=[g+b.os2,Je+St+an],ve.t=W,ue=g===kt?Vf(d,b)+Je+St:0,ue&&ve.push(b.d,ue+an),go(ve),V&&tt.forEach(function(xt){xt.pin===V&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),F&&Se(ae)),F&&(be={top:Te.top+(We?Le-De:Mt)+an,left:Te.left+(We?Mt:Le-De)+an,boxSizing:"border-box",position:"fixed"},be[ws]=be["max"+_o]=Math.ceil(Te.width)+an,be[Ts]=be["max"+Kf]=Math.ceil(Te.height)+an,be[fi]=be[fi+Fa]=be[fi+Na]=be[fi+Ba]=be[fi+Ua]="0",be[kt]=ge[kt],be[kt+Fa]=ge[kt+Fa],be[kt+Na]=ge[kt+Na],be[kt+Ba]=ge[kt+Ba],be[kt+Ua]=ge[kt+Ua],C=xA(Tt,be,M),Cn&&Se(0)),i?(xn=i._initted,Of(1),i.render(i.duration(),!0,!0),se=ne(b.a)-we+Je+St,Re=Math.abs(Je-se)>1,F&&Re&&C.splice(C.length-2,2),i.render(0,!0,!0),xn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Of(0)):se=Je,ht&&(ht.value?ht.style["overflow"+b.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+b.a));else if(f&&Se()&&!w)for(Te=f.parentNode;Te&&Te!==wt;)Te._pinOffset&&(De-=Te._pinOffset,de-=Te._pinOffset),Te=Te.parentNode;Sn&&Sn.forEach(function(xt){return xt.revert(!1,!0)}),R.start=De,R.end=de,Ie=G=Cn?ae:Se(),!w&&!Cn&&(Ie<ae&&Se(ae),R.scroll.rec=0),R.revert(!1,!0),le=Pn(),re&&(oe=-1,re.restart(!0)),mn=0,i&&X&&(i._initted||je)&&i.progress()!==je&&i.progress(je||0,!0).render(i.time(),!0,!0),(nn||xe!==R.progress||w)&&(i&&!X&&i.totalProgress(w&&De<-.001&&!xe?ye.utils.normalize(De,de,0):xe,!0),R.progress=nn||(Ie-De)/Je===xe?0:xe),d&&g&&(W._pinOffset=Math.round(R.progress*se)),P&&P.invalidate(),isNaN(qe)||(qe-=ye.getProperty(Y,b.p),Cr-=ye.getProperty(Ne,b.p),hl(Y,b,qe),hl(Pe,b,qe-(Ge||0)),hl(Ne,b,Cr),hl(Ce,b,Cr-(Ge||0))),nn&&!Cn&&R.update(),u&&!Cn&&!rt&&(rt=!0,u(R),rt=!1)}},R.getVelocity=function(){return(Se()-G)/(Pn()-dl)*1e3||0},R.endAnimation=function(){Ia(R.callbackAnimation),i&&(P?P.progress(1):i.paused()?X||Ia(i,R.direction<0,1):Ia(i,i.reversed()))},R.labelToScroll=function(me){return i&&i.labels&&(De||R.refresh()||De)+i.labels[me]/i.duration()*Je||0},R.getTrailing=function(me){var nt=tt.indexOf(R),Ue=R.direction>0?tt.slice(0,nt).reverse():tt.slice(nt+1);return(Kn(me)?Ue.filter(function(Ge){return Ge.vars.preventOverlaps===me}):Ue).filter(function(Ge){return R.direction>0?Ge.end<=De:Ge.start>=de})},R.update=function(me,nt,Ue){if(!(w&&!Ue&&!me)){var Ge=Cn===!0?ae:R.scroll(),Nt=me?0:(Ge-De)/Je,Qe=Nt<0?0:Nt>1?1:Nt||0,Et=R.progress,nn,Wt,St,E,H,Z,V,Q;if(nt&&(G=Ie,Ie=w?Se():Ge,S&&(st=ke,ke=i&&!X?i.totalProgress():Qe)),m&&!Qe&&d&&!mn&&!rl&&pi&&De<Ge+(Ge-G)/(Pn()-dl)*m&&(Qe=1e-4),Qe!==Et&&R.enabled){if(nn=R.isActive=!!Qe&&Qe<1,Wt=!!Et&&Et<1,Z=nn!==Wt,H=Z||!!Qe!=!!Et,R.direction=Qe>Et?1:-1,R.progress=Qe,H&&!mn&&(St=Qe&&!Et?0:Qe===1?1:Et===1?2:3,X&&(E=!Z&&L[St+1]!=="none"&&L[St+1]||L[St],Q=i&&(E==="complete"||E==="reset"||E in i))),x&&(Z||Q)&&(Q||h||!i)&&(In(x)?x(R):R.getTrailing(x).forEach(function(Le){return Le.endAnimation()})),X||(P&&!mn&&!rl?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",Qe,i._tTime/i._tDur):(P.vars.totalProgress=Qe,P.invalidate().restart())):i&&i.totalProgress(Qe,!!(mn&&(le||me)))),d){if(me&&g&&(W.style[g+b.os2]=$),!F)ie(Oa(we+se*Qe));else if(H){if(V=!me&&Qe>Et&&de+1>Ge&&Ge+1>=cr(q,b),M)if(!me&&(nn||V)){var ue=ar(d,!0),ge=Ge-De;t0(d,wt,ue.top+(b===Bt?ge:0)+an,ue.left+(b===Bt?0:ge)+an)}else t0(d,W);go(nn||V?C:T),Re&&Qe<1&&nn||ie(we+(Qe===1&&!V?se:0))}}S&&!Me.tween&&!mn&&!rl&&re.restart(!0),a&&(Z||v&&Qe&&(Qe<1||!Df))&&Sl(a.targets).forEach(function(Le){return Le.classList[nn||v?"add":"remove"](a.className)}),o&&!X&&!me&&o(R),H&&!mn?(X&&(Q&&(E==="complete"?i.pause().totalProgress(1):E==="reset"?i.restart(!0).pause():E==="restart"?i.restart(!0):i[E]()),o&&o(R)),(Z||!Df)&&(l&&Z&&Uf(R,l),U[St]&&Uf(R,U[St]),v&&(Qe===1?R.kill(!1,1):U[St]=0),Z||(St=Qe===1?1:3,U[St]&&Uf(R,U[St]))),I&&!nn&&Math.abs(R.getVelocity())>(pl(I)?I:2500)&&(Ia(R.callbackAnimation),P?P.progress(1):Ia(i,E==="reverse"?1:!Qe,1))):X&&o&&!mn&&o(R)}if(_e){var Te=w?Ge/w.duration()*(w._caScrollDist||0):Ge;Ee(Te+(Y._isFlipped?1:0)),_e(Te)}ft&&ft(-Ge/w.duration()*(w._caScrollDist||0))}},R.enable=function(me,nt){R.enabled||(R.enabled=!0,Qt(q,"resize",Da),B||Qt(q,"scroll",uo),N&&Qt(r,"refreshInit",N),me!==!1&&(R.progress=xe=0,Ie=G=oe=Se()),nt!==!1&&R.refresh())},R.getTween=function(me){return me&&Me?Me.tween:P},R.setPositions=function(me,nt,Ue,Ge){if(w){var Nt=w.scrollTrigger,Qe=w.duration(),Et=Nt.end-Nt.start;me=Nt.start+Et*me/Qe,nt=Nt.start+Et*nt/Qe}R.refresh(!1,!1,{start:Y_(me,Ue&&!!R._startClamp),end:Y_(nt,Ue&&!!R._endClamp)},Ge),R.update()},R.adjustPinSpacing=function(me){if(ve&&me){var nt=ve.indexOf(b.d)+1;ve[nt]=parseFloat(ve[nt])+me+an,ve[1]=parseFloat(ve[1])+me+an,go(ve)}},R.disable=function(me,nt){if(R.enabled&&(me!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,nt||P&&P.pause(),ae=0,Be&&(Be.uncache=1),N&&$t(r,"refreshInit",N),re&&(re.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!B)){for(var Ue=tt.length;Ue--;)if(tt[Ue].scroller===q&&tt[Ue]!==R)return;$t(q,"resize",Da),B||$t(q,"scroll",uo)}},R.kill=function(me,nt){R.disable(me,nt),P&&!nt&&P.kill(),c&&delete Gf[c];var Ue=tt.indexOf(R);Ue>=0&&tt.splice(Ue,1),Ue===Rn&&_l>0&&Rn--,Ue=0,tt.forEach(function(Ge){return Ge.scroller===R.scroller&&(Ue=1)}),Ue||Cn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),nt||i.kill()),Pe&&[Pe,Ce,Y,Ne].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ka===R&&(ka=0),d&&(Be&&(Be.uncache=1),Ue=0,tt.forEach(function(Ge){return Ge.pin===d&&Ue++}),Ue||(Be.spacer=0)),n.onKill&&n.onKill(R)},tt.push(R),R.enable(!1,!1),dt&&dt(R),i&&i.add&&!Je){var $e=R.update;R.update=function(){R.update=$e,De||de||R.refresh()},ye.delayedCall(.01,R.update),Je=.01,De=de=0}else R.refresh();d&&_A()},r.register=function(n){return ho||(ye=n||d0(),f0()&&window.document&&r.enable(),ho=La),ho},r.defaults=function(n){if(n)for(var i in n)cl[i]=n[i];return cl},r.disable=function(n,i){La=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),$t(at,"wheel",uo),$t(Pt,"scroll",uo),clearInterval(il),$t(Pt,"touchcancel",Wi),$t(wt,"touchstart",Wi),ol($t,Pt,"pointerdown,touchstart,mousedown",j_),ol($t,Pt,"pointerup,touchend,mouseup",Z_),xl.kill(),sl($t);for(var s=0;s<et.length;s+=3)al($t,et[s],et[s+1]),al($t,et[s],et[s+2])},r.enable=function(){if(at=window,Pt=document,Ri=Pt.documentElement,wt=Pt.body,ye&&(Sl=ye.utils.toArray,po=ye.utils.clamp,Hf=ye.core.context||Wi,Of=ye.core.suppressOverwrites||Wi,Xf=at.history.scrollRestoration||"auto",Wf=at.pageYOffset,ye.core.globals("ScrollTrigger",r),wt)){La=1,mo=document.createElement("div"),mo.style.height="100vh",mo.style.position="absolute",M0(),uA(),bt.register(ye),r.isTouch=bt.isTouch,zr=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qt(at,"wheel",uo),o0=[at,Pt,Ri,wt],ye.matchMedia?(r.matchMedia=function(c){var l=ye.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},ye.addEventListener("matchMediaInit",function(){return $f()}),ye.addEventListener("matchMediaRevert",function(){return x0()}),ye.addEventListener("matchMedia",function(){bs(0,1),Cs("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return Ff(),Ff})):console.warn("Requires GSAP 3.11.0 or later"),Ff(),Qt(Pt,"scroll",uo);var n=wt.style,i=n.borderTopStyle,s=ye.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ar(wt),Bt.m=Math.round(o.top+Bt.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),il=setInterval($_,250),ye.delayedCall(.5,function(){return rl=0}),Qt(Pt,"touchcancel",Wi),Qt(wt,"touchstart",Wi),ol(Qt,Pt,"pointerdown,touchstart,mousedown",j_),ol(Qt,Pt,"pointerup,touchend,mouseup",Z_),zf=ye.utils.checkPrefix("transform"),vl.push(zf),ho=Pn(),xl=ye.delayedCall(.2,bs).pause(),fo=[Pt,"visibilitychange",function(){var c=at.innerWidth,l=at.innerHeight;Pt.hidden?(W_=c,q_=l):(W_!==c||q_!==l)&&Da()},Pt,"DOMContentLoaded",bs,at,"load",bs,at,"resize",Da],sl(Qt),tt.forEach(function(c){return c.enable(0,1)}),a=0;a<et.length;a+=3)al($t,et[a],et[a+1]),al($t,et[a],et[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Df=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(il)||(il=i)&&setInterval($_,i),"ignoreMobileResize"in n&&(l0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(sl($t)||sl(Qt,n.autoRefreshEvents||"none"),c0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=et.indexOf(s),a=As(s);~o&&et.splice(o,a?6:2),i&&(a?Ai.unshift(at,i,wt,i,Ri,i):Ai.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?An(n):n).getBoundingClientRect(),a=o[s?ws:Ts]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?ws:Ts],c=i==null?a/2:i in Ml?Ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/at.innerWidth:(o.top+c)/at.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(s){return s()})}},r}();He.version="3.12.2";He.saveStyles=function(r){return r?Sl(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Hf())}}):Zn};He.revert=function(r,e){return $f(!r,e)};He.create=function(r,e){return new He(r,e)};He.refresh=function(r){return r?Da():(ho||He.register())&&bs(!0)};He.update=function(r){return++et.cache&&lr(r===!0?2:0)};He.clearScrollMemory=S0;He.maxScroll=function(r,e){return cr(r,e?pn:Bt)};He.getScrollFunc=function(r,e){return sr(An(r),e?pn:Bt)};He.getById=function(r){return Gf[r]};He.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};He.isScrolling=function(){return!!pi};He.snapDirectional=Jf;He.addEventListener=function(r,e){var t=Rs[r]||(Rs[r]=[]);~t.indexOf(e)||t.push(e)};He.removeEventListener=function(r,e){var t=Rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};He.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=ye.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),Qt(He,"refresh",function(){return s=e.batchMax()})),Sl(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(He.create(l))}),t};var i0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},kf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===Ri&&r(wt,t)},fl={auto:1,scroll:1},MA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ye.core.getCache(s),a=Pn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fl[(c=di(s)).overflowY]||fl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(fl[(c=di(s)).overflowY]||fl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},w0=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&MA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(Pt,bt.eventTypes[0],s0,!1,!0)},onDisable:function(){return $t(Pt,bt.eventTypes[0],s0,!0)}})},bA=/(input|label|select|textarea)/i,r0,s0=function(e){var t=bA.test(e.target.tagName);(t||r0)&&(e._gsapAllow=!0,r0=t)},wA=function(e){Ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=An(e.target)||Ri,u=ye.core.globals().ScrollSmoother,h=u&&u.get(),f=zr&&(e.content&&An(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=sr(l,Bt),g=sr(l,pn),_=1,m=(bt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,y=In(i)?function(){return i(a)}:function(){return i||2.8},v,S,M=w0(l,e.type,!0,s),A=function(){return S=!1},w=Wi,I=Wi,x=function(){c=cr(l,Bt),I=po(zr?1:0,c),n&&(w=po(0,cr(l,pn))),v=Es},b=function(){f._gsap.y=Oa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},X=function(){if(S){requestAnimationFrame(A);var k=Oa(a.deltaY/2),j=I(d.v-k);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var R=Oa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=et.cache,lr()}return!0}d.offset&&b(),S=!0},q,z,B,F,U=function(){x(),q.isActive()&&q.vars.scrollY>c&&(d()>c?q.progress(1)&&d(c):q.resetTo("scrollY",c))};return f&&ye.set(f,{y:"+=0"}),e.ignoreCheck=function(L){return zr&&L.type==="touchmove"&&X(L)||_>1.05&&L.type!=="touchstart"||a.isGesturing||L.touches&&L.touches.length>1},e.onPress=function(){S=!1;var L=_;_=Oa((at.visualViewport&&at.visualViewport.scale||1)/m),q.pause(),L!==_&&kf(l,_>1.01?!0:n?!1:"x"),z=g(),B=d(),x(),v=Es},e.onRelease=e.onGestureStart=function(L,k){if(d.offset&&b(),!k)F.restart(!0);else{et.cache++;var j=y(),R,N;n&&(R=g(),N=R+j*.05*-L.velocityX/.227,j*=i0(g,R,N,cr(l,pn)),q.vars.scrollX=w(N)),R=d(),N=R+j*.05*-L.velocityY/.227,j*=i0(d,R,N,cr(l,Bt)),q.vars.scrollY=I(N),q.invalidate().duration(j).play(.01),(zr&&q.vars.scrollY>=c||R>=c-1)&&ye.to({},{onUpdate:U,duration:j})}o&&o(L)},e.onWheel=function(){q._ts&&q.pause(),Pn()-p>1e3&&(v=0,p=Pn())},e.onChange=function(L,k,j,R,N){if(Es!==v&&x(),k&&n&&g(w(R[2]===k?z+(L.startX-L.x):g()+k-R[1])),j){d.offset&&b();var K=N[2]===j,O=K?B+L.startY-L.y:d()+j-N[1],oe=I(O);K&&O!==oe&&(B+=oe-O),d(oe)}(j||k)&&lr()},e.onEnable=function(){kf(l,n?!1:"x"),He.addEventListener("refresh",U),Qt(at,"resize",U),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){kf(l,!0),$t(at,"resize",U),He.removeEventListener("refresh",U),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=zr,zr&&!d()&&d(1),zr&&ye.ticker.add(Wi),F=a._dc,q=ye.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b0(d,d(),function(){return q.pause()})},onUpdate:lr,onComplete:F.vars.onComplete}),a};He.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};He.observe=function(r){return new bt(r)};He.normalizeScroll=function(r){if(typeof r=="undefined")return jn;if(r===!0&&jn)return jn.enable();if(r===!1)return jn&&jn.kill();var e=r instanceof bt?r:wA(r);return jn&&jn.target===e.target&&jn.kill(),As(e.target)&&(jn=e),e};He.core={_getVelocityProp:nl,_inputObserver:w0,_scrollers:et,_proxies:Ai,bridge:{ss:function(){pi||Cs("scrollStart"),pi=Pn()},ref:function(){return mn}}};d0()&&ye.registerPlugin(He);var Qf=function(r,e){return Qf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Qf(r,e)};function T0(r,e){Qf(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var zn=function(){return zn=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},zn.apply(this,arguments)};function qi(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}function E0(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}var yV=da(US()),xV=da(zS()),SV=da(MM()),MV=da(IM()),bV=da(kM());var Su,Mu=new WeakMap;function zM(){if(Su!==void 0)return Su;var r=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return r=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Su=r?{passive:!1}:!1,Su}function gi(r){var e=Mu.get(r)||[];return Mu.set(r,e),function(n,i,s){function o(a){a.defaultPrevented||s(a)}i.split(/\s+/g).forEach(function(a){e.push({elem:n,eventName:a,handler:o}),n.addEventListener(a,o,zM())})}}function HM(r){var e=Mu.get(r);e&&(e.forEach(function(t){var n=t.elem,i=t.eventName,s=t.handler;n.removeEventListener(i,s,zM())}),Mu.delete(r))}function VM(r){return r.touches?r.touches[r.touches.length-1]:r}function fr(r){var e=VM(r);return{x:e.clientX,y:e.clientY}}function rc(r,e){return e===void 0&&(e=[]),e.some(function(t){return r===t})}var GM=["webkit","moz","ms","o"],SO=new RegExp("^-(?!(?:"+GM.join("|")+")-)");function MO(r){var e={};return Object.keys(r).forEach(function(t){if(!SO.test(t)){e[t]=r[t];return}var n=r[t];t=t.replace(/^-/,""),e[t]=n,GM.forEach(function(i){e["-"+i+"-"+t]=n})}),e}function _i(r,e){e=MO(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(i,s){return s.toUpperCase()});r.style[n]=e[t]})}var bO=function(){function r(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=fr(e)}return r.prototype.update=function(e){var t=this,n=t.velocity,i=t.updateTime,s=t.lastPosition,o=Date.now(),a=fr(e),c={x:-(a.x-s.x),y:-(a.y-s.y)},l=o-i||16.7,u=c.x/l*16.7,h=c.y/l*16.7;n.x=u*this.velocityMultiplier,n.y=h*this.velocityMultiplier,this.delta=c,this.updateTime=o,this.lastPosition=a},r}();var WM=function(){function r(){this._touchList={}}return Object.defineProperty(r.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),r.prototype.isActive=function(){return this._activeTouchID!==void 0},r.prototype.getDelta=function(){var e=this._getActiveTracker();return e?zn({},e.delta):this._primitiveValue},r.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?zn({},e.velocity):this._primitiveValue},r.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(s){for(var o=Math.abs(i[s])<=10?0:i[s];o!==0;)n[s]+=o,o=o*t|0}),n},r.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(i){t._add(i)}),this._touchList},r.prototype.update=function(e){var t=this,n=e.touches,i=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(i),this._touchList},r.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},r.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new bO(e);this._touchList[e.identifier]=t},r.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},r.prototype._delete=function(e){delete this._touchList[e.identifier]},r.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},r.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},r.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},r}();function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function sc(r,e,t){e===void 0&&(e=0);var n,i=-1/0;return function(){for(var o=this,a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(t){var l=Date.now(),u=l-i;i=l,u>=e&&r.apply(this,a)}clearTimeout(n),n=setTimeout(function(){r.apply(o,a)},e)}}function Ap(r,e){return r===void 0&&(r=-1/0),e===void 0&&(e=1/0),function(t,n){var i="_"+n;Object.defineProperty(t,n,{get:function(){return this[i]},set:function(s){Object.defineProperty(this,i,{value:Ht(s,r,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function bu(r,e){var t="_"+e;Object.defineProperty(r,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function wu(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return function(t,n,i){var s=i.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:sc.apply(void 0,E0([s],r))}),this[n]}}}}var qM=function(){function r(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(r.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),qi([Ap(0,1)],r.prototype,"damping",void 0),qi([Ap(0,1/0)],r.prototype,"thumbMinSize",void 0),qi([bu],r.prototype,"renderByPixels",void 0),qi([bu],r.prototype,"alwaysShowTracks",void 0),qi([bu],r.prototype,"continuousScrolling",void 0),r}();var Vr;(function(r){r.X="x",r.Y="y"})(Vr||(Vr={}));var XM=function(){function r(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return r.prototype.attachTo=function(e){e.appendChild(this.element)},r.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),_i(this.element,this._getStyle())},r.prototype._getStyle=function(){switch(this._direction){case Vr.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case Vr.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},r}();var Rp=function(){function r(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new XM(e,t),this.thumb.attachTo(this.element)}return r.prototype.attachTo=function(e){e.appendChild(this.element)},r.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},r.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},r.prototype.update=function(e,t,n){_i(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},r}();var YM=function(){function r(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new Rp(Vr.X,t),this.yAxis=new Rp(Vr.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return r.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},r.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},qi([wu(300)],r.prototype,"autoHideOnIdle",null),r}();function jM(r){var e=r.containerEl,t=r.contentEl,n=getComputedStyle(e),i=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(a){return n[a]?parseFloat(n[a]):0}),s=i[0]+i[1],o=i[2]+i[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+o,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function ZM(r,e){var t=r.bounding,n=e.getBoundingClientRect(),i=Math.max(t.top,n.top),s=Math.max(t.left,n.left),o=Math.min(t.right,n.right),a=Math.min(t.bottom,n.bottom);return i<a&&s<o}function KM(r){var e=r.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=r.containerEl.getBoundingClientRect(),i={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};r.size=e,r.limit=t,r.bounding=i,r.track.update(),r.setPosition()}function JM(r,e,t){var n=r.options,i=r.offset,s=r.limit,o=r.track,a=r.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=Ht(e,0,s.x),t=Ht(t,0,s.y),e!==i.x&&o.xAxis.show(),t!==i.y&&o.yAxis.show(),n.alwaysShowTracks||o.autoHideOnIdle(),e===i.x&&t===i.y?null:(i.x=e,i.y=t,_i(a,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),o.update(),{offset:zn({},i),limit:zn({},s)})}var $M=new WeakMap;function QM(r,e,t,n,i){n===void 0&&(n=0);var s=i===void 0?{}:i,o=s.easing,a=o===void 0?wO:o,c=s.callback,l=r.options,u=r.offset,h=r.limit;l.renderByPixels&&(e=Math.round(e),t=Math.round(t));var f=u.x,d=u.y,g=Ht(e,0,h.x)-f,_=Ht(t,0,h.y)-d,m=Date.now();function p(){var y=Date.now()-m,v=n?a(Math.min(y/n,1)):1;if(r.setPosition(f+g*v,d+_*v),y>=n)typeof c=="function"&&c.call(r);else{var S=requestAnimationFrame(p);$M.set(r,S)}}cancelAnimationFrame($M.get(r)),p()}function wO(r){return Math.pow(r-1,3)+1}function eb(r,e,t){var n=t===void 0?{}:t,i=n.alignToTop,s=i===void 0?!0:i,o=n.onlyScrollIfNeeded,a=o===void 0?!1:o,c=n.offsetTop,l=c===void 0?0:c,u=n.offsetLeft,h=u===void 0?0:u,f=n.offsetBottom,d=f===void 0?0:f,g=r.containerEl,_=r.bounding,m=r.offset,p=r.limit;if(!(!e||!g.contains(e))){var y=e.getBoundingClientRect();if(!(a&&r.isVisible(e))){var v=s?y.top-_.top-l:y.bottom-_.bottom+d;r.setMomentum(y.left-_.left-h,Ht(v,-m.y,p.y-m.y))}}}var Eu=function(){function r(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=zn(zn({},n.defaultOptions),t)}return r.prototype.onInit=function(){},r.prototype.onDestroy=function(){},r.prototype.onUpdate=function(){},r.prototype.onRender=function(e){},r.prototype.transformDelta=function(e,t){return zn({},e)},r.pluginName="",r.defaultOptions={},r}();var Tu={order:new Set,constructors:{}};function tb(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];r.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Tu.order.add(n),Tu.constructors[n]=t})}function nb(r,e){return Array.from(Tu.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Tu.constructors[t],i=new n(r,e[t]);return e[t]=i.options,i})}var Ru={};ET(Ru,{keyboardHandler:()=>TO,mouseHandler:()=>CO,resizeHandler:()=>PO,selectHandler:()=>IO,touchHandler:()=>OO,wheelHandler:()=>DO});var vi;(function(r){r[r.TAB=9]="TAB",r[r.SPACE=32]="SPACE",r[r.PAGE_UP=33]="PAGE_UP",r[r.PAGE_DOWN=34]="PAGE_DOWN",r[r.END=35]="END",r[r.HOME=36]="HOME",r[r.LEFT=37]="LEFT",r[r.UP=38]="UP",r[r.RIGHT=39]="RIGHT",r[r.DOWN=40]="DOWN"})(vi||(vi={}));function TO(r){var e=gi(r),t=r.containerEl;e(t,"keydown",function(n){var i=document.activeElement;if(!(i!==t&&!t.contains(i))&&!RO(i)){var s=EO(r,n.keyCode||n.which);if(s){var o=s[0],a=s[1];r.addTransformableMomentum(o,a,n,function(c){c?n.preventDefault():(r.containerEl.blur(),r.parent&&r.parent.containerEl.focus())})}}})}function EO(r,e){var t=r.size,n=r.limit,i=r.offset;switch(e){case vi.TAB:return AO(r);case vi.SPACE:return[0,200];case vi.PAGE_UP:return[0,-t.container.height+40];case vi.PAGE_DOWN:return[0,t.container.height-40];case vi.END:return[0,n.y-i.y];case vi.HOME:return[0,-i.y];case vi.LEFT:return[-40,0];case vi.UP:return[0,-40];case vi.RIGHT:return[40,0];case vi.DOWN:return[0,40];default:return null}}function AO(r){requestAnimationFrame(function(){r.scrollIntoView(document.activeElement,{offsetTop:r.size.container.height/2,offsetLeft:r.size.container.width/2,onlyScrollIfNeeded:!0})})}function RO(r){return r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA"||r.isContentEditable?!r.disabled:!1}var Yi;(function(r){r[r.X=0]="X",r[r.Y=1]="Y"})(Yi||(Yi={}));function CO(r){var e=gi(r),t=r.containerEl,n=r.track,i=n.xAxis,s=n.yAxis;function o(d,g){var _=r.size,m=r.limit,p=r.offset;if(d===Yi.X){var y=_.container.width+(i.thumb.realSize-i.thumb.displaySize);return Ht(g/y*_.content.width,0,m.x)-p.x}if(d===Yi.Y){var v=_.container.height+(s.thumb.realSize-s.thumb.displaySize);return Ht(g/v*_.content.height,0,m.y)-p.y}return 0}function a(d){if(rc(d,[i.element,i.thumb.element]))return Yi.X;if(rc(d,[s.element,s.thumb.element]))return Yi.Y}var c,l,u,h,f;e(t,"click",function(d){if(!(l||!rc(d.target,[i.element,s.element]))){var g=d.target,_=a(g),m=g.getBoundingClientRect(),p=fr(d);if(_===Yi.X){var y=p.x-m.left-i.thumb.displaySize/2;r.setMomentum(o(_,y),0)}if(_===Yi.Y){var y=p.y-m.top-s.thumb.displaySize/2;r.setMomentum(0,o(_,y))}}}),e(t,"mousedown",function(d){if(rc(d.target,[i.thumb.element,s.thumb.element])){c=!0;var g=d.target,_=fr(d),m=g.getBoundingClientRect();h=a(g),u={x:_.x-m.left,y:_.y-m.top},f=t.getBoundingClientRect(),_i(r.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(d){if(c){l=!0;var g=fr(d);if(h===Yi.X){var _=g.x-u.x-f.left;r.setMomentum(o(h,_),0)}if(h===Yi.Y){var _=g.y-u.y-f.top;r.setMomentum(0,o(h,_))}}}),e(window,"mouseup blur",function(){c=l=!1,_i(r.containerEl,{"-user-select":""})})}function PO(r){var e=gi(r);e(window,"resize",sc(r.update.bind(r),300))}function IO(r){var e=gi(r),t=r.containerEl,n=r.contentEl,i=!1,s=!1,o;function a(c){var l=c.x,u=c.y;if(!(!l&&!u)){var h=r.offset,f=r.limit;r.setMomentum(Ht(h.x+l,0,f.x)-h.x,Ht(h.y+u,0,f.y)-h.y),o=requestAnimationFrame(function(){a({x:l,y:u})})}}e(window,"mousemove",function(c){if(i){cancelAnimationFrame(o);var l=LO(r,c);a(l)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(o),i=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(o),i=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),i=!1,s=!1}),e(t,"scroll",function(c){c.preventDefault(),t.scrollTop=t.scrollLeft=0})}function LO(r,e){var t=r.bounding,n=t.top,i=t.right,s=t.bottom,o=t.left,a=fr(e),c=a.x,l=a.y,u={x:0,y:0},h=20;return c===0&&l===0||(c>i-h?u.x=c-i+h:c<o+h&&(u.x=c-o-h),l>s-h?u.y=l-s+h:l<n+h&&(u.y=l-n-h),u.x*=2,u.y*=2),u}var Au;function OO(r){var e=r.options.delegateTo||r.containerEl,t=new WM,n=gi(r),i,s=0;n(e,"touchstart",function(o){t.track(o),r.setMomentum(0,0),s===0&&(i=r.options.damping,r.options.damping=Math.max(i,.5)),s++}),n(e,"touchmove",function(o){if(!(Au&&Au!==r)){t.update(o);var a=t.getDelta(),c=a.x,l=a.y;r.addTransformableMomentum(c,l,o,function(u){u&&o.cancelable&&(o.preventDefault(),Au=r)})}}),n(e,"touchcancel touchend",function(o){var a=t.getEasingDistance(i);r.addTransformableMomentum(a.x,a.y,o),s--,s===0&&(r.options.damping=i),t.release(o),Au=null})}function DO(r){var e=gi(r),t=r.options.delegateTo||r.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(i){var s=UO(i),o=s.x,a=s.y;r.addTransformableMomentum(o,a,i,function(c){c&&i.preventDefault()})})}var oc={STANDARD:1,OTHERS:-3},ib=[1,28,500],NO=function(r){return ib[r]||ib[0]};function UO(r){if("deltaX"in r){var e=NO(r.deltaMode);return{x:r.deltaX/oc.STANDARD*e,y:r.deltaY/oc.STANDARD*e}}return"wheelDeltaX"in r?{x:r.wheelDeltaX/oc.OTHERS,y:r.wheelDeltaY/oc.OTHERS}:{x:0,y:r.wheelDelta/oc.OTHERS}}var Oi=new Map,Cp=function(){function r(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var i=this.contentEl=document.createElement("div");this.options=new qM(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),_i(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),i.className="scroll-content",Array.from(e.childNodes).forEach(function(c){i.appendChild(c)}),e.appendChild(i),this.track=new YM(this),this.size=this.getSize(),this._plugins=nb(this,this.options.plugins);var s=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,o,{withoutCallbacks:!0});var a=window.ResizeObserver;typeof a=="function"&&(this._observer=new a(function(){n.update()}),this._observer.observe(i)),Oi.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(r.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=Oi.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),r.prototype.getSize=function(){return jM(this)},r.prototype.update=function(){KM(this),this._plugins.forEach(function(e){e.onUpdate()})},r.prototype.isVisible=function(e){return ZM(this,e)},r.prototype.setPosition=function(e,t,n){var i=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=JM(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(o){o.call(i,s)})},r.prototype.scrollTo=function(e,t,n,i){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),i===void 0&&(i={}),QM(this,e,t,n,i)},r.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),eb(this,e,t)},r.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},r.prototype.removeListener=function(e){this._listeners.delete(e)},r.prototype.addTransformableMomentum=function(e,t,n,i){this._updateDebounced();var s=this._plugins.reduce(function(a,c){return c.transformDelta(a,n)||a},{x:e,y:t}),o=!this._shouldPropagateMomentum(s.x,s.y);o&&this.addMomentum(s.x,s.y),i&&i.call(this,o)},r.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},r.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},r.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},r.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;HM(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),Oi.delete(this.containerEl);for(var i=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);i.forEach(function(s){t.appendChild(s)}),_i(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},r.prototype._init=function(){var e=this;this.update(),Object.keys(Ru).forEach(function(t){Ru[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},r.prototype._updateDebounced=function(){this.update()},r.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,i=n.options,s=n.offset,o=n.limit;if(!i.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var a=Ht(e+s.x,0,o.x),c=Ht(t+s.y,0,o.y),l=!0;return l=l&&a===s.x,l=l&&c===s.y,l=l&&(s.x===o.x||s.x===0||s.y===o.y||s.y===0),l},r.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var i=zn({},this._momentum);this._plugins.forEach(function(s){s.onRender(i)}),this._renderID=requestAnimationFrame(this._render.bind(this))},r.prototype._nextTick=function(e){var t=this,n=t.options,i=t.offset,s=t._momentum,o=i[e],a=s[e];if(Math.abs(a)<=.1)return{momentum:0,position:o+a};var c=a*(1-n.damping);return n.renderByPixels&&(c|=0),{momentum:c,position:o+a-c}},qi([wu(100,!0)],r.prototype,"_updateDebounced",null),r}();var FO="rgba(222, 222, 222, .75)",BO="rgba(0, 0, 0, .5)",kO=`
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: `+FO+`;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: `+BO+`;
  border-radius: 4px;
}
`,rb="smooth-scrollbar-style",Cu=!1;function Pp(){if(!(Cu||typeof window=="undefined")){var r=document.createElement("style");r.id=rb,r.textContent=kO,document.head&&document.head.appendChild(r),Cu=!0}}function sb(){if(!(!Cu||typeof window=="undefined")){var r=document.getElementById(rb);!r||!r.parentNode||(r.parentNode.removeChild(r),Cu=!1)}}var zO=function(r){T0(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return Pp(),Oi.has(t)?Oi.get(t):new Cp(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return Oi.has(t)},e.get=function(t){return Oi.get(t)},e.getAll=function(){return Array.from(Oi.values())},e.destroy=function(t){var n=Oi.get(t);n&&n.destroy()},e.destroyAll=function(){Oi.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return tb.apply(void 0,t)},e.attachStyle=function(){return Pp()},e.detachStyle=function(){return sb()},e.version="8.8.4",e.ScrollbarPlugin=Eu,e}(Cp),Ip=zO;var qm="156";var HO=0,ob=1,VO=2;var Vw=1,GO=2,xr=3,Ji=0,Wn=1,Nn=2;var Zr=0,Yo=1,ab=2,cb=3,lb=4,WO=5,qo=100,qO=101,XO=102,ub=103,hb=104,YO=200,jO=201,ZO=202,KO=203,Gw=204,Ww=205,JO=206,$O=207,QO=208,eD=209,tD=210,nD=0,iD=1,rD=2,um=3,sD=4,oD=5,aD=6,cD=7,qw=0,lD=1,uD=2,Kr=0,hD=1,fD=2,dD=3,pD=4,mD=5,Xw=300,Ko=301,Jo=302,hm=303,fm=304,Th=306,Xs=1e3,ni=1001,xc=1002,jt=1003,th=1004;var mc=1005;var Dn=1006,Xm=1007;var $r=1008;var Jr=1009,gD=1010,_D=1011,Ym=1012,Yw=1013,jr=1014,Mr=1015,Sc=1016,jw=1017,Zw=1018,Vs=1020,vD=1021,xi=1023,yD=1024,xD=1025,Gs=1026,$o=1027,SD=1028,Kw=1029,MD=1030,Jw=1031,$w=1033,Lp=33776,Op=33777,Dp=33778,Np=33779,fb=35840,db=35841,pb=35842,mb=35843,bD=36196,gb=37492,_b=37496,vb=37808,yb=37809,xb=37810,Sb=37811,Mb=37812,bb=37813,wb=37814,Tb=37815,Eb=37816,Ab=37817,Rb=37818,Cb=37819,Pb=37820,Ib=37821,Up=36492,Lb=36494,Ob=36495,wD=36283,Db=36284,Nb=36285,Ub=36286;var Qo=2300,Ys=2301,Fp=2302,Fb=2400,Bb=2401,kb=2402,TD=2500;var Qw=0,Eh=1,Lc=2,eT=3e3,Ws=3001,ED=3200,AD=3201,tT=0,RD=1,qs="",Xe="srgb",Ft="srgb-linear",Ah="display-p3";var Bp=7680;var CD=519,PD=512,ID=513,LD=514,OD=515,DD=516,ND=517,UD=518,FD=519,dm=35044;var zb="300 es",pm=1035,br=2e3,nh=2001,Qr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hb=1234567,gc=Math.PI/180,ea=180/Math.PI;function Fi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function jm(r,e){return(r%e+e)%e}function BD(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function kD(r,e,t){return r!==e?(t-r)/(e-r):0}function _c(r,e,t){return(1-t)*r+t*e}function zD(r,e,t,n){return _c(r,e,1-Math.exp(-t*n))}function HD(r,e=1){return e-Math.abs(jm(r,e*2)-e)}function VD(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function GD(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function WD(r,e){return r+Math.floor(Math.random()*(e-r+1))}function qD(r,e){return r+Math.random()*(e-r)}function XD(r){return r*(.5-Math.random())}function YD(r){r!==void 0&&(Hb=r);let e=Hb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jD(r){return r*gc}function ZD(r){return r*ea}function mm(r){return(r&r-1)===0&&r!==0}function nT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ih(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function KD(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var iT={DEG2RAD:gc,RAD2DEG:ea,generateUUID:Fi,clamp:vn,euclideanModulo:jm,mapLinear:BD,inverseLerp:kD,lerp:_c,damp:zD,pingpong:HD,smoothstep:VD,smootherstep:GD,randInt:WD,randFloat:qD,randFloatSpread:XD,seededRandom:YD,degToRad:jD,radToDeg:ZD,isPowerOfTwo:mm,ceilPowerOfTwo:nT,floorPowerOfTwo:ih,setQuaternionFromProperEuler:KD,normalize:gt,denormalize:Zi},it=class{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class{constructor(e,t,n,i,s,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],v=i[4],S=i[7],M=i[2],A=i[5],w=i[8];return s[0]=o*_+a*y+c*M,s[3]=o*m+a*v+c*A,s[6]=o*p+a*S+c*w,s[1]=l*_+u*y+h*M,s[4]=l*m+u*v+h*A,s[7]=l*p+u*S+h*w,s[2]=f*_+d*y+g*M,s[5]=f*m+d*v+g*A,s[8]=f*p+d*S+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kp.makeScale(e,t)),this}rotate(e){return this.premultiply(kp.makeRotation(-e)),this}translate(e,t){return this.premultiply(kp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kp=new Ke;function rT(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function JD(){let r=Mc("canvas");return r.style.display="block",r}var Vb={};function vc(r){r in Vb||(Vb[r]=!0,console.warn(r))}function jo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zp(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var $D=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),QD=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function eN(r){return r.convertSRGBToLinear().applyMatrix3(QD)}function tN(r){return r.applyMatrix3($D).convertLinearToSRGB()}var nN={[Ft]:r=>r,[Xe]:r=>r.convertSRGBToLinear(),[Ah]:eN},iN={[Ft]:r=>r,[Xe]:r=>r.convertLinearToSRGB(),[Ah]:tN},Gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Ft},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=nN[e],i=iN[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ao,rh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ao===void 0&&(Ao=Mc("canvas")),Ao.width=e.width,Ao.height=e.height;let n=Ao.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Mc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=jo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jo(t[n]/255)*255):t[n]=jo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rN=0,sh=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rN++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hp(i[o].image)):s.push(Hp(i[o]))}else s=Hp(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Hp(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?rh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sN=0,Gt=class extends Qr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=ni,i=ni,s=Dn,o=$r,a=xi,c=Jr,l=Gt.DEFAULT_ANISOTROPY,u=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sN++}),this.uuid=Fi(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ws?Xe:qs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Ws:eT}set encoding(e){vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ws?Xe:qs}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Xw;Gt.DEFAULT_ANISOTROPY=1;var pt=class{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,S=(d+1)/2,M=(p+1)/2,A=(u+f)/4,w=(h+_)/4,I=(g+m)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=w/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=I/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gm=class extends Qr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(vc("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ws?Xe:qs),this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wr=class extends gm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oh=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _m=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let M=Math.sqrt(v),A=Math.atan2(M,p*y);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}let S=a*y;if(c=c*m+f*S,l=l*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-a){let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vp.copy(this).projectOnVector(e),this.sub(Vp)}reflect(e){return this.sub(Vp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vp=new D,Gb=new Bi,Mi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox),Ro.applyMatrix4(e.matrixWorld),this.union(Ro);else{let i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)pr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pr)}else i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ac),Pu.subVectors(this.max,ac),Co.subVectors(e.a,ac),Po.subVectors(e.b,ac),Io.subVectors(e.c,ac),Gr.subVectors(Po,Co),Wr.subVectors(Io,Po),Us.subVectors(Co,Io);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-Us.z,Us.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,Us.z,0,-Us.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-Us.y,Us.x,0];return!Gp(t,Co,Po,Io,Pu)||(t=[1,0,0,0,1,0,0,0,1],!Gp(t,Co,Po,Io,Pu))?!1:(Iu.crossVectors(Gr,Wr),t=[Iu.x,Iu.y,Iu.z],Gp(t,Co,Po,Io,Pu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dr=[new D,new D,new D,new D,new D,new D,new D,new D],pr=new D,Ro=new Mi,Co=new D,Po=new D,Io=new D,Gr=new D,Wr=new D,Us=new D,ac=new D,Pu=new D,Iu=new D,Fs=new D;function Gp(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Fs.fromArray(r,s);let a=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var oN=new Mi,cc=new D,Wp=new D,ii=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):oN.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cc.subVectors(e,this.center);let t=cc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cc.copy(e.center).add(Wp)),this.expandByPoint(cc.copy(e.center).sub(Wp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mr=new D,qp=new D,Lu=new D,qr=new D,Xp=new D,Ou=new D,Yp=new D,ta=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qp.copy(e).add(t).multiplyScalar(.5),Lu.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(qp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Lu),a=qr.dot(this.direction),c=-qr.dot(Lu),l=qr.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(qp).addScaledVector(Lu,f),d}intersectSphere(e,t){mr.subVectors(e.center,this.origin);let n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,n,i,s){Xp.subVectors(t,e),Ou.subVectors(n,e),Yp.crossVectors(Xp,Ou);let o=this.direction.dot(Yp),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qr.subVectors(this.origin,e);let c=a*this.direction.dot(Ou.crossVectors(qr,Ou));if(c<0)return null;let l=a*this.direction.dot(Xp.cross(qr));if(l<0||c+l>o)return null;let u=-a*qr.dot(Yp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Lo.setFromMatrixColumn(e,0).length(),s=1/Lo.setFromMatrixColumn(e,1).length(),o=1/Lo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aN,e,cN)}lookAt(e,t,n){let i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Xr.crossVectors(n,Qn),Xr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Xr.crossVectors(n,Qn)),Xr.normalize(),Du.crossVectors(Qn,Xr),i[0]=Xr.x,i[4]=Du.x,i[8]=Qn.x,i[1]=Xr.y,i[5]=Du.y,i[9]=Qn.y,i[2]=Xr.z,i[6]=Du.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],S=n[11],M=n[15],A=i[0],w=i[4],I=i[8],x=i[12],b=i[1],X=i[5],q=i[9],z=i[13],B=i[2],F=i[6],U=i[10],L=i[14],k=i[3],j=i[7],R=i[11],N=i[15];return s[0]=o*A+a*b+c*B+l*k,s[4]=o*w+a*X+c*F+l*j,s[8]=o*I+a*q+c*U+l*R,s[12]=o*x+a*z+c*L+l*N,s[1]=u*A+h*b+f*B+d*k,s[5]=u*w+h*X+f*F+d*j,s[9]=u*I+h*q+f*U+d*R,s[13]=u*x+h*z+f*L+d*N,s[2]=g*A+_*b+m*B+p*k,s[6]=g*w+_*X+m*F+p*j,s[10]=g*I+_*q+m*U+p*R,s[14]=g*x+_*z+m*L+p*N,s[3]=y*A+v*b+S*B+M*k,s[7]=y*w+v*X+S*F+M*j,s[11]=y*I+v*q+S*U+M*R,s[15]=y*x+v*z+S*L+M*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,v=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,S=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,M=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,A=t*y+n*v+i*S+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=y*w,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*w,e[4]=v*w,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*w,e[8]=S*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*w,e[12]=M*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=c*l,v=c*u,S=c*h,M=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+S)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+v)*w,i[9]=(m-y)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Lo.set(i[0],i[1],i[2]).length(),o=Lo.set(i[4],i[5],i[6]).length(),a=Lo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);let l=1/s,u=1/o,h=1/a;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=h,Di.elements[9]*=h,Di.elements[10]*=h,t.setFromRotationMatrix(Di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=br){let c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===br)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===nh)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=br){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u,g,_;if(a===br)g=(o+s)*h,_=-2*h;else if(a===nh)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lo=new D,Di=new Ye,aN=new D(0,0,0),cN=new D(1,1,1),Xr=new D,Du=new D,Qn=new D,Wb=new Ye,qb=new Bi,na=class{constructor(e=0,t=0,n=0,i=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wb,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qb.setFromEuler(this),this.setFromQuaternion(qb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};na.DEFAULT_ORDER="XYZ";var ah=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lN=0,Xb=new D,Oo=new Bi,gr=new Ye,Nu=new D,lc=new D,uN=new D,hN=new Bi,Yb=new D(1,0,0),jb=new D(0,1,0),Zb=new D(0,0,1),fN={type:"added"},dN={type:"removed"},yt=class extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lN++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();let e=new D,t=new na,n=new Bi,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.premultiply(Oo),this}rotateX(e){return this.rotateOnAxis(Yb,e)}rotateY(e){return this.rotateOnAxis(jb,e)}rotateZ(e){return this.rotateOnAxis(Zb,e)}translateOnAxis(e,t){return Xb.copy(e).applyQuaternion(this.quaternion),this.position.add(Xb.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yb,e)}translateY(e){return this.translateOnAxis(jb,e)}translateZ(e){return this.translateOnAxis(Zb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nu.copy(e):Nu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(lc,Nu,this.up):gr.lookAt(Nu,lc,this.up),this.quaternion.setFromRotationMatrix(gr),i&&(gr.extractRotation(i.matrixWorld),Oo.setFromRotationMatrix(gr),this.quaternion.premultiply(Oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fN)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dN)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,e,uN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,hN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new D,_r=new D,jp=new D,vr=new D,Do=new D,No=new D,Kb=new D,Zp=new D,Kp=new D,Jp=new D,Uu=!1,ti=class{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ni.subVectors(e,t),i.cross(Ni);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ni.subVectors(i,t),_r.subVectors(n,t),jp.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(_r),c=Ni.dot(jp),l=_r.dot(_r),u=_r.dot(jp),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vr),vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getUV(e,t,n,i,s,o,a,c){return Uu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uu=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,vr),c.setScalar(0),c.addScaledVector(s,vr.x),c.addScaledVector(o,vr.y),c.addScaledVector(a,vr.z),c}static isFrontFacing(e,t,n,i){return Ni.subVectors(n,t),_r.subVectors(e,t),Ni.cross(_r).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Ni.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Uu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uu=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Do.subVectors(i,n),No.subVectors(s,n),Zp.subVectors(e,n);let c=Do.dot(Zp),l=No.dot(Zp);if(c<=0&&l<=0)return t.copy(n);Kp.subVectors(e,i);let u=Do.dot(Kp),h=No.dot(Kp);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Do,o);Jp.subVectors(e,s);let d=Do.dot(Jp),g=No.dot(Jp);if(g>=0&&d<=g)return t.copy(s);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(No,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Kb.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Kb,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Do,o).addScaledVector(No,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pN=0,ri=class extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pN++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Yo,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gw,this.blendDst=Ww,this.blendEquation=qo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=um,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bp,this.stencilZFail=Bp,this.stencilZPass=Bp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Fu={h:0,s:0,l:0};function $p(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Gn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Gn.workingColorSpace){if(e=jm(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$p(o,s,e+1/3),this.g=$p(o,s,e),this.b=$p(o,s,e-1/3)}return Gn.toWorkingColorSpace(this,i),this}setStyle(e,t=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){let n=sT[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}copyLinearToSRGB(e){return this.r=zp(e.r),this.g=zp(e.g),this.b=zp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return Gn.fromWorkingColorSpace(_n.copy(this),e),Math.round(vn(_n.r*255,0,255))*65536+Math.round(vn(_n.g*255,0,255))*256+Math.round(vn(_n.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gn.workingColorSpace){Gn.fromWorkingColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Gn.workingColorSpace){return Gn.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Xe){Gn.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),Ui.h+=e,Ui.s+=t,Ui.l+=n,this.setHSL(Ui.h,Ui.s,Ui.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Fu);let n=_c(Ui.h,Fu.h,t),i=_c(Ui.s,Fu.s,t),s=_c(Ui.l,Fu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ze;ze.NAMES=sT;var Zt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new D,Bu=new it,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dm,this.updateRange={offset:0,count:-1},this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bu.fromBufferAttribute(this,t),Bu.applyMatrix3(e),this.setXY(t,Bu.x,Bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var ch=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lh=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Si=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var mN=0,yi=new Ye,Qp=new yt,Uo=new D,ei=new Mi,uc=new Mi,tn=new D,yn=class extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mN++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rT(e)?lh:ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,n){return yi.makeTranslation(e,t,n),this.applyMatrix4(yi),this}scale(e,t,n){return yi.makeScale(e,t,n),this.applyMatrix4(yi),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];uc.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(ei.min,uc.min),ei.expandByPoint(tn),tn.addVectors(ei.max,uc.max),ei.expandByPoint(tn)):(ei.expandByPoint(uc.min),ei.expandByPoint(uc.max))}ei.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(Uo.fromBufferAttribute(e,l),tn.add(Uo)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new D,u[b]=new D;let h=new D,f=new D,d=new D,g=new it,_=new it,m=new it,p=new D,y=new D;function v(b,X,q){h.fromArray(i,b*3),f.fromArray(i,X*3),d.fromArray(i,q*3),g.fromArray(o,b*2),_.fromArray(o,X*2),m.fromArray(o,q*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);let z=1/(_.x*m.y-m.x*_.y);isFinite(z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(z),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(z),l[b].add(p),l[X].add(p),l[q].add(p),u[b].add(y),u[X].add(y),u[q].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,X=S.length;b<X;++b){let q=S[b],z=q.start,B=q.count;for(let F=z,U=z+B;F<U;F+=3)v(n[F+0],n[F+1],n[F+2])}let M=new D,A=new D,w=new D,I=new D;function x(b){w.fromArray(s,b*3),I.copy(w);let X=l[b];M.copy(X),M.sub(w.multiplyScalar(w.dot(X))).normalize(),A.crossVectors(I,X);let z=A.dot(u[b])<0?-1:1;c[b*4]=M.x,c[b*4+1]=M.y,c[b*4+2]=M.z,c[b*4+3]=z}for(let b=0,X=S.length;b<X;++b){let q=S[b],z=q.start,B=q.count;for(let F=z,U=z+B;F<U;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new yn,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jb=new Ye,Bs=new ta,ku=new ii,$b=new D,Fo=new D,Bo=new D,ko=new D,em=new D,zu=new D,Hu=new it,Vu=new it,Gu=new it,Qb=new D,ew=new D,tw=new D,Wu=new D,qu=new D,ln=class extends yt{constructor(e=new yn,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){zu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(em.fromBufferAttribute(h,e),o?zu.addScaledVector(em,u):zu.addScaledVector(em.sub(t),u))}t.add(zu)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ku.copy(n.boundingSphere),ku.applyMatrix4(s),Bs.copy(e.ray).recast(e.near),!(ku.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(ku,$b)===null||Bs.origin.distanceToSquared($b)>(e.far-e.near)**2))&&(Jb.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(Jb),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){let A=a.getX(S),w=a.getX(S+1),I=a.getX(S+2);i=Xu(this,p,e,n,l,u,h,A,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Xu(this,o,e,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){let A=S,w=S+1,I=S+2;i=Xu(this,p,e,n,l,u,h,A,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,v=m+1,S=m+2;i=Xu(this,o,e,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function gN(r,e,t,n,i,s,o,a){let c;if(e.side===Wn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Ji,a),c===null)return null;qu.copy(a),qu.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(qu);return l<t.near||l>t.far?null:{distance:l,point:qu.clone(),object:r}}function Xu(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Fo),r.getVertexPosition(c,Bo),r.getVertexPosition(l,ko);let u=gN(r,e,t,n,Fo,Bo,ko,Wu);if(u){i&&(Hu.fromBufferAttribute(i,a),Vu.fromBufferAttribute(i,c),Gu.fromBufferAttribute(i,l),u.uv=ti.getInterpolation(Wu,Fo,Bo,ko,Hu,Vu,Gu,new it)),s&&(Hu.fromBufferAttribute(s,a),Vu.fromBufferAttribute(s,c),Gu.fromBufferAttribute(s,l),u.uv1=ti.getInterpolation(Wu,Fo,Bo,ko,Hu,Vu,Gu,new it),u.uv2=u.uv1),o&&(Qb.fromBufferAttribute(o,a),ew.fromBufferAttribute(o,c),tw.fromBufferAttribute(o,l),u.normal=ti.getInterpolation(Wu,Fo,Bo,ko,Qb,ew,tw,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new D,materialIndex:0};ti.getNormal(Fo,Bo,ko,h.normal),u.face=h}return u}var Tr=class extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Si(l,3)),this.setAttribute("normal",new Si(u,3)),this.setAttribute("uv",new Si(h,2));function g(_,m,p,y,v,S,M,A,w,I,x){let b=S/w,X=M/I,q=S/2,z=M/2,B=A/2,F=w+1,U=I+1,L=0,k=0,j=new D;for(let R=0;R<U;R++){let N=R*X-z;for(let K=0;K<F;K++){let O=K*b-q;j[_]=O*y,j[m]=N*v,j[p]=B,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(K/w),h.push(1-R/I),L+=1}}for(let R=0;R<I;R++)for(let N=0;N<w;N++){let K=f+N+F*R,O=f+N+F*(R+1),oe=f+(N+1)+F*(R+1),le=f+(N+1)+F*R;c.push(K,O,le),c.push(O,oe,le),k+=6}a.addGroup(d,k,x),d+=k,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ia(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){let e={};for(let t=0;t<r.length;t++){let n=ia(r[t]);for(let i in n)e[i]=n[i]}return e}function _N(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function oT(r){return r.getRenderTarget()===null?r.outputColorSpace:Ft}var vN={clone:ia,merge:On},yN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Er=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yN,this.fragmentShader=xN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=_N(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uh=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends uh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zo=-90,Ho=1,vm=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;let i=new cn(zo,Ho,e,t);i.layers=this.layers,this.add(i);let s=new cn(zo,Ho,e,t);s.layers=this.layers,this.add(s);let o=new cn(zo,Ho,e,t);o.layers=this.layers,this.add(o);let a=new cn(zo,Ho,e,t);a.layers=this.layers,this.add(a);let c=new cn(zo,Ho,e,t);c.layers=this.layers,this.add(c);let l=new cn(zo,Ho,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===br)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nh)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},hh=class extends Gt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ko,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ym=class extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vc("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ws?Xe:qs),this.texture=new hh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tr(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Zr});s.uniforms.tEquirect.value=t;let o=new ln(i,s),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=Dn),new vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},tm=new D,SN=new D,MN=new Ke,Sr=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=tm.subVectors(n,t).cross(SN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tm),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||MN.getNormalMatrix(e),i=this.coplanarPoint(tm).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new ii,Yu=new D,bc=class{constructor(e=new Sr,t=new Sr,n=new Sr,i=new Sr,s=new Sr,o=new Sr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=br){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-s,f-l,m-d,S-p).normalize(),n[1].setComponents(c+s,f+l,m+d,S+p).normalize(),n[2].setComponents(c+o,f+u,m+g,S+y).normalize(),n[3].setComponents(c-o,f-u,m-g,S-y).normalize(),n[4].setComponents(c-a,f-h,m-_,S-v).normalize(),t===br)n[5].setComponents(c+a,f+h,m+_,S+v).normalize();else if(t===nh)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yu.x=i.normal.x>0?e.max.x:e.min.x,Yu.y=i.normal.y>0?e.max.y:e.min.y,Yu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function aT(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bN(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let f=u.array,d=u.updateRange;r.bindBuffer(h,l),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var wc=class extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let y=p*f-o;for(let v=0;v<l;v++){let S=v*h-s;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,S=y+l*(p+1),M=y+1+l*(p+1),A=y+1+l*p;d.push(v,S,A),d.push(S,M,A)}this.setIndex(d),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(_,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}},wN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RN=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,CN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ON=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,BN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YN=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$N="gl_FragColor = linearToOutputTexel( gl_FragColor );",QN=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_U=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,SU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MU=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,TU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LU=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NU=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FU=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,zU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,XU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$U=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,r3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,l3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,C3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N3=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:wN,alphahash_pars_fragment:TN,alphamap_fragment:EN,alphamap_pars_fragment:AN,alphatest_fragment:RN,alphatest_pars_fragment:CN,aomap_fragment:PN,aomap_pars_fragment:IN,begin_vertex:LN,beginnormal_vertex:ON,bsdfs:DN,iridescence_fragment:NN,bumpmap_pars_fragment:UN,clipping_planes_fragment:FN,clipping_planes_pars_fragment:BN,clipping_planes_pars_vertex:kN,clipping_planes_vertex:zN,color_fragment:HN,color_pars_fragment:VN,color_pars_vertex:GN,color_vertex:WN,common:qN,cube_uv_reflection_fragment:XN,defaultnormal_vertex:YN,displacementmap_pars_vertex:jN,displacementmap_vertex:ZN,emissivemap_fragment:KN,emissivemap_pars_fragment:JN,colorspace_fragment:$N,colorspace_pars_fragment:QN,envmap_fragment:eU,envmap_common_pars_fragment:tU,envmap_pars_fragment:nU,envmap_pars_vertex:iU,envmap_physical_pars_fragment:mU,envmap_vertex:rU,fog_vertex:sU,fog_pars_vertex:oU,fog_fragment:aU,fog_pars_fragment:cU,gradientmap_pars_fragment:lU,lightmap_fragment:uU,lightmap_pars_fragment:hU,lights_lambert_fragment:fU,lights_lambert_pars_fragment:dU,lights_pars_begin:pU,lights_toon_fragment:gU,lights_toon_pars_fragment:_U,lights_phong_fragment:vU,lights_phong_pars_fragment:yU,lights_physical_fragment:xU,lights_physical_pars_fragment:SU,lights_fragment_begin:MU,lights_fragment_maps:bU,lights_fragment_end:wU,logdepthbuf_fragment:TU,logdepthbuf_pars_fragment:EU,logdepthbuf_pars_vertex:AU,logdepthbuf_vertex:RU,map_fragment:CU,map_pars_fragment:PU,map_particle_fragment:IU,map_particle_pars_fragment:LU,metalnessmap_fragment:OU,metalnessmap_pars_fragment:DU,morphcolor_vertex:NU,morphnormal_vertex:UU,morphtarget_pars_vertex:FU,morphtarget_vertex:BU,normal_fragment_begin:kU,normal_fragment_maps:zU,normal_pars_fragment:HU,normal_pars_vertex:VU,normal_vertex:GU,normalmap_pars_fragment:WU,clearcoat_normal_fragment_begin:qU,clearcoat_normal_fragment_maps:XU,clearcoat_pars_fragment:YU,iridescence_pars_fragment:jU,opaque_fragment:ZU,packing:KU,premultiplied_alpha_fragment:JU,project_vertex:$U,dithering_fragment:QU,dithering_pars_fragment:e3,roughnessmap_fragment:t3,roughnessmap_pars_fragment:n3,shadowmap_pars_fragment:i3,shadowmap_pars_vertex:r3,shadowmap_vertex:s3,shadowmask_pars_fragment:o3,skinbase_vertex:a3,skinning_pars_vertex:c3,skinning_vertex:l3,skinnormal_vertex:u3,specularmap_fragment:h3,specularmap_pars_fragment:f3,tonemapping_fragment:d3,tonemapping_pars_fragment:p3,transmission_fragment:m3,transmission_pars_fragment:g3,uv_pars_fragment:_3,uv_pars_vertex:v3,uv_vertex:y3,worldpos_vertex:x3,background_vert:S3,background_frag:M3,backgroundCube_vert:b3,backgroundCube_frag:w3,cube_vert:T3,cube_frag:E3,depth_vert:A3,depth_frag:R3,distanceRGBA_vert:C3,distanceRGBA_frag:P3,equirect_vert:I3,equirect_frag:L3,linedashed_vert:O3,linedashed_frag:D3,meshbasic_vert:N3,meshbasic_frag:U3,meshlambert_vert:F3,meshlambert_frag:B3,meshmatcap_vert:k3,meshmatcap_frag:z3,meshnormal_vert:H3,meshnormal_frag:V3,meshphong_vert:G3,meshphong_frag:W3,meshphysical_vert:q3,meshphysical_frag:X3,meshtoon_vert:Y3,meshtoon_frag:j3,points_vert:Z3,points_frag:K3,shadow_vert:J3,shadow_frag:$3,sprite_vert:Q3,sprite_frag:eF},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ji={basic:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:On([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:On([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:On([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:On([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:On([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:On([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:On([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:On([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:On([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:On([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ji.physical={uniforms:On([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ju={r:0,b:0,g:0};function tF(r,e,t,n,i,s,o){let a=new ze(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Th)?(u===void 0&&(u=new ln(new Tr(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:ia(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Xe,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ln(new wc(2,2),new Er({name:"BackgroundMaterial",uniforms:ia(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(ju,oT(r)),n.buffers.color.setClear(ju.r,ju.g,ju.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function nF(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function h(B,F,U,L,k){let j=!1;if(o){let R=_(L,U,F);l!==R&&(l=R,d(l.object)),j=p(B,L,U,k),j&&y(B,L,U,k)}else{let R=F.wireframe===!0;(l.geometry!==L.id||l.program!==U.id||l.wireframe!==R)&&(l.geometry=L.id,l.program=U.id,l.wireframe=R,j=!0)}k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,I(B,F,U,L),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(B){return n.isWebGL2?r.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?r.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,F,U){let L=U.wireframe===!0,k=a[B.id];k===void 0&&(k={},a[B.id]=k);let j=k[F.id];j===void 0&&(j={},k[F.id]=j);let R=j[L];return R===void 0&&(R=m(f()),j[L]=R),R}function m(B){let F=[],U=[],L=[];for(let k=0;k<i;k++)F[k]=0,U[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:L,object:B,attributes:{},index:null}}function p(B,F,U,L){let k=l.attributes,j=F.attributes,R=0,N=U.getAttributes();for(let K in N)if(N[K].location>=0){let oe=k[K],le=j[K];if(le===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;R++}return l.attributesNum!==R||l.index!==L}function y(B,F,U,L){let k={},j=F.attributes,R=0,N=U.getAttributes();for(let K in N)if(N[K].location>=0){let oe=j[K];oe===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor));let le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),k[K]=le,R++}l.attributes=k,l.attributesNum=R,l.index=L}function v(){let B=l.newAttributes;for(let F=0,U=B.length;F<U;F++)B[F]=0}function S(B){M(B,0)}function M(B,F){let U=l.newAttributes,L=l.enabledAttributes,k=l.attributeDivisors;U[B]=1,L[B]===0&&(r.enableVertexAttribArray(B),L[B]=1),k[B]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,F),k[B]=F)}function A(){let B=l.newAttributes,F=l.enabledAttributes;for(let U=0,L=F.length;U<L;U++)F[U]!==B[U]&&(r.disableVertexAttribArray(U),F[U]=0)}function w(B,F,U,L,k,j,R){R===!0?r.vertexAttribIPointer(B,F,U,k,j):r.vertexAttribPointer(B,F,U,L,k,j)}function I(B,F,U,L){if(n.isWebGL2===!1&&(B.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let k=L.attributes,j=U.getAttributes(),R=F.defaultAttributeValues;for(let N in j){let K=j[N];if(K.location>=0){let O=k[N];if(O===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(O=B.instanceColor)),O!==void 0){let oe=O.normalized,le=O.itemSize,xe=t.get(O);if(xe===void 0)continue;let Se=xe.buffer,Me=xe.type,Be=xe.bytesPerElement,At=n.isWebGL2===!0&&(Me===r.INT||Me===r.UNSIGNED_INT||O.gpuType===Yw);if(O.isInterleavedBufferAttribute){let Ie=O.data,G=Ie.stride,De=O.offset;if(Ie.isInstancedInterleavedBuffer){for(let de=0;de<K.locationSize;de++)M(K.location+de,Ie.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let de=0;de<K.locationSize;de++)S(K.location+de);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let de=0;de<K.locationSize;de++)w(K.location+de,le/K.locationSize,Me,oe,G*Be,(De+le/K.locationSize*de)*Be,At)}else{if(O.isInstancedBufferAttribute){for(let Ie=0;Ie<K.locationSize;Ie++)M(K.location+Ie,O.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ie=0;Ie<K.locationSize;Ie++)S(K.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ie=0;Ie<K.locationSize;Ie++)w(K.location+Ie,le/K.locationSize,Me,oe,le*Be,le/K.locationSize*Ie*Be,At)}}else if(R!==void 0){let oe=R[N];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(K.location,oe);break;case 3:r.vertexAttrib3fv(K.location,oe);break;case 4:r.vertexAttrib4fv(K.location,oe);break;default:r.vertexAttrib1fv(K.location,oe)}}}}A()}function x(){q();for(let B in a){let F=a[B];for(let U in F){let L=F[U];for(let k in L)g(L[k].object),delete L[k];delete F[U]}delete a[B]}}function b(B){if(a[B.id]===void 0)return;let F=a[B.id];for(let U in F){let L=F[U];for(let k in L)g(L[k].object),delete L[k];delete F[U]}delete a[B.id]}function X(B){for(let F in a){let U=a[F];if(U[B.id]===void 0)continue;let L=U[B.id];for(let k in L)g(L[k].object),delete L[k];delete U[B.id]}}function q(){z(),u=!0,l!==c&&(l=c,d(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:q,resetDefaultState:z,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function iF(r,e,t,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function rF(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:A}}function sF(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Sr,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{let y=s?0:n,v=y*4,S=p.clippingState||null;c.value=S,S=u(g,f,v,d);for(let M=0;M!==v;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function oF(r){let e=new WeakMap;function t(o,a){return a===hm?o.mapping=Ko:a===fm&&(o.mapping=Jo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===hm||a===fm)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ym(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var es=class extends uh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xo=4,nw=[.125,.215,.35,.446,.526,.582],Hs=20,nm=new es,iw=new ze,im=null,zs=(1+Math.sqrt(5))/2,Vo=1/zs,rw=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,zs,Vo),new D(0,zs,-Vo),new D(Vo,0,zs),new D(-Vo,0,zs),new D(zs,Vo,0),new D(-zs,Vo,0)],fh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){im=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ow(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(im),e.scissorTest=!1,Zu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ko||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),im=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Sc,format:xi,colorSpace:Ft,depthBuffer:!1},i=sw(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sw(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aF(s)),this._blurMaterial=cF(s,e,t)}return i}_compileMaterial(e){let t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,nm)}_sceneToCubeUV(e,t,n,i){let a=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(iw),u.toneMapping=Kr,u.autoClear=!1;let d=new Zt({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),g=new ln(new Tr,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(iw),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Zu(i,y*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ko||e.mapping===Jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=aw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ow());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Zu(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,nm)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=rw[(i-1)%rw.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ln(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Hs;m>Hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let p=[],y=0;for(let w=0;w<Hs;++w){let I=w/_,x=Math.exp(-I*I/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let S=this._sizeLods[i],M=3*S*(i>v-Xo?i-v+Xo:0),A=4*(this._cubeSize-S);Zu(t,M,A,3*S,2*S),c.setRenderTarget(t),c.render(h,nm)}};function aF(r){let e=[],t=[],n=[],i=r,s=r-Xo+1+nw.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Xo?c=nw[o-r+Xo-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,I=A>2?0:-1,x=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(x,_*g*A),v.set(f,m*g*A);let b=[A,A,A,A,A,A];S.set(b,p*g*A)}let M=new yn;M.setAttribute("position",new Dt(y,_)),M.setAttribute("uv",new Dt(v,m)),M.setAttribute("faceIndex",new Dt(S,p)),e.push(M),i>Xo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sw(r,e,t){let n=new wr(r,e,t);return n.texture.mapping=Th,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zu(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cF(r,e,t){let n=new Float32Array(Hs),i=new D(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function ow(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function aw(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Zm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lF(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===hm||c===fm,u=c===Ko||c===Jo;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new fh(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new fh(r));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uF(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hF(r,e,t,n){let i={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],r.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let v=0,S=y.length;v<S;v+=3){let M=y[v+0],A=y[v+1],w=y[v+2];f.push(M,A,A,w,w,M)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){let M=v+0,A=v+1,w=v+2;f.push(M,A,A,w,w,M)}}else return;let m=new(rT(f)?lh:ch)(f,1);m.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function fF(r,e,t,n){let i=n.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,f*c,g),t.update(d,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function dF(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pF(r,e){return r[0]-e[0]}function mF(r,e){return Math.abs(e[1])-Math.abs(r[1])}function gF(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,_=s.get(u);if(_===void 0||_.count!==g){let B=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],I=0;y===!0&&(I=1),v===!0&&(I=2),S===!0&&(I=3);let x=u.attributes.position.count*I,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let X=new Float32Array(x*b*4*g),q=new oh(X,x,b,g);q.type=Mr,q.needsUpdate=!0;let z=I*4;for(let F=0;F<g;F++){let U=M[F],L=A[F],k=w[F],j=x*b*4*F;for(let R=0;R<U.count;R++){let N=R*z;y===!0&&(o.fromBufferAttribute(U,R),X[j+N+0]=o.x,X[j+N+1]=o.y,X[j+N+2]=o.z,X[j+N+3]=0),v===!0&&(o.fromBufferAttribute(L,R),X[j+N+4]=o.x,X[j+N+5]=o.y,X[j+N+6]=o.z,X[j+N+7]=0),S===!0&&(o.fromBufferAttribute(k,R),X[j+N+8]=o.x,X[j+N+9]=o.y,X[j+N+10]=o.z,X[j+N+11]=k.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new it(x,b)},s.set(u,_),u.addEventListener("dispose",B)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){let S=g[v];S[0]=v,S[1]=f[v]}g.sort(mF);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(pF);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let S=a[v],M=S[0],A=S[1];M!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[M]&&u.setAttribute("morphTarget"+v,_[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),i[v]=A,p+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function _F(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var cT=new Gt,lT=new oh,uT=new _m,hT=new hh,cw=[],lw=[],uw=new Float32Array(16),hw=new Float32Array(9),fw=new Float32Array(4);function ua(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=cw[i];if(s===void 0&&(s=new Float32Array(i),cw[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rh(r,e){let t=lw[e];t===void 0&&(t=new Int32Array(e),lw[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function xF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function SF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function MF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;fw.set(n),r.uniformMatrix2fv(this.addr,!1,fw),Jt(t,n)}}function bF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;hw.set(n),r.uniformMatrix3fv(this.addr,!1,hw),Jt(t,n)}}function wF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;uw.set(n),r.uniformMatrix4fv(this.addr,!1,uw),Jt(t,n)}}function TF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function EF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function AF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function RF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function CF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function PF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function IF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function LF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function OF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cT,i)}function DF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uT,i)}function NF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hT,i)}function UF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lT,i)}function FF(r){switch(r){case 5126:return vF;case 35664:return yF;case 35665:return xF;case 35666:return SF;case 35674:return MF;case 35675:return bF;case 35676:return wF;case 5124:case 35670:return TF;case 35667:case 35671:return EF;case 35668:case 35672:return AF;case 35669:case 35673:return RF;case 5125:return CF;case 36294:return PF;case 36295:return IF;case 36296:return LF;case 35678:case 36198:case 36298:case 36306:case 35682:return OF;case 35679:case 36299:case 36307:return DF;case 35680:case 36300:case 36308:case 36293:return NF;case 36289:case 36303:case 36311:case 36292:return UF}}function BF(r,e){r.uniform1fv(this.addr,e)}function kF(r,e){let t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function zF(r,e){let t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function HF(r,e){let t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function VF(r,e){let t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function GF(r,e){let t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function WF(r,e){let t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qF(r,e){r.uniform1iv(this.addr,e)}function XF(r,e){r.uniform2iv(this.addr,e)}function YF(r,e){r.uniform3iv(this.addr,e)}function jF(r,e){r.uniform4iv(this.addr,e)}function ZF(r,e){r.uniform1uiv(this.addr,e)}function KF(r,e){r.uniform2uiv(this.addr,e)}function JF(r,e){r.uniform3uiv(this.addr,e)}function $F(r,e){r.uniform4uiv(this.addr,e)}function QF(r,e,t){let n=this.cache,i=e.length,s=Rh(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||cT,s[o])}function eB(r,e,t){let n=this.cache,i=e.length,s=Rh(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||uT,s[o])}function tB(r,e,t){let n=this.cache,i=e.length,s=Rh(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||hT,s[o])}function nB(r,e,t){let n=this.cache,i=e.length,s=Rh(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lT,s[o])}function iB(r){switch(r){case 5126:return BF;case 35664:return kF;case 35665:return zF;case 35666:return HF;case 35674:return VF;case 35675:return GF;case 35676:return WF;case 5124:case 35670:return qF;case 35667:case 35671:return XF;case 35668:case 35672:return YF;case 35669:case 35673:return jF;case 5125:return ZF;case 36294:return KF;case 36295:return JF;case 36296:return $F;case 35678:case 36198:case 36298:case 36306:case 35682:return QF;case 35679:case 36299:case 36307:return eB;case 35680:case 36300:case 36308:case 36293:return tB;case 36289:case 36303:case 36311:case 36292:return nB}}var xm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=FF(t.type)}},Sm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=iB(t.type)}},Mm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},rm=/(\w+)(\])?(\[|\.)?/g;function dw(r,e){r.seq.push(e),r.map[e.id]=e}function rB(r,e,t){let n=r.name,i=n.length;for(rm.lastIndex=0;;){let s=rm.exec(n),o=rm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){dw(t,l===void 0?new xm(a,r,e):new Sm(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Mm(a),dw(t,h)),t=h}}}var Zo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);rB(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function pw(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var sB=0;function oB(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function aB(r){switch(r){case Ft:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function mw(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+oB(r.getShaderSource(e),o)}else return i}function cB(r,e){let t=aB(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lB(r,e){let t;switch(e){case hD:t="Linear";break;case fD:t="Reinhard";break;case dD:t="OptimizedCineon";break;case pD:t="ACESFilmic";break;case mD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uB(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pc).join(`
`)}function hB(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fB(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function pc(r){return r!==""}function gw(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _w(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dB=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(r){return r.replace(dB,mB)}var pB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mB(r,e){let t=Ze[e];if(t===void 0){let n=pB.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bm(t)}var gB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vw(r){return r.replace(gB,_B)}function _B(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yw(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vB(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vw?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===GO?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function yB(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ko:case Jo:e="ENVMAP_TYPE_CUBE";break;case Th:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xB(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function SB(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qw:e="ENVMAP_BLENDING_MULTIPLY";break;case lD:e="ENVMAP_BLENDING_MIX";break;case uD:e="ENVMAP_BLENDING_ADD";break}return e}function MB(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bB(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=vB(t),l=yB(t),u=xB(t),h=SB(t),f=MB(t),d=t.isWebGL2?"":uB(t),g=hB(s),_=i.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pc).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pc).join(`
`),p.length>0&&(p+=`
`)):(m=[yw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pc).join(`
`),p=[d,yw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Kr?lB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,cB("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pc).join(`
`)),o=bm(o),o=gw(o,t),o=_w(o,t),a=bm(a),a=gw(a,t),a=_w(a,t),o=vw(o),a=vw(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,S=y+p+a,M=pw(i,i.VERTEX_SHADER,v),A=pw(i,i.FRAGMENT_SHADER,S);if(i.attachShader(_,M),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){let x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(A).trim(),q=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,A);else{let B=mw(i,M,"vertex"),F=mw(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+B+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||X==="")&&(z=!1);z&&(this.diagnostics={runnable:q,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(M),i.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new Zo(i,_)),w};let I;return this.getAttributes=function(){return I===void 0&&(I=fB(i,_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sB++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}var wB=0,wm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}},Tm=class{constructor(e){this.id=wB++,this.code=e,this.usedTimes=0}};function TB(r,e,t,n,i,s,o){let a=new ah,c=new wm,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,X,q,z){let B=q.fog,F=z.geometry,U=x.isMeshStandardMaterial?q.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),k=L&&L.mapping===Th?L.image.height:null,j=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,N=R!==void 0?R.length:0,K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let O,oe,le,xe;if(j){let fe=ji[j];O=fe.vertexShader,oe=fe.fragmentShader}else O=x.vertexShader,oe=x.fragmentShader,c.update(x),le=c.getVertexShaderID(x),xe=c.getFragmentShaderID(x);let Se=r.getRenderTarget(),Me=z.isInstancedMesh===!0,Be=!!x.map,At=!!x.matcap,Ie=!!L,G=!!x.aoMap,De=!!x.lightMap,de=!!x.bumpMap,Pe=!!x.normalMap,Ce=!!x.displacementMap,Y=!!x.emissiveMap,Ne=!!x.metalnessMap,Fe=!!x.roughnessMap,rt=x.anisotropy>0,Je=x.clearcoat>0,Tt=x.iridescence>0,C=x.sheen>0,T=x.transmission>0,W=rt&&!!x.anisotropyMap,te=Je&&!!x.clearcoatMap,ne=Je&&!!x.clearcoatNormalMap,ie=Je&&!!x.clearcoatRoughnessMap,we=Tt&&!!x.iridescenceMap,se=Tt&&!!x.iridescenceThicknessMap,$=C&&!!x.sheenColorMap,ve=C&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,Re=!!x.specularColorMap,_e=!!x.specularIntensityMap,pe=T&&!!x.transmissionMap,ke=T&&!!x.thicknessMap,st=!!x.gradientMap,P=!!x.alphaMap,ce=x.alphaTest>0,J=!!x.alphaHash,re=!!x.extensions,ae=!!F.attributes.uv1,je=!!F.attributes.uv2,ft=!!F.attributes.uv3,dt=Kr;return x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(dt=r.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:O,fragmentShader:oe,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Me,instancingColor:Me&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ft,map:Be,matcap:At,envMap:Ie,envMapMode:Ie&&L.mapping,envMapCubeUVHeight:k,aoMap:G,lightMap:De,bumpMap:de,normalMap:Pe,displacementMap:f&&Ce,emissiveMap:Y,normalMapObjectSpace:Pe&&x.normalMapType===RD,normalMapTangentSpace:Pe&&x.normalMapType===tT,metalnessMap:Ne,roughnessMap:Fe,anisotropy:rt,anisotropyMap:W,clearcoat:Je,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:ie,iridescence:Tt,iridescenceMap:we,iridescenceThicknessMap:se,sheen:C,sheenColorMap:$,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:Re,specularIntensityMap:_e,transmission:T,transmissionMap:pe,thicknessMap:ke,gradientMap:st,opaque:x.transparent===!1&&x.blending===Yo,alphaMap:P,alphaTest:ce,alphaHash:J,combine:x.combine,mapUv:Be&&_(x.map.channel),aoMapUv:G&&_(x.aoMap.channel),lightMapUv:De&&_(x.lightMap.channel),bumpMapUv:de&&_(x.bumpMap.channel),normalMapUv:Pe&&_(x.normalMap.channel),displacementMapUv:Ce&&_(x.displacementMap.channel),emissiveMapUv:Y&&_(x.emissiveMap.channel),metalnessMapUv:Ne&&_(x.metalnessMap.channel),roughnessMapUv:Fe&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(x.sheenRoughnessMap.channel),specularMapUv:Ee&&_(x.specularMap.channel),specularColorMapUv:Re&&_(x.specularColorMap.channel),specularIntensityMapUv:_e&&_(x.specularIntensityMap.channel),transmissionMapUv:pe&&_(x.transmissionMap.channel),thicknessMapUv:ke&&_(x.thicknessMap.channel),alphaMapUv:P&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pe||rt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:je,vertexUv3s:ft,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Be||P),fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&x.map.colorSpace===Xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:re&&x.extensions.derivatives===!0,extensionFragDepth:re&&x.extensions.fragDepth===!0,extensionDrawBuffers:re&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let X in x.defines)b.push(X),b.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){let b=g[x.type],X;if(b){let q=ji[b];X=vN.clone(q.uniforms)}else X=x.uniforms;return X}function M(x,b){let X;for(let q=0,z=l.length;q<z;q++){let B=l[q];if(B.cacheKey===b){X=B,++X.usedTimes;break}}return X===void 0&&(X=new bB(r,b,x,s),l.push(X)),X}function A(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:I}}function EB(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function AB(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sw(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||AB),n.length>1&&n.sort(f||xw),i.length>1&&i.sort(f||xw)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function RB(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Sw,r.set(n,[o])):i>=s.length?(o=new Sw,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function CB(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function PB(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var IB=0;function LB(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OB(r,e){let t=new CB,n=PB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new D);let s=new D,o=new Ye,a=new Ye;function c(u,h){let f=0,d=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,S=0,M=0,A=0,w=0,I=0;u.sort(LB);let x=h===!0?Math.PI:1;for(let X=0,q=u.length;X<q;X++){let z=u[X],B=z.color,F=z.intensity,U=z.distance,L=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=B.r*F*x,d+=B.g*F*x,g+=B.b*F*x;else if(z.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(z.sh.coefficients[k],F);else if(z.isDirectionalLight){let k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*x),z.castShadow){let j=z.shadow,R=n.get(z);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=L,i.directionalShadowMatrix[_]=z.shadow.matrix,S++}i.directional[_]=k,_++}else if(z.isSpotLight){let k=t.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(B).multiplyScalar(F*x),k.distance=U,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,i.spot[p]=k;let j=z.shadow;if(z.map&&(i.spotLightMap[w]=z.map,w++,j.updateMatrices(z),z.castShadow&&I++),i.spotLightMatrix[p]=j.matrix,z.castShadow){let R=n.get(z);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=L,A++}p++}else if(z.isRectAreaLight){let k=t.get(z);k.color.copy(B).multiplyScalar(F),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=k,y++}else if(z.isPointLight){let k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*x),k.distance=z.distance,k.decay=z.decay,z.castShadow){let j=z.shadow,R=n.get(z);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,R.shadowCameraNear=j.camera.near,R.shadowCameraFar=j.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=L,i.pointShadowMatrix[m]=z.shadow.matrix,M++}i.point[m]=k,m++}else if(z.isHemisphereLight){let k=t.get(z);k.skyColor.copy(z.color).multiplyScalar(F*x),k.groundColor.copy(z.groundColor).multiplyScalar(F*x),i.hemi[v]=k,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==A||b.numSpotMaps!==w)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=A,b.numSpotMaps=w,i.version=IB++)}function l(u,h){let f=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let S=u[y];if(S.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Mw(r,e){let t=new OB(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function DB(r,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),c;return a===void 0?(c=new Mw(r,e),t.set(s,[c])):o>=a.length?(c=new Mw(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Em=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ED,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Am=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},NB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FB(r,e,t){let n=new bc,i=new it,s=new it,o=new pt,a=new Em({depthPacking:AD}),c=new Am,l={},u=t.maxTextureSize,h={[Ji]:Wn,[Wn]:Ji,[Nn]:Nn},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:NB,fragmentShader:UB}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new yn;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ln(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vw;let p=this.type;this.render=function(M,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let I=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Zr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let q=p!==xr&&this.type===xr,z=p===xr&&this.type!==xr;for(let B=0,F=M.length;B<F;B++){let U=M[B],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let k=L.getFrameExtents();if(i.multiply(k),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null||q===!0||z===!0){let R=this.type!==xr?{minFilter:jt,magFilter:jt}:{};L.map!==null&&L.map.dispose(),L.map=new wr(i.x,i.y,R),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();let j=L.getViewportCount();for(let R=0;R<j;R++){let N=L.getViewport(R);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),X.viewport(o),L.updateMatrices(U,R),n=L.getFrustum(),S(A,w,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===xr&&y(L,w),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(I,x,b)};function y(M,A){let w=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(A,null,w,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(A,null,w,d,_,null)}function v(M,A,w,I){let x=null,b=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=x.uuid,q=A.uuid,z=l[X];z===void 0&&(z={},l[X]=z);let B=z[q];B===void 0&&(B=x.clone(),z[q]=B),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,I===xr?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let X=r.properties.get(x);X.light=w}return x}function S(M,A,w,I,x){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===xr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let q=e.update(M),z=M.material;if(Array.isArray(z)){let B=q.groups;for(let F=0,U=B.length;F<U;F++){let L=B[F],k=z[L.materialIndex];if(k&&k.visible){let j=v(M,k,I,x);r.renderBufferDirect(w,null,q,j,M,L)}}}else if(z.visible){let B=v(M,z,I,x);r.renderBufferDirect(w,null,q,B,M,null)}}let X=M.children;for(let q=0,z=X.length;q<z;q++)S(X[q],A,w,I,x)}}function BB(r,e,t){let n=t.isWebGL2;function i(){let P=!1,ce=new pt,J=null,re=new pt(0,0,0,0);return{setMask:function(ae){J!==ae&&!P&&(r.colorMask(ae,ae,ae,ae),J=ae)},setLocked:function(ae){P=ae},setClear:function(ae,je,ft,dt,Oe){Oe===!0&&(ae*=dt,je*=dt,ft*=dt),ce.set(ae,je,ft,dt),re.equals(ce)===!1&&(r.clearColor(ae,je,ft,dt),re.copy(ce))},reset:function(){P=!1,J=null,re.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,J=null,re=null;return{setTest:function(ae){ae?Se(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(ae){ce!==ae&&!P&&(r.depthMask(ae),ce=ae)},setFunc:function(ae){if(J!==ae){switch(ae){case nD:r.depthFunc(r.NEVER);break;case iD:r.depthFunc(r.ALWAYS);break;case rD:r.depthFunc(r.LESS);break;case um:r.depthFunc(r.LEQUAL);break;case sD:r.depthFunc(r.EQUAL);break;case oD:r.depthFunc(r.GEQUAL);break;case aD:r.depthFunc(r.GREATER);break;case cD:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ae}},setLocked:function(ae){P=ae},setClear:function(ae){re!==ae&&(r.clearDepth(ae),re=ae)},reset:function(){P=!1,ce=null,J=null,re=null}}}function o(){let P=!1,ce=null,J=null,re=null,ae=null,je=null,ft=null,dt=null,Oe=null;return{setTest:function(fe){P||(fe?Se(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(fe){ce!==fe&&!P&&(r.stencilMask(fe),ce=fe)},setFunc:function(fe,Ve,$e){(J!==fe||re!==Ve||ae!==$e)&&(r.stencilFunc(fe,Ve,$e),J=fe,re=Ve,ae=$e)},setOp:function(fe,Ve,$e){(je!==fe||ft!==Ve||dt!==$e)&&(r.stencilOp(fe,Ve,$e),je=fe,ft=Ve,dt=$e)},setLocked:function(fe){P=fe},setClear:function(fe){Oe!==fe&&(r.clearStencil(fe),Oe=fe)},reset:function(){P=!1,ce=null,J=null,re=null,ae=null,je=null,ft=null,dt=null,Oe=null}}}let a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,A=null,w=null,I=null,x=!1,b=null,X=null,q=null,z=null,B=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,L=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=L>=1):k.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=L>=2);let j=null,R={},N=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),O=new pt().fromArray(N),oe=new pt().fromArray(K);function le(P,ce,J,re){let ae=new Uint8Array(4),je=r.createTexture();r.bindTexture(P,je),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<J;ft++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ce,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ce+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return je}let xe={};xe[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(r.DEPTH_TEST),c.setFunc(um),Ce(!1),Y(ob),Se(r.CULL_FACE),de(Zr);function Se(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function Me(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Be(P,ce){return d[P]!==ce?(r.bindFramebuffer(P,ce),d[P]=ce,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function At(P,ce){let J=_,re=!1;if(P)if(J=g.get(ce),J===void 0&&(J=[],g.set(ce,J)),P.isWebGLMultipleRenderTargets){let ae=P.texture;if(J.length!==ae.length||J[0]!==r.COLOR_ATTACHMENT0){for(let je=0,ft=ae.length;je<ft;je++)J[je]=r.COLOR_ATTACHMENT0+je;J.length=ae.length,re=!0}}else J[0]!==r.COLOR_ATTACHMENT0&&(J[0]=r.COLOR_ATTACHMENT0,re=!0);else J[0]!==r.BACK&&(J[0]=r.BACK,re=!0);re&&(t.isWebGL2?r.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ie(P){return m!==P?(r.useProgram(P),m=P,!0):!1}let G={[qo]:r.FUNC_ADD,[qO]:r.FUNC_SUBTRACT,[XO]:r.FUNC_REVERSE_SUBTRACT};if(n)G[ub]=r.MIN,G[hb]=r.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(G[ub]=P.MIN_EXT,G[hb]=P.MAX_EXT)}let De={[YO]:r.ZERO,[jO]:r.ONE,[ZO]:r.SRC_COLOR,[Gw]:r.SRC_ALPHA,[tD]:r.SRC_ALPHA_SATURATE,[QO]:r.DST_COLOR,[JO]:r.DST_ALPHA,[KO]:r.ONE_MINUS_SRC_COLOR,[Ww]:r.ONE_MINUS_SRC_ALPHA,[eD]:r.ONE_MINUS_DST_COLOR,[$O]:r.ONE_MINUS_DST_ALPHA};function de(P,ce,J,re,ae,je,ft,dt){if(P===Zr){p===!0&&(Me(r.BLEND),p=!1);return}if(p===!1&&(Se(r.BLEND),p=!0),P!==WO){if(P!==y||dt!==x){if((v!==qo||A!==qo)&&(r.blendEquation(r.FUNC_ADD),v=qo,A=qo),dt)switch(P){case Yo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ab:r.blendFunc(r.ONE,r.ONE);break;case cb:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lb:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ab:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case cb:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lb:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,w=null,I=null,y=P,x=dt}return}ae=ae||ce,je=je||J,ft=ft||re,(ce!==v||ae!==A)&&(r.blendEquationSeparate(G[ce],G[ae]),v=ce,A=ae),(J!==S||re!==M||je!==w||ft!==I)&&(r.blendFuncSeparate(De[J],De[re],De[je],De[ft]),S=J,M=re,w=je,I=ft),y=P,x=!1}function Pe(P,ce){P.side===Nn?Me(r.CULL_FACE):Se(r.CULL_FACE);let J=P.side===Wn;ce&&(J=!J),Ce(J),P.blending===Yo&&P.transparent===!1?de(Zr):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let re=P.stencilWrite;l.setTest(re),re&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function Y(P){P!==HO?(Se(r.CULL_FACE),P!==X&&(P===ob?r.cullFace(r.BACK):P===VO?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),X=P}function Ne(P){P!==q&&(U&&r.lineWidth(P),q=P)}function Fe(P,ce,J){P?(Se(r.POLYGON_OFFSET_FILL),(z!==ce||B!==J)&&(r.polygonOffset(ce,J),z=ce,B=J)):Me(r.POLYGON_OFFSET_FILL)}function rt(P){P?Se(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function Je(P){P===void 0&&(P=r.TEXTURE0+F-1),j!==P&&(r.activeTexture(P),j=P)}function Tt(P,ce,J){J===void 0&&(j===null?J=r.TEXTURE0+F-1:J=j);let re=R[J];re===void 0&&(re={type:void 0,texture:void 0},R[J]=re),(re.type!==P||re.texture!==ce)&&(j!==J&&(r.activeTexture(J),j=J),r.bindTexture(P,ce||xe[P]),re.type=P,re.texture=ce)}function C(){let P=R[j];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){O.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),O.copy(P))}function _e(P){oe.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function pe(P,ce){let J=h.get(ce);J===void 0&&(J=new WeakMap,h.set(ce,J));let re=J.get(P);re===void 0&&(re=r.getUniformBlockIndex(ce,P.name),J.set(P,re))}function ke(P,ce){let re=h.get(ce).get(P);u.get(ce)!==re&&(r.uniformBlockBinding(ce,re,P.__bindingPointIndex),u.set(ce,re))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},j=null,R={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,A=null,w=null,I=null,x=!1,b=null,X=null,q=null,z=null,B=null,O.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Se,disable:Me,bindFramebuffer:Be,drawBuffers:At,useProgram:Ie,setBlending:de,setMaterial:Pe,setFlipSided:Ce,setCullFace:Y,setLineWidth:Ne,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:Je,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:ve,texImage3D:Ee,updateUBOMapping:pe,uniformBlockBinding:ke,texStorage2D:se,texStorage3D:$,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:ie,compressedTexSubImage3D:we,scissor:Re,viewport:_e,reset:st}}function kB(r,e,t,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,_,m=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,T){return p?new OffscreenCanvas(C,T):Mc("canvas")}function v(C,T,W,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||T===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let ie=T?ih:Math.floor,we=ie(ne*C.width),se=ie(ne*C.height);_===void 0&&(_=y(we,se));let $=W?y(we,se):_;return $.width=we,$.height=se,$.getContext("2d").drawImage(C,0,0,we,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+se+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return mm(C.width)&&mm(C.height)}function M(C){return a?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==jt&&C.minFilter!==Dn}function A(C,T){return C.generateMipmaps&&T&&C.minFilter!==jt&&C.minFilter!==Dn}function w(C){r.generateMipmap(C)}function I(C,T,W,te,ne=!1){if(a===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=T;return T===r.RED&&(W===r.FLOAT&&(ie=r.R32F),W===r.HALF_FLOAT&&(ie=r.R16F),W===r.UNSIGNED_BYTE&&(ie=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ie=r.R8UI),W===r.UNSIGNED_SHORT&&(ie=r.R16UI),W===r.UNSIGNED_INT&&(ie=r.R32UI),W===r.BYTE&&(ie=r.R8I),W===r.SHORT&&(ie=r.R16I),W===r.INT&&(ie=r.R32I)),T===r.RG&&(W===r.FLOAT&&(ie=r.RG32F),W===r.HALF_FLOAT&&(ie=r.RG16F),W===r.UNSIGNED_BYTE&&(ie=r.RG8)),T===r.RGBA&&(W===r.FLOAT&&(ie=r.RGBA32F),W===r.HALF_FLOAT&&(ie=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ie=te===Xe&&ne===!1?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)),(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(C,T,W){return A(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===jt||C===th||C===mc?r.NEAREST:r.LINEAR}function X(C){let T=C.target;T.removeEventListener("dispose",X),z(T),T.isVideoTexture&&g.delete(T)}function q(C){let T=C.target;T.removeEventListener("dispose",q),F(T)}function z(C){let T=n.get(C);if(T.__webglInit===void 0)return;let W=C.source,te=m.get(W);if(te){let ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(C),Object.keys(te).length===0&&m.delete(W)}n.remove(C)}function B(C){let T=n.get(C);r.deleteTexture(T.__webglTexture);let W=C.source,te=m.get(W);delete te[T.__cacheKey],o.memory.textures--}function F(C){let T=C.texture,W=n.get(C),te=n.get(T);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(W.__webglFramebuffer[ne]))for(let ie=0;ie<W.__webglFramebuffer[ne].length;ie++)r.deleteFramebuffer(W.__webglFramebuffer[ne][ie]);else r.deleteFramebuffer(W.__webglFramebuffer[ne]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[ne])}else{if(Array.isArray(W.__webglFramebuffer))for(let ne=0;ne<W.__webglFramebuffer.length;ne++)r.deleteFramebuffer(W.__webglFramebuffer[ne]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ne=0;ne<W.__webglColorRenderbuffer.length;ne++)W.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[ne]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,ie=T.length;ne<ie;ne++){let we=n.get(T[ne]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(C)}let U=0;function L(){U=0}function k(){let C=U;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),U+=1,C}function j(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function R(C,T){let W=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,C,T);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function N(C,T){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Be(W,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function K(C,T){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Be(W,C,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function O(C,T){let W=n.get(C);if(C.version>0&&W.__version!==C.version){At(W,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}let oe={[Xs]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[xc]:r.MIRRORED_REPEAT},le={[jt]:r.NEAREST,[th]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Xm]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},xe={[PD]:r.NEVER,[FD]:r.ALWAYS,[ID]:r.LESS,[OD]:r.LEQUAL,[LD]:r.EQUAL,[UD]:r.GEQUAL,[DD]:r.GREATER,[ND]:r.NOTEQUAL};function Se(C,T,W){if(W?(r.texParameteri(C,r.TEXTURE_WRAP_S,oe[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,oe[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,oe[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,le[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,le[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==ni||T.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==jt&&T.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===jt||T.minFilter!==mc&&T.minFilter!==$r||T.type===Mr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Sc&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Me(C,T){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",X));let te=T.source,ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));let ie=j(T);if(ie!==C.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[ie].usedTimes++;let we=ne[C.__cacheKey];we!==void 0&&(ne[C.__cacheKey].usedTimes--,we.usedTimes===0&&B(T)),C.__cacheKey=ie,C.__webglTexture=ne[ie].texture}return W}function Be(C,T,W){let te=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=r.TEXTURE_3D);let ne=Me(C,T),ie=T.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+W);let we=n.get(ie);if(ie.version!==we.__version||ne===!0){t.activeTexture(r.TEXTURE0+W),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let se=M(T)&&S(T.image)===!1,$=v(T.image,se,!1,u);$=Tt(T,$);let ve=S($)||a,Ee=s.convert(T.format,T.colorSpace),Re=s.convert(T.type),_e=I(T.internalFormat,Ee,Re,T.colorSpace,T.isVideoTexture);Se(te,T,ve);let pe,ke=T.mipmaps,st=a&&T.isVideoTexture!==!0,P=we.__version===void 0||ne===!0,ce=x(T,$,ve);if(T.isDepthTexture)_e=r.DEPTH_COMPONENT,a?T.type===Mr?_e=r.DEPTH_COMPONENT32F:T.type===jr?_e=r.DEPTH_COMPONENT24:T.type===Vs?_e=r.DEPTH24_STENCIL8:_e=r.DEPTH_COMPONENT16:T.type===Mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Gs&&_e===r.DEPTH_COMPONENT&&T.type!==Ym&&T.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=jr,Re=s.convert(T.type)),T.format===$o&&_e===r.DEPTH_COMPONENT&&(_e=r.DEPTH_STENCIL,T.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Vs,Re=s.convert(T.type))),P&&(st?t.texStorage2D(r.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,_e,$.width,$.height,0,Ee,Re,null));else if(T.isDataTexture)if(ke.length>0&&ve){st&&P&&t.texStorage2D(r.TEXTURE_2D,ce,_e,ke[0].width,ke[0].height);for(let J=0,re=ke.length;J<re;J++)pe=ke[J],st?t.texSubImage2D(r.TEXTURE_2D,J,0,0,pe.width,pe.height,Ee,Re,pe.data):t.texImage2D(r.TEXTURE_2D,J,_e,pe.width,pe.height,0,Ee,Re,pe.data);T.generateMipmaps=!1}else st?(P&&t.texStorage2D(r.TEXTURE_2D,ce,_e,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,Ee,Re,$.data)):t.texImage2D(r.TEXTURE_2D,0,_e,$.width,$.height,0,Ee,Re,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,_e,ke[0].width,ke[0].height,$.depth);for(let J=0,re=ke.length;J<re;J++)pe=ke[J],T.format!==xi?Ee!==null?st?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,$.depth,Ee,pe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,_e,pe.width,pe.height,$.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,$.depth,Ee,Re,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,_e,pe.width,pe.height,$.depth,0,Ee,Re,pe.data)}else{st&&P&&t.texStorage2D(r.TEXTURE_2D,ce,_e,ke[0].width,ke[0].height);for(let J=0,re=ke.length;J<re;J++)pe=ke[J],T.format!==xi?Ee!==null?st?t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,J,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(r.TEXTURE_2D,J,0,0,pe.width,pe.height,Ee,Re,pe.data):t.texImage2D(r.TEXTURE_2D,J,_e,pe.width,pe.height,0,Ee,Re,pe.data)}else if(T.isDataArrayTexture)st?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,_e,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ee,Re,$.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,Ee,Re,$.data);else if(T.isData3DTexture)st?(P&&t.texStorage3D(r.TEXTURE_3D,ce,_e,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ee,Re,$.data)):t.texImage3D(r.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,Ee,Re,$.data);else if(T.isFramebufferTexture){if(P)if(st)t.texStorage2D(r.TEXTURE_2D,ce,_e,$.width,$.height);else{let J=$.width,re=$.height;for(let ae=0;ae<ce;ae++)t.texImage2D(r.TEXTURE_2D,ae,_e,J,re,0,Ee,Re,null),J>>=1,re>>=1}}else if(ke.length>0&&ve){st&&P&&t.texStorage2D(r.TEXTURE_2D,ce,_e,ke[0].width,ke[0].height);for(let J=0,re=ke.length;J<re;J++)pe=ke[J],st?t.texSubImage2D(r.TEXTURE_2D,J,0,0,Ee,Re,pe):t.texImage2D(r.TEXTURE_2D,J,_e,Ee,Re,pe);T.generateMipmaps=!1}else st?(P&&t.texStorage2D(r.TEXTURE_2D,ce,_e,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Re,$)):t.texImage2D(r.TEXTURE_2D,0,_e,Ee,Re,$);A(T,ve)&&w(te),we.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function At(C,T,W){if(T.image.length!==6)return;let te=Me(C,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);let ie=n.get(ne);if(ne.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+W),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,$=[];for(let J=0;J<6;J++)!we&&!se?$[J]=v(T.image[J],!1,!0,l):$[J]=se?T.image[J].image:T.image[J],$[J]=Tt(T,$[J]);let ve=$[0],Ee=S(ve)||a,Re=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),pe=I(T.internalFormat,Re,_e,T.colorSpace),ke=a&&T.isVideoTexture!==!0,st=ie.__version===void 0||te===!0,P=x(T,ve,Ee);Se(r.TEXTURE_CUBE_MAP,T,Ee);let ce;if(we){ke&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,pe,ve.width,ve.height);for(let J=0;J<6;J++){ce=$[J].mipmaps;for(let re=0;re<ce.length;re++){let ae=ce[re];T.format!==xi?Re!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,ae.width,ae.height,Re,_e,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,pe,ae.width,ae.height,0,Re,_e,ae.data)}}}else{ce=T.mipmaps,ke&&st&&(ce.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,pe,$[0].width,$[0].height));for(let J=0;J<6;J++)if(se){ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$[J].width,$[J].height,Re,_e,$[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,$[J].width,$[J].height,0,Re,_e,$[J].data);for(let re=0;re<ce.length;re++){let je=ce[re].image[J].image;ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,je.width,je.height,Re,_e,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,pe,je.width,je.height,0,Re,_e,je.data)}}else{ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,_e,$[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,Re,_e,$[J]);for(let re=0;re<ce.length;re++){let ae=ce[re];ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,Re,_e,ae.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,pe,Re,_e,ae.image[J])}}}A(T,Ee)&&w(r.TEXTURE_CUBE_MAP),ie.__version=ne.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ie(C,T,W,te,ne,ie){let we=s.convert(W.format,W.colorSpace),se=s.convert(W.type),$=I(W.internalFormat,we,se,W.colorSpace);if(!n.get(T).__hasExternalTextures){let Ee=Math.max(1,T.width>>ie),Re=Math.max(1,T.height>>ie);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,$,Ee,Re,T.depth,0,we,se,null):t.texImage2D(ne,ie,$,Ee,Re,0,we,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ne,n.get(W).__webglTexture,0,Fe(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ne,n.get(W).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function G(C,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=r.DEPTH_COMPONENT16;if(W||rt(T)){let ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Mr?te=r.DEPTH_COMPONENT32F:ne.type===jr&&(te=r.DEPTH_COMPONENT24));let ie=Fe(T);rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,te,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,te,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){let te=Fe(T);W&&rt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){let ie=te[ne],we=s.convert(ie.format,ie.colorSpace),se=s.convert(ie.type),$=I(ie.internalFormat,we,se,ie.colorSpace),ve=Fe(T);W&&rt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,$,T.width,T.height):rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);let te=n.get(T.depthTexture).__webglTexture,ne=Fe(T);if(T.depthTexture.format===Gs)rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===$o)rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function de(C){let T=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,C)}else if(W){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=r.createRenderbuffer(),G(T.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),G(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,T,W){let te=n.get(C);T!==void 0&&Ie(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&de(C)}function Ce(C){let T=C.texture,W=n.get(C),te=n.get(T);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=T.version,o.memory.textures++);let ne=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,we=S(C)||a;if(ne){W.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[se]=[];for(let $=0;$<T.mipmaps.length;$++)W.__webglFramebuffer[se][$]=r.createFramebuffer()}else W.__webglFramebuffer[se]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)W.__webglFramebuffer[se]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){let se=C.texture;for(let $=0,ve=se.length;$<ve;$++){let Ee=n.get(se[$]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&rt(C)===!1){let se=ie?T:[T];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<se.length;$++){let ve=se[$];W.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[$]);let Ee=s.convert(ve.format,ve.colorSpace),Re=s.convert(ve.type),_e=I(ve.internalFormat,Ee,Re,ve.colorSpace,C.isXRRenderTarget===!0),pe=Fe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,_e,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,W.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),G(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Se(r.TEXTURE_CUBE_MAP,T,we);for(let se=0;se<6;se++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Ie(W.__webglFramebuffer[se][$],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,$);else Ie(W.__webglFramebuffer[se],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(T,we)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let se=C.texture;for(let $=0,ve=se.length;$<ve;$++){let Ee=se[$],Re=n.get(Ee);t.bindTexture(r.TEXTURE_2D,Re.__webglTexture),Se(r.TEXTURE_2D,Ee,we),Ie(W.__webglFramebuffer,C,Ee,r.COLOR_ATTACHMENT0+$,r.TEXTURE_2D,0),A(Ee,we)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,te.__webglTexture),Se(se,T,we),a&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Ie(W.__webglFramebuffer[$],C,T,r.COLOR_ATTACHMENT0,se,$);else Ie(W.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,se,0);A(T,we)&&w(se),t.unbindTexture()}C.depthBuffer&&de(C)}function Y(C){let T=S(C)||a,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=W.length;te<ne;te++){let ie=W[te];if(A(ie,T)){let we=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=n.get(ie).__webglTexture;t.bindTexture(we,se),w(we),t.unbindTexture()}}}function Ne(C){if(a&&C.samples>0&&rt(C)===!1){let T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,te=C.height,ne=r.COLOR_BUFFER_BIT,ie=[],we=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let ve=0;ve<T.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){ie.push(r.COLOR_ATTACHMENT0+ve),C.depthBuffer&&ie.push(we);let Ee=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ee===!1&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),$&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[ve]),Ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),$){let Re=n.get(T[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,W,te,0,0,W,te,ne,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<T.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,se.__webglColorRenderbuffer[ve]);let Ee=n.get(T[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Fe(C){return Math.min(h,C.samples)}function rt(C){let T=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(C){let T=o.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function Tt(C,T){let W=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===pm||W!==Ft&&W!==qs&&(W===Xe||W===Ah?a===!1?e.has("EXT_sRGB")===!0&&te===xi?(C.format=pm,C.minFilter=Dn,C.generateMipmaps=!1):T=rh.sRGBToLinear(T):(te!==xi||ne!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=Pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=rt}var zB=0,Yt=1;function HB(r,e,t){let n=t.isWebGL2;function i(s,o=qs){let a,c=o===Xe||o===Ah?Yt:zB;if(s===Jr)return r.UNSIGNED_BYTE;if(s===jw)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zw)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gD)return r.BYTE;if(s===_D)return r.SHORT;if(s===Ym)return r.UNSIGNED_SHORT;if(s===Yw)return r.INT;if(s===jr)return r.UNSIGNED_INT;if(s===Mr)return r.FLOAT;if(s===Sc)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vD)return r.ALPHA;if(s===xi)return r.RGBA;if(s===yD)return r.LUMINANCE;if(s===xD)return r.LUMINANCE_ALPHA;if(s===Gs)return r.DEPTH_COMPONENT;if(s===$o)return r.DEPTH_STENCIL;if(s===pm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===SD)return r.RED;if(s===Kw)return r.RED_INTEGER;if(s===MD)return r.RG;if(s===Jw)return r.RG_INTEGER;if(s===$w)return r.RGBA_INTEGER;if(s===Lp||s===Op||s===Dp||s===Np)if(c===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lp)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Op)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dp)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Np)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lp)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Op)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dp)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Np)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fb||s===db||s===pb||s===mb)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fb)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===db)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pb)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mb)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bD)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gb||s===_b)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gb)return c===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_b)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vb||s===yb||s===xb||s===Sb||s===Mb||s===bb||s===wb||s===Tb||s===Eb||s===Ab||s===Rb||s===Cb||s===Pb||s===Ib)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ab)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ib)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Up||s===Lb||s===Ob)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Up)return c===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lb)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ob)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wD||s===Db||s===Nb||s===Ub)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Up)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Db)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nb)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ub)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vs?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Rm=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ki=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},VB={type:"move"},yc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VB)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cm=class extends Gt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Gs,u!==Gs&&u!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gs&&(n=jr),n===void 0&&u===$o&&(n=Vs),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pm=class extends Qr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,y=[],v=[],S=new cn;S.layers.enable(1),S.viewport=new pt;let M=new cn;M.layers.enable(2),M.viewport=new pt;let A=[S,M],w=new Rm;w.layers.enable(1),w.layers.enable(2);let I=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let K=y[N];return K===void 0&&(K=new yc,y[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=y[N];return K===void 0&&(K=new yc,y[N]=K),K.getGripSpace()},this.getHand=function(N){let K=y[N];return K===void 0&&(K=new yc,y[N]=K),K.getHandSpace()};function b(N){let K=v.indexOf(N.inputSource);if(K===-1)return;let O=y[K];O!==void 0&&(O.update(N.inputSource,N.frame,l||o),O.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let N=0;N<y.length;N++){let K=v[N];K!==null&&(v[N]=null,y[N].disconnect(K))}I=null,x=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),p=new wr(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Jr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,O=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?$o:Gs,O=_.stencil?Vs:jr);let le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(le),i.updateRenderState({layers:[f]}),p=new wr(f.textureWidth,f.textureHeight,{format:xi,type:Jr,depthTexture:new Cm(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let xe=e.properties.get(p);xe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(N){for(let K=0;K<N.removed.length;K++){let O=N.removed[K],oe=v.indexOf(O);oe>=0&&(v[oe]=null,y[oe].disconnect(O))}for(let K=0;K<N.added.length;K++){let O=N.added[K],oe=v.indexOf(O);if(oe===-1){for(let xe=0;xe<y.length;xe++)if(xe>=v.length){v.push(O),oe=xe;break}else if(v[xe]===null){v[xe]=O,oe=xe;break}if(oe===-1)break}let le=y[oe];le&&le.connect(O)}}let z=new D,B=new D;function F(N,K,O){z.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(O.matrixWorld);let oe=z.distanceTo(B),le=K.projectionMatrix.elements,xe=O.projectionMatrix.elements,Se=le[14]/(le[10]-1),Me=le[14]/(le[10]+1),Be=(le[9]+1)/le[5],At=(le[9]-1)/le[5],Ie=(le[8]-1)/le[0],G=(xe[8]+1)/xe[0],De=Se*Ie,de=Se*G,Pe=oe/(-Ie+G),Ce=Pe*-Ie;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ce),N.translateZ(Pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let Y=Se+Pe,Ne=Me+Pe,Fe=De-Ce,rt=de+(oe-Ce),Je=Be*Me/Ne*Y,Tt=At*Me/Ne*Y;N.projectionMatrix.makePerspective(Fe,rt,Je,Tt,Y,Ne),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function U(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;w.near=M.near=S.near=N.near,w.far=M.far=S.far=N.far,(I!==w.near||x!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,x=w.far);let K=N.parent,O=w.cameras;U(w,K);for(let oe=0;oe<O.length;oe++)U(O[oe],K);O.length===2?F(w,S,M):w.projectionMatrix.copy(S.projectionMatrix),L(N,w,K)};function L(N,K,O){O===null?N.matrix.copy(K.matrixWorld):(N.matrix.copy(O.matrixWorld),N.matrix.invert(),N.matrix.multiply(K.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(K.projectionMatrix),N.projectionMatrixInverse.copy(K.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ea*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(N){c=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let k=null;function j(N,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let O=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let oe=!1;O.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let le=0;le<O.length;le++){let xe=O[le],Se=null;if(d!==null)Se=d.getViewport(xe);else{let Be=h.getViewSubImage(f,xe);Se=Be.viewport,le===0&&(e.setRenderTargetTextures(p,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let Me=A[le];Me===void 0&&(Me=new cn,Me.layers.enable(le),Me.viewport=new pt,A[le]=Me),Me.matrix.fromArray(xe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(xe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),le===0&&(w.matrix.copy(Me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),oe===!0&&w.cameras.push(Me)}}for(let O=0;O<y.length;O++){let oe=v[O],le=y[O];oe!==null&&le!==void 0&&le.update(oe,K,l||o)}k&&k(N,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let R=new aT;R.setAnimationLoop(j),this.setAnimationLoop=function(N){k=N},this.dispose=function(){}}};function GB(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oT(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WB(r,e,t,n){let i={},s={},o=[],a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let S=v.program;n.uniformBlockBinding(y,S)}function l(y,v){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));let M=v.program;n.updateUBOMapping(y,M);let A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){let v=h();y.__bindingPointIndex=v;let S=r.createBuffer(),M=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],S=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){let I=S[A];if(d(I,A,M)===!0){let x=I.__offset,b=Array.isArray(I.value)?I.value:[I.value],X=0;for(let q=0;q<b.length;q++){let z=b[q],B=_(z);typeof z=="number"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,x+X,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=z.elements[0],I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=z.elements[0],I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=z.elements[0]):(z.toArray(I.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,S){let M=y.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{let A=Array.isArray(M)?M:[M],w=[];for(let I=0;I<A.length;I++)w.push(A[I].clone());S[v]=w}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{let A=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(M)?M:[M];for(let I=0;I<A.length;I++){let x=A[I];if(x.equals(w[I])===!1)return x.copy(w[I]),!0}}return!1}function g(y){let v=y.uniforms,S=0,M=16,A=0;for(let w=0,I=v.length;w<I;w++){let x=v[w],b={boundary:0,storage:0},X=Array.isArray(x.value)?x.value:[x.value];for(let q=0,z=X.length;q<z;q++){let B=X[q],F=_(B);b.boundary+=F.boundary,b.storage+=F.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){A=S%M;let q=M-A;A!==0&&q-b.boundary<0&&(S+=M-A,x.__offset=S)}S+=b.storage}return A=S%M,A>0&&(S+=M-A),y.__size=S,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}var Tc=class{constructor(e={}){let{canvas:t=JD(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=Kr,this.toneMappingExposure=1;let v=this,S=!1,M=0,A=0,w=null,I=-1,x=null,b=new pt,X=new pt,q=null,z=new ze(0),B=0,F=t.width,U=t.height,L=1,k=null,j=null,R=new pt(0,0,F,U),N=new pt(0,0,F,U),K=!1,O=new bc,oe=!1,le=!1,xe=null,Se=new Ye,Me=new it,Be=new D,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?L:1}let G=n;function De(E,H){for(let Z=0;Z<E.length;Z++){let V=E[Z],Q=t.getContext(V,H);if(Q!==null)return Q}return null}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qm}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",re,!1),G===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),G=De(H,E),G===null)throw De(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,Pe,Ce,Y,Ne,Fe,rt,Je,Tt,C,T,W,te,ne,ie,we,se,$,ve,Ee,Re,_e,pe,ke;function st(){de=new uF(G),Pe=new rF(G,de,e),de.init(Pe),_e=new HB(G,de,Pe),Ce=new BB(G,de,Pe),Y=new dF(G),Ne=new EB,Fe=new kB(G,de,Ce,Ne,Pe,_e,Y),rt=new oF(v),Je=new lF(v),Tt=new bN(G,Pe),pe=new nF(G,de,Tt,Pe),C=new hF(G,Tt,Y,pe),T=new _F(G,C,Tt,Y),ve=new gF(G,Pe,Fe),we=new sF(Ne),W=new TB(v,rt,Je,de,Pe,pe,we),te=new GB(v,Ne),ne=new RB,ie=new DB(de,Pe),$=new tF(v,rt,Je,Ce,T,f,c),se=new FB(v,T,Pe),ke=new WB(G,Y,Pe,Ce),Ee=new iF(G,de,Y,Pe),Re=new fF(G,de,Y,Pe),Y.programs=W.programs,v.capabilities=Pe,v.extensions=de,v.properties=Ne,v.renderLists=ne,v.shadowMap=se,v.state=Ce,v.info=Y}st();let P=new Pm(v,G);this.xr=P,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(F,U,!1))},this.getSize=function(E){return E.set(F,U)},this.setSize=function(E,H,Z=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,U=H,t.width=Math.floor(E*L),t.height=Math.floor(H*L),Z===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(F*L,U*L).floor()},this.setDrawingBufferSize=function(E,H,Z){F=E,U=H,L=Z,t.width=Math.floor(E*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,H,Z,V){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,H,Z,V),Ce.viewport(b.copy(R).multiplyScalar(L).floor())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,H,Z,V){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,H,Z,V),Ce.scissor(X.copy(N).multiplyScalar(L).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){Ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(E=!0,H=!0,Z=!0){let V=0;if(E){let Q=!1;if(w!==null){let ue=w.texture.format;Q=ue===$w||ue===Jw||ue===Kw}if(Q){let ue=w.texture.type,ge=ue===Jr||ue===jr||ue===Ym||ue===Vs||ue===jw||ue===Zw,Te=$.getClearColor(),Le=$.getClearAlpha(),We=Te.r,be=Te.g,Ae=Te.b;ge?(d[0]=We,d[1]=be,d[2]=Ae,d[3]=Le,G.clearBufferuiv(G.COLOR,0,d)):(g[0]=We,g[1]=be,g[2]=Ae,g[3]=Le,G.clearBufferiv(G.COLOR,0,g))}else V|=G.COLOR_BUFFER_BIT}H&&(V|=G.DEPTH_BUFFER_BIT),Z&&(V|=G.STENCIL_BUFFER_BIT),G.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ne.dispose(),ie.dispose(),Ne.dispose(),rt.dispose(),Je.dispose(),T.dispose(),pe.dispose(),ke.dispose(),W.dispose(),P.dispose(),P.removeEventListener("sessionstart",fe),P.removeEventListener("sessionend",Ve),xe&&(xe.dispose(),xe=null),$e.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=Y.autoReset,H=se.enabled,Z=se.autoUpdate,V=se.needsUpdate,Q=se.type;st(),Y.autoReset=E,se.enabled=H,se.autoUpdate=Z,se.needsUpdate=V,se.type=Q}function re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){let H=E.target;H.removeEventListener("dispose",ae),je(H)}function je(E){ft(E),Ne.remove(E)}function ft(E){let H=Ne.get(E).programs;H!==void 0&&(H.forEach(function(Z){W.releaseProgram(Z)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,V,Q,ue){H===null&&(H=At);let ge=Q.isMesh&&Q.matrixWorld.determinant()<0,Te=nn(E,H,Z,V,Q);Ce.setMaterial(V,ge);let Le=Z.index,We=1;if(V.wireframe===!0){if(Le=C.getWireframeAttribute(Z),Le===void 0)return;We=2}let be=Z.drawRange,Ae=Z.attributes.position,lt=be.start*We,Mt=(be.start+be.count)*We;ue!==null&&(lt=Math.max(lt,ue.start*We),Mt=Math.min(Mt,(ue.start+ue.count)*We)),Le!==null?(lt=Math.max(lt,0),Mt=Math.min(Mt,Le.count)):Ae!=null&&(lt=Math.max(lt,0),Mt=Math.min(Mt,Ae.count));let xn=Mt-lt;if(xn<0||xn===1/0)return;pe.setup(Q,V,Te,Z,Le);let Sn,ht=Ee;if(Le!==null&&(Sn=Tt.get(Le),ht=Re,ht.setIndex(Sn)),Q.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Ie()),ht.setMode(G.LINES)):ht.setMode(G.TRIANGLES);else if(Q.isLine){let qe=V.linewidth;qe===void 0&&(qe=1),Ce.setLineWidth(qe*Ie()),Q.isLineSegments?ht.setMode(G.LINES):Q.isLineLoop?ht.setMode(G.LINE_LOOP):ht.setMode(G.LINE_STRIP)}else Q.isPoints?ht.setMode(G.POINTS):Q.isSprite&&ht.setMode(G.TRIANGLES);if(Q.isInstancedMesh)ht.renderInstances(lt,xn,Q.count);else if(Z.isInstancedBufferGeometry){let qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Cr=Math.min(Z.instanceCount,qe);ht.renderInstances(lt,xn,Cr)}else ht.render(lt,xn)},this.compile=function(E,H){function Z(V,Q,ue){V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=Wn,V.needsUpdate=!0,Qe(V,Q,ue),V.side=Ji,V.needsUpdate=!0,Qe(V,Q,ue),V.side=Nn):Qe(V,Q,ue)}m=ie.get(E),m.init(),y.push(m),E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights),E.traverse(function(V){let Q=V.material;if(Q)if(Array.isArray(Q))for(let ue=0;ue<Q.length;ue++){let ge=Q[ue];Z(ge,E,V)}else Z(Q,E,V)}),y.pop(),m=null};let dt=null;function Oe(E){dt&&dt(E)}function fe(){$e.stop()}function Ve(){$e.start()}let $e=new aT;$e.setAnimationLoop(Oe),typeof self!="undefined"&&$e.setContext(self),this.setAnimationLoop=function(E){dt=E,P.setAnimationLoop(E),E===null?$e.stop():$e.start()},P.addEventListener("sessionstart",fe),P.addEventListener("sessionend",Ve),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(H),H=P.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,w),m=ie.get(E,y.length),m.init(),y.push(m),Se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),O.setFromProjectionMatrix(Se),le=this.localClippingEnabled,oe=we.init(this.clippingPlanes,le),_=ne.get(E,p.length),_.init(),p.push(_),me(E,H,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(k,j),this.info.render.frame++,oe===!0&&we.beginShadows();let Z=m.state.shadowsArray;if(se.render(Z,E,H),oe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(_,E),m.setupLights(v._useLegacyLights),H.isArrayCamera){let V=H.cameras;for(let Q=0,ue=V.length;Q<ue;Q++){let ge=V[Q];nt(_,E,ge,ge.viewport)}}else nt(_,E,H);w!==null&&(Fe.updateMultisampleRenderTarget(w),Fe.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,H),pe.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function me(E,H,Z,V){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||O.intersectsSprite(E)){V&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);let ge=T.update(E),Te=E.material;Te.visible&&_.push(E,ge,Te,Z,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||O.intersectsObject(E))){let ge=T.update(E),Te=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Be.copy(ge.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){let Le=ge.groups;for(let We=0,be=Le.length;We<be;We++){let Ae=Le[We],lt=Te[Ae.materialIndex];lt&&lt.visible&&_.push(E,ge,lt,Z,Be.z,Ae)}}else Te.visible&&_.push(E,ge,Te,Z,Be.z,null)}}let ue=E.children;for(let ge=0,Te=ue.length;ge<Te;ge++)me(ue[ge],H,Z,V)}function nt(E,H,Z,V){let Q=E.opaque,ue=E.transmissive,ge=E.transparent;m.setupLightsView(Z),oe===!0&&we.setGlobalState(v.clippingPlanes,Z),ue.length>0&&Ue(Q,ue,H,Z),V&&Ce.viewport(b.copy(V)),Q.length>0&&Ge(Q,H,Z),ue.length>0&&Ge(ue,H,Z),ge.length>0&&Ge(ge,H,Z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ue(E,H,Z,V){let Q=Pe.isWebGL2;xe===null&&(xe=new wr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Sc:Jr,minFilter:$r,samples:Q?4:0})),v.getDrawingBufferSize(Me),Q?xe.setSize(Me.x,Me.y):xe.setSize(ih(Me.x),ih(Me.y));let ue=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(z),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let ge=v.toneMapping;v.toneMapping=Kr,Ge(E,Z,V),Fe.updateMultisampleRenderTarget(xe),Fe.updateRenderTargetMipmap(xe);let Te=!1;for(let Le=0,We=H.length;Le<We;Le++){let be=H[Le],Ae=be.object,lt=be.geometry,Mt=be.material,xn=be.group;if(Mt.side===Nn&&Ae.layers.test(V.layers)){let Sn=Mt.side;Mt.side=Wn,Mt.needsUpdate=!0,Nt(Ae,Z,V,lt,Mt,xn),Mt.side=Sn,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(Fe.updateMultisampleRenderTarget(xe),Fe.updateRenderTargetMipmap(xe)),v.setRenderTarget(ue),v.setClearColor(z,B),v.toneMapping=ge}function Ge(E,H,Z){let V=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,ue=E.length;Q<ue;Q++){let ge=E[Q],Te=ge.object,Le=ge.geometry,We=V===null?ge.material:V,be=ge.group;Te.layers.test(Z.layers)&&Nt(Te,H,Z,Le,We,be)}}function Nt(E,H,Z,V,Q,ue){E.onBeforeRender(v,H,Z,V,Q,ue),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(v,H,Z,V,E,ue),Q.transparent===!0&&Q.side===Nn&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,v.renderBufferDirect(Z,H,V,Q,E,ue),Q.side=Ji,Q.needsUpdate=!0,v.renderBufferDirect(Z,H,V,Q,E,ue),Q.side=Nn):v.renderBufferDirect(Z,H,V,Q,E,ue),E.onAfterRender(v,H,Z,V,Q,ue)}function Qe(E,H,Z){H.isScene!==!0&&(H=At);let V=Ne.get(E),Q=m.state.lights,ue=m.state.shadowsArray,ge=Q.state.version,Te=W.getParameters(E,Q.state,ue,H,Z),Le=W.getProgramCacheKey(Te),We=V.programs;V.environment=E.isMeshStandardMaterial?H.environment:null,V.fog=H.fog,V.envMap=(E.isMeshStandardMaterial?Je:rt).get(E.envMap||V.environment),We===void 0&&(E.addEventListener("dispose",ae),We=new Map,V.programs=We);let be=We.get(Le);if(be!==void 0){if(V.currentProgram===be&&V.lightsStateVersion===ge)return Et(E,Te),be}else Te.uniforms=W.getUniforms(E),E.onBuild(Z,Te,v),E.onBeforeCompile(Te,v),be=W.acquireProgram(Te,Le),We.set(Le,be),V.uniforms=Te.uniforms;let Ae=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=we.uniform),Et(E,Te),V.needsLights=St(E),V.lightsStateVersion=ge,V.needsLights&&(Ae.ambientLightColor.value=Q.state.ambient,Ae.lightProbe.value=Q.state.probe,Ae.directionalLights.value=Q.state.directional,Ae.directionalLightShadows.value=Q.state.directionalShadow,Ae.spotLights.value=Q.state.spot,Ae.spotLightShadows.value=Q.state.spotShadow,Ae.rectAreaLights.value=Q.state.rectArea,Ae.ltc_1.value=Q.state.rectAreaLTC1,Ae.ltc_2.value=Q.state.rectAreaLTC2,Ae.pointLights.value=Q.state.point,Ae.pointLightShadows.value=Q.state.pointShadow,Ae.hemisphereLights.value=Q.state.hemi,Ae.directionalShadowMap.value=Q.state.directionalShadowMap,Ae.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ae.spotShadowMap.value=Q.state.spotShadowMap,Ae.spotLightMatrix.value=Q.state.spotLightMatrix,Ae.spotLightMap.value=Q.state.spotLightMap,Ae.pointShadowMap.value=Q.state.pointShadowMap,Ae.pointShadowMatrix.value=Q.state.pointShadowMatrix);let lt=be.getUniforms(),Mt=Zo.seqWithValue(lt.seq,Ae);return V.currentProgram=be,V.uniformsList=Mt,be}function Et(E,H){let Z=Ne.get(E);Z.outputColorSpace=H.outputColorSpace,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function nn(E,H,Z,V,Q){H.isScene!==!0&&(H=At),Fe.resetTextureUnits();let ue=H.fog,ge=V.isMeshStandardMaterial?H.environment:null,Te=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ft,Le=(V.isMeshStandardMaterial?Je:rt).get(V.envMap||ge),We=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,be=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Mt=!!Z.morphAttributes.color,xn=Kr;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xn=v.toneMapping);let Sn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=Sn!==void 0?Sn.length:0,qe=Ne.get(V),Cr=m.state.lights;if(oe===!0&&(le===!0||E!==x)){let qn=E===x&&V.id===I;we.setState(V,E,qn)}let xt=!1;V.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Cr.state.version||qe.outputColorSpace!==Te||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||qe.envMap!==Le||V.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==be||qe.morphTargets!==Ae||qe.morphNormals!==lt||qe.morphColors!==Mt||qe.toneMapping!==xn||Pe.isWebGL2===!0&&qe.morphTargetsCount!==ht)&&(xt=!0):(xt=!0,qe.__version=V.version);let cs=qe.currentProgram;xt===!0&&(cs=Qe(V,H,Q));let Ag=!1,fa=!1,Lh=!1,Mn=cs.getUniforms(),ls=qe.uniforms;if(Ce.useProgram(cs.program)&&(Ag=!0,fa=!0,Lh=!0),V.id!==I&&(I=V.id,fa=!0),Ag||x!==E){Mn.setValue(G,"projectionMatrix",E.projectionMatrix),Mn.setValue(G,"viewMatrix",E.matrixWorldInverse);let qn=Mn.map.cameraPosition;qn!==void 0&&qn.setValue(G,Be.setFromMatrixPosition(E.matrixWorld)),Pe.logarithmicDepthBuffer&&Mn.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mn.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,fa=!0,Lh=!0)}if(Q.isSkinnedMesh){Mn.setOptional(G,Q,"bindMatrix"),Mn.setOptional(G,Q,"bindMatrixInverse");let qn=Q.skeleton;qn&&(Pe.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),Mn.setValue(G,"boneTexture",qn.boneTexture,Fe),Mn.setValue(G,"boneTextureSize",qn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Oh=Z.morphAttributes;if((Oh.position!==void 0||Oh.normal!==void 0||Oh.color!==void 0&&Pe.isWebGL2===!0)&&ve.update(Q,Z,cs),(fa||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,Mn.setValue(G,"receiveShadow",Q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ls.envMap.value=Le,ls.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),fa&&(Mn.setValue(G,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Wt(ls,Lh),ue&&V.fog===!0&&te.refreshFogUniforms(ls,ue),te.refreshMaterialUniforms(ls,V,L,U,xe),Zo.upload(G,qe.uniformsList,ls,Fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zo.upload(G,qe.uniformsList,ls,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mn.setValue(G,"center",Q.center),Mn.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Mn.setValue(G,"normalMatrix",Q.normalMatrix),Mn.setValue(G,"modelMatrix",Q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let qn=V.uniformsGroups;for(let Dh=0,yT=qn.length;Dh<yT;Dh++)if(Pe.isWebGL2){let Rg=qn[Dh];ke.update(Rg,cs),ke.bind(Rg,cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cs}function Wt(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function St(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,H,Z){Ne.get(E.texture).__webglTexture=H,Ne.get(E.depthTexture).__webglTexture=Z;let V=Ne.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Z===void 0,V.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){let Z=Ne.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Z=0){w=E,M=H,A=Z;let V=!0,Q=null,ue=!1,ge=!1;if(E){let Le=Ne.get(E);Le.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(G.FRAMEBUFFER,null),V=!1):Le.__webglFramebuffer===void 0?Fe.setupRenderTarget(E):Le.__hasExternalTextures&&Fe.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ge=!0);let be=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[H])?Q=be[H][Z]:Q=be[H],ue=!0):Pe.isWebGL2&&E.samples>0&&Fe.useMultisampledRTT(E)===!1?Q=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?Q=be[Z]:Q=be,b.copy(E.viewport),X.copy(E.scissor),q=E.scissorTest}else b.copy(R).multiplyScalar(L).floor(),X.copy(N).multiplyScalar(L).floor(),q=K;if(Ce.bindFramebuffer(G.FRAMEBUFFER,Q)&&Pe.drawBuffers&&V&&Ce.drawBuffers(E,Q),Ce.viewport(b),Ce.scissor(X),Ce.setScissorTest(q),ue){let Le=Ne.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,Z)}else if(ge){let Le=Ne.get(E.texture),We=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Le.__webglTexture,Z||0,We)}I=-1},this.readRenderTargetPixels=function(E,H,Z,V,Q,ue,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Ce.bindFramebuffer(G.FRAMEBUFFER,Te);try{let Le=E.texture,We=Le.format,be=Le.type;if(We!==xi&&_e.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=be===Sc&&(de.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&de.has("EXT_color_buffer_float"));if(be!==Jr&&_e.convert(be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Mr&&(Pe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-V&&Z>=0&&Z<=E.height-Q&&G.readPixels(H,Z,V,Q,_e.convert(We),_e.convert(be),ue)}finally{let Le=w!==null?Ne.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(E,H,Z=0){let V=Math.pow(2,-Z),Q=Math.floor(H.image.width*V),ue=Math.floor(H.image.height*V);Fe.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,E.x,E.y,Q,ue),Ce.unbindTexture()},this.copyTextureToTexture=function(E,H,Z,V=0){let Q=H.image.width,ue=H.image.height,ge=_e.convert(Z.format),Te=_e.convert(Z.type);Fe.setTexture2D(Z,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,E.x,E.y,Q,ue,ge,Te,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,ge,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,V,E.x,E.y,ge,Te,H.image),V===0&&Z.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z,V,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,Le=_e.convert(V.format),We=_e.convert(V.type),be;if(V.isData3DTexture)Fe.setTexture3D(V,0),be=G.TEXTURE_3D;else if(V.isDataArrayTexture)Fe.setTexture2DArray(V,0),be=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let Ae=G.getParameter(G.UNPACK_ROW_LENGTH),lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Mt=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),Sn=G.getParameter(G.UNPACK_SKIP_IMAGES),ht=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,E.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,E.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,E.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(be,Q,H.x,H.y,H.z,ue,ge,Te,Le,We,ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(be,Q,H.x,H.y,H.z,ue,ge,Te,Le,ht.data)):G.texSubImage3D(be,Q,H.x,H.y,H.z,ue,ge,Te,Le,We,ht),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Mt),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Sn),Q===0&&V.generateMipmaps&&G.generateMipmap(be),Ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){M=0,A=0,w=null,Ce.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Ws:eT}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ws?Xe:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Im=class extends Tc{};Im.prototype.isWebGL1Renderer=!0;var dh=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ec=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dm,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new D,js=class{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var bw=new D,ww=new pt,Tw=new pt,qB=new D,Ew=new Ye,Go=new D,sm=new ii,Aw=new Ye,om=new ta,ph=class extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)Go.fromBufferAttribute(t,n),this.applyBoneTransform(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)Go.fromBufferAttribute(t,n),this.applyBoneTransform(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sm.copy(this.boundingSphere),sm.applyMatrix4(i),e.ray.intersectsSphere(sm)!==!1&&(Aw.copy(i).invert(),om.copy(e.ray).applyMatrix4(Aw),!(this.boundingBox!==null&&om.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,om)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ww.fromBufferAttribute(i.attributes.skinIndex,e),Tw.fromBufferAttribute(i.attributes.skinWeight,e),bw.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Tw.getComponent(s);if(o!==0){let a=ww.getComponent(s);Ew.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qB.copy(bw).applyMatrix4(Ew),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ac=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lm=class extends Gt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=jt,u=jt,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rw=new Ye,XB=new Ye,ra=class{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:XB;Rw.multiplyMatrices(a,t[s]),Rw.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ra(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=nT(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lm(t,e,e,xi,Mr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ac),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Rc=class extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wo=new Ye,Cw=new Ye,Ku=[],Pw=new Mi,YB=new Ye,hc=new ln,fc=new ii,mh=class extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,YB)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wo),Pw.copy(e.boundingBox).applyMatrix4(Wo),this.boundingBox.union(Pw)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wo),fc.copy(e.boundingSphere).applyMatrix4(Wo),this.boundingSphere.union(fc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(hc.geometry=this.geometry,hc.material=this.material,hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(n),e.ray.intersectsSphere(fc)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wo),Cw.multiplyMatrices(n,Wo),hc.matrixWorld=Cw,hc.raycast(e,Ku);for(let o=0,a=Ku.length;o<a;o++){let c=Ku[o];c.instanceId=s,c.object=this,t.push(c)}Ku.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Iw=new D,Lw=new D,Ow=new Ye,am=new ta,Ju=new ii,sa=class extends yt{constructor(e=new yn,t=new Cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Iw.fromBufferAttribute(t,i-1),Lw.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Iw.distanceTo(Lw);e.setAttribute("lineDistance",new Si(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ju.copy(n.boundingSphere),Ju.applyMatrix4(i),Ju.radius+=s,e.ray.intersectsSphere(Ju)===!1)return;Ow.copy(i).invert(),am.copy(e.ray).applyMatrix4(Ow);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=d){let M=g.getX(v),A=g.getX(v+1);if(l.fromBufferAttribute(m,M),u.fromBufferAttribute(m,A),am.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=d){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),am.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Dw=new D,Nw=new D,gh=class extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Dw.fromBufferAttribute(t,i),Nw.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dw.distanceTo(Nw);e.setAttribute("lineDistance",new Si(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_h=class extends sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pc=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uw=new Ye,Om=new ta,$u=new ii,Qu=new D,vh=class extends yt{constructor(e=new yn,t=new Pc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$u.copy(n.boundingSphere),$u.applyMatrix4(i),$u.radius+=s,e.ray.intersectsSphere($u)===!1)return;Uw.copy(i).invert(),Om.copy(e.ray).applyMatrix4(Uw);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=l.getX(g);Qu.fromBufferAttribute(h,m),Fw(Qu,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Qu.fromBufferAttribute(h,g),Fw(Qu,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fw(r,e,t,n,i,s,o){let a=Om.distanceSqToPoint(r);if(a<t){let c=new D;Om.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var oa=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tT,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},si=class extends oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Yr(r,e,t){return fT(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function eh(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function fT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jB(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bw(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function dT(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dm=class extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fb,endingEnd:Fb}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bb:s=e,a=2*t-n;break;case kb:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bb:o=e,c=2*n-t;break;case kb:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+y*o[l+M]+v*o[c+M]+S*o[h+M];return s}},Nm=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Um=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eh(t,this.TimeBufferType),this.values=eh(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eh(e.times,Array),values:eh(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Fp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Fp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Yr(n,s,o),this.values=Yr(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&fT(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=Yr(this.times),t=Yr(this.values),n=this.getValueSize(),i=this.getInterpolation()===Fp,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Yr(e,0,o),this.values=Yr(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Yr(this.times,0),t=Yr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ys;var ns=class extends bi{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Qo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends bi{};yh.prototype.ValueTypeName="color";var Ar=class extends bi{};Ar.prototype.ValueTypeName="number";var Fm=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Bi.slerpFlat(s,0,o,l-a,o,l,c);return s}},$i=class extends bi{InterpolantFactoryMethodLinear(e){return new Fm(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=Ys;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends bi{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Qo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends bi{};Rr.prototype.ValueTypeName="vector";var xh=class{constructor(e,t=-1,n,i=TD){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(KB(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=jB(c);c=Bw(c,1,u),l=Bw(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,_){if(d.length!==0){let m=[],p=[];dT(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ar(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(Rr,d+".position",f,"pos",i),n($i,d+".quaternion",f,"rot",i),n(Rr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ZB(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return yh;case"quaternion":return $i;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function KB(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ZB(r.type);if(r.times===void 0){let t=[],n=[];dT(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var rs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Bm=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},JB=new Bm,ki=class{constructor(e){this.manager=e!==void 0?e:JB,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr={},km=class extends Error{constructor(e,t){super(e),this.response=t}},ss=class extends ki{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=rs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:n,onError:i});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=yr[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{_+=S.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,w=u.length;A<w;A++){let I=u[A];I.onProgress&&I.onProgress(M)}p.enqueue(S),y()}})}}});return new Response(m)}else throw new km(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{rs.add(e,l);let u=yr[e];delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=yr[e];if(u===void 0)throw this.manager.itemError(e),l;delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var zm=class extends ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=rs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Mc("img");function c(){u(),rs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var aa=class extends ki{constructor(e){super(e)}load(e,t,n,i){let s=new Gt,o=new zm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ca=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Sh=class extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cm=new Ye,kw=new D,zw=new D,Ic=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kw.setFromMatrixPosition(e.matrixWorld),t.position.copy(kw),zw.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zw),t.updateMatrixWorld(),cm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hm=class extends Ic{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ea*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Mh=class extends ca{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hw=new Ye,dc=new D,lm=new D,Vm=class extends Ic{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dc.setFromMatrixPosition(e.matrixWorld),n.position.copy(dc),lm.copy(n.position),lm.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lm),n.updateMatrixWorld(),i.makeTranslation(-dc.x,-dc.y,-dc.z),Hw.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hw)}},bh=class extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gm=class extends Ic{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var la=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wh=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=rs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){rs.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var Km="\\[\\]\\.:\\/",$B=new RegExp("["+Km+"]","g"),Jm="[^"+Km+"]",QB="[^"+Km.replace("\\.","")+"]",ek=/((?:WC+[\/:])*)/.source.replace("WC",Jm),tk=/(WCOD+)?/.source.replace("WCOD",QB),nk=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jm),ik=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jm),rk=new RegExp("^"+ek+tk+nk+ik+"$"),sk=["material","materials","bones","map"],Wm=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($B,"")}static parseTrackName(e){let t=rk.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);sk.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Wm;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x4=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);var $m=new WeakMap,Ch=class extends ki{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let s=new ss(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Xe).catch(n)}decodeDracoFile(e,t,n,i,s=Ft){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){let n=JSON.stringify(t);if($m.has(e)){let c=$m.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[s]={resolve:l,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),$m.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new yn;e.index&&t.setIndex(new Dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new Dt(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Xe)return;let n=new ze;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ss(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let s=ak.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){let o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function ak(){let r,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(u=>{let h=u.draco,f=new h.Decoder;try{let d=t(h,f,new Int8Array(c),l),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,c,l){let u=l.attributeIDs,h=l.attributeTypes,f,d,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let _={index:null,attributes:[]};for(let m in u){let p=self[h[m]],y,v;if(l.useUniqueIDs)v=u[m],y=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[m]]),v===-1)continue;y=a.GetAttribute(f,v)}let S=i(o,a,f,m,p,y);m==="color"&&(S.vertexColorSpace=l.vertexColorSpace),_.attributes.push(S)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,c){let u=c.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(c,h,f);let d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,c,l,u,h){let f=h.num_components(),g=c.num_points()*f,_=g*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,h,m,_,p);let y=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:y,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Qm(r,e){if(e===Qw)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Lc||e===Eh){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Lc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Ph=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new og(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new cg(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new sg(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new ag(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new ig(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new vg(t)})}load(e,t,n,i){let s=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=la.extractUrlBase(e),this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ss(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vT){try{o[ct.KHR_BINARY_GLTF]=new yg(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Eg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new rg;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new xg(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new Sg;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new Mg;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function ck(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ig=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ft);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new bh(u),l.distance=h;break;case"spot":l=new Mh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,as(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},rg=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Xe))}return Promise.all(i)}},sg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},og=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}},ag=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},cg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},lg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},ug=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ft),Promise.all(s)}},hg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},fg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xe)),Promise.all(s)}},dg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},pg=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},mg=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gg=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_g=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},vg=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==wi.TRIANGLES&&l.mode!==wi.TRIANGLE_STRIP&&l.mode!==wi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let _=new Ye,m=new D,p=new Bi,y=new D(1,1,1),v=new mh(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&y.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,_.compose(m,p,y));for(let S in c)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);yt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},vT="glTF",Oc=12,pT={JSON:1313821514,BIN:5130562},yg=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Oc,s=new DataView(e,Oc),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===pT.JSON){let l=new Uint8Array(e,Oc+o,a);this.content=n.decode(l)}else if(c===pT.BIN){let l=Oc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=wg[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=wg[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ha[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(let d in f.attributes){let g=f.attributes[d],_=c[d];_!==void 0&&(g.normalized=_)}h(f)},a,l)})})}},Sg=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Mg=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},Ih=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,y=1-m,v=p-f+h;for(let S=0;S!==a;S++){let M=o[_+S+a],A=o[_+S+c]*u,w=o[g+S+a],I=o[g+S]*u;s[S]=y*M+v*A+m*w+p*I}return s}},lk=new Bi,bg=class extends Ih{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return lk.fromArray(s).normalize().toArray(s),s}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mT={9728:jt,9729:Dn,9984:th,9985:Xm,9986:mc,9987:$r},gT={33071:ni,33648:xc,10497:Xs},eg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uk={CUBICSPLINE:void 0,LINEAR:Ys,STEP:Qo},tg={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hk(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),r.DefaultMaterial}function Ks(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function as(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fk(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function dk(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pk(r){let e,t=r.extensions&&r.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ng(t.attributes):e=r.indices+":"+ng(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ng(r.targets[n]);return e}function ng(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Tg(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mk(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var gk=new Ye,Eg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ck,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new aa(this.options.manager):this.textureLoader=new wh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ss(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ks(s,a,i),as(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(la.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=eg[i.type],a=ha[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Dt(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=eg[i.type],l=ha[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(y);v||(_=new l(a,p*d,i.count*d/u),v=new Ec(_,d/u),t.cache.add(y,v)),m=new js(v,c,f%d/u,g)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),m=new Dt(_,c,g);if(i.sparse!==void 0){let p=eg.SCALAR,y=ha[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,M=new y(o[1],v,i.sparse.count*p),A=new l(o[2],S,i.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,I=M.length;w<I;w++){let x=M[w];if(m.setX(x,A[w*c]),c>=2&&m.setY(x,A[w*c+1]),c>=3&&m.setZ(x,A[w*c+2]),c>=4&&m.setW(x,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=mT[f.magFilter]||Dn,u.minFilter=mT[f.minFilter]||$r,u.wrapS=gT[f.wrapS]||Xs,u.wrapT=gT[f.wrapT]||Xs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Gt(_);m.needsUpdate=!0,f(m)}),t.load(la.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||mk(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Pc,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Cc,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return oa}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){let h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ft),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Xe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Nn);let u=s.alphaMode||tg.OPAQUE;if(u===tg.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===tg.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Zt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Zt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Zt){let h=s.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Ft)}return s.emissiveTexture!==void 0&&o!==Zt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Xe)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),as(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ks(i,h,s),h})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return _T(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=pk(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=_T(new yn,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?hk(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=o[d],p,y=l[d];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ph(_,y):new ln(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wi.TRIANGLE_STRIP?p.geometry=Qm(p.geometry,Eh):m.mode===wi.TRIANGLE_FAN&&(p.geometry=Qm(p.geometry,Lc));else if(m.mode===wi.LINES)p=new gh(_,y);else if(m.mode===wi.LINE_STRIP)p=new sa(_,y);else if(m.mode===wi.LINE_LOOP)p=new _h(_,y);else if(m.mode===wi.POINTS)p=new vh(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dk(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),as(p,s),m.extensions&&Ks(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ks(i,h[0],s),h[0];let f=new Ki;s.extensions&&Ks(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(iT.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new es(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),as(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new Ye;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ra(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,v=f.length;y<v;y++){let S=f[y],M=d[y],A=g[y],w=_[y],I=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let x=n._createAnimationTracks(S,M,A,w,I);if(x)for(let b=0;b<x.length;b++)p.push(x[b])}return new xh(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gk)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Ac:l.length>1?u=new Ki:l.length===1?u=l[0]:u=new yt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),as(u,s),s.extensions&&Ks(n,u,s),s.matrix!==void 0){let h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ki;n.name&&(s.name=i.createUniqueName(n.name)),as(s,n),n.extensions&&Ks(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof ri||f instanceof Gt)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,c=[];os[s.path]===os.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(os[s.path]){case os.weights:l=Ar;break;case os.rotation:l=$i;break;case os.position:case os.scale:l=Rr;break;default:switch(n.itemSize){case 1:l=Ar;break;case 2:case 3:default:l=Rr;break}break}let u=i.interpolation!==void 0?uk[i.interpolation]:Ys,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+os[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tg(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $i?bg:Ih;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _k(r,e,t){let n=e.attributes,i=new Mi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let u=Tg(ha[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new D,c=new D;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Tg(ha[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new ii;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function _T(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=wg[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Gn.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gn.workingColorSpace}" not supported.`),as(r,e),_k(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fk(r,e.targets,t):r})}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{Sk(),xk(),vk(),Mk(),yk()});function vk(){document.querySelectorAll(".grid-wrap .blockportfolio").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hover")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hover")})})}function yk(){document.querySelectorAll(".newsblock_inner").forEach(e=>{let t=e.getBoundingClientRect();e.querySelectorAll(".bg_black_news").forEach(n=>{n.style.width=`${t.width}px`,n.style.height=`${t.height}px`})})}function xk(){let r=document.querySelector(".grid-wrap"),e=document.querySelector(".btnnext-portfolio"),t=document.querySelector(".btnprev-portfolio");e.addEventListener("click",()=>{mt.to(r,{x:()=>window.innerWidth>1440?"-100em":window.innerWidth<1440&&window.innerWidth>1250?"-80em":"-98em",duration:.5,onComplete:()=>{e.style.display="none",t.style.display="block"}})}),t.addEventListener("click",()=>{mt.to(r,{x:0,duration:.5,onComplete:()=>{e.style.display="block",t.style.display="none"}})});let n=mt.matchMedia(),i=0,s=!1,o=document.querySelectorAll(".stack_mob .blockportfolio").length-2;n.add("(max-width: 991px)",()=>{function a(){i!==o+1&&(s||(s=!0,i++,mt.to(".grid-wrap",{x:()=>(-71.5*window.innerWidth-10)*i/100,duration:.5,onComplete:()=>{s=!1}})))}function c(){i!==0&&(s||(s=!0,mt.to(".grid-wrap",{x:()=>-71.5*window.innerWidth*(i-1)/100,duration:.5,onComplete:()=>{i--,s=!1}})))}bt.create({type:"touch",target:".column-wrap",onLeft:()=>a(),onRight:()=>c(),tolerance:10,preventDefault:!0})})}function Sk(){mt.registerPlugin(bt);let r=!1,e=document.querySelector(".wrapp"),t=mt.utils.toArray(".box");if(t.length>0){let s=function(){r||(r=!0,i.next({duration:.4,ease:"power1.inOut"}))},o=function(){r||(r=!0,i.previous({duration:.4,ease:"power1.inOut"}))},i=n(t,{paused:!0,paddingRight:4,draggable:!0});document.querySelector(".btnnext").addEventListener("click",s),document.querySelector(".btnprev").addEventListener("click",o),bt.create({type:"touch",target:".collectionlistwrapper4",onLeft:()=>s(),onRight:()=>o(),tolerance:10,preventDefault:!0})}function n(i,s){i=mt.utils.toArray(i),s=s||{};let{onChange:o}=s,a=0,c=mt.timeline({repeat:s.repeat,onUpdate:o&&function(){let U=c.closestIndex();a!==U&&(a=U,o(i[U],U))},paused:s.paused,defaults:{ease:"none"},onReverseComplete:()=>{c.totalTime(c.rawTime()+c.duration()*100)}}),{length:l}=i,u=i[0].offsetLeft,h=[],f=[],d=[],g=[],_=0,m=!1,{center:p}=s,y=(s.speed||1)*100,v=s.snap===!1?U=>U:mt.utils.snap(s.snap||1),S=0,M=p===!0?i[0].parentNode:mt.utils.toArray(p)[0]||i[0].parentNode,A,w=()=>i[l-1].offsetLeft+g[l-1]/100*f[l-1]-u+d[0]+i[l-1].offsetWidth*mt.getProperty(i[l-1],"scaleX")+(parseFloat(s.paddingRight)||0),I=()=>{let U=M.getBoundingClientRect(),L;i.forEach((k,j)=>{f[j]=parseFloat(mt.getProperty(k,"width","px")),g[j]=v(parseFloat(mt.getProperty(k,"x","px"))/f[j]*100+mt.getProperty(k,"xPercent")),L=k.getBoundingClientRect(),d[j]=L.left-(j?U.right:U.left),U=L}),mt.set(i,{xPercent:k=>g[k]}),A=w()},x,b=()=>{S=p?c.duration()*(M.offsetWidth/2)/A:0,p&&h.forEach((U,L)=>{h[L]=x(c.labels["label"+L]+c.duration()*f[L]/2/A-S)})},X=(U,L,k)=>{let j=U.length,R=1e10,N=0,K;for(;j--;)K=Math.abs(U[j]-L),K>k/2&&(K=k-K),K<R&&(R=K,N=j);return N},q=()=>{let U,L,k,j,R;for(c.clear(),U=0;U<l;U++)L=i[U],k=g[U]/100*f[U],j=L.offsetLeft+k-u+d[0],R=j+f[U]*mt.getProperty(L,"scaleX"),c.to(L,{xPercent:v((k-R)/f[U]*100),duration:R/y},0).fromTo(L,{xPercent:v((k-R+A)/f[U]*100)},{xPercent:g[U],duration:(k-R+A-k)/y,immediateRender:!1},R/y).add("label"+U,j/y),h[U]=j/y;x=mt.utils.wrap(0,c.duration())},z=U=>{let L=c.progress();c.progress(0,!0),I(),U&&q(),b(),U&&c.draggable?c.time(h[_],!0):c.progress(L,!0)},B;mt.set(i,{x:0}),I(),q(),b(),window.addEventListener("resize",()=>z(!0));function F(U,L){setTimeout(()=>{r=!1},500),L=L||{},Math.abs(U-_)>l/2&&(U+=U>_?-l:l);let k=mt.utils.wrap(0,l,U),j=h[k];return j>c.time()!=U>_&&U!==_&&(j+=c.duration()*(U>_?1:-1)),(j<0||j>c.duration())&&(L.modifiers={time:x}),_=k,L.overwrite=!0,mt.killTweensOf(B),L.duration===0?c.time(x(j)):c.tweenTo(j,L)}return c.toIndex=(U,L)=>F(U,L),c.closestIndex=U=>{let L=X(h,c.time(),c.duration());return U&&(_=L,m=!1),L},c.current=()=>m?c.closestIndex(!0):_,c.next=U=>F(c.current()+1,U),c.previous=U=>F(c.current()-1,U),c.times=h,c.progress(1,!0).progress(0,!0),s.reversed&&(c.vars.onReverseComplete(),c.reverse()),c}}function Mk(){mt.registerPlugin(He),He.config({ignoreMobileResize:!0}),He.normalizeScroll(!0),rs.enabled=!0;let r,e,t,n,i,s,o,a,c=null,l=0,u=0,h,f;s={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},MobileWidth:function(){return window.innerWidth<992},any:function(){return s.MobileWidth()||s.Android()||s.BlackBerry()||s.iOS()||s.Opera()||s.Windows()}},s.any()?(o=!1,window.innerWidth<992&&window.innerWidth>478?a=!0:a=!1):(a=!1,o=!0);let d=o?.18:.35,g=window.innerWidth/window.innerHeight;window.scrollTo(0,0),_();function _(){e=new dh,o?e.position.set(0,0,0):e.position.set(.1,-.1,0),r=new es(d*g/-2,d*g/2,d/2,d/-2,.1,100),o?r.position.z=10:r.position.z=3;let M=new aa,A=M.load("https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bf948e9520b0454eddbda4_top_image_v20.png");A.colorSpace=Xe,A.flipY=!1;let w=M.load("https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bfa9f99f9a45d45edc5ade_process%20simplied_v20.png");w.colorSpace=Xe,w.flipY=!1;let I=M.load("https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bfadcdbe8065401aabc3b4_process%20simplied_v20.jpg");I.colorSpace=Xe,I.flipY=!1;let x=M.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e70e37de52b4add32a442_image2.png");x.colorSpace=Xe,x.flipY=!1;let b=M.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e85a095eba48fa03bfbb4_image3%401%2C5x.jpg");b.colorSpace=Xe,b.flipY=!1;let X=M.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319bf1a64f5e5f8bc368b6_illu_portfolio%401%2C5x.jpg");X.colorSpace=Xe;let q=M.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319e9a7dccba83839abd0c_illu_news%401%2C5x.jpg");q.colorSpace=Xe;let z=new Tr(5,32,32),B=new Zt({side:Nn,color:15921906}),F=new ln(z,B);e.add(F);let U=new Ph,L=new Ch;L.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),U.setDRACOLoader(L),U.load("https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65c0c9147e3131f60daba367_scroll_animation_v16-------rework2.glb.txt",function(R){e.add(R.scene);let N=new si({sheenRoughness:.5,reflectivity:.5,roughness:.1,transmission:1.03,thickness:.086,ior:1.23,clearcoat:1,envMapIntensity:1.5});R.scene.traverse(function(K){if(K.name==="cameraBlender"&&(c=e.getObjectByName("cameraBlender"),r.position.x=c.position.x,r.position.y=c.position.y,r.position.z=c.position.z,r.rotation.x=c.rotation.x,r.rotation.y=c.rotation.y,r.rotation.z=c.rotation.z,r.updateProjectionMatrix(),mt.to(r.position,{scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=700%",scrub:0,onUpdate:O=>{r.updateProjectionMatrix()}},y:()=>o?-1.31:-2.45,ease:"none"})),K.name==="glassThing"){h=e.getObjectByName("glassThing"),h.material=N,h.position.x=o?-.14:-.13,h.material.side=Nn,mt.to(h.rotation,{scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=700%",scrub:!0,onUpdate:()=>{h.rotation.z-=o?.04:.06}}});let O=mt.timeline({scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=550%",scrub:!0,onUpdate:()=>{h.rotation.z-=.02}}});o?(O.to(h.position,{x:-.14,y:-.21,duration:.5,ease:"none"}),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.07,y:-.38,duration:.5,ease:"none"},"+=0.3"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:.03,y:-.73},"+=0.8"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:.03,y:-.73,duration:.4,ease:"none"},"+=0.3"),O.to(h.position,{x:-.03,y:-1.1,duration:1,ease:"none"},"+=0.5")):a?(O.to(h.position,{x:-.17,y:-.39,duration:.5,ease:"none"},"+=0.4"),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.1,y:-.72,duration:.5,ease:"none"},"+=0.8"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:-.08,y:-1.25},"+=1.2"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:-.08,y:-1.5,duration:.4,ease:"none"},"+=0.8"),O.to(h.position,{x:-.08,y:-1.75,duration:1,ease:"none"},"+=0.5")):(window.innerHeight<701&&(O.to(h.position,{x:-.17,y:-.33,duration:.5,ease:"none"},"+=0.7"),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.1,y:-.65,duration:.5,ease:"none"},"+=1"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:-.08,y:-1.22},"+=1.8"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:-.08,y:-1.6,duration:.4,ease:"none"},"+=2"),O.to(h.position,{x:-.08,y:-1.9,duration:1,ease:"none"},"+=0.5")),window.innerHeight>700&&window.innerHeight<791&&(O.to(h.position,{x:-.17,y:-.33,duration:.5,ease:"none"},"+=0.7"),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.1,y:-.6,duration:.5,ease:"none"},"+=1"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:-.08,y:-1.16,duration:.5},"+=0.5"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:-.08,y:-1.6,duration:.4,ease:"none"},"+=2"),O.to(h.position,{x:-.08,y:-1.9,duration:1,ease:"none"},"+=0.5")),window.innerHeight>790&&window.innerHeight<891&&(O.to(h.position,{x:-.17,y:-.28,duration:.5,ease:"none"},"+=0.7"),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.1,y:-.56,duration:.5,ease:"none"},"+=1"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:-.08,y:-1.04},"+=1"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:-.08,y:-1.23,duration:.4,ease:"none"},"+=1"),O.to(h.position,{x:-.08,y:-1.6,duration:1,ease:"none"},"+=2")),window.innerHeight>890&&(O.to(h.position,{x:-.17,y:-.28,duration:.5,ease:"none"},"+=0.7"),O.to(h.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"none"},"<"),O.to(h.position,{x:-.1,y:-.5,duration:.5,ease:"none"},"+=1"),O.to(h.scale,{x:.6,y:.6,z:.6,duration:.5,ease:"none"},"<"),O.set(h.position,{x:-.08,y:-.98},"+=1.2"),O.set(h.scale,{x:1,y:1,z:1},"<"),O.to(h.position,{x:-.08,y:-1.23,duration:.4,ease:"none"},"+=1"),O.to(h.position,{x:-.08,y:-1.6,duration:1,ease:"none"},"+=2")))}if(K.name==="top_image1"){let O=e.getObjectByName("top_image1");O.material=new Zt,O.scale.x=o?.065:.065*1.1,O.scale.z=o?.085:.085*1.1,O.position.y=o||a?-.0085:.01,O.position.x=o?-.07:-.06,O.material.map=A}if(K.name==="top_image3"){let O=e.getObjectByName("top_image3");O.position.y=o?-.22:a?-.4:window.innerHeight>790?-.3:-.39,O.position.x=-.17,O.scale.multiplyScalar(o?.7:.8),O.material=new Zt,O.material.map=b}if(K.name==="top_image2"){let O=e.getObjectByName("top_image2");O.position.y=o?-.38:a?-.72:window.innerHeight<700?-.65:window.innerHeight>700&&window.innerHeight<791?-.6:window.innerHeight>790&&window.innerHeight<891?-.58:window.innerHeight>890?-.52:null,s.iOS()!=null&&(O.position.y=o?-.38:a?-.7:window.innerHeight<700?-.63:window.innerHeight>700&&window.innerHeight<791?-.58:window.innerHeight>790&&window.innerHeight<891?-.56:window.innerHeight>890?-.5:null),O.position.x=o?-.06:-.1,O.scale.multiplyScalar(o||a?1:1.3),O.material=new Zt,O.material.map=x}if(K.name==="illu_arrows001"){let O=e.getObjectByName("illu_arrows001");O.position.y=o?-.4:a?-.74:window.innerHeight<700?-.67:window.innerHeight>700&&window.innerHeight<791?-.62:window.innerHeight>790&&window.innerHeight<891?-.58:window.innerHeight>890?-.55:null,s.iOS()!=null&&(O.position.y=o?-.38:a?-.68:window.innerHeight<700?-.61:window.innerHeight>700&&window.innerHeight<791?-.56:window.innerHeight>790&&window.innerHeight<891?-.54:window.innerHeight>890?-.48:null),O.position.x=o?-.03:-.05}if(K.name==="Cylinder"&&(f=e.getObjectByName("Cylinder"),f.material=N,f.position.y=o?-.54:a?-1.02:window.innerHeight<700?-.96:window.innerHeight>700&&window.innerHeight<791?-.88:window.innerHeight>790&&window.innerHeight<891?-.82:window.innerHeight>890?-.75:null,s.iOS()!=null&&(f.position.y=o?-.54:a?-1.02:window.innerHeight<700?-.93:window.innerHeight>700&&window.innerHeight<791?-.855:window.innerHeight>790&&window.innerHeight<891?-.8:window.innerHeight>890?-.725:null),f.position.x=o?-.05:-.1,f.scale.multiplyScalar(o?.9:a?1.2:1)),K.name==="process_texts"){let O=e.getObjectByName("process_texts");O.material=new Zt,O.visible=!1}if(K.name==="process"){let O=e.getObjectByName("process");O.material=new Zt,O.material.alphaTest=.1,O.material.side=Nn,O.material.map=w,O.material.alphaMap=I,O.position.y=o?-.544:a?-1.02:window.innerHeight<700?-.96:window.innerHeight>700&&window.innerHeight<791?-.88:window.innerHeight>790&&window.innerHeight<891?-.82:window.innerHeight>890?-.75:null,s.iOS()!=null&&(O.position.y=o?-.54:a?-1.02:window.innerHeight<700?-.93:window.innerHeight>700&&window.innerHeight<791?-.855:window.innerHeight>790&&window.innerHeight<891?-.8:window.innerHeight>890?-.725:null),O.position.x=o?-.08:-.1,O.scale.x=.033,O.scale.z=.03}if(K.name==="top_image4"){let O=e.getObjectByName("top_image4");O.position.y=-1.42,o&&(O.position.y=-.73),a&&(O.position.y=-.73),O.position.x=o?.1:a?.007:-.193,O.scale.set(o?.329:0,o?.253:0,o?.253:0),O.material=new Zt,O.material.map=X}if(K.name==="top_image5"){let O=e.getObjectByName("top_image5");O.position.y=o?-.91:a?-.73:-1.622,O.position.x=o||a?0:-.09,O.material=new Zt,O.material.map=q,O.scale.set(o?.45:0,o?.45:0,o?.45:0)}}),S()},function(R){u=R.loaded/3e6*100,u>99.99},function(R){});let k=document.querySelector('[data-3d="c"]');t=new Tc({antialias:!0,powerPreference:"high-performance"}),t.outputColorSpace=Xe,t.setClearAlpha(0),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),k.appendChild(t.domElement);let j=new Sh(16777215,526344,2.2);e.add(j),j.intensity=o?2.2:6,n=new Zs(16777215,1),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,n.position.set(.2,.1,-.5),e.add(n),n.visible=!!o,i=new Zs(16777215,1),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),i.shadow.camera.far=15,i.shadow.camera.left=-7,i.shadow.camera.top=7,i.shadow.camera.right=7,i.shadow.camera.bottom=-7,i.position.set(-.4,.1,-.5),e.add(i),i.visible=!!o,o===!0&&(document.onmousemove=function(R){let N=window.innerWidth*.5,K=window.innerHeight*.5;h&&(h.rotation.y=(R.clientX-N)/N*.3,h.rotation.x=(R.clientY-K)/K*.2)}),window.addEventListener("resize",v,!1)}function m(){He.scrollerProxy(".wrapscroll",{scrollTop(A){return arguments.length&&(l.scrollTop=A),l.scrollTop}}),l.addListener(He.update);let M=document.querySelector(".wrapscroll");He.defaults({scroller:M})}function p(){class M extends Eu{transformDelta(w){return this.options.open?{x:0,y:0}:w}}Nh(M,"pluginName","modal"),Nh(M,"defaultOptions",{open:!1}),Ip.use(M),l=Ip.init(document.querySelector(".wrapscroll"),{continuousScrolling:!1,alwaysShowTracks:!0,damping:o?.05:.1,renderByPixels:!("ontouchstart"in document)})}function y(){let M=document.querySelector(".menu1"),A=document.querySelector(".menu2"),w=document.querySelector(".menu3"),I=document.querySelector(".menu-button.w-nav-button"),x=mt.timeline({paused:!0});x.to(M,{rotate:45,y:0,background:"white"}).to(A,{rotate:-45,y:0,background:"white"},0).to(w,{y:4,opacity:0,background:"white"},0).reverse(),I.addEventListener("click",b=>{b.stopPropagation(),setTimeout(()=>{document.querySelectorAll(".w--nav-link-open").forEach(q=>{q.addEventListener("click",()=>{x.reverse(),l.updatePluginOptions("modal",{open:!1})})})},300),x.reversed(!x.reversed()),I.classList.contains("w--open")})}y();function v(){console.log("resize"),He.refresh();let M=window.innerWidth/window.innerHeight;r.left=d*M/-2,r.right=d*M/2,r.top=d/2,r.bottom=-d/2,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}function S(){requestAnimationFrame(S),h&&(h.rotation.z+=o?.002:.01),f&&(f.rotation.x-=o?.01:.05),t.render(e,r)}}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
