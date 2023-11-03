(()=>{var MT=Object.create;var Uc=Object.defineProperty;var bT=Object.getOwnPropertyDescriptor;var wT=Object.getOwnPropertyNames;var TT=Object.getPrototypeOf,ET=Object.prototype.hasOwnProperty;var AT=(r,e,t)=>e in r?Uc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var $=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),RT=(r,e)=>{for(var t in e)Uc(r,t,{get:e[t],enumerable:!0})},CT=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of wT(e))!ET.call(r,i)&&i!==t&&Uc(r,i,{get:()=>e[i],enumerable:!(n=bT(e,i))||n.enumerable});return r};var da=(r,e,t)=>(t=r!=null?MT(TT(r)):{},CT(e||!r||!r.__esModule?Uc(t,"default",{value:r,enumerable:!0}):t,r));var Fh=(r,e,t)=>(AT(r,typeof e!="symbol"?e+"":e,t),t);var Qt=$((Fk,R0)=>{"use strict";R0.exports=function(r){try{return!!r()}catch{return!0}}});var El=$((Bk,C0)=>{"use strict";var AA=Qt();C0.exports=!AA(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var zt=$((kk,L0)=>{"use strict";var P0=El(),I0=Function.prototype,nd=I0.call,RA=P0&&I0.bind.bind(nd,nd);L0.exports=P0?RA:function(r){return function(){return nd.apply(r,arguments)}}});var Cs=$((zk,D0)=>{"use strict";var O0=zt(),CA=O0({}.toString),PA=O0("".slice);D0.exports=function(r){return PA(CA(r),8,-1)}});var Al=$((Hk,N0)=>{"use strict";var IA=zt(),LA=Qt(),OA=Cs(),id=Object,DA=IA("".split);N0.exports=LA(function(){return!id("z").propertyIsEnumerable(0)})?function(r){return OA(r)==="String"?DA(r,""):id(r)}:id});var Ps=$((Vk,U0)=>{"use strict";U0.exports=function(r){return r==null}});var Rl=$((Gk,F0)=>{"use strict";var NA=Ps(),UA=TypeError;F0.exports=function(r){if(NA(r))throw new UA("Can't call method on "+r);return r}});var Is=$((Wk,B0)=>{"use strict";var FA=Al(),BA=Rl();B0.exports=function(r){return FA(BA(r))}});var zn=$((k0,z0)=>{"use strict";var Cl=function(r){return r&&r.Math===Math&&r};z0.exports=Cl(typeof globalThis=="object"&&globalThis)||Cl(typeof window=="object"&&window)||Cl(typeof self=="object"&&self)||Cl(typeof global=="object"&&global)||function(){return this}()||k0||Function("return this")()});var Ha=$((qk,H0)=>{"use strict";H0.exports=!1});var Pl=$((Xk,G0)=>{"use strict";var V0=zn(),kA=Object.defineProperty;G0.exports=function(r,e){try{kA(V0,r,{value:e,configurable:!0,writable:!0})}catch{V0[r]=e}return e}});var Il=$((Yk,q0)=>{"use strict";var zA=zn(),HA=Pl(),W0="__core-js_shared__",VA=zA[W0]||HA(W0,{});q0.exports=VA});var rd=$((jk,Y0)=>{"use strict";var GA=Ha(),X0=Il();(Y0.exports=function(r,e){return X0[r]||(X0[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.33.0",mode:GA?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var _o=$((Zk,j0)=>{"use strict";var WA=Rl(),qA=Object;j0.exports=function(r){return qA(WA(r))}});var mi=$((Kk,Z0)=>{"use strict";var XA=zt(),YA=_o(),jA=XA({}.hasOwnProperty);Z0.exports=Object.hasOwn||function(e,t){return jA(YA(e),t)}});var Ll=$((Jk,K0)=>{"use strict";var ZA=zt(),KA=0,JA=Math.random(),$A=ZA(1 .toString);K0.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+$A(++KA+JA,36)}});var $0=$(($k,J0)=>{"use strict";J0.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""});var sv=$((Qk,rv)=>{"use strict";var iv=zn(),sd=$0(),Q0=iv.process,ev=iv.Deno,tv=Q0&&Q0.versions||ev&&ev.version,nv=tv&&tv.v8,Ci,Ol;nv&&(Ci=nv.split("."),Ol=Ci[0]>0&&Ci[0]<4?1:+(Ci[0]+Ci[1]));!Ol&&sd&&(Ci=sd.match(/Edge\/(\d+)/),(!Ci||Ci[1]>=74)&&(Ci=sd.match(/Chrome\/(\d+)/),Ci&&(Ol=+Ci[1])));rv.exports=Ol});var od=$((ez,av)=>{"use strict";var ov=sv(),QA=Qt(),e1=zn(),t1=e1.String;av.exports=!!Object.getOwnPropertySymbols&&!QA(function(){var r=Symbol("symbol detection");return!t1(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&ov&&ov<41})});var ad=$((tz,cv)=>{"use strict";var n1=od();cv.exports=n1&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Jn=$((nz,uv)=>{"use strict";var i1=zn(),r1=rd(),lv=mi(),s1=Ll(),o1=od(),a1=ad(),vo=i1.Symbol,cd=r1("wks"),c1=a1?vo.for||vo:vo&&vo.withoutSetter||s1;uv.exports=function(r){return lv(cd,r)||(cd[r]=o1&&lv(vo,r)?vo[r]:c1("Symbol."+r)),cd[r]}});var ud=$((iz,hv)=>{"use strict";var ld=typeof document=="object"&&document.all,l1=typeof ld=="undefined"&&ld!==void 0;hv.exports={all:ld,IS_HTMLDDA:l1}});var Xt=$((rz,dv)=>{"use strict";var fv=ud(),u1=fv.all;dv.exports=fv.IS_HTMLDDA?function(r){return typeof r=="function"||r===u1}:function(r){return typeof r=="function"}});var Hn=$((sz,gv)=>{"use strict";var pv=Xt(),mv=ud(),h1=mv.all;gv.exports=mv.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:pv(r)||r===h1}:function(r){return typeof r=="object"?r!==null:pv(r)}});var Pi=$((oz,_v)=>{"use strict";var f1=Hn(),d1=String,p1=TypeError;_v.exports=function(r){if(f1(r))return r;throw new p1(d1(r)+" is not an object")}});var $n=$((az,vv)=>{"use strict";var m1=Qt();vv.exports=!m1(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var hd=$((cz,yv)=>{"use strict";var g1=$n(),_1=Qt();yv.exports=g1&&_1(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var dd=$((lz,Sv)=>{"use strict";var v1=zn(),xv=Hn(),fd=v1.document,y1=xv(fd)&&xv(fd.createElement);Sv.exports=function(r){return y1?fd.createElement(r):{}}});var pd=$((uz,Mv)=>{"use strict";var x1=$n(),S1=Qt(),M1=dd();Mv.exports=!x1&&!S1(function(){return Object.defineProperty(M1("div"),"a",{get:function(){return 7}}).a!==7})});var Xi=$((hz,bv)=>{"use strict";var b1=El(),Dl=Function.prototype.call;bv.exports=b1?Dl.bind(Dl):function(){return Dl.apply(Dl,arguments)}});var yo=$((fz,wv)=>{"use strict";var md=zn(),w1=Xt(),T1=function(r){return w1(r)?r:void 0};wv.exports=function(r,e){return arguments.length<2?T1(md[r]):md[r]&&md[r][e]}});var Nl=$((dz,Tv)=>{"use strict";var E1=zt();Tv.exports=E1({}.isPrototypeOf)});var gd=$((pz,Ev)=>{"use strict";var A1=yo(),R1=Xt(),C1=Nl(),P1=ad(),I1=Object;Ev.exports=P1?function(r){return typeof r=="symbol"}:function(r){var e=A1("Symbol");return R1(e)&&C1(e.prototype,I1(r))}});var Ul=$((mz,Av)=>{"use strict";var L1=String;Av.exports=function(r){try{return L1(r)}catch{return"Object"}}});var Va=$((gz,Rv)=>{"use strict";var O1=Xt(),D1=Ul(),N1=TypeError;Rv.exports=function(r){if(O1(r))return r;throw new N1(D1(r)+" is not a function")}});var Fl=$((_z,Cv)=>{"use strict";var U1=Va(),F1=Ps();Cv.exports=function(r,e){var t=r[e];return F1(t)?void 0:U1(t)}});var Iv=$((vz,Pv)=>{"use strict";var _d=Xi(),vd=Xt(),yd=Hn(),B1=TypeError;Pv.exports=function(r,e){var t,n;if(e==="string"&&vd(t=r.toString)&&!yd(n=_d(t,r))||vd(t=r.valueOf)&&!yd(n=_d(t,r))||e!=="string"&&vd(t=r.toString)&&!yd(n=_d(t,r)))return n;throw new B1("Can't convert object to primitive value")}});var Nv=$((yz,Dv)=>{"use strict";var k1=Xi(),Lv=Hn(),Ov=gd(),z1=Fl(),H1=Iv(),V1=Jn(),G1=TypeError,W1=V1("toPrimitive");Dv.exports=function(r,e){if(!Lv(r)||Ov(r))return r;var t=z1(r,W1),n;if(t){if(e===void 0&&(e="default"),n=k1(t,r,e),!Lv(n)||Ov(n))return n;throw new G1("Can't convert object to primitive value")}return e===void 0&&(e="number"),H1(r,e)}});var Bl=$((xz,Uv)=>{"use strict";var q1=Nv(),X1=gd();Uv.exports=function(r){var e=q1(r,"string");return X1(e)?e:e+""}});var Ii=$(Bv=>{"use strict";var Y1=$n(),j1=pd(),Z1=hd(),kl=Pi(),Fv=Bl(),K1=TypeError,xd=Object.defineProperty,J1=Object.getOwnPropertyDescriptor,Sd="enumerable",Md="configurable",bd="writable";Bv.f=Y1?Z1?function(e,t,n){if(kl(e),t=Fv(t),kl(n),typeof e=="function"&&t==="prototype"&&"value"in n&&bd in n&&!n[bd]){var i=J1(e,t);i&&i[bd]&&(e[t]=n.value,n={configurable:Md in n?n[Md]:i[Md],enumerable:Sd in n?n[Sd]:i[Sd],writable:!1})}return xd(e,t,n)}:xd:function(e,t,n){if(kl(e),t=Fv(t),kl(n),j1)try{return xd(e,t,n)}catch{}if("get"in n||"set"in n)throw new K1("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var zv=$((Mz,kv)=>{"use strict";var $1=Math.ceil,Q1=Math.floor;kv.exports=Math.trunc||function(e){var t=+e;return(t>0?Q1:$1)(t)}});var zl=$((bz,Hv)=>{"use strict";var eR=zv();Hv.exports=function(r){var e=+r;return e!==e||e===0?0:eR(e)}});var wd=$((wz,Vv)=>{"use strict";var tR=zl(),nR=Math.max,iR=Math.min;Vv.exports=function(r,e){var t=tR(r);return t<0?nR(t+e,0):iR(t,e)}});var Wv=$((Tz,Gv)=>{"use strict";var rR=zl(),sR=Math.min;Gv.exports=function(r){return r>0?sR(rR(r),9007199254740991):0}});var xo=$((Ez,qv)=>{"use strict";var oR=Wv();qv.exports=function(r){return oR(r.length)}});var jv=$((Az,Yv)=>{"use strict";var aR=Is(),cR=wd(),lR=xo(),Xv=function(r){return function(e,t,n){var i=aR(e),s=lR(i),o=cR(n,s),a;if(r&&t!==t){for(;s>o;)if(a=i[o++],a!==a)return!0}else for(;s>o;o++)if((r||o in i)&&i[o]===t)return r||o||0;return!r&&-1}};Yv.exports={includes:Xv(!0),indexOf:Xv(!1)}});var Ga=$((Rz,Zv)=>{"use strict";Zv.exports={}});var Ed=$((Cz,Jv)=>{"use strict";var uR=zt(),Td=mi(),hR=Is(),fR=jv().indexOf,dR=Ga(),Kv=uR([].push);Jv.exports=function(r,e){var t=hR(r),n=0,i=[],s;for(s in t)!Td(dR,s)&&Td(t,s)&&Kv(i,s);for(;e.length>n;)Td(t,s=e[n++])&&(~fR(i,s)||Kv(i,s));return i}});var Hl=$((Pz,$v)=>{"use strict";$v.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ad=$((Iz,Qv)=>{"use strict";var pR=Ed(),mR=Hl();Qv.exports=Object.keys||function(e){return pR(e,mR)}});var ty=$(ey=>{"use strict";var gR=$n(),_R=hd(),vR=Ii(),yR=Pi(),xR=Is(),SR=Ad();ey.f=gR&&!_R?Object.defineProperties:function(e,t){yR(e);for(var n=xR(t),i=SR(t),s=i.length,o=0,a;s>o;)vR.f(e,a=i[o++],n[a]);return e}});var iy=$((Oz,ny)=>{"use strict";var MR=yo();ny.exports=MR("document","documentElement")});var Vl=$((Dz,sy)=>{"use strict";var bR=rd(),wR=Ll(),ry=bR("keys");sy.exports=function(r){return ry[r]||(ry[r]=wR(r))}});var Wa=$((Nz,fy)=>{"use strict";var TR=Pi(),ER=ty(),oy=Hl(),AR=Ga(),RR=iy(),CR=dd(),PR=Vl(),ay=">",cy="<",Cd="prototype",Pd="script",uy=PR("IE_PROTO"),Rd=function(){},hy=function(r){return cy+Pd+ay+r+cy+"/"+Pd+ay},ly=function(r){r.write(hy("")),r.close();var e=r.parentWindow.Object;return r=null,e},IR=function(){var r=CR("iframe"),e="java"+Pd+":",t;return r.style.display="none",RR.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(hy("document.F=Object")),t.close(),t.F},Gl,Wl=function(){try{Gl=new ActiveXObject("htmlfile")}catch{}Wl=typeof document!="undefined"?document.domain&&Gl?ly(Gl):IR():ly(Gl);for(var r=oy.length;r--;)delete Wl[Cd][oy[r]];return Wl()};AR[uy]=!0;fy.exports=Object.create||function(e,t){var n;return e!==null?(Rd[Cd]=TR(e),n=new Rd,Rd[Cd]=null,n[uy]=e):n=Wl(),t===void 0?n:ER.f(n,t)}});var py=$((Uz,dy)=>{"use strict";var LR=Jn(),OR=Wa(),DR=Ii().f,Id=LR("unscopables"),Ld=Array.prototype;Ld[Id]===void 0&&DR(Ld,Id,{configurable:!0,value:OR(null)});dy.exports=function(r){Ld[Id][r]=!0}});var So=$((Fz,my)=>{"use strict";my.exports={}});var Od=$((Bz,_y)=>{"use strict";var NR=zn(),UR=Xt(),gy=NR.WeakMap;_y.exports=UR(gy)&&/native code/.test(String(gy))});var qa=$((kz,vy)=>{"use strict";vy.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var ql=$((zz,yy)=>{"use strict";var FR=$n(),BR=Ii(),kR=qa();yy.exports=FR?function(r,e,t){return BR.f(r,e,kR(1,t))}:function(r,e,t){return r[e]=t,r}});var Os=$((Hz,My)=>{"use strict";var zR=Od(),Sy=zn(),HR=Hn(),VR=ql(),Dd=mi(),Nd=Il(),GR=Vl(),WR=Ga(),xy="Object already initialized",Ud=Sy.TypeError,qR=Sy.WeakMap,Xl,Xa,Yl,XR=function(r){return Yl(r)?Xa(r):Xl(r,{})},YR=function(r){return function(e){var t;if(!HR(e)||(t=Xa(e)).type!==r)throw new Ud("Incompatible receiver, "+r+" required");return t}};zR||Nd.state?(Li=Nd.state||(Nd.state=new qR),Li.get=Li.get,Li.has=Li.has,Li.set=Li.set,Xl=function(r,e){if(Li.has(r))throw new Ud(xy);return e.facade=r,Li.set(r,e),e},Xa=function(r){return Li.get(r)||{}},Yl=function(r){return Li.has(r)}):(Ls=GR("state"),WR[Ls]=!0,Xl=function(r,e){if(Dd(r,Ls))throw new Ud(xy);return e.facade=r,VR(r,Ls,e),e},Xa=function(r){return Dd(r,Ls)?r[Ls]:{}},Yl=function(r){return Dd(r,Ls)});var Li,Ls;My.exports={set:Xl,get:Xa,has:Yl,enforce:XR,getterFor:YR}});var Fd=$(Ty=>{"use strict";var by={}.propertyIsEnumerable,wy=Object.getOwnPropertyDescriptor,jR=wy&&!by.call({1:2},1);Ty.f=jR?function(e){var t=wy(this,e);return!!t&&t.enumerable}:by});var Bd=$(Ay=>{"use strict";var ZR=$n(),KR=Xi(),JR=Fd(),$R=qa(),QR=Is(),eC=Bl(),tC=mi(),nC=pd(),Ey=Object.getOwnPropertyDescriptor;Ay.f=ZR?Ey:function(e,t){if(e=QR(e),t=eC(t),nC)try{return Ey(e,t)}catch{}if(tC(e,t))return $R(!KR(JR.f,e,t),e[t])}});var Hd=$((Wz,Cy)=>{"use strict";var kd=$n(),iC=mi(),Ry=Function.prototype,rC=kd&&Object.getOwnPropertyDescriptor,zd=iC(Ry,"name"),sC=zd&&function(){}.name==="something",oC=zd&&(!kd||kd&&rC(Ry,"name").configurable);Cy.exports={EXISTS:zd,PROPER:sC,CONFIGURABLE:oC}});var Gd=$((qz,Py)=>{"use strict";var aC=zt(),cC=Xt(),Vd=Il(),lC=aC(Function.toString);cC(Vd.inspectSource)||(Vd.inspectSource=function(r){return lC(r)});Py.exports=Vd.inspectSource});var Xd=$((Xz,Oy)=>{"use strict";var qd=zt(),uC=Qt(),hC=Xt(),jl=mi(),Wd=$n(),fC=Hd().CONFIGURABLE,dC=Gd(),Ly=Os(),pC=Ly.enforce,mC=Ly.get,Iy=String,Zl=Object.defineProperty,gC=qd("".slice),_C=qd("".replace),vC=qd([].join),yC=Wd&&!uC(function(){return Zl(function(){},"length",{value:8}).length!==8}),xC=String(String).split("String"),SC=Oy.exports=function(r,e,t){gC(Iy(e),0,7)==="Symbol("&&(e="["+_C(Iy(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!jl(r,"name")||fC&&r.name!==e)&&(Wd?Zl(r,"name",{value:e,configurable:!0}):r.name=e),yC&&t&&jl(t,"arity")&&r.length!==t.arity&&Zl(r,"length",{value:t.arity});try{t&&jl(t,"constructor")&&t.constructor?Wd&&Zl(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=pC(r);return jl(n,"source")||(n.source=vC(xC,typeof e=="string"?e:"")),r};Function.prototype.toString=SC(function(){return hC(this)&&mC(this).source||dC(this)},"toString")});var Ds=$((Yz,Dy)=>{"use strict";var MC=Xt(),bC=Ii(),wC=Xd(),TC=Pl();Dy.exports=function(r,e,t,n){n||(n={});var i=n.enumerable,s=n.name!==void 0?n.name:e;if(MC(t)&&wC(t,s,n),n.global)i?r[e]=t:TC(e,t);else{try{n.unsafe?r[e]&&(i=!0):delete r[e]}catch{}i?r[e]=t:bC.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r}});var Kl=$(Ny=>{"use strict";var EC=Ed(),AC=Hl(),RC=AC.concat("length","prototype");Ny.f=Object.getOwnPropertyNames||function(e){return EC(e,RC)}});var Yd=$(Uy=>{"use strict";Uy.f=Object.getOwnPropertySymbols});var By=$((Kz,Fy)=>{"use strict";var CC=yo(),PC=zt(),IC=Kl(),LC=Yd(),OC=Pi(),DC=PC([].concat);Fy.exports=CC("Reflect","ownKeys")||function(e){var t=IC.f(OC(e)),n=LC.f;return n?DC(t,n(e)):t}});var Hy=$((Jz,zy)=>{"use strict";var ky=mi(),NC=By(),UC=Bd(),FC=Ii();zy.exports=function(r,e,t){for(var n=NC(e),i=FC.f,s=UC.f,o=0;o<n.length;o++){var a=n[o];!ky(r,a)&&!(t&&ky(t,a))&&i(r,a,s(e,a))}}});var jd=$(($z,Vy)=>{"use strict";var BC=Qt(),kC=Xt(),zC=/#|\.prototype\./,Ya=function(r,e){var t=VC[HC(r)];return t===WC?!0:t===GC?!1:kC(e)?BC(e):!!e},HC=Ya.normalize=function(r){return String(r).replace(zC,".").toLowerCase()},VC=Ya.data={},GC=Ya.NATIVE="N",WC=Ya.POLYFILL="P";Vy.exports=Ya});var Mo=$((Qz,Gy)=>{"use strict";var Zd=zn(),qC=Bd().f,XC=ql(),YC=Ds(),jC=Pl(),ZC=Hy(),KC=jd();Gy.exports=function(r,e){var t=r.target,n=r.global,i=r.stat,s,o,a,c,l,u;if(n?o=Zd:i?o=Zd[t]||jC(t,{}):o=(Zd[t]||{}).prototype,o)for(a in e){if(l=e[a],r.dontCallGetSet?(u=qC(o,a),c=u&&u.value):c=o[a],s=KC(n?a:t+(i?".":"#")+a,r.forced),!s&&c!==void 0){if(typeof l==typeof c)continue;ZC(l,c)}(r.sham||c&&c.sham)&&XC(l,"sham",!0),YC(o,a,l,r)}}});var qy=$((eH,Wy)=>{"use strict";var JC=Qt();Wy.exports=!JC(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype})});var Jd=$((tH,Yy)=>{"use strict";var $C=mi(),QC=Xt(),eP=_o(),tP=Vl(),nP=qy(),Xy=tP("IE_PROTO"),Kd=Object,iP=Kd.prototype;Yy.exports=nP?Kd.getPrototypeOf:function(r){var e=eP(r);if($C(e,Xy))return e[Xy];var t=e.constructor;return QC(t)&&e instanceof t?t.prototype:e instanceof Kd?iP:null}});var tp=$((nH,Ky)=>{"use strict";var rP=Qt(),sP=Xt(),oP=Hn(),aP=Wa(),jy=Jd(),cP=Ds(),lP=Jn(),uP=Ha(),ep=lP("iterator"),Zy=!1,ur,$d,Qd;[].keys&&(Qd=[].keys(),"next"in Qd?($d=jy(jy(Qd)),$d!==Object.prototype&&(ur=$d)):Zy=!0);var hP=!oP(ur)||rP(function(){var r={};return ur[ep].call(r)!==r});hP?ur={}:uP&&(ur=aP(ur));sP(ur[ep])||cP(ur,ep,function(){return this});Ky.exports={IteratorPrototype:ur,BUGGY_SAFARI_ITERATORS:Zy}});var Jl=$((iH,$y)=>{"use strict";var fP=Ii().f,dP=mi(),pP=Jn(),Jy=pP("toStringTag");$y.exports=function(r,e,t){r&&!t&&(r=r.prototype),r&&!dP(r,Jy)&&fP(r,Jy,{configurable:!0,value:e})}});var ex=$((rH,Qy)=>{"use strict";var mP=tp().IteratorPrototype,gP=Wa(),_P=qa(),vP=Jl(),yP=So(),xP=function(){return this};Qy.exports=function(r,e,t,n){var i=e+" Iterator";return r.prototype=gP(mP,{next:_P(+!n,t)}),vP(r,i,!1,!0),yP[i]=xP,r}});var nx=$((sH,tx)=>{"use strict";var SP=zt(),MP=Va();tx.exports=function(r,e,t){try{return SP(MP(Object.getOwnPropertyDescriptor(r,e)[t]))}catch{}}});var rx=$((oH,ix)=>{"use strict";var bP=Xt(),wP=String,TP=TypeError;ix.exports=function(r){if(typeof r=="object"||bP(r))return r;throw new TP("Can't set "+wP(r)+" as a prototype")}});var np=$((aH,sx)=>{"use strict";var EP=nx(),AP=Pi(),RP=rx();sx.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=EP(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch{}return function(i,s){return AP(i),RP(s),r?t(i,s):i.__proto__=s,i}}():void 0)});var eu=$((cH,mx)=>{"use strict";var CP=Mo(),PP=Xi(),$l=Ha(),dx=Hd(),IP=Xt(),LP=ex(),ox=Jd(),ax=np(),OP=Jl(),DP=ql(),ip=Ds(),NP=Jn(),cx=So(),px=tp(),UP=dx.PROPER,FP=dx.CONFIGURABLE,lx=px.IteratorPrototype,Ql=px.BUGGY_SAFARI_ITERATORS,ja=NP("iterator"),ux="keys",Za="values",hx="entries",fx=function(){return this};mx.exports=function(r,e,t,n,i,s,o){LP(t,e,n);var a=function(p){if(p===i&&f)return f;if(!Ql&&p&&p in u)return u[p];switch(p){case ux:return function(){return new t(this,p)};case Za:return function(){return new t(this,p)};case hx:return function(){return new t(this,p)}}return function(){return new t(this)}},c=e+" Iterator",l=!1,u=r.prototype,h=u[ja]||u["@@iterator"]||i&&u[i],f=!Ql&&h||a(i),d=e==="Array"&&u.entries||h,_,g,m;if(d&&(_=ox(d.call(new r)),_!==Object.prototype&&_.next&&(!$l&&ox(_)!==lx&&(ax?ax(_,lx):IP(_[ja])||ip(_,ja,fx)),OP(_,c,!0,!0),$l&&(cx[c]=fx))),UP&&i===Za&&h&&h.name!==Za&&(!$l&&FP?DP(u,"name",Za):(l=!0,f=function(){return PP(h,this)})),i)if(g={values:a(Za),keys:s?f:a(ux),entries:a(hx)},o)for(m in g)(Ql||l||!(m in u))&&ip(u,m,g[m]);else CP({target:e,proto:!0,forced:Ql||l},g);return(!$l||o)&&u[ja]!==f&&ip(u,ja,f,{name:i}),cx[e]=f,g}});var tu=$((lH,gx)=>{"use strict";gx.exports=function(r,e){return{value:r,done:e}}});var iu=$((uH,Sx)=>{"use strict";var BP=Is(),rp=py(),_x=So(),yx=Os(),kP=Ii().f,zP=eu(),nu=tu(),HP=Ha(),VP=$n(),xx="Array Iterator",GP=yx.set,WP=yx.getterFor(xx);Sx.exports=zP(Array,"Array",function(r,e){GP(this,{type:xx,target:BP(r),index:0,kind:e})},function(){var r=WP(this),e=r.target,t=r.kind,n=r.index++;if(!e||n>=e.length)return r.target=void 0,nu(void 0,!0);switch(t){case"keys":return nu(n,!1);case"values":return nu(e[n],!1)}return nu([n,e[n]],!1)},"values");var vx=_x.Arguments=_x.Array;rp("keys");rp("values");rp("entries");if(!HP&&VP&&vx.name!=="values")try{kP(vx,"name",{value:"values"})}catch{}});var sp=$((hH,Mx)=>{"use strict";var qP=Bl(),XP=Ii(),YP=qa();Mx.exports=function(r,e,t){var n=qP(e);n in r?XP.f(r,n,YP(0,t)):r[n]=t}});var Tx=$((fH,wx)=>{"use strict";var bx=wd(),jP=xo(),ZP=sp(),KP=Array,JP=Math.max;wx.exports=function(r,e,t){for(var n=jP(r),i=bx(e,n),s=bx(t===void 0?n:t,n),o=KP(JP(s-i,0)),a=0;i<s;i++,a++)ZP(o,a,r[i]);return o.length=a,o}});var Cx=$((dH,Rx)=>{"use strict";var $P=Cs(),QP=Is(),Ex=Kl().f,eI=Tx(),Ax=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],tI=function(r){try{return Ex(r)}catch{return eI(Ax)}};Rx.exports.f=function(e){return Ax&&$P(e)==="Window"?tI(e):Ex(QP(e))}});var Ix=$((pH,Px)=>{"use strict";var nI=Qt();Px.exports=nI(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}})});var Dx=$((mH,Ox)=>{"use strict";var iI=Qt(),rI=Hn(),sI=Cs(),Lx=Ix(),ru=Object.isExtensible,oI=iI(function(){ru(1)});Ox.exports=oI||Lx?function(e){return!rI(e)||Lx&&sI(e)==="ArrayBuffer"?!1:ru?ru(e):!0}:ru});var op=$((gH,Nx)=>{"use strict";var aI=Qt();Nx.exports=!aI(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ka=$((_H,Bx)=>{"use strict";var cI=Mo(),lI=zt(),uI=Ga(),hI=Hn(),ap=mi(),fI=Ii().f,Ux=Kl(),dI=Cx(),cp=Dx(),pI=Ll(),mI=op(),Fx=!1,hr=pI("meta"),gI=0,lp=function(r){fI(r,hr,{value:{objectID:"O"+gI++,weakData:{}}})},_I=function(r,e){if(!hI(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!ap(r,hr)){if(!cp(r))return"F";if(!e)return"E";lp(r)}return r[hr].objectID},vI=function(r,e){if(!ap(r,hr)){if(!cp(r))return!0;if(!e)return!1;lp(r)}return r[hr].weakData},yI=function(r){return mI&&Fx&&cp(r)&&!ap(r,hr)&&lp(r),r},xI=function(){SI.enable=function(){},Fx=!0;var r=Ux.f,e=lI([].splice),t={};t[hr]=1,r(t).length&&(Ux.f=function(n){for(var i=r(n),s=0,o=i.length;s<o;s++)if(i[s]===hr){e(i,s,1);break}return i},cI({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:dI.f}))},SI=Bx.exports={enable:xI,fastKey:_I,getWeakData:vI,onFreeze:yI};uI[hr]=!0});var zx=$((vH,kx)=>{"use strict";var MI=Cs(),bI=zt();kx.exports=function(r){if(MI(r)==="Function")return bI(r)}});var Ja=$((yH,Vx)=>{"use strict";var Hx=zx(),wI=Va(),TI=El(),EI=Hx(Hx.bind);Vx.exports=function(r,e){return wI(r),e===void 0?r:TI?EI(r,e):function(){return r.apply(e,arguments)}}});var up=$((xH,Gx)=>{"use strict";var AI=Jn(),RI=So(),CI=AI("iterator"),PI=Array.prototype;Gx.exports=function(r){return r!==void 0&&(RI.Array===r||PI[CI]===r)}});var su=$((SH,qx)=>{"use strict";var II=Jn(),LI=II("toStringTag"),Wx={};Wx[LI]="z";qx.exports=String(Wx)==="[object z]"});var $a=$((MH,Xx)=>{"use strict";var OI=su(),DI=Xt(),ou=Cs(),NI=Jn(),UI=NI("toStringTag"),FI=Object,BI=ou(function(){return arguments}())==="Arguments",kI=function(r,e){try{return r[e]}catch{}};Xx.exports=OI?ou:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=kI(e=FI(r),UI))=="string"?t:BI?ou(e):(n=ou(e))==="Object"&&DI(e.callee)?"Arguments":n}});var au=$((bH,jx)=>{"use strict";var zI=$a(),Yx=Fl(),HI=Ps(),VI=So(),GI=Jn(),WI=GI("iterator");jx.exports=function(r){if(!HI(r))return Yx(r,WI)||Yx(r,"@@iterator")||VI[zI(r)]}});var hp=$((wH,Zx)=>{"use strict";var qI=Xi(),XI=Va(),YI=Pi(),jI=Ul(),ZI=au(),KI=TypeError;Zx.exports=function(r,e){var t=arguments.length<2?ZI(r):e;if(XI(t))return YI(qI(t,r));throw new KI(jI(r)+" is not iterable")}});var fp=$((TH,Jx)=>{"use strict";var JI=Xi(),Kx=Pi(),$I=Fl();Jx.exports=function(r,e,t){var n,i;Kx(r);try{if(n=$I(r,"return"),!n){if(e==="throw")throw t;return t}n=JI(n,r)}catch(s){i=!0,n=s}if(e==="throw")throw t;if(i)throw n;return Kx(n),t}});var lu=$((EH,tS)=>{"use strict";var QI=Ja(),eL=Xi(),tL=Pi(),nL=Ul(),iL=up(),rL=xo(),$x=Nl(),sL=hp(),oL=au(),Qx=fp(),aL=TypeError,cu=function(r,e){this.stopped=r,this.result=e},eS=cu.prototype;tS.exports=function(r,e,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),c=QI(e,n),l,u,h,f,d,_,g,m=function(y){return l&&Qx(l,"normal",y),new cu(!0,y)},p=function(y){return i?(tL(y),a?c(y[0],y[1],m):c(y[0],y[1])):a?c(y,m):c(y)};if(s)l=r.iterator;else if(o)l=r;else{if(u=oL(r),!u)throw new aL(nL(r)+" is not iterable");if(iL(u)){for(h=0,f=rL(r);f>h;h++)if(d=p(r[h]),d&&$x(eS,d))return d;return new cu(!1)}l=sL(r,u)}for(_=s?r.next:l.next;!(g=eL(_,l)).done;){try{d=p(g.value)}catch(y){Qx(l,"throw",y)}if(typeof d=="object"&&d&&$x(eS,d))return d}return new cu(!1)}});var uu=$((AH,nS)=>{"use strict";var cL=Nl(),lL=TypeError;nS.exports=function(r,e){if(cL(e,r))return r;throw new lL("Incorrect invocation")}});var pp=$((RH,oS)=>{"use strict";var uL=Jn(),rS=uL("iterator"),sS=!1;try{iS=0,dp={next:function(){return{done:!!iS++}},return:function(){sS=!0}},dp[rS]=function(){return this},Array.from(dp,function(){throw 2})}catch{}var iS,dp;oS.exports=function(r,e){try{if(!e&&!sS)return!1}catch{return!1}var t=!1;try{var n={};n[rS]=function(){return{next:function(){return{done:t=!0}}}},r(n)}catch{}return t}});var lS=$((CH,cS)=>{"use strict";var hL=Xt(),fL=Hn(),aS=np();cS.exports=function(r,e,t){var n,i;return aS&&hL(n=e.constructor)&&n!==t&&fL(i=n.prototype)&&i!==t.prototype&&aS(r,i),r}});var hu=$((PH,hS)=>{"use strict";var dL=Mo(),pL=zn(),mL=zt(),uS=jd(),gL=Ds(),_L=Ka(),vL=lu(),yL=uu(),xL=Xt(),SL=Ps(),mp=Hn(),gp=Qt(),ML=pp(),bL=Jl(),wL=lS();hS.exports=function(r,e,t){var n=r.indexOf("Map")!==-1,i=r.indexOf("Weak")!==-1,s=n?"set":"add",o=pL[r],a=o&&o.prototype,c=o,l={},u=function(p){var y=mL(a[p]);gL(a,p,p==="add"?function(S){return y(this,S===0?0:S),this}:p==="delete"?function(v){return i&&!mp(v)?!1:y(this,v===0?0:v)}:p==="get"?function(S){return i&&!mp(S)?void 0:y(this,S===0?0:S)}:p==="has"?function(S){return i&&!mp(S)?!1:y(this,S===0?0:S)}:function(S,M){return y(this,S===0?0:S,M),this})},h=uS(r,!xL(o)||!(i||a.forEach&&!gp(function(){new o().entries().next()})));if(h)c=t.getConstructor(e,r,n,s),_L.enable();else if(uS(r,!0)){var f=new c,d=f[s](i?{}:-0,1)!==f,_=gp(function(){f.has(1)}),g=ML(function(p){new o(p)}),m=!i&&gp(function(){for(var p=new o,y=5;y--;)p[s](y,y);return!p.has(-0)});g||(c=e(function(p,y){yL(p,a);var v=wL(new o,p,c);return SL(y)||vL(y,v[s],{that:v,AS_ENTRIES:n}),v}),c.prototype=a,a.constructor=c),(_||m)&&(u("delete"),u("has"),n&&u("get")),(m||d)&&u(s),i&&a.clear&&delete a.clear}return l[r]=c,dL({global:!0,constructor:!0,forced:c!==o},l),bL(c,r),i||t.setStrong(c,r,n),c}});var _p=$((IH,dS)=>{"use strict";var fS=Xd(),TL=Ii();dS.exports=function(r,e,t){return t.get&&fS(t.get,e,{getter:!0}),t.set&&fS(t.set,e,{setter:!0}),TL.f(r,e,t)}});var fu=$((LH,pS)=>{"use strict";var EL=Ds();pS.exports=function(r,e,t){for(var n in e)EL(r,n,e[n],t);return r}});var _S=$((OH,gS)=>{"use strict";var AL=yo(),RL=_p(),CL=Jn(),PL=$n(),mS=CL("species");gS.exports=function(r){var e=AL(r);PL&&e&&!e[mS]&&RL(e,mS,{configurable:!0,get:function(){return this}})}});var yp=$((DH,MS)=>{"use strict";var IL=Wa(),LL=_p(),vS=fu(),OL=Ja(),DL=uu(),NL=Ps(),UL=lu(),FL=eu(),du=tu(),BL=_S(),Qa=$n(),yS=Ka().fastKey,SS=Os(),xS=SS.set,vp=SS.getterFor;MS.exports={getConstructor:function(r,e,t,n){var i=r(function(l,u){DL(l,s),xS(l,{type:e,index:IL(null),first:void 0,last:void 0,size:0}),Qa||(l.size=0),NL(u)||UL(u,l[n],{that:l,AS_ENTRIES:t})}),s=i.prototype,o=vp(e),a=function(l,u,h){var f=o(l),d=c(l,u),_,g;return d?d.value=h:(f.last=d={index:g=yS(u,!0),key:u,value:h,previous:_=f.last,next:void 0,removed:!1},f.first||(f.first=d),_&&(_.next=d),Qa?f.size++:l.size++,g!=="F"&&(f.index[g]=d)),l},c=function(l,u){var h=o(l),f=yS(u),d;if(f!=="F")return h.index[f];for(d=h.first;d;d=d.next)if(d.key===u)return d};return vS(s,{clear:function(){for(var u=this,h=o(u),f=h.index,d=h.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=void 0),delete f[d.index],d=d.next;h.first=h.last=void 0,Qa?h.size=0:u.size=0},delete:function(l){var u=this,h=o(u),f=c(u,l);if(f){var d=f.next,_=f.previous;delete h.index[f.index],f.removed=!0,_&&(_.next=d),d&&(d.previous=_),h.first===f&&(h.first=d),h.last===f&&(h.last=_),Qa?h.size--:u.size--}return!!f},forEach:function(u){for(var h=o(this),f=OL(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:h.first;)for(f(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!c(this,u)}}),vS(s,t?{get:function(u){var h=c(this,u);return h&&h.value},set:function(u,h){return a(this,u===0?0:u,h)}}:{add:function(u){return a(this,u=u===0?0:u,u)}}),Qa&&LL(s,"size",{configurable:!0,get:function(){return o(this).size}}),i},setStrong:function(r,e,t){var n=e+" Iterator",i=vp(e),s=vp(n);FL(r,e,function(o,a){xS(this,{type:n,target:o,state:i(o),kind:a,last:void 0})},function(){for(var o=s(this),a=o.kind,c=o.last;c&&c.removed;)c=c.previous;return!o.target||!(o.last=c=c?c.next:o.state.first)?(o.target=void 0,du(void 0,!0)):du(a==="keys"?c.key:a==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),BL(e)}}});var bS=$(()=>{"use strict";var kL=hu(),zL=yp();kL("Map",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},zL)});var wS=$(()=>{"use strict";bS()});var ES=$((kH,TS)=>{"use strict";var HL=su(),VL=$a();TS.exports=HL?{}.toString:function(){return"[object "+VL(this)+"]"}});var pu=$(()=>{"use strict";var GL=su(),WL=Ds(),qL=ES();GL||WL(Object.prototype,"toString",qL,{unsafe:!0})});var xp=$((VH,AS)=>{"use strict";var XL=$a(),YL=String;AS.exports=function(r){if(XL(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return YL(r)}});var IS=$((GH,PS)=>{"use strict";var Sp=zt(),jL=zl(),ZL=xp(),KL=Rl(),JL=Sp("".charAt),RS=Sp("".charCodeAt),$L=Sp("".slice),CS=function(r){return function(e,t){var n=ZL(KL(e)),i=jL(t),s=n.length,o,a;return i<0||i>=s?r?"":void 0:(o=RS(n,i),o<55296||o>56319||i+1===s||(a=RS(n,i+1))<56320||a>57343?r?JL(n,i):o:r?$L(n,i,i+2):(o-55296<<10)+(a-56320)+65536)}};PS.exports={codeAt:CS(!1),charAt:CS(!0)}});var mu=$(()=>{"use strict";var QL=IS().charAt,e2=xp(),OS=Os(),t2=eu(),LS=tu(),DS="String Iterator",n2=OS.set,i2=OS.getterFor(DS);t2(String,"String",function(r){n2(this,{type:DS,string:e2(r),index:0})},function(){var e=i2(this),t=e.string,n=e.index,i;return n>=t.length?LS(void 0,!0):(i=QL(t,n),e.index+=i.length,LS(i,!1))})});var bo=$((XH,NS)=>{"use strict";var r2=zn();NS.exports=r2});var FS=$((YH,US)=>{"use strict";iu();wS();pu();mu();var s2=bo();US.exports=s2.Map});var BS=$(()=>{"use strict";var o2=hu(),a2=yp();o2("Set",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},a2)});var kS=$(()=>{"use strict";BS()});var HS=$(($H,zS)=>{"use strict";iu();pu();kS();mu();var c2=bo();zS.exports=c2.Set});var GS=$((QH,VS)=>{"use strict";var l2=Cs();VS.exports=Array.isArray||function(e){return l2(e)==="Array"}});var bp=$((eV,jS)=>{"use strict";var u2=zt(),h2=Qt(),WS=Xt(),f2=$a(),d2=yo(),p2=Gd(),qS=function(){},m2=[],XS=d2("Reflect","construct"),Mp=/^\s*(?:class|function)\b/,g2=u2(Mp.exec),_2=!Mp.test(qS),ec=function(e){if(!WS(e))return!1;try{return XS(qS,m2,e),!0}catch{return!1}},YS=function(e){if(!WS(e))return!1;switch(f2(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _2||!!g2(Mp,p2(e))}catch{return!0}};YS.sham=!0;jS.exports=!XS||h2(function(){var r;return ec(ec.call)||!ec(Object)||!ec(function(){r=!0})||r})?YS:ec});var $S=$((tV,JS)=>{"use strict";var ZS=GS(),v2=bp(),y2=Hn(),x2=Jn(),S2=x2("species"),KS=Array;JS.exports=function(r){var e;return ZS(r)&&(e=r.constructor,v2(e)&&(e===KS||ZS(e.prototype))?e=void 0:y2(e)&&(e=e[S2],e===null&&(e=void 0))),e===void 0?KS:e}});var eM=$((nV,QS)=>{"use strict";var M2=$S();QS.exports=function(r,e){return new(M2(r))(e===0?0:e)}});var iM=$((iV,nM)=>{"use strict";var b2=Ja(),w2=zt(),T2=Al(),E2=_o(),A2=xo(),R2=eM(),tM=w2([].push),Hr=function(r){var e=r===1,t=r===2,n=r===3,i=r===4,s=r===6,o=r===7,a=r===5||s;return function(c,l,u,h){for(var f=E2(c),d=T2(f),_=b2(l,u),g=A2(d),m=0,p=h||R2,y=e?p(c,g):t||o?p(c,0):void 0,v,S;g>m;m++)if((a||m in d)&&(v=d[m],S=_(v,m,f),r))if(e)y[m]=S;else if(S)switch(r){case 3:return!0;case 5:return v;case 6:return m;case 2:tM(y,v)}else switch(r){case 4:return!1;case 7:tM(y,v)}return s?-1:n||i?i:y}};nM.exports={forEach:Hr(0),map:Hr(1),filter:Hr(2),some:Hr(3),every:Hr(4),find:Hr(5),findIndex:Hr(6),filterReject:Hr(7)}});var uM=$((rV,lM)=>{"use strict";var C2=zt(),rM=fu(),gu=Ka().getWeakData,P2=uu(),I2=Pi(),L2=Ps(),wp=Hn(),O2=lu(),oM=iM(),sM=mi(),aM=Os(),D2=aM.set,N2=aM.getterFor,U2=oM.find,F2=oM.findIndex,B2=C2([].splice),k2=0,_u=function(r){return r.frozen||(r.frozen=new cM)},cM=function(){this.entries=[]},Tp=function(r,e){return U2(r.entries,function(t){return t[0]===e})};cM.prototype={get:function(r){var e=Tp(this,r);if(e)return e[1]},has:function(r){return!!Tp(this,r)},set:function(r,e){var t=Tp(this,r);t?t[1]=e:this.entries.push([r,e])},delete:function(r){var e=F2(this.entries,function(t){return t[0]===r});return~e&&B2(this.entries,e,1),!!~e}};lM.exports={getConstructor:function(r,e,t,n){var i=r(function(c,l){P2(c,s),D2(c,{type:e,id:k2++,frozen:void 0}),L2(l)||O2(l,c[n],{that:c,AS_ENTRIES:t})}),s=i.prototype,o=N2(e),a=function(c,l,u){var h=o(c),f=gu(I2(l),!0);return f===!0?_u(h).set(l,u):f[h.id]=u,c};return rM(s,{delete:function(c){var l=o(this);if(!wp(c))return!1;var u=gu(c);return u===!0?_u(l).delete(c):u&&sM(u,l.id)&&delete u[l.id]},has:function(l){var u=o(this);if(!wp(l))return!1;var h=gu(l);return h===!0?_u(u).has(l):h&&sM(h,u.id)}}),rM(s,t?{get:function(l){var u=o(this);if(wp(l)){var h=gu(l);return h===!0?_u(u).get(l):h?h[u.id]:void 0}},set:function(l,u){return a(this,l,u)}}:{add:function(l){return a(this,l,!0)}}),i}}});var xM=$(()=>{"use strict";var z2=op(),hM=zn(),Su=zt(),fM=fu(),H2=Ka(),V2=hu(),mM=uM(),vu=Hn(),yu=Os().enforce,G2=Qt(),W2=Od(),ic=Object,q2=Array.isArray,xu=ic.isExtensible,gM=ic.isFrozen,X2=ic.isSealed,_M=ic.freeze,Y2=ic.seal,dM={},pM={},j2=!hM.ActiveXObject&&"ActiveXObject"in hM,tc,vM=function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},yM=V2("WeakMap",vM,mM),wo=yM.prototype,Mu=Su(wo.set),Z2=function(){return z2&&G2(function(){var r=_M([]);return Mu(new yM,r,1),!gM(r)})};W2&&(j2?(tc=mM.getConstructor(vM,"WeakMap",!0),H2.enable(),Ep=Su(wo.delete),nc=Su(wo.has),Ap=Su(wo.get),fM(wo,{delete:function(r){if(vu(r)&&!xu(r)){var e=yu(this);return e.frozen||(e.frozen=new tc),Ep(this,r)||e.frozen.delete(r)}return Ep(this,r)},has:function(e){if(vu(e)&&!xu(e)){var t=yu(this);return t.frozen||(t.frozen=new tc),nc(this,e)||t.frozen.has(e)}return nc(this,e)},get:function(e){if(vu(e)&&!xu(e)){var t=yu(this);return t.frozen||(t.frozen=new tc),nc(this,e)?Ap(this,e):t.frozen.get(e)}return Ap(this,e)},set:function(e,t){if(vu(e)&&!xu(e)){var n=yu(this);n.frozen||(n.frozen=new tc),nc(this,e)?Mu(this,e,t):n.frozen.set(e,t)}else Mu(this,e,t);return this}})):Z2()&&fM(wo,{set:function(e,t){var n;return q2(e)&&(gM(e)?n=dM:X2(e)&&(n=pM)),Mu(this,e,t),n===dM&&_M(e),n===pM&&Y2(e),this}}));var Ep,nc,Ap});var SM=$(()=>{"use strict";xM()});var bM=$((lV,MM)=>{"use strict";iu();pu();SM();var K2=bo();MM.exports=K2.WeakMap});var TM=$((uV,wM)=>{"use strict";var J2=Pi(),$2=fp();wM.exports=function(r,e,t,n){try{return n?e(J2(t)[0],t[1]):e(t)}catch(i){$2(r,"throw",i)}}});var CM=$((hV,RM)=>{"use strict";var Q2=Ja(),eO=Xi(),tO=_o(),nO=TM(),iO=up(),rO=bp(),sO=xo(),EM=sp(),oO=hp(),aO=au(),AM=Array;RM.exports=function(e){var t=tO(e),n=rO(this),i=arguments.length,s=i>1?arguments[1]:void 0,o=s!==void 0;o&&(s=Q2(s,i>2?arguments[2]:void 0));var a=aO(t),c=0,l,u,h,f,d,_;if(a&&!(this===AM&&iO(a)))for(f=oO(t,a),d=f.next,u=n?new this:[];!(h=eO(d,f)).done;c++)_=o?nO(f,s,[h.value,c],!0):h.value,EM(u,c,_);else for(l=sO(t),u=n?new this(l):AM(l);l>c;c++)_=o?s(t[c],c):t[c],EM(u,c,_);return u.length=c,u}});var PM=$(()=>{"use strict";var cO=Mo(),lO=CM(),uO=pp(),hO=!uO(function(r){Array.from(r)});cO({target:"Array",stat:!0,forced:hO},{from:lO})});var LM=$((pV,IM)=>{"use strict";mu();PM();var fO=bo();IM.exports=fO.Array.from});var UM=$((mV,NM)=>{"use strict";var OM=$n(),dO=zt(),pO=Xi(),mO=Qt(),Rp=Ad(),gO=Yd(),_O=Fd(),vO=_o(),yO=Al(),To=Object.assign,DM=Object.defineProperty,xO=dO([].concat);NM.exports=!To||mO(function(){if(OM&&To({b:1},To(DM({},"a",{enumerable:!0,get:function(){DM(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var r={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return r[t]=7,n.split("").forEach(function(i){e[i]=i}),To({},r)[t]!==7||Rp(To({},e)).join("")!==n})?function(e,t){for(var n=vO(e),i=arguments.length,s=1,o=gO.f,a=_O.f;i>s;)for(var c=yO(arguments[s++]),l=o?xO(Rp(c),o(c)):Rp(c),u=l.length,h=0,f;u>h;)f=l[h++],(!OM||pO(a,c,f))&&(n[f]=c[f]);return n}:To});var BM=$(()=>{"use strict";var SO=Mo(),FM=UM();SO({target:"Object",stat:!0,arity:2,forced:Object.assign!==FM},{assign:FM})});var zM=$((vV,kM)=>{"use strict";BM();var MO=bo();kM.exports=MO.Object.assign});function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Js={duration:.5,overwrite:!1,delay:0},nf,hn,It,ci=1e8,vt=1/ci,qh=Math.PI*2,PT=qh/4,IT=0,Bg=Math.sqrt,LT=Math.cos,OT=Math.sin,qt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},Yc=function(e){return typeof e=="undefined"},Hi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},rf=function(){return typeof window!="undefined"},Fc=function(e){return Lt(e)||qt(e)},kg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Xh=/(?:-?\.?\d|\.)+/gi,sf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,of=/[+-]=-?[.\d]+/,zg=/[^,'"\[\]\s]+/gi,DT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,ai,Yh,af,Xn={},Hc={},Hg,Vg=function(e){return(Hc=fs(e,Xn))&&dn},jc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vc=function(e,t){return!t&&console.warn(e)},Gg=function(e,t){return e&&(Xn[e]=t)&&Hc&&(Hc[e]=t)||Xn},ya=function(){return 0},NT={suppressEvents:!0,isStart:!0,kill:!1},Bc={suppressEvents:!0,kill:!1},UT={suppressEvents:!0},cf={},Ir=[],jh={},Wg,Nn={},kh={},Pg=30,kc=[],lf="",uf=function(e){var t=e[0],n,i;if(Hi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=kc.length;i--&&!kc[i].targetTest(t););n=kc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new df(e[i],n)))||e.splice(i,1);return e},Lr=function(e){return e._gsap||uf(li(e))[0]._gsap},hf=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():Yc(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},nn=function(e){return Math.round(e*1e7)/1e7||0},ps=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},FT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Gc=function(){var e=Ir.length,t=Ir.slice(0),n,i;for(jh={},Ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qg=function(e,t,n,i){Ir.length&&!hn&&Gc(),e.render(t,n,i||hn&&t<0&&(e._initted||e._startAt)),Ir.length&&!hn&&Gc()},Xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zg).length<2?t:qt(e)?e.trim():e},Yg=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},BT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},fs=function(e,t){for(var n in t)e[n]=t[n];return e},Ig=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Wc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ga=function(e){var t=e.parent||Rt,n=e.keyframes?BT(fn(e.keyframes)):hi;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Zc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zh=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},HT=function r(e){return!e||e._ts&&r(e.parent)},Lg=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kc=function(e){return e._end=nn(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Jc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=nn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kc(e),n._dirty||ls(n,e)),e},Zg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qc(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},zi=function(e,t,n,i){return t.parent&&Or(t),t._start=nn((tr(n)?n:n||e!==Rt?oi(e,n,t):e._time)+t._delay),t._end=nn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jg(e,t,"_first","_last",e._sort?"_start":0),Kh(t)||(e._recent=t),i||Zg(e,t),e._ts<0&&Jc(e,e._tTime),e},Kg=function(e,t){return(Xn.ScrollTrigger||jc("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Jg=function(e,t,n,i,s){if(gf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wg!==Un.frame)return Ir.push(e),e._lazy=[s,i],1},VT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Kh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},GT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&VT(e)&&!(!e._initted&&Kh(e))||(e._ts<0||e._dp._ts<0)&&!Kh(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Ma(0,e._tDur,t),u=$s(c,a),e._yoyo&&u&1&&(o=1-o),u!==$s(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Jg(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Zh(e,t,n,!0),e._onUpdate&&!n&&ui(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!n&&!hn&&(ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},WT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qs=function(e,t,n,i){var s=e._repeat,o=nn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:nn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Jc(e,e._tTime=e._tDur*a),e.parent&&Kc(e),n||ls(e.parent,e),e},Og=function(e){return e instanceof un?ls(e):Qs(e,e._dur)},qT={_start:0,endTime:ya,totalDuration:ya},oi=function r(e,t,n){var i=e.labels,s=e._recent||qT,o=e.duration()>=ci?s.endTime(!1):e._dur,a,c,l;return qt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},_a=function(e,t,n){var i=tr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Fn(c.vars.inherit)&&c.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},Dr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!qt(e)||!(t=DT.exec(e))?"":t[1]},XT=function(e,t,n){return Dr(n,function(i){return Ma(e,t,i)})},Jh=[].slice,$g=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==ai},YT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return qt(i)&&!t||$g(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return It&&!t&&It.selector?It.selector(e):qt(e)&&!n&&(Yh||!eo())?Jh.call((t||af).querySelectorAll(e),0):fn(e)?YT(e,n):$g(e)?Jh.call(e,0):e?[e]:[]},$h=function(e){return e=li(e)[0]||Vc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Vc("Invalid scope")||af.createElement("div"):e)}},Qg=function(e){return e.sort(function(){return .5-Math.random()})},e_=function(e){if(Lt(e))return e;var t=Hi(e)?e:{each:e},n=us(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return qt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,y,v,S,M,R,w,I,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ci])[1],!x){for(w=-ci;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x--}for(m=o[g]=[],p=c?Math.min(x,g)*u-.5:i%x,y=x===ci?0:c?g*h/x-.5:i/x|0,w=0,I=ci,R=0;R<g;R++)v=R%x-p,S=y-(R/x|0),m[R]=M=l?Math.abs(l==="y"?S:v):Bg(v*v+S*S),M>w&&(w=M),M<I&&(I=M);i==="random"&&Qg(m),m.max=w-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=rn(t.amount||t.each)||0,n=n&&g<0?l_(n):n}return g=(m[f]-m.min)/m.max||0,nn(m.b+(n?n(g):g)*m.v)+m.u}},Qh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=nn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(tr(n)?0:rn(n))}},t_=function(e,t){var n=fn(e),i,s;return!n&&Hi(e)&&(i=n=e.radius||ci,e.values?(e=li(e.values),(s=!tr(e[0]))&&(i*=i)):e=Qh(e.increment)),Dr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=ci,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:o,s||u===o||tr(o)?u:u+rn(o)}:Qh(e))},n_=function(e,t,n,i){return Dr(fn(e)?!t:n===!0?!!(n=0):!i,function(){return fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},ZT=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},KT=function(e,t,n){return r_(e,t,0,1,n)},i_=function(e,t,n){return Dr(n,function(i){return e[~~t(i)]})},JT=function r(e,t,n){var i=t-e;return fn(e)?i_(e,r(0,e.length),t):Dr(n,function(s){return(i+(s-e)%i)%i+e})},$T=function r(e,t,n){var i=t-e,s=i*2;return fn(e)?i_(e,r(0,e.length-1),t):Dr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},to=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?zg:Xh),n+=e.substr(t,i-t)+n_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},r_=function(e,t,n,i,s){var o=t-e,a=i-n;return Dr(s,function(c){return n+((c-e)/o*a||0)})},QT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=qt(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=fs(fn(e)?[]:{},e));if(!u){for(c in t)pf.call(a,e,c,"get",t[c]);s=function(_){return yf(_,a)||(o?e.p:e)}}}return Dr(n,s)},Dg=function(e,t,n){var i=e.labels,s=ci,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},ui=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ir.length&&Gc(),a&&(It=a),u=c?s.apply(l,c):s.call(l),It=o,u},pa=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ui(e,"onInterrupt"),e},Ks,s_=[],o_=function(e){if(rf()&&e){e=!e.name&&e.default||e;var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ya,render:yf,add:pf,kill:mE,modifier:pE,rawVars:0},o={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(eo(),e!==i){if(Nn[t])return;hi(i,hi(Wc(e,s),o)),fs(i.prototype,fs(s,Wc(e,o))),Nn[i.prop=t]=i,e.targetTest&&(kc.push(i),cf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gg(t,i),e.register&&e.register(dn,i,wn)}else e&&s_.push(e)},_t=255,ma={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},zh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},a_=function(e,t,n){var i=e?tr(e)?[e>>16,e>>8&_t,e&_t]:0:ma.black,s,o,a,c,l,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Xh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=zh(c+1/3,s,o),i[1]=zh(c,s,o),i[2]=zh(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(sf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xh)||ma.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},c_=function(e){var t=[],n=[],i=-1;return e.split(er).forEach(function(s){var o=s.match(ds)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ng=function(e,t,n){var i="",s=(e+i).match(er),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=a_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=c_(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(er,"1").split(ds),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(er),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),eE=/hsl[a]?\(/,ff=function(e){var t=e.join(" "),n;if(er.lastIndex=0,er.test(t))return n=eE.test(t),e[1]=Ng(e[1],n),e[0]=Ng(e[0],n,c_(e[1])),!0},xa,Un=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,_=function g(m){var p=r()-i,y=m===!0,v,S,M,R;if(p>e&&(n+=p-t),i+=p,M=i-n,v=M-o,(v>0||y)&&(R=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=s?4:s-v),S=1),y||(c=l(g)),S)for(d=0;d<a.length;d++)a[d](M,f,R,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Hg&&(!Yh&&rf()&&(ai=Yh=window,af=ai.document||{},Xn.gsap=dn,(ai.gsapVersions||(ai.gsapVersions=[])).push(dn.version),Vg(Hc||ai.GreenSockGlobals||!ai.gsap&&ai||{}),u=ai.requestAnimationFrame,s_.forEach(o_)),c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},xa=1,_(2))},sleep:function(){(u?ai.cancelAnimationFrame:clearTimeout)(c),xa=0,l=ya},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var v=p?function(S,M,R,w){m(S,M,R,w),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),eo(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),eo=function(){return!xa&&Un.wake()},ot={},tE=/^[\d.\-M][\d.\-,\s]/,nE=/["']/g,iE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(nE,"").trim():+l,i=c.substr(a+1).trim();return t},rE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sE=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iE(t[1])]:rE(e).split(",").map(Xg)):ot._CE&&tE.test(e)?ot._CE("",e):n},l_=function(e){return function(t){return 1-e(1-t)}},u_=function r(e,t){for(var n=e._first,i;n;)n instanceof un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},us=function(e,t){return e&&(Lt(e)?e:ot[e]||sE(e))||t},ms=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){ot[a]=Xn[a]=s,ot[o=a.toLowerCase()]=n;for(var c in s)ot[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ot[a+"."+c]=s[c]}),s},h_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/qh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*OT((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:h_(a);return s=qh/s,c.config=function(l,u){return r(e,l,u)},c},Vh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:h_(n);return i.config=function(s){return r(e,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ms(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;ms("Elastic",Hh("in"),Hh("out"),Hh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ms("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ms("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ms("Circ",function(r){return-(Bg(1-r*r)-1)});ms("Sine",function(r){return r===1?1:-LT(r*PT)+1});ms("Back",Vh("in"),Vh("out"),Vh());ot.SteppedEase=ot.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*Ma(0,o,a)|0)+s)*n}}};Js.ease=ot["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return lf+=r+","+r+"Params,"});var df=function(e,t){this.id=IT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hf,this.set=t?t.getSetter:$c},Sa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),xa||Un.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jc(this,n),!s._dp||s.parent||Zg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?qc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this._tDur,i),!0),Kc(this),zT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=UT);var i=hn;return hn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Og(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Og(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Lt(n)?n:Yg,a=function(){var l=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){pa(this)},r}();hi(Sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var un=function(r){Fg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Rt&&zi(n.parent||Rt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kg(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _a(0,arguments,this),this},t.from=function(i,s,o){return _a(1,arguments,this),this},t.fromTo=function(i,s,o,a){return _a(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,oi(this,o),1),this},t.call=function(i,s,o){return zi(this,Ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Ut(i,o,oi(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,ga(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,ga(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:nn(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,g,m,p,y,v,S,M,R,w;if(this!==Rt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,v=this._ts,p=!v,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=nn(u%m),u===c?(g=this._repeat,f=l):(g=~~(u/m),g&&g===u/m&&(f=l,g--),f>l&&(f=l)),M=$s(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),R&&g&1&&(f=l-f,w=1),g!==M&&!this._lock){var I=R&&M&1,x=I===(R&&g&1);if(g<M&&(I=!I),a=I?0:u%l?l:u,this._lock=1,this.render(a||(w?0:nn(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=I?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;u_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=WT(this,nn(a),nn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(ui(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-vt);break}}d=_}else{d=this._last;for(var b=i<0?i:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||hn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=b?-vt:vt);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-vt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Kc(this),this.render(i,s,o);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Or(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(ui(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(tr(s)||(s=oi(this,s,i)),!(i instanceof Sa)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(qt(i))return this.addLabel(i,s);if(Lt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ut?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(Zc(this,i),i===this._recent&&(this._recent=this._last),ls(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ut.delayedCall(0,s||ya,o);return a.data="isPause",this._hasPause=1,zi(this,a,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Pr!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=li(i),c=this._first,l=tr(s),u;c;)c instanceof Ut?FT(c._targets,a)&&(l?(!Pr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=oi(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,_=Ut.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&Qs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,hi({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dg(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dg(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return ls(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ls(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=ci,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Qs(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(qg(Rt,qc(i,Rt)),Wg=Un.frame),Un.frame>=Pg){Pg+=Bn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Bn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(Sa);hi(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var oE=function(e,t,n,i,s,o,a){var c=new wn(this._pt,e,t,0,1,vf,null,s),l=0,u=0,h,f,d,_,g,m,p,y;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=to(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Bh)||[];h=Bh.exec(i);)_=h[0],g=i.substring(l,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ps(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=Bh.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(of.test(i)||p)&&(c.e=0),this._pt=c,c},pf=function(e,t,n,i,s,o,a,c,l,u){Lt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Lt(h)?l?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Lt(h)?l?hE:p_:_f,_;if(qt(i)&&(~i.indexOf("random(")&&(i=to(i)),i.charAt(1)==="="&&(_=ps(f,i)+(rn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||ef)return!isNaN(f*i)&&i!==""?(_=new wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?dE:m_,0,d),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&jc(t,i),oE.call(this,e,t,f,i,d,c||Bn.stringFilter,l))},aE=function(e,t,n,i,s){if(Lt(e)&&(e=va(e,s,t,n,i)),!Hi(e)||e.style&&e.nodeType||fn(e)||kg(e))return qt(e)?va(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=va(e[a],s,t,n,i);return o},mf=function(e,t,n,i,s,o){var a,c,l,u;if(Nn[e]&&(a=new Nn[e]).init(s,a.rawVars?t[e]:aE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ks))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Pr,ef,gf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,y=e._targets,v=e.parent,S=v&&v.data==="nested"?v.vars.targets:y,M=e._overwrite==="auto"&&!nf,R=e.timeline,w,I,x,b,G,W,D,U,F,Q,B,q,N;if(R&&(!_||!s)&&(s="none"),e._ease=us(s,Js.ease),e._yEase=d?l_(us(d===!0?s:d,Js.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!R&&!!i.runBackwards,!R||_&&!i.stagger){if(U=y[0]?Lr(y[0]).harness:0,q=U&&i[U.prop],w=Wc(i,cf),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!g?p.render(-1,!0):p.revert(f&&m?Bc:NT),p._lazy=0),o){if(Or(e._startAt=Ut.set(y,hi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&Fn(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!g)&&e._startAt.revert(Bc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(a=!1),x=hi({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Fn(c),immediateRender:a,stagger:0,parent:v},w),q&&(x[U.prop]=q),Or(e._startAt=Ut.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Bc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Fn(c)||c&&!m,I=0;I<y.length;I++){if(G=y[I],D=G._gsap||uf(y)[I]._gsap,e._ptLookup[I]=Q={},jh[D.id]&&Ir.length&&Gc(),B=S===y?I:S.indexOf(G),U&&(F=new U).init(G,q||w,e,B,S)!==!1&&(e._pt=b=new wn(e._pt,G,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(A){Q[A]=b}),F.priority&&(W=1)),!U||q)for(x in w)Nn[x]&&(F=mf(x,w,e,B,G,S))?F.priority&&(W=1):Q[x]=b=pf.call(e,G,x,"get",w[x],B,S,0,i.stringFilter);e._op&&e._op[I]&&e.kill(G,e._op[I]),M&&e._pt&&(Pr=e,Rt.killTweensOf(G,Q,e.globalTime(t)),N=!e.parent,Pr=0),e._pt&&c&&(jh[D.id]=1)}W&&xf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!N,_&&t<=0&&R.render(ci,!0,!0)},cE=function(e,t,n,i,s,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return ef=1,e.vars[t]="+=0",gf(e,a),ef=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!s?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=Ot(n)+rn(u.e)),u.b&&(u.b=l.s+rn(u.b))},lE=function(e,t){var n=e[0]?Lr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=fs({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},uE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(fn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},va=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):qt(e)&&~e.indexOf("random(")?to(e):e},f_=lf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",d_={};bn(f_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return d_[r]=1});var Ut=function(r){Fg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ga(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,y=i.parent||Rt,v=(fn(n)||kg(n)?tr(n[0]):"length"in i)?[n]:li(n),S,M,R,w,I,x,b,G;if(a._targets=v.length?uf(v):Vc("GSAP target "+n+" not found. https://greensock.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Fc(l)||Fc(u)){if(i=a.vars,S=a.timeline=new un({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Qi(a),S._start=0,f||Fc(l)||Fc(u)){if(w=v.length,b=f&&e_(f),Hi(f))for(I in f)~f_.indexOf(I)&&(G||(G={}),G[I]=f[I]);for(M=0;M<w;M++)R=Wc(i,d_),R.stagger=0,p&&(R.yoyoEase=p),G&&fs(R,G),x=v[M],R.duration=+va(l,Qi(a),M,x,v),R.delay=(+va(u,Qi(a),M,x,v)||0)-a._delay,!f&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),S.to(x,R,b?b(M,x,v):0),S._ease=ot.none;S.duration()?l=u=0:a.timeline=0}else if(_){ga(hi(S.vars.defaults,{ease:"none"})),S._ease=us(_.ease||i.ease||"none");var W=0,D,U,F;if(fn(_))_.forEach(function(Q){return S.to(v,Q,">")}),S.duration();else{R={};for(I in _)I==="ease"||I==="easeEach"||uE(I,_[I],R,_.easeEach);for(I in R)for(D=R[I].sort(function(Q,B){return Q.t-B.t}),W=0,M=0;M<D.length;M++)U=D[M],F={ease:U.e,duration:(U.t-(M?D[M-1].t:0))/100*l},F[I]=U.v,S.to(v,F,W),W+=F.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return d===!0&&!nf&&(Pr=Qi(a),Rt.killTweensOf(v),Pr=0),zi(y,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===nn(y._time)&&Fn(h)&&HT(Qi(a))&&y.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&Kg(Qi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-vt&&!u?c:i<vt?0:i,f,d,_,g,m,p,y,v,S;if(!l)GT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=nn(h%g),h===c?(_=this._repeat,f=l):(_=~~(h/g),_&&_===h/g&&(f=l,_--),f>l&&(f=l)),p=this._yoyo&&_&1,p&&(S=this._yEase,f=l-f),m=$s(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&u_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(nn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Jg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/l),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!_&&(ui(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!f&&p?-vt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Zh(this,i,s,o),ui(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Or(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ui(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){xa||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||gf(this,c),l=this._ease(c/this._dur),cE(this,i,s,o,a,l,c)?this.resetTo(i,s,o,a):(Jc(this,0),this.parent||jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Pr&&Pr.vars.overwrite!==!0)._first||pa(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?li(i):a,l=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&kT(a,c))return s==="all"&&(this._pt=0),pa(this);for(h=this._op=this._op||[],s!=="all"&&(qt(s)&&(g={},bn(s,function(y){return g[y]=1}),s=g),s=lE(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Zc(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _a(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return _a(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(Sa);hi(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new un,t=Jh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var _f=function(e,t,n){return e[t]=n},p_=function(e,t,n){return e[t](n)},hE=function(e,t,n,i){return e[t](i.fp,n)},fE=function(e,t,n){return e.setAttribute(t,n)},$c=function(e,t){return Lt(e[t])?p_:Yc(e[t])&&e.setAttribute?fE:_f},m_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},yf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},mE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Zc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},xf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||m_,this.d=c||this,this.set=l||_f,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gE,this.m=n,this.mt=s,this.tween=i},r}();bn(lf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return cf[r]=1});Xn.TweenMax=Xn.TweenLite=Ut;Xn.TimelineLite=Xn.TimelineMax=un;Rt=new un({sortChildren:!1,defaults:Js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=ff;var hs=[],zc={},_E=[],Ug=0,vE=0,Gh=function(e){return(zc[e]||_E).map(function(t){return t()})},tf=function(){var e=Date.now(),t=[];e-Ug>2&&(Gh("matchMediaInit"),hs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Gh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ug=e,Gh("matchMedia"))},g_=function(){function r(t,n){this.selector=n&&$h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var l=It,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=$h(s)),It=o,h=i.apply(o,arguments),Lt(h)&&o._r.push(h),It=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Lt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Ut)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var a=hs.length;a--;)hs[a].id===this.id&&hs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),yE=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Hi(n)||(n={matches:n});var o=new g_(0,s||this.scope),a=o.conditions={},c,l,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=ai.matchMedia(n[l]),c&&(hs.indexOf(o)<0&&hs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(tf):c.addEventListener("change",tf)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return o_(i)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=li(e)[0]);var s=Lr(e||{}).get,o=n?Yg:Xg;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Nn[a]&&Nn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(u){return dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Nn[t],a=Lr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Ks._pt=0,h.init(e,n?u+n:u,Ks,0,[e]),h.render(1,h),Ks._pt&&yf(1,Ks)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=dn.to(e,fs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=us(e.ease,Js.ease)),Ig(Js,e||{})},config:function(e){return Ig(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Xn[a]&&Vc(t+" effect requires "+a+" plugin.")}),kh[t]=function(a,c,l){return n(li(a),hi(c||{},s),l)},o&&(un.prototype[t]=function(a,c,l){return this.add(kh[t](a,Hi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ot[e]=us(t)},parseEase:function(e,t){return arguments.length?us(e,t):ot},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new un(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(Rt,n,0),n},context:function(e,t){return e?new g_(e,t):It},matchMedia:function(e){return new yE(e)},matchMediaRefresh:function(){return hs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||tf()},addEventListener:function(e,t){var n=zc[e]||(zc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:JT,wrapYoyo:$T,distribute:e_,random:n_,snap:t_,normalize:KT,getUnit:rn,clamp:XT,splitColor:a_,toArray:li,selector:$h,mapRange:r_,pipe:jT,unitize:ZT,interpolate:QT,shuffle:Qg},install:Vg,effects:kh,ticker:Un,updateRoot:un.updateRoot,plugins:Nn,globalTimeline:Rt,core:{PropTween:wn,globals:Gg,Tween:Ut,Timeline:un,Animation:Sa,getCache:Lr,_removeLinkedListItem:Zc,reverting:function(){return hn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return nf=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xc[r]=Ut[r]});Un.add(un.updateRoot);Ks=Xc.to({},{duration:0});var xE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=xE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Wh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(qt(s)&&(c={},bn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}SE(a,s)}}}},dn=Xc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wh("roundProps",Qh),Wh("modifiers"),Wh("snap",t_))||Xc;Ut.version=un.version=dn.version="3.12.2";Hg=1;rf()&&eo();var ME=ot.Power0,bE=ot.Power1,wE=ot.Power2,TE=ot.Power3,EE=ot.Power4,AE=ot.Linear,RE=ot.Quad,CE=ot.Cubic,PE=ot.Quart,IE=ot.Quint,LE=ot.Strong,OE=ot.Elastic,DE=ot.Back,NE=ot.SteppedEase,UE=ot.Bounce,FE=ot.Sine,BE=ot.Expo,kE=ot.Circ;var __,Nr,io,Af,ys,zE,v_,Rf,HE=function(){return typeof window!="undefined"},ir={},vs=180/Math.PI,ro=Math.PI/180,no=Math.atan2,y_=1e8,Cf=/([A-Z])/g,VE=/(left|right|width|margin|padding|x)/i,GE=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},E_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},A_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YE=function(e,t,n){return e.style[t]=n},jE=function(e,t,n){return e.style.setProperty(t,n)},ZE=function(e,t,n){return e._gsap[t]=n},KE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},JE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$E=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",Ti=Ct+"Origin",QE=function r(e,t){var n=this,i=this.target,s=i.style;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=nr(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:nr(i,e);else return Vi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ti,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},R_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Rf(),(!s||!s.isStart)&&!n[Ct]&&(R_(n),i.uncache=1)}},C_=function(e,t){var n={target:e,props:[],revert:eA,save:QE};return e._gsap||dn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},P_,wf=function(e,t){var n=Nr.createElementNS?Nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nr.createElement(e);return n.style?n:Nr.createElement(e)},Gi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,so(t)||t,1)||""},x_="O,Moz,ms,Ms,Webkit".split(","),so=function(e,t,n){var i=t||ys,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(x_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?x_[o]:"")+e},Tf=function(){HE()&&window.document&&(__=window,Nr=__.document,io=Nr.documentElement,ys=wf("div")||{style:{}},zE=wf("div"),Ct=so(Ct),Ti=Ct+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",P_=!!so("perspective"),Rf=dn.core.reverting,Af=1)},Sf=function r(e){var t=wf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(io.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),io.removeChild(t),this.style.cssText=s,o},S_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},I_=function(e){var t;try{t=e.getBBox()}catch{t=Sf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sf||(t=Sf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+S_(e,["x","cx","x1"])||0,y:+S_(e,["y","cy","y1"])||0,width:0,height:0}:t},L_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&I_(e))},wa=function(e,t){if(t){var n=e.style;t in ir&&t!==Ti&&(t=Ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Cf,"-$1").toLowerCase())):n.removeAttribute(t)}},Ur=function(e,t,n,i,s,o){var a=new wn(e._pt,t,n,0,1,o?A_:E_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},M_={deg:1,rad:1,turn:1},tA={grid:1,flex:1},Fr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ys.style,c=VE.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;return i===o||!s||M_[i]||M_[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&L_(e),(d||o==="%")&&(ir[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[c?"width":"height"]:e[u],Ot(d?s/_*h:s/100*_)):(a[c?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Nr||!g.appendChild)&&(g=Nr.body),m=g._gsap,m&&d&&m.width&&c&&m.time===Un.time&&!m.uncache?Ot(s/m.width*h):((d||o==="%")&&!tA[Gi(g,"display")]&&(a.position=Gi(e,"position")),g===e&&(a.position="static"),g.appendChild(ys),_=ys[u],g.removeChild(ys),a.position="absolute",c&&d&&(m=Lr(g),m.time=Un.time,m.width=g[u]),Ot(f?_*s/h:_&&s?h/_*s:0))))},nr=function(e,t,n,i){var s;return Af||Tf(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Ea(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:el(Gi(e,Ti))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Qc[t]&&Qc[t](e,t,n)||Gi(e,t)||hf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(e,t,s,n)+n:s},nA=function(e,t,n,i){if(!n||n==="none"){var s=so(t,e,1),o=s&&Gi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gi(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,vf),c=0,l=0,u,h,f,d,_,g,m,p,y,v,S,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Gi(e,t)||i,e.style[t]=n),u=[n,i],ff(u),n=u[0],i=u[1],f=n.match(ds)||[],M=i.match(ds)||[],M.length){for(;h=ds.exec(i);)m=h[0],y=i.substring(c,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),m.charAt(1)==="="&&(m=ps(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),c=ds.lastIndex-v.length,v||(v=v||Bn.units[t]||S,c===i.length&&(i+=v,a.e+=v)),S!==v&&(d=Fr(e,t,g,v)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?A_:E_;return of.test(i)&&(a.e=0),this._pt=a,a},b_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=b_[n]||n,t[1]=b_[i]||i,t.join(" ")},rA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],ir[a]&&(c=1,a=a==="transformOrigin"?Ti:Ct),wa(n,a);c&&(wa(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),Ea(n,1),o.uncache=1,R_(i)))}},Qc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,n,0,0,rA);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ta=[1,0,0,1,0,0],O_={},D_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},w_=function(e){var t=Gi(e,Ct);return D_(t)?Ta:t.substr(7).match(sf).map(Ot)},Pf=function(e,t){var n=e._gsap||Lr(e),i=e.style,s=w_(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ta:s):(s===Ta&&!e.offsetParent&&e!==io&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,io.appendChild(e)),s=w_(e),c?i.display=c:wa(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):io.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ef=function(e,t,n,i,s,o){var a=e._gsap,c=s||Pf(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],y=c[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,R,w,I,x;n?c!==Ta&&(w=d*m-_*g)&&(I=S*(m/w)+M*(-g/w)+(g*y-m*p)/w,x=S*(-_/w)+M*(d/w)-(d*y-_*p)/w,S=I,M=x):(R=I_(e),S=R.x+(~v[0].indexOf("%")?S/100*R.width:S),M=R.y+(~(v[1]||v[0]).indexOf("%")?M/100*R.height:M)),i||i!==!1&&a.smooth?(p=S-l,y=M-u,a.xOffset=h+(p*d+y*g)-p,a.yOffset=f+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ti]="0px 0px",o&&(Ur(o,a,"xOrigin",l,S),Ur(o,a,"yOrigin",u,M),Ur(o,a,"xOffset",h,a.xOffset),Ur(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Ea=function(e,t){var n=e._gsap||new df(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Gi(e,Ti)||"0",u,h,f,d,_,g,m,p,y,v,S,M,R,w,I,x,b,G,W,D,U,F,Q,B,q,N,A,L,X,oe,se,ie;return u=h=f=g=m=p=y=v=S=0,d=_=1,n.svg=!!(e.getCTM&&L_(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ct]!=="none"?c[Ct]:"")),i.scale=i.rotate=i.translate="none"),w=Pf(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Ef(e,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,R=n.yOrigin||0,w!==Ta&&(G=w[0],W=w[1],D=w[2],U=w[3],u=F=w[4],h=Q=w[5],w.length===6?(d=Math.sqrt(G*G+W*W),_=Math.sqrt(U*U+D*D),g=G||W?no(W,G)*vs:0,y=D||U?no(D,U)*vs+g:0,y&&(_*=Math.abs(Math.cos(y*ro))),n.svg&&(u-=M-(M*G+R*D),h-=R-(M*W+R*U))):(ie=w[6],oe=w[7],A=w[8],L=w[9],X=w[10],se=w[11],u=w[12],h=w[13],f=w[14],I=no(ie,X),m=I*vs,I&&(x=Math.cos(-I),b=Math.sin(-I),B=F*x+A*b,q=Q*x+L*b,N=ie*x+X*b,A=F*-b+A*x,L=Q*-b+L*x,X=ie*-b+X*x,se=oe*-b+se*x,F=B,Q=q,ie=N),I=no(-D,X),p=I*vs,I&&(x=Math.cos(-I),b=Math.sin(-I),B=G*x-A*b,q=W*x-L*b,N=D*x-X*b,se=U*b+se*x,G=B,W=q,D=N),I=no(W,G),g=I*vs,I&&(x=Math.cos(I),b=Math.sin(I),B=G*x+W*b,q=F*x+Q*b,W=W*x-G*b,Q=Q*x-F*b,G=B,F=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ot(Math.sqrt(G*G+W*W+D*D)),_=Ot(Math.sqrt(Q*Q+ie*ie)),I=no(F,Q),y=Math.abs(I)>2e-4?I*vs:0,S=se?1/(se<0?-se:se):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!D_(Gi(e,Ct)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ot(d),n.scaleY=Ot(_),n.rotation=Ot(g)+a,n.rotationX=Ot(m)+a,n.rotationY=Ot(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ti]=el(l)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?oA:P_?N_:sA,n.uncache=0,n},el=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mf=function(e,t,n){var i=rn(t);return Ot(parseFloat(t)+parseFloat(Fr(e,"x",n+"px",i)))+i},sA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,N_(e,t)},gs="0deg",ba="0px",_s=") ",N_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==gs||u!==gs)){var R=parseFloat(u)*ro,w=Math.sin(R),I=Math.cos(R),x;R=parseFloat(h)*ro,x=Math.cos(R),o=Mf(y,o,w*x*-v),a=Mf(y,a,-Math.sin(R)*-v),c=Mf(y,c,I*x*-v+v)}m!==ba&&(S+="perspective("+m+_s),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||o!==ba||a!==ba||c!==ba)&&(S+=c!==ba||M?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+_s),l!==gs&&(S+="rotate("+l+_s),u!==gs&&(S+="rotateY("+u+_s),h!==gs&&(S+="rotateX("+h+_s),(f!==gs||d!==gs)&&(S+="skew("+f+", "+d+_s),(_!==1||g!==1)&&(S+="scale("+_+", "+g+_s),y.style[Ct]=S||"translate(0, 0)"},oA=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),M,R,w,I,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ro,l*=ro,M=Math.cos(c)*h,R=Math.sin(c)*h,w=Math.sin(c-l)*-f,I=Math.cos(c-l)*f,l&&(u*=ro,x=Math.tan(l-u),x=Math.sqrt(1+x*x),w*=x,I*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,R*=x)),M=Ot(M),R=Ot(R),w=Ot(w),I=Ot(I)):(M=h,I=f,R=w=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Fr(d,"x",o,"px"),S=Fr(d,"y",a,"px")),(_||g||m||p)&&(v=Ot(v+_-(_*M+g*w)+m),S=Ot(S+g-(_*R+g*I)+p)),(i||s)&&(x=d.getBBox(),v=Ot(v+i/100*x.width),S=Ot(S+s/100*x.height)),x="matrix("+M+","+R+","+w+","+I+","+v+","+S+")",d.setAttribute("transform",x),y&&(d.style[Ct]=x)},aA=function(e,t,n,i,s){var o=360,a=qt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?vs:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*y_)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*y_)%o-~~(l/o)*o)),e._pt=f=new wn(e._pt,t,n,i,l,WE),f.e=u,f.u="deg",e._props.push(n),f},T_=function(e,t){for(var n in t)e[n]=t[n];return e},cA=function(e,t,n){var i=T_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=Ea(n,1),wa(n,Ct),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ct],o[Ct]=t,a=Ea(n,1),o[Ct]=l);for(c in ir)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=rn(l),_=rn(u),h=d!==_?Fr(n,c,l,_):parseFloat(l),f=parseFloat(u),e._pt=new wn(e._pt,a,c,h,f-h,bf),e._pt.u=_||0,e._props.push(c));T_(a,i)};bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Qc[e>1?"border"+r:r]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return nr(a,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,d,h)}});var If={name:"css",register:Tf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,_,g,m,p,y,v,S,M,R,w,I;Af||Tf(),this.styles=this.styles||C_(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Nn[g]&&mf(g,t,n,i,e,s)))){if(d=typeof u,_=Qc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=to(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",er.lastIndex=0,er.test(l)||(m=rn(l),p=rn(u)),p?m!==p&&(l=Fr(e,g,l,p)+p):m&&(u+=m),this.add(a,"setProperty",l,u,i,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],qt(l)&&~l.indexOf("random(")&&(l=to(l)),rn(l+"")||(l+=Bn.units[g]||rn(nr(e,g))||""),(l+"").charAt(1)==="="&&(l=nr(e,g))):l=nr(e,g),f=parseFloat(l),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Vi&&(g==="autoAlpha"&&(f===1&&nr(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ir,v){if(this.styles.save(g),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ea(e,t.parseTransform),R=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new wn(this._pt,a,Ct,0,1,M.renderTransform,M,0,-1),S.dep=1),g==="scale")this._pt=new wn(this._pt,M,"scaleY",M.scaleY,(y?ps(M.scaleY,y+h):h)-M.scaleY||0,bf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Ti,0,a[Ti]),u=iA(u),M.svg?Ef(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ur(this,M,"zOrigin",M.zOrigin,p),Ur(this,a,g,el(l),el(u)));continue}else if(g==="svgOrigin"){Ef(e,u,1,R,0,this);continue}else if(g in O_){aA(this,M,g,f,y?ps(f,y+u):u);continue}else if(g==="smoothOrigin"){Ur(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){cA(this,u,e);continue}}else g in a||(g=so(g)||g);if(v||(h||h===0)&&(f||f===0)&&!GE.test(u)&&g in a)m=(l+"").substr((f+"").length),h||(h=0),p=rn(u)||(g in Bn.units?Bn.units[g]:m),m!==p&&(f=Fr(e,g,l,p)),this._pt=new wn(this._pt,v?M:a,g,f,(y?ps(f,y+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?XE:bf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=qE);else if(g in a)nA.call(this,e,g,l,y?y+u:u);else if(g in e)this.add(e,g,l||e[g],y?y+u:u,i,s);else if(g!=="parseTransform"){jc(g,u);continue}v||(g in a?I.push(g,0,a[g]):I.push(g,1,l||e[g])),o.push(g)}}w&&xf(this)},render:function(e,t){if(t.tween._time||!Rf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:nr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in ir&&t!==Ti&&(e._gsap.x||nr(e,"x"))?n&&v_===n?t==="scale"?KE:ZE:(v_=n||{})&&(t==="scale"?JE:$E):e.style&&!Yc(e.style[t])?YE:~t.indexOf("-")?jE:$c(e,t)},core:{_removeProperty:wa,_getMatrix:Pf}};dn.utils.checkPrefix=so;dn.core.getStyleSaver=C_;(function(r,e,t,n){var i=bn(r+","+e+","+t,function(s){ir[s]=1});bn(e,function(s){Bn.units[s]="deg",O_[s]=1}),Vi[i[13]]=r+","+e,bn(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});dn.registerPlugin(If);var pt=dn.registerPlugin(If)||dn,Ik=pt.core.Tween;function U_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lA(r,e,t){return e&&U_(r.prototype,e),t&&U_(r,t),r}var sn,Lf,uA,Yn,Br,kr,ao,B_,xs,Ra,k_,rr,Ei,z_,H_=function(){return sn||typeof window!="undefined"&&(sn=window.gsap)&&sn.registerPlugin&&sn},V_=1,oo=[],et=[],Ai=[],Ca=Date.now,Of=function(e,t){return t},hA=function(){var e=Ra.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Ai),et=n,Ai=i,Of=function(o,a){return t[o](a)}},or=function(e,t){return~Ai.indexOf(e)&&Ai[Ai.indexOf(e)+1][t]},Pa=function(e){return!!~k_.indexOf(e)},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},tl="scrollLeft",nl="scrollTop",Df=function(){return rr&&rr.isPressed||et.cache++},il=function(e,t){var n=function i(s){if(s||s===0){V_&&(Yn.history.scrollRestoration="manual");var o=rr&&rr.isPressed;s=i.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),i.cacheID=et.cache,o&&Of("ss",s)}else(t||et.cache!==i.cacheID||Of("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:tl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:il(function(r){return arguments.length?Yn.scrollTo(r,Bt.sc()):Yn.pageXOffset||Br[tl]||kr[tl]||ao[tl]||0})},Bt={s:nl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:il(function(r){return arguments.length?Yn.scrollTo(pn.sc(),r):Yn.pageYOffset||Br[nl]||kr[nl]||ao[nl]||0})},An=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sr=function(e,t){var n=t.s,i=t.sc;Pa(e)&&(e=Br.scrollingElement||kr);var s=et.indexOf(e),o=i===Bt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||En(e,"scroll",Df);var a=et[s+o],c=a||(et[s+o]=il(or(e,n),!0)||(Pa(e)?i:il(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),c},rl=function(e,t,n){var i=e,s=e,o=Ca(),a=o,c=t||50,l=Math.max(500,c*3),u=function(_,g){var m=Ca();g||m-o>c?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Ca();return(_||_===0)&&_!==i&&u(_),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Aa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},F_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},G_=function(){Ra=sn.core.globals().ScrollTrigger,Ra&&Ra.core&&hA()},W_=function(e){return sn=e||H_(),sn&&typeof document!="undefined"&&document.body&&(Yn=window,Br=document,kr=Br.documentElement,ao=Br.body,k_=[Yn,Br,kr,ao],uA=sn.utils.clamp,z_=sn.core.context||function(){},xs="onpointerenter"in ao?"pointer":"mouse",B_=bt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=bt.eventTypes=("ontouchstart"in kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V_=0},500),G_(),Lf=1),Lf};pn.op=Bt;et.cache=0;var bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Lf||W_(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ra||G_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,M=n.onRight,R=n.onLeft,w=n.onUp,I=n.onDown,x=n.onChangeX,b=n.onChangeY,G=n.onChange,W=n.onToggleX,D=n.onToggleY,U=n.onHover,F=n.onHoverEnd,Q=n.onMove,B=n.ignoreCheck,q=n.isNormalizer,N=n.onGestureStart,A=n.onGestureEnd,L=n.onWheel,X=n.onEnable,oe=n.onDisable,se=n.onClick,ie=n.scrollSpeed,me=n.capture,ue=n.allowClicks,ee=n.lockAxis,Be=n.onLockAxis;this.target=a=An(a)||kr,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Yn.getComputedStyle(ao).lineHeight)||22);var At,Ie,H,De,ge,Pe,Ce,Y=this,Ne=0,Fe=0,rt=sr(a,pn),Je=sr(a,Bt),Tt=rt(),C=Je(),T=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",V=Pa(a),te=a.ownerDocument||Br,ne=[0,0,0],re=[0,0,0],we=0,ce=function(){return we=Ca()},K=function(pe,Ve){return(Y.event=pe)&&d&&~d.indexOf(pe.target)||Ve&&T&&pe.pointerType!=="touch"||B&&B(pe,Ve)},Se=function(){Y._vx.reset(),Y._vy.reset(),Ie.pause(),h&&h(Y)},Ee=function(){var pe=Y.deltaX=F_(ne),Ve=Y.deltaY=F_(re),$e=Math.abs(pe)>=i,ve=Math.abs(Ve)>=i;G&&($e||ve)&&G(Y,pe,Ve,ne,re),$e&&(M&&Y.deltaX>0&&M(Y),R&&Y.deltaX<0&&R(Y),x&&x(Y),W&&Y.deltaX<0!=Ne<0&&W(Y),Ne=Y.deltaX,ne[0]=ne[1]=ne[2]=0),ve&&(I&&Y.deltaY>0&&I(Y),w&&Y.deltaY<0&&w(Y),b&&b(Y),D&&Y.deltaY<0!=Fe<0&&D(Y),Fe=Y.deltaY,re[0]=re[1]=re[2]=0),(De||H)&&(Q&&Q(Y),H&&(y(Y),H=!1),De=!1),Pe&&!(Pe=!1)&&Be&&Be(Y),ge&&(L(Y),ge=!1),At=0},Re=function(pe,Ve,$e){ne[$e]+=pe,re[$e]+=Ve,Y._vx.update(pe),Y._vy.update(Ve),l?At||(At=requestAnimationFrame(Ee)):Ee()},xe=function(pe,Ve){ee&&!Ce&&(Y.axis=Ce=Math.abs(pe)>Math.abs(Ve)?"x":"y",Pe=!0),Ce!=="y"&&(ne[2]+=pe,Y._vx.update(pe,!0)),Ce!=="x"&&(re[2]+=Ve,Y._vy.update(Ve,!0)),l?At||(At=requestAnimationFrame(Ee)):Ee()},_e=function(pe){if(!K(pe,1)){pe=Aa(pe,u);var Ve=pe.clientX,$e=pe.clientY,ve=Ve-Y.x,nt=$e-Y.y,Ue=Y.isDragging;Y.x=Ve,Y.y=$e,(Ue||Math.abs(Y.startX-Ve)>=s||Math.abs(Y.startY-$e)>=s)&&(y&&(H=!0),Ue||(Y.isDragging=!0),xe(ve,nt),Ue||m&&m(Y))}},ke=Y.onPress=function(Oe){K(Oe,1)||Oe&&Oe.button||(Y.axis=Ce=null,Ie.pause(),Y.isPressed=!0,Oe=Aa(Oe),Ne=Fe=0,Y.startX=Y.x=Oe.clientX,Y.startY=Y.y=Oe.clientY,Y._vx.reset(),Y._vy.reset(),En(q?a:te,Ei[1],_e,u,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},st=Y.onRelease=function(Oe){if(!K(Oe,1)){Tn(q?a:te,Ei[1],_e,!0);var pe=!isNaN(Y.y-Y.startY),Ve=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),$e=Aa(Oe);!Ve&&pe&&(Y._vx.reset(),Y._vy.reset(),u&&ue&&sn.delayedCall(.08,function(){if(Ca()-we>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(te.createEvent){var ve=te.createEvent("MouseEvents");ve.initMouseEvent("click",!0,!0,Yn,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(ve)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&!q&&Ie.restart(!0),p&&Ve&&p(Y),S&&S(Y,Ve)}},P=function(pe){return pe.touches&&pe.touches.length>1&&(Y.isGesturing=!0)&&N(pe,Y.isDragging)},he=function(){return(Y.isGesturing=!1)||A(Y)},Z=function(pe){if(!K(pe)){var Ve=rt(),$e=Je();Re((Ve-Tt)*ie,($e-C)*ie,1),Tt=Ve,C=$e,h&&Ie.restart(!0)}},ae=function(pe){if(!K(pe)){pe=Aa(pe,u),L&&(ge=!0);var Ve=(pe.deltaMode===1?c:pe.deltaMode===2?Yn.innerHeight:1)*_;Re(pe.deltaX*Ve,pe.deltaY*Ve,0),h&&!q&&Ie.restart(!0)}},le=function(pe){if(!K(pe)){var Ve=pe.clientX,$e=pe.clientY,ve=Ve-Y.x,nt=$e-Y.y;Y.x=Ve,Y.y=$e,De=!0,(ve||nt)&&xe(ve,nt)}},Ye=function(pe){Y.event=pe,U(Y)},ft=function(pe){Y.event=pe,F(Y)},dt=function(pe){return K(pe)||Aa(pe,u)&&se(Y)};Ie=Y._dc=sn.delayedCall(f||.25,Se).pause(),Y.deltaX=Y.deltaY=0,Y._vx=rl(0,50,!0),Y._vy=rl(0,50,!0),Y.scrollX=rt,Y.scrollY=Je,Y.isDragging=Y.isGesturing=Y.isPressed=!1,z_(this),Y.enable=function(Oe){return Y.isEnabled||(En(V?te:a,"scroll",Df),o.indexOf("scroll")>=0&&En(V?te:a,"scroll",Z,u,me),o.indexOf("wheel")>=0&&En(a,"wheel",ae,u,me),(o.indexOf("touch")>=0&&B_||o.indexOf("pointer")>=0)&&(En(a,Ei[0],ke,u,me),En(te,Ei[2],st),En(te,Ei[3],st),ue&&En(a,"click",ce,!1,!0),se&&En(a,"click",dt),N&&En(te,"gesturestart",P),A&&En(te,"gestureend",he),U&&En(a,xs+"enter",Ye),F&&En(a,xs+"leave",ft),Q&&En(a,xs+"move",le)),Y.isEnabled=!0,Oe&&Oe.type&&ke(Oe),X&&X(Y)),Y},Y.disable=function(){Y.isEnabled&&(oo.filter(function(Oe){return Oe!==Y&&Pa(Oe.target)}).length||Tn(V?te:a,"scroll",Df),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Tn(q?a:te,Ei[1],_e,!0)),Tn(V?te:a,"scroll",Z,me),Tn(a,"wheel",ae,me),Tn(a,Ei[0],ke,me),Tn(te,Ei[2],st),Tn(te,Ei[3],st),Tn(a,"click",ce,!0),Tn(a,"click",dt),Tn(te,"gesturestart",P),Tn(te,"gestureend",he),Tn(a,xs+"enter",Ye),Tn(a,xs+"leave",ft),Tn(a,xs+"move",le),Y.isEnabled=Y.isPressed=Y.isDragging=!1,oe&&oe(Y))},Y.kill=Y.revert=function(){Y.disable();var Oe=oo.indexOf(Y);Oe>=0&&oo.splice(Oe,1),rr===Y&&(rr=0)},oo.push(Y),q&&Pa(a)&&(rr=Y),Y.enable(g)},lA(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();bt.version="3.12.2";bt.create=function(r){return new bt(r)};bt.register=W_;bt.getAll=function(){return oo.slice()};bt.getById=function(r){return oo.filter(function(e){return e.vars.id===r})[0]};H_()&&sn.registerPlugin(bt);var Me,uo,at,Pt,Ri,wt,a0,Ml,bl,fo,ml,sl,mn,Tl,Vf,Rn,q_,X_,ho,c0,Nf,l0,jn,u0,h0,f0,zr,Gf,jf,po,Zf,Uf,ol=1,Pn=Date.now,Ff=Pn(),pi=0,La=0,Y_=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},j_=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fA=function r(){return La&&requestAnimationFrame(r)},Z_=function(){return Tl=1},K_=function(){return Tl=0},Wi=function(e){return e},Oa=function(e){return Math.round(e*1e5)/1e5||0},d0=function(){return typeof window!="undefined"},p0=function(){return Me||d0()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Es=function(e){return!!~a0.indexOf(e)},m0=function(e){return(e==="Height"?Zf:at["inner"+e])||Ri["client"+e]||wt["client"+e]},g0=function(e){return or(e,"getBoundingClientRect")||(Es(e)?function(){return Sl.width=at.innerWidth,Sl.height=Zf,Sl}:function(){return ar(e)})},dA=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=or(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?m0(s):e["client"+s])||0}},pA=function(e,t){return!t||~Ai.indexOf(e)?g0(e):function(){return Sl}},cr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=or(e,n))?o()-g0(e)()[s]:Es(e)?(Ri[n]||wt[n])-m0(i):e[n]-e["offset"+i])},al=function(e,t){for(var n=0;n<ho.length;n+=3)(!t||~t.indexOf(ho[n+1]))&&e(ho[n],ho[n+1],ho[n+2])},Kn=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},gl=function(e){return typeof e=="number"},Ss=function(e){return typeof e=="object"},Ia=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bf=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},co=Math.abs,_0="left",v0="top",Kf="right",Jf="bottom",bs="width",ws="height",Na="Right",Ua="Left",Fa="Top",Ba="Bottom",kt="padding",fi="margin",go="Width",$f="Height",on="px",di=function(e){return at.getComputedStyle(e)},mA=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},J_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ar=function(e,t){var n=t&&di(e)[Vf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Wf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},y0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},gA=function(e){return function(t){return Me.utils.snap(y0(e),t)}},Qf=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_A=function(e){return function(t,n){return Qf(y0(e))(t,n.direction)}},cl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$t=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ll=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ul={toggleActions:"play",anticipatePin:0},wl={top:0,left:0,center:.5,bottom:1,right:1},_l=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in wl?wl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hl=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Pt.createElement("div"),g=Es(n)||or(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?wt:n,y=e.indexOf("start")!==-1,v=y?l:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(S+=(i===Bt?Kf:Jf)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],vl(_,0,i,y),_},vl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+go]=1,s["border"+a+go]=0,s[n.p]=t+"px",Me.set(e,s)},tt=[],qf={},za,Q_=function(){return Pn()-pi>34&&(za||(za=requestAnimationFrame(lr)))},lo=function(){(!jn||!jn.isPressed||jn.startX>wt.clientWidth)&&(et.cache++,jn?za||(za=requestAnimationFrame(lr)):lr(),pi||Rs("scrollStart"),pi=Pn())},kf=function(){f0=at.innerWidth,h0=at.innerHeight},Da=function(){et.cache++,!mn&&!l0&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!u0||f0!==at.innerWidth||Math.abs(at.innerHeight-h0)>at.innerHeight*.25)&&Ml.restart(!0)},As={},vA=[],x0=function r(){return Jt(je,"scrollEnd",r)||Ms(!0)},Rs=function(e){return As[e]&&As[e].map(function(t){return t()})||vA},Zn=[],S0=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},ed=function(e,t){var n;for(Rn=0;Rn<tt.length;Rn++)n=tt[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&S0(t),t||Rs("revert")},M0=function(e,t){et.cache++,(t||!Cn)&&et.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(at.history.scrollRestoration=jf=e)},Cn,Ts=0,e0,yA=function(){if(e0!==Ts){var e=e0=Ts;requestAnimationFrame(function(){return e===Ts&&Ms(!0)})}},b0=function(){wt.appendChild(po),Zf=po.offsetHeight||at.innerHeight,wt.removeChild(po)},Ms=function(e,t){if(pi&&!e){$t(je,"scrollEnd",x0);return}b0(),Cn=je.isRefreshing=!0,et.forEach(function(i){return In(i)&&++i.cacheID&&(i.rec=i())});var n=Rs("refreshInit");c0&&je.sort(),t||ed(),et.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),tt.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),tt.forEach(function(i){var s=cr(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>s)&&i.setPositions(i.start,Math.max(i.start+1,s),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M0(jf,1),Ml.pause(),Ts++,Cn=2,lr(2),tt.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=je.isRefreshing=!1,Rs("refresh")},Xf=0,yl=1,ka,lr=function(e){if(!Cn||e===2){je.isUpdating=!0,ka&&ka.update(0);var t=tt.length,n=Pn(),i=n-Ff>=50,s=t&&tt[0].scroll();if(yl=Xf>s?-1:1,Cn||(Xf=s),i&&(pi&&!Tl&&n-pi>200&&(pi=0,Rs("scrollEnd")),ml=Ff,Ff=n),yl<0){for(Rn=t;Rn-- >0;)tt[Rn]&&tt[Rn].update(0,i);yl=1}else for(Rn=0;Rn<t;Rn++)tt[Rn]&&tt[Rn].update(0,i);je.isUpdating=!1}za=0},Yf=[_0,v0,Jf,Kf,fi+Ba,fi+Na,fi+Fa,fi+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xl=Yf.concat([bs,ws,"boxSizing","max"+go,"max"+$f,"position",fi,kt,kt+Fa,kt+Na,kt+Ba,kt+Ua]),xA=function(e,t,n){mo(n);var i=e._gsap;if(i.spacerIsNative)mo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Yf.length,o=t.style,a=e.style,c;s--;)c=Yf[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Jf]=a[Kf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[bs]=Wf(e,pn)+on,o[ws]=Wf(e,Bt)+on,o[kt]=a[fi]=a[v0]=a[_0]="0",mo(i),a[bs]=a["max"+go]=n[bs],a[ws]=a["max"+$f]=n[ws],a[kt]=n[kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},SA=/([A-Z])/g,mo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(SA,"-$1").toLowerCase())}},fl=function(e){for(var t=xl.length,n=e.style,i=[],s=0;s<t;s++)i.push(xl[s],n[xl[s]]);return i.t=e,i},MA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Sl={left:0,top:0},t0=function(e,t,n,i,s,o,a,c,l,u,h,f,d,_){In(e)&&(e=e(c)),Kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_l("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),gl(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&vl(a,n,i,!0);else{In(t)&&(t=t(c));var v=(e||"0").split(" "),S,M,R,w;y=An(t,c)||wt,S=ar(y)||{},(!S||!S.left&&!S.top)&&di(y).display==="none"&&(w=y.style.display,y.style.display="block",S=ar(y),w?y.style.display=w:y.style.removeProperty("display")),M=_l(v[0],S[i.d]),R=_l(v[1]||"0",n),e=S[i.p]-l[i.p]-u+M+s-R,a&&vl(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,x=o._isStart;m="scroll"+i.d2,vl(o,I,i,x&&I>20||!x&&(h?Math.max(wt[m],Ri[m]):o.parentNode[m])<=I+1),h&&(l=ar(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+on))}return d&&y&&(m=ar(y),d.seek(f),p=ar(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},bA=/(webkit|moz|length|cssText|inset)/i,n0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=di(e);for(o in a)!+o&&!bA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},w0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},dl=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},i0=function(e,t){var n=sr(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,_={};l=l||n();var g=w0(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[i]=a,c.modifiers=_,_[i]=function(){return g(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){et.cache++,lr()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$t(e,"wheel",n.wheelHandler),je.isTouch&&$t(e,"touchmove",n.wheelHandler),s},je=function(){function r(t,n){uo||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Gf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!La){this.update=this.refresh=this.kill=Wi;return}n=J_(Kn(n)||gl(n)||n.nodeType?{trigger:n}:n,ul);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,M=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Bt,G=!h&&h!==0,W=An(n.scroller||at),D=Me.core.getCache(W),U=Es(W),F=("pinType"in n?n.pinType:or(W,"pinType")||U&&"fixed")==="fixed",Q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=G&&n.toggleActions.split(" "),q="markers"in n?n.markers:ul.markers,N=U?0:parseFloat(di(W)["border"+b.p2+go])||0,A=this,L=n.onRefreshInit&&function(){return n.onRefreshInit(A)},X=dA(W,U,b),oe=pA(W,U),se=0,ie=0,me=0,ue=sr(W,b),ee,Be,At,Ie,H,De,ge,Pe,Ce,Y,Ne,Fe,rt,Je,Tt,C,T,V,te,ne,re,we,ce,K,Se,Ee,Re,xe,_e,ke,st,P,he,Z,ae,le,Ye,ft,dt;if(A._startClamp=A._endClamp=!1,A._dir=b,m*=45,A.scroller=W,A.scroll=w?w.time.bind(w):ue,Ie=ue(),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(c0=1,n.refreshPriority===-9999&&(ka=A)),D.tweenScroll=D.tweenScroll||{top:i0(W,Bt),left:i0(W,pn)},A.tweenTo=ee=D.tweenScroll[b.p],A.scrubDuration=function(ve){he=gl(ve)&&ve,he?P?P.duration(ve):P=Me.to(i,{ease:"expo",totalProgress:"+=0",duration:he,paused:!0,onComplete:function(){return p&&p(A)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(h),ke=0,c||(c=i.vars.id)),S&&((!Ss(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&Me.set(U?[wt,Ri]:W,{scrollBehavior:"auto"}),et.forEach(function(ve){return In(ve)&&ve.target===(U?Pt.scrollingElement||Ri:W)&&(ve.smooth=!1)}),At=In(S.snapTo)?S.snapTo:S.snapTo==="labels"?gA(i):S.snapTo==="labelsDirectional"?_A(i):S.directional!==!1?function(ve,nt){return Qf(S.snapTo)(ve,Pn()-ie<500?0:nt.direction)}:Me.utils.snap(S.snapTo),Z=S.duration||{min:.1,max:2},Z=Ss(Z)?fo(Z.min,Z.max):fo(Z,Z),ae=Me.delayedCall(S.delay||he/2||.1,function(){var ve=ue(),nt=Pn()-ie<500,Ue=ee.tween;if((nt||Math.abs(A.getVelocity())<10)&&!Ue&&!Tl&&se!==ve){var Ge=(ve-De)/Je,Nt=i&&!G?i.totalProgress():Ge,Qe=nt?0:(Nt-st)/(Pn()-ml)*1e3||0,Et=Me.utils.clamp(-Ge,1-Ge,co(Qe/2)*Qe/.185),tn=Ge+(S.inertia===!1?0:Et),Wt=fo(0,1,At(tn,A)),St=Math.round(De+Wt*Je),E=S,k=E.onStart,j=E.onInterrupt,z=E.onComplete;if(ve<=ge&&ve>=De&&St!==ve){if(Ue&&!Ue._initted&&Ue.data<=co(St-ve))return;S.inertia===!1&&(Et=Wt-Ge),ee(St,{duration:Z(co(Math.max(co(tn-Nt),co(Wt-Nt))*.185/Qe/.05||0)),ease:S.ease||"power3",data:co(St-ve),onInterrupt:function(){return ae.restart(!0)&&j&&j(A)},onComplete:function(){A.update(),se=ue(),ke=st=i&&!G?i.totalProgress():A.progress,y&&y(A),z&&z(A)}},ve,Et*Je,St-ve-Et*Je),k&&k(A,ee.tween)}}else A.isActive&&se!==ve&&ae.restart(!0)}).pause()),c&&(qf[c]=A),f=A.trigger=An(f||d!==!0&&d),dt=f&&f._gsap&&f._gsap.stRevert,dt&&(dt=dt(A)),d=d===!0?f:An(d),Kn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===fi||(_=!_&&d.parentNode&&d.parentNode.style&&di(d.parentNode).display==="flex"?!1:kt),A.pin=d,Be=Me.core.getCache(d),Be.spacer?Tt=Be.pinState:(R&&(R=An(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Be.spacerIsNative=!!R,R&&(Be.spacerState=fl(R))),Be.spacer=V=R||Pt.createElement("div"),V.classList.add("pin-spacer"),c&&V.classList.add("pin-spacer-"+c),Be.pinState=Tt=fl(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),A.spacer=V=Be.spacer,_e=di(d),K=_e[_+b.os2],ne=Me.getProperty(d),re=Me.quickSetter(d,b.a,on),zf(d,V,_e),T=fl(d)),q){Fe=Ss(q)?J_(q,$_):$_,Y=hl("scroller-start",c,W,b,Fe,0),Ne=hl("scroller-end",c,W,b,Fe,0,Y),te=Y["offset"+b.op.d2];var Oe=An(or(W,"content")||W);Pe=this.markerStart=hl("start",c,Oe,b,Fe,te,0,w),Ce=this.markerEnd=hl("end",c,Oe,b,Fe,te,0,w),w&&(ft=Me.quickSetter([Pe,Ce],b.a,on)),!F&&!(Ai.length&&or(W,"fixedMarkers")===!0)&&(mA(U?wt:W),Me.set([Y,Ne],{force3D:!0}),Ee=Me.quickSetter(Y,b.a,on),xe=Me.quickSetter(Ne,b.a,on))}if(w){var pe=w.vars.onUpdate,Ve=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){A.update(0,0,1),pe&&pe.apply(w,Ve||[])})}if(A.previous=function(){return tt[tt.indexOf(A)-1]},A.next=function(){return tt[tt.indexOf(A)+1]},A.revert=function(ve,nt){if(!nt)return A.kill(!0);var Ue=ve!==!1||!A.enabled,Ge=mn;Ue!==A.isReverted&&(Ue&&(le=Math.max(ue(),A.scroll.rec||0),me=A.progress,Ye=i&&i.progress()),Pe&&[Pe,Ce,Y,Ne].forEach(function(Nt){return Nt.style.display=Ue?"none":"block"}),Ue&&(mn=A,A.update(Ue)),d&&(!M||!A.isActive)&&(Ue?xA(d,V,Tt):zf(d,V,di(d),Se)),Ue||A.update(Ue),mn=Ge,A.isReverted=Ue)},A.refresh=function(ve,nt,Ue,Ge){if(!((mn||!A.enabled)&&!nt)){if(d&&ve&&pi){$t(r,"scrollEnd",x0);return}!Cn&&L&&L(A),mn=A,ee.tween&&!Ue&&(ee.tween.kill(),ee.tween=0),P&&P.pause(),g&&i&&i.revert({kill:!1}).invalidate(),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var Nt=X(),Qe=oe(),Et=w?w.duration():cr(W,b),tn=Je<=.01,Wt=0,St=Ge||0,E=Ss(Ue)?Ue.end:n.end,k=n.endTrigger||f,j=Ss(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),z=A.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,A),J=f&&Math.max(0,tt.indexOf(A))||0,fe=J,ye,Te,Le,We,be,Ae,lt,Mt,xn,Sn,ht,qe,Cr;for(q&&Ss(Ue)&&(qe=Me.getProperty(Y,b.p),Cr=Me.getProperty(Ne,b.p));fe--;)Ae=tt[fe],Ae.end||Ae.refresh(0,1)||(mn=A),lt=Ae.pin,lt&&(lt===f||lt===d||lt===z)&&!Ae.isReverted&&(Sn||(Sn=[]),Sn.unshift(Ae),Ae.revert(!0,!0)),Ae!==tt[fe]&&(J--,fe--);for(In(j)&&(j=j(A)),j=Y_(j,"start",A),De=t0(j,f,Nt,b,ue(),Pe,Y,A,Qe,N,F,Et,w,A._startClamp&&"_startClamp")||(d?-.001:0),In(E)&&(E=E(A)),Kn(E)&&!E.indexOf("+=")&&(~E.indexOf(" ")?E=(Kn(j)?j.split(" ")[0]:"")+E:(Wt=_l(E.substr(2),Nt),E=Kn(j)?j:(w?Me.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,De):De)+Wt,k=f)),E=Y_(E,"end",A),ge=Math.max(De,t0(E||(k?"100% 0":Et),k,Nt,b,ue()+Wt,Ce,Ne,A,Qe,N,F,Et,w,A._endClamp&&"_endClamp"))||-.001,Wt=0,fe=J;fe--;)Ae=tt[fe],lt=Ae.pin,lt&&Ae.start-Ae._pinPush<=De&&!w&&Ae.end>0&&(ye=Ae.end-(A._startClamp?Math.max(0,Ae.start):Ae.start),(lt===f&&Ae.start-Ae._pinPush<De||lt===z)&&isNaN(j)&&(Wt+=ye*(1-Ae.progress)),lt===d&&(St+=ye));if(De+=Wt,ge+=Wt,A._startClamp&&(A._startClamp+=Wt),A._endClamp&&!Cn&&(A._endClamp=ge||-.001,ge=Math.min(ge,cr(W,b))),Je=ge-De||(De-=.01)&&.001,tn&&(me=Me.utils.clamp(0,1,Me.utils.normalize(De,ge,le))),A._pinPush=St,Pe&&Wt&&(ye={},ye[b.a]="+="+Wt,z&&(ye[b.p]="-="+ue()),Me.set([Pe,Ce],ye)),d)ye=di(d),We=b===Bt,Le=ue(),we=parseFloat(ne(b.a))+St,!Et&&ge>1&&(ht=(U?Pt.scrollingElement||Ri:W).style,ht={style:ht,value:ht["overflow"+b.a.toUpperCase()]},U&&di(wt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+b.a.toUpperCase()]="scroll")),zf(d,V,ye),T=fl(d),Te=ar(d,!0),Mt=F&&sr(W,We?pn:Bt)(),_&&(Se=[_+b.os2,Je+St+on],Se.t=V,fe=_===kt?Wf(d,b)+Je+St:0,fe&&Se.push(b.d,fe+on),mo(Se),z&&tt.forEach(function(xt){xt.pin===z&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),F&&ue(le)),F&&(be={top:Te.top+(We?Le-De:Mt)+on,left:Te.left+(We?Mt:Le-De)+on,boxSizing:"border-box",position:"fixed"},be[bs]=be["max"+go]=Math.ceil(Te.width)+on,be[ws]=be["max"+$f]=Math.ceil(Te.height)+on,be[fi]=be[fi+Fa]=be[fi+Na]=be[fi+Ba]=be[fi+Ua]="0",be[kt]=ye[kt],be[kt+Fa]=ye[kt+Fa],be[kt+Na]=ye[kt+Na],be[kt+Ba]=ye[kt+Ba],be[kt+Ua]=ye[kt+Ua],C=MA(Tt,be,M),Cn&&ue(0)),i?(xn=i._initted,Nf(1),i.render(i.duration(),!0,!0),ce=ne(b.a)-we+Je+St,Re=Math.abs(Je-ce)>1,F&&Re&&C.splice(C.length-2,2),i.render(0,!0,!0),xn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Nf(0)):ce=Je,ht&&(ht.value?ht.style["overflow"+b.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+b.a));else if(f&&ue()&&!w)for(Te=f.parentNode;Te&&Te!==wt;)Te._pinOffset&&(De-=Te._pinOffset,ge-=Te._pinOffset),Te=Te.parentNode;Sn&&Sn.forEach(function(xt){return xt.revert(!1,!0)}),A.start=De,A.end=ge,Ie=H=Cn?le:ue(),!w&&!Cn&&(Ie<le&&ue(le),A.scroll.rec=0),A.revert(!1,!0),ie=Pn(),ae&&(se=-1,ae.restart(!0)),mn=0,i&&G&&(i._initted||Ye)&&i.progress()!==Ye&&i.progress(Ye||0,!0).render(i.time(),!0,!0),(tn||me!==A.progress||w)&&(i&&!G&&i.totalProgress(w&&De<-.001&&!me?Me.utils.normalize(De,ge,0):me,!0),A.progress=tn||(Ie-De)/Je===me?0:me),d&&_&&(V._pinOffset=Math.round(A.progress*ce)),P&&P.invalidate(),isNaN(qe)||(qe-=Me.getProperty(Y,b.p),Cr-=Me.getProperty(Ne,b.p),dl(Y,b,qe),dl(Pe,b,qe-(Ge||0)),dl(Ne,b,Cr),dl(Ce,b,Cr-(Ge||0))),tn&&!Cn&&A.update(),u&&!Cn&&!rt&&(rt=!0,u(A),rt=!1)}},A.getVelocity=function(){return(ue()-H)/(Pn()-ml)*1e3||0},A.endAnimation=function(){Ia(A.callbackAnimation),i&&(P?P.progress(1):i.paused()?G||Ia(i,A.direction<0,1):Ia(i,i.reversed()))},A.labelToScroll=function(ve){return i&&i.labels&&(De||A.refresh()||De)+i.labels[ve]/i.duration()*Je||0},A.getTrailing=function(ve){var nt=tt.indexOf(A),Ue=A.direction>0?tt.slice(0,nt).reverse():tt.slice(nt+1);return(Kn(ve)?Ue.filter(function(Ge){return Ge.vars.preventOverlaps===ve}):Ue).filter(function(Ge){return A.direction>0?Ge.end<=De:Ge.start>=ge})},A.update=function(ve,nt,Ue){if(!(w&&!Ue&&!ve)){var Ge=Cn===!0?le:A.scroll(),Nt=ve?0:(Ge-De)/Je,Qe=Nt<0?0:Nt>1?1:Nt||0,Et=A.progress,tn,Wt,St,E,k,j,z,J;if(nt&&(H=Ie,Ie=w?ue():Ge,S&&(st=ke,ke=i&&!G?i.totalProgress():Qe)),m&&!Qe&&d&&!mn&&!ol&&pi&&De<Ge+(Ge-H)/(Pn()-ml)*m&&(Qe=1e-4),Qe!==Et&&A.enabled){if(tn=A.isActive=!!Qe&&Qe<1,Wt=!!Et&&Et<1,j=tn!==Wt,k=j||!!Qe!=!!Et,A.direction=Qe>Et?1:-1,A.progress=Qe,k&&!mn&&(St=Qe&&!Et?0:Qe===1?1:Et===1?2:3,G&&(E=!j&&B[St+1]!=="none"&&B[St+1]||B[St],J=i&&(E==="complete"||E==="reset"||E in i))),x&&(j||J)&&(J||h||!i)&&(In(x)?x(A):A.getTrailing(x).forEach(function(Le){return Le.endAnimation()})),G||(P&&!mn&&!ol?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",Qe,i._tTime/i._tDur):(P.vars.totalProgress=Qe,P.invalidate().restart())):i&&i.totalProgress(Qe,!!(mn&&(ie||ve)))),d){if(ve&&_&&(V.style[_+b.os2]=K),!F)re(Oa(we+ce*Qe));else if(k){if(z=!ve&&Qe>Et&&ge+1>Ge&&Ge+1>=cr(W,b),M)if(!ve&&(tn||z)){var fe=ar(d,!0),ye=Ge-De;n0(d,wt,fe.top+(b===Bt?ye:0)+on,fe.left+(b===Bt?0:ye)+on)}else n0(d,V);mo(tn||z?C:T),Re&&Qe<1&&tn||re(we+(Qe===1&&!z?ce:0))}}S&&!ee.tween&&!mn&&!ol&&ae.restart(!0),a&&(j||v&&Qe&&(Qe<1||!Uf))&&bl(a.targets).forEach(function(Le){return Le.classList[tn||v?"add":"remove"](a.className)}),o&&!G&&!ve&&o(A),k&&!mn?(G&&(J&&(E==="complete"?i.pause().totalProgress(1):E==="reset"?i.restart(!0).pause():E==="restart"?i.restart(!0):i[E]()),o&&o(A)),(j||!Uf)&&(l&&j&&Bf(A,l),Q[St]&&Bf(A,Q[St]),v&&(Qe===1?A.kill(!1,1):Q[St]=0),j||(St=Qe===1?1:3,Q[St]&&Bf(A,Q[St]))),I&&!tn&&Math.abs(A.getVelocity())>(gl(I)?I:2500)&&(Ia(A.callbackAnimation),P?P.progress(1):Ia(i,E==="reverse"?1:!Qe,1))):G&&o&&!mn&&o(A)}if(xe){var Te=w?Ge/w.duration()*(w._caScrollDist||0):Ge;Ee(Te+(Y._isFlipped?1:0)),xe(Te)}ft&&ft(-Ge/w.duration()*(w._caScrollDist||0))}},A.enable=function(ve,nt){A.enabled||(A.enabled=!0,$t(W,"resize",Da),U||$t(W,"scroll",lo),L&&$t(r,"refreshInit",L),ve!==!1&&(A.progress=me=0,Ie=H=se=ue()),nt!==!1&&A.refresh())},A.getTween=function(ve){return ve&&ee?ee.tween:P},A.setPositions=function(ve,nt,Ue,Ge){if(w){var Nt=w.scrollTrigger,Qe=w.duration(),Et=Nt.end-Nt.start;ve=Nt.start+Et*ve/Qe,nt=Nt.start+Et*nt/Qe}A.refresh(!1,!1,{start:j_(ve,Ue&&!!A._startClamp),end:j_(nt,Ue&&!!A._endClamp)},Ge),A.update()},A.adjustPinSpacing=function(ve){if(Se&&ve){var nt=Se.indexOf(b.d)+1;Se[nt]=parseFloat(Se[nt])+ve+on,Se[1]=parseFloat(Se[1])+ve+on,mo(Se)}},A.disable=function(ve,nt){if(A.enabled&&(ve!==!1&&A.revert(!0,!0),A.enabled=A.isActive=!1,nt||P&&P.pause(),le=0,Be&&(Be.uncache=1),L&&Jt(r,"refreshInit",L),ae&&(ae.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!U)){for(var Ue=tt.length;Ue--;)if(tt[Ue].scroller===W&&tt[Ue]!==A)return;Jt(W,"resize",Da),U||Jt(W,"scroll",lo)}},A.kill=function(ve,nt){A.disable(ve,nt),P&&!nt&&P.kill(),c&&delete qf[c];var Ue=tt.indexOf(A);Ue>=0&&tt.splice(Ue,1),Ue===Rn&&yl>0&&Rn--,Ue=0,tt.forEach(function(Ge){return Ge.scroller===A.scroller&&(Ue=1)}),Ue||Cn||(A.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),nt||i.kill()),Pe&&[Pe,Ce,Y,Ne].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ka===A&&(ka=0),d&&(Be&&(Be.uncache=1),Ue=0,tt.forEach(function(Ge){return Ge.pin===d&&Ue++}),Ue||(Be.spacer=0)),n.onKill&&n.onKill(A)},tt.push(A),A.enable(!1,!1),dt&&dt(A),i&&i.add&&!Je){var $e=A.update;A.update=function(){A.update=$e,De||ge||A.refresh()},Me.delayedCall(.01,A.update),Je=.01,De=ge=0}else A.refresh();d&&yA()},r.register=function(n){return uo||(Me=n||p0(),d0()&&window.document&&r.enable(),uo=La),uo},r.defaults=function(n){if(n)for(var i in n)ul[i]=n[i];return ul},r.disable=function(n,i){La=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Jt(at,"wheel",lo),Jt(Pt,"scroll",lo),clearInterval(sl),Jt(Pt,"touchcancel",Wi),Jt(wt,"touchstart",Wi),cl(Jt,Pt,"pointerdown,touchstart,mousedown",Z_),cl(Jt,Pt,"pointerup,touchend,mouseup",K_),Ml.kill(),al(Jt);for(var s=0;s<et.length;s+=3)ll(Jt,et[s],et[s+1]),ll(Jt,et[s],et[s+2])},r.enable=function(){if(at=window,Pt=document,Ri=Pt.documentElement,wt=Pt.body,Me&&(bl=Me.utils.toArray,fo=Me.utils.clamp,Gf=Me.core.context||Wi,Nf=Me.core.suppressOverwrites||Wi,jf=at.history.scrollRestoration||"auto",Xf=at.pageYOffset,Me.core.globals("ScrollTrigger",r),wt)){La=1,po=document.createElement("div"),po.style.height="100vh",po.style.position="absolute",b0(),fA(),bt.register(Me),r.isTouch=bt.isTouch,zr=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$t(at,"wheel",lo),a0=[at,Pt,Ri,wt],Me.matchMedia?(r.matchMedia=function(c){var l=Me.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Me.addEventListener("matchMediaInit",function(){return ed()}),Me.addEventListener("matchMediaRevert",function(){return S0()}),Me.addEventListener("matchMedia",function(){Ms(0,1),Rs("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return kf(),kf})):console.warn("Requires GSAP 3.11.0 or later"),kf(),$t(Pt,"scroll",lo);var n=wt.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ar(wt),Bt.m=Math.round(o.top+Bt.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),sl=setInterval(Q_,250),Me.delayedCall(.5,function(){return ol=0}),$t(Pt,"touchcancel",Wi),$t(wt,"touchstart",Wi),cl($t,Pt,"pointerdown,touchstart,mousedown",Z_),cl($t,Pt,"pointerup,touchend,mouseup",K_),Vf=Me.utils.checkPrefix("transform"),xl.push(Vf),uo=Pn(),Ml=Me.delayedCall(.2,Ms).pause(),ho=[Pt,"visibilitychange",function(){var c=at.innerWidth,l=at.innerHeight;Pt.hidden?(q_=c,X_=l):(q_!==c||X_!==l)&&Da()},Pt,"DOMContentLoaded",Ms,at,"load",Ms,at,"resize",Da],al($t),tt.forEach(function(c){return c.enable(0,1)}),a=0;a<et.length;a+=3)ll(Jt,et[a],et[a+1]),ll(Jt,et[a],et[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Uf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(sl)||(sl=i)&&setInterval(Q_,i),"ignoreMobileResize"in n&&(u0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(al(Jt)||al($t,n.autoRefreshEvents||"none"),l0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=et.indexOf(s),a=Es(s);~o&&et.splice(o,a?6:2),i&&(a?Ai.unshift(at,i,wt,i,Ri,i):Ai.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?An(n):n).getBoundingClientRect(),a=o[s?bs:ws]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?bs:ws],c=i==null?a/2:i in wl?wl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/at.innerWidth:(o.top+c)/at.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=As.killAll||[];As={},i.forEach(function(s){return s()})}},r}();je.version="3.12.2";je.saveStyles=function(r){return r?bl(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Gf())}}):Zn};je.revert=function(r,e){return ed(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?Da():(uo||je.register())&&Ms(!0)};je.update=function(r){return++et.cache&&lr(r===!0?2:0)};je.clearScrollMemory=M0;je.maxScroll=function(r,e){return cr(r,e?pn:Bt)};je.getScrollFunc=function(r,e){return sr(An(r),e?pn:Bt)};je.getById=function(r){return qf[r]};je.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!pi};je.snapDirectional=Qf;je.addEventListener=function(r,e){var t=As[r]||(As[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=As[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),$t(je,"refresh",function(){return s=e.batchMax()})),bl(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(je.create(l))}),t};var r0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===Ri&&r(wt,t)},pl={auto:1,scroll:1},wA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=Pn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pl[(c=di(s)).overflowY]||pl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Es(s)&&(pl[(c=di(s)).overflowY]||pl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},T0=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&wA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$t(Pt,bt.eventTypes[0],o0,!1,!0)},onDisable:function(){return Jt(Pt,bt.eventTypes[0],o0,!0)}})},TA=/(input|label|select|textarea)/i,s0,o0=function(e){var t=TA.test(e.target.tagName);(t||s0)&&(e._gsapAllow=!0,s0=t)},EA=function(e){Ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=An(e.target)||Ri,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=zr&&(e.content&&An(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=sr(l,Bt),_=sr(l,pn),g=1,m=(bt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,y=In(i)?function(){return i(a)}:function(){return i||2.8},v,S,M=T0(l,e.type,!0,s),R=function(){return S=!1},w=Wi,I=Wi,x=function(){c=cr(l,Bt),I=fo(zr?1:0,c),n&&(w=fo(0,cr(l,pn))),v=Ts},b=function(){f._gsap.y=Oa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},G=function(){if(S){requestAnimationFrame(R);var q=Oa(a.deltaY/2),N=I(d.v-q);if(f&&N!==d.v+d.offset){d.offset=N-d.v;var A=Oa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",f._gsap.y=A+"px",d.cacheID=et.cache,lr()}return!0}d.offset&&b(),S=!0},W,D,U,F,Q=function(){x(),W.isActive()&&W.vars.scrollY>c&&(d()>c?W.progress(1)&&d(c):W.resetTo("scrollY",c))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return zr&&B.type==="touchmove"&&G(B)||g>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){S=!1;var B=g;g=Oa((at.visualViewport&&at.visualViewport.scale||1)/m),W.pause(),B!==g&&Hf(l,g>1.01?!0:n?!1:"x"),D=_(),U=d(),x(),v=Ts},e.onRelease=e.onGestureStart=function(B,q){if(d.offset&&b(),!q)F.restart(!0);else{et.cache++;var N=y(),A,L;n&&(A=_(),L=A+N*.05*-B.velocityX/.227,N*=r0(_,A,L,cr(l,pn)),W.vars.scrollX=w(L)),A=d(),L=A+N*.05*-B.velocityY/.227,N*=r0(d,A,L,cr(l,Bt)),W.vars.scrollY=I(L),W.invalidate().duration(N).play(.01),(zr&&W.vars.scrollY>=c||A>=c-1)&&Me.to({},{onUpdate:Q,duration:N})}o&&o(B)},e.onWheel=function(){W._ts&&W.pause(),Pn()-p>1e3&&(v=0,p=Pn())},e.onChange=function(B,q,N,A,L){if(Ts!==v&&x(),q&&n&&_(w(A[2]===q?D+(B.startX-B.x):_()+q-A[1])),N){d.offset&&b();var X=L[2]===N,oe=X?U+B.startY-B.y:d()+N-L[1],se=I(oe);X&&oe!==se&&(U+=se-oe),d(se)}(N||q)&&lr()},e.onEnable=function(){Hf(l,n?!1:"x"),je.addEventListener("refresh",Q),$t(at,"resize",Q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){Hf(l,!0),Jt(at,"resize",Q),je.removeEventListener("refresh",Q),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=zr,zr&&!d()&&d(1),zr&&Me.ticker.add(Wi),F=a._dc,W=Me.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:w0(d,d(),function(){return W.pause()})},onUpdate:lr,onComplete:F.vars.onComplete}),a};je.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new bt(r)};je.normalizeScroll=function(r){if(typeof r=="undefined")return jn;if(r===!0&&jn)return jn.enable();if(r===!1)return jn&&jn.kill();var e=r instanceof bt?r:EA(r);return jn&&jn.target===e.target&&jn.kill(),Es(e.target)&&(jn=e),e};je.core={_getVelocityProp:rl,_inputObserver:T0,_scrollers:et,_proxies:Ai,bridge:{ss:function(){pi||Rs("scrollStart"),pi=Pn()},ref:function(){return mn}}};p0()&&Me.registerPlugin(je);var td=function(r,e){return td=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},td(r,e)};function E0(r,e){td(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var kn=function(){return kn=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},kn.apply(this,arguments)};function qi(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}function A0(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}var yV=da(FS()),xV=da(HS()),SV=da(bM()),MV=da(LM()),bV=da(zM());var bu,wu=new WeakMap;function HM(){if(bu!==void 0)return bu;var r=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return r=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return bu=r?{passive:!1}:!1,bu}function gi(r){var e=wu.get(r)||[];return wu.set(r,e),function(n,i,s){function o(a){a.defaultPrevented||s(a)}i.split(/\s+/g).forEach(function(a){e.push({elem:n,eventName:a,handler:o}),n.addEventListener(a,o,HM())})}}function VM(r){var e=wu.get(r);e&&(e.forEach(function(t){var n=t.elem,i=t.eventName,s=t.handler;n.removeEventListener(i,s,HM())}),wu.delete(r))}function GM(r){return r.touches?r.touches[r.touches.length-1]:r}function fr(r){var e=GM(r);return{x:e.clientX,y:e.clientY}}function rc(r,e){return e===void 0&&(e=[]),e.some(function(t){return r===t})}var WM=["webkit","moz","ms","o"],bO=new RegExp("^-(?!(?:"+WM.join("|")+")-)");function wO(r){var e={};return Object.keys(r).forEach(function(t){if(!bO.test(t)){e[t]=r[t];return}var n=r[t];t=t.replace(/^-/,""),e[t]=n,WM.forEach(function(i){e["-"+i+"-"+t]=n})}),e}function _i(r,e){e=wO(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(i,s){return s.toUpperCase()});r.style[n]=e[t]})}var TO=function(){function r(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=fr(e)}return r.prototype.update=function(e){var t=this,n=t.velocity,i=t.updateTime,s=t.lastPosition,o=Date.now(),a=fr(e),c={x:-(a.x-s.x),y:-(a.y-s.y)},l=o-i||16.7,u=c.x/l*16.7,h=c.y/l*16.7;n.x=u*this.velocityMultiplier,n.y=h*this.velocityMultiplier,this.delta=c,this.updateTime=o,this.lastPosition=a},r}();var qM=function(){function r(){this._touchList={}}return Object.defineProperty(r.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),r.prototype.isActive=function(){return this._activeTouchID!==void 0},r.prototype.getDelta=function(){var e=this._getActiveTracker();return e?kn({},e.delta):this._primitiveValue},r.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?kn({},e.velocity):this._primitiveValue},r.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(s){for(var o=Math.abs(i[s])<=10?0:i[s];o!==0;)n[s]+=o,o=o*t|0}),n},r.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(i){t._add(i)}),this._touchList},r.prototype.update=function(e){var t=this,n=e.touches,i=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(i),this._touchList},r.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},r.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new TO(e);this._touchList[e.identifier]=t},r.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},r.prototype._delete=function(e){delete this._touchList[e.identifier]},r.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},r.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},r.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},r}();function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function sc(r,e,t){e===void 0&&(e=0);var n,i=-1/0;return function(){for(var o=this,a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(t){var l=Date.now(),u=l-i;i=l,u>=e&&r.apply(this,a)}clearTimeout(n),n=setTimeout(function(){r.apply(o,a)},e)}}function Cp(r,e){return r===void 0&&(r=-1/0),e===void 0&&(e=1/0),function(t,n){var i="_"+n;Object.defineProperty(t,n,{get:function(){return this[i]},set:function(s){Object.defineProperty(this,i,{value:Ht(s,r,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function Tu(r,e){var t="_"+e;Object.defineProperty(r,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function Eu(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return function(t,n,i){var s=i.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:sc.apply(void 0,A0([s],r))}),this[n]}}}}var XM=function(){function r(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(r.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),qi([Cp(0,1)],r.prototype,"damping",void 0),qi([Cp(0,1/0)],r.prototype,"thumbMinSize",void 0),qi([Tu],r.prototype,"renderByPixels",void 0),qi([Tu],r.prototype,"alwaysShowTracks",void 0),qi([Tu],r.prototype,"continuousScrolling",void 0),r}();var Vr;(function(r){r.X="x",r.Y="y"})(Vr||(Vr={}));var YM=function(){function r(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return r.prototype.attachTo=function(e){e.appendChild(this.element)},r.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),_i(this.element,this._getStyle())},r.prototype._getStyle=function(){switch(this._direction){case Vr.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case Vr.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},r}();var Pp=function(){function r(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new YM(e,t),this.thumb.attachTo(this.element)}return r.prototype.attachTo=function(e){e.appendChild(this.element)},r.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},r.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},r.prototype.update=function(e,t,n){_i(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},r}();var jM=function(){function r(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new Pp(Vr.X,t),this.yAxis=new Pp(Vr.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return r.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},r.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},qi([Eu(300)],r.prototype,"autoHideOnIdle",null),r}();function ZM(r){var e=r.containerEl,t=r.contentEl,n=getComputedStyle(e),i=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(a){return n[a]?parseFloat(n[a]):0}),s=i[0]+i[1],o=i[2]+i[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+o,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function KM(r,e){var t=r.bounding,n=e.getBoundingClientRect(),i=Math.max(t.top,n.top),s=Math.max(t.left,n.left),o=Math.min(t.right,n.right),a=Math.min(t.bottom,n.bottom);return i<a&&s<o}function JM(r){var e=r.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=r.containerEl.getBoundingClientRect(),i={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};r.size=e,r.limit=t,r.bounding=i,r.track.update(),r.setPosition()}function $M(r,e,t){var n=r.options,i=r.offset,s=r.limit,o=r.track,a=r.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=Ht(e,0,s.x),t=Ht(t,0,s.y),e!==i.x&&o.xAxis.show(),t!==i.y&&o.yAxis.show(),n.alwaysShowTracks||o.autoHideOnIdle(),e===i.x&&t===i.y?null:(i.x=e,i.y=t,_i(a,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),o.update(),{offset:kn({},i),limit:kn({},s)})}var QM=new WeakMap;function eb(r,e,t,n,i){n===void 0&&(n=0);var s=i===void 0?{}:i,o=s.easing,a=o===void 0?EO:o,c=s.callback,l=r.options,u=r.offset,h=r.limit;l.renderByPixels&&(e=Math.round(e),t=Math.round(t));var f=u.x,d=u.y,_=Ht(e,0,h.x)-f,g=Ht(t,0,h.y)-d,m=Date.now();function p(){var y=Date.now()-m,v=n?a(Math.min(y/n,1)):1;if(r.setPosition(f+_*v,d+g*v),y>=n)typeof c=="function"&&c.call(r);else{var S=requestAnimationFrame(p);QM.set(r,S)}}cancelAnimationFrame(QM.get(r)),p()}function EO(r){return Math.pow(r-1,3)+1}function tb(r,e,t){var n=t===void 0?{}:t,i=n.alignToTop,s=i===void 0?!0:i,o=n.onlyScrollIfNeeded,a=o===void 0?!1:o,c=n.offsetTop,l=c===void 0?0:c,u=n.offsetLeft,h=u===void 0?0:u,f=n.offsetBottom,d=f===void 0?0:f,_=r.containerEl,g=r.bounding,m=r.offset,p=r.limit;if(!(!e||!_.contains(e))){var y=e.getBoundingClientRect();if(!(a&&r.isVisible(e))){var v=s?y.top-g.top-l:y.bottom-g.bottom+d;r.setMomentum(y.left-g.left-h,Ht(v,-m.y,p.y-m.y))}}}var Ru=function(){function r(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=kn(kn({},n.defaultOptions),t)}return r.prototype.onInit=function(){},r.prototype.onDestroy=function(){},r.prototype.onUpdate=function(){},r.prototype.onRender=function(e){},r.prototype.transformDelta=function(e,t){return kn({},e)},r.pluginName="",r.defaultOptions={},r}();var Au={order:new Set,constructors:{}};function nb(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];r.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Au.order.add(n),Au.constructors[n]=t})}function ib(r,e){return Array.from(Au.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Au.constructors[t],i=new n(r,e[t]);return e[t]=i.options,i})}var Pu={};RT(Pu,{keyboardHandler:()=>AO,mouseHandler:()=>IO,resizeHandler:()=>LO,selectHandler:()=>OO,touchHandler:()=>NO,wheelHandler:()=>UO});var vi;(function(r){r[r.TAB=9]="TAB",r[r.SPACE=32]="SPACE",r[r.PAGE_UP=33]="PAGE_UP",r[r.PAGE_DOWN=34]="PAGE_DOWN",r[r.END=35]="END",r[r.HOME=36]="HOME",r[r.LEFT=37]="LEFT",r[r.UP=38]="UP",r[r.RIGHT=39]="RIGHT",r[r.DOWN=40]="DOWN"})(vi||(vi={}));function AO(r){var e=gi(r),t=r.containerEl;e(t,"keydown",function(n){var i=document.activeElement;if(!(i!==t&&!t.contains(i))&&!PO(i)){var s=RO(r,n.keyCode||n.which);if(s){var o=s[0],a=s[1];r.addTransformableMomentum(o,a,n,function(c){c?n.preventDefault():(r.containerEl.blur(),r.parent&&r.parent.containerEl.focus())})}}})}function RO(r,e){var t=r.size,n=r.limit,i=r.offset;switch(e){case vi.TAB:return CO(r);case vi.SPACE:return[0,200];case vi.PAGE_UP:return[0,-t.container.height+40];case vi.PAGE_DOWN:return[0,t.container.height-40];case vi.END:return[0,n.y-i.y];case vi.HOME:return[0,-i.y];case vi.LEFT:return[-40,0];case vi.UP:return[0,-40];case vi.RIGHT:return[40,0];case vi.DOWN:return[0,40];default:return null}}function CO(r){requestAnimationFrame(function(){r.scrollIntoView(document.activeElement,{offsetTop:r.size.container.height/2,offsetLeft:r.size.container.width/2,onlyScrollIfNeeded:!0})})}function PO(r){return r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA"||r.isContentEditable?!r.disabled:!1}var Yi;(function(r){r[r.X=0]="X",r[r.Y=1]="Y"})(Yi||(Yi={}));function IO(r){var e=gi(r),t=r.containerEl,n=r.track,i=n.xAxis,s=n.yAxis;function o(d,_){var g=r.size,m=r.limit,p=r.offset;if(d===Yi.X){var y=g.container.width+(i.thumb.realSize-i.thumb.displaySize);return Ht(_/y*g.content.width,0,m.x)-p.x}if(d===Yi.Y){var v=g.container.height+(s.thumb.realSize-s.thumb.displaySize);return Ht(_/v*g.content.height,0,m.y)-p.y}return 0}function a(d){if(rc(d,[i.element,i.thumb.element]))return Yi.X;if(rc(d,[s.element,s.thumb.element]))return Yi.Y}var c,l,u,h,f;e(t,"click",function(d){if(!(l||!rc(d.target,[i.element,s.element]))){var _=d.target,g=a(_),m=_.getBoundingClientRect(),p=fr(d);if(g===Yi.X){var y=p.x-m.left-i.thumb.displaySize/2;r.setMomentum(o(g,y),0)}if(g===Yi.Y){var y=p.y-m.top-s.thumb.displaySize/2;r.setMomentum(0,o(g,y))}}}),e(t,"mousedown",function(d){if(rc(d.target,[i.thumb.element,s.thumb.element])){c=!0;var _=d.target,g=fr(d),m=_.getBoundingClientRect();h=a(_),u={x:g.x-m.left,y:g.y-m.top},f=t.getBoundingClientRect(),_i(r.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(d){if(c){l=!0;var _=fr(d);if(h===Yi.X){var g=_.x-u.x-f.left;r.setMomentum(o(h,g),0)}if(h===Yi.Y){var g=_.y-u.y-f.top;r.setMomentum(0,o(h,g))}}}),e(window,"mouseup blur",function(){c=l=!1,_i(r.containerEl,{"-user-select":""})})}function LO(r){var e=gi(r);e(window,"resize",sc(r.update.bind(r),300))}function OO(r){var e=gi(r),t=r.containerEl,n=r.contentEl,i=!1,s=!1,o;function a(c){var l=c.x,u=c.y;if(!(!l&&!u)){var h=r.offset,f=r.limit;r.setMomentum(Ht(h.x+l,0,f.x)-h.x,Ht(h.y+u,0,f.y)-h.y),o=requestAnimationFrame(function(){a({x:l,y:u})})}}e(window,"mousemove",function(c){if(i){cancelAnimationFrame(o);var l=DO(r,c);a(l)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(o),i=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(o),i=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),i=!1,s=!1}),e(t,"scroll",function(c){c.preventDefault(),t.scrollTop=t.scrollLeft=0})}function DO(r,e){var t=r.bounding,n=t.top,i=t.right,s=t.bottom,o=t.left,a=fr(e),c=a.x,l=a.y,u={x:0,y:0},h=20;return c===0&&l===0||(c>i-h?u.x=c-i+h:c<o+h&&(u.x=c-o-h),l>s-h?u.y=l-s+h:l<n+h&&(u.y=l-n-h),u.x*=2,u.y*=2),u}var Cu;function NO(r){var e=r.options.delegateTo||r.containerEl,t=new qM,n=gi(r),i,s=0;n(e,"touchstart",function(o){t.track(o),r.setMomentum(0,0),s===0&&(i=r.options.damping,r.options.damping=Math.max(i,.5)),s++}),n(e,"touchmove",function(o){if(!(Cu&&Cu!==r)){t.update(o);var a=t.getDelta(),c=a.x,l=a.y;r.addTransformableMomentum(c,l,o,function(u){u&&o.cancelable&&(o.preventDefault(),Cu=r)})}}),n(e,"touchcancel touchend",function(o){var a=t.getEasingDistance(i);r.addTransformableMomentum(a.x,a.y,o),s--,s===0&&(r.options.damping=i),t.release(o),Cu=null})}function UO(r){var e=gi(r),t=r.options.delegateTo||r.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(i){var s=BO(i),o=s.x,a=s.y;r.addTransformableMomentum(o,a,i,function(c){c&&i.preventDefault()})})}var oc={STANDARD:1,OTHERS:-3},rb=[1,28,500],FO=function(r){return rb[r]||rb[0]};function BO(r){if("deltaX"in r){var e=FO(r.deltaMode);return{x:r.deltaX/oc.STANDARD*e,y:r.deltaY/oc.STANDARD*e}}return"wheelDeltaX"in r?{x:r.wheelDeltaX/oc.OTHERS,y:r.wheelDeltaY/oc.OTHERS}:{x:0,y:r.wheelDelta/oc.OTHERS}}var Oi=new Map,Ip=function(){function r(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var i=this.contentEl=document.createElement("div");this.options=new XM(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),_i(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),i.className="scroll-content",Array.from(e.childNodes).forEach(function(c){i.appendChild(c)}),e.appendChild(i),this.track=new jM(this),this.size=this.getSize(),this._plugins=ib(this,this.options.plugins);var s=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,o,{withoutCallbacks:!0});var a=window.ResizeObserver;typeof a=="function"&&(this._observer=new a(function(){n.update()}),this._observer.observe(i)),Oi.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(r.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=Oi.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),r.prototype.getSize=function(){return ZM(this)},r.prototype.update=function(){JM(this),this._plugins.forEach(function(e){e.onUpdate()})},r.prototype.isVisible=function(e){return KM(this,e)},r.prototype.setPosition=function(e,t,n){var i=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=$M(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(o){o.call(i,s)})},r.prototype.scrollTo=function(e,t,n,i){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),i===void 0&&(i={}),eb(this,e,t,n,i)},r.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),tb(this,e,t)},r.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},r.prototype.removeListener=function(e){this._listeners.delete(e)},r.prototype.addTransformableMomentum=function(e,t,n,i){this._updateDebounced();var s=this._plugins.reduce(function(a,c){return c.transformDelta(a,n)||a},{x:e,y:t}),o=!this._shouldPropagateMomentum(s.x,s.y);o&&this.addMomentum(s.x,s.y),i&&i.call(this,o)},r.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},r.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},r.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},r.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;VM(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),Oi.delete(this.containerEl);for(var i=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);i.forEach(function(s){t.appendChild(s)}),_i(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},r.prototype._init=function(){var e=this;this.update(),Object.keys(Pu).forEach(function(t){Pu[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},r.prototype._updateDebounced=function(){this.update()},r.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,i=n.options,s=n.offset,o=n.limit;if(!i.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var a=Ht(e+s.x,0,o.x),c=Ht(t+s.y,0,o.y),l=!0;return l=l&&a===s.x,l=l&&c===s.y,l=l&&(s.x===o.x||s.x===0||s.y===o.y||s.y===0),l},r.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var i=kn({},this._momentum);this._plugins.forEach(function(s){s.onRender(i)}),this._renderID=requestAnimationFrame(this._render.bind(this))},r.prototype._nextTick=function(e){var t=this,n=t.options,i=t.offset,s=t._momentum,o=i[e],a=s[e];if(Math.abs(a)<=.1)return{momentum:0,position:o+a};var c=a*(1-n.damping);return n.renderByPixels&&(c|=0),{momentum:c,position:o+a-c}},qi([Eu(100,!0)],r.prototype,"_updateDebounced",null),r}();var kO="rgba(222, 222, 222, .75)",zO="rgba(0, 0, 0, .5)",HO=`
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
  background: `+kO+`;
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
  background: `+zO+`;
  border-radius: 4px;
}
`,sb="smooth-scrollbar-style",Iu=!1;function Lp(){if(!(Iu||typeof window=="undefined")){var r=document.createElement("style");r.id=sb,r.textContent=HO,document.head&&document.head.appendChild(r),Iu=!0}}function ob(){if(!(!Iu||typeof window=="undefined")){var r=document.getElementById(sb);!r||!r.parentNode||(r.parentNode.removeChild(r),Iu=!1)}}var VO=function(r){E0(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return Lp(),Oi.has(t)?Oi.get(t):new Ip(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return Oi.has(t)},e.get=function(t){return Oi.get(t)},e.getAll=function(){return Array.from(Oi.values())},e.destroy=function(t){var n=Oi.get(t);n&&n.destroy()},e.destroyAll=function(){Oi.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return nb.apply(void 0,t)},e.attachStyle=function(){return Lp()},e.detachStyle=function(){return ob()},e.version="8.8.4",e.ScrollbarPlugin=Ru,e}(Ip),Op=VO;var Xm="156";var GO=0,ab=1,WO=2;var Gw=1,qO=2,xr=3,Ji=0,Wn=1,Gn=2;var Zr=0,Xo=1,cb=2,lb=3,ub=4,XO=5,Wo=100,YO=101,jO=102,hb=103,fb=104,ZO=200,KO=201,JO=202,$O=203,Ww=204,qw=205,QO=206,eD=207,tD=208,nD=209,iD=210,rD=0,sD=1,oD=2,fm=3,aD=4,cD=5,lD=6,uD=7,Xw=0,hD=1,fD=2,Kr=0,dD=1,pD=2,mD=3,gD=4,_D=5,Yw=300,Zo=301,Ko=302,xc=303,dm=304,Ah=306,qs=1e3,ni=1001,Sc=1002,jt=1003,ih=1004;var mc=1005;var Dn=1006,Ym=1007;var $r=1008;var Jr=1009,vD=1010,yD=1011,jm=1012,jw=1013,jr=1014,Mr=1015,Mc=1016,Zw=1017,Kw=1018,Hs=1020,xD=1021,xi=1023,SD=1024,MD=1025,Vs=1026,Jo=1027,bD=1028,Jw=1029,wD=1030,$w=1031,Qw=1033,Dp=33776,Np=33777,Up=33778,Fp=33779,db=35840,pb=35841,mb=35842,gb=35843,TD=36196,_b=37492,vb=37496,yb=37808,xb=37809,Sb=37810,Mb=37811,bb=37812,wb=37813,Tb=37814,Eb=37815,Ab=37816,Rb=37817,Cb=37818,Pb=37819,Ib=37820,Lb=37821,Bp=36492,Ob=36494,Db=36495,ED=36283,Nb=36284,Ub=36285,Fb=36286;var $o=2300,Xs=2301,kp=2302,Bb=2400,kb=2401,zb=2402,AD=2500;var eT=0,Rh=1,Oc=2,tT=3e3,Gs=3001,RD=3200,CD=3201,nT=0,PD=1,Ws="",He="srgb",Ft="srgb-linear",Ch="display-p3";var zp=7680;var ID=519,LD=512,OD=513,DD=514,ND=515,UD=516,FD=517,BD=518,kD=519,pm=35044;var Hb="300 es",mm=1035,br=2e3,rh=2001,Qr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vb=1234567,gc=Math.PI/180,Qo=180/Math.PI;function Fi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function Zm(r,e){return(r%e+e)%e}function zD(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function HD(r,e,t){return r!==e?(t-r)/(e-r):0}function _c(r,e,t){return(1-t)*r+t*e}function VD(r,e,t,n){return _c(r,e,1-Math.exp(-t*n))}function GD(r,e=1){return e-Math.abs(Zm(r,e*2)-e)}function WD(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function qD(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function XD(r,e){return r+Math.floor(Math.random()*(e-r+1))}function YD(r,e){return r+Math.random()*(e-r)}function jD(r){return r*(.5-Math.random())}function ZD(r){r!==void 0&&(Vb=r);let e=Vb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KD(r){return r*gc}function JD(r){return r*Qo}function gm(r){return(r&r-1)===0&&r!==0}function iT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $D(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*_,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*_,a*l);break;case"ZYZ":r.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var rT={DEG2RAD:gc,RAD2DEG:Qo,generateUUID:Fi,clamp:vn,euclideanModulo:Zm,mapLinear:zD,inverseLerp:HD,lerp:_c,damp:VD,pingpong:GD,smoothstep:WD,smootherstep:qD,randInt:XD,randFloat:YD,randFloatSpread:jD,seededRandom:ZD,degToRad:KD,radToDeg:JD,isPowerOfTwo:gm,ceilPowerOfTwo:iT,floorPowerOfTwo:sh,setQuaternionFromProperEuler:$D,normalize:gt,denormalize:Zi},it=class{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class{constructor(e,t,n,i,s,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],v=i[4],S=i[7],M=i[2],R=i[5],w=i[8];return s[0]=o*g+a*y+c*M,s[3]=o*m+a*v+c*R,s[6]=o*p+a*S+c*w,s[1]=l*g+u*y+h*M,s[4]=l*m+u*v+h*R,s[7]=l*p+u*S+h*w,s[2]=f*g+d*y+_*M,s[5]=f*m+d*v+_*R,s[8]=f*p+d*S+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hp.makeScale(e,t)),this}rotate(e){return this.premultiply(Hp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hp=new Ke;function sT(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function QD(){let r=bc("canvas");return r.style.display="block",r}var Gb={};function vc(r){r in Gb||(Gb[r]=!0,console.warn(r))}function Yo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vp(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var eN=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tN=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nN(r){return r.convertSRGBToLinear().applyMatrix3(tN)}function iN(r){return r.applyMatrix3(eN).convertLinearToSRGB()}var rN={[Ft]:r=>r,[He]:r=>r.convertSRGBToLinear(),[Ch]:nN},sN={[Ft]:r=>r,[He]:r=>r.convertLinearToSRGB(),[Ch]:iN},Vn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Ft},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=rN[e],i=sN[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Eo,oh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=bc("canvas")),Eo.width=e.width,Eo.height=e.height;let n=Eo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=bc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yo(t[n]/255)*255):t[n]=Yo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oN=0,ah=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oN++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gp(i[o].image)):s.push(Gp(i[o]))}else s=Gp(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Gp(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?oh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var aN=0,Gt=class extends Qr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=ni,i=ni,s=Dn,o=$r,a=xi,c=Jr,l=Gt.DEFAULT_ANISOTROPY,u=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aN++}),this.uuid=Fi(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gs?He:Ws),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Gs:tT}set encoding(e){vc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gs?He:Ws}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Yw;Gt.DEFAULT_ANISOTROPY=1;var mt=class{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,S=(d+1)/2,M=(p+1)/2,R=(u+f)/4,w=(h+g)/4,I=(_+m)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=R/n,s=w/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=R/i,s=I/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_m=class extends Qr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(vc("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gs?He:Ws),this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wr=class extends _m{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ch=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vm=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a,p=c*f+l*d+u*_+h*g,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let M=Math.sqrt(v),R=Math.atan2(M,p*y);m=Math.sin(m*R)/M,a=Math.sin(a*R)/M}let S=a*y;if(c=c*m+f*S,l=l*m+d*S,u=u*m+_*S,h=h*m+g*S,m===1-a){let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wp.copy(this).projectOnVector(e),this.sub(Wp)}reflect(e){return this.sub(Wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wp=new O,Wb=new Bi,Mi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox),Ao.applyMatrix4(e.matrixWorld),this.union(Ao);else{let i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)pr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pr)}else i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ac),Lu.subVectors(this.max,ac),Ro.subVectors(e.a,ac),Co.subVectors(e.b,ac),Po.subVectors(e.c,ac),Gr.subVectors(Co,Ro),Wr.subVectors(Po,Co),Ns.subVectors(Ro,Po);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-Ns.z,Ns.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,Ns.z,0,-Ns.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-Ns.y,Ns.x,0];return!qp(t,Ro,Co,Po,Lu)||(t=[1,0,0,0,1,0,0,0,1],!qp(t,Ro,Co,Po,Lu))?!1:(Ou.crossVectors(Gr,Wr),t=[Ou.x,Ou.y,Ou.z],qp(t,Ro,Co,Po,Lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dr=[new O,new O,new O,new O,new O,new O,new O,new O],pr=new O,Ao=new Mi,Ro=new O,Co=new O,Po=new O,Gr=new O,Wr=new O,Ns=new O,ac=new O,Lu=new O,Ou=new O,Us=new O;function qp(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Us.fromArray(r,s);let a=i.x*Math.abs(Us.x)+i.y*Math.abs(Us.y)+i.z*Math.abs(Us.z),c=e.dot(Us),l=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var cN=new Mi,cc=new O,Xp=new O,ii=class{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cN.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cc.subVectors(e,this.center);let t=cc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cc.copy(e.center).add(Xp)),this.expandByPoint(cc.copy(e.center).sub(Xp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mr=new O,Yp=new O,Du=new O,qr=new O,jp=new O,Nu=new O,Zp=new O,ea=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yp.copy(e).add(t).multiplyScalar(.5),Du.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Yp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Du),a=qr.dot(this.direction),c=-qr.dot(Du),l=qr.lengthSq(),u=Math.abs(1-o*o),h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Yp).addScaledVector(Du,f),d}intersectSphere(e,t){mr.subVectors(e.center,this.origin);let n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,n,i,s){jp.subVectors(t,e),Nu.subVectors(n,e),Zp.crossVectors(jp,Nu);let o=this.direction.dot(Zp),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qr.subVectors(this.origin,e);let c=a*this.direction.dot(Nu.crossVectors(qr,Nu));if(c<0)return null;let l=a*this.direction.dot(jp.cross(qr));if(l<0||c+l>o)return null;let u=-a*qr.dot(Zp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Io.setFromMatrixColumn(e,0).length(),s=1/Io.setFromMatrixColumn(e,1).length(),o=1/Io.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lN,e,uN)}lookAt(e,t,n){let i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Xr.crossVectors(n,Qn),Xr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Xr.crossVectors(n,Qn)),Xr.normalize(),Uu.crossVectors(Qn,Xr),i[0]=Xr.x,i[4]=Uu.x,i[8]=Qn.x,i[1]=Xr.y,i[5]=Uu.y,i[9]=Qn.y,i[2]=Xr.z,i[6]=Uu.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],v=n[7],S=n[11],M=n[15],R=i[0],w=i[4],I=i[8],x=i[12],b=i[1],G=i[5],W=i[9],D=i[13],U=i[2],F=i[6],Q=i[10],B=i[14],q=i[3],N=i[7],A=i[11],L=i[15];return s[0]=o*R+a*b+c*U+l*q,s[4]=o*w+a*G+c*F+l*N,s[8]=o*I+a*W+c*Q+l*A,s[12]=o*x+a*D+c*B+l*L,s[1]=u*R+h*b+f*U+d*q,s[5]=u*w+h*G+f*F+d*N,s[9]=u*I+h*W+f*Q+d*A,s[13]=u*x+h*D+f*B+d*L,s[2]=_*R+g*b+m*U+p*q,s[6]=_*w+g*G+m*F+p*N,s[10]=_*I+g*W+m*Q+p*A,s[14]=_*x+g*D+m*B+p*L,s[3]=y*R+v*b+S*U+M*q,s[7]=y*w+v*G+S*F+M*N,s[11]=y*I+v*W+S*Q+M*A,s[15]=y*x+v*D+S*B+M*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+g*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,v=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,S=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,M=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,R=t*y+n*v+i*S+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=y*w,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*w,e[4]=v*w,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*w,e[8]=S*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*w,e[12]=M*w,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,y=c*l,v=c*u,S=c*h,M=n.x,R=n.y,w=n.z;return i[0]=(1-(g+p))*M,i[1]=(d+S)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(d-S)*R,i[5]=(1-(f+p))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(_+v)*w,i[9]=(m-y)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Io.set(i[0],i[1],i[2]).length(),o=Io.set(i[4],i[5],i[6]).length(),a=Io.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);let l=1/s,u=1/o,h=1/a;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=h,Di.elements[9]*=h,Di.elements[10]*=h,t.setFromRotationMatrix(Di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=br){let c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,_;if(a===br)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===rh)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=br){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u,_,g;if(a===br)_=(o+s)*h,g=-2*h;else if(a===rh)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Io=new O,Di=new Xe,lN=new O(0,0,0),uN=new O(1,1,1),Xr=new O,Uu=new O,Qn=new O,qb=new Xe,Xb=new Bi,ta=class{constructor(e=0,t=0,n=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qb,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xb.setFromEuler(this),this.setFromQuaternion(Xb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ta.DEFAULT_ORDER="XYZ";var lh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hN=0,Yb=new O,Lo=new Bi,gr=new Xe,Fu=new O,lc=new O,fN=new O,dN=new Bi,jb=new O(1,0,0),Zb=new O(0,1,0),Kb=new O(0,0,1),pN={type:"added"},mN={type:"removed"},yt=class extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hN++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();let e=new O,t=new ta,n=new Bi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(jb,e)}rotateY(e){return this.rotateOnAxis(Zb,e)}rotateZ(e){return this.rotateOnAxis(Kb,e)}translateOnAxis(e,t){return Yb.copy(e).applyQuaternion(this.quaternion),this.position.add(Yb.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jb,e)}translateY(e){return this.translateOnAxis(Zb,e)}translateZ(e){return this.translateOnAxis(Kb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fu.copy(e):Fu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(lc,Fu,this.up):gr.lookAt(Fu,lc,this.up),this.quaternion.setFromRotationMatrix(gr),i&&(gr.extractRotation(i.matrixWorld),Lo.setFromRotationMatrix(gr),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pN)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mN)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,e,fN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,dN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new O(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new O,_r=new O,Kp=new O,vr=new O,Oo=new O,Do=new O,Jb=new O,Jp=new O,$p=new O,Qp=new O,Bu=!1,ti=class{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ni.subVectors(e,t),i.cross(Ni);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ni.subVectors(i,t),_r.subVectors(n,t),Kp.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(_r),c=Ni.dot(Kp),l=_r.dot(_r),u=_r.dot(Kp),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);let f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vr),vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getUV(e,t,n,i,s,o,a,c){return Bu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bu=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,vr),c.setScalar(0),c.addScaledVector(s,vr.x),c.addScaledVector(o,vr.y),c.addScaledVector(a,vr.z),c}static isFrontFacing(e,t,n,i){return Ni.subVectors(n,t),_r.subVectors(e,t),Ni.cross(_r).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Ni.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Bu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bu=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Oo.subVectors(i,n),Do.subVectors(s,n),Jp.subVectors(e,n);let c=Oo.dot(Jp),l=Do.dot(Jp);if(c<=0&&l<=0)return t.copy(n);$p.subVectors(e,i);let u=Oo.dot($p),h=Do.dot($p);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Oo,o);Qp.subVectors(e,s);let d=Oo.dot(Qp),_=Do.dot(Qp);if(_>=0&&d<=_)return t.copy(s);let g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Do,a);let m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Jb.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Jb,a);let p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Oo,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gN=0,ri=class extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gN++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Xo,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ww,this.blendDst=qw,this.blendEquation=Wo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ID,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zp,this.stencilZFail=zp,this.stencilZPass=zp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ku={h:0,s:0,l:0};function em(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vn.workingColorSpace){if(e=Zm(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=em(o,s,e+1/3),this.g=em(o,s,e),this.b=em(o,s,e-1/3)}return Vn.toWorkingColorSpace(this,i),this}setStyle(e,t=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=oT[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=Vp(e.r),this.g=Vp(e.g),this.b=Vp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Vn.fromWorkingColorSpace(_n.copy(this),e),Math.round(vn(_n.r*255,0,255))*65536+Math.round(vn(_n.g*255,0,255))*256+Math.round(vn(_n.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn.workingColorSpace){Vn.fromWorkingColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Vn.workingColorSpace){return Vn.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=He){Vn.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),Ui.h+=e,Ui.s+=t,Ui.l+=n,this.setHSL(Ui.h,Ui.s,Ui.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ku);let n=_c(Ui.h,ku.h,t),i=_c(Ui.s,ku.s,t),s=_c(Ui.l,ku.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ze;ze.NAMES=oT;var ln=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new O,zu=new it,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pm,this.updateRange={offset:0,count:-1},this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zu.fromBufferAttribute(this,t),zu.applyMatrix3(e),this.setXY(t,zu.x,zu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var uh=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hh=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Si=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var _N=0,yi=new Xe,tm=new yt,No=new O,ei=new Mi,uc=new Mi,en=new O,yn=class extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_N++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sT(e)?hh:uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,n){return yi.makeTranslation(e,t,n),this.applyMatrix4(yi),this}scale(e,t,n){return yi.makeScale(e,t,n),this.applyMatrix4(yi),this}lookAt(e){return tm.lookAt(e),tm.updateMatrix(),this.applyMatrix4(tm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];uc.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(ei.min,uc.min),ei.expandByPoint(en),en.addVectors(ei.max,uc.max),ei.expandByPoint(en)):(ei.expandByPoint(uc.min),ei.expandByPoint(uc.max))}ei.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(No.fromBufferAttribute(e,l),en.add(No)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new O,u[b]=new O;let h=new O,f=new O,d=new O,_=new it,g=new it,m=new it,p=new O,y=new O;function v(b,G,W){h.fromArray(i,b*3),f.fromArray(i,G*3),d.fromArray(i,W*3),_.fromArray(o,b*2),g.fromArray(o,G*2),m.fromArray(o,W*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);let D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(D),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),l[b].add(p),l[G].add(p),l[W].add(p),u[b].add(y),u[G].add(y),u[W].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,G=S.length;b<G;++b){let W=S[b],D=W.start,U=W.count;for(let F=D,Q=D+U;F<Q;F+=3)v(n[F+0],n[F+1],n[F+2])}let M=new O,R=new O,w=new O,I=new O;function x(b){w.fromArray(s,b*3),I.copy(w);let G=l[b];M.copy(G),M.sub(w.multiplyScalar(w.dot(G))).normalize(),R.crossVectors(I,G);let D=R.dot(u[b])<0?-1:1;c[b*4]=M.x,c[b*4+1]=M.y,c[b*4+2]=M.z,c[b*4+3]=D}for(let b=0,G=S.length;b<G;++b){let W=S[b],D=W.start,U=W.count;for(let F=D,Q=D+U;F<Q;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new yn,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$b=new Xe,Fs=new ea,Hu=new ii,Qb=new O,Uo=new O,Fo=new O,Bo=new O,nm=new O,Vu=new O,Gu=new it,Wu=new it,qu=new it,ew=new O,tw=new O,nw=new O,Xu=new O,Yu=new O,cn=class extends yt{constructor(e=new yn,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Vu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(nm.fromBufferAttribute(h,e),o?Vu.addScaledVector(nm,u):Vu.addScaledVector(nm.sub(t),u))}t.add(Vu)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(s),Fs.copy(e.ray).recast(e.near),!(Hu.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Hu,Qb)===null||Fs.origin.distanceToSquared(Qb)>(e.far-e.near)**2))&&($b.copy(s).invert(),Fs.copy(e.ray).applyMatrix4($b),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){let R=a.getX(S),w=a.getX(S+1),I=a.getX(S+2);i=ju(this,p,e,n,l,u,h,R,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=ju(this,o,e,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){let R=S,w=S+1,I=S+2;i=ju(this,p,e,n,l,u,h,R,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=m,v=m+1,S=m+2;i=ju(this,o,e,n,l,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function vN(r,e,t,n,i,s,o,a){let c;if(e.side===Wn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Ji,a),c===null)return null;Yu.copy(a),Yu.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Yu);return l<t.near||l>t.far?null:{distance:l,point:Yu.clone(),object:r}}function ju(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Uo),r.getVertexPosition(c,Fo),r.getVertexPosition(l,Bo);let u=vN(r,e,t,n,Uo,Fo,Bo,Xu);if(u){i&&(Gu.fromBufferAttribute(i,a),Wu.fromBufferAttribute(i,c),qu.fromBufferAttribute(i,l),u.uv=ti.getInterpolation(Xu,Uo,Fo,Bo,Gu,Wu,qu,new it)),s&&(Gu.fromBufferAttribute(s,a),Wu.fromBufferAttribute(s,c),qu.fromBufferAttribute(s,l),u.uv1=ti.getInterpolation(Xu,Uo,Fo,Bo,Gu,Wu,qu,new it),u.uv2=u.uv1),o&&(ew.fromBufferAttribute(o,a),tw.fromBufferAttribute(o,c),nw.fromBufferAttribute(o,l),u.normal=ti.getInterpolation(Xu,Uo,Fo,Bo,ew,tw,nw,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new O,materialIndex:0};ti.getNormal(Uo,Fo,Bo,h.normal),u.face=h}return u}var Tr=class extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Si(l,3)),this.setAttribute("normal",new Si(u,3)),this.setAttribute("uv",new Si(h,2));function _(g,m,p,y,v,S,M,R,w,I,x){let b=S/w,G=M/I,W=S/2,D=M/2,U=R/2,F=w+1,Q=I+1,B=0,q=0,N=new O;for(let A=0;A<Q;A++){let L=A*G-D;for(let X=0;X<F;X++){let oe=X*b-W;N[g]=oe*y,N[m]=L*v,N[p]=U,l.push(N.x,N.y,N.z),N[g]=0,N[m]=0,N[p]=R>0?1:-1,u.push(N.x,N.y,N.z),h.push(X/w),h.push(1-A/I),B+=1}}for(let A=0;A<I;A++)for(let L=0;L<w;L++){let X=f+L+F*A,oe=f+L+F*(A+1),se=f+(L+1)+F*(A+1),ie=f+(L+1)+F*A;c.push(X,oe,ie),c.push(oe,se,ie),q+=6}a.addGroup(d,q,x),d+=q,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function na(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){let e={};for(let t=0;t<r.length;t++){let n=na(r[t]);for(let i in n)e[i]=n[i]}return e}function yN(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function aT(r){return r.getRenderTarget()===null?r.outputColorSpace:Ft}var xN={clone:na,merge:On},SN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Er=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SN,this.fragmentShader=MN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=yN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},fh=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends fh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ko=-90,zo=1,ym=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;let i=new an(ko,zo,e,t);i.layers=this.layers,this.add(i);let s=new an(ko,zo,e,t);s.layers=this.layers,this.add(s);let o=new an(ko,zo,e,t);o.layers=this.layers,this.add(o);let a=new an(ko,zo,e,t);a.layers=this.layers,this.add(a);let c=new an(ko,zo,e,t);c.layers=this.layers,this.add(c);let l=new an(ko,zo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===br)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rh)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},dh=class extends Gt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Zo,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xm=class extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vc("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gs?He:Ws),this.texture=new dh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tr(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Zr});s.uniforms.tEquirect.value=t;let o=new cn(i,s),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=Dn),new ym(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},im=new O,bN=new O,wN=new Ke,Sr=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=im.subVectors(n,t).cross(bN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(im),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wN.getNormalMatrix(e),i=this.coplanarPoint(im).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new ii,Zu=new O,wc=class{constructor(e=new Sr,t=new Sr,n=new Sr,i=new Sr,s=new Sr,o=new Sr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=br){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-s,f-l,m-d,S-p).normalize(),n[1].setComponents(c+s,f+l,m+d,S+p).normalize(),n[2].setComponents(c+o,f+u,m+_,S+y).normalize(),n[3].setComponents(c-o,f-u,m-_,S-y).normalize(),n[4].setComponents(c-a,f-h,m-g,S-v).normalize(),t===br)n[5].setComponents(c+a,f+h,m+g,S+v).normalize();else if(t===rh)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Zu.x=i.normal.x>0?e.max.x:e.min.x,Zu.y=i.normal.y>0?e.max.y:e.min.y,Zu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cT(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function TN(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let f=u.array,d=u.updateRange;r.bindBuffer(h,l),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var Tc=class extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let y=p*f-o;for(let v=0;v<l;v++){let S=v*h-s;_.push(S,-y,0),g.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,S=y+l*(p+1),M=y+1+l*(p+1),R=y+1+l*p;d.push(v,S,R),d.push(S,M,R)}this.setIndex(d),this.setAttribute("position",new Si(_,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}},EN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AN=`#ifdef USE_ALPHAHASH
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
#endif`,RN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PN=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,IN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ON=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FN=`#ifdef USE_IRIDESCENCE
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
#endif`,BN=`#ifdef USE_BUMPMAP
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
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,XN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,YN=`#define PI 3.141592653589793
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
} // validated`,jN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZN=`vec3 transformedNormal = objectNormal;
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
#endif`,KN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$N=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eU="gl_FragColor = linearToOutputTexel( gl_FragColor );",tU=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nU=`#ifdef USE_ENVMAP
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
#endif`,iU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rU=`#ifdef USE_ENVMAP
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
#endif`,sU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oU=`#ifdef USE_ENVMAP
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
#endif`,aU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hU=`#ifdef USE_GRADIENTMAP
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
}`,fU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gU=`uniform bool receiveShadow;
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
#endif`,_U=`#ifdef USE_ENVMAP
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
#endif`,vU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MU=`PhysicalMaterial material;
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
#endif`,bU=`struct PhysicalMaterial {
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
}`,wU=`
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
#endif`,TU=`#if defined( RE_IndirectDiffuse )
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
#endif`,EU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DU=`#if defined( USE_POINTS_UV )
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
#endif`,NU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FU=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BU=`#ifdef USE_MORPHNORMALS
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
#endif`,kU=`#ifdef USE_MORPHTARGETS
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
#endif`,zU=`#ifdef USE_MORPHTARGETS
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
#endif`,HU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,VU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XU=`#ifdef USE_NORMALMAP
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
#endif`,YU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$U=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c3=`float getShadowMask() {
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
}`,l3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u3=`#ifdef USE_SKINNING
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
#endif`,h3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f3=`#ifdef USE_SKINNING
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
#endif`,d3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_3=`#ifdef USE_TRANSMISSION
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
#endif`,v3=`#ifdef USE_TRANSMISSION
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
#endif`,y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w3=`uniform sampler2D t2D;
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
}`,T3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`#include <common>
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
}`,P3=`#if DEPTH_PACKING == 3200
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
}`,I3=`#define DISTANCE
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
}`,L3=`#define DISTANCE
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
}`,O3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N3=`uniform float scale;
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
}`,U3=`uniform vec3 diffuse;
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
}`,F3=`#include <common>
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
}`,B3=`uniform vec3 diffuse;
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
}`,k3=`#define LAMBERT
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
}`,z3=`#define LAMBERT
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
}`,H3=`#define MATCAP
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
}`,V3=`#define MATCAP
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
}`,G3=`#define NORMAL
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
}`,W3=`#define NORMAL
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
}`,q3=`#define PHONG
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
}`,X3=`#define PHONG
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
}`,Y3=`#define STANDARD
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
}`,j3=`#define STANDARD
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
}`,Z3=`#define TOON
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
}`,K3=`#define TOON
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
}`,J3=`uniform float size;
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
}`,$3=`uniform vec3 diffuse;
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
}`,Q3=`#include <common>
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
}`,eF=`uniform vec3 color;
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
}`,tF=`uniform float rotation;
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
}`,nF=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:EN,alphahash_pars_fragment:AN,alphamap_fragment:RN,alphamap_pars_fragment:CN,alphatest_fragment:PN,alphatest_pars_fragment:IN,aomap_fragment:LN,aomap_pars_fragment:ON,begin_vertex:DN,beginnormal_vertex:NN,bsdfs:UN,iridescence_fragment:FN,bumpmap_pars_fragment:BN,clipping_planes_fragment:kN,clipping_planes_pars_fragment:zN,clipping_planes_pars_vertex:HN,clipping_planes_vertex:VN,color_fragment:GN,color_pars_fragment:WN,color_pars_vertex:qN,color_vertex:XN,common:YN,cube_uv_reflection_fragment:jN,defaultnormal_vertex:ZN,displacementmap_pars_vertex:KN,displacementmap_vertex:JN,emissivemap_fragment:$N,emissivemap_pars_fragment:QN,colorspace_fragment:eU,colorspace_pars_fragment:tU,envmap_fragment:nU,envmap_common_pars_fragment:iU,envmap_pars_fragment:rU,envmap_pars_vertex:sU,envmap_physical_pars_fragment:_U,envmap_vertex:oU,fog_vertex:aU,fog_pars_vertex:cU,fog_fragment:lU,fog_pars_fragment:uU,gradientmap_pars_fragment:hU,lightmap_fragment:fU,lightmap_pars_fragment:dU,lights_lambert_fragment:pU,lights_lambert_pars_fragment:mU,lights_pars_begin:gU,lights_toon_fragment:vU,lights_toon_pars_fragment:yU,lights_phong_fragment:xU,lights_phong_pars_fragment:SU,lights_physical_fragment:MU,lights_physical_pars_fragment:bU,lights_fragment_begin:wU,lights_fragment_maps:TU,lights_fragment_end:EU,logdepthbuf_fragment:AU,logdepthbuf_pars_fragment:RU,logdepthbuf_pars_vertex:CU,logdepthbuf_vertex:PU,map_fragment:IU,map_pars_fragment:LU,map_particle_fragment:OU,map_particle_pars_fragment:DU,metalnessmap_fragment:NU,metalnessmap_pars_fragment:UU,morphcolor_vertex:FU,morphnormal_vertex:BU,morphtarget_pars_vertex:kU,morphtarget_vertex:zU,normal_fragment_begin:HU,normal_fragment_maps:VU,normal_pars_fragment:GU,normal_pars_vertex:WU,normal_vertex:qU,normalmap_pars_fragment:XU,clearcoat_normal_fragment_begin:YU,clearcoat_normal_fragment_maps:jU,clearcoat_pars_fragment:ZU,iridescence_pars_fragment:KU,opaque_fragment:JU,packing:$U,premultiplied_alpha_fragment:QU,project_vertex:e3,dithering_fragment:t3,dithering_pars_fragment:n3,roughnessmap_fragment:i3,roughnessmap_pars_fragment:r3,shadowmap_pars_fragment:s3,shadowmap_pars_vertex:o3,shadowmap_vertex:a3,shadowmask_pars_fragment:c3,skinbase_vertex:l3,skinning_pars_vertex:u3,skinning_vertex:h3,skinnormal_vertex:f3,specularmap_fragment:d3,specularmap_pars_fragment:p3,tonemapping_fragment:m3,tonemapping_pars_fragment:g3,transmission_fragment:_3,transmission_pars_fragment:v3,uv_pars_fragment:y3,uv_pars_vertex:x3,uv_vertex:S3,worldpos_vertex:M3,background_vert:b3,background_frag:w3,backgroundCube_vert:T3,backgroundCube_frag:E3,cube_vert:A3,cube_frag:R3,depth_vert:C3,depth_frag:P3,distanceRGBA_vert:I3,distanceRGBA_frag:L3,equirect_vert:O3,equirect_frag:D3,linedashed_vert:N3,linedashed_frag:U3,meshbasic_vert:F3,meshbasic_frag:B3,meshlambert_vert:k3,meshlambert_frag:z3,meshmatcap_vert:H3,meshmatcap_frag:V3,meshnormal_vert:G3,meshnormal_frag:W3,meshphong_vert:q3,meshphong_frag:X3,meshphysical_vert:Y3,meshphysical_frag:j3,meshtoon_vert:Z3,meshtoon_frag:K3,points_vert:J3,points_frag:$3,shadow_vert:Q3,shadow_frag:eF,sprite_vert:tF,sprite_frag:nF},de={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ji={basic:{uniforms:On([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:On([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:On([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:On([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:On([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:On([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:On([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:On([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:On([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:On([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:On([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:On([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:On([de.lights,de.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ji.physical={uniforms:On([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ku={r:0,b:0,g:0};function iF(r,e,t,n,i,s,o){let a=new ze(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function _(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,c):v&&v.isColor&&(g(v,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ah)?(u===void 0&&(u=new cn(new Tr(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:na(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==He,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new cn(new Tc(2,2),new Er({name:"BackgroundMaterial",uniforms:na(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==He,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(Ku,aT(r)),n.buffers.color.setClear(Ku.r,Ku.g,Ku.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function rF(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function h(U,F,Q,B,q){let N=!1;if(o){let A=g(B,Q,F);l!==A&&(l=A,d(l.object)),N=p(U,B,Q,q),N&&y(U,B,Q,q)}else{let A=F.wireframe===!0;(l.geometry!==B.id||l.program!==Q.id||l.wireframe!==A)&&(l.geometry=B.id,l.program=Q.id,l.wireframe=A,N=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,I(U,F,Q,B),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,F,Q){let B=Q.wireframe===!0,q=a[U.id];q===void 0&&(q={},a[U.id]=q);let N=q[F.id];N===void 0&&(N={},q[F.id]=N);let A=N[B];return A===void 0&&(A=m(f()),N[B]=A),A}function m(U){let F=[],Q=[],B=[];for(let q=0;q<i;q++)F[q]=0,Q[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:B,object:U,attributes:{},index:null}}function p(U,F,Q,B){let q=l.attributes,N=F.attributes,A=0,L=Q.getAttributes();for(let X in L)if(L[X].location>=0){let se=q[X],ie=N[X];if(ie===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),se===void 0||se.attribute!==ie||ie&&se.data!==ie.data)return!0;A++}return l.attributesNum!==A||l.index!==B}function y(U,F,Q,B){let q={},N=F.attributes,A=0,L=Q.getAttributes();for(let X in L)if(L[X].location>=0){let se=N[X];se===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let ie={};ie.attribute=se,se&&se.data&&(ie.data=se.data),q[X]=ie,A++}l.attributes=q,l.attributesNum=A,l.index=B}function v(){let U=l.newAttributes;for(let F=0,Q=U.length;F<Q;F++)U[F]=0}function S(U){M(U,0)}function M(U,F){let Q=l.newAttributes,B=l.enabledAttributes,q=l.attributeDivisors;Q[U]=1,B[U]===0&&(r.enableVertexAttribArray(U),B[U]=1),q[U]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,F),q[U]=F)}function R(){let U=l.newAttributes,F=l.enabledAttributes;for(let Q=0,B=F.length;Q<B;Q++)F[Q]!==U[Q]&&(r.disableVertexAttribArray(Q),F[Q]=0)}function w(U,F,Q,B,q,N,A){A===!0?r.vertexAttribIPointer(U,F,Q,q,N):r.vertexAttribPointer(U,F,Q,B,q,N)}function I(U,F,Q,B){if(n.isWebGL2===!1&&(U.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=B.attributes,N=Q.getAttributes(),A=F.defaultAttributeValues;for(let L in N){let X=N[L];if(X.location>=0){let oe=q[L];if(oe===void 0&&(L==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),L==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){let se=oe.normalized,ie=oe.itemSize,me=t.get(oe);if(me===void 0)continue;let ue=me.buffer,ee=me.type,Be=me.bytesPerElement,At=n.isWebGL2===!0&&(ee===r.INT||ee===r.UNSIGNED_INT||oe.gpuType===jw);if(oe.isInterleavedBufferAttribute){let Ie=oe.data,H=Ie.stride,De=oe.offset;if(Ie.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)M(X.location+ge,Ie.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let ge=0;ge<X.locationSize;ge++)S(X.location+ge);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let ge=0;ge<X.locationSize;ge++)w(X.location+ge,ie/X.locationSize,ee,se,H*Be,(De+ie/X.locationSize*ge)*Be,At)}else{if(oe.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)M(X.location+Ie,oe.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)S(X.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let Ie=0;Ie<X.locationSize;Ie++)w(X.location+Ie,ie/X.locationSize,ee,se,ie*Be,ie/X.locationSize*Ie*Be,At)}}else if(A!==void 0){let se=A[L];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(X.location,se);break;case 3:r.vertexAttrib3fv(X.location,se);break;case 4:r.vertexAttrib4fv(X.location,se);break;default:r.vertexAttrib1fv(X.location,se)}}}}R()}function x(){W();for(let U in a){let F=a[U];for(let Q in F){let B=F[Q];for(let q in B)_(B[q].object),delete B[q];delete F[Q]}delete a[U]}}function b(U){if(a[U.id]===void 0)return;let F=a[U.id];for(let Q in F){let B=F[Q];for(let q in B)_(B[q].object),delete B[q];delete F[Q]}delete a[U.id]}function G(U){for(let F in a){let Q=a[F];if(Q[U.id]===void 0)continue;let B=Q[U.id];for(let q in B)_(B[q].object),delete B[q];delete Q[U.id]}}function W(){D(),u=!0,l!==c&&(l=c,d(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function sF(r,e,t,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function oF(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:R}}function aF(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Sr,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{let y=s?0:n,v=y*4,S=p.clippingState||null;c.value=S,S=u(_,f,v,d);for(let M=0;M!==v;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==g;++v,S+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cF(r){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=Zo:a===dm&&(o.mapping=Ko),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===xc||a===dm)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xm(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var es=class extends fh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qo=4,iw=[.125,.215,.35,.446,.526,.582],zs=20,rm=new es,rw=new ze,sm=null,ks=(1+Math.sqrt(5))/2,Ho=1/ks,sw=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ks,Ho),new O(0,ks,-Ho),new O(Ho,0,ks),new O(-Ho,0,ks),new O(ks,Ho,0),new O(-ks,Ho,0)],ph=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sm=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sm),e.scissorTest=!1,Ju(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sm=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Mc,format:xi,colorSpace:Ft,depthBuffer:!1},i=ow(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ow(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lF(s)),this._blurMaterial=uF(s,e,t)}return i}_compileMaterial(e){let t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,rm)}_sceneToCubeUV(e,t,n,i){let a=new an(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(rw),u.toneMapping=Kr,u.autoClear=!1;let d=new ln({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new cn(new Tr,d),g=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(rw),g=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Ju(i,y*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Zo||e.mapping===Ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aw());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ju(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rm)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sw[(i-1)%sw.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new cn(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):zs;m>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],y=0;for(let w=0;w<zs;++w){let I=w/g,x=Math.exp(-I*I/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let S=this._sizeLods[i],M=3*S*(i>v-qo?i-v+qo:0),R=4*(this._cubeSize-S);Ju(t,M,R,3*S,2*S),c.setRenderTarget(t),c.render(h,rm)}};function lF(r){let e=[],t=[],n=[],i=r,s=r-qo+1+iw.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>r-qo?c=iw[o-r+qo-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),v=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let R=0;R<d;R++){let w=R%3*2/3-1,I=R>2?0:-1,x=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(x,g*_*R),v.set(f,m*_*R);let b=[R,R,R,R,R,R];S.set(b,p*_*R)}let M=new yn;M.setAttribute("position",new Dt(y,g)),M.setAttribute("uv",new Dt(v,m)),M.setAttribute("faceIndex",new Dt(S,p)),e.push(M),i>qo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ow(r,e,t){let n=new wr(r,e,t);return n.texture.mapping=Ah,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ju(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function uF(r,e,t){let n=new Float32Array(zs),i=new O(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Km(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function aw(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Km(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function cw(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Km(){return`

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
	`}function hF(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===dm,u=c===Zo||c===Ko;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ph(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ph(r));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fF(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dF(r,e,t,n){let i={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let _ in f)e.update(f[_],r.ARRAY_BUFFER);let d=h.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,_=h.attributes.position,g=0;if(d!==null){let y=d.array;g=d.version;for(let v=0,S=y.length;v<S;v+=3){let M=y[v+0],R=y[v+1],w=y[v+2];f.push(M,R,R,w,w,M)}}else if(_!==void 0){let y=_.array;g=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){let M=v+0,R=v+1,w=v+2;f.push(M,R,R,w,w,M)}}else return;let m=new(sT(f)?hh:uh)(f,1);m.version=g;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function pF(r,e,t,n){let i=n.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,f*c,_),t.update(d,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function mF(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gF(r,e){return r[0]-e[0]}function _F(r,e){return Math.abs(e[1])-Math.abs(r[1])}function vF(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0,g=s.get(u);if(g===void 0||g.count!==_){let U=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],I=0;y===!0&&(I=1),v===!0&&(I=2),S===!0&&(I=3);let x=u.attributes.position.count*I,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let G=new Float32Array(x*b*4*_),W=new ch(G,x,b,_);W.type=Mr,W.needsUpdate=!0;let D=I*4;for(let F=0;F<_;F++){let Q=M[F],B=R[F],q=w[F],N=x*b*4*F;for(let A=0;A<Q.count;A++){let L=A*D;y===!0&&(o.fromBufferAttribute(Q,A),G[N+L+0]=o.x,G[N+L+1]=o.y,G[N+L+2]=o.z,G[N+L+3]=0),v===!0&&(o.fromBufferAttribute(B,A),G[N+L+4]=o.x,G[N+L+5]=o.y,G[N+L+6]=o.z,G[N+L+7]=0),S===!0&&(o.fromBufferAttribute(q,A),G[N+L+8]=o.x,G[N+L+9]=o.y,G[N+L+10]=o.z,G[N+L+11]=q.itemSize===4?o.w:1)}}g={count:_,texture:W,size:new it(x,b)},s.set(u,g),u.addEventListener("dispose",U)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let d=f===void 0?0:f.length,_=n[u.id];if(_===void 0||_.length!==d){_=[];for(let v=0;v<d;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<d;v++){let S=_[v];S[0]=v,S[1]=f[v]}_.sort(_F);for(let v=0;v<8;v++)v<d&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(gF);let g=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let S=a[v],M=S[0],R=S[1];M!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+v)!==g[M]&&u.setAttribute("morphTarget"+v,g[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),i[v]=R,p+=R):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function yF(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var lT=new Gt,uT=new ch,hT=new vm,fT=new dh,lw=[],uw=[],hw=new Float32Array(16),fw=new Float32Array(9),dw=new Float32Array(4);function ua(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=lw[i];if(s===void 0&&(s=new Float32Array(i),lw[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ph(r,e){let t=uw[e];t===void 0&&(t=new Int32Array(e),uw[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function SF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function MF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function bF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function wF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;dw.set(n),r.uniformMatrix2fv(this.addr,!1,dw),Kt(t,n)}}function TF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;fw.set(n),r.uniformMatrix3fv(this.addr,!1,fw),Kt(t,n)}}function EF(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;hw.set(n),r.uniformMatrix4fv(this.addr,!1,hw),Kt(t,n)}}function AF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function CF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function PF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function IF(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function OF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function DF(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function NF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||lT,i)}function UF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hT,i)}function FF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fT,i)}function BF(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uT,i)}function kF(r){switch(r){case 5126:return xF;case 35664:return SF;case 35665:return MF;case 35666:return bF;case 35674:return wF;case 35675:return TF;case 35676:return EF;case 5124:case 35670:return AF;case 35667:case 35671:return RF;case 35668:case 35672:return CF;case 35669:case 35673:return PF;case 5125:return IF;case 36294:return LF;case 36295:return OF;case 36296:return DF;case 35678:case 36198:case 36298:case 36306:case 35682:return NF;case 35679:case 36299:case 36307:return UF;case 35680:case 36300:case 36308:case 36293:return FF;case 36289:case 36303:case 36311:case 36292:return BF}}function zF(r,e){r.uniform1fv(this.addr,e)}function HF(r,e){let t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function VF(r,e){let t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function GF(r,e){let t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function WF(r,e){let t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qF(r,e){let t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XF(r,e){let t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function YF(r,e){r.uniform1iv(this.addr,e)}function jF(r,e){r.uniform2iv(this.addr,e)}function ZF(r,e){r.uniform3iv(this.addr,e)}function KF(r,e){r.uniform4iv(this.addr,e)}function JF(r,e){r.uniform1uiv(this.addr,e)}function $F(r,e){r.uniform2uiv(this.addr,e)}function QF(r,e){r.uniform3uiv(this.addr,e)}function eB(r,e){r.uniform4uiv(this.addr,e)}function tB(r,e,t){let n=this.cache,i=e.length,s=Ph(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lT,s[o])}function nB(r,e,t){let n=this.cache,i=e.length,s=Ph(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hT,s[o])}function iB(r,e,t){let n=this.cache,i=e.length,s=Ph(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fT,s[o])}function rB(r,e,t){let n=this.cache,i=e.length,s=Ph(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||uT,s[o])}function sB(r){switch(r){case 5126:return zF;case 35664:return HF;case 35665:return VF;case 35666:return GF;case 35674:return WF;case 35675:return qF;case 35676:return XF;case 5124:case 35670:return YF;case 35667:case 35671:return jF;case 35668:case 35672:return ZF;case 35669:case 35673:return KF;case 5125:return JF;case 36294:return $F;case 36295:return QF;case 36296:return eB;case 35678:case 36198:case 36298:case 36306:case 35682:return tB;case 35679:case 36299:case 36307:return nB;case 35680:case 36300:case 36308:case 36293:return iB;case 36289:case 36303:case 36311:case 36292:return rB}}var Sm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kF(t.type)}},Mm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=sB(t.type)}},bm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},om=/(\w+)(\])?(\[|\.)?/g;function pw(r,e){r.seq.push(e),r.map[e.id]=e}function oB(r,e,t){let n=r.name,i=n.length;for(om.lastIndex=0;;){let s=om.exec(n),o=om.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){pw(t,l===void 0?new Sm(a,r,e):new Mm(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new bm(a),pw(t,h)),t=h}}}var jo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);oB(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function mw(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var aB=0;function cB(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lB(r){switch(r){case Ft:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function gw(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+cB(r.getShaderSource(e),o)}else return i}function uB(r,e){let t=lB(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function hB(r,e){let t;switch(e){case dD:t="Linear";break;case pD:t="Reinhard";break;case mD:t="OptimizedCineon";break;case gD:t="ACESFilmic";break;case _D:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fB(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pc).join(`
`)}function dB(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pB(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function pc(r){return r!==""}function _w(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vw(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mB=/^[ \t]*#include +<([\w\d./]+)>/gm;function wm(r){return r.replace(mB,_B)}var gB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _B(r,e){let t=Ze[e];if(t===void 0){let n=gB.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wm(t)}var vB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yw(r){return r.replace(vB,yB)}function yB(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xw(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xB(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gw?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qO?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function SB(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Ah:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MB(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function bB(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xw:e="ENVMAP_BLENDING_MULTIPLY";break;case hD:e="ENVMAP_BLENDING_MIX";break;case fD:e="ENVMAP_BLENDING_ADD";break}return e}function wB(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function TB(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=xB(t),l=SB(t),u=MB(t),h=bB(t),f=wB(t),d=t.isWebGL2?"":fB(t),_=dB(s),g=i.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pc).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pc).join(`
`),p.length>0&&(p+=`
`)):(m=[xw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pc).join(`
`),p=[d,xw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Kr?hB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,uB("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pc).join(`
`)),o=wm(o),o=_w(o,t),o=vw(o,t),a=wm(a),a=_w(a,t),a=vw(a,t),o=yw(o),a=yw(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,S=y+p+a,M=mw(i,i.VERTEX_SHADER,v),R=mw(i,i.FRAGMENT_SHADER,S);if(i.attachShader(g,M),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){let x=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(M).trim(),G=i.getShaderInfoLog(R).trim(),W=!0,D=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,R);else{let U=gw(i,M,"vertex"),F=gw(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+U+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||G==="")&&(D=!1);D&&(this.diagnostics={runnable:W,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(M),i.deleteShader(R);let w;this.getUniforms=function(){return w===void 0&&(w=new jo(i,g)),w};let I;return this.getAttributes=function(){return I===void 0&&(I=pB(i,g)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aB++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}var EB=0,Tm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Em(e),t.set(e,n)),n}},Em=class{constructor(e){this.id=EB++,this.code=e,this.usedTimes=0}};function AB(r,e,t,n,i,s,o){let a=new lh,c=new Tm,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,b,G,W,D){let U=W.fog,F=D.geometry,Q=x.isMeshStandardMaterial?W.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),q=B&&B.mapping===Ah?B.image.height:null,N=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let A=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,L=A!==void 0?A.length:0,X=0;F.morphAttributes.position!==void 0&&(X=1),F.morphAttributes.normal!==void 0&&(X=2),F.morphAttributes.color!==void 0&&(X=3);let oe,se,ie,me;if(N){let pe=ji[N];oe=pe.vertexShader,se=pe.fragmentShader}else oe=x.vertexShader,se=x.fragmentShader,c.update(x),ie=c.getVertexShaderID(x),me=c.getFragmentShaderID(x);let ue=r.getRenderTarget(),ee=D.isInstancedMesh===!0,Be=!!x.map,At=!!x.matcap,Ie=!!B,H=!!x.aoMap,De=!!x.lightMap,ge=!!x.bumpMap,Pe=!!x.normalMap,Ce=!!x.displacementMap,Y=!!x.emissiveMap,Ne=!!x.metalnessMap,Fe=!!x.roughnessMap,rt=x.anisotropy>0,Je=x.clearcoat>0,Tt=x.iridescence>0,C=x.sheen>0,T=x.transmission>0,V=rt&&!!x.anisotropyMap,te=Je&&!!x.clearcoatMap,ne=Je&&!!x.clearcoatNormalMap,re=Je&&!!x.clearcoatRoughnessMap,we=Tt&&!!x.iridescenceMap,ce=Tt&&!!x.iridescenceThicknessMap,K=C&&!!x.sheenColorMap,Se=C&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,Re=!!x.specularColorMap,xe=!!x.specularIntensityMap,_e=T&&!!x.transmissionMap,ke=T&&!!x.thicknessMap,st=!!x.gradientMap,P=!!x.alphaMap,he=x.alphaTest>0,Z=!!x.alphaHash,ae=!!x.extensions,le=!!F.attributes.uv1,Ye=!!F.attributes.uv2,ft=!!F.attributes.uv3,dt=Kr;return x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(dt=r.toneMapping),{isWebGL2:u,shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:se,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:ee,instancingColor:ee&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ft,map:Be,matcap:At,envMap:Ie,envMapMode:Ie&&B.mapping,envMapCubeUVHeight:q,aoMap:H,lightMap:De,bumpMap:ge,normalMap:Pe,displacementMap:f&&Ce,emissiveMap:Y,normalMapObjectSpace:Pe&&x.normalMapType===PD,normalMapTangentSpace:Pe&&x.normalMapType===nT,metalnessMap:Ne,roughnessMap:Fe,anisotropy:rt,anisotropyMap:V,clearcoat:Je,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:Tt,iridescenceMap:we,iridescenceThicknessMap:ce,sheen:C,sheenColorMap:K,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:Re,specularIntensityMap:xe,transmission:T,transmissionMap:_e,thicknessMap:ke,gradientMap:st,opaque:x.transparent===!1&&x.blending===Xo,alphaMap:P,alphaTest:he,alphaHash:Z,combine:x.combine,mapUv:Be&&g(x.map.channel),aoMapUv:H&&g(x.aoMap.channel),lightMapUv:De&&g(x.lightMap.channel),bumpMapUv:ge&&g(x.bumpMap.channel),normalMapUv:Pe&&g(x.normalMap.channel),displacementMapUv:Ce&&g(x.displacementMap.channel),emissiveMapUv:Y&&g(x.emissiveMap.channel),metalnessMapUv:Ne&&g(x.metalnessMap.channel),roughnessMapUv:Fe&&g(x.roughnessMap.channel),anisotropyMapUv:V&&g(x.anisotropyMap.channel),clearcoatMapUv:te&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:Ee&&g(x.specularMap.channel),specularColorMapUv:Re&&g(x.specularColorMap.channel),specularIntensityMapUv:xe&&g(x.specularIntensityMap.channel),transmissionMapUv:_e&&g(x.transmissionMap.channel),thicknessMapUv:ke&&g(x.thicknessMap.channel),alphaMapUv:P&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pe||rt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:Ye,vertexUv3s:ft,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Be||P),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&x.map.colorSpace===He,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===Wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let G in x.defines)b.push(G),b.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){let b=_[x.type],G;if(b){let W=ji[b];G=xN.clone(W.uniforms)}else G=x.uniforms;return G}function M(x,b){let G;for(let W=0,D=l.length;W<D;W++){let U=l[W];if(U.cacheKey===b){G=U,++G.usedTimes;break}}return G===void 0&&(G=new TB(r,b,x,s),l.push(G)),G}function R(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:I}}function RB(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function CB(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mw(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){let p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,_,g,m){let p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||CB),n.length>1&&n.sort(f||Sw),i.length>1&&i.sort(f||Sw)}function u(){for(let h=e,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function PB(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Mw,r.set(n,[o])):i>=s.length?(o=new Mw,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function IB(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function LB(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var OB=0;function DB(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NB(r,e){let t=new IB,n=LB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);let s=new O,o=new Xe,a=new Xe;function c(u,h){let f=0,d=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,p=0,y=0,v=0,S=0,M=0,R=0,w=0,I=0;u.sort(DB);let x=h===!0?Math.PI:1;for(let G=0,W=u.length;G<W;G++){let D=u[G],U=D.color,F=D.intensity,Q=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*F*x,d+=U.g*F*x,_+=U.b*F*x;else if(D.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],F);else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){let N=D.shadow,A=n.get(D);A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,i.directionalShadow[g]=A,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=D.shadow.matrix,S++}i.directional[g]=q,g++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(U).multiplyScalar(F*x),q.distance=Q,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[p]=q;let N=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,N.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=N.matrix,D.castShadow){let A=n.get(D);A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,i.spotShadow[p]=A,i.spotShadowMap[p]=B,R++}p++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(U).multiplyScalar(F),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=q,y++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*x),q.distance=D.distance,q.decay=D.decay,D.castShadow){let N=D.shadow,A=n.get(D);A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,A.shadowCameraNear=N.camera.near,A.shadowCameraFar=N.camera.far,i.pointShadow[m]=A,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=q,m++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(F*x),q.groundColor.copy(D.groundColor).multiplyScalar(F*x),i.hemi[v]=q,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;let b=i.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==R||b.numSpotMaps!==w)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,b.directionalLength=g,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=R,b.numSpotMaps=w,i.version=OB++)}function l(u,h){let f=0,d=0,_=0,g=0,m=0,p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let S=u[y];if(S.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isSpotLight){let M=i.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(S.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function bw(r,e){let t=new NB(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function UB(r,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),c;return a===void 0?(c=new bw(r,e),t.set(s,[c])):o>=a.length?(c=new bw(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Am=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rm=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},FB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BB=`uniform sampler2D shadow_pass;
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
}`;function kB(r,e,t){let n=new wc,i=new it,s=new it,o=new mt,a=new Am({depthPacking:CD}),c=new Rm,l={},u=t.maxTextureSize,h={[Ji]:Wn,[Wn]:Ji,[Gn]:Gn},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:FB,fragmentShader:BB}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new yn;_.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new cn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gw;let p=this.type;this.render=function(M,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let I=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Zr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=p!==xr&&this.type===xr,D=p===xr&&this.type!==xr;for(let U=0,F=M.length;U<F;U++){let Q=M[U],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let q=B.getFrameExtents();if(i.multiply(q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||W===!0||D===!0){let A=this.type!==xr?{minFilter:jt,magFilter:jt}:{};B.map!==null&&B.map.dispose(),B.map=new wr(i.x,i.y,A),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();let N=B.getViewportCount();for(let A=0;A<N;A++){let L=B.getViewport(A);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),G.viewport(o),B.updateMatrices(Q,A),n=B.getFrustum(),S(R,w,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===xr&&y(B,w),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(I,x,b)};function y(M,R){let w=e.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(R,null,w,f,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(R,null,w,d,g,null)}function v(M,R,w,I){let x=null,b=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=x.uuid,W=R.uuid,D=l[G];D===void 0&&(D={},l[G]=D);let U=D[W];U===void 0&&(U=x.clone(),D[W]=U),x=U}if(x.visible=R.visible,x.wireframe=R.wireframe,I===xr?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=r.properties.get(x);G.light=w}return x}function S(M,R,w,I,x){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===xr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let W=e.update(M),D=M.material;if(Array.isArray(D)){let U=W.groups;for(let F=0,Q=U.length;F<Q;F++){let B=U[F],q=D[B.materialIndex];if(q&&q.visible){let N=v(M,q,I,x);r.renderBufferDirect(w,null,W,N,M,B)}}}else if(D.visible){let U=v(M,D,I,x);r.renderBufferDirect(w,null,W,U,M,null)}}let G=M.children;for(let W=0,D=G.length;W<D;W++)S(G[W],R,w,I,x)}}function zB(r,e,t){let n=t.isWebGL2;function i(){let P=!1,he=new mt,Z=null,ae=new mt(0,0,0,0);return{setMask:function(le){Z!==le&&!P&&(r.colorMask(le,le,le,le),Z=le)},setLocked:function(le){P=le},setClear:function(le,Ye,ft,dt,Oe){Oe===!0&&(le*=dt,Ye*=dt,ft*=dt),he.set(le,Ye,ft,dt),ae.equals(he)===!1&&(r.clearColor(le,Ye,ft,dt),ae.copy(he))},reset:function(){P=!1,Z=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,he=null,Z=null,ae=null;return{setTest:function(le){le?ue(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(le){he!==le&&!P&&(r.depthMask(le),he=le)},setFunc:function(le){if(Z!==le){switch(le){case rD:r.depthFunc(r.NEVER);break;case sD:r.depthFunc(r.ALWAYS);break;case oD:r.depthFunc(r.LESS);break;case fm:r.depthFunc(r.LEQUAL);break;case aD:r.depthFunc(r.EQUAL);break;case cD:r.depthFunc(r.GEQUAL);break;case lD:r.depthFunc(r.GREATER);break;case uD:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=le}},setLocked:function(le){P=le},setClear:function(le){ae!==le&&(r.clearDepth(le),ae=le)},reset:function(){P=!1,he=null,Z=null,ae=null}}}function o(){let P=!1,he=null,Z=null,ae=null,le=null,Ye=null,ft=null,dt=null,Oe=null;return{setTest:function(pe){P||(pe?ue(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(pe){he!==pe&&!P&&(r.stencilMask(pe),he=pe)},setFunc:function(pe,Ve,$e){(Z!==pe||ae!==Ve||le!==$e)&&(r.stencilFunc(pe,Ve,$e),Z=pe,ae=Ve,le=$e)},setOp:function(pe,Ve,$e){(Ye!==pe||ft!==Ve||dt!==$e)&&(r.stencilOp(pe,Ve,$e),Ye=pe,ft=Ve,dt=$e)},setLocked:function(pe){P=pe},setClear:function(pe){Oe!==pe&&(r.clearStencil(pe),Oe=pe)},reset:function(){P=!1,he=null,Z=null,ae=null,le=null,Ye=null,ft=null,dt=null,Oe=null}}}let a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,S=null,M=null,R=null,w=null,I=null,x=!1,b=null,G=null,W=null,D=null,U=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,B=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=B>=2);let N=null,A={},L=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),oe=new mt().fromArray(L),se=new mt().fromArray(X);function ie(P,he,Z,ae){let le=new Uint8Array(4),Ye=r.createTexture();r.bindTexture(P,Ye),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<Z;ft++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(he,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(he+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Ye}let me={};me[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ue(r.DEPTH_TEST),c.setFunc(fm),Ce(!1),Y(ab),ue(r.CULL_FACE),ge(Zr);function ue(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function ee(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Be(P,he){return d[P]!==he?(r.bindFramebuffer(P,he),d[P]=he,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=he),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=he)),!0):!1}function At(P,he){let Z=g,ae=!1;if(P)if(Z=_.get(he),Z===void 0&&(Z=[],_.set(he,Z)),P.isWebGLMultipleRenderTargets){let le=P.texture;if(Z.length!==le.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Ye=0,ft=le.length;Ye<ft;Ye++)Z[Ye]=r.COLOR_ATTACHMENT0+Ye;Z.length=le.length,ae=!0}}else Z[0]!==r.COLOR_ATTACHMENT0&&(Z[0]=r.COLOR_ATTACHMENT0,ae=!0);else Z[0]!==r.BACK&&(Z[0]=r.BACK,ae=!0);ae&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ie(P){return m!==P?(r.useProgram(P),m=P,!0):!1}let H={[Wo]:r.FUNC_ADD,[YO]:r.FUNC_SUBTRACT,[jO]:r.FUNC_REVERSE_SUBTRACT};if(n)H[hb]=r.MIN,H[fb]=r.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(H[hb]=P.MIN_EXT,H[fb]=P.MAX_EXT)}let De={[ZO]:r.ZERO,[KO]:r.ONE,[JO]:r.SRC_COLOR,[Ww]:r.SRC_ALPHA,[iD]:r.SRC_ALPHA_SATURATE,[tD]:r.DST_COLOR,[QO]:r.DST_ALPHA,[$O]:r.ONE_MINUS_SRC_COLOR,[qw]:r.ONE_MINUS_SRC_ALPHA,[nD]:r.ONE_MINUS_DST_COLOR,[eD]:r.ONE_MINUS_DST_ALPHA};function ge(P,he,Z,ae,le,Ye,ft,dt){if(P===Zr){p===!0&&(ee(r.BLEND),p=!1);return}if(p===!1&&(ue(r.BLEND),p=!0),P!==XO){if(P!==y||dt!==x){if((v!==Wo||R!==Wo)&&(r.blendEquation(r.FUNC_ADD),v=Wo,R=Wo),dt)switch(P){case Xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cb:r.blendFunc(r.ONE,r.ONE);break;case lb:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ub:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cb:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case lb:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ub:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,w=null,I=null,y=P,x=dt}return}le=le||he,Ye=Ye||Z,ft=ft||ae,(he!==v||le!==R)&&(r.blendEquationSeparate(H[he],H[le]),v=he,R=le),(Z!==S||ae!==M||Ye!==w||ft!==I)&&(r.blendFuncSeparate(De[Z],De[ae],De[Ye],De[ft]),S=Z,M=ae,w=Ye,I=ft),y=P,x=!1}function Pe(P,he){P.side===Gn?ee(r.CULL_FACE):ue(r.CULL_FACE);let Z=P.side===Wn;he&&(Z=!Z),Ce(Z),P.blending===Xo&&P.transparent===!1?ge(Zr):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let ae=P.stencilWrite;l.setTest(ae),ae&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function Y(P){P!==GO?(ue(r.CULL_FACE),P!==G&&(P===ab?r.cullFace(r.BACK):P===WO?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),G=P}function Ne(P){P!==W&&(Q&&r.lineWidth(P),W=P)}function Fe(P,he,Z){P?(ue(r.POLYGON_OFFSET_FILL),(D!==he||U!==Z)&&(r.polygonOffset(he,Z),D=he,U=Z)):ee(r.POLYGON_OFFSET_FILL)}function rt(P){P?ue(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function Je(P){P===void 0&&(P=r.TEXTURE0+F-1),N!==P&&(r.activeTexture(P),N=P)}function Tt(P,he,Z){Z===void 0&&(N===null?Z=r.TEXTURE0+F-1:Z=N);let ae=A[Z];ae===void 0&&(ae={type:void 0,texture:void 0},A[Z]=ae),(ae.type!==P||ae.texture!==he)&&(N!==Z&&(r.activeTexture(Z),N=Z),r.bindTexture(P,he||me[P]),ae.type=P,ae.texture=he)}function C(){let P=A[N];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){oe.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function xe(P){se.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function _e(P,he){let Z=h.get(he);Z===void 0&&(Z=new WeakMap,h.set(he,Z));let ae=Z.get(P);ae===void 0&&(ae=r.getUniformBlockIndex(he,P.name),Z.set(P,ae))}function ke(P,he){let ae=h.get(he).get(P);u.get(he)!==ae&&(r.uniformBlockBinding(he,ae,P.__bindingPointIndex),u.set(he,ae))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},N=null,A={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,S=null,M=null,R=null,w=null,I=null,x=!1,b=null,G=null,W=null,D=null,U=null,oe.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ue,disable:ee,bindFramebuffer:Be,drawBuffers:At,useProgram:Ie,setBlending:ge,setMaterial:Pe,setFlipSided:Ce,setCullFace:Y,setLineWidth:Ne,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:Je,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:V,texImage2D:Se,texImage3D:Ee,updateUBOMapping:_e,uniformBlockBinding:ke,texStorage2D:ce,texStorage3D:K,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:re,compressedTexSubImage3D:we,scissor:Re,viewport:xe,reset:st}}function HB(r,e,t,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,g,m=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,T){return p?new OffscreenCanvas(C,T):bc("canvas")}function v(C,T,V,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||T===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let re=T?sh:Math.floor,we=re(ne*C.width),ce=re(ne*C.height);g===void 0&&(g=y(we,ce));let K=V?y(we,ce):g;return K.width=we,K.height=ce,K.getContext("2d").drawImage(C,0,0,we,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+ce+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return gm(C.width)&&gm(C.height)}function M(C){return a?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==jt&&C.minFilter!==Dn}function R(C,T){return C.generateMipmaps&&T&&C.minFilter!==jt&&C.minFilter!==Dn}function w(C){r.generateMipmap(C)}function I(C,T,V,te,ne=!1){if(a===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=T;return T===r.RED&&(V===r.FLOAT&&(re=r.R32F),V===r.HALF_FLOAT&&(re=r.R16F),V===r.UNSIGNED_BYTE&&(re=r.R8)),T===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(re=r.R8UI),V===r.UNSIGNED_SHORT&&(re=r.R16UI),V===r.UNSIGNED_INT&&(re=r.R32UI),V===r.BYTE&&(re=r.R8I),V===r.SHORT&&(re=r.R16I),V===r.INT&&(re=r.R32I)),T===r.RG&&(V===r.FLOAT&&(re=r.RG32F),V===r.HALF_FLOAT&&(re=r.RG16F),V===r.UNSIGNED_BYTE&&(re=r.RG8)),T===r.RGBA&&(V===r.FLOAT&&(re=r.RGBA32F),V===r.HALF_FLOAT&&(re=r.RGBA16F),V===r.UNSIGNED_BYTE&&(re=te===He&&ne===!1?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)),(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(C,T,V){return R(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===jt||C===ih||C===mc?r.NEAREST:r.LINEAR}function G(C){let T=C.target;T.removeEventListener("dispose",G),D(T),T.isVideoTexture&&_.delete(T)}function W(C){let T=C.target;T.removeEventListener("dispose",W),F(T)}function D(C){let T=n.get(C);if(T.__webglInit===void 0)return;let V=C.source,te=m.get(V);if(te){let ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&U(C),Object.keys(te).length===0&&m.delete(V)}n.remove(C)}function U(C){let T=n.get(C);r.deleteTexture(T.__webglTexture);let V=C.source,te=m.get(V);delete te[T.__cacheKey],o.memory.textures--}function F(C){let T=C.texture,V=n.get(C),te=n.get(T);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(V.__webglFramebuffer[ne]))for(let re=0;re<V.__webglFramebuffer[ne].length;re++)r.deleteFramebuffer(V.__webglFramebuffer[ne][re]);else r.deleteFramebuffer(V.__webglFramebuffer[ne]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ne])}else{if(Array.isArray(V.__webglFramebuffer))for(let ne=0;ne<V.__webglFramebuffer.length;ne++)r.deleteFramebuffer(V.__webglFramebuffer[ne]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,re=T.length;ne<re;ne++){let we=n.get(T[ne]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(C)}let Q=0;function B(){Q=0}function q(){let C=Q;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),Q+=1,C}function N(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function A(C,T){let V=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(V,C,T);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+T)}function L(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Be(V,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+T)}function X(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Be(V,C,T);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+T)}function oe(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){At(V,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+T)}let se={[qs]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[Sc]:r.MIRRORED_REPEAT},ie={[jt]:r.NEAREST,[ih]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Ym]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},me={[LD]:r.NEVER,[kD]:r.ALWAYS,[OD]:r.LESS,[ND]:r.LEQUAL,[DD]:r.EQUAL,[BD]:r.GEQUAL,[UD]:r.GREATER,[FD]:r.NOTEQUAL};function ue(C,T,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,se[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,se[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,se[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ie[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ie[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==ni||T.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==jt&&T.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===jt||T.minFilter!==mc&&T.minFilter!==$r||T.type===Mr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Mc&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ee(C,T){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",G));let te=T.source,ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));let re=N(T);if(re!==C.__cacheKey){ne[re]===void 0&&(ne[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[re].usedTimes++;let we=ne[C.__cacheKey];we!==void 0&&(ne[C.__cacheKey].usedTimes--,we.usedTimes===0&&U(T)),C.__cacheKey=re,C.__webglTexture=ne[re].texture}return V}function Be(C,T,V){let te=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=r.TEXTURE_3D);let ne=ee(C,T),re=T.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+V);let we=n.get(re);if(re.version!==we.__version||ne===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let ce=M(T)&&S(T.image)===!1,K=v(T.image,ce,!1,u);K=Tt(T,K);let Se=S(K)||a,Ee=s.convert(T.format,T.colorSpace),Re=s.convert(T.type),xe=I(T.internalFormat,Ee,Re,T.colorSpace,T.isVideoTexture);ue(te,T,Se);let _e,ke=T.mipmaps,st=a&&T.isVideoTexture!==!0,P=we.__version===void 0||ne===!0,he=x(T,K,Se);if(T.isDepthTexture)xe=r.DEPTH_COMPONENT,a?T.type===Mr?xe=r.DEPTH_COMPONENT32F:T.type===jr?xe=r.DEPTH_COMPONENT24:T.type===Hs?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:T.type===Mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vs&&xe===r.DEPTH_COMPONENT&&T.type!==jm&&T.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=jr,Re=s.convert(T.type)),T.format===Jo&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,T.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Hs,Re=s.convert(T.type))),P&&(st?t.texStorage2D(r.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,xe,K.width,K.height,0,Ee,Re,null));else if(T.isDataTexture)if(ke.length>0&&Se){st&&P&&t.texStorage2D(r.TEXTURE_2D,he,xe,ke[0].width,ke[0].height);for(let Z=0,ae=ke.length;Z<ae;Z++)_e=ke[Z],st?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,_e.width,_e.height,Ee,Re,_e.data):t.texImage2D(r.TEXTURE_2D,Z,xe,_e.width,_e.height,0,Ee,Re,_e.data);T.generateMipmaps=!1}else st?(P&&t.texStorage2D(r.TEXTURE_2D,he,xe,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,Ee,Re,K.data)):t.texImage2D(r.TEXTURE_2D,0,xe,K.width,K.height,0,Ee,Re,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,xe,ke[0].width,ke[0].height,K.depth);for(let Z=0,ae=ke.length;Z<ae;Z++)_e=ke[Z],T.format!==xi?Ee!==null?st?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,K.depth,Ee,_e.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,xe,_e.width,_e.height,K.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,K.depth,Ee,Re,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,xe,_e.width,_e.height,K.depth,0,Ee,Re,_e.data)}else{st&&P&&t.texStorage2D(r.TEXTURE_2D,he,xe,ke[0].width,ke[0].height);for(let Z=0,ae=ke.length;Z<ae;Z++)_e=ke[Z],T.format!==xi?Ee!==null?st?t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,_e.width,_e.height,Ee,Re,_e.data):t.texImage2D(r.TEXTURE_2D,Z,xe,_e.width,_e.height,0,Ee,Re,_e.data)}else if(T.isDataArrayTexture)st?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,xe,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ee,Re,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,Ee,Re,K.data);else if(T.isData3DTexture)st?(P&&t.texStorage3D(r.TEXTURE_3D,he,xe,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ee,Re,K.data)):t.texImage3D(r.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,Ee,Re,K.data);else if(T.isFramebufferTexture){if(P)if(st)t.texStorage2D(r.TEXTURE_2D,he,xe,K.width,K.height);else{let Z=K.width,ae=K.height;for(let le=0;le<he;le++)t.texImage2D(r.TEXTURE_2D,le,xe,Z,ae,0,Ee,Re,null),Z>>=1,ae>>=1}}else if(ke.length>0&&Se){st&&P&&t.texStorage2D(r.TEXTURE_2D,he,xe,ke[0].width,ke[0].height);for(let Z=0,ae=ke.length;Z<ae;Z++)_e=ke[Z],st?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ee,Re,_e):t.texImage2D(r.TEXTURE_2D,Z,xe,Ee,Re,_e);T.generateMipmaps=!1}else st?(P&&t.texStorage2D(r.TEXTURE_2D,he,xe,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Re,K)):t.texImage2D(r.TEXTURE_2D,0,xe,Ee,Re,K);R(T,Se)&&w(te),we.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function At(C,T,V){if(T.image.length!==6)return;let te=ee(C,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);let re=n.get(ne);if(ne.version!==re.__version||te===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!we&&!ce?K[Z]=v(T.image[Z],!1,!0,l):K[Z]=ce?T.image[Z].image:T.image[Z],K[Z]=Tt(T,K[Z]);let Se=K[0],Ee=S(Se)||a,Re=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),_e=I(T.internalFormat,Re,xe,T.colorSpace),ke=a&&T.isVideoTexture!==!0,st=re.__version===void 0||te===!0,P=x(T,Se,Ee);ue(r.TEXTURE_CUBE_MAP,T,Ee);let he;if(we){ke&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,_e,Se.width,Se.height);for(let Z=0;Z<6;Z++){he=K[Z].mipmaps;for(let ae=0;ae<he.length;ae++){let le=he[ae];T.format!==xi?Re!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,le.width,le.height,Re,xe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,_e,le.width,le.height,0,Re,xe,le.data)}}}else{he=T.mipmaps,ke&&st&&(he.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,_e,K[0].width,K[0].height));for(let Z=0;Z<6;Z++)if(ce){ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,K[Z].width,K[Z].height,Re,xe,K[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,_e,K[Z].width,K[Z].height,0,Re,xe,K[Z].data);for(let ae=0;ae<he.length;ae++){let Ye=he[ae].image[Z].image;ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Ye.width,Ye.height,Re,xe,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,_e,Ye.width,Ye.height,0,Re,xe,Ye.data)}}else{ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,xe,K[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,_e,Re,xe,K[Z]);for(let ae=0;ae<he.length;ae++){let le=he[ae];ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Re,xe,le.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,_e,Re,xe,le.image[Z])}}}R(T,Ee)&&w(r.TEXTURE_CUBE_MAP),re.__version=ne.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ie(C,T,V,te,ne,re){let we=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),K=I(V.internalFormat,we,ce,V.colorSpace);if(!n.get(T).__hasExternalTextures){let Ee=Math.max(1,T.width>>re),Re=Math.max(1,T.height>>re);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,K,Ee,Re,T.depth,0,we,ce,null):t.texImage2D(ne,re,K,Ee,Re,0,we,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ne,n.get(V).__webglTexture,0,Fe(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ne,n.get(V).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(C,T,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=r.DEPTH_COMPONENT16;if(V||rt(T)){let ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Mr?te=r.DEPTH_COMPONENT32F:ne.type===jr&&(te=r.DEPTH_COMPONENT24));let re=Fe(T);rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,te,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,te,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){let te=Fe(T);V&&rt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){let re=te[ne],we=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),K=I(re.internalFormat,we,ce,re.colorSpace),Se=Fe(T);V&&rt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,K,T.width,T.height):rt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),A(T.depthTexture,0);let te=n.get(T.depthTexture).__webglTexture,ne=Fe(T);if(T.depthTexture.format===Vs)rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===Jo)rt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ge(C){let T=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,C)}else if(V){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=r.createRenderbuffer(),H(T.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),H(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,T,V){let te=n.get(C);T!==void 0&&Ie(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ge(C)}function Ce(C){let T=C.texture,V=n.get(C),te=n.get(T);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=T.version,o.memory.textures++);let ne=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,we=S(C)||a;if(ne){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let K=0;K<T.mipmaps.length;K++)V.__webglFramebuffer[ce][K]=r.createFramebuffer()}else V.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)V.__webglFramebuffer[ce]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(re)if(i.drawBuffers){let ce=C.texture;for(let K=0,Se=ce.length;K<Se;K++){let Ee=n.get(ce[K]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&rt(C)===!1){let ce=re?T:[T];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<ce.length;K++){let Se=ce[K];V.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let Ee=s.convert(Se.format,Se.colorSpace),Re=s.convert(Se.type),xe=I(Se.internalFormat,Ee,Re,Se.colorSpace,C.isXRRenderTarget===!0),_e=Fe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,xe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,V.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),H(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T,we);for(let ce=0;ce<6;ce++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Ie(V.__webglFramebuffer[ce][K],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,K);else Ie(V.__webglFramebuffer[ce],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);R(T,we)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let ce=C.texture;for(let K=0,Se=ce.length;K<Se;K++){let Ee=ce[K],Re=n.get(Ee);t.bindTexture(r.TEXTURE_2D,Re.__webglTexture),ue(r.TEXTURE_2D,Ee,we),Ie(V.__webglFramebuffer,C,Ee,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,0),R(Ee,we)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),ue(ce,T,we),a&&T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Ie(V.__webglFramebuffer[K],C,T,r.COLOR_ATTACHMENT0,ce,K);else Ie(V.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,ce,0);R(T,we)&&w(ce),t.unbindTexture()}C.depthBuffer&&ge(C)}function Y(C){let T=S(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=V.length;te<ne;te++){let re=V[te];if(R(re,T)){let we=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get(re).__webglTexture;t.bindTexture(we,ce),w(we),t.unbindTexture()}}}function Ne(C){if(a&&C.samples>0&&rt(C)===!1){let T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,te=C.height,ne=r.COLOR_BUFFER_BIT,re=[],we=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){re.push(r.COLOR_ATTACHMENT0+Se),C.depthBuffer&&re.push(we);let Ee=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ee===!1&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]),Ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),K){let Re=n.get(T[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,V,te,0,0,V,te,ne,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);let Ee=n.get(T[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Fe(C){return Math.min(h,C.samples)}function rt(C){let T=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(C){let T=o.render.frame;_.get(C)!==T&&(_.set(C,T),C.update())}function Tt(C,T){let V=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===mm||V!==Ft&&V!==Ws&&(V===He||V===Ch?a===!1?e.has("EXT_sRGB")===!0&&te===xi?(C.format=mm,C.minFilter=Dn,C.generateMipmaps=!1):T=oh.sRGBToLinear(T):(te!==xi||ne!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=A,this.setTexture2DArray=L,this.setTexture3D=X,this.setTextureCube=oe,this.rebindTextures=Pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=rt}var VB=0,Yt=1;function GB(r,e,t){let n=t.isWebGL2;function i(s,o=Ws){let a,c=o===He||o===Ch?Yt:VB;if(s===Jr)return r.UNSIGNED_BYTE;if(s===Zw)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kw)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vD)return r.BYTE;if(s===yD)return r.SHORT;if(s===jm)return r.UNSIGNED_SHORT;if(s===jw)return r.INT;if(s===jr)return r.UNSIGNED_INT;if(s===Mr)return r.FLOAT;if(s===Mc)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xD)return r.ALPHA;if(s===xi)return r.RGBA;if(s===SD)return r.LUMINANCE;if(s===MD)return r.LUMINANCE_ALPHA;if(s===Vs)return r.DEPTH_COMPONENT;if(s===Jo)return r.DEPTH_STENCIL;if(s===mm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bD)return r.RED;if(s===Jw)return r.RED_INTEGER;if(s===wD)return r.RG;if(s===$w)return r.RG_INTEGER;if(s===Qw)return r.RGBA_INTEGER;if(s===Dp||s===Np||s===Up||s===Fp)if(c===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Dp)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Np)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Up)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fp)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Dp)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Np)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Up)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fp)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===db||s===pb||s===mb||s===gb)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===db)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pb)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mb)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gb)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===TD)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_b||s===vb)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_b)return c===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yb||s===xb||s===Sb||s===Mb||s===bb||s===wb||s===Tb||s===Eb||s===Ab||s===Rb||s===Cb||s===Pb||s===Ib||s===Lb)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ab)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ib)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lb)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bp||s===Ob||s===Db)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bp)return c===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ob)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Db)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ED||s===Nb||s===Ub||s===Fb)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Bp)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nb)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ub)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fb)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hs?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Cm=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ki=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},WB={type:"move"},yc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WB)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pm=class extends Gt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Vs,u!==Vs&&u!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vs&&(n=jr),n===void 0&&u===Jo&&(n=Hs),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Im=class extends Qr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null,g=t.getContextAttributes(),m=null,p=null,y=[],v=[],S=new an;S.layers.enable(1),S.viewport=new mt;let M=new an;M.layers.enable(2),M.viewport=new mt;let R=[S,M],w=new Cm;w.layers.enable(1),w.layers.enable(2);let I=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let X=y[L];return X===void 0&&(X=new yc,y[L]=X),X.getTargetRaySpace()},this.getControllerGrip=function(L){let X=y[L];return X===void 0&&(X=new yc,y[L]=X),X.getGripSpace()},this.getHand=function(L){let X=y[L];return X===void 0&&(X=new yc,y[L]=X),X.getHandSpace()};function b(L){let X=v.indexOf(L.inputSource);if(X===-1)return;let oe=y[X];oe!==void 0&&(oe.update(L.inputSource,L.frame,l||o),oe.dispatchEvent({type:L.type,data:L.inputSource}))}function G(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let L=0;L<y.length;L++){let X=v[L];X!==null&&(v[L]=null,y[L].disconnect(X))}I=null,x=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,A.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),p=new wr(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Jr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,oe=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?Jo:Vs,oe=g.stencil?Hs:jr);let ie={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ie),i.updateRenderState({layers:[f]}),p=new wr(f.textureWidth,f.textureHeight,{format:xi,type:Jr,depthTexture:new Pm(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let me=e.properties.get(p);me.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),A.setContext(i),A.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(L){for(let X=0;X<L.removed.length;X++){let oe=L.removed[X],se=v.indexOf(oe);se>=0&&(v[se]=null,y[se].disconnect(oe))}for(let X=0;X<L.added.length;X++){let oe=L.added[X],se=v.indexOf(oe);if(se===-1){for(let me=0;me<y.length;me++)if(me>=v.length){v.push(oe),se=me;break}else if(v[me]===null){v[me]=oe,se=me;break}if(se===-1)break}let ie=y[se];ie&&ie.connect(oe)}}let D=new O,U=new O;function F(L,X,oe){D.setFromMatrixPosition(X.matrixWorld),U.setFromMatrixPosition(oe.matrixWorld);let se=D.distanceTo(U),ie=X.projectionMatrix.elements,me=oe.projectionMatrix.elements,ue=ie[14]/(ie[10]-1),ee=ie[14]/(ie[10]+1),Be=(ie[9]+1)/ie[5],At=(ie[9]-1)/ie[5],Ie=(ie[8]-1)/ie[0],H=(me[8]+1)/me[0],De=ue*Ie,ge=ue*H,Pe=se/(-Ie+H),Ce=Pe*-Ie;X.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ce),L.translateZ(Pe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let Y=ue+Pe,Ne=ee+Pe,Fe=De-Ce,rt=ge+(se-Ce),Je=Be*ee/Ne*Y,Tt=At*ee/Ne*Y;L.projectionMatrix.makePerspective(Fe,rt,Je,Tt,Y,Ne),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function Q(L,X){X===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(X.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;w.near=M.near=S.near=L.near,w.far=M.far=S.far=L.far,(I!==w.near||x!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,x=w.far);let X=L.parent,oe=w.cameras;Q(w,X);for(let se=0;se<oe.length;se++)Q(oe[se],X);oe.length===2?F(w,S,M):w.projectionMatrix.copy(S.projectionMatrix),B(L,w,X)};function B(L,X,oe){oe===null?L.matrix.copy(X.matrixWorld):(L.matrix.copy(oe.matrixWorld),L.matrix.invert(),L.matrix.multiply(X.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(X.projectionMatrix),L.projectionMatrixInverse.copy(X.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Qo*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let q=null;function N(L,X){if(u=X.getViewerPose(l||o),_=X,u!==null){let oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;oe.length!==w.cameras.length&&(w.cameras.length=0,se=!0);for(let ie=0;ie<oe.length;ie++){let me=oe[ie],ue=null;if(d!==null)ue=d.getViewport(me);else{let Be=h.getViewSubImage(f,me);ue=Be.viewport,ie===0&&(e.setRenderTargetTextures(p,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let ee=R[ie];ee===void 0&&(ee=new an,ee.layers.enable(ie),ee.viewport=new mt,R[ie]=ee),ee.matrix.fromArray(me.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(me.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(w.matrix.copy(ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),se===!0&&w.cameras.push(ee)}}for(let oe=0;oe<y.length;oe++){let se=v[oe],ie=y[oe];se!==null&&ie!==void 0&&ie.update(se,X,l||o)}q&&q(L,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}let A=new cT;A.setAnimationLoop(N),this.setAnimationLoop=function(L){q=L},this.dispose=function(){}}};function qB(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,aT(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XB(r,e,t,n){let i={},s={},o=[],a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let S=v.program;n.uniformBlockBinding(y,S)}function l(y,v){let S=i[y.id];S===void 0&&(_(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));let M=v.program;n.updateUBOMapping(y,M);let R=e.render.frame;s[y.id]!==R&&(f(y),s[y.id]=R)}function u(y){let v=h();y.__bindingPointIndex=v;let S=r.createBuffer(),M=y.__size,R=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],S=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let R=0,w=S.length;R<w;R++){let I=S[R];if(d(I,R,M)===!0){let x=I.__offset,b=Array.isArray(I.value)?I.value:[I.value],G=0;for(let W=0;W<b.length;W++){let D=b[W],U=g(D);typeof D=="number"?(I.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,x+G,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=D.elements[0],I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=D.elements[0],I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=D.elements[0]):(D.toArray(I.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,S){let M=y.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{let R=Array.isArray(M)?M:[M],w=[];for(let I=0;I<R.length;I++)w.push(R[I].clone());S[v]=w}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{let R=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(M)?M:[M];for(let I=0;I<R.length;I++){let x=R[I];if(x.equals(w[I])===!1)return x.copy(w[I]),!0}}return!1}function _(y){let v=y.uniforms,S=0,M=16,R=0;for(let w=0,I=v.length;w<I;w++){let x=v[w],b={boundary:0,storage:0},G=Array.isArray(x.value)?x.value:[x.value];for(let W=0,D=G.length;W<D;W++){let U=G[W],F=g(U);b.boundary+=F.boundary,b.storage+=F.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){R=S%M;let W=M-R;R!==0&&W-b.boundary<0&&(S+=M-R,x.__offset=S)}S+=b.storage}return R=S%M,R>0&&(S+=M-R),y.__size=S,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}var Ec=class{constructor(e={}){let{canvas:t=QD(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this._useLegacyLights=!1,this.toneMapping=Kr,this.toneMappingExposure=1;let v=this,S=!1,M=0,R=0,w=null,I=-1,x=null,b=new mt,G=new mt,W=null,D=new ze(0),U=0,F=t.width,Q=t.height,B=1,q=null,N=null,A=new mt(0,0,F,Q),L=new mt(0,0,F,Q),X=!1,oe=new wc,se=!1,ie=!1,me=null,ue=new Xe,ee=new it,Be=new O,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?B:1}let H=n;function De(E,k){for(let j=0;j<E.length;j++){let z=E[j],J=t.getContext(z,k);if(J!==null)return J}return null}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xm}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),H=De(k,E),H===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ge,Pe,Ce,Y,Ne,Fe,rt,Je,Tt,C,T,V,te,ne,re,we,ce,K,Se,Ee,Re,xe,_e,ke;function st(){ge=new fF(H),Pe=new oF(H,ge,e),ge.init(Pe),xe=new GB(H,ge,Pe),Ce=new zB(H,ge,Pe),Y=new mF(H),Ne=new RB,Fe=new HB(H,ge,Ce,Ne,Pe,xe,Y),rt=new cF(v),Je=new hF(v),Tt=new TN(H,Pe),_e=new rF(H,ge,Tt,Pe),C=new dF(H,Tt,Y,_e),T=new yF(H,C,Tt,Y),Se=new vF(H,Pe,Fe),we=new aF(Ne),V=new AB(v,rt,Je,ge,Pe,_e,we),te=new qB(v,Ne),ne=new PB,re=new UB(ge,Pe),K=new iF(v,rt,Je,Ce,T,f,c),ce=new kB(v,T,Pe),ke=new XB(H,Y,Pe,Ce),Ee=new sF(H,ge,Y,Pe),Re=new pF(H,ge,Y,Pe),Y.programs=V.programs,v.capabilities=Pe,v.extensions=ge,v.properties=Ne,v.renderLists=ne,v.shadowMap=ce,v.state=Ce,v.info=Y}st();let P=new Im(v,H);this.xr=P,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(F,Q,!1))},this.getSize=function(E){return E.set(F,Q)},this.setSize=function(E,k,j=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,Q=k,t.width=Math.floor(E*B),t.height=Math.floor(k*B),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(F*B,Q*B).floor()},this.setDrawingBufferSize=function(E,k,j){F=E,Q=k,B=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(A)},this.setViewport=function(E,k,j,z){E.isVector4?A.set(E.x,E.y,E.z,E.w):A.set(E,k,j,z),Ce.viewport(b.copy(A).multiplyScalar(B).floor())},this.getScissor=function(E){return E.copy(L)},this.setScissor=function(E,k,j,z){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,k,j,z),Ce.scissor(G.copy(L).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){Ce.setScissorTest(X=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(E=!0,k=!0,j=!0){let z=0;if(E){let J=!1;if(w!==null){let fe=w.texture.format;J=fe===Qw||fe===$w||fe===Jw}if(J){let fe=w.texture.type,ye=fe===Jr||fe===jr||fe===jm||fe===Hs||fe===Zw||fe===Kw,Te=K.getClearColor(),Le=K.getClearAlpha(),We=Te.r,be=Te.g,Ae=Te.b;ye?(d[0]=We,d[1]=be,d[2]=Ae,d[3]=Le,H.clearBufferuiv(H.COLOR,0,d)):(_[0]=We,_[1]=be,_[2]=Ae,_[3]=Le,H.clearBufferiv(H.COLOR,0,_))}else z|=H.COLOR_BUFFER_BIT}k&&(z|=H.DEPTH_BUFFER_BIT),j&&(z|=H.STENCIL_BUFFER_BIT),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ne.dispose(),re.dispose(),Ne.dispose(),rt.dispose(),Je.dispose(),T.dispose(),_e.dispose(),ke.dispose(),V.dispose(),P.dispose(),P.removeEventListener("sessionstart",pe),P.removeEventListener("sessionend",Ve),me&&(me.dispose(),me=null),$e.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=Y.autoReset,k=ce.enabled,j=ce.autoUpdate,z=ce.needsUpdate,J=ce.type;st(),Y.autoReset=E,ce.enabled=k,ce.autoUpdate=j,ce.needsUpdate=z,ce.type=J}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){let k=E.target;k.removeEventListener("dispose",le),Ye(k)}function Ye(E){ft(E),Ne.remove(E)}function ft(E){let k=Ne.get(E).programs;k!==void 0&&(k.forEach(function(j){V.releaseProgram(j)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,z,J,fe){k===null&&(k=At);let ye=J.isMesh&&J.matrixWorld.determinant()<0,Te=tn(E,k,j,z,J);Ce.setMaterial(z,ye);let Le=j.index,We=1;if(z.wireframe===!0){if(Le=C.getWireframeAttribute(j),Le===void 0)return;We=2}let be=j.drawRange,Ae=j.attributes.position,lt=be.start*We,Mt=(be.start+be.count)*We;fe!==null&&(lt=Math.max(lt,fe.start*We),Mt=Math.min(Mt,(fe.start+fe.count)*We)),Le!==null?(lt=Math.max(lt,0),Mt=Math.min(Mt,Le.count)):Ae!=null&&(lt=Math.max(lt,0),Mt=Math.min(Mt,Ae.count));let xn=Mt-lt;if(xn<0||xn===1/0)return;_e.setup(J,z,Te,j,Le);let Sn,ht=Ee;if(Le!==null&&(Sn=Tt.get(Le),ht=Re,ht.setIndex(Sn)),J.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*Ie()),ht.setMode(H.LINES)):ht.setMode(H.TRIANGLES);else if(J.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),Ce.setLineWidth(qe*Ie()),J.isLineSegments?ht.setMode(H.LINES):J.isLineLoop?ht.setMode(H.LINE_LOOP):ht.setMode(H.LINE_STRIP)}else J.isPoints?ht.setMode(H.POINTS):J.isSprite&&ht.setMode(H.TRIANGLES);if(J.isInstancedMesh)ht.renderInstances(lt,xn,J.count);else if(j.isInstancedBufferGeometry){let qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Cr=Math.min(j.instanceCount,qe);ht.renderInstances(lt,xn,Cr)}else ht.render(lt,xn)},this.compile=function(E,k){function j(z,J,fe){z.transparent===!0&&z.side===Gn&&z.forceSinglePass===!1?(z.side=Wn,z.needsUpdate=!0,Qe(z,J,fe),z.side=Ji,z.needsUpdate=!0,Qe(z,J,fe),z.side=Gn):Qe(z,J,fe)}m=re.get(E),m.init(),y.push(m),E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights),E.traverse(function(z){let J=z.material;if(J)if(Array.isArray(J))for(let fe=0;fe<J.length;fe++){let ye=J[fe];j(ye,E,z)}else j(J,E,z)}),y.pop(),m=null};let dt=null;function Oe(E){dt&&dt(E)}function pe(){$e.stop()}function Ve(){$e.start()}let $e=new cT;$e.setAnimationLoop(Oe),typeof self!="undefined"&&$e.setContext(self),this.setAnimationLoop=function(E){dt=E,P.setAnimationLoop(E),E===null?$e.stop():$e.start()},P.addEventListener("sessionstart",pe),P.addEventListener("sessionend",Ve),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(k),k=P.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,w),m=re.get(E,y.length),m.init(),y.push(m),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),oe.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,se=we.init(this.clippingPlanes,ie),g=ne.get(E,p.length),g.init(),p.push(g),ve(E,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(q,N),this.info.render.frame++,se===!0&&we.beginShadows();let j=m.state.shadowsArray;if(ce.render(j,E,k),se===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(g,E),m.setupLights(v._useLegacyLights),k.isArrayCamera){let z=k.cameras;for(let J=0,fe=z.length;J<fe;J++){let ye=z[J];nt(g,E,ye,ye.viewport)}}else nt(g,E,k);w!==null&&(Fe.updateMultisampleRenderTarget(w),Fe.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,k),_e.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ve(E,k,j,z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){z&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);let ye=T.update(E),Te=E.material;Te.visible&&g.push(E,ye,Te,j,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){let ye=T.update(E),Te=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Be.copy(ye.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Te)){let Le=ye.groups;for(let We=0,be=Le.length;We<be;We++){let Ae=Le[We],lt=Te[Ae.materialIndex];lt&&lt.visible&&g.push(E,ye,lt,j,Be.z,Ae)}}else Te.visible&&g.push(E,ye,Te,j,Be.z,null)}}let fe=E.children;for(let ye=0,Te=fe.length;ye<Te;ye++)ve(fe[ye],k,j,z)}function nt(E,k,j,z){let J=E.opaque,fe=E.transmissive,ye=E.transparent;m.setupLightsView(j),se===!0&&we.setGlobalState(v.clippingPlanes,j),fe.length>0&&Ue(J,fe,k,j),z&&Ce.viewport(b.copy(z)),J.length>0&&Ge(J,k,j),fe.length>0&&Ge(fe,k,j),ye.length>0&&Ge(ye,k,j),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ue(E,k,j,z){let J=Pe.isWebGL2;me===null&&(me=new wr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Mc:Jr,minFilter:$r,samples:J?4:0})),v.getDrawingBufferSize(ee),J?me.setSize(ee.x,ee.y):me.setSize(sh(ee.x),sh(ee.y));let fe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(D),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();let ye=v.toneMapping;v.toneMapping=Kr,Ge(E,j,z),Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me);let Te=!1;for(let Le=0,We=k.length;Le<We;Le++){let be=k[Le],Ae=be.object,lt=be.geometry,Mt=be.material,xn=be.group;if(Mt.side===Gn&&Ae.layers.test(z.layers)){let Sn=Mt.side;Mt.side=Wn,Mt.needsUpdate=!0,Nt(Ae,j,z,lt,Mt,xn),Mt.side=Sn,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me)),v.setRenderTarget(fe),v.setClearColor(D,U),v.toneMapping=ye}function Ge(E,k,j){let z=k.isScene===!0?k.overrideMaterial:null;for(let J=0,fe=E.length;J<fe;J++){let ye=E[J],Te=ye.object,Le=ye.geometry,We=z===null?ye.material:z,be=ye.group;Te.layers.test(j.layers)&&Nt(Te,k,j,Le,We,be)}}function Nt(E,k,j,z,J,fe){E.onBeforeRender(v,k,j,z,J,fe),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(v,k,j,z,E,fe),J.transparent===!0&&J.side===Gn&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,v.renderBufferDirect(j,k,z,J,E,fe),J.side=Ji,J.needsUpdate=!0,v.renderBufferDirect(j,k,z,J,E,fe),J.side=Gn):v.renderBufferDirect(j,k,z,J,E,fe),E.onAfterRender(v,k,j,z,J,fe)}function Qe(E,k,j){k.isScene!==!0&&(k=At);let z=Ne.get(E),J=m.state.lights,fe=m.state.shadowsArray,ye=J.state.version,Te=V.getParameters(E,J.state,fe,k,j),Le=V.getProgramCacheKey(Te),We=z.programs;z.environment=E.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(E.isMeshStandardMaterial?Je:rt).get(E.envMap||z.environment),We===void 0&&(E.addEventListener("dispose",le),We=new Map,z.programs=We);let be=We.get(Le);if(be!==void 0){if(z.currentProgram===be&&z.lightsStateVersion===ye)return Et(E,Te),be}else Te.uniforms=V.getUniforms(E),E.onBuild(j,Te,v),E.onBeforeCompile(Te,v),be=V.acquireProgram(Te,Le),We.set(Le,be),z.uniforms=Te.uniforms;let Ae=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=we.uniform),Et(E,Te),z.needsLights=St(E),z.lightsStateVersion=ye,z.needsLights&&(Ae.ambientLightColor.value=J.state.ambient,Ae.lightProbe.value=J.state.probe,Ae.directionalLights.value=J.state.directional,Ae.directionalLightShadows.value=J.state.directionalShadow,Ae.spotLights.value=J.state.spot,Ae.spotLightShadows.value=J.state.spotShadow,Ae.rectAreaLights.value=J.state.rectArea,Ae.ltc_1.value=J.state.rectAreaLTC1,Ae.ltc_2.value=J.state.rectAreaLTC2,Ae.pointLights.value=J.state.point,Ae.pointLightShadows.value=J.state.pointShadow,Ae.hemisphereLights.value=J.state.hemi,Ae.directionalShadowMap.value=J.state.directionalShadowMap,Ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ae.spotShadowMap.value=J.state.spotShadowMap,Ae.spotLightMatrix.value=J.state.spotLightMatrix,Ae.spotLightMap.value=J.state.spotLightMap,Ae.pointShadowMap.value=J.state.pointShadowMap,Ae.pointShadowMatrix.value=J.state.pointShadowMatrix);let lt=be.getUniforms(),Mt=jo.seqWithValue(lt.seq,Ae);return z.currentProgram=be,z.uniformsList=Mt,be}function Et(E,k){let j=Ne.get(E);j.outputColorSpace=k.outputColorSpace,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function tn(E,k,j,z,J){k.isScene!==!0&&(k=At),Fe.resetTextureUnits();let fe=k.fog,ye=z.isMeshStandardMaterial?k.environment:null,Te=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ft,Le=(z.isMeshStandardMaterial?Je:rt).get(z.envMap||ye),We=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,be=!!j.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,Mt=!!j.morphAttributes.color,xn=Kr;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xn=v.toneMapping);let Sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ht=Sn!==void 0?Sn.length:0,qe=Ne.get(z),Cr=m.state.lights;if(se===!0&&(ie===!0||E!==x)){let qn=E===x&&z.id===I;we.setState(z,E,qn)}let xt=!1;z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Cr.state.version||qe.outputColorSpace!==Te||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||qe.envMap!==Le||z.fog===!0&&qe.fog!==fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==be||qe.morphTargets!==Ae||qe.morphNormals!==lt||qe.morphColors!==Mt||qe.toneMapping!==xn||Pe.isWebGL2===!0&&qe.morphTargetsCount!==ht)&&(xt=!0):(xt=!0,qe.__version=z.version);let as=qe.currentProgram;xt===!0&&(as=Qe(z,k,J));let Rg=!1,fa=!1,Dh=!1,Mn=as.getUniforms(),cs=qe.uniforms;if(Ce.useProgram(as.program)&&(Rg=!0,fa=!0,Dh=!0),z.id!==I&&(I=z.id,fa=!0),Rg||x!==E){Mn.setValue(H,"projectionMatrix",E.projectionMatrix),Mn.setValue(H,"viewMatrix",E.matrixWorldInverse);let qn=Mn.map.cameraPosition;qn!==void 0&&qn.setValue(H,Be.setFromMatrixPosition(E.matrixWorld)),Pe.logarithmicDepthBuffer&&Mn.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mn.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,fa=!0,Dh=!0)}if(J.isSkinnedMesh){Mn.setOptional(H,J,"bindMatrix"),Mn.setOptional(H,J,"bindMatrixInverse");let qn=J.skeleton;qn&&(Pe.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),Mn.setValue(H,"boneTexture",qn.boneTexture,Fe),Mn.setValue(H,"boneTextureSize",qn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Nh=j.morphAttributes;if((Nh.position!==void 0||Nh.normal!==void 0||Nh.color!==void 0&&Pe.isWebGL2===!0)&&Se.update(J,j,as),(fa||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Mn.setValue(H,"receiveShadow",J.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(cs.envMap.value=Le,cs.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),fa&&(Mn.setValue(H,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Wt(cs,Dh),fe&&z.fog===!0&&te.refreshFogUniforms(cs,fe),te.refreshMaterialUniforms(cs,z,B,Q,me),jo.upload(H,qe.uniformsList,cs,Fe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(jo.upload(H,qe.uniformsList,cs,Fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mn.setValue(H,"center",J.center),Mn.setValue(H,"modelViewMatrix",J.modelViewMatrix),Mn.setValue(H,"normalMatrix",J.normalMatrix),Mn.setValue(H,"modelMatrix",J.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let qn=z.uniformsGroups;for(let Uh=0,ST=qn.length;Uh<ST;Uh++)if(Pe.isWebGL2){let Cg=qn[Uh];ke.update(Cg,as),ke.bind(Cg,as)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return as}function Wt(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function St(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,k,j){Ne.get(E.texture).__webglTexture=k,Ne.get(E.depthTexture).__webglTexture=j;let z=Ne.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){let j=Ne.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){w=E,M=k,R=j;let z=!0,J=null,fe=!1,ye=!1;if(E){let Le=Ne.get(E);Le.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(H.FRAMEBUFFER,null),z=!1):Le.__webglFramebuffer===void 0?Fe.setupRenderTarget(E):Le.__hasExternalTextures&&Fe.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ye=!0);let be=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[k])?J=be[k][j]:J=be[k],fe=!0):Pe.isWebGL2&&E.samples>0&&Fe.useMultisampledRTT(E)===!1?J=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?J=be[j]:J=be,b.copy(E.viewport),G.copy(E.scissor),W=E.scissorTest}else b.copy(A).multiplyScalar(B).floor(),G.copy(L).multiplyScalar(B).floor(),W=X;if(Ce.bindFramebuffer(H.FRAMEBUFFER,J)&&Pe.drawBuffers&&z&&Ce.drawBuffers(E,J),Ce.viewport(b),Ce.scissor(G),Ce.setScissorTest(W),fe){let Le=Ne.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,j)}else if(ye){let Le=Ne.get(E.texture),We=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,We)}I=-1},this.readRenderTargetPixels=function(E,k,j,z,J,fe,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Ce.bindFramebuffer(H.FRAMEBUFFER,Te);try{let Le=E.texture,We=Le.format,be=Le.type;if(We!==xi&&xe.convert(We)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=be===Mc&&(ge.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(be!==Jr&&xe.convert(be)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Mr&&(Pe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-z&&j>=0&&j<=E.height-J&&H.readPixels(k,j,z,J,xe.convert(We),xe.convert(be),fe)}finally{let Le=w!==null?Ne.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(E,k,j=0){let z=Math.pow(2,-j),J=Math.floor(k.image.width*z),fe=Math.floor(k.image.height*z);Fe.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,E.x,E.y,J,fe),Ce.unbindTexture()},this.copyTextureToTexture=function(E,k,j,z=0){let J=k.image.width,fe=k.image.height,ye=xe.convert(j.format),Te=xe.convert(j.type);Fe.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,E.x,E.y,J,fe,ye,Te,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,ye,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,z,E.x,E.y,ye,Te,k.image),z===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j,z,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=E.max.x-E.min.x+1,ye=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,Le=xe.convert(z.format),We=xe.convert(z.type),be;if(z.isData3DTexture)Fe.setTexture3D(z,0),be=H.TEXTURE_3D;else if(z.isDataArrayTexture)Fe.setTexture2DArray(z,0),be=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let Ae=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Mt=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),Sn=H.getParameter(H.UNPACK_SKIP_IMAGES),ht=j.isCompressedTexture?j.mipmaps[0]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ht.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ht.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,E.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,E.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(be,J,k.x,k.y,k.z,fe,ye,Te,Le,We,ht.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(be,J,k.x,k.y,k.z,fe,ye,Te,Le,ht.data)):H.texSubImage3D(be,J,k.x,k.y,k.z,fe,ye,Te,Le,We,ht),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mt),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Sn),J===0&&z.generateMipmaps&&H.generateMipmap(be),Ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){M=0,R=0,w=null,Ce.reset(),_e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Gs:tT}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gs?He:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Lm=class extends Ec{};Lm.prototype.isWebGL1Renderer=!0;var mh=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ac=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pm,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new O,Ys=class{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ww=new O,Tw=new mt,Ew=new mt,YB=new O,Aw=new Xe,Vo=new O,am=new ii,Rw=new Xe,cm=new ea,gh=class extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vo.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vo.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),am.copy(this.boundingSphere),am.applyMatrix4(i),e.ray.intersectsSphere(am)!==!1&&(Rw.copy(i).invert(),cm.copy(e.ray).applyMatrix4(Rw),!(this.boundingBox!==null&&cm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cm)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Tw.fromBufferAttribute(i.attributes.skinIndex,e),Ew.fromBufferAttribute(i.attributes.skinWeight,e),ww.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Ew.getComponent(s);if(o!==0){let a=Tw.getComponent(s);Aw.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(YB.copy(ww).applyMatrix4(Aw),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Rc=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Om=class extends Gt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=jt,u=jt,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cw=new Xe,jB=new Xe,ia=class{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:jB;Cw.multiplyMatrices(a,t[s]),Cw.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=iT(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Om(t,e,e,xi,Mr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Rc),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Cc=class extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Go=new Xe,Pw=new Xe,$u=[],Iw=new Mi,ZB=new Xe,hc=new cn,fc=new ii,_h=class extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ZB)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Go),Iw.copy(e.boundingBox).applyMatrix4(Go),this.boundingBox.union(Iw)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Go),fc.copy(e.boundingSphere).applyMatrix4(Go),this.boundingSphere.union(fc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(hc.geometry=this.geometry,hc.material=this.material,hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(n),e.ray.intersectsSphere(fc)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Go),Pw.multiplyMatrices(n,Go),hc.matrixWorld=Pw,hc.raycast(e,$u);for(let o=0,a=$u.length;o<a;o++){let c=$u[o];c.instanceId=s,c.object=this,t.push(c)}$u.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lw=new O,Ow=new O,Dw=new Xe,lm=new ea,Qu=new ii,ra=class extends yt{constructor(e=new yn,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lw.fromBufferAttribute(t,i-1),Ow.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lw.distanceTo(Ow);e.setAttribute("lineDistance",new Si(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qu.copy(n.boundingSphere),Qu.applyMatrix4(i),Qu.radius+=s,e.ray.intersectsSphere(Qu)===!1)return;Dw.copy(i).invert(),lm.copy(e.ray).applyMatrix4(Dw);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,u=new O,h=new O,f=new O,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let p=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=d){let M=_.getX(v),R=_.getX(v+1);if(l.fromBufferAttribute(m,M),u.fromBufferAttribute(m,R),lm.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=d){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),lm.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Nw=new O,Uw=new O,vh=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Nw.fromBufferAttribute(t,i),Uw.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nw.distanceTo(Uw);e.setAttribute("lineDistance",new Si(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yh=class extends ra{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ic=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fw=new Xe,Dm=new ea,eh=new ii,th=new O,xh=class extends yt{constructor(e=new yn,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eh.copy(n.boundingSphere),eh.applyMatrix4(i),eh.radius+=s,e.ray.intersectsSphere(eh)===!1)return;Fw.copy(i).invert(),Dm.copy(e.ray).applyMatrix4(Fw);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let m=l.getX(_);th.fromBufferAttribute(h,m),Bw(th,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)th.fromBufferAttribute(h,_),Bw(th,_,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bw(r,e,t,n,i,s,o){let a=Dm.distanceSqToPoint(r);if(a<t){let c=new O;Dm.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var sa=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nT,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},si=class extends sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Yr(r,e,t){return dT(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function nh(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function dT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function KB(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kw(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function pT(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nm=class extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bb,endingEnd:Bb}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kb:s=e,a=2*t-n;break;case zb:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kb:o=e,c=2*n-t;break;case zb:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,S=d*m-d*g;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+y*o[l+M]+v*o[c+M]+S*o[h+M];return s}},Um=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Fm=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nh(t,this.TimeBufferType),this.values=nh(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nh(e.times,Array),values:nh(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case kp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return kp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Yr(n,s,o),this.values=Yr(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&dT(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=Yr(this.times),t=Yr(this.values),n=this.getValueSize(),i=this.getInterpolation()===kp,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Yr(e,0,o),this.values=Yr(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Yr(this.times,0),t=Yr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Xs;var ns=class extends bi{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=$o;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends bi{};Sh.prototype.ValueTypeName="color";var Ar=class extends bi{};Ar.prototype.ValueTypeName="number";var Bm=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Bi.slerpFlat(s,0,o,l-a,o,l,c);return s}},$i=class extends bi{InterpolantFactoryMethodLinear(e){return new Bm(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=Xs;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends bi{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=$o;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends bi{};Rr.prototype.ValueTypeName="vector";var Mh=class{constructor(e,t=-1,n,i=AD){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($B(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=KB(c);c=kw(c,1,u),l=kw(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,_,g){if(d.length!==0){let m=[],p=[];pT(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(let g in d){let m=[],p=[];for(let y=0;y!==f[_].morphTargets.length;++y){let v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}i.push(new Ar(".morphTargetInfluence["+g+"]",m,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(Rr,d+".position",f,"pos",i),n($i,d+".quaternion",f,"rot",i),n(Rr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function JB(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return Sh;case"quaternion":return $i;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function $B(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=JB(r.type);if(r.times===void 0){let t=[],n=[];pT(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var oa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},km=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}},QB=new km,ki=class{constructor(e){this.manager=e!==void 0?e:QB,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr={},zm=class extends Error{constructor(e,t){super(e),this.response=t}},rs=class extends ki{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=oa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:n,onError:i});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=yr[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0,g=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{g+=S.byteLength;let M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,w=u.length;R<w;R++){let I=u[R];I.onProgress&&I.onProgress(M)}p.enqueue(S),y()}})}}});return new Response(m)}else throw new zm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{oa.add(e,l);let u=yr[e];delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=yr[e];if(u===void 0)throw this.manager.itemError(e),l;delete yr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hm=class extends ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=oa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=bc("img");function c(){u(),oa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var aa=class extends ki{constructor(e){super(e)}load(e,t,n,i){let s=new Gt,o=new Hm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ca=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},bh=class extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},um=new Xe,zw=new O,Hw=new O,Lc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zw.setFromMatrixPosition(e.matrixWorld),t.position.copy(zw),Hw.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hw),t.updateMatrixWorld(),um.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(um),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(um)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vm=class extends Lc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Qo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wh=class extends ca{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vw=new Xe,dc=new O,hm=new O,Gm=class extends Lc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dc.setFromMatrixPosition(e.matrixWorld),n.position.copy(dc),hm.copy(n.position),hm.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hm),n.updateMatrixWorld(),i.makeTranslation(-dc.x,-dc.y,-dc.z),Vw.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vw)}},Th=class extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wm=class extends Lc{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Wm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var la=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Eh=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=oa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){oa.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var Jm="\\[\\]\\.:\\/",ek=new RegExp("["+Jm+"]","g"),$m="[^"+Jm+"]",tk="[^"+Jm.replace("\\.","")+"]",nk=/((?:WC+[\/:])*)/.source.replace("WC",$m),ik=/(WCOD+)?/.source.replace("WCOD",tk),rk=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$m),sk=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$m),ok=new RegExp("^"+nk+ik+rk+sk+"$"),ak=["material","materials","bones","map"],qm=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ek,"")}static parseTrackName(e){let t=ok.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ak.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=qm;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x4=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xm}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xm);var Qm=new WeakMap,Ih=class extends ki{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let s=new rs(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,He).catch(n)}decodeDracoFile(e,t,n,i,s=Ft){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Qm.has(e)){let c=Qm.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[s]={resolve:l,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Qm.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new yn;e.index&&t.setIndex(new Dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new Dt(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==He)return;let n=new ze;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new rs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let s=lk.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){let o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function lk(){let r,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(u=>{let h=u.draco,f=new h.Decoder;try{let d=t(h,f,new Int8Array(c),l),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,c,l){let u=l.attributeIDs,h=l.attributeTypes,f,d,_=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let g={index:null,attributes:[]};for(let m in u){let p=self[h[m]],y,v;if(l.useUniqueIDs)v=u[m],y=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[m]]),v===-1)continue;y=a.GetAttribute(f,v)}let S=i(o,a,f,m,p,y);m==="color"&&(S.vertexColorSpace=l.vertexColorSpace),g.attributes.push(S)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,c){let u=c.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(c,h,f);let d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,c,l,u,h){let f=h.num_components(),_=c.num_points()*f,g=_*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,h,m,g,p);let y=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:l,array:y,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function eg(r,e){if(e===eT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Oc||e===Rh){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Oc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Lh=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ag(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new og(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new cg(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new rg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new yg(t)})}load(e,t,n,i){let s=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=la.extractUrlBase(e),this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new rs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===yT){try{o[ct.KHR_BINARY_GLTF]=new xg(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ag(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new sg;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new Sg(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new Mg;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new bg;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function uk(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rg=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ft);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new js(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Th(u),l.distance=h;break;case"spot":l=new wh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,os(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},sg=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,He))}return Promise.all(i)}},og=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},ag=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}},cg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},lg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,He)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},ug=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},hg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ft),Promise.all(s)}},fg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},dg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,He)),Promise.all(s)}},pg=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},mg=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},gg=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_g=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},vg=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},yg=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==wi.TRIANGLES&&l.mode!==wi.TRIANGLE_STRIP&&l.mode!==wi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let _ of h){let g=new Xe,m=new O,p=new Bi,y=new O(1,1,1),v=new _h(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&y.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,g.compose(m,p,y));for(let S in c)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);yt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},yT="glTF",Dc=12,mT={JSON:1313821514,BIN:5130562},xg=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Dc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Dc,s=new DataView(e,Dc),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===mT.JSON){let l=new Uint8Array(e,Dc+o,a);this.content=n.decode(l)}else if(c===mT.BIN){let l=Dc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Tg[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Tg[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=ha[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(let d in f.attributes){let _=f.attributes[d],g=c[d];g!==void 0&&(_.normalized=g)}h(f)},a,l)})})}},Mg=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bg=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},Oh=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,g=_-l,m=-2*d+3*f,p=d-f,y=1-m,v=p-f+h;for(let S=0;S!==a;S++){let M=o[g+S+a],R=o[g+S+c]*u,w=o[_+S+a],I=o[_+S]*u;s[S]=y*M+v*R+m*w+p*I}return s}},hk=new Bi,wg=class extends Oh{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return hk.fromArray(s).normalize().toArray(s),s}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gT={9728:jt,9729:Dn,9984:ih,9985:Ym,9986:mc,9987:$r},_T={33071:ni,33648:Sc,10497:qs},tg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fk={CUBICSPLINE:void 0,LINEAR:Xs,STEP:$o},ng={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dk(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),r.DefaultMaterial}function Zs(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function os(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pk(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function mk(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gk(r){let e,t=r.extensions&&r.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ig(t.attributes):e=r.indices+":"+ig(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ig(r.targets[n]);return e}function ig(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Eg(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _k(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var vk=new Xe,Ag=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uk,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&s<98?this.textureLoader=new aa(this.options.manager):this.textureLoader=new Eh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Zs(s,a,i),os(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(la.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=tg[i.type],a=ha[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Dt(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=tg[i.type],l=ha[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,m;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(y);v||(g=new l(a,p*d,i.count*d/u),v=new Ac(g,d/u),t.cache.add(y,v)),m=new Ys(v,c,f%d/u,_)}else a===null?g=new l(i.count*c):g=new l(a,f,i.count*c),m=new Dt(g,c,_);if(i.sparse!==void 0){let p=tg.SCALAR,y=ha[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,M=new y(o[1],v,i.sparse.count*p),R=new l(o[2],S,i.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,I=M.length;w<I;w++){let x=M[w];if(m.setX(x,R[w*c]),c>=2&&m.setY(x,R[w*c+1]),c>=3&&m.setZ(x,R[w*c+2]),c>=4&&m.setW(x,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=gT[f.magFilter]||Dn,u.minFilter=gT[f.minFilter]||$r,u.wrapS=_T[f.wrapS]||qs,u.wrapT=_T[f.wrapT]||qs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let m=new Gt(g);m.needsUpdate=!0,f(m)}),t.load(la.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||_k(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ic,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Pc,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return sa}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){let h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ft),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,He)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Gn);let u=s.alphaMode||ng.OPAQUE;if(u===ng.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ng.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ln&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ln&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ln){let h=s.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Ft)}return s.emissiveTexture!==void 0&&o!==ln&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,He)),Promise.all(l).then(function(){let h=new o(a);return s.name&&(h.name=s.name),os(h,s),t.associations.set(h,{materials:e}),s.extensions&&Zs(i,h,s),h})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return vT(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=gk(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=vT(new yn,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?dk(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){let g=u[d],m=o[d],p,y=l[d];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new gh(g,y):new cn(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wi.TRIANGLE_STRIP?p.geometry=eg(p.geometry,Rh):m.mode===wi.TRIANGLE_FAN&&(p.geometry=eg(p.geometry,Oc));else if(m.mode===wi.LINES)p=new vh(g,y);else if(m.mode===wi.LINE_STRIP)p=new ra(g,y);else if(m.mode===wi.LINE_LOOP)p=new yh(g,y);else if(m.mode===wi.POINTS)p=new xh(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mk(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),os(p,s),m.extensions&&Zs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Zs(i,h[0],s),h[0];let f=new Ki;s.extensions&&Zs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(rT.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new es(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),os(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new Xe;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ia(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,y=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let y=0,v=f.length;y<v;y++){let S=f[y],M=d[y],R=_[y],w=g[y],I=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let x=n._createAnimationTracks(S,M,R,w,I);if(x)for(let b=0;b<x.length;b++)p.push(x[b])}return new Mh(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,vk)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Rc:l.length>1?u=new Ki:l.length===1?u=l[0]:u=new yt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),os(u,s),s.extensions&&Zs(n,u,s),s.matrix!==void 0){let h=new Xe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ki;n.name&&(s.name=i.createUniqueName(n.name)),os(s,n),n.extensions&&Zs(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof ri||f instanceof Gt)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,c=[];ss[s.path]===ss.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ss[s.path]){case ss.weights:l=Ar;break;case ss.rotation:l=$i;break;case ss.position:case ss.scale:l=Rr;break;default:switch(n.itemSize){case 1:l=Ar;break;case 2:case 3:default:l=Rr;break}break}let u=i.interpolation!==void 0?fk[i.interpolation]:Xs,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let _=new l(c[f]+"."+ss[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Eg(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $i?wg:Oh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yk(r,e,t){let n=e.attributes,i=new Mi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let u=Eg(ha[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new O,c=new O;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let g=Eg(ha[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new ii;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function vT(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=Tg[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Vn.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vn.workingColorSpace}" not supported.`),os(r,e),yk(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pk(r,e.targets,t):r})}var Nc=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++r%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";r=u}var i=(performance||Date).now(),s=i,o=0,a=t(new Nc.Panel("FPS","#0ff","#002")),c=t(new Nc.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new Nc.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-i,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};Nc.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,h=3*o,f=15*o,d=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,c),m.fillStyle=e,m.fillText(r,l,u),m.fillRect(h,f,d,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h,f,d,_),{dom:g,update:function(p,y){n=Math.min(n,p),i=Math.max(i,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=e,m.fillText(s(p)+" "+r+" ("+s(n)+"-"+s(i)+")",l,u),m.drawImage(g,h+o,f,d-o,_,h,f,d-o,_),m.fillRect(h+d-o,f,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h+d-o,f,o,s((1-p/y)*_))}}};var xT=Nc;window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{Sk(),xk(),Mk()});function xk(){let r=document.querySelector(".portfolio-wrap"),e=document.querySelector(".btnnext-portfolio"),t=document.querySelector(".btnprev-portfolio");e.addEventListener("click",()=>{pt.to(r,{x:"-60vw",duration:.5,onComplete:()=>{e.style.display="none",t.style.display="block"}})}),t.addEventListener("click",()=>{pt.to(r,{x:0,duration:.5,onComplete:()=>{e.style.display="block",t.style.display="none"}})});let n=pt.matchMedia(),i=0,s=!1,o=document.querySelectorAll(".blockportfolio").length-2;n.add("(max-width: 991px)",()=>{function a(){i!==o&&(s||(s=!0,i++,pt.to(".portfolio-wrap",{x:()=>(-71*window.innerWidth-10)*i/100,duration:1,onComplete:()=>{s=!1}})))}function c(){i!==0&&(s||(s=!0,pt.to(".portfolio-wrap",{x:()=>-71*window.innerWidth*(i-1)/100,duration:1,onComplete:()=>{i--,s=!1}})))}bt.create({type:"touch",target:".column-wrap",onLeft:()=>a(),onRight:()=>c(),tolerance:10,preventDefault:!0})})}function Sk(){pt.registerPlugin(bt);let r=!1,e=document.querySelector(".wrapp"),t=pt.utils.toArray(".box"),n=o(t,{paused:!0,paddingRight:4,draggable:!0});function i(){r||(r=!0,n.next({duration:.4,ease:"power1.inOut"}))}function s(){r||(r=!0,n.previous({duration:.4,ease:"power1.inOut"}))}document.querySelector(".btnnext").addEventListener("click",i),document.querySelector(".btnprev").addEventListener("click",s),bt.create({type:"touch",target:".collection-list-wrapper-4.w-dyn-list",onLeft:()=>i(),onRight:()=>s(),tolerance:10,preventDefault:!0});function o(a,c){a=pt.utils.toArray(a),c=c||{};let{onChange:l}=c,u=0,h=pt.timeline({repeat:c.repeat,onUpdate:l&&function(){let N=h.closestIndex();u!==N&&(u=N,l(a[N],N))},paused:c.paused,defaults:{ease:"none"},onReverseComplete:()=>{h.totalTime(h.rawTime()+h.duration()*100)}}),{length:f}=a,d=a[0].offsetLeft,_=[],g=[],m=[],p=[],y=0,v=!1,{center:S}=c,M=(c.speed||1)*100,R=c.snap===!1?N=>N:pt.utils.snap(c.snap||1),w=0,I=S===!0?a[0].parentNode:pt.utils.toArray(S)[0]||a[0].parentNode,x,b=()=>a[f-1].offsetLeft+p[f-1]/100*g[f-1]-d+m[0]+a[f-1].offsetWidth*pt.getProperty(a[f-1],"scaleX")+(parseFloat(c.paddingRight)||0),G=()=>{let N=I.getBoundingClientRect(),A;a.forEach((L,X)=>{g[X]=parseFloat(pt.getProperty(L,"width","px")),p[X]=R(parseFloat(pt.getProperty(L,"x","px"))/g[X]*100+pt.getProperty(L,"xPercent")),A=L.getBoundingClientRect(),m[X]=A.left-(X?N.right:N.left),N=A}),pt.set(a,{xPercent:L=>p[L]}),x=b()},W,D=()=>{w=S?h.duration()*(I.offsetWidth/2)/x:0,S&&_.forEach((N,A)=>{_[A]=W(h.labels["label"+A]+h.duration()*g[A]/2/x-w)})},U=(N,A,L)=>{let X=N.length,oe=1e10,se=0,ie;for(;X--;)ie=Math.abs(N[X]-A),ie>L/2&&(ie=L-ie),ie<oe&&(oe=ie,se=X);return se},F=()=>{let N,A,L,X,oe;for(h.clear(),N=0;N<f;N++)A=a[N],L=p[N]/100*g[N],X=A.offsetLeft+L-d+m[0],oe=X+g[N]*pt.getProperty(A,"scaleX"),h.to(A,{xPercent:R((L-oe)/g[N]*100),duration:oe/M},0).fromTo(A,{xPercent:R((L-oe+x)/g[N]*100)},{xPercent:p[N],duration:(L-oe+x-L)/M,immediateRender:!1},oe/M).add("label"+N,X/M),_[N]=X/M;W=pt.utils.wrap(0,h.duration())},Q=N=>{let A=h.progress();h.progress(0,!0),G(),N&&F(),D(),N&&h.draggable?h.time(_[y],!0):h.progress(A,!0)},B;pt.set(a,{x:0}),G(),F(),D(),window.addEventListener("resize",()=>Q(!0));function q(N,A){setTimeout(()=>{r=!1},500),A=A||{},Math.abs(N-y)>f/2&&(N+=N>y?-f:f);let L=pt.utils.wrap(0,f,N),X=_[L];return X>h.time()!=N>y&&N!==y&&(X+=h.duration()*(N>y?1:-1)),(X<0||X>h.duration())&&(A.modifiers={time:W}),y=L,A.overwrite=!0,pt.killTweensOf(B),A.duration===0?h.time(W(X)):h.tweenTo(X,A)}return h.toIndex=(N,A)=>q(N,A),h.closestIndex=N=>{let A=U(_,h.time(),h.duration());return N&&(y=A,v=!1),A},h.current=()=>v?h.closestIndex(!0):y,h.next=N=>q(h.current()+1,N),h.previous=N=>q(h.current()-1,N),h.times=_,h.progress(1,!0).progress(0,!0),c.reversed&&(h.vars.onReverseComplete(),h.reverse()),h}}function Mk(){pt.registerPlugin(je);let r,e,t,n,i=[],s,o,a,c,l=null,u=0,h=750,f=25,d=0,_=0,g,m;a={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},MobileWidth:function(){return window.innerWidth<992},any:function(){return a.MobileWidth()||a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}},a.any()?c=!1:c=!0;let p=c?.18:.35,y=window.innerWidth/window.innerHeight;window.scrollTo(0,0),v();function v(){t=new mh,c?t.position.set(0,0,0):t.position.set(.1,-.1,0),e=new es(p*y/-2,p*y/2,p/2,p/-2,.1,100),e.position.z=3;let x=new aa,b=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652d83c05a83161b15eea379_image1.jpg");b.colorSpace=He,b.flipY=!1;let G=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e65903d2acc91d9d64c0c_cylender_bg.png");G.colorSpace=He,G.flipY=!1;let W=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e6880ae6bc5934492d30e_cylynder_alpha.jpg");W.colorSpace=He,W.flipY=!1;let D=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e70e37de52b4add32a442_image2.png");D.colorSpace=He,D.flipY=!1;let U=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e85a095eba48fa03bfbb4_image3%401%2C5x.jpg");U.colorSpace=He,U.flipY=!1;let F=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319bf1a64f5e5f8bc368b6_illu_portfolio%401%2C5x.jpg");F.colorSpace=He;let Q=x.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319e9a7dccba83839abd0c_illu_news%401%2C5x.jpg");Q.colorSpace=He;let B=x.load("https://uploads-ssl.webflow.com/64d1b088ae1023bd1808920b/64d3c2368c7c50fd2896c33e_2.jpg");B.mapping=xc,B.colorSpace=He,r=new xT;let q=new Tr(5,32,32),N=new ln({side:Gn,color:15921906}),A=new cn(q,N);t.add(A);let L=new Lh,X=new Ih;X.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),L.setDRACOLoader(X),L.load("https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e6a923d2acc91d9dbaa4f_model29.glb.txt",function(ie){t.add(ie.scene);let me=new si({sheenRoughness:.5,reflectivity:.5,roughness:.1,transmission:1.03,thickness:.086,ior:1.23,clearcoat:1,envMap:B,envMapIntensity:1.5});ie.scene.traverse(function(ue){if(ue.name==="cameraBlender"&&(l=t.getObjectByName("cameraBlender"),e.position.x=l.position.x,e.position.y=l.position.y,e.position.z=l.position.z,e.rotation.x=l.rotation.x,e.rotation.y=l.rotation.y,e.rotation.z=l.rotation.z,e.updateProjectionMatrix(),pt.to(e.position,{scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=500%",scrub:!0,onUpdate:()=>{e.updateProjectionMatrix()}},y:()=>c?-.92:-1.75,ease:"none"})),ue.name==="bg_full"){let ee=t.getObjectByName("bg_full");ee.visible=!1}if(ue.name==="glassThing"){g=t.getObjectByName("glassThing"),g.material=me,g.position.x=-.13,g.material.side=Gn,pt.to(g.rotation,{scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=150%",scrub:!0,onUpdate:()=>{g.rotation.z-=c?.04:.16}}}),pt.to(g.rotation,{scrollTrigger:{trigger:".start2",start:"top top",end:()=>"+=350%",scrub:!0,onUpdate:()=>{g.rotation.z-=c?.03:.12}}});let ee=pt.timeline({scrollTrigger:{trigger:".wrapscroll",start:"top top",end:()=>"+=500%",scrub:!0,onUpdate:()=>{g.rotation.z-=.02}}});c?(ee.to(g.position,{x:-.05,y:-.19,duration:.7,ease:"none"}),ee.to(g.scale,{x:.6,y:.6,z:.6,duration:1,ease:"none"},"<"),ee.set(g.position,{x:-.12,y:-.55},"+=0.6"),ee.set(g.scale,{x:.8,y:.8,z:.8},"<+=0.6>"),ee.to(g.position,{x:-.03,y:-.7,duration:1,ease:"none"},"+=0.8"),ee.to(g.scale,{x:1,y:1,z:1,duration:1,ease:"none"},"<"),ee.to(g.position,{x:-.01,y:-.95,duration:1,ease:"none"})):(ee.to(g.position,{x:-.1,y:-.35,duration:3,ease:"none"}),ee.to(g.scale,{x:.6,y:.6,z:.6,duration:1,ease:"none"},"<"),ee.set(g.position,{x:-.14,y:-1.26},"+=5"),ee.to(g.position,{x:-.1,y:-1.5,duration:1.4,ease:"none"},"<+=5"),ee.to(g.position,{x:-.1,y:-1.75,duration:1,ease:"none"}))}if(ue.name==="illu_arrows"){let ee=t.getObjectByName("illu_arrows");ee.visible=!1}if(ue.name==="top_image1"){let ee=t.getObjectByName("top_image1");ee.material=new ln,ee.scale.multiplyScalar(c?.85:1),ee.position.y=.015,ee.material.map=b}if(ue.name==="illu_arrows1"){let ee=t.getObjectByName("illu_arrows1");ee.position.x=c?-.025:-.05,ee.position.y=c?-.225:-.37,ee.scale.multiplyScalar(c?.85:1)}if(ue.name==="top_image2"){let ee=t.getObjectByName("top_image2");ee.position.y=c?-.18:-.37,ee.position.x=c?-.05:-.1,ee.scale.multiplyScalar(c?.85:1),ee.material=new ln,ee.material.map=D}if(ue.name==="Cylinder"&&(m=t.getObjectByName("Cylinder"),m.material=me,m.position.y=c?-.37:-.7,m.position.x=c?-.055:-.08,m.scale.multiplyScalar(c?.7:.8)),ue.name==="process_texts"){let ee=t.getObjectByName("process_texts");ee.position.y=c?-.37:-.7,ee.position.x=c?-.07:-.1,ee.scale.multiplyScalar(c?.7:.8)}if(ue.name==="process"){let ee=t.getObjectByName("process");ee.position.y=c?-.37:-.7,ee.position.x=c?-.055:-.08,ee.scale.multiplyScalar(c?.7:.8)}if(ue.name==="top_image3"){let ee=t.getObjectByName("top_image3");ee.position.y=c?-.575:-1.27,ee.position.x=c?-.14:-.17,ee.scale.multiplyScalar(c?.6:.8),ee.material=new ln,ee.material.map=U}if(ue.name==="illu_arrows2"){let ee=t.getObjectByName("illu_arrows2");ee.position.y=c?-.53:-1.25,ee.position.x=c?-.09:-.1,ee.visible=!1}if(ue.name==="top_image4"){let ee=t.getObjectByName("top_image4");ee.position.y=c?-.73:-1.45,ee.position.x=c?-.0054:-.1,ee.scale.x=.3,ee.material=new ln,ee.material.map=F}if(ue.name==="top_image5"){let ee=t.getObjectByName("top_image5");ee.position.y=c?-.95:-1.75,ee.position.x=c?-.0054:-.1,ee.material=new ln,ee.material.map=Q}}),I()},function(ie){_=ie.loaded/3e6*100,_>99.99},function(ie){});let oe=document.querySelector('[data-3d="c"]');n=new Ec({antialias:!0,powerPreference:"high-performance"}),n.outputColorSpace=He,n.setClearAlpha(0),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),oe.appendChild(n.domElement);let se=new bh(16777215,526344,2.2);t.add(se),s=new js(16777215,1),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.far=15,s.shadow.camera.left=-7,s.shadow.camera.top=7,s.shadow.camera.right=7,s.shadow.camera.bottom=-7,s.position.set(.2,.1,-.5),t.add(s),o=new js(16777215,1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.camera.far=15,o.shadow.camera.left=-7,o.shadow.camera.top=7,o.shadow.camera.right=7,o.shadow.camera.bottom=-7,o.position.set(-.4,.1,-.5),t.add(o),c===!0&&(document.onmousemove=function(ie){let me=window.innerWidth*.5,ue=window.innerHeight*.5;g&&(g.rotation.y=(ie.clientX-me)/me*.3,g.rotation.x=(ie.clientY-ue)/ue*.2)}),window.addEventListener("resize",w,!1),M(),S()}function S(){je.scrollerProxy(".wrapscroll",{scrollTop(b){return arguments.length&&(d.scrollTop=b),d.scrollTop}}),d.addListener(je.update);let x=document.querySelector(".wrapscroll");je.defaults({scroller:x})}function M(){class x extends Ru{transformDelta(G){return this.options.open?{x:0,y:0}:G}}Fh(x,"pluginName","modal"),Fh(x,"defaultOptions",{open:!1}),Op.use(x),d=Op.init(document.querySelector(".wrapscroll"),{continuousScrolling:!1,alwaysShowTracks:!0,damping:c?.05:.1,renderByPixels:!("ontouchstart"in document)})}function R(){let x=document.querySelector(".menu1"),b=document.querySelector(".menu2"),G=document.querySelector(".menu3"),W=document.querySelector(".menu-button.w-nav-button"),D=pt.timeline({paused:!0});D.to(x,{rotate:45,y:0,background:"white"}).to(b,{rotate:-45,y:0,background:"white"},0).to(G,{y:4,opacity:0,background:"white"},0).reverse(),W.addEventListener("click",U=>{U.stopPropagation(),setTimeout(()=>{document.querySelectorAll(".w--nav-link-open").forEach(Q=>{Q.addEventListener("click",()=>{D.reverse(),d.updatePluginOptions("modal",{open:!1})})})},300),D.reversed(!D.reversed()),W.classList.contains("w--open")?d.updatePluginOptions("modal",{open:!1}):d.updatePluginOptions("modal",{open:!0})})}R();function w(){console.log("resize");let x=window.innerWidth/window.innerHeight;e.left=p*x/-2,e.right=p*x/2,e.top=p/2,e.bottom=-p/2,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function I(){requestAnimationFrame(I),g&&(g.rotation.z+=c?.002:.01),m&&(m.rotation.x-=c?.01:.05),n.render(t,e),r.update()}}})();
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
